# Changed — Bundle Modifications Report (Part 033 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `33 / 65` (**383** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 032](part-032.md) · [Part 034 →](part-034.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/96.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/96.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926)

#### 3. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L70-L125` → after: `L42-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L42-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/96.js#L42-L50) · [Before (L70-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/96.js#L70-L125)

```diff
-             zD = "undefined" !== typeof Audio ? new Audio : null
-           } catch (RD) {
-             return DD
-           }
-           if (!zD || "function" !== typeof zD.canPlayType) return DD;
-           var wD = zD.canPlayType("audio/mpeg;").replace(/^no$/, ""),
-             pD = DD._navigator ? DD._navigator.userAgent : "",
-             sD = pD.match(/OPR\/([0-6].)/g),
-             rD = sD && parseInt(sD[0].split("/")[1], 10) < 33,
-             LD = -1 !== pD.indexOf("Safari") && -1 === pD.indexOf("Chrome"),
-             cD = pD.match(/Version\/(.*?) /),
-             gD = LD && cD && parseInt(cD[1], 10) < 15;
-           return DD._codecs = {
-             mp3: !(rD || !wD && !zD.canPlayType("audio/mp3;").replace(/^no$/, "")),
-             mpeg: !!wD,
-             opus: !!zD.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
- ... (40 more removed lines; see GitHub link above)
+             null === Op || void 0 === Op || Op(pp)
+           } finally {
+             const cp = ip.find((pp => "loaded" === pp._state));
+             void 0 !== cp && "string" === typeof cp._src && function(pp, ip, cp) {
+               var Op;
+               xp += cp - (null !== (Op = Sp.get(ip)) && void 0 !== Op ? Op : 0), Sp.set(ip, cp);
+               const op = Yp.get(pp);
+               void 0 !== op && Lp[op]++
+             }(cp, cp._src, pp.length * pp.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
```

#### 4. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L730-L733` → after: `L54-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L54-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/96.js#L54-L186) · [Before (L730-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/96.js#L730-L733)

```diff
-       void 0 === (pD = function() {
-         return {
-           Howler: KD,
-           Howl: rD
+         if (!ip) return cp(pp, Dp, op);
+         const Ap = cp(pp).then(Dp);
+         return Ap.catch((pp => {
+           null === op || void 0 === op || op(pp)
+         })), Ap
+       }
+     }(0, Op.h)(Pp);
+     const yp = op.Howl.prototype,
+       Up = yp.init;
+     yp.init = function(pp) {
+       return op.Howler.volume(), Ip.ctx && Wp(Ip.ctx), Up.call(this, pp)
+     };
+     const wp = yp.unload;
+     yp.unload = function() {
+       const pp = this._src,
+         ip = wp.call(this);
+ ... (117 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L735-L737` → after: `L188-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/96.js#L188-L191) · [Before (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/96.js#L735-L737)

```diff
-       }.apply(zD, [])) || (DD.exports = pD), zD.Howler = KD, zD.Howl = rD, "undefined" !== typeof wD.g ? (wD.g.HowlerGlobal = sD, wD.g.Howler = KD, wD.g.Howl = rD, wD.g.Sound = LD) : "undefined" !== typeof window && (window.HowlerGlobal = sD, window.Howler = KD, window.Howl = rD, … [truncated]
-     }(),
-     function() {
+       } : null
+     }
+ 
+     function vp() {
```

#### 6. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L739-L893` → after: `L193-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/96.js#L193-L195) · [Before (L739-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/96.js#L739-L893)

```diff
-       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(DD) {
-         var zD = this;
-         if (!zD.ctx || !zD.ctx.listener) return zD;
-         for (var wD = zD._howls.length - 1; wD >= 0; wD--) zD._howls[wD].stereo(DD);
-         return zD
-       }, HowlerGlobal.prototype.pos = function(DD, zD, wD) {
-         var pD = this;
-         return pD.ctx && pD.ctx.listener ? (zD = "number" !== typeof zD ? pD._pos[1] : zD, wD = "number" !== typeof wD ? pD._pos[2] : wD, "number" !== typeof DD ? pD._pos : (pD._pos = [DD, zD, wD], "undefined" !== typeof pD.ctx.listener.positionX ? (pD.ctx.listener.positionX.setT … [truncated]
-       }, HowlerGlobal.prototype.orientation = function(DD, zD, wD, pD, sD, KD) {
-         var rD = this;
-         if (!rD.ctx || !rD.ctx.listener) return rD;
-         var LD = rD._orientation;
-         return zD = "number" !== typeof zD ? LD[1] : zD, wD = "number" !== typeof wD ? LD[2] : wD, pD = "number" !== typeof pD ? LD[3] : pD, sD = "number" !== typeof sD ? LD[4] : sD, KD = "number" !== typeof KD ? LD[5] : KD, "number" !== typeof DD ? LD : (rD._orientation = [DD, z … [truncated]
-       }, Howl.prototype.init = (DD = Howl.prototype.init, function(zD) {
-         var wD = this;
-         return wD._orientation = zD.orientation || [1, 0, 0], wD._stereo = zD.stereo || null, wD._pos = zD.pos || null, wD._pannerAttr = {
- ... (139 more removed lines; see GitHub link above)
+       (xp.volume(), xp.ctx && xp.autoUnlock) && (null === (pp = xp._unlockAudio) || void 0 === pp || pp.call(xp))
+     }
+     Up && (xp._autoSuspend = () => yp > 0 ? op.Howler : Up())
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/97.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/97.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8)

#### 1. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/97.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/97.js#L2)

```diff
- export const ids = [97];
+ export const ids = [95, 96, 97];
```

#### 2. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L4` → after: `L4-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/97.js#L4-L61) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/97.js#L4)

```diff
-   4889: (DD, zD, wD) => {
+   36819: (pp, ip, cp) => {
+     function Op(pp, ip, cp, Op) {
+       return !(cp && !pp.aimable) && (!ip || pp.gun && "head" !== Op)
+     }
+ 
+     function op(pp) {
+       return Math.max(.1 * pp, 1)
+     }
+ 
+     function Ip(pp, ip) {
+       return !pp && ip
+     }
+     cp.d(ip, {
+       d: () => Ip,
+       e: () => op,
+       h: () => Op
+ ... (42 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L6-L16` → after: `L63-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L63-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/97.js#L63-L70) · [Before (L6-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/97.js#L6-L16)

```diff
-       default: () => eD
-     });
-     var pD = wD(58),
-       sD = wD(1523),
-       KD = wD(351),
-       rD = wD(1238),
-       LD = wD(1620),
-       cD = wD(1270),
-       gD = wD(1548),
-       RD = wD(1495),
-       AD = wD(2676);
+       countDecodesAs: () => Ap,
+       decodedAudio: () => Pp
+     });
+     var Op = cp(3363),
+       op = cp(4974);
+     const Ip = op.Howler,
+       Sp = new Map;
+     let xp = 0;
```

#### 4. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L18-L19` → after: `L72-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L72-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/97.js#L72-L121) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/97.js#L18-L19)

```diff
-       retries: 2,
-       minTimeout: 2e3
+         song: 0,
+         sheet: 0
+       },
+       Yp = new WeakMap,
+       Dp = new WeakSet;
+ 
+     function Ap(pp, ip) {
+       return Yp.set(pp, ip), pp
+     }
+ 
+     function Pp() {
+       return {
+         bytes: xp,
+         songsDecoded: Lp.song,
+         sheetsDecoded: Lp.sheet
+       }
+ ... (34 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L21-L47` → after: `L123-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L123-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/97.js#L123-L353) · [Before (L21-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/97.js#L21-L47)

```diff
-     var fD = wD(1116),
-       ID = wD(1616),
-       BD = wD(1127),
-       GD = wD(1895),
-       hD = wD(1200),
-       nD = wD(1232),
-       MD = wD(3473),
-       OD = wD(1346),
-       JD = wD(1447),
-       ED = wD(1511),
-       QD = wD(2618),
-       XD = wD(2627),
-       VD = wD(4893),
-       PD = wD(2144),
-       CD = wD(1044),
-       xD = wD.n(CD),
- ... (11 more removed lines; see GitHub link above)
+     const wp = yp.unload;
+     yp.unload = function() {
+       const pp = this._src,
+         ip = wp.call(this);
+       if ("string" !== typeof pp) return ip;
+       const cp = Sp.get(pp);
+       return void 0 !== cp && function(pp) {
+         return !Ip._howls.some((ip => ip._src === pp || "string" === typeof ip._src && pp.indexOf(ip._src) >= 0))
+       }(pp) && (Sp.delete(pp), xp -= cp), ip
+     }
+   },
+   36980: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Lp
+     });
+     var Op = cp(25),
+ ... (215 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L50-L70` → after: `L356-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L356-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/97.js#L356-L403) · [Before (L50-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/97.js#L50-L70)

```diff
-       let {
-         icon: zD,
-         label: wD,
-         value: pD
-       } = DD;
-       return (0, ZD.jsxs)("div", {
-         className: "PlayerProfileStat",
-         children: [(0, ZD.jsx)(TD.e, {
-           name: zD,
-           className: "PlayerProfileStatIcon"
-         }), (0, ZD.jsxs)("div", {
-           className: "PlayerProfileStatText",
-           children: [(0, ZD.jsx)("div", {
-             className: "PlayerProfileStatLabel SmallTextLight",
-             children: wD
-           }), (0, ZD.jsx)("div", {
- ... (5 more removed lines; see GitHub link above)
+       return pp.replace(/[_\-\s]*\d+$/, "") || pp
+     }
+ 
+     function op(pp, ip, cp) {
+       return cp <= 0 ? 0 : pp * cp / Math.max(ip, cp)
+     }
+ 
+     function Ip(pp, ip) {
+       const cp = pp.getDurationMs();
+       return cp > 0 ? pp.loudness * Math.max(0, 1 - (ip - pp.startMs) / cp) : 0
+     }
+     class Sp {
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
+           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
+         this.maxVoices = pp, this.maxPerGroup = ip, this.voices = []
+ ... (32 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L74-L145` → after: `L407-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L407-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/97.js#L407-L420) · [Before (L74-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/97.js#L74-L145)

```diff
-       let {
-         profile: zD
-       } = DD;
-       const {
-         t: wD,
-         selectedLanguage: pD
-       } = (0, hD.E)();
-       let sD = wD("homePage:profileUnknown");
-       if (zD.lastOnline) {
-         const DD = (0, hD.n)(pD.code, "homePage:profileTimeAgo");
-         sD = wD("homePage:profileTimeAgo", {
-           time: (0, KD.fb)(DD, zD.lastOnline, Date.now())
-         })
-       }
-       let rD = wD("homePage:profileUnknown");
-       return zD.accountCreatedAt && (rD = new Date(zD.accountCreatedAt).toLocaleDateString(void 0, {
- ... (56 more removed lines; see GitHub link above)
+       pp !== Ip && (Ip = pp, Op.m.GA(op, pp))
+     }
+   },
+   37001: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Ip,
+       c: () => Sp,
+       g: () => Op
+     });
+     class Op {
+       constructor(pp) {
+         this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = pp
+       }
+       setMultiplierType(pp, ip) {
```

#### 8. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L147-L419` → after: `L422-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L422-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/97.js#L422-L424) · [Before (L147-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/97.js#L147-L419)

```diff
-         if (uD) return;
-         if (!kD) return void Dz({
-           status: "notFound",
-           playerKey: eD
-         });
-         const zD = "urlId" in kD && (null === (DD = tD.current) || void 0 === DD ? void 0 : DD.urlId) === kD.urlId && FD.current === aD;
-         if (zD && YD.current) return;
-         const wD = zD ? null : XD.c.peek(aD, kD);
-         let pD = !1;
-         const sD = DD => "loaded" === DD.status && (DD.playerKey === eD || "urlId" in kD && DD.profile.urlId === kD.urlId);
-         return wD ? (FD.current = aD, YD.current = !1, Dz({
-           status: "loaded",
-           profile: wD,
-           playerKey: eD
-         }), XD.c.invalidate(kD)) : Dz((DD => sD(DD) ? DD : {
-           status: "loading"
- ... (257 more removed lines; see GitHub link above)
+         this.multipliers[pp] = ip, null === (cp = this._onUpdate) || void 0 === cp || cp.call(this)
+       }
+       removeMultiplier(pp) {
```

#### 9. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L421-L543` → after: `L426-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L426-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/97.js#L426-L507) · [Before (L421-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/97.js#L421-L543)

```diff
-         if (!sD || !AD) return;
-         RD.NotificationProvider.showInputPopup({
-           title: "homePage:profileSocialLinkEditTitle",
-           textOpts: {
-             title: {
-               platform: GD.name
-             }
-           },
-           prefixText: KD.u[zD],
-           placeholderText: "playBloxd",
-           initialValue: null !== (DD = null === wD || void 0 === wD ? void 0 : wD.handle) && void 0 !== DD ? DD : "",
-           maxLength: 30,
-           submitText: "general:save",
-           secondaryButtonText: wD ? "general:remove" : void 0
-         }).getResult().then((async DD => {
-           if ("notificationTornDown" !== DD && null !== DD) try {
- ... (107 more removed lines; see GitHub link above)
+         delete this.multipliers[pp], null === (ip = this._onUpdate) || void 0 === ip || ip.call(this)
+       }
+       getMultiplierType(pp) {
+         return this.multipliers[pp]
+       }
+       getTotalMultipliedVal() {
+         let pp = 1;
+         for (const ip in this.multipliers) pp *= this.multipliers[ip];
+         return pp
+       }
+     }
+     class op {
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         this.booleans = {}, this._onUpdate = void 0, this._onUpdate = pp
+       }
+ ... (66 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/98.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/98.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1)

#### 1. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L4-L35` → after: `L5-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L5-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L5-L168) · [Before (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L4-L35)

```diff
-   9195: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       blockMetadata: () => rD.l,
-       getDefaultModel: () => RD,
-       getDefaultSkyBox: () => AD,
-       getDefaultTexture: () => gD,
-       textureNameToIndex: () => rD.z
-     });
-     var pD = wD(3156),
-       sD = wD(34051),
-       KD = wD(1211),
-       rD = wD(9198),
-       LD = wD(616);
-     const cD = {
-       block: DD => wD(9304)(`./${DD}.png`),
-       item: DD => wD(17060)(`./${DD}.png`)
- ... (16 more removed lines; see GitHub link above)
+   4977: (pp, ip, cp) => {
+     var Op;
+     ! function() {
+       var op = function() {
+         this.init()
+       };
+       op.prototype = {
+         init: function() {
+           var pp = this || Ip;
+           return pp._counter = 1e3, pp._html5AudioPool = [], pp.html5PoolSize = 10, pp._codecs = {}, pp._howls = [], pp._muted = !1, pp._volume = 1, pp._canPlayEvent = "canplaythrough", pp._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, p … [truncated]
+         },
+         volume: function(pp) {
+           var ip = this || Ip;
+           if (pp = parseFloat(pp), ip.ctx || Wp(), "undefined" !== typeof pp && pp >= 0 && pp <= 1) {
+             if (ip._volume = pp, ip._muted) return ip;
+             ip.usingWebAudio && ip.masterGain.gain.setValueAtTime(pp, Ip.ctx.currentTime);
+ ... (148 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L37-L41` → after: `L170-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L170-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L170-L516) · [Before (L37-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L37-L41)

```diff
-         else if (zD === pD.d.LIFEFORM_ATLAS) {
-           let zD;
-           for (const wD of LD.n)
-             if (DD.startsWith(wD)) {
-               zD = wD;
+       Sp.prototype = {
+         init: function(pp) {
+           var ip = this;
+           return Ip.ctx || Wp(), ip._autoplay = pp.autoplay || !1, ip._format = "string" !== typeof pp.format ? pp.format : [pp.format], ip._html5 = pp.html5 || !1, ip._muted = pp.mute || !1, ip._loop = pp.loop || !1, ip._pool = pp.pool || 5, ip._preload = "boolean" !== typeof pp … [truncated]
+             method: pp.xhr && pp.xhr.method ? pp.xhr.method : "GET",
+             headers: pp.xhr && pp.xhr.headers ? pp.xhr.headers : null,
+             withCredentials: !(!pp.xhr || !pp.xhr.withCredentials) && pp.xhr.withCredentials
+           }, ip._duration = 0, ip._state = "unloaded", ip._sounds = [], ip._endTimers = {}, ip._queue = [], ip._playLock = !1, ip._onend = pp.onend ? [{
+             Py: pp.onend
+           }] : [], ip._onfade = pp.onfade ? [{
+             Py: pp.onfade
+           }] : [], ip._onload = pp.onload ? [{
+             Py: pp.onload
+           }] : [], ip._onloaderror = pp.onloaderror ? [{
+             Py: pp.onloaderror
+           }] : [], ip._onplayerror = pp.onplayerror ? [{
+ ... (331 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L43-L45` → after: `L518-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L518-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L518-L561) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L43-L45)

```diff
-             } sD = {
-             type: pD.h.BASE64,
-             url: wD(27034)(`./${zD}/${DD}.png`)
+             } return Lp && op && delete Lp[pp._src], Ip.noAudio = !1, pp._state = "unloaded", pp._sounds = [], pp = null, null
+         },
+         on: function(pp, ip, cp, Op) {
+           var op = this["_on" + pp];
+           return "function" === typeof ip && op.push(Op ? {
+             id: cp,
+             Py: ip,
+             once: Op
+           } : {
+             id: cp,
+             Py: ip
+           }), this
+         },
+         off: function(pp, ip, cp) {
+           var Op = this,
+             op = Op["_on" + pp],
+ ... (28 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L47-L64` → after: `L563-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L563-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L563-L573) · [Before (L47-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L47-L64)

```diff
-         } else zD === pD.d.PLAYER_ASSET && (sD = {
-           type: pD.h.BASE64,
-           url: wD(28742)(`./${DD}.png`)
-         })
-       } catch {
-         throw new Error(`Default texture for ${DD} not found`)
-       }
-       return sD
-     }
- 
-     function RD(DD, zD) {
-       let sD;
-       try {
-         if (zD === pD.c.BLOCK) {
-           const zD = wD(28746)(`./${DD}.glb`);
-           sD = {
- ... (2 more removed lines; see GitHub link above)
+           return ip
+         },
+         _ended: function(pp) {
+           var ip = this,
+             cp = pp._sprite;
+           if (!ip._webAudio && pp._node && !pp._node.paused && !pp._node.ended && pp._node.currentTime < pp._stop) return setTimeout(ip._ended.bind(ip, pp), 100), ip;
+           var Op = !(!pp._loop && !ip._sprite[cp][2]);
+           if (ip._emit("end", pp._id), !ip._webAudio && Op && ip.stop(pp._id, !0).play(pp._id), ip._webAudio && Op) {
+             ip._emit("play", pp._id), pp._seek = pp._start || 0, pp._rateSeek = 0, pp._playStart = Ip.ctx.currentTime;
+             var op = 1e3 * (pp._stop - pp._start) / Math.abs(pp._rate);
+             ip._endTimers[pp._id] = setTimeout(ip._ended.bind(ip, pp), op)
```

#### 5. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L66-L74` → after: `L575-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L575-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L575-L585) · [Before (L66-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L66-L74)

```diff
-         } else if (zD === pD.c.ITEM) sD = {
-           type: pD.h.HTTP,
-           url: `${KD.clientSideServerUrls.staticUrl}/models/${DD}.glb`
-         };
-         else if (zD === pD.c.LIFEFORM) {
-           const zD = wD(33239)(`./${DD}.glb`);
-           sD = {
-             type: pD.h.BASE64,
-             url: zD
+           return ip._webAudio && !Op && (pp.Fk = !0, pp._ended = !0, pp._seek = pp._start || 0, pp._rateSeek = 0, ip._clearTimer(pp._id), ip._cleanBuffer(pp._node), Ip._autoSuspend()), ip._webAudio || Op || ip.stop(pp._id, !0), ip
+         },
+         _clearTimer: function(pp) {
+           var ip = this;
+           if (ip._endTimers[pp]) {
+             if ("function" !== typeof ip._endTimers[pp]) clearTimeout(ip._endTimers[pp]);
+             else {
+               var cp = ip._soundById(pp);
+               cp && cp._node && cp._node.removeEventListener("ended", ip._endTimers[pp], !1)
+             }
+             delete ip._endTimers[pp]
```

#### 6. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L77-L98` → after: `L634-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L634-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L634-L642) · [Before (L77-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L77-L98)

```diff
-       } catch {
-         throw new Error(`Default model for ${DD} not found`)
-       }
-       return sD
-     }
- 
-     function AD(DD) {
-       return sD.n[DD]
-     }
-   },
-   34051: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => KD,
-       e: () => LD,
-       f: () => rD,
-       j: () => sD,
- ... (6 more removed lines; see GitHub link above)
+       };
+       var xp = function(pp) {
+         this._parent = pp, this.init()
+       };
+       xp.prototype = {
+         init: function() {
+           var pp = this,
+             ip = pp._parent;
+           return pp._muted = ip._muted, pp._loop = ip._loop, pp._volume = ip._volume, pp._rate = ip._rate, pp._seek = 0, pp.Fk = !0, pp._ended = !0, pp._sprite = "__default", pp._id = ++Ip._counter, ip._sounds.push(pp), pp.create(), pp
```

#### 7. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L100-L107` → after: `L644-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L644-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L644-L648) · [Before (L100-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L100-L107)

```diff
-         gloomy: {
-           type: "custom",
-           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
-           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
-           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
-           px: "/textures/skyBoxes/gloomy/_px.jpg",
-           py: "/textures/skyBoxes/gloomy/_py.jpg",
-           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
+         create: function() {
+           var pp = this,
+             ip = pp._parent,
+             cp = Ip._muted || pp._muted || pp._parent._muted ? 0 : pp._volume;
+           return ip._webAudio ? (pp._node = "undefined" === typeof Ip.ctx.createGain ? Ip.ctx.createGainNode() : Ip.ctx.createGain(), pp._node.gain.setValueAtTime(cp, Ip.ctx.currentTime), pp._node.paused = !0, pp._node.connect(Ip.masterGain)) : Ip.noAudio || (pp._node = Ip._obtai … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L109-L116` → after: `L650-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L650-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L650-L653) · [Before (L109-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L109-L116)

```diff
-         interstellar: {
-           type: "custom",
-           nx: "/textures/skyBoxes/interstellar/_nx.jpg",
-           ny: "/textures/skyBoxes/interstellar/_ny.jpg",
-           nz: "/textures/skyBoxes/interstellar/_nz.jpg",
-           px: "/textures/skyBoxes/interstellar/_px.jpg",
-           py: "/textures/skyBoxes/interstellar/_py.jpg",
-           pz: "/textures/skyBoxes/interstellar/_pz.jpg"
+         reset: function() {
+           var pp = this,
+             ip = pp._parent;
+           return pp._muted = ip._muted, pp._loop = ip._loop, pp._volume = ip._volume, pp._rate = ip._rate, pp._seek = 0, pp._rateSeek = 0, pp.Fk = !0, pp._ended = !0, pp._sprite = "__default", pp._id = ++Ip._counter, pp
```

#### 9. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L118-L125` → after: `L655-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L655-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L655-L657) · [Before (L118-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L118-L125)

```diff
-         space_blue: {
-           type: "custom",
-           nx: "/textures/skyBoxes/space_blue/_nx.jpg",
-           ny: "/textures/skyBoxes/space_blue/_ny.jpg",
-           nz: "/textures/skyBoxes/space_blue/_nz.jpg",
-           px: "/textures/skyBoxes/space_blue/_px.jpg",
-           py: "/textures/skyBoxes/space_blue/_py.jpg",
-           pz: "/textures/skyBoxes/space_blue/_pz.jpg"
+         _errorListener: function() {
+           var pp = this;
+           pp._parent._emit("loaderror", pp._id, pp._node.error ? pp._node.error.code : 0), pp._node.removeEventListener("error", pp._errorFn, !1)
```

#### 10. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L127-L134` → after: `L659-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L659-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L659-L664) · [Before (L127-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L127-L134)

```diff
-         space_lightblue: {
-           type: "custom",
-           nx: "/textures/skyBoxes/space_lightblue/_nx.jpg",
-           ny: "/textures/skyBoxes/space_lightblue/_ny.jpg",
-           nz: "/textures/skyBoxes/space_lightblue/_nz.jpg",
-           px: "/textures/skyBoxes/space_lightblue/_px.jpg",
-           py: "/textures/skyBoxes/space_lightblue/_py.jpg",
-           pz: "/textures/skyBoxes/space_lightblue/_pz.jpg"
+         _loadListener: function() {
+           var pp = this,
+             ip = pp._parent;
+           ip._duration = Math.ceil(10 * pp._node.duration) / 10, 0 === Object.keys(ip._sprite).length && (ip._sprite = {
+             __default: [0, 1e3 * ip._duration]
+           }), "loaded" !== ip._state && (ip._state = "loaded", ip._emit("load"), ip._loadQueue()), pp._node.removeEventListener(Ip._canPlayEvent, pp._loadFn, !1)
```

#### 11. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L136-L143` → after: `L666-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L666-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L666-L689) · [Before (L136-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L136-L143)

```diff
-         space_red: {
-           type: "custom",
-           nx: "/textures/skyBoxes/space_red/_nx.jpg",
-           ny: "/textures/skyBoxes/space_red/_ny.jpg",
-           nz: "/textures/skyBoxes/space_red/_nz.jpg",
-           px: "/textures/skyBoxes/space_red/_px.jpg",
-           py: "/textures/skyBoxes/space_red/_py.jpg",
-           pz: "/textures/skyBoxes/space_red/_pz.jpg"
+         _endListener: function() {
+           var pp = this,
+             ip = pp._parent;
+           ip._duration === 1 / 0 && (ip._duration = Math.ceil(10 * pp._node.duration) / 10, ip._sprite.__default[1] === 1 / 0 && (ip._sprite.__default[1] = 1e3 * ip._duration), ip._ended(pp)), pp._node.removeEventListener("ended", pp._endFn, !1)
+         }
+       };
+       var Lp = {},
+         Yp = function(pp) {
+           var ip = pp._src;
+           if (Lp[ip]) return pp._duration = Lp[ip].duration, void Pp(pp);
+           if (/^data:[^;]+;base64,/.test(ip)) {
+             for (var cp = atob(ip.split(",")[1]), Op = new Uint8Array(cp.length), op = 0; op < cp.length; ++op) Op[op] = cp.charCodeAt(op);
+             Ap(Op.buffer, pp)
+           } else {
+             var Ip = new XMLHttpRequest;
+             Ip.open(pp._xhr.method, ip, !0), Ip.withCredentials = pp._xhr.withCredentials, Ip.responseType = "arraybuffer", pp._xhr.headers && Object.keys(pp._xhr.headers).forEach((function(ip) {
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L145-L152` → after: `L691-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L691-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L691-L696) · [Before (L145-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L145-L152)

```diff
-         underwater: {
-           type: "custom",
-           nx: "/textures/skyBoxes/underwater/water.jpg",
-           ny: "/textures/skyBoxes/underwater/water.jpg",
-           nz: "/textures/skyBoxes/underwater/water.jpg",
-           px: "/textures/skyBoxes/underwater/water.jpg",
-           py: "/textures/skyBoxes/underwater/water.jpg",
-           pz: "/textures/skyBoxes/underwater/water.jpg"
+         Dp = function(pp) {
+           try {
+             pp.send()
+           } catch (ip) {
+             pp.onerror()
+           }
```

#### 13. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L154-L161` → after: `L698-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L698-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L698-L705) · [Before (L154-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L154-L161)

```diff
-         starry: {
-           type: "custom",
-           nx: "/textures/skyBoxes/starry/_nx.jpg",
-           ny: "/textures/skyBoxes/starry/_ny.jpg",
-           nz: "/textures/skyBoxes/starry/_nz.jpg",
-           px: "/textures/skyBoxes/starry/_px.jpg",
-           py: "/textures/skyBoxes/starry/_py.jpg",
-           pz: "/textures/skyBoxes/starry/_pz.jpg"
+         Ap = function(pp, ip) {
+           var cp = function() {
+               ip._emit("loaderror", null, "Decoding audio data failed.")
+             },
+             Op = function(pp) {
+               pp && ip._sounds.length > 0 ? (Lp[ip._src] = pp, Pp(ip, pp)) : cp()
+             };
+           "undefined" !== typeof Promise && 1 === Ip.ctx.decodeAudioData.length ? Ip.ctx.decodeAudioData(pp).then(Op).catch(cp) : Ip.ctx.decodeAudioData(pp, Op, cp)
```

#### 14. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L163-L170` → after: `L707-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L707-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L707-L710) · [Before (L163-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L163-L170)

```diff
-         space_red_2: {
-           type: "custom",
-           nx: "/textures/skyBoxes/space_red_2/_nx.jpg",
-           ny: "/textures/skyBoxes/space_red_2/_ny.jpg",
-           nz: "/textures/skyBoxes/space_red_2/_nz.jpg",
-           px: "/textures/skyBoxes/space_red_2/_px.jpg",
-           py: "/textures/skyBoxes/space_red_2/_py.jpg",
-           pz: "/textures/skyBoxes/space_red_2/_pz.jpg"
+         Pp = function(pp, ip) {
+           ip && !pp._duration && (pp._duration = ip.duration), 0 === Object.keys(pp._sprite).length && (pp._sprite = {
+             __default: [0, 1e3 * pp._duration]
+           }), "loaded" !== pp._state && (pp._state = "loaded", pp._emit("load"), pp._loadQueue())
```

#### 15. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L172-L179` → after: `L712-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L712-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L712-L733) · [Before (L172-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L172-L179)

```diff
-         space_white: {
-           type: "custom",
-           nx: "/textures/skyBoxes/space_white/_nx.jpg",
-           ny: "/textures/skyBoxes/space_white/_ny.jpg",
-           nz: "/textures/skyBoxes/space_white/_nz.jpg",
-           px: "/textures/skyBoxes/space_white/_px.jpg",
-           py: "/textures/skyBoxes/space_white/_py.jpg",
-           pz: "/textures/skyBoxes/space_white/_pz.jpg"
+         Wp = function() {
+           if (Ip.usingWebAudio) {
+             try {
+               "undefined" !== typeof AudioContext ? Ip.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Ip.ctx = new webkitAudioContext : Ip.usingWebAudio = !1
+             } catch (op) {
+               Ip.usingWebAudio = !1
+             }
+             Ip.ctx || (Ip.usingWebAudio = !1);
+             var pp = /iP(hone|od|ad)/.test(Ip._navigator && Ip._navigator.platform),
+               ip = Ip._navigator && Ip._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
+               cp = ip ? parseInt(ip[1], 10) : null;
+             if (pp && cp && cp < 9) {
+               var Op = /safari/.test(Ip._navigator && Ip._navigator.userAgent.toLowerCase());
+               Ip._navigator && !Op && (Ip.usingWebAudio = !1)
+             }
+             Ip.usingWebAudio && (Ip.masterGain = "undefined" === typeof Ip.ctx.createGain ? Ip.ctx.createGainNode() : Ip.ctx.createGain(), Ip.masterGain.gain.setValueAtTime(Ip._muted ? 0 : Ip._volume, Ip.ctx.currentTime), Ip.masterGain.connect(Ip.ctx.destination)), Ip._setup()
+ ... (6 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L181-L4914` → after: `L735-L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L735-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L735-L891) · [Before (L181-L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L181-L4914)

```diff
-       },
-       sD = "/textures/dayNight/sun.png",
-       KD = "/textures/dayNight/moon.png",
-       rD = "/textures/dayNight/stars",
-       LD = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
-   },
-   28742: (DD, zD, wD) => {
-     var pD = {
-       "./Player_Atlas.png": 27791,
-       "./astro_set_1_attachable.png": 27796,
-       "./astro_set_2_attachable.png": 27801,
-       "./astro_set_3_attachable.png": 27809,
-       "./astro_set_4_attachable.png": 27817,
-       "./beaver_lumberjack.png": 27825,
-       "./bee_set_1_attachable.png": 27831,
-       "./bee_set_2_attachable.png": 27839,
- ... (4718 more removed lines; see GitHub link above)
+       }.apply(ip, [])) || (pp.exports = Op), ip.Howler = Ip, ip.Howl = Sp, "undefined" !== typeof cp.g ? (cp.g.HowlerGlobal = op, cp.g.Howler = Ip, cp.g.Howl = Sp, cp.g.Sound = xp) : "undefined" !== typeof window && (window.HowlerGlobal = op, window.Howler = Ip, window.Howl = Sp, … [truncated]
+     }(),
+     function() {
+       var pp;
+       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(pp) {
+         var ip = this;
+         if (!ip.ctx || !ip.ctx.listener) return ip;
+         for (var cp = ip._howls.length - 1; cp >= 0; cp--) ip._howls[cp].stereo(pp);
+         return ip
+       }, HowlerGlobal.prototype.pos = function(pp, ip, cp) {
+         var Op = this;
+         return Op.ctx && Op.ctx.listener ? (ip = "number" !== typeof ip ? Op._pos[1] : ip, cp = "number" !== typeof cp ? Op._pos[2] : cp, "number" !== typeof pp ? Op._pos : (Op._pos = [pp, ip, cp], "undefined" !== typeof Op.ctx.listener.positionX ? (Op.ctx.listener.positionX.setT … [truncated]
+       }, HowlerGlobal.prototype.orientation = function(pp, ip, cp, Op, op, Ip) {
+         var Sp = this;
+         if (!Sp.ctx || !Sp.ctx.listener) return Sp;
+         var xp = Sp._orientation;
+ ... (141 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L4916-L17025` → after: `L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/98.js#L893) · [Before (L4916-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/98.js#L4916-L17025)

```diff
-       return pD[DD]
-     }
-     sD.keys = function() {
-       return Object.keys(pD)
-     }, sD.resolve = KD, DD.exports = sD, sD.id = 17060
-   },
-   28753: DD => {
-     DD.exports = "data:model/gltf-binary;base64,Z2xURgIAAADIDgAA3AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Mjg4fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
-   },
-   28757: DD => {
-     DD.exports = "data:model/gltf-binary;base64,Z2xURgIAAAA0FAAA+AQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6Njg0fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
-   },
-   28762: DD => {
-     DD.exports = "data:model/gltf-binary;base64,Z2xURgIAAABMCwAApAQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImJsb3hkLWJ1aWxkbWVzaGVzIiwidmVyc2lvbiI6IjIuMCJ9LCJhY2Nlc3NvcnMiOlt7InR5cGUiOiJTQ0FMQVIiLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MjUyfSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlwZSI6 … [truncated]
-   },
-   28768: DD => {
- ... (12094 more removed lines; see GitHub link above)
+     }()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/99.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/99.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae)

#### 1. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L2)

```diff
- export const ids = [99, 194];
+ export const ids = [99];
```

#### 2. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L4)

```diff
-   34091: (DD, zD, wD) => {
+   4988: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L6)

```diff
-       EverythingMenu: () => WL
+       default: () => Fp
```

#### 4. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L8-L9` → after: `L8-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L8-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L8-L35) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L8-L9)

```diff
-     var pD = wD(58),
-       sD = wD(1044),
+     var Op = cp(62),
+       op = cp(1543),
+       Ip = cp(337),
+       Sp = cp(1244),
+       xp = cp(1626),
+       Lp = cp(1284),
+       Yp = cp(1569),
+       Dp = cp(1520),
+       Ap = cp(2749);
+     const Pp = {
+       retries: 2,
+       minTimeout: 2e3
+     };
+     var Wp = cp(1133),
+       yp = cp(1623),
+       Up = cp(1141),
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L11-L16` → after: `L37-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L37-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L37-L47) · [Before (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L11-L16)

```diff
-       rD = wD(1200),
-       LD = wD(1057),
-       cD = wD(2062),
-       gD = wD(1447),
-       RD = wD(1116),
-       AD = wD(1096);
+       Ep = cp(1060),
+       Xp = cp(5e3),
+       lp = cp(25),
+       Qp = cp(1956),
+       Jp = cp(3740),
+       Bp = cp(2057),
+       Np = cp(3680),
+       Tp = cp(104),
+       fp = cp(4648),
+       bp = cp(1112);
+     const hp = [Rp];
```

#### 6. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L20-L25` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L51-L53) · [Before (L20-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L20-L25)

```diff
-         items: zD,
-         link: wD,
-         onClick: pD,
-         selectedItemId: sD,
-         className: UD,
-         padStartsOnTab: fD = !0
+         icon: ip,
+         label: cp,
+         value: Op
```

#### 7. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L41-L81` → after: `L56-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L56-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L56-L61) · [Before (L41-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L41-L81)

```diff
-         className: KD()("MenuSideBarBody", UD),
-         "data-pad-tabs": "2",
-         children: [GD.map(((DD, zD) => {
-           var wD;
-           return (0, AD.jsxs)("div", {
-             className: "MenuSideBarSection",
-             children: [DD.title && (0, AD.jsx)("div", {
-               className: "MenuSideBarSectionTitle",
-               children: ID(DD.title)
-             }), DD.items.map((DD => {
-               var zD;
-               const wD = !!DD.iconElement || !!DD.faIcon;
-               return (0, AD.jsxs)("div", {
-                 "data-pad-tab": !0,
-                 "data-pad-selected": sD === DD.id ? "true" : void 0,
-                 "data-pad-default-focus": fD && sD === DD.id || void 0,
- ... (25 more removed lines; see GitHub link above)
+         className: "PlayerProfileStat",
+         children: [(0, bp.jsx)(Ep.d, {
+           name: ip,
+           className: "PlayerProfileStatIcon"
+         }), (0, bp.jsxs)("div", {
+           className: "PlayerProfileStatText",
```

#### 8. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L83-L86` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L63-L64) · [Before (L83-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L83-L86)

```diff
-             className: "MenuSideBarBodyTabIcon",
-             children: (0, AD.jsx)(LD.e, {
-               name: wD.faIcon
-             })
+             className: "PlayerProfileStatLabel SmallTextLight",
+             children: cp
```

#### 9. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L88-L91` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L66-L67) · [Before (L88-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L88-L91)

```diff
-             children: ID(wD.title)
-           }), (0, AD.jsx)(LD.e, {
-             name: "arrow-right",
-             className: "MenuSideBarLinkArrow"
+             className: "PlayerProfileStatValue",
+             children: Op
```

#### 10. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L112` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L75) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L112)

```diff
-         setApplySettingsCallback: zD
+         profile: ip
```

#### 11. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L259-L290` → after: `L80-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L80-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L80-L107) · [Before (L259-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L259-L290)

```diff
-       } = (0, rD.E)(), {
-         userContext: sD
-       } = (0, ID.c)(), {
-         superRankInfo: KD
-       } = sD, LD = DD && ((0, ND.Bc)(KD) || sD.ranksMayChange) && (0, yD.purchasesAllowed)(), {
-         accountId: cD,
-         data: gD
-       } = (0, kD.f)(eD.e, LD);
-       if ((0, pD.useEffect)((() => {
-           if (LD) return eD.e.watchAccount(), mD.e.addRefetchListener("billing", (DD => {
-             "reconnected" === DD ? eD.e.refreshAfterReconnect() : eD.e.refresh()
-           }))
-         }), [LD]), !LD || !(0, ND.Bc)(KD) || null === gD || cD !== sD.whamm) return null;
-       const RD = function(DD, zD, wD) {
-         const pD = aD.h[(0, aD.c)(aD.h, zD)],
-           sD = void 0 === pD ? void 0 : (0, uD.d)(DD.entitlements, pD.entitlementId);
- ... (16 more removed lines; see GitHub link above)
+       } = (0, vp.H)();
+       let op = cp("homePage:profileUnknown");
+       if (ip.lastOnline) {
+         const pp = (0, vp.p)(Op.code, "homePage:profileTimeAgo");
+         op = cp("homePage:profileTimeAgo", {
+           time: (0, Ip.cb)(pp, ip.lastOnline, Date.now())
+         })
+       }
+       let Sp = cp("homePage:profileUnknown");
+       return ip.accountCreatedAt && (Sp = new Date(ip.accountCreatedAt).toLocaleDateString(void 0, {
+         year: "numeric",
+         month: "short",
+         day: "numeric"
+       })), (0, bp.jsxs)("div", {
+         className: "PlayerProfileStats",
+         children: [(0, bp.jsx)(ap, {
+ ... (12 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L300-L303` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L111) · [Before (L300-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L300-L303)

```diff
-     function zz(DD) {
-       let {
-         showing: zD
-       } = DD;
+     function Fp() {
```

#### 13. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L306-L323` → after: `L114-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L114-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L114-L318) · [Before (L306-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L306-L323)

```diff
-       } = (0, rD.E)(), {
-         data: pD,
-         failed: sD
-       } = (0, kD.f)(qD.e, zD);
-       return 0 === (null === pD || void 0 === pD ? void 0 : pD.length) || null === pD && !sD ? null : (0, AD.jsxs)("div", {
-         className: "SettingBox AccountSettingsPaymentHistory",
-         children: [(0, AD.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: wD("paymentHistory:title")
-         }), null === pD && sD && (0, AD.jsx)("div", {
-           className: "AccountSettingsPaymentHistoryError",
-           children: wD("paymentHistory:loadFailed")
-         }), null !== pD && (0, AD.jsx)("ul", {
-           className: "PaymentHistoryList",
-           children: pD.map((DD => (0, AD.jsxs)("li", {
-             className: "PaymentHistoryEntry",
- ... (2 more removed lines; see GitHub link above)
+       } = (0, vp.H)(), ip = (0, jp.useNavigatePreserveSearch)(), cp = (0, Wp.h)(), {
+         playerName: Rp,
+         playerUrlName: Mp
+       } = (0, op.A)(), Jp = (0, op.r)(), ap = (0, Sp.f)(Jp.pathname), Fp = ap && ("urlId" in ap ? `urlId:${ap.urlId}` : `name:${ap.lowerCaseName}`), gp = (0, Op.useRef)(Fp);
+       gp.current = Fp;
+       const {
+         userContext: Gp,
+         isUserContextUpdating: rp
+       } = (0, Up.b)(), Zp = (0, Op.useRef)(null), zp = (0, Op.useRef)(null), sp = (0, Op.useRef)(null), Kp = (0, Op.useRef)(!1), Vp = (0, Op.useRef)((0, Ip.Ub)(hp)), [ii, ci] = (0, Op.useState)((() => {
+         const pp = ap && mp.c.peek(Gp, ap);
+         return pp ? {
+           status: "loaded",
+           profile: pp,
+           playerKey: Fp
+         } : {
+           status: "loading"
+ ... (189 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L325` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L320) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L325)

```diff
-               className: "PaymentHistoryEntryText",
+               className: "PlayerProfileGames",
```

#### 15. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L327-L330` → after: `L322-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L322-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L322-L338) · [Before (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L327-L330)

```diff
-                 children: (0, Dz.e)(wD, DD)
-               }), (0, AD.jsxs)("div", {
-                 className: "PaymentHistoryEntryDate",
-                 children: [new Date(DD.at).toLocaleDateString(), "number" === typeof DD.orderId && ` \xb7 ${wD("paymentHistory:order",{orderId:DD.orderId})}`]
+                 className: "PlayerProfileGamesTitle SmallTextBold",
+                 children: pp("homePage:profileReleasedGames")
+               }), 0 === xi.releasedGames.length && (0, bp.jsx)("div", {
+                 className: "PlayerProfileNoGames",
+                 children: pp("homePage:profileNoReleasedGames")
+               }), xi.releasedGames.length > 0 && (0, bp.jsx)("div", {
+                 className: "PlayerProfileGamesGrid",
+                 children: xi.releasedGames.map((pp => (0, bp.jsx)(Hp.g, {
+                   source: {
+                     type: "preview",
+                     preview: pp
+                   },
+                   gameWidth: "100%",
+                   useLongRatio: !0,
+                   hideFavourites: !0,
+                   entrySource: "other"
+ ... (1 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L333` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L341) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L333)

```diff
-           }, (0, qD.d)(DD))))
+           })]
```

#### 17. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L337-L368` → after: `L345-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L345-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L345-L359) · [Before (L337-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L337-L368)

```diff
-     var wz = wD(1878),
-       pz = wD(1251),
-       sz = wD(1355),
-       Kz = wD(1797),
-       rz = wD(1211),
-       Lz = wD(1324),
-       cz = wD(3014);
-     async function gz() {
-       try {
-         return function(DD) {
-           const zD = new Map;
-           for (const {
-               store: wD,
-               status: pD,
-               autoRenewStatus: sD,
-               managementUrl: KD
- ... (16 more removed lines; see GitHub link above)
+   },
+   5e3: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => wp
+     });
+     var Op = cp(1049),
+       op = cp.n(Op),
+       Ip = cp(4735),
+       Sp = cp(1201),
+       xp = cp(1060),
+       Lp = cp(1480),
+       Yp = cp(1520),
+       Dp = cp(1372),
+       Ap = cp(2568),
+       Pp = cp(1112);
```

#### 18. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L370-L372` → after: `L361-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L361-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L361-L374) · [Before (L370-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L370-L372)

```diff
-       appStore: {
-         name: "App Store",
-         ...Rz.Mb.appStore
+       youtube: {
+         icon: "youtube",
+         color: "#FF0033",
+         name: "YouTube"
+       },
+       tiktok: {
+         icon: "tiktok",
+         color: "#0F0F0F",
+         name: "TikTok"
+       },
+       instagram: {
+         icon: "instagram",
+         color: "#E1306C",
+         name: "Instagram"
```

#### 19. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L374-L376` → after: `L376-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L376-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L376-L379) · [Before (L374-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L374-L376)

```diff
-       googlePlay: {
-         name: "Google Play",
-         ...Rz.Mb.googlePlay
+       twitter: {
+         icon: "x-twitter",
+         color: "#0F0F0F",
+         name: "X"
```

#### 20. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L378-L380` → after: `L381-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L381-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L381-L384) · [Before (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L378-L380)

```diff
-       discord: {
-         name: "Discord",
-         ...Rz.Mb.discord
+       twitch: {
+         icon: "twitch",
+         color: "#9146FF",
+         name: "Twitch"
```

#### 21. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L386-L387` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L390) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L386-L387)

```diff
-         warning: zD,
-         subscriptions: wD
+         platform: ip
```

#### 22. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L389-L415` → after: `L392-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L392-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L392-L401) · [Before (L389-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L389-L415)

```diff
-       const {
-         t: pD
-       } = (0, rD.E)();
-       return null !== wD && 0 === wD.length ? (0, AD.jsx)(AD.Fragment, {
-         children: pD(zD)
-       }) : (0, AD.jsxs)("div", {
-         className: "DeleteAccountSubtitle",
-         children: [pD(zD), null === wD && (0, AD.jsx)("div", {
-           className: "DeleteAccountSubtitleNote",
-           children: pD("auth:deleteAccountSubscriptionsLoadFailed")
-         }), null !== wD && (0, AD.jsxs)(AD.Fragment, {
-           children: [(0, AD.jsx)("div", {
-             className: "DeleteAccountSubtitleNote",
-             children: pD("auth:deleteAccountStoreSubscriptions")
-           }), (0, AD.jsx)(Az.d, {
-             className: "DeleteAccountSubtitleLinks",
- ... (11 more removed lines; see GitHub link above)
+       const cp = "youtube" === ip;
+       return (0, Pp.jsxs)("span", {
+         className: op()("PlayerProfileSocialLinkIcon", {
+           PlayerProfileSocialLinkIconYoutube: cp
+         }),
+         children: [cp && (0, Pp.jsx)(Ap.d, {
+           variant: "white"
+         }), !cp && (0, Pp.jsx)(xp.d, {
+           name: Wp[ip].icon,
+           kit: "brands"
```

#### 23. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L422-L424` → after: `L408-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L408-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L408-L410) · [Before (L422-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L422-L424)

```diff
-         showing: zD
-       } = DD;
-       const {
+         platform: ip,
+         link: cp,
+         editable: Op,
```

#### 24. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L426-L515` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L412) · [Before (L426-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L426-L515)

```diff
-         isUserContextUpdating: sD
-       } = (0, ID.c)(), {
-         t: KD
-       } = (0, rD.E)(), [LD, cD] = (0, pD.useState)(!1), [RD, UD] = (0, pD.useState)(null), fD = (0, pD.useRef)(zD);
-       (0, pD.useEffect)((() => (fD.current = zD, () => {
-         fD.current = !1
-       })), [zD]);
-       const BD = sD || LD;
-       return (0, AD.jsxs)("div", {
-         className: "AccountSettingsDeleteAccountButtonContainer",
-         children: [(0, AD.jsxs)(gD.R, {
-           onClick: async function() {
-             if (!LD) {
-               cD(!0);
-               try {
-                 const DD = await async function() {
- ... (74 more removed lines; see GitHub link above)
+         onLinksUpdated: Ap
```

#### 25. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L519-L596` → after: `L416-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L416-L417) · [Before (L519-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L519-L596)

```diff
-       } = (0, rD.E)(), {
-         data: pD,
-         failed: sD
-       } = (0, kD.f)(hz.d, zD), KD = null === pD ? null : (0, hz.h)(pD);
-       return (0, AD.jsxs)("div", {
-         className: "SettingBox BlockedAndIgnoredPlayers",
-         children: [(0, AD.jsx)("div", {
-           className: "AccountSettingsLabel",
-           children: wD("settingsMenu:blockedAndIgnoredPlayers")
-         }), null === KD && !sD && (0, AD.jsx)(ED.e, {}), null === KD && sD && (0, AD.jsxs)("div", {
-           className: "BlockedAndIgnoredPlayersError",
-           children: [wD("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, AD.jsx)(gD.f, {
-             className: "SmallTextLight",
-             onClick: () => {
-               hz.d.refresh()
-             },
- ... (62 more removed lines; see GitHub link above)
+       } = (0, Sp.H)(), wp = Wp[ip];
+       if (!cp && !Op) return null;
```

#### 26. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L598-L603` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L419) · [Before (L598-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L598-L603)

```diff
-       function nz(DD) {
-         DD !== MD && ((0, dD.q)(DD) ? (DD = (0, dD.u)(DD), PD(cD("homePage:nameCharacters"))) : PD(null), sz.current && (sz.current.value = DD), OD(DD))
-       }
-       return (0, pD.useEffect)((() => (!0 === wD ? (clearInterval(Kz.current), Kz.current = setInterval(BD, 1e3)) : clearInterval(Kz.current), () => {
-         clearInterval(Kz.current)
-       })), [wD, BD]), (0, pD.useEffect)((() => {
+       function vp() {
```

#### 27. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L605-L697` → after: `L421-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L421-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L421-L426) · [Before (L605-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L605-L697)

```diff
-         OD(null !== (DD = GD.getPlayerName()) && void 0 !== DD ? DD : "")
-       }), [GD]), (0, pD.useEffect)((() => {
-         if (!wD || !Gz || nD) return;
-         let DD = !1;
-         return Bz(!0), Uz([]), WD.d.getPlayerProfile(GD, {
-           lowerCaseName: GD.getPlayerName().toLowerCase()
-         }).then((zD => {
-           DD || Uz(zD.socialLinks)
-         })).catch((DD => {
-           console.error("Failed to load social links", DD)
-         })).finally((() => {
-           DD || Bz(!1)
-         })), () => {
-           DD = !0
-         }
-       }), [wD, Gz, nD, GD]), (0, AD.jsxs)("div", {
- ... (77 more removed lines; see GitHub link above)
+         if (!op || !Ap) return;
+         Dp.NotificationProvider.showInputPopup({
+           title: "homePage:profileSocialLinkEditTitle",
+           textOpts: {
+             title: {
+               platform: wp.name
```

#### 28. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L714-L849` → after: `L429-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L429-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L429-L455) · [Before (L714-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L714-L849)

```diff
-           checked: (0, FD.n)(UD),
-           disabled: wz
-         }), Gz && (0, AD.jsxs)("div", {
-           className: "SettingBox AccountSettingsSocialLinks",
-           children: [(0, AD.jsx)("div", {
-             className: "AccountSettingsLabel",
-             children: cD("settingsMenu:socialLinks")
-           }), fz && (0, AD.jsx)(ED.e, {}), !fz && (0, AD.jsx)(YD.e, {
-             socialLinks: Az,
-             editable: !0,
-             userContext: GD,
-             onLinksUpdated: hz
-           })]
-         }), (0, AD.jsxs)("div", {
-           className: "SettingBox",
-           children: [(0, AD.jsx)("div", {
- ... (120 more removed lines; see GitHub link above)
+           prefixText: Ip.u[ip],
+           placeholderText: "playBloxd",
+           initialValue: null !== (pp = null === cp || void 0 === cp ? void 0 : cp.handle) && void 0 !== pp ? pp : "",
+           maxLength: 30,
+           submitText: "general:save",
+           secondaryButtonText: cp ? "general:remove" : void 0
+         }).getResult().then((async pp => {
+           if ("notificationTornDown" !== pp && null !== pp) try {
+             "submit" === pp.type ? await Yp.b.setSocialLink(op, ip, pp.value) : await Yp.b.clearSocialLink(op, ip), Ap()
+           } catch (cp) {
+             console.error("Failed to update social link", cp), Dp.NotificationProvider.showAlertPopup({
+               title: cp.errorMessageForUser,
+               confirmText: "general:ok"
+             })
+           }
+         }))
+ ... (11 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L851-L1016` → after: `L457-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L457-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L457-L464) · [Before (L851-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L851-L1016)

```diff
-             className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
-             children: [(0, AD.jsx)("div", {
-               className: "AccountSettingsDeleteAccountButtonTitle",
-               children: cD(Ez(gz, Rz))
-             }), (0, CD.d)() && (0, AD.jsx)("div", {
-               className: "AccountSettingsDeleteAccountButtonTitle",
-               children: cD("auth:discordActivityKickWarning")
-             }), (0, AD.jsx)(Iz, {
-               showing: wD
-             })]
-           }), (0, AD.jsx)("div", {
-             className: "SettingBox SettingsBoxWarning",
-             children: cD(gz ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
-           })]
-         })]
-       })
- ... (150 more removed lines; see GitHub link above)
+             className: "PlayerProfileSocialLinkMain",
+             children: [(0, Pp.jsx)(yp, {
+               platform: ip
+             }), (0, Pp.jsx)("span", {
+               className: "PlayerProfileSocialLinkText",
+               children: (0, Pp.jsx)("span", {
+                 className: "PlayerProfileSocialLinkName SmallTextBold",
+                 children: pp
```

#### 30. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L1018-L1021` → after: `L466-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L466-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L466-L472) · [Before (L1018-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L1018-L1021)

```diff
-             }
-           }), (0, AD.jsx)(QD.b, {
-             label: wD("settingsMenu:showNewItemIndicator"),
-             checked: sD.showNewItemIndicator,
+             })]
+           }), Op && (0, Pp.jsx)("button", {
+             type: "button",
+             className: "PlayerProfileSocialLinkEditButton",
+             ...(0, Lp.bb)({
+               stopPropagation: !0
+             }),
```

#### 31. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L1023-L1060` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L474) · [Before (L1023-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L1023-L1060)

```diff
-               XD.e.setClientEscMenuOptions({
-                 showNewItemIndicator: DD
-               })
-             }
-           })]
-         })
-       })),
-       Sz = (0, pD.memo)((function() {
-         const {
-           t: DD
-         } = (0, rD.E)(), {
-           soundVolume: zD,
-           musicVolume: wD
-         } = (0, XD.n)(["soundVolume", "musicVolume"]);
-         return (0, AD.jsxs)("div", {
-           className: "SettingsMenuRightInner",
- ... (22 more removed lines; see GitHub link above)
+               pp.stopPropagation(), pp.preventDefault(), vp()
```

#### 32. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L1062` → after: `L476-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L476-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L476-L483) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L1062)

```diff
-             format: DD => DD.toFixed(2)
+             children: (0, Pp.jsx)(xp.d, {
+               name: "pen-to-square"
+             })
+           }), !Op && (0, Pp.jsx)("span", {
+             className: "PlayerProfileSocialLinkArrow",
+             children: (0, Pp.jsx)(xp.d, {
+               name: "arrow-up-right-from-square"
+             })
```

#### 33. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L1065-L1142` → after: `L486-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L486-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L486-L491) · [Before (L1065-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L1065-L1142)

```diff
-       }));
-     var iz = wD(713),
-       lz = wD(1442),
-       Wz = wD(3674),
-       Nz = wD(34139),
-       Zz = wD(3482);
-     const yz = {
-       app: "notificationSettings:pushTargetsApp",
-       browser: "notificationSettings:pushTargetsBrowser",
-       msnPlay: "notificationSettings:pushTargetsMsnPlay"
-     };
- 
-     function kz() {
-       const {
-         t: DD
-       } = (0, rD.E)(), zD = (0, Zz.c)(), {
- ... (62 more removed lines; see GitHub link above)
+       }
+       return (0, Pp.jsxs)("button", {
+         type: "button",
+         className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
+         style: {
+           background: wp.color
```

#### 34. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L1144-L1152` → after: `L493-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L493-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L493-L495) · [Before (L1144-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L1144-L1152)

```diff
-         off: {
-           label: "notificationSettings:friendRequestsOff",
-           info: "notificationSettings:friendRequestsOffInfo"
-         }
-       },
-       oz = {
-         remindersOn: {
-           label: "dailyDrop:settingReminders",
-           reportAs: "reminders"
+         ...(0, Lp.bb)(),
+         onClick: () => {
+           vp()
```

#### 35. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L1154-L1232` → after: `L497-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L497-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L497-L506) · [Before (L1154-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L1154-L1232)

```diff
-         hidden: {
-           label: "dailyDrop:settingHide",
-           reportAs: "hidden"
-         }
-       };
- 
-     function az(DD) {
-       let {
-         setting: zD,
-         value: wD
-       } = DD;
-       const {
-         t: sD
-       } = (0, rD.E)(), LD = (0, Zz.c)(), [cD, gD] = (0, pD.useState)(null), [RD, UD] = (0, pD.useState)(!1), [fD, ID] = (0, pD.useState)(null);
-       return (0, pD.useEffect)((() => {
-         "remindersOn" === zD && (0, Nz.h)().then((DD => {
- ... (63 more removed lines; see GitHub link above)
+         children: [(0, Pp.jsx)(yp, {
+           platform: ip
+         }), (0, Pp.jsxs)("span", {
+           className: "PlayerProfileSocialLinkText",
+           children: [(0, Pp.jsx)("span", {
+             className: "PlayerProfileSocialLinkName SmallTextBold",
+             children: wp.name
+           }), (0, Pp.jsx)("span", {
+             className: "PlayerProfileSocialLinkCount SmallTextLight",
+             children: Up("homePage:profileSocialLinkAdd")
```

#### 36. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L1234` → after: `L508-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L508-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L508-L513) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L1234)

```diff
-         }), (0, AD.jsx)(kz, {})]
+         }), (0, Pp.jsx)("span", {
+           className: "PlayerProfileSocialLinkEditButton",
+           children: (0, Pp.jsx)(xp.d, {
+             name: "pen-to-square"
+           })
+         })]
```

#### 37. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L1282-L1285` → after: `L519-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L519-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L519-L522) · [Before (L1282-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L1282-L1285)

```diff
-         minChunkAddDist: gD,
-         getValue: RD,
-         onChange: UD,
-         setApplySettingsCallback: fD
+         socialLinks: ip,
+         editable: cp = !1,
+         userContext: Op,
+         onLinksUpdated: op
```

#### 38. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L1287-L1520` → after: `L524-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L524-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L524-L538) · [Before (L1287-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L1287-L1520)

```diff
-       const {
-         t: ID
-       } = (0, rD.E)(), {
-         clientEscMenuOptions: GD
-       } = (0, XD.n)(["clientEscMenuOptions", "showDistantNametags"]), nD = (0, pD.useRef)(RD("showFog")), MD = (0, pD.useRef)(GD.antiAliasing), OD = (0, pD.useRef)(GD.useWebGpu), [JD, ED] = (0, pD.useState)(null), [PD, CD] = (0, pD.useState)((() => (0, Hz.h)(hD.featureFlags.setti … [truncated]
-       (0, pD.useEffect)((() => {
-         let DD = !1;
-         return (0, hD.hasUsableWebGpuAdapter)().then((zD => {
-           DD || ED(zD)
-         })), (0, Hz.j)(hD.featureFlags.settings.canUseShaderPacks) && (0, Yz.c)().then((async zD => {
-           const pD = null !== zD && await async function(DD) {
-             const [{
-               isShaderPackActive: zD
-             }, {
-               loadPageShaderPackCompiler: pD
-             }] = await Promise.all([wD.e(137).then((() => wD(6691))), Promise.all([wD.e(77), wD.e(133), wD.e(136)]).then((() => wD(6645)))]);
- ... (218 more removed lines; see GitHub link above)
+       if (!cp && 0 === ip.length) return null;
+       const Sp = new Map(ip.map((pp => [pp.platform, pp]))),
+         xp = cp ? Ip.q : ip.map((pp => pp.platform));
+       return (0, Pp.jsx)("div", {
+         className: "PlayerProfileSocialLinks",
+         children: (0, Pp.jsx)("div", {
+           className: "PlayerProfileSocialLinksList",
+           children: xp.map((pp => (0, Pp.jsx)(Up, {
+             platform: pp,
+             link: Sp.get(pp),
+             editable: cp,
+             userContext: Op,
+             onLinksUpdated: op
+           }, pp)))
+         })
```

#### 39. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L10595-L10596` → after: `L542-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/99.js#L542-L543) · [Before (L10595-L10596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/99.js#L10595-L10596)

```diff
-   15845: DD => {
-     DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
+   4994: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/babylon-backend.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/babylon-backend.js` (187 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d)

#### 1. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L4)

```diff
-   41038: (DD, zD, wD) => {
+   41339: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L11-L21` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L11-L21) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L11-L21)

```diff
-     var pD = wD(41042),
-       sD = wD(37984);
-     class KD extends((0, pD.h)(sD.e)) {}(0, pD.j)(sD.e, KD);
-     var rD = wD(37178);
-     class LD extends((0, pD.h)(rD.f)) {}(0, pD.j)(rD.f, LD);
-     var cD = wD(37832);
-     class gD extends((0, pD.h)(cD.i)) {}(0, pD.j)(cD.i, gD);
-     var RD = wD(37422),
-       AD = wD(40192),
-       UD = wD(37414);
-     class fD extends((0, pD.h)(UD.f)) {
+     var Op = cp(41345),
+       op = cp(38232);
+     class Ip extends((0, Op.d)(op.d)) {}(0, Op.g)(op.d, Ip);
+     var Sp = cp(37411);
+     class xp extends((0, Op.d)(Sp.h)) {}(0, Op.g)(Sp.h, xp);
+     var Lp = cp(38071);
+     class Yp extends((0, Op.d)(Lp.i)) {}(0, Op.g)(Lp.i, Yp);
+     var Dp = cp(37655),
+       Ap = cp(40459),
+       Pp = cp(37646);
+     class Wp extends((0, Op.d)(Pp.i)) {
```

#### 3. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L23)

```diff
-         super(DD, zD, wD), (0, RD.l)(DD)
+         super(pp, ip, cp), (0, Dp.g)(pp)
```

#### 4. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L26)

```diff
-         (0, RD.o)(this._material), super.dispose(DD)
+         (0, Dp.i)(this._material), super.dispose(pp)
```

#### 5. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L28-L29` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L28-L29) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L28-L29)

```diff
-     }(0, pD.j)(UD.f, fD), (0, UD.i)({
-       disableUnusedSpecularTerm: pD.d,
+     }(0, Op.g)(Pp.i, Wp), (0, Pp.j)({
+       disableUnusedSpecularTerm: Op.c,
```

#### 6. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L32-L41` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L32-L41) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L32-L41)

```diff
-     var ID = wD(38667);
-     class BD extends((0, pD.h)(ID.f)) {}(0, pD.j)(ID.f, BD);
-     var GD = wD(38763),
-       hD = wD(37280),
-       nD = wD(38111),
-       MD = wD(37223);
-     class OD extends((0, pD.h)(GD.e)) {}(0, pD.j)(GD.e, OD);
-     class JD extends((0, pD.h)(hD.d)) {}(0, pD.j)(hD.d, JD);
-     class ED extends((0, pD.h)(nD.n)) {}(0, pD.j)(nD.n, ED);
-     class QD extends((0, pD.h)(MD.e)) {}(0, pD.j)(MD.e, QD)
+     var yp = cp(38916);
+     class Up extends((0, Op.d)(yp.g)) {}(0, Op.g)(yp.g, Up);
+     var wp = cp(39014),
+       vp = cp(37496),
+       tp = cp(38352),
+       Hp = cp(37454);
+     class dp extends((0, Op.d)(wp.b)) {}(0, Op.g)(wp.b, dp);
+     class ep extends((0, Op.d)(vp.d)) {}(0, Op.g)(vp.d, ep);
+     class jp extends((0, Op.d)(tp.q)) {}(0, Op.g)(tp.q, jp);
+     class kp extends((0, Op.d)(Hp.d)) {}(0, Op.g)(Hp.d, kp)
```

#### 7. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L43)

```diff
-   41447: (DD, zD, wD) => {
+   41801: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L48-L60` → after: `L48-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L48-L60) · [Before (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L48-L60)

```diff
-     var pD = wD(41451),
-       sD = (wD(39905), wD(41035), wD(40408), wD(41465)),
-       KD = wD(37267),
-       rD = wD(37070),
-       LD = wD(41475),
-       cD = wD(41482),
-       gD = wD(37217),
-       RD = (wD(41042), wD(41491)),
-       AD = wD(41485),
-       UD = wD(38695),
-       fD = wD(41496),
-       ID = wD(39776),
-       BD = wD(38684);
+     var Op = cp(41806),
+       op = (cp(40182), cp(41333), cp(40663), cp(41814)),
+       Ip = cp(37479),
+       Sp = cp(37313),
+       xp = cp(41826),
+       Lp = cp(41834),
+       Yp = cp(37448),
+       Dp = (cp(41345), cp(41851)),
+       Ap = cp(41843),
+       Pp = cp(38949),
+       Wp = cp(41860),
+       yp = cp(40062),
+       Up = cp(38938);
```

#### 9. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L62)

```diff
-       hD = BD.q,
+       vp = Up.o,
```

#### 10. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L64-L66` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L64-L66) · [Before (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L64-L66)

```diff
-       MD = DD => `gpuParticleSystem[${DD>>2}].${"xyzw"[3&DD]}`,
-       OD = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${BD.b}\n#define COLOR_POSITIONS ${nD(hD.colorPositions)}\n#define COLOR1 ${nD(hD.color1)}\n#define COLOR2 ${nD(hD.color2)}\n#define VELOCITY ${nD(hD.UG)}\n#define REMAP $ … [truncated]
-     ID.e.ShadersStore[`${GD}VertexShader`] = OD, ID.e.ShadersStore[`${GD}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvaryi … [truncated]
+       Hp = pp => `gpuParticleSystem[${pp>>2}].${"xyzw"[3&pp]}`,
+       dp = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Up.d}\n#define COLOR_POSITIONS ${tp(vp.colorPositions)}\n#define COLOR1 ${tp(vp.color1)}\n#define COLOR2 ${tp(vp.color2)}\n#define VELOCITY ${tp(vp.tw)}\n#define REMAP $ … [truncated]
+     yp.b.ShadersStore[`${wp}VertexShader`] = dp, yp.b.ShadersStore[`${wp}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvaryi … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L69-L71` → after: `L69-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L69-L71) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L69-L71)

```diff
-     var QD = wD(38678),
-       XD = wD(41502);
-     class VD extends QD.e {
+     var kp = cp(38930),
+       mp = cp(41864);
+     class Rp extends kp.c {
```

#### 12. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L73)

```diff
-         super(DD, zD, wD), this.renderer = wD, this.oB = pD, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(BD.n), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
+         super(pp, ip, cp), this.renderer = cp, this.pw = Op, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Up.m), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L82)

```diff
-             pD.texSubImage2D(pD.TEXTURE_2D, 0, KD % BD.l * 4, DD, 4 * (wD - KD), 1, pD.RGBA_INTEGER, pD.UNSIGNED_INT, sD, KD * BD.f), KD = wD
+             Op.texSubImage2D(Op.TEXTURE_2D, 0, Ip % Up.l * 4, pp, 4 * (cp - Ip), 1, Op.RGBA_INTEGER, Op.UNSIGNED_INT, op, Ip * Up.e), Ip = cp
```

#### 14. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L86)

```diff
-         const sD = pD.iI();
+         const op = Op.gy();
```

#### 15. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L93-L94` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L93-L94) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L93-L94)

```diff
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.oB.getAnimationRatio() || 1;
-         const zD = this.oB.getFrameId();
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.pw.getAnimationRatio() || 1;
+         const ip = this.pw.getFrameId();
```

#### 16. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L107-L108` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L107-L108) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L107-L108)

```diff
-         (0, XD.j)(this, this.uniforms, this.uniformBits, DD);
-         for (const wD of BD.p) this.uniforms[wD] = this.uniformBits[wD];
+         (0, mp.i)(this, this.uniforms, this.uniformBits, pp);
+         for (const cp of Up.n) this.uniforms[cp] = this.uniformBits[cp];
```

#### 17. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L110)

```diff
-         (0, XD.m)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (zD = this.ramp) || void 0 === zD || zD.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = AD.d.CreateRGBATexture(this.rampTexels.texels, BD.h, … [truncated]
+         (0, mp.m)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (ip = this.ramp) || void 0 === ip || ip.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Ap.b.CreateRGBATexture(this.rampTexels.texels, Up.k, … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L120)

```diff
-         this.oB = DD, this.reportFailure = zD, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, fD.c)(), this.engine = DD.iI(), this. … [truncated]
+         this.pw = pp, this.reportFailure = ip, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, Wp.c)(), this.engine = pp.gy(), this. … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L124-L126` → after: `L124-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L124-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L124-L126) · [Before (L124-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L124-L126)

```diff
-         zD > wD && this.warnOnce(`capacity:${DD}`, `particle system ${DD} holds ${wD} particles, not ${zD}: its records texture's limit`);
-         const pD = new VD(DD, Math.min(zD, wD), this, this.oB);
-         return this.oB.addParticleSystem(pD), pD
+         ip > cp && this.warnOnce(`capacity:${pp}`, `particle system ${pp} holds ${cp} particles, not ${ip}: its records texture's limit`);
+         const Op = new Rp(pp, Math.min(ip, cp), this, this.pw);
+         return this.pw.addParticleSystem(Op), Op
```

#### 20. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L131` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L131) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L131)

```diff
-         for (const pD of (0, UD.k)(DD.blendMode))
+         for (const Op of (0, Pp.o)(pp.blendMode))
```

#### 21. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L136)

```diff
-         this.oB._toBeDisposed.push(DD)
+         this.pw._toBeDisposed.push(pp)
```

#### 22. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L139)

```diff
-         this.oB.removeParticleSystem(DD), DD.releaseGl()
+         this.pw.removeParticleSystem(pp), pp.releaseGl()
```

#### 23. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L146)

```diff
-           oB: pD,
+           pw: Op,
```

#### 24. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L152)

```diff
-           LD = null !== (zD = DD.ramp) && void 0 !== zD ? zD : this.whiteRamp;
+           xp = null !== (ip = pp.ramp) && void 0 !== ip ? ip : this.whiteRamp;
```

#### 25. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L154)

```diff
-         for (const cD of (0, UD.k)(DD.blendMode)) {
+         for (const Lp of (0, Pp.o)(pp.blendMode)) {
```

#### 26. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L156)

```diff
-           wD.enableEffect(zD), zD.setTexture("gpuParticleTexture", DD.texture.mirror), zD.setTexture("gpuParticleRampTexture", LD), zD._bindTexture("gpuParticleRecords", DD.records), zD.setMatrix("gpuParticleView", pD.getViewMatrix()), zD.setMatrix("gpuParticleProjection", pD.get … [truncated]
+           cp.enableEffect(ip), ip.setTexture("gpuParticleTexture", pp.texture.mirror), ip.setTexture("gpuParticleRampTexture", xp), ip._bindTexture("gpuParticleRecords", pp.records), ip.setMatrix("gpuParticleView", Op.getViewMatrix()), ip.setMatrix("gpuParticleProjection", Op.get … [truncated]
```

#### 27. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L170)

```diff
-             if (zD) return `${pD} ${zD}`
+             if (ip) return `${Op} ${ip}`
```

#### 28. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L179)

```diff
-         return DD === UD.e ? this.multiplyEffect : this.effect
+         return pp === Pp.d ? this.multiplyEffect : this.effect
```

#### 29. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L184)

```diff
-           this.fail(null !== (wD = this.gl()) && void 0 !== wD && wD.isContextLost() ? PD : function(DD) {
+           this.fail(null !== (cp = this.gl()) && void 0 !== cp && cp.isContextLost() ? qp : function(pp) {
```

#### 30. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L192-L193` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L192-L193) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L192-L193)

```diff
-           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${DD}`), this.reportFailure(DD);
-           for (const DD of this.oB.XE.slice()) DD instanceof VD && DD.disposeOnStop && DD.dispose()
+           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${pp}`), this.reportFailure(pp);
+           for (const pp of this.pw.Wm.slice()) pp instanceof Rp && pp.disposeOnStop && pp.dispose()
```

#### 31. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L197-L198` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L197-L198) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L197-L198)

```diff
-     var xD = wD(39744);
-     class TD extends xD.b {
+     var Cp = cp(40024);
+     class Ep extends Cp.d {
```

#### 32. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L211-L227` → after: `L211-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L211-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L211-L227) · [Before (L211-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L211-L227)

```diff
-     var dD = wD(40137),
-       SD = wD(41027),
-       iD = wD(39872),
-       lD = wD(40090),
-       WD = wD(40084),
-       ND = wD(40015),
-       ZD = wD(41075),
-       yD = wD(37594),
-       kD = wD(41504),
-       mD = wD(41506),
-       eD = wD(41514),
-       oD = wD(40043),
-       aD = wD(2851),
-       uD = wD(37486),
-       vD = wD(40239),
-       tD = wD(37558),
- ... (1 more removed lines; see GitHub link above)
+     var Qp = cp(40405),
+       Jp = cp(41325),
+       Bp = cp(40159),
+       Np = cp(40365),
+       Tp = cp(40358),
+       fp = cp(40289),
+       bp = cp(41391),
+       hp = cp(37815),
+       ap = cp(41869),
+       np = cp(41871),
+       Fp = cp(41879),
+       gp = cp(40314),
+       Gp = cp(2949),
+       rp = cp(37713),
+       Zp = cp(40504),
+       zp = cp(37784),
+ ... (1 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L230-L231` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L230-L231) · [Before (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L230-L231)

```diff
-       if (DD.visibility < 1 || !DD.isVisible || !DD.isEnabled() || DD.metadata[FD.h] || !DD.isReady()) return !0;
-       const zD = DD.QE;
+       if (pp.visibility < 1 || !pp.isVisible || !pp.isEnabled() || pp.metadata[sp.f] || !pp.isReady()) return !0;
+       const ip = pp.Am;
```

#### 34. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L235)

```diff
-           sD = pD.yI();
+           op = Op.Ky();
```

#### 35. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L242)

```diff
-         this.AU = DD, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, zD.onBeforeActiveMeshesEvaluationObservable.add((() => {
+         this.HP = pp, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, ip.onBeforeActiveMeshesEvaluationObservable.add((() => {
```

#### 36. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L252-L255` → after: `L252-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L252-L255) · [Before (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L252-L255)

```diff
-           AU: pD
-         } = this, sD = null === (zD = pD.qJ) || void 0 === zD ? void 0 : zD.visibility;
-         if (!sD || !DD || pD.wB.pB) return !1;
-         if (!(pD.KU.dpD[0] >= tD.h)) return !1;
+           HP: Op
+         } = this, op = null === (ip = Op.Zk) || void 0 === ip ? void 0 : ip.visibility;
+         if (!op || !pp || Op.WU.yU) return !1;
+         if (!(Op.WP.FOp[0] >= zp.i)) return !1;
```

#### 37. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L258)

```diff
-         const rD = pD.CU,
+         const Sp = Op.BP,
```

#### 38. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L261)

```diff
-         return cD[0] = LD.x + rD[0], cD[1] = LD.y + rD[1], cD[2] = LD.z + rD[2], !!sD.eyeClear(cD[0], cD[1], cD[2], DD.minZ, KD, pD.KU) && (this.vis = sD, this.passable.clear(), this.count = 0, !0)
+         return Lp[0] = xp.x + Sp[0], Lp[1] = xp.y + Sp[1], Lp[2] = xp.z + Sp[2], !!op.eyeClear(Lp[0], Lp[1], Lp[2], pp.minZ, Ip, Op.WP) && (this.vis = op, this.passable.clear(), this.count = 0, !0)
```

#### 39. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L282-L283` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L282-L283) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L282-L283)

```diff
-           KU: LD
-         } = this.AU, [cD, gD] = LD.dpD, RD = null !== wD && wD.update(pD[0], pD[1], pD[2], LD.PDD, cD, gD, this.passable);
+           WP: xp
+         } = this.HP, [Lp, Yp] = xp.FOp, Dp = null !== cp && cp.update(Op[0], Op[1], Op[2], xp.epp, Lp, Yp, this.passable);
```

#### 40. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L294)

```diff
-           oD.f.prototype.push.call(DD, pD)
+           gp.g.prototype.push.call(pp, Op)
```

#### 41. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L299-L304` → after: `L299-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L299-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L299-L304) · [Before (L299-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L299-L304)

```diff
-     var qD = wD(37543),
-       Dz = wD(37497),
-       zz = wD(40220),
-       wz = wD(41522),
-       pz = wD(40224),
-       sz = wD(40155);
+     var ii = cp(37769),
+       ci = cp(37723),
+       Oi = cp(40476),
+       oi = cp(41884),
+       Ii = cp(40481),
+       Si = cp(40415);
```

#### 42. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L318-L319` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L318-L319) · [Before (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L318-L319)

```diff
-       if (!zD || !0 !== zD[uD.k]) return;
-       const wD = zD[uD.p],
+       if (!ip || !0 !== ip[rp.o]) return;
+       const cp = ip[rp.s],
```

#### 43. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L327` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L327) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L327)

```diff
-       const zD = DD.QE;
+       const ip = pp.Am;
```

#### 44. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L329)

```diff
-         const DD = zD[wD].yI();
+         const pp = ip[cp].Ky();
```

#### 45. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L333)

```diff
-         const DD = zD[wD].yI();
+         const pp = ip[cp].Ky();
```

#### 46. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L343)

```diff
-       if ("function" !== typeof wD) throw new Error(`terrainDrawState: Babylon has no ${zD} to hook`);
+       if ("function" !== typeof cp) throw new Error(`terrainDrawState: Babylon has no ${ip} to hook`);
```

#### 47. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L348)

```diff
-       const KD = wD.KU.PDD,
+       const Ip = cp.WP.epp,
```

#### 48. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L352)

```diff
-         gD = new qD.c(KD, DD.iI());
+         Yp = new ii.d(Ip, pp.gy());
```

#### 49. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L354)

```diff
-         if (Uz.has(DD) || (Uz.add(DD), DD.onContextLostObservable.add(cz), DD.SI.add(cz)), Az) return;
+         if (yi.has(pp) || (yi.add(pp), pp.onContextLostObservable.add(Di), pp.Fy.add(Di)), Wi) return;
```

#### 50. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L369-L370)

```diff
-         const sD = fz(pz.b.prototype, "resetDrawCache");
-         pz.b.prototype.resetDrawCache = function(DD, zD) {
+         const op = Ui(Ii.d.prototype, "resetDrawCache");
+         Ii.d.prototype.resetDrawCache = function(pp, ip) {
```

#### 51. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L384)

```diff
-       }(DD.iI());
+       }(pp.gy());
```

#### 52. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L399-L400` → after: `L399-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L399-L400) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L399-L400)

```diff
-             wD = DD.kpD[0],
-             pD = DD.kpD[1];
+             cp = pp.KOp[0],
+             Op = pp.KOp[1];
```

#### 53. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L416)

```diff
-             KD = cD.Jf(DD.activeCamera),
+             Ip = Lp.mW(pp.activeCamera),
```

#### 54. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L419)

```diff
-             const zD = DD.iI().currentRenderPassId;
+             const ip = pp.gy().currentRenderPassId;
```

#### 55. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L436` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L436) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L436)

```diff
-             if (!vD.b.IsInFrustum(zD.kpD, pD)) continue;
+             if (!Zp.d.IsInFrustum(ip.KOp, Op)) continue;
```

#### 56. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L446)

```diff
-                 if (rD && pD[zD] === gD) fD && 1 === sD[zD] && YD(UD) && 0, cD.see(UD, 1 === sD[zD] ? AD : -1);
+                 if (Sp && Op[ip] === Yp) Wp && 1 === op[ip] && Kp(Pp) && 0, Lp.see(Pp, 1 === op[ip] ? Ap : -1);
```

#### 57. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L449)

```diff
-                   const DD = !0 === UD.metadata[Dz.k];
+                   const pp = !0 === Pp.metadata[ci.n];
```

#### 58. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L453)

```diff
-                 } else KD ? OD(UD, AD, !0 === UD.metadata[Dz.k]) : oD.f.prototype.push.call(wD, UD)
+                 } else Ip ? dp(Pp, Ap, !0 === Pp.metadata[ci.n]) : gp.g.prototype.push.call(cp, Pp)
```

#### 59. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L460` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L460) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L460)

```diff
-         const KD = zD.ypD;
+         const Ip = ip.sOp;
```

#### 60. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L463)

```diff
-           zD.isEnabled() && oD.f.prototype.push.call(pD, zD)
+           ip.isEnabled() && gp.g.prototype.push.call(Op, ip)
```

#### 61. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L467-L468` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L467-L468) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L467-L468)

```diff
-         mpD: () => cD.culled,
-         VpD: (DD, zD) => {
+         iop: () => Lp.culled,
+         TOp: (pp, ip) => {
```

#### 62. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L472` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L472) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L472)

```diff
-             gD = `${sD}|${LD}|${cD}`;
+             Yp = `${op}|${xp}|${Lp}`;
```

#### 63. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L476-L478` → after: `L476-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L476-L478) · [Before (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L476-L478)

```diff
-             wD.JzD([sD * KD - 1, LD * KD - 1, cD * KD - 1], null, DD), RD = Object.assign(pD(DD, KD + 2), {
-               epD: gD,
-               opD: 0,
+             cp.uip([op * Ip - 1, xp * Ip - 1, Lp * Ip - 1], null, pp), Dp = Object.assign(Op(pp, Ip + 2), {
+               Oop: Yp,
+               oop: 0,
```

#### 64. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L482` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L482) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L482)

```diff
-             }), MD(RD), fD[RD._noaSlot] = (0, aD.h)(sD, LD, cD), ID[3 * RD._noaSlot] = sD, ID[3 * RD._noaSlot + 1] = LD, ID[3 * RD._noaSlot + 2] = cD, rD.set(gD, RD)
+             }), Hp(Dp), Wp[Dp._noaSlot] = (0, Gp.j)(op, xp, Lp), yp[3 * Dp._noaSlot] = op, yp[3 * Dp._noaSlot + 1] = xp, yp[3 * Dp._noaSlot + 2] = Lp, Sp.set(Yp, Dp)
```

#### 65. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L484)

```diff
-           RD.opD++, DD.metadata[uD.r] = RD
+           Dp.oop++, pp.metadata[rp.w] = Dp
```

#### 66. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L486-L488` → after: `L486-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L486-L488) · [Before (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L486-L488)

```diff
-         zW: DD => {
-           const zD = DD.metadata[uD.r];
-           zD && (zD.opD--, zD.opD <= 0 && (rD.delete(zD.epD), GD.push(zD._noaSlot)), DD.metadata[uD.r] = null)
+         xJ: pp => {
+           const ip = pp.metadata[rp.w];
+           ip && (ip.oop--, ip.oop <= 0 && (Sp.delete(ip.Oop), wp.push(ip._noaSlot)), pp.metadata[rp.w] = null)
```

#### 67. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L490` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L490) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L490)

```diff
-         ZpD: (DD, zD) => {
+         zOp: (pp, ip) => {
```

#### 68. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L492)

```diff
-             pD = zD.metadata[uD.r];
+             Op = ip.metadata[rp.w];
```

#### 69. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L506)

```diff
-         Z6: DD => {
+         K9: pp => {
```

#### 70. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L508-L509` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L508-L509) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L508-L509)

```diff
-             zD.jpD.apD(DD), zD.bpD.apD(DD);
-             for (const wD of zD.kpD) wD.apD(DD);
+             ip.nOp.Iop(pp), ip.aOp.Iop(pp);
+             for (const cp of ip.KOp) cp.Iop(pp);
```

#### 71. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L531` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L531) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L531)

```diff
-         if (!(DD * (DD >= 0 ? rD : pD) + zD * (zD >= 0 ? LD : sD) + RD * (RD >= 0 ? cD : KD) + wD[gD + 3] >= 0)) return !1
+         if (!(pp * (pp >= 0 ? Sp : Op) + ip * (ip >= 0 ? xp : op) + Dp * (Dp >= 0 ? Lp : Ip) + cp[Yp + 3] >= 0)) return !1
```

#### 72. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L535)

```diff
-     var hz = wD(37760);
+     var Hi = cp(37996);
```

#### 73. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L538-L539` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L538-L539) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L538-L539)

```diff
-         var wD = DD.oB;
-         wD.ApD(new eD.c(wD));
+         var cp = pp.pw;
+         cp.uOp(new Fp.c(cp));
```

#### 74. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L541` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L541) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L541)

```diff
-         wD.vpD = pD, pD.blocks = [];
+         cp.xop = Op, Op.blocks = [];
```

#### 75. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L544-L546` → after: `L544-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L544-L546) · [Before (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L544-L546)

```diff
-         this.textPlanes = LD, this.mpD = () => sD.mpD(), this.Z6 = DD => {
-           RD(pD, DD), sD.Z6(DD)
-         }, this.VpD = (zD, wD, rD) => {
+         this.textPlanes = xp, this.iop = () => op.iop(), this.K9 = pp => {
+           Dp(Op, pp), op.K9(pp)
+         }, this.TOp = (ip, cp, Sp) => {
```

#### 76. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L548` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L548) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L548)

```diff
-           if (!zD.metadata[uD.p] && !zD.metadata[uD.j]) {
+           if (!ip.metadata[rp.s] && !ip.metadata[rp.l]) {
```

#### 77. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L550-L551` → after: `L550-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L550-L551) · [Before (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L550-L551)

```diff
-               var cD = pD.ypD;
-               if (zD.metadata[uD.x] && !zD.parent) {
+               var Lp = Op.sOp;
+               if (ip.metadata[rp.B] && !ip.parent) {
```

#### 78. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L553-L554` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L553-L554) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L553-L554)

```diff
-                 var RD = zD.FW().FpD;
-                 zD.metadata[uD.z] = RD.center.length() + RD.radius, zD.lI = !0
+                 var Dp = ip.bJ().Yop;
+                 ip.metadata[rp.C] = Dp.center.length() + Dp.radius, ip.Gy = !0
```

#### 79. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L556` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L556) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L556)

```diff
-               return cD.push(zD), zD.metadata[uD.g] = cD, void(zD.metadata[uD.j] = !0)
+               return Lp.push(ip), ip.metadata[rp.h] = Lp, void(ip.metadata[rp.l] = !0)
```

#### 80. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L566` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L566) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L566)

```diff
-               DD.AU.JzD(hD, null, nD), GD = AD(nD, gD), pD.blocks.push(GD), KD[BD] = GD, GD.epD = BD
+               pp.HP.uip(vp, null, tp), wp = Ap(tp, Yp), Op.blocks.push(wp), Ip[Up] = wp, wp.Oop = Up
```

#### 81. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L568)

```diff
-             sD.VpD(zD, rD), sD.ZpD(GD, zD), GD.opD = (GD.opD || 0) + 1, zD.metadata[uD.p] = GD, zD.metadata[uD.k] = !0, zD.lI = !0
+             op.TOp(ip, Sp), op.zOp(wp, ip), wp.oop = (wp.oop || 0) + 1, ip.metadata[rp.s] = wp, ip.metadata[rp.o] = !0, ip.Gy = !0
```

#### 82. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L570` → after: `L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L570) · [Before (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L570)

```diff
-         }, this.zW = DD => {
+         }, this.xJ = pp => {
```

#### 83. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L572-L574` → after: `L572-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L572-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L572-L574) · [Before (L572-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L572-L574)

```diff
-             DD.metadata[uD.j] && ((0, aD.l)(DD.metadata[uD.g], DD), DD.metadata[uD.j] = !1), DD.metadata[uD.g] === LD && (DD.lI = !1), DD.metadata[uD.g] = void 0, DD.metadata[uD.z] = void 0;
-             var zD = DD.metadata[uD.p];
-             zD && zD.entries && (DD.metadata[uD.k] && sD.removeEntry(zD, DD), zD.opD--, zD.opD <= 0 && (delete KD[zD.epD], (0, aD.l)(pD.blocks, zD))), sD.zW(DD), DD.metadata[uD.p] = null, DD.metadata[uD.k] = !1
+             pp.metadata[rp.l] && ((0, Gp.l)(pp.metadata[rp.h], pp), pp.metadata[rp.l] = !1), pp.metadata[rp.h] === xp && (pp.Gy = !1), pp.metadata[rp.h] = void 0, pp.metadata[rp.C] = void 0;
+             var ip = pp.metadata[rp.s];
+             ip && ip.entries && (pp.metadata[rp.o] && op.removeEntry(ip, pp), ip.oop--, ip.oop <= 0 && (delete Ip[ip.Oop], (0, Gp.l)(Op.blocks, ip))), op.xJ(pp), pp.metadata[rp.s] = null, pp.metadata[rp.o] = !1
```

#### 84. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L576` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L576) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L576)

```diff
-         }, this.W4 = function(DD) {
+         }, this.h_ = function(pp) {
```

#### 85. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L578-L581` → after: `L578-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L578-L581) · [Before (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L578-L581)

```diff
-           if (DD.metadata[uD.p]) {
-             if (DD.metadata[uD.k] === zD) return;
-             var wD = DD.metadata[uD.p];
-             wD && wD.entries && (zD ? sD.ZpD(wD, DD) : sD.removeEntry(wD, DD)), DD.metadata[uD.k] = zD
+           if (pp.metadata[rp.s]) {
+             if (pp.metadata[rp.o] === ip) return;
+             var cp = pp.metadata[rp.s];
+             cp && cp.entries && (ip ? op.zOp(cp, pp) : op.removeEntry(cp, pp)), pp.metadata[rp.o] = ip
```

#### 86. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L583-L585` → after: `L583-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L583-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L583-L585) · [Before (L583-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L583-L585)

```diff
-             if (DD.metadata[uD.j] === zD) return;
-             var KD = DD.metadata[uD.g] || pD.ypD;
-             zD ? KD.push(DD) : (0, aD.l)(KD, DD), DD.metadata[uD.j] = zD
+             if (pp.metadata[rp.l] === ip) return;
+             var Ip = pp.metadata[rp.h] || Op.sOp;
+             ip ? Ip.push(pp) : (0, Gp.l)(Ip, pp), pp.metadata[rp.l] = ip
```

#### 87. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L589)

```diff
-           gD = zD * DD.AU.KU.PDD,
+           Yp = ip * pp.HP.WP.epp,
```

#### 88. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L592)

```diff
-               DD.jpD.apD(zD), DD.bpD.apD(zD), DD.kpD.forEach((DD => DD.apD(zD))), DD.blocks && RD(DD, zD)
+               pp.nOp.Iop(ip), pp.aOp.Iop(ip), pp.KOp.forEach((pp => pp.Iop(ip))), pp.blocks && Dp(pp, ip)
```

#### 89. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L596-L598` → after: `L596-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L596-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L596-L598) · [Before (L596-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L596-L598)

```diff
-             var wD = new rD.WI(DD[0], DD[1], DD[2]),
-               pD = new rD.WI(DD[0] + zD, DD[1] + zD, DD[2] + zD);
-             return new mD.d(wD, pD, void 0, void 0, void 0, cD)
+             var cp = new Sp.Zy(pp[0], pp[1], pp[2]),
+               Op = new Sp.Zy(pp[0] + ip, pp[1] + ip, pp[2] + ip);
+             return new np.b(cp, Op, void 0, void 0, void 0, Lp)
```

#### 90. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L600)

```diff
-         sD = Iz(wD, pD, DD.AU, AD, ((DD, zD) => {
+         op = wi(cp, Op, pp.HP, Ap, ((pp, ip) => {
```

#### 91. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L603` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L603) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L603)

```diff
-             pD.isEnabled(!1) && ((0, hz.e)(pD, zD) && oD.f.prototype.push.call(DD, pD))
+             Op.isEnabled(!1) && ((0, Hi.d)(Op, ip) && gp.g.prototype.push.call(pp, Op))
```

#### 92. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L613)

```diff
-         Jq: pD,
+         tV: Op,
```

#### 93. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L617-L618` → after: `L617-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L617-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L617-L618) · [Before (L617-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L617-L618)

```diff
-       } = DD.model.Mq, LD = DD.psD;
-       LD.position.Z2(zD[0], zD[1], zD[2]), LD.rotation.Z2(wD[0], wD[1], wD[2]);
+       } = pp.model.wV, xp = pp.vop;
+       xp.position.i5(ip[0], ip[1], ip[2]), xp.rotation.i5(cp[0], cp[1], cp[2]);
```

#### 94. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L620` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L620) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L620)

```diff
-       cD.position.Z2(pD[0], pD[1], pD[2]), cD.fov = sD, cD.minZ = KD, cD.maxZ = rD
+       Lp.position.i5(Op[0], Op[1], Op[2]), Lp.fov = op, Lp.minZ = Ip, Lp.maxZ = Sp
```

#### 95. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L624` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L624) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L624)

```diff
-       const zD = DD.iI(),
+       const ip = pp.gy(),
```

#### 96. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L627` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L627) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L627)

```diff
-       if (!pD || wD.AB < 2 || zD.OpD || pD.getParameter(pD.DEPTH_BITS) < 24) return !1;
+       if (!Op || cp.eU < 2 || ip.lOp || Op.getParameter(Op.DEPTH_BITS) < 24) return !1;
```

#### 97. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L645-L647` → after: `L645-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L645-L647) · [Before (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L645-L647)

```diff
-       return [zD, yD.h].map(((zD, wD) => {
-         const pD = new sD.d("light", rD.WI.FromArray(zD), DD);
-         return pD.diffuse = KD.Color3.FromArray([1, 1, 1]), pD.specular = KD.Color3.FromArray([1, 1, 1]), pD.intensity = yD.d[wD], pD
+       return [ip, hp.f].map(((ip, cp) => {
+         const Op = new op.d("light", Sp.Zy.FromArray(ip), pp);
+         return Op.diffuse = Ip.Color3.FromArray([1, 1, 1]), Op.specular = Ip.Color3.FromArray([1, 1, 1]), Op.intensity = hp.b[cp], Op
```

#### 98. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L650)

```diff
-     class Ez extends cD.b {
+     class ki extends Lp.e {
```

#### 99. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L659)

```diff
-         this.heldTexture = DD, this.particleTexture = null !== (zD = null === DD || void 0 === DD ? void 0 : DD.mirror) && void 0 !== zD ? zD : null
+         this.heldTexture = pp, this.particleTexture = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.mirror) && void 0 !== ip ? ip : null
```

#### 100. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L668` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L668) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L668)

```diff
-         DD && (this.particleTexture = null, (0, gD.L)(this.heldTexture), this.heldTexture = null), super.dispose(DD, zD, wD)
+         pp && (this.particleTexture = null, (0, Yp.C)(this.heldTexture), this.heldTexture = null), super.dispose(pp, ip, cp)
```

#### 101. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L671` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L671) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L671)

```diff
-     const Qz = pD.e.Zero();
+     const mi = Op.c.Zero();
```

#### 102. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L673-L674` → after: `L673-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L673-L674) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L673-L674)

```diff
-       ZwD: function(DD, zD) {
-         return new TD(DD, zD.iwD, {
+       Zcp: function(pp, ip) {
+         return new Ep(pp, ip.Fcp, {
```

#### 103. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L681` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L681) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L681)

```diff
-       rsD: function(DD, zD) {
+       jop: function(pp, ip) {
```

#### 104. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L683-L684` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L683-L684) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L683-L684)

```diff
-           const pD = new ND.b(DD.engine);
-           DD.oB = pD, pD.detachControl(), pD.autoClear = !1, WD.d.MIN_RENDERINGGROUPS = -1;
+           const Op = new fp.c(pp.engine);
+           pp.pw = Op, Op.detachControl(), Op.autoClear = !1, Tp.d.MIN_RENDERINGGROUPS = -1;
```

#### 105. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L686-L687` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L686-L687) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L686-L687)

```diff
-           pD.setRenderingAutoClearDepthStencil(0, !1), iD.e.Enabled = !1, DD.DsD = new nz(DD, Math.round(zD.zsD)), DD.psD = new SD.e("camHolder", pD), DD.camera = new dD.c("camera", new rD.WI(0, 0, 0), pD), DD.camera.parent = DD.psD, Mz(DD), (0, yD.i)(DD, ((DD, zD, wD) => (0, ZD. … [truncated]
-           const sD = wD(pD, zD.KsD);
+           Op.setRenderingAutoClearDepthStencil(0, !1), Bp.b.Enabled = !1, pp.yop = new di(pp, Math.round(ip.Uop)), pp.vop = new Jp.b("camHolder", Op), pp.camera = new Qp.b("camera", new Sp.Zy(0, 0, 0), Op), pp.camera.parent = pp.vop, ei(pp), (0, hp.i)(pp, ((pp, ip, cp) => (0, bp. … [truncated]
+           const op = cp(Op, ip.uop);
```

#### 106. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L689)

```diff
-             sD.some((zD => zD === DD)) || console.error(`Light "${DD.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
+             op.some((ip => ip === pp)) || console.error(`Light "${pp.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
```

#### 107. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L691)

```diff
-         }(DD, zD, Jz), Oz(DD.oB)
+         }(pp, ip, ji), ui(pp.pw)
```

#### 108. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L693` → after: `L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L693) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L693)

```diff
-       wsD: Mz,
+       wop: ei,
```

#### 109. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L695)

```diff
-         const sD = DD.oB;
+         const op = pp.pw;
```

#### 110. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L698-L699` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L698-L699) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L698-L699)

```diff
-       csD: function(DD, zD, wD) {
-         return DD.engine.AB >= 2 && (DD.gsD || (DD.gsD = new CD(DD.oB, DD.RsD)), !DD.gsD.failed) ? DD.gsD.EW(zD, wD) : new Ez(zD, wD, DD.oB)
+       Rop: function(pp, ip, cp) {
+         return pp.engine.eU >= 2 && (pp.qop || (pp.qop = new Mp(pp.pw, pp.Mop)), !pp.qop.failed) ? pp.qop.eJ(ip, cp) : new ki(ip, cp, pp.pw)
```

#### 111. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L701-L703` → after: `L701-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L701-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L701-L703) · [Before (L701-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L701-L703)

```diff
-       UsD: function(DD, zD) {
-         DD.oB.XE.forEach((wD => {
-           if (wD instanceof VD) return void wD.Z6(zD, DD.AU.CU);
+       Xop: function(pp, ip) {
+         pp.pw.Wm.forEach((cp => {
+           if (cp instanceof Rp) return void cp.K9(ip, pp.HP.BP);
```

#### 112. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L709` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L709) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L709)

```diff
-             pD.worldOffset.x = -DD.AU.CU[0], pD.worldOffset.y = -DD.AU.CU[1], pD.worldOffset.z = -DD.AU.CU[2]
+             Op.worldOffset.x = -pp.HP.BP[0], Op.worldOffset.y = -pp.HP.BP[1], Op.worldOffset.z = -pp.HP.BP[2]
```

#### 113. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L714-L715` → after: `L714-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L714-L715) · [Before (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L714-L715)

```diff
-         const pD = new LD.c(zD, DD.oB, null, void 0, void 0, !1);
-         return (0, ZD.e)(zD, wD, DD.oB, pD), pD
+         const Op = new xp.b(ip, pp.pw, null, void 0, void 0, !1);
+         return (0, bp.e)(ip, cp, pp.pw, Op), Op
```

#### 114. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L717-L719` → after: `L717-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L717-L719) · [Before (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L717-L719)

```diff
-       aB: gz,
-       AsD: function(DD, zD) {
-         return Qz.origin.pC(zD.origin), Qz.direction.pC(zD.direction), Qz.length = zD.length, Qz.epsilon = zD.epsilon, Qz.AsD(DD, !1, void 0, !1, void 0, !0).pickedPoint
+       iw: Ai,
+       Eop: function(pp, ip) {
+         return mi.origin.rM(ip.origin), mi.direction.rM(ip.direction), mi.length = ip.length, mi.epsilon = ip.epsilon, mi.Eop(pp, !1, void 0, !1, void 0, !0).pickedPoint
```

#### 115. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L723` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L723) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L723)

```diff
-   41042: (DD, zD, wD) => {
+   41345: (pp, ip, cp) => {
```

#### 116. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L726-L727` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L727) · [Before (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L726-L727)

```diff
-       h: () => nD,
-       j: () => vD
+       g: () => Zp
```

#### 117. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L729-L742` → after: `L729-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L729-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L729-L742) · [Before (L729-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L729-L742)

```diff
-     var pD = wD(40192),
-       sD = wD(41044),
-       KD = wD(41084),
-       rD = wD(41049),
-       LD = wD(37805),
-       cD = wD(37816),
-       gD = wD(37820),
-       RD = wD(37824),
-       AD = wD(37210),
-       UD = wD(37217),
-       fD = wD(41055),
-       ID = wD(37201),
-       BD = wD(37206),
-       GD = wD(37186);
+     var Op = cp(40459),
+       op = cp(41347),
+       Ip = cp(41393),
+       Sp = cp(41353),
+       xp = cp(38045),
+       Lp = cp(38055),
+       Yp = cp(38061),
+       Dp = cp(38064),
+       Ap = cp(37445),
+       Pp = cp(37448),
+       Wp = cp(41359),
+       yp = cp(37433),
+       Up = cp(37436),
+       wp = cp(37421);
```

#### 118. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L748)

```diff
-         LI: DD
+         Py: pp
```

#### 119. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L753)

```diff
-       const zD = class extends fD.e {
+       const ip = class extends Wp.c {
```

#### 120. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L755-L756` → after: `L755-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L755-L756) · [Before (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L755-L756)

```diff
-             const pD = (0, BD.db)(zD),
-               sD = pD && (0, BD.y)(pD, DD.name);
+             const Op = (0, Up.$)(ip),
+               op = Op && (0, Up.s)(Op, pp.name);
```

#### 121. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L758` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L758) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L758)

```diff
-             super(zD, DD.name, DD.priority, sD ? sD.defines : DD.defines(...rD), !1), this.featureState = void 0, this.featureState = wD, this._pluginManager._addPlugin(this), this._enable(!0), (0, BD.B)(this._material, DD, this.featureState, this._pluginDefineNames)
+             super(ip, pp.name, pp.priority, op ? op.defines : pp.defines(...Sp), !1), this.featureState = void 0, this.featureState = cp, this._pluginManager._addPlugin(this), this._enable(!0), (0, Up.v)(this._material, pp, this.featureState, this._pluginDefineNames)
```

#### 122. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L764` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L764) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L764)

```diff
-             return DD === GD.c.GLSL || DD === GD.c.WGSL
+             return pp === wp.b.GLSL || pp === wp.b.WGSL
```

#### 123. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L767-L768` → after: `L767-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L767-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L767-L768) · [Before (L767-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L767-L768)

```diff
-         wD = (0, ID.j)(DD);
-       for (const [pD, sD] of Object.entries(ID.b)) {
+         cp = (0, yp.l)(pp);
+       for (const [Op, op] of Object.entries(yp.e)) {
```

#### 124. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L782-L784` → after: `L782-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L782-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L782-L784) · [Before (L782-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L782-L784)

```diff
-     var OD = wD(39744),
-       JD = wD(41064);
-     const ED = new WeakMap;
+     var dp = cp(40024),
+       ep = cp(41367),
+       jp = cp(41375);
```

#### 125. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L787-L794` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L787) · [Before (L787-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L787-L794)

```diff
-       let pD = ED.get(wD);
-       pD || (pD = new Map, ED.set(wD, pD));
-       const {
-         url: sD
-       } = DD;
-       let KD = pD.get(sD);
-       return KD || (KD = async function(DD, zD, wD) {
-         var pD;
+       return (0, jp.h)(cp, ip.urls, (() => async function(pp, ip, cp) {
```

#### 126. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L796-L806` → after: `L789-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L789-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L789-L815) · [Before (L796-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L796-L806)

```diff
-           width: sD,
-           height: KD
-         } = DD.getSize(), LD = Math.round(KD / sD), cD = DD.getInternalTexture(), gD = zD && zD.byteLength === sD * sD * LD * 4 ? zD : null !== (pD = XD.get(cD)) && void 0 !== pD ? pD : DD._readPixelsSync(), RD = new JD.b(gD, sD, sD, LD, OD.b.TEXTUREFORMAT_RGBA, wD, !0, !1, rD.b. … [truncated]
-         XD.has(cD) || (! function(DD, zD) {
-           const wD = zD.createRawTexture(new Uint8Array(4), 1, 1, OD.b.TEXTUREFORMAT_RGBA, !1, !1, rD.b.NEAREST_SAMPLINGMODE);
-           DD._hardwareTexture.release(), zD.unbindAllTextures(), wD._swapAndDie(DD, !1)
-         }(cD, wD.iI()), XD.set(cD, gD));
-         return RD
-       }(DD, zD, wD), pD.set(sD, KD), KD.catch((() => {
-         pD.delete(sD)
-       }))), KD
+           width: Op
+         } = pp[0].getSize(), op = pp.map(((pp, cp) => {
+           var op;
+           const Ip = Math.round(pp.getSize().height / Op),
+             Sp = null === ip || void 0 === ip ? void 0 : ip[cp];
+           return {
+             pixels: Sp && Sp.byteLength === Op * Op * Ip * 4 ? Sp : null !== (op = mp.get(pp.getInternalTexture())) && void 0 !== op ? op : pp._readPixelsSync(),
+             layers: Ip
+           }
+         })), Ip = cp.gy().getCaps().texture2DArrayMaxLayerCount, xp = (0, jp.d)(op, Op, Ip).map((pp => {
+           let {
+             pixels: ip,
+             layers: op
+           } = pp;
+           return {
+             atlas: new ep.c(ip, Op, Op, op, dp.d.TEXTUREFORMAT_RGBA, cp, !0, !1, Sp.d.NEAREST_NEAREST_MIPLINEAR),
+ ... (11 more added lines; see GitHub link above)
```

#### 127. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L809-L810` → after: `L818-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L818-L819) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L809-L810)

```diff
-     var VD = wD(37827);
-     class PD extends(nD(cD.j)) {
+     var Rp = cp(38069);
+     class qp extends(tp(Lp.f)) {
```

#### 128. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L812-L813` → after: `L821-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L821-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L821-L822) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L812-L813)

```diff
-         super(DD, zD), zD.textures.forEach(((DD, zD) => {
-           DD.mirror.onLoadObservable.add((DD => {
+         super(pp, ip), this.loaded = new Set, this.mirrors = void 0, this.mirrors = ip.textures.map((pp => pp.mirror)), this.mirrors.forEach(((pp, ip) => {
+           pp.onLoadObservable.add((pp => {
```

#### 129. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L815` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L824) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L815)

```diff
-               console.error(`Failed to build texture array for atlas ${zD}`, DD)
+               console.error(`Failed to build the texture arrays, at atlas ${ip}`, pp)
```

#### 130. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L818` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L827) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L818)

```diff
-         })), (0, VD.g)(zD, DD.shaderLanguage)
+         })), (0, Rp.n)(ip, pp.shaderLanguage)
```

#### 131. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L827-L828` → after: `L835-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L835-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L835-L839) · [Before (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L827-L828)

```diff
-           LD = sD.useWebGL2 ? await QD(DD, null !== (wD = null === (pD = sD.sources.pixels) || void 0 === pD ? void 0 : pD[zD]) && void 0 !== wD ? wD : null, this._material.Ul()) : null;
-         (0, VD.b)(this._material, sD, zD, LD, KD, Math.round(rD / KD), this._material.shaderLanguage)
+           Ip = this._material.shaderLanguage;
+         if (!cp.useWebGL2) return void(0, Rp.f)(this._material, cp, ip, Op, Math.round(op / Op), Ip);
+         if (this.loaded.add(ip), this.loaded.size < this.mirrors.length) return;
+         const Sp = await kp(this.mirrors, cp.sources, this._material.Gl());
+         (0, Rp.b)(this._material, cp, Sp, Op, Ip)
```

#### 132. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L831-L840` → after: `L842-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L842-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L842-L851) · [Before (L831-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L831-L840)

```diff
-     var CD = wD(41066),
-       xD = wD(40234),
-       TD = wD(37070),
-       bD = wD(41069),
-       jD = wD(40348),
-       dD = wD(40224),
-       SD = wD(41027),
-       iD = wD(37577),
-       lD = wD(41075);
-     class WD extends CD.b {
+     var Mp = cp(41378),
+       Cp = cp(40498),
+       Ep = cp(37313),
+       Xp = cp(41383),
+       lp = cp(40589),
+       Qp = cp(40481),
+       Jp = cp(41325),
+       Bp = cp(37800),
+       Np = cp(41391);
+     class Tp extends Mp.c {
```

#### 133. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L850-L852` → after: `L861-L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L861-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L861-L863) · [Before (L850-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L850-L852)

```diff
-       Mesh: bD.e,
-       TransformNode: SD.e,
-       nI: CD.b,
+       Mesh: Xp.c,
+       TransformNode: Jp.b,
+       my: Mp.c,
```

#### 134. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L854-L855` → after: `L865-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L865-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L865-L866) · [Before (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L854-L855)

```diff
-       BoundingInfo: xD.b,
-       WI: TD.WI,
+       BoundingInfo: Cp.d,
+       Zy: Ep.Zy,
```

#### 135. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L857-L859` → after: `L868-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L868-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L868-L870) · [Before (L857-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L857-L859)

```diff
-       SubMesh: dD.b,
-       VertexData: jD.b,
-       MirroredGeometry: lD.d,
+       SubMesh: Qp.d,
+       VertexData: lp.d,
+       MirroredGeometry: Np.b,
```

#### 136. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L861` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L872) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L861)

```diff
-       plainMeshFromArrays: lD.h
+       plainMeshFromArrays: Np.f
```

#### 137. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L863-L864` → after: `L874-L875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L874-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L874-L875) · [Before (L863-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L863-L864)

```diff
-     (0, iD.f)(ND);
-     var ZD = wD(37422);
+     (0, Bp.g)(fp);
+     var bp = cp(37655);
```

#### 138. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L871-L873` → after: `L882-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L882-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L882-L884) · [Before (L871-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L871-L873)

```diff
-           const pD = (0, BD.db)(DD);
-           pD && (pD.disableLighting = !0, (0, BD.ab)(pD))
-         }(0, ZD.l)(DD)
+           const Op = (0, Up.$)(pp);
+           Op && (Op.disableLighting = !0, (0, Up.Y)(Op))
+         }(0, bp.g)(pp)
```

#### 139. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L876` → after: `L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L887) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L876)

```diff
-         (0, ZD.o)(this._material), super.dispose(DD)
+         (0, bp.i)(this._material), super.dispose(pp)
```

#### 140. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L888` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L899) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L888)

```diff
-     }(0, RD.e)({
+     }(0, Dp.d)({
```

#### 141. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L891-L894` → after: `L902-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L902-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L902-L905) · [Before (L891-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L891-L894)

```diff
-     var mD = wD(37304),
-       eD = wD(37584);
-     const oD = new RegExp(`^#define ${gD.c}\\s*$`, "m");
-     class aD extends(nD(gD.i)) {
+     var np = cp(37519),
+       Fp = cp(37807);
+     const gp = new RegExp(`^#define ${Yp.b}\\s*$`, "m");
+     class Gp extends(tp(Yp.h)) {
```

#### 142. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L896` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L907) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L896)

```diff
-         super(DD, zD), this.MI = !1, zD.ditherOnlyWhileFading && (eD.c.add(DD), this.prewarmDitherTwins(DD))
+         super(pp, ip), this.Ry = !1, ip.ditherOnlyWhileFading && (Fp.d.add(pp), this.prewarmDitherTwins(pp))
```

#### 143. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L908` → after: `L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L919) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L908)

```diff
-           KD && !oD.test(pD.defines) && DD.Ul().onAfterRenderObservable.addOnce((() => {
+           Ip && !gp.test(Op.defines) && pp.Gl().onAfterRenderObservable.addOnce((() => {
```

#### 144. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L914-L915` → after: `L925-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L925-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L925-L926) · [Before (L914-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L914-L915)

```diff
-         if (this.MI || DD.EX()) return !1;
-         const zD = new dD.b(0, 0, 0, 0, 0, DD, void 0, !1, !1);
+         if (this.Ry || pp.uR()) return !1;
+         const ip = new Qp.d(0, 0, 0, 0, 0, pp, void 0, !1, !1);
```

#### 145. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L925` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L936) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L925)

```diff
-         this.MI = !0, super.dispose(DD)
+         this.Ry = !0, super.dispose(pp)
```

#### 146. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L933` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L944) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L933)

```diff
-     vD(LD.d, MD), vD(cD.j, PD), vD(gD.i, aD), vD(RD.g, yD), (0, AD.d)({
+     Zp(xp.d, Hp), Zp(Lp.f, qp), Zp(Yp.h, Gp), Zp(Dp.g, hp), (0, Ap.e)({
```

#### 147. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L936` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L947) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L936)

```diff
-         return (0, mD.r)(DD, wD), wD.detailMap._pluginDefineNames
+         return (0, np.p)(pp, cp), cp.detailMap._pluginDefineNames
```

#### 148. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L939` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L950) · [Before (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L939)

```diff
-         (0, mD.V)(DD.mirror, zD, wD)
+         (0, np.S)(pp.mirror, ip, cp)
```

#### 149. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L943` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L954) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L943)

```diff
-         if (!pD) throw new Error(`${zD.feature.name} has no plugin class (registerPluginClass)`);
+         if (!Op) throw new Error(`${ip.feature.name} has no plugin class (registerPluginClass)`);
```

#### 150. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L956-L957` → after: `L967-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L967-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L967-L968) · [Before (L956-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L956-L957)

```diff
-           const wD = new rD.b(pD, zD, sD, KD, LD);
-           return Object.assign(wD, gD), void(0, UD.U)(DD, wD)
+           const cp = new Sp.d(Op, ip, op, Ip, xp);
+           return Object.assign(cp, Yp), void(0, Pp.K)(pp, cp)
```

#### 151. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L962` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L973) · [Before (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L962)

```diff
-               zD(new Error(`${cD.context}: ${(null===wD||void 0===wD?void 0:wD.message)||DD||"Failed to load texture"}`))
+               ip(new Error(`${Lp.context}: ${(null===cp||void 0===cp?void 0:cp.message)||pp||"Failed to load texture"}`))
```

#### 152. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L979` → after: `L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L990) · [Before (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L979)

```diff
-           hD = new rD.b(null, zD, GD);
+           vp = new Sp.d(null, ip, wp);
```

#### 153. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L982` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L993) · [Before (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L982)

```diff
-         nD && (nD.label = BD), DD.uvSet = hD.coordinatesIndex, DD.matrix.set((0, mD.N)(hD)), (0, UD.U)(DD, hD)
+         tp && (tp.label = Up), pp.uvSet = vp.coordinatesIndex, pp.matrix.set((0, np.L)(vp)), (0, Pp.K)(pp, vp)
```

#### 154. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L993-L996` → after: `L1004-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1004-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1004-L1007) · [Before (L993-L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L993-L996)

```diff
-         } = DD.sampler, RD = gD === (0, UD.H)(LD) ? null : () => {
-           (0, mD.L)(AD, gD)
-         }, AD = new sD.e(pD, zD, null, LD, KD, RD, null, (0, UD.D)(cD));
-         AD.coordinatesMode = rD.b.SKYBOX_MODE, (0, UD.U)(DD, AD)
+         } = pp.sampler, Dp = Yp === (0, Pp.z)(xp) ? null : () => {
+           (0, np.J)(Ap, Yp)
+         }, Ap = new op.b(Op, ip, null, xp, Ip, Dp, null, (0, Pp.w)(Lp));
+         Ap.coordinatesMode = Sp.d.SKYBOX_MODE, (0, Pp.K)(pp, Ap)
```

#### 155. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1005` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1016) · [Before (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1005)

```diff
-           wrap: RD = rD.b.CLAMP_ADDRESSMODE
+           wrap: Dp = Sp.d.CLAMP_ADDRESSMODE
```

#### 156. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1012-L1013` → after: `L1023-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1023-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1023-L1024) · [Before (L1012-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1012-L1013)

```diff
-         const UD = (0, mD.A)(AD);
-         return (0, mD.E)(UD, AD), UD
+         const Pp = (0, np.B)(Ap);
+         return (0, np.D)(Pp, Ap), Pp
```

#### 157. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1017` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1028) · [Before (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1017)

```diff
-   41075: (DD, zD, wD) => {
+   41391: (pp, ip, cp) => {
```

#### 158. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1019` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1030) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1019)

```diff
-       d: () => RD,
+       b: () => Dp,
```

#### 159. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1021` → after: `L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1032) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1021)

```diff
-       h: () => UD
+       f: () => Pp
```

#### 160. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1023-L1030` → after: `L1034-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1034-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1034-L1041) · [Before (L1023-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1023-L1030)

```diff
-     var pD = wD(41066),
-       sD = wD(39984),
-       KD = wD(40234),
-       rD = wD(40354),
-       LD = wD(41069),
-       cD = wD(40348),
-       gD = wD(37471);
-     class RD extends rD.e {
+     var Op = cp(41378),
+       op = cp(40273),
+       Ip = cp(40498),
+       Sp = cp(40593),
+       xp = cp(41383),
+       Lp = cp(40589),
+       Yp = cp(37698);
+     class Dp extends Sp.b {
```

#### 161. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1038` → after: `L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1049) · [Before (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1038)

```diff
-         (0, gD.l)(DD), this.model = DD, null === (zD = this.onLinked) || void 0 === zD || zD.call(this, DD)
+         (0, Yp.m)(pp), this.model = pp, null === (ip = this.onLinked) || void 0 === ip || ip.call(this, pp)
```

#### 162. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1065` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1076) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1065)

```diff
-         this.link(new gD.g(DD, zD, this.getTotalVertices(), new Float64Array(wD.QpD()), new Float64Array(pD.QpD())))
+         this.link(new Yp.f(pp, ip, this.getTotalVertices(), new Float64Array(cp.BOp()), new Float64Array(Op.BOp())))
```

#### 163. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1069-L1070` → after: `L1080-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1080-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1080-L1081) · [Before (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1069-L1070)

```diff
-         const zD = new RD(DD, this.Ul()),
-           wD = this.XpD(void 0, !0);
+         const ip = new Dp(pp, this.Gl()),
+           cp = this.NOp(void 0, !0);
```

#### 164. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1085-L1086` → after: `L1096-L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1096-L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1096-L1097) · [Before (L1085-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1085-L1086)

```diff
-           const UD = DD.getIsInstanced() ? (wD instanceof Array ? 4 * wD.length : wD.byteLength) / RD : this.getTotalVertices(),
-             fD = (0, sD.r)(wD, LD, cD, gD, RD, UD, !0),
+           const Pp = pp.getIsInstanced() ? (cp instanceof Array ? 4 * cp.length : cp.byteLength) / Dp : this.getTotalVertices(),
+             Wp = (0, op.s)(cp, xp, Lp, Yp, Dp, Pp, !0),
```

#### 165. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1095` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1106) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1095)

```diff
-           zD.setVerticesBuffer(new pD.f(this.iI(), fD, KD, ID), UD)
+           ip.setVerticesBuffer(new Op.f(this.gy(), Wp, Ip, yp), Pp)
```

#### 166. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1097` → after: `L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1108) · [Before (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1097)

```diff
-         return zD._updatable = rD, zD._boundingInfo = new KD.b(this.extend.minimum, this.extend.maximum), zD.relink(), zD
+         return ip._updatable = Sp, ip._boundingInfo = new Ip.d(this.extend.minimum, this.extend.maximum), ip.relink(), ip
```

#### 167. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1100-L1102` → after: `L1111-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1111-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1111-L1113) · [Before (L1100-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1100-L1102)

```diff
-         const cD = DD[0].Ul(),
-           gD = new LD.e(DD[0].name + "_merged", cD),
-           AD = new RD(rD.e.RandomId(), cD, void 0, !1, gD);
+         const Lp = pp[0].Gl(),
+           Yp = new xp.c(pp[0].name + "_merged", Lp),
+           Ap = new Dp(Sp.b.RandomId(), Lp, void 0, !1, Yp);
```

#### 168. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1104` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1115) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1104)

```diff
-           if (!LD.e.MergeMeshes(DD, zD, wD, gD, sD, KD)) return gD.dispose(), null
+           if (!xp.c.MergeMeshes(pp, ip, cp, Yp, op, Ip)) return Yp.dispose(), null
```

#### 169. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1121` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1132) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1121)

```diff
-         this.model && ((0, gD.t)(this.model), this.model = null)
+         this.model && ((0, Yp.v)(this.model), this.model = null)
```

#### 170. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1126-L1127` → after: `L1137-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1137-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1137-L1138) · [Before (L1126-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1126-L1127)

```diff
-       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LD.e(DD, wD);
-       const sD = (0, gD.k)(zD),
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new xp.c(pp, cp);
+       const op = (0, Yp.j)(ip),
```

#### 171. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1135-L1137` → after: `L1146-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1146-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1146-L1148) · [Before (L1135-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1135-L1137)

```diff
-         BD = new cD.b;
-       BD.positions = KD, BD.normals = null !== AD && void 0 !== AD ? AD : null, BD.uvs = null !== UD && void 0 !== UD ? UD : null, BD.indices = fD;
-       const GD = new RD(rD.e.RandomId(), wD, BD, !1, pD);
+         Up = new Lp.d;
+       Up.positions = Ip, Up.normals = null !== Ap && void 0 !== Ap ? Ap : null, Up.uvs = null !== Pp && void 0 !== Pp ? Pp : null, Up.indices = Wp;
+       const wp = new Dp(Sp.b.RandomId(), cp, Up, !1, Op);
```

#### 172. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1148` → after: `L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1159) · [Before (L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1148)

```diff
-       const sD = new LD.e(DD, wD),
+       const op = new xp.c(pp, cp),
```

#### 173. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1155` → after: `L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1166) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1155)

```diff
-       return Object.assign(new cD.b, {
+       return Object.assign(new Lp.d, {
```

#### 174. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1163` → after: `L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1174) · [Before (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1163)

```diff
-   41502: (DD, zD, wD) => {
+   41864: (pp, ip, cp) => {
```

#### 175. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1166-L1167` → after: `L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1178) · [Before (L1166-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1166-L1167)

```diff
-       f: () => LD,
-       j: () => rD,
+       i: () => Sp,
```

#### 176. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1170-L1172` → after: `L1181-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1181-L1183) · [Before (L1170-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1170-L1172)

```diff
-     var pD = wD(37267),
-       sD = wD(38689),
-       KD = wD(38684);
+     var Op = cp(37479),
+       op = cp(38942),
+       Ip = cp(38938);
```

#### 177. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1175` → after: `L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1186) · [Before (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1175)

```diff
-       const sD = KD.q;
+       const op = Ip.o;
```

#### 178. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1183` → after: `L1194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1194) · [Before (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1183)

```diff
-         zD[sD.colorPositions + KD] = DD.gradient, DD.color1.toArray(zD, sD.color1 + 4 * KD), (null !== (cD = DD.color2) && void 0 !== cD ? cD : DD.color1).toArray(zD, sD.color2 + 4 * KD)
+         ip[op.colorPositions + Ip] = pp.gradient, pp.color1.toArray(ip, op.color1 + 4 * Ip), (null !== (Lp = pp.color2) && void 0 !== Lp ? Lp : pp.color1).toArray(ip, op.color2 + 4 * Ip)
```

#### 179. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1186` → after: `L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1197) · [Before (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1186)

```diff
-         RD = UD(DD, gD, "UG", pD);
+         Dp = Pp(pp, Yp, "tw", Op);
```

#### 180. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1188` → after: `L1199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1199) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1188)

```diff
-       for (let KD = 0; KD < RD; KD++) nD(zD, sD.UG + 4 * KD, gD[fD(gD, KD)]);
+       for (let Ip = 0; Ip < Dp; Ip++) tp(ip, op.tw + 4 * Ip, Yp[Wp(Yp, Ip)]);
```

#### 181. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1198` → after: `L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1209) · [Before (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1198)

```diff
-         texels: new Uint8Array(4 * KD.h)
+         texels: new Uint8Array(4 * Ip.k)
```

#### 182. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1205` → after: `L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1216) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1205)

```diff
-         for (let wD = 0; wD < KD.h; wD++) sD.l.GetCurrentGradient(wD / KD.h, DD, ((DD, zD, wD) => {
+         for (let cp = 0; cp < Ip.k; cp++) op.l.GetCurrentGradient(cp / Ip.k, pp, ((pp, ip, cp) => {
```

#### 183. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1222` → after: `L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1233) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1222)

```diff
-       return zD ? zD.length > KD.b ? (pD(`particleStops:${wD}`, `GPU particles use the first 2 and last ${KD.b-2} of more than ${KD.b} ${wD} gradient stops (${DD.name})`), KD.b) : zD.length : 0
+       return ip ? ip.length > Ip.d ? (Op(`particleStops:${cp}`, `GPU particles use the first 2 and last ${Ip.d-2} of more than ${Ip.d} ${cp} gradient stops (${pp.name})`), Ip.d) : ip.length : 0
```

#### 184. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1226` → after: `L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1237) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1226)

```diff
-       return zD < 2 || DD.length <= KD.b ? zD : DD.length - KD.b + zD
+       return ip < 2 || pp.length <= Ip.d ? ip : pp.length - Ip.d + ip
```

#### 185. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1228` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1239) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1228)

```diff
-     const ID = new Float32Array(KD.n),
+     const yp = new Float32Array(Ip.m),
```

#### 186. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1244` → after: `L1255-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1255-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1255-L1303) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1244)

```diff
-       DD[zD] = wD.gradient, DD[zD + 1] = wD.factor1, DD[zD + 2] = null !== (pD = wD.factor2) && void 0 !== pD ? pD : wD.factor1
+       pp[ip] = cp.gradient, pp[ip + 1] = cp.factor1, pp[ip + 2] = null !== (Op = cp.factor2) && void 0 !== Op ? Op : cp.factor1
+     }
+   },
+   41375: (pp, ip, cp) => {
+     function Op(pp, ip, cp) {
+       const Op = ip * ip * 4,
+         op = pp[0].layers,
+         Ip = op * (pp.length - 1) + pp[pp.length - 1].layers,
+         Sp = new Uint8Array(Ip * Op);
+       pp.forEach(((ip, cp) => {
+         const Ip = cp + 1 < pp.length ? Math.min(ip.layers, op) : ip.layers;
+         Sp.set(new Uint8Array(ip.pixels.buffer, ip.pixels.byteOffset, Ip * Op), cp * op * Op)
+       }));
+       const xp = Math.max(1, Math.min(Ip, cp || Ip));
+       if (xp === Ip) return [{
+         pixels: Sp,
+ ... (33 more added lines; see GitHub link above)
```

#### 187. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L1247` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/babylon-backend.js#L1306) · [Before (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/babylon-backend.js#L1247)

```diff
-   41496: (DD, zD, wD) => {
+   41860: (pp, ip, cp) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockFaceTable.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/blockFaceTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcd)

#### 1. `bundles/bloxd.io/chunks/js/blockFaceTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b8d2cff165f2f6c9ab69fd9b5a3062b7590431fc863af19dafe1f2caf4651fcd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockFaceTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockFaceTable.js#L4)

```diff
-   60397: (DD, zD, wD) => {
+   60729: (pp, ip, cp) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d)

#### 1. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L4)

```diff
-   36381: (DD, zD, wD) => {
+   36611: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L10)

```diff
-     var pD = wD(36386);
+     var Op = cp(36618);
```

#### 3. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L71)

```diff
-     var gD = wD(36395);
+     var Yp = cp(36622);
```

#### 4. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L78)

```diff
-       return `${zD}|${wD}|${DD}`
+       return `${ip}|${cp}|${pp}`
```

#### 5. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L105)

```diff
-         return null !== (sD = await (0, gD.d)(KD, zD, wD)) && void 0 !== sD ? sD : (await MD(KD, zD, wD)).toDataURL()
+         return null !== (op = await (0, Yp.d)(Ip, ip, cp)) && void 0 !== op ? op : (await Hp(Ip, ip, cp)).toDataURL()
```

#### 6. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L116)

```diff
-         const KD = (0, pD.i)(wD, sD),
+         const Ip = (0, Op.g)(cp, op),
```

#### 7. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L138)

```diff
-             rect: zD.cropFaces ? KD : [0, 0, 1, 1],
+             rect: ip.cropFaces ? Ip : [0, 0, 1, 1],
```

#### 8. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L143)

```diff
-           hD = pD.g;
+           vp = Op.d;
```

#### 9. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L150)

```diff
-         return (0, pD.j)(BD, wD, sD, (DD => 1 === GD[DD])), BD
+         return (0, Op.k)(Up, cp, op, (pp => 1 === wp[pp])), Up
```

#### 10. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L156)

```diff
-         return "SlabBlock" === DD ? KD : "StairsBlock" === DD ? rD : sD
+         return "SlabBlock" === pp ? Ip : "StairsBlock" === pp ? Sp : op
```

#### 11. `bundles/bloxd.io/chunks/js/blockIconDrawing.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7dR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac3b4ac4b7e40bd514fcb9de6259051b1ae2d79abe9e01b93b8f7f858fa17a7d) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconDrawing.js#L166)

```diff
-         const zD = await (0, gD.i)(DD),
+         const ip = await (0, Yp.h)(pp),
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockIconWorker.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/blockIconWorker.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d)

#### 1. `bundles/bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665dR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconWorker.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconWorker.js#L197)

```diff
-     if (void 0 === pD) throw new Error(`no ${wD} was sent for ${zD.slice(0,100)}`);
+     if (void 0 === Op) throw new Error(`no ${cp} was sent for ${ip.slice(0,100)}`);
```

#### 2. `bundles/bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665dR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconWorker.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconWorker.js#L223)

```diff
-             zD(null !== (DD = wD.error) && void 0 !== DD ? DD : new Error("the icon did not encode"))
+             ip(null !== (pp = cp.error) && void 0 !== pp ? pp : new Error("the icon did not encode"))
```

#### 3. `bundles/bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665dR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconWorker.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconWorker.js#L290)

```diff
-               rect: sD.cropFaces ? KD : [0, 0, 1, 1],
+               rect: op.cropFaces ? Ip : [0, 0, 1, 1],
```

#### 4. `bundles/bloxd.io/chunks/js/blockIconWorker.js` (Changed code · before: `L308` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665dR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b360aba7a0a18820e3736257f1ebdb2080d3af6deb3836603b04462b7f92665d) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockIconWorker.js#L308) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockIconWorker.js#L308)

```diff
-           return "SlabBlock" === DD ? fD : "StairsBlock" === DD ? ID : UD
+           return "SlabBlock" === pp ? Wp : "StairsBlock" === pp ? yp : Pp
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/blockModelIcons.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/blockModelIcons.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035)

#### 1. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L4` → after: `L4-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockModelIcons.js#L4-L35) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockModelIcons.js#L4)

```diff
-   36406: (DD, zD, wD) => {
+   36642: (pp, ip, cp) => {
+     var Op = {
+       "./Artisan Bench.json": [41402, 280],
+       "./Aspen Item Pedestal.json": [41410, 281],
+       "./Cedar Item Pedestal.json": [41418, 282],
+       "./Cherry Item Pedestal.json": [41427, 283],
+       "./Furnace.json": [41432, 284],
+       "./Jungle Item Pedestal.json": [41440, 285],
+       "./Mango Item Pedestal.json": [41446, 286],
+       "./Palm Item Pedestal.json": [41454, 287],
+       "./Pear Item Pedestal.json": [41461, 288],
+       "./Pine Item Pedestal.json": [41467, 289],
+       "./Plum Item Pedestal.json": [41469, 290],
+       "./Potion Table.json": [41478, 291],
+       "./Salvaging Table.json": [41481, 292],
+       "./Showcase.json": [41484, 293],
+ ... (16 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L9-L11` → after: `L40-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockModelIcons.js#L40-L42) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockModelIcons.js#L9-L11)

```diff
-     var pD = wD(36395),
-       sD = wD(36386);
-     const KD = wD(36414),
+     var Op = cp(36622),
+       op = cp(36618);
+     const Ip = cp(36642),
```

#### 3. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L52` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockModelIcons.js#L83) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockModelIcons.js#L52)

```diff
-       const sD = `${zD}|${wD}|${DD}`;
+       const op = `${ip}|${cp}|${pp}`;
```

#### 4. `bundles/bloxd.io/chunks/js/blockModelIcons.js` (Changed code · before: `L54` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-eb60594866f561922d76df997987e682904caee944b8c015d0166bccaa046035) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/blockModelIcons.js#L85) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/blockModelIcons.js#L54)

```diff
-       return KD || (KD = (0, pD.h)(DD, (() => RD(DD)), zD, wD).then((pD => null !== pD && void 0 !== pD ? pD : AD(DD, zD, wD))), KD.catch((() => {
+       return Ip || (Ip = (0, Op.f)(pp, (() => Dp(pp)), ip, cp).then((Op => null !== Op && void 0 !== Op ? Op : Ap(pp, ip, cp))), Ip.catch((() => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99)

#### 1. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L4-L5)

```diff
-   42501: (DD, zD, wD) => {
-     DD.exports = wD.p + "static/media/bloxd_wasm_anim_bg.2be4d1788048e763f3b1.wasm"
+   42941: (pp, ip, cp) => {
+     pp.exports = cp.p + "static/media/bloxd_wasm_anim_bg.ab5b80b8d68f5e91c45a.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L7)

```diff
-   42499: (DD, zD, wD) => {
+   42935: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L15-L23` → after: `L15-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L15-L23) · [Before (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L15-L23)

```diff
-       const rD = nD(DD, CD.UmW6),
-         LD = xD,
-         cD = nD(zD, CD.UmW6),
-         gD = xD,
-         RD = nD(wD, CD.UmW6),
-         AD = xD,
-         UD = nD(pD, CD.UmW6),
-         ID = xD,
-         BD = nD(sD, CD.UmW6),
+       const Sp = tp(pp, Mp.fgSa),
+         xp = Cp,
+         Lp = tp(ip, Mp.fgSa),
+         Yp = Cp,
+         Dp = tp(cp, Mp.fgSa),
+         Ap = Cp,
+         Pp = tp(Op, Mp.fgSa),
+         yp = Cp,
+         Up = tp(op, Mp.fgSa),
```

#### 4. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L28)

```diff
-         }(KD, CD.UmW6),
+         }(Ip, Mp.fgSa),
```

#### 5. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L30)

```diff
-       const ED = CD.orBx(rD, LD, cD, gD, RD, AD, UD, ID, BD, GD, MD, JD);
+       const jp = Mp.xO7R(Sp, xp, Lp, Yp, Dp, Ap, Pp, yp, Up, wp, Hp, ep);
```

#### 6. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L33-L39` → after: `L33-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L33-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L33-L39) · [Before (L33-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L33-L39)

```diff
-       return CD.f0Ov(ED[0], 1 * ED[1], 1), VD
-     }
- 
-     function KD(DD, zD) {
-       const wD = MD(DD, CD.UmW6, CD.OxYh),
-         pD = xD,
-         sD = CD.kl8f(wD, pD, zD);
+       return Mp.PZPw(jp[0], 1 * jp[1], 1), Rp
+     }
+ 
+     function Ip(pp, ip) {
+       const cp = Hp(pp, Mp.fgSa, Mp.hVwD),
+         Op = Cp,
+         op = Mp.zeZa(cp, Op, ip);
```

#### 7. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L44)

```diff
-       CD.EdYV()
+       Mp.V64H()
```

#### 8. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L50)

```diff
-         Ke6A: {
+         VfU7: {
```

#### 9. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L52)

```diff
-           zf0p: function(DD, zD) {
+           spUr: function(pp, ip) {
```

#### 10. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L55)

```diff
-           t4rI: function(DD, zD) {
+           bBjB: function(pp, ip) {
```

#### 11. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L57-L58` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L57-L58) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L57-L58)

```diff
-               pD = "string" === typeof wD ? wD : void 0;
-             var sD = hD(pD) ? 0 : MD(pD, CD.UmW6, CD.OxYh),
+               Op = "string" === typeof cp ? cp : void 0;
+             var op = vp(Op) ? 0 : Hp(Op, Mp.fgSa, Mp.hVwD),
```

#### 12. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L62)

```diff
-           CWE0: function(DD, zD) {
+           geTR: function(pp, ip) {
```

#### 13. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L65)

```diff
-           kgwC: function(DD, zD) {
+           zT7c: function(pp, ip) {
```

#### 14. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L68)

```diff
-           mLmm: function(DD) {
+           bQdA: function(pp) {
```

#### 15. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L81-L82)

```diff
-       zLD: () => sD,
-       UA: () => KD,
+       Hxp: () => op,
+       dA: () => Ip,
```

#### 16. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L85)

```diff
-       fA: () => rD
+       eA: () => Sp
```

#### 17. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L173)

```diff
-       return PD = DD, CD = DD.exports, VD = zD, gD = null, UD = null, CD.INlW(), CD
+       return qp = pp, Mp = pp.exports, Rp = ip, Yp = null, Pp = null, Mp.jq1x(), Mp
```

#### 18. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L197)

```diff
-           if (!DD.ok) throw new Error(`failed to fetch Wasm: ${DD.status} ${DD.statusText} fetching '${DD.url}'`);
+           if (!pp.ok) throw new Error(`failed to fetch Wasm: ${pp.status} ${pp.statusText} fetching '${pp.url}'`);
```

#### 19. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L224-L225` → after: `L224-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L224-L225) · [Before (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L224-L225)

```diff
-     var dD = wD(2868),
-       SD = wD(6653);
+     var Qp = cp(2970),
+       Jp = cp(6762);
```

#### 20. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L229)

```diff
-         super((0, dD.A)(DD, zD), {
+         super((0, Qp.B)(pp, ip), {
```

#### 21. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L245)

```diff
-           DD = await (0, dD.B)(new wD.U(wD(42501)), (0, SD.d)("bloxd_wasm_anim"))
+           pp = await (0, Qp.C)(new cp.U(cp(42941)), (0, Jp.e)("bloxd_wasm_anim"))
```

#### 22. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L247)

```diff
-           throw new iD((0, dD.G)(zD), zD)
+           throw new Bp((0, Qp.J)(ip), ip)
```

#### 23. `bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4dd0f2f171280e2b8b91243ca842baa70c5ae8a0b297cd42d23e8391af16ff99) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-anim.js#L262)

```diff
-         return KD.zLD(Object.entries(DD).flat(), [...zD.mobTypes], [...zD.vehicleTypes], [...zD.mobAiStates], [...zD.playerPoses], "builtIns" in sD ? sD.builtIns : void 0)
+         return Ip.Hxp(Object.entries(pp).flat(), [...ip.mobTypes], [...ip.vehicleTypes], [...ip.mobAiStates], [...ip.playerPoses], "builtIns" in op ? op.builtIns : void 0)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (524 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc)

#### 1. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L4-L5)

```diff
-   42490: (DD, zD, wD) => {
-     DD.exports = wD.p + "static/media/bloxd_wasm_webgl_bg.03882d56a3e2bba2db35.wasm"
+   42915: (pp, ip, cp) => {
+     pp.exports = cp.p + "static/media/bloxd_wasm_webgl_bg.5a7acf67a8d13ac5aed9.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L7)

```diff
-   42484: (DD, zD, wD) => {
+   42908: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L13-L14` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L13-L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L13-L14)

```diff
-       jG: () => sD,
-       jKD: () => KD,
+       hw: () => op,
+       KIp: () => Ip,
```

#### 4. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L16)

```diff
-       UA: () => LD,
+       dA: () => xp,
```

#### 5. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L19-L24` → after: `L19-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L19-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L19-L26) · [Before (L19-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L19-L24)

```diff
-       fA: () => cD,
-       MpD: () => gD,
-       IA: () => RD,
-       BA: () => AD,
-       hA: () => UD,
-       nA: () => fD,
+       eA: () => Lp,
+       XOp: () => Yp,
+       uA: () => Dp,
+       jA: () => Ap,
+       kA: () => Pp,
+       mA: () => Wp,
+       RA: () => yp,
+       qA: () => Up,
```

#### 6. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L26` → after: `L28-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L28-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L28-L38) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L26)

```diff
-       OA: () => BD,
+       sw: () => vp,
+       lA: () => tp,
+       kOp: () => Hp,
+       VIp: () => dp,
+       mOp: () => ep,
+       pSp: () => jp,
+       iSp: () => kp,
+       qOp: () => mp,
+       cSp: () => Rp,
+       OSp: () => qp,
+       COp: () => Mp,
```

#### 7. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L28-L39` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L40) · [Before (L28-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L28-L39)

```diff
-       kG: () => hD,
-       VA: () => nD,
-       UpD: () => MD,
-       dKD: () => OD,
-       fpD: () => JD,
-       SKD: () => ED,
-       iKD: () => QD,
-       BpD: () => XD,
-       lKD: () => VD,
-       hpD: () => PD,
-       CA: () => CD,
-       xA: () => xD
+       BA: () => Ep
```

#### 8. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L48` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L49) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L48)

```diff
-         Xz.YdRO(DD, 0)
+         qi.spmq(pp, 0)
```

#### 9. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L50-L51` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L51-L52) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L50-L51)

```diff
-       static GpD() {
-         return Xz.mEKv() >>> 0
+       static MOp() {
+         return qi.uDmS() >>> 0
```

#### 10. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L53-L54` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L54-L55) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L53-L54)

```diff
-       WKD() {
-         return Xz.p5Kh(this.__wbg_ptr)
+       oSp() {
+         return qi.qpMO(this.__wbg_ptr)
```

#### 11. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L56-L57` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L57-L58) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L56-L57)

```diff
-       isD() {
-         return Xz.TE13(this.__wbg_ptr) >>> 0
+       OIp() {
+         return qi.YjFk(this.__wbg_ptr) >>> 0
```

#### 12. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L59-L60` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L60-L61) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L59-L60)

```diff
-       NKD(DD, zD, wD) {
-         return Xz.GetW(this.__wbg_ptr, DD, zD, wD) >>> 0
+       ISp(pp, ip, cp) {
+         return qi.Bifo(this.__wbg_ptr, pp, ip, cp) >>> 0
```

#### 13. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L63` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L64) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L63)

```diff
-         return Xz.hy7Q(this.__wbg_ptr, DD, zD, wD) >>> 0
+         return qi.slJI(this.__wbg_ptr, pp, ip, cp) >>> 0
```

#### 14. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L65-L66` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L66-L67) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L65-L66)

```diff
-       ZKD() {
-         return Xz.qVFp(this.__wbg_ptr) >>> 0
+       SSp() {
+         return qi.Foy7(this.__wbg_ptr) >>> 0
```

#### 15. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L68-L69` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L69-L70) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L68-L69)

```diff
-       WsD(DD, zD, wD, pD, sD, KD, rD) {
-         return Xz.Dhlw(this.__wbg_ptr, DD, zD, wD, pD, sD, KD, rD)
+       IIp(pp, ip, cp, Op, op, Ip, Sp) {
+         return qi.oils(this.__wbg_ptr, pp, ip, cp, Op, op, Ip, Sp)
```

#### 16. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L71-L72` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L72-L73) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L71-L72)

```diff
-       yKD(DD, zD, wD) {
-         return Xz.qnHc(this.__wbg_ptr, DD, zD, wD) >>> 0
+       xSp(pp, ip, cp) {
+         return qi.qSvO(this.__wbg_ptr, pp, ip, cp) >>> 0
```

#### 17. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L74-L75` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L75-L76) · [Before (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L74-L75)

```diff
-       kKD() {
-         return Xz.GJBY(this.__wbg_ptr) >>> 0
+       LSp() {
+         return qi.bNjQ(this.__wbg_ptr) >>> 0
```

#### 18. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L77-L78` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L78-L79) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L77-L78)

```diff
-       mKD() {
-         return Xz.tGYo(this.__wbg_ptr) >>> 0
+       YSp() {
+         return qi.GHs8(this.__wbg_ptr) >>> 0
```

#### 19. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L80-L81` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L81-L82) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L80-L81)

```diff
-       oKD() {
-         return Xz.yfud(this.__wbg_ptr) >>> 0
+       ASp() {
+         return qi.EIzx(this.__wbg_ptr) >>> 0
```

#### 20. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L84` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L85) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L84)

```diff
-         return Xz.sASA(this.__wbg_ptr, DD, zD, wD) >>> 0
+         return qi.u3Ci(this.__wbg_ptr, pp, ip, cp) >>> 0
```

#### 21. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L86-L87` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L87-L88) · [Before (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L86-L87)

```diff
-       esD(DD, zD, wD) {
-         return Xz.Y1Ls(this.__wbg_ptr, DD, zD, wD) >>> 0
+       AIp(pp, ip, cp) {
+         return qi.T56Q(this.__wbg_ptr, pp, ip, cp) >>> 0
```

#### 22. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L89-L90` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L90-L91) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L89-L90)

```diff
-       NsD() {
-         return Xz.OhUf(this.__wbg_ptr) >>> 0
+       SIp() {
+         return qi.To8d(this.__wbg_ptr) >>> 0
```

#### 23. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L92-L93` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L93-L94) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L92-L93)

```diff
-       ZsD(DD) {
-         return Xz.vDNa(this.__wbg_ptr, DD) >>> 0
+       xIp(pp) {
+         return qi.eqSR(this.__wbg_ptr, pp) >>> 0
```

#### 24. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L95-L96` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L96-L97) · [Before (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L95-L96)

```diff
-       ysD(DD, zD, wD, pD, sD, KD) {
-         return Xz.txOJ(this.__wbg_ptr, DD, zD, wD, pD, sD, KD) >>> 0
+       LIp(pp, ip, cp, Op, op, Ip) {
+         return qi.BSBR(this.__wbg_ptr, pp, ip, cp, Op, op, Ip) >>> 0
```

#### 25. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L98-L99` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L99-L100) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L98-L99)

```diff
-       lsD() {
-         return Xz.aUjm(this.__wbg_ptr) >>> 0
+       oIp() {
+         return qi.KRd0(this.__wbg_ptr) >>> 0
```

#### 26. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L101-L102` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L102-L103) · [Before (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L101-L102)

```diff
-       aKD() {
-         return Xz.g6In(this.__wbg_ptr) >>> 0
+       PSp() {
+         return qi.aSmq(this.__wbg_ptr) >>> 0
```

#### 27. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L104-L105` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L105-L106) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L104-L105)

```diff
-       uKD(DD) {
-         return Xz.gQvx(this.__wbg_ptr, DD) >>> 0
+       WSp(pp) {
+         return qi.PHxq(this.__wbg_ptr, pp) >>> 0
```

#### 28. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L107-L108` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L108-L109) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L107-L108)

```diff
-       asD(DD) {
-         return Xz.wNvS(this.__wbg_ptr, DD) >>> 0
+       WIp(pp) {
+         return qi.uwSe(this.__wbg_ptr, pp) >>> 0
```

#### 29. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L110-L111` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L111-L112) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L110-L111)

```diff
-       vKD(DD) {
-         return Xz.d9WJ(this.__wbg_ptr, DD) >>> 0
+       ySp(pp) {
+         return qi.PTWM(this.__wbg_ptr, pp) >>> 0
```

#### 30. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L113-L114` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L114-L115) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L113-L114)

```diff
-       tKD(DD) {
-         return Xz.iLiy(this.__wbg_ptr, DD) >>> 0
+       wSp(pp) {
+         return qi.hmkD(this.__wbg_ptr, pp) >>> 0
```

#### 31. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L117` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L118) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L117)

```diff
-         return Xz.jNkl(this.__wbg_ptr, DD, zD, wD, pD, sD, KD) >>> 0
+         return qi.sI2t(this.__wbg_ptr, pp, ip, cp, Op, op, Ip) >>> 0
```

#### 32. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L119-L120` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L120-L121) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L119-L120)

```diff
-       YKD(DD) {
-         return 0 !== Xz.CPbU(this.__wbg_ptr, DD)
+       tSp(pp) {
+         return 0 !== qi.HmDp(this.__wbg_ptr, pp)
```

#### 33. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L123` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L124) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L123)

```diff
-         return Xz.dGAU(this.__wbg_ptr) >>> 0
+         return qi.sbAI(this.__wbg_ptr) >>> 0
```

#### 34. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L125-L126` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L126-L127) · [Before (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L125-L126)

```diff
-       qKD(DD, zD) {
-         return Xz.j3jk(this.__wbg_ptr, DD, zD) >>> 0
+       HSp(pp, ip) {
+         return qi.cFdt(this.__wbg_ptr, pp, ip) >>> 0
```

#### 35. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L128-L129` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L129-L130) · [Before (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L128-L129)

```diff
-       DrD(DD) {
-         return Xz.vNfZ(this.__wbg_ptr, DD) >>> 0
+       dSp(pp) {
+         return qi.lzFx(this.__wbg_ptr, pp) >>> 0
```

#### 36. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L132` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L133) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L132)

```diff
-         return Xz.OsfT(this.__wbg_ptr) >>> 0
+         return qi.N5K4(this.__wbg_ptr) >>> 0
```

#### 37. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L134-L135` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L135-L136) · [Before (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L134-L135)

```diff
-       zrD() {
-         return Xz.sBeQ(this.__wbg_ptr) >>> 0
+       eSp() {
+         return qi.vzXZ(this.__wbg_ptr) >>> 0
```

#### 38. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L138` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L139) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L138)

```diff
-         return Xz.wHqp(this.__wbg_ptr) >>> 0
+         return qi.s2fB(this.__wbg_ptr) >>> 0
```

#### 39. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L140-L141` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L141-L142) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L140-L141)

```diff
-       wrD(DD, zD, wD, pD, sD) {
-         return Xz.MWjk(this.__wbg_ptr, DD, zD, wD, pD, sD) >>> 0
+       uSp(pp, ip, cp, Op, op) {
+         return qi.Y73R(this.__wbg_ptr, pp, ip, cp, Op, op) >>> 0
```

#### 40. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L143-L144` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L144-L145) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L143-L144)

```diff
-       prD(DD, zD, wD) {
-         return Xz.WuTV(this.__wbg_ptr, DD, zD, wD) >>> 0
+       jSp(pp, ip, cp) {
+         return qi.g9uw(this.__wbg_ptr, pp, ip, cp) >>> 0
```

#### 41. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L146-L147` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L147-L148) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L146-L147)

```diff
-       srD(DD, zD, wD, pD) {
-         return Xz.x1ET(this.__wbg_ptr, DD, zD, wD, pD) >>> 0
+       kSp(pp, ip, cp, Op) {
+         return qi.AAQc(this.__wbg_ptr, pp, ip, cp, Op) >>> 0
```

#### 42. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L149-L150` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L150-L151) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L149-L150)

```diff
-       KrD(DD, zD, wD) {
-         return Xz.vpzw(this.__wbg_ptr, DD, zD, wD) >>> 0
+       mSp(pp, ip, cp) {
+         return qi.A95N(this.__wbg_ptr, pp, ip, cp) >>> 0
```

#### 43. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L152-L153` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L153-L154) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L152-L153)

```diff
-       rrD(DD, zD) {
-         return Xz.v3gI(this.__wbg_ptr, DD, zD) >>> 0
+       RSp(pp, ip) {
+         return qi.uCIp(this.__wbg_ptr, pp, ip) >>> 0
```

#### 44. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L155-L156` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L156-L157) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L155-L156)

```diff
-       osD(DD) {
-         return Xz.t2rw(this.__wbg_ptr, DD) >>> 0
+       PIp(pp) {
+         return qi.WzeQ(this.__wbg_ptr, pp) >>> 0
```

#### 45. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L159` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L160) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L159)

```diff
-         return Xz.UcO5(this.__wbg_ptr) >>> 0
+         return qi.lJhG(this.__wbg_ptr) >>> 0
```

#### 46. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L161-L162` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L162-L163) · [Before (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L161-L162)

```diff
-       LrD() {
-         return Xz.xJAq(this.__wbg_ptr) >>> 0
+       qSp() {
+         return qi.VXC7(this.__wbg_ptr) >>> 0
```

#### 47. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L165` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L166) · [Before (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L165)

```diff
-         return Xz.CahB(this.__wbg_ptr) >>> 0
+         return qi.B9f6(this.__wbg_ptr) >>> 0
```

#### 48. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L167-L168` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L168-L169) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L167-L168)

```diff
-       crD() {
-         return Xz.ySxH(this.__wbg_ptr) >>> 0
+       MSp() {
+         return qi.A7Z5(this.__wbg_ptr) >>> 0
```

#### 49. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L170-L171` → after: `L171-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L171-L172) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L170-L171)

```diff
-       RrD() {
-         return Xz.TYfU(this.__wbg_ptr) >>> 0
+       CSp() {
+         return qi.LVNf(this.__wbg_ptr) >>> 0
```

#### 50. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L174` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L175) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L174)

```diff
-         const wD = Xz.utAN(DD, zD);
+         const cp = qi.Bi71(pp, ip);
```

#### 51. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L177-L178` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L178-L179) · [Before (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L177-L178)

```diff
-       ArD(DD) {
-         return Xz.tb4L(this.__wbg_ptr, DD) >>> 0
+       ESp(pp) {
+         return qi.ECyO(this.__wbg_ptr, pp) >>> 0
```

#### 52. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L181` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L182) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L181)

```diff
-         return Xz.s2uE(this.__wbg_ptr) >>> 0
+         return qi.ovF6(this.__wbg_ptr) >>> 0
```

#### 53. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L183-L184` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L184-L185) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L183-L184)

```diff
-       cKD(DD, zD) {
-         return Xz.gQw5(this.__wbg_ptr, DD, zD) >>> 0
+       CIp(pp, ip) {
+         return qi.jSKa(this.__wbg_ptr, pp, ip) >>> 0
```

#### 54. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L186-L187` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L187-L188) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L186-L187)

```diff
-       sKD(DD) {
-         return Xz.wdLy(this.__wbg_ptr, DD) >>> 0
+       mIp(pp) {
+         return qi.pL2q(this.__wbg_ptr, pp) >>> 0
```

#### 55. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L189-L190` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L190-L191) · [Before (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L189-L190)

```diff
-       UrD(DD, zD, wD, pD) {
-         return Xz.iCdP(this.__wbg_ptr, DD, zD, wD, pD) >>> 0
+       XSp(pp, ip, cp, Op) {
+         return qi.a2dG(this.__wbg_ptr, pp, ip, cp, Op) >>> 0
```

#### 56. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L192-L193` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L193-L194) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L192-L193)

```diff
-       fKD(DD) {
-         return Xz.n7rI(this.__wbg_ptr, DD) >>> 0
+       QIp(pp) {
+         return qi.hLW3(this.__wbg_ptr, pp) >>> 0
```

#### 57. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L195-L196` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L196-L197) · [Before (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L195-L196)

```diff
-       YsD() {
-         Xz.yY45(this.__wbg_ptr)
+       tIp() {
+         qi.xZIH(this.__wbg_ptr)
```

#### 58. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L198-L199` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L199-L200) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L198-L199)

```diff
-       hKD(DD) {
-         Xz.KMhT(this.__wbg_ptr, DD)
+       TIp(pp) {
+         qi.uZKY(this.__wbg_ptr, pp)
```

#### 59. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L201-L202` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L202-L203) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L201-L202)

```diff
-       GKD(DD) {
-         return Xz.a1Fg(this.__wbg_ptr, DD)
+       NIp(pp) {
+         return qi.eXco(this.__wbg_ptr, pp)
```

#### 60. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L204-L205` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L205-L206) · [Before (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L204-L205)

```diff
-       FsD() {
-         return Xz.XxV6(this.__wbg_ptr) >>> 0
+       vIp() {
+         return qi.aWfb(this.__wbg_ptr) >>> 0
```

#### 61. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L208` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L209) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L208)

```diff
-         return Xz.Eiz0(this.__wbg_ptr) >>> 0
+         return qi.lWPx(this.__wbg_ptr) >>> 0
```

#### 62. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L210-L211` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L211-L212) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L210-L211)

```diff
-       RKD() {
-         return Xz.saep(this.__wbg_ptr) >>> 0
+       XIp() {
+         return qi.BRIZ(this.__wbg_ptr) >>> 0
```

#### 63. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L213-L214` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L214-L215) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L213-L214)

```diff
-       eKD(DD) {
-         return Xz.zhij(this.__wbg_ptr, DD) >>> 0
+       DSp(pp) {
+         return qi.SpRl(this.__wbg_ptr, pp) >>> 0
```

#### 64. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L216-L217` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L217-L218) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L216-L217)

```diff
-       frD(DD) {
-         return Xz.mTR4(this.__wbg_ptr, DD) >>> 0
+       lSp(pp) {
+         return qi.t773(this.__wbg_ptr, pp) >>> 0
```

#### 65. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L219-L220` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L220-L221) · [Before (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L219-L220)

```diff
-       IrD(DD) {
-         return Xz.OyMh(this.__wbg_ptr, DD) >>> 0
+       QSp(pp) {
+         return qi.Pv4T(this.__wbg_ptr, pp) >>> 0
```

#### 66. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L222-L223` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L223-L224) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L222-L223)

```diff
-       BrD(DD) {
-         return Xz.GPjF(this.__wbg_ptr, DD) >>> 0
+       JSp(pp) {
+         return qi.IfWo(this.__wbg_ptr, pp) >>> 0
```

#### 67. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L226` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L227) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L226)

```diff
-         return Xz.RYVi(this.__wbg_ptr, DD, zD, wD) >>> 0
+         return qi.IhCb(this.__wbg_ptr, pp, ip, cp) >>> 0
```

#### 68. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L228-L229` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L229-L230) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L228-L229)

```diff
-       vsD(DD) {
-         return Xz.L7Jl(this.__wbg_ptr, DD) >>> 0
+       UIp(pp) {
+         return qi.KYhh(this.__wbg_ptr, pp) >>> 0
```

#### 69. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L231-L232` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L232-L233) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L231-L232)

```diff
-       dsD() {
-         return Xz.JqPQ(this.__wbg_ptr) >>> 0
+       cIp() {
+         return qi.DTvD(this.__wbg_ptr) >>> 0
```

#### 70. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L234-L235` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L235-L236) · [Before (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L234-L235)

```diff
-       GrD(DD) {
-         return Xz.rXjp(this.__wbg_ptr, DD) >>> 0
+       BSp(pp) {
+         return qi.kSQw(this.__wbg_ptr, pp) >>> 0
```

#### 71. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L237-L238` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L238-L239) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L237-L238)

```diff
-       hrD(DD) {
-         Xz.Cssz(this.__wbg_ptr, DD)
+       NSp(pp) {
+         qi.e71C(this.__wbg_ptr, pp)
```

#### 72. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L240-L241` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L241-L242) · [Before (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L240-L241)

```diff
-       nrD(DD) {
-         return 0 !== Xz.cHoK(this.__wbg_ptr, ND(DD))
+       TSp(pp) {
+         return 0 !== qi.IkNd(this.__wbg_ptr, bp(pp))
```

#### 73. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L244` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L245) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L244)

```diff
-         return Xz.HanS(this.__wbg_ptr, DD, zD, wD, pD) >>> 0
+         return qi.v2Nl(this.__wbg_ptr, pp, ip, cp, Op) >>> 0
```

#### 74. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L246-L247` → after: `L247-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L247-L248) · [Before (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L246-L247)

```diff
-       IpD(DD, zD, wD) {
-         const pD = Gz(DD, Xz.Oo0s, Xz.L01r),
+       ROp(pp, ip, cp) {
+         const Op = Hi(pp, qi.Lklm, qi.mB2K),
```

#### 75. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L249` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L250) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L249)

```diff
-           KD = fz(zD, Xz.Oo0s),
+           Ip = wi(ip, qi.Lklm),
```

#### 76. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L254` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L255) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L254)

```diff
-           }(wD, Xz.Oo0s),
+           }(cp, qi.Lklm),
```

#### 77. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L256` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L257) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L256)

```diff
-         return 0 !== Xz.nuIp(this.__wbg_ptr, pD, sD, KD, rD, LD, cD)
+         return 0 !== qi.Y39M(this.__wbg_ptr, Op, op, Ip, Sp, xp, Lp)
```

#### 78. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L258-L259` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L259-L260) · [Before (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L258-L259)

```diff
-       OrD(DD) {
-         Xz.LxOg(this.__wbg_ptr, DD)
+       fSp(pp) {
+         qi.K4cH(this.__wbg_ptr, pp)
```

#### 79. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L261-L262` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L262-L263) · [Before (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L261-L262)

```diff
-       JrD(DD, zD) {
-         return 0 !== Xz.u3VZ(this.__wbg_ptr, DD, zD)
+       bSp(pp, ip) {
+         return 0 !== qi.MW9V(this.__wbg_ptr, pp, ip)
```

#### 80. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L264-L265` → after: `L265-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L265-L266) · [Before (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L264-L265)

```diff
-       ErD(DD) {
-         return Xz.z31X(this.__wbg_ptr, DD) >>> 0
+       hSp(pp) {
+         return qi.OJgy(this.__wbg_ptr, pp) >>> 0
```

#### 81. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L268` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L269) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L268)

```diff
-         Xz.bdkq(this.__wbg_ptr, DD, zD)
+         qi.ETfc(this.__wbg_ptr, pp, ip)
```

#### 82. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L270-L271` → after: `L271-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L271-L272) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L270-L271)

```diff
-       FKD(DD) {
-         Xz.EnHi(this.__wbg_ptr, ND(DD))
+       vSp(pp) {
+         qi.cdjl(this.__wbg_ptr, bp(pp))
```

#### 83. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L273-L274` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L274-L275) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L273-L274)

```diff
-       QrD(DD) {
-         Xz.wloh(this.__wbg_ptr, DD)
+       aSp(pp) {
+         qi.jhWx(this.__wbg_ptr, pp)
```

#### 84. `bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js` (Changed code · before: `L276-L277` → after: `L277-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abcR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fcc840345b38da5fd47f8341c9edd1e468781dce3b21a306bc1b0a0fa6234abc) · [After (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L277-L278) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/bloxd-wasm-webgl.js#L276-L277)

```diff
-       msD(DD, zD, wD) {
-         return Xz.oPHG(this.__wbg_ptr, DD, zD, wD) >>> 0
+       DIp(pp, ip, cp) {
+         return qi.Dxh1(this.__wbg_ptr, pp, ip, cp) >>> 0
```
