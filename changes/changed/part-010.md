# Changed — Bundle Modifications Report (Part 010 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `10 / 69` (**279** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 009](part-009.md) · [Part 011 →](part-011.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/149.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/149.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6)

#### 6. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L17-L52` → after: `L1038-L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L1038-L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/149.js#L1038-L2065) · [Before (L17-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/149.js#L17-L52)

```diff
-         return window.GD_OPTIONS = {
-           gameId: "b35b336d21654aa5a378480d13ed7225",
-           onEvent: ZC => {
-             const QC = () => {
-               zC && (window.adCompleteSoResume(), zC = !1), CC && (CC(), CC = null)
-             };
-             switch (ZC.name) {
-               case "SDK_GAME_START":
-                 console.log("Gamedis SDK_GAME_START"), zC = !1, CC ? (CC(), CC = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
-                 break;
-               case "SDK_GAME_PAUSE":
-                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
-                   preventMovement: !0
-                 }), zC = !0;
-                 break;
-               case "SDK_ERROR":
- ... (20 more removed lines; see GitHub link above)
+         const cp = new Hp;
+         for (const Op of this._def.checks)
+           if ("int" === Op.kind) xp.isInteger(pp.data) || (ip = this._getOrReturnCtx(pp, ip), tp(ip, {
+             code: Pp.invalid_type,
+             expected: "integer",
+             received: "float",
+             message: Op.message
+           }), cp.pU());
+           else if ("min" === Op.kind) {
+           (Op.inclusive ? pp.data < Op.value : pp.data <= Op.value) && (ip = this._getOrReturnCtx(pp, ip), tp(ip, {
+             code: Pp.too_small,
+             minimum: Op.value,
+             type: "number",
+             inclusive: Op.inclusive,
+             exact: !1,
+             message: Op.message
+ ... (1012 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L55-L56` → after: `L2068-L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L2068-L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/149.js#L2068-L2107) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/149.js#L55-L56)

```diff
-       playVideoAd(CC, zC) {
-         this.setOnEndCb(CC), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
+     }
+     Di.create = (pp, ip, cp) => new Di({
+       left: pp,
+       right: ip,
+       typeName: Ji.ZodIntersection,
+       ...Xp(cp)
+     });
+     class Ai extends lp {
+       _parse(pp) {
+         const {
+           status: ip,
+           ctx: cp
+         } = this._processInputParams(pp);
+         if (cp.parsedType !== Dp.array) return tp(cp, {
+           code: Pp.invalid_type,
+           expected: Dp.array,
+ ... (24 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L58-L61` → after: `L2109-L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R2109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L2109-L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/149.js#L2109-L2113) · [Before (L58-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/149.js#L58-L61)

```diff
-       renderBanner(CC) {
-         console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(CC.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, CC.divId), window.gdsdk.showAd … [truncated]
-           containerId: CC.divId
-         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((CC => console.info(CC)))) : console.error("window.gdsdk.AdType.Display is undefined")
+       rest(pp) {
+         return new Ai({
+           ...this._def,
+           rest: pp
+         })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/150.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/150.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/150.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/150.js#L4)

```diff
-   8122: (CC, zC, ZC) => {
+   8241: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/150.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/150.js#L6)

```diff
-       CoolMathGamesSdkAdaptor: () => bC
+       BloxdMsnAccountSdk: () => Ap,
+       MsnSdkAdaptor: () => Up
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L8-L10` → after: `L9-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L9-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/150.js#L9-L103) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/150.js#L8-L10)

```diff
-     var QC = ZC(1269),
-       wC = ZC(1127);
-     class bC extends QC.c {
+     var Op = cp(1341),
+       op = cp(1194),
+       Ip = cp(3575),
+       Sp = cp(640),
+       xp = cp(1755);
+     const Lp = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
+     let Yp = null;
+ 
+     function Dp() {
+       return Yp ??= async function() {
+         await (0, op.b)(Lp, {}, !1);
+         for (let pp = 0; pp < 50 && !window.$msstart; pp++) await (0, Sp.M)(100)
+       }(), Yp
+     }
+     class Ap {
+       constructor() {}
+ ... (79 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L12-L24` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/150.js#L105) · [Before (L12-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/150.js#L12-L24)

```diff
-         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
-           console.error("adBreakStartCallback not set")
-         }, this.adBreakCompleteCallback = () => {
-           console.error("adBreakCompleteCallback not set")
-         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
-       }
-       doAdBreakStart() {
-         this.adBreakStartCallback();
-         const CC = document.getElementsByClassName("ads-popup");
-         for (const zC of CC) zC instanceof HTMLElement && (zC.style.position = "fixed")
-       }
-       doAdBreakComplete() {
-         this.adBreakCompleteCallback()
+         super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L27` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/150.js#L108) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/150.js#L27)

```diff
-         return await (0, wC.e)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, wC.e)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new bC
+         return await Dp(), new Up
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L30-L31` → after: `L111-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L111-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/150.js#L111-L179) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/150.js#L30-L31)

```diff
-         this.adBreakStartCallback = () => {
-           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
+         this.playVideoOrRewarded("video", pp, pp)
+       }
+       playRewarded(pp, ip) {
+         this.playVideoOrRewarded("rewarded", pp, ip)
+       }
+       canShowBloxdAd(pp) {
+         for (const ip in yp)
+           if (pp.adId in yp[ip]) return !1;
+         return !0
+       }
+       async renderBanner(pp) {
+         if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Ip.d)(pp)}: msn placement is already showing so not requesting`);
+         const ip = yp[pp.adType][pp.adId];
+         if ((0, Sp.G)(ip)) return void console.warn(`AD ${(0,Ip.d)(pp)}: no msn placement is configured for this bloxd placement so not showing any ad`);
+         const cp = [];
+         for (const Op of ip)
+ ... (53 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L33-L53` → after: `L181-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L181-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/150.js#L181-L209) · [Before (L33-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/150.js#L33-L53)

```diff
-           })
-         }, this.adBreakCompleteCallback = () => {
-           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), CC()
-         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
-       }
-       onGameplayStart() {
-         try {
-           window.parent.cmgGameEvent("start")
-         } catch {
-           console.log("Couldn't access cmgGameEvent on parent")
-         }
-       }
-       onGameplayStop() {}
-       onGameEntered() {
-         try {
-           window.parent.cmgGameEvent("start")
- ... (5 more removed lines; see GitHub link above)
+           }), cp()
+         } else Op(`AD: Can't play MSN ${pp} ad because sdk is not loaded`)
+       }
+     }
+ 
+     function wp(pp) {
+       let ip, cp;
+       switch (pp.placement) {
+         case "top":
+           ip = (window.innerWidth - pp.width) / 2, cp = Pp;
+           break;
+         case "right":
+           ip = window.innerWidth - pp.width - Pp, cp = window.innerHeight / 2 - pp.height / 2 - 10;
+           break;
+         case "left":
+           ip = Pp, cp = window.innerHeight / 2 - pp.height / 2 - 10
+ ... (13 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/151.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/151.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/151.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/151.js#L4)

```diff
-   8130: (CC, zC, ZC) => {
+   8248: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/151.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/151.js#L6)

```diff
-       AdMobSdkAdaptor: () => FC
+       GameDistributionSdkAdaptor: () => Ip
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L8-L40` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/151.js#L8-L10) · [Before (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/151.js#L8-L40)

```diff
-     var QC = ZC(1269),
-       wC = ZC(20),
-       bC = ZC(1609),
-       nC = ZC(113),
-       fC = ZC(3441),
-       oC = ZC(326);
-     const qC = {
-       mobileAndroid: {
-         banners: {
-           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
-           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
-           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
-           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
-           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
-           square_1: "ca-app-pub-5991928098122027/6381115670"
-         },
- ... (17 more removed lines; see GitHub link above)
+     var Op = cp(1341),
+       op = cp(1194);
+     class Ip extends Op.b {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L42-L50` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/151.js#L12) · [Before (L42-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/151.js#L42-L50)

```diff
-         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = qC[CC], bC.d.on("ads.bannerStatus", (CC => {
-           let {
-             placementId: zC,
-             shown: ZC,
-             error: QC
-           } = CC;
-           const wC = !this.bannerFirstResponseSeen.has(zC);
-           this.bannerFirstResponseSeen.add(zC), wC ? ZC ? console.log(`AD ${zC}: AdMob banner loaded`) : console.warn(`AD ${zC}: AdMob banner failed to load: ${QC}`) : ZC || console.warn(`AD ${zC}: AdMob banner refresh failed: ${QC}`)
-         }))
+         super(), this.setOnEndCb = pp, this.name = "gamedistribution"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L53-L75` → after: `L15-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L15-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/151.js#L15-L52) · [Before (L53-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/151.js#L53-L75)

```diff
-         const CC = "mobileIos" === nC.y ? "mobileIos" : "mobileAndroid";
-         return console.log(`AD: AdMobSDK initialised for ${CC}`), new FC(CC)
-       }
-       muteGameDuring(CC) {
-         return this.fullScreenAdsInFlight++, wC.b.set({
-           soundOnFromAd: !1
-         }), CC.finally((() => {
-           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && wC.b.set({
-             soundOnFromAd: !0
-           })
-         }))
-       }
-       playRewarded(CC, zC) {
-         const ZC = this.adUnitIds.rewarded;
-         this.muteGameDuring(bC.d.request("ads.showRewarded", {
-           placementId: ZC
- ... (7 more removed lines; see GitHub link above)
+         let pp;
+         let ip;
+         return window.GD_OPTIONS = {
+           gameId: "b35b336d21654aa5a378480d13ed7225",
+           onEvent: cp => {
+             const Op = () => {
+               ip && (window.adCompleteSoResume(), ip = !1), pp && (pp(), pp = null)
+             };
+             switch (cp.name) {
+               case "SDK_GAME_START":
+                 console.log("Gamedis SDK_GAME_START"), ip = !1, pp ? (pp(), pp = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
+                 break;
+               case "SDK_GAME_PAUSE":
+                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
+                   preventMovement: !0
+                 }), ip = !0;
+ ... (22 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L79-L86` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/151.js#L56) · [Before (L79-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/151.js#L79-L86)

```diff
-         const ZC = this.adUnitIds.interstitial;
-         this.muteGameDuring(bC.d.request("ads.showInterstitial", {
-           placementId: ZC
-         })).then((() => {
-           CC()
-         }), (zC => {
-           console.warn(`AD ${ZC}: AdMob interstitial failed:`, zC), CC()
-         }))
+         this.setOnEndCb(pp), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L89-L117` → after: `L59-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L59-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/151.js#L59-L61) · [Before (L89-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/151.js#L89-L117)

```diff
-         const zC = (0, fC.c)(CC),
-           ZC = this.adUnitIds.banners[zC];
-         if (void 0 === ZC) return;
-         const QC = document.getElementById(CC.divId);
-         if (!QC) return void console.warn(`AD ${zC}: AdMob renderBanner called but div ${CC.divId} is not in DOM`);
-         const wC = QC.getBoundingClientRect(),
-           nC = window.innerWidth,
-           qC = window.innerHeight;
-         if (0 === nC || 0 === qC) return void console.warn(`AD ${zC}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
-         const FC = {
-           x1: oC.c.clamp(wC.left / nC * 100, 0, 100),
-           y1: oC.c.clamp(wC.top / qC * 100, 0, 100),
-           x2: oC.c.clamp(wC.right / nC * 100, 0, 100),
-           y2: oC.c.clamp(wC.bottom / qC * 100, 0, 100)
-         };
-         this.bannerPlacementByBloxdId.set(zC, ZC), console.log(`AD ${zC}: AdMob renderBanner placementId=${ZC} box=`, FC), bC.d.emit("ads.showBanner", {
- ... (13 more removed lines; see GitHub link above)
+         console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(pp.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, pp.divId), window.gdsdk.showAd … [truncated]
+           containerId: pp.divId
+         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((pp => console.info(pp)))) : console.error("window.gdsdk.AdType.Display is undefined")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/152.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/152.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27)

#### 1. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/152.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/152.js#L4-L6)

```diff
-   8142: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => qC
+   8252: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       CoolMathGamesSdkAdaptor: () => Ip
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L8-L54` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/152.js#L8-L10) · [Before (L8-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/152.js#L8-L54)

```diff
-     var QC = ZC(2909);
-     const wC = [1, 8, 9],
-       bC = 5,
-       nC = 200,
-       fC = 150;
- 
-     function oC(CC, zC) {
-       let ZC = 0;
-       CC("addEventListener", 2, ((CC, nC) => {
-         if (!nC) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         const fC = function(CC) {
-           const zC = "useractioncomplete" === CC.eventStatus || "tcloaded" === CC.eventStatus && !!CC.tcString;
-           return CC.gdprApplies && zC ? wC.every((zC => !0 === CC.purpose.consents[zC])) : null
-         }(CC);
-         if (null === fC) return;
-         const oC = ++ZC;
- ... (31 more removed lines; see GitHub link above)
+     var Op = cp(1341),
+       op = cp(1194);
+     class Ip extends Op.b {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L56` → after: `L12-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L12-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/152.js#L12-L24) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/152.js#L56)

```diff
-         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = oC
+         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
+           console.error("adBreakStartCallback not set")
+         }, this.adBreakCompleteCallback = () => {
+           console.error("adBreakCompleteCallback not set")
+         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
+       }
+       doAdBreakStart() {
+         this.adBreakStartCallback();
+         const pp = document.getElementsByClassName("ads-popup");
+         for (const ip of pp) ip instanceof HTMLElement && (ip.style.position = "fixed")
+       }
+       doAdBreakComplete() {
+         this.adBreakCompleteCallback()
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L59-L72` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/152.js#L27) · [Before (L59-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/152.js#L59-L72)

```diff
-         return (0, bC.canonicaliseZonesWhenIdle)(oC), (0, fC.F)(), await (0, wC.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, nC.b)("inMobi"), new qC
-       }
-       playRewarded(CC, zC) {
-         if ("undefined" !== typeof window.aiptag.adplayer) {
-           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
-           const ZC = "video_reward";
-           window.aiptag.cmd.player.push((function() {
-             window.aiptag.adplayer.startPreRoll({
-               alias: ZC
-             })
-           })), window.adStartSoPause(CC, {
-             onFailCb: zC
-           })
-         } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), zC()
+         return await (0, op.b)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, op.b)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new Ip
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L75-L77` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/152.js#L30-L32) · [Before (L75-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/152.js#L75-L77)

```diff
-         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (zC ? ` (alias: ${zC})` : "")), window.aiptag.cmd.player.push((function() {
-           window.aiptag.adplayer.startPreRoll({
-             alias: zC
+         this.adBreakStartCallback = () => {
+           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
+             preventMovement: !0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L79` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/152.js#L34-L36) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/152.js#L79)

```diff
-         })), window.adStartSoPause(CC)) : (CC(), console.error("AIP ad lib not loaded, no ad playing"))
+         }, this.adBreakCompleteCallback = () => {
+           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), pp()
+         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L81-L92` → after: `L38-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/152.js#L38-L43) · [Before (L81-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/152.js#L81-L92)

```diff
-       renderBanner(CC) {
-         if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
-         const {
-           divId: zC,
-           alias: ZC
-         } = CC;
-         window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.display({
-             adUnitName: zC,
-             alias: ZC
-           })
-         })), console.log("AD: Requested aip banner", document.getElementById(CC.divId), ZC ? `(alias: ${ZC})` : "")
+       onGameplayStart() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L94-L97` → after: `L45-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L45-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/152.js#L45-L51) · [Before (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/152.js#L94-L97)

```diff
-       clearBanner(CC) {
-         "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.destroy(CC.divId)
-         })), console.log(`AD: Clearing aip banner ad ${CC.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
+       onGameplayStop() {}
+       onGameEntered() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L99-L110` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/152.js#L53) · [Before (L99-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/152.js#L99-L110)

```diff
-       setBannerAutoRefreshEnabled(CC, zC) {
-         window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.setAutoRefresh(CC.divId, zC)
-         }))
-       }
-       newPageSession() {
-         console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
-           window.__VM.push((function(CC, zC) {
-             zC.Instances.pageManager.newPageSession(!1)
-           }))
-         }))
-       }
+       onGameExited() {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/153.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/153.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/153.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/153.js#L4-L6)

```diff
-   8142: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => qC
+   8260: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       AdMobSdkAdaptor: () => Dp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L8-L55` → after: `L8-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L8-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/153.js#L8-L50) · [Before (L8-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/153.js#L8-L55)

```diff
-     var QC = ZC(2909);
-     const wC = [1, 8, 9],
-       bC = 5,
-       nC = 200,
-       fC = 150;
- 
-     function oC(CC, zC) {
-       let ZC = 0;
-       CC("addEventListener", 2, ((CC, nC) => {
-         if (!nC) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         const fC = function(CC) {
-           const zC = "useractioncomplete" === CC.eventStatus || "tcloaded" === CC.eventStatus && !!CC.tcString;
-           return CC.gdprApplies && zC ? wC.every((zC => !0 === CC.purpose.consents[zC])) : null
-         }(CC);
-         if (null === fC) return;
-         const oC = ++ZC;
- ... (32 more removed lines; see GitHub link above)
+     var Op = cp(1341),
+       op = cp(25),
+       Ip = cp(1705),
+       Sp = cp(131),
+       xp = cp(3575),
+       Lp = cp(337);
+     const Yp = {
+       mobileAndroid: {
+         banners: {
+           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
+           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
+           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
+           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
+           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
+           square_1: "ca-app-pub-5991928098122027/6381115670"
+         },
+ ... (27 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L58-L76` → after: `L53-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L53-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/153.js#L53-L76) · [Before (L58-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/153.js#L58-L76)

```diff
-         return window.nitroAds = window.nitroAds || {
-           createAd: function() {
-             for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
-             return new Promise((CC => {
-               window.nitroAds.queue.push(["createAd", zC, CC])
-             }))
-           },
-           addUserToken: function() {
-             for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
-             window.nitroAds.queue.push(["addUserToken", zC])
-           },
-           queue: []
-         }, document.addEventListener("nitroAds.rendered", (CC => {
-           var zC, ZC, QC;
-           const wC = document.getElementById(null !== (zC = null === (ZC = CC.detail) || void 0 === ZC || null === (QC = ZC.adInfo) || void 0 === QC ? void 0 : QC.adUnitCode) && void 0 !== zC ? zC : "");
-           null !== wC && void 0 !== wC && wC.classList.contains("NitroBanner") && wC.classList.toggle("NitroBannerUnfilled", "blank" === CC.detail.type)
- ... (3 more removed lines; see GitHub link above)
+         const pp = "mobileIos" === Sp.siteUsed ? "mobileIos" : "mobileAndroid";
+         return console.log(`AD: AdMobSDK initialised for ${pp}`), new Dp(pp)
+       }
+       muteGameDuring(pp) {
+         return this.fullScreenAdsInFlight++, op.c.set({
+           soundOnFromAd: !1
+         }), pp.finally((() => {
+           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && op.c.set({
+             soundOnFromAd: !0
+           })
+         }))
+       }
+       playRewarded(pp, ip) {
+         const cp = this.adUnitIds.rewarded;
+         this.muteGameDuring(Ip.b.request("ads.showRewarded", {
+           placementId: cp
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L79-L150` → after: `L79-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L79-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/153.js#L79-L86) · [Before (L79-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/153.js#L79-L150)

```diff
-         this.showVideoAd(CC, CC)
-       }
-       playRewarded(CC, zC) {
-         this.showVideoAd(CC, zC)
-       }
-       showVideoAd(CC, zC) {
-         if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void zC();
-         const ZC = document.getElementById("GenericVideoWrapper"),
-           QC = document.getElementById("GenericVideoInner");
-         if (null === ZC || null === QC) return void zC();
-         this.videoInFlight = !0;
-         let wC = !1;
-         const bC = document.createElement("div");
-         bC.id = fC, bC.className = "NitroVideoPlacement";
-         const nC = nC => {
-           if (!wC) {
- ... (56 more removed lines; see GitHub link above)
+         const cp = this.adUnitIds.interstitial;
+         this.muteGameDuring(Ip.b.request("ads.showInterstitial", {
+           placementId: cp
+         })).then((() => {
+           pp()
+         }), (ip => {
+           console.warn(`AD ${cp}: AdMob interstitial failed:`, ip), pp()
+         }))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L153-L167` → after: `L89-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L89-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/153.js#L89-L107) · [Before (L153-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/153.js#L153-L167)

```diff
-         const {
-           divId: zC,
-           width: ZC,
-           height: QC
-         } = CC, wC = `${zC}-nitro`;
-         let bC = document.getElementById(wC);
-         null === bC && (bC = document.createElement("div"), bC.id = wC, bC.className = "NitroBanner", bC.style.setProperty("--nitro-slot-width", `${ZC}px`), bC.style.setProperty("--nitro-slot-height", `${QC}px`), document.getElementById(zC).appendChild(bC));
-         const nC = [
-           [String(ZC), String(QC)]
-         ];
-         Promise.resolve(window.nitroAds.createAd(wC, {
-           sizes: nC
-         })).catch((CC => {
-           console.error(`AD: Nitro failed to create banner ${wC}:`, CC)
-         })), console.log(`AD: Requested Nitro banner ${wC}`)
+         const ip = (0, xp.d)(pp),
+           cp = this.adUnitIds.banners[ip];
+         if (void 0 === cp) return;
+         const Op = document.getElementById(pp.divId);
+         if (!Op) return void console.warn(`AD ${ip}: AdMob renderBanner called but div ${pp.divId} is not in DOM`);
+         const op = Op.getBoundingClientRect(),
+           Sp = window.innerWidth,
+           Yp = window.innerHeight;
+         if (0 === Sp || 0 === Yp) return void console.warn(`AD ${ip}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
+         const Dp = {
+           x1: Lp.d.clamp(op.left / Sp * 100, 0, 100),
+           y1: Lp.d.clamp(op.top / Yp * 100, 0, 100),
+           x2: Lp.d.clamp(op.right / Sp * 100, 0, 100),
+           y2: Lp.d.clamp(op.bottom / Yp * 100, 0, 100)
+         };
+         this.bannerPlacementByBloxdId.set(ip, cp), console.log(`AD ${ip}: AdMob renderBanner placementId=${cp} box=`, Dp), Ip.b.emit("ads.showBanner", {
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L169-L171` → after: `L109-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/153.js#L109-L114) · [Before (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/153.js#L169-L171)

```diff
-       displayConsentUI() {
-         var CC, zC;
-         null === (CC = (zC = window).__cmp) || void 0 === CC || CC.call(zC, "showModal")
+       clearBanner(pp) {
+         const ip = (0, xp.d)(pp),
+           cp = this.bannerPlacementByBloxdId.get(ip);
+         void 0 !== cp && (this.bannerPlacementByBloxdId.delete(ip), this.bannerFirstResponseSeen.delete(cp), console.log(`AD ${ip}: AdMob clearBanner placementId=${cp}`), Ip.b.emit("ads.hideBanner", {
+           placementId: cp
+         }))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L173-L182` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/153.js#L116-L117) · [Before (L173-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/153.js#L173-L182)

```diff
-       addPrivacyLinks(CC) {
-         var zC, ZC, QC, wC;
-         const bC = document.createElement("span");
-         bC.dataset.ccpaLink = "1";
-         const nC = document.createElement("div");
-         nC.id = "ncmp-consent-link", CC.replaceChildren(bC, nC), null === (zC = (ZC = window).__uspapi) || void 0 === zC || zC.call(ZC, "addLink", 1), null === (QC = (wC = window).__cmp) || void 0 === QC || QC.call(wC, "addConsentLink")
-       }
-       newPageSession() {
-         var CC, zC;
-         null === (CC = (zC = window.nitroAds).navigate) || void 0 === CC || CC.call(zC)
+       canShowBloxdAd(pp) {
+         return !1
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/154.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/154.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/154.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/154.js#L4)

```diff
-   8144: (CC, zC, ZC) => {
+   8269: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Yp
+     });
+     var Op = cp(3003);
+     const op = [1, 8, 9],
+       Ip = 5,
+       Sp = 200,
+       xp = 150;
+ 
+     function Lp(pp, ip) {
+       let cp = 0;
+       pp("addEventListener", 2, ((pp, Sp) => {
+         if (!Sp) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         const xp = function(pp) {
+           const ip = "useractioncomplete" === pp.eventStatus || "tcloaded" === pp.eventStatus && !!pp.tcString;
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L6` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/154.js#L46) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/154.js#L6)

```diff
-       AdsenseForGamesSdkAdaptor: () => bC
+       AdinPlaySdkAdaptor: () => Yp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L8-L10` → after: `L48-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L48-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/154.js#L48-L54) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/154.js#L8-L10)

```diff
-     var QC = ZC(1269),
-       wC = ZC(1127);
-     class bC extends QC.c {
+     var Op = cp(1341),
+       op = cp(1194),
+       Ip = cp(226),
+       Sp = cp(8269),
+       xp = cp(3003);
+     const Lp = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
+     class Yp extends Op.b {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L12` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/154.js#L56) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/154.js#L12)

```diff
-         super(), this.name = "adsense"
+         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Lp
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L15-L27` → after: `L59-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L59-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/154.js#L59-L72) · [Before (L15-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/154.js#L15-L27)

```diff
-         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(CC) {
-           window.adsbygoogle.push(CC)
-         }, window.adConfig({
-           preloadAdBreaks: "on",
-           sound: "on",
-           onReady: () => {
-             console.log("adsense for games ready")
-           }
-         }), await (0, wC.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
-           "data-ad-client": "ca-pub-5991928098122027",
-           "data-ad-frequency-hint": "120s",
-           type: "text/javascript"
-         }), console.log("Loaded adsense for games"), new bC
+         return (0, Ip.canonicaliseZonesWhenIdle)(Lp), (0, xp.setUpGtag)(), await (0, op.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, Sp.b)("inMobi"), new Yp
+       }
+       playRewarded(pp, ip) {
+         if ("undefined" !== typeof window.aiptag.adplayer) {
+           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
+           const cp = "video_reward";
+           window.aiptag.cmd.player.push((function() {
+             window.aiptag.adplayer.startPreRoll({
+               alias: cp
+             })
+           })), window.adStartSoPause(pp, {
+             onFailCb: ip
+           })
+         } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), ip()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L30-L49` → after: `L75-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L75-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/154.js#L75-L109) · [Before (L30-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/154.js#L30-L49)

```diff
-         console.log("playPreroll requested");
-         let ZC = !1;
-         const QC = setTimeout((() => {
-           console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), ZC = !0, CC()
-         }), 3e3);
-         window.adBreak({
-           type: "video_start" === zC ? "start" : "next",
-           name: zC,
-           beforeAd: () => {
-             console.log("beforeAd called"), clearTimeout(QC), window.adStartSoPause(null, {
-               preventMovement: !0
-             })
-           },
-           afterAd: () => {
-             console.log("afterAd called"), window.adCompleteSoResume()
-           },
- ... (4 more removed lines; see GitHub link above)
+         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (ip ? ` (alias: ${ip})` : "")), window.aiptag.cmd.player.push((function() {
+           window.aiptag.adplayer.startPreRoll({
+             alias: ip
+           })
+         })), window.adStartSoPause(pp)) : (pp(), console.error("AIP ad lib not loaded, no ad playing"))
+       }
+       renderBanner(pp) {
+         if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
+         const {
+           divId: ip,
+           alias: cp
+         } = pp;
+         window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.display({
+             adUnitName: ip,
+             alias: cp
+ ... (19 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/155.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/155.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/155.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/155.js#L4)

```diff
-   8150: (CC, zC, ZC) => {
+   8269: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Yp
+     });
+     var Op = cp(3003);
+     const op = [1, 8, 9],
+       Ip = 5,
+       Sp = 200,
+       xp = 150;
+ 
+     function Lp(pp, ip) {
+       let cp = 0;
+       pp("addEventListener", 2, ((pp, Sp) => {
+         if (!Sp) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         const xp = function(pp) {
+           const ip = "useractioncomplete" === pp.eventStatus || "tcloaded" === pp.eventStatus && !!pp.tcString;
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L6` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/155.js#L46) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/155.js#L6)

```diff
-       AditudeSdkAdaptor: () => nC
+       NitroSdkAdaptor: () => Lp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L8-L14` → after: `L48-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L48-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/155.js#L48-L53) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/155.js#L8-L14)

```diff
-     var QC = ZC(1269),
-       wC = ZC(1127);
-     const bC = {
-       video: "pb-slot-interstitial-video",
-       rewarded: "pb-slot-rewarded-video"
-     };
-     class nC extends QC.c {
+     var Op = cp(1341),
+       op = cp(1194),
+       Ip = cp(8269),
+       Sp = cp(3003);
+     const xp = "NitroOutstreamVideo";
+     class Lp extends Op.b {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L16` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/155.js#L55) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/155.js#L16)

```diff
-         super(), this.name = "aditude"
+         super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L19-L21` → after: `L58-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L58-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/155.js#L58-L76) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/155.js#L19-L21)

```diff
-         return window.tude = window.tude || {
-           cmd: []
-         }, await (0, wC.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new nC
+         return window.nitroAds = window.nitroAds || {
+           createAd: function() {
+             for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+             return new Promise((pp => {
+               window.nitroAds.queue.push(["createAd", ip, pp])
+             }))
+           },
+           addUserToken: function() {
+             for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+             window.nitroAds.queue.push(["addUserToken", ip])
+           },
+           queue: []
+         }, document.addEventListener("nitroAds.rendered", (pp => {
+           var ip, cp, Op;
+           const op = document.getElementById(null !== (ip = null === (cp = pp.detail) || void 0 === cp || null === (Op = cp.adInfo) || void 0 === Op ? void 0 : Op.adUnitCode) && void 0 !== ip ? ip : "");
+           null !== op && void 0 !== op && op.classList.contains("NitroBanner") && op.classList.toggle("NitroBannerUnfilled", "blank" === pp.detail.type)
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L24` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/155.js#L79) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/155.js#L24)

```diff
-         this.playVideoOrRewarded("video", CC, CC)
+         this.showVideoAd(pp, pp)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L27` → after: `L82-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L82-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/155.js#L82-L150) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/155.js#L27)

```diff
-         this.playVideoOrRewarded("rewarded", CC, zC)
+         this.showVideoAd(pp, ip)
+       }
+       showVideoAd(pp, ip) {
+         if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void ip();
+         const cp = document.getElementById("GenericVideoWrapper"),
+           Op = document.getElementById("GenericVideoInner");
+         if (null === cp || null === Op) return void ip();
+         this.videoInFlight = !0;
+         let op = !1;
+         const Ip = document.createElement("div");
+         Ip.id = xp, Ip.className = "NitroVideoPlacement";
+         const Sp = Sp => {
+           if (!op) {
+             op = !0, clearTimeout(vp), clearInterval(wp), document.removeEventListener("nitroAds.adResult", Dp), document.removeEventListener("nitroAds.rendered", Ap), document.removeEventListener("nitroAds.complete", Pp);
+             try {
+               Wp.remove(), Ip.querySelectorAll("video").forEach((pp => {
+ ... (53 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L30-L36` → after: `L153-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L153-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/155.js#L153-L167) · [Before (L30-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/155.js#L30-L36)

```diff
-         const zC = this.getBaseDivId(CC.adId, CC.width, CC.height);
-         window.tude.cmd.push((function() {
-           window.tude.refreshAdsViaDivMappings([{
-             divId: CC.divId,
-             baseDivId: zC
-           }])
-         }))
+         const {
+           divId: ip,
+           width: cp,
+           height: Op
+         } = pp, op = `${ip}-nitro`;
+         let Ip = document.getElementById(op);
+         null === Ip && (Ip = document.createElement("div"), Ip.id = op, Ip.className = "NitroBanner", Ip.style.setProperty("--nitro-slot-width", `${cp}px`), Ip.style.setProperty("--nitro-slot-height", `${Op}px`), document.getElementById(ip).appendChild(Ip));
+         const Sp = [
+           [String(cp), String(Op)]
+         ];
+         Promise.resolve(window.nitroAds.createAd(op, {
+           sizes: Sp
+         })).catch((pp => {
+           console.error(`AD: Nitro failed to create banner ${op}:`, pp)
+         })), console.log(`AD: Requested Nitro banner ${op}`)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L38-L39` → after: `L169-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/155.js#L169-L171) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/155.js#L38-L39)

```diff
-       getBaseDivId(CC, zC, ZC) {
-         return `pb-slot-bloxdio-${zC}-${ZC}${CC>1?`-${CC}`:""}`
+       displayConsentUI() {
+         var pp, ip;
+         null === (pp = (ip = window).__cmp) || void 0 === pp || pp.call(ip, "showModal")
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L41-L78` → after: `L173-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L173-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/155.js#L173-L182) · [Before (L41-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/155.js#L41-L78)

```diff
-       playVideoOrRewarded(CC, zC, ZC) {
-         var QC;
-         let wC = !1;
-         const nC = () => {
-             document.getElementById("GenericVideoWrapper").style.display = "none", wC = !0
-           },
-           fC = (CC, zC) => {
-             console.error(`AD: Error while playing Aditude video ad: ${CC}:`, zC), nC(), ZC()
-           };
-         if (console.log(`AD: Requesting Aditude ${CC} ad`), void 0 === (null === (QC = window.tude) || void 0 === QC ? void 0 : QC.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${CC} ad playing`), void fC("Aditude ad lib not loaded", null);
-         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
-           console.log("AD: Inside Aditude window.tude.cmd.push");
-           try {
-             window.tude.requestInstreamPlayer({
-               code: bC[CC],
-               divId: "GenericVideoInner",
- ... (22 more removed lines; see GitHub link above)
+       addPrivacyLinks(pp) {
+         var ip, cp, Op, op;
+         const Ip = document.createElement("span");
+         Ip.dataset.ccpaLink = "1";
+         const Sp = document.createElement("div");
+         Sp.id = "ncmp-consent-link", pp.replaceChildren(Ip, Sp), null === (ip = (cp = window).__uspapi) || void 0 === ip || ip.call(cp, "addLink", 1), null === (Op = (op = window).__cmp) || void 0 === Op || Op.call(op, "addConsentLink")
+       }
+       newPageSession() {
+         var pp, ip;
+         null === (pp = (ip = window.nitroAds).navigate) || void 0 === pp || pp.call(ip)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/156.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/156.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L4-L2250` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/156.js#L4-L40) · [Before (L4-L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/156.js#L4-L2250)

```diff
-   8870: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => fC
-     });
-     var QC = ZC(20),
-       wC = ZC(1143),
-       bC = ZC(4942),
-       nC = ZC(1056);
- 
-     function fC(CC) {
-       let {
-         note: zC
-       } = CC;
-       const {
-         t: ZC
-       } = (0, wC.y)(), {
- ... (2231 more removed lines; see GitHub link above)
+   8278: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       AdsenseForGamesSdkAdaptor: () => Ip
+     });
+     var Op = cp(1341),
+       op = cp(1194);
+     class Ip extends Op.b {
+       constructor() {
+         super(), this.name = "adsense"
+       }
+       static async setup() {
+         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(pp) {
+           window.adsbygoogle.push(pp)
+         }, window.adConfig({
+           preloadAdBreaks: "on",
+           sound: "on",
+ ... (21 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L2299-L2368` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/156.js#L43-L44) · [Before (L2299-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/156.js#L2299-L2368)

```diff
-           onChangeComplete: QC => {
-             if (QC === zC) return void ZC(oC.current);
-             const wC = vZ(oC.current, CC, QC);
-             oC.current = wC, bC(wC), (0, iC.reportAnalyticsClick)({
-               id: "hud_layout.safe_zone",
-               value: CC
-             })
-           }
-         })
-       };
-       return (0, xC.jsxs)("div", {
-         className: "SettingBoxGroup HudSafeZone",
-         children: [(0, xC.jsxs)("div", {
-           className: "SettingBox HudSafeZoneHeader",
-           children: [(0, xC.jsx)("div", {
-             children: nC("hudLayout:safeZone")
- ... (54 more removed lines; see GitHub link above)
+           afterAd: () => {
+             console.log("afterAd called"), window.adCompleteSoResume()
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L2370-L2393` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/156.js#L46-L47) · [Before (L2370-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/156.js#L2370-L2393)

```diff
-           qC = [...CC.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((CC => CC.cloneNode(!0)));
-         return {
-           faces: Object.keys(wC).length > 0 ? wC : null,
-           names: bC,
-           shop: oC(".TouchInventoryKey.ShopKey"),
-           bag: oC(".TouchInventoryKey.BagKey"),
-           items: qC.length > 0 ? qC : null,
-           rowIcons: zC,
-           pinnedIcon: ZC
-         }
-       }(document, KC, dC) : fz)), HC = (0, wC.useRef)(null), EC = (0, wC.useRef)(null), lC = function(CC) {
-         const [zC, ZC] = (0, wC.useState)((() => .4 * window.innerHeight));
-         return (0, wC.useLayoutEffect)((() => {
-           var zC;
-           const QC = null === (zC = CC.current) || void 0 === zC ? void 0 : zC.closest(".SettingsMenuRight");
-           if (!QC) return;
- ... (8 more removed lines; see GitHub link above)
+           adBreakDone: ip => {
+             console.log("adBreakDone called", ip), clearTimeout(Op), cp || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), pp())
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/157.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/157.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/157.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/157.js#L4-L15)

```diff
-   36490: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       B: () => GC,
-       c: () => bC,
-       g: () => SC,
-       j: () => pC,
-       m: () => fC,
-       o: () => NC,
-       p: () => PC,
-       r: () => WC,
-       v: () => RC,
-       z: () => gC
+   8281: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       AditudeSdkAdaptor: () => Sp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L17-L40` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/157.js#L8-L16) · [Before (L17-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/157.js#L17-L40)

```diff
-     var QC = ZC(20),
-       wC = ZC(28);
-     const bC = "clientGameInventoryButtonsChanged",
-       nC = new Map;
- 
-     function fC() {
-       return [...nC.values()].sort(((CC, zC) => {
-         var ZC, QC;
-         return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
-       }))
-     }
-     let oC = null;
- 
-     function qC(CC) {
-       oC = CC
-     }
- ... (8 more removed lines; see GitHub link above)
+     var Op = cp(1341),
+       op = cp(1194);
+     const Ip = {
+       video: "pb-slot-interstitial-video",
+       rewarded: "pb-slot-rewarded-video"
+     };
+     class Sp extends Op.b {
+       constructor() {
+         super(), this.name = "aditude"
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L42-L78` → after: `L18-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L18-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/157.js#L18-L78) · [Before (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/157.js#L42-L78)

```diff
-       CC.panel && "clientGame" === QC.b.get("openInGameMenuName") && qC(CC.id)
-     }
- 
-     function NC() {
-       return FC
-     }
- 
-     function MC() {
-       return fC().filter((CC => CC.panel && !CC.disabled))
-     }
- 
-     function gC(CC) {
-       const zC = MC(),
-         ZC = zC.findIndex((CC => CC.id === oC));
-       return !(ZC < 0 || zC.length < 2) && (WC(zC[(ZC + CC + zC.length) % zC.length]), !0)
-     }
- ... (21 more removed lines; see GitHub link above)
+       static async setup() {
+         return window.tude = window.tude || {
+           cmd: []
+         }, await (0, op.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Sp
+       }
+       playVideoAd(pp, ip) {
+         this.playVideoOrRewarded("video", pp, pp)
+       }
+       playRewarded(pp, ip) {
+         this.playVideoOrRewarded("rewarded", pp, ip)
+       }
+       renderBanner(pp) {
+         const ip = this.getBaseDivId(pp.adId, pp.width, pp.height);
+         window.tude.cmd.push((function() {
+           window.tude.refreshAdsViaDivMappings([{
+             divId: pp.divId,
+ ... (45 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/158.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/158.js` (84 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961)

#### 1. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L4)

```diff
-   38946: (CC, zC, ZC) => {
+   9e3: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L6-L7)

```diff
-       c: () => fC,
-       d: () => bC
+       c: () => xp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L9-L10` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L8-L11) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L9-L10)

```diff
-     var QC = ZC(4036);
-     let wC = null;
+     var Op = cp(25),
+       op = cp(1201),
+       Ip = cp(5113),
+       Sp = cp(1112);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L13` → after: `L14-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L14-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L14-L32) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L13)

```diff
-       return null !== wC && CC === wC
+       let {
+         note: ip
+       } = pp;
+       const {
+         t: cp
+       } = (0, op.H)(), {
+         clientEscMenuOptions: xp
+       } = (0, Op.o)(["clientEscMenuOptions"]);
+       return (0, Sp.jsx)(Ip.b, {
+         label: cp("touchSettings:actionButtons"),
+         checked: xp.touchActionButtons,
+         onClick: pp => {
+           Op.c.setClientEscMenuOptions({
+             touchActionButtons: pp
+           })
+         },
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L16-L64` → after: `L112-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L112-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L112-L120) · [Before (L16-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L16-L64)

```diff
-     function nC() {
-       this.rD = !1, this.stopPropagation = !1, this.jD = !1, this.disabled = !1
-     }
-     class fC {
-       constructor(CC, zC) {
-         this.version = "0.7.0";
-         var ZC = Object.assign({}, new nC, zC || {});
-         this.element = CC || document, this.rD = !!ZC.rD, this.stopPropagation = !!ZC.stopPropagation, this.jD = !!ZC.jD, this.disabled = !!ZC.disabled, this.filterEvents = (CC, zC) => !0, this.ignoreEvent = CC => !1, this.down = new QC.EventEmitter, this.up = new QC.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           OCC: 0,
-           kCC: 0,
-           VCC: 0
-         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
-           lastX: 0,
-           lastY: 0,
- ... (33 more removed lines; see GitHub link above)
+     function Zp(pp, ip, cp, Op) {
+       const op = cp(function(pp, ip) {
+           return "attack" !== pp || ip ? Gp[pp].label : "hudLayout:attackContext"
+         }(pp, ip)),
+         Ip = Op[pp];
+       return Ip ? cp("hudLayout:slotWithKey", {
+         slot: op,
+         key: Ip
+       }) : op
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L67-L68` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L123-L124) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L67-L68)

```diff
-     function oC(CC) {
-       for (var zC in CC) CC[zC] = 0
+     function zp(pp, ip, cp, Op) {
+       return pp.map((pp => Zp(pp, ip, cp, Op))).join(", ")
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L72-L85` → after: `L128-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L128-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L128-L134) · [Before (L72-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L72-L85)

```diff
-       window.addEventListener("keydown", pC.bind(null, CC, !0), !1), window.addEventListener("keyup", pC.bind(null, CC, !1), !1);
-       var zC = {
-         passive: !0
-       };
-       CC.element.addEventListener("touchstart", MC.bind(void 0, CC), {
-         passive: !1
-       }), CC.element.addEventListener("touchend", SC.bind(void 0, CC), zC), CC.element.addEventListener("mousedown", PC.bind(null, CC, !0), zC), window.document.addEventListener("mouseup", PC.bind(null, CC, !1), zC), CC.element.addEventListener("touchmove", GC.bind(null, CC), zC) … [truncated]
-     }
-     var FC = 0,
-       WC = 0,
-       NC = null;
- 
-     function MC(CC, zC) {
-       zC.preventDefault(), gC(zC)
+       let {
+         className: ip,
+         keepPlace: cp
+       } = pp;
+       return cp ? (0, ep.jsx)("div", {
+         className: Lp()(ip, "Placeholder")
+       }) : null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L89-L127` → after: `L138-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L138-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L138-L167) · [Before (L89-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L89-L127)

```diff
-       let zC = !1;
-       for (let ZC = 0; ZC < CC.touches.length; ++ZC)
-         if (CC.touches[ZC].identifier === NC) {
-           zC = !0;
-           break
-         } if (!zC) {
-         const zC = CC.changedTouches[0];
-         FC = zC.clientX, WC = zC.clientY, NC = zC.identifier
-       }
-     }
- 
-     function SC(CC, zC) {
-       for (var ZC = zC.changedTouches, QC = 0; QC < ZC.length; ++QC) ZC[QC].identifier === NC && (NC = null)
-     }
- 
-     function pC(CC, zC, ZC) {
- ... (23 more removed lines; see GitHub link above)
+       let {
+         id: ip,
+         elements: cp,
+         actionButtons: op,
+         keyNames: Ip,
+         className: Sp,
+         keepPlace: xp,
+         onHidden: Lp
+       } = pp;
+       const {
+         t: Dp
+       } = (0, Op.H)();
+       if (!Gp[ip].hide) return (0, ep.jsx)(sp, {
+         className: Sp,
+         keepPlace: xp
+       });
+ ... (14 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L130-L145` → after: `L170-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L170-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L170-L204) · [Before (L130-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L130-L145)

```diff
-     function GC(CC, zC) {
-       var ZC = zC.movementX || zC.mozMovementX || 0,
-         QC = zC.movementY || zC.mozMovementY || 0;
-       if (zC.touches && 0 === (ZC | QC)) {
-         var wC = function(CC) {
-           gC(CC);
-           for (let zC = 0; zC < CC.changedTouches.length; ++zC)
-             if (CC.changedTouches[zC].identifier == NC) {
-               const ZC = CC.changedTouches[zC],
-                 QC = [ZC.clientX - FC, ZC.clientY - WC];
-               return FC = ZC.clientX, WC = ZC.clientY, QC
-             } return console.error(`Did not find touch id ${NC}`), [0, 0]
-         }(zC);
-         ZC = wC[0], QC = wC[1]
-       }
-       CC.Fy.dx += ZC, CC.Fy.dy += QC
+     function Vp(pp) {
+       let {
+         id: ip,
+         elements: cp,
+         actionButtons: op,
+         keyNames: Ip,
+         className: Sp,
+         keepPlace: xp,
+         onlyWhenMoved: Lp,
+         locked: Dp,
+         onReset: Ap
+       } = pp;
+       const {
+         t: Pp
+       } = (0, Op.H)(), Wp = Gp[ip], yp = (0, Xp.I)(cp[ip]);
+       return !Wp.move && !Wp.scale || Lp && yp ? (0, ep.jsx)(sp, {
+ ... (19 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L148-L161` → after: `L207-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L207-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L207-L241) · [Before (L148-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L148-L161)

```diff
-     function RC(CC, zC) {
-       iC(CC, zC);
-       var ZC = 1;
-       switch (zC.deltaMode) {
-         case 0:
-           ZC = 1;
-           break;
-         case 1:
-           ZC = 12;
-           break;
-         case 2:
-           ZC = CC.element.clientHeight || window.innerHeight
-       }
-       CC.Fy.OCC += (zC.deltaX || 0) * ZC, CC.Fy.kCC += (zC.deltaY || 0) * ZC, CC.Fy.VCC += (zC.deltaZ || 0) * ZC
+     function ii(pp) {
+       let {
+         id: ip,
+         actionButtons: cp,
+         keyNames: op,
+         className: Ip,
+         keepPlace: Sp,
+         locked: xp,
+         lockable: Lp,
+         onLocked: Dp
+       } = pp;
+       const {
+         t: Ap
+       } = (0, Op.H)();
+       return Lp || xp ? (0, ep.jsx)(Yp.S, {
+         className: Ip,
+ ... (19 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L164-L165` → after: `L244-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L244-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L244-L270) · [Before (L164-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L164-L165)

```diff
-     function AC(CC, zC) {
-       if (!CC.jD) return zC.preventDefault(), !1
+     function ci(pp) {
+       let {
+         className: ip,
+         open: cp,
+         name: op,
+         onToggle: Ip
+       } = pp;
+       const {
+         t: Sp
+       } = (0, Op.H)();
+       return (0, ep.jsx)(Yp.S, {
+         className: ip,
+         ariaLabel: Sp(cp ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
+           name: op
+         }),
+         pressed: cp,
+ ... (11 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L179` → after: `L274-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L274-L277) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L179)

```diff
-       return !!CC[xC[zC]] || ("AltRight" === zC || "ControlLeft" === zC) && "function" === typeof CC.getModifierState && !0 === CC.getModifierState("AltGraph")
+       var cp;
+       pp.contains(document.activeElement) && ip.focus({
+         preventScroll: !0
+       }), null === (cp = (0, Mp.f)()) || void 0 === cp || cp.handOverPadFocus(pp, ip)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L182-L193` → after: `L280-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L280-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L280-L283) · [Before (L182-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L182-L193)

```diff
-     function IC(CC, zC) {
-       for (var ZC in CC._modifiersHeldThroughBlur = {}, xC) CC._keyStates[ZC] && (CC._modifiersHeldThroughBlur[ZC] = !0);
-       zC && zC.isTrusted && function() {
-         try {
-           return window.self !== window.top
-         } catch (CC) {
-           return !0
-         }
-       }() && (clearTimeout(CC._blurRelease), CC._blurRelease = setTimeout((function() {
-         if (!document.hasFocus())
-           for (var zC in CC._modifiersHeldThroughBlur = {}, CC._keyStates) CC._keyStates[zC] && !/^Mouse\d/.test(zC) && vC(CC, zC)
-       }), 0))
+     function oi(pp) {
+       const ip = pp.closest("[data-hud-row]"),
+         cp = null === ip || void 0 === ip ? void 0 : ip.querySelector(".HudElementRowName");
+       return !(!ip || !cp) && (Oi(ip, cp), !0)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L197-L199` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L288) · [Before (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L197-L199)

```diff
-       var ZC = CC._modifiersHeldThroughBlur;
-       if (ZC && zC.isTrusted && document.hasFocus())
-         for (var QC in ZC) delete ZC[QC], CC._keyStates[QC] && QC !== zC.code && (JC(zC, QC) || vC(CC, QC))
+       return "joystick" === pp && !ip
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L202-L206` → after: `L291-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L291-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L291-L298) · [Before (L202-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L202-L206)

```diff
-     function vC(CC, zC) {
-       const ZC = {
-           code: zC,
-           preventDefault: () => {},
-           stopPropagation: () => {}
+     function xi() {
+       const {
+         t: pp
+       } = (0, Op.H)();
+       return (0, ep.jsx)(Yp.S, {
+         className: "HudFixJoystickButton",
+         analyticsClick: {
+           id: "hud_layout.fix_joystick"
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L208-L230` → after: `L300-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L300-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L300-L308) · [Before (L208-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L208-L230)

```diff
-         QC = wC;
-       wC = ZC;
-       try {
-         eC(zC, !1, CC, ZC)
-       } finally {
-         wC = QC
-       }
-     }
- 
-     function eC(CC, zC, ZC, QC) {
-       var wC = ZC._keyBindmap[CC];
-       wC && (hC(ZC._keyStates[CC], zC) && (ZC._keyStates[CC] = zC, wC.forEach((CC => {
-         (!ZC.filterEvents || ZC.filterEvents(QC, CC)) && function(CC, zC, ZC, QC) {
-           var wC = zC ? ZC.pressCount : ZC.releaseCount;
-           wC[CC] = (wC[CC] || 0) + 1;
-           var bC = ZC._bindPressCount[CC] || 0;
- ... (7 more removed lines; see GitHub link above)
+         onClick: pp => {
+           const ip = pp.currentTarget;
+           if (!oi(ip)) {
+             const pp = function(pp) {
+               var ip, cp;
+               const Op = [pp.previousElementSibling, pp.nextElementSibling].find((pp => pp instanceof HTMLElement && pp.matches(Ii)));
+               return null !== (ip = null !== Op && void 0 !== Op ? Op : null === (cp = pp.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === cp ? void 0 : cp.querySelector(`:is(${Ii}):not(.HudFixJoystickButton)`)) && void 0 !== ip ? ip : null
+             }(ip);
+             pp && Oi(ip, pp)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L232-L233` → after: `L310-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L310-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L310-L315) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L232-L233)

```diff
-         }(CC, zC, ZC, QC)
-       }))), "button" in QC || (ZC.rD && !QC.defaultPrevented && QC.preventDefault(), ZC.stopPropagation && QC.stopPropagation()))
+           Dp.c.setClientEscMenuOptions({
+             joystickMode: "fixed_shown"
+           })
+         },
+         children: pp("hudLayout:fixJoystick")
+       })
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L236-L237` → after: `L338-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L338-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L338-L372) · [Before (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L236-L237)

```diff
-     function hC(CC, zC) {
-       return CC ? !zC : zC
+     function ti(pp) {
+       let {
+         id: ip,
+         slot: cp,
+         icon: Op,
+         label: Ip,
+         hidden: Sp,
+         className: xp,
+         face: Yp
+       } = pp;
+       const Dp = (0, op.useRef)(null);
+       return (0, op.useLayoutEffect)((() => {
+         Yp && Dp.current && (0, wi.j)(Dp.current, Yp)
+       }), [Yp]), (0, ep.jsxs)("div", {
+         className: Lp()("TouchKeyHit", `TouchSlot${cp}`, xp, {
+           HudPreviewGhost: Sp.has(ip)
+ ... (19 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L255-L262` → after: `L375-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L375-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L375-L388) · [Before (L255-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L255-L262)

```diff
-     function NC() {
-       return {
-         source: null,
-         direction: null,
-         FX: null,
-         timeout: void 0,
-         writtenAngle: null
-       }
+     function Hi(pp) {
+       let {
+         item: ip,
+         selected: cp
+       } = pp;
+       const Op = (0, op.useRef)(null);
+       return (0, op.useLayoutEffect)((() => {
+         Op.current && (0, wi.j)(Op.current, ip)
+       }), [ip]), (0, ep.jsx)("div", {
+         ref: Op,
+         className: Lp()("InvenItem", {
+           Selected: cp
+         })
+       })
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L266` → after: `L406-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L406-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L406-L429) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L266)

```diff
-       return WC.find((zC => null !== zC.source && zC.source === CC))
+       let {
+         id: ip,
+         hidden: cp,
+         parked: Op,
+         unslotted: op = !1
+       } = pp;
+       return (0, ep.jsx)("div", {
+         className: Lp()("TopRightIcon", yi.n[ip], {
+           HudPreviewGhost: cp.has(ip),
+           [Pi.d]: void 0 !== Op,
+           [Pi.h]: op
+         }),
+         ...ei(Op),
+         children: (0, ep.jsx)("div", {
+           className: "UiItemIcon SmallTextBold",
+           ...vi(ip),
+ ... (8 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L270` → after: `L433-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L433-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L433-L486) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L270)

```diff
-       clearTimeout(CC.timeout), CC.source = null, CC.direction = null, CC.writtenAngle = null, CC.FX && (CC.FX.style.rotate = "")
+       let {
+         portraitPhone: ip,
+         icons: cp,
+         pinnedIcons: Op,
+         hidden: Ip,
+         moved: Sp,
+         trayState: xp
+       } = pp;
+       const Yp = ip ? (0, Pi.E)(cp) : [],
+         Dp = cp.filter((pp => "settings" === pp)),
+         Ap = cp.filter((pp => "settings" !== pp && !Yp.includes(pp))).reverse(),
+         Pp = Yp.length > 0 && "gone" === xp,
+         Wp = [...Dp, ...Pp ? ["tray"] : [], ...Ap].filter((pp => "tray" === pp || Ip.has(pp) && !Sp.has(pp))),
+         yp = pp => {
+           const ip = Wp.indexOf(pp);
+           return ip < 0 ? void 0 : ip
+ ... (38 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L272-L316` → after: `L488-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L488-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L488-L501) · [Before (L272-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L272-L316)

```diff
-     const SC = (0, QC.memo)((function() {
-       const [, CC] = (0, QC.useReducer)((CC => CC + 1), 0);
-       return (0, wC.c)("damagedByOtherPlayer", (zC => {
-         let {
-           UC: ZC,
-           direction: QC
-         } = zC;
-         const wC = ZC || "nonDirectional",
-           bC = function(CC) {
-             var zC;
-             const ZC = null !== (zC = MC(CC)) && void 0 !== zC ? zC : WC.find((CC => null === CC.source));
-             if (ZC) return ZC;
-             const QC = {
-               source: null,
-               direction: null,
-               FX: null,
- ... (29 more removed lines; see GitHub link above)
+ 
+     function ki(pp) {
+       let {
+         icon: ip
+       } = pp;
+       return (0, ep.jsx)("div", {
+         className: "TopRightIcon",
+         children: (0, ep.jsx)("div", {
+           className: "UiItemIcon SmallTextBold",
+           children: (0, ep.jsx)("div", {
+             className: "ScaleOnHover",
+             children: (0, ep.jsx)(Cp.d, {
+               name: ip
+             })
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L318` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L503) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L318)

```diff
-         }, zC)))
+         })
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L320` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L505) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L320)

```diff
-     }));
+     }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L323-L327` → after: `L508-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L508-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L508-L526) · [Before (L323-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L323-L327)

```diff
-       for (const zC of WC) {
-         if (null === zC.source || (0, fC.H)(zC.direction)) continue;
-         const ZC = zC.direction - CC;
-         ZC !== zC.writtenAngle && (zC.writtenAngle = ZC, zC.FX.style.rotate = `${ZC}rad`)
-       }
+       let {
+         next: ip,
+         hidden: cp
+       } = pp;
+       return (0, ep.jsx)("div", {
+         className: Lp()("HotBarArrow", ip ? "Next" : "Previous", {
+           HudPreviewGhost: cp
+         }),
+         ...vi("arrows"),
+         children: (0, ep.jsx)("div", {
+           className: "UiItemIcon SmallTextBold",
+           children: (0, ep.jsx)("div", {
+             className: "ScaleOnHover",
+             children: (0, ep.jsx)(Cp.d, {
+               name: ip ? "caret-right" : "caret-left"
+             })
+ ... (3 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L338` → after: `L530-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L530-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L530-L575) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L338)

```diff
-       return QC
+       return (0, ep.jsx)("div", {
+         className: "SocialBarContainer",
+         children: (0, ep.jsx)("div", {
+           className: "SocialBarOuter",
+           children: (0, ep.jsx)("div", {
+             className: "SocialBar",
+             children: (0, ep.jsx)("div", {
+               className: "CondensedSocialBarInner",
+               children: (0, ep.jsx)("div", {
+                 className: "CondensedSectionsContainer",
+                 children: (0, ep.jsxs)("div", {
+                   className: "CondensedSections",
+                   children: [(0, ep.jsxs)("div", {
+                     className: "CondensedSection CondensedSectionFriendRequests",
+                     children: [(0, ep.jsx)("div", {
+                       className: "CondensedSectionValue",
+ ... (30 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L342-L353` → after: `L601-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L601-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L601-L919) · [Before (L342-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L342-L353)

```diff
-       return QC !== CC && (QC = CC, !0)
-     }
-   },
-   34107: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => bC,
-       h: () => wC
-     });
-     var QC = ZC(20);
- 
-     function wC(CC, zC) {
-       return CC && !zC
+       let {
+         presence: ip,
+         portraitPhone: cp,
+         hidden: op,
+         actionButtons: Ip,
+         joystickFixed: Sp,
+         keysAbove: xp,
+         auraBar: Yp,
+         trayState: Dp,
+         moved: Pp
+       } = pp;
+       const {
+         t: Wp
+       } = (0, Op.H)(), {
+         faces: yp,
+         items: Up
+ ... (303 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L357` → after: `L923-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L923-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L923-L926) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L357)

```diff
-       return wC(QC.b.get("isTouchScreen"), QC.b.get("clientEscMenuOptions").touchActionButtons)
+       const [pp, ip] = (0, op.useState)({}), cp = (0, op.useCallback)((pp => {
+         ip((ip => [...new Set([...Object.keys(ip), ...Object.keys(pp)])].every((cp => ip[cp] === pp[cp])) ? ip : pp))
+       }), []);
+       return [pp, cp]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L359-L405` → after: `L928-L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L928-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L928-L972) · [Before (L359-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L359-L405)

```diff
-   },
-   40504: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       startPadGameplay: () => xC
-     });
-     ZC(40381);
-     var QC = ZC(40389),
-       wC = ZC(3677),
-       bC = ZC(20),
-       nC = ZC(38913),
-       fC = ZC(3611),
-       oC = ZC(38937),
-       qC = ZC(28),
-       FC = ZC(2753),
-       WC = ZC(38268),
-       NC = ZC(8850),
- ... (31 more removed lines; see GitHub link above)
+     const Qi = .05;
+ 
+     function Ji(pp) {
+       var ip;
+       let {
+         selected: cp,
+         layout: op,
+         actionButtons: Ip,
+         keyNames: Sp,
+         overlaps: xp,
+         scaleCaps: Dp,
+         joystickFixed: Ap,
+         onScale: Pp,
+         onHidden: Wp,
+         onReset: yp,
+         locked: Up,
+ ... (29 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L407-L408` → after: `L974-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L974-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L974-L984) · [Before (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L407-L408)

```diff
-             release: () => {
-               QC = !1, zC = gC, ZC.reset()
+             children: (0, ep.jsx)(Cp.d, {
+               name: "minus"
+             })
+           }), (0, ep.jsx)("span", {
+             className: "HudQuickSizeValue",
+             children: `${Math.round(100*kp)}%`
+           }), (0, ep.jsx)(Yp.S, {
+             disabled: jp || kp >= mp,
+             ariaLabel: Hp("hudLayout:larger"),
+             onClick: () => {
+               Rp(1)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L410-L412` → after: `L986-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L986-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L986-L1044) · [Before (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L410-L412)

```diff
-             uninstall: CC => {
-               CC.camera.kU === bC && (CC.camera.kU = null)
-             }
+             children: (0, ep.jsx)(Cp.d, {
+               name: "plus"
+             })
+           })]
+         }), (dp || tp) && (0, ep.jsxs)("div", {
+           className: "HudQuickActions",
+           children: [dp && (0, ep.jsxs)(ep.Fragment, {
+             children: [(0, ep.jsx)(ii, {
+               id: dp.id,
+               actionButtons: Ip,
+               keyNames: Sp,
+               locked: jp,
+               lockable: wp(dp.id),
+               onLocked: vp
+             }), (0, ep.jsx)(Kp, {
+               id: dp.id,
+ ... (43 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L414-L422` → after: `L1046-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1046-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1046-L1058) · [Before (L414-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L414-L422)

```diff
-         })();
-         return {
-           update: (zC, ZC, QC) => {
-             CC.update((0, FC.e)(), zC, ZC, QC)
-           },
-           release: CC.release,
-           uninstall: () => {
-             const zC = (0, FC.e)();
-             zC && CC.uninstall(zC)
+         };
+       let Lp = null;
+       const Yp = () => {
+           Lp !== (0 === Ip.size) && (Lp = 0 === Ip.size, null === Op || void 0 === Op || Op(Lp))
+         },
+         Dp = pp => {
+           const ip = pp.cloneNode(!0);
+           if ("LINK" === ip.tagName) {
+             Ip.add(ip);
+             const pp = () => {
+               Ip.delete(ip), Yp()
+             };
+             ip.addEventListener("load", pp), ip.addEventListener("error", pp), cp && ip.addEventListener("load", cp)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L424-L524` → after: `L1060-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1060-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1060-L1073) · [Before (L424-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L424-L524)

```diff
-         }
-       };
-     var AC = ZC(40405);
-     ZC(37523), ZC(8746);
-     ZC(8757).e;
-     const xC = () => {
-       const CC = (0, AC.b)((() => {
-           const CC = {
-             x: 0,
-             y: 0,
-             magnitude: 0,
-             headingOffset: 0,
-             jumpHeld: !1,
-             jumpPressedSinceTick: !1,
-             crouchHeld: !1,
-             running: !1,
- ... (85 more removed lines; see GitHub link above)
+           return ip
+         },
+         Ap = () => {
+           const Op = function(pp) {
+               const ip = [...pp.body.children].filter((pp => pp.matches(Fi)));
+               return [...pp.head.querySelectorAll(Fi), ...ip]
+             }(pp).filter(xp),
+             Sp = new Set(Op);
+           for (const [pp, ip] of op) Sp.has(pp) || (ip.remove(), op.delete(pp), Ip.delete(ip));
+           let Lp = null;
+           for (let pp = Op.length - 1; pp >= 0; pp--) {
+             const Ip = Op[pp];
+             let Sp = op.get(Ip);
+             Sp ? "STYLE" === Ip.tagName && Sp.textContent !== Ip.textContent && (Sp.textContent = Ip.textContent, null === cp || void 0 === cp || cp()) : (Sp = Dp(Ip), op.set(Ip, Sp), ip.head.insertBefore(Sp, Lp)), Lp = Sp
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L526-L531` → after: `L1075-L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1075-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1075-L1086) · [Before (L526-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L526-L531)

```diff
-         })()),
-         zC = (0, QC.e)(),
-         ZC = null,
-         bC = null;
-       return () => {
-         CC(), zC(), null === ZC || void 0 === ZC || ZC(), null === bC || void 0 === bC || bC()
+           Yp()
+         };
+       Ap();
+       const Pp = new MutationObserver(Ap);
+       return Pp.observe(pp.head, {
+         childList: !0,
+         subtree: !0,
+         characterData: !0
+       }), Pp.observe(pp.body, {
+         childList: !0
+       }), () => {
+         Pp.disconnect()
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L534-L551` → after: `L1089-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1089-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1089-L1117) · [Before (L534-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L534-L551)

```diff
-   },
-   36490: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       B: () => GC,
-       c: () => bC,
-       g: () => SC,
-       j: () => pC,
-       m: () => fC,
-       o: () => NC,
-       p: () => PC,
-       r: () => WC,
-       v: () => RC,
-       z: () => gC
-     });
-     var QC = ZC(20),
-       wC = ZC(28);
- ... (2 more removed lines; see GitHub link above)
+ 
+     function Gi(pp, ip, cp) {
+       let {
+         keysAbove: Op
+       } = cp;
+       const op = [...pp.documentElement.classList].filter((pp => !bi.has(pp) && !ni.has(pp))),
+         Ip = [...ip.documentElement.classList].filter((pp => ni.has(pp))),
+         Sp = [Ti, fi.hotbar, fi.hasShop, fi.hasBag];
+       Op && Sp.push(fi.keysAbove), ip.documentElement.className = [...op, ...Sp, ...Ip].join(" ")
+     }
+     const ri = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];
+ 
+     function Zi(pp, ip, cp, Op, op) {
+       const Ip = (0, Xp.y)(cp, Op, "joystick"),
+         Sp = (0, yi.A)((0, yi.M)(cp, Op, op), Op),
+         xp = Sp.classes.filter((pp => !ai.has(pp))),
+ ... (13 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L554-L557` → after: `L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1120) · [Before (L554-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L554-L557)

```diff
-       return [...nC.values()].sort(((CC, zC) => {
-         var ZC, QC;
-         return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
-       }))
+       return (0, yi.L)(Dp.c.get("notchSize"), window.innerWidth, window.innerHeight)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L562` → after: `L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1124) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L562)

```diff
-       oC = CC
+       return (0, yi.u)(zi(), (0, yi.P)(pp))
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L566-L567` → after: `L1127-L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1127-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1127-L1130) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L566-L567)

```diff
-     function WC(CC) {
-       FC = !0;
+     function Ki(pp, ip, cp) {
+       const Op = pp.documentElement.style,
+         op = (0, yi.I)(ip),
+         Ip = Op.getPropertyValue(op);
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L569` → after: `L1132-L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1132-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1132-L1134) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L569)

```diff
-         CC.onClick()
+         return cp((pp => {
+           Op.setProperty(op, String(pp))
+         }))
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L571` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1136) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L571)

```diff
-         FC = !1
+         "" === Ip ? Op.removeProperty(op) : Op.setProperty(op, Ip)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L576-L577` → after: `L1140-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1140-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1140-L1148) · [Before (L576-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L576-L577)

```diff
-     function NC() {
-       return FC
+     function Vi(pp, ip) {
+       const [cp, Op] = Ki(pp, "hotbar", (ip => {
+         const cp = cp => {
+           var Op, op;
+           return ip(cp), null !== (Op = null === (op = pp.querySelector(".HotBarGameItemsContainer")) || void 0 === op ? void 0 : op.getBoundingClientRect().width) && void 0 !== Op ? Op : 0
+         };
+         return [cp(1), cp(Xp.j)]
+       }));
+       return cp <= 0 ? Xp.j : Math.min(Xp.j, Math.max(1, Math.floor(Op / cp / ip + 1e-6) * ip))
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L580-L587` → after: `L1155-L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1155-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1155-L1218) · [Before (L580-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L580-L587)

```diff
-     function MC() {
-       return fC().filter((CC => CC.panel && !CC.disabled))
-     }
- 
-     function gC(CC) {
-       const zC = MC(),
-         ZC = zC.findIndex((CC => CC.id === oC));
-       return !(ZC < 0 || zC.length < 2) && (WC(zC[(ZC + CC + zC.length) % zC.length]), !0)
+     function oc(pp, ip, cp, Op, op) {
+       let {
+         canKeep: Ip = () => !0,
+         passes: Sp = pc,
+         before: xp
+       } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
+       const Lp = ip.hudLayouts[cp].hudLocked.filter(Ip);
+       if (0 === Lp.length) return ip;
+       const Yp = [...Jp].filter((Op => !Lp.includes(Op) && (0, Xp.y)(pp, cp, Op).join() === (0, Xp.y)(ip, cp, Op).join())),
+         Dp = pp => {
+           const ip = (0, Ep.J)(Yp.flatMap((ip => pp[ip] ? [pp[ip]] : [])));
+           return {
+             ...pp,
+             cluster: null !== ip && void 0 !== ip ? ip : void 0
+           }
+         };
+ ... (48 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L590-L591` → after: `L1221-L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1221-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1221-L1228) · [Before (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L590-L591)

```diff
-     function SC() {
-       return null !== oC && MC().length > 1
+     function Ic(pp, ip, cp, Op, op) {
+       let [Ip, Sp, xp] = ip;
+       const Lp = Xp.u[pp],
+         Yp = {};
+       Lp.scale && cc(Op) > 0 && Math.abs(cc(cp) - cc(Op)) > ic && (Yp.scale = Math.max(Xp.k, Math.min(Xp.j, xp * cc(cp) / cc(Op))));
+       const Dp = (0, Ep.d)(cp).x - (0, Ep.d)(Op).x,
+         Ap = (0, Ep.d)(cp).y - (0, Ep.d)(Op).y;
+       return Lp.move && (Math.abs(Dp) > ic || Math.abs(Ap) > ic) && (Yp.dx = Ip + Dp / op.width, Yp.dy = Sp + Ap / op.height), void 0 === Yp.scale && void 0 === Yp.dx ? null : Yp
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L595` → after: `L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1233) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L595)

```diff
-       qC(null)
+       return Sc > 0
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L598-L599` → after: `L1242-L1444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1242-L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1242-L1444) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L598-L599)

```diff
-     function PC() {
-       "inventory" !== QC.b.get("openInGameMenuName") && qC(null)
+     function Ac(pp) {
+       let {
+         preview: ip,
+         stageRef: cp,
+         ringRef: Op,
+         centreLineRef: Ip,
+         snapCentre: Sp,
+         ready: xp,
+         measure: Lp,
+         k: Yp,
+         viewport: Dp,
+         boxes: Ap,
+         pieces: Pp,
+         selected: Wp,
+         insets: yp,
+         layout: Up,
+ ... (187 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L602-L604` → after: `L1448-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1448-L1449) · [Before (L602-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L602-L604)

```diff
-     function GC() {
-       const CC = oC;
-       return qC(null), CC
+     function Wc(pp, ip) {
+       return Object.keys(pp).filter((pp => pp !== ip)).map((ip => pp[ip]))
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L608-L610` → after: `L1453-L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1453-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1453-L1459) · [Before (L608-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L608-L610)

```diff
-       return nC.set(CC.id, CC), wC.o.bp(bC, fC(), !0), () => {
-         nC.get(CC.id) === CC && (nC.delete(CC.id), wC.o.bp(bC, fC()))
-       }
+       return pp.map((pp => {
+         let {
+           id: ip,
+           box: cp
+         } = pp;
+         return `${ip}:${cp.left},${cp.top},${cp.right},${cp.bottom}`
+       })).join(";")
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L631-L632` → after: `L1462-L1496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1462-L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1462-L1496) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L631-L632)

```diff
-     function qC() {
-       return oC
+     function Uc(pp) {
+       const ip = [],
+         cp = ip => (0, Xp.K)(ip) && !pp.documentElement.classList.contains((0, yi.B)(ip));
+       for (const xp of pp.querySelectorAll(`[${rp}]`)) {
+         const pp = cp(xp.getAttribute(rp)) ? xp.querySelector(".ScaleOnHover") : null,
+           Op = (null !== pp && void 0 !== pp ? pp : xp).getBoundingClientRect();
+         (Op.width > 0 || Op.height > 0) && ip.push({
+           id: xp.getAttribute(rp),
+           box: (0, Ep.j)(Op)
+         })
+       }
+       const Op = pp => (0, Ep.J)(ip.filter((ip => {
+           let {
+             id: cp
+           } = ip;
+           return pp(cp)
+ ... (19 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L635-L642` → after: `L1499-L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1499-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1499-L1520) · [Before (L635-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L635-L642)

```diff
-     function FC(CC, zC) {
-       const ZC = {
-         content: CC,
-         menu: zC
-       };
-       return oC = ZC, wC.o.bp(fC, oC, !0), () => {
-         oC === ZC && (oC = null, gC = !1, pC(), wC.o.bp(fC, null))
-       }
+     function wc(pp, ip, cp) {
+       const Op = ip.right - ip.left,
+         op = ip.bottom - ip.top;
+       return Ki(pp, "cluster", (ip => {
+         const Ip = cp => {
+             ip(cp);
+             const Op = [...pp.querySelectorAll(`[${rp}]:not(.HudPreviewGhost)`)].filter((pp => Jp.has(pp.getAttribute(rp)))).map((pp => (0, Ep.j)(pp.getBoundingClientRect()))),
+               op = (0, Ep.J)(Op);
+             return op ? {
+               w: op.right - op.left,
+               h: op.bottom - op.top
+             } : null
+           },
+           Sp = pp => !pp || pp.w <= Op && pp.h <= op,
+           xp = Ip(1),
+           Lp = Ip(Xp.j);
+ ... (6 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L646-L647` → after: `L1523-L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1523-L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1523-L1531) · [Before (L646-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L646-L647)

```diff
-     function NC() {
-       return WC
+     function vc(pp) {
+       Gi(document, pp, {
+         keysAbove: !1
+       });
+       const ip = parseFloat(getComputedStyle(pp.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
+         cp = Number.isFinite(ip) && ip < 0;
+       return Gi(document, pp, {
+         keysAbove: cp
+       }), (0, Pc.b)(pp), cp
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L651-L653` → after: `L1535-L1536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1535-L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1535-L1536) · [Before (L651-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L651-L653)

```diff
-       return WC = CC, () => {
-         WC === CC && (WC = null)
-       }
+       const ip = pp.querySelector(".TouchInventoryKey.ShopKey");
+       return null !== ip && "1" === getComputedStyle(ip).getPropertyValue("--touch-shop-above").trim()
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L657-L662` → after: `L1539-L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1539-L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1539-L1607) · [Before (L657-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L657-L662)

```diff
-     function SC() {
-       const CC = QC.b.get("openInGameMenuName");
-       "clientGame" !== CC && (gC = "inventory" === CC), (0, nC.o)() || (0, nC.j)(), (0, bC.u)(bC.e), QC.b.set({
-         openInGameMenuName: "clientGame",
-         openEverythingMenuName: null
-       })
+     function Hc(pp, ip) {
+       let {
+         layout: cp,
+         orientation: Op,
+         viewport: Ip,
+         replicaKey: Sp,
+         joystickFixed: xp,
+         busy: Lp
+       } = ip;
+       const [Yp, Dp] = (0, op.useState)(null), [Ap, Pp] = (0, op.useState)({
+         boxes: {},
+         pieces: []
+       }), [Wp, yp] = (0, op.useState)({
+         top: 0,
+         right: 0,
+         bottom: 0,
+ ... (53 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L665-L666` → after: `L1611-L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1611-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1611-L1652) · [Before (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L665-L666)

```diff
-     function pC() {
-       GC(!1)
+     function ec(pp, ip, cp, Op, op) {
+       const Ip = cp[pp],
+         Sp = (Ip.left + Ip.right) / 2,
+         xp = (Ip.top + Ip.bottom) / 2,
+         Lp = (7.5 * ip.length + 14) / Op,
+         Yp = 18 / Op,
+         Dp = {
+           Above: {
+             left: Sp - Lp / 2,
+             top: Ip.top - Yp,
+             right: Sp + Lp / 2,
+             bottom: Ip.top
+           },
+           Below: {
+             left: Sp - Lp / 2,
+             top: Ip.bottom,
+ ... (26 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L670` → after: `L1656-L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1656-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1656-L1660) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L670)

```diff
-       GC(gC)
+       const [pp, ip] = (0, Di.b)();
+       return (0, op.useMemo)((() => ({
+         width: pp,
+         height: ip
+       })), [pp, ip])
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L674-L694` → after: `L1664-L2015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L1664-L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L1664-L2015) · [Before (L674-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L674-L694)

```diff
-       "clientGame" === QC.b.get("openInGameMenuName") && QC.b.set({
-         openInGameMenuName: CC ? "inventory" : null
-       }), CC || (0, nC.j)(), gC = !1
-     }
-   },
-   36373: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => oC
-     });
-     var QC = ZC(310),
-       wC = ZC(20),
-       bC = ZC(36375),
-       nC = ZC(1557),
-       fC = ZC(1887);
- 
-     function oC(CC, zC) {
- ... (5 more removed lines; see GitHub link above)
+       var ip;
+       const {
+         layout: cp,
+         orientation: Ip,
+         selected: Sp,
+         onSelect: xp,
+         onMove: Yp,
+         canMove: Dp,
+         actionButtons: Ap,
+         joystickFixed: Pp,
+         presence: Wp,
+         keyNames: Up,
+         maxHeight: wp,
+         fill: vp = !1,
+         apiRef: tp
+       } = pp, {
+ ... (336 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L717-L729` → after: `L2020-L2023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2020-L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2020-L2023) · [Before (L717-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L717-L729)

```diff
-       if (CC instanceof wC.f) return {
-         at: nC[zC],
-         code: 0
-       };
-       const ZC = (0, QC.e)(CC),
-         oC = "number" === typeof ZC ? ZC : 0;
-       return null !== (0, bC.j)(oC).name ? {
-         at: "refused",
-         code: oC
-       } : {
-         at: fC[zC],
-         code: oC
-       }
+       (0, op.useEffect)((() => {
+         var cp;
+         null === (cp = pp.current) || void 0 === cp || cp.toggleAttribute("inert", ip)
+       }), [pp, ip])
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L731-L741` → after: `L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2025) · [Before (L731-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L731-L741)

```diff
-   },
-   8897: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => bC,
-       e: () => nC,
-       i: () => fC,
-       m: () => qC,
-       n: () => oC
-     });
-     var QC = ZC(184),
-       wC = ZC(4562);
+     const mc = "hudFullScreen";
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L744-L745` → after: `L2028-L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2028-L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2028-L2146) · [Before (L744-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L744-L745)

```diff
-       return nC(CC) === QC.e.gameOrPluginOnPlayerAuthRejected.code
-     }
+       let {
+         onScale: ip,
+         onHidden: cp,
+         onReset: Ip,
+         locked: Sp,
+         lockable: xp,
+         onLocked: Lp,
+         onClose: Dp,
+         ...Ap
+       } = pp;
+       const {
+         t: Pp
+       } = (0, Op.H)(), Wp = (0, op.useRef)(null);
+       (0, Yi.x)("popup", Wp, Dp),
+       function(pp) {
+         const ip = (0, op.useRef)(pp);
+ ... (103 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L748` → after: `L2149-L2173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2149-L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2149-L2173) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L748)

```diff
-       return "object" === typeof CC && null !== CC ? CC.code : void 0
+       let {
+         info: ip,
+         tuple: cp,
+         props: op
+       } = pp;
+       const {
+         t: Ip
+       } = (0, Op.H)();
+       return (0, ep.jsx)(Wp.i, {
+         name: Ip("hudLayout:size"),
+         min: Xp.k,
+         max: Xp.j,
+         step: Qi,
+         initValue: cp[2],
+         disabled: op.locked.has(ip.id),
+         selectableMax: op.scaleCaps[ip.id],
+ ... (9 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L752-L753` → after: `L2177-L2318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2177-L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2177-L2318) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L752-L753)

```diff
-       var zC;
-       return null !== (zC = Object.keys(wC.c).find((zC => wC.c[zC] === CC))) && void 0 !== zC ? zC : null
+       const {
+         t: ip
+       } = (0, Op.H)(), {
+         present: cp,
+         elements: Ip,
+         selected: Sp,
+         onSelect: xp,
+         onHidden: Yp,
+         onReset: Dp,
+         note: Ap,
+         actionButtons: Pp,
+         keyNames: Wp,
+         sizeBesidePreview: yp,
+         locked: Up,
+         lockable: wp,
+         onLocked: vp
+ ... (126 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L757-L763` → after: `L2322-L2384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2322-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2322-L2384) · [Before (L757-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L757-L763)

```diff
-       return "notWhitelisted" === CC ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
-     }
-     const qC = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
+       let {
+         preview: ip,
+         quick: cp,
+         onFullScreen: Ip,
+         resting: Sp,
+         onSidePanel: xp
+       } = pp;
+       const {
+         t: Lp
+       } = (0, Op.H)(), Dp = uc(), Ap = (0, op.useRef)(null), {
+         width: Pp
+       } = (0, Ai.d)(Ap), Wp = Math.floor(Dp.width * Math.min(1, ip.maxHeight / Dp.height)), yp = Pp - Wp - 12, Up = yp >= 130, wp = Pp > 0;
+       (0, op.useEffect)((() => {
+         wp && xp(Up)
+       }), [wp, Up, xp]);
+       const vp = (0, Ep.D)(Up ? Wp : Pp, Dp.width, Dp.height, ip.maxHeight),
+ ... (47 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L765-L783` → after: `L2386-L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2386-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2386-L2393) · [Before (L765-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L765-L783)

```diff
-   },
-   36346: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => NC,
-       h: () => FC,
-       j: () => MC,
-       k: () => WC
-     });
-     var QC = ZC(326),
-       wC = ZC(622),
-       bC = ZC(630),
-       nC = ZC(38);
-     const fC = {
-         idStorageKey: "playSessionId",
-         lastActivityStorageKey: "playSessionLastActivityMs",
-         expiryMs: 3e5
- ... (3 more removed lines; see GitHub link above)
+     var Xc = cp(2537),
+       lc = cp(4496),
+       Qc = cp(2522),
+       Jc = cp(2476);
+     const Bc = pp => {
+       const ip = yi.p * ("sides" === pp ? window.innerWidth : window.innerHeight);
+       return Math.min(64, 2 * Math.floor(ip / 2))
+     };
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L785-L787` → after: `L2395-L2397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2395-L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2395-L2397) · [Before (L785-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L785-L787)

```diff
-     function FC() {
-       let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k;
-       (0, bC.g)(CC, fC)
+     function Nc(pp, ip, cp) {
+       const [Op, op, Ip, Sp] = pp;
+       return "sides" === ip ? [Op, cp, Ip, cp] : [cp, op, cp, Sp]
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L790-L791` → after: `L2402-L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2402-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2402-L2449) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L790-L791)

```diff
-     function WC() {
-       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k).setItem(qC, !0)
+     function bc(pp) {
+       let {
+         safe: ip,
+         onPreview: cp,
+         onCommit: Ip
+       } = pp;
+       const {
+         t: Sp
+       } = (0, Op.H)(), xp = (0, yi.x)(null !== ip && void 0 !== ip ? ip : Tc, window.innerWidth, window.innerHeight, si(document).map(Math.round)), Lp = (0, op.useRef)(null !== ip && void 0 !== ip ? ip : Tc);
+       Lp.current = null !== ip && void 0 !== ip ? ip : Tc;
+       const Dp = pp => {
+         const ip = Math.min(Bc(pp), "sides" === pp ? Math.max(xp[1], xp[3]) : Math.max(xp[0], xp[2]));
+         return (0, ep.jsx)(Wp.i, {
+           name: Sp("sides" === pp ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
+           min: 0,
+           max: Bc(pp),
+ ... (32 more added lines; see GitHub link above)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L795-L819` → after: `L2453-L2729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2453-L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2453-L2729) · [Before (L795-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L795-L819)

```diff
-       let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k;
-       return (0, bC.d)(CC, fC)
-     }
- 
-     function MC(CC) {
-       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nC.k;
-       const ZC = (0, bC.d)(zC, fC),
-         FC = function(CC) {
-           const zC = CC.getItem(oC);
-           return "string" !== typeof zC ? null : zC
-         }(zC),
-         WC = function() {
-           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k).getItem(qC)
-         }(zC);
-       let NC;
-       return NC = null !== ZC && null !== FC && (0, bC.f)(zC, fC) && function(CC, zC, ZC) {
- ... (9 more removed lines; see GitHub link above)
+       const {
+         t: pp
+       } = (0, Op.H)(), ip = (0, Xp.Z)(), {
+         clientEscMenuOptions: cp
+       } = (0, Dp.o)(["clientEscMenuOptions"]), Ip = (0, Xc.i)(), Sp = ip.hudLayouts[Ip], [xp, Lp] = (0, op.useState)(null), {
+         rowIconsOpen: Ap,
+         onRowIconsOpen: Pp,
+         select: yp
+       } = function(pp, ip) {
+         const [cp, Op] = (0, op.useState)((() => Xp.A.some((ip => void 0 !== pp.hudElements[ip] || pp.hudLocked.includes(ip))))), Ip = (0, op.useCallback)((pp => {
+           ip(pp), (0, Xp.K)(pp) && Op(!0)
+         }), [ip]);
+         return {
+           rowIconsOpen: cp,
+           onRowIconsOpen: Op,
+           select: Ip
+ ... (261 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L821-L844` → after: `L2731-L2835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2731-L2835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2731-L2835) · [Before (L821-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L821-L844)

```diff
-   },
-   36342: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => xC,
-       e: () => JC
-     });
-     var QC = ZC(970),
-       wC = ZC(191),
-       bC = ZC(318),
-       nC = ZC(603),
-       fC = ZC(326),
-       oC = ZC(977),
-       qC = ZC(615),
-       FC = ZC(644),
-       WC = ZC(4456),
-       NC = ZC(77),
- ... (8 more removed lines; see GitHub link above)
+     const ac = 350;
+     const nc = [function() {
+       const {
+         t: pp
+       } = (0, Op.H)(), [ip, cp] = (0, op.useState)(!1), Ip = (0, op.useRef)(null);
+       return (0, op.useEffect)((() => {
+         var pp;
+         ip && (null === (pp = Ip.current) || void 0 === pp || pp.scrollIntoView({
+           block: "start",
+           behavior: "smooth"
+         }))
+       }), [ip]), (0, ep.jsxs)("div", {
+         className: "HudLayoutSection",
+         children: [(0, ep.jsx)(qp.b, {
+           ref: Ip,
+           icon: "arrows-up-down-left-right",
+ ... (89 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L847-L848` → after: `L2838-L2840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2838-L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2838-L2840) · [Before (L847-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L847-L848)

```diff
-       var CC, zC;
-       return [...null !== (CC = navigator.languages) && void 0 !== CC ? CC : [null !== (zC = navigator.language) && void 0 !== zC ? zC : "none"], "en-gb"]
+       return (0, ep.jsx)(ep.Fragment, {
+         children: nc.map(((pp, ip) => (0, ep.jsx)(pp, {}, ip)))
+       })
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L851-L863` → after: `L2844-L2889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2844-L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2844-L2889) · [Before (L851-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L851-L863)

```diff
-     function JC(CC, zC, ZC, JC, IC) {
-       const iC = (0, QC.i)(zC) ? (0, QC.m)(zC) : null,
-         vC = CC.isLoggedIn() && void 0 !== (0, wC.d)(bC.l, MC.y) ? (0, RC.u)() : null,
-         eC = {
-           cookies: (0, gC.getAllCookiesForGameNameWithVariation)(zC),
-           isMobile: (0, NC.isMobile)(),
-           isUsingCustomGameTexturePack: null !== iC && IC(iC),
-           generalCookies: {
-             joinDiscord: !!PC.i.getItem("DiscordPressed"),
-             newGo: WC.d,
-             ...CC.getMetricsCookies(),
-             trafficCode: JC,
-             compliance: NC.compliance
+     function Gc() {
+       const {
+         t: pp
+       } = (0, Op.H)(), {
+         isTouchScreen: ip,
+         clientEscMenuOptions: cp,
+         gameState: Sp
+       } = (0, Dp.o)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), xp = (0, yp.i)("ezBridging"), Lp = (0, yp.i)("ezTowering"), wp = "inGame" !== Sp || !0 === xp, vp = (0, Up.h)(), Hp = null !== vp && ("inGame" !== Sp || !0 === Lp), [, dp] = (0, op.useReducer)((pp => pp  … [truncated]
+       return (0, ep.jsxs)("div", {
+         className: "SettingsMenuRightInner",
+         children: [jp && (0, ep.jsxs)("div", {
+           className: "SettingBox SettingBoxWithButton",
+           children: [(0, ep.jsx)("div", {
+             children: pp("controller:settingsControlsNote")
+           }), (0, ep.jsx)(Yp.S, {
+             onClick: () => {
+ ... (30 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L865-L871` → after: `L2891-L2898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2891-L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2891-L2898) · [Before (L865-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L865-L871)

```diff
-           browserInfo: {
-             ua: window.navigator.userAgent,
-             name: (0, NC.getBrowserName)(),
-             version: (0, NC.getBrowserVersion)(),
-             platform: navigator.platform,
-             platformType: (0, NC.getPlatformType)(),
-             deviceType: (0, SC.c)()
+           circleInfoText: pp("jump" === vp ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
+         }), (0, ep.jsx)(Wp.b, {
+           label: pp("settingsMenu:crouchToggle"),
+           checked: cp.crouchIsToggle,
+           onClick: pp => {
+             Dp.c.setClientEscMenuOptions({
+               crouchIsToggle: pp
+             })
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L873-L884` → after: `L2900-L2907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2900-L2907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2900-L2907) · [Before (L873-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L873-L884)

```diff
-           isLoggedIn: CC.isLoggedIn(),
-           lobbyName: ZC,
-           languages: xC(),
-           version: nC.e,
-           siteUsed: MC.y,
-           subsiteUsed: MC.H,
-           playSessionId: (0, pC.j)(zC),
-           visitSessionId: (0, GC.d)(),
-           clientReason: qC.r.reason,
-           budgetBasis: (0, AC.c)(),
-           ...null !== FC.n && {
-             diagClaim: FC.n.claimId
+           circleInfoText: pp("settingsMenu:crouchToggleInfo")
+         }), (0, ep.jsx)(Wp.b, {
+           label: pp("settingsMenu:hideUiToggle"),
+           checked: cp.hideUiIsToggle,
+           onClick: pp => {
+             Dp.c.setClientEscMenuOptions({
+               hideUiIsToggle: pp
+             })
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L886-L887` → after: `L2909-L2919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2909-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2909-L2919) · [Before (L886-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L886-L887)

```diff
-           ...null !== vC && {
-             webGpuLoss: vC
+           circleInfoText: pp("settingsMenu:hideUiToggleInfo")
+         }), "mouseOnly" !== (0, Pp.c)() && (0, ep.jsx)(Wp.i, {
+           name: pp("settingsMenu:touchscreenSensitivity"),
+           min: 1,
+           max: 900,
+           step: 1,
+           initValue: cp.touchscreenSensitivity,
+           onChange: pp => {
+             Dp.c.setClientEscMenuOptions({
+               touchscreenSensitivity: pp
+             })
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L889-L896` → after: `L2921-L2954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2921-L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2921-L2954) · [Before (L889-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L889-L896)

```diff
-         };
-       return null !== iC && (0, fC.qc)(iC) ? (eC.lobbyName = (0, QC.f)(iC, (0, QC.k)(zC), ZC), {
-         roomName: `classic_${oC.f}`,
-         joinOptions: eC
-       }) : {
-         roomName: zC,
-         joinOptions: eC
-       }
+         }), !(0, Ap.isMobile)() && (0, ep.jsx)(Wp.i, {
+           name: pp("settingsMenu:mouseSensitivity"),
+           min: 1,
+           max: 200,
+           step: 1,
+           initValue: cp.mouseSensitivity,
+           onChange: pp => {
+             Dp.c.setClientEscMenuOptions({
+               mouseSensitivity: pp
+             })
+           }
+         }), !(0, Ap.isMobile)() && (0, ep.jsxs)("div", {
+           className: "ControlsContainer",
+           children: [(0, ep.jsx)("div", {
+             className: "SliderText",
+             children: pp("settingsMenu:keyBindings")
+ ... (18 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L913-L923` → after: `L2958-L2985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2958-L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2958-L2985) · [Before (L913-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L913-L923)

```diff
-       const zC = CC.endsWith(QC.k);
-       return {
-         text: (zC ? CC.slice(0, -QC.k.length) : CC) || null,
-         dropsCache: zC
-       }
-     }
-     const fC = "Either your internet isn't working or this is a bug.";
- 
-     function oC(CC, zC) {
-       const ZC = FC(CC);
-       return null !== ZC.name && "" === QC.e[ZC.name].text && null !== zC ? zC : ZC.reason
+       let {
+         title: ip,
+         defaultOpen: cp,
+         children: Op
+       } = pp;
+       const [Ip, Sp] = (0, op.useState)(cp);
+       return (0, ep.jsxs)("div", {
+         className: Lp()("ControlsSection", {
+           Collapsed: !Ip
+         }),
+         children: [(0, ep.jsxs)("div", {
+           className: "ControlsSectionHeader",
+           "data-pad-focusable": !0,
+           onClick: () => {
+             Sp(!Ip)
+           },
+ ... (12 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L928-L938` → after: `L2989-L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2989-L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2989-L2994) · [Before (L928-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L928-L938)

```diff
-       var zC;
-       let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       const wC = null !== (zC = Object.keys(QC.e).find((zC => QC.e[zC].code === CC))) && void 0 !== zC ? zC : null;
-       if (null === wC) return {
-         code: CC,
-         name: wC,
-         reason: null !== ZC && void 0 !== ZC ? ZC : `${fC}\nCode: ${CC}`,
-         canReconnect: !1,
-         automaticallyReconnect: !1,
-         requiresRefresh: !1
-       };
+       let {
+         noaAction: ip,
+         forceUpdate: cp,
+         clashesWith: xp,
+         showPadGlyph: Dp
+       } = pp;
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L940-L949` → after: `L2996-L3011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L2996-L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L2996-L3011) · [Before (L940-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L940-L949)

```diff
-         text: bC,
-         canReconnect: nC = !1
-       } = QC.e[wC], oC = CC === QC.e.outdatedVersion.code || CC === QC.e.loadRecaptchaError.code;
-       return {
-         code: CC,
-         name: wC,
-         reason: "" !== bC ? bC : null !== ZC && void 0 !== ZC ? ZC : CC === QC.e.gameOrPluginKick.code ? qC : `Code: ${CC}`,
-         canReconnect: nC,
-         automaticallyReconnect: CC === QC.e.customGameUpdated.code || CC === QC.e.duplicateLobbyNameError.code,
-         requiresRefresh: oC
+         t: Ap
+       } = (0, Op.H)(), Pp = (0, vp.d)(ip), [Wp, yp] = (0, op.useState)(!1), [Up, tp] = (0, op.useState)("controls:clickToEnterNewBinding"), [Hp, dp] = (0, op.useState)(null), [jp, kp] = (0, op.useState)(null), mp = (0, op.useRef)(null);
+       (0, op.useEffect)((() => {
+         Wp && mp.current && mp.current.focus()
+       }), [Wp]);
+       const Rp = Ip.t[ip].filter((pp => Sp.j[pp]));
+       let qp = null;
+       const Mp = [],
+         Cp = xp.flatMap((pp => {
+           var ip, cp;
+           return null !== (ip = null === (cp = Ip.d.find((ip => ip.id === pp))) || void 0 === cp ? void 0 : cp.actions) && void 0 !== ip ? ip : []
+         }));
+       for (const Op of Cp) {
+         if (Op === ip) continue;
+         const pp = Ip.t[Op];
+         for (const ip of pp) Rp.includes(ip) && Mp.push(Ap(Ip.v[Op].translationKey, Ip.v[Op].params))
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L953` → after: `L3114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R3114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L3114) · [Before (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L953)

```diff
-   36725: (CC, zC, ZC) => {
+   9006: (pp, ip, cp) => {
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L955` → after: `L3116-L3157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R3116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L3116-L3157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L3116-L3157) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L955)

```diff
-       d: () => wC,
+       b: () => Sp
+     });
+     var Op = cp(62),
+       op = cp(1060),
+       Ip = cp(1112);
+     const Sp = (0, Op.forwardRef)((function(pp, ip) {
+       let {
+         icon: cp,
+         title: Op,
+         sub: Sp,
+         expanded: xp,
+         onClick: Lp
+       } = pp;
+       return (0, Ip.jsxs)("button", {
+         ref: ip,
+         type: "button",
+ ... (26 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L958-L963` → after: `L3160-L3161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R3160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L3160-L3161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L3160-L3161) · [Before (L958-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L958-L963)

```diff
-       m: () => fC,
-       q: () => oC,
-       u: () => qC,
-       v: () => WC,
-       y: () => FC,
-       z: () => nC
+       k: () => Hp,
+       o: () => Pp
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L965-L980` → after: `L3163-L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R3163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L3163-L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L3163-L3197) · [Before (L965-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L965-L980)

```diff
-     var QC = ZC(1183);
-     let wC = function(CC) {
-         return CC[CC.Join = 0] = "Join", CC[CC.Leave = 1] = "Leave", CC[CC.Push = 2] = "Push", CC[CC.Cursor = 3] = "Cursor", CC[CC.Submit = 4] = "Submit", CC[CC.ReloadAsVariation = 5] = "ReloadAsVariation", CC[CC.CreateFile = 6] = "CreateFile", CC[CC.RenameFile = 7] = "RenameFile … [truncated]
-       }({}),
-       bC = function(CC) {
-         return CC[CC.Joined = 0] = "Joined", CC[CC.Updates = 1] = "Updates", CC[CC.Presence = 2] = "Presence", CC[CC.RemoteCursor = 3] = "RemoteCursor", CC[CC.ForceClose = 4] = "ForceClose", CC[CC.LobbyFilesChanged = 5] = "LobbyFilesChanged", CC[CC.EngineSettings = 6] = "EngineSe … [truncated]
-       }({});
- 
-     function nC(CC) {
-       return "lobby" === CC.kind ? `lobby:${CC.path}` : `codeBlock:${CC.pos[0]},${CC.pos[1]},${CC.pos[2]}`
-     }
- 
-     function fC(CC) {
-       if ("lobby" === CC) return {
-         kind: "lobby",
-         path: QC.k
+     var Op = cp(1677),
+       op = cp(1770);
+     const Ip = pp => pp >= 56320 && pp <= 57343,
+       Sp = pp => pp >= 55296 && pp <= 56319,
+       xp = (pp, ip) => ip >= 2 && Ip(pp.charCodeAt(ip - 1)) && Sp(pp.charCodeAt(ip - 2)) ? ip - 2 : Math.max(0, ip - 1),
+       Lp = (pp, ip) => {
+         let cp;
+         var Op, op;
+         return cp = pp.start !== pp.end ? ip < 0 ? pp.start : pp.end : ip < 0 ? xp(pp.value, pp.start) : (Op = pp.value, (op = pp.start) + 1 < Op.length && Sp(Op.charCodeAt(op)) && Ip(Op.charCodeAt(op + 1)) ? op + 2 : Math.min(Op.length, op + 1)), {
+           value: pp.value,
+           start: cp,
+           end: cp
+         }
+       },
+       Yp = ["text", "search", "url", "email", "tel", "password", "number"],
+       Dp = pp => !(!(0, op.b)(pp) || pp.isContentEditable || pp.hasAttribute("data-pad-no-osk")) && (pp instanceof HTMLTextAreaElement || pp instanceof HTMLInputElement && Yp.includes(pp.type)),
+ ... (19 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L982-L987` → after: `L3199-L3233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R3199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L3199-L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L3199-L3233) · [Before (L982-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L982-L987)

```diff
-       if (CC.startsWith("lobby:")) {
-         const zC = CC.slice(6);
-         return WC(zC) ? {
-           kind: "lobby",
-           path: zC
-         } : null
+     let yp = !1;
+     const Up = (pp, ip) => !!document.execCommand(pp, !1, ip) || (yp || (yp = !0, console.warn(`execCommand("${pp}") failed; the on-screen keyboard is setting the value directly`)), !1),
+       wp = (pp, ip) => {
+         Up("insertText", ip) || Wp(pp, function(pp, ip) {
+           let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
+           const Op = pp.value.slice(0, pp.start),
+             op = pp.value.slice(pp.end);
+           let Ip = cp < 0 ? ip.length : Math.max(0, cp - Op.length - op.length);
+           Ip > 0 && Ip < ip.length && Sp(ip.charCodeAt(Ip - 1)) && Ip--;
+           const xp = ip.slice(0, Ip),
+             Lp = Op.length + xp.length;
+           return {
+             value: Op + xp + op,
+             start: Lp,
+             end: Lp
+           }
+ ... (19 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L1019-L1026` → after: `L3236-L3252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R3236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L3236-L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L3236-L3252) · [Before (L1019-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L1019-L1026)

```diff
-   38815: (CC, zC, ZC) => {
-     function QC(CC, zC, ZC, QC, wC) {
-       var bC = {};
-       return Object.keys(QC).forEach((function(CC) {
-         bC[CC] = QC[CC]
-       })), bC.enumerable = !!bC.enumerable, bC.configurable = !!bC.configurable, ("value" in bC || bC.initializer) && (bC.writable = !0), bC = ZC.slice().reverse().reduce((function(ZC, QC) {
-         return QC(CC, zC, ZC) || ZC
-       }), bC), wC && void 0 !== bC.initializer && (bC.value = bC.initializer ? bC.initializer.call(wC) : void 0, bC.initializer = void 0), void 0 === bC.initializer && (Object.defineProperty(CC, zC, bC), bC = null), bC
+   8967: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => xp
+     });
+     var Op = cp(25),
+       op = cp(2169),
+       Ip = cp(1372),
+       Sp = cp(1419);
+     const xp = async () => {
+       if ((0, Sp.h)()) {
+         if (!0 !== await Ip.NotificationProvider.showPromptPopup({
+             title: "controller:menusLeaveGameTitle",
+             confirmText: "controller:menusLeaveGameLeave",
+             cancelText: "controller:menusLeaveGameStay",
+             destructive: !0
+           }).getResult() || "inGame" !== Op.c.get("gameState")) return
+ ... (1 more added lines; see GitHub link above)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L1029-L1030` → after: `L3257-L3273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R3257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L3257-L3273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L3257-L3273) · [Before (L1029-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L1029-L1030)

```diff
-       d: () => QC
-     })
+       c: () => Lp,
+       e: () => Ip,
+       f: () => Sp,
+       i: () => op,
+       k: () => xp
+     });
+     var Op = cp(1989);
+     const op = "controllerPadShopOpen",
+       Ip = pp => Op.g.includes(pp),
+       Sp = pp => Object.values(pp).some((pp => !1 !== pp.canBuy && !pp.isRewardedAd)),
+       xp = (pp, ip, cp) => {
+         var Op, op, Sp, xp;
+         const Lp = pp.filter((pp => !Ip(pp))),
+           Yp = null !== ip && pp.includes(ip) ? ip : null;
+         return null !== Yp && !Ip(Yp) && cp(Yp) ? Yp : null !== (Op = null !== (op = null !== (Sp = null !== (xp = Lp.find(cp)) && void 0 !== xp ? xp : Lp[0]) && void 0 !== Sp ? Sp : Yp) && void 0 !== op ? op : pp[0]) && void 0 !== Op ? Op : null
+       },
+ ... (1 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L1032-L1040` → after: `L3275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R3275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L3275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L3275) · [Before (L1032-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L1032-L1040)

```diff
-   38813: (CC, zC, ZC) => {
-     function QC(CC, zC, ZC, QC) {
-       ZC && Object.defineProperty(CC, zC, {
-         enumerable: ZC.enumerable,
-         configurable: ZC.configurable,
-         writable: ZC.writable,
-         value: ZC.initializer ? ZC.initializer.call(QC) : void 0
-       })
-     }
+   8995: (pp, ip, cp) => {
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L1042-L1043` → after: `L3277-L3520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R3277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L3277-L3520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/158.js#L3277-L3520) · [Before (L1042-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/158.js#L1042-L1043)

```diff
-       b: () => QC
-     })
+       d: () => Yp,
+       f: () => Dp
+     });
+     var Op = cp(62),
+       op = cp(1476),
+       Ip = cp(2048),
+       Sp = cp(1432),
+       xp = cp(1462),
+       Lp = cp(1112);
+     const Yp = () => {
+         const pp = (0, Sp.s)();
+         if ((0, Op.useEffect)((() => {
+             (0, Sp.j)()
+           }), []), !pp) return null;
+         const {
+           ControllerCategory: ip
+ ... (228 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/159.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/159.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131)

#### 1. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L4` → after: `L4-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L4-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/159.js#L4-L169) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/159.js#L4)

```diff
-   8918: (CC, zC, ZC) => {
+   36804: (pp, ip, cp) => {
+     cp.d(ip, {
+       A: () => yp,
+       E: () => tp,
+       b: () => Ip,
+       d: () => Up,
+       f: () => wp,
+       j: () => xp,
+       n: () => Pp,
+       q: () => vp,
+       u: () => Ap,
+       w: () => Hp
+     });
+     var Op = cp(25),
+       op = cp(34);
+     const Ip = "clientGameInventoryButtonsChanged",
+ ... (150 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L6-L42` → after: `L171-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L171-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/159.js#L171-L206) · [Before (L6-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/159.js#L6-L42)

```diff
-       pageBody: () => QC
-     });
-     const QC = {
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
+       getClientGameMapKey: () => Op.o,
+       shopIsEmpty: () => op.b
+     });
+     var Op = cp(36799),
+       op = cp(8895)
+   },
+   8897: (pp, ip, cp) => {
+     function Op(pp, ip) {
+       return !pp.hidden && (ip || !pp.isRewardedAd)
+     }
+ 
+     function op(pp) {
+       return "object" === typeof pp ? pp.option : pp
+     }
+ 
+     function Ip(pp, ip) {
+ ... (20 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/160.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/160.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L4` → after: `L4-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/160.js#L4-L199) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/160.js#L4)

```diff
-   8923: (CC, zC, ZC) => {
+   39261: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Ip,
+       e: () => Sp
+     });
+     var Op = cp(34);
+     let op = !1;
+ 
+     function Ip() {
+       return op
+     }
+ 
+     function Sp(pp) {
+       op !== pp && (op = pp, Op.m.GA("replayViewer|videoExportChanged"))
+     }
+   },
+ ... (180 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L6-L7` → after: `L201-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L201-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/160.js#L201-L556) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/160.js#L6-L7)

```diff
-       pageBody: () => QC
-     });
+       LOOK_DEBUG_HEADER: () => Dp,
+       endLookDebugTake: () => vp,
+       noteLookDroppedCopy: () => tp,
+       saveLookCapture: () => Hp,
+       startLookDebug: () => wp
+     });
+     var Op = cp(4911),
+       op = cp(2908),
+       Ip = cp(1927);
+     const Sp = new Map(Object.entries(Op.h).map((pp => {
+       let [ip, cp] = pp;
+       return [cp, ip]
+     })));
+ 
+     function xp(pp) {
+       return (0, Ip.C)(pp).toFixed(1)
+ ... (340 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L9-L32` → after: `L558-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L558-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/160.js#L558-L845) · [Before (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/160.js#L9-L32)

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
- ... (8 more removed lines; see GitHub link above)
+         seat: "seat_timeout",
+         socket_unopened: "socket_timeout_unopened",
+         socket: "socket_timeout"
+       },
+       xp = {
+         seat: "seat_lost",
+         socket_unopened: "socket_unopened",
+         socket: "socket_closed"
+       };
+ 
+     function Lp(pp, ip) {
+       if (pp instanceof op.f) return {
+         at: Sp[ip],
+         code: 0
+       };
+       const cp = (0, Op.f)(pp),
+ ... (272 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/161.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/161.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/161.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/161.js#L4)

```diff
-   8927: (CC, zC, ZC) => {
+   9062: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/161.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/161.js#L9-L13)

```diff
-       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
-       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
-       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
-       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
+       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
+       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
+       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
+       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
+       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/161.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/161.js#L15-L16)

```diff
-         question: "What is Bloxd Skywars?",
-         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
+         question: "What is Bedwars?",
+         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/161.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/161.js#L18-L19)

```diff
-         question: "How do you win in Skywars?",
-         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
+         question: "How do you win Bedwars?",
+         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/161.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/161.js#L21-L22)

```diff
-         question: "Can I play Skywars in my browser?",
-         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
+         question: "What happens after your bed is destroyed?",
+         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/161.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/161.js#L24-L25)

```diff
-         question: "What are the best Skywars kits?",
-         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
+         question: "What do the Bedwars generators do?",
+         answer: "Your island's generators drop Coal, Iron Bars and Diamond for items and upgrades. The generators in the centre drop Diamond and Moonstone for the most powerful items."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/161.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/161.js#L27-L28)

```diff
-         question: "What do perks do in Bloxd Skywars?",
-         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
+         question: "What modes can I play in Bloxd Bedwars?",
+         answer: "Solos, Duos, Trios, 4v4, 4v4v4v4 and 1v1. There's also a Ranked Bedwars lobby if you want to climb the leaderboards."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/161.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/161.js#L30-L31)

```diff
-         question: "How do I get Gold in Skywars?",
-         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
+         question: "What are match modifiers?",
+         answer: "Some matches add a twist. In Supercharged, every generator starts at Level 2. In Boom, explosives are half price. Weapon Roulette gives you a new random weapon every respawn, and in Specialists you pick a role with special perks."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/161.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/161.js#L33-L34)

```diff
-         question: "How many players fit in one Skywars match?",
-         answer: "Up to 12 players fight it out in each free-for-all match."
+         question: "Can I attack my teammates?",
+         answer: "No, you can't attack players on your own team."
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L36-L37` → after: `L36-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/161.js#L36-L40) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/161.js#L36-L37)

```diff
-         question: "What does the compass do in Skywars?",
-         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
+         question: "How many Bedwars maps are there?",
+         answer: "Dozens, including Scary Hollow, Wood Factory, Ahoy!, Colosseum and Rooftops."
+       }, {
+         question: "What's the difference between Bedwars and Lucky Bedwars?",
+         answer: "In Bedwars you collect Coal, Iron Bars, Diamond and Moonstone from generators and choose what to buy. Lucky Bedwars hands out gear through Lucky Blocks instead, so no two matches play out the same."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/162.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/162.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567)

#### 1. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/162.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/162.js#L4)

```diff
-   8929: (CC, zC, ZC) => {
+   9069: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/162.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/162.js#L9-L13)

```diff
-       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
-       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
-       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
-       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
-       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
+       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
+       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
+       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
+       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skywars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/162.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/162.js#L15-L16)

```diff
-         question: "What is Lucky Towers?",
-         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
+         question: "What is Bloxd Lucky Bedwars?",
+         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/162.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/162.js#L18-L19)

```diff
-         question: "How do you win in Bloxd Lucky Towers?",
-         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
+         question: "How do you play Lucky Bedwars?",
+         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/162.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/162.js#L21-L22)

```diff
-         question: "How often do you get items in Lucky Towers?",
-         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
+         question: "How is Lucky Bedwars different from normal Bedwars?",
+         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/162.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/162.js#L24-L25)

```diff
-         question: "What items can you get in Lucky Towers?",
-         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
+         question: "What are Clovers in Lucky Bedwars?",
+         answer: "Clovers are the in-game currency. Earn them by opening Lucky Blocks, getting kills, breaking beds, recycling loot and surviving events. Spend them at the Lucky Trader or on team upgrades."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/162.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/162.js#L27-L28)

```diff
-         question: "Which random events can happen in Lucky Towers?",
-         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
+         question: "What's inside Evil Lucky Blocks?",
+         answer: "Bad luck! The Bed Trap upgrade puts Evil Lucky Blocks around your bed. Anyone who opens one could get trapped in obsidian, dropped in lava, webbed, poisoned, blinded, chased by guard dogs or sent home."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/162.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/162.js#L30-L34)

```diff
-         question: "Which maps are in Lucky Towers?",
-         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
-       }, {
-         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
-         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
+         question: "What are the Lucky Bedwars events?",
+         answer: "Twice a match a random event starts: Blood Moon, Lucky Crown, Masquerade, Simon Says, Lucky Storm or Tiny Titans. You get a 30-second warning, and beds can't be broken while an event runs."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/163.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/163.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/163.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/163.js#L4)

```diff
-   8935: (CC, zC, ZC) => {
+   9072: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/163.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/163.js#L9-L13)

```diff
-       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
-       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
-       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
-       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
-       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
+       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
+       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
+       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
+       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/163.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/163.js#L15-L16)

```diff
-         question: "What is Lucky Blocks Battlegrounds?",
-         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
+         question: "What is Bloxd Skywars?",
+         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/163.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/163.js#L18-L19)

```diff
-         question: "How do you win Lucky Blocks Battlegrounds?",
-         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
+         question: "How do you win in Skywars?",
+         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/163.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/163.js#L21-L22)

```diff
-         question: "How do I get Lucky Blocks?",
-         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
+         question: "Can I play Skywars in my browser?",
+         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/163.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/163.js#L24-L25)

```diff
-         question: "What is the Ultra Lucky Block?",
-         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
+         question: "What are the best Skywars kits?",
+         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/163.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/163.js#L27-L28)

```diff
-         question: "What's inside Bloxd lucky blocks?",
-         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
+         question: "What do perks do in Bloxd Skywars?",
+         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/163.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/163.js#L30-L31)

```diff
-         question: "Can other players attack me in my base?",
-         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
+         question: "How do I get Gold in Skywars?",
+         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L33-L34` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/163.js#L33-L37) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/163.js#L33-L34)

```diff
-         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
-         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
+         question: "How many players fit in one Skywars match?",
+         answer: "Up to 12 players fight it out in each free-for-all match."
+       }, {
+         question: "What does the compass do in Skywars?",
+         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/164.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/164.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/164.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/164.js#L4)

```diff
-   8943: (CC, zC, ZC) => {
+   9079: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/164.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/164.js#L9-L13)

```diff
-       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
-       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
-       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
-       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
-       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
+       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
+       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
+       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
+       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
+       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/164.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/164.js#L15-L16)

```diff
-         question: "What is Bloxd Survival?",
-         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
+         question: "What is Lucky Towers?",
+         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/164.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/164.js#L18-L19)

```diff
-         question: "How do I protect my base in Bloxd Survival?",
-         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
+         question: "How do you win in Bloxd Lucky Towers?",
+         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/164.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/164.js#L21-L22)

```diff
-         question: "Why did my build disappear?",
-         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
+         question: "How often do you get items in Lucky Towers?",
+         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/164.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/164.js#L24-L25)

```diff
-         question: "Is stealing and griefing allowed in Bloxd Survival?",
-         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
+         question: "What items can you get in Lucky Towers?",
+         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/164.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/164.js#L27-L28)

```diff
-         question: "Can I make a private server in Bloxd Survival?",
-         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
+         question: "Which random events can happen in Lucky Towers?",
+         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/164.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/164.js#L30-L31)

```diff
-         question: "What happens if I log out during a fight?",
-         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
+         question: "Which maps are in Lucky Towers?",
+         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/164.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/164.js#L33-L37)

```diff
-         question: "Will my world still be there tomorrow?",
-         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
-       }, {
-         question: "Which Bloxd survival mode should I play?",
-         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
+         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
+         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/165.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/165.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/165.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/165.js#L4)

```diff
-   8949: (CC, zC, ZC) => {
+   9081: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/165.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/165.js#L9-L13)

```diff
-       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
-       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
-       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
-       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
-       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
+       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
+       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
+       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
+       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
+       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/165.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/165.js#L15-L16)

```diff
-         question: "What is Bloxd Peaceful?",
-         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
+         question: "What is Lucky Blocks Battlegrounds?",
+         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/165.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/165.js#L18-L19)

```diff
-         question: "Can you die in Bloxd Peaceful?",
-         answer: "No. There's no health bar, so mobs and other players can't hurt you."
+         question: "How do you win Lucky Blocks Battlegrounds?",
+         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/165.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/165.js#L21-L22)

```diff
-         question: "Is there PvP in Bloxd Peaceful?",
-         answer: "There isn't. Players can't attack each other in Peaceful."
+         question: "How do I get Lucky Blocks?",
+         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/165.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/165.js#L24-L25)

```diff
-         question: "Are there mobs in Bloxd Peaceful?",
-         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
+         question: "What is the Ultra Lucky Block?",
+         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/165.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/165.js#L27-L28)

```diff
-         question: "What's the difference between Peaceful and Survival in Bloxd?",
-         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
+         question: "What's inside Bloxd lucky blocks?",
+         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/165.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/165.js#L30-L31)

```diff
-         question: "Is Bloxd Peaceful good for beginners?",
-         answer: "Definitely. It's a safe place to learn the basics. If you die early on in Survival, the game will even offer to move you over to Peaceful."
+         question: "Can other players attack me in my base?",
+         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L33-L40` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/165.js#L33-L34) · [Before (L33-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/165.js#L33-L40)

```diff
-         question: "Can I play Bloxd Peaceful with friends?",
-         answer: "Yes. Everyone's in the same shared world, so you can meet up and build together."
-       }, {
-         question: "How do I keep my builds safe in Peaceful?",
-         answer: "Blocks near spawn reset every few hours, so build outside that area (a message shows when you cross its edge). Then put down a Protector and other players won't be able to break your builds or open your chests."
-       }, {
-         question: "How do I save my progress in Bloxd Peaceful?",
-         answer: "Sign in to an account. If you don't, your progress can be lost when your browser's cookies get cleared."
+         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
+         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/166.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/166.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172)

#### 1. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/166.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/166.js#L4)

```diff
-   8952: (CC, zC, ZC) => {
+   9090: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/166.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/166.js#L9-L13)

```diff
-       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
-       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
-       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
-       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
-       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
+       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
+       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
+       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
+       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
+       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/166.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/166.js#L15-L16)

```diff
-         question: "What is Bloxd Day and Night Survival?",
-         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
+         question: "What is Bloxd Survival?",
+         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/166.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/166.js#L18-L19)

```diff
-         question: "How do I stop monsters spawning near my base in Bloxd?",
-         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
+         question: "How do I protect my base in Bloxd Survival?",
+         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/166.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/166.js#L21-L22)

```diff
-         question: "How do I skip the night in Day & Night Survival?",
-         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
+         question: "Why did my build disappear?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/166.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/166.js#L24-L25)

```diff
-         question: "What happens to monsters when the sun comes up?",
-         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
+         question: "Is stealing and griefing allowed in Bloxd Survival?",
+         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/166.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/166.js#L27-L28)

```diff
-         question: "How are Days Survived counted?",
-         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
+         question: "Can I make a private server in Bloxd Survival?",
+         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/166.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/166.js#L30-L31)

```diff
-         question: "Can I change the day and night settings on my own server?",
-         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
+         question: "What happens if I log out during a fight?",
+         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
+       }, {
+         question: "Will my world still be there tomorrow?",
+         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
+       }, {
+         question: "Which Bloxd survival mode should I play?",
+         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/167.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/167.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73)

#### 1. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/167.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/167.js#L4)

```diff
-   8956: (CC, zC, ZC) => {
+   9096: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/167.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/167.js#L9-L13)

```diff
-       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
-       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
-       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
-       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
-       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
+       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
+       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
+       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
+       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
+       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/167.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/167.js#L15-L16)

```diff
-         question: "What is Bloxd Survival with Guns?",
-         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
+         question: "What is Bloxd Peaceful?",
+         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/167.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/167.js#L18-L19)

```diff
-         question: "How do you make a gun in Bloxd Survival with Guns?",
-         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
+         question: "Can you die in Bloxd Peaceful?",
+         answer: "No. There's no health bar, so mobs and other players can't hurt you."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/167.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/167.js#L21-L22)

```diff
-         question: "How many guns are there in Survival with Guns?",
-         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
+         question: "Is there PvP in Bloxd Peaceful?",
+         answer: "There isn't. Players can't attack each other in Peaceful."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/167.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/167.js#L24-L25)

```diff
-         question: "Do mobs carry guns in Bloxd?",
-         answer: "They do. Each type of hostile mob carries its own guns. Draugr Skeletons have AK-47s and MP40s, for example, and Magma Golems carry a Minigun."
+         question: "Are there mobs in Bloxd Peaceful?",
+         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/167.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/167.js#L27-L28)

```diff
-         question: "Can my pets use guns?",
-         answer: "Yes. Tamed pets get guns and fight by your side. They won't hurt you or your other pets."
+         question: "What's the difference between Peaceful and Survival in Bloxd?",
+         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/167.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/167.js#L30-L31)

```diff
-         question: "Can I turn guns on in a private server?",
-         answer: "Yes. Private servers have a setting that turns on gun crafting and using. When it's on, mobs and pets get guns too."
+         question: "Is Bloxd Peaceful good for beginners?",
+         answer: "Definitely. It's a safe place to learn the basics. If you die early on in Survival, the game will even offer to move you over to Peaceful."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L33-L34` → after: `L33-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L33-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/167.js#L33-L40) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/167.js#L33-L34)

```diff
-         question: "How is Survival with Guns different from regular Survival?",
-         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
+         question: "Can I play Bloxd Peaceful with friends?",
+         answer: "Yes. Everyone's in the same shared world, so you can meet up and build together."
+       }, {
+         question: "How do I keep my builds safe in Peaceful?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area (a message shows when you cross its edge). Then put down a Protector and other players won't be able to break your builds or open your chests."
+       }, {
+         question: "How do I save my progress in Bloxd Peaceful?",
+         answer: "Sign in to an account. If you don't, your progress can be lost when your browser's cookies get cleared."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/168.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/168.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/168.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/168.js#L4)

```diff
-   8962: (CC, zC, ZC) => {
+   9101: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/168.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/168.js#L9-L13)

```diff
-       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
-       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
-       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
-       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
-       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
+       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
+       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
+       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
+       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
+       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/168.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/168.js#L15-L16)

```diff
-         question: "What is Bloxd Creative?",
-         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
+         question: "What is Bloxd Day and Night Survival?",
+         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/168.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/168.js#L18-L19)

```diff
-         question: "Can you fly in Bloxd Creative?",
-         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
+         question: "How do I stop monsters spawning near my base in Bloxd?",
+         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/168.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/168.js#L21-L22)

```diff
-         question: "What is Superflat in Bloxd?",
-         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
+         question: "How do I skip the night in Day & Night Survival?",
+         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/168.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/168.js#L24-L25)

```diff
-         question: "How do I make a free build server in Bloxd?",
-         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
+         question: "What happens to monsters when the sun comes up?",
+         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/168.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/168.js#L27-L28)

```diff
-         question: "Can you use TNT in Bloxd Creative?",
-         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
+         question: "How are Days Survived counted?",
+         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/168.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/168.js#L30-L34)

```diff
-         question: "Why did my build disappear in Bloxd Creative?",
-         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
-       }, {
-         question: "What's the difference between Creative and Plots?",
-         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
+         question: "Can I change the day and night settings on my own server?",
+         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/169.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/169.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/169.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/169.js#L4)

```diff
-   8969: (CC, zC, ZC) => {
+   9110: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/169.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/169.js#L9-L13)

```diff
-       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
-       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
-       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
-       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
-       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
+       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
+       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
+       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
+       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
+       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/169.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/169.js#L15-L16)

```diff
-         question: "What is Bloxd Plots?",
-         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
+         question: "What is Bloxd Survival with Guns?",
+         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/169.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/169.js#L18-L19)

```diff
-         question: "How do I save my plot in Bloxd Plots?",
-         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
+         question: "How do you make a gun in Bloxd Survival with Guns?",
+         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/169.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/169.js#L21-L22)

```diff
-         question: "How do I build with friends in Bloxd Plots?",
-         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
+         question: "How many guns are there in Survival with Guns?",
+         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/169.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/169.js#L24-L25)

```diff
-         question: "Can other players break my build?",
-         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
+         question: "Do mobs carry guns in Bloxd?",
+         answer: "They do. Each type of hostile mob carries its own guns. Draugr Skeletons have AK-47s and MP40s, for example, and Magma Golems carry a Minigun."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/169.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/169.js#L27-L28)

```diff
-         question: "How big is a plot in Bloxd Plots?",
-         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
+         question: "Can my pets use guns?",
+         answer: "Yes. Tamed pets get guns and fight by your side. They won't hurt you or your other pets."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/169.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/169.js#L30-L31)

```diff
-         question: "How many plots can one player own?",
-         answer: "Up to 5 each."
+         question: "Can I turn guns on in a private server?",
+         answer: "Yes. Private servers have a setting that turns on gun crafting and using. When it's on, mobs and pets get guns too."
+       }, {
+         question: "How is Survival with Guns different from regular Survival?",
+         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/170.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/170.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/170.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/170.js#L4)

```diff
-   8974: (CC, zC, ZC) => {
+   9114: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/170.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/170.js#L9-L13)

```diff
-       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
-       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
-       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
-       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
-       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
+       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
+       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
+       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
+       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
+       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/170.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/170.js#L15-L16)

```diff
-         question: "What is Bloxd Skyblock?",
-         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
+         question: "What is Bloxd Creative?",
+         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/170.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/170.js#L18-L19)

```diff
-         question: "How do you play Bloxd Skyblock?",
-         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
+         question: "Can you fly in Bloxd Creative?",
+         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/170.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/170.js#L21-L22)

```diff
-         question: "What skills are in Bloxd Skyblock?",
-         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
+         question: "What is Superflat in Bloxd?",
+         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/170.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/170.js#L24-L25)

```diff
-         question: "What are the Dungeons in Bloxd Skyblock?",
-         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
+         question: "How do I make a free build server in Bloxd?",
+         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/170.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/170.js#L27-L28)

```diff
-         question: "How do I trade in Bloxd Skyblock?",
-         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
+         question: "Can you use TNT in Bloxd Creative?",
+         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/170.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/170.js#L30-L31)

```diff
-         question: "Can I visit other players' islands?",
-         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
+         question: "Why did my build disappear in Bloxd Creative?",
+         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/170.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/170.js#L33-L37)

```diff
-         question: "What happened at Cragrock Mines?",
-         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
-       }, {
-         question: "Does my island save between sessions?",
-         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
+         question: "What's the difference between Creative and Plots?",
+         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/171.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/171.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/171.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/171.js#L4)

```diff
-   8981: (CC, zC, ZC) => {
+   9118: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/171.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/171.js#L9-L13)

```diff
-       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
-       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
-       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
-       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
-       similarGames: ["skyblock", "skyIslands", "classic_survival"],
+       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
+       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
+       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
+       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
+       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/171.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/171.js#L15-L16)

```diff
-         question: "What is Bloxd One Block?",
-         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
+         question: "What is Bloxd Plots?",
+         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/171.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/171.js#L18-L19)

```diff
-         question: "Is Bloxd One Block a skyblock game?",
-         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
+         question: "How do I save my plot in Bloxd Plots?",
+         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/171.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/171.js#L21-L22)

```diff
-         question: "How many phases are in Bloxd One Block?",
-         answer: "17, from Forest and Plains through Ocean, Desert and Dungeon to the Volcano and the Moon. Mine enough blocks to unlock each one. When you've got them all, you can change phase."
+         question: "How do I build with friends in Bloxd Plots?",
+         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/171.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/171.js#L24-L25)

```diff
-         question: "How do I get to the Hub in One Block?",
-         answer: "Grab 3 Gold Coins from chests, bridge over to the portal island nearby and walk into your portal. Type /home to come back."
+         question: "Can other players break my build?",
+         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/171.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/171.js#L27-L28)

```diff
-         question: "Where do One Block coins come from?",
-         answer: "Chests from your One Block and the Hub treasure chests, daily and weekly quests, or watching an ad for coins."
+         question: "How big is a plot in Bloxd Plots?",
+         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/171.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/171.js#L30-L34)

```diff
-         question: "How do I open my portal in One Block?",
-         answer: "Type /open in chat. You can also add visitors in your island access settings, even if your portal is closed."
-       }, {
-         question: "Can I have more than one island?",
-         answer: "Yes. The Island Manager lets you create new islands, rename them, load another save or delete one, up to a maximum number of islands."
+         question: "How many plots can one player own?",
+         answer: "Up to 5 each."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/172.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/172.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049)

#### 1. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/172.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/172.js#L4)

```diff
-   8986: (CC, zC, ZC) => {
+   9123: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/172.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/172.js#L9-L13)

```diff
-       whatIs: ["Claim an island, grab the loot and fight for every diamond you can get. Bloxd Sky Islands is a scored PvP match across floating islands, where you explore, mine resources and battle for diamonds and glory. Each phase brings better loot, and whoever has the highest … [truncated]
-       howToPlay: ["Place your Protector on an island to claim it. Other players can't change blocks or open chests there, and you'll always respawn on it. You only get one island at a time, but you can release it and claim another later. Then off you go to explore, mine and grab  … [truncated]
-       features: ["Solo, Teams, Blitz and PvE Modes", "Claim Your Own Island with a Protector", "4 Phases: Gather, Arms Race, Escalation and Chaos", "Bows, Explosives, Guns, Rockets and Diamond Gear", "Loot Drops, Diamond Surges and Diamond Bounties", "Quests, Perks and Buried Tre … [truncated]
-       tips: ["Claim an island early so you've got a safe base to respawn on", "Grab tools and resources during Gather, before the big fights kick off", "Hang on to your diamonds. They count towards your score", "Watch the loot timer and get to new drops first", "Don't camp on the … [truncated]
-       similarGames: ["skywars", "bedwars", "skyblock", "oneBlock"],
+       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
+       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
+       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
+       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
+       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/172.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/172.js#L15-L16)

```diff
-         question: "What is Bloxd Sky Islands?",
-         answer: "A round-based PvP mode. You claim a floating island, gear up through four phases and battle other players for the top score."
+         question: "What is Bloxd Skyblock?",
+         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/172.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/172.js#L18-L19)

```diff
-         question: "How is the winner decided in Bloxd Sky Islands?",
-         answer: "Whoever has the highest score when time runs out. Score is your kills plus the diamonds you're holding, and in Teams the highest-scoring team takes it."
+         question: "How do you play Bloxd Skyblock?",
+         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/172.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/172.js#L21-L22)

```diff
-         question: "How do I claim an island in Sky Islands?",
-         answer: "Put your Protector down on an island. Nobody else can change its blocks or open its chests, and you'll always respawn there."
+         question: "What skills are in Bloxd Skyblock?",
+         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/172.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/172.js#L24-L25)

```diff
-         question: "Which modes does Sky Islands have?",
-         answer: "Solo, Teams, Blitz (a faster match) and PvE. In PvE your score comes from mob kills instead of player kills, so you claim an island and go after mobs."
+         question: "What are the Dungeons in Bloxd Skyblock?",
+         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/172.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/172.js#L27-L28)

```diff
-         question: "Where do you find diamonds in Sky Islands?",
-         answer: "Mine them, grab them from loot drops and Diamond Surges, or win fights for them. Players drop some of their diamonds when they're knocked out."
+         question: "How do I trade in Bloxd Skyblock?",
+         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/172.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/172.js#L30-L31)

```diff
-         question: "What is a diamond bounty?",
-         answer: "If you're one of the top three scorers and you stay on the diamond island too long, you get a bounty and hunters can see you. Move to another island to get rid of it."
+         question: "Can I visit other players' islands?",
+         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
+       }, {
+         question: "What happened at Cragrock Mines?",
+         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
+       }, {
+         question: "Does my island save between sessions?",
+         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/173.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/173.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/173.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/173.js#L4)

```diff
-   8993: (CC, zC, ZC) => {
+   9127: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/173.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/173.js#L9-L13)

```diff
-       whatIs: ["The world is ending, and the only way out is up. Bloxd Build a Factory is the original factory mode on Bloxd. You automate a factory, build a rocket and launch it to escape before time runs out. It's a race against everyone else in your world, the fastest launches … [truncated]
-       howToPlay: ["Place your first Chest (or bed) and you'll get an Auto Miner and, in public lobbies, a Protector. Craft some Pipes and hook the Auto Miner up to the Chest. Open the Auto Miner, put some Coal in to fuel it, and now it mines for you.", "Next up, craft an Extracto … [truncated]
-       features: ["Factory Automation with a Rocket Race at the End", "Auto Miners, Auto Crafters and Auto Harvesters", "Pipes, Extractor, Splitter, Filter and Merger Pipes", "Solar Panels and Wire for Power", "Leaderboard for Best Launch Time and Rocket Stage", "Fresh World Every … [truncated]
-       tips: ["Follow the tutorial and you'll have your first Auto Miner running in no time", "Keep your Auto Miners topped up with Coal so they never stop", "Use Extractor Pipes to feed Chests into your Auto Crafters", "Filter and Splitter Pipes sort items into the right machines … [truncated]
-       similarGames: ["buildAFactory2", "skyblock", "oneBlock", "classic_survival"],
+       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
+       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
+       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
+       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
+       similarGames: ["skyblock", "skyIslands", "classic_survival"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/173.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/173.js#L15-L16)

```diff
-         question: "What is Bloxd Build a Factory?",
-         answer: "A factory automation race. You automate your factory, build a rocket and try to escape the dying world as fast as you can."
+         question: "What is Bloxd One Block?",
+         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/173.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/173.js#L18-L19)

```diff
-         question: "How do you build a rocket in Bloxd Build a Factory?",
-         answer: "Place your Rocket Ship from your inventory, then feed it resources from your factory to upgrade it stage by stage. Once it's finished, launch it to beat the game."
+         question: "Is Bloxd One Block a skyblock game?",
+         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/173.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/173.js#L21-L22)

```diff
-         question: "What's the goal in Build a Factory?",
-         answer: "Launch a rocket and escape the dying world. Your final time gets saved, and the quickest launches end up on the leaderboard."
+         question: "How many phases are in Bloxd One Block?",
+         answer: "17, from Forest and Plains through Ocean, Desert and Dungeon to the Volcano and the Moon. Mine enough blocks to unlock each one. When you've got them all, you can change phase."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/173.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/173.js#L24-L25)

```diff
-         question: "How often does the Build a Factory world reset?",
-         answer: "Every 6 hours. After you launch, you can jump into another lobby and play again, or hang around until your world resets."
+         question: "How do I get to the Hub in One Block?",
+         answer: "Grab 3 Gold Coins from chests, bridge over to the portal island nearby and walk into your portal. Type /home to come back."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/173.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/173.js#L27-L28)

```diff
-         question: "What is the Persistent world in Build a Factory?",
-         answer: "It's a Build a Factory world that never resets. You can build up to 5 Auto Miners, 5 Auto Crafters and 5 Auto Harvesters per chunk, and you launch rockets to climb the leaderboard and reach the Moon."
+         question: "Where do One Block coins come from?",
+         answer: "Chests from your One Block and the Hub treasure chests, daily and weekly quests, or watching an ad for coins."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/173.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/173.js#L30-L31)

```diff
-         question: "How do you get to the Moon in Build a Factory?",
-         answer: "In the Persistent world, launch a rocket. You'll land on the Moon, where you can mine Lunite. No rocket to get back? Open the shop to return home."
+         question: "How do I open my portal in One Block?",
+         answer: "Type /open in chat. You can also add visitors in your island access settings, even if your portal is closed."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/173.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/173.js#L33-L37)

```diff
-         question: "What does Lunite do?",
-         answer: "You use it to craft Lunite Auto Miners, Auto Crafters and Auto Harvesters. They run 1.5\xd7 faster, and the Lunite Auto Crafter and Auto Harvester can sometimes give you extra items."
-       }, {
-         question: "What's the difference between Build a Factory and Build a Factory 2?",
-         answer: "Build a Factory is a race to launch a rocket in a shared world that resets. In Build a Factory 2 you get your own floating factory island that you grow at your own pace."
+         question: "Can I have more than one island?",
+         answer: "Yes. The Island Manager lets you create new islands, rename them, load another save or delete one, up to a maximum number of islands."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/174.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/174.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390)

#### 1. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/174.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/174.js#L4)

```diff
-   9002: (CC, zC, ZC) => {
+   9133: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/174.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/174.js#L9-L13)

```diff
-       whatIs: ["Build machines on your own floating island and watch them work! That's Bloxd Build a Factory 2 in one line. You mine ore, link your machines up with conveyor belts and turn a couple of drills into a massive, fully automated factory. Never played a factory game bef … [truncated]
-       howToPlay: ["Use your Workbench to make a Machine Bench. Build a Burner Drill, stick it on an ore Deposit and give it fuel, and it starts mining by itself. Belt the ore into a Crusher to turn it into Grit (that's crushed ore), then into a Smelter to make bars. From there yo … [truncated]
-       features: ["Your Own Floating Factory Island", "Conveyor Belts, Fast Belts, Splitters, Sorting Gates, Belt Lifts and Tunnels", "Drills, Crushers, Smelters, Presses, Wire Mills, Assemblers and More", "Tier Up Your Core to Unlock New Machines, Then Build the Star Spire", "Pow … [truncated]
-       tips: ["Use Deposit Seeds to grow Deposits that never run out", "Crush ore into Grit before you smelt it and you'll get twice the bars", "Teach a Sorting Gate an item and it'll send that item down its own belt", "A Power Coupler makes Crushers, Smelters and Alloy Kilns twic … [truncated]
-       similarGames: ["survivalFactory", "skyblock", "oneBlock", "classic_survival"],
+       whatIs: ["Claim an island, grab the loot and fight for every diamond you can get. Bloxd Sky Islands is a scored PvP match across floating islands, where you explore, mine resources and battle for diamonds and glory. Each phase brings better loot, and whoever has the highest … [truncated]
+       howToPlay: ["Place your Protector on an island to claim it. Other players can't change blocks or open chests there, and you'll always respawn on it. You only get one island at a time, but you can release it and claim another later. Then off you go to explore, mine and grab  … [truncated]
+       features: ["Solo, Teams, Blitz and PvE Modes", "Claim Your Own Island with a Protector", "4 Phases: Gather, Arms Race, Escalation and Chaos", "Bows, Explosives, Guns, Rockets and Diamond Gear", "Loot Drops, Diamond Surges and Diamond Bounties", "Quests, Perks and Buried Tre … [truncated]
+       tips: ["Claim an island early so you've got a safe base to respawn on", "Grab tools and resources during Gather, before the big fights kick off", "Hang on to your diamonds. They count towards your score", "Watch the loot timer and get to new drops first", "Don't camp on the … [truncated]
+       similarGames: ["skywars", "bedwars", "skyblock", "oneBlock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/174.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/174.js#L15-L16)

```diff
-         question: "What is Build a Factory 2 on Bloxd?",
-         answer: "An idle factory builder. You build machines on your own floating island, connect them with conveyor belts and let them make everything for you."
+         question: "What is Bloxd Sky Islands?",
+         answer: "A round-based PvP mode. You claim a floating island, gear up through four phases and battle other players for the top score."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/174.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/174.js#L18-L19)

```diff
-         question: "Is Build a Factory 2 an idle factory game?",
-         answer: "Partly. Once it's set up, your factory runs by itself while you explore the Wilds or plan your next build. It pauses while you're offline and carries on where it stopped when you come back."
+         question: "How is the winner decided in Bloxd Sky Islands?",
+         answer: "Whoever has the highest score when time runs out. Score is your kills plus the diamonds you're holding, and in Teams the highest-scoring team takes it."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/174.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/174.js#L21-L22)

```diff
-         question: "How do I unlock new machines in Build a Factory 2?",
-         answer: "Tier up your Core by giving it the parts it asks for, like Motors and, later on, Logic Boards. Every new tier unlocks more machines and items."
+         question: "How do I claim an island in Sky Islands?",
+         answer: "Put your Protector down on an island. Nobody else can change its blocks or open its chests, and you'll always respawn there."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/174.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/174.js#L24-L25)

```diff
-         question: "What's the best way to power my factory?",
-         answer: "You've got a few options. Burn Coal or Charcoal in a Generator, build Solar Panels (they keep running at night at half power), or run Volt Engines on Voltite Cells for loads of power. Add Charge Vaults to store more."
+         question: "Which modes does Sky Islands have?",
+         answer: "Solo, Teams, Blitz (a faster match) and PvE. In PvE your score comes from mob kills instead of player kills, so you claim an island and go after mobs."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/174.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/174.js#L27-L28)

```diff
-         question: "What are the Wilds?",
-         answer: "The land below your island. Drop down to mine rare ore, loot ruin chests for Salvage, explore the Old Works and break fallen comets for Comet Cores."
+         question: "Where do you find diamonds in Sky Islands?",
+         answer: "Mine them, grab them from loot drops and Diamond Surges, or win fights for them. Players drop some of their diamonds when they're knocked out."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/174.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/174.js#L30-L31)

```diff
-         question: "Can friends help build my factory?",
-         answer: "Definitely. Invite friends to a shared co-op island, or use /visit to have a look around other players' islands."
+         question: "What is a diamond bounty?",
+         answer: "If you're one of the top three scorers and you stay on the diamond island too long, you get a bounty and hunters can see you. Move to another island to get rid of it."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/175.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/175.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/175.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/175.js#L4)

```diff
-   9011: (CC, zC, ZC) => {
+   9142: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/175.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/175.js#L9-L13)

```diff
-       whatIs: ["Build a home, earn some gold and take life at your own pace. Bloxd Greenville is a chill social sandbox and life sim set in a laid-back town. You work jobs, play mini-games and hang out with other players, and there's no rush to do any of it."],
-       howToPlay: ["Press B to pick your starting house, then take the portal to the Town Square and start earning gold. Choose a job. You could help customers at the Market, smash blocks and buildings in Demolition, dig for minerals in Mining, or try Woodcutting and Farming. Jobs … [truncated]
-       features: ["Unlock and Switch Between Houses and Plots", "Build Your Own House on an Empty Plot", "5 Jobs to Level Up: Market, Demolition, Mining, Woodcutting and Farming", "PvP Arena and Spleef Mini-Games", "Unlock Fast Travel to Get Around Quickly", "Host Parties and Choo … [truncated]
-       tips: ["Rest in your bed when your mood drops. Low mood means lower earnings.", "A better bed means bigger earnings, so upgrade it when you can", "Sell the items you collect in the shop for extra gold", "In Mining, head back up to sell when your backpack's full", "Some mine … [truncated]
-       similarGames: ["plots", "classic_creative", "fishing", "classic"],
+       whatIs: ["The world is ending, and the only way out is up. Bloxd Build a Factory is the original factory mode on Bloxd. You automate a factory, build a rocket and launch it to escape before time runs out. It's a race against everyone else in your world, the fastest launches … [truncated]
+       howToPlay: ["Place your first Chest (or bed) and you'll get an Auto Miner and, in public lobbies, a Protector. Craft some Pipes and hook the Auto Miner up to the Chest. Open the Auto Miner, put some Coal in to fuel it, and now it mines for you.", "Next up, craft an Extracto … [truncated]
+       features: ["Factory Automation with a Rocket Race at the End", "Auto Miners, Auto Crafters and Auto Harvesters", "Pipes, Extractor, Splitter, Filter and Merger Pipes", "Solar Panels and Wire for Power", "Leaderboard for Best Launch Time and Rocket Stage", "Fresh World Every … [truncated]
+       tips: ["Follow the tutorial and you'll have your first Auto Miner running in no time", "Keep your Auto Miners topped up with Coal so they never stop", "Use Extractor Pipes to feed Chests into your Auto Crafters", "Filter and Splitter Pipes sort items into the right machines … [truncated]
+       similarGames: ["buildAFactory2", "skyblock", "oneBlock", "classic_survival"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/175.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/175.js#L15-L16)

```diff
-         question: "What is Bloxd Greenville?",
-         answer: "A town life sim where you build a home, earn gold from jobs and play mini-games with other players."
+         question: "What is Bloxd Build a Factory?",
+         answer: "A factory automation race. You automate your factory, build a rocket and try to escape the dying world as fast as you can."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/175.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/175.js#L18-L19)

```diff
-         question: "How do I earn gold in Greenville?",
-         answer: "Work jobs like Market, Demolition, Mining, Woodcutting and Farming, eliminate players in the Arena and Spleef, and sell what you collect. Keep your mood up as well, because low mood cuts your earnings."
+         question: "How do you build a rocket in Bloxd Build a Factory?",
+         answer: "Place your Rocket Ship from your inventory, then feed it resources from your factory to upgrade it stage by stage. Once it's finished, launch it to beat the game."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/175.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/175.js#L21-L22)

```diff
-         question: "Can I build my own house in Greenville?",
-         answer: "Yes! Pick one of the ready-made houses in the shop, or unlock an Empty Plot and build from scratch."
+         question: "What's the goal in Build a Factory?",
+         answer: "Launch a rocket and escape the dying world. Your final time gets saved, and the quickest launches end up on the leaderboard."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/175.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/175.js#L24-L25)

```diff
-         question: "How do I change my house in Bloxd Greenville?",
-         answer: "Unlock new houses in the Houses section of the shop, then switch to whichever one you like."
+         question: "How often does the Build a Factory world reset?",
+         answer: "Every 6 hours. After you launch, you can jump into another lobby and play again, or hang around until your world resets."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/175.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/175.js#L27-L28)

```diff
-         question: "Can my friends visit my house?",
-         answer: "Sure. Turn on Allow Entry, add friends to your whitelist, or host a party to invite everyone over. You also get to choose who's allowed to edit your home."
+         question: "What is the Persistent world in Build a Factory?",
+         answer: "It's a Build a Factory world that never resets. You can build up to 5 Auto Miners, 5 Auto Crafters and 5 Auto Harvesters per chunk, and you launch rockets to climb the leaderboard and reach the Moon."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/175.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/175.js#L30-L31)

```diff
-         question: "Which mini-games are in Greenville?",
-         answer: "Spleef, where you try to make every other player fall, and the Arena, where you battle other players in PvP. Both pay out gold."
+         question: "How do you get to the Moon in Build a Factory?",
+         answer: "In the Persistent world, launch a rocket. You'll land on the Moon, where you can mine Lunite. No rocket to get back? Open the shop to return home."
+       }, {
+         question: "What does Lunite do?",
+         answer: "You use it to craft Lunite Auto Miners, Auto Crafters and Auto Harvesters. They run 1.5\xd7 faster, and the Lunite Auto Crafter and Auto Harvester can sometimes give you extra items."
+       }, {
+         question: "What's the difference between Build a Factory and Build a Factory 2?",
+         answer: "Build a Factory is a race to launch a rocket in a shared world that resets. In Build a Factory 2 you get your own floating factory island that you grow at your own pace."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/176.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/176.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/176.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/176.js#L4)

```diff
-   9015: (CC, zC, ZC) => {
+   9149: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/176.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/176.js#L9-L13)

```diff
-       whatIs: ["A string of unique islands, a mysterious land and 114 fish just waiting to be caught. Bloxd Fishing is a relaxing fishing simulator where you explore, catch fish and slowly uncover the secrets of the islands. Take it at your own pace. It's free, there's nothing to … [truncated]
-       howToPlay: ["Cast your line and wait for a bite. When something bites, a catch minigame kicks in. Some fish need a well-timed click, while others use a progress bar or a gravity bar. Win the minigame and the fish is yours. Every fish has its own weight and rarity, going fro … [truncated]
-       features: ["5 Islands and Lots of Fishing Spots to Explore", "114 Fish Species to Catch", "7 Rarities, from Common to Mythic", "3 Different Catch Minigames", "16 Fishing Rods, from the Rusty Rod to the Mythic Rod", "Boats, plus Luck Potions in Four Strengths", "A Bestiary t … [truncated]
-       tips: ["Sell your early catches and save up for a better rod", "Check the rod shops on each island for new rods", "Some spots don't allow every rod, so check before you cast", "Drink a Luck Potion before you fish if you're after rare catches", "Wait untill a luck event to g … [truncated]
-       similarGames: ["greenville", "skyblock", "oneBlock", "classic"],
+       whatIs: ["Build machines on your own floating island and watch them work! That's Bloxd Build a Factory 2 in one line. You mine ore, link your machines up with conveyor belts and turn a couple of drills into a massive, fully automated factory. Never played a factory game bef … [truncated]
+       howToPlay: ["Use your Workbench to make a Machine Bench. Build a Burner Drill, stick it on an ore Deposit and give it fuel, and it starts mining by itself. Belt the ore into a Crusher to turn it into Grit (that's crushed ore), then into a Smelter to make bars. From there yo … [truncated]
+       features: ["Your Own Floating Factory Island", "Conveyor Belts, Fast Belts, Splitters, Sorting Gates, Belt Lifts and Tunnels", "Drills, Crushers, Smelters, Presses, Wire Mills, Assemblers and More", "Tier Up Your Core to Unlock New Machines, Then Build the Star Spire", "Pow … [truncated]
+       tips: ["Use Deposit Seeds to grow Deposits that never run out", "Crush ore into Grit before you smelt it and you'll get twice the bars", "Teach a Sorting Gate an item and it'll send that item down its own belt", "A Power Coupler makes Crushers, Smelters and Alloy Kilns twic … [truncated]
+       similarGames: ["survivalFactory", "skyblock", "oneBlock", "classic_survival"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/176.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/176.js#L15-L16)

```diff
-         question: "What is Bloxd Fishing?",
-         answer: "A relaxing fishing game. You explore 5 islands, win catch minigames to reel in fish and fill your Bestiary with rare species."
+         question: "What is Build a Factory 2 on Bloxd?",
+         answer: "An idle factory builder. You build machines on your own floating island, connect them with conveyor belts and let them make everything for you."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/176.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/176.js#L18-L19)

```diff
-         question: "How many fish are in Bloxd Fishing?",
-         answer: "114 fish species, spread across 5 islands, in 7 rarities from Common to Mythic."
+         question: "Is Build a Factory 2 an idle factory game?",
+         answer: "Partly. Once it's set up, your factory runs by itself while you explore the Wilds or plan your next build. It pauses while you're offline and carries on where it stopped when you come back."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/176.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/176.js#L21-L22)

```diff
-         question: "How do I catch Mythic fish in Bloxd Fishing?",
-         answer: "Use a better rod, drink a Luck Potion and fish during luck events. Then cross your fingers!"
+         question: "How do I unlock new machines in Build a Factory 2?",
+         answer: "Tier up your Core by giving it the parts it asks for, like Motors and, later on, Logic Boards. Every new tier unlocks more machines and items."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/176.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/176.js#L24-L25)

```diff
-         question: "Where can I get better rods?",
-         answer: "Sell your fish for coins, then buy new rods from the rod shops on the islands."
+         question: "What's the best way to power my factory?",
+         answer: "You've got a few options. Burn Coal or Charcoal in a Generator, build Solar Panels (they keep running at night at half power), or run Volt Engines on Voltite Cells for loads of power. Add Charge Vaults to store more."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/176.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/176.js#L27-L28)

```diff
-         question: "How do I travel between islands?",
-         answer: "You start on Sunhaven. Spend coins to unlock Gloomtide, Eldermire, Embertide and Frostfell, and once an island's unlocked, use the shop to travel there."
+         question: "What are the Wilds?",
+         answer: "The land below your island. Drop down to mine rare ore, loot ruin chests for Salvage, explore the Old Works and break fallen comets for Comet Cores."
```
