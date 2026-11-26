# Changed — Bundle Modifications Report (Part 020 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `20 / 99` (**284** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 019](part-019.md) · [Part 021 →](part-021.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/166.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/166.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172)

#### 4. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L58-L76` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/166.js#L19-L21) · [Before (L58-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/166.js#L58-L76)

```diff
-         return window.nitroAds = window.nitroAds || {
-           createAd: function() {
-             for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
-             return new Promise((MM => {
-               window.nitroAds.queue.push(["createAd", rM, MM])
-             }))
-           },
-           addUserToken: function() {
-             for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
-             window.nitroAds.queue.push(["addUserToken", rM])
-           },
-           queue: []
-         }, document.addEventListener("nitroAds.rendered", (MM => {
-           var rM, iM, OM;
-           const SM = document.getElementById(null !== (rM = null === (iM = MM.detail) || void 0 === iM || null === (OM = iM.adInfo) || void 0 === OM ? void 0 : OM.adUnitCode) && void 0 !== rM ? rM : "");
-           null !== SM && void 0 !== SM && SM.classList.contains("NitroBanner") && SM.classList.toggle("NitroBannerUnfilled", "blank" === MM.detail.type)
- ... (3 more removed lines; see GitHub link above)
+         return window.tude = window.tude || {
+           cmd: []
+         }, await (0, yU.c)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new AU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L79` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/166.js#L24) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/166.js#L79)

```diff
-         this.showVideoAd(MM, MM)
+         this.playVideoOrRewarded("video", UU, UU)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L82-L150` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/166.js#L27) · [Before (L82-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/166.js#L82-L150)

```diff
-         this.showVideoAd(MM, rM)
-       }
-       showVideoAd(MM, rM) {
-         if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void rM();
-         const iM = document.getElementById("GenericVideoWrapper"),
-           OM = document.getElementById("GenericVideoInner");
-         if (null === iM || null === OM) return void rM();
-         this.videoInFlight = !0;
-         let SM = !1;
-         const jM = document.createElement("div");
-         jM.id = PM, jM.className = "NitroVideoPlacement";
-         const aM = aM => {
-           if (!SM) {
-             SM = !0, clearTimeout(yM), clearInterval(dM), document.removeEventListener("nitroAds.adResult", zM), document.removeEventListener("nitroAds.rendered", LM), document.removeEventListener("nitroAds.complete", mM);
-             try {
-               HM.remove(), jM.querySelectorAll("video").forEach((MM => {
- ... (53 more removed lines; see GitHub link above)
+         this.playVideoOrRewarded("rewarded", UU, XU)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L153-L167` → after: `L30-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L30-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/166.js#L30-L36) · [Before (L153-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/166.js#L153-L167)

```diff
-         const {
-           divId: rM,
-           width: iM,
-           height: OM
-         } = MM, SM = `${rM}-nitro`;
-         let jM = document.getElementById(SM);
-         null === jM && (jM = document.createElement("div"), jM.id = SM, jM.className = "NitroBanner", jM.style.setProperty("--nitro-slot-width", `${iM}px`), jM.style.setProperty("--nitro-slot-height", `${OM}px`), document.getElementById(rM).appendChild(jM));
-         const aM = [
-           [String(iM), String(OM)]
-         ];
-         Promise.resolve(window.nitroAds.createAd(SM, {
-           sizes: aM
-         })).catch((MM => {
-           console.error(`AD: Nitro failed to create banner ${SM}:`, MM)
-         })), console.log(`AD: Requested Nitro banner ${SM}`)
+         const XU = this.getBaseDivId(UU.adId, UU.width, UU.height);
+         window.tude.cmd.push((function() {
+           window.tude.refreshAdsViaDivMappings([{
+             divId: UU.divId,
+             baseDivId: XU
+           }])
+         }))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L169-L171` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/166.js#L38-L39) · [Before (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/166.js#L169-L171)

```diff
-       displayConsentUI() {
-         var MM, rM;
-         null === (MM = (rM = window).__cmp) || void 0 === MM || MM.call(rM, "showModal")
+       getBaseDivId(UU, XU, zU) {
+         return `pb-slot-bloxdio-${XU}-${zU}${UU>1?`-${UU}`:""}`
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L173-L182` → after: `L41-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L41-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/166.js#L41-L78) · [Before (L173-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/166.js#L173-L182)

```diff
-       addPrivacyLinks(MM) {
-         var rM, iM, OM, SM;
-         const jM = document.createElement("span");
-         jM.dataset.ccpaLink = "1";
-         const aM = document.createElement("div");
-         aM.id = "ncmp-consent-link", MM.replaceChildren(jM, aM), null === (rM = (iM = window).__uspapi) || void 0 === rM || rM.call(iM, "addLink", 1), null === (OM = (SM = window).__cmp) || void 0 === OM || OM.call(SM, "addConsentLink")
-       }
-       newPageSession() {
-         var MM, rM;
-         null === (MM = (rM = window.nitroAds).navigate) || void 0 === MM || MM.call(rM)
+       playVideoOrRewarded(UU, XU, zU) {
+         var cU;
+         let yU = !1;
+         const AU = () => {
+             document.getElementById("GenericVideoWrapper").style.display = "none", yU = !0
+           },
+           FU = (UU, XU) => {
+             console.error(`AD: Error while playing Aditude video ad: ${UU}:`, XU), AU(), zU()
+           };
+         if (console.log(`AD: Requesting Aditude ${UU} ad`), void 0 === (null === (cU = window.tude) || void 0 === cU ? void 0 : cU.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${UU} ad playing`), void FU("Aditude ad lib not loaded", null);
+         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
+           console.log("AD: Inside Aditude window.tude.cmd.push");
+           try {
+             window.tude.requestInstreamPlayer({
+               code: QU[UU],
+               divId: "GenericVideoInner",
+ ... (22 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/167.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/167.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73)

#### 1. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L4-L51` → after: `L5-L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L5-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/167.js#L5-L2614) · [Before (L4-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/167.js#L4-L51)

```diff
-   7228: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       AdsenseForGamesSdkAdaptor: () => jM
-     });
-     var OM = iM(1367),
-       SM = iM(1177);
-     class jM extends OM.d {
-       constructor() {
-         super(), this.name = "adsense"
-       }
-       static async setup() {
-         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(MM) {
-           window.adsbygoogle.push(MM)
-         }, window.adConfig({
-           preloadAdBreaks: "on",
-           sound: "on",
- ... (32 more removed lines; see GitHub link above)
+   7385: (UU, XU, zU) => {
+     var cU = zU(7388);
+     XU.e = {
+       prefix: cU.prefix,
+       iconName: cU.iconName,
+       icon: [cU.width, cU.height, cU.aliases, cU.unicode, cU.svgPathData]
+     }, XU.g = XU.e, cU.prefix, cU.iconName, cU.width, cU.height, cU.aliases, cU.unicode, cU.svgPathData, cU.aliases
+   },
+   7392: (UU, XU, zU) => {
+     var cU = zU(7394);
+     XU.e = {
+       prefix: cU.prefix,
+       iconName: cU.iconName,
+       icon: [cU.width, cU.height, cU.aliases, cU.unicode, cU.svgPathData]
+     }, XU.h = XU.e, cU.prefix, cU.iconName, cU.width, cU.height, cU.aliases, cU.unicode, cU.svgPathData, cU.aliases
+   },
+ ... (2594 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/168.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/168.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L4-L6` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/168.js#L4-L17) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/168.js#L4-L6)

```diff
-   7230: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       AditudeSdkAdaptor: () => aM
+   8724: (UU, XU) => {
+     var zU = "youtube",
+       cU = [61802],
+       yU = "f167",
+       QU = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
+     XU.c = {
+       prefix: "fab",
+       iconName: zU,
+       icon: [576, 512, cU, yU, QU]
+     }, XU.e = XU.c
+   },
+   7517: (UU, XU) => {
+     Object.defineProperty(XU, "__esModule", {
+       value: !0
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L8-L9` → after: `L19-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L19-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/168.js#L19-L167) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/168.js#L8-L9)

```diff
-     var OM = iM(1367),
-       SM = iM(1177);
+     var zU = "bolt",
+       cU = [9889, "zap"],
+       yU = "f0e7",
+       QU = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
+     XU.definition = {
+       prefix: "fas",
+       iconName: zU,
+       icon: [448, 512, cU, yU, QU]
+     }, XU.faBolt = XU.definition, XU.prefix = "fas", XU.iconName = zU, XU.width = 448, XU.height = 512, XU.ligatures = cU, XU.unicode = yU, XU.svgPathData = QU, XU.aliases = cU
+   },
+   8247: (UU, XU) => {
+     var zU = "person-military-pointing",
+       cU = [],
+       yU = "e54a",
+       QU = "M214.9 14.1C202 15.2 192 26 192 39 192 52.8 203.2 64 217 64l151 0c8.8 0 16-7.2 16-16l0-30.6C384 8 376 .7 366.7 1.4L214.9 14.1zM208 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16L209.6 96c-1 5.2-1.6 10.5-1.6 16zM40 224c-22.1 0-40 17.9-40 40s17.9 40 40 40l1 … [truncated]
+     XU.b = {
+ ... (133 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L11-L12` → after: `L169-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/168.js#L169-L174) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/168.js#L11-L12)

```diff
-       video: "pb-slot-interstitial-video",
-       rewarded: "pb-slot-rewarded-video"
+       youtube: pU.e,
+       "person-military-pointing": aU.c,
+       sparkle: tU.i,
+       user: gU.e,
+       wrench: kU.d,
+       zap: GU.d
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L14-L41` → after: `L176-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L176-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/168.js#L176-L259) · [Before (L14-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/168.js#L14-L41)

```diff
-     class aM extends OM.d {
-       constructor() {
-         super(), this.name = "aditude"
-       }
-       static async setup() {
-         return window.tude = window.tude || {
-           cmd: []
-         }, await (0, SM.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new aM
-       }
-       playVideoAd(MM, rM) {
-         this.playVideoOrRewarded("video", MM, MM)
-       }
-       playRewarded(MM, rM) {
-         this.playVideoOrRewarded("rewarded", MM, rM)
-       }
-       renderBanner(MM) {
- ... (12 more removed lines; see GitHub link above)
+ 
+     function ZU(UU) {
+       const [XU, zU, , , cU] = UU.icon;
+       return {
+         width: XU,
+         height: zU,
+         path: "string" === typeof cU ? cU : cU.join(" ")
+       }
+     }
+     const RU = new Map(Object.entries(BU).map((UU => {
+       let [XU, zU] = UU;
+       return [XU, ZU(zU)]
+     })));
+     let PU = !1;
+     const WU = new Set;
+     var dU = zU(41947);
+ ... (68 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L43-L48` → after: `L261-L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L261-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/168.js#L261-L1042) · [Before (L43-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/168.js#L43-L48)

```diff
-         let SM = !1;
-         const aM = () => {
-             document.getElementById("GenericVideoWrapper").style.display = "none", SM = !0
-           },
-           PM = (MM, rM) => {
-             console.error(`AD: Error while playing Aditude video ad: ${MM}:`, rM), aM(), iM()
+         this.restWanted || (this.restWanted = !0, null === (UU = this.rest) || void 0 === UU || UU.load())
+       }
+       loadFor(UU) {
+         !this.restWanted && OU.test(UU) && this.loadRest()
+       }
+     }(VU);
+ 
+     function nU(UU) {
+       Object.assign(fU, UU), fU.loadsFontRest && sU.loadRest(), VU(!1)
+     }
+ 
+     function mU(UU) {
+       UU !== iU && (iU = UU, VU())
+     }
+ 
+     function lU(UU) {
+ ... (766 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L50-L76` → after: `L1044-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L1044-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/168.js#L1044-L1052) · [Before (L50-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/168.js#L50-L76)

```diff
-         if (console.log(`AD: Requesting Aditude ${MM} ad`), void 0 === (null === (OM = window.tude) || void 0 === OM ? void 0 : OM.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${MM} ad playing`), void PM("Aditude ad lib not loaded", null);
-         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
-           console.log("AD: Inside Aditude window.tude.cmd.push");
-           try {
-             window.tude.requestInstreamPlayer({
-               code: jM[MM],
-               divId: "GenericVideoInner",
-               mode: "adOnly"
-             }).then((iM => {
-               console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), iM.on("playerClose", ((iM, OM) => {
-                 console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${MM} ad`), aM(), rM()
-               })).on("adPrefetchError", ((MM, rM) => {
-                 console.log("AD: Inside Aditude player.on adPrefetchError"), PM("Prefetch error", rM)
-               })).on("adError", ((MM, rM) => {
-                 console.log("AD: Inside Aditude player.on adError"), PM("Generic error", rM)
-               }));
- ... (11 more removed lines; see GitHub link above)
+         return {
+           width: QU.pixelWidth,
+           height: QU.pixelHeight,
+           draw: UU => {
+             const {
+               a: XU,
+               d: zU
+             } = UU.getTransform();
+             (0, KU.d)(UU, Math.round(QU.pixelWidth * XU), Math.round(QU.pixelHeight * zU), QU, yU, AU)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L78` → after: `L1054-L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L1054-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/168.js#L1054-L1105) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/168.js#L78)

```diff
-         }))
+         }
+       }(JSON.parse(XU), AX, UX);
+       throw new Error(`unknown text plane kind ${UU}`)
+     }
+     const ZX = 2 ** Math.floor(Math.log2(UX));
+ 
+     function RX(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       try {
+         if (UU.length < 2) return [0, 0];
+         const QU = (0, yU.c)(XU);
+         if (!QU) return [0, 0];
+         const AU = tX();
+         AU !== FX && (FX = AU, gX());
+         const [FU] = UU, oU = QX.decode(UU.subarray(1));
+ ... (36 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/169.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/169.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L5-L2250` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/169.js#L4-L6) · [Before (L5-L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/169.js#L5-L2250)

```diff
-   7259: (MM, rM, iM) => {
-     var OM = iM(7263);
-     rM.e = {
-       prefix: OM.prefix,
-       iconName: OM.iconName,
-       icon: [OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData]
-     }, rM.i = rM.e, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
-   },
-   7265: (MM, rM, iM) => {
-     var OM = iM(7273);
-     rM.d = {
-       prefix: OM.prefix,
-       iconName: OM.iconName,
-       icon: [OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData]
-     }, rM.f = rM.d, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
-   },
- ... (2230 more removed lines; see GitHub link above)
+   9447: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => FU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L2252-L2360` → after: `L8-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L8-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/169.js#L8-L38) · [Before (L2252-L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/169.js#L2252-L2360)

```diff
-     var iM = "triangle-exclamation",
-       OM = [9888, "exclamation-triangle", "warning"],
-       SM = "f071",
-       jM = "M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3  … [truncated]
-     rM.definition = {
-       prefix: "fas",
-       iconName: iM,
-       icon: [512, 512, OM, SM, jM]
-     }, rM.faTriangleExclamation = rM.definition, rM.prefix = "fas", rM.iconName = iM, rM.width = 512, rM.height = 512, rM.ligatures = OM, rM.unicode = SM, rM.svgPathData = jM, rM.aliases = OM
-   },
-   8400: (MM, rM) => {
-     var iM = "trophy",
-       OM = [127942],
-       SM = "f091",
-       jM = "M144.3 0l224 0c26.5 0 48.1 21.8 47.1 48.2-.2 5.3-.4 10.6-.7 15.8l49.6 0c26.1 0 49.1 21.6 47.1 49.8-7.5 103.7-60.5 160.7-118 190.5-15.8 8.2-31.9 14.3-47.2 18.8-20.2 28.6-41.2 43.7-57.9 51.8l0 73.1 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14 … [truncated]
-     rM.c = {
- ... (93 more removed lines; see GitHub link above)
+     var cU = zU(27),
+       yU = zU(1193),
+       QU = zU(5540),
+       AU = zU(1305);
+ 
+     function FU(UU) {
+       let {
+         note: XU
+       } = UU;
+       const {
+         t: zU
+       } = (0, yU.I)(), {
+         clientEscMenuOptions: FU
+       } = (0, cU.q)(["clientEscMenuOptions"]);
+       return (0, AU.jsx)(QU.e, {
+         label: zU("touchSettings:actionButtons"),
+ ... (15 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L2362-L2374` → after: `L40-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L40-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/169.js#L40-L274) · [Before (L2362-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/169.js#L2362-L2374)

```diff
-     var iM = "user-group",
-       OM = [128101, "user-friends"],
-       SM = "f500",
-       jM = "M64 128a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zM0 464c0-97.2 78.8-176 176-176s176 78.8 176 176l0 6c0 23.2-18.8 42-42 42L42 512c-23.2 0-42-18.8-42-42l0-6zM432 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 240c79.5 0 144 64.5 144 144l0 22.4c0 23-18.6 41.6-41.6 41.6l-144.8 … [truncated]
-     rM.definition = {
-       prefix: "fas",
-       iconName: iM,
-       icon: [576, 512, OM, SM, jM]
-     }, rM.faUserGroup = rM.definition, rM.prefix = "fas", rM.iconName = iM, rM.width = 576, rM.height = 512, rM.ligatures = OM, rM.unicode = SM, rM.svgPathData = jM, rM.aliases = OM
-   },
-   8442: (MM, rM) => {
-     Object.defineProperty(rM, "__esModule", {
-       value: !0
+     var cU = zU(1193),
+       yU = zU(61),
+       QU = zU(2058),
+       AU = zU(2067),
+       FU = zU(1106),
+       oU = zU.n(FU),
+       DU = zU(1494),
+       EU = zU(27),
+       YU = zU(97),
+       NU = zU(114),
+       IU = zU(5540),
+       pU = zU(2616),
+       aU = zU(287),
+       tU = zU(2071),
+       gU = zU(2077),
+       kU = zU(9443),
+ ... (219 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L2376-L2451` → after: `L276-L3009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L276-L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/169.js#L276-L3009) · [Before (L2376-L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/169.js#L2376-L2451)

```diff
-     var iM = "user-group-crown",
-       OM = ["users-crown"],
-       SM = "f6a5",
-       jM = "M240 128c0 35.3-28.7 64-64 64s-64-28.7-64-64l128 0zM64 25.9L64 128c0 61.9 50.1 112 112 112s112-50.1 112-112l0-102.1c0-11.9-12.5-19.6-23.2-14.3L234.3 26.8c-6.2 3.1-13.6 1.9-18.5-3L187.3-4.7c-6.2-6.2-16.4-6.2-22.6 0L136.2 23.8c-4.9 4.9-12.3 6.1-18.5 3L87.2 11.6C76.5 6.3 … [truncated]
-     rM.definition = {
-       prefix: "fas",
-       iconName: iM,
-       icon: [576, 512, OM, SM, jM]
-     }, rM.faUserGroupCrown = rM.definition, rM.prefix = "fas", rM.iconName = iM, rM.width = 576, rM.height = 512, rM.ligatures = OM, rM.unicode = SM, rM.svgPathData = jM, rM.aliases = OM
-   },
-   8450: (MM, rM) => {
-     var iM = "user-minus",
-       OM = [],
-       SM = "f503",
-       jM = "M285.7 304c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7L77.7 512C61.3 512 48 498.7 48 482.3 48 383.8 127.8 304 226.3 304l59.4 0zM256 248a120 120 0 1 1 0-240 120 120 0 1 1 0 240zm344-96c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-2 … [truncated]
-     rM.b = {
- ... (60 more removed lines; see GitHub link above)
+ 
+     function UX(UU) {
+       let {
+         id: XU,
+         slot: zU,
+         icon: cU,
+         label: QU,
+         hidden: AU,
+         className: FU,
+         face: DU
+       } = UU;
+       const EU = (0, yU.useRef)(null);
+       return (0, yU.useLayoutEffect)((() => {
+         DU && EU.current && (0, TU.n)(EU.current, DU)
+       }), [DU]), (0, ZU.jsxs)("div", {
+         className: oU()("TouchKeyHit", `TouchSlot${zU}`, FU, {
+ ... (2718 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L2453-L2473` → after: `L3011-L3054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R3011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L3011-L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/169.js#L3011-L3054) · [Before (L2453-L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/169.js#L2453-L2473)

```diff
-     var iM = "video",
-       OM = ["video-camera"],
-       SM = "f03d",
-       jM = "M96 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L96 64zM464 336l73.5 58.8c4.2 3.4 9.4 5.2 14.8 5.2 13.1 0 23.7-10.6 23.7-23.7l0-240.6c0-13.1-10.6-23.7-23.7-23.7-5.4 0-10.6 1.8-14.8 5.2L464 176 464 336z";
-     rM.definition = {
-       prefix: "fas",
-       iconName: iM,
-       icon: [576, 512, OM, SM, jM]
-     }, rM.faVideo = rM.definition, rM.prefix = "fas", rM.iconName = iM, rM.width = 576, rM.height = 512, rM.ligatures = OM, rM.unicode = SM, rM.svgPathData = jM, rM.aliases = OM
-   },
-   8484: (MM, rM, iM) => {
-     var OM = iM(8481);
-     rM.b = {
-       prefix: OM.prefix,
-       iconName: OM.iconName,
-       icon: [OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData]
- ... (5 more removed lines; see GitHub link above)
+     var cU = zU(61),
+       yU = zU(1390),
+       QU = zU(1305);
+     const AU = (0, cU.forwardRef)((function(UU, XU) {
+       let {
+         icon: zU,
+         title: cU,
+         sub: AU,
+         expanded: FU,
+         onClick: oU
+       } = UU;
+       return (0, QU.jsxs)("button", {
+         ref: XU,
+         type: "button",
+         className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
+         "aria-expanded": FU,
+ ... (28 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L2475-L2491` → after: `L3056-L3127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R3056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L3056-L3127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/169.js#L3056-L3127) · [Before (L2475-L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/169.js#L2475-L2491)

```diff
-     var iM = "volume",
-       OM = [128265, "volume-medium"],
-       SM = "f6a8",
-       jM = "M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 … [truncated]
-     rM.definition = {
-       prefix: "fas",
-       iconName: iM,
-       icon: [512, 512, OM, SM, jM]
-     }, rM.faVolume = rM.definition, rM.prefix = "fas", rM.iconName = iM, rM.width = 512, rM.height = 512, rM.ligatures = OM, rM.unicode = SM, rM.svgPathData = jM, rM.aliases = OM
-   },
-   8497: (MM, rM, iM) => {
-     var OM = iM(8502);
-     rM.e = {
-       prefix: OM.prefix,
-       iconName: OM.iconName,
-       icon: [OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData]
- ... (1 more removed lines; see GitHub link above)
+     var cU = zU(1715),
+       yU = zU(1808);
+     const QU = UU => UU >= 56320 && UU <= 57343,
+       AU = UU => UU >= 55296 && UU <= 56319,
+       FU = (UU, XU) => XU >= 2 && QU(UU.charCodeAt(XU - 1)) && AU(UU.charCodeAt(XU - 2)) ? XU - 2 : Math.max(0, XU - 1),
+       oU = (UU, XU) => {
+         let zU;
+         var cU, yU;
+         return zU = UU.start !== UU.end ? XU < 0 ? UU.start : UU.end : XU < 0 ? FU(UU.value, UU.start) : (cU = UU.value, (yU = UU.start) + 1 < cU.length && AU(cU.charCodeAt(yU)) && QU(cU.charCodeAt(yU + 1)) ? yU + 2 : Math.min(cU.length, yU + 1)), {
+           value: UU.value,
+           start: zU,
+           end: zU
+         }
+       },
+       DU = ["text", "search", "url", "email", "tel", "password", "number"],
+       EU = UU => !(!(0, yU.e)(UU) || UU.isContentEditable || UU.hasAttribute("data-pad-no-osk")) && (UU instanceof HTMLTextAreaElement || UU instanceof HTMLInputElement && DU.includes(UU.type)),
+ ... (56 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L2493-L2495` → after: `L3129-L3131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R3129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L3129-L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/169.js#L3129-L3131) · [Before (L2493-L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/169.js#L2493-L2495)

```diff
-   8502: (MM, rM) => {
-     Object.defineProperty(rM, "__esModule", {
-       value: !0
+   9417: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => FU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L2497-L2536` → after: `L3133-L3154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R3133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L3133-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/169.js#L3133-L3154) · [Before (L2497-L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/169.js#L2497-L2536)

```diff
-     var iM = "volume-low",
-       OM = [128264, "volume-down"],
-       SM = "f027",
-       jM = "M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227 … [truncated]
-     rM.definition = {
-       prefix: "fas",
-       iconName: iM,
-       icon: [448, 512, OM, SM, jM]
-     }, rM.faVolumeLow = rM.definition, rM.prefix = "fas", rM.iconName = iM, rM.width = 448, rM.height = 512, rM.ligatures = OM, rM.unicode = SM, rM.svgPathData = jM, rM.aliases = OM
-   },
-   8508: (MM, rM, iM) => {
-     var OM = iM(8492);
-     rM.b = {
-       prefix: OM.prefix,
-       iconName: OM.iconName,
-       icon: [OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData]
- ... (24 more removed lines; see GitHub link above)
+     var cU = zU(27),
+       yU = zU(2205),
+       QU = zU(1410),
+       AU = zU(1444);
+     const FU = async () => {
+       if ((0, AU.n)()) {
+         if (!0 !== await QU.NotificationProvider.showPromptPopup({
+             title: "controller:menusLeaveGameTitle",
+             confirmText: "controller:menusLeaveGameLeave",
+             cancelText: "controller:menusLeaveGameStay",
+             destructive: !0
+           }).getResult() || "inGame" !== cU.e.get("gameState")) return
+       }(0, yU.f)()
+     }
+   },
+   9422: (UU, XU, zU) => {
+ ... (6 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L2538-L2601` → after: `L3156-L3166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R3156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L3156-L3166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/169.js#L3156-L3166) · [Before (L2538-L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/169.js#L2538-L2601)

```diff
-     var iM = "wifi",
-       OM = ["wifi-3", "wifi-strong"],
-       SM = "f1eb",
-       jM = "M288 96c-90.9 0-173.2 36-233.7 94.6-12.7 12.3-33 12-45.2-.7s-12-33 .7-45.2C81.7 74.9 179.9 32 288 32S494.3 74.9 566.3 144.7c12.7 12.3 13 32.6 .7 45.2s-32.6 13-45.2 .7C461.2 132 378.9 96 288 96zM240 432a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM168 326.2c-11.7 13.3-31.9 14.5 … [truncated]
-     rM.definition = {
-       prefix: "fas",
-       iconName: iM,
-       icon: [576, 512, OM, SM, jM]
-     }, rM.faWifi = rM.definition, rM.prefix = "fas", rM.iconName = iM, rM.width = 576, rM.height = 512, rM.ligatures = OM, rM.unicode = SM, rM.svgPathData = jM, rM.aliases = OM
-   },
-   8532: (MM, rM, iM) => {
-     var OM = iM(8525);
-     rM.e = {
-       prefix: OM.prefix,
-       iconName: OM.iconName,
-       icon: [OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData]
- ... (48 more removed lines; see GitHub link above)
+     var cU = zU(2041);
+     const yU = "controllerPadShopOpen",
+       QU = UU => cU.h.includes(UU),
+       AU = UU => Object.values(UU).some((UU => !1 !== UU.canBuy && !UU.isRewardedAd)),
+       FU = (UU, XU, zU) => {
+         var cU, yU, AU, FU;
+         const oU = UU.filter((UU => !QU(UU))),
+           DU = null !== XU && UU.includes(XU) ? XU : null;
+         return null !== DU && !QU(DU) && zU(DU) ? DU : null !== (cU = null !== (yU = null !== (AU = null !== (FU = oU.find(zU)) && void 0 !== FU ? FU : oU[0]) && void 0 !== AU ? AU : DU) && void 0 !== yU ? yU : UU[0]) && void 0 !== cU ? cU : null
+       },
+       oU = UU => UU.userInput || UU.isRewardedAd || "boolean" === typeof UU.isSelected ? null : JSON.stringify([UU.image, UU.cost, UU.currency, UU.amount, UU.customTitle, UU.buyButtonText, UU.description, UU.canBuy])
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L2603` → after: `L3168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R3168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/169.js#L3168) · [Before (L2603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/169.js#L2603)

```diff
-   8574: (MM, rM, iM) => {
+   9443: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L2608-L2611` → after: `L3173-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R3173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L3173-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/169.js#L3173-L3335) · [Before (L2608-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/169.js#L2608-L2611)

```diff
-     var OM = {
-         prefix: "fas",
-         iconName: "shirt",
-         icon: [640, 512, [128085, "t-shirt", "tshirt"], "f553", "M320.2 112c44.2 0 80-35.8 80-80l53.5 0c17 0 33.3 6.7 45.3 18.7L617.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-41.4-41.4 0 224c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224-4 … [truncated]
+     var cU = zU(61),
+       yU = zU(1492),
+       QU = zU(2082),
+       AU = zU(1457),
+       FU = zU(1478),
+       oU = zU(1305);
+     const DU = () => {
+         const UU = (0, AU.o)();
+         if ((0, cU.useEffect)((() => {
+             (0, AU.i)()
+           }), []), !UU) return null;
+         const {
+           ControllerCategory: XU
+         } = UU;
+         return (0, oU.jsx)(FU.c, {
+           children: (0, oU.jsx)(XU, {})
+ ... (147 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L2613-L2614` → after: `L3337-L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R3337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L3337-L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/169.js#L3337-L3340) · [Before (L2613-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/169.js#L2613-L2614)

```diff
-       SM = OM,
-       jM = OM
+       LU = UU => {
+         var XU, zU, cU, yU;
+         return null !== (XU = null !== (zU = null !== (cU = UU.getAttribute("data-pad-key")) && void 0 !== cU ? cU : UU.getAttribute("href")) && void 0 !== zU ? zU : null === (yU = UU.querySelector("a[href]")) || void 0 === yU ? void 0 : yU.getAttribute("href")) && void 0 !== XU  … [truncated]
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/170.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/170.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L4-L81` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L4) · [Before (L4-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L4-L81)

```diff
-   8703: (MM, rM) => {
-     var iM = "youtube",
-       OM = [61802],
-       SM = "f167",
-       jM = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
-     rM.b = {
-       prefix: "fab",
-       iconName: iM,
-       icon: [576, 512, OM, SM, jM]
-     }, rM.c = rM.b
-   },
-   7398: (MM, rM) => {
-     Object.defineProperty(rM, "__esModule", {
-       value: !0
-     });
-     var iM = "bolt",
- ... (62 more removed lines; see GitHub link above)
+   37318: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L84` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L8-L9) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L84)

```diff
-       g: () => aM
+       f: () => NU,
+       h: () => YU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L86-L88` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L11-L18) · [Before (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L86-L88)

```diff
-     var OM = iM(3698);
-     let SM = null,
-       jM = null;
+     var cU = zU(34859),
+       yU = zU(37325),
+       QU = zU(37334),
+       AU = zU(9282),
+       FU = zU(1492),
+       oU = zU(61),
+       DU = zU(73),
+       EU = zU(1305);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L91-L108` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L21-L24) · [Before (L91-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L91-L108)

```diff
-       return jM ??= iM.e(234).then((() => iM(37271))).then((MM => {
-         let {
-           ITEM_SPRITES: rM,
-           ITEM_SPRITES_WITHOUT_FILE: iM,
-           ITEM_FILES_WITHOUT_SPRITE: jM
-         } = MM;
-         SM = function(MM, rM, iM) {
-           const SM = new Set,
-             jM = (0, OM.u)(rM);
-           let aM = 0;
-           for (const [OM, PM] of MM.entries()) OM === jM[aM] ? aM++ : SM.add(PM);
-           if ("" !== iM)
-             for (const PM of iM.split(OM.s)) SM.add(PM);
-           return SM
-         }(rM.split(OM.s), iM, jM)
-       }), (MM => {
- ... (2 more removed lines; see GitHub link above)
+       var UU;
+       return (0, FU.j)(yU.d, (0, yU.o)()), (0, EU.jsx)(EU.Fragment, {
+         children: null === (UU = (0, yU.o)()) || void 0 === UU ? void 0 : UU.content
+       })
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L112-L128` → after: `L28-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L28-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L28-L41) · [Before (L112-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L112-L128)

```diff
-       var rM, iM;
-       return null !== (rM = null === (iM = SM) || void 0 === iM ? void 0 : iM.has(MM)) && void 0 !== rM && rM
-     }
-   },
-   42151: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM,
-       d: () => PM
-     });
-     var OM = iM(42157);
-     let SM = null,
-       jM = null;
- 
-     function aM() {
-       return SM ??= iM.e(73).then((() => iM(63252))).catch((MM => {
-         throw SM = null, MM
- ... (1 more removed lines; see GitHub link above)
+       var XU;
+       let {
+         show: zU
+       } = UU;
+       (0, FU.j)(yU.d, (0, yU.o)());
+       const DU = null === (XU = (0, yU.o)()) || void 0 === XU ? void 0 : XU.menu;
+       return (0, oU.useEffect)((() => {
+         var UU;
+         zU || (null === DU || void 0 === DU || null === (UU = DU.onClose) || void 0 === UU || UU.call(DU), (0, QU.t)())
+       }), [zU, DU]), (0, oU.useEffect)((() => zU ? (0, AU.d)(QU.x, QU.i) : void 0), [zU]), (0, EU.jsx)(cU.e, {
+         showing: zU,
+         globallyUniqueKey: "clientGameMenu",
+         children: null === DU || void 0 === DU ? void 0 : DU.content
+       })
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L131-L137` → after: `L46-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L46-L48) · [Before (L131-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L131-L137)

```diff
-     function PM() {
-       return jM ??= Promise.all([aM(), (0, OM.g)()]).then((MM => {
-         let [rM] = MM;
-         return rM
-       }), (MM => {
-         throw jM = null, MM
-       })), jM
+     function aU(UU, XU) {
+       XU ? IU.set(UU, XU) : IU.delete(UU);
+       for (const zU of pU) zU()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L178-L183` → after: `L52-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L52-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L52-L67) · [Before (L178-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L178-L183)

```diff
-       const [rM, iM, , , OM] = MM.icon;
-       return {
-         width: rM,
-         height: iM,
-         path: "string" === typeof OM ? OM : OM.join(" ")
-       }
+       let {
+         placement: XU = "bottom"
+       } = UU;
+       const zU = (0, oU.useRef)(null);
+       return (0, oU.useLayoutEffect)((() => {
+         const UU = zU.current;
+         return aU(XU, UU), () => {
+           IU.get(XU) === UU && aU(XU, null)
+         }
+       }), [XU]), (0, EU.jsx)("div", {
+         ref: zU,
+         id: `clientGameHud-${XU}`,
+         style: {
+           display: "contents"
+         }
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L197-L200` → after: `L71-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L71-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L71-L87) · [Before (L197-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L197-L200)

```diff
-       return MM.split(",").map((MM => {
-         const [rM, iM = rM] = MM.slice(2).split("-");
-         return [parseInt(rM, 16), parseInt(iM, 16)]
-       }))
+       let {
+         children: XU,
+         placement: zU = "bottom"
+       } = UU;
+       const [cU, yU] = (0, oU.useState)((() => {
+         var UU;
+         return null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null
+       }));
+       return (0, oU.useEffect)((() => {
+         const UU = () => {
+           var UU;
+           yU(null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null)
+         };
+         return pU.add(UU), UU(), () => {
+           pU.delete(UU)
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L202-L204` → after: `L89-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L89-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L89-L103) · [Before (L202-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L202-L204)

```diff
-     const pM = {
-         latin: RM(gM),
-         rest: RM(uM)
+   },
+   9282: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => QU,
+       d: () => yU
+     });
+     let cU = null;
+     const yU = function(UU) {
+         const XU = {
+           cycle: UU,
+           canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
+         };
+         return cU = XU, () => {
+           cU === XU && (cU = null)
+         }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L206-L210` → after: `L105-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L105-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L105-L107) · [Before (L206-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L206-L210)

```diff
-       WM = new RegExp(`[${pM.rest.map((MM=>{let[rM,iM]=MM;return`\\u{${rM.toString(16)}}-\\u{${iM.toString(16)}}`})).join("")}]`, "u");
- 
-     function sM(MM) {
-       return rM => {
-         console.warn(`[bloxd-wasm-client] the text font's ${MM} file did not load`, rM)
+       QU = () => {
+         var UU;
+         return null !== (UU = cU) && void 0 !== UU && UU.canCycle() ? cU.cycle : null
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L212-L220` → after: `L109-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L109-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L109-L119) · [Before (L212-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L212-L220)

```diff
-     }
-     const DM = 397,
-       kM = 1,
-       ZM = {
-         translate: MM => [MM],
-         keyBindingText: MM => MM,
-         isFriend: () => !1,
-         hiddenNames: {},
-         loadsFontRest: !1
+   },
+   39331: (UU, XU, zU) => {
+     function cU(UU, XU, zU) {
+       var cU;
+       const {
+         width: yU,
+         height: QU
+       } = zU, AU = null !== (cU = UU.text) && void 0 !== cU ? cU : UU, FU = (AU.x / 100 - .5) * yU, oU = (AU.y / 100 - .5) * QU, DU = yU / 2 - XU.x;
+       if (null !== UU.text && Math.abs(FU) <= DU && oU >= XU.top - QU / 2 && oU <= QU / 2 - XU.bottom) return {
+         x: AU.x,
+         y: AU.y
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L222-L227` → after: `L121-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L121-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L121-L128) · [Before (L222-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L222-L227)

```diff
-     let oM = null,
-       fM = 0,
-       YM = "none";
- 
-     function NM() {
-       return fM
+       const EU = Math.min(0 === FU ? 1 / 0 : DU / Math.abs(FU), oU > 0 ? (QU / 2 - XU.bottom) / oU : oU < 0 ? (XU.top - QU / 2) / oU : 1 / 0);
+       return !Number.isFinite(EU) || EU < 0 ? {
+         x: 50,
+         y: 50
+       } : {
+         x: 50 + FU * EU / yU * 100,
+         y: 50 + oU * EU / QU * 100
+       }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L229-L240` → after: `L130-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L130-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L130-L149) · [Before (L229-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L229-L240)

```diff
- 
-     function AM() {
-       fM++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? YM = "all" : "none" === YM && (YM = "notBoards")
-     }(0, nM.t)((() => {
-       (function() {
-         const MM = eM;
-         return eM = !1, MM
-       })() && AM(!1)
-     }));
-     const xM = new class {
-       constructor(MM) {
-         this.loaded = MM, this.latin = null, this.rest = null, this.restWanted = !1
+     zU.d(XU, {
+       d: () => cU
+     })
+   },
+   39374: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => AU
+     });
+     const cU = 4,
+       yU = 12e3,
+       QU = 1e3;
+     class AU {
+       constructor() {
+         let {
+           limit: UU = cU,
+           windowMs: XU = yU,
+ ... (4 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L242-L257` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L151-L152) · [Before (L242-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L242-L257)

```diff
-       load() {
-         if (null === this.latin) {
-           this.latin = new FontFace(tM, `url(${(0,wM.f)()}) format("woff2")`, {
-             unicodeRange: gM
-           }).load().then((MM => {
-             document.fonts.add(MM), this.loaded()
-           }), sM("Latin"));
-           const MM = new FontFace(tM, `url(${(0,wM.g)()}) format("woff2")`, {
-             unicodeRange: uM,
-             display: "swap"
-           });
-           document.fonts.add(MM), MM.loaded.then((() => {
-             this.loaded()
-           }), sM("rest")), this.rest = MM, this.restWanted && MM.load()
-         }
-         return this.latin
+       isPacing() {
+         return !this.canSendPriority() || this.isPriorityWaiting()
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L259-L261` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L154-L155) · [Before (L259-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L259-L261)

```diff
-       loadRest() {
-         var MM;
-         this.restWanted || (this.restWanted = !0, null === (MM = this.rest) || void 0 === MM || MM.load())
+       canSendPriority() {
+         return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L263-L264` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L157-L159) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L263-L264)

```diff
-       loadFor(MM) {
-         !this.restWanted && WM.test(MM) && this.loadRest()
+       tryStart() {
+         for (const UU of this.priority) UU.flush();
+         return !this.isPacing() && (this.start(), !0)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L266-L307` → after: `L161-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L161-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L161-L168) · [Before (L266-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L266-L307)

```diff
-     }(AM);
- 
-     function vM(MM) {
-       Object.assign(ZM, MM), ZM.loadsFontRest && xM.loadRest(), AM(!1)
-     }
- 
-     function FM(MM) {
-       MM !== oM && (oM = MM, AM())
-     }
- 
-     function BM(MM) {
-       if ("none" === YM || null === MM) return;
-       MM(DM, "all" === YM ? 0 : kM, new Uint8Array(0)) && (YM = "none")
-     }
-     const XM = new Map,
-       IM = new Map;
- ... (26 more removed lines; see GitHub link above)
+       start() {
+         this.prune();
+         const UU = this.now();
+         this.sent.push(UU), this.lastSentAt = UU, this.schedule(), this.notify()
+       }
+       addPriority(UU) {
+         return this.priority.add(UU), () => {
+           this.priority.delete(UU)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L309-L384` → after: `L170-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L170-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L170-L201) · [Before (L309-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L309-L384)

```diff
-       })).then((MM => {
-         XM.get(SM) === aM && IM.delete(SM), MM !== aM.image && (aM.image = MM, AM(!1))
-       }), (rM => {
-         console.warn(`[bloxd-wasm-client] text icon ${MM} did not load`, rM), XM.get(SM) === aM && (XM.delete(SM), IM.delete(SM), null !== aM.image && AM(!1))
-       })), aM.image
-     }(0, mM.c)((() => {
-       IM.clear();
-       for (const [MM, {
-           image: rM
-         }] of XM) null !== rM && IM.set(MM, rM);
-       XM.clear(), AM(!1)
-     }));
-     const qM = new Set(OM.e),
-       TM = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);
- 
-     function VM() {
- ... (60 more removed lines; see GitHub link above)
+       }
+       subscribe(UU) {
+         return this.listeners.add(UU), () => {
+           this.listeners.delete(UU)
+         }
+       }
+       dispose() {
+         this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
+       }
+       isPriorityWaiting() {
+         for (const UU of this.priority)
+           if (UU.waiting()) return !0;
+         return !1
+       }
+       prune() {
+         const UU = this.now() - this.windowMs;
+ ... (16 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L388` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L205) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L388)

```diff
-   53661: (MM, rM, iM) => {
+   37334: (UU, XU, zU) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L391` → after: `L208-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L208-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L208-L216) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L391)

```diff
-       h: () => Jr
+       i: () => aU,
+       l: () => tU,
+       o: () => FU,
+       r: () => NU,
+       t: () => gU,
+       v: () => YU,
+       w: () => GU,
+       x: () => pU,
+       y: () => kU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L393-L415` → after: `L218-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L218-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L218-L221) · [Before (L393-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L393-L415)

```diff
-     var OM = iM(37696),
-       SM = iM(41906),
-       jM = iM(39922),
-       aM = iM(605),
-       PM = iM(313);
-     const nM = {
-         DEFAULT_FONT_SIZE: 47,
-         DEFAULT_SUBTITLE_FONT_SIZE: 30,
-         HORIZONTAL_PADDING: 30,
-         VERTICAL_PADDING: 22,
-         TEXT_SHADOW_WIDTH: 2,
-         LINE_SPACING: 8,
-         EFFECT_ICON_SIZE: 70
-       },
-       QM = 41;
- 
- ... (7 more removed lines; see GitHub link above)
+     var cU = zU(27),
+       yU = zU(31);
+     const QU = "clientGameInventoryButtonsChanged",
+       AU = new Map;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L417-L419` → after: `L223-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L223-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L223-L227) · [Before (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L417-L419)

```diff
-     function mM(MM, rM) {
-       const iM = "number" === typeof MM ? MM : "string" === typeof MM ? Number(MM.replace("px", "")) : NaN;
-       return Number.isFinite(iM) && iM > 0 ? iM : rM
+     function FU() {
+       return [...AU.values()].sort(((UU, XU) => {
+         var zU, cU;
+         return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
+       }))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L423` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L232) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L423)

```diff
-       return LM(MM) ? MM : void 0
+       oU = UU
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L427-L428` → after: `L237-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L237-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L237-L243) · [Before (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L427-L428)

```diff
-       const rM = "number" === typeof MM ? aM.y[MM] : MM;
-       return "string" === typeof rM && Object.hasOwn(aM.n, rM) ? aM.n[rM] : void 0
+       EU = !0;
+       try {
+         UU.onClick()
+       } finally {
+         EU = !1
+       }
+       UU.panel && "clientGame" === cU.e.get("openInGameMenuName") && DU(UU.id)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L431-L432` → after: `L246-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L246-L247) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L431-L432)

```diff
-     function JM(MM, rM) {
-       return "string" === typeof MM ? MM : LM(MM) ? "string" === typeof MM.translationKey ? rM.translate(MM.translationKey, MM.params).map((MM => "string" === typeof MM ? MM : MM.icon)).join("") : "string" === typeof MM.entityName ? rM.shownPlayerName(MM.entityName) : "" : void 0 … [truncated]
+     function NU() {
+       return EU
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L435-L492` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L250-L251) · [Before (L435-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L435-L492)

```diff
-     function dM(MM, rM, iM, OM) {
-       if (!Array.isArray(MM)) return [];
-       const SM = [];
-       for (const zM of MM) {
-         var jM, aM;
-         if (LM(zM) && "chatTag" in zM) {
-           SM.push({
-             kind: "rank",
-             rank: zM
-           });
-           continue
-         }
-         if (LM(zM) && "icon" in zM && !("mainRGB" in zM)) {
-           var QM;
-           SM.push({
-             kind: "icon",
- ... (42 more removed lines; see GitHub link above)
+     function IU() {
+       return FU().filter((UU => UU.panel && !UU.disabled))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L496` → after: `L255-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L255-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L255-L257) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L496)

```diff
-       return void 0 !== MM && "rank" !== MM.kind
+       const XU = IU(),
+         zU = XU.findIndex((UU => UU.id === oU));
+       return !(zU < 0 || XU.length < 2) && (YU(XU[(zU + UU + XU.length) % XU.length]), !0)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L499-L502` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L260-L261) · [Before (L499-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L499-L502)

```diff
-     function lM(MM, rM) {
-       const iM = yM(MM),
-         OM = yM(rM);
-       return void 0 === MM && !OM || !iM && void 0 === rM ? 0 : iM !== OM ? .5 * nM.HORIZONTAL_PADDING : 0
+     function aU() {
+       return null !== oU && IU().length > 1
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L505-L506` → after: `L264-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L264-L265) · [Before (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L505-L506)

```diff
-     function EM(MM) {
-       return "rank" === MM.kind ? nM.DEFAULT_FONT_SIZE : MM.size
+     function tU() {
+       DU(null)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L509-L513` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L268-L269) · [Before (L509-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L509-L513)

```diff
-     function UM(MM, rM, iM) {
-       return "icon" === MM.kind ? MM.size : "rank" === MM.kind ? function(MM, rM) {
-         const iM = rM.rankIcon(MM.rank.icon);
-         return iM ? QM * (iM.width / iM.height) : QM
-       }(MM, iM) + nM.HORIZONTAL_PADDING : (iM.glyphsShown(MM.text), rM.font = zM(MM.size), rM.measureText(MM.text).width)
+     function gU() {
+       "inventory" !== cU.e.get("openInGameMenuName") && DU(null)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L516-L537` → after: `L272-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L272-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L272-L274) · [Before (L516-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L516-L537)

```diff
-     function GM(MM, rM, iM) {
-       if (0 === MM.length) return {
-         width: 0,
-         height: 0,
-         sizes: []
-       };
-       let OM = 0;
-       for (const aM of MM) OM = Math.max(OM, EM(aM));
-       const SM = [];
-       let jM = lM(void 0, MM[0]);
-       for (let aM = 0; aM < MM.length; aM++) {
-         const OM = jM;
-         jM += UM(MM[aM], rM, iM), jM += lM(MM[aM], MM[aM + 1]), SM.push({
-           x: OM,
-           width: jM - OM
-         })
- ... (6 more removed lines; see GitHub link above)
+     function kU() {
+       const UU = oU;
+       return DU(null), UU
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L540-L544` → after: `L277-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L277-L279) · [Before (L540-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L540-L544)

```diff
-     function CM(MM, rM, iM, OM, SM, jM, aM) {
-       rM += lM(void 0, MM[0]);
-       for (let PM = 0; PM < MM.length; PM++) {
-         const nM = eM(MM[PM], rM, iM, OM, SM, jM, aM);
-         rM += 0 === nM ? 0 : nM + lM(MM[PM], MM[PM + 1])
+     function GU(UU) {
+       return AU.set(UU.id, UU), yU.k.UY(QU, FU(), !0), () => {
+         AU.get(UU.id) === UU && (AU.delete(UU.id), yU.k.UY(QU, FU()))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L548-L590` → after: `L302-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L302-L303) · [Before (L548-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L548-L590)

```diff
-     function eM(MM, rM, iM, OM, SM, jM, aM, PM) {
-       var LM;
-       if ("icon" === MM.kind) {
-         const OM = jM.iconImage(MM.icon);
-         return OM && aM.push({
-           image: OM,
-           x: rM,
-           y: iM + nM.VERTICAL_PADDING / 2,
-           size: MM.size
-         }), MM.size
-       }
-       if ("rank" === MM.kind) {
-         const aM = null !== PM && void 0 !== PM ? PM : UM(MM, SM, jM);
-         return function(MM, rM, iM, OM, SM, jM, aM) {
-           var PM, zM;
-           const {
- ... (27 more removed lines; see GitHub link above)
+     function DU() {
+       return oU
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L594-L600` → after: `L307-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L307-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L307-L313) · [Before (L594-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L594-L600)

```diff
-       for (const {
-           image: iM,
-           x: OM,
-           y: SM,
-           size: jM
-         }
-         of MM) rM.imageSmoothingEnabled = !1, rM.drawImage(iM, OM, SM, jM, jM)
+       const zU = {
+         content: UU,
+         menu: XU
+       };
+       return oU = zU, yU.k.UY(FU, oU, !0), () => {
+         oU === zU && (oU = null, pU = !1, tU(), yU.k.UY(FU, null))
+       }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L603-L604` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L317-L318) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L603-L604)

```diff
-     function wM(MM, rM, iM, OM, SM, jM) {
-       MM.save(), MM.translate(iM, OM), MM.scale(SM, SM), MM.fillStyle = jM, MM.fill(rM), MM.restore()
+     function NU() {
+       return YU
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L607-L692` → after: `L321-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L321-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L321-L323) · [Before (L607-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L607-L692)

```diff
-     function tM(MM, rM, iM) {
-       const OM = "object" === typeof MM && null !== MM ? MM : {},
-         SM = function(MM, rM, iM) {
-           if (!Array.isArray(MM) || 0 === MM.length) return [];
-           const OM = [{
-             width: 0,
-             height: 0,
-             y: 0,
-             items: []
-           }];
-           for (const aM of dM(MM, nM.DEFAULT_FONT_SIZE, iM)) {
-             if ("text" !== aM.kind) {
-               OM[OM.length - 1].items.push({
-                 content: aM,
-                 chars: 1,
-                 size: {
- ... (70 more removed lines; see GitHub link above)
+     function IU(UU) {
+       return YU = UU, () => {
+         YU === UU && (YU = null)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L695-L722` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L326) · [Before (L695-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L695-L722)

```diff
-     var gM = iM(4848),
-       uM = iM(1279),
-       RM = iM(2148);
-     const pM = 10,
-       WM = 3,
-       sM = 3,
-       DM = [{
-         healthFraction: .25,
-         colour: "#ff0000"
-       }, {
-         healthFraction: .5,
-         colour: "#ffaa00"
-       }, {
-         healthFraction: 1,
-         colour: "#00ff00"
-       }],
- ... (12 more removed lines; see GitHub link above)
+     let pU = !1;
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L724-L725` → after: `L328-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L328-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L328-L333) · [Before (L724-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L724-L725)

```diff
-     function fM(MM) {
-       return "object" !== typeof MM || null === MM || Array.isArray(MM) ? void 0 : MM
+     function aU() {
+       const UU = cU.e.get("openInGameMenuName");
+       "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
+         openInGameMenuName: "clientGame",
+         openEverythingMenuName: null
+       })
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L729-L730` → after: `L336-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L336-L337) · [Before (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L729-L730)

```diff
-     function NM(MM, rM) {
-       return "string" === typeof MM ? mM(MM, rM) : rM
+     function tU() {
+       GU(!1)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L733-L734` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L340-L341) · [Before (L733-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L733-L734)

```diff
-     function AM(MM) {
-       return NM(MM.width, WM)
+     function gU() {
+       GU(pU)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L737-L740` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L344-L345) · [Before (L737-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L737-L740)

```diff
-     function xM(MM, rM) {
-       var iM;
-       const OM = null !== (iM = MM.applyTo) && void 0 !== iM ? iM : "both";
-       return "both" === OM || OM === rM
+     function kU() {
+       pU && GU(!1)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L744-L745` → after: `L349-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L349-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L349-L351) · [Before (L744-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L744-L745)

```diff
-       const rM = AM(MM);
-       return "glow" === MM.style ? rM * sM : Math.ceil(rM / 2) + 1
+       "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
+         openInGameMenuName: UU ? "inventory" : null
+       }), UU || (0, AU.l)(), pU = !1
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L748-L884` → after: `L362-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L362-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L362-L372) · [Before (L748-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L748-L884)

```diff
-     function FM(MM, rM, iM) {
-       var OM, SM;
-       const jM = null !== (OM = fM(MM.info)) && void 0 !== OM ? OM : {},
-         PM = "string" === typeof MM.name ? MM.name : "",
-         QM = jM.subtitle;
-       if (Array.isArray(jM.content) && 0 === jM.content.length && !(Array.isArray(QM) && QM.length > 0)) return null;
-       const zM = "number" === typeof MM.hideNameSeed ? MM.hideNameSeed : null,
-         LM = "" === PM || !0 === MM.mesh ? PM : (0, uM.e)(PM, !iM.canSeeRealPlayerNames, zM);
-       if (!LM && !jM.content) return null;
-       const mM = "string" === typeof MM.colour ? MM.colour : "default",
-         HM = Object.hasOwn(aM.x, mM) ? aM.x[mM] : void 0,
-         JM = jM.content ? dM(jM.content, nM.DEFAULT_FONT_SIZE, iM, HM) : [{
-           kind: "text",
-           text: LM,
-           size: nM.DEFAULT_FONT_SIZE,
-           colour: HM
- ... (121 more removed lines; see GitHub link above)
+     function AU(UU) {
+       let {
+         icon: XU
+       } = UU;
+       const zU = (0, cU.useCallback)((UU => {
+         null === UU || void 0 === UU || UU.replaceChildren((0, yU.e)(XU))
+       }), [XU]);
+       return (0, QU.jsx)("span", {
+         className: "SkyblockMapIconSlot",
+         ref: zU
+       })
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L886-L893` → after: `L374-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L374-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L374-L397) · [Before (L886-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L886-L893)

```diff
-     var BM = iM(39689);
-     const XM = 256,
-       IM = 1024,
-       KM = {
-         width: 1,
-         height: 7 / 8
-       };
-     var qM = iM(39691);
+   },
+   39339: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => PU,
+       f: () => RU
+     });
+     const cU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
+       yU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
+       QU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC";
+     var AU = zU(39342);
+     const FU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
+     var oU = zU(39348);
+     var DU = zU(39353);
+     var EU = zU(39361);
+     const YU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAI … [truncated]
+     zU(61);
+ ... (8 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L895` → after: `L399-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L399-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L399-L483) · [Before (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L895)

```diff
-       leaderboard: ""
+       ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
+       auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
+       bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
+       carrot: aU,
+       castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
+       cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
+       combat_1: tU,
+       cow: FU,
+       craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
+       dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
+       emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
+       enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
+       farm: zU(26825),
+       farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
+       fishing: cU,
+       fishing_1: cU,
+ ... (69 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L918-L920` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L487-L488) · [Before (L918-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L918-L920)

```diff
-       const iM = Lr.encode(JSON.stringify(rM)),
-         OM = new Uint8Array(iM.length + 1);
-       return OM[0] = MM, OM.set(iM, 1), OM
+       const zU = document.createElement("img");
+       return zU.className = XU, zU.src = UU, zU.alt = "", zU.draggable = !1, zU
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L955-L972` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L492) · [Before (L955-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L955-L972)

```diff
-       VM.e.load().then((() => {
-         if (MM()) return;
-         const rM = (0, SM.d)(1, 1, {
-           willReadFrequently: !0
-         });
-         var iM;
-         rM && (iM = rM.canvas, hr.map((MM => Cr(MM, iM))))
-       }))
-     }
-     let dr = VM.s;
- 
-     function yr() {
-       nr.clear(), Qr.clear()
-     }
- 
-     function lr(MM, rM) {
- ... (2 more removed lines; see GitHub link above)
+       return Object.hasOwn(BU, UU) || UU.startsWith("npc_")
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L975-L976` → after: `L495-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L495-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L495-L502) · [Before (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L975-L976)

```diff
-     function Er(MM, rM, iM) {
-       MM.set(rM, iM), MM.size > rr && MM.delete(MM.keys().next().value)
+     function PU(UU) {
+       var XU;
+       const zU = null !== (XU = BU[UU]) && void 0 !== XU ? XU : UU.startsWith("npc_") ? AU : pU;
+       if ("portal" !== UU) return ZU(zU, "SkyblockMapIcon");
+       const cU = document.createElement("span");
+       cU.className = "SkyblockMapIcon Portal";
+       const yU = document.createElement("span");
+       return yU.className = "SkyblockMapIconTint", yU.style.maskImage = yU.style.webkitMaskImage = `url("${YU}")`, cU.append(ZU(zU, "SkyblockMapIconLayer"), yU, ZU(YU, "SkyblockMapIconLayer SkyblockMapIconShade")), cU
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L979-L998` → after: `L692-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L692-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L692-L699) · [Before (L979-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L979-L998)

```diff
-     function Ur(MM, rM, iM) {
-       if (MM === cM.Nametag) {
-         let MM = lr(nr, rM);
-         return void 0 === MM && (MM = FM(JSON.parse(rM), iM, ar), Er(nr, rM, MM)), MM
-       }
-       if (MM === cM.MultilineText) {
-         var SM;
-         const MM = JSON.parse(rM),
-           OM = JSON.stringify(null !== (SM = MM.box) && void 0 !== SM ? SM : null),
-           jM = "number" === typeof MM.shown ? MM.shown : null;
-         let aM = lr(Qr, OM);
-         void 0 === aM && (aM = tM(MM.box, iM, ar), Er(Qr, OM, aM));
-         const PM = null === jM ? null : Math.min(Math.max(0, Math.floor(jM)), aM.chars),
-           nM = aM;
-         return {
-           width: nM.width,
- ... (4 more removed lines; see GitHub link above)
+     function yU(UU) {
+       let XU, zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
+       if ("number" === typeof UU) {
+         if (!Number.isFinite(UU)) return "0";
+         if (Math.abs(UU) < 100) {
+           const XU = UU < 0 ? "-" : "",
+             zU = Math.abs(UU);
+           return zU >= 10 ? `${XU}${zU.toFixed(1).replace(/\.0$/,"")}` : `${XU}${zU.toFixed(2).replace(/\.?0+$/,"")}`
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L1001-L1058` → after: `L714-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L714-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L714-L735) · [Before (L1001-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L1001-L1058)

```diff
-       if (MM === cM.Board) return function(MM, rM) {
-         var iM;
-         if (!rM.canSeePlayerWrittenText) return null;
-         const {
-           shared: SM,
-           w: jM = 0,
-           h: aM = 0
-         } = MM, PM = !jM;
-         let nM;
-         if (PM) {
-           var QM, zM;
-           nM = null !== (QM = null === SM || void 0 === SM || null === (zM = SM.text) || void 0 === zM ? void 0 : zM.toString()) && void 0 !== QM ? QM : ""
-         } else {
-           if ("string" !== typeof(null === SM || void 0 === SM ? void 0 : SM.text)) return null;
-           nM = SM.text
-         }
- ... (42 more removed lines; see GitHub link above)
+       const {
+         threshold: oU,
+         suffix: DU
+       } = cU[cU.length - FU / 3], EU = yU / oU, YU = Number(1000n * (yU % oU) / oU), NU = Number(EU) + YU / 1e3;
+       let IU;
+       return IU = NU >= 100 ? Math.floor(NU).toString() : NU >= 10 ? NU.toFixed(1).replace(/\.0$/, "") : NU.toFixed(2).replace(/\.?0+$/, ""), `${QU}${IU}${DU}`
+     }
+     const QU = cU.map((UU => {
+       let {
+         threshold: XU,
+         suffix: zU
+       } = UU;
+       return {
+         threshold: Number(XU),
+         suffix: zU
+       }
+ ... (6 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L1060-L1095` → after: `L737-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L737-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L737-L742) · [Before (L1060-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L1060-L1095)

```diff
-     function Cr(MM, rM) {
-       let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       try {
-         if (MM.length < 2) return [0, 0];
-         const jM = (0, SM.b)(rM);
-         if (!jM) return [0, 0];
-         const aM = dr();
-         aM !== Pr && (Pr = aM, yr());
-         const [PM] = MM, nM = jr.decode(MM.subarray(1));
-         let QM;
-         PM !== cM.Board && PM !== cM.Leaderboard || !ar.canSeePlayerWrittenText || ar.glyphsShown(nM), jM.save();
-         try {
-           QM = Ur(PM, nM, jM)
-         } finally {
-           jM.restore()
- ... (20 more removed lines; see GitHub link above)
+     function AU(UU) {
+       const XU = Math.abs(UU),
+         zU = UU < 0 ? "-" : "";
+       for (const {
+           threshold: cU,
+           suffix: yU
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L1097-L1106` → after: `L744-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L744-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/170.js#L744-L750) · [Before (L1097-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/170.js#L1097-L1106)

```diff
-         return [mM, HM]
-       } catch (jM) {
-         ! function(MM, rM) {
-           zr < ir && (zr++, console.warn(`[bloxd-wasm-client] ${MM}`, rM))
-         }("could not raster a text plane", jM);
-         try {
-           rM.width = 1
-         } catch {}
-         return [0, 0]
-       }
+         of QU)
+         if (XU >= cU) {
+           const UU = XU / cU;
+           if (UU >= 1e3) return `${zU}${XU.toExponential(2).replace("e+","e")}`;
+           let QU;
+           return QU = UU >= 100 ? Math.floor(UU).toString() : UU >= 10 ? UU.toFixed(1).replace(/\.0$/, "") : UU.toFixed(2).replace(/\.?0+$/, ""), `${zU}${QU}${yU}`
+         } return `${zU}${XU}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/171.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/171.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L4)

```diff
-   9463: (MM, rM, iM) => {
+   37334: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L6-L38` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L6-L15) · [Before (L6-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L6-L38)

```diff
-       c: () => PM
-     });
-     var OM = iM(19),
-       SM = iM(1188),
-       jM = iM(5401),
-       aM = iM(1303);
- 
-     function PM(MM) {
-       let {
-         note: rM
-       } = MM;
-       const {
-         t: iM
-       } = (0, SM.A)(), {
-         clientEscMenuOptions: PM
-       } = (0, OM.m)(["clientEscMenuOptions"]);
- ... (17 more removed lines; see GitHub link above)
+       e: () => QU,
+       i: () => aU,
+       l: () => tU,
+       o: () => FU,
+       r: () => NU,
+       t: () => gU,
+       v: () => YU,
+       w: () => GU,
+       x: () => pU,
+       y: () => kU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L40-L235` → after: `L17-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L17-L20) · [Before (L40-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L40-L235)

```diff
-     var OM = iM(1188),
-       SM = iM(44),
-       jM = iM(2093),
-       aM = iM(2099),
-       PM = iM(1116),
-       nM = iM.n(PM),
-       QM = iM(1520),
-       zM = iM(19),
-       LM = iM(83),
-       mM = iM(103),
-       HM = iM(5401),
-       hM = iM(2640),
-       JM = iM(255),
-       dM = iM(2104),
-       yM = iM(2111),
-       lM = iM(9461),
- ... (180 more removed lines; see GitHub link above)
+     var cU = zU(27),
+       yU = zU(31);
+     const QU = "clientGameInventoryButtonsChanged",
+       AU = new Map;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L238-L425` → after: `L23-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L23-L26) · [Before (L238-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L238-L425)

```diff
-       const {
-         t: MM
-       } = (0, OM.A)();
-       return (0, GM.jsx)(QM.V, {
-         className: "HudFixJoystickButton",
-         analyticsClick: {
-           id: "hud_layout.fix_joystick"
-         },
-         onClick: MM => {
-           const rM = MM.currentTarget;
-           if (!fM(rM)) {
-             const MM = function(MM) {
-               var rM, iM;
-               const OM = [MM.previousElementSibling, MM.nextElementSibling].find((MM => MM instanceof HTMLElement && MM.matches(YM)));
-               return null !== (rM = null !== OM && void 0 !== OM ? OM : null === (iM = MM.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === iM ? void 0 : iM.querySelector(`:is(${YM}):not(.HudFixJoystickButton)`)) && void 0 !== rM ? rM : null
-             }(rM);
- ... (172 more removed lines; see GitHub link above)
+       return [...AU.values()].sort(((UU, XU) => {
+         var zU, cU;
+         return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
+       }))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L429-L443` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L31) · [Before (L429-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L429-L443)

```diff
-       let {
-         icon: rM
-       } = MM;
-       return (0, GM.jsx)("div", {
-         className: "TopRightIcon",
-         children: (0, GM.jsx)("div", {
-           className: "UiItemIcon SmallTextBold",
-           children: (0, GM.jsx)("div", {
-             className: "ScaleOnHover",
-             children: (0, GM.jsx)(uM.b, {
-               name: rM
-             })
-           })
-         })
-       })
+       oU = UU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L447-L465` → after: `L36-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L36-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L36-L42) · [Before (L447-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L447-L465)

```diff
-       let {
-         next: rM,
-         hidden: iM
-       } = MM;
-       return (0, GM.jsx)("div", {
-         className: nM()("HotBarArrow", rM ? "Next" : "Previous", {
-           HudPreviewGhost: iM
-         }),
-         ...cM("arrows"),
-         children: (0, GM.jsx)("div", {
-           className: "UiItemIcon SmallTextBold",
-           children: (0, GM.jsx)("div", {
-             className: "ScaleOnHover",
-             children: (0, GM.jsx)(uM.b, {
-               name: rM ? "caret-right" : "caret-left"
-             })
- ... (3 more removed lines; see GitHub link above)
+       EU = !0;
+       try {
+         UU.onClick()
+       } finally {
+         EU = !1
+       }
+       UU.panel && "clientGame" === cU.e.get("openInGameMenuName") && DU(UU.id)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L469-L858` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L46) · [Before (L469-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L469-L858)

```diff
-       return (0, GM.jsx)("div", {
-         className: "SocialBarContainer",
-         children: (0, GM.jsx)("div", {
-           className: "SocialBarOuter",
-           children: (0, GM.jsx)("div", {
-             className: "SocialBar",
-             children: (0, GM.jsx)("div", {
-               className: "CondensedSocialBarInner",
-               children: (0, GM.jsx)("div", {
-                 className: "CondensedSectionsContainer",
-                 children: (0, GM.jsxs)("div", {
-                   className: "CondensedSections",
-                   children: [(0, GM.jsxs)("div", {
-                     className: "CondensedSection CondensedSectionFriendRequests",
-                     children: [(0, GM.jsx)("div", {
-                       className: "CondensedSectionValue",
- ... (374 more removed lines; see GitHub link above)
+       return EU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L862-L865` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L50) · [Before (L862-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L862-L865)

```diff
-       const [MM, rM] = (0, SM.useState)({}), iM = (0, SM.useCallback)((MM => {
-         rM((rM => [...new Set([...Object.keys(rM), ...Object.keys(MM)])].every((iM => rM[iM] === MM[iM])) ? rM : MM))
-       }), []);
-       return [MM, iM]
+       return FU().filter((UU => UU.panel && !UU.disabled))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L870-L955` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L54-L56) · [Before (L870-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L870-L955)

```diff
-       var rM;
-       let {
-         selected: iM,
-         layout: SM,
-         actionButtons: jM,
-         keyNames: aM,
-         overlaps: PM,
-         scaleCaps: zM,
-         joystickFixed: LM,
-         onScale: mM,
-         onHidden: HM,
-         onReset: hM,
-         locked: JM,
-         lockable: dM,
-         onLocked: yM,
-         extra: lM
- ... (70 more removed lines; see GitHub link above)
+       const XU = IU(),
+         zU = XU.findIndex((UU => UU.id === oU));
+       return !(zU < 0 || XU.length < 2) && (YU(XU[(zU + UU + XU.length) % XU.length]), !0)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L971-L1026` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L59-L60) · [Before (L971-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L971-L1026)

```diff
-     function wr(MM, rM, iM, OM) {
-       const SM = new Map,
-         jM = new Set,
-         aM = new URL(MM.baseURI).origin,
-         PM = rM => {
-           var iM;
-           if ("LINK" !== rM.nodeName) return !0;
-           const OM = null === (iM = rM.getAttribute("href")) || void 0 === iM ? void 0 : iM.trim();
-           if (!OM) return !1;
-           try {
-             return new URL(OM, MM.baseURI).origin === aM
-           } catch {
-             return !1
-           }
-         };
-       let nM = null;
- ... (40 more removed lines; see GitHub link above)
+     function aU() {
+       return null !== oU && IU().length > 1
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1029-L1036` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L63-L64) · [Before (L1029-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L1029-L1036)

```diff
-     function tr(MM, rM, iM) {
-       let {
-         keysAbove: OM
-       } = iM;
-       const SM = [...MM.documentElement.classList].filter((MM => !Gr.has(MM) && !er.has(MM))),
-         jM = [...rM.documentElement.classList].filter((MM => er.has(MM))),
-         aM = [Er, Ur.hotbar, Ur.hasShop, Ur.hasBag];
-       OM && aM.push(Ur.keysAbove), rM.documentElement.className = [...SM, ...aM, ...jM].join(" ")
+     function tU() {
+       DU(null)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1040-L1055` → after: `L67-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L67-L68) · [Before (L1040-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L1040-L1055)

```diff
-     function ur(MM, rM, iM, OM, SM) {
-       const jM = (0, pM.v)(iM, OM, "joystick"),
-         aM = (0, qM.z)((0, qM.R)(iM, OM, SM), OM),
-         PM = aM.classes.filter((MM => !Cr.has(MM))),
-         nM = rM.documentElement,
-         QM = iM.hudLayouts[OM].hudSafe,
-         zM = (0, qM.G)(QM, window.innerWidth, window.innerHeight, Rr(), QM ? (0, qM.T)(rM) : 0);
-       (0, qM.W)({
-         ...aM,
-         classes: PM
-       }, {
-         vars: nM,
-         safe: nM,
-         classes: nM
-       }), nM.style.setProperty("--preview-joystick-shift-left", `${zM[3]}px`), nM.style.setProperty("--preview-joystick-shift-bottom", `${zM[2]}px`), nM.style.setProperty("--preview-joystick-scale", String(jM[2])), (0, lr.c)(nM, rM, iM, OM);
-       for (const LM of gr) nM.style.setProperty(LM, MM.documentElement.style.getPropertyValue(LM) || "0px")
+     function gU() {
+       "inventory" !== cU.e.get("openInGameMenuName") && DU(null)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1059` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L72-L73) · [Before (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L1059)

```diff
-       return (0, qM.O)(zM.d.get("notchSize"), window.innerWidth, window.innerHeight)
+       const UU = oU;
+       return DU(null), UU
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1063-L1155` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L77-L78) · [Before (L1063-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L1063-L1155)

```diff
-       return (0, qM.v)(Rr(), (0, qM.T)(MM))
-     }
- 
-     function Wr(MM, rM, iM) {
-       const OM = MM.documentElement.style,
-         SM = (0, qM.K)(rM),
-         jM = OM.getPropertyValue(SM);
-       try {
-         return iM((MM => {
-           OM.setProperty(SM, String(MM))
-         }))
-       } finally {
-         "" === jM ? OM.removeProperty(SM) : OM.setProperty(SM, jM)
-       }
-     }
- 
- ... (77 more removed lines; see GitHub link above)
+       return AU.set(UU.id, UU), yU.k.UY(QU, FU(), !0), () => {
+         AU.get(UU.id) === UU && (AU.delete(UU.id), yU.k.UY(QU, FU()))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1169` → after: `L81-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L81-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L81-L99) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L1169)

```diff
-     let Nr = 0;
+   },
+   37325: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => FU,
+       h: () => kU,
+       j: () => tU,
+       l: () => gU,
+       n: () => NU,
+       o: () => DU,
+       r: () => aU,
+       t: () => IU,
+       u: () => EU
+     });
+     var cU = zU(27),
+       yU = zU(31),
+       QU = zU(1310),
+ ... (3 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1172` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L102) · [Before (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L1172)

```diff
-       return Nr > 0
+       return oU
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1388-L1434` → after: `L106-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L106-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L106-L111) · [Before (L1388-L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L1388-L1434)

```diff
-       return Object.keys(MM).filter((MM => MM !== rM)).map((rM => MM[rM]))
-     }
- 
-     function Kr(MM) {
-       return MM.map((MM => {
-         let {
-           id: rM,
-           box: iM
-         } = MM;
-         return `${rM}:${iM.left},${iM.top},${iM.right},${iM.bottom}`
-       })).join(";")
-     }
- 
-     function qr(MM) {
-       const rM = [],
-         iM = rM => (0, pM.L)(rM) && !MM.documentElement.classList.contains((0, qM.C)(rM));
- ... (31 more removed lines; see GitHub link above)
+       const zU = {
+         content: UU,
+         menu: XU
+       };
+       return oU = zU, yU.k.UY(FU, oU, !0), () => {
+         oU === zU && (oU = null, pU = !1, tU(), yU.k.UY(FU, null))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1438-L1470` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L116-L117) · [Before (L1438-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L1438-L1470)

```diff
-     function Tr(MM, rM, iM) {
-       const OM = rM.right - rM.left,
-         SM = rM.bottom - rM.top;
-       return Wr(MM, "cluster", (rM => {
-         const jM = iM => {
-             rM(iM);
-             const OM = [...MM.querySelectorAll(`[${RM.e}]:not(.HudPreviewGhost)`)].filter((MM => RM.d.has(MM.getAttribute(RM.e)))).map((MM => (0, XM.j)(MM.getBoundingClientRect()))),
-               SM = (0, XM.M)(OM);
-             return SM ? {
-               w: SM.right - SM.left,
-               h: SM.bottom - SM.top
-             } : null
-           },
-           aM = MM => !MM || MM.w <= OM && MM.h <= SM,
-           PM = jM(1),
-           nM = jM(pM.f);
- ... (17 more removed lines; see GitHub link above)
+     function NU() {
+       return YU
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1474-L1545` → after: `L121-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L121-L122) · [Before (L1474-L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L1474-L1545)

```diff
-       const rM = MM.querySelector(".TouchInventoryKey.ShopKey");
-       return null !== rM && "1" === getComputedStyle(rM).getPropertyValue("--touch-shop-above").trim()
-     }
- 
-     function Mi(MM, rM) {
-       let {
-         layout: iM,
-         orientation: OM,
-         viewport: jM,
-         replicaKey: aM,
-         joystickFixed: PM,
-         busy: nM
-       } = rM;
-       const [QM, zM] = (0, SM.useState)(null), [LM, mM] = (0, SM.useState)({
-         boxes: {},
-         pieces: []
- ... (56 more removed lines; see GitHub link above)
+       return YU = UU, () => {
+         YU === UU && (YU = null)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1548-L1592` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L125) · [Before (L1548-L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L1548-L1592)

```diff
-     const ri = ["Above", "Below", "Left", "Right"];
- 
-     function ii(MM, rM, iM, OM, SM) {
-       const jM = iM[MM],
-         aM = (jM.left + jM.right) / 2,
-         PM = (jM.top + jM.bottom) / 2,
-         nM = (7.5 * rM.length + 14) / OM,
-         QM = 18 / OM,
-         zM = {
-           Above: {
-             left: aM - nM / 2,
-             top: jM.top - QM,
-             right: aM + nM / 2,
-             bottom: jM.top
-           },
-           Below: {
- ... (29 more removed lines; see GitHub link above)
+     let pU = !1;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L1595-L2341` → after: `L128-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L128-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L128-L131) · [Before (L1595-L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L1595-L2341)

```diff
-       const [MM, rM] = (0, FM.d)();
-       return (0, SM.useMemo)((() => ({
-         width: MM,
-         height: rM
-       })), [MM, rM])
-     }
- 
-     function Si(MM) {
-       var rM;
-       const {
-         layout: iM,
-         orientation: jM,
-         selected: aM,
-         onSelect: PM,
-         onMove: QM,
-         canMove: zM,
- ... (731 more removed lines; see GitHub link above)
+       const UU = cU.e.get("openInGameMenuName");
+       "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
+         openInGameMenuName: "clientGame",
+         openEverythingMenuName: null
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L2346-L2622` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L136) · [Before (L2346-L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L2346-L2622)

```diff
-       const {
-         t: MM
-       } = (0, OM.A)(), rM = (0, pM.ab)(), {
-         clientEscMenuOptions: iM
-       } = (0, zM.m)(["clientEscMenuOptions"]), jM = (0, mi.i)(), aM = rM.hudLayouts[jM], [PM, nM] = (0, SM.useState)(null), {
-         rowIconsOpen: LM,
-         onRowIconsOpen: mM,
-         select: hM
-       } = function(MM, rM) {
-         const [iM, OM] = (0, SM.useState)((() => pM.x.some((rM => void 0 !== MM.hudElements[rM] || MM.hudLocked.includes(rM))))), jM = (0, SM.useCallback)((MM => {
-           rM(MM), (0, pM.L)(MM) && OM(!0)
-         }), [rM]);
-         return {
-           rowIconsOpen: iM,
-           onRowIconsOpen: OM,
-           select: jM
- ... (261 more removed lines; see GitHub link above)
+       GU(!1)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L2731-L2733` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L140) · [Before (L2731-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L2731-L2733)

```diff
-       return (0, GM.jsx)(GM.Fragment, {
-         children: bi.map(((MM, rM) => (0, GM.jsx)(MM, {}, rM)))
-       })
+       GU(pU)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L2738-L2847` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L144) · [Before (L2738-L2847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L2738-L2847)

```diff
-       const {
-         t: MM
-       } = (0, OM.A)(), {
-         isTouchScreen: rM,
-         clientEscMenuOptions: iM,
-         gameState: aM
-       } = (0, zM.m)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), PM = (0, hM.f)("ezBridging"), nM = (0, hM.f)("ezTowering"), dM = "inGame" !== aM || !0 === PM, yM = (0, JM.f)(), EM = null !== yM && ("inGame" !== aM || !0 === nM), [, UM] = (0, SM.useReducer)((MM => MM  … [truncated]
-       return (0, GM.jsxs)("div", {
-         className: "SettingsMenuRightInner",
-         children: [CM && (0, GM.jsxs)("div", {
-           className: "SettingBox SettingBoxWithButton",
-           children: [(0, GM.jsx)("div", {
-             children: MM("controller:settingsControlsNote")
-           }), (0, GM.jsx)(QM.V, {
-             onClick: () => {
-               zM.d.set({
- ... (94 more removed lines; see GitHub link above)
+       pU && GU(!1)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L2851-L3004` → after: `L148-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L148-L150) · [Before (L2851-L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L2851-L3004)

```diff
-       let {
-         title: rM,
-         defaultOpen: iM,
-         children: OM
-       } = MM;
-       const [jM, aM] = (0, SM.useState)(iM);
-       return (0, GM.jsxs)("div", {
-         className: nM()("ControlsSection", {
-           Collapsed: !jM
-         }),
-         children: [(0, GM.jsxs)("div", {
-           className: "ControlsSectionHeader",
-           "data-pad-focusable": !0,
-           onClick: () => {
-             aM(!jM)
-           },
- ... (138 more removed lines; see GitHub link above)
+       "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
+         openInGameMenuName: UU ? "inventory" : null
+       }), UU || (0, AU.l)(), pU = !1
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L3007` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L153) · [Before (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L3007)

```diff
-   9472: (MM, rM, iM) => {
+   9339: (UU, XU, zU) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L3011-L3126` → after: `L157-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L157-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L157-L169) · [Before (L3011-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L3011-L3126)

```diff
-     var OM = iM(44),
-       SM = iM(1398),
-       jM = iM(1303);
-     const aM = (0, OM.forwardRef)((function(MM, rM) {
-       let {
-         icon: iM,
-         title: OM,
-         sub: aM,
-         expanded: PM,
-         onClick: nM
-       } = MM;
-       return (0, jM.jsxs)("button", {
-         ref: rM,
-         type: "button",
-         className: "SettingBox SettingBoxFeatured FeaturedSettingsEntry",
-         "aria-expanded": PM,
- ... (100 more removed lines; see GitHub link above)
+     var cU = zU(9348),
+       yU = zU(646),
+       QU = zU(142);
+ 
+     function AU(UU) {
+       var XU, zU;
+       if ((0, yU.P)(UU)) return !0;
+       const AU = null !== (XU = null === (zU = QU.siteUsedData[QU.siteUsed]) || void 0 === zU ? void 0 : zU.adConfig.showRewardedAds) && void 0 !== XU && XU;
+       for (const yU in UU) {
+         const XU = UU[yU];
+         if (null !== XU && void 0 !== XU && XU.items)
+           for (const UU in XU.items)
+             if ((0, cU.o)(XU.items[UU], AU)) return !1
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L3128-L3145` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L171) · [Before (L3128-L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L3128-L3145)

```diff
-   },
-   9438: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => PM
-     });
-     var OM = iM(19),
-       SM = iM(2252),
-       jM = iM(1429),
-       aM = iM(1464);
-     const PM = async () => {
-       if ((0, aM.l)()) {
-         if (!0 !== await jM.NotificationProvider.showPromptPopup({
-             title: "controller:menusLeaveGameTitle",
-             confirmText: "controller:menusLeaveGameLeave",
-             cancelText: "controller:menusLeaveGameStay",
-             destructive: !0
- ... (2 more removed lines; see GitHub link above)
+       return !0
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L3148-L3154` → after: `L174-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L174-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L174-L177) · [Before (L3148-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L3148-L3154)

```diff
-   9442: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => nM,
-       g: () => jM,
-       k: () => aM,
-       n: () => SM,
-       p: () => PM
+   63270: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       getClientGameMapKey: () => cU.n,
+       shopIsEmpty: () => yU.c
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L3156-L3166` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L179-L180) · [Before (L3156-L3166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L3156-L3166)

```diff
-     var OM = iM(2074);
-     const SM = "controllerPadShopOpen",
-       jM = MM => OM.i.includes(MM),
-       aM = MM => Object.values(MM).some((MM => !1 !== MM.canBuy && !MM.isRewardedAd)),
-       PM = (MM, rM, iM) => {
-         var OM, SM, aM, PM;
-         const nM = MM.filter((MM => !jM(MM))),
-           QM = null !== rM && MM.includes(rM) ? rM : null;
-         return null !== QM && !jM(QM) && iM(QM) ? QM : null !== (OM = null !== (SM = null !== (aM = null !== (PM = nM.find(iM)) && void 0 !== PM ? PM : nM[0]) && void 0 !== aM ? aM : QM) && void 0 !== SM ? SM : MM[0]) && void 0 !== OM ? OM : null
-       },
-       nM = MM => MM.userInput || MM.isRewardedAd || "boolean" === typeof MM.isSelected ? null : JSON.stringify([MM.image, MM.cost, MM.currency, MM.amount, MM.customTitle, MM.buyButtonText, MM.description, MM.canBuy])
+     var cU = zU(37325),
+       yU = zU(9339)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L3168-L3195` → after: `L182-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L182-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L182-L196) · [Before (L3168-L3195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L3168-L3195)

```diff
-   9461: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => QM,
-       e: () => zM
-     });
-     var OM = iM(44),
-       SM = iM(1516),
-       jM = iM(2120),
-       aM = iM(1474),
-       PM = iM(1498),
-       nM = iM(1303);
-     const QM = () => {
-         const MM = (0, aM.s)();
-         if ((0, OM.useEffect)((() => {
-             (0, aM.k)()
-           }), []), !MM) return null;
- ... (12 more removed lines; see GitHub link above)
+   9348: (UU, XU, zU) => {
+     function cU(UU, XU) {
+       return !UU.hidden && (XU || !UU.isRewardedAd)
+     }
+ 
+     function yU(UU) {
+       return "object" === typeof UU ? UU.option : UU
+     }
+ 
+     function QU(UU, XU) {
+       var zU;
+       if ("dropdown" === (null === (zU = UU.userInput) || void 0 === zU ? void 0 : zU.type) && "object" === typeof UU.userInput.dropdownOptions[0]) {
+         for (const zU of UU.userInput.dropdownOptions)
+           if (yU(zU) === XU) return "object" === typeof zU ? zU.cost : UU.cost;
+         console.error("Didn't find matching option for dropdown item. Item:", UU, "input:", XU)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L3197-L3198` → after: `L198-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L198-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L198-L205) · [Before (L3197-L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L3197-L3198)

```diff
-   },
-   9271: (MM, rM, iM) => {
+       return UU.cost
+     }
+ 
+     function AU(UU, XU, zU) {
+       var cU;
+       const yU = null !== (cU = zU.excludedPlayers) && void 0 !== cU ? cU : [XU];
+       return UU.filter((UU => !yU.includes(UU)))
+     }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L3207-L3340` → after: `L208-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/171.js#L208-L211) · [Before (L3207-L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/171.js#L3207-L3340)

```diff
-       g: () => wM,
-       j: () => GM,
-       m: () => UM,
-       q: () => hM,
-       t: () => JM,
-       w: () => mM,
-       x: () => HM,
-       y: () => bM,
-       z: () => QM
-     });
-     var OM = iM(22),
-       SM = iM(1750),
-       jM = iM(9279),
-       aM = iM(9287),
-       PM = iM(2508);
-     const nM = MM => (0, aM.i)(MM),
- ... (118 more removed lines; see GitHub link above)
+       h: () => yU,
+       l: () => AU,
+       o: () => cU
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/172.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/172.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049)

#### 1. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L4)

```diff
-   37538: (MM, rM, iM) => {
+   39930: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L6-L9` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L6-L7) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L6-L9)

```diff
-       e: () => HM,
-       i: () => hM,
-       m: () => mM,
-       p: () => LM
+       d: () => FU,
+       f: () => QU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L11-L18` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L9-L14) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L11-L18)

```diff
-     var OM = iM(35017),
-       SM = iM(37542),
-       jM = iM(37544),
-       aM = iM(9328),
-       PM = iM(1516),
-       nM = iM(44),
-       QM = iM(65),
-       zM = iM(1303);
+     var cU = zU(4460);
+     let yU = null;
+ 
+     function QU(UU) {
+       return null !== yU && UU === yU
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L21-L24` → after: `L17-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L17-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L17-L64) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L21-L24)

```diff
-       var MM;
-       return (0, PM.e)(SM.e, (0, SM.t)()), (0, zM.jsx)(zM.Fragment, {
-         children: null === (MM = (0, SM.t)()) || void 0 === MM ? void 0 : MM.content
-       })
+       this.HJ = !1, this.stopPropagation = !1, this.MJ = !1, this.disabled = !1
+     }
+     class FU {
+       constructor(UU, XU) {
+         this.version = "0.7.0";
+         var zU = Object.assign({}, new AU, XU || {});
+         this.element = UU || document, this.HJ = !!zU.HJ, this.stopPropagation = !!zU.stopPropagation, this.MJ = !!zU.MJ, this.disabled = !!zU.disabled, this.filterEvents = (UU, XU) => !0, this.ignoreEvent = UU => !1, this.down = new cU.EventEmitter, this.up = new cU.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           UzU: 0,
+           XzU: 0,
+           zzU: 0
+         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
+           lastX: 0,
+           lastY: 0,
+           currID: null
+ ... (32 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L28-L41` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L68) · [Before (L28-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L28-L41)

```diff
-       var rM;
-       let {
-         show: iM
-       } = MM;
-       (0, PM.e)(SM.e, (0, SM.t)());
-       const QM = null === (rM = (0, SM.t)()) || void 0 === rM ? void 0 : rM.menu;
-       return (0, nM.useEffect)((() => {
-         var MM;
-         iM || (null === QM || void 0 === QM || null === (MM = QM.onClose) || void 0 === MM || MM.call(QM), (0, jM.q)())
-       }), [iM, QM]), (0, nM.useEffect)((() => iM ? (0, aM.e)(jM.y, jM.f) : void 0), [iM]), (0, zM.jsx)(OM.e, {
-         showing: iM,
-         globallyUniqueKey: "clientGameMenu",
-         children: null === QM || void 0 === QM ? void 0 : QM.content
-       })
+       for (var XU in UU) UU[XU] = 0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L45-L53` → after: `L72-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L72-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L72-L78) · [Before (L45-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L45-L53)

```diff
-       let {
-         placement: rM = "bottom"
-       } = MM;
-       return (0, zM.jsx)("div", {
-         id: `clientGameHud-${rM}`,
-         style: {
-           display: "contents"
-         }
-       })
+       window.addEventListener("keydown", tU.bind(null, UU, !0), !1), window.addEventListener("keyup", tU.bind(null, UU, !1), !1);
+       var XU = {
+         passive: !0
+       };
+       UU.element.addEventListener("touchstart", IU.bind(void 0, UU), {
+         passive: !1
+       }), UU.element.addEventListener("touchend", aU.bind(void 0, UU), XU), UU.element.addEventListener("mousedown", gU.bind(null, UU, !0), XU), window.document.addEventListener("mouseup", gU.bind(null, UU, !1), XU), UU.element.addEventListener("touchmove", kU.bind(null, UU), XU) … [truncated]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L56-L64` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L84-L85) · [Before (L56-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L56-L64)

```diff
-     function hM(MM) {
-       let {
-         children: rM,
-         placement: iM = "bottom"
-       } = MM;
-       const [OM, SM] = (0, nM.useState)(null);
-       return (0, nM.useEffect)((() => {
-         SM(document.getElementById(`clientGameHud-${iM}`))
-       }), [iM]), OM ? (0, QM.createPortal)(rM, OM) : null
+     function IU(UU, XU) {
+       XU.preventDefault(), pU(XU)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L66-L84` → after: `L87-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L87-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L87-L96) · [Before (L66-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L66-L84)

```diff
-   },
-   9328: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => jM,
-       e: () => SM
-     });
-     let OM = null;
-     const SM = function(MM) {
-         const rM = {
-           cycle: MM,
-           canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
-         };
-         return OM = rM, () => {
-           OM === rM && (OM = null)
-         }
-       },
- ... (3 more removed lines; see GitHub link above)
+ 
+     function pU(UU) {
+       let XU = !1;
+       for (let zU = 0; zU < UU.touches.length; ++zU)
+         if (UU.touches[zU].identifier === NU) {
+           XU = !0;
+           break
+         } if (!XU) {
+         const XU = UU.changedTouches[0];
+         EU = XU.clientX, YU = XU.clientY, NU = XU.identifier
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L86-L87` → after: `L98-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L98-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L98-L103) · [Before (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L86-L87)

```diff
-   },
-   39543: (MM, rM, iM) => {
+     }
+ 
+     function aU(UU, XU) {
+       for (var zU = XU.changedTouches, cU = 0; cU < zU.length; ++cU) zU[cU].identifier === NU && (NU = null)
+     }
+ 
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L89-L104` → after: `L105-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L105-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L105-L108) · [Before (L89-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L89-L104)

```diff
-       var OM;
-       const {
-         width: SM,
-         height: jM
-       } = iM, aM = null !== (OM = MM.text) && void 0 !== OM ? OM : MM, PM = (aM.x / 100 - .5) * SM, nM = (aM.y / 100 - .5) * jM, QM = SM / 2 - rM.x;
-       if (null !== MM.text && Math.abs(PM) <= QM && nM >= rM.top - jM / 2 && nM <= jM / 2 - rM.bottom) return {
-         x: aM.x,
-         y: aM.y
-       };
-       const zM = Math.min(0 === PM ? 1 / 0 : QM / Math.abs(PM), nM > 0 ? (jM / 2 - rM.bottom) / nM : nM < 0 ? (rM.top - jM / 2) / nM : 1 / 0);
-       return !Number.isFinite(zM) || zM < 0 ? {
-         x: 50,
-         y: 50
-       } : {
-         x: 50 + PM * zM / SM * 100,
-         y: 50 + nM * zM / jM * 100
+       if (!UU.ignoreEvent(zU)) try {
+         WU(UU, zU), XU && zU.isTrusted && !zU.repeat && UU._keyStates[zU.code] && dU(UU, zU.code)
+       } finally {
+         LU(zU.code, XU, UU, zU)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L107-L126` → after: `L111-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L111-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L111-L126) · [Before (L107-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L107-L126)

```diff
-     iM.d(rM, {
-       c: () => OM
-     })
-   },
-   39578: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     const OM = 4,
-       SM = 12e3,
-       jM = 1e3;
-     class aM {
-       constructor() {
-         let {
-           limit: MM = OM,
-           windowMs: rM = SM,
- ... (4 more removed lines; see GitHub link above)
+ 
+     function gU(UU, XU, zU) {
+       if (!UU.ignoreEvent(zU)) try {
+         WU(UU, zU)
+       } finally {
+         ! function(UU, XU, zU) {
+           if ("pointerId" in zU)
+             if (XU) {
+               if (null !== UU._touches.currID) return;
+               UU._touches.currID = zU.pointerId
+             } else {
+               if (UU._touches.currID !== zU.pointerId) return;
+               UU._touches.currID = null
+             } var cU = "button" in zU ? zU.button + 1 : 1;
+           LU("Mouse" + cU, XU, UU, zU)
+         }(UU, XU, zU)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L128-L129` → after: `L128-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L128-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L128-L143) · [Before (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L128-L129)

```diff
-       isPacing() {
-         return !this.canSendPriority() || this.isPriorityWaiting()
+     }
+ 
+     function kU(UU, XU) {
+       var zU = XU.movementX || XU.mozMovementX || 0,
+         cU = XU.movementY || XU.mozMovementY || 0;
+       if (XU.touches && 0 === (zU | cU)) {
+         var yU = function(UU) {
+           pU(UU);
+           for (let XU = 0; XU < UU.changedTouches.length; ++XU)
+             if (UU.changedTouches[XU].identifier == NU) {
+               const zU = UU.changedTouches[XU],
+                 cU = [zU.clientX - EU, zU.clientY - YU];
+               return EU = zU.clientX, YU = zU.clientY, cU
+             } return console.error(`Did not find touch id ${NU}`), [0, 0]
+         }(XU);
+         zU = yU[0], cU = yU[1]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L131-L132` → after: `L145-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L145-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L145-L159) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L131-L132)

```diff
-       canSendPriority() {
-         return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
+       UU.vJ.dx += zU, UU.vJ.dy += cU
+     }
+ 
+     function GU(UU, XU) {
+       WU(UU, XU);
+       var zU = 1;
+       switch (XU.deltaMode) {
+         case 0:
+           zU = 1;
+           break;
+         case 1:
+           zU = 12;
+           break;
+         case 2:
+           zU = UU.element.clientHeight || window.innerHeight
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L134-L136` → after: `L161-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L161-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L161-L213) · [Before (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L134-L136)

```diff
-       tryStart() {
-         for (const MM of this.priority) MM.flush();
-         return !this.isPacing() && (this.start(), !0)
+       UU.vJ.UzU += (XU.deltaX || 0) * zU, UU.vJ.XzU += (XU.deltaY || 0) * zU, UU.vJ.zzU += (XU.deltaZ || 0) * zU
+     }
+ 
+     function BU(UU, XU) {
+       if (!UU.MJ) return XU.preventDefault(), !1
+     }
+     var ZU = {
+       AltLeft: "altKey",
+       AltRight: "altKey",
+       ControlLeft: "ctrlKey",
+       ControlRight: "ctrlKey",
+       ShiftLeft: "shiftKey",
+       ShiftRight: "shiftKey",
+       MetaLeft: "metaKey",
+       MetaRight: "metaKey"
+     };
+ ... (37 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L138-L141` → after: `L215-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L215-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L215-L261) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L138-L141)

```diff
-       start() {
-         this.prune();
-         const MM = this.now();
-         this.sent.push(MM), this.lastSentAt = MM, this.schedule(), this.notify()
+     }
+ 
+     function LU(UU, XU, zU, cU) {
+       var yU = zU._keyBindmap[UU];
+       yU && (eU(zU._keyStates[UU], XU) && (zU._keyStates[UU] = XU, yU.forEach((UU => {
+         (!zU.filterEvents || zU.filterEvents(cU, UU)) && function(UU, XU, zU, cU) {
+           var yU = XU ? zU.pressCount : zU.releaseCount;
+           yU[UU] = (yU[UU] || 0) + 1;
+           var QU = zU._bindPressCount[UU] || 0;
+           (QU += XU ? 1 : -1) < 0 && (QU = 0);
+           zU._bindPressCount[UU] = QU;
+           var AU = zU.state[UU];
+           if (eU(AU, QU)) {
+             zU.state[UU] = QU > 0;
+             var FU = XU ? zU.down : zU.up;
+             zU.disabled || FU.emit(UU, cU)
+ ... (31 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L143-L145` → after: `L263-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L263-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L263-L306) · [Before (L143-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L143-L145)

```diff
-       addPriority(MM) {
-         return this.priority.add(MM), () => {
-           this.priority.delete(MM)
+     }
+ 
+     function IU(UU) {
+       return YU.find((XU => null !== XU.source && XU.source === UU))
+     }
+ 
+     function pU(UU) {
+       clearTimeout(UU.timeout), UU.source = null, UU.direction = null, UU.writtenAngle = null, UU.HV && (UU.HV.style.rotate = "")
+     }
+     const aU = (0, cU.memo)((function() {
+       const [, UU] = (0, cU.useReducer)((UU => UU + 1), 0);
+       return (0, yU.f)("damagedByOtherPlayer", (XU => {
+         let {
+           fQ: zU,
+           direction: cU
+         } = XU;
+ ... (28 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L148-L150` → after: `L328-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L328-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L328-L423) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L148-L150)

```diff
-       subscribe(MM) {
-         return this.listeners.add(MM), () => {
-           this.listeners.delete(MM)
+     }
+   },
+   37211: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => yU,
+       g: () => QU
+     });
+     let cU = !1;
+ 
+     function yU() {
+       return cU
+     }
+ 
+     function QU(UU) {
+       return cU !== UU && (cU = UU, !0)
+     }
+ ... (80 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L152-L178` → after: `L425-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L425-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L425-L531) · [Before (L152-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L152-L178)

```diff
-       }
-       dispose() {
-         this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
-       }
-       isPriorityWaiting() {
-         for (const MM of this.priority)
-           if (MM.waiting()) return !0;
-         return !1
-       }
-       prune() {
-         const MM = this.now() - this.windowMs;
-         for (; this.sent.length > 0 && this.sent[0] <= MM;) this.sent.shift()
-       }
-       schedule() {
-         this.clearTimer();
-         const MM = this.now(),
- ... (11 more removed lines; see GitHub link above)
+       };
+     var BU = zU(41640);
+     zU(38431), zU(9294);
+     zU(9314).e;
+     const ZU = () => {
+       const UU = (0, BU.e)((() => {
+           const UU = {
+             x: 0,
+             y: 0,
+             magnitude: 0,
+             headingOffset: 0,
+             jumpHeld: !1,
+             jumpPressedSinceTick: !1,
+             crouchHeld: !1,
+             running: !1,
+             sprintHeld: !1
+ ... (91 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L182` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L535) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L182)

```diff
-   37544: (MM, rM, iM) => {
+   37334: (UU, XU, zU) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L184-L186` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L537) · [Before (L184-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L184-L186)

```diff
-       B: () => lM,
-       b: () => jM,
-       f: () => JM,
+       e: () => QU,
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L188-L191` → after: `L539-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L539-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L539-L544) · [Before (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L188-L191)

```diff
-       j: () => PM,
-       m: () => mM,
-       q: () => yM,
-       u: () => LM,
+       l: () => tU,
+       o: () => FU,
+       r: () => NU,
+       t: () => gU,
+       v: () => YU,
+       w: () => GU,
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L195-L196` → after: `L548-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L548-L549) · [Before (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L195-L196)

```diff
-     var OM = iM(19),
-       SM = iM(22);
+     var cU = zU(27),
+       yU = zU(31);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L203` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L556) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L203)

```diff
-         return (null !== (iM = MM.order) && void 0 !== iM ? iM : 0) - (null !== (OM = rM.order) && void 0 !== OM ? OM : 0)
+         return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L220` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L573) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L220)

```diff
-       MM.panel && "clientGame" === OM.d.get("openInGameMenuName") && QM(MM.id)
+       UU.panel && "clientGame" === cU.e.get("openInGameMenuName") && DU(UU.id)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L246` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L599) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L246)

```diff
-       "inventory" !== OM.d.get("openInGameMenuName") && QM(null)
+       "inventory" !== cU.e.get("openInGameMenuName") && DU(null)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L255-L256` → after: `L608-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L608-L609) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L255-L256)

```diff
-       return aM.set(MM.id, MM), SM.i.Tz(jM, PM(), !0), () => {
-         aM.get(MM.id) === MM && (aM.delete(MM.id), SM.i.Tz(jM, PM()))
+       return AU.set(UU.id, UU), yU.k.UY(QU, FU(), !0), () => {
+         AU.get(UU.id) === UU && (AU.delete(UU.id), yU.k.UY(QU, FU()))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L260` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L613) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L260)

```diff
-   37542: (MM, rM, iM) => {
+   37325: (UU, XU, zU) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L262-L266` → after: `L615-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L615-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L615-L618) · [Before (L262-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L262-L266)

```diff
-       A: () => HM,
-       C: () => zM,
-       e: () => PM,
-       g: () => lM,
-       k: () => dM,
+       d: () => FU,
+       h: () => kU,
+       j: () => tU,
+       l: () => gU,
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L268` → after: `L620-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L620-L621) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L268)

```diff
-       p: () => mM,
+       o: () => DU,
+       r: () => aU,
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L270` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L623) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L270)

```diff
-       w: () => JM
+       u: () => EU
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L272-L275` → after: `L625-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L625-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L625-L628) · [Before (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L272-L275)

```diff
-     var OM = iM(19),
-       SM = iM(22),
-       jM = iM(1313),
-       aM = iM(37544);
+     var cU = zU(27),
+       yU = zU(31),
+       QU = zU(1310),
+       AU = zU(37334);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L288-L289` → after: `L641-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L641-L642) · [Before (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L288-L289)

```diff
-       return nM = iM, SM.i.Tz(PM, nM, !0), () => {
-         nM === iM && (nM = null, hM = !1, dM(), SM.i.Tz(PM, null))
+       return oU = zU, yU.k.UY(FU, oU, !0), () => {
+         oU === zU && (oU = null, pU = !1, tU(), yU.k.UY(FU, null))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L306-L307` → after: `L659-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L659-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L659-L660) · [Before (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L306-L307)

```diff
-       const MM = OM.d.get("openInGameMenuName");
-       "clientGame" !== MM && (hM = "inventory" === MM), (0, aM.m)() || (0, aM.i)(), (0, jM.z)(jM.e), OM.d.set({
+       const UU = cU.e.get("openInGameMenuName");
+       "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L326` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L679) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L326)

```diff
-       "clientGame" === OM.d.get("openInGameMenuName") && OM.d.set({
+       "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L328` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L681) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L328)

```diff
-       }), MM || (0, aM.i)(), hM = !1
+       }), UU || (0, AU.l)(), pU = !1
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L331` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L684) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L331)

```diff
-   39580: (MM, rM, iM) => {
+   37203: (UU, XU, zU) => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L335-L337` → after: `L688-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L688-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L688-L692) · [Before (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L335-L337)

```diff
-     var OM = iM(44),
-       SM = iM(39548),
-       jM = iM(1303);
+     var cU = zU(320),
+       yU = zU(27),
+       QU = zU(37211),
+       AU = zU(1680),
+       FU = zU(2058);
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L339-L348` → after: `L694-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L694-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L694-L699) · [Before (L339-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L339-L348)

```diff
-     function aM(MM) {
-       let {
-         icon: rM
-       } = MM;
-       const iM = (0, OM.useCallback)((MM => {
-         null === MM || void 0 === MM || MM.replaceChildren((0, SM.d)(rM))
-       }), [rM]);
-       return (0, jM.jsx)("span", {
-         className: "SkyblockMapIconSlot",
-         ref: iM
+     function oU(UU, XU) {
+       var zU, oU, DU;
+       if (!yU.e.get("isKeydownEnabled") || UU.repeat) return;
+       const EU = UU.code;
+       "Escape" === UU.key ? (0, AU.g)(UU) : null !== (zU = FU.w.OpenSettings) && void 0 !== zU && zU.includes(EU) ? (0, AU.x)(UU, cU.s.SETTINGS) : null !== (oU = FU.w.OpenCharacterCustomization) && void 0 !== oU && oU.includes(EU) ? (0, QU.e)() || (0, AU.x)(UU, cU.s.CUSTOMISATION … [truncated]
+         showDebugOverlay: !yU.e.get("showDebugOverlay")
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L352` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L703) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L352)

```diff
-   39548: (MM, rM, iM) => {
+   39876: (UU, XU, zU) => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L354-L355` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L705) · [Before (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L354-L355)

```diff
-       d: () => eM,
-       f: () => CM
+       e: () => oU
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L357-L374` → after: `L707-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L707-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L707-L709) · [Before (L357-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L357-L374)

```diff
-     const OM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
-       SM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
-       jM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC";
-     var aM = iM(39552);
-     const PM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
-     var nM = iM(39558);
-     var QM = iM(39561);
-     var zM = iM(39565);
-     const LM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAI … [truncated]
-     iM(44);
-     const mM = iM.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
-     const HM = iM.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
-       hM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
-     var JM = iM(18999),
-       dM = iM(21067),
-       yM = iM(23407),
- ... (2 more removed lines; see GitHub link above)
+     var cU = zU(9493),
+       yU = zU(37201),
+       QU = zU(39882);
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L376-L461` → after: `L711-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L711-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L711-L719) · [Before (L376-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L376-L461)

```diff
-       ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
-       auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
-       bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
-       carrot: JM,
-       castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
-       cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
-       combat_1: dM,
-       cow: PM,
-       craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
-       dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
-       emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
-       enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
-       farm: iM(26682),
-       farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
-       fishing: OM,
-       fishing_1: OM,
- ... (70 more removed lines; see GitHub link above)
+         seat: "seat_timeout",
+         socket_unopened: "socket_timeout_unopened",
+         socket: "socket_timeout"
+       },
+       FU = {
+         seat: "seat_lost",
+         socket_unopened: "socket_unopened",
+         socket: "socket_closed"
+       };
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L464-L465` → after: `L722-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L722-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L722-L749) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L464-L465)

```diff
-       const iM = document.createElement("img");
-       return iM.className = rM, iM.src = MM, iM.alt = "", iM.draggable = !1, iM
+       if (UU instanceof yU.c) return {
+         at: AU[XU],
+         code: 0
+       };
+       const zU = (0, cU.f)(UU),
+         oU = "number" === typeof zU ? zU : 0;
+       return null !== (0, QU.l)(oU).name ? {
+         at: "refused",
+         code: oU
+       } : {
+         at: FU[XU],
+         code: oU
+       }
+     }
+   },
+   9493: (UU, XU, zU) => {
+ ... (12 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L469` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L753) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L469)

```diff
-       return Object.hasOwn(UM, MM) || MM.startsWith("npc_")
+       return "object" === typeof UU && null !== UU ? UU.code : void 0
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L474-L479` → after: `L758-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L758-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L758-L768) · [Before (L474-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L474-L479)

```diff
-       const iM = null !== (rM = UM[MM]) && void 0 !== rM ? rM : MM.startsWith("npc_") ? aM : hM;
-       if ("portal" !== MM) return GM(iM, "SkyblockMapIcon");
-       const OM = document.createElement("span");
-       OM.className = "SkyblockMapIcon Portal";
-       const SM = document.createElement("span");
-       return SM.className = "SkyblockMapIconTint", SM.style.maskImage = SM.style.webkitMaskImage = `url("${LM}")`, OM.append(GM(iM, "SkyblockMapIconLayer"), SM, GM(LM, "SkyblockMapIconLayer SkyblockMapIconShade")), OM
+       return null !== (XU = Object.keys(yU.b).find((XU => yU.b[XU] === UU))) && void 0 !== XU ? XU : null
+     }
+ 
+     function oU(UU) {
+       return "notWhitelisted" === UU ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+     }
+     const DU = {
+       private: "customLobby:cantJoinPrivate",
+       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
+       banned: "customLobby:cantJoinBanned",
+       adminLocked: "customLobby:cantJoinAdminLocked"
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L482` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L771) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L482)

```diff
-   35040: (MM, rM, iM) => {
+   37181: (UU, XU, zU) => {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L485` → after: `L774-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L774-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L774-L776) · [Before (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L485)

```diff
-       g: () => aM
+       h: () => EU,
+       i: () => IU,
+       l: () => YU
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L487-L667` → after: `L778-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L778-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L778-L802) · [Before (L487-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L487-L667)

```diff
-     const OM = [{
-       threshold: 10n ** 180n,
-       suffix: "NoQig"
-     }, {
-       threshold: 10n ** 177n,
-       suffix: "OcQig"
-     }, {
-       threshold: 10n ** 174n,
-       suffix: "SpQig"
-     }, {
-       threshold: 10n ** 171n,
-       suffix: "SQig"
-     }, {
-       threshold: 10n ** 168n,
-       suffix: "QiQig"
-     }, {
- ... (165 more removed lines; see GitHub link above)
+     var cU = zU(344),
+       yU = zU(698),
+       QU = zU(708),
+       AU = zU(42);
+     const FU = {
+         idStorageKey: "playSessionId",
+         lastActivityStorageKey: "playSessionLastActivityMs",
+         expiryMs: 3e5
+       },
+       oU = "playSessionGameNameWithVariation",
+       DU = "wasMatchmakePlayer";
+ 
+     function EU() {
+       let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n;
+       (0, QU.k)(UU, FU)
+     }
+ ... (9 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L670-L694` → after: `L805-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L805-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L805-L813) · [Before (L670-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L670-L694)

```diff
-       let rM, iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
-       if ("number" === typeof MM) {
-         if (!Number.isFinite(MM)) return "0";
-         if (Math.abs(MM) < 100) {
-           const rM = MM < 0 ? "-" : "",
-             iM = Math.abs(MM);
-           return iM >= 10 ? `${rM}${iM.toFixed(1).replace(/\.0$/,"")}` : `${rM}${iM.toFixed(2).replace(/\.?0+$/,"")}`
-         }
-         rM = BigInt(Math.floor(MM))
-       } else rM = MM;
-       const SM = rM < 0n ? -rM : rM,
-         jM = rM < 0n ? "-" : "",
-         aM = SM.toString();
-       if (aM.length <= iM) return `${jM}${aM}`;
-       const PM = 3 * Math.floor((aM.length - 1) / 3);
-       if (PM < 3) return `${jM}${aM}`;
- ... (9 more removed lines; see GitHub link above)
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AU.n;
+       const zU = (0, QU.e)(XU, FU),
+         EU = function(UU) {
+           const XU = UU.getItem(oU);
+           return "string" !== typeof XU ? null : XU
+         }(XU),
+         YU = function() {
+           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n).getItem(DU)
+         }(XU);
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L696` → after: `L815-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L815-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L815-L824) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L696)

```diff
-       return HM = mM >= 100 ? Math.floor(mM).toString() : mM >= 10 ? mM.toFixed(1).replace(/\.0$/, "") : mM.toFixed(2).replace(/\.?0+$/, ""), `${jM}${HM}${QM}`
+       return NU = null !== zU && null !== EU && (0, QU.i)(XU, FU) && function(UU, XU, zU) {
+           const yU = (0, cU.Tb)(UU),
+             QU = (0, cU.Tb)(XU),
+             AU = (0, cU.Nb)(UU),
+             FU = (0, cU.Nb)(XU);
+           return !(yU !== QU || !zU) || yU === QU && AU === FU
+         }(EU, UU, YU) ? zU : (0, yU.d)(), (0, QU.m)(XU, FU, NU), XU.setItem(oU, UU),
+         function() {
+           (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n).removeItem(DU)
+         }(XU), NU
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L698-L702` → after: `L826-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L826-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L826-L918) · [Before (L698-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L698-L702)

```diff
-     const jM = OM.map((MM => {
-       let {
-         threshold: rM,
-         suffix: iM
-       } = MM;
+   },
+   37172: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => ZU,
+       g: () => RU
+     });
+     var cU = zU(1079),
+       yU = zU(220),
+       QU = zU(337),
+       AU = zU(654),
+       FU = zU(344),
+       oU = zU(1083),
+       DU = zU(687),
+       EU = zU(730),
+       YU = zU(4959),
+       NU = zU(97),
+ ... (77 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L704-L705` → after: `L920-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L920-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L920-L921) · [Before (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L704-L705)

```diff
-         threshold: Number(rM),
-         suffix: iM
+         text: (XU ? UU.slice(0, -cU.m.length) : UU) || null,
+         dropsCache: XU
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L707-L712` → after: `L923-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L923-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L923-L930) · [Before (L707-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L707-L712)

```diff
-     })).filter((MM => {
-       let {
-         threshold: rM
-       } = MM;
-       return Number.isFinite(rM)
-     }));
+     }
+     const FU = "Either your internet isn't working or this is a bug.";
+ 
+     function oU(UU, XU) {
+       const zU = EU(UU);
+       return null !== zU.name && "" === cU.e[zU.name].text && null !== XU ? XU : zU.reason
+     }
+     const DU = "You were removed from the game.";
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L715-L727` → after: `L933-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L933-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L933-L955) · [Before (L715-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L715-L727)

```diff
-       const rM = Math.abs(MM),
-         iM = MM < 0 ? "-" : "";
-       for (const {
-           threshold: OM,
-           suffix: SM
-         }
-         of jM)
-         if (rM >= OM) {
-           const MM = rM / OM;
-           if (MM >= 1e3) return `${iM}${rM.toExponential(2).replace("e+","e")}`;
-           let jM;
-           return jM = MM >= 100 ? Math.floor(MM).toString() : MM >= 10 ? MM.toFixed(1).replace(/\.0$/, "") : MM.toFixed(2).replace(/\.?0+$/, ""), `${iM}${jM}${SM}`
-         } return `${iM}${rM}`
+       var XU;
+       let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       const yU = null !== (XU = Object.keys(cU.e).find((XU => cU.e[XU].code === UU))) && void 0 !== XU ? XU : null;
+       if (null === yU) return {
+         code: UU,
+         name: yU,
+         reason: null !== zU && void 0 !== zU ? zU : `${FU}\nCode: ${UU}`,
+         canReconnect: !1,
+         automaticallyReconnect: !1,
+         requiresRefresh: !1
+       };
+       const {
+         text: QU,
+         canReconnect: AU = !1
+       } = cU.e[yU], oU = UU === cU.e.outdatedVersion.code || UU === cU.e.loadRecaptchaError.code;
+       return {
+ ... (7 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L730-L755` → after: `L958-L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L958-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L958-L969) · [Before (L730-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L730-L755)

```diff
-   18999: MM => {
-     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
-   },
-   21067: MM => {
-     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444K … [truncated]
-   },
-   23407: MM => {
-     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
-   },
-   24971: MM => {
-     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
-   },
-   26667: MM => {
-     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLE … [truncated]
-   },
-   26682: MM => {
- ... (10 more removed lines; see GitHub link above)
+   39819: (UU, XU, zU) => {
+     function cU(UU, XU, zU, cU, yU) {
+       var QU = {};
+       return Object.keys(cU).forEach((function(UU) {
+         QU[UU] = cU[UU]
+       })), QU.enumerable = !!QU.enumerable, QU.configurable = !!QU.configurable, ("value" in QU || QU.initializer) && (QU.writable = !0), QU = zU.slice().reverse().reduce((function(zU, cU) {
+         return cU(UU, XU, zU) || zU
+       }), QU), yU && void 0 !== QU.initializer && (QU.value = QU.initializer ? QU.initializer.call(yU) : void 0, QU.initializer = void 0), void 0 === QU.initializer && (Object.defineProperty(UU, XU, QU), QU = null), QU
+     }
+     zU.d(XU, {
+       d: () => cU
+     })
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L757-L758` → after: `L971-L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L971-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/172.js#L971-L982) · [Before (L757-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/172.js#L757-L758)

```diff
-   39565: MM => {
-     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg=="
+   39812: (UU, XU, zU) => {
+     function cU(UU, XU, zU, cU) {
+       zU && Object.defineProperty(UU, XU, {
+         enumerable: zU.enumerable,
+         configurable: zU.configurable,
+         writable: zU.writable,
+         value: zU.initializer ? zU.initializer.call(cU) : void 0
+       })
+     }
+     zU.d(XU, {
+       c: () => cU
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/173.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/173.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/173.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/173.js#L4-L15)

```diff
-   37544: (MM, rM, iM) => {
-     iM.d(rM, {
-       B: () => lM,
-       b: () => jM,
-       f: () => JM,
-       i: () => dM,
-       j: () => PM,
-       m: () => mM,
-       q: () => yM,
-       u: () => LM,
-       x: () => EM,
-       y: () => hM
+   9525: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       pageBody: () => cU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L17-L26` → after: `L8-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/173.js#L8-L41) · [Before (L17-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/173.js#L17-L26)

```diff
-     var OM = iM(19),
-       SM = iM(22);
-     const jM = "clientGameInventoryButtonsChanged",
-       aM = new Map;
- 
-     function PM() {
-       return [...aM.values()].sort(((MM, rM) => {
-         var iM, OM;
-         return (null !== (iM = MM.order) && void 0 !== iM ? iM : 0) - (null !== (OM = rM.order) && void 0 !== OM ? OM : 0)
-       }))
+     const cU = {
+       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
+       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
+       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
+       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
+       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
+       faq: [{
+         question: "What is Bedwars?",
+         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
+       }, {
+         question: "How do you win Bedwars?",
+         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
+       }, {
+         question: "What happens after your bed is destroyed?",
+         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
+       }, {
+ ... (18 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/174.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/174.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390)

#### 1. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/174.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/174.js#L4-L7)

```diff
-   40118: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => jM,
-       h: () => aM
+   9528: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       pageBody: () => cU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L558-L845` → after: `L9-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/174.js#L9-L32) · [Before (L558-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/174.js#L558-L845)

```diff
-         seat: "seat_timeout",
-         socket_unopened: "socket_timeout_unopened",
-         socket: "socket_timeout"
-       },
-       PM = {
-         seat: "seat_lost",
-         socket_unopened: "socket_unopened",
-         socket: "socket_closed"
-       };
- 
-     function nM(MM, rM) {
-       if (MM instanceof SM.i) return {
-         at: aM[rM],
-         code: 0
-       };
-       const iM = (0, OM.f)(MM),
- ... (272 more removed lines; see GitHub link above)
+       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
+       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
+       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
+       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skywars"],
+       faq: [{
+         question: "What is Bloxd Lucky Bedwars?",
+         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
+       }, {
+         question: "How do you play Lucky Bedwars?",
+         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
+       }, {
+         question: "How is Lucky Bedwars different from normal Bedwars?",
+         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
+       }, {
+         question: "What are Clovers in Lucky Bedwars?",
+ ... (8 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/175.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/175.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/175.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/175.js#L4)

```diff
-   9533: (MM, rM, iM) => {
+   9531: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/175.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/175.js#L9-L13)

```diff
-       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
-       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
-       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
-       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
-       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
+       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
+       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
+       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
+       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/175.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/175.js#L15-L16)

```diff
-         question: "What is Bedwars?",
-         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
+         question: "What is Bloxd Skywars?",
+         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/175.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/175.js#L18-L19)

```diff
-         question: "How do you win Bedwars?",
-         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
+         question: "How do you win in Skywars?",
+         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/175.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/175.js#L21-L22)

```diff
-         question: "What happens after your bed is destroyed?",
-         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
+         question: "Can I play Skywars in my browser?",
+         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/175.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/175.js#L24-L25)

```diff
-         question: "What do the Bedwars generators do?",
-         answer: "Your island's generators drop Coal, Iron Bars and Diamond for items and upgrades. The generators in the centre drop Diamond and Moonstone for the most powerful items."
+         question: "What are the best Skywars kits?",
+         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/175.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/175.js#L27-L28)

```diff
-         question: "What modes can I play in Bloxd Bedwars?",
-         answer: "Solos, Duos, Trios, 4v4, 4v4v4v4 and 1v1. There's also a Ranked Bedwars lobby if you want to climb the leaderboards."
+         question: "What do perks do in Bloxd Skywars?",
+         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/175.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/175.js#L30-L31)

```diff
-         question: "What are match modifiers?",
-         answer: "Some matches add a twist. In Supercharged, every generator starts at Level 2. In Boom, explosives are half price. Weapon Roulette gives you a new random weapon every respawn, and in Specialists you pick a role with special perks."
+         question: "How do I get Gold in Skywars?",
+         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/175.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/175.js#L33-L34)

```diff
-         question: "Can I attack my teammates?",
-         answer: "No, you can't attack players on your own team."
+         question: "How many players fit in one Skywars match?",
+         answer: "Up to 12 players fight it out in each free-for-all match."
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L36-L40` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/175.js#L36-L37) · [Before (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/175.js#L36-L40)

```diff
-         question: "How many Bedwars maps are there?",
-         answer: "Dozens, including Scary Hollow, Wood Factory, Ahoy!, Colosseum and Rooftops."
-       }, {
-         question: "What's the difference between Bedwars and Lucky Bedwars?",
-         answer: "In Bedwars you collect Coal, Iron Bars, Diamond and Moonstone from generators and choose what to buy. Lucky Bedwars hands out gear through Lucky Blocks instead, so no two matches play out the same."
+         question: "What does the compass do in Skywars?",
+         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/176.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/176.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/176.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/176.js#L4)

```diff
-   9540: (MM, rM, iM) => {
+   9535: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/176.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/176.js#L9-L13)

```diff
-       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
-       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
-       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
-       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skywars"],
+       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
+       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
+       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
+       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
+       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/176.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/176.js#L15-L16)

```diff
-         question: "What is Bloxd Lucky Bedwars?",
-         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
+         question: "What is Lucky Towers?",
+         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/176.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/176.js#L18-L19)

```diff
-         question: "How do you play Lucky Bedwars?",
-         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
+         question: "How do you win in Bloxd Lucky Towers?",
+         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/176.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/176.js#L21-L22)

```diff
-         question: "How is Lucky Bedwars different from normal Bedwars?",
-         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
+         question: "How often do you get items in Lucky Towers?",
+         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/176.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/176.js#L24-L25)

```diff
-         question: "What are Clovers in Lucky Bedwars?",
-         answer: "Clovers are the in-game currency. Earn them by opening Lucky Blocks, getting kills, breaking beds, recycling loot and surviving events. Spend them at the Lucky Trader or on team upgrades."
+         question: "What items can you get in Lucky Towers?",
+         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/176.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/176.js#L27-L28)

```diff
-         question: "What's inside Evil Lucky Blocks?",
-         answer: "Bad luck! The Bed Trap upgrade puts Evil Lucky Blocks around your bed. Anyone who opens one could get trapped in obsidian, dropped in lava, webbed, poisoned, blinded, chased by guard dogs or sent home."
+         question: "Which random events can happen in Lucky Towers?",
+         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/176.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/176.js#L30-L31)

```diff
-         question: "What are the Lucky Bedwars events?",
-         answer: "Twice a match a random event starts: Blood Moon, Lucky Crown, Masquerade, Simon Says, Lucky Storm or Tiny Titans. You get a 30-second warning, and beds can't be broken while an event runs."
+         question: "Which maps are in Lucky Towers?",
+         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
+       }, {
+         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
+         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/177.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/177.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/177.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/177.js#L4)

```diff
-   9548: (MM, rM, iM) => {
+   9540: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/177.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/177.js#L9-L13)

```diff
-       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
-       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
-       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
-       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
+       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
+       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
+       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
+       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
+       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/177.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/177.js#L15-L16)

```diff
-         question: "What is Bloxd Skywars?",
-         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
+         question: "What is Lucky Blocks Battlegrounds?",
+         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/177.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/177.js#L18-L19)

```diff
-         question: "How do you win in Skywars?",
-         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
+         question: "How do you win Lucky Blocks Battlegrounds?",
+         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/177.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/177.js#L21-L22)

```diff
-         question: "Can I play Skywars in my browser?",
-         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
+         question: "How do I get Lucky Blocks?",
+         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/177.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/177.js#L24-L25)

```diff
-         question: "What are the best Skywars kits?",
-         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
+         question: "What is the Ultra Lucky Block?",
+         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/177.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/177.js#L27-L28)

```diff
-         question: "What do perks do in Bloxd Skywars?",
-         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
+         question: "What's inside Bloxd lucky blocks?",
+         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/177.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/177.js#L30-L31)

```diff
-         question: "How do I get Gold in Skywars?",
-         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
+         question: "Can other players attack me in my base?",
+         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/177.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/177.js#L33-L37)

```diff
-         question: "How many players fit in one Skywars match?",
-         answer: "Up to 12 players fight it out in each free-for-all match."
-       }, {
-         question: "What does the compass do in Skywars?",
-         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
+         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
+         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/178.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/178.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/178.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/178.js#L4)

```diff
-   9554: (MM, rM, iM) => {
+   9547: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/178.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/178.js#L9-L13)

```diff
-       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
-       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
-       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
-       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
-       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
+       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
+       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
+       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
+       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
+       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/178.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/178.js#L15-L16)

```diff
-         question: "What is Lucky Towers?",
-         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
+         question: "What is Bloxd Survival?",
+         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/178.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/178.js#L18-L19)

```diff
-         question: "How do you win in Bloxd Lucky Towers?",
-         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
+         question: "How do I protect my base in Bloxd Survival?",
+         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/178.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/178.js#L21-L22)

```diff
-         question: "How often do you get items in Lucky Towers?",
-         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
+         question: "Why did my build disappear?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/178.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/178.js#L24-L25)

```diff
-         question: "What items can you get in Lucky Towers?",
-         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
+         question: "Is stealing and griefing allowed in Bloxd Survival?",
+         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/178.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/178.js#L27-L28)

```diff
-         question: "Which random events can happen in Lucky Towers?",
-         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
+         question: "Can I make a private server in Bloxd Survival?",
+         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/178.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/178.js#L30-L31)

```diff
-         question: "Which maps are in Lucky Towers?",
-         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
+         question: "What happens if I log out during a fight?",
+         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L33-L34` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/178.js#L33-L37) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/178.js#L33-L34)

```diff
-         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
-         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
+         question: "Will my world still be there tomorrow?",
+         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
+       }, {
+         question: "Which Bloxd survival mode should I play?",
+         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/179.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/179.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/179.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/179.js#L4)

```diff
-   9562: (MM, rM, iM) => {
+   9549: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/179.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/179.js#L9-L13)

```diff
-       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
-       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
-       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
-       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
-       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
+       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
+       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
+       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
+       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
+       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/179.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/179.js#L15-L16)

```diff
-         question: "What is Lucky Blocks Battlegrounds?",
-         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
+         question: "What is Bloxd Peaceful?",
+         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/179.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/179.js#L18-L19)

```diff
-         question: "How do you win Lucky Blocks Battlegrounds?",
-         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
+         question: "Can you die in Bloxd Peaceful?",
+         answer: "No. There's no health bar, so mobs and other players can't hurt you."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/179.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/179.js#L21-L22)

```diff
-         question: "How do I get Lucky Blocks?",
-         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
+         question: "Is there PvP in Bloxd Peaceful?",
+         answer: "There isn't. Players can't attack each other in Peaceful."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/179.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/179.js#L24-L25)

```diff
-         question: "What is the Ultra Lucky Block?",
-         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
+         question: "Are there mobs in Bloxd Peaceful?",
+         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/179.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/179.js#L27-L28)

```diff
-         question: "What's inside Bloxd lucky blocks?",
-         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
+         question: "What's the difference between Peaceful and Survival in Bloxd?",
+         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/179.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/179.js#L30-L31)

```diff
-         question: "Can other players attack me in my base?",
-         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
+         question: "Is Bloxd Peaceful good for beginners?",
+         answer: "Definitely. It's a safe place to learn the basics. If you die early on in Survival, the game will even offer to move you over to Peaceful."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L33-L34` → after: `L33-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L33-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/179.js#L33-L40) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/179.js#L33-L34)

```diff
-         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
-         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
+         question: "Can I play Bloxd Peaceful with friends?",
+         answer: "Yes. Everyone's in the same shared world, so you can meet up and build together."
+       }, {
+         question: "How do I keep my builds safe in Peaceful?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area (a message shows when you cross its edge). Then put down a Protector and other players won't be able to break your builds or open your chests."
+       }, {
+         question: "How do I save my progress in Bloxd Peaceful?",
+         answer: "Sign in to an account. If you don't, your progress can be lost when your browser's cookies get cleared."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/180.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/180.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/180.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/180.js#L4)

```diff
-   9565: (MM, rM, iM) => {
+   9557: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/180.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/180.js#L9-L13)

```diff
-       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
-       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
-       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
-       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
-       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
+       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
+       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
+       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
+       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
+       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/180.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/180.js#L15-L16)

```diff
-         question: "What is Bloxd Survival?",
-         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
+         question: "What is Bloxd Day and Night Survival?",
+         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/180.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/180.js#L18-L19)

```diff
-         question: "How do I protect my base in Bloxd Survival?",
-         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
+         question: "How do I stop monsters spawning near my base in Bloxd?",
+         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/180.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/180.js#L21-L22)

```diff
-         question: "Why did my build disappear?",
-         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
+         question: "How do I skip the night in Day & Night Survival?",
+         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/180.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/180.js#L24-L25)

```diff
-         question: "Is stealing and griefing allowed in Bloxd Survival?",
-         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
+         question: "What happens to monsters when the sun comes up?",
+         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/180.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/180.js#L27-L28)

```diff
-         question: "Can I make a private server in Bloxd Survival?",
-         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
+         question: "How are Days Survived counted?",
+         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L30-L37` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/180.js#L30-L31) · [Before (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/180.js#L30-L37)

```diff
-         question: "What happens if I log out during a fight?",
-         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
-       }, {
-         question: "Will my world still be there tomorrow?",
-         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
-       }, {
-         question: "Which Bloxd survival mode should I play?",
-         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
+         question: "Can I change the day and night settings on my own server?",
+         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/181.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/181.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/181.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/181.js#L4)

```diff
-   9573: (MM, rM, iM) => {
+   9559: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/181.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/181.js#L9-L13)

```diff
-       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
-       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
-       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
-       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
-       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
+       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
+       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
+       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
+       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
+       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/181.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/181.js#L15-L16)

```diff
-         question: "What is Bloxd Peaceful?",
-         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
+         question: "What is Bloxd Survival with Guns?",
+         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/181.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/181.js#L18-L19)

```diff
-         question: "Can you die in Bloxd Peaceful?",
-         answer: "No. There's no health bar, so mobs and other players can't hurt you."
+         question: "How do you make a gun in Bloxd Survival with Guns?",
+         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/181.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/181.js#L21-L22)

```diff
-         question: "Is there PvP in Bloxd Peaceful?",
-         answer: "There isn't. Players can't attack each other in Peaceful."
+         question: "How many guns are there in Survival with Guns?",
+         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/181.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/181.js#L24-L25)

```diff
-         question: "Are there mobs in Bloxd Peaceful?",
-         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
+         question: "Do mobs carry guns in Bloxd?",
+         answer: "They do. Each type of hostile mob carries its own guns. Draugr Skeletons have AK-47s and MP40s, for example, and Magma Golems carry a Minigun."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/181.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/181.js#L27-L28)

```diff
-         question: "What's the difference between Peaceful and Survival in Bloxd?",
-         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
+         question: "Can my pets use guns?",
+         answer: "Yes. Tamed pets get guns and fight by your side. They won't hurt you or your other pets."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/181.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/181.js#L30-L31)

```diff
-         question: "Is Bloxd Peaceful good for beginners?",
-         answer: "Definitely. It's a safe place to learn the basics. If you die early on in Survival, the game will even offer to move you over to Peaceful."
+         question: "Can I turn guns on in a private server?",
+         answer: "Yes. Private servers have a setting that turns on gun crafting and using. When it's on, mobs and pets get guns too."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L33-L40` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/181.js#L33-L34) · [Before (L33-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/181.js#L33-L40)

```diff
-         question: "Can I play Bloxd Peaceful with friends?",
-         answer: "Yes. Everyone's in the same shared world, so you can meet up and build together."
-       }, {
-         question: "How do I keep my builds safe in Peaceful?",
-         answer: "Blocks near spawn reset every few hours, so build outside that area (a message shows when you cross its edge). Then put down a Protector and other players won't be able to break your builds or open your chests."
-       }, {
-         question: "How do I save my progress in Bloxd Peaceful?",
-         answer: "Sign in to an account. If you don't, your progress can be lost when your browser's cookies get cleared."
+         question: "How is Survival with Guns different from regular Survival?",
+         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/182.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/182.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914)

#### 1. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/182.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/182.js#L4)

```diff
-   9580: (MM, rM, iM) => {
+   9567: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/182.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/182.js#L9-L13)

```diff
-       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
-       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
-       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
-       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
-       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
+       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
+       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
+       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
+       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
+       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/182.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/182.js#L15-L16)

```diff
-         question: "What is Bloxd Day and Night Survival?",
-         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
+         question: "What is Bloxd Creative?",
+         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/182.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/182.js#L18-L19)

```diff
-         question: "How do I stop monsters spawning near my base in Bloxd?",
-         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
+         question: "Can you fly in Bloxd Creative?",
+         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/182.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/182.js#L21-L22)

```diff
-         question: "How do I skip the night in Day & Night Survival?",
-         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
+         question: "What is Superflat in Bloxd?",
+         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/182.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/182.js#L24-L25)

```diff
-         question: "What happens to monsters when the sun comes up?",
-         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
+         question: "How do I make a free build server in Bloxd?",
+         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/182.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/182.js#L27-L28)

```diff
-         question: "How are Days Survived counted?",
-         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
+         question: "Can you use TNT in Bloxd Creative?",
+         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/182.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bb597f32fb88eddd6694f15c7b4cebf2ee44d9c07dcdddcb3ec8dad5fb42d914) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/182.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/182.js#L30-L31)

```diff
-         question: "Can I change the day and night settings on my own server?",
-         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
+         question: "Why did my build disappear in Bloxd Creative?",
+         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
+       }, {
+         question: "What's the difference between Creative and Plots?",
+         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/183.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/183.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95)

#### 1. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/183.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/183.js#L4)

```diff
-   9588: (MM, rM, iM) => {
+   9570: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/183.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/183.js#L9-L13)

```diff
-       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
-       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
-       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
-       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
-       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
+       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
+       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
+       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
+       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
+       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/183.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/183.js#L15-L16)

```diff
-         question: "What is Bloxd Survival with Guns?",
-         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
+         question: "What is Bloxd Plots?",
+         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/183.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/183.js#L18-L19)

```diff
-         question: "How do you make a gun in Bloxd Survival with Guns?",
-         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
+         question: "How do I save my plot in Bloxd Plots?",
+         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/183.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/183.js#L21-L22)

```diff
-         question: "How many guns are there in Survival with Guns?",
-         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
+         question: "How do I build with friends in Bloxd Plots?",
+         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/183.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/183.js#L24-L25)

```diff
-         question: "Do mobs carry guns in Bloxd?",
-         answer: "They do. Each type of hostile mob carries its own guns. Draugr Skeletons have AK-47s and MP40s, for example, and Magma Golems carry a Minigun."
+         question: "Can other players break my build?",
+         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/183.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/183.js#L27-L28)

```diff
-         question: "Can my pets use guns?",
-         answer: "Yes. Tamed pets get guns and fight by your side. They won't hurt you or your other pets."
+         question: "How big is a plot in Bloxd Plots?",
+         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/183.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-534ca4b6e676b693aed86761f5a9e283464ffe3a1ae4af59c94390658ed5bc95) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/183.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/183.js#L30-L34)

```diff
-         question: "Can I turn guns on in a private server?",
-         answer: "Yes. Private servers have a setting that turns on gun crafting and using. When it's on, mobs and pets get guns too."
-       }, {
-         question: "How is Survival with Guns different from regular Survival?",
-         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
+         question: "How many plots can one player own?",
+         answer: "Up to 5 each."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/184.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/184.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533)

#### 1. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/184.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/184.js#L4)

```diff
-   9595: (MM, rM, iM) => {
+   9577: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/184.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/184.js#L9-L13)

```diff
-       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
-       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
-       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
-       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
-       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
+       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
+       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
+       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
+       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
+       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/184.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/184.js#L15-L16)

```diff
-         question: "What is Bloxd Creative?",
-         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
+         question: "What is Bloxd Skyblock?",
+         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/184.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/184.js#L18-L19)

```diff
-         question: "Can you fly in Bloxd Creative?",
-         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
+         question: "How do you play Bloxd Skyblock?",
+         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/184.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/184.js#L21-L22)

```diff
-         question: "What is Superflat in Bloxd?",
-         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
+         question: "What skills are in Bloxd Skyblock?",
+         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/184.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/184.js#L24-L25)

```diff
-         question: "How do I make a free build server in Bloxd?",
-         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
+         question: "What are the Dungeons in Bloxd Skyblock?",
+         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/184.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/184.js#L27-L28)

```diff
-         question: "Can you use TNT in Bloxd Creative?",
-         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
+         question: "How do I trade in Bloxd Skyblock?",
+         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/184.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/184.js#L30-L31)

```diff
-         question: "Why did my build disappear in Bloxd Creative?",
-         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
+         question: "Can I visit other players' islands?",
+         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/184.js` (Changed code · before: `L33-L34` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-705428707a2ef72d7178f6ef61913c9edc38167b632b4e179c5c0af6d35dd533) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/184.js#L33-L37) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/184.js#L33-L34)

```diff
-         question: "What's the difference between Creative and Plots?",
-         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
+         question: "What happened at Cragrock Mines?",
+         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
+       }, {
+         question: "Does my island save between sessions?",
+         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/185.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/185.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/185.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/185.js#L4)

```diff
-   9601: (MM, rM, iM) => {
+   9579: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/185.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/185.js#L9-L13)

```diff
-       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
-       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
-       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
-       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
-       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
+       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
+       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
+       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
+       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
+       similarGames: ["skyblock", "skyIslands", "classic_survival"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/185.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/185.js#L15-L16)

```diff
-         question: "What is Bloxd Plots?",
-         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
+         question: "What is Bloxd One Block?",
+         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/185.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/185.js#L18-L19)

```diff
-         question: "How do I save my plot in Bloxd Plots?",
-         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
+         question: "Is Bloxd One Block a skyblock game?",
+         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/185.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/185.js#L21-L22)

```diff
-         question: "How do I build with friends in Bloxd Plots?",
-         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
+         question: "How many phases are in Bloxd One Block?",
+         answer: "17, from Forest and Plains through Ocean, Desert and Dungeon to the Volcano and the Moon. Mine enough blocks to unlock each one. When you've got them all, you can change phase."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/185.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/185.js#L24-L25)

```diff
-         question: "Can other players break my build?",
-         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
+         question: "How do I get to the Hub in One Block?",
+         answer: "Grab 3 Gold Coins from chests, bridge over to the portal island nearby and walk into your portal. Type /home to come back."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/185.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/185.js#L27-L28)

```diff
-         question: "How big is a plot in Bloxd Plots?",
-         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
+         question: "Where do One Block coins come from?",
+         answer: "Chests from your One Block and the Hub treasure chests, daily and weekly quests, or watching an ad for coins."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/185.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181fR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6c85b2b3b32f83c979303d71d8eda3dbf1c11186055a654c0723c3a8cbd3181f) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/185.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/185.js#L30-L31)

```diff
-         question: "How many plots can one player own?",
-         answer: "Up to 5 each."
+         question: "How do I open my portal in One Block?",
+         answer: "Type /open in chat. You can also add visitors in your island access settings, even if your portal is closed."
+       }, {
+         question: "Can I have more than one island?",
+         answer: "Yes. The Island Manager lets you create new islands, rename them, load another save or delete one, up to a maximum number of islands."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/186.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/186.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/186.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/186.js#L4)

```diff
-   9609: (MM, rM, iM) => {
+   9581: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/186.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/186.js#L9-L13)

```diff
-       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
-       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
-       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
-       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
-       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
+       whatIs: ["Claim an island, grab the loot and fight for every diamond you can get. Bloxd Sky Islands is a scored PvP match across floating islands, where you explore, mine resources and battle for diamonds and glory. Each phase brings better loot, and whoever has the highest … [truncated]
+       howToPlay: ["Place your Protector on an island to claim it. Other players can't change blocks or open chests there, and you'll always respawn on it. You only get one island at a time, but you can release it and claim another later. Then off you go to explore, mine and grab  … [truncated]
+       features: ["Solo, Teams, Blitz and PvE Modes", "Claim Your Own Island with a Protector", "4 Phases: Gather, Arms Race, Escalation and Chaos", "Bows, Explosives, Guns, Rockets and Diamond Gear", "Loot Drops, Diamond Surges and Diamond Bounties", "Quests, Perks and Buried Tre … [truncated]
+       tips: ["Claim an island early so you've got a safe base to respawn on", "Grab tools and resources during Gather, before the big fights kick off", "Hang on to your diamonds. They count towards your score", "Watch the loot timer and get to new drops first", "Don't camp on the … [truncated]
+       similarGames: ["skywars", "bedwars", "skyblock", "oneBlock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/186.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/186.js#L15-L16)

```diff
-         question: "What is Bloxd Skyblock?",
-         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
+         question: "What is Bloxd Sky Islands?",
+         answer: "A round-based PvP mode. You claim a floating island, gear up through four phases and battle other players for the top score."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/186.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/186.js#L18-L19)

```diff
-         question: "How do you play Bloxd Skyblock?",
-         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
+         question: "How is the winner decided in Bloxd Sky Islands?",
+         answer: "Whoever has the highest score when time runs out. Score is your kills plus the diamonds you're holding, and in Teams the highest-scoring team takes it."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/186.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/186.js#L21-L22)

```diff
-         question: "What skills are in Bloxd Skyblock?",
-         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
+         question: "How do I claim an island in Sky Islands?",
+         answer: "Put your Protector down on an island. Nobody else can change its blocks or open its chests, and you'll always respawn there."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/186.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/186.js#L24-L25)

```diff
-         question: "What are the Dungeons in Bloxd Skyblock?",
-         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
+         question: "Which modes does Sky Islands have?",
+         answer: "Solo, Teams, Blitz (a faster match) and PvE. In PvE your score comes from mob kills instead of player kills, so you claim an island and go after mobs."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/186.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/186.js#L27-L28)

```diff
-         question: "How do I trade in Bloxd Skyblock?",
-         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
+         question: "Where do you find diamonds in Sky Islands?",
+         answer: "Mine them, grab them from loot drops and Diamond Surges, or win fights for them. Players drop some of their diamonds when they're knocked out."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/186.js` (Changed code · before: `L30-L37` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aaR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ea068ac1cba1fc2683554db3ca3504819ef1b3c4a8022184a5554327828646aa) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/186.js#L30-L31) · [Before (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/186.js#L30-L37)

```diff
-         question: "Can I visit other players' islands?",
-         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
-       }, {
-         question: "What happened at Cragrock Mines?",
-         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
-       }, {
-         question: "Does my island save between sessions?",
-         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
+         question: "What is a diamond bounty?",
+         answer: "If you're one of the top three scorers and you stay on the diamond island too long, you get a bounty and hunters can see you. Move to another island to get rid of it."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/187.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/187.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623)

#### 1. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/187.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/187.js#L4)

```diff
-   9618: (MM, rM, iM) => {
+   9590: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/187.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/187.js#L9-L13)

```diff
-       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
-       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
-       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
-       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
-       similarGames: ["skyblock", "skyIslands", "classic_survival"],
+       whatIs: ["The world is ending, and the only way out is up. Bloxd Build a Factory is the original factory mode on Bloxd. You automate a factory, build a rocket and launch it to escape before time runs out. It's a race against everyone else in your world, the fastest launches … [truncated]
+       howToPlay: ["Place your first Chest (or bed) and you'll get an Auto Miner and, in public lobbies, a Protector. Craft some Pipes and hook the Auto Miner up to the Chest. Open the Auto Miner, put some Coal in to fuel it, and now it mines for you.", "Next up, craft an Extracto … [truncated]
+       features: ["Factory Automation with a Rocket Race at the End", "Auto Miners, Auto Crafters and Auto Harvesters", "Pipes, Extractor, Splitter, Filter and Merger Pipes", "Solar Panels and Wire for Power", "Leaderboard for Best Launch Time and Rocket Stage", "Fresh World Every … [truncated]
+       tips: ["Follow the tutorial and you'll have your first Auto Miner running in no time", "Keep your Auto Miners topped up with Coal so they never stop", "Use Extractor Pipes to feed Chests into your Auto Crafters", "Filter and Splitter Pipes sort items into the right machines … [truncated]
+       similarGames: ["buildAFactory2", "skyblock", "oneBlock", "classic_survival"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/187.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/187.js#L15-L16)

```diff
-         question: "What is Bloxd One Block?",
-         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
+         question: "What is Bloxd Build a Factory?",
+         answer: "A factory automation race. You automate your factory, build a rocket and try to escape the dying world as fast as you can."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/187.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/187.js#L18-L19)

```diff
-         question: "Is Bloxd One Block a skyblock game?",
-         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
+         question: "How do you build a rocket in Bloxd Build a Factory?",
+         answer: "Place your Rocket Ship from your inventory, then feed it resources from your factory to upgrade it stage by stage. Once it's finished, launch it to beat the game."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/187.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/187.js#L21-L22)

```diff
-         question: "How many phases are in Bloxd One Block?",
-         answer: "17, from Forest and Plains through Ocean, Desert and Dungeon to the Volcano and the Moon. Mine enough blocks to unlock each one. When you've got them all, you can change phase."
+         question: "What's the goal in Build a Factory?",
+         answer: "Launch a rocket and escape the dying world. Your final time gets saved, and the quickest launches end up on the leaderboard."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/187.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/187.js#L24-L25)

```diff
-         question: "How do I get to the Hub in One Block?",
-         answer: "Grab 3 Gold Coins from chests, bridge over to the portal island nearby and walk into your portal. Type /home to come back."
+         question: "How often does the Build a Factory world reset?",
+         answer: "Every 6 hours. After you launch, you can jump into another lobby and play again, or hang around until your world resets."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/187.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/187.js#L27-L28)

```diff
-         question: "Where do One Block coins come from?",
-         answer: "Chests from your One Block and the Hub treasure chests, daily and weekly quests, or watching an ad for coins."
+         question: "What is the Persistent world in Build a Factory?",
+         answer: "It's a Build a Factory world that never resets. You can build up to 5 Auto Miners, 5 Auto Crafters and 5 Auto Harvesters per chunk, and you launch rockets to climb the leaderboard and reach the Moon."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/187.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/187.js#L30-L31)

```diff
-         question: "How do I open my portal in One Block?",
-         answer: "Type /open in chat. You can also add visitors in your island access settings, even if your portal is closed."
+         question: "How do you get to the Moon in Build a Factory?",
+         answer: "In the Persistent world, launch a rocket. You'll land on the Moon, where you can mine Lunite. No rocket to get back? Open the shop to return home."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/187.js` (Changed code · before: `L33-L34` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-be7b719a81f3493aacec8f9f345d8c690fb09ca4aebf0864bc75f3fb3739b623) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/187.js#L33-L37) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/187.js#L33-L34)

```diff
-         question: "Can I have more than one island?",
-         answer: "Yes. The Island Manager lets you create new islands, rename them, load another save or delete one, up to a maximum number of islands."
+         question: "What does Lunite do?",
+         answer: "You use it to craft Lunite Auto Miners, Auto Crafters and Auto Harvesters. They run 1.5\xd7 faster, and the Lunite Auto Crafter and Auto Harvester can sometimes give you extra items."
+       }, {
+         question: "What's the difference between Build a Factory and Build a Factory 2?",
+         answer: "Build a Factory is a race to launch a rocket in a shared world that resets. In Build a Factory 2 you get your own floating factory island that you grow at your own pace."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/188.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/188.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/188.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-681691cc10dc5ef6c5d13e3dd5a3334a1216bbc36f10c25246424eaba01b912d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/188.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/188.js#L4)

```diff
-   9621: (MM, rM, iM) => {
+   9593: (UU, XU, zU) => {
```
