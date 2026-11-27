# Changed — Bundle Modifications Report (Part 005 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `5 / 82` (**284** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 004](part-004.md) · [Part 006 →](part-006.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/101.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/101.js` (100 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8)

#### 95. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L924-L957` → after: `L26565-L26704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R26565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L26565-L26704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/101.js#L26565-L26704) · [Before (L924-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/101.js#L924-L957)

```diff
-     var ye = He(3101);
-     class be extends Error {
-       constructor(ee, ie, He) {
-         super(`${"fetch"===ee?"fetching":"decoding"} ${ie} failed`, He), this.stage = ee, this.source = ie, this.name = "ShellImageError"
-       }
-     }
-     async function Me(ee) {
-       let ie, He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ye.F,
-         Me = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
-       if ("string" === typeof ee) try {
-         ie = await He(ee)
-       } catch (Ke) {
-         throw new be("fetch", ee, {
-           cause: Ke
-         })
-       } else ie = ee;
- ... (18 more removed lines; see GitHub link above)
+     const mW = ["sine", "triangle", "square", "sawtooth"],
+       EW = 55,
+       NW = {
+         soft: {
+           waveform: "sine",
+           pitchHz: 300,
+           glideSemitones: -.5,
+           durationMs: 80,
+           attackMs: 6,
+           releaseMs: 18,
+           lowpassHz: null,
+           volume: .6,
+           intonation: {
+             variationSemitones: 1.2,
+             declineSemitones: 1.5,
+             questionRiseSemitones: 3.5,
+ ... (124 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L960-L963` → after: `L26707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R26707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L26707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/101.js#L26707) · [Before (L960-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/101.js#L960-L963)

```diff
-       if (Ke = ee, null !== ee) {
-         for (const [ie, He] of Ue) ee.mbe(ie, He);
-         Ue.clear()
-       }
+       return "string" !== typeof WW ? WW : Object.hasOwn(NW, WW) ? NW[WW] : null
```

#### 97. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L966-L976` → after: `L26710-L26711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R26710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L26710-L26711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/101.js#L26710-L26711) · [Before (L966-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/101.js#L966-L976)

```diff
-     function oe(ee) {
-       const ie = Fe++;
-       return Ke ? Ke.mbe(ie, ee) : Ue.set(ie, ee), ie
-     }
-     async function Re(ee, ie, He) {
-       const ye = await Me(ee, ie, He);
-       return {
-         id: oe(ye),
-         width: ye.width,
-         height: ye.height
-       }
+     function LW(WW, iW, OW) {
+       return Math.min(OW, Math.max(iW, WW))
```

#### 98. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L980-L983` → after: `L26715-L26736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R26715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L26715-L26736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/101.js#L26715-L26736) · [Before (L980-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/101.js#L980-L983)

```diff
-       var ie;
-       const He = Ue.get(ee);
-       if (He) return He.close(), void Ue.delete(ee);
-       null === (ie = Ke) || void 0 === ie || ie.lbe(ee)
+       const iW = LW(WW.durationMs, 10, 500),
+         OW = LW(WW.attackMs, 0, iW),
+         {
+           intonation: EW
+         } = WW;
+       return {
+         waveform: mW.includes(WW.waveform) ? WW.waveform : "sine",
+         pitchHz: LW(WW.pitchHz, 20, 4e3),
+         glideSemitones: LW(WW.glideSemitones, -24, 24),
+         durationMs: iW,
+         attackMs: OW,
+         releaseMs: LW(WW.releaseMs, 0, iW - OW),
+         lowpassHz: null === WW.lowpassHz ? null : LW(WW.lowpassHz, 20, 2e4),
+         volume: LW(WW.volume, 0, 2),
+         intonation: {
+           variationSemitones: LW(EW.variationSemitones, 0, 6),
+ ... (6 more added lines; see GitHub link above)
```

#### 99. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L986-L993` → after: `L26739-L26741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R26739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L26739-L26741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/101.js#L26739-L26741) · [Before (L986-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/101.js#L986-L993)

```diff
-   41992: (ee, ie, He) => {
-     function ye(ee, ie) {
-       if (!Object.prototype.hasOwnProperty.call(ee, ie)) throw new TypeError("attempted to use private field on non-instance");
-       return ee
-     }
-     He.d(ie, {
-       d: () => ye
-     })
+   10046: () => {},
+   11084: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
```

#### 100. `bundles/bloxd.io/chunks/js/101.js` (Changed code · before: `L995-L1003` → after: `L26743-L26759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8R26743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-560447759479365adebbef4417c855db5619876af6abc240e04a965e7fd8a8b8) · [After (L26743-L26759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/101.js#L26743-L26759) · [Before (L995-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/101.js#L995-L1003)

```diff
-   41995: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => be
-     });
-     var ye = 0;
- 
-     function be(ee) {
-       return "__private_" + ye++ + "_" + ee
-     }
+   19237: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm … [truncated]
+   },
+   21195: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
+   },
+   21203: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
+   },
+   21206: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
+   },
+   21210: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
+   },
+   21219: WW => {
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/102.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/102.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4)

#### 1. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L4-L6)

```diff
-   41658: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       startWasmPadGameplay: () => Ce
+   5525: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => MW,
+       f: () => UW
```

#### 2. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L8-L50` → after: `L9-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L9-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L9-L98) · [Before (L8-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L8-L50)

```diff
-     He(41666);
-     var ye = He(41670),
-       be = He(41688),
-       Me = He(2018),
-       Ke = He(41694),
-       Ue = He(5279),
-       Fe = He(5262),
-       Je = He(41702),
-       oe = He(41704),
-       Re = He(5286),
-       ke = He(41766),
-       qe = He(2495),
-       fe = He(9584),
-       Te = He(41679),
-       pe = He(9558),
-       Xe = He(39896);
- ... (27 more removed lines; see GitHub link above)
+     var mW = OW(1335),
+       EW = OW(27);
+     var NW = OW(344);
+     var PW = OW(643);
+     var LW = OW(3305),
+       cW = OW(5533),
+       wW = OW(5560),
+       tW = OW(5575);
+     class ZW {
+       constructor(WW, iW, OW, mW, EW, NW) {
+         this.id = WW, this.type = iW, this.parameters = OW, this.tearDownNotification = mW, this.onDonePromise = EW, this.resolveRequest = NW
+       }
+     }
+     const xW = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
+     class lW {
+       constructor(WW, iW, OW, mW, EW, NW) {
+ ... (74 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L52-L54` → after: `L100-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L100-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L100-L131) · [Before (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L52-L54)

```diff
-       Ye = () => {
-         const ee = (0, oe.h)();
-         return null !== ee && void 0 !== ee && ee.isCoreRunning ? ee : null
+       timedClick: class {
+         constructor(WW, iW, OW) {
+           var mW;
+           this.resolveRequest = iW, this.tearDownNotification = OW, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = WW, this.timeWindowMs = null !== (mW = this.parameters.JN) && void … [truncated]
+         }
+         handleMouseInput(WW) {
+           if (!WW || this.isCompleted) return;
+           Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
+         }
+         handleTick() {
+           if (this.isCompleted) return;
+           Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
+         }
+         complete(WW) {
+           this.isCompleted = !0, this.resolveRequest(WW)
+         }
+ ... (16 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L56-L77` → after: `L133-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L133-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L133-L193) · [Before (L56-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L56-L77)

```diff
-       Ve = ee => Ke.v.playerFlags(ee.api.apiView, 0),
-       ae = ee => null !== ee && Ke.v.targetBlockId(ee.api.apiView, 0) !== Ke.ad,
-       ce = () => {
-         const ee = (0, fe.d)(),
-           ie = new Te.d;
-         let He = !1;
-         const ye = (ee, ie) => {
-             (0, qe.v)(Ue.J.PadLook, Ke.Ld.Rate, ee, ie, 0)
-           },
-           be = () => {
-             He = !1, ie.reset(), ye(0, 0)
-           };
-         return {
-           update: (be, Me, Fe) => {
-             He || (ee.discardPending(), He = !0);
-             const Je = (0, Te.u)(ie, be, Me, Fe, performance.now());
- ... (6 more removed lines; see GitHub link above)
+       gravityBar: class {
+         constructor(WW, iW, OW) {
+           var mW;
+           this.resolveRequest = iW, this.tearDownNotification = OW, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirect … [truncated]
+           const EW = WW;
+           this.parameters = {
+             ...EW,
+             uN: NW.e.clamp(EW.uN, .05, 1)
+           }, this.progress = null !== (mW = EW.MN) && void 0 !== mW ? mW : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
+         }
+         handleMouseInput(WW) {
+           this.isMouseDown = WW
+         }
+         handleTick(WW) {
+           this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(WW))
+         }
+ ... (45 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L80-L82` → after: `L196-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L196-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L196-L242) · [Before (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L80-L82)

```diff
-       xe = () => {
-         const ee = Ye();
-         return null !== ee && 0 !== (Ve(ee) & Ke.Pd.PadSneakToggled)
+       precisionBar: class {
+         constructor(WW, iW, OW) {
+           var mW, EW, PW, LW, cW;
+           this.resolveRequest = iW, this.tearDownNotification = OW, this.startTime = void 0, this.speed = void 0, this.VN = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
+           const wW = WW;
+           this.parameters = {
+             ...wW,
+             speed: null !== (mW = wW.speed) && void 0 !== mW ? mW : .5,
+             VN: NW.e.clamp(wW.VN, .05, 1),
+             label: null !== (EW = wW.label) && void 0 !== EW ? EW : [{
+               str: "Click when the marker is within the green zone."
+             }],
+             icon: null !== (PW = wW.icon) && void 0 !== PW ? PW : null,
+             scale: null !== (LW = wW.scale) && void 0 !== LW ? LW : 1,
+             rotation: null !== (cW = wW.rotation) && void 0 !== cW ? cW : 0
+           }, this.speed = this.parameters.speed, this.VN = this.parameters.VN, this.startTime = Date.now()
+ ... (31 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L84-L88` → after: `L244-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L244-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L244-L269) · [Before (L84-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L84-L88)

```diff
-       Le = () => {
-         const ee = (ee => {
-           const ie = ee => function() {
-             return (0, ke.c)(), ee(...arguments)
-           };
+       rhythmClick: class {
+         constructor(WW, iW, OW) {
+           this.resolveRequest = iW, this.tearDownNotification = OW, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = WW, this.shrinkStartT … [truncated]
+         }
+         handleMouseInput(WW) {
+           if (!WW || this.isCompleted) return;
+           const iW = this.getOuterCircleProgress();
+           if (iW <= this.parameters.XN && iW >= -this.parameters.XN) {
+             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.fN) return void this.complete(!0)
+           } else this.handleMiss();
+           this.shrinkStartTime = Date.now()
+         }
+         handleMiss() {
+           this.misses++, this.lastClickResult = !1, !(0, PW.K)(this.parameters.BN) && this.misses > this.parameters.BN ? this.complete(!1) : this.shrinkStartTime = Date.now()
+         }
+         handleTick() {
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L90-L116` → after: `L271-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L271-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L271-L280) · [Before (L90-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L90-L116)

```diff
-             primaryFireDown: ie((ee => (we(Be, Ke.Bd.Down | (ee ? Ke.Bd.Repeat : 0)), 0))),
-             primaryFireUp: ie((() => {
-               Pe(Be)
-             })),
-             altFireDown: ie((() => (De(Ee), 0))),
-             altFireUp: ie((() => {
-               Pe(Ee)
-             })),
-             jumpDown: ie((() => {
-               Ae(Oe)
-             })),
-             specialActionDown: ie((ee => {
-               De(Ze[ee])
-             })),
-             specialActionUp: ie((ee => {
-               Pe(Ze[ee])
- ... (11 more removed lines; see GitHub link above)
+             type: this.type,
+             parameters: this.parameters,
+             state: {
+               outerCircleProgress: this.getOuterCircleProgress(),
+               successes: this.successes,
+               fN: this.parameters.fN,
+               misses: this.misses,
+               lastClickResult: this.lastClickResult
+             },
+             isActive: !0
```

#### 8. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L118-L194` → after: `L282-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L282-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L282-L316) · [Before (L118-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L118-L194)

```diff
-         })(Ye);
-         let ie = !1,
-           He = null;
-         const ye = () => {
-           var ee;
-           null === (ee = He) || void 0 === ee || ee(), He = null
-         };
-         return {
-           bodies: () => ee,
-           look: ce(),
-           move: (ee, He) => {
-             var be;
-             ye();
-             const {
-               bits: Me,
-               flips: Ue
- ... (61 more removed lines; see GitHub link above)
+         }
+         tearDown() {
+           this.tearDownNotification()
+         }
+       }
+     };
+ 
+     function kW() {
+       (0, tW.j)(LW.y.Qte, jW ? LW.y.Qte : 0), jW ? EW.l.iZ("qteStateUpdated", jW.getState()) : EW.l.iZ("qteStateUpdated", {
+         type: null,
+         typeSpecificParameters: null,
+         isActive: !1
+       })
+     }
+     class sW {
+       constructor(WW, iW) {
+ ... (19 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L196-L199` → after: `L318-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L318-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L318-L333) · [Before (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L196-L199)

```diff
-           },
-           pressTouchButton: ee => {
-             ee ? De(te) : Pe(te)
-           }
+           })),
+           LW = Promise.race([NW, PW]).then((() => {})),
+           cW = new ZW(WW, iW, OW, EW, LW, mW);
+         return bW.set(WW, cW), AW.enqueue(cW), jW || this.processNextQTE(), sW.create(NW, PW, EW)
+       }
+       static async processNextQTE() {
+         if (jW || AW.sZ()) return void(AW.sZ() && jW && (jW = null, kW()));
+         const WW = await AW.dequeue();
+         if (!bW.has(WW.id)) return void await this.processNextQTE();
+         bW.delete(WW.id);
+         const iW = new lW(WW.id, WW.type, WW.parameters, WW.resolveRequest, WW.onDonePromise, WW.tearDownNotification);
+         jW = iW, kW();
+         try {
+           await iW.waitUntilDone()
+         } catch (OW) {
+           console.error("Error while waiting for QTE to resolve:", OW.stack)
```

#### 10. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L201-L207` → after: `L335-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L335-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L335-L347) · [Before (L201-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L201-L207)

```diff
-       },
-       Ce = () => {
-         const ee = (0, be.d)(Le()),
-           ie = (0, ye.b)(),
-           He = null;
-         return () => {
-           ee(), ie(), null === He || void 0 === He || He()
+         jW === iW && (jW.cleanup(), jW = null, kW()), await this.processNextQTE()
+       }
+       static cancelQTE(WW) {
+         if (jW && jW.id === WW) return jW.tearDown(), jW = null, kW(), void this.processNextQTE();
+         const iW = bW.get(WW);
+         iW && (bW.delete(WW), iW.tearDownNotification())
+       }
+       static getCurrentState() {
+         return jW ? jW.getState() : {
+           type: null,
+           parameters: null,
+           state: null,
+           isActive: !1
```

#### 11. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L211` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L357) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L211)

```diff
-   5262: (ee, ie, He) => {
+   5533: (WW, iW, OW) => {
```

#### 12. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L213-L215` → after: `L359-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L359-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L359-L362) · [Before (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L213-L215)

```diff
-       A: () => we,
-       E: () => De,
-       H: () => ze,
+       B: () => hW,
+       D: () => HW,
+       F: () => kW,
+       G: () => PW,
```

#### 13. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L217-L220` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L364) · [Before (L217-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L217-L220)

```diff
-       O: () => Ue,
-       Q: () => te,
-       c: () => We,
-       d: () => Ee,
+       N: () => TW,
```

#### 14. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L225-L227` → after: `L371-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L371-L373) · [Before (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L225-L227)

```diff
-       q: () => Be,
-       u: () => ge,
-       w: () => Ze
+       r: () => sW,
+       v: () => KW,
+       x: () => JW
```

#### 15. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L229` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L375) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L229)

```diff
-     var ye = He(5265);
+     var mW = OW(5540);
```

#### 16. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L238` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L384) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L238)

```diff
-       Me = null !== ee && void 0 !== ee ? ee : be
+       NW = null !== WW && void 0 !== WW ? WW : EW
```

#### 17. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L330` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L476) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L330)

```diff
-       const Me = (0, ye.h)(ie),
+       const NW = (0, mW.g)(iW),
```

#### 18. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L362` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L508) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L362)

```diff
-   5286: (ee, ie, He) => {
+   5560: (WW, iW, OW) => {
```

#### 19. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L364-L368` → after: `L510-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L510-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L510-L551) · [Before (L364-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L364-L368)

```diff
-       d: () => be,
-       h: () => Me,
-       l: () => Ke,
-       p: () => ye,
-       t: () => Ue
+       c: () => cW,
+       f: () => NW,
+       g: () => LW
+     });
+     var mW = OW(3305),
+       EW = OW(5568);
+ 
+     function NW(WW) {
+       let {
+         action: iW,
+         flags: OW
+       } = WW;
+       return "mid-fire" === iW && 0 !== (OW & mW.e.AltLeftClick)
+     }
+     const PW = new Set;
+ 
+ ... (26 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L561-L565` → after: `L744-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L744-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L744-L749) · [Before (L561-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L561-L565)

```diff
-         TouchAction1: 191,
-         TouchAction2: 192,
-         TouchAction3: 193,
-         TouchAttack: 194,
-         TouchUse: 195
+         TouchZoom: 191,
+         TouchAction1: 192,
+         TouchAction2: 193,
+         TouchAction3: 194,
+         TouchAttack: 195,
+         TouchUse: 196
```

#### 21. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L635-L636` → after: `L819-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L819-L821) · [Before (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L635-L636)

```diff
-         "primary-fire": [194],
-         "alt-fire": [195]
+         Zoom: [191],
+         "primary-fire": [195],
+         "alt-fire": [196]
```

#### 22. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L640-L661` → after: `L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L825) · [Before (L640-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L640-L661)

```diff
-   41766: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke,
-       d: () => Me,
-       g: () => be
-     });
-     let ye = null;
- 
-     function be(ee) {
-       ye = ee
-     }
- 
-     function Me(ee) {
-       ye === ee && (ye = null)
-     }
- 
- ... (6 more removed lines; see GitHub link above)
+   5575: (WW, iW, OW) => {
```

#### 23. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L665` → after: `L828-L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L828-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L828-L829) · [Before (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L665)

```diff
-       h: () => Je
+       h: () => PW,
+       j: () => wW
```

#### 24. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L667-L668` → after: `L831-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L831-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L831-L832) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L667-L668)

```diff
-     var ye = He(2492),
-       be = He(2495);
+     var mW = OW(3305),
+       EW = OW(3308);
```

#### 25. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L679` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L843) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L679)

```diff
-           be !== ie && (ie = be, ee(ye.f.UiCapture, ye.p.Keyboard, 0, 0, be ? ye.p.Keyboard : 0))
+           EW !== iW && (iW = EW, WW(mW.k.UiCapture, mW.y.Keyboard, 0, 0, EW ? mW.y.Keyboard : 0))
```

#### 26. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L703` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L867) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L703)

```diff
-       Fe.set(ye, (null !== (He = Fe.get(ye)) && void 0 !== He ? He : 0) & ~ee | ie & ee);
+       cW.set(mW, (null !== (OW = cW.get(mW)) && void 0 !== OW ? OW : 0) & ~WW | iW & WW);
```

#### 27. `bundles/bloxd.io/chunks/js/102.js` (Changed code · before: `L706-L749` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-43192cd6ec22bc7657b3715bbdbc15c35cd0833bef9279637318b762dd0507c4) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/102.js#L870) · [Before (L706-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/102.js#L706-L749)

```diff
-       return (0, be.A)(ee, Me & ee)
-     }
-   },
-   37770: (ee, ie, He) => {
-     function ye(ee) {
-       return ee.includes("Leaf Bed")
-     }
- 
-     function be(ee) {
-       return / Bed(?: Head)?(?:\||$)/.test(ee) && !ye(ee)
-     }
- 
-     function Me(ee) {
-       return ee.includes(" Strongbed")
-     }
- 
- ... (28 more removed lines; see GitHub link above)
+       return (0, EW.z)(WW, NW & WW)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/103.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/103.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e)

#### 1. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/103.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/103.js#L2)

```diff
- export const ids = [103, 104];
+ export const ids = [103];
```

#### 2. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4-L11` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/103.js#L4-L7) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/103.js#L4-L11)

```diff
-   5279: (ee, ie, He) => {
-     He.d(ie, {
-       $b: () => te,
-       A: () => Ue,
-       Ab: () => pe,
-       Bb: () => De,
-       C: () => ye,
-       Eb: () => we,
+   5533: (WW, iW, OW) => {
+     OW.d(iW, {
+       B: () => hW,
+       D: () => HW,
```

#### 3. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L13-L15` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/103.js#L9-L10) · [Before (L13-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/103.js#L13-L15)

```diff
-       Ib: () => Le,
-       J: () => Ee,
-       Mb: () => ne,
+       G: () => PW,
+       K: () => LW,
```

#### 4. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L17-L30` → after: `L12-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L12-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/103.js#L12-L172) · [Before (L17-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/103.js#L17-L30)

```diff
-       O: () => Re,
-       Pb: () => ve,
-       S: () => ke,
-       T: () => oe,
-       Tb: () => me,
-       U: () => Je,
-       W: () => ge,
-       Xb: () => le,
-       Y: () => Fe,
-       ab: () => Te,
-       cb: () => fe,
-       d: () => ze,
-       dc: () => Ze,
-       ec: () => se,
+       e: () => yW,
+       g: () => MW,
+       k: () => uW,
+       m: () => nW,
+       n: () => UW,
+       o: () => SW,
+       r: () => sW,
+       v: () => KW,
+       x: () => JW
+     });
+     var mW = OW(5540);
+     const EW = {
+       lockPointer: () => !1,
+       unlockPointer: () => {},
+       leaveGame: () => {}
+     };
+ ... (145 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L32-L33` → after: `L174-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L174-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/103.js#L174-L209) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/103.js#L32-L33)

```diff
-       gb: () => Pe,
-       gc: () => be,
+       g: () => LW
+     });
+     var mW = OW(3305),
+       EW = OW(5568);
+ 
+     function NW(WW) {
+       let {
+         action: iW,
+         flags: OW
+       } = WW;
+       return "mid-fire" === iW && 0 !== (OW & mW.e.AltLeftClick)
+     }
+     const PW = new Set;
+ 
+     function LW(WW) {
+       return PW.add(WW), () => {
+ ... (20 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L35-L56` → after: `L211-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L211-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/103.js#L211-L413) · [Before (L35-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/103.js#L35-L56)

```diff
-       ib: () => Ye,
-       ic: () => Ge,
-       l: () => Be,
-       lb: () => Ve,
-       mb: () => Ae,
-       o: () => he,
-       ob: () => ae,
-       p: () => qe,
-       pb: () => je,
-       r: () => We,
-       s: () => Ie,
-       sb: () => Se,
-       t: () => de,
-       tb: () => ue,
-       ub: () => ce,
-       vb: () => Ce,
- ... (6 more removed lines; see GitHub link above)
+       m: () => PW,
+       n: () => mW,
+       q: () => LW
+     });
+     const mW = {
+         Mouse1: 1,
+         Mouse2: 2,
+         Mouse3: 3,
+         "Alt+Left Click": 4,
+         F2: 5,
+         F4: 6,
+         F5: 7,
+         F8: 8,
+         F9: 9,
+         Digit0: 10,
+         Digit1: 11,
+ ... (187 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L58-L89` → after: `L415-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L415-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/103.js#L415-L475) · [Before (L58-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/103.js#L58-L89)

```diff
-         AbiVersion: 0,
-         Status: 1,
-         LastError: 2,
-         ErrorCount: 3,
-         FrameIndex: 4,
-         TicksRun: 5,
-         TicksDropped: 6,
-         Alpha: 7,
-         NetOutPtr: 8,
-         NetOutLen: 9,
-         WorkerOutPtr: 10,
-         WorkerOutLen: 11,
-         EventsPtr: 12,
-         EventsLen: 13,
-         ScenePtr: 14,
-         SceneLen: 15,
- ... (16 more removed lines; see GitHub link above)
+         forward: [21, 46],
+         backward: [31, 49],
+         left: [30, 47],
+         right: [32, 48],
+         sprint: [50, 51],
+         jump: [59],
+         crouch: [52, 41, 60, 61, 62, 53],
+         "primary-fire": [1],
+         "alt-fire": [3, 22],
+         SpecialAction1: [23],
+         SpecialAction2: [33],
+         ReloadGun: [23],
+         DropItem: [20],
+         "mid-fire": [2, 4],
+         Zoom: [42],
+         SwapCameraZoom: [29, 7],
+ ... (45 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L92-L95` → after: `L478-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L478-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/103.js#L478-L483) · [Before (L92-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/103.js#L92-L95)

```diff
-         NotYet: 0,
-         Drawn: 1,
-         Backstop: 2,
-         HeldBackstop: 3
+         jump: [188],
+         crouch: [189],
+         SwapCameraZoom: [190],
+         Zoom: [191],
+         "primary-fire": [195],
+         "alt-fire": [196]
```

#### 9. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L97-L630` → after: `L485-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L485-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/103.js#L485-L587) · [Before (L97-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/103.js#L97-L630)

```diff
-       Ue = {
-         NotDrawn: 0,
-         Drawn: 1,
-         Paced: 2
-       },
-       Fe = {
-         AheadMask: 15,
-         Defaulted: 128,
-         LagsShift: 8,
-         CountMask: 4095
-       },
-       Je = {
-         TerrainDrawn: 1,
-         ChunkRequested: 2,
-         ChunkStored: 4,
-         MeshLanded: 8,
- ... (518 more removed lines; see GitHub link above)
+       LW = [16]
+   },
+   42429: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => tW,
+       f: () => wW,
+       i: () => cW
+     });
+     var mW = OW(5551),
+       EW = OW(3305),
+       NW = OW(5575);
+     let PW = !1,
+       LW = !1;
+ 
+     function cW(WW) {
+       PW = !0;
+ ... (87 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L632-L685` → after: `L589-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L589-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/103.js#L589-L600) · [Before (L632-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/103.js#L632-L685)

```diff
-       bb: () => Be,
-       bd: () => ye.$b,
-       ce: () => xe,
-       dc: () => qi,
-       e: () => pe,
-       eb: () => ye.C,
-       ee: () => ce,
-       fd: () => ye.dc,
-       g: () => Te,
-       gc: () => be.h,
-       h: () => Ri,
-       ib: () => ye.F,
-       id: () => ye.gc,
-       ie: () => ae,
-       k: () => Ze,
-       kc: () => ze,
- ... (38 more removed lines; see GitHub link above)
+       f: () => NW,
+       i: () => EW
+     });
+     let mW = null;
+ 
+     function EW(WW) {
+       mW = WW
+     }
+ 
+     function NW(WW) {
+       mW === WW && (mW = null)
+     }
```

#### 11. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L688-L800` → after: `L603-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L603-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/103.js#L603-L607) · [Before (L688-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/103.js#L688-L800)

```diff
-       return crypto.getRandomValues(new Uint32Array(Ue))
-     }
-     const Je = {
-         Ok: 0,
-         Errors: 1,
-         Fatal: 2
-       },
-       oe = 16,
-       Re = {
-         Draws: 1,
-         NetAll: 2,
-         StopForSends: 4
-       },
-       ke = 3,
-       qe = {
-         ShowFog: 1,
- ... (97 more removed lines; see GitHub link above)
+       var WW;
+       null === (WW = mW) || void 0 === WW || WW()
+     }
+   },
+   42416: (WW, iW, OW) => {
```

#### 12. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L802-L976` → after: `L609-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L609-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/103.js#L609-L623) · [Before (L802-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/103.js#L802-L976)

```diff
-       return (ee | ie << 8) >>> 0
-     }
- 
-     function ce(ee) {
-       return 255 & ee
-     }
- 
-     function xe(ee) {
-       return ee >>> 8
-     }
- 
-     function Le(ee) {
-       return ee + 3 & -4
-     }
-     const Ce = 16777216,
-       ve = 20;
- ... (159 more removed lines; see GitHub link above)
+       if (!Object.prototype.hasOwnProperty.call(WW, iW)) throw new TypeError("attempted to use private field on non-instance");
+       return WW
+     }
+     OW.d(iW, {
+       d: () => mW
+     })
+   },
+   42419: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => EW
+     });
+     var mW = 0;
+ 
+     function EW(WW) {
+       return "__private_" + mW++ + "_" + WW
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/104.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/104.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9)

#### 1. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L4` → after: `L4-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L4-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/104.js#L4-L216) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/104.js#L4)

```diff
-   5279: (ee, ie, He) => {
+   42056: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       startWasmPadGameplay: () => pW
+     });
+     OW(42060);
+     var mW = OW(42067),
+       EW = OW(42086),
+       NW = OW(2061),
+       PW = OW(42094),
+       LW = OW(5551),
+       cW = OW(5533),
+       wW = OW(42103),
+       tW = OW(42109),
+       ZW = OW(5568),
+       xW = OW(42185),
+       lW = OW(3308),
+ ... (197 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L6-L11` → after: `L218-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/104.js#L218-L219) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/104.js#L6-L11)

```diff
-       $b: () => te,
-       A: () => Ue,
-       Ab: () => pe,
-       Bb: () => De,
-       C: () => ye,
-       Eb: () => we,
+       B: () => hW,
+       D: () => HW,
```

#### 3. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L13-L15` → after: `L221-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/104.js#L221-L222) · [Before (L13-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/104.js#L13-L15)

```diff
-       Ib: () => Le,
-       J: () => Ee,
-       Mb: () => ne,
+       G: () => PW,
+       K: () => LW,
```

#### 4. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L17-L27` → after: `L224-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L224-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/104.js#L224-L669) · [Before (L17-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/104.js#L17-L27)

```diff
-       O: () => Re,
-       Pb: () => ve,
-       S: () => ke,
-       T: () => oe,
-       Tb: () => me,
-       U: () => Je,
-       W: () => ge,
-       Xb: () => le,
-       Y: () => Fe,
-       ab: () => Te,
-       cb: () => fe,
+       e: () => yW,
+       g: () => MW,
+       k: () => uW,
+       m: () => nW,
+       n: () => UW,
+       o: () => SW,
+       r: () => sW,
+       v: () => KW,
+       x: () => JW
+     });
+     var mW = OW(5540);
+     const EW = {
+       lockPointer: () => !1,
+       unlockPointer: () => {},
+       leaveGame: () => {}
+     };
+ ... (430 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L29-L30` → after: `L671-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L671-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/104.js#L671-L733) · [Before (L29-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/104.js#L29-L30)

```diff
-       dc: () => Ze,
-       ec: () => se,
+       h: () => PW,
+       j: () => wW
+     });
+     var mW = OW(3305),
+       EW = OW(3308);
+     const NW = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);
+ 
+     function PW(WW) {
+       return WW instanceof HTMLElement && (!!(WW.isContentEditable || WW instanceof HTMLTextAreaElement || WW instanceof HTMLSelectElement) || WW instanceof HTMLInputElement && !NW.has(WW.type))
+     }
+ 
+     function LW(WW) {
+       let iW = null;
+       const OW = OW => {
+           const EW = PW(OW);
+           EW !== iW && (iW = EW, WW(mW.k.UiCapture, mW.y.Keyboard, 0, 0, EW ? mW.y.Keyboard : 0))
+ ... (47 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L32-L41` → after: `L735-L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L735-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/104.js#L735-L765) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/104.js#L32-L41)

```diff
-       gb: () => Pe,
-       gc: () => be,
-       i: () => Ne,
-       ib: () => Ye,
-       ic: () => Ge,
-       l: () => Be,
-       lb: () => Ve,
-       mb: () => Ae,
-       o: () => he,
-       ob: () => ae,
+       j: () => NW,
+       l: () => EW
+     })
+   },
+   38088: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => wW
+     });
+     var mW = OW(38097),
+       EW = OW(5725);
+     const NW = [],
+       PW = [],
+       LW = [],
+       cW = [];
+     for (const tW of Object.keys(EW.p))(0, mW.f)(tW) ? NW.push(tW) : (0, mW.l)(tW) && PW.push(tW), (0, mW.j)(tW) && LW.push(tW), (tW.includes(" Bed Head") || tW.includes(" Strongbed Head")) && cW.push(tW);
+     const wW = {
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L43-L53` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/104.js#L767) · [Before (L43-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/104.js#L43-L53)

```diff
-       pb: () => je,
-       r: () => We,
-       s: () => Ie,
-       sb: () => Se,
-       t: () => de,
-       tb: () => ue,
-       ub: () => ce,
-       vb: () => Ce,
-       x: () => Oe,
-       z: () => Ke,
-       zb: () => xe
+       s: () => LW
```

#### 8. `bundles/bloxd.io/chunks/js/104.js` (Changed code · before: `L55-L580` → after: `L769-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9R769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1dcc5f595b99f6dcf851d7b65614b471ed4d7fdc1a7bd7def7e9cfa99144ec9) · [After (L769-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/104.js#L769-L790) · [Before (L55-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/104.js#L55-L580)

```diff
-     const ye = 32,
-       be = 33.333333333333336,
-       Me = {
-         AbiVersion: 0,
-         Status: 1,
-         LastError: 2,
-         ErrorCount: 3,
-         FrameIndex: 4,
-         TicksRun: 5,
-         TicksDropped: 6,
-         Alpha: 7,
-         NetOutPtr: 8,
-         NetOutLen: 9,
-         WorkerOutPtr: 10,
-         WorkerOutLen: 11,
-         EventsPtr: 12,
- ... (510 more removed lines; see GitHub link above)
+     let mW = function(WW) {
+         return WW[WW.DEFAULT = 0] = "DEFAULT", WW[WW.BOAT = 1] = "BOAT", WW[WW.GLIDER = 2] = "GLIDER", WW[WW.BALLOON = 3] = "BALLOON", WW[WW.SLEEPING = 4] = "SLEEPING", WW[WW.RIDING_MOB = 5] = "RIDING_MOB", WW[WW.CAR = 6] = "CAR", WW[WW.HOVERCRAFT = 7] = "HOVERCRAFT", WW
+       }({}),
+       EW = function(WW) {
+         return WW[WW.WOOD = 0] = "WOOD", WW[WW.OBSIDIAN = 1] = "OBSIDIAN", WW[WW.SPEED = 2] = "SPEED", WW
+       }({}),
+       NW = function(WW) {
+         return WW[WW.WOOD = 0] = "WOOD", WW[WW.IRON = 1] = "IRON", WW[WW.GOLD = 2] = "GOLD", WW[WW.DIAMOND = 3] = "DIAMOND", WW
+       }({}),
+       PW = function(WW) {
+         return WW[WW.YELLOW = 0] = "YELLOW", WW[WW.WHITE = 1] = "WHITE", WW[WW.RED = 2] = "RED", WW[WW.PURPLE = 3] = "PURPLE", WW[WW.PINK = 4] = "PINK", WW[WW.ORANGE = 5] = "ORANGE", WW[WW.MAGENTA = 6] = "MAGENTA", WW[WW.LIME = 7] = "LIME", WW[WW.LIGHT_GRAY = 8] = "LIGHT_GRAY", W … [truncated]
+       }({}),
+       LW = function(WW) {
+         return WW[WW.ROTATION_1 = 0] = "ROTATION_1", WW[WW.ROTATION_2 = 1] = "ROTATION_2", WW[WW.ROTATION_3 = 2] = "ROTATION_3", WW[WW.ROTATION_4 = 3] = "ROTATION_4", WW
+       }({}),
+       cW = function(WW) {
+ ... (6 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/105.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/105.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8)

#### 1. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L2)

```diff
- export const ids = [105, 702];
+ export const ids = [105, 106];
```

#### 2. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L4-L23` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L4) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L4-L23)

```diff
-   44667: (ee, ie, He) => {
-     async function ye(ee, ie) {
-       const [{
-         clientSideServerUrls: ye
-       }, {
-         postJsonWithMetricsCookiesAndJsonResponse: be
-       }, {
-         gameBridge: Me
-       }] = await Promise.all([Promise.resolve().then((() => He(1141))), Promise.resolve().then((() => He(1083))), Promise.resolve().then((() => He(1983)))]), Ke = Me.latest("connectedGame").websocketUrl;
-       if (!Ke) throw new Error("AI Helper: not connected to a game server");
-       const Ue = `${ye.getHttpUrlFromWebSocketUrl(Ke)}${ee}`;
-       return await be(Ue, ie, {
-         retries: 0
-       })
-     }
-     He.r(ie), He.d(ie, {
- ... (4 more removed lines; see GitHub link above)
+   5551: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L25` → after: `L6-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L6-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L6-L53) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L25)

```diff
-       b: () => be
+       $b: () => qW,
+       Bb: () => eW,
+       C: () => SW,
+       D: () => PW,
+       Db: () => RW,
+       Eb: () => BW,
+       H: () => LW,
+       Hb: () => fW,
+       Jb: () => vW,
+       K: () => mW,
+       M: () => NW,
+       N: () => MW,
+       Nb: () => VW,
+       Ob: () => gW,
+       Qb: () => jW,
+       R: () => FW,
+ ... (32 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L27-L44` → after: `L55-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L55-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L55-L580) · [Before (L27-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L27-L44)

```diff
-     var ye = He(1228);
- 
-     function be(ee) {
-       let {
-         href: ie,
-         children: He
-       } = ee;
-       return (0, ye.jsxs)("a", {
-         className: "WorldCodeAiExternalLink",
-         href: ie,
-         target: "_blank",
-         rel: "noreferrer noopener",
-         children: [He, " ", (0, ye.jsx)("span", {
-           "aria-hidden": "true",
-           children: "\u2197"
-         })]
- ... (2 more removed lines; see GitHub link above)
+     const mW = 32,
+       EW = 33.333333333333336,
+       NW = {
+         AbiVersion: 0,
+         Status: 1,
+         LastError: 2,
+         ErrorCount: 3,
+         FrameIndex: 4,
+         TicksRun: 5,
+         TicksDropped: 6,
+         Alpha: 7,
+         NetOutPtr: 8,
+         NetOutLen: 9,
+         WorkerOutPtr: 10,
+         WorkerOutLen: 11,
+         EventsPtr: 12,
+ ... (510 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L46-L49` → after: `L582-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L582-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L582-L679) · [Before (L46-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L46-L49)

```diff
-   44659: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       WorldCodeAiPanel: () => Pk,
-       default: () => Ak
+   5546: (WW, iW, OW) => {
+     OW.d(iW, {
+       $d: () => GW,
+       A: () => bi,
+       Ac: () => mW.pb,
+       Bb: () => Ei,
+       Be: () => AW,
+       C: () => FW,
+       Cd: () => mW.kc,
+       D: () => mW.o,
+       Dc: () => mW.tb,
+       E: () => wW,
+       Eb: () => mW.U,
+       Ed: () => mW.lc,
+       G: () => mW.q,
+       Hb: () => EW.h,
+ ... (82 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L51-L113` → after: `L681-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L681-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L681-L685) · [Before (L51-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L51-L113)

```diff
-     var ye = He(59),
-       be = He(1053),
-       Me = He.n(be),
-       Ke = He(1228);
- 
-     function Ue(ee) {
-       let {
-         title: ie,
-         children: He,
-         isCalm: be = !1,
-         isElsewhere: Ue = !1,
-         defaultOpen: Fe = !1,
-         isOpen: Je,
-         onToggle: oe,
-         className: Re
-       } = ee;
- ... (47 more removed lines; see GitHub link above)
+     var mW = OW(5551),
+       EW = OW(3305);
+     const NW = Math.round(1e3 / mW.rc),
+       PW = 4,
+       LW = 2;
```

#### 7. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L115-L162` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L687-L688) · [Before (L115-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L115-L162)

```diff
-     function ge(ee) {
-       return ee === Xe.k || ee === Xe.r
-     }
- 
-     function Oe(ee) {
-       const ie = Ee(ee);
-       return null === ie ? ee : `${pe.b}${ie}`
-     }
-     var de = He(198),
-       We = He(44595),
-       te = He.n(We);
- 
-     function Ze(ee) {
-       const ie = [];
-       let He = 0;
-       return ee.split("\n").forEach(((ee, ye) => {
- ... (32 more removed lines; see GitHub link above)
+     function cW() {
+       return crypto.getRandomValues(new Uint32Array(LW))
```

#### 8. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L164-L175` → after: `L690-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L690-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L690-L707) · [Before (L164-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L164-L175)

```diff
- 
-     function Pe(ee, ie) {
-       if ("" === ie.trim()) return null;
-       const He = Ze(ee),
-         ye = function(ee) {
-           return ee.split("\n").map((ee => ee.trim())).filter(((ee, ie, He) => "" !== ee || ie > 0 && ie < He.length - 1))
-         }(ie),
-         be = De(He, ye, (ee => ee.trim()));
-       if (null !== be) return {
-         from: be.from,
-         to: be.to,
-         isLoose: !be.isOnly
+     const wW = {
+         Ok: 0,
+         Errors: 1,
+         Fatal: 2
+       },
+       tW = 16,
+       ZW = {
+         Draws: 1,
+         NetAll: 2,
+         StopForSends: 4
+       },
+       xW = 3,
+       lW = {
+         ShowFog: 1,
+         Lighting: 2,
+         ChunkFade: 4,
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L475-L481` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L711) · [Before (L475-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L475-L481)

```diff
-       let ie = ee.replace(/\s+/g, " ").trim();
-       if ("" === ie || yi.test(ie)) return null;
-       if (ie.length > Hi) {
-         const ee = ie.slice(0, Hi);
-         ie = `${ee.slice(0,Math.max(ee.lastIndexOf(" "),60)).trimEnd()}\u2026`
-       }
-       return ie.charAt(0).toUpperCase() + ie.slice(1)
+       return (WW.nametagsHidden ? YW.NametagsHidden : 0) | (WW.crouchToggle ? YW.CrouchToggle : 0) | (WW.bhopDisabled ? YW.BhopDisabled : 0) | (WW.disableBobbing ? YW.DisableBobbing : 0) | (null !== WW.ezTowering ? YW.EzTowering : 0) | ("jump" === WW.ezTowering ? YW.EzTowerJump : … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L483` → after: `L713-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L713-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L713-L747) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L483)

```diff
-     const Mi = /(?:===?\s*|\bcase\s+|startsWith\(\s*)["'`]\/?([a-zA-Z][\w-]{0,20})/g;
+     const bW = {
+         Flags: 0,
+         PhysicsVersion: 1,
+         InbuiltOverwritten: 2,
+         AltComplete: 3,
+         ProbeUsedProp: 4
+       },
+       jW = {
+         Ready: 1,
+         SendFnReplaced: 2,
+         Butto: 4,
+         IdentityChanged: 32,
+         CheckFuncHit: 128,
+         OriginStackHit: 256
+       },
+       UW = {
+ ... (19 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L486-L488` → after: `L750-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L750-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L750-L755) · [Before (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L486-L488)

```diff
-       var ie, He;
-       const ye = null === (ie = /\(([^)]*)\)/.exec(ee)) || void 0 === ie || null === (He = ie[1].split(",")[1]) || void 0 === He ? void 0 : He.trim();
-       return ye && /^[A-Za-z_$][\w$]*$/.test(ye) ? [...ee.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)].flatMap((ee => ee[2].split(",").some((ee => ee.trim() === ye)) ? [ee[1]] : [])) : []
+       const iW = {
+         off: 0,
+         lit: lW.CellLight,
+         all: lW.CellLight | lW.CellLightUnlit
+       } [WW.cellLight];
+       return (WW.showFog ? lW.ShowFog : 0) | (WW.lighting ? lW.Lighting : 0) | (WW.chunkFade ? lW.ChunkFade : 0) | iW
```

#### 12. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L492-L577` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L802) · [Before (L492-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L492-L577)

```diff
-       const He = new Set,
-         ye = new Set,
-         be = new Set,
-         Me = Object.values(ee).map((ee => {
-           const ie = Se(ee),
-             He = ie.filter((ee => "playerCommand" === ee.name)).map((ie => ee.slice(ie.from, ie.to)));
-           return {
-             text: ee,
-             found: ie,
-             own: He
-           }
-         })),
-         Ke = new Set(Me.flatMap((ee => {
-           let {
-             own: ie
-           } = ee;
- ... (70 more removed lines; see GitHub link above)
+       return (WW | iW << 8) >>> 0
```

#### 13. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L581-L582` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L806) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L581-L582)

```diff
-       const ie = ee.split(/\n|\|/).map((ee => ee.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((ee => "" !== ee)).slice(0, 5).map((ee => ee.length > 90 ? `${ee.slice(0,89).trimEnd()}\u2026` : ee));
-       return ie.length >= 2 ? ie : []
+       return 255 & WW
```

#### 14. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L587` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L810) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L587)

```diff
-       return ee.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
+       return WW >>> 8
```

#### 15. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L591-L594` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L814) · [Before (L591-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L591-L594)

```diff
-       const ie = new Set;
-       for (const He of ee.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm)) ie.add(He[1]);
-       for (const He of ee.matchAll(/^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)/gm)) ie.add(He[1]);
-       return [...ie]
+       return WW + 3 & -4
```

#### 16. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L596-L627` → after: `L816-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L816-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L816-L827) · [Before (L596-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L596-L627)

```diff
- 
-     function Bi(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const ye = new Set(ie),
-         be = new Map;
-       for (const Re of ie) {
-         var Me;
-         const ee = Xi(Re);
-         be.set(ee, [...null !== (Me = be.get(ee)) && void 0 !== Me ? Me : [], Re])
-       }
-       const Ke = zi(ee),
-         Ue = new Set(zi(He)),
-         Fe = [];
-       let Je = ee;
-       for (const Re of Ke) {
-         var oe;
- ... (16 more removed lines; see GitHub link above)
+     const VW = 16777216,
+       pW = 20;
+     const fW = 8,
+       CW = 8,
+       XW = 16777216,
+       BW = {
+         JobResult: 1,
+         WorkerStarted: 2,
+         WorkerLost: 3,
+         WorldgenResult: 4,
+         WorldgenStarted: 5,
+         WorldgenLost: 6
```

#### 17. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L631-L632` → after: `L830-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L830-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L830-L834) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L631-L632)

```diff
-         type: "string",
-         description: "A few plain words for the creator on what this change does, under 80 characters"
+         Ok: 0,
+         Refused: 1,
+         Trapped: 2,
+         NotHeld: 3,
+         HeapRefused: 4
```

#### 18. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L635-L638` → after: `L838-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L838-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L838-L839) · [Before (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L635-L638)

```diff
-         readOnlyHint: !0,
-         destructiveHint: !1,
-         idempotentHint: !0,
-         openWorldHint: !1
+         Lost: 0,
+         Gone: 1
```

#### 19. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L640-L1106` → after: `L841-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L841-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L841-L847) · [Before (L640-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L640-L1106)

```diff
-       Wi = [{
-         name: "write_file",
-         title: "Write a file",
-         description: "Replaces a file with new code, or makes a new file",
-         inputSchema: {
-           type: "object",
-           properties: {
-             path: {
-               type: "string",
-               description: "The file's path, e.g. index.js"
-             },
-             why: Oi,
-             content: {
-               type: "string",
-               description: "The whole new file"
-             }
- ... (451 more removed lines; see GitHub link above)
+       IW = {
+         Init: 1,
+         Mesh: 2,
+         WorldgenSeed: 3,
+         Generate: 4,
+         Retire: 5
+       };
```

#### 20. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1109-L1111` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L850) · [Before (L1109-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L1109-L1111)

```diff
-       const ie = Wi.find((ie => ie.name === ee));
-       if (!ie) throw new Error(`No AI Helper tool ${ee}`);
-       return ie
+       return WW === IW.WorldgenSeed || WW === IW.Generate
```

#### 21. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1113-L1116` → after: `L852-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L852-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L852-L929) · [Before (L1113-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L1113-L1116)

```diff
-     const wi = Wi.map((ee => ee.name)).filter((ee => "plan" !== ee && "remember" !== ee)).join("|"),
-       Di = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
-       Pi = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${wi})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
-       Ai = /[.!?](?=[ \t]|[A-Z]|$)|\n|$/g;
+     const rW = 4,
+       zW = 99,
+       FW = {
+         PAIRS_MAX: 16,
+         FIXED_WORDS: 2,
+         PAIR_WORDS: 2,
+         WORDS_MAX: 34
+       },
+       QW = {
+         BYTES: 12,
+         WEBGPU: 1,
+         GL: 2,
+         WEBGPU_LOSSES_MAX: 2,
+         LOST: 0,
+         PIPELINE_FAILED: 1,
+         RESTORE_LOST: 2
+ ... (62 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1119-L1136` → after: `L932-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L932-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L932-L934) · [Before (L1119-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L1119-L1136)

```diff
-       const ie = ee.trim();
-       return Pi.some((ee => ee.test(ie)))
-     }
- 
-     function Vi(ee, ie) {
-       const He = ee.replace(Di, "");
-       return ie ? function(ee) {
-         const ie = ee.indexOf("```"),
-           He = -1 === ie ? ee : ee.slice(0, ie);
-         let ye = -1,
-           be = -1,
-           Me = 0;
-         for (const Ke of He.matchAll(Ai)) {
-           const ee = Ke.index + Ke[0].length;
-           Yi(He.slice(Me, ee)) && (ye = -1 === ye ? Me : ye, be = ee), Me = ee
-         }
- ... (2 more removed lines; see GitHub link above)
+       for (const [iW, OW] of Object.entries(mW.o))
+         if (OW === WW) return iW;
+       return `Unknown${WW}`
```

#### 23. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1142-L1176` → after: `L938-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L938-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L938-L947) · [Before (L1142-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L1142-L1176)

```diff
-       const ie = "string" === typeof ee ? ee.split(/[./:]/).pop() : void 0;
-       return function(ee) {
-         return Wi.some((ie => ie.name === ee))
-       }(ie) ? ie : null
-     }
- 
-     function Li(ee, ie) {
-       return He => {
-         const ye = [];
-         let be;
-         for (const Fe of He.matchAll(ee)) {
-           var Me;
-           const ee = xi(Fe[1]);
-           if (null === ee) continue;
-           const Je = {};
-           for (const He of Fe[2].matchAll(ie)) {
- ... (19 more removed lines; see GitHub link above)
+       return {
+         status: WW[mW.M.Status],
+         lastError: WW[mW.M.LastError],
+         lastErrorDetail: WW[mW.M.LastErrorDetail],
+         errorCount: WW[mW.M.ErrorCount],
+         frameIndex: WW[mW.M.FrameIndex],
+         tickIndex: WW[mW.M.TickIndex],
+         renderPending: WW[mW.M.RenderPending],
+         firstView: WW[mW.M.FirstView],
+         chunksCancelled: WW[mW.M.ChunksCancelled]
```

#### 24. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1181-L1194` → after: `L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L960) · [Before (L1181-L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L1181-L1194)

```diff
-       return ee.replace(/\\(["\\nt])/g, ((ee, ie) => "n" === ie ? "\n" : "t" === ie ? "\t" : ie))
-     }
- 
-     function vi(ee) {
-       let ie = null !== ee && void 0 !== ee ? ee : {};
-       if ("string" === typeof ie) try {
-         ie = JSON.parse("" === ie ? "{}" : ie)
-       } catch {
-         return null
-       }
-       if ("object" !== typeof ie || null === ie) return null;
-       const He = {};
-       for (const [ye, be] of Object.entries(ie)) "string" === typeof be ? He[ye] = ci.has(ye) && ai.test(be) && !be.includes("\n") ? Ci(be) : be : "boolean" === typeof be || "number" === typeof be ? He[ye] = String(be) : "object" !== typeof be || null === be || Array.isArray(be)  … [truncated]
-       return He
+       return "none" !== WW
```

#### 25. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1198-L1205` → after: `L964-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L964-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L964-L971) · [Before (L1198-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L1198-L1205)

```diff
-       let He = 0,
-         ye = !1;
-       for (let be = ie; be < ee.length; be++) {
-         const ie = ee[be];
-         if (ye) "\\" === ie ? be++ : '"' === ie && (ye = !1);
-         else if ('"' === ie) ye = !0;
-         else if ("{" === ie) He++;
-         else if ("}" === ie && (He--, 0 === He)) return be + 1
+       if (!WW) return "none";
+       switch (iW) {
+         case mW.V.Drawn:
+           return "drawn";
+         case mW.V.Paced:
+           return "paced";
+         default:
+           return "skipped"
```

#### 26. `bundles/bloxd.io/chunks/js/105.js` (Changed code · before: `L1210-L1217` → after: `L975-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8R975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-35a2e7238c1b1ef304459096d26881e0a43390f24ac5f4af101c1bd3465d0bd8) · [After (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/105.js#L975-L976) · [Before (L1210-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/105.js#L1210-L1217)

```diff
-     function mi(ee, ie) {
-       let He = ee;
-       for (const {
-           call: ye,
-           index: be
-         }
-         of ie) He = He.slice(0, be) + " ".repeat(ye.source.length) + He.slice(be + ye.source.length);
-       return He
+     function PW(WW) {
+       return "drawn" === WW
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/106.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/106.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e)

#### 1. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L4-L454` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/106.js#L4) · [Before (L4-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/106.js#L4-L454)

```diff
-   44463: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       DOCS_AGENT_PART_CHARS: () => Li.e,
-       DOCS_LLMS_FULL_TXT_PATH: () => Li.h,
-       DOCS_LLMS_TXT_PATH: () => Li.k,
-       DOCS_LLMS_TXT_URL: () => Li.n,
-       ROOT_LLMS_TXT_PATH: () => Li.r,
-       allGamemodeSettings: () => ye.e,
-       arcadeModeStaticConfig: () => Te.b,
-       arenaStaticConfig: () => bi,
-       backroomsStaticConfig: () => yi.d,
-       battleBoxStaticConfig: () => Fi,
-       bedwarsStaticConfig: () => Pe.d,
-       bloxdAggregatorConfig: () => Ue.b,
-       bloxdPreprodAggregatorConfig: () => Fe.d,
-       bloxdStagingAggregatorConfig: () => Je.e,
- ... (435 more removed lines; see GitHub link above)
+   5551: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L456` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/106.js#L6-L8) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/106.js#L456)

```diff
-       B: () => Re,
+       $b: () => qW,
+       Bb: () => eW,
+       C: () => SW,
```

#### 3. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L462-L464` → after: `L39-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L39-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/106.js#L39-L52) · [Before (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/106.js#L462-L464)

```diff
-       n: () => Ke,
-       r: () => Ue,
-       v: () => pe,
+       kb: () => AW,
+       kc: () => TW,
+       lc: () => JW,
+       nb: () => nW,
+       nc: () => GW,
+       o: () => aW,
+       pb: () => oW,
+       q: () => lW,
+       rc: () => EW,
+       tb: () => dW,
+       u: () => yW,
+       uc: () => zW,
+       x: () => IW,
+       xb: () => uW,
```

#### 4. `bundles/bloxd.io/chunks/js/106.js` (Changed code · before: `L467-L505` → after: `L55-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11eR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5ed826d567209208d19f232a725c348cf0536e33acc8709cf5eba22781ebd11e) · [After (L55-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/106.js#L55-L580) · [Before (L467-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/106.js#L467-L505)

```diff
-     var ye = He(1585);
-     const be = 24e3,
-       Me = "/docs/llms.txt",
-       Ke = `${ye.b}${Me}`,
-       Ue = "/llms.txt",
-       Fe = "/docs/llms-full.txt";
- 
-     function Je(ee) {
-       return ee || "index"
-     }
- 
-     function oe(ee) {
-       return `/docs/${Je(ee)}.md`
-     }
- 
-     function Re(ee, ie) {
- ... (23 more removed lines; see GitHub link above)
+     const mW = 32,
+       EW = 33.333333333333336,
+       NW = {
+         AbiVersion: 0,
+         Status: 1,
+         LastError: 2,
+         ErrorCount: 3,
+         FrameIndex: 4,
+         TicksRun: 5,
+         TicksDropped: 6,
+         Alpha: 7,
+         NetOutPtr: 8,
+         NetOutLen: 9,
+         WorkerOutPtr: 10,
+         WorkerOutLen: 11,
+         EventsPtr: 12,
+ ... (510 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/107.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/107.js` (417 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa)

#### 1. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3)

```diff
- export const ids = [10, 13, 14, 16, 17, 19, 21, 23, 24, 25, 27, 29, 107, 152];
+ export const ids = [107, 711];
```

#### 2. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5-L6` → after: `L4-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L4-L21) · [Before (L5-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5-L6)

```diff
-   40450: () => {
-     "undefined" === typeof window || window.global || (window.global = window.globalThis || {})
+   53658: (WW, iW, OW) => {
+     async function mW(WW, iW) {
+       const [{
+         clientSideServerUrls: mW
+       }, {
+         postJsonWithMetricsCookiesAndJsonResponse: EW
+       }, {
+         gameBridge: NW
+       }] = await Promise.all([Promise.resolve().then((() => OW(1185))), Promise.resolve().then((() => OW(1111))), Promise.resolve().then((() => OW(2037)))]), PW = NW.latest("connectedGame").websocketUrl;
+       if (!PW) throw new Error("AI Helper: not connected to a game server");
+       const LW = `${mW.getHttpUrlFromWebSocketUrl(PW)}${WW}`;
+       return await EW(LW, iW, {
+         retries: 0
+       })
+     }
+     OW.r(iW), OW.d(iW, {
+ ... (2 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8-L30` → after: `L23-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L23-L27) · [Before (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8-L30)

```diff
-   40464: (ee, ie, He) => {
-     var ye = [],
-       be = [],
-       Me = [],
-       Ke = [],
-       Ue = [],
-       Fe = [],
-       Je = [],
-       oe = [],
-       Re = [],
-       ke = [],
-       qe = [],
-       fe = [],
-       Te = He(9965).e,
-       pe = 1e-5,
-       Xe = [0, 0, 0],
- ... (7 more removed lines; see GitHub link above)
+   7532: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => EW
+     });
+     var mW = OW(1283);
```

#### 4. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L32-L51` → after: `L29-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L29-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L29-L43) · [Before (L32-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L32-L51)

```diff
-     function te(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
-       var Je, oe = Xe,
-         Re = ze;
-       for (Je = 0; Je < 3; Je++) {
-         var ke = 0 === Je ? He : 1 === Je ? ye : be;
-         oe[Je] = ke + ee[ie + Je], Re[Je] = ke + ee[ie + Je + 3]
-       }
-       if (Me[0] < Re[0] - Fe && Ke[0] > oe[0] + Fe && Me[1] < Re[1] - Fe && Ke[1] > oe[1] + Fe && Me[2] < Re[2] - Fe && Ke[2] > oe[2] + Fe) return -1;
-       var qe = -1 / 0,
-         fe = 1 / 0,
-         Te = -1;
-       for (Je = 0; Je < 3; Je++) {
-         var pe = Ue[Je];
-         if (0 !== pe) {
-           var Ee = pe > 0 ? (oe[Je] - Ke[Je]) / pe : (Re[Je] - Me[Je]) / pe,
-             ge = pe > 0 ? (Re[Je] - Fe - Me[Je]) / pe : (oe[Je] + Fe - Ke[Je]) / pe;
- ... (4 more removed lines; see GitHub link above)
+     function EW(WW) {
+       let {
+         href: iW,
+         children: OW
+       } = WW;
+       return (0, mW.jsxs)("a", {
+         className: "WorldCodeAiExternalLink",
+         href: iW,
+         target: "_blank",
+         rel: "noreferrer noopener",
+         children: [OW, " ", (0, mW.jsx)("span", {
+           "aria-hidden": "true",
+           children: "\u2197"
+         })]
+       })
```

#### 5. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L53-L56` → after: `L45-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L45-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L45-L54) · [Before (L53-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L53-L56)

```diff
-     var Ze = 1 / 0,
-       we = -1,
-       De = !1,
-       Pe = pe;
+   },
+   53655: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       WorldCodeAiPanel: () => ux,
+       default: () => ox
+     });
+     var mW = OW(62),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(1283);
```

#### 6. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L58-L75` → after: `L56-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L56-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L56-L108) · [Before (L58-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L58-L75)

```diff
-     function Ae(ee, ie, He, Je) {
-       var Re = Math.sqrt(ee[0] * ee[0] + ee[1] * ee[1] + ee[2] * ee[2]);
-       if (0 === Re) return Re;
-       for (var ke = 0; ke < 3; ke++) {
-         var qe = ee[ke] >= 0,
-           fe = qe ? 1 : -1;
-         Ke[ke] = fe;
-         var Te = qe ? He[ke] : ie[ke],
-           pe = qe ? ie[ke] : He[ke];
-         ye[ke] = pe;
-         var Xe = Math.floor(Te - fe * Je);
-         be[ke] = Xe, Me[ke] = Math.floor(pe + fe * Je);
-         var ze = ee[ke] / Re;
-         oe[ke] = ze;
-         var Be = Math.abs(1 / ze);
-         Ue[ke] = Be;
- ... (2 more removed lines; see GitHub link above)
+     function LW(WW) {
+       let {
+         title: iW,
+         children: OW,
+         isCalm: EW = !1,
+         isElsewhere: LW = !1,
+         defaultOpen: cW = !1,
+         isOpen: wW,
+         onToggle: tW,
+         className: ZW
+       } = WW;
+       const [xW, lW] = (0, mW.useState)(cW), AW = null !== wW && void 0 !== wW ? wW : xW;
+       return (0, PW.jsxs)("div", {
+         className: NW()("WorldCodeAiLog", EW && "WorldCodeAiLog-calm", LW && "WorldCodeAiLog-elsewhere", AW && "WorldCodeAiLog-open", ZW),
+         children: [(0, PW.jsxs)("button", {
+           className: "WorldCodeAiLogToggle",
+ ... (37 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L77` → after: `L110-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L110-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L110-L112) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L77)

```diff
-       return Re
+       if ("https:" !== OW.protocol && "http:" !== OW.protocol || OW.host !== sW && OW.host !== `www.${sW}`) return null;
+       const mW = OW.pathname.toLowerCase();
+       return KW(mW) || null !== (0, UW.I)(mW) ? mW : (0, UW.G)(mW)
```

#### 8. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L80-L88` → after: `L115-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L115-L116) · [Before (L80-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L80-L88)

```diff
-     function Ye(ee, ie, He, ye, be, Me, Ke) {
-       var Ue = function(ee, ie, He, ye, be, Me, Ke, Ue) {
-         for (var Fe = 1 / 0, Je = -1, oe = 0; oe < ee.length; oe += 6) {
-           var Re = te(ee, oe, ie, He, ye, be, Me, Ke, Ue);
-           Re >= 0 && (Re < Fe || Re === Fe && Be[0] < Je) && (Fe = Re, Je = Be[0])
-         }
-         return Be[0] = Je, Je < 0 ? -1 : Fe
-       }(ee, ie, He, ye, be, Me, Ke, Pe);
-       Ue >= 0 && Ue < Ze && (Ze = Ue, we = Be[0], De = !0)
+     function KW(WW) {
+       return WW === UW.k || WW === UW.s
```

#### 9. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L91-L95` → after: `L119-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L119-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L119-L121) · [Before (L91-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L91-L95)

```diff
-     function Ve(ee, ie, He, ye) {
-       for (var be = 0; be < We; be++)
-         if (Ee[be] === ie && ge[be] === He && Oe[be] === ye) return de[be];
-       var Me = ee(ie, He, ye);
-       return We < 32 && (Ee[We] = ie, ge[We] = He, Oe[We] = ye, de[We] = Me, We++), Me
+     function SW(WW) {
+       const iW = MW(WW);
+       return null === iW ? WW : `${jW.d}${iW}`
```

#### 10. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L98-L104` → after: `L127-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L127-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L127-L136) · [Before (L98-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L98-L104)

```diff
-     function ae(ee, ie, He, ye) {
-       for (var Ue = Ke[0], Fe = Ke[1], Je = Ke[2], oe = be[0] + Ue, Re = be[1] + Fe, ke = be[2] + Je, qe = Me[0]; qe != oe; qe += Ue)
-         for (var fe = Me[1]; fe != Re; fe += Fe)
-           for (var Te = Me[2]; Te != ke; Te += Je) {
-             var pe = Ve(ee, qe, fe, Te);
-             Array.isArray(pe) && Ye(pe, qe, fe, Te, ie, He, ye)
-           }
+     function JW(WW) {
+       const iW = [];
+       let OW = 0;
+       return WW.split("\n").forEach(((WW, mW) => {
+         iW.push({
+           text: WW,
+           from: OW,
+           index: mW
+         }), OW += WW.length + 1
+       })), iW
```

#### 11. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L107-L117` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L139-L140) · [Before (L107-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L107-L117)

```diff
-     function ce(ee, ie, He, ye, Ue, Fe) {
-       for (var Je = Ke[0], oe = 0 === ie ? be[0] : Me[0], Re = be[0] + Je, ke = Ke[1], qe = 1 === ie ? be[1] : Me[1], fe = be[1] + ke, Te = Ke[2], pe = 2 === ie ? be[2] : Me[2], Xe = be[2] + Te, ze = oe; ze != Re; ze += Je)
-         for (var Be = qe; Be != fe; Be += ke)
-           for (var Ee = pe; Ee != Xe; Ee += Te) {
-             var ge = ee(ze, Be, Ee);
-             if (!1 !== ge && null !== ge && void 0 !== ge) {
-               if (!Array.isArray(ge)) return He <= Ze && (Ze = He, we = ie, De = !1), !0;
-               Ye(ge, ze, Be, Ee, ye, Ue, Fe)
-             }
-           }
-       return !1
+     function hW(WW) {
+       return WW.replace(/^\s*\/\/.*$/, "").replace(/\s+/g, "").replace(/['`]/g, '"').replace(/[;,]+$/, "")
```

#### 12. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L121-L154` → after: `L143-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L143-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L143-L155) · [Before (L121-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L121-L154)

```diff
-     function Le(ee, ie, He, Xe, ze, Be) {
-       var Ee = Je,
-         ge = Re,
-         Oe = ke,
-         de = fe;
-       Ce(ie, He), Be || (Be = pe);
-       var te = function(ee, ie, He, Je, Re, ke) {
-         var fe = ye,
-           pe = Me,
-           Xe = Ke,
-           ze = Fe,
-           Be = oe,
-           Ee = 0,
-           ge = 0,
-           Oe = 0,
-           de = 0;
- ... (18 more removed lines; see GitHub link above)
+     function HW(WW, iW, OW) {
+       if (0 === iW.length) return null;
+       let mW = null;
+       for (let EW = 0; EW + iW.length <= WW.length; EW++) {
+         if (iW.every(((iW, mW) => OW(WW[EW + mW].text) === iW))) {
+           if (mW) return {
+             ...mW,
+             isOnly: !1
+           };
+           const OW = WW[EW + iW.length - 1];
+           mW = {
+             from: WW[EW].from,
+             to: OW.from + OW.text.length
```

#### 13. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L169` → after: `L159-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L159-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L159-L162) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L169)

```diff
-       return te
+       return mW ? {
+         ...mW,
+         isOnly: !0
+       } : null
```

#### 14. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L173-L177` → after: `L166-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L166-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L166-L203) · [Before (L173-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L173-L177)

```diff
-       for (var He = Je, ye = Re, be = ke, Me = 0; Me < 3; Me++) He[Me] = +ie[Me], be[Me] = +ee.max[Me], ye[Me] = +ee.base[Me];
-       for (var Ke = 0; Ke < 3; Ke++) {
-         if (!(Number.isFinite(He[Ke]) && Math.abs(He[Ke]) <= xe)) throw ve("dir", He, Ke);
-         if (!(Number.isFinite(ye[Ke]) && Math.abs(ye[Ke]) <= xe)) throw ve("base", ye, Ke);
-         if (!(Number.isFinite(be[Ke]) && Math.abs(be[Ke]) <= xe)) throw ve("max", be, Ke)
+       if ("" === iW.trim()) return null;
+       const OW = JW(WW),
+         mW = function(WW) {
+           return WW.split("\n").map((WW => WW.trim())).filter(((WW, iW, OW) => "" !== WW || iW > 0 && iW < OW.length - 1))
+         }(iW),
+         EW = HW(OW, mW, (WW => WW.trim()));
+       if (null !== EW) return {
+         from: EW.from,
+         to: EW.to,
+         isLoose: !EW.isOnly
+       };
+       const NW = WW => WW.trim().replace(/;+$/, ""),
+         PW = HW(OW, mW.map(NW), NW);
+       if (null !== PW) {
+         const OW = WW.indexOf(iW),
+           mW = -1 !== OW && (OW < PW.from || OW >= PW.to);
+ ... (22 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L181-L182` → after: `L207-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L207-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L207-L233) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L181-L182)

```diff
-     function ve(ee, ie, He) {
-       return new Error("BLOXD VOXEL-SWEEP: non-terminating sweep rejected - " + ee + "[" + He + "]=" + ie[He] + " " + ee + "=[" + ie[0] + "," + ie[1] + "," + ie[2] + "]")
+     function uW(WW) {
+       var iW, OW;
+       return null !== (iW = null === (OW = /^[ \t]*/.exec(WW)) || void 0 === OW ? void 0 : OW[0]) && void 0 !== iW ? iW : ""
+     }
+ 
+     function oW(WW, iW, OW, mW) {
+       if (iW.from > 0 && "\n" !== WW[iW.from - 1]) return mW;
+       const EW = WW.slice(iW.from, iW.to).split("\n").filter((WW => "" !== WW.trim())),
+         NW = OW.split("\n").filter((WW => "" !== WW.trim()));
+       if (0 === EW.length || 0 === NW.length) return mW;
+       const PW = uW(EW[0]),
+         LW = uW(NW[0]);
+       if (PW === LW) return mW;
+       const cW = NW.length > 1 && NW.length === EW.length && NW.slice(1).every(((WW, iW) => uW(WW) === uW(EW[iW + 1]))),
+         wW = mW.split("\n"),
+         tW = wW.findIndex((WW => "" !== WW.trim()));
+ ... (11 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L195` → after: `L237-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L237-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L237-L256) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L195)

```diff
-       return [Math.floor(ee[0] / ie) * ie, Math.floor(ee[1] / ie) * ie, Math.floor(ee[2] / ie) * ie]
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+       const mW = new Map;
+       for (const LW of WW.split("\n")) {
+         const WW = LW.trim(),
+           iW = WW.replace(/;$/, "");
+         "" === iW || WW.endsWith(";") || mW.has(iW) || mW.set(iW, WW)
+       }
+       const EW = iW.split("\n");
+       let NW = !1;
+       const PW = EW.map(((WW, iW) => {
+         var PW, LW, cW;
+         const wW = NW;
+         (null !== (PW = null === (LW = WW.replace(/\\`/g, "").match(/`/g)) || void 0 === LW ? void 0 : LW.length) && void 0 !== PW ? PW : 0) % 2 === 1 && (NW = !NW);
+         const tW = WW.trim(),
+           ZW = mW.get(tW.replace(/;$/, ""));
+         if (void 0 === ZW || ZW === tW || wW || NW) return WW;
+ ... (4 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L199-L200` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L260-L261) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L199-L200)

```diff
-       const ie = (null !== ee && void 0 !== ee ? ee : "").match(/-?\d+(?:\.\d+)?/g);
-       return ie && ie.length >= 3 ? [Number(ie[0]), Number(ie[1]), Number(ie[2])] : null
+       var iW;
+       return null !== (iW = WW.split("\n").find((WW => "" !== WW.trim()))) && void 0 !== iW ? iW : ""
```

#### 18. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L204` → after: `L265-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L265-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L265-L276) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L204)

```diff
-       return ee === ie ? String(ee) : `${ee}-${ie}`
+       const OW = new Map;
+       for (const PW of WW) {
+         var mW;
+         OW.set(PW, (null !== (mW = OW.get(PW)) && void 0 !== mW ? mW : 0) + 1)
+       }
+       let EW = 0;
+       for (const PW of iW) {
+         var NW;
+         const WW = null !== (NW = OW.get(PW)) && void 0 !== NW ? NW : 0;
+         WW > 0 && (OW.set(PW, WW - 1), EW++)
+       }
+       return EW
```

#### 19. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L207-L230` → after: `L279-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L279-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L279-L284) · [Before (L207-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L207-L230)

```diff
-     function Ue(ee, ie, He, ye) {
-       const be = [];
-       let Me = new Map;
-       for (let Ke = ee[2]; Ke < ee[2] + ie; Ke++) {
-         const Ue = new Map;
-         let Fe = ee[0];
-         for (; Fe < ee[0] + ie;) {
-           const be = ye(Fe, He, Ke);
-           let Je = Fe;
-           for (; Je + 1 < ee[0] + ie && ye(Je + 1, He, Ke) === be;) Je++;
-           if (null !== be) {
-             const ee = `${Fe} ${Je} ${be}`,
-               ie = Me.get(ee);
-             ie ? (ie.z1 = Ke, Me.delete(ee), Ue.set(ee, ie)) : Ue.set(ee, {
-               x0: Fe,
-               x1: Je,
- ... (8 more removed lines; see GitHub link above)
+     function gW(WW) {
+       return {
+         text: WW,
+         pieces: Array.from({
+           length: WW.length - 1
+         }, ((iW, OW) => WW.slice(OW, OW + 2)))
```

#### 20. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L235-L248` → after: `L288-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L288-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L288-L301) · [Before (L235-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L235-L248)

```diff
-     function Fe(ee, ie, He, be) {
-       let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ye;
-       const Fe = [ee[0] + ie - 1, ee[1] + ie - 1, ee[2] + ie - 1],
-         Je = null !== be && be.every(((ie, He) => Math.floor(ie) >= ee[He] && Math.floor(ie) <= Fe[He])),
-         oe = [`The chunk from ${ee.join(" ")} to ${Fe.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
-       null !== be && oe.push(`The player's feet are at ${be.map(Math.floor).join(" ")}, ${Je?"in this chunk":"outside this chunk"}.`);
-       const Re = [];
-       for (let ye = ee[1]; ye <= Fe[1]; ye++) {
-         const be = Ue(ee, ie, ye, He).join("; "),
-           Me = Re[Re.length - 1];
-         (null === Me || void 0 === Me ? void 0 : Me.boxes) === be ? Me.to = ye : Re.push({
-           from: ye,
-           to: ye,
-           boxes: be
+     function DW(WW, iW) {
+       const OW = iW.split("\n").map(hW).filter(Boolean),
+         mW = JW(WW).filter((WW => "" !== hW(WW.text)));
+       if (0 === OW.length || 0 === mW.length) return null;
+       const EW = Math.min(OW.length, mW.length),
+         NW = OW.map(gW),
+         PW = mW.map((WW => gW(hW(WW.text))));
+       let LW = null;
+       for (let ZW = 0; ZW + EW <= mW.length; ZW++) {
+         let WW = 0;
+         for (let iW = 0; iW < EW; iW++) WW += (cW = PW[ZW + iW], wW = NW[iW], cW.text === wW.text ? 1 : 0 === cW.pieces.length || 0 === wW.pieces.length ? 0 : 2 * vW(cW.pieces, wW.pieces) / (cW.pieces.length + wW.pieces.length));
+         WW /= OW.length, (null === LW || WW > LW.score) && (LW = {
+           start: ZW,
+           score: WW
```

#### 21. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L251-L260` → after: `L304-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L304-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L304-L310) · [Before (L251-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L251-L260)

```diff
-       const ke = Re.filter((ee => "" !== ee.boxes));
-       0 === ke.length && oe.push("It is all air.");
-       let qe = oe.join("\n").length;
-       for (const ye of ke) {
-         const ee = `y${Ke(ye.from,ye.to)}: ${ye.boxes}`;
-         if (qe += ee.length + 1, qe > Me) {
-           oe.push(`Cut short: the layers from y${ye.from} up aren't shown, as there are too many blocks.`);
-           break
-         }
-         oe.push(ee)
+       var cW, wW;
+       if (null === LW || LW.score < .5) return null;
+       const tW = mW.slice(LW.start, LW.start + EW);
+       return {
+         line: tW[0].index + 1,
+         lastLine: tW[tW.length - 1].index + 1,
+         text: tW.map((WW => WW.text.trim())).join("\n")
```

#### 22. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L293-L296` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L315) · [Before (L293-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L293-L296)

```diff
-       const [ie, He] = (0, Me.useState)((() => (0, ke.n)(ee)));
-       return (0, Me.useEffect)((() => (He((0, ke.n)(ee)), (0, ke.N)((() => {
-         He((0, ke.n)(ee))
-       })))), [ee]), ie
+       return TW().isFunctionExpression(WW) || TW().isArrowFunction(WW)
```

#### 23. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L299-L300` → after: `L318-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L318-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L318-L331) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L299-L300)

```diff
-     function Te(ee, ie) {
-       "function" === typeof ee ? ee(ie) : ee && (ee.current = ie)
+     function pW(WW) {
+       return TW().isExpressionStatement(WW) && TW().isBinaryExpression(WW.expression) && TW().isPropertyAccessExpression(WW.expression.left) && ! function(WW) {
+         return TW().isIdentifier(WW) && ("globalThis" === WW.text || "window" === WW.text || "self" === WW.text)
+       }(WW.expression.left.expression)
+     }
+ 
+     function fW(WW, iW, OW) {
+       let mW = OW;
+       for (const NW of (null !== (EW = TW().getLeadingCommentRanges(WW, iW.getFullStart())) && void 0 !== EW ? EW : []).reverse()) {
+         var EW;
+         if (/\n[^\S\n]*\n/.test(WW.slice(NW.end, mW))) break;
+         mW = NW.pos
+       }
+       return mW
```

#### 24. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L304-L307` → after: `L335-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L335-L337) · [Before (L304-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L304-L307)

```diff
-       let {
-         tutorial: ie,
-         step: He,
-         enabled: ye = !0
+       var iW;
+       const {
+         parseDiagnostics: OW
```

#### 25. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L309-L310` → after: `L339-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L339-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L339-L394) · [Before (L309-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L309-L310)

```diff
-       const be = fe(ie);
-       return ye && be === He
+       return (null !== (iW = null === OW || void 0 === OW ? void 0 : OW.length) && void 0 !== iW ? iW : 0) > 0
+     }
+ 
+     function XW(WW) {
+       const iW = TW().createSourceFile("worldCode.js", WW, TW().ScriptTarget.Latest, !1, TW().ScriptKind.JS),
+         OW = [],
+         mW = (EW, NW) => {
+           const PW = function(WW) {
+             var iW, OW;
+             if (TW().isFunctionDeclaration(WW)) return null !== (iW = null === (OW = WW.name) || void 0 === OW ? void 0 : OW.text) && void 0 !== iW ? iW : null;
+             if (TW().isVariableStatement(WW) && 1 === WW.declarationList.declarations.length) {
+               const iW = WW.declarationList.declarations[0];
+               return TW().isIdentifier(iW.name) && iW.initializer && VW(iW.initializer) ? iW.name.text : null
+             }
+             if (TW().isExpressionStatement(WW) && TW().isBinaryExpression(WW.expression) && WW.expression.operatorToken.kind === TW().SyntaxKind.EqualsToken && VW(WW.expression.right)) {
+               const iW = WW.expression.left;
+ ... (40 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L314-L316` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L398) · [Before (L314-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L314-L316)

```diff
-       const He = (0, ke.q)(ee),
-         ye = He.indexOf(ie);
-       return !He.slice(ye + 1).some((ie => (0, ke.A)(ee, ie)))
+       return "" === WW.trim() ? `${iW.trim()}\n` : `${WW.replace(/\s*$/,"")}\n\n${iW.trim()}\n`
```

#### 27. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L319` → after: `L401-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L401-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L401-L420) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L319)

```diff
-     function ze(ee, ie, He, ye) {
+     function IW(WW, iW, OW) {
+       const mW = XW(WW),
+         EW = BW(OW),
+         NW = rW(mW.functions, iW, EW);
+       return NW ? zW(WW, mW, NW, EW, OW) : GW(WW, OW)
+     }
+ 
+     function aW(WW, iW, OW) {
+       return void 0 !== rW(BW(WW), iW, BW(OW))
+     }
+ 
+     function rW(WW, iW, OW) {
+       var mW, EW;
+       const NW = null !== (mW = OW.find((WW => WW.topLevel && !WW.isProperty))) && void 0 !== mW ? mW : OW.find((WW => WW.topLevel)),
+         PW = qW(iW),
+         LW = NW ? RW(WW, NW.name) : void 0;
+ ... (4 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L321-L324` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L422-L423) · [Before (L321-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L321-L324)

```diff
-         tutorial: be,
-         step: Me,
-         waitForClick: Ke = !1,
-         onPrevious: Ue
+         functions: NW,
+         hasErrors: PW
```

#### 29. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L326-L334` → after: `L425-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L425-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L425-L465) · [Before (L326-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L326-L334)

```diff
-       const Fe = ie && (0, ke.y)(be, Me),
-         Je = ie && !Xe(be, Me),
-         Re = Ke ? ye : He;
-       let qe = null;
-       Fe ? qe = () => {
-         null === Ue || void 0 === Ue || Ue(), (0, ke.u)(be, Me)
-       } : Je && (qe = () => {
-         (0, ke.l)(be)
-       }), (0, oe.t)("popup", null !== Re && void 0 !== Re ? Re : He, qe, ie && null !== Re, null, Fe ? void 0 : "controller:menusSkipTutorial")
+       const LW = NW.some((WW => WW.from > OW.from && WW.to <= OW.to && !mW.some((iW => iW.name === WW.name))));
+       if (PW && LW) return null;
+       const cW = /^\s*(?:\/\/|\/\*)/.test(EW) ? OW.commentFrom : OW.from;
+       return WW.slice(0, cW) + dW(WW.slice(cW, OW.to), EW.trim(), eW(WW.slice(OW.to))) + WW.slice(OW.to)
+     }
+ 
+     function FW(WW, iW, OW, mW, EW) {
+       const NW = mW.trim();
+       if (NW.includes("\n") || !NW.endsWith("{")) return null;
+       const PW = XW(WW),
+         LW = PW.functions.find((mW => mW.topLevel && QW(WW, mW.from) <= iW && OW < mW.to && !WW.slice(mW.from, OW).includes("\n"))),
+         cW = XW(EW),
+         wW = cW.functions.filter((WW => WW.topLevel)),
+         tW = !cW.hasErrors && (1 === wW.length || wW.some((WW => WW.name === (null === LW || void 0 === LW ? void 0 : LW.name)))),
+         ZW = 1 === wW.length && wW[0].name !== (null === LW || void 0 === LW ? void 0 : LW.name) ? wW[0].name : void 0,
+         xW = void 0 === ZW ? void 0 : PW.functions.find((WW => WW.topLevel && WW.name === ZW));
+ ... (25 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L338-L375` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L469) · [Before (L338-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L338-L375)

```diff
-       let {
-         tutorial: ie,
-         step: He,
-         text: ye,
-         waitForClick: be = !1,
-         onPrevious: Me
-       } = ee;
-       const {
-         t: Ke
-       } = (0, Re.v)(), Ue = Xe(ie, He);
-       return (0, qe.jsxs)(qe.Fragment, {
-         children: [(0, qe.jsx)("div", {
-           className: "TutorialStepText",
-           children: ye
-         }), (0, qe.jsxs)("div", {
-           className: "TutorialStepButtons",
- ... (22 more removed lines; see GitHub link above)
+       return [...new Set(BW(WW).filter((WW => WW.topLevel)).map((WW => WW.name)))]
```

#### 31. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L377` → after: `L471-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L471-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L471-L472) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L377)

```diff
-     const Ee = 6;
+     const Oi = 120,
+       mi = /\b(?:my|his|her|their)\s+(?:real\s+|full\s+|first\s+|last\s+)?(?:name|age|school|address|email|phone|birthday)\b|\b(?:i am|i'm)\s+\d+\b|\b\d+\s+years?\s+old\b|\be-?mail\b|\bphone number\b|\bpassword\b|\bwhere (?:i|we) live\b/i;
```

#### 32. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L380-L422` → after: `L475-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L475-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L475-L481) · [Before (L380-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L380-L422)

```diff
-       let {
-         rect: ie,
-         margin: He
-       } = ee;
-       const ye = Math.max(0, ie.top - He),
-         be = ie.bottom + He,
-         Me = Math.max(0, ie.left - He),
-         Ke = ie.right + He;
-       return (0, qe.jsxs)(qe.Fragment, {
-         children: [(0, qe.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
-             top: 0,
-             left: 0,
-             right: 0,
-             height: ye
- ... (27 more removed lines; see GitHub link above)
+       let iW = WW.replace(/\s+/g, " ").trim();
+       if ("" === iW || mi.test(iW)) return null;
+       if (iW.length > Oi) {
+         const WW = iW.slice(0, Oi);
+         iW = `${WW.slice(0,Math.max(WW.lastIndexOf(" "),60)).trimEnd()}\u2026`
+       }
+       return iW.charAt(0).toUpperCase() + iW.slice(1)
```

#### 33. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L426-L463` → after: `L486-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L486-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L486-L501) · [Before (L426-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L426-L463)

```diff
-       let {
-         target: ie,
-         placement: He,
-         boxRef: ye,
-         className: Fe,
-         spotlight: oe = !0,
-         spotlightMargin: Re = Ee,
-         children: ke
-       } = ee;
-       const {
-         getArrowProps: fe,
-         getTooltipProps: Te,
-         setTooltipRef: pe,
-         setTriggerRef: Xe,
-         update: ze
-       } = (0, Ue.c)({
- ... (22 more removed lines; see GitHub link above)
+       var iW, OW;
+       const mW = null === (iW = /\(([^)]*)\)/.exec(WW)) || void 0 === iW || null === (OW = iW[1].split(",")[1]) || void 0 === OW ? void 0 : OW.trim();
+       return mW && /^[A-Za-z_$][\w$]*$/.test(mW) ? [...WW.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)].flatMap((WW => WW[2].split(",").some((WW => WW.trim() === mW)) ? [WW[1]] : [])) : []
+     }
+ 
+     function Li(WW, iW) {
+       const OW = new Set,
+         mW = new Set,
+         EW = new Set,
+         NW = Object.values(WW).map((WW => {
+           const iW = BW(WW),
+             OW = iW.filter((WW => "playerCommand" === WW.name)).map((iW => WW.slice(iW.from, iW.to)));
+           return {
+             text: WW,
+             found: iW,
+             own: OW
```

#### 34. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L465-L475` → after: `L503-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L503-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L503-L513) · [Before (L465-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L465-L475)

```diff
-         }), [ee, ie]), He
-       }(ie, oe);
-       (0, Me.useEffect)((() => {
-         null === ze || void 0 === ze || ze()
-       }), [Be, ze]), (0, Me.useEffect)((() => {
-         if (oe || !ie || !ze) return;
-         const ee = new ResizeObserver((() => {
-           ze()
-         }));
-         return ee.observe(ie), ie.parentElement && ee.observe(ie.parentElement), () => {
-           ee.disconnect()
+         })),
+         PW = new Set(NW.flatMap((WW => {
+           let {
+             own: iW
+           } = WW;
+           return iW.flatMap(Pi)
+         })));
+       for (const {
+           text: cW,
+           found: wW,
+           own: tW
```

#### 35. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L477-L501` → after: `L515-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L515-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L515-L527) · [Before (L477-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L477-L501)

```diff
-       }), [ie, oe, ze]), (0, Me.useEffect)((() => {
-         oe && (null === ie || void 0 === ie || ie.scrollIntoView({
-           block: "nearest",
-           inline: "nearest"
-         }))
-       }), [ie, oe]);
-       const Oe = (0, Me.useCallback)((ee => {
-         pe(ee), ye && (ye.current = ee)
-       }), [pe, ye]);
-       return (0, Ke.createPortal)((0, qe.jsxs)(qe.Fragment, {
-         children: [Be && (0, qe.jsx)(ge, {
-           rect: Be,
-           margin: Re
-         }), (0, qe.jsxs)("div", {
-           ref: Oe,
-           ...Te({
- ... (9 more removed lines; see GitHub link above)
+         of NW) {
+         for (const EW of ii(cW)) iW.has(EW) ? OW.add(EW) : mW.add(EW);
+         const WW = [...tW, ...wW.filter((WW => "playerCommand" !== WW.name && PW.has(WW.name))).map((WW => cW.slice(WW.from, WW.to)))],
+           NW = WW.length > 0 || !/\bplayerCommand\b/.test(cW) ? WW : [cW];
+         for (const iW of NW)
+           for (const WW of iW.matchAll(Ni)) EW.add(`/${WW[1].split(/\s/)[0]}`)
+       }
+       const LW = WW => [...WW].slice(0, 12);
+       return {
+         callbacks: LW(OW),
+         commands: LW(EW),
+         functions: LW(mW)
+       }
```

#### 36. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L503-L528` → after: `L529-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L529-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L529-L558) · [Before (L503-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L503-L528)

```diff
-     const de = (0, Me.forwardRef)((function(ee, ie) {
-       let {
-         placement: He = "right",
-         children: ye,
-         ...be
-       } = ee;
-       const Ke = pe(be),
-         Ue = (0, Me.useRef)(null),
-         Fe = (0, Me.useRef)(null);
-       ze(be, Ke, Ue, Fe);
-       const [Je, oe] = (0, Me.useState)(null), Re = ye.ref, ke = (0, Me.useCallback)((ee => {
-         Fe.current = ee, oe(ee), Te(ie, ee), Te(Re, ee)
-       }), [ie, Re]);
-       return (0, qe.jsxs)(qe.Fragment, {
-         children: [(0, Me.cloneElement)(ye, {
-           ref: ke
- ... (10 more removed lines; see GitHub link above)
+     const ci = new Map([
+       ["onPlayerJoin", "When a player joins"],
+       ["onPlayerLeave", "When a player leaves"],
+       ["onPlayerChat", "When a player chats"],
+       ["playerCommand", "When a player types a /command"],
+       ["tick", "Runs all the time"],
+       ["onPlayerJump", "When a player jumps"],
+       ["onPlayerClick", "When a player clicks"],
+       ["onPlayerAttack", "When a player attacks"],
+       ["onPlayerChangeBlock", "When a player changes a block"],
+       ["onPlayerAttemptChangeBlock", "Before a player changes a block"],
+       ["onPlayerDamagingOtherPlayer", "When a player hits another player"],
+       ["onPlayerKilledOtherPlayer", "When a player defeats another player"],
+       ["onPlayerDamagingMob", "When a player hits a mob"],
+       ["onPlayerKilledMob", "When a player defeats a mob"],
+       ["onMobDamagingPlayer", "When a mob hits a player"],
+ ... (14 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L531-L542` → after: `L561-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L561-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L561-L563) · [Before (L531-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L531-L542)

```diff
-       const ie = pe(ee),
-         He = (0, Me.useRef)(null);
-       return ze(ee, ie, He, null), ie ? (0, Ke.createPortal)((0, qe.jsx)("div", {
-         className: "TutorialCentreBackdrop",
-         children: (0, qe.jsx)("div", {
-           ref: He,
-           className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
-           children: (0, qe.jsx)(Be, {
-             ...ee
-           })
-         })
-       }), (0, Je.k)()) : null
+       const iW = ci.get(WW);
+       if (iW) return iW;
+       return `When: ${WW.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
```

#### 38. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L544-L545` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L565) · [Before (L544-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L544-L545)

```diff
-   },
-   39973: (ee, ie, He) => {
+ 
```

#### 39. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L547` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L567) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L547)

```diff
-       return void 0 === ee ? void 0 : [ee[0], ee[1], ee[2]]
+       return Array.isArray(WW) && WW.every((WW => "string" === typeof WW))
```

#### 40. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L551-L570` → after: `L573-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L573-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L573-L577) · [Before (L551-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L551-L570)

```diff
-       const ie = ee.particles;
-       return {
-         opts: {
-           texture: ie.texture,
-           bk: ie.bk,
-           minLifeTime: ie.minLifeTime,
-           maxLifeTime: ie.maxLifeTime,
-           minSize: ie.minSize,
-           maxSize: ie.maxSize,
-           minEmitPower: ie.minEmitPower,
-           maxEmitPower: ie.maxEmitPower,
-           emitRate: ie.emitRate,
-           gravity: ye(ie.gravity),
-           dir1: ye(ie.dir1),
-           dir2: ye(ie.dir2),
-           colorGradients: ie.colorGradients,
- ... (4 more removed lines; see GitHub link above)
+       var iW, OW;
+       const mW = WW.trim().split(/\s+/).length,
+         EW = new Set((null !== (iW = WW.match(Zi)) && void 0 !== iW ? iW : []).map((WW => WW.toLowerCase().replace(/s$/, "")))).size,
+         NW = (null !== (OW = WW.match(xi)) && void 0 !== OW ? OW : []).length;
+       return EW >= 2 && NW >= 2 || mW >= 30 && NW >= 3
```

#### 41. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L591-L592` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L581-L582) · [Before (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L591-L592)

```diff
-       var ie;
-       return null !== (ie = (0, ye.b)(Ke, ee)) && void 0 !== ie ? ie : null
+       const iW = WW.split(/\n|\|/).map((WW => WW.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((WW => "" !== WW)).slice(0, 5).map((WW => WW.length > 90 ? `${WW.slice(0,89).trimEnd()}\u2026` : WW));
+       return iW.length >= 2 ? iW : []
```

#### 42. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L596-L597` → after: `L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L587) · [Before (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L596-L597)

```diff
-       var ie;
-       return null !== (ie = (0, ye.b)(Ue, ee)) && void 0 !== ie ? ie : null
+       return WW.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
```

#### 43. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L599-L645` → after: `L589-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L589-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L589-L601) · [Before (L599-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L599-L645)

```diff
-   },
-   39980: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => ye,
-       f: () => be,
-       j: () => Me
-     });
-     class ye {
-       constructor() {
-         this.pose = {
-           pos: [0, 0, 0],
-           yaw: 0,
-           mode: "flying",
-           seated: !1,
-           clip: void 0
-         }, this.Op = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
- ... (31 more removed lines; see GitHub link above)
+ 
+     function Ui(WW) {
+       const iW = new Set;
+       for (const OW of WW.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm)) iW.add(OW[1]);
+       for (const OW of WW.matchAll(/^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)/gm)) iW.add(OW[1]);
+       return [...iW]
+     }
+ 
+     function ki(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+       const mW = new Set(iW),
+         EW = new Map;
+       for (const ZW of iW) {
```

#### 44. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L647` → after: `L603-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L603-L604) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L647)

```diff
-         return this.started ? Fe.yaw += ((Xe = pe - Fe.yaw) - 2 * Math.PI * Math.round(Xe / (2 * Math.PI))) * Math.min(8 * Ue, 1) : Fe.yaw = pe, this.started = !0, Fe.seated = "perched" === Re && this.perchLocked, Fe.clip = null === (ie = Ke.clips) || void 0 === ie ? void 0 : ie[ … [truncated]
+         const WW = ji(ZW);
+         EW.set(WW, [...null !== (NW = EW.get(WW)) && void 0 !== NW ? NW : [], ZW])
```

#### 45. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L649-L650` → after: `L606-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L606-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L606-L617) · [Before (L649-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L649-L650)

```diff
-       reset() {
-         this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
+       const PW = Ui(WW),
+         LW = new Set(Ui(OW)),
+         cW = [];
+       let wW = WW;
+       for (const ZW of PW) {
+         var tW;
+         if (mW.has(ZW) || LW.has(ZW) || !/^(on|player)[A-Z]/.test(ZW)) continue;
+         const WW = null !== (tW = EW.get(ji(ZW))) && void 0 !== tW ? tW : [];
+         1 !== WW.length || PW.includes(WW[0]) || (wW = (0, bi.q)(wW, new RegExp(`${ZW}(?![\\w$])`, "g"), bi.k, (() => WW[0])), cW.push({
+           from: ZW,
+           to: WW[0]
+         }))
```

#### 46. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L652-L653` → after: `L619-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L619-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L619-L621) · [Before (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L652-L653)

```diff
-       gH(ee) {
-         return "perched" === ee ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
+       return {
+         code: wW,
+         renames: cW
```

#### 47. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L656-L678` → after: `L624-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L624-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L624-L1101) · [Before (L656-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L656-L678)

```diff
- 
-     function be(ee, ie) {
-       return ee.bobAmplitude * Math.sin(2 * Math.PI * ee.bobHz * ie)
-     }
- 
-     function Me(ee, ie, He, ye, be) {
-       const [Me, Ke, Ue] = He;
-       ee[0] = ie[0] + Me * be + Ue * ye, ee[1] = ie[1] + Ke, ee[2] = ie[2] - Me * ye + Ue * be
-     }
-   },
-   40101: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Pe
-     });
-     var ye = He(1790),
-       be = He(1340),
- ... (7 more removed lines; see GitHub link above)
+     const si = {
+         functions: "api",
+         callbacks: "callback",
+         "client options": "clientOption"
+       },
+       Mi = Object.keys(si).map((WW => `"${WW}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
+       Ki = {
+         type: "string",
+         description: "A few plain words for the creator on what this change does, under 80 characters"
+       },
+       Si = {
+         readOnlyHint: !0,
+         destructiveHint: !1,
+         idempotentHint: !0,
+         openWorldHint: !1
+       },
+ ... (462 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L681` → after: `L1104-L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1104-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1104-L1105) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L681)

```diff
-       return "webm" === ee ? oe : Re
+       var iW;
+       return !0 === (null === (iW = Ti(WW)._meta) || void 0 === iW ? void 0 : iW.isLookup)
```

#### 49. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L685-L687` → after: `L1109-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1109-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1109-L1111) · [Before (L685-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L685-L687)

```diff
-       for (const ie of ee)
-         if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(ie)) return ie;
-       return null
+       const iW = Yi.find((iW => iW.name === WW));
+       if (!iW) throw new Error(`No AI Helper tool ${WW}`);
+       return iW
```

#### 50. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L691` → after: `L1119-L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1119-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1119-L1120) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L691)

```diff
-       return null !== qe(ke(ee))
+       const iW = WW.trim();
+       return ni.some((WW => WW.test(iW)))
```

#### 51. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L704-L705` → after: `L1123-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1123-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1123-L1136) · [Before (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L704-L705)

```diff
-     function Xe() {
-       return fe("webm") ? "webm" : fe("mp4") ? "mp4" : "webm"
+     function di(WW, iW) {
+       const OW = WW.replace(Hi, "");
+       return iW ? function(WW) {
+         const iW = WW.indexOf("```"),
+           OW = -1 === iW ? WW : WW.slice(0, iW);
+         let mW = -1,
+           EW = -1,
+           NW = 0;
+         for (const PW of OW.matchAll(ui)) {
+           const WW = PW.index + PW[0].length;
+           oi(OW.slice(NW, WW)) && (mW = -1 === mW ? NW : mW, EW = WW), NW = WW
+         }
+         return -1 === EW ? WW : "" !== OW.slice(EW).trim() ? WW.slice(EW).trimStart() : `${WW.slice(0,mW).trimEnd()}\n${WW.slice(OW.length)}`.trim()
+       }(OW) : "" !== OW.trim() ? OW : WW
```

#### 52. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L709-L739` → after: `L1142-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1142-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1142-L1145) · [Before (L709-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L709-L739)

```diff
-       let {
-         cards: ie
-       } = ee;
-       return (0, Te.jsx)("div", {
-         className: "ReplayVideoExportOptionCards",
-         children: ie.map((ee => (0, Te.jsxs)("div", {
-           className: "ReplayVideoExportOptionColumn",
-           children: [(0, Te.jsx)("div", {
-             className: Ue()("ReplayVideoExportOptionCard", {
-               Selected: ee.selected,
-               Disabled: ee.disabled
-             }),
-             onClick: () => {
-               ee.disabled || ee.onSelect()
-             },
-             children: (0, Te.jsxs)("div", {
- ... (15 more removed lines; see GitHub link above)
+       const iW = "string" === typeof WW ? WW.split(/[./:]/).pop() : void 0;
+       return function(WW) {
+         return Yi.some((iW => iW.name === WW))
+       }(iW) ? iW : null
```

#### 53. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L741-L844` → after: `L1147-L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1147-L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1147-L1164) · [Before (L741-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L741-L844)

```diff
-     const Be = (0, Me.memo)((function(ee) {
-       let {
-         hasPlaybackMark: ie,
-         canIncludeUi: He,
-         includeUiDisabledReason: ye,
-         selectionRef: be,
-         closePopup: Ke
-       } = ee;
-       const Ue = fe("webm") || fe("mp4"),
-         [oe, Re] = (0, Me.useState)(Xe),
-         [ke, qe] = (0, Me.useState)(He),
-         Be = Ue && fe(oe);
-       if (!Ue) {
-         const ee = (0, Je.isMobile)() ? "screen recording" : "OBS";
-         return (0, Te.jsxs)("div", {
-           className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
- ... (88 more removed lines; see GitHub link above)
+ 
+     function Di(WW, iW) {
+       return OW => {
+         const mW = [];
+         let EW;
+         for (const cW of OW.matchAll(WW)) {
+           var NW;
+           const WW = gi(cW[1]);
+           if (null === WW) continue;
+           const wW = {};
+           for (const OW of cW[2].matchAll(iW)) {
+             var PW, LW;
+             wW[null !== (PW = OW[1]) && void 0 !== PW ? PW : OW[2]] = null !== (LW = OW[3]) && void 0 !== LW ? LW : OW[4]
+           }(null === (NW = EW) || void 0 === NW ? void 0 : NW.call.name) === WW && "" === OW.slice(EW.index + EW.call.source.length, cW.index).trim() ? mW[mW.length - 1] = {
+             call: {
+               name: WW,
+ ... (2 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L846-L850` → after: `L1166-L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1166-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1166-L1171) · [Before (L846-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L846-L850)

```diff
-             children: "Export"
-           }), (0, Te.jsx)(Fe.G, {
-             className: "PromptPopupNotificationBodyButton",
-             onClick: () => {
-               be.options = null, Ke()
+             index: EW.index
+           } : mW.push({
+             call: {
+               name: WW,
+               args: wW,
+               source: cW[0]
```

#### 55. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L852-L894` → after: `L1173-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1173-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1173-L1175) · [Before (L852-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L852-L894)

```diff
-             children: "Cancel"
-           })]
-         })]
-       })
-     }));
-     var Ee = He(5338),
-       ge = He(37825),
-       Oe = He(37828);
-     let de = null;
- 
-     function We() {
-       return function() {
-         const ee = (0, Oe.e)();
-         for (const {
-             group: ie,
-             dataAttr: He
- ... (27 more removed lines; see GitHub link above)
+             index: cW.index
+           }), EW = "" === cW[2].trim() && Ti(WW).inputSchema.required.length > 0 ? mW.at(-1) : void 0
+         }
```

#### 56. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L896` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1177) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L896)

```diff
-       }(): ie().captureStream(Math.max(1, Math.round(He)))
+       }
```

#### 57. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L902` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1181) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L902)

```diff
-       ee.holdInput(!1), (0, Ze.f)(!1)
+       return WW.replace(/\\(["\\nt])/g, ((WW, iW) => "n" === iW ? "\n" : "t" === iW ? "\t" : iW))
```

#### 58. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L904-L1071` → after: `L1183-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1183-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1183-L1189) · [Before (L904-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L904-L1071)

```diff
-     async function Pe(ee) {
-       var ie, He;
-       if ((0, Ze.d)() || we) return;
-       const Me = ee();
-       if (!Me) return;
-       we = !0;
-       let Ke = null;
-       const Ue = Me.playbackMarkInTick,
-         {
-           canIncludeUi: Fe,
-           includeUiDisabledReason: Je
-         } = We();
-       try {
-         Ke = await async function(ee) {
-           let {
-             hasPlaybackMark: ie,
- ... (152 more removed lines; see GitHub link above)
+ 
+     function fi(WW) {
+       let iW = null !== WW && void 0 !== WW ? WW : {};
+       if ("string" === typeof iW) try {
+         iW = JSON.parse("" === iW ? "{}" : iW)
+       } catch {
+         return null
```

#### 59. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1087-L1130` → after: `L1197-L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1197-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1197-L1205) · [Before (L1087-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1087-L1130)

```diff
-     function Je(ee, ie, He, ye, be, Me, Ue) {
-       const {
-         waveform: Fe,
-         pitchHz: Je,
-         attackMs: oe,
-         releaseMs: Re,
-         lowpassHz: ke
-       } = He, qe = be + ye.durationMs / 1e3, fe = Je * 2 ** (ye.semitones / 12), Te = ee.createOscillator();
-       Te.type = Fe, Te.frequency.setValueAtTime(fe, be), Te.frequency.exponentialRampToValueAtTime(fe * 2 ** (ye.glideSemitones / 12), qe);
-       const pe = be + Math.min(oe, ye.durationMs) / 1e3,
-         Xe = ee.createGain();
-       Xe.gain.setValueAtTime(0, be), Xe.gain.linearRampToValueAtTime(Me, pe), Xe.gain.linearRampToValueAtTime(Me * Ke, Math.max(pe, qe - Re / 1e3)), Xe.gain.linearRampToValueAtTime(0, qe);
-       const ze = [Te];
-       if (null !== ke) {
-         const ie = ee.createBiquadFilter();
-         ie.type = "lowpass", ie.frequency.value = ke, ze.push(ie)
- ... (28 more removed lines; see GitHub link above)
+     function Ci(WW, iW) {
+       let OW = 0,
+         mW = !1;
+       for (let EW = iW; EW < WW.length; EW++) {
+         const iW = WW[EW];
+         if (mW) "\\" === iW ? EW++ : '"' === iW && (mW = !1);
+         else if ('"' === iW) mW = !0;
+         else if ("{" === iW) OW++;
+         else if ("}" === iW && (OW--, 0 === OW)) return EW + 1
```

#### 60. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1135-L1143` → after: `L1211-L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1211-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1211-L1217) · [Before (L1135-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1135-L1143)

```diff
-       var He;
-       const Me = ye.Howler.ctx,
-         Ke = ye.Howler.masterGain;
-       if (!Me || !Ke || !be.e.get("soundOnFromAd")) return () => {};
-       const Ue = ye.Howler;
-       return null === (He = Ue._autoResume) || void 0 === He || He.call(Ue), oe(Me, Ke, ee, ie, be.e.get("soundVolume"), (() => {
-         var ee;
-         null === (ee = Ue._autoSuspend) || void 0 === ee || ee.call(Ue)
-       }))
+       let OW = WW;
+       for (const {
+           call: mW,
+           index: EW
+         }
+         of iW) OW = OW.slice(0, EW) + " ".repeat(mW.source.length) + OW.slice(EW + mW.source.length);
+       return OW
```

#### 61. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1145-L1160` → after: `L1219-L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1219-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1219-L1234) · [Before (L1145-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1145-L1160)

```diff
-   },
-   37161: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       LOOK_DEBUG_HEADER: () => oe,
-       endLookDebugTake: () => Xe,
-       noteLookDroppedCopy: () => ze,
-       saveLookCapture: () => Be,
-       startLookDebug: () => pe
-     });
-     var ye = He(5279),
-       be = He(3037),
-       Me = He(1952);
-     const Ke = new Map(Object.entries(ye.l).map((ee => {
-       let [ie, He] = ee;
-       return [He, ie]
-     })));
+     const Bi = new RegExp(`\\b(${Yi.map((WW=>WW.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
+     const qi = {
+         formatCall: (WW, iW) => {
+           const OW = Object.fromEntries(Object.entries(iW).filter((WW => {
+             let [, iW] = WW;
+             return void 0 !== iW
+           })));
+           return `${WW}(${JSON.stringify(OW)})`
+         },
+         declareTools: WW => WW,
+         callStyle: "Make each call with function calling, its code in full: never write a call, or the code it carries, in your answer's words or in a code fence.",
+         fileResult: (WW, iW, OW) => `<file path="${WW}"${OW?' open_in_editor="true"':""}>\n${iW}\n</file>`,
+         editFailure: (WW, iW) => `${WW} failed: ${iW}`,
+         lookupResult: (WW, iW, OW) => `${WW} ${iW}:\n${OW}`
+       },
+       Ri = /(?:<\|start\|>\s*assistant\s*)?<\|channel\|>[^<{]*?\bto=([\w./:-]+)[^{]*?(?=\{)/g;
```

#### 62. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1163` → after: `L1237-L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1237-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1237-L1256) · [Before (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1163)

```diff
-       return (0, Me.B)(ee).toFixed(1)
+       const iW = [];
+       for (const EW of WW.matchAll(Ri)) {
+         const NW = gi(EW[1]),
+           PW = EW.index + EW[0].length,
+           LW = Ci(WW, PW),
+           cW = null === LW ? null : fi(WW.slice(PW, LW));
+         if (null !== NW && null !== LW && null !== cW) {
+           var OW, mW;
+           const PW = null !== (OW = null === (mW = WW.slice(LW).match(/^\s*<\|call\|>/)) || void 0 === mW ? void 0 : mW[0]) && void 0 !== OW ? OW : "";
+           iW.push({
+             call: {
+               name: NW,
+               args: cW,
+               source: WW.slice(EW.index, LW + PW.length)
+             },
+             index: EW.index
+ ... (4 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1166-L1167` → after: `L1259-L1285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1259-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1259-L1285) · [Before (L1166-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1166-L1167)

```diff
-     function Fe(ee, ie) {
-       return `camera set by ${Ke.get(ee[ie+1])}: heading ${`${Ue(ee[ie+2])} -> ${Ue(ee[ie+4])}`} deg, pitch ${`${Ue(ee[ie+3])} -> ${Ue(ee[ie+5])}`} deg, at ${ee[ie].toFixed(1)} ms`
+     function Ii(WW) {
+       var iW, OW, mW, EW;
+       let NW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       if ("object" !== typeof WW || null === WW) return [];
+       const PW = WW;
+       if (Array.isArray(PW.tool_calls)) return PW.tool_calls.flatMap((WW => Ii(WW, !0)));
+       if (void 0 !== PW.tool_call) return Ii(PW.tool_call, !0);
+       if (void 0 !== PW.function) return Ii(PW.function, !0);
+       const LW = null !== (iW = null !== (OW = null !== (mW = null !== (EW = PW.arguments) && void 0 !== EW ? EW : PW.params) && void 0 !== mW ? mW : PW.param) && void 0 !== OW ? OW : PW.args) && void 0 !== iW ? iW : PW.input,
+         cW = gi(PW.tool);
+       if (null !== cW) {
+         const {
+           tool: WW,
+           ...iW
+         } = PW, OW = fi(null !== LW && void 0 !== LW ? LW : iW);
+         return null === OW ? [] : [{
+ ... (11 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1173` → after: `L1289-L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1289-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1289-L1308) · [Before (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1173)

```diff
-       return Number.isFinite(ee) ? String(Math.round(10 * ee) / 10) : String(ee)
+       const iW = [];
+       let OW = WW.indexOf("{");
+       for (; - 1 !== OW;) {
+         const mW = Ci(WW, OW);
+         let EW = [];
+         if (null !== mW) try {
+           EW = Ii(JSON.parse(WW.slice(OW, mW)))
+         } catch {}
+         if (null !== mW && EW.length > 0) {
+           const NW = WW.slice(OW, mW);
+           iW.push(...EW.map((WW => ({
+             call: {
+               ...WW,
+               source: NW
+             },
+             index: OW
+ ... (4 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1177-L1187` → after: `L1312-L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1312-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1312-L1314) · [Before (L1177-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1177-L1187)

```diff
-       return Number.isFinite(ee) ? ee.toFixed(1) : String(ee)
-     }
-     class qe {
-       constructor() {
-         this.frames = 0, this.looked = 0, this.idle = 0, this.hV = 0, this.pastLimit = 0, this.lockSkips = 0, this.dp = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
-       }
-       moved() {
-         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.hV > 0 || this.dropped > 0 || this.cameraSets > 0
-       }
-       hasEvent() {
-         return this.hV > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
+       if (Array.isArray(WW)) return `[${WW.map(ri).join(", ")}]`;
+       if ("object" === typeof WW && null !== WW) {
+         return `{${Object.entries(WW).map((WW=>{let[iW,OW]=WW;return`${JSON.stringify(iW)}: ${ri(OW)}`})).join(", ")}}`
```

#### 66. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1190-L1213` → after: `L1318-L1364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1318-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1318-L1364) · [Before (L1190-L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1190-L1213)

```diff
-     class fe {
-       constructor() {
-         var ee = this;
-         this.topicOn = (0, be.q)("look"), this.remote = (0, be.r)(), this.tally = new qe, this.takes = null, this.started = !1, this.record = function(ie) {
-           let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-           if (Je.p.step(ie, He), !ee.topicOn) return;
-           const ye = ie[He],
-             be = ie[He + 1],
-             Me = ie[He + 2],
-             Ke = ie[He + 3],
-             Ue = ie[He + 4],
-             Fe = ie[He + 5],
-             oe = ie[He + 6],
-             qe = ie[He + 7],
-             fe = ie[He + 8],
-             Te = ie[He + 9],
- ... (8 more removed lines; see GitHub link above)
+     const zi = {
+         formatCall: (WW, iW) => `<tool_call>\n<function=${WW}>\n${Object.entries(iW).flatMap((WW=>{let[iW,OW]=WW;return void 0===OW?[]:[`<parameter=${iW}>\n${OW}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
+         declareTools: (WW, iW, OW) => OW || 0 === iW.length ? WW : `${function(WW){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${WW.map((WW=>`\n${ri({type:"function",function:{name:WW.name,description:WW.description,parameters:WW.inputSchema}})}`)).joi … [truncated]
+         callStyle: "Write each call in your answer as a <tool_call> holding a <function=name> block with a <parameter=name> for each argument, the code inside as it is, not escaped and in full: never as JSON or inside a code fence.",
+         fileResult: (WW, iW, OW) => `<tool_response>\nview_file ${WW}${OW?" (open in the editor)":""}:\n${iW}\n</tool_response>`,
+         editFailure: (WW, iW) => `<tool_response>\nError: ${iW}\n</tool_response>`,
+         lookupResult: (WW, iW, OW) => `<tool_response>\n${WW} ${iW}:\n${OW}\n</tool_response>`
+       },
+       Fi = Di(/(?:<tool_call>\s*)?<function=([\w.:/-]+)>((?:(?!<tool_call\b|<function=)[\s\S])*?(?:<\/parameter>(?=\s*(?:<tool_call\b|<function=|$))|(?=<\/function>|<\/tool_call>)))(?:<\/function>(?:\s*<\/tool_call>)?|<\/tool_call>|\s*(?=<tool_call\b|<function=|$))/g, /<parameter … [truncated]
+       Qi = new Set(["path", "why", "name", "after", "question", "allow_other", "note"]),
+       WO = {
+         formatCall: (WW, iW) => `<tool_call name="${WW}">\n${Object.entries(iW).flatMap((WW=>{let[iW,OW]=WW;return void 0===OW?[]:[`<param name="${iW}">${Qi.has(iW)?OW:`\n${OW}\n`}</param>\n`]})).join("")}</tool_call>`,
+         declareTools: WW => WW,
+         callStyle: "Write each call in your answer as a <tool_call> with a <param> for each argument, the code inside as it is, not escaped and in full: never as JSON, a function call or inside a code fence.",
+         fileResult: (WW, iW, OW) => `<tool_result name="view_file" path="${WW}"${OW?' open_in_editor="true"':""}>\n${iW}\n</tool_result>`,
+         editFailure: (WW, iW) => `<tool_result name="${WW}" is_error="true">\n${iW}\n</tool_result>`,
+ ... (31 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1215-L1280` → after: `L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1366) · [Before (L1215-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1215-L1280)

```diff
-           pe.looked++, Number.isFinite(be) && (pe.dtMin = Math.min(pe.dtMin, be), pe.dtMax = Math.max(pe.dtMax, be), pe.dtSum += be, be > 0 && (pe.peakRate = Math.max(pe.peakRate, Math.hypot(Ue, Fe) / be))), pe.raw[0] += Me, pe.raw[1] += Ke, pe.turned[0] += Ue, pe.turned[1] += Fe … [truncated]
-           const Xe = Math.abs(Me) > Te || Math.abs(Ke) > Te,
-             ze = `raw (${Re(Me)}, ${Re(Ke)}) over ${ke(be)} ms, limit ${Re(Te)}, filter v (${qe.toFixed(3)}, ${fe.toFixed(3)}) px/ms, at ${ke(ye)} ms`;
-           oe === Je.m.hV ? (pe.hV++, ee.outlier(`spike put right: ${ze} -> turned (${Re(Ue)}, ${Re(Fe)})`)) : Xe ? (pe.pastLimit++, ee.outlier(`kept past limit: ${ze}`)) : be > 50 && (pe.longFrames++, ee.remote || ee.outlier(`long frame: ${ze}, turned in full`))
-         }, this.onMouseMove = ee => {
-           const ie = null !== document.pointerLockElement;
-           if (Je.p.mouseMove(ee, ie), !this.topicOn) return;
-           const He = this.tally,
-             {
-               movementX: ye,
-               movementY: be
-             } = ee;
-           He.events++;
-           const Me = Math.max(Math.abs(ye), Math.abs(be));
-           He.eventMax = Math.max(He.eventMax, Me), Me >= 200 && (He.bigEvents++, this.eventOutlier(`big mousemove (${ye}, ${be}) at ${ke(ee.timeStamp)} ms, lock ${ie?"lJ":"free"}`))
-         }, this.onLockChange = () => {
- ... (50 more removed lines; see GitHub link above)
+           return iW
```

#### 68. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1282-L1294` → after: `L1368-L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1368-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1368-L1372) · [Before (L1282-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1282-L1294)

```diff
-       }
-       droppedCopy() {
-         this.counted(Je.c.droppedCopies, 1)
-       }
-       counted(ee, ie) {
-         if (0 === ie) return;
-         if (Je.p.change(ee, ie), !this.topicOn) return;
-         const He = this.tally;
-         ee === Je.c.droppedCopies ? He.dropped += ie : ee === Je.c.stepsLost ? He.lost += ie : He.cameraSetsLost += ie
-       }
-       endTake() {
-         this.takeRecords(), this.takes = null
-       }
+       },
+       EO = ["simple", "qwenXml"];
+ 
+     function NO(WW) {
+       return "deepseek" === WW ? "simple" : WW
```

#### 69. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1296` → after: `L1374-L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1374-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1374-L1403) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1296)

```diff
-     let Te = null;
+     const PO = /<\|[a-z_]+\|>/g,
+       LO = /^[ \t]*`{1,2}[ \t]*$/gm,
+       cO = /^[ \t]*<\/(?:tool_call|invoke|function|param(?:eter)?)>[ \t]*$/gm,
+       wO = /^[ \t]*(?:Wait|Oops|Hmm)\b[^\n]*\b(?:redo|re-do|the format|let me (?:fix|try|rewrite|write) (?:that|it|this))\b[^\n]*$/gim,
+       tO = /```[\w-]*/g,
+       ZO = /^[\s[\],]*$/,
+       xO = {
+         use_prefab: 0,
+         add_world_code: 1,
+         write_file: 2,
+         edit_file: 3,
+         replace_function: 4,
+         insert_code: 5,
+         edit_code_in_place: 6,
+         export_game: 7,
+         switch_to_world_code: 8,
+ ... (14 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1299-L1300` → after: `L1406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1406) · [Before (L1299-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1299-L1300)

```diff
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       return Te ??= new fe, Te.start(ee, ie), Te.record
+       return Ti(WW.name).inputSchema.required.every((iW => void 0 !== WW.args[iW]))
```

#### 71. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1303-L1305` → after: `L1409-L1415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1409-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1409-L1415) · [Before (L1303-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1303-L1305)

```diff
-     function Xe() {
-       var ee;
-       null === (ee = Te) || void 0 === ee || ee.endTake()
+     function AO(WW, iW) {
+       const OW = gi(WW),
+         mW = fi(iW);
+       return null === OW || null === mW ? null : {
+         name: OW,
+         args: mW
+       }
```

#### 72. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1308-L1310` → after: `L1418-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1418-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1418-L1430) · [Before (L1308-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1308-L1310)

```diff
-     function ze() {
-       var ee;
-       null === (ee = Te) || void 0 === ee || ee.droppedCopy()
+     function bO(WW, iW) {
+       const OW = [];
+       for (const mW of function(WW) {
+           const iW = NO(WW),
+             OW = EO.filter((WW => WW !== iW));
+           return [mO[iW], ...WW === iW ? [] : [mO[WW]], ...OW.map((WW => mO[WW])), Gi, ai]
+         }(iW)) OW.push(...mW(Xi(WW, OW)));
+       return OW.map((WW => {
+         let {
+           call: iW
+         } = WW;
+         return iW
+       }))
```

#### 73. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1312-L1322` → after: `L1432-L1434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1432-L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1432-L1434) · [Before (L1312-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1312-L1322)

```diff
-     async function Be(ee) {
-       var ie;
-       null === (ie = Te) || void 0 === ie || ie.takeRecords();
-       const {
-         clientHintsRead: ye,
-         debugDeviceLines: be
-       } = await He.e(34).then((() => He(34738)));
-       await ye, Je.p.save({
-         ...ee,
-         device: be()
-       })
+ 
+     function jO(WW, iW) {
+       return bO(WW, iW).sort(((WW, iW) => xO[WW.name] - xO[iW.name]))
```

#### 74. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1324-L1346` → after: `L1436-L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1436-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1436-L1451) · [Before (L1324-L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1324-L1346)

```diff
-   },
-   40494: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => qe,
-       h: () => Te,
-       j: () => Je,
-       l: () => Re,
-       o: () => ke,
-       q: () => Fe,
-       s: () => Ke,
-       v: () => oe,
-       y: () => pe
-     });
-     var ye = He(2018),
-       be = He(27),
-       Me = He(2022);
- ... (7 more removed lines; see GitHub link above)
+ 
+     function UO(WW) {
+       return function(WW) {
+         const iW = [...WW.matchAll(tO)],
+           OW = [];
+         let mW = 0;
+         for (; mW < iW.length;) {
+           const EW = iW[mW],
+             NW = iW.at(mW + 1);
+           void 0 !== NW && "```" === NW[0] ? (ZO.test(WW.slice(EW.index + EW[0].length, NW.index)) && OW.push({
+             from: EW.index,
+             to: NW.index + NW[0].length
+           }), mW += 2) : (OW.push({
+             from: EW.index,
+             to: EW.index + EW[0].length
+           }), mW++)
```

#### 75. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1348-L1361` → after: `L1453-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1453-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1453-L1461) · [Before (L1348-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1348-L1361)

```diff
-       }), [], (0, Me.h)("_health", "_totalMaxHealth", "_shield", "maxShield")),
-       Ue = [{
-         canFly: !1,
-         flying: !1
-       }, {
-         canFly: !1,
-         flying: !0
-       }, {
-         canFly: !0,
-         flying: !1
-       }, {
-         canFly: !0,
-         flying: !0
-       }];
+         let EW = WW;
+         for (const {
+             from: NW,
+             to: PW
+           }
+           of OW.reverse()) EW = EW.slice(0, NW) + EW.slice(PW);
+         return EW
+       }(WW.replace(PO, "").replace(LO, "").replace(cO, "").replace(wO, ""))
+     }
```

#### 76. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1363-L1364` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1463-L1464) · [Before (L1363-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1363-L1364)

```diff
-     function Fe(ee, ie) {
-       return Ue[(ee ? 2 : 0) + (ie ? 1 : 0)]
+     function kO(WW) {
+       return /^(?:on[A-Z]\w*|tick|playerCommand)$/.test(WW)
```

#### 77. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1366-L1369` → after: `L1466-L1480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1466-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1466-L1480) · [Before (L1366-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1366-L1369)

```diff
-     const Je = (0, Me.i)((function() {
-       var ee;
-       return null !== (ee = ye.c.get("_aura")) && void 0 !== ee ? ee : null
-     }), [], (0, Me.h)("_aura"));
+     const sO = new Set(["tick", "onPlayerJoin", "onPlayerLeave", "onMobDespawned", "onBlockStand", "onBlockStandStart", "onBlockStandStop", "onPlayerJump", "onPlayerSelectInventorySlot", "onEntityCollision", "onChunkLoaded", "onClose"]),
+       MO = {
+         playerCommand: {
+           stopsWhen: WW => `${WW} !== undefined && ${WW} !== false`,
+           passedOn: !1
+         },
+         onPlayerChat: {
+           stopsWhen: WW => `${WW} === false || ${WW} === null`,
+           passedOn: !0
+         },
+         onPlayerDamagingOtherPlayer: {
+           stopsWhen: WW => `${WW} === "preventDamage"`,
+           passedOn: !0
+         }
+       };
```

#### 78. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1373-L1385` → after: `L1489-L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1489-L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1489-L1490) · [Before (L1373-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1373-L1385)

```diff
-         watch: ie => (0, be.j)("shotPlayer", (He => {
-           let {
-             playerId: ye,
-             damage: be,
-             wasCrit: Me,
-             distance: Ke
-           } = He;
-           ee(ye) && ie({
-             damage: be,
-             wasCrit: Me,
-             distance: Ke
-           })
-         }))
+         file: OW,
+         hasErrors: (null !== (iW = null === mW || void 0 === mW ? void 0 : mW.length) && void 0 !== iW ? iW : 0) > 0
```

#### 79. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1390-L1405` → after: `L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1495) · [Before (L1390-L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1390-L1405)

```diff
-       return (0, Me.b)("chat", (ie => {
-         let {
-           serverChatMsgId: He,
-           worldCodeLineId: ye,
-           content: be,
-           chatterEId: Me,
-           chatterObjectsToReplay: Ke
-         } = ie;
-         return {
-           serverChatMsgId: null !== He && void 0 !== He ? He : null,
-           worldCodeLineId: null !== ye && void 0 !== ye ? ye : null,
-           content: be,
-           author: Me ? ee(Me) : null,
-           hiddenFromReplay: !0 === Ke
-         }
-       }))
+       return void 0 !== WW && (TW().isFunctionExpression(WW) || TW().isArrowFunction(WW))
```

#### 80. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1407-L1415` → after: `L1497-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1497-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1497-L1509) · [Before (L1407-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1407-L1415)

```diff
-     const ke = (0, Me.b)("chatRemoved");
-     class qe {
-       constructor() {
-         this.shown = null, this.needed = null, this.neededSince = 0
-       }
-       update(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         const He = this.shown;
-         return ee !== this.needed && (this.needed = ee, this.neededSince = ie, null === ee && (this.shown = null)), this.shown !== this.needed && ie - this.neededSince > 200 && (this.shown = this.needed), this.shown !== He
+ 
+     function YO(WW) {
+       if (TW().isFunctionDeclaration(WW) && WW.name) return {
+         cZ: WW,
+         nameNode: WW.name
+       };
+       if (TW().isVariableStatement(WW) && 1 === WW.declarationList.declarations.length) {
+         const iW = WW.declarationList.declarations[0],
+           OW = iW.initializer && yO(iW.initializer);
+         if (TW().isIdentifier(iW.name) && SO(OW)) return {
+           cZ: OW,
+           nameNode: iW.name
+         }
```

#### 81. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1420-L1422` → after: `L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1520) · [Before (L1420-L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1420-L1422)

```diff
-       return [{
-         translationKey: `touchKeys:${ee}`
-       }]
+       return TW().isParenthesizedExpression(WW) ? yO(WW.expression) : WW
```

#### 82. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1435-L1439` → after: `L1524-L1527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1524-L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1524-L1527) · [Before (L1435-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1435-L1439)

```diff
-       return [{
-         translationKey: "touchKeys:tameWith"
-       }, " ", {
-         icon: ee
-       }]
+       return TW().isExpressionStatement(WW) && TW().isBinaryExpression(WW.expression) && WW.expression.operatorToken.kind === TW().SyntaxKind.EqualsToken && TW().isIdentifier(WW.expression.left) ? {
+         name: WW.expression.left,
+         value: WW.expression.right
+       } : null
```

#### 83. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1508-L1514` → after: `L1530-L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1530-L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1530-L1531) · [Before (L1508-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1508-L1514)

```diff
-     function Fe(ee, ie) {
-       return {
-         item: ee,
-         scale: ie,
-         billboard: arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         thrownRole: !0
-       }
+     function JO(WW) {
+       return TW().isIdentifier(WW) ? [WW.text] : WW.elements.flatMap((WW => TW().isOmittedExpression(WW) ? [] : JO(WW.name)))
```

#### 84. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1566-L1583` → after: `L1535-L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1535-L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1535-L1548) · [Before (L1566-L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1566-L1583)

```diff
-       const ie = new Set,
-         He = ee => {
-           const ye = [],
-             be = new Set;
-           for (const Me of ee) {
-             const ee = Me.hasGeometry && 0 === Me.children.length;
-             if (!ee || !be.has(Me.name)) {
-               if (ie.has(Me.name.toLowerCase())) throw new Error(`Two nodes are named ${Me.name}`);
-               if (ie.add(Me.name.toLowerCase()), ee) be.add(Me.name), ye.push(Me.name);
-               else {
-                 if (Me.hasGeometry) throw new Error(`Mesh ${Me.name} has nodes under it: put them in a group beside it`);
-                 ye.push(0 === Me.children.length ? {
-                   nodeName: Me.name
-                 } : {
-                   nodeName: Me.name,
-                   children: He(Me.children)
- ... (2 more removed lines; see GitHub link above)
+       if (!TW().isVariableStatement(WW)) return null;
+       const iW = WW.declarationList.declarations.find((WW => TW().isIdentifier(WW.name) && "CONFIG" === WW.name.text));
+       return null !== iW && void 0 !== iW && iW.initializer && TW().isObjectLiteralExpression(iW.initializer) ? iW.initializer : null
+     }
+ 
+     function HO(WW, iW) {
+       return iW.statements.map((OW => {
+         var mW;
+         const EW = function(WW, iW, OW) {
+             let mW = OW.getStart(iW);
+             for (const NW of (null !== (EW = TW().getLeadingCommentRanges(WW, OW.getFullStart())) && void 0 !== EW ? EW : []).reverse()) {
+               var EW;
+               if (/\n[^\S\n]*\n/.test(WW.slice(NW.end, mW))) break;
+               mW = NW.pos
```

#### 85. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1586` → after: `L1562-L1578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1562-L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1562-L1578) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1586)

```diff
-           return ye
+         }
+         const PW = TW().isVariableStatement(OW) ? OW.declarationList.declarations.flatMap((WW => JO(WW.name))) : [];
+         if (hO(OW)) {
+           return {
+             kind: "config",
+             names: ["CONFIG", ...PW.filter((WW => "CONFIG" !== WW))],
+             from: EW,
+             to: OW.getEnd(),
+             node: OW
+           }
+         }
+         if (TW().isVariableStatement(OW)) return {
+           kind: "variable",
+           names: PW,
+           from: EW,
+           to: OW.getEnd(),
+ ... (1 more added lines; see GitHub link above)
```

#### 86. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1588` → after: `L1580-L1595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1580-L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1580-L1595) · [Before (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1588)

```diff
-       return He(ee)
+         if (TW().isClassDeclaration(OW) && OW.name) return {
+           kind: "function",
+           names: [OW.name.text],
+           from: EW,
+           to: OW.getEnd(),
+           node: OW
+         };
+         const LW = null === (mW = TO(OW)) || void 0 === mW ? void 0 : mW.name.text;
+         return {
+           kind: "other",
+           names: void 0 !== LW && kO(LW) ? [LW] : [],
+           from: EW,
+           to: OW.getEnd(),
+           node: OW
+         }
+       }))
```

#### 87. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1591-L1614` → after: `L1598-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1598-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1598-L1601) · [Before (L1591-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1591-L1614)

```diff
-     function Ki(ee, ie) {
-       const He = Mi(ee),
-         ye = function(ee, ie) {
-           const He = ee => ee.hasGeometry && 0 === ee.children.length,
-             ye = ee => ee.children.some((ee => He(ee) ? !ie(ee.name) : !ie(ee.name) && ye(ee))),
-             be = (ee, ye) => {
-               const Ke = new Set;
-               return ee.flatMap((ee => He(ee) ? !ye && !ie(ee.name) || Ke.has(ee.name) ? [] : (Ke.add(ee.name), [ee.name]) : ie(ee.name) || ye ? [Me(ee)] : be(ee.children, !1)))
-             },
-             Me = ee => {
-               const ie = be(ee.children, !1);
-               return {
-                 nodeName: ee.name,
-                 ...ye(ee) ? {
-                   collapsesTo: ee.name
-                 } : {},
- ... (8 more removed lines; see GitHub link above)
+     function nO(WW) {
+       if (!TW().isPropertyAssignment(WW) && !TW().isShorthandPropertyAssignment(WW)) return null;
+       const iW = WW.name;
+       return TW().isIdentifier(iW) || TW().isStringLiteral(iW) ? iW.text : null
```

#### 88. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1617-L1621` → after: `L1604-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1604-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1604-L1605) · [Before (L1617-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1617-L1621)

```diff
-     function Ui(ee) {
-       return ee.reduce(((ee, ie) => {
-         var He;
-         return ee + ("string" === typeof ie ? 1 : (void 0 === ie.collapsesTo ? 0 : 1) + Ui(null !== (He = ie.children) && void 0 !== He ? He : []))
-       }), 0)
+     function uO(WW, iW) {
+       return WW.lastIndexOf("\n", iW - 1) + 1
```

#### 89. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1625-L1674` → after: `L1609-L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1609-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1609-L1611) · [Before (L1625-L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1625-L1674)

```diff
-       const He = ee => ee.getChildren(),
-         ye = ee => {
-           if ("Zx" in ee && !0 === ee.Zx) throw new Error(`${ee.name} is drawn as an instance of another mesh`);
-           return "getTotalVertices" in ee && ee.getTotalVertices() > 0
-         },
-         be = ee => {
-           var ie, be;
-           return !ye(ee) || He(ee).length > 0 ? null : `${null!==(ie=null===(be=ee.material)||void 0===be?void 0:be.uniqueId)&&void 0!==ie?ie:"none"} ${ee.getVerticesDataKinds().sort().join(",")}`
-         };
-       ! function(ee, ie, He) {
-         const ye = new Set,
-           be = ee => {
-             for (const He of ee) ye.add(He.name.toLowerCase()), be(ie(He))
-           };
-         be(ee);
-         const Me = new Set,
- ... (34 more removed lines; see GitHub link above)
+       var OW, mW;
+       const EW = WW.slice(uO(WW, iW), iW);
+       return /^\s*$/.test(EW) ? EW : `${null!==(OW=null===(mW=/^\s*/.exec(EW))||void 0===mW?void 0:mW[0])&&void 0!==OW?OW:""}\t`
```

#### 90. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1679-L1778` → after: `L1615-L1627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1615-L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1615-L1627) · [Before (L1679-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1679-L1778)

```diff
-       const ye = Ie.k.itemsClient[ie],
-         be = function(ee) {
-           var ie;
-           const He = (0, Ge.u)(ee);
-           if (null !== He) return Qe.f.enabled && Qe.f.hasAnimation(He) ? {
-             vehicleType: He,
-             moved: Qe.f.bonesMoved(He)
-           } : null;
-           const ye = null === (ie = oe.i[ee]) || void 0 === ie ? void 0 : ie.meshEntityBones;
-           return null !== ye && void 0 !== ye && ye.length ? {
-             vehicleType: null,
-             moved: new Set(ye)
-           } : null
-         }(ie);
-       if (null === be || void 0 === ye) return null;
-       const Me = ee.PR.vx;
- ... (84 more removed lines; see GitHub link above)
+       const mW = WW.slice(uO(WW, iW.getStart(OW)), function(WW, iW) {
+           const OW = WW.indexOf("\n", iW);
+           return -1 === OW ? WW.length : OW
+         }(WW, iW.getEnd())),
+         EW = mW.trim(),
+         NW = /^[\w$"']+\s*:/.test(EW) && "" === WW.slice(uO(WW, iW.getStart(OW)), iW.getStart(OW)).trim() ? mW.replace(/^\s*/, "\t") : `\t${iW.getText(OW)},`;
+       return /,\s*(?:\/\/.*)?$/.test(NW) ? NW : NW.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
+     }
+ 
+     function eO(WW, iW) {
+       let OW = WW;
+       for (const mW of [...iW].sort(((WW, iW) => iW.from - WW.from))) OW = OW.slice(0, mW.from) + mW.text + OW.slice(mW.to);
+       return OW
```

#### 91. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1782-L1785` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1631) · [Before (L1782-L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1782-L1785)

```diff
-       return ee.flatMap((ee => {
-         var ie;
-         return "string" === typeof ee ? [ee] : [ee.nodeName, ...Ri(null !== (ie = ee.children) && void 0 !== ie ? ie : [])]
-       }))
+       return WW.charAt(0).toUpperCase() + WW.slice(1)
```

#### 92. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1788-L1793` → after: `L1634-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1634-L1635) · [Before (L1788-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1788-L1793)

```diff
-     function ki(ee, ie, He) {
-       ie.name = `${He}SkeletalVehicleMat`;
-       const ye = (0, Ze.V)(ie);
-       (0, Ze.H)(ye), (0, bi.e)(ie, (() => {
-         (0, yi.e)(ye, ee), (0, Se.e)(ye, !0)
-       })), (0, bi.h)(ie)
+     function gO(WW) {
+       return WW.replace(/[^A-Za-z0-9]+(.)?/g, ((WW, iW) => iW ? iW.toUpperCase() : ""))
```

#### 93. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1795-L1841` → after: `L1637-L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1637-L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1637-L1679) · [Before (L1795-L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1795-L1841)

```diff
-     const qi = {
-         width: !1,
-         height: !1,
-         depth: !1,
-         diffuseColor: !0,
-         emissiveColor: !0,
-         backFaceCulling: !0,
-         texture: !0,
-         faceUV: !0,
-         animateTexture: !0,
-         hideDist: !1,
-         meshOffset: !1,
-         autoRotate: !1,
-         lineToEId: !1
-       },
-       fi = Object.keys(qi).filter((ee => qi[ee]));
- ... (31 more removed lines; see GitHub link above)
+ 
+     function DO(WW, iW) {
+       var OW, mW;
+       const EW = WW.filter((WW => WW.names.includes(iW))),
+         NW = EW.filter((WW => !TW().isFunctionDeclaration(WW.node) && function(WW, iW) {
+           return !TW().isVariableStatement(WW) || WW.declarationList.declarations.some((WW => void 0 !== WW.initializer && JO(WW.name).includes(iW)))
+         }(WW.node, iW))),
+         PW = null !== (OW = NW[NW.length - 1]) && void 0 !== OW ? OW : EW[EW.length - 1];
+       if ("callback" === (null === PW || void 0 === PW ? void 0 : PW.kind)) return YO(PW.node);
+       const LW = "other" === (null === PW || void 0 === PW ? void 0 : PW.kind) ? null === (mW = TO(PW.node)) || void 0 === mW ? void 0 : mW.value : void 0;
+       if (!LW || !TW().isIdentifier(LW)) return null;
+       const cW = WW.filter((WW => {
+           var iW;
+           const OW = null === (iW = TO(WW.node)) || void 0 === iW ? void 0 : iW.value;
+           return void 0 !== OW && TW().isIdentifier(OW) && OW.text === LW.text
+         })),
+ ... (27 more added lines; see GitHub link above)
```

#### 94. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1843-L1845` → after: `L1681-L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1681-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1681-L1691) · [Before (L1843-L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1843-L1845)

```diff
-         (0, ve.d)(this.uk).mergeParticleSystemUpdate((0, Ce.b)(ee), ie, He);
-         const be = null === (ye = this.bloxd.meshParticleSystems[ee]) || void 0 === ye ? void 0 : ye[ie];
-         (0, xe.P)(be) || (0, Ve.c)(be, He)
+         const WW = xW[TW];
+         if (void 0 !== WW && null !== (UW = wW.parameters[TW]) && void 0 !== UW && UW.dotDotDotToken) {
+           lW.push(null === WW ? "undefined" : `...${WW}`);
+           break
+         }
+         if (void 0 !== WW) {
+           lW.push(null !== WW && void 0 !== WW ? WW : "undefined");
+           continue
+         }
+         const iW = bW(hW, TW);
+         jW.push(iW), lW.push(iW)
```

#### 95. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1847-L1848` → after: `L1693-L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1693-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1693-L1711) · [Before (L1847-L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1847-L1848)

```diff
-       getLatestParticleSystemUpdate(ee, ie) {
-         return (0, ve.d)(this.uk).getParticleSystemUpdate((0, Ce.b)(ee), null !== ie && void 0 !== ie ? ie : "__root__")
+       if (jW.length > 0) {
+         const WW = wW.getChildren(iW).find((WW => WW.kind === TW().SyntaxKind.CloseParenToken)),
+           OW = WW ? WW.getStart(iW) : -1;
+         if (-1 === OW) {
+           const WW = wW.parameters[0];
+           if (!WW) return [];
+           ZW.push({
+             from: WW.getStart(iW),
+             to: WW.getEnd(),
+             text: `(${[WW.getText(iW),...jW].join(", ")})`
+           })
+         } else {
+           const WW = wW.parameters.hasTrailingComma ? " " : wW.parameters.length > 0 ? ", " : "";
+           ZW.push({
+             from: OW,
+             to: OW,
+ ... (3 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1850-L1860` → after: `L1713-L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1713-L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1713-L1747) · [Before (L1850-L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1850-L1860)

```diff
-       addBoard(ee, ie, He, ye) {
-         var be, Me, Ke;
-         this.removeBoard(ee, ie, He);
-         const Ue = this.bloxd.blockDataOwner.getBlockData(ee, ie, He),
-           Fe = null !== (be = null === Ue || void 0 === Ue || null === (Me = Ue.persisted.shared.text) || void 0 === Me ? void 0 : Me.toString()) && void 0 !== be ? be : "",
-           Je = null !== (Ke = null === Ue || void 0 === Ue ? void 0 : Ue.persisted.shared.textSize) && void 0 !== Ke ? Ke : 0;
-         this.addBoardTextEntity([ee, ie, He], 25, (() => {
-           const ee = {
-             position: Ne.rf.Zero(),
-             rotation: Ne.rf.Zero(),
-             wR: Ne.rf.One()
+       const kW = `${EW}(${lW.join(", ")})`,
+         sW = bW(`${gO(PW)}Result`, 2),
+         MW = MO[mW],
+         KW = sO.has(mW) ? [kW] : MW ? [`const ${sW} = ${kW}`, `if (${MW.stopsWhen(sW)}) return ${sW}`] : [`const ${sW} = ${kW}`],
+         SW = !sO.has(mW) && (null === (LW = null === MW || void 0 === MW ? void 0 : MW.passedOn) || void 0 === LW || LW);
+       if (SW && TW().isBlock(tW)) {
+         const OW = function(WW, iW) {
+             const OW = new Set;
+             for (const mW of WW.statements) {
+               const WW = TW().isVariableStatement(mW) ? mW.declarationList.declarations[0] : void 0;
+               WW && TW().isIdentifier(WW.name) && WW.initializer && fO(WW.initializer, iW) && OW.add(WW.name.text)
+             }
+             return OW
+           }(tW, mW),
+           EW = WW => {
+             if (!TW().isFunctionLike(WW) && ! function(WW, iW, OW) {
+ ... (19 more added lines; see GitHub link above)
```

#### 97. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1862-L1964` → after: `L1749-L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1749-L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1749-L1760) · [Before (L1862-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1862-L1964)

```diff
-           let ie;
-           "" === Fe.trim() ? ie = (0, Be.f)(this.uk.PR, "EmptyBoardMesh") : (ie = this.createBoardTextPlane(Fe, Je, 1, 7 / 8, 256), (0, ue.j)(ee, ye, .375), ee.rotation.y += Math.PI, ie.rotation = ee.rotation);
-           return {
-             mesh: ie,
-             offset: [.5 + ee.position.x, .5 + ee.position.y, .5 + ee.position.z]
-           }
-         }))
-       }
-       addNoticeboardText(ee, ie, He) {
-         const {
-           anchor: ye,
-           rot: be,
-           width: Ue,
-           height: Fe
-         } = ee;
-         this.removeBoard(...ye);
- ... (87 more removed lines; see GitHub link above)
+         tW.statements.forEach(EW);
+         const NW = tW.statements[tW.statements.length - 1];
+         if (!NW || !TW().isReturnStatement(NW) && !TW().isThrowStatement(NW)) {
+           const OW = tW.getEnd() - 1,
+             mW = NW ? oO(WW, NW.getStart(iW)) : `${WW.slice(uO(WW,wW.getStart(iW)),wW.getStart(iW)).replace(/\S.*$/,"")}\t`,
+             EW = WW.slice(uO(WW, OW), OW),
+             PW = /^\s*$/.test(EW) ? `${mW}return ${sW}\n${EW}` : `\n${mW}return ${sW}\n`;
+           ZW.push({
+             from: /^\s*$/.test(EW) ? uO(WW, OW) : OW,
+             to: OW,
+             text: PW
+           })
```

#### 98. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1967-L1983` → after: `L1763-L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1763-L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1763-L1791) · [Before (L1967-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1967-L1983)

```diff
-       getThrowableMesh(ee) {
-         const ie = function(ee) {
-             return "Fireball" === ee ? Fe("Fireball Block", .95) : "RPG" === ee ? Fe("Rocket", .5) : "Obby RPG" === ee ? Fe("Obby Rocket", .5) : "Super RPG" === ee ? Fe("Super Rocket", .7) : "Grenade Launcher" === ee ? Fe("Grenade", .357) : "Iceball" === ee ? Fe("Iceball Block",  … [truncated]
-               item: "Bullet",
-               scale: 2,
-               billboard: !1,
-               thrownRole: !1
-             } : Fe(ee, .13, !0)
-           }(ee),
-           He = Ie.k.itemsClient[ie.item],
-           ye = ie.thrownRole ? He.getMeshWithRole(ie.scale, de.d.thrown) : He.getMesh(ie.scale);
-         return ie.billboard && (ye.billboardMode = We.e.BILLBOARDMODE_Y), ye
-       }
-       newMeshParticleSystem(ee, ie) {
-         const He = this.uk.PR.Xx(),
-           ye = this.newParticleSystem(He, ie);
- ... (1 more removed lines; see GitHub link above)
+       const YW = TW().isBlock(tW) ? [...tW.statements] : [],
+         yW = YW.findIndex((WW => ! function(WW, iW) {
+           return TW().isExpressionStatement(WW) && fO(WW.expression, iW)
+         }(WW, mW))),
+         JW = YW[(-1 === yW ? YW.length : yW) - 1];
+       if (cW && sO.has(mW) && JW) ZW.push({
+         from: JW.getEnd(),
+         to: JW.getEnd(),
+         text: `\n${oO(WW,JW.getStart(iW))}${kW}`
+       });
+       else if (TW().isBlock(tW)) {
+         const OW = tW.statements[0],
+           mW = OW ? oO(WW, OW.getStart(iW)) : `${WW.slice(uO(WW,wW.getStart(iW)),wW.getStart(iW)).replace(/\S.*$/,"")}\t`,
+           EW = tW.getStart(iW) + 1,
+           NW = void 0 !== OW && !WW.slice(EW, OW.getStart(iW)).includes("\n");
+         ZW.push({
+ ... (13 more added lines; see GitHub link above)
```

#### 99. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L1985-L2011` → after: `L1793-L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1793-L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1793-L1843) · [Before (L1985-L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L1985-L2011)

```diff
-       newParticleSystem(ee, ie) {
-         const He = Math.ceil("manualEmitCount" in ie ? ie.manualEmitCount : ie.emitRate * ie.maxLifeTime),
-           ye = this.uk.PR.bC(`${ie.texture}|minLifetime${ie.minLifeTime}`, He);
-         if (ye.texture = (0, Ee.q)(ee, (0, Te.g)(ie.texture)), "timeFraction" in ie.colorGradients[0])
-           for (const be of ie.colorGradients) {
-             const ee = be.maxColor ? (0, Ve.k)(be.maxColor) : void 0;
-             ye.addColorGradient(be.timeFraction, (0, Ve.k)(be.minColor), ee)
-           } else {
-             const ee = .99;
-             ye.addColorGradient(1, (0, Ve.o)(255, 255, 255, ee), (0, Ve.o)(255, 255, 255, 1)), ye.useRampGradients = !0, ye.addColorRemapGradient(0, ee, 1), ye.addColorRemapGradient(1, ee, 1), Ye.e.applyRampColoursToPSystem(ye, ie.colorGradients.map((ee => ee.color)))
-           }
-         ye.blendMode = ie.blendMode, ye.minLifeTime = ie.minLifeTime, ye.maxLifeTime = ie.maxLifeTime, ye.minEmitPower = ie.minEmitPower, ye.maxEmitPower = ie.maxEmitPower, ye.minSize = ie.minSize, ye.maxSize = ie.maxSize, ye.gravity = new Ne.rf(ie.gravity[0], ie.gravity[1], ie.g … [truncated]
-         for (const be of ie.velocityGradients) ye.addVelocityGradient(be.timeFraction, be.factor, be.factor2);
-         return ye
-       }
-       newSingleBurstParticleSystem(ee) {
- ... (11 more removed lines; see GitHub link above)
+       return ZW
+     }
+ 
+     function fO(WW, iW) {
+       return TW().isCallExpression(WW) && TW().isIdentifier(WW.expression) && WW.expression.text.endsWith(vO(iW)) && WW.expression.text !== vO(iW)
+     }
+ 
+     function CO(WW, iW) {
+       return TW().isIdentifier(WW) ? iW.has(WW.text) ? WW : null : TW().isConditionalExpression(WW) ? CO(WW.whenFalse, iW) : null
+     }
+ 
+     function XO(WW) {
+       const iW = [],
+         OW = WW => {
+           TW().isIdentifier(WW) && iW.push(WW.text), TW().forEachChild(WW, OW)
+         };
+ ... (35 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2013-L2033` → after: `L1845-L1867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1845-L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1845-L1867) · [Before (L2013-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2013-L2033)

```diff
-       getEntityMesh(ee, ie, He) {
-         const ye = this.uk.PR.Xx();
-         if ("BloxdBlock" === ee) {
-           var be, Me, Ke;
-           const ee = Array.isArray(ie.size) ? ie.size[1] : ie.size,
-             ye = null !== (be = ie.meshOffset) && void 0 !== be ? be : ze().fi(0, ee / 2, 0),
-             Ue = ee + .3,
-             Fe = oi(this.uk, ie.blockName, ie.size);
-           if ("number" === typeof Fe) return He(Fe), {
-             Ix: Fe,
-             mesh: null,
-             meshOffset: ye,
-             nameYOffset: Ue
-           };
-           if (null !== Fe) {
-             return {
- ... (5 more removed lines; see GitHub link above)
+       const LW = KO(WW),
+         cW = KO(iW);
+       if (LW.hasErrors || cW.hasErrors) return null;
+       const wW = HO(WW, LW.file),
+         tW = HO(iW, cW.file),
+         ZW = new Set(wW.flatMap((WW => WW.names))),
+         xW = new Set(ZW),
+         lW = [],
+         AW = [],
+         bW = [],
+         jW = [];
+       let UW = [];
+       const kW = tW.find((WW => "config" === WW.kind)),
+         sW = wW.find((WW => "config" === WW.kind));
+       if (kW) {
+         const OW = hO(kW.node),
+ ... (7 more added lines; see GitHub link above)
```

#### 101. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2035-L2090` → after: `L1869-L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1869-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1869-L1905) · [Before (L2035-L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2035-L2090)

```diff
-           }
-           return {
-             Ix: null,
-             mesh: null !== (Me = null === (Ke = Ie.k.itemsClient[ie.blockName]) || void 0 === Ke ? void 0 : Ke.getMesh(ie.size, He)) && void 0 !== Me ? Me : null,
-             meshOffset: ye,
-             nameYOffset: Ue
-           }
-         }
-         if ("Box" === ee) {
-           var Ue;
-           const be = ie.width || 1,
-             Me = ie.height || 1,
-             Ke = ie.depth || 1,
-             ke = be * Me * Ke < 0,
-             qe = ke ? -1 : 1,
-             fe = fi.map((ee => ie[ee])),
- ... (40 more removed lines; see GitHub link above)
+             const cW = [],
+               wW = [],
+               tW = [],
+               ZW = new Map;
+             for (const sW of NW.properties) {
+               const WW = nO(sW);
+               if (null === WW) continue;
+               const OW = LW.get(WW);
+               if (OW) {
+                 if (PW.has(WW) && TW().isPropertyAssignment(OW) && TW().isPropertyAssignment(sW)) {
+                   const mW = sW.initializer.getText(EW);
+                   OW.initializer.getText(iW) !== mW && (cW.push({
+                     from: OW.initializer.getStart(iW),
+                     to: OW.initializer.getEnd(),
+                     text: mW
+                   }), ZW.set(OW, mW), wW.push(WW))
+ ... (21 more added lines; see GitHub link above)
```

#### 102. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2093-L2114` → after: `L1908-L1935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1908-L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1908-L1935) · [Before (L2093-L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2093-L2114)

```diff
-             const {
-               mirror: Me
-             } = (0, ne.b)({
-               name: `${pe}EntityMesh`,
-               yp: ye,
-               sets: {
-                 ...ee,
-                 backFaceCulling: null === (Fe = ie.backFaceCulling) || void 0 === Fe || Fe
-               },
-               features: ee => {
-                 He && (0, Ze.u)(ee, we.e, He), (0, Se.e)(ee, !0), (0, Ze.G)(ee)
-               },
-               freeze: !0
-             }), Ke = ie.faceUV ? ie.faceUV.map((ee => [ee[0] + .01, ee[1] + .01, ee[2] - .01, ee[3] - .01])) : void 0, Ue = (0, Be.n)(this.uk.PR, `${pe}EntityMesh`, (0, ge.b)({
-               width: qe,
-               height: qe,
- ... (6 more removed lines; see GitHub link above)
+             const AW = void 0 !== lW && !OW.properties.hasTrailingComma,
+               bW = uO(WW, xW),
+               jW = WW.slice(bW, xW);
+             if ("" === jW.trim()) return AW && cW.push({
+               from: lW.getEnd(),
+               to: lW.getEnd(),
+               text: ","
+             }), cW.push({
+               from: bW,
+               to: bW,
+               text: `${tW.join("\n")}\n`
+             }), {
+               edits: cW,
+               settings: wW
+             };
+             const UW = bW + jW.trimEnd().length,
+ ... (12 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2116-L2213` → after: `L1937-L1953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1937-L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1937-L1953) · [Before (L2116-L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2116-L2213)

```diff
-             Ue.Gf = !0, Ue.eT = !0, Ue.JY(!1), (0, De.f)(Ue) || Ue.Xx().gL(Ue), Oe.set(pe, Ue), We = Ue
-           }
-           const te = We.createInstance(`${pe}EntityMeshInstance`);
-           return te.wR.set(qe * be, qe * Me, qe * Ke), this.uk.PR.Up(te), (0, Pe.n)(te, 0, 0, 0), He(te), {
-             Ix: null,
-             mesh: te,
-             meshOffset: null !== (Ue = ie.meshOffset) && void 0 !== Ue ? Ue : ze().fi(0, Me / 2, 0),
-             nameYOffset: Me + .3
-           }
-         }
-         if ("Leaderboard" === ee) {
-           var We, te, Ye, Ve, Le;
-           const ee = ie.eId,
-             ye = function(ee, ie, He, ye) {
-               var be, Me;
-               let Ke = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
- ... (82 more removed lines; see GitHub link above)
+           }(WW, LW.file, mW, iW, cW.file, OW, PW);
+           lW.push(...EW.edits), UW = EW.settings
+         } else if (OW) {
+           if (xW.has("CONFIG")) return null;
+           const mW = function(WW, iW) {
+               const OW = iW.statements[0];
+               return OW ? uO(WW, OW.getStart(iW)) : WW.length
+             }(WW, LW.file),
+             EW = mW > 0 && "\n" !== WW[mW - 1] ? "\n" : "";
+           lW.push({
+             from: mW,
+             to: mW,
+             text: `${EW}${iW.slice(kW.from,kW.to)}\n\n`
+           }), UW = OW.properties.flatMap((WW => {
+             const iW = nO(WW);
+             return null === iW ? [] : [iW]
+ ... (1 more added lines; see GitHub link above)
```

#### 104. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2215-L2235` → after: `L1955-L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1955-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1955-L1970) · [Before (L2215-L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2215-L2235)

```diff
-         if ("ParticleEmitter" === ee) {
-           var Ce;
-           const {
-             particleSystem: ee,
-             mesh: ye
-           } = this.getParticleEmitter(ie, ie.eId, ie.nodeName);
-           if ((0, xe.P)(ie.eId)) console.error("No eId specified for mesh particle system, will not be possible to update it");
-           else {
-             var ve;
-             (0, xe.P)(this.bloxd.meshParticleSystems[ie.eId]) && (this.bloxd.meshParticleSystems[ie.eId] = {});
-             const He = null !== (ve = ie.nodeName) && void 0 !== ve ? ve : "__root__";
-             this.bloxd.meshParticleSystems[ie.eId][He] = ee, ee.onDispose = () => {
-               var ee, ye;
-               (0, xe.P)(null === this || void 0 === this || null === (ee = this.bloxd) || void 0 === ee || null === (ye = ee.meshParticleSystems) || void 0 === ye ? void 0 : ye[ie.eId]) || (delete this.bloxd.meshParticleSystems[ie.eId][He], 0 === Object.keys(this.bloxd.meshPartic … [truncated]
-             }
-           }
- ... (5 more removed lines; see GitHub link above)
+       }
+       const MW = [],
+         KW = (WW, OW) => {
+           const mW = MW[MW.length - 1],
+             EW = void 0 !== mW && mW >= 0 && mW === OW - 1 && !/\n[^\S\n]*\n/.test(iW.slice(tW[mW].to, tW[OW].from)) ? "\n" : "\n\n";
+           AW.push(0 === AW.length ? WW : `${EW}${WW}`), MW.push(OW)
+         };
+       for (const [YW, yW] of tW.entries()) {
+         if ("config" === yW.kind) continue;
+         const mW = iW.slice(yW.from, yW.to);
+         if ("callback" === yW.kind) {
+           const iW = yW.names[0],
+             NW = DO(wW, iW);
+           if (!NW && ZW.has(iW)) {
+             if (!0 === OW.chainCallbacks) continue;
+             return null
```

#### 105. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2237-L2246` → after: `L1972-L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1972-L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1972-L1974) · [Before (L2237-L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2237-L2246)

```diff
-         }
-         if ("Person" === ee) {
-           var ue, me, le, je, Ge;
-           const ee = this.uk.PR.vx,
-             ye = (0, Ae.i)("Player");
-           ee.JY(ye, !0), ee.setPosition(ye, 0, 0, 0), ee.setRotationEuler(ye, 0, 0, 0), ee.set(ye, "aOpacity", 1), ee.tC(ye, "aOpacity", 1);
-           const be = null === (ue = (0, ke.h)("head", null === (me = ie.textures) || void 0 === me ? void 0 : me.head)) || void 0 === ue ? void 0 : ue.personModel;
-           for (const ie in null === be || void 0 === be ? void 0 : be.nodePositions) {
-             const [He, Me, Ke] = be.nodePositions[ie];
-             ee.setNodePosition(ye, ee.getNamedNode(ye, ie), He, Me, Ke)
+           if (!NW && !0 !== OW.chainCallbacks) {
+             xW.has(iW) || (KW(mW, YW), bW.push(iW), xW.add(iW));
+             continue
```

#### 106. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2248-L2252` → after: `L1976-L1982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1976-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1976-L1982) · [Before (L2248-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2248-L2252)

```diff
-           const Me = null !== (le = ie.size) && void 0 !== le ? le : 1;
-           ee.setScale(ye, Me, Me, -Me);
-           for (const He of qe.c) {
-             var re;
-             Ae.b.Player.meshApi.updatePlayerCosmetic(null, ye, He, null === (re = ie.textures) || void 0 === re ? void 0 : re[He])
+           const PW = `${gO(EW)}${vO(iW)}`,
+             tW = YO(yW.node);
+           if (null === tW || void 0 === tW || !tW.nameNode) continue;
+           if (!xW.has(PW)) {
+             const WW = tW.nameNode.getStart(cW.file) - yW.from,
+               iW = tW.nameNode.getEnd() - yW.from;
+             KW(mW.slice(0, WW) + PW + mW.slice(iW), YW), bW.push(PW), xW.add(PW)
```

#### 107. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2254-L2258` → after: `L1984-L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1984-L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1984-L1989) · [Before (L2254-L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2254-L2258)

```diff
-           return He(ye), {
-             Ix: ye,
-             mesh: null,
-             meshOffset: null !== (je = ie.meshOffset) && void 0 !== je ? je : ze().fi(0, 0, 0),
-             nameYOffset: (null !== (Ge = null === be || void 0 === be ? void 0 : be.height) && void 0 !== Ge ? Ge : fe.g.UX) * Me + .5
+           const AW = VO(tW.cZ).map(((WW, iW) => null !== WW && void 0 !== WW ? WW : `arg${iW}`));
+           if (!NW) {
+             const WW = `${PW}(${AW.join(", ")})`,
+               OW = `${gO(EW)}Result`;
+             KW(`function ${iW}(${AW.join(", ")}) {\n\t${sO.has(iW)?WW:`const ${OW} = ${WW}\n\treturn ${OW}`}\n}`, -1), bW.push(iW), xW.add(iW);
+             continue
```

#### 108. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2260-L2287` → after: `L1991-L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1991-L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1991-L1992) · [Before (L2260-L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2260-L2287)

```diff
-         } {
-           const ie = ee;
-           return void console.error("Not implemented custom meshes for type", ie)
-         }
-       }
-       getParticleEmitter(ee, ie, He) {
-         const ye = `ParticleEmitter|${JSON.stringify(ee)}`,
-           be = this.uk.PR.Xx(),
-           Me = Ti.sourcesFor(be);
-         if (!Me.particleEmitter) {
-           const ee = (0, Be.n)(this.uk.PR, `${ye}EntityMesh`, (0, ge.b)({
-             width: 1,
-             height: 1,
-             depth: 1
-           }));
-           ee.visibility = 0, ee.Gf = !0, ee.eT = !0, ee.JY(!1), ee.Mp = !1, (0, De.f)(ee) || ee.Xx().gL(ee), (0, le.i)(ee), Me.particleEmitter = ee
- ... (12 more removed lines; see GitHub link above)
+           BO(NW.cZ, LW.file, PW) || (lW.push(...pO(WW, LW.file, NW, iW, PW, AW, EW, !0 === OW.runsLast)), jW.push(iW));
+           continue
```

#### 109. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2289-L2339` → after: `L1994-L1997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L1994-L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L1994-L1997) · [Before (L2289-L2339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2289-L2339)

```diff
-       }
-     }
-     Ti.sourcesByScene = new WeakMap, Ti.MAX_WARM_PARTICLE_SHADERS = 12, Ti.warmParticleShaderKeys = new Set, Ti.warmedForScene = null;
-     var Xi = He(38878),
-       zi = He(35),
-       Bi = He(1192),
-       Ei = He(153),
-       gi = He(4891),
-       Oi = He(38495),
-       di = He(38611),
-       Wi = He(1169),
-       ti = He(1315),
-       Zi = He(39044),
-       wi = He(4461),
-       Di = He(40441);
-     class Pi extends wi.EventEmitter {
- ... (35 more removed lines; see GitHub link above)
+         const NW = yW.names.filter((WW => !xW.has(WW)));
+         if ("other" === yW.kind || yW.names.length > 0 && NW.length === yW.names.length) {
+           KW(mW, YW), bW.push(...NW);
+           for (const WW of NW) xW.add(WW)
```

#### 110. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2342-L2343` → after: `L2000-L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2000-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2000-L2003) · [Before (L2342-L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2342-L2343)

```diff
-       Tm(ee) {
-         this.element.appendChild(ee)
+       let SW = eO(WW, lW);
+       if (AW.length > 0) {
+         const WW = SW.replace(/\s*$/, "");
+         SW = `${""===WW?"":`${WW}\n\n`}${NW?`${NW}\n`:""}${AW.join("")}\n`
```

#### 111. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2345-L2362` → after: `L2005-L2009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2005-L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2005-L2009) · [Before (L2345-L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2345-L2362)

```diff
-       hY() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         ee || (this.uk.camera.qm = !0), this.UW.HX = !!ee && this.rC
-       }
-       Fv(ee) {
-         this.UW.Av = !!ee && this.Dv && this.rC
-       }
-       get uC() {
-         return this.YC.uC
-       }
-       get mC() {
-         return this.YC.mC
-       }
-       get lC() {
-         return this.YC.lC
-       }
- ... (2 more removed lines; see GitHub link above)
+       return KO(SW).hasErrors ? null : {
+         text: SW,
+         added: bW,
+         chained: jW,
+         settings: UW
```

#### 112. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2367-L2376` → after: `L2014-L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2014-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2014-L2017) · [Before (L2367-L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2367-L2376)

```diff
-       var ie = ee.Wm || null;
-       "string" === typeof ie && (ie = document.querySelector(ie));
-       var He = ie || function() {
-         var ee = document.createElement("div");
-         return ee.tabIndex = 1, ee.style.outline = "none", ee.style.position = "fixed", ee.style.left = "0px", ee.style.right = "0px", ee.style.top = "0px", ee.style.bottom = "0px", ee.style.height = "100%", ee.style.overflow = "hidden", document.body.appendChild(ee), document.bo … [truncated]
-       }();
-       return {
-         element: He,
-         canvas: Yi(He)
-       }
+       const {
+         file: iW
+       } = KO(WW);
+       return new Set(HO(WW, iW).flatMap((WW => WW.names)))
```

#### 113. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2380-L2442` → after: `L2021-L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2021-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2021-L2026) · [Before (L2380-L2442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2380-L2442)

```diff
-       var ie = ee.querySelector("canvas");
-       return ie || ((ie = document.createElement("canvas")).style.position = "absolute", ie.style.left = "0px", ie.style.top = "0px", ie.style.height = "100%", ie.style.width = "100%", ie.id = "noa-canvas", ee.insertBefore(ie, ee.firstChild)), ie
-     }
-     He(40450);
-     class Vi extends wi.EventEmitter {
-       constructor() {
-         super(...arguments), this.snapshots = [], this.depth = 0
-       }
-       Zm(ee, ie) {
-         const He = this._events[ee];
-         if (void 0 === He) return;
-         if ("function" === typeof He) return void He.call(this, ie);
-         const ye = He.length,
-           be = this.snapshots[this.depth] ??= [];
-         for (let Me = 0; Me < ye; Me++) be[Me] = He[Me];
-         this.depth++;
- ... (47 more removed lines; see GitHub link above)
+       const {
+         file: iW
+       } = KO(WW), OW = new Set, mW = WW => {
+         TW().isCallExpression(WW) && TW().isIdentifier(WW.expression) && OW.add(WW.expression.text), TW().forEachChild(WW, mW)
+       };
+       return mW(iW), OW
```

#### 114. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2448-L2478` → after: `L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2030) · [Before (L2448-L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2448-L2478)

```diff
-       return ee(new li([0, 0, 0], [1, 1, 1]), 1, 1, 0, 1, null, !1)
-     }
- 
-     function ni() {
-       this.eq = .1, this.fluidDrag = .4, this.iq = 2, this.gravity = [0, -10, 0], this.minBounceImpulse = .5
-     }
-     class ji {
-       constructor(ee, ie, He) {
-         ee = Object.assign(new ni, ee), this.gravity = ee.gravity, this.eq = ee.eq, this.iq = ee.iq, this.fluidDrag = ee.fluidDrag, this.minBounceImpulse = ee.minBounceImpulse, this.bodies = [], this._tickNext = 0, this._tickEnd = 0, this.hk = ee.hk, this.yI = ee.yI, this.rollbac … [truncated]
-           return new ui(ee, ie, He, ye, be, Me, Ke)
-         })), this.testSolid = ie, this.testFluid = He
-       }
-       Gk(ee, ie, He, ye, be, Me) {
-         ee = ee || new li([0, 0, 0], [1, 1, 1]), "undefined" == typeof ie && (ie = 1), "undefined" == typeof He && (He = 1), "undefined" == typeof ye && (ye = 0), "undefined" == typeof be && (be = 1);
-         var Ke = this.mI(ee, ie, He, ye, be, Me);
-         return this.bodies.push(Ke), Ke
- ... (15 more removed lines; see GitHub link above)
+       return !KO(WW).hasErrors
```

#### 115. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2486-L2508` → after: `L2033-L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2033-L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2033-L2034) · [Before (L2486-L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2486-L2508)

```diff
-     function Qi(ee, ie, He, ye, be, Me) {
-       let Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "it runs in JS";
-       if (He instanceof Gi) throw He;
-       ie.wasmFailures++;
-       const Ue = ! function(ee) {
-         return ee instanceof Error && Object.getPrototypeOf(ee) === Error.prototype
-       }(He);
-       let Fe = He instanceof Error ? He.message : String(He);
-       if (Me.fatal) {
-         if (He instanceof WebAssembly.RuntimeError && /unreachable/i.test(He.message) && null === ee.getLastBloxdWasmPanic()) {
-           const ie = ee.takeBloxdWasmRefusedAllocation();
-           ie > 0 && (Fe = `alloc_failed ${ie} bytes; ${Fe}`)
-         }
-         ee.markBloxdWasmFailed(He);
-         const {
-           prefix: ie,
- ... (7 more removed lines; see GitHub link above)
+     function aO(WW, iW) {
+       return TW().isCallExpression(WW) && TW().isPropertyAccessExpression(WW.expression) && "api" === WW.expression.expression.getText(iW)
```

#### 116. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2511` → after: `L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2037) · [Before (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2511)

```diff
-     function eH(ee, ie, He, ye) {
+     function rO(WW, iW) {
```

#### 117. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2513-L2519` → after: `L2039-L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2039-L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2039-L2044) · [Before (L2513-L2519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2513-L2519)

```diff
-       let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ii;
-       const Ke = performance.now(),
-         Ue = Me.get(ee);
-       if (void 0 !== Ue && Ke - Ue < 6e4) return;
-       Me.set(ee, Ke);
-       const Fe = ie();
-       ye && console.error(Fe), null === (be = He.RR) || void 0 === be || be.call(He, Fe)
+       const mW = WW.getPropertiesOfType(WW.getNonNullableType(iW)),
+         EW = null !== (OW = mW.find((WW => "color" === WW.name))) && void 0 !== OW ? OW : mW[0];
+       if (!EW) return;
+       const NW = WW.typeToString(WW.getNonNullableType(WW.getTypeOfSymbol(EW))),
+         PW = "color" === EW.name ? '"red"' : NW.includes("number") ? "1" : "boolean" === NW ? "true" : '"..."';
+       return `{ ${EW.name}: ${PW} }`
```

#### 118. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2523` → after: `L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2048) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2523)

```diff
-       return "failed" !== ee.getBloxdWasmStatus()
+       return WW.isUnion() ? WW.types.every((WW => 0 !== (WW.flags & TW().TypeFlags.Object))) : 0 !== (WW.flags & TW().TypeFlags.Object)
```

#### 119. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2527-L2548` → after: `L2052-L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2052-L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2052-L2074) · [Before (L2527-L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2527-L2548)

```diff
-       if (iH(ee)) try {
-         ie.free()
-       } catch {} else ie.__destroy_into_raw()
-     }
-     var yH = 10,
-       bH = 14,
-       MH = 15,
-       KH = 12,
-       UH = 15,
-       FH = 18,
-       JH = 128,
-       oH = 256,
-       RH = 1024,
-       kH = 2048,
-       qH = 256;
- 
- ... (6 more removed lines; see GitHub link above)
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const mW = WW.getNonNullableType(iW);
+       if (mW.isUnion()) {
+         const iW = [...new Set(mW.types.map((iW => FO(WW, iW, OW))))];
+         return iW.length > 7 ? `${iW.slice(0,7).join(" or ")} or ...` : iW.join(" or ")
+       }
+       if (mW.isStringLiteral()) return `"${mW.value}"`;
+       if (mW.isNumberLiteral()) return `${mW.value}`;
+       if (mW.flags & TW().TypeFlags.StringLike) return "text";
+       if (mW.flags & TW().TypeFlags.NumberLike) return "a number";
+       if (mW.flags & TW().TypeFlags.BooleanLike) return "true or false";
+       if (WW.isTupleType(mW)) {
+         return `[${WW.getTypeArguments(mW).map((iW=>FO(WW,iW,OW+1))).join(", ")}]`
+       }
+       if (WW.isArrayType(mW)) {
+         if (OW > 1) return "a list";
+ ... (7 more added lines; see GitHub link above)
```

#### 120. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2551-L2556` → after: `L2077-L2089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2077-L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2077-L2089) · [Before (L2551-L2556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2551-L2556)

```diff
-     function pH(ee) {
-       return ee % qH * 21
-     }
- 
-     function XH() {
-       return !1
+     function QO(WW, iW, OW) {
+       const mW = (iW, OW) => WW.isTypeAssignableTo(iW, OW) || QO(WW, iW, OW),
+         EW = iW => WW.getTypeArguments(iW)[0];
+       if ("string | number" === WW.typeToString(iW)) return !0;
+       if (iW.isUnion() && !(iW.flags & TW().TypeFlags.Boolean)) return iW.types.every((WW => mW(WW, OW)));
+       const NW = WW.getNonNullableType(OW);
+       return (NW.isUnion() ? NW.types : [NW]).some((OW => WW.isTupleType(OW) ? WW.isArrayType(iW) && WW.getTypeArguments(OW).every((WW => mW(EW(iW), WW))) : WW.isArrayType(OW) ? WW.isArrayType(iW) && mW(EW(iW), EW(OW)) : OW.flags & (TW().TypeFlags.Object | TW().TypeFlags.Intersec … [truncated]
+         var EW;
+         if (WW.getTypeOfSymbol(iW).flags & TW().TypeFlags.Undefined) return !0;
+         const NW = OW.getProperty(iW.name),
+           PW = NW ? WW.getTypeOfSymbol(NW) : null === (EW = WW.getIndexInfoOfType(OW, TW().IndexKind.String)) || void 0 === EW ? void 0 : EW.type;
+         return void 0 !== PW && mW(WW.getTypeOfSymbol(iW), PW)
+       })) : OW.isNumberLiteral() && iW.flags === TW().TypeFlags.Number || OW.isStringLiteral() && iW.flags === TW().TypeFlags.String))
```

#### 121. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2560-L2561` → after: `L2093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2093) · [Before (L2560-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2560-L2561)

```diff
-       var He = (He, ye, be) => null !== ie.fn && ye <= ie.fn || ee.testSolid(He, ye, be);
-       return He.solidOwner = ee, He
+       return TW().isTypeReferenceNode(WW) && TW().isIdentifier(WW.typeName) && iW.has(WW.typeName.text) || !!TW().forEachChild(WW, (WW => Wm(WW, iW) || void 0))
```

#### 122. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2565-L2584` → after: `L2097-L2118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2097-L2118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2097-L2118) · [Before (L2565-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2565-L2584)

```diff
-       var He = ie.testSolid && ie.testSolid.solidOwner;
-       return (!ie.testSolid || void 0 !== He && He !== ee) && (ie.testSolid = zH(ee, ie)), ie.testSolid
-     }
-     const EH = {
-         server: 0,
-         player: 1,
-         client: 2
-       },
-       gH = 32,
-       OH = 32768,
-       dH = [16, 21, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, yH, 13, bH, MH, 0, 3, 6, 9, KH, UH, FH, 1, 2, 4, 8, 16, 32, 64, JH, oH, 512, RH, kH, 8192, 0, 1, 2, qH],
-       WH = [0, 1, 2, 3, EH.server, EH.player, EH.client, 0, 1, 2, 3, 4, 6, 7, 10, 11, 12, 0, 1, 2, OH, 0, 1, 2, 3, 4, 0, 1, 6, 7, 8, 9, 10, 11, 12, 4, 5, 0, 1, 2, 3, 4, 5];
-     let tH = null;
- 
-     function ZH(ee) {
-       if (null === tH) {
- ... (4 more removed lines; see GitHub link above)
+       const OW = new Set,
+         mW = EW => {
+           if (aO(EW, WW)) {
+             var NW, PW, LW;
+             const mW = iW.getResolvedSignature(EW),
+               cW = null !== (NW = null === mW || void 0 === mW ? void 0 : mW.getParameters()) && void 0 !== NW ? NW : [],
+               wW = new Set((null !== (PW = null === mW || void 0 === mW || null === (LW = mW.getDeclaration()) || void 0 === LW ? void 0 : LW.typeParameters) && void 0 !== PW ? PW : []).map((WW => WW.name.text)));
+             EW.arguments.forEach(((iW, mW) => {
+               var NW;
+               const PW = null === (NW = cW[mW]) || void 0 === NW ? void 0 : NW.valueDeclaration,
+                 LW = PW && TW().isParameter(PW) ? PW : void 0;
+               if (iW.kind === TW().SyntaxKind.NullKeyword && null !== LW && void 0 !== LW && LW.type && !Wm(LW.type, wW) && !/\b(?:null|any|unknown)\b/.test(LW.type.getText())) {
+                 const iW = !!LW.questionToken || !!LW.initializer || !!LW.dotDotDotToken,
+                   NW = mW === EW.arguments.length - 1,
+                   PW = iW ? NW ? "leave it out" : "give undefined instead" : "give it a value";
+                 OW.add(`${EW.expression.getText(WW)} can't take null as ${cW[mW].name} (value ${mW+1}): ${PW}, or it throws when that line runs.`)
+ ... (6 more added lines; see GitHub link above)
```

#### 123. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2588-L2591` → after: `L2122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2122) · [Before (L2588-L2591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2588-L2591)

```diff
-       if (ee.length !== ie.length) return !1;
-       for (let He = 0; He < ie.length; He++)
-         if (ee[He] !== ie[He]) return !1;
-       return !0
+       return !!WW && aO(WW, iW) && "createEnchantmentAttributesForItem" === WW.expression.name.text
```

#### 124. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2595-L2601` → after: `L2126-L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2126-L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2126-L2131) · [Before (L2595-L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2595-L2601)

```diff
-       if (Number.isNaN(ee)) return "NaN";
-       if (!Number.isFinite(ee)) return ee > 0 ? "inf" : "-inf";
-       if (0 === ee) return Object.is(ee, -0) ? "-0.0" : "0.0";
-       const ie = Math.abs(ee);
-       if (ie >= 1e16 || ie < 1e-4) return ee.toExponential().replace("e+", "e");
-       const He = String(ee);
-       return He.includes(".") ? He : He + ".0"
+       let iW = WW;
+       for (; TW().isParenthesizedExpression(iW.parent) || TW().isArrayLiteralExpression(iW.parent) || TW().isSpreadElement(iW.parent) || TW().isSpreadAssignment(iW.parent) || TW().isShorthandPropertyAssignment(iW.parent) || TW().isPropertyAssignment(iW.parent) && iW.parent.initia … [truncated]
+       const {
+         parent: OW
+       } = iW;
+       return TW().isBinaryExpression(OW) && OW.left === iW && OW.operatorToken.kind >= TW().SyntaxKind.FirstAssignment && OW.operatorToken.kind <= TW().SyntaxKind.LastAssignment || (TW().isForOfStatement(OW) || TW().isForInStatement(OW)) && OW.initializer === iW || (TW().isPrefix … [truncated]
```

#### 125. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2604-L2607` → after: `L2134-L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2134-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2134-L2142) · [Before (L2604-L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2604-L2607)

```diff
-     function PH(ee) {
-       const ie = ["dir", "base", "max", "left"][ee[0]],
-         He = [ee[2], ee[3], ee[4]].map(DH).join(", ");
-       return "voxel sweep rejected a move it would never finish: " + ie + "[" + ee[1] + "] of [" + He + "]"
+     function Em(WW, iW, OW, mW) {
+       var EW, NW;
+       if (!iW || "ItemAttributes" !== (null === (EW = mW.getNonNullableType(iW).aliasSymbol) || void 0 === EW ? void 0 : EW.name)) return !1;
+       if (Om(WW, OW)) return !0;
+       const PW = TW().isIdentifier(WW) ? mW.getSymbolAtLocation(WW) : void 0,
+         LW = 1 === (null === PW || void 0 === PW || null === (NW = PW.declarations) || void 0 === NW ? void 0 : NW.length) ? PW.declarations[0] : void 0;
+       if (!LW || !TW().isVariableDeclaration(LW) || !Om(LW.initializer, OW)) return !1;
+       const cW = WW => TW().isIdentifier(WW) && mm(WW) && mW.getSymbolAtLocation(WW) === PW || !0 === TW().forEachChild(WW, cW);
+       return 0 !== (LW.parent.flags & TW().NodeFlags.Const) || !cW(OW)
```

#### 126. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2611-L2646` → after: `L2146-L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2146-L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2146-L2158) · [Before (L2611-L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2611-L2646)

```diff
-       return ee ? ie : 0
-     }
- 
-     function YH(ee) {
-       const ie = AH(ee.nS, 1) | AH(ee.qS, 2) | AH(ee.preventFallOffEdge, 4) | AH(ee.alwaysApplyHorizFriction, 8) | AH(ee.slideOnCollision, 16) | AH(ee.rolledBackLastTick, 32) | AH(ee.depenetrate, 64) | AH(ee.inFluid, JH) | AH(ee.jk, oH) | AH(ee.Ik, 512) | AH(ee.wakeInFluid, kH),
-         He = ee.fn;
-       return null === He ? ie : "number" === typeof He ? ie | RH : null
-     }
- 
-     function VH(ee, ie, He, ye, be) {
-       const Me = TH(He),
-         Ke = pH(He),
-         Ue = ee[Me + bH];
-       ye.ratioInFluid = ee[Me + 8], ye._sleepFrameCount = ee[Me + 9];
-       const Fe = ye.resting;
-       Fe[0] = ee[Me + yH], Fe[1] = ee[Me + yH + 1], Fe[2] = ee[Me + yH + 2], aH(ye, "inFluid", Ue & JH), aH(ye, "rolledBackLastTick", 32 & Ue);
- ... (20 more removed lines; see GitHub link above)
+       const OW = new Set,
+         mW = EW => {
+           if (aO(EW, WW)) {
+             var NW, PW;
+             const mW = null !== (NW = null === (PW = iW.getResolvedSignature(EW)) || void 0 === PW ? void 0 : PW.getParameters()) && void 0 !== NW ? NW : [];
+             EW.arguments.forEach(((NW, PW) => {
+               const LW = mW[PW];
+               LW && Em(NW, iW.getTypeOfSymbol(LW), WW, iW) && OW.add(`${EW.expression.getText(WW)} can't take api.createEnchantmentAttributesForItem(...) as ${LW.name} (value ${PW+1}): put it in { customAttributes: ... }, or it throws when that line runs.`)
+             }))
+           }
+           TW().forEachChild(EW, mW)
+         };
+       return mW(WW), [...OW]
```

#### 127. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2650-L2652` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2162) · [Before (L2650-L2652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2650-L2652)

```diff
-       var ie;
-       const He = xH(ee);
-       return 65536 * (null !== (ie = ee.iN) && void 0 !== ie ? ie : 0) + He
+       return KO(WW).file
```

#### 128. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2675-L2677` → after: `L2167-L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2167-L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2167-L2168) · [Before (L2675-L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2675-L2677)

```diff
-         kinds: He,
-         shapeOffsets: ye,
-         shapes: Float64Array.from(be)
+         from: WW.getFullStart(),
+         to: WW.getEnd()
```

#### 129. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2682-L2701` → after: `L2173-L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2173-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2173-L2214) · [Before (L2682-L2701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2682-L2701)

```diff
-       return Array.isArray(ee) ? 2 : ee ? 1 : 0
-     }
-     class vH {
-       constructor(ee) {
-         this.mirror = ee, this.supplied = new Set, this.absentMisses = !1
-       }
-       gR() {
-         this.supplied.size > 0 && this.supplied.clear(), this.absentMisses = this.mirror.picksSupplyAbsent
-       }
-       supply(ee) {
-         ee.missRounds++, this.absentMisses && this.alreadySupplied() && (this.absentMisses = !1), this.mirror.supplyMisses(this.absentMisses ? "generate" : "load")
-       }
-       alreadySupplied() {
-         const ee = this.mirror.xR,
-           ie = ee.Oq(),
-           He = this.mirror.wasm.wasmView(Int32Array, ee.dq(), 3 * ie);
- ... (4 more removed lines; see GitHub link above)
+       if (!/\buse_?prefab\s*\(/i.test(WW)) return {
+         code: WW,
+         calls: []
+       };
+       const iW = Pm(WW),
+         OW = function(WW) {
+           const iW = new Map;
+           for (const OW of WW.statements)
+             if (TW().isVariableStatement(OW))
+               for (const WW of OW.declarationList.declarations)
+                 if (TW().isIdentifier(WW.name) && "CONFIG" === WW.name.text && WW.initializer && TW().isObjectLiteralExpression(WW.initializer))
+                   for (const OW of WW.initializer.properties) TW().isPropertyAssignment(OW) && (TW().isIdentifier(OW.name) || TW().isStringLiteral(OW.name)) && iW.set(OW.name.text, OW.initializer.getText());
+           return iW
+         }(iW),
+         mW = [],
+         EW = [],
+ ... (26 more added lines; see GitHub link above)
```

#### 130. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2703` → after: `L2216-L2223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2216-L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2216-L2223) · [Before (L2703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2703)

```diff
-         return ye
+         EW.push({
+           ...Lm(LW),
+           text: ""
+         })
+       }
+       return {
+         code: eO(WW, EW),
+         calls: mW
```

#### 131. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2707-L2744` → after: `L2227-L2240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2227-L2240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2227-L2240) · [Before (L2707-L2744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2707-L2744)

```diff
-     function uH(ee, ie, He) {
-       if (!ie.yN) throw new Error(`wasm physics: a pick ${He}, and picks here run only in wasm`);
-       return ee.jsPicks++, ie.yN()
-     }
-     const mH = null;
-     class lH {
-       constructor(ee) {
-         this.mirror = ee, this.tables = new Map, this.pickIoView = null, this.rounds = void 0, this.rounds = new vH(ee)
-       }
-       tq(ee, ie) {
-         if (!this.mirror.usable()) return uH(ee, ie, "found wasm unusable");
-         let He;
-         try {
-           He = this.wasmPick(ie, ee)
-         } catch (ye) {
-           if (ye instanceof Ni) throw ye.error;
- ... (22 more removed lines; see GitHub link above)
+     function wm(WW) {
+       if (!/=\s*(?:on[A-Z]\w*|tick|playerCommand)\b/.test(WW)) return WW;
+       const iW = Pm(WW),
+         OW = new Set(iW.statements.flatMap((WW => TW().isFunctionDeclaration(WW) && WW.name ? [WW.name.text] : []))),
+         mW = [];
+       for (const EW of iW.statements)
+         if (TW().isExpressionStatement(EW) && TW().isBinaryExpression(EW.expression) && EW.expression.operatorToken.kind === TW().SyntaxKind.EqualsToken && TW().isIdentifier(EW.expression.left) && OW.add(EW.expression.left.text), TW().isVariableStatement(EW))
+           for (const WW of EW.declarationList.declarations) {
+             const iW = WW.initializer;
+             iW && TW().isIdentifier(iW) && kO(iW.text) && !OW.has(iW.text) && mW.push({
+               from: iW.getStart(),
+               to: iW.getEnd(),
+               text: "function () {}"
+             }), iW && TW().isIdentifier(WW.name) && OW.add(WW.name.text)
```

#### 132. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2746-L2759` → after: `L2242-L2248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2242-L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2242-L2248) · [Before (L2746-L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2746-L2759)

```diff
-           if (3 === Je) throw new Ni(new Error("Can't raycast along a zero vector"));
-           if (4 === Je) return mH;
-           if (1 !== Je) return !1;
-           const oe = this.pickIo();
-           return ee.Qm[0] = oe[0], ee.Qm[1] = oe[1], ee.Qm[2] = oe[2], ee.bS[0] = oe[3], ee.bS[1] = oe[4], ee.bS[2] = oe[5], ee.kS[0] = oe[6], ee.kS[1] = oe[7], ee.kS[2] = oe[8], !0
-         }
-         return Ue.kq(), mH
-       }
-       table(ee) {
-         const ie = this.mirror.qR,
-           He = cH(ie);
-         let ye = this.tables.get(ee);
-         if (ye && ye.registryKey === He) return ye.index;
-         const be = LH(xH(ie), (He => {
+       return eO(WW, mW)
+     }
+ 
+     function tm(WW, iW) {
+       if (!WW.includes("api.setBlockRect(")) return WW;
+       const OW = Pm(WW);
+       if (OW.statements.some((WW => {
```

#### 133. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2761-L2770` → after: `L2250-L2261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR2250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L2250-L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L2250-L2261) · [Before (L2761-L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2761-L2770)

```diff
-           return ee ? ee(He) && (null === (ye = ie.FN(He)) || void 0 === ye || ye) : ie.cq(He)
-         }));
-         return be ? (ye ??= {
-           index: this.tables.size,
-           registryKey: He
-         }, this.mirror.xR.aq(ye.index, be.kinds, be.shapeOffsets, be.shapes, this.mirror.unloadedId), ye.registryKey = He, this.tables.set(ee, ye), ye.index) : -1
-       }
-       pickIo() {
-         return this.pickIoView ??= new this.mirror.wasm.WasmBufferView(Float64Array, this.mirror.xR.Zq(), 12), this.pickIoView.view()
-       }
+           return TW().isFunctionDeclaration(WW) && "fillBox" === (null === (iW = WW.name) || void 0 === iW ? void 0 : iW.text) && 3 !== WW.parameters.length
+         }))) return WW;
+       const mW = [],
+         EW = WW => {
+           var NW;
+           TW().isFunctionDeclaration(WW) && "fillBox" === (null === (NW = WW.name) || void 0 === NW ? void 0 : NW.text) || (aO(WW, OW) && "setBlockRect" === WW.expression.name.text && 3 === WW.arguments.length && !iW.includes(WW.getText()) && mW.push({
+             from: WW.expression.getStart(),
+             to: WW.expression.getEnd(),
+             text: "fillBox"
+           }), TW().forEachChild(WW, EW))
+         };
+       return EW(OW), eO(WW, mW)
```

#### 134. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2774-L2820` → after: `L5095-L5101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5095-L5101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5095-L5101) · [Before (L2774-L2820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2774-L2820)

```diff
-       return Number.isInteger(ee) && Math.abs(ee) <= 1073741823
-     }
-     class nH {
-       constructor() {
-         this.engine = null, this.offsets = new Float64Array(6), this.source = null, this.desyncVersion = -1, this.types = [], this.walkRects = [], this.cantRects = [], this.nonEmpty = !1, this.valid = !0, this.packedDesyncs = new WeakMap
-       }
-       setOffsets(ee, ie, He) {
-         if (!SH(ie[0]) || !SH(ie[1]) || !SH(ie[2])) return !1;
-         this.adopt(ee);
-         const ye = this.offsets;
-         return ye[0] === ie[0] && ye[1] === ie[1] && ye[2] === ie[2] && Object.is(ye[3], He[0]) && Object.is(ye[4], He[1]) && Object.is(ye[5], He[2]) || (ye[0] = ie[0], ye[1] = ie[1], ye[2] = ie[2], ye[3] = He[0], ye[4] = He[1], ye[5] = He[2], ee.Yk(ye[0], ye[1], ye[2], ye[3], ye … [truncated]
-       }
-       uploadOverrides(ee, ie) {
-         var He, ye, be, Me;
-         this.adopt(ee);
-         const Ke = null !== (He = null === (ye = ie.getDesyncedBlockCount) || void 0 === ye ? void 0 : ye.call(ie)) && void 0 !== He ? He : 0,
- ... (31 more removed lines; see GitHub link above)
+       const {
+         file: iW,
+         hasErrors: OW
+       } = KO(`(${WW})`), mW = iW.statements[0];
+       if (OW || 1 !== iW.statements.length || !mW || !TW().isExpressionStatement(mW)) return null;
+       const EW = mW.expression;
+       return TW().isParenthesizedExpression(EW) ? EW.expression : EW
```

#### 135. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2824-L2831` → after: `L5104-L5105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5104-L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5104-L5105) · [Before (L2824-L2831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2824-L2831)

```diff
-     function sH(ee, ie) {
-       if (6 * ee.length !== ie.length) return !1;
-       for (let He = 0; He < ee.length; He++) {
-         const ye = ee[He];
-         for (let ee = 0; ee < 6; ee++)
-           if (!Object.is(ye[ee], ie[6 * He + ee])) return !1
-       }
-       return !0
+     function Am(WW) {
+       return !!(TW().isNumericLiteral(WW) || TW().isStringLiteral(WW) || TW().isNoSubstitutionTemplateLiteral(WW)) || (WW.kind === TW().SyntaxKind.TrueKeyword || WW.kind === TW().SyntaxKind.FalseKeyword || WW.kind === TW().SyntaxKind.NullKeyword || (!TW().isPrefixUnaryExpression( … [truncated]
```

#### 136. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2834-L2837` → after: `L5108-L5109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5108-L5109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5108-L5109) · [Before (L2834-L2837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2834-L2837)

```diff
-     function IH(ee, ie) {
-       ie.length = 0;
-       for (const He of ee)
-         for (let ee = 0; ee < 6; ee++) ie.push(He[ee])
+     function bm(WW) {
+       return TW().isNumericLiteral(WW) || TW().isPrefixUnaryExpression(WW) && TW().isNumericLiteral(WW.operand)
```

#### 137. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2841` → after: `L5113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5113) · [Before (L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2841)

```diff
-       return ee === (0 | ee)
+       return TW().isStringLiteral(WW) || TW().isNoSubstitutionTemplateLiteral(WW) ? WW.text : null
```

#### 138. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2843-L2854` → after: `L5115-L5133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5115-L5133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5115-L5133) · [Before (L2843-L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2843-L2854)

```diff
-     class NH {
-       constructor(ee, ie, He, ye, be) {
-         var Me;
-         this.wasm = ee, this.qR = ie, this.options = He, this.label = ye, this.handling = be, this.xR = void 0, this.epochStartMs = performance.now(), this.epoch = -1, this.registryState = -1, this.unsupported = !1, this.broken = !1, this.xf = !1, this.picks = new lH(this), this. … [truncated]
-       }
-       static acquire(ee, ie, He, ye, be, Me) {
-         if (!ZH(He)) return null;
-         let Ke;
-         try {
-           Ke = ee()
-         } catch (Ue) {
-           return Qi(He, ye, Ue, `${be} mirror`, "creating it", Me), null
+     const Um = /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g;
+ 
+     function km(WW) {
+       const iW = WW.trim();
+       if ("" === iW) return [];
+       if (iW.startsWith("{")) try {
+         const WW = JSON.parse(iW);
+         if (WW && "object" === typeof WW && !Array.isArray(WW)) return Object.entries(WW).map((WW => {
+           let [iW, OW] = WW;
+           return [iW, JSON.stringify(OW)]
+         }))
+       } catch {}
+       const OW = function(WW) {
+         const iW = lm(WW);
+         if (!iW || !TW().isObjectLiteralExpression(iW)) return null;
+         const OW = [];
+ ... (3 more added lines; see GitHub link above)
```

#### 139. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2890-L2897` → after: `L5136-L5151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5136-L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5136-L5151) · [Before (L2890-L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2890-L2897)

```diff
-       }
-       forgetUnreadable() {
-         if (0 === this.unreadable.size) return;
-         const ee = [...this.unreadable.keys()];
-         this.unreadable.clear();
-         for (const ie of ee) {
-           const [ee, He, ye] = ie.split(",").map(Number);
-           this.forgetChunk(ee, He, ye)
+       }(iW.startsWith("{") ? iW : `{${iW}}`);
+       if (OW) return OW;
+       const mW = [];
+       let EW = null,
+         NW = 0;
+       const PW = iW.startsWith("{") ? iW.replace(/^\{/, "").replace(/\}\s*$/, "") : iW;
+       for (const ZW of PW.split("\n")) {
+         var LW, cW, wW, tW;
+         const WW = /\/\//.exec(ZW.replace(Um, (WW => " ".repeat(WW.length)))),
+           iW = (WW ? ZW.slice(0, WW.index) : ZW).trim();
+         if ("" === iW) continue;
+         if (EW && NW > 0) EW[1] += `\n${iW}`;
+         else {
+           const WW = /^["']?([A-Za-z_$][\w$]*)["']?\s*[:=]\s*(.*)$/.exec(iW.replace(/^[-*\u2022]\s*/, ""));
+           if (!WW) continue;
+           EW = [WW[1], WW[2]], mW.push(EW)
```

#### 140. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2900-L2929` → after: `L5156-L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5156-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5156-L5228) · [Before (L2900-L2929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2900-L2929)

```diff
-       tq(ee, ie) {
-         return this.picks.tq(ee, ie)
-       }
-       failed(ee, ie, He) {
-         this.broken = !0, Qi(this.wasm, He, ee, `${this.label} picks`, ie, this.handling)
-       }
-       RV(ee, ie, He, ye) {
-         this.usable() && this.xR.Aq(ee, ie, He, ye)
-       }
-       forgetChunk(ee, ie, He) {
-         this.usable() && this.xR.Tq(ee, ie, He)
-       }
-       forgetAll() {
-         this.usable() && this.xR.fq()
-       }
-       fillChunk(ee, ie, He, ye) {
- ... (14 more removed lines; see GitHub link above)
+       return mW.map((WW => {
+         let [iW, OW] = WW;
+         return [iW, OW.trim().replace(/[,;]\s*$/, "")]
+       }))
+     }
+ 
+     function sm(WW, iW, OW) {
+       const mW = "string" === WW.kind || "block" === WW.kind || "item" === WW.kind || "mob" === WW.kind;
+       let EW = lm(iW),
+         NW = iW;
+       var PW;
+       if (EW && Am(EW) || !mW || (PW = iW, NW = JSON.stringify(PW.replace(/^["'`]|["'`]$/g, "")), EW = lm(NW)), !EW || !Am(EW)) return {
+         problem: `${WW.key} must be a plain value like ${WW.value}, not ${iW}`
+       };
+       if ("number" === WW.kind && !bm(EW)) return {
+         problem: `${WW.key} must be a number, like ${WW.value}`
+ ... (57 more added lines; see GitHub link above)
```

#### 141. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2933-L2936` → after: `L5231-L5234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5231-L5234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5231-L5234) · [Before (L2933-L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2933-L2936)

```diff
-           resident: this.xR.Pq(),
-           known: this.xR.zq(),
-           slots: ee,
-           bytes: ee * OH * 2
+           value: cW,
+           ...wW.length > 0 ? {
+             fixed: wW.join(", ")
+           } : {}
```

#### 142. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2938-L2954` → after: `L5236-L5250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5236-L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5236-L5250) · [Before (L2938-L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2938-L2954)

```diff
-       }
-       epochNow() {
-         return Math.floor((performance.now() - this.epochStartMs) / 1e3)
-       }
-       syncRegistry() {
-         const ee = this.qR,
-           ie = cH(ee);
-         if (ie === this.registryState) return !this.unsupported;
-         this.registryState = ie;
-         const He = LH(xH(ee), (ie => ee.cq(ie)));
-         if (this.unsupported = null === He, He) {
-           const ie = new Uint8Array(He.kinds.length);
-           for (let He = 0; He < ie.length; He++) ie[He] = ee.xq[He] ? 1 : 0;
-           this.xR.Vq(He.kinds, He.shapeOffsets, He.shapes, ie);
-           const ye = new Uint8Array(He.kinds.length);
-           for (let He = 0; He < ye.length; He++) ye[He] = ee.Cq[He] ? 1 : 0;
- ... (1 more removed lines; see GitHub link above)
+       }(WW, EW, WW.names, OW);
+       if (mW) {
+         const iW = jm(EW);
+         if (null === iW) return {
+           problem: `${WW.key} must be text in quotes, like ${WW.value}`
+         };
+         if (("block" === WW.kind || "item" === WW.kind || "mob" === WW.kind) && OW) {
+           const mW = OW(WW.kind, iW);
+           if (null === mW) return {
+             problem: `"${iW}" isn't ${"item"===WW.kind?"an":"a"} ${WW.kind} name, so ${WW.key} kept ${WW.value}`
+           };
+           if (mW !== iW) return {
+             value: JSON.stringify(mW),
+             fixed: `"${iW}" is "${mW}"`
+           }
```

#### 143. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2958-L2964` → after: `L5253-L5254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5253-L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5253-L5254) · [Before (L2958-L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2958-L2964)

```diff
-       syncEpoch() {
-         if (this.options.xR) return;
-         const ee = this.epochNow();
-         ee !== this.epoch && (this.epoch = ee, this.xR.Yq(ee), this.xR.evict(this.options.maxResident, Math.max(0, ee - this.options.idleSeconds)))
-       }
-       dispose() {
-         this.xf || (this.xf = !0, this.options.xR || HH(this.wasm, this.xR))
+       return {
+         value: EW.getText()
```

#### 144. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2967-L2979` → after: `L5257-L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5257-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5257-L5273) · [Before (L2967-L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2967-L2979)

```diff
-     class GH extends NH {
-       constructor(ee, ie, He, ye) {
-         super(ee, He, {
-           unloadedId: 0,
-           picksSupplyAbsent: !1,
-           maxResident: 0,
-           idleSeconds: 0,
-           xR: ie
-         }, "client", ye)
-       }
-       supplyChunk() {
-         throw new Error("The client's chunk store missed a lookup, which it never should")
-       }
+     const Mm = Zm,
+       Km = new Map([
+         ["parkour", "parkour, obbies and races to a finish"],
+         ["pvp", "fighting other players: arenas, kills, last one standing"],
+         ["teams", "teams against each other"],
+         ["survival", "surviving mobs, zombies and waves"],
+         ["tag", "tag, infection, hide and seek: one side chases the other"],
+         ["economy", "coins, shops, upgrades and saved progress"],
+         ["rounds", "lobbies, countdowns and rounds that start and end"],
+         ["building", "building and changing blocks"],
+         ["world", "places, areas and random picks in the world"],
+         ["players", "players' items, health, scores and teleports"],
+         ["screen", "text on players' screens and announcements"]
+       ]);
+ 
+     function Sm(WW) {
+ ... (1 more added lines; see GitHub link above)
```

#### 145. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L2981-L3163` → after: `L5275-L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5275-L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5275-L5279) · [Before (L2981-L3163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L2981-L3163)

```diff
-     var rH = new Float64Array(0),
-       QH = new Float32Array(0);
-     class ey {
-       constructor(ee, ie) {
-         this._rows = ee, this._slot = ie, this._d = rH, this._f = QH, this._o64 = 0, this._o32 = 0, this._restingView = rH, this._velocityView = QH, this._forcesView = QH, this._impulsesView = QH, this._surfaceVelocityView = QH, this._box = null
-       }
-       _view() {
-         var ee = this._rows,
-           ie = this._slot,
-           He = ee.f64Rows(ie),
-           ye = ee.f32Rows(ie),
-           be = TH(ie),
-           Me = pH(ie);
-         this._d = He, this._f = ye, this._o64 = be, this._o32 = Me, this._restingView = He.subarray(be + yH, be + yH + 3), this._velocityView = ye.subarray(Me + 9, Me + 9 + 3), this._forcesView = ye.subarray(Me + KH, Me + KH + 3), this._impulsesView = ye.subarray(Me + UH, Me + UH … [truncated]
-         var Ke = this._box;
-         null !== Ke && (Ke.base = ye.subarray(Me + 0, Me + 0 + 3), Ke.max = ye.subarray(Me + 3, Me + 3 + 3), Ke.vec = ye.subarray(Me + 6, Me + 6 + 3))
- ... (167 more removed lines; see GitHub link above)
+ 
+     function Ym(WW) {
+       var iW;
+       const OW = Sm(WW);
+       return null !== (iW = Mm.find((WW => Sm(WW.name) === OW || Sm(WW.title) === OW))) && void 0 !== iW ? iW : null
```

#### 146. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3166-L3167` → after: `L5282-L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5282-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5282-L5284) · [Before (L3166-L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3166-L3167)

```diff
-     function iy(ee, ie) {
-       ee[0] = ie[0], ee[1] = ie[1], ee[2] = ie[2]
+     function ym(WW) {
+       var iW;
+       return null !== (iW = xm.find((iW => iW.name === WW))) && void 0 !== iW ? iW : null
```

#### 147. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3169-L3179` → after: `L5286-L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5286-L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5286-L5293) · [Before (L3169-L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3169-L3179)

```diff
-     var Hy = He(40461);
-     class yy {
-       constructor(ee, ie, He) {
-         this.physics = ee, this.d = ie, this.f = He
-       }
-       f64Rows() {
-         return this.d
-       }
-       f32Rows() {
-         return this.f
-       }
+ 
+     function Tm(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
+       const OW = function(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
+         return 0 === WW.length ? "" : `const CONFIG = {\n${WW.map((WW=>{var OW;return`\t${WW.key}: ${null!==(OW=iW.get(WW.key))&&void 0!==OW?OW:WW.value}, // ${WW.about}`})).join("\n")}\n}`
+       }(WW.settings, iW);
+       return `${""===OW?"":`${OW}\n\n`}${WW.code.trim()}\n`
```

#### 148. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3181-L3240` → after: `L5295-L5311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5295-L5311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5295-L5311) · [Before (L3181-L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3181-L3240)

```diff
-     class by extends ey {
-       constructor(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
-         super(ee, ie);
-         var Je = new Hy(He.base, He.vec),
-           oe = Je.base,
-           Re = Je.max,
-           ke = Je.vec;
-         this._box = Je, this._onCollide = Ue, this._onStep = null, this._testSolid = null, this._customSolid = !1, this._view();
-         var qe = this._d,
-           fe = this._o64;
-         qe[fe + 0] = ye, qe[fe + 1] = be, qe[fe + 2] = Me, qe[fe + 3] = Ke, qe[fe + 4] = -1, qe[fe + 5] = -1, qe[fe + 6] = -1, qe[fe + 7] = -1, qe[fe + 8] = 0, qe[fe + 9] = 10, qe[fe + yH] = 0, qe[fe + yH + 1] = 0, qe[fe + yH + 2] = 0, qe[fe + 13] = 0, qe[fe + bH] = 17 | (Fe ? 2  … [truncated]
-         var Te = this._f,
-           pe = this._o32;
-         Te.fill(0, pe, pe + 21);
-         for (var Xe = 0; Xe < 3; Xe++) Te[pe + 0 + Xe] = oe[Xe], Te[pe + 3 + Xe] = Re[Xe], Te[pe + 6 + Xe] = ke[Xe]
-       }
- ... (44 more removed lines; see GitHub link above)
+ 
+     function Jm(WW) {
+       const iW = [],
+         OW = new Set,
+         mW = WW => {
+           const EW = ym(WW);
+           if (EW && !OW.has(EW.group)) {
+             OW.add(EW.group);
+             for (const WW of null !== (NW = EW.uses) && void 0 !== NW ? NW : []) {
+               var NW;
+               mW(WW)
+             }
+             iW.push(EW)
+           }
+         };
+       for (const EW of WW) mW(EW);
+ ... (1 more added lines; see GitHub link above)
```

#### 149. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3242-L3289` → after: `L5313-L5340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5313-L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5313-L5340) · [Before (L3242-L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3242-L3289)

```diff
-     by.prototype.loadFromCopy = ui.prototype.loadFromCopy, by.prototype.loadStateFromCopy = ui.prototype.loadStateFromCopy, by.prototype.setPosition = ui.prototype.setPosition, by.prototype.pE = ui.prototype.pE, by.prototype.applyForce = ui.prototype.applyForce, by.prototype.appl … [truncated]
-     class My {
-       constructor(ee, ie) {
-         this.wasm = ee, this.physics = ie, this.handle = void 0, this.f64Pages = [], this.f32Pages = [], this.fresh = [], this.freed = [], this.freedHead = 0, this.slotOwners = [], this.releaseCount = 0, this.handle = new(ee.getBloxdWasm().ve)
-       }
-       get owners() {
-         return this.slotOwners
-       }
-       get releases() {
-         return this.releaseCount
-       }
-       setOwner(ee, ie) {
-         this.slotOwners[ee] = ie
-       }
-       clearOwner(ee) {
-         this.slotOwners[ee] = null
- ... (32 more removed lines; see GitHub link above)
+ 
+     function hm(WW, iW) {
+       const OW = WW => WW.replace(/\s+/g, ""),
+         mW = new RegExp(`function ${iW.name}\\s*\\([^)]*\\)\\s*\\{`).exec(WW);
+       return !!mW && OW(iW.code).includes(OW(WW.slice(mW.index, mW.index + 200)).slice(0, 60))
+     }
+ 
+     function Hm(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
+       if (!IO(WW)) return {
+         text: WW,
+         added: []
+       };
+       let OW = WW;
+       const mW = [];
+       for (let EW = 0; EW < 4; EW++) {
+ ... (12 more added lines; see GitHub link above)
```

#### 150. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3291` → after: `L5342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5342) · [Before (L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3291)

```diff
-         return this.slotOwners[ee] = Fe, Fe
+         if (!NW) break
```

#### 151. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3293-L3299` → after: `L5344-L5346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5344-L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5344-L5346) · [Before (L3293-L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3293-L3299)

```diff
-       detach(ee) {
-         if (!(ee instanceof by)) return;
-         const ie = ee.rowSlot(this);
-         ie >= 0 && (ee.detachRows(), this.release(ie))
-       }
-       dispose() {
-         HH(this.wasm, this.handle)
+       return {
+         text: OW,
+         added: [...new Set(mW)]
```

#### 152. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3302-L3315` → after: `L5349-L5354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5349-L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5349-L5354) · [Before (L3302-L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3302-L3315)

```diff
-     const Ky = new WeakMap;
-     const Uy = new Float64Array(0),
-       Fy = new Float32Array(0);
-     class Jy {
-       constructor() {
-         this.page = -1, this.d = Uy, this.f = Fy
-       }
-       at(ee, ie) {
-         const He = fH(ie);
-         He !== this.page && (this.page = He, this.d = ee.f64Rows(ie), this.f = ee.f32Rows(ie))
-       }
-       invalidate() {
-         this.page = -1
-       }
+ 
+     function nm(WW, iW) {
+       const OW = [...RO(iW.code)].filter((WW => "CONFIG" !== WW && !kO(WW)));
+       if (0 === OW.length) return WW.includes(iW.code.trim().slice(0, 80));
+       const mW = IO(WW) ? RO(WW) : new Set;
+       return 2 * OW.filter((WW => mW.has(WW))).length >= OW.length
```

#### 153. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3317-L3378` → after: `L5356-L5391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5356-L5391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5356-L5391) · [Before (L3317-L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3317-L3378)

```diff
-     class oy {
-       constructor(ee) {
-         this.physics = ee, this.store = null, this.bodies = [], this.slotOfBody = new Map, this.slots = [], this.isStaging = new Uint8Array(0), this.rollback = -1, this.rows = new Jy
-       }
-       get any() {
-         return this.bodies.length > 0
-       }
-       useStore(ee) {
-         ee !== this.store && (this.release(), this.store = ee), this.clear()
-       }
-       release() {
-         this.clear();
-         const ee = this.store;
-         if (ee) {
-           for (const ie of this.slots) ee.release(ie);
-           this.rollback >= 0 && ee.release(this.rollback)
- ... (46 more removed lines; see GitHub link above)
+ 
+     function um(WW) {
+       const iW = /^const CONFIG = \{\n([\s\S]*?)\n\}/m.exec(WW.code);
+       return iW ? iW[1].split("\n").flatMap((WW => {
+         const iW = /^\t(\w+): (.+?), \/\/ (.*)$/.exec(WW);
+         if (!iW) return [];
+         const [, OW, mW, EW] = iW;
+         return [{
+           key: OW,
+           kind: /^-?\d/.test(mW) ? "number" : "true" === mW || "false" === mW ? "boolean" : mW.startsWith("[") ? "list" : "string",
+           value: mW,
+           about: EW
+         }]
+       })) : []
+     }
+ 
+ ... (20 more added lines; see GitHub link above)
```

#### 154. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3380-L3411` → after: `L5393-L5425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5393-L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5393-L5425) · [Before (L3380-L3411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3380-L3411)

```diff
-             const Je = ye.Op,
-               oe = ye.JI,
-               Re = ye.pI,
-               ke = ye.surfaceVelocity;
-             if (!(Je instanceof Float32Array && oe instanceof Float32Array && Re instanceof Float32Array && ke instanceof Float32Array)) return !1;
-             const qe = ye.resting,
-               {
-                 XF: fe,
-                 friction: Te,
-                 restitution: pe,
-                 gravityMultiplier: Xe,
-                 eq: ze,
-                 fluidDrag: Be,
-                 fluidDragVert: Ee,
-                 fluidDragHoriz: ge,
-                 ratioInFluid: Oe,
- ... (16 more removed lines; see GitHub link above)
+             if (/^CONFIG\.\w+$/.test(cW.trim())) continue;
+             const wW = sm(iW, cW, OW);
+             "problem" in wW ? EW.push(wW.problem) : (mW.set(iW.key, wW.value), wW.fixed && NW.push(wW.fixed))
+           }
+           return {
+             values: mW,
+             problems: EW,
+             fixed: NW
+           }
+         }({
+           ...iW,
+           settings: [...iW.settings, ...EW]
+         }, OW, mW),
+         PW = EW.filter((WW => NW.values.has(WW.key))),
+         LW = qO(WW, Tm({
+           ...iW,
+ ... (17 more added lines; see GitHub link above)
```

#### 155. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3413-L3420` → after: `L5427-L5462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5427-L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5427-L5462) · [Before (L3413-L3420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3413-L3420)

```diff
-       encodeAfterHandler(ee, ie, He, ye) {
-         if (!this.any) return !0;
-         const be = this.store.owners,
-           Me = this.isStaging;
-         if (this.rows.invalidate(), ee >= 0 && Me[ee] && !this.encode(ee, be[ee])) return !1;
-         for (let Ke = He; Ke < ye; Ke++) {
-           const ee = ie[Ke];
-           if (Me[ee] && !this.encode(ee, be[ee])) return !1
+     }
+ 
+     function em(WW) {
+       return `- ${WW.name}: ${WW.summary}. Settings: ${WW.settings.map((WW=>WW.key)).join(", ")}`
+     }
+ 
+     function gm(WW) {
+       var iW;
+       const OW = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.trim().toLowerCase()) && void 0 !== iW ? iW : "",
+         mW = [...Km.keys()].find((WW => WW === OW)),
+         EW = mW ? Mm.filter((WW => WW.category === mW)) : Mm,
+         NW = mW ? xm.filter((WW => WW.category === mW)) : [];
+       return `${mW?`Prefabs for ${Km.get(mW)}:`:""===OW||"all"===OW?"Every prefab:":`There is no category ${WW}. Every prefab:`}\n${EW.length>0?EW.map(em).join("\n"):"(none yet)"}${NW.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${NW.map((W … [truncated]
+     }
+ 
+     function Dm(WW, iW) {
+ ... (20 more added lines; see GitHub link above)
```

#### 156. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3422-L3433` → after: `L5464-L5508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5464-L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5464-L5508) · [Before (L3422-L3433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3422-L3433)

```diff
-         return !0
-       }
-       decodeCommitted(ee, ie, He, ye, be) {
-         const Me = this.store,
-           Ke = this.rows;
-         if (Ke.invalidate(), this.any) {
-           const be = Me.owners,
-             Ue = this.isStaging;
-           ee >= 0 && Ue[ee] && (Ke.at(Me, ee), VH(Ke.d, Ke.f, ee, be[ee], this.physics));
-           for (let ee = He; ee < ye; ee++) {
-             const He = ie[ee];
-             Ue[He] && (Ke.at(Me, He), VH(Ke.d, Ke.f, He, be[He], this.physics))
+       })).filter((WW => WW.score > 0)).sort(((WW, iW) => iW.score - WW.score || WW.first - iW.first)).slice(0, iW).map((WW => WW.prefab))
+     }
+     const pm = /\byour\s+(?:real\s+|full\s+|first\s+|last\s+)?(?:name|age|school|address|email|phone|birthday)\b|\bhow old\b|\bwhere (?:do )?you live\b|\be-?mail\b|\bphone number\b|\bpassword\b/i;
+ 
+     function fm(WW) {
+       var iW, OW, mW, EW, NW, PW;
+       const LW = function(WW) {
+           var iW, OW;
+           const mW = null === (iW = WW.questions) || void 0 === iW ? void 0 : iW.trim();
+           if (null !== (OW = WW.question) && void 0 !== OW && OW.trim() || !mW) return WW;
+           const EW = {
+             ...WW,
+             question: mW
+           };
+           if (!/^[[{]/.test(mW)) return EW;
+           try {
+ ... (29 more added lines; see GitHub link above)
```

#### 157. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3435-L3436` → after: `L5510-L5518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5510-L5518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5510-L5518) · [Before (L3435-L3436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3435-L3436)

```diff
-         }
-         be >= 0 && be === this.rollback && (Ke.at(Me, be), VH(Ke.d, Ke.f, be, this.physics.rollbackBody, null))
+         }(WW),
+         cW = null !== (iW = null === (OW = LW.question) || void 0 === OW ? void 0 : OW.replace(/\s+/g, " ").trim()) && void 0 !== iW ? iW : "",
+         wW = (null !== (mW = LW.choices) && void 0 !== mW ? mW : "").includes("\n") ? (null !== (EW = LW.choices) && void 0 !== EW ? EW : "").split("\n") : (null !== (NW = LW.choices) && void 0 !== NW ? NW : "").split("|"),
+         tW = [...new Set(wW.map((WW => WW.replace(/^\s*(?:[-*\u2022]|\d+[.)])\s*/, "").trim())).filter(Boolean))].slice(0, 4),
+         ZW = "false" !== (null === (PW = LW.allow_other) || void 0 === PW ? void 0 : PW.trim().toLowerCase());
+       return "" === cW || pm.test(cW) || tW.length < 2 && !ZW ? null : {
+         question: cW,
+         choices: tW,
+         allowOther: ZW
```

#### 158. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3439-L3561` → after: `L5521-L5560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5521-L5560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5521-L5560) · [Before (L3439-L3561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3439-L3561)

```diff
-     const Ry = "has a body wasm can't take (a custom testSolid, a plain-array vector or a field that isn't a number)";
-     class ky {
-       constructor(ee, ie, He, ye, be) {
-         this.physics = ee, this.kind = ie, this.wasm = He, this.rollsBack = ye, this.hostStore = be, this.current = null, this.store = null, this.staging = void 0, this.listView = null, this.impactsView = null, this.resultView = null, this.listed = 0, this.listSynced = !1, this.l … [truncated]
-           const ie = this.ownSlot(ee);
-           return ie >= 0 ? ie : this.staging.vW(ee)
-         }, this.staging = new oy(ee)
-       }
-       get engine() {
-         return this.current
-       }
-       get bodyStore() {
-         return this.store
-       }
-       list() {
-         return this.listView.view()
- ... (107 more removed lines; see GitHub link above)
+     const Cm = /^\s*(?:\.\.\.|\u2026)\s*$/,
+       Xm = /\b(?:clear(?:s|ed|ing)?|(?:delet|remov|eras|wip)(?:e|es|ed|ing))\s+(?:out\s+)?(?:all\s+(?:of\s+)?(?:the\s+|your\s+)?(?:current\s+|existing\s+)?(?:code|world code|script)|everything|the\s+(?:whole|entire)\s+(?:file|code|script))(?:\s+(?:from|in)\s+(?:the|your|this)\s+( … [truncated]
+       Bm = /^[ \t]*(?:\/\/|\/\*)[ \t]*(?:(?:\.\.\.|\u2026)[ \t]*(?:\*\/)?[ \t]*$|(?:\.\.\.|\u2026)?[ \t]*(?:existing code|rest of (?:the |your )?(?:code|file)))/im;
+ 
+     function qm(WW, iW) {
+       if (Cm.test(WW)) return !0;
+       const OW = new Set(iW.split("\n").map((WW => WW.trim())));
+       return WW.split("\n").some((WW => Bm.test(WW) && !OW.has(WW.trim())))
+     }
+ 
+     function Rm(WW) {
+       return WW.split("\n").map((WW => WW.trim())).filter((WW => "" !== WW && !/^(?:\/\/|\/\*|\*)/.test(WW)))
+     }
+     const Gm = /```(?:js|javascript|ts|typescript)?\n([\s\S]*?)```/g,
+       Im = String.raw`on[A-Z]\w*|tick|playerCommand`,
+       am = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${Im})\s*\(|(?:${Im})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
+ ... (24 more added lines; see GitHub link above)
```

#### 159. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3564-L3743` → after: `L5563-L5565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5563-L5565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5563-L5565) · [Before (L3564-L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3564-L3743)

```diff
-     class qy {
-       constructor(ee, ie) {
-         var He, ye;
-         this.physics = ee, this.host = ie, this.bodies = void 0, this.impacts = new Float64Array(3), this.testSolid = void 0, this.testFluid = void 0, this.rollsBack = void 0, this.failedInTick = !1, this.stoppedMs = 0, this.stoppedRun = 0, this.lastStopAt = 0, this.lost = !1, th … [truncated]
-       }
-       YR(ee) {
-         this.host.stats.physicsTicks++;
-         const ie = !this.usable(),
-           He = ie ? this.offReason() : this.wasmTick(ee);
-         if (null === He) return this.stoppedMs = 0, void(this.stoppedRun = 0);
-         this.stop(He, ie, ee)
-       }
-       stop(ee, ie, He) {
-         const ye = this.host.kind;
-         if (this.host.stats.stoppedTicks++, this.host.failure.fatal) throw new Error(`wasm physics: ${ye} physics ${ee}, and it runs only in wasm here`);
-         if (ie) return this.bodies.release(), void this.lose(ee);
- ... (164 more removed lines; see GitHub link above)
+ 
+     function OE(WW) {
+       return WW.trim().replace(/^\.?\//, "")
```

#### 160. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3745-L3812` → after: `L5567-L5666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5567-L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5567-L5666) · [Before (L3745-L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3745-L3812)

```diff
-     class fy {
-       constructor(ee, ie, He) {
-         this.uk = ee, this.physics = ie, this.options = He, this.stats = {
-           physicsTicks: 0,
-           wasmTicks: 0,
-           wasmBodyTicks: 0,
-           stoppedTicks: 0,
-           missRounds: 0,
-           wasmPicks: 0,
-           jsPicks: 0,
-           wasmSweeps: 0,
-           wasmSteers: 0,
-           wasmLifts: 0,
-           staleChunks: 0,
-           wasmFailures: 0,
-           wasmMovementTicks: 0,
- ... (52 more removed lines; see GitHub link above)
+ 
+     function mE(WW) {
+       return WW.replace(zm, "function $1$2")
+     }
+ 
+     function EE(WW) {
+       return WW.replace(/\bif\s*\(\s*(\/\*(?:(?!\*\/)[^])*\*\/)\s*\)/g, "if (false $1)")
+     }
+ 
+     function NE(WW, iW, OW, mW) {
+       let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
+         NW = arguments.length > 5 ? arguments[5] : void 0,
+         PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "offer",
+         LW = arguments.length > 7 ? arguments[7] : void 0,
+         cW = arguments.length > 8 ? arguments[8] : void 0;
+       const wW = {
+ ... (84 more added lines; see GitHub link above)
```

#### 161. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3814-L3848` → after: `L5668-L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5668-L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5668-L5702) · [Before (L3814-L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3814-L3848)

```diff
-             return !0
-           },
-           store: () => this.bodyStore(),
-           failure: this.failure
-         }), this.store = this.makeStore()
-       }
-       get wasmReady() {
-         return this.driver.usable()
-       }
-       takeStatsDelta() {
-         const ee = {
-           physicsTicks: 0,
-           wasmTicks: 0,
-           wasmBodyTicks: 0,
-           stoppedTicks: 0,
-           missRounds: 0,
- ... (19 more removed lines; see GitHub link above)
+           }(null !== (EW = wW[WW]) && void 0 !== EW ? EW : "", iW, OW, cW);
+           return "error" in PW ? (lW("use_prefab", WW, "prefab", {
+             detail: PW.error
+           }), !1) : (wW[WW] = PW.text, tW.add(WW), CW.set(WW, {
+             prefab: PW.prefab,
+             settings: OW
+           }), VW(WW, null !== mW && void 0 !== mW ? mW : PW.prefab.title, PW.text), fW.push({
+             name: PW.prefab.name,
+             title: PW.prefab.title,
+             path: WW,
+             problems: PW.problems,
+             fixed: PW.fixed,
+             setup: null !== (NW = PW.prefab.setup) && void 0 !== NW ? NW : null
+           }), !0)
+         },
+         QW = (WW, iW, OW) => {
+ ... (19 more added lines; see GitHub link above)
```

#### 162. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3850-L3855` → after: `L5704-L5820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5704-L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5704-L5820) · [Before (L3850-L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3850-L3855)

```diff
-         for (const ye of Object.keys(ee)) ee[ye] = this.stats[ye] - this.reportedStats[ye], this.reportedStats[ye] = this.stats[ye];
-         const ie = performance.now(),
-           He = ie - this.reportedAt;
-         return this.reportedAt = ie, {
-           ...ee,
-           elapsedMs: He
+         const iW = ("replace_function" === bW.name || "insert_code" === bW.name) && void 0 === bW.args.code && void 0 !== bW.args.content ? {
+             ...bW,
+             args: {
+               ...bW.args,
+               code: bW.args.content,
+               path: null !== (ci = null !== (wi = null !== (ti = bW.args.path) && void 0 !== ti ? ti : NW) && void 0 !== wi ? wi : mW) && void 0 !== ci ? ci : void 0
+             }
+           } : bW,
+           {
+             path: EW,
+             content: PW,
+             search: LW,
+             replace: ZW,
+             code: jW
+           } = iW.args,
+           UW = Ti(iW.name),
+ ... (101 more added lines; see GitHub link above)
```

#### 163. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3858-L3868` → after: `L5823-L5835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5823-L5835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5823-L5835) · [Before (L3858-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3858-L3868)

```diff
-       YR(ee) {
-         this.driver.YR(ee)
-       }
-       mI(ee, ie, He, ye, be, Me) {
-         const Ke = this.bodyStore();
-         if (!Ke) return null;
-         let Ue;
-         try {
-           Ue = Ke.allocate()
-         } catch (Fe) {
-           return this.driver.onCallFailed(Fe, "adding a page of bodies", "the body is a plain RigidBody"), null
+       if (xW = void 0, AW = di(UO(AW), mi.length > 0), 0 === mi.length) {
+         var Ji, Hi;
+         const iW = [...WW.matchAll(Gm)],
+           OW = 1 === iW.length ? iW[0][1] : null,
+           EW = null !== (Ji = null !== NW && void 0 !== NW ? NW : mW) && void 0 !== Ji ? Ji : "index.js",
+           PW = null !== (Hi = wW[EW]) && void 0 !== Hi ? Hi : "";
+         if (null !== OW && rW(null, OW)) Oi(OW), AW = AW.replace(iW[0][0], "");
+         else if (null !== OW && Fm.test(OW) && !qm(OW, PW) && ! function(WW, iW) {
+             const OW = Rm(iW);
+             return OW.length >= 10 && 2 * vW(Rm(WW), OW) < OW.length
+           }(OW, PW)) {
+           const WW = wm(WE(OW));
+           sW(EW) && QW(EW, WW, void 0) || (wW[EW] = WW, tW.add(EW)), AW = AW.replace(iW[0][0], "")
```

#### 164. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3872` → after: `L5838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5838) · [Before (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3872)

```diff
-       zN(ee) {
+       for (const bW of tW) {
```

#### 165. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3874-L3882` → after: `L5840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5840) · [Before (L3874-L3882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3874-L3882)

```diff
-         null === (ie = this.store) || void 0 === ie || ie.detach(ee)
-       }
-       makeStore() {
-         if (!this.driver.usable() || !ZH(this.options.wasm)) return null;
-         let ee = null;
-         try {
-           const ie = new My(this.options.wasm, this.physics);
-           return ee = ie, this.physics.rollbackBody = Si(((ee, He, ye, be, Me, Ke, Ue) => ie.mI(ie.allocate(), ee, He, ye, be, Me, Ke, Ue))), ie
-         } catch (He) {
+         if (sW(bW)) {
```

#### 166. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3884` → after: `L5842-L5846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5842-L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5842-L5846) · [Before (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3884)

```diff
-           return this.driver.onCallFailed(He, "making the body store", "bodies are plain RigidBodies"), null === (ie = ee) || void 0 === ie || ie.dispose(), null
+           const WW = Object.values(wW).some((WW => /\brequire\s*\(/.test(WW)));
+           wW[bW] = tm(wm(WW ? wW[bW] : wW[bW].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (ui = OW[bW]) && void 0 !== ui ? ui : "");
+           const iW = new Set(Object.keys(wW).filter((WW => WW !== bW && sW(WW))).flatMap((WW => [...RO(wW[WW])]))),
+             mW = Hm(wW[bW], iW);
+           wW[bW] = mW.text, XW.push(...mW.added)
```

#### 167. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3887-L3905` → after: `L5851-L5854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5851-L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5851-L5854) · [Before (L3887-L3905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3887-L3905)

```diff
-       bodyStore() {
-         return this.driver.usable() ? this.store : null
-       }
-       tq(ee) {
-         return function(ee, ie, He) {
-           const {
-             test: ye,
-             offset: be
-           } = He;
-           return ee ? ye && !(0, si.d)(ye) ? uH(ie, He, "has a block test not marked markIdOnlyBlockTest") : !be || SH(be[0]) && SH(be[1]) && SH(be[2]) ? ee.tq(ie, He) : uH(ie, He, "has an offset that isn't whole cells") : uH(ie, He, "has no mirror")
-         }(this.getMirror(!1), this.stats, ee)
-       }
-       ZN(ee, ie, He) {
-         var ye;
-         const be = ee.base instanceof Float32Array && ee.max instanceof Float32Array ? this.driver.currentEngine() : null,
-           Me = be && null !== (ye = this.mirror) && void 0 !== ye && ye.usable() ? this.mirror : null;
- ... (3 more removed lines; see GitHub link above)
+       for (const bW of fW) {
+         const WW = bW.problems.length > 0 ? ` Kept as it was: ${bW.problems.join("; ")}.` : "",
+           iW = bW.fixed.length > 0 ? ` Names changed to real ones: ${bW.fixed.join(", ")}.` : "";
+         AW += `\n\nThis uses the ready-made ${bW.title}.${iW}${WW}${bW.setup?` ${bW.setup}`:""}`
```

#### 168. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3907-L3921` → after: `L5856-L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5856-L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5856-L5858) · [Before (L3907-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3907-L3921)

```diff
-       wasmSweep(ee, ie, He, ye) {
-         try {
-           if (!ie.beforePick() || !this.prepare(ee)) return null;
-           const {
-             base: be,
-             max: Me
-           } = He;
-           for (let He = 0; He < 64; He++) {
-             const He = ee.Kq(ie.xR, be[0], be[1], be[2], Me[0], Me[1], Me[2], ye[0], ye[1], ye[2]);
-             if (!Number.isNaN(He)) return He;
-             this.stats.missRounds++, ie.supplyMisses("load")
-           }
-           ie.xR.kq()
-         } catch (be) {
-           this.driver.onCallFailed(be, "a camera sweep", "it runs in JS")
+       for (const {
+           from: bW,
+           to: nW
```

#### 169. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3923-L3938` → after: `L5860-L5877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5860-L5877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5860-L5877) · [Before (L3923-L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3923-L3938)

```diff
-         return null
-       }
-       residency() {
-         var ee, ie;
-         return null !== (ee = null === (ie = this.mirror) || void 0 === ie ? void 0 : ie.residency()) && void 0 !== ee ? ee : null
-       }
-       prepare(ee) {
-         const ie = this.uk.yq;
-         return this.context.setOffsets(ee, ie, ie) && this.context.uploadOverrides(ee, this.uk.xR)
-       }
-       getMirror(ee) {
-         if (!this.options.wasm.isBloxdWasmReady()) return this.releaseMirror(), null;
-         if (this.mirror) {
-           const ie = this.mirror.usable();
-           if (ie || !ee) return ie ? this.mirror : null;
-           this.releaseMirror()
+         of HW) AW += `\n\nI renamed \`${bW}\` to \`${nW}\`, the name World Code calls.`;
+       const oi = [];
+       for (const bW of tW) {
+         var ei;
+         const WW = null !== (ei = OW[bW]) && void 0 !== ei ? ei : "";
+         if (wW[bW] !== WW) {
+           const iW = uW.get(bW);
+           oi.push(iW ? {
+             path: bW,
+             before: WW,
+             after: wW[bW],
+             why: iW,
+             parts: gW.get(bW)
+           } : {
+             path: bW,
+             before: WW,
+ ... (2 more added lines; see GitHub link above)
```

#### 170. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3943-L3944` → after: `L5880-L5895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5880-L5895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5880-L5895) · [Before (L3943-L3944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3943-L3944)

```diff
-       releaseMirror() {
-         this.mirror && (this.mirror.dispose(), this.mirror = null)
+       const vi = "direct" === PW && oi.length > 0,
+         gi = oi.length > 0 || JW.length > 0;
+       return {
+         text: AW.replace(/\n{3,}/g, "\n\n").trim(),
+         changes: oi,
+         failedEdits: ZW,
+         renamedCallbacks: HW,
+         worldCode: JW,
+         inPlace: vi,
+         actions: hW,
+         question: gi ? null : BW,
+         notes: RW,
+         plan: gi ? [] : GW,
+         lookups: gi ? yW.filter((WW => KW.has(SW(WW)))) : null !== BW || GW.length > 0 ? [] : yW,
+         prefabs: fW,
+         helpersAdded: [...new Set(XW)]
```

#### 171. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3947` → after: `L5898-L5936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5898-L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5898-L5936) · [Before (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3947)

```diff
-     var Ty = He(39197);
+ 
+     function PE(WW, iW) {
+       const OW = "" === WW ? [] : WW.replace(/\n$/, "").split("\n"),
+         mW = "" === iW ? [] : iW.replace(/\n$/, "").split("\n");
+       let EW = 0;
+       for (; EW < OW.length && EW < mW.length && OW[EW] === mW[EW];) EW++;
+       let NW = OW.length,
+         PW = mW.length;
+       for (; NW > EW && PW > EW && OW[NW - 1] === mW[PW - 1];) NW--, PW--;
+       const LW = OW.slice(EW, NW),
+         cW = mW.slice(EW, PW),
+         wW = Array.from({
+           length: LW.length + 1
+         }, (() => new Array(cW.length + 1).fill(0)));
+       for (let lW = LW.length - 1; lW >= 0; lW--)
+         for (let WW = cW.length - 1; WW >= 0; WW--) wW[lW][WW] = LW[lW] === cW[WW] ? wW[lW + 1][WW + 1] + 1 : Math.max(wW[lW + 1][WW], wW[lW][WW + 1]);
+ ... (23 more added lines; see GitHub link above)
```

#### 172. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3950-L3958` → after: `L5939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5939) · [Before (L3950-L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3950-L3958)

```diff
-       var ie;
-       return ee.isBloxdWasmReady() ? {
-         bindings: ee.getBloxdWasm(),
-         view: ee.wasmView,
-         BufferView: ee.WasmBufferView,
-         isReady: ee.isBloxdWasmReady,
-         markFailed: ee.markBloxdWasmFailed,
-         takeRefusedAllocation: null !== (ie = ee.takeBloxdWasmRefusedAllocation) && void 0 !== ie ? ie : () => 0
-       } : null
+       return LE.test(WW)
```

#### 173. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L3960-L4022` → after: `L5941-L5951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5941-L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5941-L5951) · [Before (L3960-L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L3960-L4022)

```diff
-     const Xy = 32768,
-       zy = [Xy, 3, 0, 1, 2, 4, 3, 0, 1, 1, 2, 4, 8, 16];
-     class By {
-       static create(ee, ie, He) {
-         var ye, be, Me;
-         const Ke = py(ee);
-         if (!Ke) return null;
-         const Ue = null !== (ye = null === (be = (Me = Ke.bindings).LR) || void 0 === be ? void 0 : be.call(Me)) && void 0 !== ye ? ye : [];
-         if (!(Ue.length === zy.length && zy.every(((ee, ie) => Ue[ie] === ee)))) throw new Error(`@bloxd/wasm's chunk ingest constants [${Array.from(Ue).join()}] are not [${zy.join()}]`);
-         return new By(Ke, new Ke.bindings.sy, ie, He)
-       }
-       constructor(ee, ie, He, ye) {
-         this.runtime = ee, this.handle = ie, this.qR = He, this.reportTrap = ye, this.lightU8 = void 0, this.lightU16 = void 0, this.registryState = -1, this.lightU8 = new ee.BufferView(Uint8Array, ie.Nq(!1), Xy), this.lightU16 = new ee.BufferView(Uint16Array, ie.Nq(!0), Xy)
-       }
-       decodeVoxels(ee, ie) {
-         return this.attempt((() => (this.syncRegistry(), Oy(this.handle.rq(ie.xR, ie.slot, ee)), this.scan(ie))))
- ... (47 more removed lines; see GitHub link above)
+     const wE = {
+       worldCode: new Set(["write_file", "edit_file", "replace_function", "use_prefab", "edit_code_in_place", "export_game", "ask_creator", "plan", "remember", "view_file", "view_chunk", "view_game_state", "get_docs", "find_names", "view_prefab", "view_errors"]),
+       codeBlock: new Set(["write_file", "edit_file", "replace_function", "add_world_code", "edit_code_in_place", "switch_to_world_code", "ask_creator", "view_world_code", "view_chunk", "view_game_state", "get_docs", "find_names", "view_errors"])
+     };
+ 
+     function tE(WW, iW, OW) {
+       return OO[WW].formatCall(iW, OW)
+     }
+ 
+     function ZE(WW, iW, OW, mW) {
+       return OO[OW].declareTools(WW, iW, mW)
```

#### 174. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4028-L4157` → after: `L5955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5955) · [Before (L4028-L4157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4028-L4157)

```diff
-       if (0 !== ee) throw new Ey(gy)
-     }
-     var dy = He(39205);
-     const Wy = [11, 0, 1, 2, 3, 4, 5, 6, 10, 0, 1, 2, 32768, 4 * dy.Y, dy.K, dy.C, dy.G, dy.z, dy.u, dy.M, dy.P, dy.v, dy.ab, dy.Z, dy.gb, dy.kb, dy.db, dy.s, dy.k, dy.n, dy.q, dy.T, dy.e, ...dy.X],
-       ty = new Int32Array(0);
-     class Zy {
-       static create(ee, ie, He) {
-         var ye, be, Me;
-         const Ke = py(ee);
-         if (!Ke) return null;
-         const Ue = null !== (ye = null === (be = (Me = Ke.bindings).Lo) || void 0 === be ? void 0 : be.call(Me)) && void 0 !== ye ? ye : [];
-         return Ue.length === Wy.length && Wy.every(((ee, ie) => Ue[ie] === ee)) ? new Zy(Ke, new Ke.bindings.LH, ie, He) : (console.error(`@bloxd/wasm's block edit constants [${Array.from(Ue).join()}] are not [${Wy.join()}], so blocks are set in JS`), null)
-       }
-       constructor(ee, ie, He, ye) {
-         this.runtime = ee, this.handle = ie, this.qR = He, this.RR = ye, this.header = void 0, this.journalPtr = void 0, this.sentProps = null, this.plainProps = null, this.hookedProps = null, this.busy = !1, this.startFailedAt = null, this.header = new ee.BufferView(Uint32Array, … [truncated]
-       }
- ... (114 more removed lines; see GitHub link above)
+       return OO[WW].callStyle
```

#### 175. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4161-L4162` → after: `L5959-L5966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5959-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5959-L5966) · [Before (L4161-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4161-L4162)

```diff
-       var ie = Math.sqrt(Math.max(1, ee / Ay));
-       return 100 * ie * Math.sqrt(ie)
+       const iW = null === WW.path ? WW.tool : `${WW.tool} ${WW.path}`;
+       var OW;
+       if ("prefab" === WW.reason) return `${iW}: ${null!==(OW=WW.detail)&&void 0!==OW?OW:"the prefab couldn't go in."} Nothing changed.`;
+       if ("missingArgs" === WW.reason) return `${iW}: the call was missing an argument it needs, so nothing changed.`;
+       if ("placeholder" === WW.reason) return "write_file" === WW.tool ? `${iW}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${iW}: the code had a line standing in for code left out ("// ... exi … [truncated]
+       if ("unread" === WW.reason) return `${iW}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==WW.path&&(0,bW.e)(WW.path)?"view_world_code":"view_file"} shows.`;
+       if ("brokenCode" === WW.reason) return `${iW}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
+       return `${iW}: search matched nothing in the file, so nothing changed. ${WW.closest?`The closest lines (${WW.closest.line}-${WW.closest.lastLine}) are:\n${WW.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${WW.functions.length>0?`, or use replace … [truncated]
```

#### 176. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4166` → after: `L5977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5977) · [Before (L4166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4166)

```diff
-       ee.pG = ee.WG = 0
+       return Object.values(WW).some((WW => "" !== WW.trim()))
```

#### 177. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4170-L4213` → after: `L5998-L6034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR5998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L5998-L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L5998-L6034) · [Before (L4170-L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4170-L4213)

```diff
-       return Math.abs(ee) > ye && Math.abs(ee / ie / He) > 4 ? Math.sign(ee) : 0
-     }
-     var my = {
-       mG: !1,
-       stopPropagation: !1,
-       lG: !1
-     };
-     const ly = {
-       forward: ["KeyW", "ArrowUp"],
-       backward: ["KeyS", "ArrowDown"],
-       left: ["KeyA", "ArrowLeft"],
-       right: ["KeyD", "ArrowRight"],
-       fire: "Mouse1",
-       "mid-fire": ["Mouse2"],
-       "alt-fire": ["Mouse3", "KeyE"],
-       jump: "Space",
- ... (28 more removed lines; see GitHub link above)
+       var EW, NW, PW, LW;
+       let {
+         hasWorldCodeFiles: cW,
+         hasLookedUp: wW,
+         movesToWorldCode: tW,
+         listedPrefabs: ZW,
+         guidesToPrefabs: xW,
+         callStyle: lW = xE(OW),
+         fencesCalls: AW = !1,
+         entryPath: jW = "index.js"
+       } = mW;
+       const kW = iW ? bW.d : jW,
+         sW = iW ? `${bW.j}index.js` : kW,
+         MW = (WW, iW) => tE(OW, WW, iW),
+         KW = iW => WW.some((WW => WW.name === iW)),
+         SW = WW.filter((WW => ["content", "replace", "code"].some((iW => iW in WW.inputSchema.properties)))),
+ ... (21 more added lines; see GitHub link above)
```

#### 178. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4216-L4238` → after: `L6038-L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6038-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6038-L6040) · [Before (L4216-L4238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4216-L4238)

```diff
-     var ny = He(39188),
-       jy = He(40461),
-       sy = He(352),
-       Iy = He(40464),
-       hy = He(9965).l;
-     class Ny extends ji {
-       YR(ee) {
-         ee /= 1e3;
-         var ie = cb(0, sy.squaredLength(this.gravity));
-         ! function(ee, ie, He, ye, be) {
-           var Me = ee._tickNext,
-             Ke = ee._tickEnd;
-           ee._tickNext = ie, ee._tickEnd = He;
-           try {
-             for (; ee._tickNext < ee._tickEnd;) {
-               var Ue = ee.bodies[ee._tickNext++];
- ... (7 more removed lines; see GitHub link above)
+ 
+     function TE(WW, iW, OW) {
+       return Object.keys(WW).filter((WW => !OW || !(0, bW.e)(WW))).sort(((WW, OW) => (OW === iW ? 1 : 0) - (WW === iW ? 1 : 0) || WW.localeCompare(OW)))
```

#### 179. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4248-L4249` → after: `L6043-L6046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6043-L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6043-L6046) · [Before (L4248-L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4248-L4249)

```diff
-     function bb(ee, ie) {
-       return ie * (1 - (1 - ee.ratioInFluid) ** 2)
+     function JE(WW, iW, OW) {
+       var mW;
+       const EW = TE(WW, iW, OW);
+       return null !== iW && EW.includes(iW) ? iW : null !== (mW = EW[0]) && void 0 !== mW ? mW : null
```

#### 180. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4253-L4357` → after: `L6049-L6050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6049-L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6049-L6050) · [Before (L4253-L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4253-L4357)

```diff
-     function Kb(ee, ie, He, ye) {
-       if (!ie.nS || ie.XF <= 0) {
-         var be = ie.Op;
-         be[0] = 0, be[1] = 0, be[2] = 0;
-         var Me = ie.JI;
-         Me[0] = 0, Me[1] = 0, Me[2] = 0;
-         var Ke = ie.pI;
-         return Ke[0] = 0, Ke[1] = 0, void(Ke[2] = 0)
-       }
-       var Ue = !!ee.hk,
-         Fe = (0, ny.c)(ie);
-       if (Ue && Fe && ee.rollbackBody.loadStateFromCopy(ie), Fe && function(ee, ie) {
-           if (!ee.yI) return;
-           var He = (0, ny.g)(BH(ee, ie), ee.yI, ie.Ak);
-           if (0 === He) return;
-           wb[1] = He, ie.Ak.translate(wb), ie.xI(), ie.Ik && ie.Ik()
- ... (89 more removed lines; see GitHub link above)
+     function hE(WW) {
+       return WW.includes("index.ts") ? "index.ts" : "index.js"
```

#### 181. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4361-L4374` → after: `L6053-L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6053-L6055) · [Before (L4361-L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4361-L4374)

```diff
-     function Fb(ee, ie, He, ye, be) {
-       var Me = He.resting[ie],
-         Ke = ye[ie];
-       if (!He.alwaysApplyHorizFriction || 1 !== ie) {
-         if (0 === Me) return;
-         if (Me * Ke <= 0) return
-       }
-       sy.copy(Jb, He.Op), Jb[ie] = 0;
-       var Ue = sy.length(Jb);
-       if (!cb(Ue, 0)) {
-         var Fe = Math.abs(He.friction * ee.gravity[ie] * be),
-           Je = Ue > Fe ? (Ue - Fe) / Ue : 0;
-         He.Op[(ie + 1) % 3] *= Je, He.Op[(ie + 2) % 3] *= Je
-       }
+     function HE(WW) {
+       const iW = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${hE(WW)}`;
+       return `Only ${iW} runs by itself: another file runs when ${iW} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${iW}.\n`
```

#### 182. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4380-L4381` → after: `L6058-L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6058-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6058-L6066) · [Before (L4380-L4381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4380-L4381)

```diff
-     function kb(ee, ie, He, ye) {
-       ob[ie] = He, ye[ie] = 0, Rb || (ye[0] = 0, ye[1] = 0, ye[2] = 0)
+     function nE(WW, iW) {
+       var OW;
+       const {
+         files: mW,
+         activePath: EW
+       } = WW, NW = !0 === WW.codeBlock, PW = TE(mW, EW, NW);
+       if (0 === PW.length || PW.every((WW => "" === mW[WW].trim()))) return NW ? "There is no code yet: the code block is empty." : PW.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
+       const LW = null !== (OW = JE(mW, EW, NW)) && void 0 !== OW ? OW : PW[0];
+       return `${PW.length>1?`Their files:\n${PW.map((WW=>{const iW=""===(OW=mW[WW])?0:OW.replace(/\n$/,"").split("\n").length;var OW;return`- ${WW}: ${1===iW?"1 line":`${iW} lines`}${WW===LW?" (open in the editor, its code below)":""}`})).join("\n")}\n${NW?"":HE(PW)}\n`:""}${func … [truncated]
```

#### 183. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4385-L4386` → after: `L6069-L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6069-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6069-L6131) · [Before (L4385-L4386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4385-L4386)

```diff
-     function fb() {
-       return qb = !0, !0
+     function uE(WW) {
+       var iW, OW, mW, EW, NW, PW;
+       return {
+         codeBlock: !0 === WW.codeBlock,
+         hasCode: "" !== (null !== (iW = WW.files[null !== (OW = WW.activePath) && void 0 !== OW ? OW : ""]) && void 0 !== iW ? iW : "").trim(),
+         hasBigFile: Object.values(WW.files).some((WW => WW.length > 6e3)),
+         wantsExport: cE(WW.request),
+         canAsk: !0 === WW.canAsk,
+         canRemember: !0 === (null === (mW = WW.about) || void 0 === mW ? void 0 : mW.canRemember),
+         isBigRequest: li(WW.request),
+         canLookUp: !0 === WW.canLookUp,
+         hasOtherFiles: Object.keys(WW.files).length > 1,
+         hasErrors: WW.errors.length > 0,
+         canChangeWorldCode: !0 === WW.canChangeWorldCode,
+         hasWorldCodeFiles: Object.keys(WW.files).some(bW.e),
+         addsToEntryFile: !0 === WW.addsToEntryFile,
+ ... (47 more added lines; see GitHub link above)
```

#### 184. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4389-L4409` → after: `L6134-L6142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6134-L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6134-L6142) · [Before (L4389-L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4389-L4409)

```diff
-     function Tb(ee, ie, He, ye) {
-       if (1 !== ie) return !0;
-       ye[ie] = 0
-     }
- 
-     function pb(ee, ie, He, ye, be, Me) {
-       be[0] = 0, be[1] = 0, be[2] = 0;
-       var Ke = BH(ee, ie);
-       ob = be, Rb = Me;
-       var Ue = Iy(Ke, He, ye, kb);
-       return ob = null, Ue
-     }
-     var Xb = new jy([], []),
-       zb = sy.create(),
-       Bb = sy.create(),
-       Eb = sy.create(),
- ... (5 more removed lines; see GitHub link above)
+     function eE(WW, iW) {
+       var OW, mW;
+       const EW = uE(WW),
+         NW = !0 === EW.canLookUp,
+         PW = (null !== (OW = null === (mW = WW.lookups) || void 0 === mW ? void 0 : mW.length) && void 0 !== OW ? OW : 0) > 0,
+         LW = !0 === EW.hasWorldCodeFiles,
+         cW = [EW.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", EW.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", NW ? "" : PW ? "You have looked things up as many times as you can: answer n … [truncated]
+       return cW.length > 0 ? `\n\nFor this request: ${cW.join(" ")}` : ""
+     }
```

#### 185. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4411-L4420` → after: `L6144-L6439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6144-L6439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6144-L6439) · [Before (L4411-L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4411-L4420)

```diff
-     function Zb(ee, ie, He, ye, be, Me, Ke) {
-       sy.set(Eb, 0, be, 0);
-       var Ue = Iy(ye, He, Eb, fb);
-       if (!(Ue <= 0)) {
-         sy.subtract(Ob, Bb, He.base), Ob[1] = 0, pb(ee, ie, He, Ob, zb, !0);
-         var Fe = cb(He.base[0], Bb[0]),
-           Je = cb(He.base[2], Bb[2]);
-         if ((!Me || Fe || Je && Ke) && (!Ke || Fe && Me || Je) && (sy.set(gb, 0, -Ue, 0), Iy(ye, He, gb, fb), function(ee, ie, He) {
-             return Vb(ee, ie, He.base[0] + 1e-5, He.base[1], He.base[2] + 1e-5) || Vb(ee, ie, He.max[0] - 1e-5, He.base[1], He.base[2] + 1e-5) || Vb(ee, ie, He.base[0] + 1e-5, He.base[1], He.max[2] - 1e-5) || Vb(ee, ie, He.max[0] - 1e-5, He.base[1], He.max[2] - 1e-5)
-           }(ee, ie, He))) return xb(ie.Ak, He), ie.resting[0] = zb[0], ie.resting[2] = zb[2], ie.Ik && ie.Ik(), !0
+     function vE(WW, iW) {
+       var OW, mW, EW, NW, PW, LW;
+       let cW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UE,
+         {
+           docsInTurn: wW = !1,
+           Yj: tW = !1
+         } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const ZW = "deepseek" === cW.format,
+         xW = Object.values(iW.files).join("\n"),
+         lW = iW.history.slice(-2).map((WW => WW.text)).join("\n"),
+         AW = `${iW.request}\n${lW}\n${iW.errors.join("\n")}`,
+         bW = !0 === iW.looksUpDocs,
+         jW = bW && !0 === iW.canLookUp ? [] : WW.find(AW, xW, 12),
+         UW = WW.matchItemAndBlockNames(AW, 12),
+         kW = !0 === iW.codeBlock,
+         sW = kW ? "myId" : "playerId",
+ ... (280 more added lines; see GitHub link above)
```

#### 186. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4423-L4427` → after: `L6443-L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6443-L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6443-L6447) · [Before (L4423-L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4423-L4427)

```diff
-     var wb = sy.create();
-     var Db = sy.create(),
-       Pb = new jy([], []),
-       Ab = sy.create();
-     var Yb = 1e-5;
+     const EN = 4e5;
+     var NN = OW(53658);
+     let PN = [],
+       LN = 0,
+       cN = null;
```

#### 187. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4429-L4437` → after: `L6449-L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6449-L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6449-L6450) · [Before (L4429-L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4429-L4437)

```diff
-     function Vb(ee, ie, He, ye, be) {
-       var Me = BH(ee, ie),
-         Ke = Math.floor(He),
-         Ue = Math.floor(be),
-         Fe = ye - Yb,
-         Je = Math.floor(Fe);
-       if (hy(Me(Ke, Je, Ue), He, Fe, be)) return !0;
-       var oe = Math.floor(ye) - 1;
-       return oe !== Je && hy(Me(Ke, oe, Ue), He, oe + 1 - Yb, be)
+     function wN(WW) {
+       return Math.ceil(WW.length / 4)
```

#### 188. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4441-L4442` → after: `L6453-L6454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6453-L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6453-L6454) · [Before (L4441-L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4441-L4442)

```diff
-     function cb(ee, ie) {
-       return Math.abs(ee - ie) < 1e-5
+     function tN(WW) {
+       return "number" === typeof WW && Number.isInteger(WW) && WW >= 0
```

#### 189. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4445-L4481` → after: `L6457-L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6457-L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6457-L6482) · [Before (L4445-L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4445-L4481)

```diff
-     function xb(ee, ie) {
-       for (var He = 0; He < 3; He++) ee.base[He] = ie.base[He], ee.max[He] = ie.max[He], ee.vec[He] = ie.vec[He]
-     }
-     var Lb = function(ee) {};
-     var Cb = {
-       gravity: [0, -10, 0],
-       eq: .1
-     };
-     class vb extends Ny {
-       constructor(ee, ie) {
-         ie = Object.assign({}, Cb, ie);
-         var He = ee.xR,
-           ye = ee.qR.xq,
-           be = ee.yq;
-         ie.yI = (0, si.k)(((ee, ie, ye) => !He.QG(ee + be[0], ie + be[1], ye + be[2])), "cell"), super(ie, ((ee, ie, ye) => He.Mq(ee + be[0], ie + be[1], ye + be[2])), ((ee, ie, Me) => {
-           var Ke = He.sG(ee + be[0], ie + be[1], Me + be[2]);
- ... (21 more removed lines; see GitHub link above)
+     function ZN(WW, iW, OW) {
+       var mW;
+       let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ! function(WW) {
+         if ("undefined" === typeof window) return;
+         if (PN.push(WW), PN.length >= 40) return void lN();
+         xN()
+       }(null !== (mW = function(WW) {
+         if (null === WW || "object" !== typeof WW) return null;
+         const {
+           prompt_tokens: iW,
+           completion_tokens: OW,
+           prompt_tokens_details: mW
+         } = WW;
+         if (!tN(iW) || !tN(OW)) return null;
+         const EW = null !== mW && "object" === typeof mW ? mW.cached_tokens : void 0;
+ ... (10 more added lines; see GitHub link above)
```

#### 190. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4489-L4490` → after: `L6485-L6502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6485-L6502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6485-L6502) · [Before (L4489-L4490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4489-L4490)

```diff
-     function jb() {
-       this.K9 = !1, this.J9 = !1, this.o9 = 1, this.W9 = 0, this.I9 = 10, this.N9 = 10, this.e_ = 0, this.i_ = .2
+     function xN() {
+       cN ??= setTimeout((() => {
+         lN()
+       }), 15e3)
+     }
+     async function lN() {
+       null !== cN && (clearTimeout(cN), cN = null);
+       const WW = PN.slice(0, 40);
+       PN = PN.slice(40), PN.length > 0 && (cN = setTimeout((() => {
+         lN()
+       }), 15e3));
+       const iW = LN;
+       if (LN = 0, 0 !== WW.length || 0 !== iW) try {
+         await (0, NN.postToGameServer)("/ai-helper/usage", {
+           calls: WW,
+           pastes: iW
+ ... (2 more added lines; see GitHub link above)
```

#### 191. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4492-L4552` → after: `L6504-L6507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6504-L6507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6504-L6507) · [Before (L4492-L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4492-L4552)

```diff
-     var sb = [ze().create(), ze().create(), ze().create()],
-       Ib = ze().create();
-     class hb {
-       constructor(ee, ie) {
-         ie = Object.assign({}, new jb, ie), this.uk = ee, this.I9 = +ie.I9, this.N9 = +ie.N9, this.K9 = !!ie.K9, this.J9 = !!ie.J9, this.o9 = ie.o9, this.W9 = ie.W9, this.heading = 0, this.pitch = 0, this.pR = 0, this.pp = ze().create(), this.y_ = this.uk.sE.b_(["position"]);
-         var He = .9 * ee.sE.M_(ee.gC).height;
-         ee.sE.uL(this.y_, "dW", {
-           Df: ee.gC,
-           offset: [0, He, 0]
-         }), this.U_ = ie.e_, this.i_ = ie.i_, this.F_ = ie.e_, this.nG = {
-           dx: 0,
-           dy: 0
-         }, this.J_ = null, this.targetX = 0, this.targetY = 0, this.cameraRotationOffset = [0, 0, 0], this.cameraPositionOffset = [0, 0, 0], this.o_ = new fM(this), this.R_ = ze().fi(0, 0, 1), this.k_ = ze().fi(0, 0, 1), this.qm = !1, this.q_ = {
-           bV: 0,
-           vy: 0,
-           pG: 0,
- ... (45 more removed lines; see GitHub link above)
+     const AN = 6e4;
+     const bN = new class {
+       constructor() {
+         this.calls = new Map, this.fullUntil = new Map
```

#### 192. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4554-L4555` → after: `L6509-L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6509-L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6509-L6511) · [Before (L4554-L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4554-L4555)

```diff
-       K3(ee, ie, He, ye) {
-         ee[4] = He, ee[5] = ye, ee[6] = ie, this.VV && this.VV(ee)
+       record(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         this.calls.set(WW, [...this.recent(WW, iW), iW])
```

#### 193. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4557-L4596` → after: `L6513-L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6513-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6513-L6517) · [Before (L4557-L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4557-L4596)

```diff
-       P_() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         var ie = {
-           dx: this.nG.dx,
-           dy: this.nG.dy
-         };
-         this.nG.dx = this.nG.dy = 0;
-         var He = NaN,
-           ye = NaN;
-         ee || (He = (ye = function() {
-           var ee = "undefined" !== typeof document && document.timeline ? document.timeline.currentTime : null;
-           return "number" === typeof ee ? ee : performance.now()
-         }()) - this.f_, this.f_ = ye);
-         var be = !ee && this.VV ? this.Q_(ye, He, ie) : null;
-         const Me = this.E_ ? this.E_() : 0,
-           Ke = this.A_ ? this.A_() : null,
- ... (24 more removed lines; see GitHub link above)
+       markFull(WW) {
+         var iW;
+         let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
+           mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.fullUntil.set(WW, Math.max(null !== (iW = this.fullUntil.get(WW)) && void 0 !== iW ? iW : 0, OW + Math.max(mW, AN)))
```

#### 194. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4598-L4602` → after: `L6519-L6521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6519-L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6519-L6521) · [Before (L4598-L4602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4598-L4602)

```diff
-       X3() {
-         ze().set(this.k_, 0, 0, 1);
-         var ee = this.k_,
-           ie = Ib;
-         iM(this, this.heading, this.pitch, 0 !== this.F_, this.R_), ze().gq(ee, ee, ie, this.pitch), ze().sq(ee, ee, ie, this.heading)
+       callsInLastMinute(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return this.recent(WW, iW).length
```

#### 195. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4604-L4611` → after: `L6523-L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6523-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6523-L6528) · [Before (L4604-L4611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4604-L4611)

```diff
-       B3(ee, ie, He, ye, be) {
-         if (ze().copy(be, ee), !(ye > 0)) return 0;
-         eM(this, be, ie);
-         var Me = iM(this, ie, He, !0, oM),
-           Ke = this.uk.bloxd.v_(this.uk.gC),
-           Ue = Qb(Gb(this, be, Me, ye * Ke + .5), Ke),
-           Fe = Math.min(ye, Ue);
-         return 0 === Fe ? (ze().copy(be, ee), 0) : (ze().ek(be, be, Me, -Fe * Ke), Fe)
+       freeAt(WW) {
+         var iW;
+         let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const mW = this.recent(WW, OW),
+           EW = mW.length < 2 ? OW : mW[mW.length - 2] + AN;
+         return Math.max(EW, null !== (iW = this.fullUntil.get(WW)) && void 0 !== iW ? iW : 0, OW)
```

#### 196. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4613-L4614` → after: `L6530-L6532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6530-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6530-L6532) · [Before (L4613-L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4613-L4614)

```diff
-       I3(ee, ie, He) {
-         return ze().ck(RM, ie), Gb(this, ee, RM, He)
+       firstFreeAt(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return Math.min(...WW.map((WW => this.freeAt(WW, iW))))
```

#### 197. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4616-L4618` → after: `L6534-L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6534-L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6534-L6535) · [Before (L4616-L4618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4616-L4618)

```diff
-       Q0(ee) {
-         const ie = (this.U_ - this.F_) * this.i_;
-         Math.abs(ie) < 1e-4 ? this.F_ = this.U_ : this.F_ += ie, 0 !== ie && this.J_ && this.J_(this.F_, this.F_ - ie), this.o_.update(ee)
+       clear() {
+         this.calls.clear(), this.fullUntil.clear()
```

#### 198. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4620-L4629` → after: `L6537-L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6537-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6537-L6539) · [Before (L4620-L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4620-L4629)

```diff
-       K8() {
-         var ee = Qb(Nb(this), this.uk.bloxd.v_(this.uk.gC));
-         this.F_ > ee && (this.F_ = ee);
-         var ie = this.uk.PR.W8().Z8;
-         if (ie[0] || ie[1]) {
-           var He = Math.max(HM(this) - .2, 0);
-           ie[1] > He && (ie[1] = He);
-           var ye = Math.max(yM(this) - .2, 0);
-           ie[0] > ye && (ie[0] = ye)
-         }
+       recent(WW, iW) {
+         var OW;
+         return (null !== (OW = this.calls.get(WW)) && void 0 !== OW ? OW : []).filter((WW => iW - WW < AN))
```

#### 199. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4631` → after: `L6541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6541) · [Before (L4631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4631)

```diff
-     }
+     };
```

#### 200. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4633-L4636` → after: `L6543-L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6543-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6543-L6544) · [Before (L4633-L4636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4633-L4636)

```diff
-     function Nb(ee) {
-       const ie = ee.uk.bloxd.v_(ee.uk.gC);
-       var He = Math.max(ee.U_, ee.F_) * ie + .5;
-       return Gb(ee, ee.Y_(), ee.r_(), He)
+     function jN(WW) {
+       return WW > 36e5
```

#### 201. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4639-L4644` → after: `L6547-L6550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6547-L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6547-L6550) · [Before (L4639-L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4639-L4644)

```diff
-     function Gb(ee, ie, He, ye) {
-       if (!KM) {
-         var be = ee.uk.yq;
-         KM = new(mb())([0, 0, 0], ze().clone(FM)), UM = (ie, He, ye) => ee.uk.xR.Mq(ie + be[0], He + be[1], ye + be[2]), ze().scale(FM, FM, -.5)
-       }
-       return KM.setPosition(ie), KM.translate(FM), ze().scale(JM, He, -ye), bM(ee)
+     function UN(WW, iW) {
+       var OW;
+       const mW = null === (OW = WW.headers.get(iW)) || void 0 === OW ? void 0 : OW.trim();
+       return void 0 !== mW && /^\d+$/.test(mW) ? Number(mW) : null
```
