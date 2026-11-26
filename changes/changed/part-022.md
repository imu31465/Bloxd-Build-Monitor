# Changed — Bundle Modifications Report (Part 022 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `22 / 116` (**463** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 021](part-021.md) · [Part 023 →](part-023.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/163.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/163.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838)

#### 5. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L27` → after: `L15-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L15-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/163.js#L15-L53) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/163.js#L27)

```diff
-         return await (0, YV.d)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, YV.d)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new UV
+         let HH;
+         let BH;
+         return window.GD_OPTIONS = {
+           gameId: "b35b336d21654aa5a378480d13ed7225",
+           onEvent: LH => {
+             const AH = () => {
+               BH && (window.adCompleteSoResume(), BH = !1), HH && (HH(), HH = null)
+             };
+             switch (LH.name) {
+               case "SDK_GAME_START":
+                 console.log("Gamedis SDK_GAME_START"), BH = !1, HH ? (HH(), HH = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
+                 break;
+               case "SDK_GAME_PAUSE":
+                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
+                   preventMovement: !0
+                 }), BH = !0;
+ ... (23 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L30-L36` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/163.js#L56) · [Before (L30-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/163.js#L30-L36)

```diff
-         this.adBreakStartCallback = () => {
-           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
-             preventMovement: !0
-           })
-         }, this.adBreakCompleteCallback = () => {
-           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), VV()
-         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
+         this.setOnEndCb(HH), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
```

#### 7. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L38-L43` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/163.js#L58-L59) · [Before (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/163.js#L38-L43)

```diff
-       onGameplayStart() {
-         try {
-           window.parent.cmgGameEvent("start")
-         } catch {
-           console.log("Couldn't access cmgGameEvent on parent")
-         }
+       willRequestBanner() {
+         return void 0 !== window.gdsdk.AdType.Display
```

#### 8. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L45-L51` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/163.js#L61-L64) · [Before (L45-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/163.js#L45-L51)

```diff
-       onGameplayStop() {}
-       onGameEntered() {
-         try {
-           window.parent.cmgGameEvent("start")
-         } catch {
-           console.log("Couldn't access cmgGameEvent on parent")
-         }
+       renderBanner(HH) {
+         console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(HH.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, HH.divId), window.gdsdk.showAd(window.gdsdk. … [truncated]
+           containerId: HH.divId
+         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((HH => console.info(HH)))) : console.error("window.gdsdk.AdType.Display is undefined")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/164.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/164.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711)

#### 1. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/164.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/164.js#L4)

```diff
-   7293: (VV, eV, xV) => {
+   7274: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/164.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/164.js#L6)

```diff
-       AdMobSdkAdaptor: () => wV
+       CoolMathGamesSdkAdaptor: () => SH
```

#### 3. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L8-L37` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/164.js#L8-L16) · [Before (L8-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/164.js#L8-L37)

```diff
-     var JV = xV(1389),
-       YV = xV(27),
-       UV = xV(1781),
-       yV = xV(138),
-       pV = xV(3919),
-       QV = xV(375);
-     const nV = {
-       mobileAndroid: {
-         banners: {
-           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
-           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
-           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
-           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
-           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
-           square_1: "ca-app-pub-5991928098122027/6381115670"
-         },
- ... (14 more removed lines; see GitHub link above)
+     var AH = LH(1289),
+       rH = LH(1110);
+     class SH extends AH.b {
+       constructor() {
+         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
+           console.error("adBreakStartCallback not set")
+         }, this.adBreakCompleteCallback = () => {
+           console.error("adBreakCompleteCallback not set")
+         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
```

#### 4. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L39-L50` → after: `L18-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L18-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/164.js#L18-L24) · [Before (L39-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/164.js#L39-L50)

```diff
-     };
-     class wV extends JV.b {
-       constructor(VV) {
-         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = nV[VV], UV.b.on("ads.bannerStatus", (VV => {
-           let {
-             placementId: eV,
-             shown: xV,
-             error: JV
-           } = VV;
-           const YV = !this.bannerFirstResponseSeen.has(eV);
-           this.bannerFirstResponseSeen.add(eV), YV ? xV ? console.log(`AD ${eV}: AdMob banner loaded`) : console.warn(`AD ${eV}: AdMob banner failed to load: ${JV}`) : xV || console.warn(`AD ${eV}: AdMob banner refresh failed: ${JV}`)
-         }))
+       doAdBreakStart() {
+         this.adBreakStartCallback();
+         const HH = document.getElementsByClassName("ads-popup");
+         for (const BH of HH) BH instanceof HTMLElement && (BH.style.position = "fixed")
+       }
+       doAdBreakComplete() {
+         this.adBreakCompleteCallback()
```

#### 5. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L53-L76` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/164.js#L27) · [Before (L53-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/164.js#L53-L76)

```diff
-         const VV = "mobileIos" === yV.siteUsed ? "mobileIos" : "mobileAndroid";
-         return console.log(`AD: AdMobSDK initialised for ${VV}`), new wV(VV)
-       }
-       muteGameDuring(VV) {
-         return this.fullScreenAdsInFlight++, YV.b.set({
-           soundOnFromAd: !1
-         }), VV.finally((() => {
-           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && YV.b.set({
-             soundOnFromAd: !0
-           })
-         }))
-       }
-       playRewarded(VV, eV) {
-         const xV = this.adUnitIds.rewarded;
-         this.muteGameDuring(UV.b.request("ads.showRewarded", {
-           placementId: xV
- ... (8 more removed lines; see GitHub link above)
+         return await (0, rH.e)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, rH.e)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new SH
```

#### 6. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L79-L86` → after: `L30-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L30-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/164.js#L30-L36) · [Before (L79-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/164.js#L79-L86)

```diff
-         const xV = this.adUnitIds.interstitial;
-         this.muteGameDuring(UV.b.request("ads.showInterstitial", {
-           placementId: xV
-         })).then((() => {
-           VV()
-         }), (eV => {
-           console.warn(`AD ${xV}: AdMob interstitial failed:`, eV), VV()
-         }))
+         this.adBreakStartCallback = () => {
+           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
+             preventMovement: !0
+           })
+         }, this.adBreakCompleteCallback = () => {
+           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), HH()
+         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
```

#### 7. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L88-L107` → after: `L38-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/164.js#L38-L43) · [Before (L88-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/164.js#L88-L107)

```diff
-       renderBanner(VV) {
-         const eV = (0, pV.e)(VV),
-           xV = this.adUnitIds.banners[eV];
-         if (void 0 === xV) return;
-         const JV = document.getElementById(VV.divId);
-         if (!JV) return void console.warn(`AD ${eV}: AdMob renderBanner called but div ${VV.divId} is not in DOM`);
-         const YV = JV.getBoundingClientRect(),
-           yV = window.innerWidth,
-           nV = window.innerHeight;
-         if (0 === yV || 0 === nV) return void console.warn(`AD ${eV}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
-         const wV = {
-           x1: QV.b.clamp(YV.left / yV * 100, 0, 100),
-           y1: QV.b.clamp(YV.top / nV * 100, 0, 100),
-           x2: QV.b.clamp(YV.right / yV * 100, 0, 100),
-           y2: QV.b.clamp(YV.bottom / nV * 100, 0, 100)
-         };
- ... (4 more removed lines; see GitHub link above)
+       onGameplayStart() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 8. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L109-L114` → after: `L45-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L45-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/164.js#L45-L51) · [Before (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/164.js#L109-L114)

```diff
-       clearBanner(VV) {
-         const eV = (0, pV.e)(VV),
-           xV = this.bannerPlacementByBloxdId.get(eV);
-         void 0 !== xV && (this.bannerPlacementByBloxdId.delete(eV), this.bannerFirstResponseSeen.delete(xV), console.log(`AD ${eV}: AdMob clearBanner placementId=${xV}`), UV.b.emit("ads.hideBanner", {
-           placementId: xV
-         }))
+       onGameplayStop() {}
+       onGameEntered() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 9. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L116-L118` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/164.js#L53) · [Before (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/164.js#L116-L118)

```diff
-       canShowBloxdAd(VV) {
-         return !1
-       }
+       onGameExited() {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/165.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/165.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c)

#### 1. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/165.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/165.js#L4-L6)

```diff
-   7301: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => nV
+   7278: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       AdMobSdkAdaptor: () => XH
```

#### 2. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L8-L53` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/165.js#L8-L40) · [Before (L8-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/165.js#L8-L53)

```diff
-     var JV = xV(3245);
-     const YV = [1, 8, 9],
-       UV = 5,
-       yV = 200,
-       pV = 150;
- 
-     function QV(VV, eV) {
-       let xV = 0;
-       VV("addEventListener", 2, ((VV, yV) => {
-         if (!yV) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         const pV = function(VV) {
-           const eV = "useractioncomplete" === VV.eventStatus || "tcloaded" === VV.eventStatus && !!VV.tcString;
-           return VV.gdprApplies && eV ? YV.every((eV => !0 === VV.purpose.consents[eV])) : null
-         }(VV);
-         if (null === pV) return;
-         const QV = ++xV;
- ... (30 more removed lines; see GitHub link above)
+     var AH = LH(1289),
+       rH = LH(15),
+       SH = LH(1714),
+       hH = LH(120),
+       tH = LH(3870),
+       zH = LH(317),
+       CH = LH(1769);
+     const EH = {
+       mobileAndroid: {
+         banners: {
+           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
+           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
+           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
+           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
+           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
+           square_1: "ca-app-pub-5991928098122027/6381115670"
+ ... (17 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L55-L56` → after: `L42-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L42-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/165.js#L42-L51) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/165.js#L55-L56)

```diff
-       constructor() {
-         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = QV
+       constructor(HH) {
+         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = EH[HH], SH.b.on("ads.bannerStatus", (HH => {
+           let {
+             placementId: BH,
+             shown: LH,
+             error: AH
+           } = HH;
+           const rH = !this.bannerFirstResponseSeen.has(BH);
+           this.bannerFirstResponseSeen.add(BH), rH ? ((0, CH.i)(LH), LH ? console.log(`AD ${BH}: AdMob banner loaded`) : console.warn(`AD ${BH}: AdMob banner failed to load: ${AH}`)) : LH || console.warn(`AD ${BH}: AdMob banner refresh failed: ${AH}`)
+         }))
```

#### 4. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L59` → after: `L54-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L54-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/165.js#L54-L64) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/165.js#L59)

```diff
-         return (0, UV.canonicaliseZonesWhenIdle)(QV), (0, pV.setUpGtag)(), await (0, YV.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, yV.e)("inMobi"), new nV
+         const HH = "mobileIos" === hH.siteUsed ? "mobileIos" : "mobileAndroid";
+         return console.log(`AD: AdMobSDK initialised for ${HH}`), new XH(HH)
+       }
+       muteGameDuring(HH) {
+         return this.fullScreenAdsInFlight++, rH.c.set({
+           soundOnFromAd: !1
+         }), HH.finally((() => {
+           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && rH.c.set({
+             soundOnFromAd: !0
+           })
+         }))
```

#### 5. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L62-L72` → after: `L67-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L67-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/165.js#L67-L77) · [Before (L62-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/165.js#L62-L72)

```diff
-         if ("undefined" !== typeof window.aiptag.adplayer) {
-           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
-           const xV = "video_reward";
-           window.aiptag.cmd.player.push((function() {
-             window.aiptag.adplayer.startPreRoll({
-               alias: xV
-             })
-           })), window.adStartSoPause(VV, {
-             onFailCb: eV
-           })
-         } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), eV()
+         const LH = this.adUnitIds.rewarded;
+         this.muteGameDuring(SH.b.request("ads.showRewarded", {
+           placementId: LH
+         })).then((LH => {
+           let {
+             rewarded: AH
+           } = LH;
+           AH ? HH() : BH()
+         }), (HH => {
+           console.warn(`AD ${LH}: AdMob rewarded failed:`, HH), BH()
+         }))
```

#### 6. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L75-L79` → after: `L80-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L80-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/165.js#L80-L87) · [Before (L75-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/165.js#L75-L79)

```diff
-         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (eV ? ` (alias: ${eV})` : "")), window.aiptag.cmd.player.push((function() {
-           window.aiptag.adplayer.startPreRoll({
-             alias: eV
-           })
-         })), window.adStartSoPause(VV)) : (VV(), console.error("AIP ad lib not loaded, no ad playing"))
+         const LH = this.adUnitIds.interstitial;
+         this.muteGameDuring(SH.b.request("ads.showInterstitial", {
+           placementId: LH
+         })).then((() => {
+           HH()
+         }), (BH => {
+           console.warn(`AD ${LH}: AdMob interstitial failed:`, BH), HH()
+         }))
```

#### 7. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L82-L92` → after: `L90-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L90-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/165.js#L90-L108) · [Before (L82-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/165.js#L82-L92)

```diff
-         if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
-         const {
-           divId: eV,
-           alias: xV
-         } = VV;
-         window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.display({
-             adUnitName: eV,
-             alias: xV
-           })
-         })), console.log("AD: Requested aip banner", document.getElementById(VV.divId), xV ? `(alias: ${xV})` : "")
+         const BH = (0, tH.c)(HH),
+           LH = this.adUnitIds.banners[BH];
+         if (void 0 === LH) return;
+         const AH = document.getElementById(HH.divId);
+         if (!AH) return void console.warn(`AD ${BH}: AdMob renderBanner called but div ${HH.divId} is not in DOM`);
+         const rH = AH.getBoundingClientRect(),
+           hH = window.innerWidth,
+           EH = window.innerHeight;
+         if (0 === hH || 0 === EH) return void console.warn(`AD ${BH}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
+         const XH = {
+           x1: zH.d.clamp(rH.left / hH * 100, 0, 100),
+           y1: zH.d.clamp(rH.top / EH * 100, 0, 100),
+           x2: zH.d.clamp(rH.right / hH * 100, 0, 100),
+           y2: zH.d.clamp(rH.bottom / EH * 100, 0, 100)
+         };
+         this.bannerPlacementByBloxdId.set(BH, LH), console.log(`AD ${BH}: AdMob renderBanner placementId=${LH} box=`, XH), (0, CH.h)("site_sdk"), SH.b.emit("ads.showBanner", {
+ ... (3 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L95-L101` → after: `L111-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L111-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/165.js#L111-L114) · [Before (L95-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/165.js#L95-L101)

```diff
-         "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.destroy(VV.divId)
-         })), console.log(`AD: Clearing aip banner ad ${VV.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
-       }
-       setBannerAutoRefreshEnabled(VV, eV) {
-         window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.setAutoRefresh(VV.divId, eV)
+         const BH = (0, tH.c)(HH),
+           LH = this.bannerPlacementByBloxdId.get(BH);
+         void 0 !== LH && (this.bannerPlacementByBloxdId.delete(BH), this.bannerFirstResponseSeen.delete(LH), console.log(`AD ${BH}: AdMob clearBanner placementId=${LH}`), SH.b.emit("ads.hideBanner", {
+           placementId: LH
```

#### 9. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L104-L109` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/165.js#L117-L118) · [Before (L104-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/165.js#L104-L109)

```diff
-       newPageSession() {
-         console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
-           window.__VM.push((function(VV, eV) {
-             eV.Instances.pageManager.newPageSession(!1)
-           }))
-         }))
+       canShowBloxdAd(HH) {
+         return !1
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/166.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/166.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122)

#### 1. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/166.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/166.js#L4-L6)

```diff
-   7301: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => nV
+   7282: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       AdinPlaySdkAdaptor: () => EH
```

#### 2. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L8-L12` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/166.js#L8-L12) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/166.js#L8-L12)

```diff
-     var JV = xV(3245);
-     const YV = [1, 8, 9],
-       UV = 5,
-       yV = 200,
-       pV = 150;
+     var AH = LH(1289),
+       rH = LH(1110),
+       SH = LH(202),
+       hH = LH(3209),
+       tH = LH(3218);
```

#### 3. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/166.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/166.js#L14)

```diff
-     function QV(VV, eV) {
+     function zH(HH) {
```

#### 4. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L20` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/166.js#L21) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/166.js#L20)

```diff
-           return VV.gdprApplies && eV ? YV.every((eV => !0 === VV.purpose.consents[eV])) : null
+           return HH.gdprApplies && BH ? tH.e.every((BH => !0 === HH.purpose.consents[BH])) : null
```

#### 5. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/166.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/166.js#L29)

```diff
-           QV === xV && (0, JV.updateAnalyticsConsent)(eV && !0 === (null === (YV = VV.nonIabVendorConsents) || void 0 === YV ? void 0 : YV[UV]))
+           rH === BH && (0, hH.updateAnalyticsConsent)(LH && !0 === (null === (AH = HH.nonIabVendorConsents) || void 0 === AH ? void 0 : AH[5]))
```

#### 6. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L33-L52` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/166.js#L33) · [Before (L33-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/166.js#L33-L52)

```diff
- 
-     function nV(VV) {
-       if (window.__tcfapi) return void QV(window.__tcfapi, VV);
-       let eV = 0;
-       const xV = window.setInterval((() => {
-         eV++;
-         const JV = window.__tcfapi;
-         JV ? (window.clearInterval(xV), QV(JV, VV)) : eV >= pV && window.clearInterval(xV)
-       }), yV)
-     }
-   },
-   7311: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       NitroSdkAdaptor: () => QV
-     });
-     var JV = xV(1389),
- ... (4 more removed lines; see GitHub link above)
+     const CH = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
```

#### 7. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L55` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/166.js#L36) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/166.js#L55)

```diff
-         super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
+         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = CH
```

#### 8. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L58-L76` → after: `L39-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L39-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/166.js#L39-L63) · [Before (L58-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/166.js#L58-L76)

```diff
-         return window.nitroAds = window.nitroAds || {
-           createAd: function() {
-             for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
-             return new Promise((VV => {
-               window.nitroAds.queue.push(["createAd", eV, VV])
-             }))
-           },
-           addUserToken: function() {
-             for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
-             window.nitroAds.queue.push(["addUserToken", eV])
-           },
-           queue: []
-         }, document.addEventListener("nitroAds.rendered", (VV => {
-           var eV, xV, JV;
-           const YV = document.getElementById(null !== (eV = null === (xV = VV.detail) || void 0 === xV || null === (JV = xV.adInfo) || void 0 === JV ? void 0 : JV.adUnitCode) && void 0 !== eV ? eV : "");
-           null !== YV && void 0 !== YV && YV.classList.contains("NitroBanner") && YV.classList.toggle("NitroBannerUnfilled", "blank" === VV.detail.type)
- ... (3 more removed lines; see GitHub link above)
+         return (0, SH.canonicaliseZonesWhenIdle)(CH), (0, hH.setUpGtag)({
+             tcfCmp: !0
+           }), await (0, rH.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
+           function() {
+             if (window.__tcfapi) return void zH(window.__tcfapi);
+             let HH = 0;
+             const BH = window.setInterval((() => {
+               HH++;
+               const LH = window.__tcfapi;
+               LH ? (window.clearInterval(BH), zH(LH)) : HH >= 150 && window.clearInterval(BH)
+             }), 200)
+           }(), new EH
+       }
+       playRewarded(HH, BH) {
+         if ("undefined" !== typeof window.aiptag.adplayer) {
+           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
+ ... (9 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L79` → after: `L66-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L66-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/166.js#L66-L70) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/166.js#L79)

```diff
-         this.showVideoAd(VV, VV)
+         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (BH ? ` (alias: ${BH})` : "")), window.aiptag.cmd.player.push((function() {
+           window.aiptag.adplayer.startPreRoll({
+             alias: BH
+           })
+         })), window.adStartSoPause(HH)) : (HH(), console.error("AIP ad lib not loaded, no ad playing"))
```

#### 10. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L81-L150` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/166.js#L72-L73) · [Before (L81-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/166.js#L81-L150)

```diff
-       playRewarded(VV, eV) {
-         this.showVideoAd(VV, eV)
-       }
-       showVideoAd(VV, eV) {
-         if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void eV();
-         const xV = document.getElementById("GenericVideoWrapper"),
-           JV = document.getElementById("GenericVideoInner");
-         if (null === xV || null === JV) return void eV();
-         this.videoInFlight = !0;
-         let YV = !1;
-         const UV = document.createElement("div");
-         UV.id = pV, UV.className = "NitroVideoPlacement";
-         const yV = yV => {
-           if (!YV) {
-             YV = !0, clearTimeout(BV), clearInterval(EV), document.removeEventListener("nitroAds.adResult", wV), document.removeEventListener("nitroAds.rendered", ZV), document.removeEventListener("nitroAds.complete", vV);
-             try {
- ... (54 more removed lines; see GitHub link above)
+       willRequestBanner() {
+         return "undefined" !== typeof window.aiptag.adplayer
```

#### 11. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L155-L167` → after: `L79-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L79-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/166.js#L79-L86) · [Before (L155-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/166.js#L155-L167)

```diff
-           width: xV,
-           height: JV
-         } = VV, YV = `${eV}-nitro`;
-         let UV = document.getElementById(YV);
-         null === UV && (UV = document.createElement("div"), UV.id = YV, UV.className = "NitroBanner", UV.style.setProperty("--nitro-slot-width", `${xV}px`), UV.style.setProperty("--nitro-slot-height", `${JV}px`), document.getElementById(eV).appendChild(UV));
-         const yV = [
-           [String(xV), String(JV)]
-         ];
-         Promise.resolve(window.nitroAds.createAd(YV, {
-           sizes: yV
-         })).catch((VV => {
-           console.error(`AD: Nitro failed to create banner ${YV}:`, VV)
-         })), console.log(`AD: Requested Nitro banner ${YV}`)
+           alias: LH
+         } = HH;
+         window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.display({
+             adUnitName: BH,
+             alias: LH
+           })
+         })), console.log("AD: Requested aip banner", document.getElementById(HH.divId), LH ? `(alias: ${LH})` : "")
```

#### 12. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L169-L171` → after: `L88-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L88-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/166.js#L88-L91) · [Before (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/166.js#L169-L171)

```diff
-       displayConsentUI() {
-         var VV, eV;
-         null === (VV = (eV = window).__cmp) || void 0 === VV || VV.call(eV, "showModal")
+       clearBanner(HH) {
+         "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.destroy(HH.divId)
+         })), console.log(`AD: Clearing aip banner ad ${HH.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
```

#### 13. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L173-L178` → after: `L93-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/166.js#L93-L96) · [Before (L173-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/166.js#L173-L178)

```diff
-       addPrivacyLinks(VV) {
-         var eV, xV, JV, YV;
-         const UV = document.createElement("span");
-         UV.dataset.ccpaLink = "1";
-         const yV = document.createElement("div");
-         yV.id = "ncmp-consent-link", VV.replaceChildren(UV, yV), null === (eV = (xV = window).__uspapi) || void 0 === eV || eV.call(xV, "addLink", 1), null === (JV = (YV = window).__cmp) || void 0 === JV || JV.call(YV, "addConsentLink")
+       setBannerAutoRefreshEnabled(HH, BH) {
+         window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.setAutoRefresh(HH.divId, BH)
+         }))
```

#### 14. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L181-L182` → after: `L99-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L99-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/166.js#L99-L103) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/166.js#L181-L182)

```diff
-         var VV, eV;
-         null === (VV = (eV = window.nitroAds).navigate) || void 0 === VV || VV.call(eV)
+         console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
+           window.__VM.push((function(HH, BH) {
+             BH.Instances.pageManager.newPageSession(!1)
+           }))
+         }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/167.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/167.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9)

#### 1. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/167.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/167.js#L4)

```diff
-   7306: (VV, eV, xV) => {
+   7287: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/167.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/167.js#L8-L9)

```diff
-     var JV = xV(1389),
-       YV = xV(1213);
+     var AH = LH(1289),
+       rH = LH(1110);
```

#### 3. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/167.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/167.js#L23)

```diff
-         }), await (0, YV.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
+         }), await (0, rH.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/168.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/168.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf)

#### 1. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/168.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/168.js#L4)

```diff
-   7308: (VV, eV, xV) => {
+   7296: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/168.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/168.js#L8-L9)

```diff
-     var JV = xV(1389),
-       YV = xV(1213);
+     var AH = LH(1289),
+       rH = LH(1110);
```

#### 3. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/168.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/168.js#L21)

```diff
-         }, await (0, YV.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new yV
+         }, await (0, rH.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new hH
```

#### 4. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/168.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/168.js#L39)

```diff
-         return `pb-slot-bloxdio-${eV}-${xV}${VV>1?`-${VV}`:""}`
+         return `pb-slot-bloxdio-${BH}-${LH}${HH>1?`-${HH}`:""}`
```

#### 5. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/168.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/168.js#L48)

```diff
-             console.error(`AD: Error while playing Aditude video ad: ${VV}:`, eV), yV(), xV()
+             console.error(`AD: Error while playing Aditude video ad: ${HH}:`, BH), hH(), LH()
```

#### 6. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/168.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/168.js#L50)

```diff
-         if (console.log(`AD: Requesting Aditude ${VV} ad`), void 0 === (null === (JV = window.tude) || void 0 === JV ? void 0 : JV.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${VV} ad playing`), void pV("Aditude ad lib not loaded", null);
+         if (console.log(`AD: Requesting Aditude ${HH} ad`), void 0 === (null === (AH = window.tude) || void 0 === AH ? void 0 : AH.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${HH} ad playing`), void tH("Aditude ad lib not loaded", null);
```

#### 7. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/168.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/168.js#L60)

```diff
-                 console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${VV} ad`), yV(), eV()
+                 console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${HH} ad`), hH(), BH()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/169.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/169.js` (511 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2)

#### 1. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1)

```diff
- /*! For license information please see pxmq3aq.169.88f23af5.chunk.js.LICENSE.txt */
+ /*! For license information please see cwj32u.169.937b64ab.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L5-L7` → after: `L5-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L5-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L5-L7) · [Before (L5-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L5-L7)

```diff
-   7334: (VV, eV, xV) => {
-     var JV = xV(7342);
-     eV.b = {
+   7315: (HH, BH, LH) => {
+     var AH = LH(7323);
+     BH.d = {
```

#### 3. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L11)

```diff
-     }, eV.c = eV.b, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.f = BH.d, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 4. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L13-L15` → after: `L13-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L13-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L13-L26) · [Before (L13-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L13-L15)

```diff
-   7344: (VV, eV, xV) => {
-     var JV = xV(7352);
-     eV.c = {
+   7331: (HH, BH) => {
+     var LH = "alarm-clock",
+       AH = [9200],
+       rH = "f34e",
+       SH = "M504.4 132.5c-4.5 10.5-18.4 9.8-24.9 .4-27.8-40-66.1-72.2-111-92.6-10.4-4.7-13.7-18.3-4.1-24.6 15-9.9 33-15.7 52.3-15.7 52.6 0 95.2 42.6 95.2 95.2 0 13.2-2.7 25.8-7.6 37.3zm-471.9 .4c-6.5 9.4-20.5 10.1-24.9-.4-4.9-11.5-7.6-24.1-7.6-37.3 0-52.6 42.6-95.2 95.2-95.2 19.3 … [truncated]
+     BH.d = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [512, 512, AH, rH, SH]
+     }, BH.g = BH.d
+   },
+   7334: (HH, BH, LH) => {
+     var AH = LH(7337);
+     BH.d = {
```

#### 5. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L19` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L30) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L19)

```diff
-     }, eV.g = eV.c, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.h = BH.d, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 6. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L21` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L32) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L21)

```diff
-   7355: (VV, eV) => {
+   7345: (HH, BH) => {
```

#### 7. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L26` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L37) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L26)

```diff
-     eV.b = {
+     BH.e = {
```

#### 8. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L30` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L41) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L30)

```diff
-     }, eV.c = eV.b
+     }, BH.g = BH.e
```

#### 9. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L32` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L43) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L32)

```diff
-   7360: (VV, eV) => {
+   7354: (HH, BH) => {
```

#### 10. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L41` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L52) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L41)

```diff
-     }, eV.g = eV.d
+     }, BH.f = BH.d
```

#### 11. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L43` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L54) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L43)

```diff
-   7352: (VV, eV) => {
+   7337: (HH, BH) => {
```

#### 12. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L62` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L84) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L62)

```diff
-     eV.e = {
+     BH.d = {
```

#### 13. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L66` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L88) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L66)

```diff
-     }, eV.f = eV.e
+     }, BH.g = BH.d
```

#### 14. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L68` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L90) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L68)

```diff
-   7366: (VV, eV) => {
+   7375: (HH, BH) => {
```

#### 15. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L73` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L95) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L73)

```diff
-     eV.d = {
+     BH.e = {
```

#### 16. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L77` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L99) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L77)

```diff
-     }, eV.f = eV.d
+     }, BH.g = BH.e
```

#### 17. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L79` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L101) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L79)

```diff
-   7371: (VV, eV) => {
+   7378: (HH, BH) => {
```

#### 18. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L84` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L106) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L84)

```diff
-     eV.e = {
+     BH.c = {
```

#### 19. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L88` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L110) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L88)

```diff
-     }, eV.g = eV.e
+     }, BH.e = BH.c
```

#### 20. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L90` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L112) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L90)

```diff
-   7375: (VV, eV) => {
+   7385: (HH, BH) => {
```

#### 21. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L95` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L117) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L95)

```diff
-     eV.e = {
+     BH.d = {
```

#### 22. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L99` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L121) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L99)

```diff
-     }, eV.f = eV.e
+     }, BH.e = BH.d
```

#### 23. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L101` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L123) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L101)

```diff
-   7378: (VV, eV) => {
+   7392: (HH, BH) => {
```

#### 24. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L106` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L128) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L106)

```diff
-     eV.e = {
+     BH.b = {
```

#### 25. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L110` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L132) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L110)

```diff
-     }, eV.h = eV.e
+     }, BH.c = BH.b
```

#### 26. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L112` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L134) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L112)

```diff
-   7381: (VV, eV) => {
+   7399: (HH, BH) => {
```

#### 27. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L126-L127` → after: `L148-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L148-L149) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L126-L127)

```diff
-   7387: (VV, eV, xV) => {
-     var JV = xV(7396);
+   7406: (HH, BH, LH) => {
+     var AH = LH(7415);
```

#### 28. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L134-L136` → after: `L156-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L156-L158) · [Before (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L134-L136)

```diff
-   7403: (VV, eV, xV) => {
-     var JV = xV(7410);
-     eV.c = {
+   7421: (HH, BH, LH) => {
+     var AH = LH(7427);
+     BH.b = {
```

#### 29. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L140` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L162) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L140)

```diff
-     }, eV.d = eV.c, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.e = BH.b, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 30. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L142` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L164) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L142)

```diff
-   7410: (VV, eV) => {
+   7427: (HH, BH) => {
```

#### 31. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L156` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L178) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L156)

```diff
-   7418: (VV, eV) => {
+   7429: (HH, BH) => {
```

#### 32. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L170` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L192) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L170)

```diff
-   7396: (VV, eV) => {
+   7415: (HH, BH) => {
```

#### 33. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L184` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L206) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L184)

```diff
-   7427: (VV, eV) => {
+   7435: (HH, BH) => {
```

#### 34. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L193` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L215) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L193)

```diff
-     }, eV.c = eV.b
+     }, BH.f = BH.b
```

#### 35. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L195` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L217) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L195)

```diff
-   7432: (VV, eV) => {
+   7440: (HH, BH) => {
```

#### 36. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L206` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L228) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L206)

```diff
-   7441: (VV, eV) => {
+   7448: (HH, BH) => {
```

#### 37. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L210` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L232) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L210)

```diff
-     eV.c = {
+     BH.e = {
```

#### 38. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L214` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L236) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L214)

```diff
-     }, eV.f = eV.c
+     }, BH.f = BH.e
```

#### 39. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L216` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L238) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L216)

```diff
-   7445: (VV, eV) => {
+   7456: (HH, BH) => {
```

#### 40. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L230` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L252) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L230)

```diff
-   7450: (VV, eV) => {
+   7463: (HH, BH) => {
```

#### 41. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L234` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L256) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L234)

```diff
-     eV.e = {
+     BH.d = {
```

#### 42. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L238` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L260) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L238)

```diff
-     }, eV.h = eV.e
+     }, BH.h = BH.d
```

#### 43. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L240` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L262) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L240)

```diff
-   7459: (VV, eV) => {
+   7468: (HH, BH) => {
```

#### 44. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L249` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L271) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L249)

```diff
-     }, eV.d = eV.b
+     }, BH.c = BH.b
```

#### 45. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L251` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L273) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L251)

```diff
-   7463: (VV, eV) => {
+   7476: (HH, BH) => {
```

#### 46. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L256` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L278) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L256)

```diff
-     eV.b = {
+     BH.d = {
```

#### 47. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L260` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L282) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L260)

```diff
-     }, eV.d = eV.b
+     }, BH.f = BH.d
```

#### 48. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L262` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L284) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L262)

```diff
-   7467: (VV, eV) => {
+   7479: (HH, BH) => {
```

#### 49. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L271` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L293) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L271)

```diff
-     }, eV.e = eV.d
+     }, BH.g = BH.d
```

#### 50. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L273` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L295) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L273)

```diff
-   7476: (VV, eV) => {
+   7481: (HH, BH) => {
```

#### 51. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L287` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L309) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L287)

```diff
-   7484: (VV, eV) => {
+   7487: (HH, BH) => {
```

#### 52. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L296` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L318) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L296)

```diff
-     }, eV.f = eV.e
+     }, BH.g = BH.e
```

#### 53. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L298` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L320) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L298)

```diff
-   7489: (VV, eV) => {
+   7494: (HH, BH) => {
```

#### 54. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L303` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L325) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L303)

```diff
-     eV.e = {
+     BH.d = {
```

#### 55. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L307` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L329) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L307)

```diff
-     }, eV.f = eV.e
+     }, BH.h = BH.d
```

#### 56. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L309` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L331) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L309)

```diff
-   7499: (VV, eV) => {
+   7511: (HH, BH) => {
```

#### 57. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L323-L324` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L345-L346) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L323-L324)

```diff
-   7492: (VV, eV, xV) => {
-     var JV = xV(7499);
+   7503: (HH, BH, LH) => {
+     var AH = LH(7511);
```

#### 58. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L329` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L351) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L329)

```diff
-     }, eV.e = eV.d, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.f = BH.d, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 59. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L331` → after: `L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L353) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L331)

```diff
-   7504: (VV, eV) => {
+   7520: (HH, BH) => {
```

#### 60. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L336` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L358) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L336)

```diff
-     eV.b = {
+     BH.d = {
```

#### 61. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L340` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L362) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L340)

```diff
-     }, eV.d = eV.b
+     }, BH.f = BH.d
```

#### 62. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L342` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L364) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L342)

```diff
-   7509: (VV, eV) => {
+   7525: (HH, BH) => {
```

#### 63. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L347` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L369) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L347)

```diff
-     eV.c = {
+     BH.e = {
```

#### 64. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L351` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L373) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L351)

```diff
-     }, eV.f = eV.c
+     }, BH.f = BH.e
```

#### 65. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L353` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L375) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L353)

```diff
-   7517: (VV, eV) => {
+   7534: (HH, BH) => {
```

#### 66. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L362` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L384) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L362)

```diff
-     }, eV.f = eV.c
+     }, BH.e = BH.c
```

#### 67. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L364` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L386) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L364)

```diff
-   7526: (VV, eV) => {
+   7537: (HH, BH) => {
```

#### 68. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L369` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L391) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L369)

```diff
-     eV.b = {
+     BH.e = {
```

#### 69. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L373` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L395) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L373)

```diff
-     }, eV.d = eV.b
+     }, BH.g = BH.e
```

#### 70. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L375` → after: `L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L397) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L375)

```diff
-   7531: (VV, eV) => {
+   7540: (HH, BH) => {
```

#### 71. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L380` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L402) · [Before (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L380)

```diff
-     eV.e = {
+     BH.c = {
```

#### 72. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L384` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L406) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L384)

```diff
-     }, eV.h = eV.e
+     }, BH.g = BH.c
```

#### 73. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L386` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L408) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L386)

```diff
-   7539: (VV, eV) => {
+   7549: (HH, BH) => {
```

#### 74. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L400` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L422) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L400)

```diff
-   7543: (VV, eV) => {
+   7557: (HH, BH) => {
```

#### 75. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L405` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L427) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L405)

```diff
-     eV.e = {
+     BH.b = {
```

#### 76. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L409` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L431) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L409)

```diff
-     }, eV.h = eV.e
+     }, BH.e = BH.b
```

#### 77. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L411` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L433) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L411)

```diff
-   7546: (VV, eV) => {
+   7566: (HH, BH) => {
```

#### 78. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L416` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L438) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L416)

```diff
-     eV.d = {
+     BH.e = {
```

#### 79. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L420` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L442) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L420)

```diff
-     }, eV.e = eV.d
+     }, BH.i = BH.e
```

#### 80. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L422` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L444) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L422)

```diff
-   7553: (VV, eV) => {
+   7570: (HH, BH) => {
```

#### 81. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L427` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L449) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L427)

```diff
-     eV.e = {
+     BH.b = {
```

#### 82. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L431` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L453) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L431)

```diff
-     }, eV.i = eV.e
+     }, BH.f = BH.b
```

#### 83. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L433` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L455) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L433)

```diff
-   7558: (VV, eV) => {
+   7573: (HH, BH) => {
```

#### 84. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L438` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L460) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L438)

```diff
-     eV.b = {
+     BH.e = {
```

#### 85. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L442` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L464) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L442)

```diff
-     }, eV.f = eV.b
+     }, BH.h = BH.e
```

#### 86. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L444` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L466) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L444)

```diff
-   7563: (VV, eV) => {
+   7578: (HH, BH) => {
```

#### 87. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L453` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L475) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L453)

```diff
-     }, eV.g = eV.c
+     }, BH.e = BH.c
```

#### 88. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L455` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L477) · [Before (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L455)

```diff
-   7571: (VV, eV) => {
+   7582: (HH, BH) => {
```

#### 89. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L460` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L482) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L460)

```diff
-     eV.b = {
+     BH.d = {
```

#### 90. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L464` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L486) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L464)

```diff
-     }, eV.f = eV.b
+     }, BH.g = BH.d
```

#### 91. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L466` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L488) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L466)

```diff
-   7574: (VV, eV) => {
+   7587: (HH, BH) => {
```

#### 92. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L480` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L502) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L480)

```diff
-   7582: (VV, eV) => {
+   7590: (HH, BH) => {
```

#### 93. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L494` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L516) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L494)

```diff
-   7584: (VV, eV) => {
+   7595: (HH, BH) => {
```

#### 94. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L499` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L521) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L499)

```diff
-     eV.d = {
+     BH.b = {
```

#### 95. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L503` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L525) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L503)

```diff
-     }, eV.g = eV.d
+     }, BH.c = BH.b
```

#### 96. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L505` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L527) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L505)

```diff
-   7587: (VV, eV) => {
+   7599: (HH, BH) => {
```

#### 97. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L519` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L541) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L519)

```diff
-   7590: (VV, eV) => {
+   7605: (HH, BH) => {
```

#### 98. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L524` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L546) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L524)

```diff
-     eV.b = {
+     BH.c = {
```

#### 99. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L528` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L550) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L528)

```diff
-     }, eV.e = eV.b
+     }, BH.e = BH.c
```

#### 100. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L530` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L552) · [Before (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L530)

```diff
-   7596: (VV, eV) => {
+   7610: (HH, BH) => {
```

#### 101. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L535` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L557) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L535)

```diff
-     eV.e = {
+     BH.b = {
```

#### 102. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L539` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L561) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L539)

```diff
-     }, eV.i = eV.e
+     }, BH.d = BH.b
```

#### 103. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L541-L543` → after: `L563-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L563-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L563-L565) · [Before (L541-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L541-L543)

```diff
-   7601: (VV, eV, xV) => {
-     var JV = xV(7604);
-     eV.e = {
+   7612: (HH, BH, LH) => {
+     var AH = LH(7621);
+     BH.d = {
```

#### 104. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L547` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L569) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L547)

```diff
-     }, eV.f = eV.e, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.f = BH.d, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 105. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L549` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L571) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L549)

```diff
-   7610: (VV, eV) => {
+   7623: (HH, BH) => {
```

#### 106. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L554` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L576) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L554)

```diff
-     eV.d = {
+     BH.b = {
```

#### 107. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L558` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L580) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L558)

```diff
-     }, eV.h = eV.d
+     }, BH.d = BH.b
```

#### 108. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L560` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L582) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L560)

```diff
-   7615: (VV, eV) => {
+   7625: (HH, BH) => {
```

#### 109. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L574-L575` → after: `L596-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L596-L597) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L574-L575)

```diff
-   7617: (VV, eV, xV) => {
-     var JV = xV(7615);
+   7630: (HH, BH, LH) => {
+     var AH = LH(7625);
```

#### 110. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L580` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L602) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L580)

```diff
-     }, eV.g = eV.d, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.h = BH.d, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 111. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L582` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L604) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L582)

```diff
-   7622: (VV, eV) => {
+   7639: (HH, BH) => {
```

#### 112. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L591` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L613) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L591)

```diff
-     }, eV.e = eV.b
+     }, BH.f = BH.b
```

#### 113. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L593` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L615) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L593)

```diff
-   7631: (VV, eV) => {
+   7642: (HH, BH) => {
```

#### 114. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L607` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L629) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L607)

```diff
-   7638: (VV, eV) => {
+   7645: (HH, BH) => {
```

#### 115. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L616` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L638) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L616)

```diff
-     }, eV.i = eV.e
+     }, BH.f = BH.e
```

#### 116. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L618` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L640) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L618)

```diff
-   7643: (VV, eV) => {
+   7648: (HH, BH) => {
```

#### 117. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L623` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L645) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L623)

```diff
-     eV.b = {
+     BH.c = {
```

#### 118. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L627` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L649) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L627)

```diff
-     }, eV.f = eV.b
+     }, BH.f = BH.c
```

#### 119. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L629` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L651) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L629)

```diff
-   7649: (VV, eV) => {
+   7652: (HH, BH) => {
```

#### 120. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L634` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L656) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L634)

```diff
-     eV.d = {
+     BH.b = {
```

#### 121. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L638` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L660) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L638)

```diff
-     }, eV.e = eV.d
+     }, BH.e = BH.b
```

#### 122. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L640` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L662) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L640)

```diff
-   7657: (VV, eV) => {
+   7655: (HH, BH) => {
```

#### 123. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L645` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L667) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L645)

```diff
-     eV.b = {
+     BH.c = {
```

#### 124. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L649` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L671) · [Before (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L649)

```diff
-     }, eV.c = eV.b
+     }, BH.g = BH.c
```

#### 125. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L651` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L673) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L651)

```diff
-   7659: (VV, eV) => {
+   7658: (HH, BH) => {
```

#### 126. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L660` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L682) · [Before (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L660)

```diff
-     }, eV.c = eV.b
+     }, BH.d = BH.b
```

#### 127. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L662` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L684) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L662)

```diff
-   7661: (VV, eV) => {
+   7662: (HH, BH) => {
```

#### 128. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L671` → after: `L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L693) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L671)

```diff
-     }, eV.h = eV.d
+     }, BH.g = BH.d
```

#### 129. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L674` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L696) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L674)

```diff
-     var JV = xV(7673);
+     var AH = LH(7676);
```

#### 130. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L681` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L703) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L681)

```diff
-   7679: (VV, eV) => {
+   7682: (HH, BH) => {
```

#### 131. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L686` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L708) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L686)

```diff
-     eV.b = {
+     BH.d = {
```

#### 132. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L690` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L712) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L690)

```diff
-     }, eV.d = eV.b
+     }, BH.h = BH.d
```

#### 133. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L692` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L714) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L692)

```diff
-   7685: (VV, eV) => {
+   7687: (HH, BH) => {
```

#### 134. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L697` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L719) · [Before (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L697)

```diff
-     eV.d = {
+     BH.c = {
```

#### 135. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L701` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L723) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L701)

```diff
-     }, eV.h = eV.d
+     }, BH.f = BH.c
```

#### 136. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L711` → after: `L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L733) · [Before (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L711)

```diff
-   7704: (VV, eV) => {
+   7702: (HH, BH) => {
```

#### 137. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L716` → after: `L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L738) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L716)

```diff
-     eV.e = {
+     BH.b = {
```

#### 138. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L720` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L742) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L720)

```diff
-     }, eV.h = eV.e
+     }, BH.e = BH.b
```

#### 139. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L722` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L744) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L722)

```diff
-   7708: (VV, eV) => {
+   7710: (HH, BH) => {
```

#### 140. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L727` → after: `L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L749) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L727)

```diff
-     eV.b = {
+     BH.c = {
```

#### 141. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L731` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L753) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L731)

```diff
-     }, eV.c = eV.b
+     }, BH.g = BH.c
```

#### 142. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L733` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L755) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L733)

```diff
-   7715: (VV, eV) => {
+   7713: (HH, BH) => {
```

#### 143. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L742` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L764) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L742)

```diff
-     }, eV.g = eV.e
+     }, BH.h = BH.e
```

#### 144. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L744-L746` → after: `L766-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L766-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L766-L768) · [Before (L744-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L744-L746)

```diff
-   7720: (VV, eV, xV) => {
-     var JV = xV(7726);
-     eV.d = {
+   7715: (HH, BH, LH) => {
+     var AH = LH(7721);
+     BH.c = {
```

#### 145. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L750` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L772) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L750)

```diff
-     }, eV.e = eV.d, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.f = BH.c, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 146. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L752` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L774) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L752)

```diff
-   7734: (VV, eV) => {
+   7723: (HH, BH) => {
```

#### 147. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L766-L767` → after: `L788-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L788-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L788-L789) · [Before (L766-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L766-L767)

```diff
-   7740: (VV, eV, xV) => {
-     var JV = xV(7734);
+   7725: (HH, BH, LH) => {
+     var AH = LH(7723);
```

#### 148. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L774` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L796) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L774)

```diff
-   7748: (VV, eV) => {
+   7729: (HH, BH) => {
```

#### 149. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L778` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L800) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L778)

```diff
-     eV.e = {
+     BH.d = {
```

#### 150. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L782` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L804) · [Before (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L782)

```diff
-     }, eV.g = eV.e
+     }, BH.f = BH.d
```

#### 151. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L784-L786` → after: `L806-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L806-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L806-L808) · [Before (L784-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L784-L786)

```diff
-   7757: (VV, eV, xV) => {
-     var JV = xV(7762);
-     eV.e = {
+   7735: (HH, BH, LH) => {
+     var AH = LH(7738);
+     BH.c = {
```

#### 152. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L790` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L812) · [Before (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L790)

```diff
-     }, eV.g = eV.e, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.e = BH.c, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 153. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L792` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L814) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L792)

```diff
-   7765: (VV, eV) => {
+   7743: (HH, BH) => {
```

#### 154. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L797` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L819) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L797)

```diff
-     eV.b = {
+     BH.c = {
```

#### 155. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L801` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L823) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L801)

```diff
-     }, eV.c = eV.b
+     }, BH.f = BH.c
```

#### 156. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L803-L805` → after: `L825-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L825-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L825-L827) · [Before (L803-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L803-L805)

```diff
-   7770: (VV, eV, xV) => {
-     var JV = xV(7381);
-     eV.c = {
+   7748: (HH, BH, LH) => {
+     var AH = LH(7399);
+     BH.e = {
```

#### 157. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L809` → after: `L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L831) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L809)

```diff
-     }, eV.f = eV.c, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.h = BH.e, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 158. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L811` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L833) · [Before (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L811)

```diff
-   7779: (VV, eV) => {
+   7752: (HH, BH) => {
```

#### 159. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L815` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L837) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L815)

```diff
-     eV.b = {
+     BH.d = {
```

#### 160. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L819` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L841) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L819)

```diff
-     }, eV.d = eV.b
+     }, BH.h = BH.d
```

#### 161. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L821` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L843) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L821)

```diff
-   7783: (VV, eV) => {
+   7767: (HH, BH) => {
```

#### 162. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L826` → after: `L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L848) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L826)

```diff
-     eV.e = {
+     BH.d = {
```

#### 163. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L830` → after: `L852-L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L852-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L852-L863) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L830)

```diff
-     }, eV.f = eV.e
+     }, BH.e = BH.d
+   },
+   7758: (HH, BH) => {
+     var LH = "eyes",
+       AH = [],
+       rH = "e367",
+       SH = "M96 224c-11.2 0-21.7 2.9-30.9 7.9 3.5-37.5 15.1-70.1 31-93.9 19.3-29 42.6-42 63.9-42s44.5 13 63.9 42c19.2 28.8 32.1 70.4 32.1 118s-12.9 89.2-32.1 118c-19.3 29-42.6 42-63.9 42s-44.5-13-63.9-42c-4.7-7-9-14.8-12.8-23.3 4.1 .8 8.4 1.3 12.7 1.3 35.3 0 64-28.7 64-64s-28.7-6 … [truncated]
+     BH.c = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [576, 512, AH, rH, SH]
+     }, BH.e = BH.c
```

#### 164. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L832` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L865) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L832)

```diff
-   7787: (VV, eV) => {
+   7776: (HH, BH) => {
```

#### 165. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L837` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L870) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L837)

```diff
-     eV.c = {
+     BH.e = {
```

#### 166. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L841` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L874) · [Before (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L841)

```diff
-     }, eV.f = eV.c
+     }, BH.i = BH.e
```

#### 167. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L857` → after: `L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L890) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L857)

```diff
-   7795: (VV, eV) => {
+   7779: (HH, BH) => {
```

#### 168. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L866` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L899) · [Before (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L866)

```diff
-     }, eV.e = eV.d
+     }, BH.g = BH.d
```

#### 169. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L868` → after: `L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L901) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L868)

```diff
-   7801: (VV, eV) => {
+   7785: (HH, BH) => {
```

#### 170. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L882` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L915) · [Before (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L882)

```diff
-   7810: (VV, eV) => {
+   7789: (HH, BH) => {
```

#### 171. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L887` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L920) · [Before (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L887)

```diff
-     eV.b = {
+     BH.d = {
```

#### 172. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L891` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L924) · [Before (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L891)

```diff
-     }, eV.e = eV.b
+     }, BH.h = BH.d
```

#### 173. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L893-L895` → after: `L926-L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L926-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L926-L928) · [Before (L893-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L893-L895)

```diff
-   7814: (VV, eV, xV) => {
-     var JV = xV(7823);
-     eV.c = {
+   7794: (HH, BH, LH) => {
+     var AH = LH(7801);
+     BH.e = {
```

#### 174. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L899` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L932) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L899)

```diff
-     }, eV.f = eV.c, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.i = BH.e, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 175. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L901` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L934) · [Before (L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L901)

```diff
-   7823: (VV, eV) => {
+   7801: (HH, BH) => {
```

#### 176. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L915-L917` → after: `L948-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L948-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L948-L950) · [Before (L915-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L915-L917)

```diff
-   7829: (VV, eV, xV) => {
-     var JV = xV(7835);
-     eV.b = {
+   7803: (HH, BH, LH) => {
+     var AH = LH(7808);
+     BH.e = {
```

#### 177. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L921` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L954) · [Before (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L921)

```diff
-     }, eV.c = eV.b, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.g = BH.e, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 178. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L923-L924` → after: `L956-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L956-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L956-L957) · [Before (L923-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L923-L924)

```diff
-   7842: (VV, eV, xV) => {
-     var JV = xV(7849);
+   7817: (HH, BH, LH) => {
+     var AH = LH(7820);
```

#### 179. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L931` → after: `L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L964) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L931)

```diff
-   7835: (VV, eV) => {
+   7808: (HH, BH) => {
```

#### 180. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L945-L947` → after: `L978-L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L978-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L978-L980) · [Before (L945-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L945-L947)

```diff
-   7854: (VV, eV, xV) => {
-     var JV = xV(7835);
-     eV.c = {
+   7828: (HH, BH, LH) => {
+     var AH = LH(7808);
+     BH.e = {
```

#### 181. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L951` → after: `L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L984) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L951)

```diff
-     }, eV.d = eV.c, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.i = BH.e, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 182. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L953` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L986) · [Before (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L953)

```diff
-   7861: (VV, eV) => {
+   7833: (HH, BH) => {
```

#### 183. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L964` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L997) · [Before (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L964)

```diff
-   7869: (VV, eV) => {
+   7837: (HH, BH) => {
```

#### 184. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L969` → after: `L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1002) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L969)

```diff
-     eV.c = {
+     BH.b = {
```

#### 185. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L973` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1006) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L973)

```diff
-     }, eV.g = eV.c
+     }, BH.f = BH.b
```

#### 186. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L975-L977` → after: `L1008-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1008-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1008-L1010) · [Before (L975-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L975-L977)

```diff
-   7872: (VV, eV, xV) => {
-     var JV = xV(7878);
-     eV.d = {
+   7839: (HH, BH, LH) => {
+     var AH = LH(7845);
+     BH.b = {
```

#### 187. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L981` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1014) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L981)

```diff
-     }, eV.e = eV.d, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.f = BH.b, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 188. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L983` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1016) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L983)

```diff
-   7881: (VV, eV) => {
+   7852: (HH, BH) => {
```

#### 189. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L988` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1021) · [Before (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L988)

```diff
-     eV.d = {
+     BH.e = {
```

#### 190. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L992` → after: `L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1025) · [Before (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L992)

```diff
-     }, eV.g = eV.d
+     }, BH.h = BH.e
```

#### 191. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L994` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1027) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L994)

```diff
-   7886: (VV, eV) => {
+   7859: (HH, BH) => {
```

#### 192. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L999` → after: `L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1032) · [Before (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L999)

```diff
-     eV.c = {
+     BH.b = {
```

#### 193. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1003` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1036) · [Before (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1003)

```diff
-     }, eV.f = eV.c
+     }, BH.e = BH.b
```

#### 194. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1005` → after: `L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1038) · [Before (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1005)

```diff
-   7888: (VV, eV) => {
+   7864: (HH, BH) => {
```

#### 195. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1010` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1043) · [Before (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1010)

```diff
-     eV.d = {
+     BH.e = {
```

#### 196. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1014` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1047) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1014)

```diff
-     }, eV.f = eV.d
+     }, BH.h = BH.e
```

#### 197. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1016` → after: `L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1049) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1016)

```diff
-   7890: (VV, eV) => {
+   7867: (HH, BH) => {
```

#### 198. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1021` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1054) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1021)

```diff
-     eV.c = {
+     BH.e = {
```

#### 199. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1025` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1058) · [Before (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1025)

```diff
-     }, eV.e = eV.c
+     }, BH.i = BH.e
```

#### 200. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1027` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1060) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1027)

```diff
-   7896: (VV, eV) => {
+   7873: (HH, BH) => {
```

#### 201. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1036` → after: `L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1069) · [Before (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1036)

```diff
-     }, eV.g = eV.d
+     }, BH.h = BH.d
```

#### 202. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1038` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1071) · [Before (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1038)

```diff
-   7903: (VV, eV) => {
+   7877: (HH, BH) => {
```

#### 203. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1043` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1076) · [Before (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1043)

```diff
-     eV.b = {
+     BH.e = {
```

#### 204. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1047` → after: `L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1080) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1047)

```diff
-     }, eV.d = eV.b
+     }, BH.h = BH.e
```

#### 205. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1049` → after: `L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1082) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1049)

```diff
-   7907: (VV, eV) => {
+   7881: (HH, BH) => {
```

#### 206. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1063` → after: `L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1096) · [Before (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1063)

```diff
-   7915: (VV, eV) => {
+   7886: (HH, BH) => {
```

#### 207. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1072` → after: `L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1105) · [Before (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1072)

```diff
-     }, eV.h = eV.d
+     }, BH.e = BH.d
```

#### 208. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1074` → after: `L1107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1107) · [Before (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1074)

```diff
-   7604: (VV, eV) => {
+   7621: (HH, BH) => {
```

#### 209. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1088` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1121) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1088)

```diff
-   7922: (VV, eV) => {
+   7888: (HH, BH) => {
```

#### 210. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1092` → after: `L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1125) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1092)

```diff
-     eV.b = {
+     BH.d = {
```

#### 211. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1096` → after: `L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1129) · [Before (L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1096)

```diff
-     }, eV.f = eV.b
+     }, BH.e = BH.d
```

#### 212. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1098` → after: `L1131-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1131-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1131-L1153) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1098)

```diff
-   7928: (VV, eV) => {
+   7893: (HH, BH) => {
+     var LH = "gift",
+       AH = [127873],
+       rH = "f06b",
+       SH = "M321.5 68.8C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-73.3 0 34.8-59.2zm-131 0l34.8 59.2-73.3 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zm89.6-24.3l-24.1 41-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0c-48.6 0-88 39 … [truncated]
+     BH.b = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [512, 512, AH, rH, SH]
+     }, BH.c = BH.b
+   },
+   7895: (HH, BH) => {
+     var LH = "gingerbread-man",
+       AH = [],
+       rH = "f79d",
+       SH = "M308.7 192c26.6-23.5 43.3-57.8 43.3-96 0-70.7-57.3-128-128-128S96 25.3 96 96c0 38.2 16.8 72.5 43.3 96L64 192c-35.3 0-64 28.7-64 64s28.7 64 64 64l19 0c20.1 0 31.3 23.2 18.8 38.9L47.6 427.2c-24.7 31.1-19.5 76.4 11.6 101.2s76.4 19.5 101.2-11.6l44.8-56.5c9.6-12.1 28-12.1  … [truncated]
+ ... (7 more added lines; see GitHub link above)
```

#### 213. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1103` → after: `L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1158) · [Before (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1103)

```diff
-     eV.e = {
+     BH.b = {
```

#### 214. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1107` → after: `L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1162) · [Before (L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1107)

```diff
-     }, eV.f = eV.e
+     }, BH.d = BH.b
```

#### 215. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1109` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1164) · [Before (L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1109)

```diff
-   7937: (VV, eV) => {
+   7901: (HH, BH) => {
```

#### 216. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1114` → after: `L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1169) · [Before (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1114)

```diff
-     eV.c = {
+     BH.b = {
```

#### 217. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1118` → after: `L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1173) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1118)

```diff
-     }, eV.d = eV.c
+     }, BH.c = BH.b
```

#### 218. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1120` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1175) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1120)

```diff
-   7942: (VV, eV) => {
+   7910: (HH, BH) => {
```

#### 219. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1129` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1184) · [Before (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1129)

```diff
-     }, eV.c = eV.b
+     }, BH.e = BH.b
```

#### 220. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1131` → after: `L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1186) · [Before (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1131)

```diff
-   7950: (VV, eV) => {
+   7912: (HH, BH) => {
```

#### 221. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1136` → after: `L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1191) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1136)

```diff
-     eV.c = {
+     BH.b = {
```

#### 222. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1140` → after: `L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1195) · [Before (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1140)

```diff
-     }, eV.f = eV.c
+     }, BH.c = BH.b
```

#### 223. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1142` → after: `L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1197) · [Before (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1142)

```diff
-   7878: (VV, eV) => {
+   7845: (HH, BH) => {
```

#### 224. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1156` → after: `L1211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1211) · [Before (L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1156)

```diff
-   7953: (VV, eV) => {
+   7915: (HH, BH) => {
```

#### 225. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1165` → after: `L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1220) · [Before (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1165)

```diff
-     }, eV.e = eV.b
+     }, BH.c = BH.b
```

#### 226. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1167` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1222) · [Before (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1167)

```diff
-   7956: (VV, eV) => {
+   7918: (HH, BH) => {
```

#### 227. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1172` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1227) · [Before (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1172)

```diff
-     eV.c = {
+     BH.b = {
```

#### 228. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1176` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1231) · [Before (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1176)

```diff
-     }, eV.g = eV.c
+     }, BH.f = BH.b
```

#### 229. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1178` → after: `L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1233) · [Before (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1178)

```diff
-   7965: (VV, eV) => {
+   7922: (HH, BH) => {
```

#### 230. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1187` → after: `L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1242) · [Before (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1187)

```diff
-     }, eV.e = eV.d
+     }, BH.h = BH.d
```

#### 231. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1189` → after: `L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1244) · [Before (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1189)

```diff
-   7970: (VV, eV) => {
+   7930: (HH, BH) => {
```

#### 232. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1198` → after: `L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1253) · [Before (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1198)

```diff
-     }, eV.g = eV.c
+     }, BH.f = BH.c
```

#### 233. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1200` → after: `L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1255) · [Before (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1200)

```diff
-   7975: (VV, eV) => {
+   7936: (HH, BH) => {
```

#### 234. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1205` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1260) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1205)

```diff
-     eV.b = {
+     BH.e = {
```

#### 235. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1209` → after: `L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1264) · [Before (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1209)

```diff
-     }, eV.c = eV.b
+     }, BH.i = BH.e
```

#### 236. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1211` → after: `L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1266) · [Before (L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1211)

```diff
-   7978: (VV, eV) => {
+   7944: (HH, BH) => {
```

#### 237. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1220` → after: `L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1275) · [Before (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1220)

```diff
-     }, eV.f = eV.b
+     }, BH.c = BH.b
```

#### 238. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1222` → after: `L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1277) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1222)

```diff
-   7981: (VV, eV) => {
+   7948: (HH, BH) => {
```

#### 239. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1227` → after: `L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1282) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1227)

```diff
-     eV.d = {
+     BH.e = {
```

#### 240. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1231` → after: `L1286-L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1286-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1286-L1297) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1231)

```diff
-     }, eV.f = eV.d
+     }, BH.f = BH.e
+   },
+   7957: (HH, BH) => {
+     var LH = "hat-wizard",
+       AH = [],
+       rH = "f6e8",
+       SH = "M64 400l85.7-208.2c17-41.3 47.8-75.3 87.2-96.3L383.8 17.2c12.3-6.6 26.5 4.7 23 18.2L369.6 177.8c-1.1 4.1-1.6 8.3-1.6 12.6 0 6.3 1.2 12.6 3.6 18.5l76.4 191.1-207.1 0 11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237 260.4 230.9 2 … [truncated]
+     BH.c = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [512, 512, AH, rH, SH]
+     }, BH.g = BH.c
```

#### 241. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1233` → after: `L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1299) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1233)

```diff
-   7988: (VV, eV) => {
+   7966: (HH, BH) => {
```

#### 242. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1238` → after: `L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1304) · [Before (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1238)

```diff
-     eV.d = {
+     BH.c = {
```

#### 243. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1242` → after: `L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1308) · [Before (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1242)

```diff
-     }, eV.h = eV.d
+     }, BH.g = BH.c
```

#### 244. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1244-L1246` → after: `L1310-L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1310-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1310-L1312) · [Before (L1244-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1244-L1246)

```diff
-   7994: (VV, eV, xV) => {
-     var JV = xV(7997);
-     eV.b = {
+   7974: (HH, BH, LH) => {
+     var AH = LH(7983);
+     BH.c = {
```

#### 245. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1250` → after: `L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1316) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1250)

```diff
-     }, eV.f = eV.b, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.g = BH.c, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 246. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1252-L1254` → after: `L1318-L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1318-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1318-L1320) · [Before (L1252-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1252-L1254)

```diff
-   8004: (VV, eV, xV) => {
-     var JV = xV(7587);
-     eV.b = {
+   7988: (HH, BH, LH) => {
+     var AH = LH(7599);
+     BH.c = {
```

#### 247. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1258` → after: `L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1324) · [Before (L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1258)

```diff
-     }, eV.e = eV.b, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.f = BH.c, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 248. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1260` → after: `L1326-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1326-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1326-L1337) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1260)

```diff
-   8011: (VV, eV) => {
+   7997: (HH, BH) => {
+     var LH = "horse-saddle",
+       AH = [],
+       rH = "f8c3",
+       SH = "M448 238.1l0-78.1 16 0 9.8 19.6c12.5 25.1 42.2 36.4 68.3 26 20.5-8.2 33.9-28 33.9-50.1L576 80c0-19.1-8.4-36.3-21.7-48l5.7 0c8.8 0 16-7.2 16-16S568.8 0 560 0L448 0C377.3 0 320 57.3 320 128l0 32c0 41.8-26.7 77.4-64 90.5l0 78.6 51.7 14.8c4.1 1.2 8.2 2.1 12.3 2.8L320 480c … [truncated]
+     BH.e = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [576, 512, AH, rH, SH]
+     }, BH.g = BH.e
+   },
+   8004: (HH, BH) => {
```

#### 249. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1274` → after: `L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1351) · [Before (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1274)

```diff
-   8014: (VV, eV) => {
+   8006: (HH, BH) => {
```

#### 250. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1279` → after: `L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1356) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1279)

```diff
-     eV.e = {
+     BH.b = {
```

#### 251. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1283` → after: `L1360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1360) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1283)

```diff
-     }, eV.i = eV.e
+     }, BH.c = BH.b
```

#### 252. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1285-L1286` → after: `L1362-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1362-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1362-L1363) · [Before (L1285-L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1285-L1286)

```diff
-   8020: (VV, eV, xV) => {
-     var JV = xV(8011);
+   8011: (HH, BH, LH) => {
+     var AH = LH(8004);
```

#### 253. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1293` → after: `L1370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1370) · [Before (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1293)

```diff
-   8659: (VV, eV) => {
+   8711: (HH, BH) => {
```

#### 254. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1298` → after: `L1375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1375) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1298)

```diff
-     eV.c = {
+     BH.e = {
```

#### 255. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1302` → after: `L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1379) · [Before (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1302)

```diff
-     }, eV.e = eV.c
+     }, BH.g = BH.e
```

#### 256. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1304` → after: `L1381-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1381-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1381-L1392) · [Before (L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1304)

```diff
-   8024: (VV, eV) => {
+   8015: (HH, BH) => {
+     var LH = "ice-skate",
+       AH = [9976],
+       rH = "f7ac",
+       SH = "M288 0c17.7 0 32 14.3 32 32l0 64-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0 0 32-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0 91.6 27.5c40.6 12.2 68.4 49.6 68.4 92l0 24.6c0 26.5-21.5 48-48 48l0 48 72 0c13.3 0 24-10.7 24-24l0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0  … [truncated]
+     BH.c = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [576, 512, AH, rH, SH]
+     }, BH.d = BH.c
+   },
+   8017: (HH, BH) => {
```

#### 257. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1309` → after: `L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1397) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1309)

```diff
-     eV.c = {
+     BH.b = {
```

#### 258. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1313` → after: `L1401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1401) · [Before (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1313)

```diff
-     }, eV.d = eV.c
+     }, BH.e = BH.b
```

#### 259. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1315` → after: `L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1403) · [Before (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1315)

```diff
-   7997: (VV, eV) => {
+   7983: (HH, BH) => {
```

#### 260. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1329` → after: `L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1417) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1329)

```diff
-   8030: (VV, eV) => {
+   8021: (HH, BH) => {
```

#### 261. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1334` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1422) · [Before (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1334)

```diff
-     eV.b = {
+     BH.d = {
```

#### 262. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1338` → after: `L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1426) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1338)

```diff
-     }, eV.c = eV.b
+     }, BH.e = BH.d
```

#### 263. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1340` → after: `L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1428) · [Before (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1340)

```diff
-   8036: (VV, eV) => {
+   8028: (HH, BH) => {
```

#### 264. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1345` → after: `L1433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1433) · [Before (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1345)

```diff
-     eV.d = {
+     BH.c = {
```

#### 265. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1349` → after: `L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1437) · [Before (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1349)

```diff
-     }, eV.e = eV.d
+     }, BH.f = BH.c
```

#### 266. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1351-L1353` → after: `L1439-L1441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1439-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1439-L1441) · [Before (L1351-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1351-L1353)

```diff
-   8040: (VV, eV, xV) => {
-     var JV = xV(7574);
-     eV.e = {
+   8032: (HH, BH, LH) => {
+     var AH = LH(7587);
+     BH.b = {
```

#### 267. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1357` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1445) · [Before (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1357)

```diff
-     }, eV.f = eV.e, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.c = BH.b, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 268. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1359` → after: `L1447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1447) · [Before (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1359)

```diff
-   8049: (VV, eV) => {
+   8039: (HH, BH) => {
```

#### 269. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1368` → after: `L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1456) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1368)

```diff
-     }, eV.f = eV.b
+     }, BH.c = BH.b
```

#### 270. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1370` → after: `L1458-L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1458-L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1458-L1469) · [Before (L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1370)

```diff
-   8054: (VV, eV) => {
+   8042: (HH, BH) => {
+     var LH = "lamp-street",
+       AH = [],
+       rH = "e1c5",
+       SH = "M176 64C114.1 64 64 114.1 64 176l0 304c0 17.7-14.3 32-32 32S0 497.7 0 480L0 176c0-97.2 78.8-176 176-176 92.7 0 168.6 71.6 175.5 162.6 80.7 13.3 144.4 76.9 157.9 157.6 2.9 17.4-11.7 31.9-29.4 31.9l-73.5 0c-7.5 41-43.4 72-86.5 72s-79-31-86.5-72L160 352c-17.7 0-32.3-14.4 … [truncated]
+     BH.c = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [512, 512, AH, rH, SH]
+     }, BH.e = BH.c
+   },
+   8050: (HH, BH) => {
```

#### 271. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1375` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1474) · [Before (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1375)

```diff
-     eV.c = {
+     BH.d = {
```

#### 272. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1379` → after: `L1478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1478) · [Before (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1379)

```diff
-     }, eV.e = eV.c
+     }, BH.g = BH.d
```

#### 273. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1381` → after: `L1480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1480) · [Before (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1381)

```diff
-   8060: (VV, eV) => {
+   8054: (HH, BH) => {
```

#### 274. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1390` → after: `L1489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1489) · [Before (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1390)

```diff
-     }, eV.d = eV.c
+     }, BH.e = BH.c
```

#### 275. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1392` → after: `L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1491) · [Before (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1392)

```diff
-   8065: (VV, eV) => {
+   8061: (HH, BH) => {
```

#### 276. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1401` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1500) · [Before (L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1401)

```diff
-     }, eV.h = eV.d
+     }, BH.e = BH.d
```

#### 277. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1403` → after: `L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1502) · [Before (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1403)

```diff
-   8074: (VV, eV) => {
+   8068: (HH, BH) => {
```

#### 278. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1408` → after: `L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1507) · [Before (L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1408)

```diff
-     eV.d = {
+     BH.c = {
```

#### 279. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1412` → after: `L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1511) · [Before (L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1412)

```diff
-     }, eV.e = eV.d
+     }, BH.e = BH.c
```

#### 280. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1414` → after: `L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1513) · [Before (L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1414)

```diff
-   8083: (VV, eV) => {
+   8076: (HH, BH) => {
```

#### 281. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1428-L1429` → after: `L1527-L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1527-L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1527-L1528) · [Before (L1428-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1428-L1429)

```diff
-   8091: (VV, eV, xV) => {
-     var JV = xV(8083);
+   8085: (HH, BH, LH) => {
+     var AH = LH(8076);
```

#### 282. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1434` → after: `L1533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1533) · [Before (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1434)

```diff
-     }, eV.i = eV.e, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.h = BH.e, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 283. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1436` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1535) · [Before (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1436)

```diff
-   8099: (VV, eV) => {
+   8089: (HH, BH) => {
```

#### 284. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1450` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1549) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1450)

```diff
-   8106: (VV, eV) => {
+   8093: (HH, BH) => {
```

#### 285. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1464` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1563) · [Before (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1464)

```diff
-   8112: (VV, eV) => {
+   8100: (HH, BH) => {
```

#### 286. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1473` → after: `L1572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1572) · [Before (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1473)

```diff
-     }, eV.e = eV.b
+     }, BH.c = BH.b
```

#### 287. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1475` → after: `L1574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1574) · [Before (L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1475)

```diff
-   8120: (VV, eV) => {
+   8108: (HH, BH) => {
```

#### 288. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1480` → after: `L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1579) · [Before (L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1480)

```diff
-     eV.c = {
+     BH.b = {
```

#### 289. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1484` → after: `L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1583) · [Before (L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1484)

```diff
-     }, eV.g = eV.c
+     }, BH.c = BH.b
```

#### 290. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1486` → after: `L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1585) · [Before (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1486)

```diff
-   8124: (VV, eV) => {
+   8113: (HH, BH) => {
```

#### 291. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1500-L1502` → after: `L1599-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1599-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1599-L1601) · [Before (L1500-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1500-L1502)

```diff
-   8132: (VV, eV, xV) => {
-     var JV = xV(8139);
-     eV.e = {
+   8122: (HH, BH, LH) => {
+     var AH = LH(8130);
+     BH.d = {
```

#### 292. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1506` → after: `L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1605) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1506)

```diff
-     }, eV.h = eV.e, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.g = BH.d, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 293. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1508-L1510` → after: `L1607-L1609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1607-L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1607-L1609) · [Before (L1508-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1508-L1510)

```diff
-   8148: (VV, eV, xV) => {
-     var JV = xV(8099);
-     eV.d = {
+   8139: (HH, BH, LH) => {
+     var AH = LH(8089);
+     BH.c = {
```

#### 294. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1514` → after: `L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1613) · [Before (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1514)

```diff
-     }, eV.f = eV.d, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.d = BH.c, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 295. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1516-L1517` → after: `L1615-L1616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1615-L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1615-L1616) · [Before (L1516-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1516-L1517)

```diff
-   8152: (VV, eV, xV) => {
-     var JV = xV(8106);
+   8145: (HH, BH, LH) => {
+     var AH = LH(8093);
```

#### 296. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1524-L1526` → after: `L1623-L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1623-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1623-L1625) · [Before (L1524-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1524-L1526)

```diff
-   8161: (VV, eV, xV) => {
-     var JV = xV(8106);
-     eV.c = {
+   8148: (HH, BH, LH) => {
+     var AH = LH(8093);
+     BH.d = {
```

#### 297. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1530` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1629) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1530)

```diff
-     }, eV.f = eV.c, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.h = BH.d, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 298. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1532` → after: `L1631-L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1631-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1631-L1642) · [Before (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1532)

```diff
-   8166: (VV, eV) => {
+   8151: (HH, BH) => {
+     var LH = "masks-theater",
+       AH = [127917, "theater-masks"],
+       rH = "f630",
+       SH = "M-5 118L23.5 279.7c14 79.5 76.3 141.8 155.8 155.8l12.7 2.2c-16.5-28.6-27.1-60.7-30.6-94.5l-24.1 4.3c-9.7 1.7-18.8-5.8-16.9-15.5 4.8-24.7 19.1-46.6 39.7-60.9l0-74.6c-1.4 .8-3 1.3-4.7 1.6l-63 11.1c-8.7 1.5-17.3-4.4-15.9-13.1 3.1-19.6 18.4-36 39.1-39.7 17.2-3 33.9 3.5 44 … [truncated]
+     BH.b = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [576, 512, AH, rH, SH]
+     }, BH.d = BH.b
+   },
+   8156: (HH, BH) => {
```

#### 299. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1546-L1548` → after: `L1656-L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1656-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1656-L1658) · [Before (L1546-L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1546-L1548)

```diff
-   8174: (VV, eV, xV) => {
-     var JV = xV(8183);
-     eV.e = {
+   8161: (HH, BH, LH) => {
+     var AH = LH(8166);
+     BH.d = {
```

#### 300. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1552` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1662) · [Before (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1552)

```diff
-     }, eV.g = eV.e, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.h = BH.d, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 301. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1554` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1664) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1554)

```diff
-   8186: (VV, eV) => {
+   8173: (HH, BH) => {
```

#### 302. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1559` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1669) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1559)

```diff
-     eV.b = {
+     BH.c = {
```

#### 303. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1563` → after: `L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1673) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1563)

```diff
-     }, eV.d = eV.b
+     }, BH.g = BH.c
```

#### 304. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1565-L1566` → after: `L1675-L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1675-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1675-L1676) · [Before (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1565-L1566)

```diff
-   8195: (VV, eV, xV) => {
-     var JV = xV(7631);
+   8175: (HH, BH, LH) => {
+     var AH = LH(7642);
```

#### 305. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1571` → after: `L1681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1681) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1571)

```diff
-     }, eV.e = eV.b, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.c = BH.b, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 306. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1573` → after: `L1683-L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1683-L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1683-L1694) · [Before (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1573)

```diff
-   8200: (VV, eV) => {
+   8182: (HH, BH) => {
+     var LH = "mug-hot",
+       AH = [9749],
+       rH = "f7b6",
+       SH = "M152-16c-13.3 0-24 10.7-24 24 0 38.9 23.4 59.4 39.1 73.1l1.1 1c16.3 14.3 23.8 21.8 23.8 37.9 0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C183.5 31.7 176 24.1 176 8 176-5.3 165.3-16 152-16zM96 192c-17.7 0-32 14.3-32 32l0 192c0 53 43 96 96 96l192 … [truncated]
+     BH.b = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [576, 512, AH, rH, SH]
+     }, BH.d = BH.b
+   },
+   8185: (HH, BH) => {
```

#### 307. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1578` → after: `L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1699) · [Before (L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1578)

```diff
-     eV.c = {
+     BH.e = {
```

#### 308. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1582` → after: `L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1703) · [Before (L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1582)

```diff
-     }, eV.d = eV.c
+     }, BH.h = BH.e
```

#### 309. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1584` → after: `L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1705) · [Before (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1584)

```diff
-   8206: (VV, eV) => {
+   8190: (HH, BH) => {
```

#### 310. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1593` → after: `L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1714) · [Before (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1593)

```diff
-     }, eV.g = eV.e
+     }, BH.i = BH.e
```

#### 311. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1595-L1597` → after: `L1716-L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1716-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1716-L1718) · [Before (L1595-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1595-L1597)

```diff
-   8210: (VV, eV, xV) => {
-     var JV = xV(7445);
-     eV.b = {
+   8195: (HH, BH, LH) => {
+     var AH = LH(7456);
+     BH.c = {
```

#### 312. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1601` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1722) · [Before (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1601)

```diff
-     }, eV.d = eV.b, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.f = BH.c, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 313. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1603` → after: `L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1724) · [Before (L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1603)

```diff
-   8212: (VV, eV) => {
+   8203: (HH, BH) => {
```

#### 314. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1612` → after: `L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1733) · [Before (L1612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1612)

```diff
-     }, eV.d = eV.b
+     }, BH.f = BH.b
```

#### 315. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1614` → after: `L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1735) · [Before (L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1614)

```diff
-   8216: (VV, eV) => {
+   8208: (HH, BH) => {
```

#### 316. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1623` → after: `L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1744) · [Before (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1623)

```diff
-     }, eV.f = eV.e
+     }, BH.g = BH.e
```

#### 317. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1625` → after: `L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1746) · [Before (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1625)

```diff
-   8220: (VV, eV) => {
+   8213: (HH, BH) => {
```

#### 318. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1630` → after: `L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1751) · [Before (L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1630)

```diff
-     eV.d = {
+     BH.e = {
```

#### 319. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1634` → after: `L1755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1755) · [Before (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1634)

```diff
-     }, eV.e = eV.d
+     }, BH.g = BH.e
```

#### 320. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1636` → after: `L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1757) · [Before (L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1636)

```diff
-   7849: (VV, eV) => {
+   7820: (HH, BH) => {
```

#### 321. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1650` → after: `L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1771) · [Before (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1650)

```diff
-   8225: (VV, eV) => {
+   8221: (HH, BH) => {
```

#### 322. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1655` → after: `L1776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1776) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1655)

```diff
-     eV.d = {
+     BH.c = {
```

#### 323. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1659` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1780) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1659)

```diff
-     }, eV.g = eV.d
+     }, BH.d = BH.c
```

#### 324. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1661` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1782) · [Before (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1661)

```diff
-   8229: (VV, eV) => {
+   8224: (HH, BH) => {
```

#### 325. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1665` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1786) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1665)

```diff
-     eV.b = {
+     BH.c = {
```

#### 326. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1669` → after: `L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1790) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1669)

```diff
-     }, eV.c = eV.b
+     }, BH.g = BH.c
```

#### 327. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1671` → after: `L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1792) · [Before (L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1671)

```diff
-   8235: (VV, eV) => {
+   8233: (HH, BH) => {
```

#### 328. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1675` → after: `L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1796) · [Before (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1675)

```diff
-     eV.c = {
+     BH.d = {
```

#### 329. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1679` → after: `L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1800) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1679)

```diff
-     }, eV.g = eV.c
+     }, BH.e = BH.d
```

#### 330. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1681` → after: `L1802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1802) · [Before (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1681)

```diff
-   8241: (VV, eV) => {
+   8236: (HH, BH) => {
```

#### 331. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1690` → after: `L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1811) · [Before (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1690)

```diff
-     }, eV.g = eV.e
+     }, BH.f = BH.e
```

#### 332. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1692` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1813) · [Before (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1692)

```diff
-   7726: (VV, eV) => {
+   7721: (HH, BH) => {
```

#### 333. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1706` → after: `L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1827) · [Before (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1706)

```diff
-   8139: (VV, eV) => {
+   8130: (HH, BH) => {
```

#### 334. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1720` → after: `L1841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1841) · [Before (L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1720)

```diff
-   8245: (VV, eV) => {
+   8244: (HH, BH) => {
```

#### 335. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1725` → after: `L1846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1846) · [Before (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1725)

```diff
-     eV.e = {
+     BH.d = {
```

#### 336. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1729` → after: `L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1850) · [Before (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1729)

```diff
-     }, eV.g = eV.e
+     }, BH.e = BH.d
```

#### 337. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1731` → after: `L1852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1852) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1731)

```diff
-   8254: (VV, eV) => {
+   8249: (HH, BH) => {
```

#### 338. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1736` → after: `L1857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1857) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1736)

```diff
-     eV.c = {
+     BH.b = {
```

#### 339. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1740` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1861) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1740)

```diff
-     }, eV.f = eV.c
+     }, BH.c = BH.b
```

#### 340. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1742` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1863) · [Before (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1742)

```diff
-   8260: (VV, eV) => {
+   8252: (HH, BH) => {
```

#### 341. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1747` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1868) · [Before (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1747)

```diff
-     eV.b = {
+     BH.d = {
```

#### 342. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1751` → after: `L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1872) · [Before (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1751)

```diff
-     }, eV.d = eV.b
+     }, BH.g = BH.d
```

#### 343. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1753` → after: `L1874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1874) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1753)

```diff
-   8266: (VV, eV) => {
+   8261: (HH, BH) => {
```

#### 344. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1762` → after: `L1883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1883) · [Before (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1762)

```diff
-     }, eV.g = eV.c
+     }, BH.e = BH.c
```

#### 345. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1764` → after: `L1885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1885) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1764)

```diff
-   8279: (VV, eV) => {
+   8268: (HH, BH) => {
```

#### 346. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1769` → after: `L1890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1890) · [Before (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1769)

```diff
-     eV.c = {
+     BH.e = {
```

#### 347. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1773` → after: `L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1894) · [Before (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1773)

```diff
-     }, eV.f = eV.c
+     }, BH.g = BH.e
```

#### 348. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1775` → after: `L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1896) · [Before (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1775)

```diff
-   8274: (VV, eV) => {
+   8265: (HH, BH) => {
```

#### 349. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1784` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1905) · [Before (L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1784)

```diff
-     }, eV.d = eV.c
+     }, BH.g = BH.c
```

#### 350. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1786` → after: `L1907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1907) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1786)

```diff
-   8287: (VV, eV) => {
+   8270: (HH, BH) => {
```

#### 351. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1795` → after: `L1916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1916) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1795)

```diff
-     }, eV.g = eV.e
+     }, BH.f = BH.e
```

#### 352. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1797` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1918) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1797)

```diff
-   8296: (VV, eV) => {
+   8278: (HH, BH) => {
```

#### 353. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1806` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1927) · [Before (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1806)

```diff
-     }, eV.e = eV.c
+     }, BH.d = BH.c
```

#### 354. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1808` → after: `L1929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1929) · [Before (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1808)

```diff
-   7342: (VV, eV) => {
+   7323: (HH, BH) => {
```

#### 355. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1821-L1822` → after: `L1942-L1943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1942-L1943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1942-L1943) · [Before (L1821-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1821-L1822)

```diff
-   8300: (VV, eV, xV) => {
-     var JV = xV(7582);
+   8280: (HH, BH, LH) => {
+     var AH = LH(7590);
```

#### 356. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1827` → after: `L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1948) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1827)

```diff
-     }, eV.g = eV.c, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.d = BH.c, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 357. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1829` → after: `L1950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1950) · [Before (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1829)

```diff
-   8302: (VV, eV) => {
+   8286: (HH, BH) => {
```

#### 358. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1834` → after: `L1955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1955) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1834)

```diff
-     eV.c = {
+     BH.b = {
```

#### 359. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1838` → after: `L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1959) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1838)

```diff
-     }, eV.e = eV.c
+     }, BH.c = BH.b
```

#### 360. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1840` → after: `L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1961) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1840)

```diff
-   8308: (VV, eV) => {
+   8295: (HH, BH) => {
```

#### 361. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1845` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1966) · [Before (L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1845)

```diff
-     eV.b = {
+     BH.d = {
```

#### 362. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1849` → after: `L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1970) · [Before (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1849)

```diff
-     }, eV.f = eV.b
+     }, BH.f = BH.d
```

#### 363. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1851` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1972) · [Before (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1851)

```diff
-   8311: (VV, eV) => {
+   8301: (HH, BH) => {
```

#### 364. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1856` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1977) · [Before (L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1856)

```diff
-     eV.b = {
+     BH.c = {
```

#### 365. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1860` → after: `L1981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1981) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1860)

```diff
-     }, eV.c = eV.b
+     }, BH.d = BH.c
```

#### 366. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1862` → after: `L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1983) · [Before (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1862)

```diff
-   8314: (VV, eV) => {
+   8308: (HH, BH) => {
```

#### 367. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1871` → after: `L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1992) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1871)

```diff
-     }, eV.e = eV.c
+     }, BH.d = BH.c
```

#### 368. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1873-L1874` → after: `L1994-L1995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1994-L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L1994-L1995) · [Before (L1873-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1873-L1874)

```diff
-   8323: (VV, eV, xV) => {
-     var JV = xV(8326);
+   8313: (HH, BH, LH) => {
+     var AH = LH(8318);
```

#### 369. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1879` → after: `L2000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2000) · [Before (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1879)

```diff
-     }, eV.g = eV.c, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.f = BH.c, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 370. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1881-L1882` → after: `L2002-L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2002-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2002-L2003) · [Before (L1881-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1881-L1882)

```diff
-   8330: (VV, eV, xV) => {
-     var JV = xV(7418);
+   8320: (HH, BH, LH) => {
+     var AH = LH(7429);
```

#### 371. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1887` → after: `L2008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2008) · [Before (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1887)

```diff
-     }, eV.d = eV.c, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.g = BH.c, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 372. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1889` → after: `L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2010) · [Before (L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1889)

```diff
-   8335: (VV, eV) => {
+   8328: (HH, BH) => {
```

#### 373. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1903` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2024) · [Before (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1903)

```diff
-   8337: (VV, eV) => {
+   8333: (HH, BH) => {
```

#### 374. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1908` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2029) · [Before (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1908)

```diff
-     eV.c = {
+     BH.b = {
```

#### 375. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1912` → after: `L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2033) · [Before (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1912)

```diff
-     }, eV.f = eV.c
+     }, BH.c = BH.b
```

#### 376. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1914-L1915` → after: `L2035-L2036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2035-L2036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2035-L2036) · [Before (L1914-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1914-L1915)

```diff
-   8344: (VV, eV, xV) => {
-     var JV = xV(8326);
+   8339: (HH, BH, LH) => {
+     var AH = LH(8318);
```

#### 377. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1920` → after: `L2041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2041) · [Before (L1920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1920)

```diff
-     }, eV.f = eV.d, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.e = BH.d, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 378. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1922` → after: `L2043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2043) · [Before (L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1922)

```diff
-   8347: (VV, eV) => {
+   8343: (HH, BH) => {
```

#### 379. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1927` → after: `L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2048) · [Before (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1927)

```diff
-     eV.e = {
+     BH.b = {
```

#### 380. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1931` → after: `L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2052) · [Before (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1931)

```diff
-     }, eV.h = eV.e
+     }, BH.f = BH.b
```

#### 381. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1933` → after: `L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2054) · [Before (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1933)

```diff
-   8326: (VV, eV) => {
+   8318: (HH, BH) => {
```

#### 382. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1947` → after: `L2068-L2079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2068-L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2068-L2079) · [Before (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1947)

```diff
-   7673: (VV, eV) => {
+   8352: (HH, BH) => {
+     var LH = "scarf",
+       AH = [129507],
+       rH = "f7c1",
+       SH = "M184.5 0c-48.6 0-88 39.4-88 88l0 101.5c0 23.3 9.3 45.7 25.8 62.2l117.3 117.3 17 17 17-17 111-111-113-113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L411.9 217.5c3-8.9 4.6-18.4 4.6-28l0-101.5c0-48.6-39.4-88-88-88l-144 0zM7.5 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l85 … [truncated]
+     BH.d = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [512, 512, AH, rH, SH]
+     }, BH.h = BH.d
+   },
+   7676: (HH, BH) => {
```

#### 383. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1961-L1963` → after: `L2093-L2095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2093-L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2093-L2095) · [Before (L1961-L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1961-L1963)

```diff
-   8355: (VV, eV, xV) => {
-     var JV = xV(8124);
-     eV.c = {
+   8356: (HH, BH, LH) => {
+     var AH = LH(8113);
+     BH.b = {
```

#### 384. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1967` → after: `L2099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2099) · [Before (L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1967)

```diff
-     }, eV.e = eV.c, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.c = BH.b, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 385. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1969` → after: `L2101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2101) · [Before (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1969)

```diff
-   8358: (VV, eV) => {
+   8363: (HH, BH) => {
```

#### 386. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1984-L1985` → after: `L2116-L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2116-L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2116-L2117) · [Before (L1984-L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1984-L1985)

```diff
-     var JV = xV(8368);
-     eV.d = {
+     var AH = LH(8372);
+     BH.b = {
```

#### 387. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1989` → after: `L2121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2121) · [Before (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1989)

```diff
-     }, eV.f = eV.d, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.d = BH.b, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 388. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1991-L1993` → after: `L2123-L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2123-L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2123-L2125) · [Before (L1991-L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1991-L1993)

```diff
-   8373: (VV, eV, xV) => {
-     var JV = xV(8358);
-     eV.b = {
+   8381: (HH, BH, LH) => {
+     var AH = LH(8363);
+     BH.e = {
```

#### 389. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1997` → after: `L2129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2129) · [Before (L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1997)

```diff
-     }, eV.f = eV.b, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.f = BH.e, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 390. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1999` → after: `L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2131) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L1999)

```diff
-   8368: (VV, eV) => {
+   8372: (HH, BH) => {
```

#### 391. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2013` → after: `L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2145) · [Before (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2013)

```diff
-   8380: (VV, eV) => {
+   8383: (HH, BH) => {
```

#### 392. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2022` → after: `L2154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2154) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2022)

```diff
-     }, eV.e = eV.d
+     }, BH.f = BH.d
```

#### 393. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2024` → after: `L2156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2156) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2024)

```diff
-   8386: (VV, eV) => {
+   8387: (HH, BH) => {
```

#### 394. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2029` → after: `L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2161) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2029)

```diff
-     eV.d = {
+     BH.c = {
```

#### 395. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2033` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2165) · [Before (L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2033)

```diff
-     }, eV.f = eV.d
+     }, BH.g = BH.c
```

#### 396. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2035-L2037` → after: `L2167-L2169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2167-L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2167-L2169) · [Before (L2035-L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2035-L2037)

```diff
-   8388: (VV, eV, xV) => {
-     var JV = xV(7539);
-     eV.d = {
+   8396: (HH, BH, LH) => {
+     var AH = LH(7549);
+     BH.c = {
```

#### 397. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2041` → after: `L2173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2173) · [Before (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2041)

```diff
-     }, eV.g = eV.d, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.g = BH.c, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 398. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2043-L2045` → after: `L2175-L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2175-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2175-L2177) · [Before (L2043-L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2043-L2045)

```diff
-   8393: (VV, eV, xV) => {
-     var JV = xV(8335);
-     eV.e = {
+   8400: (HH, BH, LH) => {
+     var AH = LH(8328);
+     BH.c = {
```

#### 399. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2049` → after: `L2181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2181) · [Before (L2049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2049)

```diff
-     }, eV.f = eV.e, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.e = BH.c, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 400. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2051` → after: `L2183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2183) · [Before (L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2051)

```diff
-   8395: (VV, eV) => {
+   8408: (HH, BH) => {
```

#### 401. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2056` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2188) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2056)

```diff
-     eV.d = {
+     BH.e = {
```

#### 402. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2060` → after: `L2192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2192) · [Before (L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2060)

```diff
-     }, eV.e = eV.d
+     }, BH.f = BH.e
```

#### 403. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2062-L2064` → after: `L2194-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2194-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2194-L2196) · [Before (L2062-L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2062-L2064)

```diff
-   8398: (VV, eV, xV) => {
-     var JV = xV(7801);
-     eV.c = {
+   8415: (HH, BH, LH) => {
+     var AH = LH(7785);
+     BH.e = {
```

#### 404. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2068` → after: `L2200-L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2200-L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2200-L2211) · [Before (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2068)

```diff
-     }, eV.f = eV.c, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
+     }, BH.h = BH.e, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
+   },
+   8423: (HH, BH) => {
+     var LH = "snooze",
+       AH = [128164, "zzz"],
+       rH = "f880",
+       SH = "M192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0-57.6 76.8c-7.3 9.7-8.4 22.7-3 33.5S179.9 192 192 192l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 57.6-76.8c7.3-9.7 8.4-22.7 3-33.5S300.1 0 288 0L192 0zM320 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0-57.6 76.8c-7.3 9 … [truncated]
+     BH.b = {
+       prefix: "fas",
+       iconName: LH,
+       icon: [448, 512, AH, rH, SH]
+     }, BH.c = BH.b
```

#### 405. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2070` → after: `L2213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2213) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2070)

```diff
-   8402: (VV, eV) => {
+   8429: (HH, BH) => {
```

#### 406. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2075` → after: `L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2218) · [Before (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2075)

```diff
-     eV.c = {
+     BH.e = {
```

#### 407. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2079` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2222) · [Before (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2079)

```diff
-     }, eV.e = eV.c
+     }, BH.i = BH.e
```

#### 408. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2081` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2224) · [Before (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2081)

```diff
-   8410: (VV, eV) => {
+   8434: (HH, BH) => {
```

#### 409. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2090` → after: `L2233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2233) · [Before (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2090)

```diff
-     }, eV.e = eV.b
+     }, BH.f = BH.b
```

#### 410. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2092` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2235) · [Before (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2092)

```diff
-   8413: (VV, eV) => {
+   8437: (HH, BH) => {
```

#### 411. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2097` → after: `L2240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2240) · [Before (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2097)

```diff
-     eV.c = {
+     BH.e = {
```

#### 412. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2101` → after: `L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2244) · [Before (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2101)

```diff
-     }, eV.e = eV.c
+     }, BH.i = BH.e
```

#### 413. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2103` → after: `L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2246) · [Before (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2103)

```diff
-   8425: (VV, eV) => {
+   8446: (HH, BH) => {
```

#### 414. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2108` → after: `L2251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2251) · [Before (L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2108)

```diff
-     eV.d = {
+     BH.b = {
```

#### 415. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2112` → after: `L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2255) · [Before (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2112)

```diff
-     }, eV.e = eV.d
+     }, BH.d = BH.b
```

#### 416. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2114` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2257) · [Before (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2114)

```diff
-   8183: (VV, eV) => {
+   8166: (HH, BH) => {
```

#### 417. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2128` → after: `L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/169.js#L2271) · [Before (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/169.js#L2128)

```diff
-   8430: (VV, eV) => {
+   8455: (HH, BH) => {
```
