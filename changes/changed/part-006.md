# Changed — Bundle Modifications Report (Part 006 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `6 / 82` (**266** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 005](part-005.md) · [Part 007 →](part-007.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/107.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/107.js` (417 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa)

#### 202. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4648-L4649` → after: `L6553-L6556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6553-L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6553-L6556) · [Before (L4648-L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4648-L4649)

```diff
-     function Qb(ee, ie) {
-       return Math.max(ee - rb, 0) / ie
+     function kN(WW) {
+       var iW;
+       const OW = null !== (iW = UN(WW, "retry-after")) && void 0 !== iW ? iW : UN(WW, "ratelimit-reset");
+       return null === OW ? null : 1e3 * OW
```

#### 203. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4652-L4654` → after: `L6559-L6562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6559-L6562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6559-L6562) · [Before (L4652-L4654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4652-L4654)

```diff
-     function eM(ee, ie, He) {
-       var ye = ee.cameraPositionOffset;
-       ie[0] += ye[0] * Math.cos(He) + ye[2] * Math.sin(He), ie[1] += ye[1], ie[2] += ye[0] * -Math.sin(He) + ye[2] * Math.cos(He)
+     function sN(WW, iW) {
+       var OW;
+       const mW = null !== (OW = kN(iW)) && void 0 !== OW ? OW : 0;
+       (429 === iW.status || jN(mW) && 0 === UN(iW, "ratelimit-remaining")) && bN.markFull(WW, Date.now(), mW)
```

#### 204. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4657-L4659` → after: `L6565-L6568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6565-L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6565-L6568) · [Before (L4657-L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4657-L4659)

```diff
-     function iM(ee, ie, He, ye, be) {
-       var Me = Ib;
-       return ze().set(be, 0, 0, 1), ze().gq(be, be, Me, ee.pp[0]), ze().sq(be, be, Me, ee.pp[1]), ze().Of(be, be, Me, ee.pp[2]), ze().gq(be, be, Me, He), ze().sq(be, be, Me, ie), ye && (ze().gq(be, be, Me, ee.cameraRotationOffset[0]), ze().sq(be, be, Me, ee.cameraRotationOffset[1 … [truncated]
+     function MN(WW) {
+       const iW = Date.now(),
+         OW = bN.freeAt(WW, iW) - iW;
+       return OW <= 0 ? null : jN(OW) ? "unavailable" : "busy"
```

#### 205. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4662-L4666` → after: `L6571-L6572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6571-L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6571-L6572) · [Before (L4662-L4666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4662-L4666)

```diff
-     function HM(ee) {
-       KM.setPosition(ee.L_()), KM.translate(FM);
-       var ie = Math.max(ee.targetY, ee.uk.PR.W8().Z8[1]) + .5,
-         He = ee.n_();
-       return ze().scale(JM, He, ie), bM(ee)
+     function KN(WW, iW) {
+       return `${function(WW){var iW;if("string"===typeof WW)return WW;if(429!==WW.status)return`http-${WW.status}`;if(jN(null!==(iW=kN(WW))&&void 0!==iW?iW:0))return"yearly-limit";const OW=UN(WW,"retry-after");return null===OW?"busy":`busy-ra${OW}`}(iW)}__${WW.replace(/[^A-Za-z0- … [truncated]
```

#### 206. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4669-L4675` → after: `L6627-L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6627-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6627-L6628) · [Before (L4669-L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4669-L4675)

```diff
-     function yM(ee) {
-       const ie = ee.L_(),
-         He = (0, nb.e)(ee.heading, ee.pitch - Math.PI / 2);
-       ze().ek(ie, ie, He, ee.uk.PR.W8().Z8[1]), KM.setPosition(ie), KM.translate(FM);
-       var ye = Math.max(ee.targetX, ee.uk.PR.W8().Z8[0]) + .5;
-       const be = (0, nb.e)(ee.heading + Math.PI / 2, 0);
-       return ze().scale(JM, be, ye), bM(ee)
+     function HN(WW) {
+       return [...JN, hN].find((iW => iW.name === WW))
```

#### 207. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4678-L4680` → after: `L6631-L6633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6631-L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6631-L6633) · [Before (L4678-L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4678-L4680)

```diff
-     function bM(ee) {
-       var ie = ee.uk.physics?.wasm;
-       return ie ? ie.ZN(KM, JM, MM) : MM()
+     function nN(WW) {
+       var iW, OW;
+       return null !== (iW = null === (OW = HN(WW)) || void 0 === OW ? void 0 : OW.callFormat) && void 0 !== iW ? iW : "simple"
```

#### 208. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4683-L4722` → after: `L6636-L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6636-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6636-L6640) · [Before (L4683-L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4683-L4722)

```diff
-     function MM() {
-       return Sb()(UM, KM, JM, kM, !0)
-     }
-     var KM, UM, FM = ze().fi(.2, .2, .2),
-       JM = ze().create(),
-       oM = ze().create(),
-       RM = ze().create(),
-       kM = () => !0;
-     var qM = Math.PI / 2 - .001;
-     class fM {
-       constructor(ee) {
-         this.U1 = ee, this.VR = 0, this.E1 = 0, this.Y1 = 0, this.i5 = 0, this.y5 = performance.now(), this.o5 = performance.now(), this.B5 = 0, this.Z5 = 0
-       }
-       add(ee) {
-         const ie = this.E1 - this.Y1,
-           He = this.U1.pitch + qM;
- ... (24 more removed lines; see GitHub link above)
+     function uN(WW) {
+       var iW;
+       return {
+         format: null !== (iW = WW.callFormat) && void 0 !== iW ? iW : "simple",
+         nativeTools: !0 === WW.nativeTools
```

#### 209. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4725-L4815` → after: `L6643-L6653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6643-L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6643-L6653) · [Before (L4725-L4815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4725-L4815)

```diff
-     var TM = He(38299),
-       pM = {
-         R6: ""
-       };
-     class XM {
-       constructor(ee, ie, He) {
-         ie = Object.assign({}, pM, ie), this.uk = ee, this.Z6 = ie.R6;
-         var ye = {},
-           be = [!1],
-           Me = [!1],
-           Ke = [null],
-           Ue = [!1],
-           Fe = [!1],
-           Je = [!1],
-           oe = [null],
-           Re = [null],
- ... (75 more removed lines; see GitHub link above)
+ 
+     function oN(WW, iW) {
+       return "function" === typeof WW ? WW(iW) : WW
+     }
+     const dN = "TOO_COMPLEX",
+       eN = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${dN} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       vN = 24e4,
+       gN = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
+     class DN extends Error {
+       constructor(WW) {
+         super(`World Code AI ${WW}`), this.reason = WW
```

#### 210. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4819-L4822` → after: `L6657-L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6657-L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6657-L6663) · [Before (L4819-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4819-L4822)

```diff
-     function zM(ee, ie, He, ye) {
-       if (!He) return 0;
-       var be = ie[He];
-       return void 0 === be && ye && (be = ee.iee(He, {})), be
+     function VN(WW, iW) {
+       var OW, mW, EW, NW, PW;
+       const LW = WW[null !== (OW = iW.index) && void 0 !== OW ? OW : 0] ??= {
+         name: "",
+         args: ""
+       };
+       LW.name += null !== (mW = null === (EW = iW.function) || void 0 === EW ? void 0 : EW.name) && void 0 !== mW ? mW : "", LW.args += null !== (NW = null === (PW = iW.function) || void 0 === PW ? void 0 : PW.arguments) && void 0 !== NW ? NW : ""
```

#### 211. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4825-L4826` → after: `L6666-L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6666-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6666-L6667) · [Before (L4825-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4825-L4826)

```diff
-     function BM(ee) {
-       this.onLoad = ee.onLoad || null, this.sZ = ee.sZ || null, this.Gw = ee.Gw || null, this.Iw = ee.Iw || null, this.eZ = ee.eZ || null
+     function pN(WW) {
+       return "mcp" === WW ? "simple" : WW
```

#### 212. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4829-L4831` → after: `L6670-L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6670-L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6670-L6672) · [Before (L4829-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4829-L4831)

```diff
-     function EM() {
-       let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       this.solid = !ee, this.Bp = null, this.opaque = !ee, this.Lq = !1, this.material = null, this.A4 = null, this.iq = 1, this.R7 = .5, this.onLoad = null, this.sZ = null, this.Gw = null, this.Iw = null, this.eZ = null, this.mf = null, this.Ep = null, this.lf = null, this.Hx =  … [truncated]
+     function fN(WW, iW, OW, mW) {
+       let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return CN(WW, iW, OW, pN(mW), EW).answer
```

#### 213. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4834-L4835` → after: `L6675-L6722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6675-L6722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6675-L6722) · [Before (L4834-L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4834-L4835)

```diff
-     function gM() {
-       this.color = null, this.yee = !0, this.K4 = [], this.o4 = !1, this.f4 = -1, this.O4 = null, this.W4 = null, this.Mee = null, this.gp = null
+     function CN(WW, iW, OW, mW, EW) {
+       const NW = OW.flatMap((WW => {
+         const iW = AO(WW.name, WW.args);
+         return null === iW ? [] : [tE(NO(mW), iW.name, iW.args)]
+       }));
+       let PW = !1;
+       return 0 !== NW.length || 0 !== jO(WW, mW).length || WW.includes("```") || (NW.push(...EW ? [] : function(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const mW = new Map;
+         for (const LW of bO(WW, iW)) {
+           const WW = Object.values(LW.args).some((WW => void 0 !== WW && OW.includes(WW.trim())));
+           var EW, NW, PW;
+           "export_game" === LW.name || "switch_to_world_code" === LW.name || yi(LW.name) || WW || mW.set(`${LW.name} ${null!==(EW=LW.args.path)&&void 0!==EW?EW:""} ${null!==(NW=LW.args.search)&&void 0!==NW?NW:""} ${null!==(PW=LW.args.name)&&void 0!==PW?PW:""}`, LW.source)
+         }
+         return [...new Set(mW.values())]
+       }(iW, mW, SE)), PW = NW.length > 0), {
+ ... (32 more added lines; see GitHub link above)
```

#### 214. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4842-L4856` → after: `L6725-L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6725-L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6725-L6733) · [Before (L4842-L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4842-L4856)

```diff
-     function tM(ee, ie) {
-       this.uk = ee, this.mesh = ie;
-       var He = ie.Nf();
-       this.zee = !0 === He.Eee && !!ee.Zf, this.zee && (0, dM.i)(ie), this.Wee = He.Zee?.(ie, this.zee ? DM : wM) ?? null, this.buffer = null, this.wee = null, this.Dee = null, this.Aee = ee.sT.Aee, this.oV = !1, this.Yee = null, this.Vee = null, this.aee = 0, this.zp = null, thi … [truncated]
-         function(ee, ie) {
-           var He = ee.material,
-             ye = [];
-           if (He.gie && Array.isArray(He.gie))
-             for (var be = 0; be < He.gie.length; be++) He.gie[be] && ye.push(He.gie[be]);
-           else ye.push(He);
-           for (be = 0; be < ye.length; be++) {
-             var Me = ye[be];
-             LM.has(Me) || ((0, dM.b)(Me, ie), LM.add(Me))
-           }
-         }(this.mesh, ee.PR), this.uk.PR.dL(this.mesh), this.uk.emit("addingTerrainMesh", this.mesh)
+     function BN(WW) {
+       return WW.map((WW => ({
+         type: "function",
+         function: {
+           name: WW.name,
+           description: WW.description,
+           parameters: WW.inputSchema
+         }
+       })))
```

#### 215. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4859-L4879` → after: `L6736-L6803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6736-L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6736-L6803) · [Before (L4859-L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4859-L4879)

```diff
-     function ZM(ee, ie, He) {
-       return (null === ie || ie.data.length < 2 * ee.aee) && (ie = {
-         data: new Uint32Array(Math.max(16, 4 * ee.aee)),
-         count: 0
-       }), ie.count = (0, WM.I)(ee.Yee, ee.Vee, ee.aee, He, WM.f, ie.data), ie
-     }
-     tM.prototype.dispose = function() {
-       this.xf || (this.Aee.Qee.delete(this), (0, WM.E)(this.mesh, null), this.oV && (0, WM.C)(this.mesh, void 0), this.oV = !1, this.mesh.Hie = 0, this.yie(0), this.uk.emit("removingTerrainMesh", this.mesh), this.uk.PR.bie(this.mesh, !1), this.mesh = null, this.nee = null, this.j … [truncated]
-     }, tM.prototype.Uie = function(ee, ie, He, ye, be, Me, Ke) {
-       ! function(ee) {
-         if (ee.count < ee.bk) return;
-         var ie = Math.max(8, 2 * ee.bk);
-         ee.yie(ie)
-       }(this);
-       var Ue = this.count << 4;
-       this.jee[this.count] = ie, this.nee.set(ie, Ue);
- ... (5 more removed lines; see GitHub link above)
+     function qN(WW) {
+       return "object" === typeof WW
+     }
+     async function RN(WW, iW, OW, mW) {
+       let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const NW = MN(WW.name);
+       if (null !== NW) return NW;
+       bN.record(WW.name);
+       const PW = await fetch(qE, {
+         method: "POST",
+         headers: {
+           "Content-Type": "application/json"
+         },
+         body: JSON.stringify({
+           model: WW.name,
+           messages: iW,
+ ... (52 more added lines; see GitHub link above)
```

#### 216. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4881-L4896` → after: `L6805-L6822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6805-L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6805-L6822) · [Before (L4881-L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4881-L4896)

```diff
-       this.count++, this.yT = !0
-     }, tM.prototype.Xee = function(ee, ie) {
-       return this.zee ? (ie | this.uk.qR.KT[ee] << 16) >>> 0 : ie
-     }, tM.prototype.Jie = function(ee, ie) {
-       var He = this.nee.get(ie);
-       if (!(He >= 0)) throw "tried to remove object instance not in storage";
-       this.nee.delete(ie);
-       var ye = He >> 4,
-         be = this.count - 1;
-       if (ye !== be) {
-         var Me = be << 4;
-         ! function(ee, ie, He, ye) {
-           for (var be = 0; be < 16; be++) He[ye + be] = ee[ie + be]
-         }(this.buffer, Me, this.buffer, He), this.wee[ye] = this.wee[be], this.oV && (this.Dee[ye] = this.Dee[be]);
-         var Ke = this.jee[be];
-         this.nee.set(Ke, He), this.jee[ye] = Ke
+       const AW = GN(WW, cW, wW, tW, ZW, xW);
+       return null === AW ? (SN.wZ(WW.name, "empty"), "failed") : AW
+     }
+ 
+     function GN(WW, iW, OW, mW, EW) {
+       var NW;
+       let PW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         LW = iW;
+       var cW;
+       WW.nativeTools && PW && (LW = null !== (cW = TN(LW)) && void 0 !== cW ? cW : LW);
+       LW = LW.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const wW = CN(LW, OW, mW, null !== (NW = WW.callFormat) && void 0 !== NW ? NW : "simple", EW);
+       return "" === wW.answer ? null : {
+         model: WW.name,
+         answer: wW.answer,
+         reasoning: OW,
+ ... (2 more added lines; see GitHub link above)
```

#### 217. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4898-L4919` → after: `L6824-L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6824-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6824-L6878) · [Before (L4898-L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4898-L4919)

```diff
-       this.count--, this.yT = !0,
-         function(ee) {
-           if (ee.count > .4 * ee.bk) return;
-           if (ee.bk < 100) return;
-           ee.yie(Math.round(ee.bk / 2)), ee.jee.length = Math.min(ee.jee.length, ee.bk)
-         }(this)
-     }, tM.prototype.oie = function() {
-       var ee;
-       this.yT ? (this.oV && (8 * xM(ee = this) > VM.length && (function(ee) {
-         for (var ie = ee.count, He = ee.Dee, ye = 0; ye < ie; ye++) PM[He[ye]]++;
-         aM = ee.Aee.keys, VM.sort(cM), aM = null;
-         for (var be = 0, Me = 0; Me < VM.length; Me++) {
-           var Ke = PM[VM[Me]];
-           PM[VM[Me]] = be, be += Ke
-         }
-         for (var Ue = ee.buffer.slice(0, ie << 4), Fe = ee.wee.slice(0, ie), Je = He.slice(0, ie), oe = ee.jee.slice(0, ie), Re = 0; Re < ie; Re++) {
- ... (6 more removed lines; see GitHub link above)
+     }
+ 
+     function IN(WW) {
+       return WW.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
+     }
+ 
+     function aN(WW) {
+       return qN(WW) && !WW.isCutShort
+     }
+     async function rN(WW, iW, OW, mW, EW) {
+       const NW = WW.map((() => new AbortController)),
+         PW = () => {
+           for (const WW of NW) WW.abort()
+         };
+       null !== OW && void 0 !== OW && OW.aborted && PW(), null === OW || void 0 === OW || OW.addEventListener("abort", PW, {
+         once: !0
+ ... (39 more added lines; see GitHub link above)
```

#### 218. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4922-L4947` → after: `L6881-L6895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6881-L6895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6881-L6895) · [Before (L4922-L4947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4922-L4947)

```diff
-         for (var Xe = 0; Xe < VM.length; Xe++) PM[VM[Xe]] = 0
-       }(ee), xM(ee)), (0, WM.E)(this.mesh, null), this.cee = !1, null !== this.Lee && (this.Cee = this.Lee, this.Lee = null, (0, WM.C)(this.mesh, null)), this.uee = !0), this.mesh.Hie = this.count, this.Wee ? (this.Wee.Rie(this.count), this.Wee.kie()) : (this.mesh.qie("matrix"),  … [truncated]
-     }, tM.prototype.fie = function(ee, ie, He) {
-       if (0 !== this.aee && ((0, WM.r)() ? (this.zp = ZM(this, this.zp, ee), this.cee = this.zp.count >= 0, (0, WM.E)(this.mesh, this.cee ? this.zp : null)) : this.cee && (this.cee = !1, (0, WM.E)(this.mesh, null)), He || this.uee)) {
-         this.uee = !1;
-         var ye = ZM(this, this.Cee, ie),
-           be = this.Lee;
-         ye.count < 0 ? (this.Cee = ye, null !== be && (this.Lee = null, (0, WM.C)(this.mesh, null))) : null !== be && function(ee, ie) {
-           if (ee.count !== ie.count) return !1;
-           for (var He = 0; He < 2 * ee.count; He++)
-             if (ee.data[He] !== ie.data[He]) return !1;
-           return !0
-         }(be, ye) ? this.Cee = ye : (this.Cee = be, this.Lee = ye, (0, WM.C)(this.mesh, ye))
-       }
-     }, tM.prototype.yie = function() {
-       let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4;
- ... (10 more removed lines; see GitHub link above)
+       };
+       try {
+         for (;;) {
+           if (null !== OW && void 0 !== OW && OW.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const WW = xW();
+           if (WW) {
+             const iW = LW.filter((WW => "string" === typeof WW));
+             return {
+               reply: WW.reply,
+               failures: iW
+             }
+           }
+           await new Promise((WW => {
+             ZW = WW
+           }))
```

#### 219. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4949-L4951` → after: `L6897-L6942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6897-L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6897-L6942) · [Before (L4949-L4951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4949-L4951)

```diff
-         if (this.wee = be, this.oV) {
-           var Ke = new Uint16Array(this.bk);
-           this.Dee && Ke.set(this.Dee.subarray(0, Math.min(this.Dee.length, Ke.length))), this.Dee = Ke
+       } finally {
+         null === OW || void 0 === OW || OW.removeEventListener("abort", PW), PW()
+       }
+     }
+ 
+     function zN() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       const iW = bN.firstFreeAt(JN.map((WW => WW.name)), WW);
+       return jN(iW - WW) ? WW : iW
+     }
+     async function FN(WW) {
+       var iW;
+       let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const mW = Date.now(),
+         EW = null !== (iW = OW.models) && void 0 !== iW ? iW : JN,
+         NW = void 0 === OW.models ? function(WW, iW) {
+ ... (30 more added lines; see GitHub link above)
```

#### 220. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4954-L4975` → after: `L6946-L6947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6946-L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6946-L6947) · [Before (L4954-L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4954-L4975)

```diff
-       const Ue = !1;
-       this.Wee && 0 === ee ? this.Wee.release() : this.Wee ? this.Wee.attach(this.buffer, this.wee) : (this.mesh.Bie("matrix", this.buffer, 16, Ue), this.mesh.Bie("aPackedLightLevels", this.wee, 1, Ue)), this.oie()
-     };
-     var wM = [{
-         name: "aPackedLightLevels",
-         offset: 0,
-         size: 1
-       }],
-       DM = [{
-         name: "aPackedLightLevels",
-         offset: 0,
-         size: 1,
-         type: 5125
-       }],
-       PM = new Uint32Array(WM.b),
-       AM = new Uint32Array(WM.b),
- ... (6 more removed lines; see GitHub link above)
+       const LW = gN.find((WW => PW.includes(WW)));
+       throw new DN(null !== LW && void 0 !== LW ? LW : "failed")
```

#### 221. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4978-L4994` → after: `L6951-L6953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6951-L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6951-L6953) · [Before (L4978-L4994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4978-L4994)

```diff
-     function xM(ee) {
-       var ie = ee.count,
-         He = ee.Dee,
-         ye = ee.Aee.keys;
-       if (null === ee.Yee || ee.Yee.length < ie) {
-         var be = Math.max(8, ee.bk);
-         ee.Yee = new Uint16Array(be), ee.Vee = new Uint32Array(be)
-       }
-       var Me = ee.Yee,
-         Ke = ee.Vee,
-         Ue = ++YM;
-       VM.length = 0;
-       for (var Fe = 0, Je = 0, oe = -1 / 0, Re = 0; Re < ie; Re++) {
-         var ke = He[Re];
-         Fe > 0 && Me[Fe - 1] === ke ? Ke[Fe - 1] = Re + 1 : (AM[ke] === Ue ? Je++ : (AM[ke] = Ue, VM.push(ke), ye[ke] < oe ? Je++ : oe = ye[ke]), Me[Fe] = ke, Ke[Fe] = Re + 1, Fe++)
-       }
- ... (1 more removed lines; see GitHub link above)
+     function WP(WW) {
+       const iW = WW.trim();
+       return iW.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(iW) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(iW) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
```

#### 222. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L4996-L5140` → after: `L6955-L6976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6955-L6976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6955-L6976) · [Before (L4996-L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L4996-L5140)

```diff
-     var LM = new WeakSet;
-     var CM = He(38321),
-       vM = {
-         matrix: new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
-         offset: new Float64Array([.5, .5, .5]),
-         Kie: null
-       };
- 
-     function uM(ee) {
-       this.TE = (0, Be.r)(ee.PR, "objectMeshRoot");
-       var ie = [0, 0, 0],
-         He = !1,
-         ye = {
-           position: new Ne.rf,
-           rotation: new Ne.rf,
-           wR: new Ne.rf
- ... (129 more removed lines; see GitHub link above)
+     async function iP(WW, iW, OW, mW, EW, NW) {
+       var PW;
+       let LW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : vN;
+       if (! function(WW, iW) {
+           return !WW.isCutShort && WP(WW.answer) && !WW.answer.includes("?") && 0 === jO(WW.answer, iW).length
+         }(OW, null !== (PW = WW.callFormat) && void 0 !== PW ? PW : "simple")) return OW;
+       const cW = [...iW, {
+           role: "assistant",
+           content: OW.answer
+         }, {
+           role: "user",
+           content: QN
+         }],
+         wW = (0, kW.d)(LW, mW);
+       try {
+         const iW = await RN(WW, cW, wW.signal, EW, NW);
+ ... (6 more added lines; see GitHub link above)
```

#### 223. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5143-L5215` → after: `L6979-L7003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR6979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L6979-L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L6979-L7003) · [Before (L5143-L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5143-L5215)

```diff
-     var mM = () => {},
-       lM = He(38220),
-       SM = He(38154),
-       nM = He(38314);
-     var jM = He(38648),
-       sM = He(7276),
-       IM = He(39546),
-       hM = He(39549);
-     const NM = /-sp\d+(?:-|$)/;
-     const GM = /^terrain-.*?(-lit)?-dir\d+(?:-packed)?-sp(\d+)(-liquid)?$/,
-       rM = /^standard-sp(\d+)$/;
-     const QM = [0, 0, 0];
-     class eK {
-       constructor(ee, ie) {
-         this.uk = ee, this.options = ie, this.mode = "off", this.defines = new Map(sM.d.map((ee => [ee, 0])))
-       }
- ... (57 more removed lines; see GitHub link above)
+ 
+     function OP(WW) {
+       const iW = IN(WW);
+       return /too_complex/i.test(iW) || /^\W*too[\s_-]*complex\W*$/i.test(iW.trim())
+     }
+ 
+     function mP(WW) {
+       const iW = IN(WW).trim();
+       return iW.length > 19 && !/^\W*too[\s_-]*complex/i.test(iW)
+     }
+ 
+     function EP(WW) {
+       return WW.map(((WW, iW) => 0 === iW && "system" === WW.role ? {
+         ...WW,
+         content: WW.content + eN
+       } : WW))
+ ... (9 more added lines; see GitHub link above)
```

#### 224. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5217-L5219` → after: `L7005-L7039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7005-L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7005-L7039) · [Before (L5217-L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5217-L5219)

```diff
-       shadowDirection() {
-         const ee = (0, hM.r)(this.Sie());
-         return [-ee[0], -ee[1], -ee[2]]
+       return OW ? "unchecked" : "ok"
+     }
+     async function PP(WW, iW, OW) {
+       if ("unavailable" === MN(WW)) return "busy";
+       const mW = (0, kW.d)(2e4, OW);
+       bN.record(WW);
+       try {
+         var EW, NW, PW, LW;
+         const OW = await fetch(qE, {
+           method: "POST",
+           headers: {
+             "Content-Type": "application/json"
+           },
+           body: JSON.stringify({
+             model: WW,
+             messages: iW,
+ ... (19 more added lines; see GitHub link above)
```

#### 225. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5221-L5242` → after: `L7041-L7056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7041-L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7041-L7056) · [Before (L5221-L5242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5221-L5242)

```diff
-       async checkCompilation() {
-         var ee;
-         let ie = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
-         if (ie()) return {
-           status: "Ce"
-         };
-         const {
-           PR: He
-         } = this.uk, ye = null === (ee = He.pT) || void 0 === ee ? void 0 : ee.terrain;
-         return null !== ye && void 0 !== ye && ye.checkShaderPack ? ye.checkShaderPack({
-           materials: this.uk.nie.allMaterials.filter((ee => !(0, jM.i)(ee))),
-           runtime: this,
-           lighting: He.GT,
-           dirLightCount: (0, SM.x)(He.model.view),
-           isCancelled: ie
-         }) : {
- ... (6 more removed lines; see GitHub link above)
+     }
+     async function LP(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const mW = await NP(WW, iW, OW),
+         EW = BE(WW);
+       if ("unsafe" !== mW || EW === WW) return {
+         safety: mW,
+         request: WW
+       };
+       const NW = await NP(EW, iW, !0);
+       return "unchecked" === NW ? {
+         safety: mW,
+         request: WW
+       } : {
+         safety: NW,
+         request: EW
```

#### 226. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5245-L5263` → after: `L7059-L7067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7059-L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7059-L7067) · [Before (L5245-L5263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5245-L5263)

```diff
-     var iK = {
-       debug: !1,
-       silent: !1,
-       jie: !1,
-       UX: 1.8,
-       KX: .6,
-       sie: [0, 10, 0],
-       FX: !1,
-       Iie: !0,
-       lV: 30,
-       sC: 0,
-       JX: 10,
-       Av: !0,
-       hie: !0,
-       Qv: !1,
-       Nie: !1,
- ... (3 more removed lines; see GitHub link above)
+     var cP = OW(39),
+       wP = OW(38003);
+     const tP = "aiHelperDataSharing";
+ 
+     function ZP() {
+       const WW = cP.i.getItem(tP);
+       return null !== WW && "object" === typeof WW ? WW : {}
+     }
+     const xP = new class {
```

#### 227. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5265-L5358` → after: `L7069-L7071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7069-L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7069-L7071) · [Before (L5265-L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5265-L5358)

```diff
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         if (super(), ee = Object.assign({}, iK, ee), this.version = "0.33.0", !ee.silent) {
-           var ie = ee.debug ? " (debug)" : "";
-           console.log(`noa-engine v${this.version}${ie}`)
-         }
-         this.AR = !1, this.rie = ee.Gie, this.yq = [0, 0, 0], this.Qie = 0, this.lY = 0, this.eHe = "default", this.iHe = 1, this.container = new Pi(this, ee), this.xR = new Dy.b(this, ee);
-         try {
-           this.PR = new wy.e(this, ee, this.container.canvas)
-         } catch (Ke) {
-           throw this.vY(!0), this.container.UW.cR = () => {}, Ke
-         }
-         this.lV = this.container.UW.lV, this.sC = this.container.UW.sC, this.Zf = ee.Zf ? new eK(this, ee.Zf) : null, this.nie = new jM.c(this), this.inputs = new Sy(this, ee, this.container.element), this.qR = new XM(this, ee, this.nie), this.xR.jW = ee.HHe ? By.create(ee.HHe.wa … [truncated]
-           this.CT(ee.message, ee)
-         })) : null, ee.HHe && (this.xR.TT = Ty.b.wasm(this.xR.ER, ee.HHe.wasm, (ee => {
-           this.CT(ee.message, ee)
-         })), this.xR.bHe = Zy.create(ee.HHe.wasm, this.qR, (ee => {
- ... (78 more removed lines; see GitHub link above)
+         this.player = null, this.unsaved = new Map, this.listeners = new Set, this.listening = !1, this.subscribe = WW => (this.listen(), this.listeners.add(WW), () => {
+           this.listeners.delete(WW)
+         })
```

#### 228. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5360-L5363` → after: `L7073-L7075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7073-L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7073-L7075) · [Before (L5360-L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5360-L5363)

```diff
-       RV(ee, ie) {
-         let He, ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         return He = ie.length ? this.xR.lN(ee, ie[0], ie[1], ie[2]) : this.xR.lN(ee, ie, ye, be), this.oHe(), He
+       get() {
+         var WW, iW;
+         return null === this.player ? null : null !== (WW = null !== (iW = this.unsaved.get(this.player)) && void 0 !== iW ? iW : ZP()[this.player]) && void 0 !== WW ? WW : null
```

#### 229. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5365-L5372` → after: `L7077-L7078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7077-L7078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7077-L7078) · [Before (L5365-L5372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5365-L5372)

```diff
-       IHe(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         if (ie.length) {
-           if (this.entities.hHe(ie[0], ie[1], ie[2])) return;
-           return this.xR.lN(ee, ie[0], ie[1], ie[2]), ee
-         }
-         if (!this.entities.hHe(ie, He, ye)) return this.xR.lN(ee, ie, He, ye), ee
+       getPlayer() {
+         return this.player
```

#### 230. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5374-L5383` → after: `L7080-L7089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7080-L7089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7080-L7089) · [Before (L5374-L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5374-L5383)

```diff
-       NHe(ee, ie, He) {
-         var ye = this.yq;
-         if (ie) {
-           for (var be = 0; be < 3; be++) {
-             var Me = ee[be] - ye[be];
-             Me += ie[be], He[be] = Me
-           }
-           return He
-         }
-         return ze().subtract(He, ee, ye)
+       async refresh() {
+         this.listen();
+         const WW = await async function() {
+           var WW, iW;
+           const {
+             userContextManager: mW
+           } = await Promise.resolve().then((() => OW(1111)));
+           return null !== (WW = null === (iW = mW.peekCurrentUserContext()) || void 0 === iW ? void 0 : iW.whamm) && void 0 !== WW ? WW : null
+         }().catch((WW => (console.error("AI Helper: couldn't look up the player for sharing chats", WW), null)));
+         return WW !== this.player && (this.player = WW, this.notify()), this.get()
```

#### 231. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5385-L5395` → after: `L7091-L7095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7091-L7095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7091-L7095) · [Before (L5385-L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5385-L5395)

```diff
-       S_(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         var ye = this.yq;
-         if (He) {
-           for (var be = 0; be < 3; be++) {
-             var Me = Math.floor(ee[be]);
-             ie[be] = Me + ye[be], He[be] = ee[be] - Me
-           }
-           return ie
-         }
-         return ze().add(ie, ee, ye)
+       set(WW) {
+         null !== this.player && (cP.i.setItem(tP, {
+           ...ZP(),
+           [this.player]: WW
+         }) ? this.unsaved.delete(this.player) : this.unsaved.set(this.player, WW), this.notify())
```

#### 232. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5397-L5404` → after: `L7097-L7100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7097-L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7097-L7100) · [Before (L5397-L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5397-L5404)

```diff
-       tq() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
-           ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         if (0 === He) return null;
-         var be = this.aHe;
-         return ee && (this.NHe(ee, null, be), ee = be), this.qN(ee, ie, He, ye)
+       listen() {
+         this.listening || (this.listening = !0, window.addEventListener("storage", (() => {
+           this.notify()
+         })))
```

#### 233. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5406-L5427` → after: `L7102-L7103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7102-L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7102-L7103) · [Before (L5406-L5427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5406-L5427)

```diff
-       qN() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
-           ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.cHe;
-         if (0 === He) return null;
-         ee || (ee = this.camera.Y_()), ie = ie || this.camera.N_(), He = He || -1, He < 0 && (He = this.JX);
-         var Me, Ke = be.xHe,
-           Ue = be.normal,
-           Fe = this.physics?.wasm,
-           Je = this.yq;
-         if (Fe) {
-           var oe = null === bK.engine ? bK : yK();
-           oe.engine = this, oe.test = ye, oe.origin = ee, oe.direction = ie, oe.maxDistance = He, oe.offset = Je, oe.Qm = Ke, oe.bS = Ue, oe.kS = be.LHe;
-           try {
- ... (6 more removed lines; see GitHub link above)
+       notify() {
+         for (const WW of this.listeners) WW()
```

#### 234. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5429-L5442` → after: `L7105-L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7105-L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7105-L7145) · [Before (L5429-L5442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5429-L5442)

```diff
-       pickBlock() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
-           ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         var be = {
-             w6: 0,
-             position: [],
-             normal: [],
-             Xp: [],
-             Qm: []
-           },
-           Me = this.tq(ee, ie, He, ye);
-         return Me ? (UK(this, Me, be), be) : null
+     };
+     let lP = null,
+       AP = !1;
+     const bP = 4e5,
+       jP = 6e4,
+       UP = 12,
+       kP = 9e5;
+ 
+     function sP(WW, iW) {
+       if (WW.length <= iW) return WW;
+       const OW = `\n[... ${WW.length-iW} more characters cut]`;
+       let mW = Math.max(0, iW - OW.length);
+       const EW = WW.charCodeAt(mW - 1);
+       return EW >= 55296 && EW <= 56319 && mW--, WW.slice(0, mW) + OW
+     }
+     var MP = OW(649),
+ ... (25 more added lines; see GitHub link above)
```

#### 235. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5444-L5461` → after: `L7147-L7152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7147-L7152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7147-L7152) · [Before (L5444-L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5444-L5461)

```diff
-       RHe() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this.JHe = !1;
-         var ie = this.UHe || this.qR.hG;
-         let He = this.WHe,
-           ye = this.tHe;
-         var be = this.qN(He, ye, null, ie);
-         if (be) {
-           var Me = this.PHe;
-           UK(this, be, Me), this.FHe = Me
-         } else this.FHe = null;
-         const Ke = this.GHe(),
-           Ue = this.FHe;
-         if (Ue && !Ke(Ue.w6, Ue.position[0], Ue.position[1], Ue.position[2]) && (be = this.qN(He, ye, null, Ke)), be) {
-           const ee = this.YHe;
-           UK(this, be, ee), this.kHe = ee
- ... (2 more removed lines; see GitHub link above)
+     }
+ 
+     function yP(WW) {
+       return {
+         model: WW.model,
+         text: sP(WW.text, jP)
```

#### 236. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5463-L5469` → after: `L7154-L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7154-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7154-L7171) · [Before (L5463-L5469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5463-L5469)

```diff
-       oHe() {
-         if (this.PHe.w6 = this.xR.sG(this.PHe.position[0], this.PHe.position[1], this.PHe.position[2]), 0 === this.PHe.w6 && (this.FHe = null, this.JHe = !0), this.kHe) {
-           const ee = this.kHe,
-             ie = ee.position;
-           ee.w6 = this.xR.sG(ie[0], ie[1], ie[2]);
-           this.GHe()(ee.w6, ie[0], ie[1], ie[2]) || (this.kHe = null)
-         }
+     }
+     class TP {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nP;
+         this.wZ = WW, this.chatId = (0, KP.e)(12), this.open = new Map
+       }
+       requestStarted(WW, iW) {
+         const OW = this.open.get(WW);
+         OW && (clearTimeout(OW.timer), iW || (this.open.delete(WW), this.send(OW.wZ)))
+       }
+       answered(WW, iW, OW) {
+         if ("" === OW.text.trim()) return;
+         const mW = this.open.get(WW);
+         if (mW) return void(mW.wZ.responses.length < UP && mW.wZ.responses.push(yP(OW)));
+         const EW = YP(this.chatId, iW, OW);
+         EW && this.open.set(WW, {
+ ... (2 more added lines; see GitHub link above)
```

#### 237. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5471-L5472` → after: `L7173-L7175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7173-L7175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7173-L7175) · [Before (L5471-L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5471-L5472)

```diff
-       fHe(ee) {
-         this.THe = ee, this.zHe(this.kHe)
+       drop(WW) {
+         var iW;
+         clearTimeout(null === (iW = this.open.get(WW)) || void 0 === iW ? void 0 : iW.timer), this.open.delete(WW)
```

#### 238. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5474-L5475` → after: `L7177-L7181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7177-L7181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7177-L7181) · [Before (L5474-L5475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5474-L5475)

```diff
-       pHe(ee) {
-         this.XHe = ee, this.zHe?.(this.kHe)
+       requestEnded(WW) {
+         const iW = this.open.get(WW);
+         iW && (clearTimeout(iW.timer), iW.timer = setTimeout((() => {
+           this.open.delete(WW), this.send(iW.wZ)
+         }), 2e4))
```

#### 239. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5477-L5478` → after: `L7183-L7186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7183-L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7183-L7186) · [Before (L5477-L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5477-L5478)

```diff
-       GHe() {
-         return this.qHe || this.UHe || this.qR.hG
+       send(WW) {
+         (function(WW) {
+           return (new TextEncoder).encode(JSON.stringify(WW)).length <= kP
+         })(WW) && this.wZ(WW)
```

#### 240. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5482-L5549` → after: `L7193-L7204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7193-L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7193-L7204) · [Before (L5482-L5549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5482-L5549)

```diff
-     function yK() {
-       var ee = {
-         engine: null,
-         test: null,
-         origin: null,
-         direction: null,
-         maxDistance: 0,
-         offset: null,
-         Qm: null,
-         bS: null,
-         kS: null,
-         yN: () => MK(ee.engine, ee.test, ee.origin, ee.direction, ee.maxDistance, ee.Qm, ee.bS, ee.kS)
-       };
-       return ee
-     }
-     var bK = yK();
- ... (52 more removed lines; see GitHub link above)
+     function nP(WW) {
+       (async () => {
+         const iW = await xP.refresh(),
+           OW = xP.getPlayer();
+         "yes" === iW ? await oP([WW]) : null === iW && null !== OW && function(WW, iW) {
+           HP || (HP = !0, xP.subscribe(uP));
+           JP.push({
+             player: WW,
+             wZ: iW
+           }), JP.length > hP && JP.shift()
+         }(OW, WW)
+       })()
```

#### 241. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5552-L5555` → after: `L7207-L7222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7207-L7222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7207-L7222) · [Before (L5552-L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5552-L5555)

```diff
-     function KK(ee, ie) {
-       if (null === ie) {
-         const ie = 0 !== ee[0];
-         return ee[0] = 0, ie
+     function uP() {
+       const WW = xP.get();
+       if (null === WW) return;
+       const iW = xP.getPlayer(),
+         OW = JP.splice(0).filter((WW => WW.player === iW));
+       "yes" === WW && OW.length > 0 && oP(OW.map((WW => WW.wZ)))
+     }
+     async function oP(WW) {
+       const iW = Promise.resolve().then((() => OW(53658)));
+       for (const OW of WW) try {
+         const {
+           postToGameServer: WW
+         } = await iW;
+         await WW("/ai-helper/turn", OW)
+       } catch (mW) {
+         console.warn("AI Helper: couldn't share a turn", mW)
```

#### 242. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5563-L5587` → after: `L7225-L7226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7225-L7226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7225-L7226) · [Before (L5563-L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5563-L5587)

```diff
- 
-     function UK(ee, ie, He) {
-       ze().copy(He.position, ie.LHe), ze().copy(He.normal, ie.normal), ze().add(He.Xp, He.position, He.normal), ze().copy(He.Qm, ie.position), He.w6 = ee.xR.sG(He.position[0], He.position[1], He.position[2])
-     }
-     var FK = () => {},
-       JK = () => {},
-       oK = He(3094),
-       RK = He(39520),
-       kK = He(37003),
-       qK = He(36987),
-       fK = He(3101),
-       TK = He(3105),
-       pK = He(36981),
-       XK = He(36973),
-       zK = He(4106),
-       BK = He(5153),
- ... (9 more removed lines; see GitHub link above)
+     var dP = OW(344),
+       eP = OW(154);
```

#### 243. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5589-L5634` → after: `L7228-L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7228-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7228-L7261) · [Before (L5589-L5634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5589-L5634)

```diff
-         load: async () => {
-           const {
-             createLiteRendererAsync: ee,
-             liteBabylonBackend: ie,
-             setPipelineFailureHook: ye
-           } = await Promise.all([He.e(613), He.e(301)]).then((() => He(44835)));
-           return ye(YK), {
-             create: async (He, ye) => function(ee, ie) {
-               var He;
-               const ye = null === (He = ee.rebuild) || void 0 === He ? void 0 : He.bind(ee),
-                 be = new Set;
-               return {
-                 backendName: ee.backendName,
-                 get gpuDevice() {
-                   return ee.gpuDevice
-                 },
- ... (30 more removed lines; see GitHub link above)
+         openrouter: {
+           id: "openrouter",
+           name: "OpenRouter",
+           shortName: "OpenRouter",
+           baseUrl: "https://openrouter.ai/api/v1",
+           keyPage: "https://openrouter.ai/settings/keys"
+         },
+         anthropic: {
+           id: "anthropic",
+           name: "Claude (Anthropic)",
+           shortName: "Claude",
+           baseUrl: "https://api.anthropic.com/v1",
+           keyPage: "https://console.anthropic.com/settings/keys"
+         },
+         openai: {
+           id: "openai",
+ ... (18 more added lines; see GitHub link above)
```

#### 244. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5637-L5670` → after: `L7264-L7265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7264-L7265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7264-L7265) · [Before (L5637-L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5637-L5670)

```diff
-       AK = new Set;
- 
-     function YK(ee, ie, He, ye) {
-       for (const Me of AK) try {
-         Me(ee, ie, He, ye)
-       } catch (be) {
-         console.error("Lite pipeline failure listener failed", be)
-       }(function(ee) {
-         return NM.test(ee)
-       })(ie) || function(ee, ie, He, ye) {
-         var be;
-         if (VK.has(ee)) return;
-         VK.add(ee);
-         const Me = null === He || void 0 === He ? void 0 : He.reason,
-           Ke = null !== (be = null !== ye && void 0 !== ye ? ye : null === He || void 0 === He ? void 0 : He.message) && void 0 !== be ? be : String(He);
-         (0, DK.c)("Lite pipeline failed", new Error(`${ee}${Me?` ${Me}`:""}: ${Ke} [${ie}]`))
- ... (18 more removed lines; see GitHub link above)
+       gP = ["openrouter", "anthropic", "openai", "gemini", "custom"],
+       DP = new Set(Object.values(vP).flatMap((WW => "" === WW.baseUrl ? [] : [new URL(WW.baseUrl).host])));
```

#### 245. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5672-L5703` → after: `L7267-L7268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7267-L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7267-L7268) · [Before (L5672-L5703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5672-L5703)

```diff
-     function NK(ee, ie, He) {
-       const ye = function() {
-           try {
-             return function() {
-               var ee, ie, He;
-               const {
-                 client: ye,
-                 playedS: be,
-                 snapshot: Me
-               } = (0, tK.n)(), Ke = null === (ee = (0, Ie.h)()) || void 0 === ee ? void 0 : ee.PR, Ue = null === Ke || void 0 === Ke ? void 0 : Ke.engine, Fe = Ue ? (0, sK.g)(Ue) : null, Je = (0, vK.f)();
-               return {
-                 client: ye,
-                 playedS: be,
-                 ...Me,
-                 budgetBasis: (0, IK.k)(),
-                 renderBackend: Ke && Ue ? (0, hK.e)(Ke) : null,
- ... (16 more removed lines; see GitHub link above)
+     function VP(WW) {
+       return WW.trim().replace(/^[A-Z_]+\s*=\s*/, "").replace(/^["'`]+|["'`]+$/g, "").replace(/^Bearer\s+/i, "").replace(/\s+/g, "")
```

#### 246. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5709-L5710` → after: `L7272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7272) · [Before (L5709-L5710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5709-L5710)

```diff
-       const ie = zi.m.getItem(rK);
-       return !("number" === typeof ie && Date.now() - ie < 3e5) && ee.canRejoin() && zi.m.setItem(rK, Date.now())
+       return WW.startsWith("sk-or-") ? "openrouter" : WW.startsWith("sk-ant-") ? "anthropic" : WW.startsWith("AIza") ? "gemini" : WW.startsWith("sk-") ? "openai" : null
```

#### 247. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5712-L5718` → after: `L7274-L7280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7274-L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7274-L7280) · [Before (L5712-L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5712-L5718)

```diff
-     class eU {
-       RR(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         (0, dK.reportClientError)("render_lost", ie, ee, !0, He ? 1 / 0 : WK.CAPPED_COUNTS_VISIT_CAP)
-       }
-       reportLoss(ee, ie) {
-         NK(ie, ee, WK.CAPPED_COUNTS_VISIT_CAP)
+ 
+     function fP(WW) {
+       let iW;
+       try {
+         iW = new URL(WW.trim())
+       } catch {
+         return null
```

#### 248. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5720-L5722` → after: `L7282-L7292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7282-L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7282-L7292) · [Before (L5720-L5722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5720-L5722)

```diff
-       inGame() {
-         var ee;
-         return !0 === (null === (ee = (0, Ie.e)()) || void 0 === ee ? void 0 : ee.client.isConnectedToServer())
+       const OW = "localhost" === iW.hostname || "127.0.0.1" === iW.hostname;
+       return "https:" !== iW.protocol && ("http:" !== iW.protocol || !OW) || iW.username || iW.password || iW.search ? null : `${iW.origin}${iW.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+     }
+ 
+     function CP(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       return "custom" === WW && iW ? new URL(iW).host : OW ? vP[WW].shortName : vP[WW].name
+     }
+     class XP extends Error {
+       constructor(WW, iW, OW, mW) {
+         super(`AI key request: ${WW}`), this.problem = WW, this.retryAfterMs = iW, this.status = OW, this.detail = mW
```

#### 249. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5724-L5726` → after: `L7294-L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7294-L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7294-L7318) · [Before (L5724-L5726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5724-L5726)

```diff
-       replaying() {
-         var ee;
-         return !0 === (null === (ee = (0, Ie.e)()) || void 0 === ee ? void 0 : ee.client.isReplayMode())
+     }
+ 
+     function BP(WW, iW) {
+       return ("" === iW ? WW : WW.split(iW).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+     }
+ 
+     function qP(WW, iW) {
+       const OW = "custom" === iW ? "That server" : vP[iW].shortName;
+       switch (WW) {
+         case "badKey":
+           return `${OW} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+         case "busy":
+           return "Too many requests right now. Wait a minute and try again.";
+         case "noModel":
+           return `${OW} can't find that model. Check its name.`;
+         case "unreachable":
+ ... (9 more added lines; see GitHub link above)
```

#### 250. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5728-L5730` → after: `L7320-L7376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7320-L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7320-L7376) · [Before (L5728-L5730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5728-L5730)

```diff
-       canRejoin() {
-         var ee, ie;
-         return !(0, uK.isDiscordClient)() && null !== (null !== (ee = null === (ie = (0, Ie.e)().client.getConnectionInfo()) || void 0 === ie ? void 0 : ie.lobbyName) && void 0 !== ee ? ee : null)
+     }
+ 
+     function RP(WW) {
+       var iW;
+       const OW = WW.at(-1);
+       if (!OW || null !== AO(OW.name, OW.args) || function(WW) {
+           try {
+             return JSON.parse(WW), !0
+           } catch {
+             return !1
+           }
+         }(OW.args)) return;
+       const mW = null === (iW = /"path"\s*:\s*"((?:[^"\\]|\\.)*)"/.exec(OW.args)) || void 0 === iW ? void 0 : iW[1];
+       return {
+         name: OW.name || "write_file",
+         path: mW
+ ... (41 more added lines; see GitHub link above)
```

#### 251. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5732-L5741` → after: `L7378-L7438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7378-L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7378-L7438) · [Before (L5732-L5741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5732-L5741)

```diff
-       rejoin() {
-         (0, mK.f)(), (0, Ie.e)().client.leaveGameUnwanted({
-           reason: {
-             translationKey: "general:graphicsStoppedWorking"
-           },
-           requiresRefresh: !1,
-           canReconnect: !0,
-           automaticallyReconnect: !0,
-           reconnectByReload: !0
-         })
+       return EW
+     }
+     async function zP(WW, iW, OW) {
+       const mW = (0, kW.d)(WW, iW);
+       try {
+         return await OW(mW.signal)
+       } catch (EW) {
+         if (EW instanceof XP || null !== iW && void 0 !== iW && iW.aborted) throw EW;
+         throw mW.signal.aborted || console.warn("AI key request couldn't be read", EW), new XP(mW.signal.aborted ? "timeout" : "unreachable")
+       } finally {
+         mW.clear()
+       }
+     }
+ 
+     function FP(WW) {
+       let iW = WW.length;
+ ... (45 more added lines; see GitHub link above)
```

#### 252. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5743-L5744` → after: `L7440-L7486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7440-L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7440-L7486) · [Before (L5743-L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5743-L5744)

```diff
-       end() {
-         (0, LK.e)(GK)
+     }
+ 
+     function WL(WW) {
+       const iW = WW.findIndex((WW => "user" === WW.role));
+       return -1 === iW ? [] : WW.slice(iW)
+     }
+ 
+     function iL(WW, iW) {
+       var OW;
+       const mW = null !== (OW = iW.tools) && void 0 !== OW ? OW : [];
+       if (0 === mW.length) return {};
+       switch (WW) {
+         case "openai":
+           return {
+             tools: BN(mW)
+           };
+ ... (31 more added lines; see GitHub link above)
```

#### 253. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5746-L5747` → after: `L7488-L7491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7488-L7491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7488-L7491) · [Before (L5746-L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5746-L5747)

```diff
-       hidden() {
-         return document.hidden
+     }
+     class OL {
+       constructor(WW, iW, OW) {
+         this.provider = WW, this.baseUrl = iW, this.key = OW
```

#### 254. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5749-L5751` → after: `L7493-L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7493-L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7493-L7505) · [Before (L5749-L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5749-L5751)

```diff
-       shownSince(ee) {
-         const ie = (0, vK.f)();
-         return !document.hidden && (null === ie || ie < ee)
+       async check(WW) {
+         return zP(GP, WW, (async WW => {
+           var iW;
+           const OW = await rP(this.provider, `${this.baseUrl}/models`, {
+             headers: this.headers()
+           }, WW);
+           return {
+             models: (null !== (iW = (await OW.json()).data) && void 0 !== iW ? iW : []).map((WW => ({
+               id: WW.id,
+               name: WW.name
+             })))
+           }
+         }))
```

#### 255. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5753-L5754` → after: `L7507-L7550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7507-L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7507-L7550) · [Before (L5753-L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5753-L5754)

```diff
-       whenNoAdShowing(ee) {
-         return (0, lK.s)(ee)
+       async ask(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         return zP(IP, OW.signal, (async mW => {
+           var EW;
+           const NW = await rP(this.provider, `${this.baseUrl}/chat/completions`, {
+             method: "POST",
+             headers: this.headers(),
+             body: JSON.stringify({
+               model: WW,
+               messages: iW,
+               ["openai" === this.provider ? "max_completion_tokens" : "max_tokens"]: aP,
+               stream: !0,
+               ...iL("openai", OW)
+             })
+           }, mW);
+           let PW = "",
+ ... (28 more added lines; see GitHub link above)
```

#### 256. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5756-L5760` → after: `L7552-L7558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7552-L7558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7552-L7558) · [Before (L5756-L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5756-L5760)

```diff
-       whenShown(ee) {
-         const ie = () => {
-           document.hidden || (document.removeEventListener("visibilitychange", ie), ee())
-         };
-         document.addEventListener("visibilitychange", ie)
+       headers() {
+         return "" === this.key ? {
+           "Content-Type": "application/json"
+         } : {
+           Authorization: `Bearer ${this.key}`,
+           "Content-Type": "application/json"
+         }
```

#### 257. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5765-L5771` → after: `L7562-L7563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7562-L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7562-L7563) · [Before (L5765-L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5765-L5771)

```diff
-       constructor(ee, ie, He) {
-         this.loseContext = ee, this.webGlVersion = ie, this.actions = He, this.startedAt = void 0, this.lostAt = null, this.restoredAt = null, this.restoreTried = !1, this.restoreDidNotHold = !1, this.restoreTimer = null, this.giveUpTimer = null, this.cancelAdWait = null, this.lo … [truncated]
-       }
-       lost(ee) {
-         if (this.gaveUp || null !== this.lostAt) return;
-         const ie = performance.now();
-         this.lostAt = ie, this.restoreTried = !1, this.waiting = !1, this.restoreDidNotHold = null !== this.restoredAt && ie - this.restoredAt < 3e4 && this.actions.shownSince(this.restoredAt), this.reportLoss(ie, ee), this.armTimers(this.lostAt)
+       constructor(WW) {
+         this.key = WW, this.chat = void 0, this.chat = new OL("openrouter", vP.openrouter.baseUrl, WW)
```

#### 258. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5773-L5777` → after: `L7565-L7570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7565-L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7565-L7570) · [Before (L5773-L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5773-L5777)

```diff
-       restored() {
-         if (this.gaveUp || null === this.lostAt) return;
-         const ee = performance.now(),
-           ie = this.restoreTried ? "restore_context" : "natural";
-         this.actions.RR(`webgl_restored_${ie}_${(0,CK.i)(ee-this.lostAt)}`, `WebGL${this.webGlVersion} context restored (${ie})`), this.lostAt = null, this.restoredAt = ee, this.clearTimers()
+       async check(WW) {
+         return await zP(GP, WW, (async WW => rP("openrouter", `${vP.openrouter.baseUrl}/key`, {
+           headers: {
+             Authorization: `Bearer ${this.key}`
+           }
+         }, WW))), this.chat.check(WW)
```

#### 259. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5779-L5780` → after: `L7572-L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7572-L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7572-L7573) · [Before (L5779-L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5779-L5780)

```diff
-       visibilityChanged() {
-         this.gaveUp || null === this.lostAt || this.armTimers(this.lostAt)
+       ask(WW, iW, OW) {
+         return this.chat.ask(WW, iW, OW)
```

#### 260. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5782-L5789` → after: `L7575-L7578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7575-L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7575-L7578) · [Before (L5782-L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5782-L5789)

```diff
-       reportLoss(ee, ie) {
-         if (this.lossReported) return;
-         this.lossReported = !0;
-         const {
-           page: He,
-           code: ye
-         } = (0, CK.n)("webgl_lost", this.startedAt, ee), be = `webgl${this.webGlVersion} ${He} up${(0,CK.e)(ee-this.startedAt)}: ${ie}`;
-         (0, DK.c)(CK.d.WebGL2, new Error(be)), this.actions.reportLoss(ye, `WebGL${this.webGlVersion} context lost: ${be}`)
+     }
+     class EL {
+       constructor(WW) {
+         this.key = WW, this.baseUrl = vP.anthropic.baseUrl
```

#### 261. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5791-L5794` → after: `L7580-L7592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7580-L7592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7580-L7592) · [Before (L5791-L5794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5791-L5794)

```diff
-       armTimers(ee) {
-         this.clearTimers(), this.actions.hidden() || (this.restoreDidNotHold ? this.armGiveUp(ee, 0) : (null === this.loseContext || this.restoreTried || (this.restoreTimer = setTimeout((() => {
-           this.tryRestoreContext()
-         }), 2e3)), this.armGiveUp(ee, 1e4)))
+       async check(WW) {
+         return zP(GP, WW, (async WW => {
+           var iW;
+           const OW = await rP("anthropic", `${this.baseUrl}/models?limit=1000`, {
+             headers: this.headers()
+           }, WW);
+           return {
+             models: (null !== (iW = (await OW.json()).data) && void 0 !== iW ? iW : []).map((WW => ({
+               id: WW.id,
+               name: WW.display_name
+             })))
+           }
+         }))
```

#### 262. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5796-L5799` → after: `L7594-L7617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7594-L7617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7594-L7617) · [Before (L5796-L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5796-L5799)

```diff
-       armGiveUp(ee, ie) {
-         this.giveUpTimer = setTimeout((() => {
-           this.giveUpTimer = null;
-           let ie = !1,
+       async ask(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const mW = iW.filter((WW => "system" === WW.role)).map((WW => WW.content)).join("\n\n"),
+           EW = WL(iW).map((WW => ({
+             role: WW.role,
+             content: WW.content
+           })));
+         return zP(IP, OW.signal, (async iW => {
+           var NW;
+           const PW = await rP("anthropic", `${this.baseUrl}/messages`, {
+             method: "POST",
+             headers: this.headers(),
+             body: JSON.stringify({
+               model: WW,
+               max_tokens: aP,
+               system: mW,
+ ... (8 more added lines; see GitHub link above)
```

#### 263. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5801-L5802` → after: `L7619-L7644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7619-L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7619-L7644) · [Before (L5801-L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5801-L5802)

```diff
-           const ye = this.actions.whenNoAdShowing((() => {
-             ie = !0, He ? (this.cancelAdWait = null, this.armGiveUp(ee, 0)) : this.giveUp(ee)
+           const ZW = new Map;
+           await XN(null !== (NW = PW.body) && void 0 !== NW ? NW : new ReadableStream, (iW => {
+             var mW, EW;
+             const NW = iW;
+             var PW, xW, lW, AW;
+             if ("error" === NW.type) throw new XP("overloaded_error" === (null === (PW = NW.error) || void 0 === PW ? void 0 : PW.type) || "rate_limit_error" === (null === (xW = NW.error) || void 0 === xW ? void 0 : xW.type) ? "busy" : "failed");
+             if ("content_block_start" === NW.type && "tool_use" === (null === (mW = NW.content_block) || void 0 === mW ? void 0 : mW.type)) ZW.set(null !== (lW = NW.index) && void 0 !== lW ? lW : ZW.size, {
+               name: null !== (AW = NW.content_block.name) && void 0 !== AW ? AW : "",
+               args: ""
+             });
+             else if ("content_block_delta" === NW.type) {
+               var bW, jW, UW, kW, sW, MW;
+               LW += null !== (bW = null === (jW = NW.delta) || void 0 === jW ? void 0 : jW.text) && void 0 !== bW ? bW : "", cW += null !== (UW = null === (kW = NW.delta) || void 0 === kW ? void 0 : kW.thinking) && void 0 !== UW ? UW : "";
+               const WW = ZW.get(null !== (sW = NW.index) && void 0 !== sW ? sW : -1);
+               var KW;
+               if (WW && "input_json_delta" === (null === (MW = NW.delta) || void 0 === MW ? void 0 : MW.type)) WW.args += null !== (KW = NW.delta.partial_json) && void 0 !== KW ? KW : ""
+ ... (10 more added lines; see GitHub link above)
```

#### 264. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5804-L5805` → after: `L7646-L7654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7646-L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7646-L7654) · [Before (L5804-L5805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5804-L5805)

```diff
-           ie || (He = !0, this.cancelAdWait = ye)
-         }), ie)
+           const xW = [...ZW.values()];
+           return QP(WW, {
+             answer: LW,
+             reasoning: cW,
+             cEW: wW,
+             isCutShort: tW,
+             nativeCalls: xW
+           }, OW.callFormat, OW.continueFrom)
+         }))
```

#### 265. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5807-L5813` → after: `L7656-L7661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7656-L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7656-L7661) · [Before (L5807-L5813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5807-L5813)

```diff
-       tryRestoreContext() {
-         this.restoreTimer = null, this.restoreTried = !0;
-         try {
-           var ee;
-           null === (ee = this.loseContext) || void 0 === ee || ee.restoreContext()
-         } catch (ie) {
-           console.warn("WEBGL_lose_context.restoreContext() threw after a WebGL context loss", ie)
+       headers() {
+         return {
+           "x-api-key": this.key,
+           "anthropic-version": "2023-06-01",
+           "anthropic-dangerous-direct-browser-access": "true",
+           "Content-Type": "application/json"
```

#### 266. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5816-L5823` → after: `L7664-L7684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7664-L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7664-L7684) · [Before (L5816-L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5816-L5823)

```diff
-       giveUp(ee) {
-         this.clearTimers();
-         const ie = this.restoreTried ? "restore_tried" : "restore_untried";
-         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.RR(`webgl_waiting_${ie}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(ee);
-         this.gaveUp = !0;
-         const He = (0, CK.i)(performance.now() - ee);
-         if (QK(this.actions)) return this.actions.RR(`webgl_rejoin_${ie}_${He}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
-         this.actions.RR(`webgl_end_${ie}_${He}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
+     }
+     class NL {
+       constructor(WW) {
+         this.key = WW, this.baseUrl = vP.gemini.baseUrl
+       }
+       async check(WW) {
+         return zP(GP, WW, (async WW => {
+           var iW;
+           const OW = await rP("gemini", `${this.baseUrl}/models?pageSize=1000`, {
+             headers: this.headers()
+           }, WW);
+           return {
+             models: (null !== (iW = (await OW.json()).models) && void 0 !== iW ? iW : []).filter((WW => {
+               var iW, OW;
+               return null === (iW = null === (OW = WW.supportedGenerationMethods) || void 0 === OW ? void 0 : OW.includes("generateContent")) || void 0 === iW || iW
+             })).map((WW => ({
+ ... (5 more added lines; see GitHub link above)
```

#### 267. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5825-L5828` → after: `L7686-L7770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7686-L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7686-L7770) · [Before (L5825-L5828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5825-L5828)

```diff
-       clearTimers() {
-         var ee;
-         for (const ie of [this.restoreTimer, this.giveUpTimer]) null !== ie && clearTimeout(ie);
-         this.restoreTimer = null, this.giveUpTimer = null, null === (ee = this.cancelAdWait) || void 0 === ee || ee.call(this), this.cancelAdWait = null
+       async ask(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const mW = iW.filter((WW => "system" === WW.role)).map((WW => ({
+             text: WW.content
+           }))),
+           EW = WL(iW).map((WW => ({
+             role: "assistant" === WW.role ? "model" : "user",
+             parts: [{
+               text: WW.content
+             }]
+           })));
+         return zP(IP, OW.signal, (async iW => {
+           var NW;
+           const PW = await rP("gemini", `${this.baseUrl}/models/${encodeURIComponent(WW)}:streamGenerateContent?alt=sse`, {
+             method: "POST",
+             headers: this.headers(),
+ ... (69 more added lines; see GitHub link above)
```

#### 268. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5831-L5834` → after: `L7773-L7777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7773-L7777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7773-L7777) · [Before (L5831-L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5831-L5834)

```diff
-     var yU = He(1851),
-       bU = He(3037),
-       MU = He(4899);
-     const KU = 15e3,
+     const LL = {
+         fast: "Fast",
+         smart: "Smart",
+         smartest: "Smartest"
+       },
```

#### 269. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5836-L5838` → after: `L7779-L7882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7779-L7882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7779-L7882) · [Before (L5836-L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5836-L5838)

```diff
-         restoredAt: null,
-         restores: 0,
-         gaveUp: !1
+         anthropic: {
+           fast: [{
+             id: "claude-haiku-5-5",
+             name: "Claude Haiku 5.5"
+           }, {
+             id: "claude-haiku-4-5",
+             name: "Claude Haiku 4.5"
+           }],
+           smart: [{
+             id: "claude-sonnet-5-5",
+             name: "Claude Sonnet 5.5"
+           }, {
+             id: "claude-sonnet-5",
+             name: "Claude Sonnet 5"
+           }, {
+             id: "claude-sonnet-4-6",
+ ... (88 more added lines; see GitHub link above)
```

#### 270. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5842-L5904` → after: `L7890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7890) · [Before (L5842-L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5842-L5904)

```diff
-       const {
-         gpuDevice: He,
-         deviceLost: ye
-       } = ee.pT;
-       He && ye && ye.then((ye => {
-         (0, wK.g)(He) || ((0, bU.q)("webgpuloss") && (0, MU.d)((ee => {
-           ee.noteWebGpuLoss("js", !0 === ye.framesRefused ? `${ye.reason} frames refused` : ye.reason, ye.message)
-         })), function(ee, ie, He, ye) {
-           if (UU.gaveUp) return;
-           const be = performance.now(),
-             Me = new eU,
-             Ke = (0, CK.k)(!0 === He.framesRefused, He.message, "destroyed" === He.reason),
-             Ue = "destroyed" === He.reason || !0 === He.framesRefused,
-             Fe = Ue && UU.restores < 3 && ! function(ee, ie) {
-               return null !== UU.restoredAt && ie - UU.restoredAt < iU && ee.shownSince(UU.restoredAt)
-             }(Me, be) ? ee.rebuild : void 0;
- ... (47 more removed lines; see GitHub link above)
+       return "custom" !== WW && /claude-|gpt-|gemini-/.test(iW)
```

#### 271. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5909-L5918` → after: `L7894-L7901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7894-L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7894-L7901) · [Before (L5909-L5918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5909-L5918)

```diff
-       let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       RU(ee, (() => {
-         const be = ee.inGame();
-         if (!be && !ee.replaying()) return ye || ee.RR(`${ie}_waiting`, "WebGPU device lost to the browser: waiting for a game", !0), void setTimeout((() => {
-           oU(ee, ie, He, !0)
-         }), JU);
-         const Me = (0, CK.i)(performance.now() - He);
-         if (be && QK(ee)) return ee.RR(`${ie}_rejoin_${Me}`, "WebGPU device lost to the browser: rejoining", !0), void ee.rejoin();
-         ee.RR(`${ie}_end_${Me}`, "WebGPU device lost to the browser: game ended", !0), ee.end()
-       }))
+       var mW;
+       const EW = OW.find((WW => WW.id === iW));
+       return {
+         id: iW,
+         name: null !== (mW = null === EW || void 0 === EW ? void 0 : EW.name) && void 0 !== mW ? mW : iW,
+         callFormat: wL(iW),
+         nativeTools: tL(WW, iW)
+       }
```

#### 272. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5922-L5930` → after: `L7905-L7917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7905-L7917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7905-L7917) · [Before (L5922-L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5922-L5930)

```diff
-       if (ee.hidden()) return void ee.whenShown((() => {
-         RU(ee, ie)
-       }));
-       let He = !1;
-       ee.whenNoAdShowing((() => {
-         He ? setTimeout((() => {
-           RU(ee, ie)
-         }), 0) : ie()
-       })), He = !0
+       return "custom" !== WW ? function(WW, iW) {
+         if ("custom" === WW) return [];
+         const OW = new Set(iW.map((WW => WW.id))),
+           mW = cL[WW];
+         return Object.keys(mW).flatMap((EW => {
+           const NW = mW[EW].find((WW => OW.has(WW.id)));
+           return NW ? [{
+             ...ZL(WW, NW.id, iW),
+             name: NW.name,
+             tier: EW
+           }] : []
+         }))
+       }(WW, iW) : iW.slice(0, 20).map((OW => ZL(WW, OW.id, iW)))
```

#### 273. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5941-L5952` → after: `L7922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7922) · [Before (L5941-L5952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5941-L5952)

```diff
-       const ie = null === (ee = (0, Ie.e)()) || void 0 === ee ? void 0 : ee.client;
-       if (null !== ie && void 0 !== ie && ie.isConnectedToServer()) try {
-         return void ie.leaveGameUnwanted({
-           reason: kU,
-           requiresRefresh: !0,
-           canReconnect: !1,
-           automaticallyReconnect: !1
-         })
-       } catch (He) {
-         console.error("Failed to leave the game after wasm physics was lost", He)
-       }
-       pe.h.yR("unrecoverableError", kU)
+       return null !== (iW = WW.find((WW => "smart" === WW.tier))) && void 0 !== iW ? iW : WW[0]
```

#### 274. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L5958-L6010` → after: `L7926-L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7926-L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7926-L7928) · [Before (L5958-L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L5958-L6010)

```diff
-       return {
-         name: "moveState",
-         order: 30,
-         state: {
-           heading: 0,
-           crouching: !1,
-           speed: 0,
-           jumping: !1,
-           toggleFly: !1,
-           edgeGuard: !1,
-           cameraPitch: 0,
-           meshOffset: null,
-           baseRenderHeading: 0,
-           followingEId: null,
-           ridingVehicleEId: null,
-           pose: "standing",
- ... (37 more removed lines; see GitHub link above)
+       var iW;
+       let OW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       return null !== (iW = WW.name) && void 0 !== iW ? iW : CP(WW.provider, WW.baseUrl, OW)
```

#### 275. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6012-L6013` → after: `L7930-L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7930-L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7930-L7935) · [Before (L6012-L6013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6012-L6013)

```diff
-     var BU = He(39007),
-       EU = He(38828);
+     const bL = "bloxdAiHelperKeys",
+       jL = {
+         keys: [],
+         selected: null,
+         remember: !1
+       };
```

#### 276. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6015-L6038` → after: `L7937-L7938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7937-L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7937-L7938) · [Before (L6015-L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6015-L6038)

```diff
-     function gU(ee) {
-       return {
-         name: "inventory",
-         order: 150,
-         state: {
-           selectedItem: null,
-           inventory: null,
-           opWrapper: null,
-           onInventoryUpdate: null,
-           onChestUpdate: null
-         },
-         lE: function(ie, He) {
-           if (He.inventory || (He.inventory = new EU.b(ee, He, xe.x)), !He.opWrapper) {
-             const {
-               onChestUpdate: ie
-             } = He;
- ... (8 more removed lines; see GitHub link above)
+     function UL(WW, iW) {
+       return WW.id === iW.id || "custom" === WW.provider && "custom" === iW.provider && WW.baseUrl === iW.baseUrl
```

#### 277. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6042-L6053` → after: `L7942-L7947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7942-L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7942-L7947) · [Before (L6042-L6053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6042-L6053)

```diff
-       return {
-         name: "itemState",
-         order: 105,
-         state: {
-           amount: 1,
-           name: null,
-           typeObj: null,
-           creationTime: 0,
-           mM: !1,
-           size: 1
-         },
-         attributes: {}
+       if ("custom" !== WW.provider) return !0;
+       try {
+         var iW;
+         return new URL(null !== (iW = WW.baseUrl) && void 0 !== iW ? iW : "").protocol.startsWith("http")
+       } catch {
+         return !1
```

#### 278. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6063-L6064` → after: `L7952-L7956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7952-L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7952-L7956) · [Before (L6063-L6064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6063-L6064)

```diff
-       const ie = wU.get(ee);
-       return ie ? ie() : null
+       try {
+         return "undefined" === typeof window ? null : window[WW]
+       } catch (iW) {
+         return console.warn(`AI Helper: no ${WW}`, iW), null
+       }
```

#### 279. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6066-L6149` → after: `L7958-L7999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR7958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L7958-L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L7958-L7999) · [Before (L6066-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6066-L6149)

```diff
-     const PU = [{
-       queue: "opaque",
-       field: "_opaqueSubMeshes"
-     }, {
-       queue: "alphaTest",
-       field: "_alphaTestSubMeshes"
-     }, {
-       queue: "transparent",
-       field: "_transparentSubMeshes"
-     }, {
-       queue: "depthOnly",
-       field: "_depthOnlySubMeshes"
-     }];
- 
-     function AU(ee, ie) {
-       var He;
- ... (68 more removed lines; see GitHub link above)
+     const ML = new class {
+       constructor(WW, iW) {
+         var OW;
+         this.session = WW, this.local = iW, this.state = void 0, this.listeners = new Set, this.ownsRemembered = !1, this.lastUsedAt = 0, this.getState = () => this.state, this.subscribe = WW => (this.listeners.add(WW), () => {
+           this.listeners.delete(WW)
+         });
+         for (const NW of [WW, iW]) null !== NW && void 0 !== NW && NW.getItem(bL) && !this.read(NW) && NW.removeItem(bL);
+         const mW = this.read(WW),
+           EW = this.read(iW);
+         this.state = null !== mW && void 0 !== mW && mW.remember ? null !== EW && void 0 !== EW && EW.remember ? EW : {
+           ...mW,
+           remember: !1
+         } : null !== (OW = null !== mW && void 0 !== mW ? mW : EW) && void 0 !== OW ? OW : jL, this.ownsRemembered = this.state.remember && null !== EW
+       }
+       nextUsedAt() {
+         return this.lastUsedAt = Math.max(Date.now(), this.lastUsedAt + 1), this.lastUsedAt
+ ... (26 more added lines; see GitHub link above)
```

#### 280. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6151-L6163` → after: `L8001-L8024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8001-L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8001-L8024) · [Before (L6151-L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6151-L6163)

```diff
-           other: {
-             draws: 0,
-             instances: 0
-           }
-         },
-         Ue = new Set,
-         Fe = new Map;
-       let Je = 0;
-       return function(ee, ie, He, ye) {
-         AU(ee, ((ee, ie) => {
-           for (const {
-               queue: He,
-               field: be
+           ZW = this.state.keys.every((WW => WW.id !== LW)),
+           xW = void 0 !== OW && OW !== LW && this.state.keys.some((WW => WW.id === OW)),
+           lW = xW ? this.state.keys.filter((WW => WW.id !== LW)).map((WW => WW.id === OW ? tW : WW)) : ZW ? [...this.state.keys, tW] : this.state.keys.map((WW => WW.id === LW ? tW : WW)),
+           AW = cW ? {
+             keyId: LW,
+             modelId: cW.id
+           } : (null === (NW = this.state.selected) || void 0 === NW ? void 0 : NW.keyId) === OW && xW ? null : this.state.selected;
+         return this.update({
+           keys: lW,
+           selected: AW
+         }), LW
+       }
+       renameKey(WW, iW) {
+         const OW = iW.replace(/\s+/g, " ").trim().slice(0, 30);
+         this.update({
+           keys: this.state.keys.map((iW => {
+ ... (8 more added lines; see GitHub link above)
```

#### 281. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6165-L6170` → after: `L8026-L8085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8026-L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8026-L8085) · [Before (L6165-L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6165-L6170)

```diff
-             of PU) {
-             const Me = ee[be];
-             for (let ee = 0; ee < Me.length; ee++) ye(Me.data[ee].getMesh(), He, ie)
-           }
-         })), null === ie || void 0 === ie || ie.forEachSelected(ye), null === He || void 0 === He || He.forEachSelected(ye)
-       }(ee, He, ye, ((ee, He, ye) => {
+           }))
+         })
+       }
+       select(WW) {
+         const iW = this.nextUsedAt(),
+           OW = null === WW ? this.state.keys : this.state.keys.map((OW => OW.id === WW.keyId ? {
+             ...OW,
+             usedAt: iW,
+             usedModelId: WW.modelId
+           } : OW));
+         this.update({
+           keys: OW,
+           selected: WW
+         })
+       }
+       refreshModels(WW, iW, OW) {
+ ... (44 more added lines; see GitHub link above)
```

#### 282. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6172-L6196` → after: `L8087-L8097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8087-L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8087-L8097) · [Before (L6172-L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6172-L6196)

```diff
-         const oe = ee.metadata,
-           Re = ee;
-         let ke = function(ee, ie) {
-           return !0 === (null === ee || void 0 === ee ? void 0 : ee[lM.h]) ? "terrain" : !0 === (null === ee || void 0 === ee ? void 0 : ee[wy.u]) ? "objectBlocks" : !0 === (null === ee || void 0 === ee ? void 0 : ee[wy.F]) ? "textPlanes" : -1 === ie ? "sky" : "other"
-         }(oe, ye);
-         "other" === ke && Re.fye && (ke = "entityParts");
-         const qe = function(ee, ie, He, ye) {
-             return "terrain" === ee ? He ? `${null===ye||void 0===ye?void 0:ye[lM.e]}:${null===ye||void 0===ye?void 0:ye[lM.g]}` : "(all)" : "textPlanes" === ee ? "(all)" : "objectBlocks" === ee || "entityParts" === ee ? ie : (be = ie).split(/[|:#]/)[0].replace(/\d+$/, "") || be;
-             var be
-           }(ke, ee.name, ie, oe),
-           fe = `${ke}\0${qe}`;
-         let Te = Me.get(fe);
-         Te || (Te = {
-           category: ke,
-           label: qe,
-           draws: 0,
- ... (9 more removed lines; see GitHub link above)
+         const OW = this.state,
+           mW = OW.keys.findIndex((iW => iW.id === WW)),
+           EW = OW.keys[mW];
+         if (!EW) return () => {};
+         const NW = OW.keys.filter((iW => iW.id !== WW)),
+           PW = (null === (iW = OW.selected) || void 0 === iW ? void 0 : iW.keyId) === WW ? null : OW.selected;
+         return this.update({
+           keys: NW,
+           selected: PW,
+           remember: NW.length > 0 && OW.remember
+         }), () => {
```

#### 283. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6198` → after: `L8099-L8191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8099-L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8099-L8191) · [Before (L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6198)

```diff
-           if (ee) Fe.set(ee, (null !== (Xe = Fe.get(ee)) && void 0 !== Xe ? Xe : 0) + 1)
+           const NW = this.state.keys.some((WW => UL(WW, EW)));
+           if (NW) return;
+           const PW = [...this.state.keys];
+           PW.splice(Math.min(mW, PW.length), 0, EW);
+           const LW = (null === (iW = OW.selected) || void 0 === iW ? void 0 : iW.keyId) === WW && null === this.state.selected;
+           this.update({
+             keys: PW,
+             selected: LW ? OW.selected : this.state.selected,
+             remember: this.state.remember || OW.remember
+           })
+         }
+       }
+       removeAll() {
+         this.update(jL), this.local && null !== this.local.getItem(bL) && (this.local.setItem(bL, JSON.stringify(jL)), this.local.removeItem(bL))
+       }
+       setRemember(WW) {
+ ... (77 more added lines; see GitHub link above)
```

#### 284. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6200-L6208` → after: `L8193-L8240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8193-L8240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8193-L8240) · [Before (L6200-L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6200-L6208)

```diff
-       })), {
-         dispatched: be,
-         rows: [...Me.values()].sort(((ee, ie) => ie.draws - ee.draws)),
-         byCategory: Ke,
-         terrain: {
-           meshes: Je,
-           chunkColumns: Ue.size,
-           octreeBlocks: Fe.size,
-           maxMeshesPerOctreeBlock: 0 === Fe.size ? 0 : Math.max(...Fe.values())
+       }
+     }
+     async function SL(WW, iW) {
+       var OW;
+       let {
+         provider: mW,
+         key: EW,
+         baseUrl: NW,
+         modelName: PW
+       } = WW;
+       const LW = null !== (OW = null === PW || void 0 === PW ? void 0 : PW.trim()) && void 0 !== OW ? OW : "";
+       let cW = [];
+       try {
+         cW = (await PL(mW, EW, NW).check(iW)).models
+       } catch (wW) {
+         if (!("custom" === mW && wW instanceof XP && ("failed" === wW.problem || "noModel" === wW.problem))) throw wW
+ ... (32 more added lines; see GitHub link above)
```

#### 285. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6212` → after: `L8260-L8277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8260-L8277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8260-L8277) · [Before (L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6212)

```diff
-     const aU = "drawcalls";
+     var yL = OW(4851);
+     const TL = "Super Bot.xd",
+       JL = {
+         ovh: {
+           name: TL,
+           temperature: .6,
+           nativeTools: !0,
+           callFormat: "qwenXml"
+         },
+         deepseek: {
+           name: TL,
+           temperature: 1,
+           nativeTools: !0,
+           callFormat: "deepseek"
+         }
+       };
+ ... (2 more added lines; see GitHub link above)
```

#### 286. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6215` → after: `L8280-L8285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8280-L8285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8280-L8285) · [Before (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6215)

```diff
-       return (0, hK.i)(ee.PR).backendName
+       if ("deepseek" !== WW) return !0;
+       try {
+         return "undefined" !== typeof window && "1" === window.localStorage.getItem(HL)
+       } catch {
+         return !1
+       }
```

#### 287. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6217` → after: `L8287-L8295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8287-L8295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8287-L8295) · [Before (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6217)

```diff
-     class xU {
+ 
+     function uL() {
+       try {
+         return "undefined" !== typeof window && "1" === window.sessionStorage.getItem(hL)
+       } catch {
+         return !1
+       }
+     }
+     const oL = new class {
```

#### 288. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6219` → after: `L8297-L8316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8297-L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8297-L8316) · [Before (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6219)

```diff
-         this.sum = 0, this.min = Number.POSITIVE_INFINITY, this.max = 0, this.count = 0
+         this.state = void 0, this.listeners = new Set, this.refreshing = null, this.getState = () => this.state, this.subscribe = WW => (this.listeners.add(WW), () => {
+           this.listeners.delete(WW)
+         }), this.state = {
+           picked: uL(),
+           status: null,
+           canBuySuperRank: null
+         }, ML.subscribe((() => {
+           null !== ML.getState().selected && this.state.picked && this.update({
+             picked: !1
+           })
+         }))
+       }
+       isAnswering() {
+         var WW;
+         return this.state.picked && "ok" === (null === (WW = this.state.status) || void 0 === WW ? void 0 : WW.availability)
+       }
+ ... (4 more added lines; see GitHub link above)
```

#### 289. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6221-L6222` → after: `L8318-L8321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8318-L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8318-L8321) · [Before (L6221-L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6221-L6222)

```diff
-       add(ee) {
-         this.sum += ee, this.count++, ee < this.min && (this.min = ee), ee > this.max && (this.max = ee)
+       unpick() {
+         this.update({
+           picked: !1
+         })
```

#### 290. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6224-L6225` → after: `L8323-L8328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8323-L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8323-L8328) · [Before (L6224-L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6224-L6225)

```diff
-       hasSamples() {
-         return this.count > 0
+       setStatus(WW) {
+         const iW = this.state.picked && gL(WW, this.state.canBuySuperRank) && nL(WW.provider);
+         this.update({
+           status: WW,
+           picked: iW
+         })
```

#### 291. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6227-L6236` → after: `L8330-L8356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8330-L8356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8330-L8356) · [Before (L6227-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6227-L6236)

```diff
-       summarise() {
-         return 0 === this.count ? {
-           mean: 0,
-           min: 0,
-           max: 0
-         } : {
-           mean: Math.round(this.sum / this.count * 10) / 10,
-           min: this.min,
-           max: this.max
-         }
+       setCanBuySuperRank(WW) {
+         const {
+           status: iW
+         } = this.state;
+         this.update({
+           canBuySuperRank: WW,
+           picked: this.state.picked && (null === iW || gL(iW, WW))
+         })
+       }
+       async refresh() {
+         return this.refreshing ??= (0, NN.postToGameServer)("/ai-helper/super-bot-xd/status", {}).then((WW => {
+           this.setStatus(WW)
+         })).catch((WW => {
+           console.warn("AI Helper: Super Bot.xd's usage couldn't be checked", WW)
+         })).finally((() => {
+           this.refreshing = null
+ ... (11 more added lines; see GitHub link above)
```

#### 292. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6241-L6242` → after: `L8368-L8382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8368-L8382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8368-L8382) · [Before (L6241-L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6241-L6242)

```diff
-       var ie, He;
-       return null !== (ie = null === (He = ee.PR.pT) || void 0 === He ? void 0 : He.Nee) && void 0 !== ie ? ie : null
+       var iW;
+       let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+       if (null === WW) return "Checking whether Super Bot.xd can answer for you\u2026";
+       switch (WW.availability) {
+         case "ok":
+           return null;
+         case "guest":
+           return "Log in to use Super Bot.xd.";
+         case "tooNew":
+           return `Super Bot.xd opens once your account is a week old: ${XL((null!==(iW=WW.availableFrom)&&void 0!==iW?iW:OW)-OW)} to go.`;
+         case "noUsageLeft":
+           return WW.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(WW,iW){const OW=Math.ceil((WW-iW)/36e5);if(OW<=24)return OW<=1?"within the hour":`in ${OW} hours`;return`in ${XL(WW-iW)}`}(WW.resetsAt,OW)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+         case "unavailable":
+           return "Super Bot.xd can't answer right now. Try again later."
+       }
```

#### 293. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6246-L6247` → after: `L8386-L8390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8386-L8390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8386-L8390) · [Before (L6246-L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6246-L6247)

```diff
-       var ie, He;
-       return null !== (ie = null === (He = ee.PR.pT) || void 0 === He ? void 0 : He.modelMeshes) && void 0 !== ie ? ie : null
+       return null !== WW && !WW.isSuper && "noUsageLeft" === WW.availability
+     }
+ 
+     function gL(WW, iW) {
+       return "ok" === WW.availability || !1 !== iW && vL(WW)
```

#### 294. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6251-L6252` → after: `L8394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8394) · [Before (L6251-L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6251-L6252)

```diff
-       var ie, He, ye, be;
-       return ee.PR.Xx().getActiveMeshes().length + (null !== (ie = null === (He = LU(ee)) || void 0 === He ? void 0 : He.drawStats().selected) && void 0 !== ie ? ie : 0) + (null !== (ye = null === (be = CU(ee)) || void 0 === be ? void 0 : be.selectedCount) && void 0 !== ye ? ye : … [truncated]
+       return !0 === WW.canBuySuperRank && vL(WW.status)
```

#### 295. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6256-L6265` → after: `L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8398) · [Before (L6256-L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6256-L6265)

```diff
-       const ie = ee.PR.Xx(),
-         He = DU(ee.PR.engine),
-         ye = YU(ie, LU(ee), CU(ee));
-       return {
-         backend: cU(ee),
-         dispatched: ye,
-         activeMeshes: vU(ee),
-         drawn: He,
-         residual: He ? He.lastFrameDraws - ye.total : null
-       }
+       return DL(WW) ? null : eL(WW.status)
```

#### 296. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6269-L6284` → after: `L8402-L8403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8402-L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8402-L8403) · [Before (L6269-L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6269-L6284)

```diff
-       const ie = function() {
-         var ee;
-         return null !== (ee = (0, ZK.p)(aU)) && void 0 !== ee && ee
-       }();
-       ie && !ee.PR.pT && function(ee) {
-         const ie = wU.get(ee);
-         if (ie) return ie;
-         const He = {
-             draws: 0,
-             lastFrameDraws: 0,
-             instancedDraws: 0,
-             instances: 0
-           },
-           ye = ee,
-           be = ye.drawElementsType.bind(ee),
-           Me = ye.drawArraysType.bind(ee);
+       return WW.picked && null === VL(WW)
+     }
```

#### 297. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6286-L6409` → after: `L8405-L8407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8405-L8407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8405-L8407) · [Before (L6286-L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6286-L6409)

```diff
-         function Ke(ee) {
-           He.draws++, ee && (He.instancedDraws++, He.instances += ee)
-         }
-         ye.drawElementsType = function(ee, ie, He, ye) {
-           Ke(ye), be(ee, ie, He, ye)
-         }, ye.drawArraysType = function(ee, ie, He, ye) {
-           Ke(ye), Me(ee, ie, He, ye)
-         };
-         let Ue = 0;
-         ee.onEndFrameObservable.add((() => {
-           He.lastFrameDraws = He.draws - Ue, Ue = He.draws
-         }));
-         const Fe = () => ({
-           ...He
-         });
-         wU.set(ee, Fe)
- ... (108 more removed lines; see GitHub link above)
+     function fL(WW) {
+       return WW.picked && DL(WW)
+     }
```

#### 298. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6412-L6425` → after: `L8410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8410) · [Before (L6412-L6425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6412-L6425)

```diff
-       const ie = ee.PR.Xx();
-       ie.onBeforeCameraRenderObservable.add((() => {
-         ! function(ee, ie) {
-           const {
-             sE: He
-           } = ee, ye = He.YL(He.names.dW), be = He.YL("lineToEntity");
-           for (const Me of ye) {
-             if (!(0, IU.chainSkipsSmoothing)(ee, Me.Df)) continue;
-             const ye = He.rHe(Me.cL);
-             null === (null === ye || void 0 === ye ? void 0 : ye.Ix) && (0, IU.meshOnScreen)(ye.mesh, ie) && (0, IU.catchUpSkippedSmoothing)(ee, Me.Df)
-           }
-           for (const Me of be)((0, IU.chainSkipsSmoothing)(ee, Me.cL) || (0, IU.chainSkipsSmoothing)(ee, Me._targetEId)) && (0, IU.meshOnScreen)(Me._line, ie) && ((0, IU.catchUpSkippedSmoothing)(ee, Me.cL), (0, IU.catchUpSkippedSmoothing)(ee, Me._targetEId), (0, eF.updateLineTran … [truncated]
-         }(ee, ie.frustumPlanes)
-       }), void 0, !0)
+       return `Usage left: ${WW.left}`
```

#### 299. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6434-L6509` → after: `L8414-L8416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8414-L8416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8414-L8416) · [Before (L6434-L6509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6434-L6509)

```diff
-       var ie;
-       ee.PR.Zye = ee => {
-         const ie = ee.isFrozen;
-         ie && (0, Oe.M)(ee), (0, le.c)(ee), ie && (0, Oe.k)(ee)
-       }, Object.assign(ee, {
-         uE: MF.c.values
-       });
-       let ye = ee.JX;
-       MF.c.subscribe("blockReach", (() => {
-           const ie = ee.bloxd.getBlockReach(ee.gC);
-           ee.JX === ye && (ee.JX = ie), ye = ie
-         })),
-         function(ee) {
-           for (const He of [pU.c, zU, gU, OU]) {
-             const ie = ee.sE.Pye(He(ee));
-             ee.sE.names[ie] = ie
- ... (60 more removed lines; see GitHub link above)
+       const iW = Math.max(1, Math.ceil(WW / dP.k));
+       return 1 === iW ? "1 day" : `${iW} days`
+     }
```

#### 300. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6511-L6620` → after: `L8418-L8433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8418-L8433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8418-L8433) · [Before (L6511-L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6511-L6620)

```diff
-           function Me() {
-             const {
-               pixelSmoothing: Me
-             } = xK.e.get("clientEscMenuOptions");
-             ie.style.imageRendering = (0, dU.O)((0, dU.x)(Me));
-             const Ke = function() {
-               const ee = (0, WU.e)(ye, be);
-               if (null !== ee) {
-                 if (null === ee.grid) {
-                   const ee = ye.getBoundingClientRect();
-                   ie.style.width = `${ee.width}px`, ie.style.height = `${ee.height}px`
-                 } else(0, dU.f)(ie, ee.grid);
-                 He.setSize(ee.width, ee.height)
-               }
-             };
-             ee.PR.resize = Ke, ee.container.UW.jB = Ke, Ke()
- ... (94 more removed lines; see GitHub link above)
+     function BL(WW, iW) {
+       const OW = "unavailable" === WW ? eL(iW) : null;
+       if (OW) return `${OW} Bot.xd is answering instead.`;
+       switch (WW) {
+         case "busy":
+           return "Super Bot.xd is busy, so Bot.xd is answering this one.";
+         case "tooLong":
+           return "That message is too big for your Super Bot.xd usage, so Bot.xd is answering this one.";
+         case "tooLarge":
+           return "That request is too large for Super Bot.xd, so Bot.xd is answering this one.";
+         case "unchecked":
+           return "Super Bot.xd's safety check is busy, so Bot.xd is answering this one.";
+         case "contextRefused":
+           return "Something in your code didn't pass Super Bot.xd's safety check, so Bot.xd is answering this one.";
+         default:
+           return "Super Bot.xd couldn't answer, so Bot.xd is answering this one."
```

#### 301. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6623-L6938` → after: `L8436-L8449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8436-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8436-L8449) · [Before (L6623-L6938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6623-L6938)

```diff
-     var tF = He(37440),
-       ZF = He(34824);
-     class wF {
-       constructor(ee, ie, He, ye, be) {
-         this.uk = ee, this.bloxd = ie, this.userContext = He, this.output = ye, this.sounds = be, this.chunks = void 0, this.actionRay = {
-           origin: [0, 0, 0],
-           direction: [0, 0, 1]
-         }, this.chunks = new WF(ee.xR)
-       }
-       disposeGameOutput() {
-         this.output.disposeAll(), this.setCrosshairShown(null)
-       }
-       pE(ee) {
-         var ie;
-         const He = null === (ie = this.uk.sE.M_(this.toLocalId(ee))) || void 0 === ie ? void 0 : ie.position;
-         if (!He) throw new Error(`Entity ${ee} has no replicated position`);
- ... (300 more removed lines; see GitHub link above)
+     async function qL(WW) {
+       if (function(WW) {
+           var iW, OW, mW, EW, NW, PW, LW;
+           return WW.messages.length > 12 || WW.messages.some((WW => WW.content.length > EN)) || (null !== (iW = null === (OW = WW.toolsJson) || void 0 === OW ? void 0 : OW.length) && void 0 !== iW ? iW : 0) > 1e5 || (null !== (mW = null === (EW = WW.request) || void 0 === EW ? vo … [truncated]
+         }(WW)) return {
+         outcome: "tooLarge"
+       };
+       try {
+         return await (0, NN.postToGameServer)("/ai-helper/super-bot-xd/ask", WW)
+       } catch (iW) {
+         if (iW instanceof eP.c && 413 === iW.httpCode) return {
+           outcome: "tooLarge"
+         };
+         throw iW
```

#### 302. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6941-L6942` → after: `L8452-L8467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8452-L8467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8452-L8467) · [Before (L6941-L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6941-L6942)

```diff
-     var DF = He(39919);
-     const PF = 256;
+     async function RL(WW, iW) {
+       return iW ? await new Promise(((OW, mW) => {
+         const EW = () => {
+           mW(new DOMException("The Super Bot.xd request was stopped", "AbortError"))
+         };
+         iW.aborted ? EW() : (iW.addEventListener("abort", EW, {
+           once: !0
+         }), WW.then(OW, mW).finally((() => {
+           iW.removeEventListener("abort", EW)
+         })))
+       })) : await WW
+     }
+     var GL = OW(27),
+       IL = OW(25),
+       aL = OW(3125);
+     let rL = null;
```

#### 303. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6944-L6952` → after: `L8469-L8508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8469-L8508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8469-L8508) · [Before (L6944-L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6944-L6952)

```diff
-     function AF(ee, ie, He) {
-       const ye = function(ee) {
-         const ie = (0, Oe.h)(ee, "groundArrowPathTex", {
-             width: PF,
-             height: PF,
-             mipmaps: !1,
-             samplingMode: Ee.h.nearestNearestMipLinear,
-             hasAlpha: !0,
-             wrap: Ee.b.wrap
+     function zL() {
+       rL ??= Promise.resolve().then((() => OW(3132))), rL.then((WW => {
+         let {
+           purchasesAllowed: iW
+         } = WW;
+         oL.setCanBuySuperRank(iW())
+       }), (WW => {
+         rL = null, console.warn("AI Helper: couldn't find out whether Super rank is sold here", WW)
+       }))
+     }
+     let FL = !1,
+       QL = null;
+     async function Wc() {
+       if (FL) return !0;
+       FL = !0;
+       try {
+ ... (24 more added lines; see GitHub link above)
```

#### 304. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6954-L6981` → after: `L8510-L8519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8510-L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8510-L8519) · [Before (L6954-L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6954-L6981)

```diff
-           He = (0, Oe.f)(ie),
-           ye = PF;
-         He.clearRect(0, 0, ye, ye), He.fillStyle = "white";
-         const be = 3,
-           Me = ye / be,
-           Ke = .1 * ye,
-           Ue = .2 * Me;
-         for (let Fe = 0; Fe < be; Fe++) {
-           const ee = Fe * Me,
-             ie = ee + .3 * Me,
-             be = ee + .6 * Me;
-           He.beginPath(), He.moveTo(Ke, be), He.lineTo(ye / 2, ie), He.lineTo(ye - Ke, be), He.lineTo(ye - Ke, be + Ue), He.lineTo(ye / 2, ie + Ue), He.lineTo(Ke, be + Ue), He.closePath(), He.fill()
-         }
-         return (0, Oe.Q)(ie, !0, !1), ie
-       }(ee);
-       return (0, ne.b)({
- ... (12 more removed lines; see GitHub link above)
+           middleScreenPopupContainerClassName: wP.b
+         });
+         return QL = EW, EW.getResult().finally((() => {
+           QL === EW && (QL = null)
+         })), !0
+       } catch (iW) {
+         return console.warn("AI Helper: the out of usage popup couldn't be opened", iW), !0
+       } finally {
+         FL = !1
+       }
```

#### 305. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6984-L6988` → after: `L8522-L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8522-L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8522-L8682) · [Before (L6984-L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6984-L6988)

```diff
-       width: 1,
-       alpha: .8
-     };
-     let VF = YF;
-     const aF = new Set;
+         wood: ["Maple Log"],
+         log: ["Maple Log"],
+         logs: ["Maple Log"],
+         "wood log": ["Maple Log"],
+         "wood block": ["Maple Log"],
+         "wooden block": ["Maple Log"],
+         "tree log": ["Maple Log"],
+         "oak wood": ["Maple Log"],
+         planks: ["Maple Wood Planks"],
+         plank: ["Maple Wood Planks"],
+         "wood planks": ["Maple Wood Planks"],
+         "wood plank": ["Maple Wood Planks"],
+         "wooden planks": ["Maple Wood Planks"],
+         "oak planks": ["Maple Wood Planks"],
+         leaves: ["Maple Leaves"],
+         door: ["Maple Door"],
+ ... (145 more added lines; see GitHub link above)
```

#### 306. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6991-L6994` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8685) · [Before (L6991-L6994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6991-L6994)

```diff
-       VF = null !== ee && void 0 !== ee ? ee : YF;
-       for (const ie of aF)(0, ne.c)(ie, {
-         alpha: VF.alpha
-       })
+       return WW.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z0-9]+/).filter((WW => WW.length > 1))
```

#### 307. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L6996-L7021` → after: `L8687-L8739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8687-L8739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8687-L8739) · [Before (L6996-L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L6996-L7021)

```diff
-     const xF = .02;
-     class LF {
-       constructor(ee, ie, He) {
-         this.uk = ee, this.buffers = ie, this.positions = void 0, this.uvs = void 0, this.cachedIndices = void 0, this.edgeResult = {
-           pos: new Float32Array(2),
-           axis: "x"
-         }, this.wallClimbResult = new Float32Array(2), this.mesh = null, this.material = null, this.lastVertPairCount = 0, this.uvOffset = 0, this.colour = void 0, this.positions = new Float32Array(6 * He), this.uvs = new Float32Array(4 * He), this.cachedIndices = new Uint16Array … [truncated]
-       }
-       setColour(ee) {
-         this.colour = ee, this.material && function(ee, ie) {
-           (0, ne.c)(ee, {
-             emissiveColor: (0, DF.c)(ie)
-           })
-         }(this.material, ee)
-       }
-       render(ee, ie) {
- ... (10 more removed lines; see GitHub link above)
+ 
+     function Lc(WW) {
+       return WW.length > 4 && WW.endsWith("ies") ? `${WW.slice(0,-3)}y` : WW.length > 3 && WW.endsWith("s") && !WW.endsWith("ss") ? WW.slice(0, -1) : WW
+     }
+ 
+     function cc(WW) {
+       return new Set(Pc(WW).map((WW => Lc(WW))))
+     }
+     const wc = /^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(|^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)/gm;
+ 
+     function tc(WW) {
+       return WW.split("\n").map((WW => WW.replace(/\/\/.*$/, "").replace(/(["'`])(?:\\.|(?!\1).)*\1/g, '""'))).join("\n").replace(/\/\*[^]*?\*\//g, (WW => WW.replace(/[^\n]/g, ""))).split("\n")
+     }
+ 
+     function Zc(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ ... (37 more added lines; see GitHub link above)
```

#### 308. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7023-L7046` → after: `L8741-L8768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8741-L8768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8741-L8768) · [Before (L7023-L7046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7023-L7046)

```diff
-       buildStripGeometry(ee) {
-         const {
-           sampleX: ie,
-           sampleY: He,
-           sampleZ: ye,
-           sampleAirborne: be,
-           perp: Me,
-           direction: Ke
-         } = this.buffers, [Ue, Fe] = Me, [Je, oe] = Ke, Re = this.positions, ke = this.uvs;
-         let qe = 0,
-           fe = 0;
-         qe = this.writeStripVerts(Re, ke, qe, ie[0], He[0] + xF, ye[0], Ue, Fe, fe);
-         for (let Te = 1; Te < ee; Te++) {
-           const ee = He[Te - 1],
-             Me = He[Te],
-             Ke = Me - ee,
- ... (8 more removed lines; see GitHub link above)
+       return EW
+     }
+ 
+     function Ac(WW) {
+       return lc(WW).map((WW => WW.name))
+     }
+     const bc = "(\"[^\"\\n]*\"|'[^'\\n]*')";
+ 
+     function jc(WW, iW) {
+       const OW = [];
+       let mW = 0,
+         EW = "",
+         NW = "",
+         PW = iW;
+       for (let LW = iW; LW < WW.length; LW++) {
+         const iW = WW[LW];
+ ... (12 more added lines; see GitHub link above)
```

#### 309. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7048-L7072` → after: `L8770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8770) · [Before (L7048-L7072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7048-L7072)

```diff
-           qe = this.writeStripVerts(Re, ke, qe, ie[Te], Me + xF, ye[Te], Ue, Fe, fe)
-         }
-         return qe
-       }
-       writeStripVerts(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
-         const Je = this.buffers.worldOffset,
-           oe = VF.width / 2;
-         ee[He] = ye + Ke * oe - Je[0], ee[He + 1] = be - Je[1], ee[He + 2] = Me + Ue * oe - Je[2], ee[He + 3] = ye - Ke * oe - Je[0], ee[He + 4] = be - Je[1], ee[He + 5] = Me - Ue * oe - Je[2];
-         const Re = He / 6 * 4,
-           ke = Fe / 3;
-         return ie[Re] = 0, ie[Re + 1] = ke, ie[Re + 2] = 1, ie[Re + 3] = ke, He + 6
-       }
-       buildWallClimb(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re) {
-         const {
-           sampleX: ke,
-           sampleZ: qe
- ... (9 more removed lines; see GitHub link above)
+           "," === iW && 0 === mW && (OW.push((NW + WW.slice(PW, LW)).trim()), NW = "", PW = LW + 1)
```

#### 310. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7116-L7122` → after: `L8777-L8782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8777-L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8777-L8782) · [Before (L7116-L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7116-L7122)

```diff
-       const He = ie - ee;
-       if (Math.abs(He) <= .001) return 1;
-       const ye = Math.floor(ee),
-         be = Math.floor(ie);
-       if (ye === be) return 1;
-       const Me = ((He > 0 ? be : ye) - ee) / He;
-       return Me <= 0 || Me >= 1 ? 1 : Me
+       var OW;
+       if (!/^[A-Za-z_$][\w$]*$/.test(iW)) return;
+       const mW = iW.replaceAll("$", "\\$"),
+         EW = `\\((?:[^()]*[\\s,])?${mW}(?![\\w$])[^()]*\\)`,
+         NW = new RegExp(`(?:const|let|var)\\s+${mW}(?![\\w$])|${mW}\\s*(?:\\+?=(?![=>])|=>)|${EW}\\s*=>|function\\s*[\\w$]*\\s*${EW}`, "g");
+       return 1 === (0, bi.e)(WW, NW, bi.k).length ? null === (OW = new RegExp(`\\b(?:const|let|var)\\s+${mW}\\s*=\\s*${bc}\\s*(?:;|//|$)`, "m").exec(WW)) || void 0 === OW ? void 0 : OW[1] : void 0
```

#### 311. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7127-L7139` → after: `L8785-L8903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8785-L8903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8785-L8903) · [Before (L7127-L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7127-L7139)

```diff
-     function mF(ee, ie) {
-       const He = uF.get(ee);
-       if (null === ie) return void(He && (ee.childrenNodeParams = He, uF.delete(ee)));
-       const ye = null !== He && void 0 !== He ? He : ee.childrenNodeParams,
-         be = ee.childrenNodeParams.every((ee => ee.softTolerance === ie));
-       He && be || (uF.set(ee, ye), ee.childrenNodeParams = ye.map((ee => ({
-         ...ee,
-         softTolerance: ie
-       }))))
-     }
-     class lF {
-       constructor(ee) {
-         this.uk = ee, this.nametagBases = new WeakMap, this.nametags = new Map, this.rotations = new Set
+     function kc(WW, iW, OW) {
+       let mW;
+       const EW = function(WW) {
+         const iW = WW.split("\n").slice(1).map((WW => WW.trim())).find((WW => "" !== WW && !WW.startsWith("#") && !WW.startsWith("|") && !WW.startsWith("**") && !WW.startsWith("```")));
+         if (!iW) return "";
+         const OW = iW.search(/\.\s/),
+           mW = -1 === OW ? iW : iW.slice(0, OW + 1);
+         return mW.length > 110 ? `${mW.slice(0,107)}...` : mW
+       }(OW);
+       return mW = "api" === WW ? `api.${iW}(${Ac(OW).join(", ")})${EW?` \u2014 ${EW}`:""}` : "callback" === WW ? `${iW}(${Ac(OW).join(", ")})${EW?` \u2014 ${EW}`:""}` : "clientOption" === WW ? `${iW}: ${function(WW){var iW,OW;return null!==(iW=null===(OW=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       Did you mean $ {
+         iW.map((WW => `"${WW}"`)).join(" or ")
+       } ? `:`
+       The closest name is "${iW[0]}", which may be something
+       else.
+       `}function Sc(WW){return WW.split("\n").slice(1).map((WW=>WW.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((WW=>""!==WW&&!WW.startsWith("#")))}class Yc{constructor(WW){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+ ... (103 more added lines; see GitHub link above)
```

#### 312. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7141-L7165` → after: `L8905-L8984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8905-L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8905-L8984) · [Before (L7141-L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7141-L7165)

```diff
-       setNametagOffset(ee, ie) {
-         const He = this.uk.sE.aye(ee);
-         if (this.nametags.get(ee) !== He && this.nametags.delete(ee), !He) return;
-         const ye = this.nametagBases.get(He),
-           be = ye && He.nameYOffset === ye.written ? ye.base : He.nameYOffset;
-         if (0 === ie) return void(ye && (He.nameYOffset = be, this.nametagBases.delete(He), this.nametags.delete(ee)));
-         const Me = (null !== be && void 0 !== be ? be : vF.d) + ie;
-         this.nametagBases.set(He, {
-           base: be,
-           written: Me
-         }), this.nametags.set(ee, He), He.nameYOffset = Me
-       }
-       setFacingTolerance(ee, ie) {
-         const He = this.rotationState(ee);
-         He ? (mF(He, ie), null === ie ? this.rotations.delete(ee) : this.rotations.add(ee)) : this.rotations.delete(ee)
-       }
- ... (9 more removed lines; see GitHub link above)
+     }))
+   }
+   return [...OW].map((WW => `"${WW}" isn't an item or block name.${Kc(this.suggestNames(WW))}`))
+ }
+ aliasedItemNames(WW) {
+   const iW = new Set(this.itemAndBlockNames),
+     OW = new Map,
+     mW = /(?:[[,:]|(?:^|[^=!<>])=)\s*(["'])([A-Z][a-z]+(?: [A-Z][a-z]+)+)\1(?=\s*(?:[,\]});]|\/\/|$))/gm;
+   for (const EW of WW.matchAll(mW)) {
+     const WW = EW[2],
+       mW = iW.has(WW) ? void 0 : this.suggestNames(WW);
+     null !== mW && void 0 !== mW && mW.isDecided && mW.isSure && OW.set(WW, mW.names[0])
+   }
+   return [...OW].map((WW => {
+     let [iW, OW] = WW;
+     return `"${iW}" isn't an item or block name, so giving or selling it fails. Did you mean "${OW}"?`
+ ... (64 more added lines; see GitHub link above)
```

#### 313. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7167-L7171` → after: `L8986-L8995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L8986-L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L8986-L8995) · [Before (L7167-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7167-L7171)

```diff
-         this.rotations.clear()
-       }
-       rotationState(ee) {
-         var ie;
-         return null !== (ie = this.uk.sE.getState(ee, "meshRotation")) && void 0 !== ie ? ie : null
+       }))
+     }(WW)) {
+     const WW = this.byName.get(OW);
+     if ("callback" === (null === WW || void 0 === WW ? void 0 : WW.kind))
+       for (const EW of mW.matchAll(/\breturn\s+["']((?:[Pp]revent|[Cc]ancel|[Ss]top|[Bb]lock|[Dd]eny)\w*)["']/g)) {
+         const mW = EW[1];
+         if (WW.text.includes(`"${mW}"`)) continue;
+         const NW = [...new Set([...WW.text.matchAll(/Return "(prevent[A-Za-z]*)"/g)].map((WW => WW[1])))],
+           PW = NW.length > 0 ? `Did you mean ${NW.map((WW=>`"${WW}"`)).join(" or ")}?` : /Return false/i.test(WW.text) ? `To stop it, return false instead of "${mW}".` : "Check Show Docs for what it can return.";
+         iW.add(`${OW} can't use "${mW}" to stop anything. ${PW}`)
```

#### 314. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7174-L7229` → after: `L9019-L9299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9019-L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L9019-L9299) · [Before (L7174-L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7174-L7229)

```diff
-     var SF = He(39305);
-     class nF {
-       constructor(ee) {
-         this.uk = ee, this.meshes = new Map, this.materials = new Map, this.nextKey = 1
-       }
-       create(ee, ie, He) {
-         const ye = this.nextKey++,
-           be = this.uk.PR,
-           Me = (0, Be.n)(be, `gameMesh${ye}`, {
-             positions: ee.positions.slice(),
-             indices: ee.indices.slice(),
-             ...ee.uvs ? {
-               uvs: ee.uvs.slice()
-             } : {}
-           }),
-           Ke = this.material(ie);
- ... (40 more removed lines; see GitHub link above)
+   }
+   const EW = WW.trim().replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/\s+/).map((WW => Object.hasOwn(Oc, WW) ? Oc[WW] : WW)).filter(Boolean).join(" "),
+     NW = null !== (iW = this.namesByLowerCase.get(OW)) && void 0 !== iW ? iW : this.namesByLowerCase.get(EW);
+   if (NW) return {
+     names: [NW],
+     isSure: !0,
+     isDecided: !0
+   };
+   const PW = this.closestItemAndBlockNames(EW),
+     LW = WW => Pc(WW).filter((WW => !Nc.has(WW) && !Mc.has(WW))).map(Lc),
+     cW = 1 === PW.length ? LW(PW[0]) : [];
+   return {
+     names: PW,
+     isSure: 1 === PW.length && LW(EW).every((WW => cW.includes(WW))),
+     isDecided: !1
+   }
+ ... (265 more added lines; see GitHub link above)
```

#### 315. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7231-L7245` → after: `L9301-L9314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9301-L9314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L9301-L9314) · [Before (L7231-L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7231-L7245)

```diff
-         }(ee);
-         let He = this.materials.get(ie);
-         return He || (He = this.cachedMaterial(ee), this.materials.set(ie, He)), He.material
-       }
-       cachedMaterial(ee) {
-         switch (ee.kind) {
-           case void 0:
-           case "flatEmissive": {
-             var ie, He;
-             const ye = this.flatEmissive(ee.rgb, ee.alpha, null !== (ie = ee.opaque) && void 0 !== ie && ie, null !== (He = ee.onTop) && void 0 !== He && He);
-             return {
-               material: ye,
-               dispose: () => {
-                 ye.dispose()
-               }
+         },
+         PW = [],
+         LW = (WW, iW) => {
+           if (TW().isPropertyAssignment(WW) || TW().isShorthandPropertyAssignment(WW)) {
+             const {
+               name: EW
+             } = WW;
+             if ((TW().isIdentifier(EW) || TW().isStringLiteral(EW)) && EW.text === OW) {
+               const LW = WW.parent.properties.some((WW => nO(WW) === mW));
+               PW.push({
+                 edit: NW(EW, TW().isShorthandPropertyAssignment(WW) ? `${mW}: ${OW}` : mW),
+                 depth: iW,
+                 EZ: LW
+               })
```

#### 316. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7248-L7255` → after: `L9317-L9384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9317-L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L9317-L9384) · [Before (L7248-L7255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7248-L7255)

```diff
-           case "chevronPath": {
-             const ie = AF(this.uk.PR.Xx(), ee.colour, ee.alpha);
-             return {
-               material: ie,
-               dispose: () => {
-                 ie.dispose(!0, !0)
-               }
-             }
+           TW().isFunctionLike(WW) || TW().isCallExpression(WW) || TW().isNewExpression(WW) || TW().isTaggedTemplateExpression(WW) || TW().isPropertyAccessExpression(WW) || TW().isElementAccessExpression(WW) || TW().forEachChild(WW, (OW => {
+             LW(OW, iW + (TW().isPropertyAssignment(WW) ? 1 : 0))
+           }))
+         },
+         cW = Jc(EW, iW);
+       for (const wW of cW)
+         for (const WW of wW.arguments) LW(WW, 0);
+       if (PW.length > 0) {
+         const iW = Math.min(...PW.map((WW => WW.depth)));
+         return eO(WW, PW.flatMap((WW => WW.depth !== iW || WW.EZ ? [] : [WW.edit])))
+       }
+       return eO(WW, cW.flatMap((WW => {
+         const iW = WW.arguments.find((WW => TW().isStringLiteral(WW) && WW.text === OW));
+         return iW ? [NW(iW, mW)] : []
+       })))
+     }(WW, iW.method, iW.from, iW.to);
+ ... (52 more added lines; see GitHub link above)
```

#### 317. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7257-L7263` → after: `L9386-L9860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9386-L9860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L9386-L9860) · [Before (L7257-L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7257-L7263)

```diff
-           case "furnaceFire": {
-             const ee = this.furnaceFire();
-             return {
-               material: ee,
-               dispose: () => {
-                 ee.dispose(!1, !0)
-               }
+           TW().forEachChild(WW, (WW => {
+             PW(WW, cW)
+           }))
+         };
+       return PW(EW, !1), eO(WW, NW)
+     }(WW, OW, mW, "call" === EW);
+     if ("compared" === EW || "comparedBlock" === EW) {
+       const iW = `(["'])${function(WW){return WW.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(OW)}\\1`;
+       return ("comparedBlock" === EW ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${iW}`, `${iW}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${iW}`, `${iW}\\s*[!=]==?`, `\\bcase\\s+${iW}\\s*:`, `\\.includes\\(\\s*${iW}\\s*\\)`]).reduce(((WW, iW) => WW.replace(new RegExp(iW, "g"), … [truncated]
+     }
+     if (void 0 !== NW) {
+       return BW(WW).filter((WW => WW.name === NW && WW.topLevel)).reduceRight(((WW, iW) => WW.slice(0, iW.from) + Cc(WW.slice(iW.from, iW.to), OW, mW) + WW.slice(iW.to)), WW)
+     }
+     return Cc(WW, OW, mW)
+   }), WW)
+ }
+ ... (459 more added lines; see GitHub link above)
```

#### 318. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7266-L7268` → after: `L9929-L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR9929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L9929-L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L9929-L10054) · [Before (L7266-L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7266-L7268)

```diff
-         }
-       }
-       furnaceFire() {
+         }), dW.map((iW => nW(iW.name, iW.tier ? LL[iW.tier] : "", {
+           keyId: WW.id,
+           modelId: iW.id
+         }))), HW && WW.models.length > 1 && (0, PW.jsxs)("button", {
+           className: "WorldCodeAiKeyLearnMore WorldCodeAiModelUnfold",
+           "aria-label": `Show all ${jW} models`,
+           onClick: iW => {
+             const OW = iW.currentTarget.closest(".WorldCodeAiModelGroup");
+             TW((iW => new Set(iW).add(WW.id))), setTimeout((() => {
+               var WW;
+               null === OW || void 0 === OW || null === (WW = OW.querySelector("input")) || void 0 === WW || WW.focus()
+             }))
+           },
+           children: ["Show all ", WW.models.length, " models"]
+         })]
+       }, WW.id)
+ ... (110 more added lines; see GitHub link above)
```

#### 319. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7270-L7274` → after: `L10056-L10100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR10056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L10056-L10100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L10056-L10100) · [Before (L7270-L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7270-L7274)

```diff
-         const ie = this.uk.PR.Xx(),
-           He = {
-             wrapU: Ee.b.clamp,
-             wrapV: Ee.b.clamp,
-             hasAlpha: !0
+         null === (WW = jW.current) || void 0 === WW || WW.focus()
+       }))
+     },
+     [kW, sW] = (0, mW.useState)(new Set),
+     [MW, KW] = (0, mW.useState)(null);
+   return (0, PW.jsxs)("div", {
+     className: "WorldCodeAiAiSettings",
+     children: [OW && (0, PW.jsxs)("div", {
+       className: "WorldCodeAiAiSettingsSection",
+       children: [(0, PW.jsx)(mw, {
+         allow: iW,
+         onChange: WW => {
+           tW(null), OW(WW)
+         }
+       }), (0, PW.jsx)("p", {
+         className: "WorldCodeAiAiSettingsNote",
+ ... (29 more added lines; see GitHub link above)
```

#### 320. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7276-L7292` → after: `L10102-L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR10102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L10102-L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L10102-L10118) · [Before (L7276-L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7276-L7292)

```diff
-           ye = (0, Ee.t)(ie, {
-             url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAYCAYAAADDLGwtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADUSURBVCiRnVI7DoMwDH1GDKzNyFIOkgNUohKnYWTq2LkHiUSlHqAH6cSYuVs6hHxwAqV9UiQnmGf7+REijLI28f38nMjFBRjaXqPtNX9OE9EIoBFoew2jKl+hdIF91ABE+AEAMDHGmQnHgz2s7yI3RA70 … [truncated]
-             noMipmap: !0,
-             invertY: !1,
-             samplingMode: Ee.h.nearest,
-             sets: He
-           });
-         return null === (ee = this.uk.PR.pT) || void 0 === ee || ee.prepareTexture(ye), (0, ne.b)({
-           name: "furnaceFire",
-           yp: ie,
-           sets: {
-             ...Oe.c,
-             transparencyMode: Ze.s.alphaTest,
-             useAlphaFromDiffuseTexture: !0,
-             diffuseTexture: ye,
-             emissiveColor: [1, 1, 1],
- ... (1 more removed lines; see GitHub link above)
+           children: [1 === LW.length ? "Forget your key" : `Forget all ${LW.length} keys`, " in this browser?", (0, PW.jsx)("button", {
+             className: "WorldCodeAiLinkButton WorldCodeAiModelRemove",
+             onClick: () => {
+               ML.removeAll(), xW(!1), tW(null), AW(!0)
+             },
+             children: "Yes"
+           }), (0, PW.jsx)("button", {
+             className: "WorldCodeAiLinkButton",
+             autoFocus: !0,
+             onClick: UW,
+             children: "No"
+           })]
+         }) : (0, PW.jsx)("button", {
+           ref: jW,
+           className: "WorldCodeAiKeyLearnMore",
+           onClick: () => {
+ ... (1 more added lines; see GitHub link above)
```

#### 321. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7294-L7313` → after: `L10120-L10141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR10120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L10120-L10141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L10120-L10141) · [Before (L7294-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7294-L7313)

```diff
-           freeze: !1
-         }).mirror
-       }
-       flatEmissive(ee, ie, He, ye) {
-         const be = He ? {} : {
-           alpha: ie,
-           transparencyMode: Ze.s.alphaBlend,
-           disableDepthWrite: !0,
-           depthFunction: ye ? Ze.k.always : 0
-         };
-         return (0, ne.b)({
-           name: "gameMeshFlatEmissive",
-           yp: this.uk.PR.Xx(),
-           sets: {
-             specularColor: [0, 0, 0],
-             diffuseColor: [0, 0, 0],
- ... (4 more removed lines; see GitHub link above)
+           children: "Forget all keys"
+         })
+       }), 0 === LW.length && lW && (0, PW.jsx)("p", {
+         ref: bW,
+         className: "WorldCodeAiAiSettingsNote WorldCodeAiKeyRemoved",
+         tabIndex: -1,
+         children: "All keys forgotten in this browser. Bot.xd answers now. To stop a key working everywhere, delete it on its company's website."
+       }), wW && (0, PW.jsxs)("p", {
+         ref: bW,
+         className: "WorldCodeAiAiSettingsNote WorldCodeAiKeyRemoved",
+         tabIndex: -1,
+         children: [wW.name, " removed.", wW.wasInUse && " Bot.xd answers now.", wW.keyPage && (0, PW.jsxs)(PW.Fragment, {
+           children: [" ", "To stop it working everywhere, delete it on", " ", (0, PW.jsxs)("a", {
+             href: wW.keyPage,
+             target: "_blank",
+             rel: "noreferrer noopener",
+ ... (6 more added lines; see GitHub link above)
```

#### 322. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7315-L7471` → after: `L10143-L10196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR10143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L10143-L10196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L10143-L10196) · [Before (L7315-L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7315-L7471)

```diff
-           freeze: !0
-         }).mirror
-       }
-     }
-     var jF = He(39922);
-     const sF = [0, 0, 0];
-     class IF {
-       constructor(ee) {
-         this.uk = ee, this.pools = new Set, this.ctx = {
-           budget: 0,
-           frame: 0,
-           lit: !1
-         }, this.onBeforeRender = () => {
-           const {
-             ctx: ee
-           } = this;
- ... (141 more removed lines; see GitHub link above)
+           children: "Undo"
+         })]
+       }), (0, PW.jsx)(Zw, {
+         labelledBy: "WorldCodeAiModelTitle",
+         onPicked: () => {
+           tW(null), KW(null)
+         },
+         canRename: !0,
+         onEdit: NW,
+         refreshingIds: kW,
+         keyNote: MW,
+         onRefresh: WW => {
+           (async WW => {
+             const iW = CP(WW.provider, WW.baseUrl, !0);
+             sW((iW => new Set(iW).add(WW.id))), KW(null);
+             try {
+ ... (38 more added lines; see GitHub link above)
```

#### 323. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7473-L7485` → after: `L10198-L10243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L10198-L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L10198-L10243) · [Before (L7473-L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7473-L7485)

```diff
-         ie.splice(0, He)
-       }
-       onBuilt(ee, ie, He) {
-         const ye = this.uk.PR.vx;
-         if (this.xf) return void ye.delete(ie);
-         const {
-           scale: be,
-           yaw: Me
-         } = this.model;
-         ye.setScale(ie, be, be, be), ye.setRotationEulerY(ie, Me), this.ids[ee] = ie, this.state[ee] = 3, this.shown[ee] = 0, this.place(ee, {
-           budget: 0,
-           frame: He,
-           lit: this.uk.PR.GT
+       })]
+     }), (0, PW.jsx)(bw, {})]
+   })
+ }
+ const Uw = ["anthropic", "openai", "gemini", "openrouter"];
+ 
+ function kw(WW) {
+   let {
+     provider: iW,
+     children: OW
+   } = WW;
+   return (0, PW.jsx)("a", {
+     href: vP[iW].keyPage,
+     target: "_blank",
+     rel: "noreferrer noopener",
+     children: OW
+ ... (30 more added lines; see GitHub link above)
```

#### 324. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7488-L7524` → after: `L10246-L10355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR10246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L10246-L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L10246-L10355) · [Before (L7488-L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7488-L7524)

```diff
-       sweepLight(ee) {
-         const {
-           count: ie
-         } = this;
-         if (0 !== ie)
-           for (let He = Math.ceil(ie / 30); He > 0; He--) {
-             const He = this.sweep = (this.sweep + 1) % ie;
-             this.shown[He] && ee.frame - this.litFrame[He] >= 30 && this.relight(He, ee.frame, !1)
-           }
-       }
-     }
-     class NF {
-       constructor(ee) {
-         this.uk = ee, this.gameFar = null, this.engineFar = 0
-       }
-       set(ee) {
- ... (21 more removed lines; see GitHub link above)
+     }), [EW]), "custom" === OW) return (0, PW.jsx)("div", {
+     className: "WorldCodeAiKeyExplainer",
+     children: (0, PW.jsx)("p", {
+       className: "WorldCodeAiAiSettingsNote",
+       children: "Paste the key for that server, or leave it empty if it doesn't need one. It goes only to that server, never to Bloxd."
+     })
+   });
+   const cW = OW ? vP[OW] : null;
+   return (0, PW.jsxs)("div", {
+     className: "WorldCodeAiKeyExplainer",
+     children: [(0, PW.jsxs)("ul", {
+       ref: LW,
+       id: "WorldCodeAiKeyExplainerLines",
+       className: "WorldCodeAiKeyExplainerLines",
+       children: [(0, PW.jsx)("li", {
+         children: cW ? `An API key works like a password for ${cW.shortName}'s AI (it isn't your ${cW.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+ ... (94 more added lines; see GitHub link above)
```

#### 325. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7526-L7555` → after: `L10357-L10608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR10357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L10357-L10608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L10357-L10608) · [Before (L7526-L7555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7526-L7555)

```diff
-         (null === ee || void 0 === ee ? void 0 : ee.XH) !== (null === (ie = this.perch) || void 0 === ie ? void 0 : ie.XH) && this.drawn && (this.fromPos.jD(this.drawnPos), this.fromRotation.jD(this.drawnRotation), this.easeFromMs = this.uk.lY, this.easing = !0), this.perch = ee
-       }
-       moving() {
-         return null !== this.perch || this.easing
-       }
-       forget() {
-         this.drawn = !1, this.easing = !1
-       }
-       place(ee, ie, He) {
-         this.perch && this.placeOnHead(this.perch, He) || (this.drawnPos.set(ee[0], ee[1], ee[2]), Ne.Quaternion.RotationYawPitchRollToRef(ie, 0, 0, this.drawnRotation));
-         const ye = (this.uk.lY - this.easeFromMs) / 250;
-         if (this.easing && ye < 1) {
-           const ee = ye * ye * (3 - 2 * ye);
-           Ne.rf.LerpToRef(this.fromPos, this.drawnPos, ee, this.drawnPos), Ne.Quaternion.SlerpToRef(this.fromRotation, this.drawnRotation, ee, this.drawnRotation)
-         } else this.easing = !1;
-         this.drawn = !0
- ... (14 more removed lines; see GitHub link above)
+         if (!xW || !dW) return;
+         const iW = ML.addKey({
+           provider: xW,
+           key: TW(xW),
+           baseUrl: "custom" === xW && null !== (WW = fP(KW)) && void 0 !== WW ? WW : void 0,
+           models: dW
+         }, vW, null === cW || void 0 === cW ? void 0 : cW.id);
+         ("" !== HW.trim() || cW) && ML.renameKey(iW, HW), wW()
+       })() : (async () => {
+         const iW = VP(jW);
+         UW(iW), XW(null);
+         const OW = null !== xW && void 0 !== xW ? xW : pP(iW),
+           mW = TW(OW, iW);
+         if ("" === mW && "custom" !== OW) return void fW("Paste your key first.");
+         if (!OW) return void fW("Pick the company your key is from.");
+         const EW = "custom" === OW ? fP(KW) : null;
+ ... (236 more added lines; see GitHub link above)
```

#### 326. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7557-L7579` → after: `L10610-L10665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR10610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L10610-L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L10610-L10665) · [Before (L7557-L7579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7557-L7579)

```diff
-     class FJ {
-       constructor(ee) {
-         this.uk = ee, this.models = new Set, this.cosmeticLoads = new Set, this.brokenCosmetics = new Set, this.typeClips = new Map, this.ctx = {
-           frame: 0,
-           lit: !1,
-           offset: [0, 0, 0],
-           timeS: 0
-         }, this.onBeforeRender = () => {
-           const {
-             ctx: ee
-           } = this;
-           ee.frame++, ee.lit = this.uk.PR.GT, ee.offset = this.uk.yq, ee.timeS = this.uk.lY / 1e3;
-           for (const ie of this.models) ie.render(ee)
-         };
-         for (const {
-             model: ie
- ... (7 more removed lines; see GitHub link above)
+     nw(WW)
+   }
+ }
+ 
+ function nw(WW) {
+   const iW = WW.getBoundingClientRect().top;
+   for (const OW of Array.from(WW.querySelectorAll(".WorldCodeAiModelGroup"))) {
+     const WW = OW.querySelector(".WorldCodeAiModelGroupHeader");
+     if (!WW) continue;
+     const mW = iW + WW.offsetHeight,
+       EW = Array.from(OW.querySelectorAll(".WorldCodeAiModelRow")).some((WW => WW.getBoundingClientRect().bottom > mW + 2));
+     WW.classList.toggle("Unpinned", !EW)
+   }
+ }
+ 
+ function uw(WW) {
+ ... (40 more added lines; see GitHub link above)
```

#### 327. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7581-L7645` → after: `L10667-L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR10667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L10667-L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L10667-L10793) · [Before (L7581-L7645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7581-L7645)

```diff
-         const Me = (0, Ae.i)(ee, ie, !1),
-           {
-             meshApi: Ke
-           } = Ae.b[ee];
-         Ke.updateVariation(Me, ee, "default"), Ke.updateMeshOpacity(Me, 1), ye.setPickable(Me, !1);
-         const Ue = null !== (He = rF.b[ee].meshMetadata.modelYRotationOffset) && void 0 !== He ? He : 0;
-         return this.add(Me, Ue, null, (ee => {
-           Ke.updateMeshLightLevels(Me, ee)
-         }))
-       }
-       createCosmetic(ee, ie, He) {
-         if (this.brokenCosmetics.has(ee)) return null;
-         const ye = (0, QF.e)(ee, void 0);
-         if (!ye) return this.loadCosmetic(ee), null;
-         const be = this.uk.PR.vx,
-           Me = `${ee}|${eJ.e}`;
- ... (49 more removed lines; see GitHub link above)
+         null !== (iW = AW.current) && void 0 !== iW && iW.contains(WW.target) || lW(!1)
+       },
+       LW = WW => {
+         "Escape" === WW.key && (WW.stopPropagation(), WW.preventDefault(), xw.close() || UW())
+       };
+     return document.addEventListener("pointerdown", PW), document.addEventListener("keydown", LW, !0), () => {
+       null === mW || void 0 === mW || mW.removeEventListener("scroll", NW), document.removeEventListener("pointerdown", PW), document.removeEventListener("keydown", LW, !0)
+     }
+   }), [xW]);
+   const kW = EW && null !== wW,
+     sW = kW ? "Bot.xd (free) \xb7 once" : wW ? uw(wW) : ZW ? TL : "Bot.xd (free)";
+   return (0, PW.jsxs)("div", {
+     ref: AW,
+     className: "WorldCodeAiModelChipRow",
+     onBlur: WW => {
+       var iW;
+ ... (111 more added lines; see GitHub link above)
```

#### 328. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7647-L7672` → after: `L10795-L10847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR10795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L10795-L10847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L10795-L10847) · [Before (L7647-L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7647-L7672)

```diff
-     class JJ {
-       constructor(ee, ie, He, ye, be, Me) {
-         this.uk = ee, this.id = ie, this.yawOffset = He, this.cosmetic = ye, this.writeLight = be, this.onDispose = Me, this.pos = [0, 0, 0], this.yaw = 0, this.posed = !1, this.visible = !1, this.needsPlace = !1, this.needsRelight = !1, this.placedOffset = [NaN, NaN, NaN], this. … [truncated]
-       }
-       setPose(ee, ie) {
-         this.xf || (this.posed && ee[0] === this.pos[0] && ee[1] === this.pos[1] && ee[2] === this.pos[2] || (this.pos[0] = ee[0], this.pos[1] = ee[1], this.pos[2] = ee[2], this.needsRelight = !0), this.yaw = ie, this.posed = !0, this.needsPlace = !0)
-       }
-       setVisible(ee) {
-         if (!this.xf && ee !== this.visible) {
-           var ie;
-           if (this.visible = ee, !ee) null === (ie = this.cosmetic) || void 0 === ie || ie.perch.forget();
-           this.needsPlace = !0
-         }
-       }
-       setClip(ee) {
-         var ie, He, ye;
- ... (10 more removed lines; see GitHub link above)
+     let WW = mW;
+     for (; WW + 1 < EW.length && "same" === EW[WW + 1].kind;) WW++;
+     const iW = EW.slice(mW, WW + 1),
+       OW = 0 === mW ? 0 : 2,
+       NW = WW === EW.length - 1 ? 0 : 2;
+     iW.length > OW + NW + 1 ? LW.push(...iW.slice(0, OW), {
+       kind: "fold",
+       count: iW.length - OW - NW
+     }, ...iW.slice(iW.length - NW)) : LW.push(...iW), mW = WW
+   }
+   return (0, PW.jsx)("pre", {
+     className: "WorldCodeAiDiff",
+     children: LW.map(((WW, iW) => {
+       if ("fold" === WW.kind) return (0, PW.jsxs)("div", {
+         className: "WorldCodeAiDiffFold",
+         children: ["\u22ef ", WW.count, " unchanged lines"]
+ ... (37 more added lines; see GitHub link above)
```

#### 329. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7674-L7693` → after: `L10849-L11259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR10849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L10849-L11259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L10849-L11259) · [Before (L7674-L7693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7674-L7693)

```diff
-       render(ee) {
-         var ie;
-         const He = this.uk.PR.vx;
-         if (!(this.visible && this.posed)) return void(this.needsPlace && (He.JY(this.id, !1), this.needsPlace = !1));
-         const {
-           offset: ye
-         } = ee, {
-           placedOffset: be
-         } = this, Me = ye[0] !== be[0] || ye[1] !== be[1] || ye[2] !== be[2], Ke = null === (ie = this.cosmetic) || void 0 === ie ? void 0 : ie.perch;
-         if (this.needsPlace || Me || null !== Ke && void 0 !== Ke && Ke.moving()) {
-           if (be[0] = ye[0], be[1] = ye[1], be[2] = ye[2], Ke) {
-             Ke.place(this.pos, this.yaw + this.yawOffset, this.yawOffset);
-             const {
-               drawnPos: ee,
-               drawnRotation: ie
-             } = Ke;
- ... (4 more removed lines; see GitHub link above)
+     }
+   }
+ }
+ 
+ function Vw(WW) {
+   return Array.isArray(WW) && WW.every((WW => {
+     if ("object" !== typeof WW || null === WW || !("id" in WW) || !("at" in WW) || !("label" in WW) || !("files" in WW)) return !1;
+     const iW = WW.files;
+     return "object" === typeof iW && null !== iW && Object.values(iW).every((WW => "string" === typeof WW))
+   }))
+ }
+ 
+ function pw(WW, iW) {
+   return iW ? function(WW, iW) {
+     if (!iW) return [...WW];
+     const OW = new Map;
+ ... (395 more added lines; see GitHub link above)
```

#### 330. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7695-L7709` → after: `L11261-L11344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR11261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L11261-L11344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L11261-L11344) · [Before (L7695-L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7695-L7709)

```diff
-           He.JY(this.id, !0), this.needsPlace = !1
-         }
-         this.playing && He.getNodeActuallyVisible(this.id, 0) && this.playing.write(He, this.id, ee.timeS), ee.lit && (this.needsRelight || ee.frame - this.litFrame >= 60) && (this.needsRelight = !1, this.litFrame = ee.frame, this.relight())
-       }
-       relight() {
-         const [ee, ie, He] = this.pos, ye = (0, re.l)(this.uk, [ee, ie + .25, He]), {
-           light: be
-         } = this;
-         let Me = !1;
-         for (let Ke = 0; Ke < 4; Ke++) {
-           const ee = Math.fround(ye[Ke]);
-           be[Ke] !== ee && (be[Ke] = ee, Me = !0)
-         }
-         Me && this.writeLight(be)
-       }
+         }, WW)))
+       }), iW.allowOther && EW && (0, PW.jsx)("span", {
+         className: "WorldCodeAiHint",
+         children: "Or type your own answer in the box below."
+       }), iW.allowOther && !EW && (0, PW.jsxs)("form", {
+         className: "WorldCodeAiQuestionOther",
+         onSubmit: WW => {
+           WW.preventDefault(), "" !== NW.trim() && OW(NW.trim(), !0)
+         },
+         children: [(0, PW.jsx)("input", {
+           className: "WorldCodeAiInput",
+           value: NW,
+           maxLength: 200,
+           placeholder: "Or type your own answer",
+           "aria-label": "Your own answer",
+           onChange: WW => {
+ ... (68 more added lines; see GitHub link above)
```

#### 331. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7711-L7733` → after: `L11346-L11404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR11346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L11346-L11404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L11346-L11404) · [Before (L7711-L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7711-L7733)

```diff
-     var oJ = He(39503);
-     const RJ = 1 / .6,
-       kJ = ["..1111..", ".122221.", "12222221", "12222221", "12222221", "12222221", ".122221.", "..1111.."];
-     class qJ extends oJ.d {
-       constructor(ee) {
-         super(), this.bk = ee, this.queue = void 0, this.length = 0, this.cursor = 0, this.speed = 0, this.queue = new Float32Array(4 * ee)
-       }
-       push(ee, ie, He, ye) {
-         const be = 4 * this.length;
-         this.queue[be] = ee, this.queue[be + 1] = ie, this.queue[be + 2] = He, this.queue[be + 3] = ye, this.length++
-       }
-       startPositionFunction(ee, ie, He, ye) {
-         if (this.cursor >= this.length) return this.speed = 0, void Ne.rf.TransformCoordinatesFromFloatsToRef(0, -1e3, 0, ee, ie);
-         const be = 4 * this.cursor;
-         this.cursor++, this.speed = this.queue[be + 3], Ne.rf.TransformCoordinatesFromFloatsToRef(this.queue[be], this.queue[be + 1], this.queue[be + 2], ee, ie)
-       }
- ... (7 more removed lines; see GitHub link above)
+   }
+   return OW
+ }
+ 
+ function it(WW) {
+   const iW = function(WW) {
+     Fw.lastIndex = 0;
+     for (let iW = Fw.exec(WW); iW; iW = Fw.exec(WW))
+       if (!Qw(WW, iW.index)) return iW;
+     return null
+   }(WW);
+   if (!iW) return [];
+   const OW = function(WW, iW) {
+     const OW = [];
+     let mW = 0,
+       EW = iW;
+ ... (43 more added lines; see GitHub link above)
```

#### 332. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7736-L7758` → after: `L11711-L11843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR11711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L11711-L11843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L11711-L11843) · [Before (L7736-L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7736-L7758)

```diff
-     var fJ = He(39934);
-     const TJ = [0, 1, 0];
-     class pJ {
-       constructor(ee, ie, He, ye, be) {
-         var Me, Ke, Ue;
-         this.uk = ee, this.system = ie, this.onFree = be, this.box = void 0, this.points = null, this.boxAt = new Ne.rf, this.pointsAt = new Ne.rf, this.lifeMs = void 0, this.bk = void 0, this.stopTimer = null, this.stopAt = 0, this.running = !1, this.idle = !0, this.stopped = !1 … [truncated]
-         const Fe = null !== (Me = He.dir1) && void 0 !== Me ? Me : TJ,
-           Je = null !== (Ke = He.dir2) && void 0 !== Ke ? Ke : TJ,
-           oe = null !== (Ue = ye.half) && void 0 !== Ue ? Ue : [0, 0, 0];
-         this.box = ie.createBoxEmitter(new Ne.rf(Fe[0], Fe[1], Fe[2]), new Ne.rf(Je[0], Je[1], Je[2]), new Ne.rf(-oe[0], -oe[1], -oe[2]), new Ne.rf(oe[0], oe[1], oe[2])), this.boxAt.set(ye.pos[0], ye.pos[1], ye.pos[2]), ie.emitter = this.boxAt, ie.manualEmitCount = 0, ie.onAnimat … [truncated]
-           this.idle = !0, this.stopped && (ie.disposeOnStop = !1, queueMicrotask((() => {
-             this.dispose()
-           })))
-         }, (0, Ve.C)(ee, ie), this.setEmitRate(He.emitRate)
-       }
-       moveTo(ee, ie) {
- ... (7 more removed lines; see GitHub link above)
+     mW.push({
+       removed: [],
+       added: OW[NW++].lines
+     })
+   }
+   const LW = [];
+   for (const cW of mW) {
+     const WW = LW[LW.length - 1],
+       iW = [...cW.removed, ...cW.added].every(Ut);
+     WW && (iW || [...WW.removed, ...WW.added].every(Ut)) ? LW[LW.length - 1] = {
+       removed: [...WW.removed, ...cW.removed],
+       added: [...WW.added, ...cW.added]
+     } : LW.push(cW)
+   }
+   return LW.every((WW => kt(WW.removed) && kt(WW.added))) ? LW : [WW]
+ }
+ ... (117 more added lines; see GitHub link above)
```

#### 333. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7760-L7848` → after: `L11845-L11887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR11845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L11845-L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L11845-L11887) · [Before (L7760-L7848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7760-L7848)

```diff
-       emitPoints(ee, ie, He) {
-         if (this.stopped || He <= 0) return;
-         const ye = this.points ??= new qJ(this.bk);
-         this.system.particleEmitterType = ye, this.system.emitter = this.pointsAt, (ye.cursor > 0 || 0 === ye.length) && (ye.length = 0, ye.cursor = 0, this.pointsAt.set(ee[0], ee[1], ee[2]));
-         const be = ee[0] - this.pointsAt.x,
-           Me = ee[1] - this.pointsAt.y,
-           Ke = ee[2] - this.pointsAt.z,
-           Ue = Math.min(He, ye.bk - ye.length);
-         for (let Fe = 0; Fe < Ue; Fe++) {
-           const ee = 4 * Fe;
-           ye.push(ie[ee] + be, ie[ee + 1] + Me, ie[ee + 2] + Ke, ie[ee + 3])
-         }
-         this.system.manualEmitCount = ye.length, this.emitted()
-       }
-       setDirections(ee, ie) {
-         this.box.direction1.set(ee[0], ee[1], ee[2]), this.box.direction2.set(ie[0], ie[1], ie[2])
- ... (73 more removed lines; see GitHub link above)
+       const PW = function(WW, iW, OW) {
+           const mW = Tt(WW.added),
+             EW = Tt(WW.removed),
+             NW = mW.filter((WW => EW.includes(WW))),
+             PW = mW.filter((WW => !NW.includes(WW))),
+             LW = EW.filter((WW => !NW.includes(WW))),
+             cW = new Map([...yt(WW.removed), ...yt(WW.added)]),
+             wW = [...NW, ...PW].filter((WW => cW.has(WW))),
+             tW = (iW, OW) => {
+               return {
+                 names: iW,
+                 configKeys: iW.includes("CONFIG") ? (mW = WW.added, mW.flatMap((WW => {
+                   const iW = /^\s+(\w+)\s*:/.exec(WW);
+                   return iW ? [iW[1]] : []
+                 }))) : [],
+                 plainWords: iW.flatMap((WW => {
+ ... (27 more added lines; see GitHub link above)
```

#### 334. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7850-L7855` → after: `L11889-L11971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR11889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L11889-L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L11889-L11971) · [Before (L7850-L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7850-L7855)

```diff
-               ye = (0, Oe.h)(ee, "smokePuff", He),
-               be = (0, Oe.f)(ye);
-             return be.clearRect(0, 0, ie, ie), kJ.forEach(((ee, ie) => {
-               for (let He = 0; He < ee.length; He++) "." !== ee[He] && (be.fillStyle = "2" === ee[He] ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.45)", be.fillRect(He, ie, 1, 1))
-             })), (0, Oe.Q)(ye, !0, !1), (0, Ee.O)(ye), ye
-           }(be), this.textures.set(He, ye)
+               iW = [NW.length > 0 ? `${WW(NW)} \u2014 changed` : "", PW.length > 0 ? `${WW(PW)} \u2014 added` : "", LW.length > 0 ? `${WW(LW)} \u2014 taken out` : ""].filter(Boolean),
+               OW = [...lW.filter((WW => cW.has(WW))), ...lW.filter((WW => !cW.has(WW)))],
+               mW = wW.every((WW => PW.includes(WW)));
+             return {
+               named: Ht(iW.join("; ")),
+               codeNames: OW,
+               takesOut: LW,
+               isPlain: !0,
+               about: tW(wW, mW)
+             }
+           }
+           const AW = [NW.length > 0 ? `changes ${Jt(NW.map(xW))}` : "", PW.length > 0 ? `adds ${Jt(PW.map(xW))}` : "", LW.length > 0 ? `takes out ${Jt(LW.map(xW))}` : ""].filter(Boolean);
+           if (AW.length > 0) return {
+             named: Ht(AW.join(", ")),
+             codeNames: lW,
+             takesOut: LW,
+ ... (67 more added lines; see GitHub link above)
```

#### 335. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7857-L7858` → after: `L11973-L12067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR11973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L11973-L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L11973-L12067) · [Before (L7857-L7858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7857-L7858)

```diff
-         return ye
-       }
+         if (!NW[mW]) return WW.onlyAdds ? "adds" : "changes"
+       }))
+     }(PW.map((WW => ({
+       ...WW.about,
+       ...WW.why ? {
+         why: WW.why
+       } : {}
+     }))), iW),
+     cW = PW.map(((WW, iW) => {
+       let {
+         named: OW,
+         codeNames: mW,
+         isPlain: EW,
+         about: NW,
+         ...cW
+       } = WW;
+ ... (79 more added lines; see GitHub link above)
```

#### 336. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7860-L7903` → after: `L12069-L12107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR12069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L12069-L12107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L12069-L12107) · [Before (L7860-L7903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7860-L7903)

```diff
-     const zJ = 1 / 3;
-     class BJ {
-       constructor(ee) {
-         this.uk = ee, this.node = null, this.material = null, this.look = "", this.offset = 0, this.slide = ee => {
-           this.offset = (this.offset + Math.min(ee, 250) / 1e3 * 1.2 * zJ) % 1, (0, Oe.G)(this.material, -this.offset)
-         }
-       }
-       set(ee) {
-         if (this.clear(), !ee || 0 === ee.cells.length) return;
-         const ie = this.uk.PR,
-           He = (0, Be.n)(ie, "routeChevrons", function(ee) {
-             const [ie, He, ye] = ee[0].pos, be = [], Me = [], Ke = [];
-             return ee.forEach(((ee, Ue) => {
-               let {
-                 pos: Fe,
-                 way: [Je, oe]
- ... (28 more removed lines; see GitHub link above)
+   }
+   for (const NW of WW.matchAll(/\bnow ([a-z]{2,}s)\b/g)) {
+     const iW = Math.max(WW.lastIndexOf(".", NW.index), WW.lastIndexOf("\n", NW.index)) + 1,
+       PW = /[.!?](?=\s|$)|\n/.exec(WW.slice(NW.index)),
+       LW = WW.slice(iW, PW ? NW.index + PW.index : WW.length),
+       cW = mW.some((WW => NW.index < WW.at + WW.length && WW.at < NW.index + NW[0].length)),
+       wW = gt.test(WW.slice(iW, NW.index));
+     vt.has(NW[1]) || wW || OW(NW.index) || pt.test(LW) || cW || mW.push({
+       at: NW.index,
+       length: NW[0].length,
+       words: `will ${EW=NW[1],"has"===EW?"have":EW.endsWith("ies")?`${EW.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(EW)?EW.slice(0,-2):EW.slice(0,-1)}`
+     })
+   }
+   var EW;
+   return mW.sort(((WW, iW) => iW.at - WW.at)).reduce(((WW, iW) => WW.slice(0, iW.at) + iW.words + WW.slice(iW.at + iW.length)), WW)
+ }
+ ... (23 more added lines; see GitHub link above)
```

#### 337. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7906-L7916` → after: `L12110-L12114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR12110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L12110-L12114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L12110-L12114) · [Before (L7906-L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7906-L7916)

```diff
-     var EJ = He(39943);
-     class gJ {
-       constructor(ee) {
-         this.particles = void 0, this.meshes = void 0, this.pools = void 0, this.routeChevrons = void 0, this.entityPresentation = void 0, this.mobModels = void 0, this.cameraFar = void 0, this.cameraTurn = new EJ.e((() => MF.c.get("forcedCameraDirectionTransitionMs")), (ee => {
-           MF.c.apply(ee)
-         })), this.particles = new XJ(ee), this.meshes = new nF(ee), this.pools = new IF(ee), this.routeChevrons = new BJ(ee), this.entityPresentation = new lF(ee), this.mobModels = new FJ(ee), this.cameraFar = new NF(ee)
-       }
-       hasPackModel(ee) {
-         return Boolean(Te.c.getModelOverride(ee))
-       }
-       setGroundArrowStyle(ee) {
+   }, jW = () => {
+     if (null !== LW)
+       if ("number" === OW.kind) {
+         const WW = Number(LW.trim());
+         if ("" === LW.trim() || !Number.isFinite(WW)) return tW("That needs to be a number."), void cW(null);
```

#### 338. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7919-L7940` → after: `L12886-L12942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR12886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L12886-L12942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L12886-L12942) · [Before (L7919-L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7919-L7940)

```diff
-       disposeAll() {
-         const ee = [() => {
-           this.particles.disposeAll()
-         }, () => {
-           this.meshes.disposeAll()
-         }, () => {
-           this.pools.disposeAll()
-         }, () => {
-           this.routeChevrons.disposeAll()
-         }, () => {
-           this.entityPresentation.restoreAll()
-         }, () => {
-           this.setGroundArrowStyle(null)
-         }, () => {
-           this.mobModels.disposeAll()
-         }, () => {
- ... (6 more removed lines; see GitHub link above)
+       TW().forEachChild(WW, PW)
+     };
+   PW(iW);
+   const LW = new Set;
+   return NW.flatMap((WW => {
+     if (EW.has(WW.name) || LW.has(WW.name)) return [];
+     LW.add(WW.name);
+     return [`Line ${iW.getLineAndCharacterOfPosition(WW.at).line+1} uses "CONFIG.${WW.name}", but CONFIG has no ${WW.name}, so it is undefined there. Add ${WW.name} to CONFIG.`]
+   }))
+ }
+ 
+ function qZ(WW, iW) {
+   var OW;
+   const mW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== iW.path && (0, bW.e)(iW.path)),
+     EW = !0 === (null === (OW = iW.path) || void 0 === OW ? void 0 : OW.endsWith(".ts")),
+     NW = iW => [...WW.codeWarnings(iW, mW), ...vZ(iW, mW, EW), ...DZ(iW), ...BZ(iW)],
+ ... (41 more added lines; see GitHub link above)
```

#### 339. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7942` → after: `L12944-L12945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR12944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L12944-L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L12944-L12945) · [Before (L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7942)

```diff
-           console.error("Error freeing client game output", ie)
+           if ("indexedDB" !== OW) throw iW;
+           return mW = null, (await EW()).transaction(dw, WW)
```

#### 340. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7944-L7961` → after: `L12947-L12951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR12947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L12947-L12951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L12947-L12951) · [Before (L7944-L7961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7944-L7961)

```diff
-       }
-     }
-     var OJ = He(1305),
-       dJ = He(4833),
-       WJ = He(39786),
-       tJ = He(1857),
-       ZJ = He(1833);
-     class wJ {
-       constructor() {
-         this.storage = new Map, this.zeroStorage = new Map, this.mutationCountMask = 2147483647, this.mutationCount = 0, this.itemCount = 0, this.hasBoxes = !1
-       }
-       set(ee, ie, He, ye) {
-         this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
-         const be = 1023 & ee | (1023 & ie) << 10 | (1023 & He) << 20;
-         let Me = ye;
-         if (DJ(ee) && DJ(ie) && DJ(He) || (Me = new PJ(ee, ie, He, ye), this.hasBoxes = !0), Math.abs(ee) < 512 && Math.abs(ie) < 512 && Math.abs(He) < 512) {
- ... (2 more removed lines; see GitHub link above)
+       }, PW = async () => {
+         if ("unknown" === OW) try {
+           await EW(), OW = "indexedDB"
+         } catch {
+           OW = "fallback"
```

#### 341. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7963-L7992` → after: `L12953-L12971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR12953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L12953-L12971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L12953-L12971) · [Before (L7963-L7992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7963-L7992)

```diff
-         const Ke = ee >> 10 & 1023 | (ie >> 10 & 1023) << 10 | (He >> 10 & 1023) << 20;
-         let Ue = this.storage.get(Ke);
-         Ue || (Ue = new Map, this.storage.set(Ke, Ue));
-         const Fe = this.unbox(Ue.get(be));
-         return Ue.has(be) || this.itemCount++, Ue.set(be, Me), Fe
-       }
-       get(ee, ie, He) {
-         var ye;
-         const be = 1023 & ee | (1023 & ie) << 10 | (1023 & He) << 20;
-         if (Math.abs(ee) < 512 && Math.abs(ie) < 512 && Math.abs(He) < 512) return this.unbox(this.zeroStorage.get(be));
-         const Me = ee >> 10 & 1023 | (ie >> 10 & 1023) << 10 | (He >> 10 & 1023) << 20;
-         return this.unbox(null === (ye = this.storage.get(Me)) || void 0 === ye ? void 0 : ye.get(be))
-       }
-       remove(ee, ie, He) {
-         this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
-         const ye = 1023 & ee | (1023 & ie) << 10 | (1023 & He) << 20;
- ... (14 more removed lines; see GitHub link above)
+         return "indexedDB" === OW
+       };
+     return {
+       getItem: async iW => {
+         if (!await PW()) return WW.getItem(iW);
+         const OW = await (async WW => {
+           const iW = await NW("readonly"),
+             OW = iW.objectStore(dw).get(WW);
+           return await ew(iW), OW.result
+         })(iW);
+         return void 0 === OW ? WW.getItem(iW) : OW
+       },
+       setItem: async (iW, OW) => {
+         if (!await PW()) return WW.setItem(iW, OW);
+         try {
+           const WW = await NW("readwrite");
+ ... (3 more added lines; see GitHub link above)
```

#### 342. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L7995-L8030` → after: `L12985-L13021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR12985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L12985-L13021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L12985-L13021) · [Before (L7995-L8030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L7995-L8030)

```diff
-       unbox(ee) {
-         return this.hasBoxes && YJ(ee) ? ee.val : ee
-       }* iterate(ee) {
-         const ie = this.mutationCount;
-         for (const He of VJ(this.zeroStorage)) {
-           if (!this.zeroStorage.has(He)) continue;
-           const ye = this.zeroStorage.get(He);
-           if (this.hasBoxes && YJ(ye) ? yield {
-               x: ye.x,
-               y: ye.y,
-               z: ye.z,
-               val: ye.val
-             } : yield {
-               x: He << 22 >> 22,
-               y: He << 12 >> 22,
-               z: He << 2 >> 22,
- ... (20 more removed lines; see GitHub link above)
+     }
+   }(cP.f),
+   zZ = new class {
+     constructor(WW, iW) {
+       this.store = WW, this.signal = iW, this.EZ = new Map
+     }
+     watch(WW, iW) {
+       var OW, mW;
+       return null !== (OW = null === (mW = this.signal) || void 0 === mW ? void 0 : mW.listen((OW => {
+         if (OW !== WW) return;
+         const mW = this.load(WW).then((async iW => pw(iW, await this.read(WW))));
+         this.EZ.set(WW, mW), mW.then(iW)
+       }))) && void 0 !== OW ? OW : () => {}
+     }
+     list(WW) {
+       return this.load(WW)
+ ... (21 more added lines; see GitHub link above)
```

#### 343. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8033-L8051` → after: `L13065-L13069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13065-L13069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13065-L13069) · [Before (L8033-L8051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8033-L8051)

```diff
-       }
-       entries() {
-         return Array.from(this.iterate(!0))
-       } [Symbol.iterator]() {
-         return this.iterate(!1)
-       }
-       clear() {
-         this.mutationCount = this.mutationCount + 1 & this.mutationCountMask, this.storage.clear(), this.zeroStorage.clear(), this.itemCount = 0, this.hasBoxes = !1
-       }
-       getNumItems() {
-         return this.itemCount
-       }
-       getMutationCount() {
-         return this.mutationCount
-       }
-       getNumItemsVerySlowly() {
- ... (3 more removed lines; see GitHub link above)
+       } catch {}
+       const OW = iW(await this.read(WW));
+       return {
+         snapshots: OW,
+         isSaved: await this.store.setItem(this.storeKey(WW), OW).catch((() => !1))
```

#### 344. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8054-L8056` → after: `L13072-L13073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13072-L13073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13072-L13073) · [Before (L8054-L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8054-L8056)

```diff
- 
-     function DJ(ee) {
-       return ee << 12 >> 12 === ee && (0 !== ee || 1 / ee > 0)
+     read(WW) {
+       return this.store.getItem(this.storeKey(WW)).then((WW => Vw(WW) ? WW : null)).catch((() => null))
```

#### 345. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8058-L8061` → after: `L13075-L13077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13075-L13077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13075-L13077) · [Before (L8058-L8061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8058-L8061)

```diff
-     class PJ {
-       constructor(ee, ie, He, ye) {
-         this.x = ee, this.y = ie, this.z = He, this.val = ye, AJ.add(this)
-       }
+     load(WW) {
+       let iW = this.EZ.get(WW);
+       return iW || (iW = this.store.getItem(this.storeKey(WW)).then((WW => Vw(WW) ? WW : [])).catch((() => [])), this.EZ.set(WW, iW)), iW
```

#### 346. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8063-L8066` → after: `L13079-L13080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13079-L13080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13079-L13080) · [Before (L8063-L8066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8063-L8066)

```diff
-     const AJ = new WeakSet;
- 
-     function YJ(ee) {
-       return "object" === typeof ee && null !== ee && AJ.has(ee)
+     storeKey(WW) {
+       return `worldCodeAiHistory:${WW}`
```

#### 347. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8068-L8070` → after: `L13082-L13085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13082-L13085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13082-L13085) · [Before (L8068-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8068-L8070)

```diff
- 
-     function VJ(ee) {
-       return Array.from(ee.keys()).sort(((ee, ie) => ee - ie))
+   }(rZ, Dw("bloxd-worldCodeAiHistory")),
+   FZ = new class {
+     constructor(WW, iW) {
+       this.store = WW, this.signal = iW, this.EZ = new Map
```

#### 348. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8072-L8075` → after: `L13087-L13096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13087-L13096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13087-L13096) · [Before (L8072-L8075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8072-L8075)

```diff
-     class aJ extends Error {
-       constructor() {
-         super(`${wJ.name} has been mutated during iteration`)
-       }
+     watch(WW, iW) {
+       var OW, mW;
+       return null !== (OW = null === (mW = this.signal) || void 0 === mW ? void 0 : mW.listen((OW => {
+         if (OW !== WW) return;
+         const mW = this.load(WW).then((async iW => {
+           var OW;
+           return null !== (OW = await this.read(WW)) && void 0 !== OW ? OW : iW
+         }));
+         this.EZ.set(WW, mW), mW.then(iW)
+       }))) && void 0 !== OW ? OW : () => {}
```

#### 349. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8077-L8094` → after: `L13098-L13099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13098-L13099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13098-L13099) · [Before (L8077-L8094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8077-L8094)

```diff
-     class cJ {
-       constructor() {
-         this.cache = new wJ
-       }
-       getCachedPasskeyForChest(ee) {
-         var ie, He, ye;
-         const be = this.cache.get(ee[0], ee[1], ee[2]);
-         if (!be) return null;
-         const Me = (0, Ie.e)().blockDataOwner.getBlockData(ee[0], ee[1], ee[2]),
-           Ke = null !== (ie = null === Me || void 0 === Me || null === (He = Me.persisted) || void 0 === He || null === (ye = He.shared) || void 0 === ye ? void 0 : ye.passkeyLastUpdated) && void 0 !== ie ? ie : 0;
-         return be.lastOpened < Ke ? (this.cache.remove(ee[0], ee[1], ee[2]), null) : [...be.passkeyOnLastOpen]
-       }
-       onChestOpened(ee, ie) {
-         this.cache.set(ee[0], ee[1], ee[2], {
-           passkeyOnLastOpen: [...ie],
-           lastOpened: Date.now()
- ... (2 more removed lines; see GitHub link above)
+     list(WW) {
+       return this.load(WW)
```

#### 350. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8096-L8195` → after: `L13101-L13102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13101-L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13101-L13102) · [Before (L8096-L8195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8096-L8195)

```diff
-     var xJ = He(39956),
-       LJ = He(39983),
-       CJ = He(39992),
-       vJ = He(4818),
-       uJ = He(4886),
-       mJ = He(1294),
-       lJ = He(40001),
-       SJ = He(4826),
-       nJ = He(4781);
-     class jJ {
-       constructor(ee) {
-         this.uk = ee, this.temporaryThirdPersonTimeout = null, this.startedTemporaryThirdPersonFromFirstPerson = !1, this.locked = !1, this.lockedZoom = 0, this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, this.uk.camera.J_ = (ee, ie) => {
-           const He = this.uk.camera.U_;
-           this.uk.sE.Vye(this.uk.gC).cameraZoomChanged(ie, ee), 0 !== He && 0 === this.uk.camera.U_ && this.disableFrontFacing()
-         };
-         const ie = pe.h.subscribe("SwapCameraZoom", (() => {
- ... (84 more removed lines; see GitHub link above)
+     add(WW, iW) {
+       return this.update(WW, (WW => WW.includes(iW) || WW.length >= 8 ? WW : [...WW, iW]))
```

#### 351. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8197-L8202` → after: `L13104-L13105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13104-L13105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13104-L13105) · [Before (L8197-L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8197-L8202)

```diff
-     var sJ = He(37383),
-       IJ = He(40005);
-     const hJ = .05;
- 
-     function NJ(ee, ie, He) {
-       return (ee[0] - ie[0]) * He[0] + (ee[1] - ie[1]) * He[1] + (ee[2] - ie[2]) * He[2]
+     remove(WW, iW) {
+       return this.update(WW, (WW => WW.filter((WW => WW !== iW))))
```

#### 352. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8204-L8238` → after: `L13107-L13119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13107-L13119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13107-L13119) · [Before (L8204-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8204-L8238)

```diff
-     const GJ = 1e-6;
-     const rJ = "CursorAim";
-     class QJ {
-       constructor(ee, ie) {
-         this.uk = ee, this.pointerLockWrapper = ie, this.active = !1, this.hasPoint = !1, this.clientX = 0, this.clientY = 0, this.tapListener = null, this.onPointerMove = ee => {
-           eo(ee) && this.followPoint(ee.clientX, ee.clientY)
-         }, this.onPointerDown = ee => {
-           var ie;
-           "mouse" !== ee.pointerType ? "pen" !== ee.pointerType && !eo(ee) || !this.uk.container.element.contains(ee.target) || (0, sJ.m)(ee.target) || null === (ie = this.tapListener) || void 0 === ie || ie.call(this, ee.clientX, ee.clientY) : this.followPoint(ee.clientX, ee.cli … [truncated]
-         }
-       }
-       setActive(ee) {
-         ee !== this.active && (this.active = ee, this.uk.container.Fv(!ee), ee ? (window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerdown", this.onPointerDown), this.pointerLockWrapper.requestFreeCursor(rJ)) : (window.removeEventListener(" … [truncated]
-       }
-       isInGame() {
-         return this.pointerLockWrapper.isInGame()
- ... (19 more removed lines; see GitHub link above)
+     async update(WW, iW) {
+       var OW;
+       const mW = this.load(WW).then((async OW => {
+         var mW;
+         if (this.store.update) try {
+           return await this.store.update(this.storeKey(WW), (WW => iW(ti(WW) ? WW.slice(0, 8) : OW)))
+         } catch {}
+         const EW = iW(null !== (mW = await this.read(WW)) && void 0 !== mW ? mW : OW);
+         return await this.store.setItem(this.storeKey(WW), EW).catch((() => !1)), EW
+       }));
+       this.EZ.set(WW, mW);
+       const EW = await mW;
+       return null === (OW = this.signal) || void 0 === OW || OW.post(WW), EW
```

#### 353. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8240-L8242` → after: `L13121-L13122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13121-L13122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13121-L13122) · [Before (L8240-L8242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8240-L8242)

```diff
- 
-     function eo(ee) {
-       return "mouse" === ee.pointerType || !xK.e.get("isTouchScreen")
+     read(WW) {
+       return this.store.getItem(this.storeKey(WW)).then((WW => ti(WW) ? WW.slice(0, 8) : null)).catch((() => null))
```

#### 354. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8244-L8282` → after: `L13124-L13178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13124-L13178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13124-L13178) · [Before (L8244-L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8244-L8282)

```diff
-     var io = He(7075),
-       Ho = He(38433),
-       yo = He(2046),
-       bo = He(40017),
-       Mo = He(39867);
-     class Ko {
-       constructor(ee) {
-         this.uk = ee, this.enabled = !1, this.movesFlyIt = !1, this.canUsefreeCam = !1, this.blocked = !1, this.tickHandler = null, this.inputs = {
-           freeCamForward: !1,
-           freeCamBackward: !1,
-           freeCamLeft: !1,
-           freeCamRight: !1,
-           freeCamUp: !1,
-           freeCamDown: !1
-         }, this.analogueMove = {
-           forward: 0,
- ... (23 more removed lines; see GitHub link above)
+     load(WW) {
+       let iW = this.EZ.get(WW);
+       return iW || (iW = this.read(WW).then((WW => null !== WW && void 0 !== WW ? WW : [])), this.EZ.set(WW, iW)), iW
+     }
+     storeKey(WW) {
+       return `worldCodeAiNotes:${WW}`
+     }
+   }(rZ, Dw("bloxd-worldCodeAiNotes"));
+ const QZ = ["Next in line", "2nd in line", "3rd in line"];
+ let Wx = null;
+ 
+ function ix() {
+   if (!Wx) {
+     var WW, iW, OW, mW;
+     const EW = WW => lW.b.find((iW => iW.id === WW)),
+       NW = WW => {
+ ... (39 more added lines; see GitHub link above)
```

#### 355. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8284-L8285` → after: `L13180-L13196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13180-L13196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13180-L13196) · [Before (L8284-L8285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8284-L8285)

```diff
-       toggle() {
-         this.JY(!this.enabled)
+     };
+     OW(), iW.addEventListener("scroll", OW, {
+       passive: !0
+     });
+     const mW = "function" === typeof ResizeObserver ? new ResizeObserver(OW) : null;
+     return null === mW || void 0 === mW || mW.observe(iW), null === mW || void 0 === mW || mW.observe(WW), () => {
+       iW.removeEventListener("scroll", OW), null === mW || void 0 === mW || mW.disconnect()
+     }
+   }), [NW]), (0, PW.jsx)("div", {
+     ref: EW,
+     className: "WorldCodeAiChips WorldCodeAiFollowUps",
+     children: iW.map((WW => (0, mW.createElement)("button", {
+       ...Rc.e,
+       key: WW,
+       className: "WorldCodeAiChip",
+       onClick: () => {
+ ... (1 more added lines; see GitHub link above)
```

#### 356. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8287` → after: `L13198-L13303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13198-L13303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13198-L13303) · [Before (L8287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8287)

```diff
-       movesFly() {
+     }, function(WW) {
+       const iW = WW.replace(/^It didn't work: /, "").replace(/\.$/, "");
+       return iW.charAt(0).toUpperCase() + iW.slice(1)
+     }(WW))))
+   })
+ }
+ 
+ function wx(WW) {
+   let {
+     useFree: iW,
+     retryOf: OW,
+     isAutoFix: mW,
+     lookupOf: EW
+   } = WW;
+   return !0 !== iW && (void 0 !== OW || !0 !== mW && void 0 === EW)
+ }
+ ... (90 more added lines; see GitHub link above)
```

#### 357. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8289-L8316` → after: `L13305-L13472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13305-L13472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13305-L13472) · [Before (L8289-L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8289-L8316)

```diff
-         return this.panelMovesFly() || this.enabled && !(null === (ee = this.uk.bloxd.client) || void 0 === ee || !ee.isReplayMode())
-       }
-       panelMovesFly() {
-         return this.movesFlyIt
-       }
-       setMovesFly(ee) {
-         ee ? (this.JY(!0), this.enabled && !this.movesFlyIt && (this.movesFlyIt = !0, pe.h.yR("freeCameraChanged"))) : this.movesFlyIt && this.JY(!1)
-       }
-       setBlocked(ee) {
-         ee !== this.blocked && (this.blocked = ee, ee && this.JY(!1), pe.h.yR("freeCameraChanged"))
-       }
-       JY(ee) {
-         (!ee || this.canUsefreeCam && !this.blocked) && ee !== this.enabled && (ee ? this.enable() : this.disable())
-       }
-       handlefreeCamKeyPress(ee, ie, He) {
-         if (ie instanceof MouseEvent) return !1;
- ... (12 more removed lines; see GitHub link above)
+         const OW = new Set((null !== (iW = IW.get(WW.path)) && void 0 !== iW ? iW : []).filter((iW => !BW.has(`${WW.path}:${iW.index}`))).map((WW => WW.index))),
+           mW = function(WW, iW) {
+             const OW = Kt(WW.before, WW.after),
+               mW = OW.flatMap((WW => "same" === WW.kind ? [WW.text] : iW.has(WW.index) ? WW.added : WW.removed));
+             if (0 === mW.length) return "";
+             const EW = (OW.every((WW => "same" === WW.kind || iW.has(WW.index))) ? WW.after : WW.before).endsWith("\n") ? "\n" : "";
+             return `${mW.join("\n")}${EW}`
+           }(WW, OW);
+         return mW === WW.before ? [] : [{
+           ...WW,
+           after: mW
+         }]
+       }))
+     }), [xW.changes, IW, BW]),
+     Oi = (0, mW.useMemo)((() => ii && YW ? YW(ii) : []), [ii, YW]);
+   (0, mW.useEffect)((() => {
+ ... (152 more added lines; see GitHub link above)
```

#### 358. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8318-L8320` → after: `L13474-L13788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13474-L13788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13474-L13788) · [Before (L8318-L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8318-L8320)

```diff
-           if (null !== (He = yo.q[ye]) && void 0 !== He && He.includes(ie)) return !0
-         }
-         return !1
+           const NW = pW.get(WW),
+             LW = iW > 0 && void 0 !== NW && (null === (EW = pW.get(OW[iW - 1])) || void 0 === EW ? void 0 : EW.line) === NW.line;
+           return (0, PW.jsxs)(mW.Fragment, {
+             children: [NW && !fZ(WW) && !LW && (0, PW.jsxs)("p", {
+               className: "WorldCodeAiWarningWhere",
+               children: [fW > 1 && `Line ${NW.line}: `, (0, PW.jsx)("code", {
+                 children: NW.text
+               })]
+             }), (0, PW.jsx)("p", {
+               children: !NW || 1 !== fW && fZ(WW) ? WW : CZ(WW)
+             })]
+           }, WW)
+         })), !oW && eW.length > 1 && (0, PW.jsxs)("button", {
+           className: "WorldCodeAiLinkButton",
+           onClick: () => {
+             dW(!0)
+ ... (299 more added lines; see GitHub link above)
```

#### 359. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8322-L8325` → after: `L13790-L13896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13790-L13896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13790-L13896) · [Before (L8322-L8325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8322-L8325)

```diff
-       enable() {
-         (Ho.d.isCameraDetachedFromPlayer(this.uk) || Ho.d.detachCamera(this.uk)) && (this.tickHandler = ee => {
-           this.tickMovement(ee)
-         }, this.uk.on("renderTickBegin", this.tickHandler), this.enabled = !0, this.notifyStateChanged(!0))
+     }()), [di, ei] = (0, mW.useState)(iw), vi = (0, mW.useRef)(di);
+     vi.current = di;
+     const gi = di && dW,
+       Di = (0, mW.useRef)(!1),
+       [Vi, fi] = (0, mW.useState)(null),
+       [Ci, Xi] = (0, mW.useState)(""),
+       [Bi, qi] = (0, mW.useState)([]),
+       [Ri, Gi] = (0, mW.useState)(null),
+       [Ii, ai] = (0, mW.useState)(new Set),
+       [ri, zi] = (0, mW.useState)(null !== (iW = mi.dismissedErrorCounts.get(CW.key)) && void 0 !== iW ? iW : 0),
+       [Fi, Qi] = (0, mW.useState)(!1),
+       [WO, iO] = (0, mW.useState)(Date.now),
+       OO = (0, mW.useRef)(null),
+       mO = (0, mW.useRef)(null),
+       EO = (0, mW.useRef)([]),
+       [NO, PO] = (0, mW.useState)(0),
+ ... (91 more added lines; see GitHub link above)
```

#### 360. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8327-L8332` → after: `L13898-L13907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13898-L13907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13898-L13907) · [Before (L8327-L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8327-L8332)

```diff
-       disable() {
-         var ee, ie;
-         this.tickHandler && (this.uk.off("renderTickBegin", this.tickHandler), this.tickHandler = null), !Ho.d.isCameraDetachedFromPlayer(this.uk) || null !== (ee = this.uk.bloxd.client) && void 0 !== ee && ee.isReplayMode() || Ho.d.reattachCamera(this.uk), this.clearMovementInpu … [truncated]
-         const He = null !== (ie = this.uk.bloxd.client) && void 0 !== ie && ie.isReplayMode() ? void 0 : this.uk.sE.Cye();
-         for (const ye of ["forward", "backward", "left", "right"]) He && this.uk.inputs.state[ye] && (He[ye] = !0);
-         this.notifyStateChanged(!1)
+     }(ii)), [ii]), (0, mW.useEffect)((() => {
+       let WW = !0;
+       zZ.list(BW).then((iW => {
+         WW && li(iW)
+       })).catch((WW => {
+         console.error("World Code AI: couldn't read the version history", WW)
+       }));
+       const iW = zZ.watch(BW, li);
+       return () => {
+         WW = !1, iW()
```

#### 361. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8334-L8345` → after: `L13909-L13918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13909-L13918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13909-L13918) · [Before (L8334-L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8334-L8345)

```diff
-       clearMovementInputs() {
-         this.inputs = {
-           freeCamForward: !1,
-           freeCamBackward: !1,
-           freeCamLeft: !1,
-           freeCamRight: !1,
-           freeCamUp: !1,
-           freeCamDown: !1
-         }, this.analogueMove = {
-           forward: 0,
-           strafe: 0
-         }, this.flyAccel.reset(), this.flyVertMoveDir = 0
+     }), [BW]), (0, mW.useEffect)((() => {
+       let WW = !0;
+       FZ.list(BW).then((iW => {
+         WW && Ui(iW)
+       })).catch((WW => {
+         console.error("World Code AI: couldn't read the notes about the game", WW)
+       }));
+       const iW = FZ.watch(BW, Ui);
+       return () => {
+         WW = !1, iW()
```

#### 362. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8347-L8354` → after: `L13920-L13930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13920-L13930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13920-L13930) · [Before (L8347-L8354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8347-L8354)

```diff
-       setAnalogueMove(ee) {
-         this.analogueMove = ee ? {
-           forward: -ee.y,
-           strafe: ee.x
-         } : {
-           forward: 0,
-           strafe: 0
-         }
+     }), [BW]);
+     const TO = null !== (EW = null === (lW = Ni.findLast((WW => WW.target.key === CW.key))) || void 0 === lW ? void 0 : lW.retryAt) && void 0 !== EW ? EW : 0,
+       JO = zN(WO),
+       hO = null !== ti || TO > WO || JO > WO;
+     (0, mW.useEffect)((() => {
+       if (!hO) return;
+       const WW = setInterval((() => {
+         iO(Date.now())
+       }), 1e3);
+       return () => {
+         clearInterval(WW)
```

#### 363. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8356` → after: `L13932-L13934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13932-L13934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13932-L13934) · [Before (L8356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8356)

```diff
-       tickMovement(ee) {
+     }), [hO]);
+     const HO = vW > ri && eW.length > 0 ? eW[eW.length - 1] : null,
+       nO = (0, mW.useMemo)((() => HO ? function(WW, iW) {
```

#### 364. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8358-L8386` → after: `L13936-L13949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13936-L13949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13936-L13949) · [Before (L8358-L8386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8358-L8386)

```diff
-         if ((null === (ie = this.uk.bloxd.client) || void 0 === ie || !ie.isReplayMode()) && !this.uk.sE.Aye(this.uk.gC).isAlive) return void this.JY(!1);
-         const He = this.inputs,
-           ye = ee / 1e3,
-           be = ye * this.uk.lV,
-           Me = this.uk.camera.heading,
-           Ke = Math.sin(Me),
-           Ue = Math.cos(Me);
-         let Fe = 0,
-           Je = 0;
-         He.freeCamForward && (Fe += Ke, Je += Ue), He.freeCamBackward && (Fe -= Ke, Je -= Ue), He.freeCamLeft && (Fe -= Ue, Je += Ke), He.freeCamRight && (Fe += Ue, Je -= Ke);
-         const {
-           forward: oe,
-           strafe: Re
-         } = this.analogueMove;
-         0 === oe && 0 === Re || (Fe += oe * Ke + Re * Ue, Je += oe * Ue - Re * Ke);
-         const ke = Math.sqrt(Fe * Fe + Je * Je),
- ... (13 more removed lines; see GitHub link above)
+         let mW;
+         for (const [EW, NW] of Object.entries(iW)) {
+           const {
+             text: iW,
+             line: OW
+           } = yc(WW, NW);
+           if (void 0 !== OW) {
+             if (mW) return yc(WW);
+             mW = {
+               text: iW,
+               path: EW,
+               line: OW
+             }
+           }
```

#### 365. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8388-L8425` → after: `L13951-L13976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13951-L13976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13951-L13976) · [Before (L8388-L8425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8388-L8425)

```diff
-         const Ee = this.flyAccel.yVelocity * ye;
-         if (0 === ze && 0 === Ee && 0 === Be) return;
-         const ge = this.uk.sE.pE(this.uk.camera.y_);
-         this.uk.sE.setPosition(this.uk.camera.y_, [ge[0] + ze, ge[1] + Ee, ge[2] + Be])
-       }
-       notifyStateChanged(ee) {
-         var ie;
-         pe.h.yR("freeCameraChanged"), (0, bo.e)(ee), null !== (ie = this.uk.bloxd.client) && void 0 !== ie && ie.isReplayMode() && pe.h.yR("replayViewer|uiRefresh")
-       }
-     }
-     var Uo = He(1952),
-       Fo = He(40019),
-       Jo = He(40009),
-       oo = He(40046),
-       Ro = He(38425),
-       ko = He(38460),
- ... (22 more removed lines; see GitHub link above)
+         return null !== (OW = mW) && void 0 !== OW ? OW : yc(WW)
+       }(HO, uW) : {
+         text: ""
+       }), [HO, uW]),
+       uO = function(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CW;
+         const OW = kO();
+         return bi(!1), si(!1), wi((mW => [...mW, {
+           ...WW,
+           id: OW,
+           target: iW
+         }])), OW
+       },
+       oO = WW => WW.target.key === CW.key,
+       dO = (WW, iW) => {
+         wi((OW => OW.map((OW => OW.id === WW ? {
+ ... (10 more added lines; see GitHub link above)
```

#### 366. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8428` → after: `L13979-L13981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13979-L13981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13979-L13981) · [Before (L8428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8428)

```diff
-       return (0, qo.h)(ee) ? (0, Ce.b)(ee) : null
+       return !!fL(oL.getState()) && (Wc().then((iW => {
+         iW || WW()
+       })), !0)
```

#### 367. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8430-L8438` → after: `L13983-L14011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13983-L14011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L13983-L14011) · [Before (L8430-L8438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8430-L8438)

```diff
-     class to {
-       constructor(ee, ie, He) {
-         this.uk = ee, this.view = ie, this.pickEntity = He, this.defaultPose = (0, IJ.k)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.cameraHiddenPlayer = null, this.pickTargetedBlock = (ee, ie, He) => this.pickDist … [truncated]
-           var ye, be;
-           const Me = this.pickTargetedBlockFromOutside(ee, ie, He),
-             Ke = this.uk.PR.vx,
-             Ue = null === this.cameraHiddenPlayer ? null : null !== (ye = null === (be = this.uk.sE.rHe(this.cameraHiddenPlayer)) || void 0 === be ? void 0 : be.Ix) && void 0 !== ye ? ye : null,
-             Fe = null !== Ue && Ke.getPickable(Ue);
-           Fe && Ke.setPickable(Ue, !1);
+     const DO = WW => {
+         !yi && gO(WW) || WW()
+       },
+       VO = async function(WW, iW) {
+         var mW;
+         let EW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const {
+           check: NW = void 0 === iW,
+           about: PW = (null !== iW && void 0 !== iW ? iW : WW.trim()),
+           planStep: LW,
+           wordsOnly: cW = !1,
+           asked: wW,
+           failedEdits: tW,
+           isAutoFix: ZW = !1,
+           autoFixRound: xW = 0,
+           useFree: lW,
+ ... (13 more added lines; see GitHub link above)
```

#### 368. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8440-L8441` → after: `L14013-L14027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14013-L14027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L14013-L14027) · [Before (L8440-L8441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8440-L8441)

```diff
-             var Je;
-             return null !== (Je = this.pickEntity(ee, ie, null !== Me && void 0 !== Me ? Me : He)) && void 0 !== Je ? Je : Me
+             if (null !== await xP.refresh() || null === xP.getPlayer()) return;
+             const {
+               NotificationProvider: WW
+             } = await Promise.resolve().then((() => OW(1422)));
+             lP = WW.showPromptPopup({
+               title: "aiHelperDataSharing:title",
+               subtitle: "aiHelperDataSharing:subtitle",
+               confirmText: "aiHelperDataSharing:yes",
+               cancelText: "aiHelperDataSharing:no",
+               middleScreenPopupContainerClassName: wP.b
+             });
+             const iW = await lP.getResult();
+             "notificationTornDown" !== iW && xP.set(iW ? "yes" : "no")
+           } catch (WW) {
+             console.warn("AI Helper: couldn't ask about sharing chats", WW)
```

#### 369. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8443-L8641` → after: `L14029-L14087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14029-L14087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L14029-L14087) · [Before (L8443-L8641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8443-L8641)

```diff
-             Fe && Ke.setPickable(Ue, !0)
-           }
-         }, this.isUntargeted = ee => !this.uk.UHe(ee)
-       }
-       get localPlayerId() {
-         return this.uk.dHe
-       }
-       getEntityPosition(ee) {
-         const ie = Wo(ee);
-         return null !== ie && this.uk.sE.M_(ie) ? (0, IU.getDrawnPosition)(this.uk, ie, this.feet) : null
-       }
-       getEntityAimPoint(ee) {
-         const ie = Wo(ee);
-         return null === ie ? null : function(ee, ie, He) {
-           return ee.sE.M_(ie) ? ((0, IU.getDrawnPosition)(ee, ie, He), null !== ee.bloxd.getLifeformType(ie) && (He[1] += ee.bloxd.getLifeformEyeHeight(ie)), He) : null
-         }(this.uk, ie, this.aim)
- ... (183 more removed lines; see GitHub link above)
+             lP = null, AP = !1
+           }
+         })()));
+         const HW = null !== lW && void 0 !== lW ? lW : yi && !ZW && void 0 === jW && void 0 === UW;
+         if (!HW && wx(EW) && gO((() => {
+             XO.current(WW, iW, EW)
+           }))) return;
+         const nW = null !== (mW = null !== yW && void 0 !== yW ? yW : null === JW || void 0 === JW ? void 0 : JW.openPath) && void 0 !== mW ? mW : oW;
+         void 0 === lW && HW && Ti(!1), AO();
+         const uW = ML.activeKey(),
+           vW = HW ? null : uW,
+           gW = null !== vW,
+           DW = gW && !AW.h.get(),
+           VW = void 0 !== JW,
+           pW = DW || VW,
+           CW = VW ? 3 : xW,
+ ... (43 more added lines; see GitHub link above)
```

#### 370. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8643-L8663` → after: `L14089-L14208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14089-L14208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L14089-L14208) · [Before (L8643-L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8643-L8663)

```diff
-       }
-       followBody(ee) {
-         this.heading = ee, this.hasWritten = !1
-       }
-       readLook(ee, ie, He, ye, be) {
-         if (ye) return this.pointedAt.heading = ee, this.pointedAt.pitch = ie, this.heading = (0, oo.e)(this.heading, 0, 0, this.pointedAt, He, be), be;
-         if (!this.hasWritten) return be.XV = 0, be.zV = 0, be.pointedAt = void 0, be;
-         const Me = (0, Jo.z)(this.writtenHeading, ee);
-         return this.heading = (0, oo.e)(this.heading, Me, ie - this.writtenPitch, void 0, He, be), be
-       }
-       noteWritten(ee, ie) {
-         this.writtenHeading = ee, this.writtenPitch = ie, this.hasWritten = !0
-       }
-     }
-     const Lo = [0, 0, 0];
- 
- ... (5 more removed lines; see GitHub link above)
+         const Pi = {
+             lookups: sW,
+             lookupRound: MW,
+             worldCodeFiles: KW,
+             viewedPaths: SW
+           },
+           ci = {
+             retry: hW,
+             retryShown: iW,
+             chatGpt: null === Wi || void 0 === Wi ? void 0 : Wi.chatGpt,
+             retryOptions: {
+               check: BW,
+               about: PW,
+               planStep: LW,
+               wordsOnly: cW,
+               useFree: HW,
+ ... (104 more added lines; see GitHub link above)
```

#### 371. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8665-L8668` → after: `L14210-L14566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14210-L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L14210-L14566) · [Before (L8665-L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8665-L8668)

```diff
-             Me = 0;
-           for (let Ue = 0; Ue < 3; Ue++) {
-             const ye = ie[Ue] - ee[Ue];
-             be += ye * He[Ue], Me += ye * ye
+             mi = null;
+           const ti = async () => {
+             const iW = zN();
+             var mW, EW;
+             iW > Date.now() && (iO(Date.now()), Zi({
+               phase: "waiting",
+               startedAt: WW,
+               until: iW,
+               playingThrough: OW
+             }), await (mW = iW - Date.now(), EW = xi.signal, new Promise(((WW, iW) => {
+               const OW = setTimeout(WW, mW);
+               EW.addEventListener("abort", (() => {
+                 clearTimeout(OW), iW(new DOMException("The World Code AI request was stopped", "AbortError"))
+               }), {
+                 once: !0
+               })
+ ... (341 more added lines; see GitHub link above)
```

#### 372. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8670-L8679` → after: `L14568-L15023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14568-L15023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L14568-L15023) · [Before (L8670-L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8670-L8679)

```diff
-           const Ke = be * be - Me + ye * ye;
-           return Ke > 0 ? Math.max(0, Math.sqrt(Ke) - be) : 0
-         }(ee, Ue, He, ye),
-         Je = be(Ue, He, Fe),
-         oe = null !== Je && Je > hJ ? Je : Math.max(hJ, Fe);
-       for (let ke = 0; ke < 3; ke++) Me[ke] = Ue[ke] + He[ke] * oe - ee[ke];
-       const Re = Math.hypot(Me[0], Me[1], Me[2]);
-       for (let ke = 0; ke < 3; ke++) Me[ke] /= Re;
-       return Me
-     }
+           const fi = ix(),
+             Ci = NE(Ti.answer, ei, lW, nW, fi.callbackNames(), ii ? bW.d : void 0, Ai, new Set([JE(lW, nW, ii), nW, ...SW, ...Object.keys(null !== KW && void 0 !== KW ? KW : {})].filter((WW => null !== WW))), fi.realName),
+             Xi = cW ? {
+               ...Ci,
+               changes: [],
+               failedEdits: [],
+               inPlace: !1,
+               worldCode: [],
+               plan: [],
+               actions: []
+             } : Ci;
+           if (!Vi && !pW) {
+             const WW = Date.now();
+             iO(WW), Zi({
+               phase: "screening",
+               startedAt: WW,
+ ... (440 more added lines; see GitHub link above)
```

#### 373. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8682-L8713` → after: `L15026-L15046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15026-L15046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15026-L15046) · [Before (L8682-L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8682-L8713)

```diff
-       const ye = co * (He / 1e3),
-         be = Math.max(-ye, Math.min(ye, (0, Jo.z)(ee, ie)));
-       return (0, Jo.x)(ee + be)
-     }
-     class uo {
-       constructor(ee, ie, He, ye, be, Me) {
-         this.uk = ee, this.cameraController = ie, this.freeCameraController = He, this.cursor = ye, this.xR = void 0, this.director = void 0, this.view = new xo, this.look = {
-           XV: 0,
-           zV: 0
-         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.WHe = [0, 0, 0], this.tHe = [0, 0, 0], this.rayDirection = [0, 0, 0], this.hiddenWatched = null, this.cameraPosition = [0,  … [truncated]
-         const Ke = MF.c.subscribe("gameCamera", (ee => {
-             this.setSettings(ee)
-           })),
-           Ue = ee => {
-             this.update(ee)
-           };
- ... (16 more removed lines; see GitHub link above)
+       if (ti) {
+         if (Bi.length < 3) {
+           var mW;
+           const EW = null !== (mW = OW.useFree) && void 0 !== mW ? mW : yi && null !== Bm;
+           EW && Ti(!1), qi([...Bi, {
+             id: kO(),
+             text: WW,
+             shown: iW,
+             ...OW,
+             useFree: EW
+           }])
+         }
+       } else VO(WW, iW, OW)
+     }(0, mW.useEffect)((() => {
+       var WW, iW, OW;
+       const [mW, ...EW] = Bi;
+ ... (5 more added lines; see GitHub link above)
```

#### 374. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8715` → after: `L15048-L15049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15048-L15049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15048-L15049) · [Before (L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8715)

```diff
-             isCorrection: ie
+             path: OW,
+             text: mW
```

#### 375. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8717-L8744` → after: `L15051-L15052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15051-L15052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15051-L15052) · [Before (L8717-L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8717-L8744)

```diff
-           ie || this.cursorAim.forgetTap()
-         }));
-         (0, Le.onGameResetOnce)((() => {
-           Ke(), ye.listenForTaps(null), pe.h.unsubscribe(Re), ee.off("beforeRender", Ue), ee.off("afterRender", Fe), ee.off("beforePhysicsTick", Je), ee.off("YR", oe), this.release({
-             applyDeferred: !1
-           }), this.screen.clear(), ee.xR.mye([]), this.hideWatched(null)
-         }))
-       }
-       setSettings(ee) {
-         this.director.setSettings(ee), this.syncShownSettings()
-       }
-       syncShownSettings() {
-         const ee = this.director.getSettings();
-         if (ee === this.shownSettings) return;
-         this.shownSettings = ee;
-         const ie = (0, oo.h)(ee);
- ... (12 more removed lines; see GitHub link above)
+           return (null !== (iW = uW[OW]) && void 0 !== iW ? iW : "") === mW
+         }))) {
```

#### 376. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8746-L8766` → after: `L15054-L15061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15054-L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15054-L15061) · [Before (L8746-L8766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8746-L8766)

```diff
-         if (this.lastFrameMs = performance.now(), null !== (ie = this.uk.bloxd.client) && void 0 !== ie && ie.isReplayMode()) return this.uk.xR.mye([]), this.hideWatched(null), this.yieldToReplay(), void this.screen.clear();
-         const {
-           camera: He
-         } = this.uk;
-         this.detached || this.view.followBody(Ho.d.getPlayerFacingHeading(this.uk));
-         const ye = Ho.d.takeLookPointed(this.uk);
-         null !== He.B_ || null !== He.p_ || null === this.mouseTurns && !ye ? (this.look.XV = 0, this.look.zV = 0, this.look.pointedAt = void 0) : this.view.readLook(He.heading, He.pitch, "look" === this.mouseTurns, ye, this.look);
-         const be = this.director.update(ee, this.look);
-         if (this.uk.xR.mye(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !be) return this.hideWatched(null), void this.release();
-         if (!this.detached && !this.detach()) return void this.hideWatched(null);
-         this.hideWatched(be.position);
-         const Me = "default" === this.director.getSettings().mode;
-         "movement" !== this.facing || Me || this.turnBodyTowardsMovement(ee), this.cursorAim.YR(ee), this.applyPose(be)
-       }
-       setControlsLocked(ee, ie) {
-         this.cameraController.setLocked(ee, ie), this.freeCameraController.setBlocked(ee)
- ... (5 more removed lines; see GitHub link above)
+         const WW = (null !== (PW = mW.until) && void 0 !== PW ? PW : 0) - Date.now();
+         if (WW <= 0) return void qi(EW);
+         const iW = setTimeout((() => {
+           qi((WW => [...WW]))
+         }), WW);
+         return () => {
+           clearTimeout(iW)
+         }
```

#### 377. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8768` → after: `L15063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15063) · [Before (L8768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8768)

```diff
-       release(ee) {
+       if (void 0 !== mW.opensPath && mW.opensPath !== oW) {
```

#### 378. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8770-L8776` → after: `L15065-L15084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15065-L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15065-L15084) · [Before (L8770-L8776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8770-L8776)

```diff
-         if (!this.detached) return;
-         const {
-           uk: He
-         } = this, {
-           camera: ye
-         } = He, be = Ho.d.getPlayerFacingHeading(He), Me = Ho.d.getPlayerFacingPitch(He), Ke = null !== (ie = Oo(He, be, Me, this.reattachedPosition)) && void 0 !== ie ? ie : Ho.d.getSavedZoomDistance(He);
-         this.giveUpView(), Ho.d.reattachCamera(He), ye.F_ = Ke, ye.heading = be, ye.pitch = Me, ye.X3(), (0, kF.q)(He), this.setControlsLocked(!1, ee)
+         (null === (LW = qO.current) || void 0 === LW ? void 0 : LW.id) !== mW.id && (qO.current = {
+           id: mW.id,
+           until: Date.now() + 3e3
+         }, BO.current({
+           role: "assistant",
+           text: lZ(mW.opensPath),
+           changes: [],
+           status: "offered",
+           isNotice: !0,
+           isCalm: !0
+         }), fW(mW.opensPath, 1));
+         const WW = qO.current.until - Date.now();
+         if (WW > 0) {
+           const iW = setTimeout((() => {
+             qi((WW => [...WW]))
+           }), WW);
+ ... (4 more added lines; see GitHub link above)
```

#### 379. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8778-L8867` → after: `L15086-L15098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15086-L15098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15086-L15098) · [Before (L8778-L8867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8778-L8867)

```diff
-       hideWatched(ee) {
-         var ie, He, ye, be;
-         const Me = this.director.getSettings(),
-           Ke = "follow" === Me.mode && "eye" === Me.anchor && null !== (ie = Me.target) && void 0 !== ie ? ie : null;
-         let Ue = null;
-         if (null !== ee)
-           for (const oe of [Ke, null !== (Fe = null === (Je = this.hiddenWatched) || void 0 === Je ? void 0 : Je.eId) && void 0 !== Fe ? Fe : null]) {
-             var Fe, Je;
-             const ie = null === oe ? null : this.xR.getPlayerHolding(oe, ee);
-             if (null !== oe && null !== ie) {
-               Ue = {
-                 eId: oe,
-                 noaId: ie
-               };
-               break
-             }
- ... (74 more removed lines; see GitHub link above)
+       const cW = null !== (OW = mW.followUp) && void 0 !== OW ? OW : {
+         ...void 0 === mW.shown ? {} : {
+           check: mW.check,
+           wordsOnly: mW.wordsOnly,
+           isAutoFix: mW.isAutoFix,
+           autoFixRound: mW.autoFixRound
+         },
+         useFree: mW.useFree
+       };
+       wx(cW) && fL(oL.getState()) ? RO !== mW.id && (GO(mW.id), Wc()) : (qi(EW), XO.current(mW.text, mW.shown, cW))
+     }), [ti, Bi, NO, uW, Ni, oW, fW, vO, RO]);
+     const rO = (0, mW.useRef)(aO);
+     rO.current = aO, (0, mW.useEffect)((() => {
```

#### 380. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8980-L8982` → after: `L15101-L15105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15101-L15105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15101-L15105) · [Before (L8980-L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8980-L8982)

```diff
-         No(ee) ? (this.ensureCreated(), (0, ne.c)(this.starsMat, {
-           alpha: ee
-         }), this.starsMesh.JY(!0)) : null === (ie = this.starsMesh) || void 0 === ie || ie.JY(!1)
+         if (null === Wi || void 0 === Wi || Wi(), "change" === QW.action) return Gi(QW), void(null === (WW = UO.current) || void 0 === WW || WW.focus());
+         Gi(null), rO.current(jZ(QW), UZ(QW), {
+           check: !1,
+           wordsOnly: "explain" === QW.action
+         })
```

#### 381. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8984-L8989` → after: `L15107-L15253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15107-L15253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15107-L15253) · [Before (L8984-L8989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8984-L8989)

```diff
-       ensureCreated() {
-         if (this.starsMesh) return;
-         const {
-           PR: ee
-         } = this.uk, {
-           yp: ie
+     }), [QW, Wi]);
+     const zO = (WW, iW, OW) => {
+         zZ.add(BW, WW, iW, Date.now(), OW).then(li).catch((WW => {
+           console.error("World Code AI: couldn't keep a version of the code", WW)
+         }))
+       },
+       FO = (0, mW.useRef)(new Set),
+       QO = async function(WW, iW) {
+         let {
+           tryAgainLater: OW = !1
+         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const mW = MO.current;
+         if (WW.changes.some((WW => {
+             var iW;
+             return (null !== (iW = mW[WW.path]) && void 0 !== iW ? iW : "") !== WW.before
+           }))) return eO(WW.id, "stale"), !1;
+ ... (131 more added lines; see GitHub link above)
```

#### 382. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L8991-L9000` → after: `L15255-L15371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15255-L15371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15255-L15371) · [Before (L8991-L9000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L8991-L9000)

```diff
-         this.starsMesh = (0, Be.n)(ee, "dayNightStars", (0, ge.k)());
-         const He = mo.g.map((ee => mo.j + ee)),
-           ye = {
-             rootUrl: mo.j,
-             files: He,
-             noMipmap: !0,
-             luminance: !0,
-             samplingMode: Ee.h.nearest
-           },
-           be = (0, Ee.o)(ie, ye),
+         OW ? uO({
+           role: "assistant",
+           text: bx(mW),
+           changes: [],
+           status: "offered",
+           isNotice: !0
+         }) : (uO({
+           role: "assistant",
+           text: "Taking you to World Code\u2026",
+           changes: [],
+           status: "offered",
+           isNotice: !0,
+           isCalm: !0
+         }), lO((() => {
+           null === qW || void 0 === qW || qW(WW, !1)
+         }), jx))
+ ... (101 more added lines; see GitHub link above)
```

#### 383. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9002-L9005` → after: `L15373-L15376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15373-L15376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15373-L15376) · [Before (L9002-L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9002-L9005)

```diff
-             ...ho,
-             reflectionTexture: be,
-             alphaMode: Ze.d.add,
-             transparencyMode: Ze.s.alphaBlend
+             ...iW.options,
+             lookups: [...(null !== (OW = iW.options.lookups) && void 0 !== OW ? OW : []).map(GZ), ...cW],
+             worldCodeFiles: null !== (mW = LW.worldCodeFiles) && void 0 !== mW ? mW : iW.options.worldCodeFiles,
+             viewedPaths: [...null !== (EW = iW.options.viewedPaths) && void 0 !== EW ? EW : [], ...wW]
```

#### 384. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9007-L9071` → after: `L15378-L15389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15378-L15389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15378-L15389) · [Before (L9007-L9071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9007-L9071)

```diff
-         this.starsMat = (0, ne.b)({
-           name: "dayNightStars",
-           yp: ie,
-           sets: Me
-         }).mirror, this.starsMesh.material = this.starsMat, this.setupSkyMesh(this.starsMesh);
-         const Ke = We.e.BILLBOARDMODE_ALL | We.e.BILLBOARDMODE_USE_POSITION;
-         this.sunMesh = (0, Be.n)(ee, "dayNightSun", (0, ge.g)({
-           width: 1,
-           height: 1
-         })), this.sunMat = ro(ie, "dayNightSun", mo.m), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = Ke, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, Be.n)(ee, "dayNightMoon", (0, ge.g)({
-           width: 1,
-           height: 1
-         })), this.moonMat = ro(ie, "dayNightMoon", mo.e), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = Ke, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.JY(!1), this.sunMesh.JY(!1), this.moonMesh.JY(!1)
-       }
-       setupSkyMesh(ee) {
-         ee.infiniteDistance = !0, ee.renderingGroupId = -1, ee.Mp = !1, ee.Gf = !0, ee.eT = !0, ee.applyFog = !1, this.uk.PR.Up(ee, !1, this.uk.yq, !1)
- ... (49 more removed lines; see GitHub link above)
+         return qi((WW => [{
+           id: kO(),
+           text: iW.request,
+           shown: iW.shown,
+           followUp: tW,
+           ...NW ? {
+             replaced: NW,
+             until: Date.now() + lx
+           } : {}
+         }, ...WW])), "asked"
+       }, wm = (WW, iW, OW) => {
+         wi((mW => mW.map((mW => mW.id === WW ? {
```

#### 385. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9073-L9123` → after: `L15391-L15435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15391-L15435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15391-L15435) · [Before (L9073-L9123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9073-L9123)

```diff
-           emissiveColor: [1, 1, 1],
-           diffuseTexture: ye,
-           useAlphaFromDiffuseTexture: !0
-         }
-       }).mirror
-     }
-     var Qo = He(4598),
-       eR = He(38745),
-       iR = He(38098),
-       HR = He(38341),
-       yR = He(38146),
-       bR = He(780),
-       MR = He(2987),
-       KR = He(4662),
-       UR = He(115),
-       FR = He(325),
- ... (35 more removed lines; see GitHub link above)
+           trial: iW,
+           trialErrors: null !== OW && void 0 !== OW ? OW : mW.trialErrors
+         } : mW))))
+       }, tm = function(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         VW && (cO(WW), lO((() => {
+           var OW;
+           cO(null), OO.current || YO.current.length > 0 || null !== (OW = UO.current) && void 0 !== OW && OW.value.trim() || (zi(SO.current), VW({
+             chatKey: XW,
+             entryId: WW,
+             autoFixRound: iW
+           }))
+         }), Math.max(OW, sO.current + 1500 - Date.now())))
+       }, Zm = () => {
+         AO(), (0, vw.c)(XW)
+       };
+ ... (29 more added lines; see GitHub link above)
```

#### 386. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9125-L9133` → after: `L15437-L15440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15437-L15440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15437-L15440) · [Before (L9125-L9133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9125-L9133)

```diff
-         return be() ? {
-           status: "Ce"
-         } : (pe.h.yR("matchmakeAndPlayStepCompleted", {
-           step: Ei.k.SHADER_PACK,
-           totalSubSteps: 1
-         }), "ok" === Me.status && (this.inGame = !0, void 0 !== Me.couldntRun && this.notify(KR.c, Me.couldntRun), ee && !ee.isRunning() && this.notify("shaderPack:offInThisGame"), ee && this.failedModelCode.has(ee.defineFor("model")) && this.notifyModelFallback(), this.recheck(e … [truncated]
-       }
-       lightingChanged(ee) {
-         this.recheck(ee)
+       } catch (mW) {
+         console.error("World Code AI: couldn't forget a note", mW), dO(WW.id, {
+           forgetStatus: void 0
+         })
```

#### 387. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9135-L9164` → after: `L15442-L15459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15442-L15459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15442-L15459) · [Before (L9135-L9164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9135-L9164)

```diff
-       watchPipelineFailures(ee, ie) {
-         let He = !1;
-         return ie.lost.then((() => {
-           He = !0
-         })), ye = (ie, ye, be, Me) => {
-           var Ke;
-           const Ue = function(ee) {
-             const ie = rM.exec(ee);
-             if (ie) return {
-               program: "model",
-               packVariant: Number(ie[1])
-             };
-             const He = GM.exec(ee);
-             return He ? {
-               program: He[3] ? "liquid" : "terrain",
-               packVariant: Number(He[2]),
- ... (14 more removed lines; see GitHub link above)
+     }, lm = (0, mW.useCallback)((WW => WW.flatMap((WW => qZ(ix(), WW, ii)))), [ii]), Am = (0, mW.useRef)({}), bm = (0, mW.useRef)({}), jm = (0, mW.useRef)(Promise.resolve()), Um = (0, mW.useRef)([]), km = (0, mW.useRef)(new Map), sm = (0, mW.useRef)(new Map), Mm = (0, mW.useRef)( … [truncated]
+       Di.current = !1, Um.current = [], km.current = new Map, sm.current = new Map, Mm.current = null, Am.current = {}, bm.current = {}, fi(null)
+     }, Sm = async () => {
+       if (!Vi) return;
+       const WW = MO.current,
+         iW = function(WW, iW, OW) {
+           return Object.entries(iW).flatMap((iW => {
+             var mW;
+             let [EW, NW] = iW;
+             const PW = OW[EW];
+             if (void 0 === PW) return [];
+             const LW = new Map(it(null !== (mW = WW[EW]) && void 0 !== mW ? mW : "").map((WW => [WW.key, WW.value]))),
+               cW = new Map(it(NW).map((WW => [WW.key, WW.value])));
+             let wW = PW;
+             for (const [WW, OW] of LW) {
+               var tW;
+ ... (2 more added lines; see GitHub link above)
```

#### 388. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9166-L9182` → after: `L15461-L15476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15461-L15476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15461-L15476) · [Before (L9166-L9182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9166-L9182)

```diff
-           };
-           setTimeout((() => {
-             this.inGame && (this.checksRunning > 0 ? this.heldFailures.push(oe) : oe.stillCounts() && (oe.log(), this.failInGame()))
-           }), 0)
-         }, AK.add(ye), () => {
-           AK.delete(ye)
-         };
-         var ye
-       }
-       endGame() {
-         this.leaveGame(), this.checkGeneration++
-       }
-       failForPage(ee) {
-         this.endGame(), this.lastPassedCheck = null, this.page.block(ee)
-       }
-       leaveGame() {
- ... (1 more removed lines; see GitHub link above)
+             return wW === PW ? [] : [{
+               path: EW,
+               text: wW
+             }]
+           }))
+         }(Vi, Am.current, WW);
+       if (iW.length > 0) {
+         if (!await gW(iW)) return;
+         zO(function(WW) {
+           const iW = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).filter((iW => WW.includes(iW.name))).map((WW => ({
+             name: WW.name,
+             from: WW.to,
+             to: WW.from
+           })));
+           return iW.length > 0 ? Pt(iW, "undoing") : 0 === WW.length ? "Before undoing settings" : `Before undoing settings: ${(WW.length>3?[...WW.slice(0,3),WW.length-3+" more"]:WW).join(", ")}`
+         }(Um.current, [...km.current.values()]), WW), sO.current = Date.now()
```

#### 389. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9184-L9199` → after: `L15478-L15515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15478-L15515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15478-L15515) · [Before (L9184-L9199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9184-L9199)

```diff
-       async joinResult(ee, ie, He) {
-         var ye;
-         const be = await this.page.load();
-         if ("none" === be.status) return {
-           status: "ok"
-         };
-         const Me = null !== (ye = (0, JR.harnessShaderPackMode)()) && void 0 !== ye ? ye : (0, bR.j)(ie);
-         if ("blocked" === be.status) {
-           if ((0, sM.l)(be.variants, Me)) {
-             return {
-               status: "failed",
-               messageKey: "shaderPack:failedUnchecked" === be.messageKey && !await (0, ae.hasUsableWebGpuAdapter)() ? RR() : be.messageKey
-             }
-           }
-           return null === ee || void 0 === ee || ee.setMode(Me), {
-             status: "ok"
+       Km()
+     }, Ym = !ii && Object.values(uW).some((WW => it(WW).length > 0)), ym = function(WW) {
+       let {
+         codeBlock: iW,
+         hasSettings: OW,
+         canEdit: EW
+       } = WW;
+       return (0, mW.useEffect)((() => {
+         (0, Tw.G)("aiNotes", !iW)
+       }), [iW]), (0, mW.useEffect)((() => {
+         (0, Tw.G)("aiGameSettings", OW)
+       }), [OW]), (0, mW.useEffect)((() => {
+         (0, Tw.G)("aiEdits", EW)
+       }), [EW]), (0, Jw.n)("aiHelperOverview")
+     }({
+       codeBlock: ii,
+ ... (22 more added lines; see GitHub link above)
```

#### 390. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9202-L9218` → after: `L15518-L15564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15518-L15564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15518-L15564) · [Before (L9202-L9218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9202-L9218)

```diff
-         if (!ee) {
-           var Ke;
-           if (!(0, sM.l)(be.pack.variants, Me)) return {
-             status: "ok"
-           };
-           return {
-             status: "ok",
-             couldntRun: null !== (Ke = await async function() {
-               var ee;
-               if (!await (0, ae.hasUsableWebGpuAdapter)()) return RR();
-               const ie = (0, MR.i)();
-               if ("default" === (null === ie || void 0 === ie ? void 0 : ie.source)) return (0, FR.m)() ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu";
-               return !0 === (null === ie || void 0 === ie || null === (ee = ie.fallbackReason) || void 0 === ee ? void 0 : ee.endsWith(UR.d)) ? "shaderPack:failedNoWebGpu" : null
-             }()) && void 0 !== Ke ? Ke : function() {
-               const ee = (0, MR.i)();
-               return null !== ee && "lite" !== ee.requested && "default" !== ee.source
- ... (1 more removed lines; see GitHub link above)
+       else Jm(WW.id, "declined")
+     }, Hm = WW => {
+       var iW;
+       const OW = null === (iW = Ni.find((iW => iW.id === WW))) || void 0 === iW ? void 0 : iW.target.key;
+       return Ni.findLast((iW => "user" === iW.role && iW.id < WW && iW.target.key === OW))
+     }, nm = WW => {
+       var iW;
+       return null === (iW = Hm(WW)) || void 0 === iW ? void 0 : iW.asked
+     }, um = WW => {
+       var iW, OW;
+       const mW = Hm(WW);
+       return null !== (iW = null !== (OW = null === mW || void 0 === mW ? void 0 : mW.about) && void 0 !== OW ? OW : null === mW || void 0 === mW ? void 0 : mW.text) && void 0 !== iW ? iW : "a change"
+     }, om = Ni.filter(oO), dm = null === (sW = om[om.length - 1]) || void 0 === sW ? void 0 : sW.id, em = null !== (KW = null === (SW = om.findLast((WW => "user" === WW.role))) || void 0 === SW ? void 0 : SW.id) && void 0 !== KW ? KW : 0, gm = om.length < Ni.length, Dm = om[om.le … [truncated]
+       var OW;
+       VO(null !== (OW = WW.retry) && void 0 !== OW ? OW : "", WW.retryShown, {
+         ...WW.retryOptions,
+ ... (31 more added lines; see GitHub link above)
```

#### 391. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9220-L9236` → after: `L15566-L15580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15566-L15580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15566-L15580) · [Before (L9220-L9236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9220-L9236)

```diff
-         }
-         if (ee.setMode(Me), !ee.isRunning()) return {
-           status: "ok"
-         };
-         const Ue = kR(ee);
-         if (Ue === this.lastPassedCheck) return {
-           status: "ok"
-         };
-         this.lastPassedCheck = null;
-         const Fe = await this.runCheck(ee, He, "failed");
-         return "Ce" === Fe.status ? {
-           status: "Ce"
-         } : "failed" === Fe.status ? (qR(Fe), {
-           status: "failed",
-           messageKey: "shaderPack:failedToCompile"
-         }) : ("ok" === Fe.status && (this.lastPassedCheck = Ue), {
- ... (1 more removed lines; see GitHub link above)
+         }),
+         noticeActions: (WW, iW, OW) => ({
+           notice: OW.notice,
+           onRetry: () => {
+             EW(iW, {
+               retryOf: WW
+             })
+           },
+           onUseFree: () => {
+             EW(iW, {
+               useFree: !0,
+               retryOf: WW
+             })
+           },
+           onCheckKey: NW
```

#### 392. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9239-L9269` → after: `L15583-L15625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15583-L15625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15583-L15625) · [Before (L9239-L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9239-L9269)

```diff
-       recheck(ee) {
-         if (!this.inGame || !ee) return;
-         const ie = this.startCheck();
-         if (!ee.isRunning()) return;
-         const He = kR(ee);
-         He !== this.lastPassedCheck && this.runCheck(ee, ie, "skipped").then((ee => {
-           ie() || ("failed" === ee.status ? (qR(ee), this.failInGame()) : "ok" === ee.status && (this.lastPassedCheck = He))
-         }))
-       }
-       startCheck() {
-         const ee = ++this.checkGeneration;
-         return () => ee !== this.checkGeneration
-       }
-       async runCheck(ee, ie, He) {
-         this.checksRunning++;
-         try {
- ... (15 more removed lines; see GitHub link above)
+     }({
+       entries: om,
+       busy: !!ti,
+       send: (WW, iW) => {
+         let {
+           useFree: OW,
+           retryOf: mW,
+           continueFrom: EW
+         } = iW;
+         const NW = Ni.find((WW => WW.id === mW));
+         return VO(WW, null === NW || void 0 === NW ? void 0 : NW.retryShown, {
+           ...null === NW || void 0 === NW ? void 0 : NW.retryOptions,
+           useFree: OW,
+           retryOf: mW,
+           continueFrom: EW
+         })
+ ... (27 more added lines; see GitHub link above)
```

#### 393. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9272-L9283` → after: `L15628-L15650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15628-L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15628-L15650) · [Before (L9272-L9283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9272-L9283)

```diff
-       releaseHeldFailures() {
-         if (this.checksRunning > 0) return;
-         const ee = this.heldFailures;
-         this.heldFailures = [];
-         const ie = this.inGame ? ee.find((ee => ee.stillCounts())) : void 0;
-         ie && (ie.log(), this.failInGame())
-       }
-       failInGame() {
-         this.lastPassedCheck = null, this.endGame(), pe.h.yR(KR.g, "shaderPack:failedToCompile")
-       }
-       notifyModelFallback() {
-         this.notifiedModelFallback || (this.notifiedModelFallback = !0, this.notify("shaderPack:modelsWithoutPack"))
+       const WW = setTimeout((() => {
+         iO(Date.now())
+       }), Math.max(0, (Im - WO - 1) % 6e4 + 1 - (Date.now() - WO)));
+       return () => {
+         clearTimeout(WW)
+       }
+     }), [Im, WO]);
+     const rm = Bm ? `${Bm.id}/${Bm.model.id}` : null;
+     (0, mW.useEffect)((() => {
+       Ti(!1)
+     }), [rm]);
+     const zm = Object.values(uW).some((WW => "" !== WW.trim())),
+       Fm = Ai || ki || Mi || null !== Si,
+       Qm = "aiAnswer" === ym || ("aiNotes" === ym || "aiGameSettings" === ym || "aiGear" === ym) && Fm ? ym : "aiPanel",
+       WE = (0, mW.useRef)(null),
+       iE = (0, mW.useRef)(null),
+ ... (7 more added lines; see GitHub link above)
```

#### 394. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9285-L9291` → after: `L15652-L15662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15652-L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15652-L15662) · [Before (L9285-L9291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9285-L9291)

```diff
-       notify(ee, ie) {
-         const He = {
-           game: this.game,
-           translationKey: ee,
-           reasonKey: ie
-         };
-         pe.h.yR(oR, He, !0)
+     }), [Si]), (0, mW.useEffect)((() => {
+       const WW = bO.current;
+       if (!Si || !WW) return;
+       WW.scrollTo({
+         top: 0
+       });
+       const iW = "settings" === Si && fm.current ? WW.querySelector(".WorldCodeAiModelRow.Selected") : null;
+       if (iW && iW.getBoundingClientRect().bottom > WW.getBoundingClientRect().bottom && !Pw(WW, iW)) {
+         const OW = WW.getBoundingClientRect(),
+           mW = iW.getBoundingClientRect();
+         WW.scrollTop += mW.top - OW.top - (OW.height - mW.height) / 2
```

#### 395. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9293-L9376` → after: `L15664-L15694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15664-L15694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15664-L15694) · [Before (L9293-L9376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9293-L9376)

```diff
-     }(JR.shaderPackPage);
-     var TR = He(39528),
-       pR = He(40065);
-     class XR {
-       constructor(ee) {
-         this.uk = ee, this.skyBoxMesh = null, this.earthSkyKey = null, this.skyBoxRequestId = 0, this.dayAndNightSky = void 0, this.dayAndNightSky = new Go(ee), this.setupSkyBox(), this.setupFog(), this.setupLighting()
-       }
-       setupSkyBox() {
-         const ee = MF.c.subscribe("skyBox", (ee => {
-           this.newSkybox(ee)
-         }));
-         this.uk.PR.vye = () => {
-           this.updateSkyboxSize(), this.dayAndNightSky.vye()
-         }, (0, Le.onGameResetOnce)((() => {
-           var ie;
-           ee(), this.uk.PR.vye = null, this.skyBoxRequestId++, null === (ie = this.skyBoxMesh) || void 0 === ie || ie.dispose(!1, !0), this.skyBoxMesh = null, this.earthSkyKey = null, this.uk.PR.Sie = null, this.uk.PR.model.earthSky = null
- ... (68 more removed lines; see GitHub link above)
+       return () => {
+         WW.style.paddingBottom = ""
+       }
+     }), [Si]);
+     const {
+       disclosureRef: mE,
+       gearLabelRef: EE,
+       hasGearLabel: PE
+     } = function(WW, iW) {
+       const OW = (0, mW.useRef)(null),
+         EW = (0, mW.useRef)(null),
+         NW = (0, mW.useRef)(0),
+         [PW, LW] = (0, mW.useState)(!0);
+       return (0, mW.useLayoutEffect)((() => {
+         const iW = OW.current;
+         if (!iW || "undefined" === typeof ResizeObserver) return;
+ ... (15 more added lines; see GitHub link above)
```

#### 396. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9378-L9468` → after: `L15696-L15699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15696-L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15696-L15699) · [Before (L9378-L9468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9378-L9468)

```diff
-         Fe.Mp = !1, Fe.eT = !0, Fe.Gf = !0, Fe.applyFog = this.shouldApplyFogToSkyBox(), Fe.renderingGroupId = -1, Fe.HT();
-         const oe = Fe.material;
-         (0, ne.c)(oe, {
-           backFaceCulling: !1,
-           disableDepthWrite: !0
-         }, {
-           unrendered: !0
-         }), (0, bi.h)(oe), (0, TR.c)(Fe, (() => {
-           ye === this.skyBoxRequestId ? this.showSkyBox(Fe, Je) : Fe.dispose(!1, !0)
-         }), Ke)
-       }
-       showSkyBox(ee, ie) {
-         var He, ye;
-         null === (He = this.skyBoxMesh) || void 0 === He || He.dispose(!1, !0), this.skyBoxMesh = ee, this.earthSkyKey = ie, this.updateSkyboxSize(), ee && this.uk.PR.Up(ee, !1, this.uk.yq, !1), this.uk.PR.model.earthSky = null !== (ye = ie && (0, iR.g)(ie)) && void 0 !== ye ? ye … [truncated]
-       }
-       setupFog() {
- ... (75 more removed lines; see GitHub link above)
+       }), [WW, iW]), {
+         disclosureRef: OW,
+         gearLabelRef: EW,
+         hasGearLabel: PW
```

#### 397. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9470-L9505` → after: `L15701-L15748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15701-L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15701-L15748) · [Before (L9470-L9505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9470-L9505)

```diff
-     }
-     const zR = [183 / 255, 191 / 255, 195 / 255],
-       BR = new WeakMap;
- 
-     function ER(ee, ie, He, ye) {
-       var be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be, Ee, ge, de, We, te, Ze, we, De, Pe, Ae, Ye, Ve, ae, ce, xe, Le, Ce, ve, ue, me;
-       const le = null === (be = null !== (Me = He.infiniteDistance) && void 0 !== Me ? Me : null === ye || void 0 === ye ? void 0 : ye.infiniteDistance) || void 0 === be || be;
-       ee && (ee.infiniteDistance = le);
-       const Se = null !== (Ke = He.sunPosition) && void 0 !== Ke ? Ke : null === ye || void 0 === ye ? void 0 : ye.sunPosition,
-         ne = null !== (Ue = He.up) && void 0 !== Ue ? Ue : null === ye || void 0 === ye ? void 0 : ye.up;
-       (0, Oe.Y)(ie, {
-         infiniteDistance: le,
-         inclination: null !== (Fe = null !== (Je = He.inclination) && void 0 !== Je ? Je : null === ye || void 0 === ye ? void 0 : ye.inclination) && void 0 !== Fe ? Fe : -.2,
-         turbidity: null !== (oe = null !== (Re = He.turbidity) && void 0 !== Re ? Re : null === ye || void 0 === ye ? void 0 : ye.turbidity) && void 0 !== oe ? oe : 10,
-         luminance: null !== (ke = null !== (qe = He.luminance) && void 0 !== qe ? qe : null === ye || void 0 === ye ? void 0 : ye.luminance) && void 0 !== ke ? ke : .1,
-         rayleigh: null !== (fe = null !== (Te = He.rayleigh) && void 0 !== Te ? Te : null === ye || void 0 === ye ? void 0 : ye.rayleigh) && void 0 !== fe ? fe : 2,
- ... (20 more removed lines; see GitHub link above)
+     }(iE, Fm), LE = () => {
+       var WW;
+       qi([]), null === (WW = OO.current) || void 0 === WW || WW.abort(), AO()
+     }, wE = (0, PW.jsxs)("div", {
+       className: NW()("WorldCodeAiPanel", Si && "WorldCodeAiPanel-aiView"),
+       children: [(0, PW.jsxs)("div", {
+         className: "WorldCodeAiHeader",
+         children: [(0, PW.jsx)("span", {
+           className: "WorldCodeAiTitle",
+           children: "AI Helper"
+         }), (0, PW.jsx)("span", {
+           ref: mE,
+           className: "WorldCodeAiDisclosure",
+           title: "AI can be wrong. Check its changes.",
+           children: "AI can be wrong."
+         }), Fm && (0, PW.jsx)("button", {
+ ... (32 more added lines; see GitHub link above)
```

#### 398. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9507-L9592` → after: `L15750-L15765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15750-L15765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15750-L15765) · [Before (L9507-L9592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9507-L9592)

```diff
-         }
-       }(ee, ie, null !== (ue = null !== (me = He.vertexTint) && void 0 !== me ? me : null === ye || void 0 === ye ? void 0 : ye.vertexTint) && void 0 !== ue ? ue : [255, 255, 255])
-     }
- 
-     function gR(ee, ie) {
-       var He, ye;
-       return null !== (He = null !== (ye = ee.dithering) && void 0 !== ye ? ye : null === ie || void 0 === ie ? void 0 : ie.dithering) && void 0 !== He && He
-     }
-     var OR = He(38007);
-     const dR = xe.D / 8,
-       WR = .01,
-       tR = function() {
-         const ee = [];
-         for (let ie = 0; ie <= xe.D; ie += dR) ee.push({
-           offset: ie,
-           isChunkBound: ie % xe.D === 0
- ... (70 more removed lines; see GitHub link above)
+         }), !Fm && Ym && (0, PW.jsx)(hw, {
+           step: "aiGameSettings",
+           placement: "bottom",
+           children: (0, PW.jsx)("button", {
+             className: NW()("WorldCodeAiLinkButton", Mi && "WorldCodeAiLinkButton-active"),
+             "aria-pressed": Mi,
+             onClick: () => {
+               Km(), bi(!1), si(!1), Ki(!Mi)
+             },
+             children: "Game settings"
+           })
+         }), !Fm && xi.length > 0 && (0, PW.jsx)("button", {
+           className: NW()("WorldCodeAiLinkButton", Ai && "WorldCodeAiLinkButton-active"),
+           "aria-pressed": Ai,
+           onClick: () => {
+             iO(Date.now()), si(!1), Ki(!1), bi(!Ai)
```

#### 399. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9594-L9748` → after: `L15767-L15784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15767-L15784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15767-L15784) · [Before (L9594-L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9594-L9748)

```diff
-           freeze: !0
-         }).mirror
-       }
-       disposeMeshes() {
-         this.borderMesh && (this.borderMesh.dispose(), this.borderMesh = null), this.subdivMesh && (this.subdivMesh.dispose(), this.subdivMesh = null), this.borderMaterial && (this.borderMaterial.dispose(), this.borderMaterial = null), this.subdivMaterial && (this.subdivMaterial. … [truncated]
-       }
-     }
-     ZR.allRenderers = {}, ZR.tickHandler = void 0;
-     const wR = xe.D / 2,
-       DR = Math.PI / 2,
-       PR = [(ee, ie, He) => [
-         [ee, xe.D, ie, wR, He, 0, 0],
-         [ee, xe.D, ie, wR, He, DR, 0]
-       ], (ee, ie, He) => [
-         [xe.D, ee, wR, ie, He, 0, 0],
-         [xe.D, ee, wR, ie, He, 0, DR]
- ... (139 more removed lines; see GitHub link above)
+           children: "History"
+         }), !Fm && Ni.length > 0 && (0, PW.jsx)("button", {
+           className: "WorldCodeAiLinkButton",
+           disabled: !!ti,
+           onClick: () => {
+             Zm(), qi([]), wi([]), mi.turns = new TP
+           },
+           children: "New chat"
+         }), !Fm && (0, PW.jsx)(hw, {
+           step: "aiGear",
+           placement: "bottom",
+           children: (0, PW.jsxs)("button", {
+             ref: iE,
+             className: "WorldCodeAiLinkButton WorldCodeAiGear",
+             "aria-label": "AI Helper settings",
+             title: "AI Helper settings",
+ ... (2 more added lines; see GitHub link above)
```

#### 400. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L9750-L10598` → after: `L15786-L15792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15786-L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15786-L15792) · [Before (L9750-L10598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L9750-L10598)

```diff
-             {
-               mainMultiblock: be,
-               rootX: Me,
-               rootY: Ke,
-               rootZ: Ue
-             } = this.getMultiblockRoot(ee, ie[0], ie[1], ie[2]);
-           for (const {
-               block: ee,
-               id: ie,
-               x: Fe,
-               y: Je,
-               z: oe
-             }
-             of xR.g[be].positions) {
-             const be = Me + Fe,
-               Re = Ke + Je,
- ... (833 more removed lines; see GitHub link above)
+             children: [(0, PW.jsx)(xW.c, {
+               name: "gear"
+             }), PE && (0, PW.jsx)("span", {
+               ref: EE,
+               className: "WorldCodeAiGearLabel",
+               children: "Settings"
+             })]
```

#### 401. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L10600-L41735` → after: `L15794-L16622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15794-L16622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L15794-L16622) · [Before (L10600-L41735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L10600-L41735)

```diff
-         }
-         return !0
-       }
-       getBlockDrop(ee, ie, He) {
-         return (0, Ue.Zd)(this.getItemStat(ee, ie, "drops"), this.getItemStat(ee, ie, "specialToolDrop"), (() => this.getMetaInfo(ie).rootName), He)
-       }
-       getBlockDropAmount(ee, ie) {
-         var He, ye;
-         return ie && null !== (He = null === (ye = oe.i[ee]) || void 0 === ye ? void 0 : ye.aJ) && void 0 !== He ? He : 1
-       }
-       getBlockBreakDrop(ee, ie, He) {
-         if (!ie || this.getClientPredictedOption(ee, "creative") || !this.getBlockTypeIsHarvestable(ee, ie)) return null;
-         const ye = this.getBlockDrop(ee, ie, He);
-         return ye && {
-           itemId: this.getItemId(ye.name),
-           amount: this.getBlockDropAmount(ie, ye.normalDrop)
- ... (31120 more removed lines; see GitHub link above)
+         })]
+       }), (0, PW.jsxs)("div", {
+         className: "WorldCodeAiMessages",
+         ref: bO,
+         role: Fm ? void 0 : "log",
+         "aria-live": Fm ? void 0 : "polite",
+         children: [Ai && (0, PW.jsx)(qw, {
+           snapshots: xi,
+           files: uW,
+           now: WO,
+           onRestore: dW && !ti ? WW => {
+             (async WW => {
+               const iW = MO.current,
+                 OW = Cw(WW, iW);
+               if (0 === OW.length) return;
+               if (!await gW(OW)) return;
+ ... (813 more added lines; see GitHub link above)
```

#### 402. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41737-L41738` → after: `L16624-L16641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16624-L16641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16624-L16641) · [Before (L41737-L41738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41737-L41738)

```diff
-     const ye = 1400,
-       be = .45;
+     return (0, PW.jsx)(hw, {
+       step: Qm,
+       onPrevious: "aiPanel" === Qm ? pW : void 0,
+       children: wE
+     })
+   })),
+   ox = ux
+ }, 40976: (WW, iW, OW) => {
+   OW.d(iW, {
+     b: () => cW,
+     e: () => NW,
+     i: () => EW
+   });
+   const mW = 6e3;
+ 
+   function EW(WW, iW) {
+ ... (2 more added lines; see GitHub link above)
```

#### 403. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41740-L41769` → after: `L16643-L16646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16643-L16646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16643-L16646) · [Before (L41740-L41769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41740-L41769)

```diff
-     function Me(ee) {
-       return ee < ye ? Math.pow(ye / ee, be) : 1
-     }
-   },
-   40112: (ee, ie, He) => {
-     var ye = {
-       "./bedwars/bedwarsClient": 40119,
-       "./bridgeBattle/bridgeBattleClient": 40121,
-       "./buildAFactory2/buildAFactory2Client": 39281,
-       "./classic/classicClient": 40123,
-       "./classic/smp2Client": 40128,
-       "./clutch/clutchClient": 40131,
-       "./containmentBreach/containmentBreachClient": 40133,
-       "./cooking/cookingClient": 40265,
-       "./defusal/defusalClient": 40273,
-       "./frontline/frontlineClient": 40276,
- ... (14 more removed lines; see GitHub link above)
+   function NW(WW) {
+     const iW = (null !== WW && void 0 !== WW ? WW : "").match(/-?\d+(?:\.\d+)?/g);
+     return iW && iW.length >= 3 ? [Number(iW[0]), Number(iW[1]), Number(iW[2])] : null
+   }
```

#### 404. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41771-L41773` → after: `L16648-L16650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16648-L16650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16648-L16650) · [Before (L41771-L41773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41771-L41773)

```diff
-     function be(ee) {
-       return Me(ee).then(He)
-     }
+   function PW(WW, iW) {
+     return WW === iW ? String(WW) : `${WW}-${iW}`
+   }
```

#### 405. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41775-L41779` → after: `L16652-L16671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16652-L16671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16652-L16671) · [Before (L41775-L41779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41775-L41779)

```diff
-     function Me(ee) {
-       return Promise.resolve().then((() => {
-         if (!He.o(ye, ee)) {
-           var ie = new Error("Cannot find module '" + ee + "'");
-           throw ie.code = "MODULE_NOT_FOUND", ie
+   function LW(WW, iW, OW, mW) {
+     const EW = [];
+     let NW = new Map;
+     for (let PW = WW[2]; PW < WW[2] + iW; PW++) {
+       const LW = new Map;
+       let cW = WW[0];
+       for (; cW < WW[0] + iW;) {
+         const EW = mW(cW, OW, PW);
+         let wW = cW;
+         for (; wW + 1 < WW[0] + iW && mW(wW + 1, OW, PW) === EW;) wW++;
+         if (null !== EW) {
+           const WW = `${cW} ${wW} ${EW}`,
+             iW = NW.get(WW);
+           iW ? (iW.z1 = PW, NW.delete(WW), LW.set(WW, iW)) : LW.set(WW, {
+             x0: cW,
+             x1: wW,
+ ... (4 more added lines; see GitHub link above)
```

#### 406. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41781-L41782` → after: `L16673-L16675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16673-L16675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16673-L16675) · [Before (L41781-L41782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41781-L41782)

```diff
-         return ye[ee]
-       }))
+         cW = wW + 1
+       }
+       EW.push(...NW.values()), NW = LW
```

#### 407. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41784-L41824` → after: `L16677-L16678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16677-L16678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16677-L16678) · [Before (L41784-L41824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41784-L41824)

```diff
-     be.keys = () => Object.keys(ye), be.resolve = Me, be.id = 40112, ee.exports = be
-   },
-   39601: (ee, ie, He) => {
-     var ye = {
-       "./animator.ts": 37908,
-       "./autoRemoveMesh.ts": 39605,
-       "./autoRotate.js": 39559,
-       "./bullet.js": 39613,
-       "./cameraShake.ts": 39621,
-       "./cape.ts": 39568,
-       "./crouchingHandler.ts": 39645,
-       "./doOnFirstTick.ts": 39628,
-       "./entityMultilineText.ts": 39648,
-       "./entityName.ts": 39666,
-       "./flashingMeshOverlay.js": 39681,
-       "./floating.ts": 39692,
- ... (25 more removed lines; see GitHub link above)
+     return EW.push(...NW.values()), EW.sort(((WW, iW) => WW.z0 - iW.z0 || WW.x0 - iW.x0)).map((WW => `x${PW(WW.x0,WW.x1)} z${PW(WW.z0,WW.z1)} ${WW.name}`))
+   }
```

#### 408. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41826-L41828` → after: `L16680-L16694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16680-L16694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16680-L16694) · [Before (L41826-L41828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41826-L41828)

```diff
-     function be(ee) {
-       var ie = Me(ee);
-       return He(ie)
+   function cW(WW, iW, OW, EW) {
+     let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : mW;
+     const cW = [WW[0] + iW - 1, WW[1] + iW - 1, WW[2] + iW - 1],
+       wW = null !== EW && EW.every(((iW, OW) => Math.floor(iW) >= WW[OW] && Math.floor(iW) <= cW[OW])),
+       tW = [`The chunk from ${WW.join(" ")} to ${cW.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+     null !== EW && tW.push(`The player's feet are at ${EW.map(Math.floor).join(" ")}, ${wW?"in this chunk":"outside this chunk"}.`);
+     const ZW = [];
+     for (let mW = WW[1]; mW <= cW[1]; mW++) {
+       const EW = LW(WW, iW, mW, OW).join("; "),
+         NW = ZW[ZW.length - 1];
+       (null === NW || void 0 === NW ? void 0 : NW.boxes) === EW ? NW.to = mW : ZW.push({
+         from: mW,
+         to: mW,
+         boxes: EW
+       })
```

#### 409. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41830-L41834` → after: `L16696-L16703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16696-L16703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16696-L16703) · [Before (L41830-L41834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41830-L41834)

```diff
- 
-     function Me(ee) {
-       if (!He.o(ye, ee)) {
-         var ie = new Error("Cannot find module '" + ee + "'");
-         throw ie.code = "MODULE_NOT_FOUND", ie
+     const xW = ZW.filter((WW => "" !== WW.boxes));
+     0 === xW.length && tW.push("It is all air.");
+     let lW = tW.join("\n").length;
+     for (const mW of xW) {
+       const WW = `y${PW(mW.from,mW.to)}: ${mW.boxes}`;
+       if (lW += WW.length + 1, lW > NW) {
+         tW.push(`Cut short: the layers from y${mW.from} up aren't shown, as there are too many blocks.`);
+         break
```

#### 410. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41836` → after: `L16705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16705) · [Before (L41836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41836)

```diff
-       return ye[ee]
+       tW.push(WW)
```

#### 411. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41838-L41855` → after: `L16707-L16730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16707-L16730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16707-L16730) · [Before (L41838-L41855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41838-L41855)

```diff
-     be.keys = function() {
-       return Object.keys(ye)
-     }, be.resolve = Me, ee.exports = be, be.id = 39601
-   },
-   39584: (ee, ie, He) => {
-     var ye = {
-       "./cape_cow_cream.png": 28632,
-       "./cape_cow_normal.png": 28635,
-       "./cape_creator_level1.png": 28638,
-       "./cape_creator_level2.png": 28646,
-       "./cape_creator_level3.png": 28648,
-       "./cape_none.png": 28652,
-       "./cape_pig.png": 28656,
-       "./cape_sheep.png": 28662,
-       "./cape_super.png": 28668,
-       "./cape_super_inverted.png": 28674,
- ... (2 more removed lines; see GitHub link above)
+     return tW.join("\n")
+   }
+ }, 5587: (WW, iW, OW) => {
+   OW.d(iW, {
+     e: () => LW,
+     f: () => EW,
+     h: () => cW,
+     i: () => PW,
+     k: () => NW
+   });
+   var mW = OW(5582);
+   const EW = {
+       name: "ChatGPT",
+       url: "https://chatgpt.com/?hints=search&q="
+     },
+     NW = {
+ ... (8 more added lines; see GitHub link above)
```

#### 412. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41857-L41859` → after: `L16732-L16739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16732-L16739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16732-L16739) · [Before (L41857-L41859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41857-L41859)

```diff
-     function be(ee) {
-       var ie = Me(ee);
-       return He(ie)
+   function cW(WW) {
+     const iW = LW(EW, WW);
+     return iW.length <= 3e4 ? {
+       url: iW,
+       sendsPrompt: !0
+     } : {
+       url: new URL(EW.url).origin,
+       sendsPrompt: !1
```

#### 413. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41862-L41897` → after: `L16766-L16768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16766-L16768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16766-L16768) · [Before (L41862-L41897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41862-L41897)

```diff
-     function Me(ee) {
-       if (!He.o(ye, ee)) {
-         var ie = new Error("Cannot find module '" + ee + "'");
-         throw ie.code = "MODULE_NOT_FOUND", ie
-       }
-       return ye[ee]
-     }
-     be.keys = function() {
-       return Object.keys(ye)
-     }, be.resolve = Me, ee.exports = be, be.id = 39584
-   },
-   40138: (ee, ie, He) => {
-     var ye = {
-       "./breach-zero-uncaught.webp": 40141,
-       "./breach-zero.webp": 40147,
-       "./brood-father-uncaught.webp": 40149,
- ... (20 more removed lines; see GitHub link above)
+   function tW(WW) {
+     return `/docs/${wW(WW)}.md`
+   }
```

#### 414. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41899-L41902` → after: `L16770-L16773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16770-L16773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16770-L16773) · [Before (L41899-L41902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41899-L41902)

```diff
-     function be(ee) {
-       var ie = Me(ee);
-       return He(ie)
-     }
+   function ZW(WW, iW) {
+     return `/docs/${wW(WW)}/${iW+1}.md`
+   }
+   const xW = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
```

#### 415. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41904-L41909` → after: `L16775-L16779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16775-L16779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16775-L16779) · [Before (L41904-L41909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41904-L41909)

```diff
-     function Me(ee) {
-       if (!He.o(ye, ee)) {
-         var ie = new Error("Cannot find module '" + ee + "'");
-         throw ie.code = "MODULE_NOT_FOUND", ie
-       }
-       return ye[ee]
+   function lW(WW) {
+     const iW = xW.exec(WW);
+     return null === iW ? null : {
+       name: iW[1],
+       part: void 0 === iW[2] ? null : Number(iW[2])
```

#### 416. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41911-L41986` → after: `L16781-L16782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16781-L16782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16781-L16782) · [Before (L41911-L41986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41911-L41986)

```diff
-     be.keys = function() {
-       return Object.keys(ye)
-     }, be.resolve = Me, ee.exports = be, be.id = 40138
-   },
-   40141: (ee, ie, He) => {
-     ee.exports = He.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
-   },
-   40147: (ee, ie, He) => {
-     ee.exports = He.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
-   },
-   40149: (ee, ie, He) => {
-     ee.exports = He.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
-   },
-   40158: (ee, ie, He) => {
-     ee.exports = He.p + "static/media/brood-father.e48391955a574c1155fa.webp"
-   },
- ... (60 more removed lines; see GitHub link above)
+   }
+   const AW = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
```

#### 417. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L41988-L42024` → after: `L16784-L16792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16784-L16792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/107.js#L16784-L16792) · [Before (L41988-L42024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/107.js#L41988-L42024)

```diff
-     function Me() {
-       const ee = () => (0, ye.F)();
-       return {
-         memoryBytes: () => (0, ye.t)().buffer.byteLength,
-         reserveUpFront: ie => ee().SR(ie),
-         reserveAhead: ie => ee().lR(ie),
-         setCeiling: ie => {
-           ee().nR(ie)
-         },
-         lowWater: () => be[ee().mR()] ?? "none",
-         stats: () => function(ee) {
-           const ie = new Uint32Array((0, ye.t)().buffer, ee, 17),
-             He = ee => ie[ee] ?? 0,
-             be = ee => ({
-               upFront: He(ee),
-               ahead: He(ee + 1),
- ... (21 more removed lines; see GitHub link above)
+   function bW(WW) {
+     const iW = AW.exec(WW);
+     if (null === iW) return null;
+     const [, OW = "", mW] = iW;
+     return void 0 === mW ? tW(OW) : ZW(OW, Number(mW) - 1)
+   }
+ 
+   function jW(WW) {
+     return `/docsHtml/${wW(WW)}.html`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/108.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/108.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141)

#### 1. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/108.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/108.js#L4)

```diff
-   5338: (ee, ie, He) => {
+   44879: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L6-L9` → after: `L6-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L6-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/108.js#L6-L130) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/108.js#L6-L9)

```diff
-       Howl: () => be.Howl,
-       Howler: () => be.Howler,
-       musicOutput: () => pe,
-       readyAudioContext: () => Xe
+       DOCS_AGENT_PART_CHARS: () => Di.c,
+       DOCS_LLMS_FULL_TXT_PATH: () => Di.g,
+       DOCS_LLMS_TXT_PATH: () => Di.k,
+       DOCS_LLMS_TXT_URL: () => Di.o,
+       ROOT_LLMS_TXT_PATH: () => Di.s,
+       allGamemodeSettings: () => mW.d,
+       arcadeModeStaticConfig: () => bW.b,
+       arenaStaticConfig: () => Ei,
+       backroomsStaticConfig: () => mi.d,
+       battleBoxStaticConfig: () => ci,
+       bedwarsStaticConfig: () => nW.c,
+       bloxdAggregatorConfig: () => LW.d,
+       bloxdPreprodAggregatorConfig: () => cW.e,
+       bloxdStagingAggregatorConfig: () => wW.d,
+       bridgeBattleStaticConfig: () => fW.b,
+       captureTheFlagStaticConfig: () => li,
+ ... (109 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L11-L16` → after: `L132-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L132-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/108.js#L132-L134) · [Before (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/108.js#L11-L16)

```diff
-     var ye, be = He(5340),
-       Me = He(3791),
-       Ke = He(5055);
-     const Ue = be.Howler;
- 
-     function Fe() {
+     var mW = OW(805);
+ 
+     function EW(WW) {
```

#### 4. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L18-L27` → after: `L136-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L136-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/108.js#L136-L491) · [Before (L18-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/108.js#L18-L27)

```diff
-       if (Ue.ctx || !Ue.usingWebAudio || "undefined" === typeof AudioContext || !(0, Ke.f)()) return;
-       const He = navigator.audioSession;
-       let ye;
-       "auto" === (null === He || void 0 === He ? void 0 : He.type) && (He.type = "ambient");
-       try {
-         ye = new AudioContext({
-           sampleRate: 44100
-         })
-       } catch {
-         return
+       return null !== (iW = null === (OW = (0, mW.o)(WW)) || void 0 === OW ? void 0 : OW.defaultListedVariation) && void 0 !== iW ? iW : WW
+     }
+     var NW = OW(1049),
+       PW = OW(1078),
+       LW = OW(803),
+       cW = OW(791),
+       wW = OW(798),
+       tW = OW(789),
+       ZW = OW(782),
+       xW = OW(810),
+       lW = OW(839),
+       AW = OW(813),
+       bW = OW(818),
+       jW = OW(824),
+       UW = OW(830),
+       kW = OW(842),
+ ... (340 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L29-L122` → after: `L493-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L493-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/108.js#L493-L505) · [Before (L29-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/108.js#L29-L122)

```diff
-       const be = ye.createGain();
-       be.gain.setValueAtTime(Ue._muted ? 0 : null !== (ee = Ue._volume) && void 0 !== ee ? ee : 1, ye.currentTime), be.connect(ye.destination), Ue.ctx = ye, Ue.masterGain = be, null === (ie = Ue._setup) || void 0 === ie || ie.call(Ue)
-     }
-     Ue._mobileUnloaded = !0;
-     const Je = Ue.volume.bind(be.Howler);
-     Ue.volume = function() {
-       return Fe(), Je(...arguments)
-     };
-     const oe = Ue.mute.bind(be.Howler);
-     Ue.mute = ee => (Fe(), oe(ee));
-     const Re = be.Howl.prototype,
-       ke = Re.init;
- 
-     function qe() {
-       for (; Ue._html5AudioPool.length < Ue.html5PoolSize;) {
-         const ee = new Audio;
- ... (78 more removed lines; see GitHub link above)
+     }
+     const AW = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
+ 
+     function bW(WW) {
+       const iW = AW.exec(WW);
+       if (null === iW) return null;
+       const [, OW = "", mW] = iW;
+       return void 0 === mW ? tW(OW) : ZW(OW, Number(mW) - 1)
+     }
+ 
+     function jW(WW) {
+       return `/docsHtml/${wW(WW)}.html`
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/109.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/109.js` (67 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df)

#### 1. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L2)

```diff
- export const ids = [108, 109, 110];
+ export const ids = [10, 13, 14, 16, 17, 19, 21, 23, 24, 27, 30, 109, 159];
```

#### 2. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4-L6` → after: `L5-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L5-L34) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L4-L6)

```diff
-   37440: (ee, ie, He) => {
-     function ye(ee, ie, He, ye) {
-       return !(He && !ee.aimable) && (!ie || ee.gun && "head" !== ye)
+   40498: (WW, iW, OW) => {
+     var mW = {
+       "./bedwars/bedwarsClient": 40505,
+       "./bridgeBattle/bridgeBattleClient": 40513,
+       "./buildAFactory2/buildAFactory2Client": 39669,
+       "./classic/classicClient": 40522,
+       "./classic/smp2/smp2Client": 40525,
+       "./clutch/clutchClient": 40548,
+       "./containmentBreach/containmentBreachClient": 40552,
+       "./cooking/cookingClient": 40694,
+       "./defusal/defusalClient": 40699,
+       "./frontline/frontlineClient": 40701,
+       "./goalRush/goalRushClient": 40728,
+       "./greenville/greenvilleClient": 40736,
+       "./hideseek/hideseekClient": 40765,
+       "./luckyBedwars/luckyBedwarsClient": 40771,
+ ... (14 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L10` → after: `L38-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L38-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L38-L44) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L10)

```diff
-       return Math.max(.1 * ee, 1)
+       return Promise.resolve().then((() => {
+         if (!OW.o(mW, WW)) {
+           var iW = new Error("Cannot find module '" + WW + "'");
+           throw iW.code = "MODULE_NOT_FOUND", iW
+         }
+         return mW[WW]
+       }))
```

#### 4. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L13-L14` → after: `L88-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L88-L90) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L13-L14)

```diff
-     function Me(ee, ie) {
-       return !ee && ie
+     function EW(WW) {
+       var iW = NW(WW);
+       return OW(iW)
```

#### 5. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L16-L20` → after: `L92-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L92-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L92-L102) · [Before (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L16-L20)

```diff
-     He.d(ie, {
-       b: () => Me,
-       d: () => be,
-       e: () => ye
-     })
+ 
+     function NW(WW) {
+       if (!OW.o(mW, WW)) {
+         var iW = new Error("Cannot find module '" + WW + "'");
+         throw iW.code = "MODULE_NOT_FOUND", iW
+       }
+       return mW[WW]
+     }
+     EW.keys = function() {
+       return Object.keys(mW)
+     }, EW.resolve = NW, WW.exports = EW, EW.id = 40031
```

#### 6. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L22-L41` → after: `L104-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L104-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L104-L128) · [Before (L22-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L22-L41)

```diff
-   37447: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ue,
-       e: () => Ke
-     });
-     let ye = null;
-     const be = {
-         crosshairAccuracy: [],
-         turnDamageIndicators: []
-       },
-       Me = {
-         crosshairAccuracy: ee => {
-           const ie = be.crosshairAccuracy.at(-1);
-           ie ? ie.hook(ee) : ye = ee
-         },
-         turnDamageIndicators: ee => {
- ... (4 more removed lines; see GitHub link above)
+   40554: (WW, iW, OW) => {
+     var mW = {
+       "./breach-zero-uncaught.webp": 40559,
+       "./breach-zero.webp": 40568,
+       "./brood-father-uncaught.webp": 40574,
+       "./brood-father.webp": 40576,
+       "./carousel-uncaught.webp": 40580,
+       "./carousel.webp": 40583,
+       "./deadlock-uncaught.webp": 40591,
+       "./deadlock.webp": 40598,
+       "./doom-warlord-uncaught.webp": 40607,
+       "./doom-warlord.webp": 40616,
+       "./frost-revenant-uncaught.webp": 40619,
+       "./frost-revenant.webp": 40626,
+       "./hollow-choir-uncaught.webp": 40635,
+       "./hollow-choir.webp": 40640,
+ ... (9 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L43-L50` → after: `L130-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L130-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L130-L138) · [Before (L43-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L43-L50)

```diff
-     function Ke(ee, ie) {
-       const He = {
-           hook: ie
-         },
-         Ke = be[ee];
-       if (Ke.push(He), "crosshairAccuracy" === ee && null !== ye) {
-         const ee = ye;
-         ye = null, Me.crosshairAccuracy(ee)
+     function EW(WW) {
+       var iW = NW(WW);
+       return OW(iW)
+     }
+ 
+     function NW(WW) {
+       if (!OW.o(mW, WW)) {
+         var iW = new Error("Cannot find module '" + WW + "'");
+         throw iW.code = "MODULE_NOT_FOUND", iW
```

#### 8. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L52-L53` → after: `L140-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L140-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L140-L190) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L52-L53)

```diff
-       return () => {
-         const ee = Ke.indexOf(He); - 1 !== ee && Ke.splice(ee, 1)
+       return mW[WW]
+     }
+     EW.keys = function() {
+       return Object.keys(mW)
+     }, EW.resolve = NW, WW.exports = EW, EW.id = 40554
+   },
+   40914: () => {
+     "undefined" === typeof window || window.global || (window.global = window.globalThis || {})
+   },
+   40929: (WW, iW, OW) => {
+     var mW = [],
+       EW = [],
+       NW = [],
+       PW = [],
+       LW = [],
+       cW = [],
+ ... (35 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L57` → after: `L199-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L199-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L199-L309) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L57)

```diff
-     function Ue() {
+     function uW(WW, iW, OW, wW) {
+       var ZW = Math.sqrt(WW[0] * WW[0] + WW[1] * WW[1] + WW[2] * WW[2]);
+       if (0 === ZW) return ZW;
+       for (var xW = 0; xW < 3; xW++) {
+         var lW = WW[xW] >= 0,
+           AW = lW ? 1 : -1;
+         PW[xW] = AW;
+         var bW = lW ? OW[xW] : iW[xW],
+           jW = lW ? iW[xW] : OW[xW];
+         mW[xW] = jW;
+         var UW = Math.floor(bW - AW * wW);
+         EW[xW] = UW, NW[xW] = Math.floor(jW + AW * wW);
+         var kW = WW[xW] / ZW;
+         tW[xW] = kW;
+         var sW = Math.abs(1 / kW);
+         LW[xW] = sW;
+ ... (95 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L61` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L327) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L61)

```diff
-   34824: (ee, ie, He) => {
+   40976: (WW, iW, OW) => {
```

#### 11. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L64` → after: `L330-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L330-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L330-L331) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L64)

```diff
-       e: () => be
+       e: () => NW,
+       i: () => EW
```

#### 12. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L66` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L333) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L66)

```diff
-     var ye = He(18);
+     const mW = 6e3;
```

#### 13. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L69` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L336) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L69)

```diff
-       return ee && !ie
+       return [Math.floor(WW[0] / iW) * iW, Math.floor(WW[1] / iW) * iW, Math.floor(WW[2] / iW) * iW]
```

#### 14. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L72-L73` → after: `L339-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L339-L341) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L72-L73)

```diff
-     function Me() {
-       return be(ye.e.get("isTouchScreen"), ye.e.get("clientEscMenuOptions").touchActionButtons)
+     function NW(WW) {
+       const iW = (null !== WW && void 0 !== WW ? WW : "").match(/-?\d+(?:\.\d+)?/g);
+       return iW && iW.length >= 3 ? [Number(iW[0]), Number(iW[1]), Number(iW[2])] : null
```

#### 15. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L94` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L345) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L94)

```diff
-       return Je.set(ee, ie), ee
+       return WW === iW ? String(WW) : `${WW}-${iW}`
```

#### 16. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L97-L101` → after: `L348-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L348-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L348-L371) · [Before (L97-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L97-L101)

```diff
-     function ke() {
-       return {
-         bytes: Ue,
-         songsDecoded: Fe.song,
-         soundsDecoded: Fe.sound
+     function LW(WW, iW, OW, mW) {
+       const EW = [];
+       let NW = new Map;
+       for (let PW = WW[2]; PW < WW[2] + iW; PW++) {
+         const LW = new Map;
+         let cW = WW[0];
+         for (; cW < WW[0] + iW;) {
+           const EW = mW(cW, OW, PW);
+           let wW = cW;
+           for (; wW + 1 < WW[0] + iW && mW(wW + 1, OW, PW) === EW;) wW++;
+           if (null !== EW) {
+             const WW = `${cW} ${wW} ${EW}`,
+               iW = NW.get(WW);
+             iW ? (iW.z1 = PW, NW.delete(WW), LW.set(WW, iW)) : LW.set(WW, {
+               x0: cW,
+               x1: wW,
+ ... (8 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L105-L130` → after: `L376-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L376-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L376-L390) · [Before (L105-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L105-L130)

```diff
-     function qe(ee) {
-       if (oe.has(ee)) return;
-       oe.add(ee);
-       const ie = 1 === ee.decodeAudioData.length,
-         He = ee.decodeAudioData.bind(ee);
-       ee.decodeAudioData = (ee, ye, be) => {
-         const oe = ee => {
-           const ie = Me._howls.filter((ee => "loaded" !== ee._state));
-           try {
-             null === ye || void 0 === ye || ye(ee)
-           } finally {
-             const He = ie.find((ee => "loaded" === ee._state));
-             void 0 !== He && "string" === typeof He._src && function(ee, ie, He) {
-               var ye;
-               Ue += He - (null !== (ye = Ke.get(ie)) && void 0 !== ye ? ye : 0), Ke.set(ie, He);
-               const be = Je.get(ee);
- ... (10 more removed lines; see GitHub link above)
+     function cW(WW, iW, OW, EW) {
+       let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : mW;
+       const cW = [WW[0] + iW - 1, WW[1] + iW - 1, WW[2] + iW - 1],
+         wW = null !== EW && EW.every(((iW, OW) => Math.floor(iW) >= WW[OW] && Math.floor(iW) <= cW[OW])),
+         tW = [`The chunk from ${WW.join(" ")} to ${cW.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+       null !== EW && tW.push(`The player's feet are at ${EW.map(Math.floor).join(" ")}, ${wW?"in this chunk":"outside this chunk"}.`);
+       const ZW = [];
+       for (let mW = WW[1]; mW <= cW[1]; mW++) {
+         const EW = LW(WW, iW, mW, OW).join("; "),
+           NW = ZW[ZW.length - 1];
+         (null === NW || void 0 === NW ? void 0 : NW.boxes) === EW ? NW.to = mW : ZW.push({
+           from: mW,
+           to: mW,
+           boxes: EW
+         })
```

#### 18. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L132-L146` → after: `L392-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L392-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L392-L403) · [Before (L132-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L132-L146)

```diff
-     }(0, ye.g)(ke);
-     const fe = be.Howl.prototype,
-       Te = fe.init;
-     fe.init = function(ee) {
-       return be.Howler.volume(), Me.ctx && qe(Me.ctx), Te.call(this, ee)
-     };
-     const pe = fe.unload;
-     fe.unload = function() {
-       const ee = this._src,
-         ie = pe.call(this);
-       if ("string" !== typeof ee) return ie;
-       const He = Ke.get(ee);
-       return void 0 !== He && function(ee) {
-         return !Me._howls.some((ie => ie._src === ee || "string" === typeof ie._src && ee.indexOf(ie._src) >= 0))
-       }(ee) && (Ke.delete(ee), Ue -= He), ie
+       const xW = ZW.filter((WW => "" !== WW.boxes));
+       0 === xW.length && tW.push("It is all air.");
+       let lW = tW.join("\n").length;
+       for (const mW of xW) {
+         const WW = `y${PW(mW.from,mW.to)}: ${mW.boxes}`;
+         if (lW += WW.length + 1, lW > NW) {
+           tW.push(`Cut short: the layers from y${mW.from} up aren't shown, as there are too many blocks.`);
+           break
+         }
+         tW.push(WW)
+       }
+       return tW.join("\n")
```

#### 19. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L149-L157` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L406) · [Before (L149-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L149-L157)

```diff
-   37617: (ee, ie, He) => {
-     async function ye(ee) {
-       const ie = await fetch(ee, {
-         priority: "low"
-       });
-       if (!ie.ok) throw new Error(`Fetching ${ee} failed: HTTP ${ie.status}`);
-       const He = ie.body.getReader();
-       for (; !(await He.read()).done;);
-     }
+   40980: (WW, iW, OW) => {
```

#### 20. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L160` → after: `L410-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L410-L412) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L160)

```diff
-     })
+     });
+     const mW = "The world isn't loaded, so no blocks can be seen.",
+       EW = "The world isn't loaded, so nothing in it can be seen."
```

#### 21. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L162-L167` → after: `L414-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L414-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L414-L416) · [Before (L162-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L162-L167)

```diff
-   5338: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       Howl: () => be.Howl,
-       Howler: () => be.Howler,
-       musicOutput: () => pe,
-       readyAudioContext: () => Xe
+   40482: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => nW
```

#### 22. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L169-L172` → after: `L418-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L418-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L418-L426) · [Before (L169-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L169-L172)

```diff
-     var ye, be = He(5340),
-       Me = He(3791),
-       Ke = He(5055);
-     const Ue = be.Howler;
+     var mW = OW(1876),
+       EW = OW(1422),
+       NW = OW(62),
+       PW = OW(1089),
+       LW = OW.n(PW),
+       cW = OW(1532),
+       wW = OW(100);
+     const tW = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
+       ZW = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];
```

#### 23. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L174-L188` → after: `L428-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L428-L429) · [Before (L174-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L174-L188)

```diff
-     function Fe() {
-       var ee, ie;
-       if (Ue.ctx || !Ue.usingWebAudio || "undefined" === typeof AudioContext || !(0, Ke.f)()) return;
-       const He = navigator.audioSession;
-       let ye;
-       "auto" === (null === He || void 0 === He ? void 0 : He.type) && (He.type = "ambient");
-       try {
-         ye = new AudioContext({
-           sampleRate: 44100
-         })
-       } catch {
-         return
-       }
-       const be = ye.createGain();
-       be.gain.setValueAtTime(Ue._muted ? 0 : null !== (ee = Ue._volume) && void 0 !== ee ? ee : 1, ye.currentTime), be.connect(ye.destination), Ue.ctx = ye, Ue.masterGain = be, null === (ie = Ue._setup) || void 0 === ie || ie.call(Ue)
+     function xW(WW) {
+       return "webm" === WW ? tW : ZW
```

#### 24. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L190-L198` → after: `L431-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L431-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L431-L450) · [Before (L190-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L190-L198)

```diff
-     Ue._mobileUnloaded = !0;
-     const Je = Ue.volume.bind(be.Howler);
-     Ue.volume = function() {
-       return Fe(), Je(...arguments)
-     };
-     const oe = Ue.mute.bind(be.Howler);
-     Ue.mute = ee => (Fe(), oe(ee));
-     const Re = be.Howl.prototype,
-       ke = Re.init;
+ 
+     function lW(WW) {
+       for (const iW of WW)
+         if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(iW)) return iW;
+       return null
+     }
+ 
+     function AW(WW) {
+       return null !== lW(xW(WW))
+     }
+     var bW = OW(1283);
+     const jW = [{
+       id: "webm",
+       label: "WebM",
+       description: "Usually less screen tearing, but may not play in all media players."
+     }, {
+ ... (4 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L201-L203` → after: `L453-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L453-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L453-L521) · [Before (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L201-L203)

```diff
-       for (; Ue._html5AudioPool.length < Ue.html5PoolSize;) {
-         const ee = new Audio;
-         ee._unlocked = !0, Ue._releaseHtml5Audio(ee)
+       return AW("webm") ? "webm" : AW("mp4") ? "mp4" : "webm"
+     }
+ 
+     function kW(WW) {
+       let {
+         cards: iW
+       } = WW;
+       return (0, bW.jsx)("div", {
+         className: "ReplayVideoExportOptionCards",
+         children: iW.map((WW => (0, bW.jsxs)("div", {
+           className: "ReplayVideoExportOptionColumn",
+           children: [(0, bW.jsx)("div", {
+             className: LW()("ReplayVideoExportOptionCard", {
+               Selected: WW.selected,
+               Disabled: WW.disabled
+             }),
+ ... (53 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L205-L210` → after: `L523-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L523-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L523-L532) · [Before (L205-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L205-L210)

```diff
-       for (const ie of Ue._howls)
-         if (!ie._webAudio)
-           for (const He of ie._getSoundIds()) {
-             var ee;
-             const ye = null === (ee = ie._soundById(He)) || void 0 === ee ? void 0 : ee._node;
-             ye && !ye._unlocked && (ye._unlocked = !0, ye.load())
+       const MW = iW ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch … [truncated]
+         KW = [{
+           id: "withoutUi",
+           label: "Without UI",
+           description: "Usually cleaner and sharper.",
+           selected: !xW,
+           disabled: !1,
+           disabledReason: null,
+           onSelect: () => {
+             lW(!1)
```

#### 27. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L212-L230` → after: `L534-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L534-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L534-L542) · [Before (L212-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L212-L230)

```diff
-     }
-     Re.init = function(ee) {
-       return Fe(), ke.call(this, ee)
-     }, (0, Ke.f)() && (Ue._unlockAudio = () => {
-       const ee = Ue.ctx;
-       if (Ue._audioUnlocked || !ee) return;
-       Ue.autoUnlock = !1;
-       const ie = ee.createBuffer(1, 1, 22050);
-       Ue._scratchBuffer = ie;
-       const He = new AbortController;
-       let ye = "afterPaint";
-       const be = () => {
-           var ye;
-           if (Ue._audioUnlocked) return;
-           null === (ye = Ue._autoResume) || void 0 === ye || ye.call(Ue);
-           const be = ee.createBufferSource();
- ... (3 more removed lines; see GitHub link above)
+         }, {
+           id: "withUi",
+           label: "With UI",
+           description: "Includes HUD elements. May look worse on some devices.",
+           selected: xW,
+           disabled: !OW,
+           disabledReason: mW,
+           onSelect: () => {
+             lW(!0)
```

#### 28. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L232-L250` → after: `L544-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L544-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L544-L602) · [Before (L232-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L232-L250)

```diff
-         },
-         Fe = () => {
-           qe(), be()
-         },
-         Je = ie => {
-           if (qe(), "inTap" === ye) {
-             if ("running" === ee.state) return;
-             console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), be()
-           } else "afterPaint" === ye && (ye = "queued", (0, Me.c)(ie.timeStamp, (() => {
-             ye = "inTap", be()
-           })))
-         };
-       for (const Me of ["touchstart", "touchend"]) document.addEventListener(Me, Fe, {
-         capture: !0,
-         signal: He.signal
-       });
- ... (3 more removed lines; see GitHub link above)
+         }],
+         SW = jW.map((WW => {
+           const iW = AW(WW.id);
+           return {
+             id: WW.id,
+             label: WW.label,
+             description: WW.description,
+             selected: tW === WW.id,
+             disabled: !iW,
+             disabledReason: "Your device doesn't support this format",
+             onSelect: () => {
+               ZW(WW.id)
+             }
+           }
+         }));
+       return (0, bW.jsxs)("div", {
+ ... (43 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L252-L254` → after: `L604-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L604-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L604-L608) · [Before (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L252-L254)

```diff
-     });
-     let fe = 0;
-     const Te = null === (ye = Ue._autoSuspend) || void 0 === ye ? void 0 : ye.bind(be.Howler);
+     }));
+     var MW = OW(5615),
+       KW = OW(38153),
+       SW = OW(38159);
+     let YW = null;
```

#### 30. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L257-L273` → after: `L611-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L611-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L611-L644) · [Before (L257-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L257-L273)

```diff
-       Xe();
-       const {
-         ctx: ee,
-         masterGain: ie
-       } = Ue;
-       return ee && ie ? {
-         ctx: ee,
-         destination: ie,
-         holdAwake: ee => {
-           var ie, He;
-           (fe += ee ? 1 : -1, ee) ? null === (ie = Ue._autoResume) || void 0 === ie || ie.call(Ue): null === (He = Ue._autoSuspend) || void 0 === He || He.call(Ue)
-         },
-         wake: () => {
-           var ie;
-           "running" !== ee.state && (null === (ie = Ue._autoResume) || void 0 === ie || ie.call(Ue), ee.resume().catch((() => {})))
-         }
- ... (1 more removed lines; see GitHub link above)
+       return function() {
+         const WW = (0, SW.e)();
+         for (const {
+             group: iW,
+             dataAttr: OW
+           }
+           of KW.c)
+           if (OW && WW[iW]) return !0;
+         return !1
+       }() ? function() {
+         var WW;
+         return "function" === typeof(null === (WW = navigator.mediaDevices) || void 0 === WW ? void 0 : WW.getDisplayMedia)
+       }() ? {
+         canIncludeUi: !0,
+         includeUiDisabledReason: null
+       } : {
+ ... (18 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L276-L278` → after: `L649-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L649-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L649-L650) · [Before (L276-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L276-L278)

```diff
-     function Xe() {
-       var ee;
-       (Ue.volume(), Ue.ctx && Ue.autoUnlock) && (null === (ee = Ue._unlockAudio) || void 0 === ee || ee.call(Ue))
+     function HW(WW) {
+       WW.holdInput(!1), (0, JW.d)(!1)
```

#### 32. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L280-L296` → after: `L652-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L652-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L652-L766) · [Before (L280-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L280-L296)

```diff
-     Te && (Ue._autoSuspend = () => fe > 0 ? be.Howler : Te())
-   },
-   37605: (ee, ie, He) => {
-     function ye(ee, ie) {
-       let {
-         afterJoin: He,
-         joining: ye,
-         idle: be,
-         fetchFile: Me,
-         Ce: Ke = () => !1
-       } = ie;
-       const Ue = ie => {
-         ie >= ee.length || Ke() || He((() => {
-           be((() => {
-             Ke() || (ye() ? Ue(ie) : Me(ee[ie]).catch((() => {})).finally((() => {
-               Ue(ie + 1)
- ... (1 more removed lines; see GitHub link above)
+     async function nW(WW) {
+       var iW, OW;
+       if ((0, JW.b)() || hW) return;
+       const NW = WW();
+       if (!NW) return;
+       hW = !0;
+       let PW = null;
+       const LW = NW.playbackMarkInTick,
+         {
+           canIncludeUi: cW,
+           includeUiDisabledReason: wW
+         } = yW();
+       try {
+         PW = await async function(WW) {
+           let {
+             hasPlaybackMark: iW,
+ ... (99 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L298-L300` → after: `L768-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L768-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L768-L820) · [Before (L298-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L298-L300)

```diff
-         }))
-       };
-       Ue(0)
+         }(NW, cW, UW);
+         if (NW.pause(), "inactive" !== UW.state && UW.stop(), await OW, "captureLost" === wW) return void EW.NotificationProvider.showAlertPopup({
+           title: "Video export stopped",
+           subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
+         });
+         if ("recorderError" === wW) return void EW.NotificationProvider.showAlertPopup({
+           title: "Video export failed",
+           subtitle: "The recorder encountered an error. Nothing was saved."
+         });
+         const tW = null !== (SW = null === (nW = NW.playbackFailure) || void 0 === nW ? void 0 : nW.call(NW)) && void 0 !== SW ? SW : null;
+         if (null !== tW) return void EW.NotificationProvider.showAlertPopup({
+           title: "Video export failed",
+           subtitle: `${tW} Nothing was saved.`
+         });
+         const bW = new Blob(jW, {
+           type: iW
+ ... (37 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L312` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L823) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L312)

```diff
-   37612: (ee, ie, He) => {
+   5610: (WW, iW, OW) => {
```

#### 35. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L317-L362` → after: `L828-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L828-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L828-L892) · [Before (L317-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L317-L362)

```diff
-     var ye = He(18),
-       be = He(37578),
-       Me = He(4697),
-       Ke = He(37617),
-       Ue = He(5338),
-       Fe = He(242),
-       Je = He(37605);
-     const oe = {
-         afterJoin: ee => {
-           (0, Me.d)(ye.e.get("gameState"), ee)
-         },
-         joining: () => (0, Me.e)(ye.e.get("gameState")),
-         idle: Fe.e
-       },
-       Re = function(ee) {
-         const ie = new Set,
- ... (30 more removed lines; see GitHub link above)
+     var mW = OW(5615),
+       EW = OW(25);
+     const NW = .25,
+       PW = .85,
+       LW = .02,
+       cW = .01;
+ 
+     function wW(WW, iW, OW, mW, EW, NW, LW) {
+       const {
+         waveform: cW,
+         pitchHz: wW,
+         attackMs: tW,
+         releaseMs: ZW,
+         lowpassHz: xW
+       } = OW, lW = EW + mW.durationMs / 1e3, AW = wW * 2 ** (mW.semitones / 12), bW = WW.createOscillator();
+       bW.type = cW, bW.frequency.setValueAtTime(AW, EW), bW.frequency.exponentialRampToValueAtTime(AW * 2 ** (mW.glideSemitones / 12), lW);
+ ... (49 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L364-L368` → after: `L894-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L894-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L894-L900) · [Before (L364-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L364-L368)

```diff
-   37596: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke,
-       f: () => be,
-       i: () => ye
+   37518: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       LOOK_DEBUG_HEADER: () => tW,
+       endLookDebugTake: () => UW,
+       noteLookDroppedCopy: () => kW,
+       saveLookCapture: () => sW,
+       startLookDebug: () => jW
```

#### 37. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L372` → after: `L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L911) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L372)

```diff
-       return ee.replace(/[_\-\s]*\d+$/, "") || ee
+       return (0, NW.x)(WW).toFixed(1)
```

#### 38. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L375-L376` → after: `L914-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L914-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L914-L915) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L375-L376)

```diff
-     function be(ee, ie, He) {
-       return He <= 0 ? 0 : ee * He / Math.max(ie, He)
+     function cW(WW, iW) {
+       return `camera set by ${PW.get(WW[iW+1])}: heading ${`${LW(WW[iW+2])} -> ${LW(WW[iW+4])}`} deg, pitch ${`${LW(WW[iW+3])} -> ${LW(WW[iW+5])}`} deg, at ${WW[iW].toFixed(1)} ms`
```

#### 39. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L379-L381` → after: `L920-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L920-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L920-L925) · [Before (L379-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L379-L381)

```diff
-     function Me(ee, ie) {
-       const He = ee.getDurationMs();
-       return He > 0 ? ee.loudness * Math.max(0, 1 - (ie - ee.startMs) / He) : 0
+     function ZW(WW) {
+       return Number.isFinite(WW) ? String(Math.round(10 * WW) / 10) : String(WW)
+     }
+ 
+     function xW(WW) {
+       return Number.isFinite(WW) ? WW.toFixed(1) : String(WW)
```

#### 40. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L385-L387` → after: `L929-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L929-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L929-L935) · [Before (L385-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L385-L387)

```diff
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
-           ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
-         this.maxVoices = ee, this.maxPerGroup = ie, this.voices = []
+         this.frames = 0, this.looked = 0, this.idle = 0, this.mD = 0, this.pastLimit = 0, this.lockSkips = 0, this.Yj = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
+       }
+       moved() {
+         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.mD > 0 || this.dropped > 0 || this.cameraSets > 0
+       }
+       hasEvent() {
+         return this.mD > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 41. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L389-L392` → after: `L937-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L937-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L937-L995) · [Before (L389-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L389-L392)

```diff
-       admit(ee) {
-         if (this.voices = this.voices.filter((ee => ee.isAlive())), null !== ee.group) {
-           const ie = this.voices.filter((ie => ie.group === ee.group));
-           if (ie.length >= this.maxPerGroup && !this.dropLeastWorth(ie, ee)) return !1
+     }
+     class AW {
+       constructor() {
+         var WW = this;
+         this.topicOn = (0, EW.t)("look"), this.remote = (0, EW.x)(), this.tally = new lW, this.takes = null, this.started = !1, this.record = function(iW) {
+           let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+           if (wW.p.step(iW, OW), !WW.topicOn) return;
+           const mW = iW[OW],
+             EW = iW[OW + 1],
+             NW = iW[OW + 2],
+             PW = iW[OW + 3],
+             LW = iW[OW + 4],
+             cW = iW[OW + 5],
+             tW = iW[OW + 6],
+             lW = iW[OW + 7],
+             AW = iW[OW + 8],
+ ... (43 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L396-L402` → after: `L998-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L998-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L998-L1003) · [Before (L396-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L396-L402)

```diff
-       dropLeastWorth(ee, ie) {
-         let He = null,
-           ye = 1 / 0;
-         for (const be of ee) {
-           if (!be.canStop()) continue;
-           const ee = Me(be, ie.startMs);
-           ee < ye && (He = be, ye = ee)
+       start(WW, iW) {
+         if (wW.p.start(WW, null !== document.pointerLockElement), this.takes = iW, this.topicOn) {
+           const {
+             screen: iW
+           } = window;
+           (0, EW.m)("look", `start: ${WW} client, dpr ${window.devicePixelRatio}, screen ${iW.width}x${iW.height}, pointer lock ${document.pointerLockElement?"BL":"free"}`)
```

#### 43. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L404` → after: `L1005-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1005-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1005-L1008) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L404)

```diff
-         return !(!He || ie.loudness < ye) && (this.voices.splice(this.voices.indexOf(He), 1), He.stop(), !0)
+         this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
+           capture: !0,
+           passive: !0
+         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
```

#### 44. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L406-L416` → after: `L1010-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1010-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1010-L1049) · [Before (L406-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L406-L416)

```diff
-     }
-   },
-   37415: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => be,
-       f: () => Ke,
-       i: () => Ue
-     });
-     var ye = He(27);
-     const be = "touchSprintChanged";
-     let Me = !0;
+       outlier(WW) {
+         const iW = this.tally;
+         iW.outliers >= 20 ? iW.suppressed++ : (iW.outliers++, (0, EW.m)("look", WW))
+       }
+       eventOutlier(WW) {
+         const iW = this.tally;
+         iW.eventLines >= 10 ? iW.suppressed++ : (iW.eventLines++, (0, EW.m)("look", WW))
+       }
+       takeRecords() {
+         if (null === this.takes) return;
+         const WW = this.takes.look();
+         if (WW.length >= tW) {
+           this.counted(wW.c.stepsLost, WW[0]), this.counted(wW.c.droppedCopies, WW[1]);
+           for (let iW = tW; iW + wW.g <= WW.length; iW += wW.g) this.record(WW, iW)
+         }
+         const iW = this.takes.cameraSets();
+ ... (24 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L419` → after: `L1052-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1052-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/109.js#L1052-L1053) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/109.js#L419)

```diff
-       return Me
+       var WW;
+       null === (WW = bW) || void 0 === WW || WW.endTake()
```
