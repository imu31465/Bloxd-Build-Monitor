# Changed — Bundle Modifications Report (Part 005 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `5 / 65` (**270** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 004](part-004.md) · [Part 006 →](part-006.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (834 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 18. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L332-L335` → after: `L498-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L498-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L498-L501) · [Before (L332-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L332-L335)

```diff
-     function cD(DD, zD) {
-       var wD = DD.body.wU,
-         pD = zD.ewD;
-       sD().copy(wD.base, pD), sD().set(wD.vec, zD.width, zD.height, zD.width), sD().add(wD.max, wD.base, wD.vec), gD(DD, zD, DD.mp)
+     function Sp(pp) {
+       var ip = -1,
+         cp = null == pp ? 0 : pp.length;
+       for (this.__data__ = new Op; ++ip < cp;) this.add(pp[ip])
```

#### 19. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L338-L341` → after: `L513-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L513-L515) · [Before (L338-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L338-L341)

```diff
-     function gD(DD, zD, wD) {
-       DD.mp = wD;
-       const pD = zD.CU ?? DD.AU.CU;
-       DD.body.Iy = null !== wD ? wD - pD[1] : null
+     function Yp(pp) {
+       var ip = this.__data__ = new Op(pp);
+       this.size = ip.size
```

#### 20. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L343-L348` → after: `L517-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L517-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L517-L543) · [Before (L343-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L343-L348)

```diff
- 
-     function RD(DD, zD) {
-       var wD = DD.body.wU.base,
-         pD = zD.width / 2,
-         sD = zD.LzD;
-       sD[0] = wD[0] + pD, sD[1] = wD[1], sD[2] = wD[2] + pD
+     Yp.prototype.clear = op, Yp.prototype.delete = Ip, Yp.prototype.get = Sp, Yp.prototype.has = xp, Yp.prototype.set = Lp, pp.exports = Yp
+   },
+   5272: (pp, ip, cp) => {
+     var Op = cp(5231).Symbol;
+     pp.exports = Op
+   },
+   5822: (pp, ip, cp) => {
+     var Op = cp(5231).Uint8Array;
+     pp.exports = Op
+   },
+   5968: (pp, ip, cp) => {
+     var Op = cp(5398)(cp(5231), "WeakMap");
+     pp.exports = Op
+   },
+   6058: pp => {
+     pp.exports = function(pp, ip, cp) {
+ ... (11 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L350-L353` → after: `L545-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L545-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L545-L550) · [Before (L350-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L350-L353)

```diff
- 
-     function AD(DD, zD, wD, pD) {
-       var KD = DD.body.UG;
-       sD().gp(LD, zD.LzD, KD, wD), pD && sD().lerp(LD, zD.sH, LD, .3), sD().copy(zD.sH, LD)
+   },
+   6391: pp => {
+     pp.exports = function(pp, ip) {
+       for (var cp = -1, Op = null == pp ? 0 : pp.length; ++cp < Op;)
+         if (!ip(pp[cp], cp, pp)) return !1;
+       return !0
```

#### 22. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L356-L365` → after: `L553-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L553-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L553-L557) · [Before (L356-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L356-L365)

```diff
-   38217: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       PositionState: () => sD,
-       default: () => KD,
-       SLD: () => rD
-     });
-     const pD = wD(358);
-     class sD {
-       constructor() {
-         this.position = null, this.width = .8, this.height = .8, this.LzD = null, this.sH = null, this.ewD = null, this.CU = null
+   5873: pp => {
+     pp.exports = function(pp, ip) {
+       for (var cp = -1, Op = null == pp ? 0 : pp.length, op = 0, Ip = []; ++cp < Op;) {
+         var Sp = pp[cp];
+         ip(Sp, cp, pp) && (Ip[op++] = Sp)
```

#### 23. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L368-L388` → after: `L561-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L561-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L561-L565) · [Before (L368-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L368-L388)

```diff
- 
-     function KD(DD) {
-       return {
-         name: "position",
-         order: 41,
-         state: new sD,
-         ZJ: function(zD, wD) {
-           var sD = [0, 0, 0];
-           wD.position && pD.copy(sD, wD.position), wD.position = sD, wD.LzD = pD.create(), wD.sH = pD.create(), wD.ewD = new Float32Array(6), DD.JzD(wD.position, null, wD.LzD), pD.copy(wD.sH, wD.LzD), rD(wD)
-         },
-         hT: null,
-         system: function(zD, wD) {
-           for (var pD = 0; pD < wD.length; pD++) {
-             var sD = wD[pD],
-               KD = sD.CU ?? DD.CU,
-               LD = sD.position,
- ... (5 more removed lines; see GitHub link above)
+   },
+   6136: (pp, ip, cp) => {
+     var Op = cp(6142);
+     pp.exports = function(pp, ip) {
+       return !!(null == pp ? 0 : pp.length) && Op(pp, ip, 0) > -1
```

#### 24. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L390-L395` → after: `L567-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L567-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L567-L572) · [Before (L390-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L390-L395)

```diff
- 
-     function rD(DD) {
-       var zD = DD.width / 2,
-         wD = DD.LzD,
-         pD = DD.ewD;
-       pD[0] = wD[0] - zD, pD[1] = wD[1], pD[2] = wD[2] - zD, pD[3] = wD[0] + zD, pD[4] = wD[1] + DD.height, pD[5] = wD[2] + zD
+   },
+   6167: pp => {
+     pp.exports = function(pp, ip, cp) {
+       for (var Op = -1, op = null == pp ? 0 : pp.length; ++Op < op;)
+         if (cp(ip, pp[Op])) return !0;
+       return !1
```

#### 25. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L398-L415` → after: `L575-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L575-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L575-L592) · [Before (L398-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L398-L415)

```diff
-   38229: (DD, zD, wD) => {
-     function pD(DD) {
-       var zD = "iLD";
-       return {
-         name: zD,
-         order: 99,
-         state: {
-           time: 100.1
-         },
-         ZJ: null,
-         hT: null,
-         system: function(wD, pD) {
-           for (var sD = 0; sD < pD.length; sD++) {
-             var KD = pD[sD];
-             KD.time -= wD, KD.time < 0 && DD.yJ.fW(KD.cW, zD)
-           }
- ... (2 more removed lines; see GitHub link above)
+   5884: (pp, ip, cp) => {
+     var Op = cp(5889),
+       op = cp(5715),
+       Ip = cp(5310),
+       Sp = cp(5895),
+       xp = cp(5674),
+       Lp = cp(5910),
+       Yp = Object.prototype.hasOwnProperty;
+     pp.exports = function(pp, ip) {
+       var cp = Ip(pp),
+         Dp = !cp && op(pp),
+         Ap = !cp && !Dp && Sp(pp),
+         Pp = !cp && !Dp && !Ap && Lp(pp),
+         Wp = cp || Dp || Ap || Pp,
+         yp = Wp ? Op(pp.length, String) : [],
+         Up = yp.length;
+ ... (2 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L421-L446` → after: `L595-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L595-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L595-L598) · [Before (L421-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L421-L446)

```diff
-   38197: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => GD,
-       i: () => OD,
-       m: () => fD
-     });
-     var pD = wD(38204),
-       sD = wD.n(pD),
-       KD = wD(358),
-       rD = wD.n(KD),
-       LD = wD(38217),
-       cD = wD(38221);
-     class gD {
-       constructor() {
-         this.runs = 0, this.loopMs = 0, this.byComponent = new Map
-       }
- ... (10 more removed lines; see GitHub link above)
+   5565: pp => {
+     pp.exports = function(pp, ip) {
+       for (var cp = -1, Op = null == pp ? 0 : pp.length, op = Array(Op); ++cp < Op;) op[cp] = ip(pp[cp], cp, pp);
+       return op
```

#### 27. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L448-L450` → after: `L600-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L600-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L600-L659) · [Before (L448-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L448-L450)

```diff
-     class RD {
-       constructor(DD) {
-         this.sampleRate = DD, this.ticks = new gD, this.renders = new gD
+   },
+   5706: pp => {
+     pp.exports = function(pp, ip) {
+       for (var cp = -1, Op = ip.length, op = pp.length; ++cp < Op;) pp[op + cp] = ip[cp];
+       return pp
+     }
+   },
+   5805: pp => {
+     pp.exports = function(pp, ip) {
+       for (var cp = -1, Op = null == pp ? 0 : pp.length; ++cp < Op;)
+         if (ip(pp[cp], cp, pp)) return !0;
+       return !1
+     }
+   },
+   6219: pp => {
+     pp.exports = function(pp) {
+ ... (44 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L452-L453` → after: `L661-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L661-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L661-L679) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L452-L453)

```diff
-       reset() {
-         this.ticks.reset(), this.renders.reset()
+       return Yp
+     }
+   },
+   6149: pp => {
+     pp.exports = function(pp, ip, cp, Op) {
+       for (var op = pp.length, Ip = cp + (Op ? 1 : -1); Op ? Ip-- : ++Ip < op;)
+         if (ip(pp[Ip], Ip, pp)) return Ip;
+       return -1
+     }
+   },
+   5699: (pp, ip, cp) => {
+     var Op = cp(5706),
+       op = cp(5713);
+     pp.exports = function pp(ip, cp, Ip, Sp, xp) {
+       var Lp = -1,
+         Yp = ip.length;
+ ... (3 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L456-L507` → after: `L683-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L683-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L683-L692) · [Before (L456-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L456-L507)

```diff
-     class AD {
-       constructor(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
-           let DD = 2654435769;
-           return () => (DD ^= DD << 13, DD ^= DD >>> 17, DD ^= DD << 5, (DD >>> 0) / 4294967296)
-         }();
-         this.ecs = DD, this.random = zD, this.windows = [], this.sampleRate = 0, this.runNames = [], this.runMs = [], this.runStates = [], this.now = () => performance.now();
-         const wD = DD.DU,
-           pD = DD.render;
-         DD.DU = zD => this.sampleRate > 0 && this.random() < this.sampleRate && DD._systems.length > 0 ? (this.runTimed(DD._systems, "system", zD), DD) : wD(zD), DD.render = zD => this.sampleRate > 0 && this.random() < this.sampleRate && DD._renderSystems.length > 0 ? (this.runTi … [truncated]
-       }
-       openWindow(DD) {
-         const zD = new RD(DD);
-         return this.windows.push(zD), this.updateSampleRate(), zD
-       }
-       closeWindow(DD) {
- ... (36 more removed lines; see GitHub link above)
+   },
+   6033: (pp, ip, cp) => {
+     var Op = cp(6035)();
+     pp.exports = Op
+   },
+   6030: (pp, ip, cp) => {
+     var Op = cp(6033),
+       op = cp(5882);
+     pp.exports = function(pp, ip) {
+       return pp && Op(pp, ip, op)
```

#### 30. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L509-L682` → after: `L694-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L694-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L694-L700) · [Before (L509-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L509-L682)

```diff
-     var ID = {
-       NLD: 10
-     };
-     const BD = {
-       physics: {
-         LI: wD(38221),
-         server: !0
-       },
-       position: {
-         LI: wD(38217),
-         server: !0
-       },
-       rI: {},
-       iLD: {
-         LI: wD(38229),
-         server: !0
- ... (158 more removed lines; see GitHub link above)
+   },
+   5332: (pp, ip, cp) => {
+     var Op = cp(5340),
+       op = cp(5569);
+     pp.exports = function(pp, ip) {
+       for (var cp = 0, Ip = (ip = Op(ip, pp)).length; null != pp && cp < Ip;) pp = pp[op(ip[cp++])];
+       return cp && cp == Ip ? pp : void 0
```

#### 31. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L684-L688` → after: `L702-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L702-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L702-L708) · [Before (L684-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L684-L688)

```diff
- 
-     function hD(DD, zD, wD, pD, sD) {
-       var KD = DD[zD] + wD,
-         rD = DD[zD] + pD;
-       Math.abs(KD - Math.round(KD)) < .002 && (DD[zD] += .002), Math.abs(rD - Math.round(rD)) < .001 && (DD[zD] -= .001)
+   },
+   5856: (pp, ip, cp) => {
+     var Op = cp(5706),
+       op = cp(5310);
+     pp.exports = function(pp, ip, cp) {
+       var Ip = ip(pp);
+       return op(pp) ? Ip : Op(Ip, cp(pp))
```

#### 32. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L690-L693` → after: `L710-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L710-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L710-L717) · [Before (L690-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L690-L693)

```diff
-     const nD = [0, 0, 0, 0, 0, 0];
- 
-     function MD(DD, zD) {
-       return !(DD[0] > zD[3]) && (!(DD[1] > zD[4]) && (!(DD[2] > zD[5]) && (!(DD[3] < zD[0]) && (!(DD[4] < zD[1]) && !(DD[5] < zD[2])))))
+   },
+   5266: (pp, ip, cp) => {
+     var Op = cp(5272),
+       op = cp(5277),
+       Ip = cp(5284),
+       Sp = Op ? Op.toStringTag : void 0;
+     pp.exports = function(pp) {
+       return null == pp ? void 0 === pp ? "[object Undefined]" : "[object Null]" : Sp && Sp in Object(pp) ? op(pp) : Ip(pp)
```

#### 33. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L697-L737` → after: `L720-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L720-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L720-L811) · [Before (L697-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L697-L737)

```diff
-   37486: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => sz,
-       f: () => Rz,
-       g: () => Dz,
-       i: () => wz,
-       j: () => tD,
-       k: () => FD,
-       m: () => HD,
-       p: () => vD,
-       r: () => YD,
-       u: () => Az,
-       x: () => qD,
-       z: () => zz
-     });
-     wD(358), wD(2851);
- ... (25 more removed lines; see GitHub link above)
+   6303: pp => {
+     pp.exports = function(pp, ip) {
+       return pp > ip
+     }
+   },
+   5994: pp => {
+     pp.exports = function(pp, ip) {
+       return null != pp && ip in Object(pp)
+     }
+   },
+   6142: (pp, ip, cp) => {
+     var Op = cp(6149),
+       op = cp(6157),
+       Ip = cp(6162);
+     pp.exports = function(pp, ip, cp) {
+       return ip === ip ? Ip(pp, ip, cp) : Op(pp, op, cp)
+ ... (76 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L740-L742` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L814) · [Before (L740-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L740-L742)

```diff
-       clear() {
-         this.pending.length = 0
-       }
+       return !0
```

#### 35. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L744-L751` → after: `L816-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L816-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L816-L819) · [Before (L744-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L744-L751)

```diff
- 
-     function UD(DD, zD, wD, pD, sD, KD) {
-       if ("number" !== typeof wD) {
-         for (let pD = 0; pD < wD.length; pD++)
-           if (!fD(DD[zD + pD], wD[pD])) return !1;
-         return !0
-       }
-       return !!fD(DD[zD], wD) && (void 0 === pD || !!fD(DD[zD + 1], pD) && (void 0 === sD || !!fD(DD[zD + 2], sD) && (void 0 === KD || fD(DD[zD + 3], KD))))
+   },
+   6157: pp => {
+     pp.exports = function(pp) {
+       return pp !== pp
```

#### 36. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L753-L756` → after: `L821-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L821-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L821-L834) · [Before (L753-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L753-L756)

```diff
- 
-     function fD(DD, zD) {
-       const wD = Math.fround(zD);
-       return DD === wD && (0 !== wD || 1 / DD === 1 / wD)
+   },
+   5403: (pp, ip, cp) => {
+     var Op = cp(5405),
+       op = cp(5410),
+       Ip = cp(5214),
+       Sp = cp(5427),
+       xp = /^\[object .+?Constructor\]$/,
+       Lp = Function.prototype,
+       Yp = Object.prototype,
+       Dp = Lp.toString,
+       Ap = Yp.hasOwnProperty,
+       Pp = RegExp("^" + Dp.call(Ap).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
+     pp.exports = function(pp) {
+       return !(!Ip(pp) || op(pp)) && (Op(pp) ? Pp : xp).test(Sp(pp))
```

#### 37. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L758-L763` → after: `L836-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L836-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L836-L843) · [Before (L758-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L758-L763)

```diff
- 
-     function ID(DD, zD, wD, pD) {
-       const sD = DD.getBuffer();
-       if (!sD || !DD.isUpdatable()) return;
-       const KD = DD._engine;
-       KD.AB >= 2 ? (BD(KD, sD, zD, wD, pD), GD(KD)) : DD.updateDirectly(zD.subarray(wD, pD), wD)
+   },
+   5916: (pp, ip, cp) => {
+     var Op = cp(5266),
+       op = cp(5669),
+       Ip = cp(5292),
+       Sp = {};
+     Sp["[object Float32Array]"] = Sp["[object Float64Array]"] = Sp["[object Int8Array]"] = Sp["[object Int16Array]"] = Sp["[object Int32Array]"] = Sp["[object Uint8Array]"] = Sp["[object Uint8ClampedArray]"] = Sp["[object Uint16Array]"] = Sp["[object Uint32Array]"] = !0, Sp["[obj … [truncated]
+       return Ip(pp) && op(pp.length) && !!Sp[Op(pp)]
```

#### 38. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L765-L767` → after: `L845-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L845-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L845-L853) · [Before (L765-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L765-L767)

```diff
- 
-     function BD(DD, zD, wD, pD, sD) {
-       DD.bindArrayBuffer(zD), DD._gl.bufferSubData(DD._gl.ARRAY_BUFFER, pD * Float32Array.BYTES_PER_ELEMENT, wD, pD, sD - pD)
+   },
+   5727: (pp, ip, cp) => {
+     var Op = cp(5729),
+       op = cp(5984),
+       Ip = cp(6004),
+       Sp = cp(5310),
+       xp = cp(6006);
+     pp.exports = function(pp) {
+       return "function" == typeof pp ? pp : null == pp ? Ip : "object" == typeof pp ? Sp(pp) ? op(pp[0], pp[1]) : Op(pp) : xp(pp)
```

#### 39. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L769-L771` → after: `L855-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L855-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L855-L864) · [Before (L769-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L769-L771)

```diff
- 
-     function GD(DD) {
-       DD._cachedVertexBuffers = null
+   },
+   5930: (pp, ip, cp) => {
+     var Op = cp(5933),
+       op = cp(5938),
+       Ip = Object.prototype.hasOwnProperty;
+     pp.exports = function(pp) {
+       if (!Op(pp)) return op(pp);
+       var ip = [];
+       for (var cp in Object(pp)) Ip.call(pp, cp) && "constructor" != cp && ip.push(cp);
+       return ip
```

#### 40. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L773-L775` → after: `L866-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L866-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L866-L890) · [Before (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L773-L775)

```diff
-     class hD {
-       constructor(DD) {
-         this.engine = DD, this.pages = []
+   },
+   6309: pp => {
+     pp.exports = function(pp, ip) {
+       return pp < ip
+     }
+   },
+   6025: (pp, ip, cp) => {
+     var Op = cp(6028),
+       op = cp(5660);
+     pp.exports = function(pp, ip) {
+       var cp = -1,
+         Ip = op(pp) ? Array(pp.length) : [];
+       return Op(pp, (function(pp, Op, op) {
+         Ip[++cp] = ip(pp, Op, op)
+       })), Ip
+     }
+ ... (9 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L777-L791` → after: `L892-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L892-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L892-L905) · [Before (L777-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L777-L791)

```diff
-       static forEngine(DD) {
-         const zD = DD;
-         if (!(zD.AB >= 2) || !nD.test(zD.getGlInfo().renderer)) return null;
-         let wD = MD.get(DD);
-         if (!wD) {
-           const pD = new hD(zD);
-           wD = pD, MD.set(DD, pD);
-           const sD = DD.SI.add((() => {
-             for (const DD of pD.pages) DD.restore()
-           }));
-           DD.Bl.addOnce((() => {
-             DD.SI.remove(sD), pD.dispose(), MD.delete(DD)
-           }))
-         }
-         return wD
+     }
+   },
+   5984: (pp, ip, cp) => {
+     var Op = cp(5770),
+       op = cp(5326),
+       Ip = cp(5986),
+       Sp = cp(5345),
+       xp = cp(5974),
+       Lp = cp(5977),
+       Yp = cp(5569);
+     pp.exports = function(pp, ip) {
+       return Sp(pp) && xp(ip) ? Lp(Yp(pp), ip) : function(cp) {
+         var Sp = op(cp, pp);
+         return void 0 === Sp && Sp === ip ? Ip(cp, pp) : Op(ip, Sp, 3)
```

#### 42. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L793-L807` → after: `L907-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L907-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L907-L933) · [Before (L793-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L793-L807)

```diff
-       allocate(DD) {
-         const zD = Math.max(16, 16 * Math.ceil(DD / 16));
-         for (const pD of this.pages) {
-           const DD = pD.take(zD);
-           if (DD >= 0) return {
-             page: pD,
-             start: DD,
-             size: zD
-           }
-         }
-         const wD = new JD(this.engine, Math.max(65536, zD));
-         return this.pages.push(wD), {
-           page: wD,
-           start: wD.take(zD),
-           size: zD
+     }
+   },
+   5724: (pp, ip, cp) => {
+     var Op = cp(5565),
+       op = cp(5332),
+       Ip = cp(5727),
+       Sp = cp(6025),
+       xp = cp(6039),
+       Lp = cp(5918),
+       Yp = cp(6043),
+       Dp = cp(6004),
+       Ap = cp(5310);
+     pp.exports = function(pp, ip, cp) {
+       ip = ip.length ? Op(ip, (function(pp) {
+         return Ap(pp) ? function(ip) {
+           return op(ip, 1 === pp.length ? pp[0] : pp)
+ ... (11 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L809-L826` → after: `L935-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L935-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L935-L938) · [Before (L809-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L809-L826)

```diff
-       }
-       release(DD) {
-         const zD = DD.page;
-         zD.give(DD.start, DD.size), zD.AI() && (this.pages[0] !== zD || zD.data.length > 65536) && (zD.dispose(), this.pages.splice(this.pages.indexOf(zD), 1))
-       }
-       servesEngine(DD) {
-         return DD === this.engine
-       }
-       upload() {
-         for (const DD of this.pages) DD.upload()
-       }
-       get pageCount() {
-         return this.pages.length
-       }
-       dispose() {
-         for (const DD of this.pages) DD.dispose();
- ... (2 more removed lines; see GitHub link above)
+       }));
+       return xp(Wp, (function(pp, ip) {
+         return Yp(pp, ip, cp)
+       }))
```

#### 44. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L828-L834` → after: `L940-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L940-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L940-L944) · [Before (L828-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L828-L834)

```diff
-     const nD = /Direct3D11|D3D11/,
-       MD = new WeakMap;
- 
-     function OD(DD, zD, wD, pD, sD) {
-       if (!(sD <= pD)) {
-         if (zD < 0 || zD + (sD - pD) > DD.size) throw new Error(`ThinInstanceArena: write of ${sD-pD} floats at ${zD} overruns a ${DD.size}-float slot`);
-         DD.page.write(DD.start + zD, wD, pD, sD)
+   },
+   6014: pp => {
+     pp.exports = function(pp) {
+       return function(ip) {
+         return null == ip ? void 0 : ip[pp]
```

#### 45. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L837-L889` → after: `L947-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L947-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L947-L952) · [Before (L837-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L837-L889)

```diff
-     class JD {
-       constructor(DD, zD) {
-         this.engine = DD, this.data = void 0, this.buffer = void 0, this.free = void 0, this.runs = [], this.sorted = [], this.data = new Float32Array(zD), this.free = [0, zD], this.buffer = new((0, RD.e)().ArenaBuffer)(DD, this.data, !1, 0, !1, !0)
-       }
-       take(DD) {
-         const zD = this.free;
-         for (let wD = 0; wD < zD.length; wD += 2)
-           if (zD[wD + 1] >= DD) {
-             const pD = zD[wD];
-             return zD[wD + 1] === DD ? zD.splice(wD, 2) : (zD[wD] += DD, zD[wD + 1] -= DD), pD
-           } return -1
-       }
-       give(DD, zD) {
-         const wD = this.free;
-         let pD = 0;
-         for (; pD < wD.length && wD[pD] < DD;) pD += 2;
- ... (37 more removed lines; see GitHub link above)
+   },
+   6018: (pp, ip, cp) => {
+     var Op = cp(5332);
+     pp.exports = function(pp) {
+       return function(ip) {
+         return Op(ip, pp)
```

#### 46. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L892-L917` → after: `L955-L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L955-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L955-L1042) · [Before (L892-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L892-L917)

```diff
-     const ED = "matrix";
-     class QD {
-       constructor(DD, zD, wD, pD, sD, KD) {
-         let rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
-         this.callbacks = zD, this.initialCapacity = wD, this.capacityIsConst = pD, this.strides = sD, this.flushQueue = KD, this.nextId = 0, this.pickable = void 0, this.arena = void 0, this.idToMetadata = {}, this.meshVariations = {}, this.bounds = void 0, this.tempBuffers = {}, … [truncated]
-         const LD = DD.FW(),
-           cD = QD.tempVector.set(Math.abs(LD.minimum.x), Math.abs(LD.minimum.y), Math.abs(LD.minimum.z));
-         if (cD.maximizeInPlaceFromFloats(Math.abs(LD.maximum.x), Math.abs(LD.maximum.y), Math.abs(LD.maximum.z)), this.bounds = {
-             sphere: {
-               radius: cD.length()
-             }
-           }, DD.lI = !0, DD.uB = !1, DD.WzD = !0, DD.ZI = !0, DD.nC(!1), this.setPickable(!1), wD < 1 || !Number.isInteger(wD)) throw new Error(`Capacity must be a positive integer, not ${wD}`);
-         for (const gD in this.strides) {
-           const DD = this.strides[gD];
-           if (DD < 1 || DD > 16 || !Number.isInteger(DD)) throw new Error(`Invalid stride for ${gD}, expected a positive integer <= 16, not ${DD}`);
-           this.tempBuffers[gD] = new Float32Array(DD)
- ... (10 more removed lines; see GitHub link above)
+   },
+   5652: pp => {
+     var ip = Math.ceil,
+       cp = Math.max;
+     pp.exports = function(pp, Op, op, Ip) {
+       for (var Sp = -1, xp = cp(ip((Op - pp) / (op || 1)), 0), Lp = Array(xp); xp--;) Lp[Ip ? xp : ++Sp] = pp, pp += op;
+       return Lp
+     }
+   },
+   6049: (pp, ip, cp) => {
+     var Op = cp(6004),
+       op = cp(6056),
+       Ip = cp(6066);
+     pp.exports = function(pp, ip) {
+       return Ip(op(pp, ip, Op), pp + "")
+     }
+ ... (72 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L919-L928` → after: `L1044-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1044-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1044-L1073) · [Before (L919-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L919-L928)

```diff
-       delete() {
-         for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
-         for (const pD of zD) {
-           const DD = this.idToMetadata[pD];
-           if (void 0 === DD) throw new Error(`ThinInstanceMesh.remove: ${pD} not found`);
-           const {
-             meshVariation: zD
-           } = DD;
-           zD.unregisterThinInstance(pD), delete this.idToMetadata[pD]
-         }
+     }
+   },
+   6130: (pp, ip, cp) => {
+     var Op = cp(5791),
+       op = cp(6136),
+       Ip = cp(6167),
+       Sp = cp(5810),
+       xp = cp(6172),
+       Lp = cp(5833);
+     pp.exports = function(pp, ip, cp) {
+       var Yp = -1,
+         Dp = op,
+         Ap = pp.length,
+         Pp = !0,
+         Wp = [],
+         yp = Wp;
+ ... (14 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L930-L935` → after: `L1075-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1075-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1075-L1112) · [Before (L930-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L930-L935)

```diff
-       clear() {
-         this.nextId = 0;
-         for (const DD in this.meshVariations) {
-           this.meshVariations[DD].clear()
-         }
-         for (const DD in this.idToMetadata) delete this.idToMetadata[DD]
+       return Wp
+     }
+   },
+   5810: pp => {
+     pp.exports = function(pp, ip) {
+       return pp.has(ip)
+     }
+   },
+   5340: (pp, ip, cp) => {
+     var Op = cp(5310),
+       op = cp(5345),
+       Ip = cp(5350),
+       Sp = cp(5555);
+     pp.exports = function(pp, ip) {
+       return Op(pp) ? pp : op(pp, ip) ? [pp] : Ip(Sp(pp))
+     }
+ ... (22 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L937-L938` → after: `L1114-L1122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1114-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1114-L1122) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L937-L938)

```diff
-       has(DD) {
-         return void 0 !== this.idToMetadata[DD]
+       return 0
+     }
+   },
+   6043: (pp, ip, cp) => {
+     var Op = cp(6047);
+     pp.exports = function(pp, ip, cp) {
+       for (var op = -1, Ip = pp.criteria, Sp = ip.criteria, xp = Ip.length, Lp = cp.length; ++op < xp;) {
+         var Yp = Op(Ip[op], Sp[op]);
+         if (Yp) return op >= Lp ? Yp : Yp * ("desc" == cp[op] ? -1 : 1)
```

#### 50. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L940-L944` → after: `L1124-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1124-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1124-L1138) · [Before (L940-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L940-L944)

```diff
-       count() {
-         let DD = 0;
-         for (const zD in this.meshVariations) {
-           DD += this.meshVariations[zD].numRegisteredThinInstances()
-         }
+       return pp.index - ip.index
+     }
+   },
+   5419: (pp, ip, cp) => {
+     var Op = cp(5231)["__core-js_shared__"];
+     pp.exports = Op
+   },
+   6037: (pp, ip, cp) => {
+     var Op = cp(5660);
+     pp.exports = function(pp, ip) {
+       return function(cp, op) {
+         if (null == cp) return cp;
+         if (!Op(cp)) return pp(cp, op);
+         for (var Ip = cp.length, Sp = ip ? Ip : -1, xp = Object(cp);
+           (ip ? Sp-- : ++Sp < Ip) && !1 !== op(xp[Sp], Sp, xp););
```

#### 51. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L947-L991` → after: `L1141-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1141-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1141-L1148) · [Before (L947-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L947-L991)

```diff
-       nC(DD, zD) {
-         if ("boolean" !== typeof zD) throw new Error(`ThinInstanceMesh.setEnabled: ${DD} given ${zD}, not a boolean`);
-         const wD = this.idToMetadata[DD];
-         if (void 0 === wD) throw new Error(`ThinInstanceMesh.setEnabled: ${DD} not found`);
-         const {
-           meshVariation: pD
-         } = wD;
-         pD.nC(DD, zD)
-       }
-       configureMeshVariation(DD, zD) {
-         if (this.hasMeshVariationBeenConfigured(DD)) throw new Error(`Failed to configure mesh variation ${DD} since it is already configured`);
-         const wD = this.meshVariations[QD.DEFAULT_MESH_VARIATION_NAME].mesh,
-           pD = wD.clone(`${wD.name}_${DD}`, null, !0);
-         pD.makeGeometryUnique(), pD.metadata = {}, pD.parent = null, pD.nC(!1), this.callbacks.tLD(pD), zD(pD), this.meshVariations[DD] = new XD(pD, this.initialCapacity, this.capacityIsConst, this.strides, this.flushQueue, this.arena)
-       }
-       setMeshVariation(DD, zD) {
- ... (29 more removed lines; see GitHub link above)
+     }
+   },
+   6035: pp => {
+     pp.exports = function(pp) {
+       return function(ip, cp, Op) {
+         for (var op = -1, Ip = Object(ip), Sp = Op(ip), xp = Sp.length; xp--;) {
+           var Lp = Sp[pp ? xp : ++op];
+           if (!1 === cp(Ip[Lp], Lp, Ip)) break
```

#### 52. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L995-L1008` → after: `L1152-L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1152-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1152-L1165) · [Before (L995-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L995-L1008)

```diff
-       set(DD, zD, wD, pD, sD, KD) {
-         const rD = this.idToMetadata[DD];
-         if (void 0 === rD) throw new Error(`ThinInstanceMesh.set: ${DD} not found`);
-         const LD = this.strides[zD];
-         VD(zD, LD, "number" !== typeof wD ? wD.length : arguments.length - 2);
-         const {
-           meshVariation: cD
-         } = rD;
-         cD.set(DD, zD, wD, pD, sD, KD)
-       }
-       setMatrix(DD, zD) {
-         const wD = this.idToMetadata[DD];
-         if (void 0 === wD) throw new Error(`ThinInstanceMesh.setMatrix: ${DD} not found`);
-         wD.meshVariation.setMatrix(DD, zD)
+     }
+   },
+   6198: (pp, ip, cp) => {
+     var Op = cp(6200),
+       op = cp(6209),
+       Ip = cp(6214),
+       Sp = cp(5555);
+     pp.exports = function(pp) {
+       return function(ip) {
+         ip = Sp(ip);
+         var cp = op(ip) ? Ip(ip) : void 0,
+           xp = cp ? cp[0] : ip.charAt(0),
+           Lp = cp ? Op(cp, 1).join("") : ip.slice(1);
+         return xp[pp]() + Lp
```

#### 53. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1010-L1011` → after: `L1167-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1167-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1167-L1183) · [Before (L1010-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1010-L1011)

```diff
-       requeueVariations() {
-         for (const DD in this.meshVariations) this.meshVariations[DD].enqueue()
+     }
+   },
+   6482: (pp, ip, cp) => {
+     var Op = cp(5727),
+       op = cp(5660),
+       Ip = cp(5882);
+     pp.exports = function(pp) {
+       return function(ip, cp, Sp) {
+         var xp = Object(ip);
+         if (!op(ip)) {
+           var Lp = Op(cp, 3);
+           ip = Ip(ip), cp = function(pp) {
+             return Lp(xp[pp], pp, xp)
+           }
+         }
+         var Yp = pp(ip, cp, Sp);
+ ... (1 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1013-L1014` → after: `L1185-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1185-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1185-L1193) · [Before (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1013-L1014)

```diff
-       hasKind(DD) {
-         return DD in this.strides
+     }
+   },
+   5647: (pp, ip, cp) => {
+     var Op = cp(5652),
+       op = cp(5655),
+       Ip = cp(5683);
+     pp.exports = function(pp) {
+       return function(ip, cp, Sp) {
+         return Sp && "number" != typeof Sp && op(ip, cp, Sp) && (cp = Sp = void 0), ip = Ip(ip), void 0 === cp ? (cp = ip, ip = 0) : cp = Ip(cp), Sp = void 0 === Sp ? ip < cp ? 1 : -1 : Ip(Sp), Op(ip, cp, Sp, pp)
```

#### 55. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1016-L1019` → after: `L1195-L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1195-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1195-L1250) · [Before (L1016-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1016-L1019)

```diff
-       getMesh(DD) {
-         const zD = this.idToMetadata[DD];
-         if (void 0 === zD) throw new Error(`ThinInstanceMesh.getMesh: ${DD} not found`);
-         return zD.meshVariation.mesh
+     }
+   },
+   6172: (pp, ip, cp) => {
+     var Op = cp(5964),
+       op = cp(6177),
+       Ip = cp(5833),
+       Sp = Op && 1 / Ip(new Op([, -0]))[1] == 1 / 0 ? function(pp) {
+         return new Op(pp)
+       } : op;
+     pp.exports = Sp
+   },
+   6084: (pp, ip, cp) => {
+     var Op = cp(5398),
+       op = function() {
+         try {
+           var pp = Op(Object, "defineProperty");
+ ... (40 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1021-L1028` → after: `L1252-L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1252-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1252-L1291) · [Before (L1021-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1021-L1028)

```diff
-       pickModel(DD) {
-         var zD, wD, pD, sD, KD;
-         const rD = this.idToMetadata[DD].meshVariation.mesh;
-         if ((0, LD.f)(rD)) return rD.parts.geometry;
-         const cD = null === (zD = rD.geometry) || void 0 === zD ? void 0 : zD.model;
-         if (!cD || !ArrayBuffer.isView(null === (wD = (0, gD.l)(cD)) || void 0 === wD ? void 0 : wD.data)) return rD;
-         const RD = 1 === (null === (pD = rD.QE) || void 0 === pD ? void 0 : pD.length) ? rD.QE[0] : null;
-         return 0 === (null === RD || void 0 === RD ? void 0 : RD.indexStart) && RD.indexCount === (null === (sD = cD.indexData) || void 0 === sD ? void 0 : sD.length) && (null === (KD = RD.yI()) || void 0 === KD ? void 0 : KD.fillMode) <= 2 && rD.getWorldMatrix().isIdentity() &&  … [truncated]
+       return Lp.delete(pp), Lp.delete(ip), Up
+     }
+   },
+   5818: (pp, ip, cp) => {
+     var Op = cp(5272),
+       op = cp(5822),
+       Ip = cp(5492),
+       Sp = cp(5784),
+       xp = cp(5826),
+       Lp = cp(5833),
+       Yp = Op ? Op.prototype : void 0,
+       Dp = Yp ? Yp.valueOf : void 0;
+     pp.exports = function(pp, ip, cp, Op, Yp, Ap, Pp) {
+       switch (cp) {
+         case "[object DataView]":
+           if (pp.byteLength != ip.byteLength || pp.byteOffset != ip.byteOffset) return !1;
+ ... (24 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1030-L1031` → after: `L1293-L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1293-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1293-L1306) · [Before (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1030-L1031)

```diff
-       getBoundingSphereRad() {
-         return this.bounds.sphere.radius
+       return !1
+     }
+   },
+   5840: (pp, ip, cp) => {
+     var Op = cp(5849),
+       op = Object.prototype.hasOwnProperty;
+     pp.exports = function(pp, ip, cp, Ip, Sp, xp) {
+       var Lp = 1 & cp,
+         Yp = Op(pp),
+         Dp = Yp.length;
+       if (Dp != Op(ip).length && !Lp) return !1;
+       for (var Ap = Dp; Ap--;) {
+         var Pp = Yp[Ap];
+         if (!(Lp ? Pp in ip : op.call(ip, Pp))) return !1
```

#### 58. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1033-L1034` → after: `L1308-L1321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1308-L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1308-L1321) · [Before (L1033-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1033-L1034)

```diff
-       getPickable() {
-         return this.pickable
+       var Wp = xp.get(pp),
+         yp = xp.get(ip);
+       if (Wp && yp) return Wp == ip && yp == pp;
+       var Up = !0;
+       xp.set(pp, ip), xp.set(ip, pp);
+       for (var wp = Lp; ++Ap < Dp;) {
+         var vp = pp[Pp = Yp[Ap]],
+           tp = ip[Pp];
+         if (Ip) var Hp = Lp ? Ip(tp, vp, Pp, ip, pp, xp) : Ip(vp, tp, Pp, pp, ip, xp);
+         if (!(void 0 === Hp ? vp === tp || Sp(vp, tp, cp, Ip, xp) : Hp)) {
+           Up = !1;
+           break
+         }
+         wp || (wp = "constructor" == Pp)
```

#### 59. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1036-L1037` → after: `L1323-L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1323-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1323-L1326) · [Before (L1036-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1036-L1037)

```diff
-       setPickable(DD) {
-         this.pickable = DD
+       if (Up && !wp) {
+         var dp = pp.constructor,
+           ep = ip.constructor;
+         dp == ep || !("constructor" in pp) || !("constructor" in ip) || "function" == typeof dp && dp instanceof dp && "function" == typeof ep && ep instanceof ep || (Up = !1)
```

#### 60. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1040-L1269` → after: `L1330-L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1330-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1330-L1340) · [Before (L1040-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1040-L1269)

```diff
-     QD.DEFAULT_MESH_VARIATION_NAME = "__DEFAULT__", QD.tempVector = new sD.WI;
-     class XD {
-       constructor(DD, zD, wD, pD, sD, KD) {
-         var rD, LD, gD;
-         this.mesh = DD, this.capacityIsConst = wD, this.strides = pD, this.flushQueue = sD, this.arena = KD, this.isEnabled = !1, this.batch = void 0, this.baseOffsets = {}, this.interleavedBuffer = null, this.T_ = void 0, this.matrixSlot = null, this.interleavedSlot = null, this … [truncated]
-         const RD = this.mesh.iI();
-         this.T_ = null !== (rD = null === (LD = (gD = RD).b_) || void 0 === LD ? void 0 : LD.call(gD, this.mesh, this.batch.kinds)) && void 0 !== rD ? rD : null;
-         const AD = this.T_ ? null : RD,
-           UD = null === AD || void 0 === AD ? void 0 : AD.SI.add((() => {
-             this.batch.stale.slots.fill(1)
-           }));
-         this.mesh.Bl.addOnce((() => {
-           var DD, zD;
-           null === AD || void 0 === AD || AD.SI.remove(null !== UD && void 0 !== UD ? UD : null), this.releaseSlots(), null === (DD = this.interleavedBuffer) || void 0 === DD || DD.dispose(), null === (zD = this.T_) || void 0 === zD || zD.release(), (0, cD.f)(this.batch)
-         })), this.baseOffsets[ED] = 0;
-         for (const {
- ... (214 more removed lines; see GitHub link above)
+   },
+   5235: (pp, ip, cp) => {
+     var Op = "object" == typeof cp.g && cp.g && cp.g.Object === Object && cp.g;
+     pp.exports = Op
+   },
+   5849: (pp, ip, cp) => {
+     var Op = cp(5856),
+       op = cp(5864),
+       Ip = cp(5882);
+     pp.exports = function(pp) {
+       return Op(pp, Ip, op)
```

#### 61. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1271-L1273` → after: `L1342-L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1342-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1342-L1347) · [Before (L1271-L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1271-L1273)

```diff
- 
-     function VD(DD, zD, wD) {
-       if (wD !== zD) throw new Error(`Value length ${wD} does not match stride ${zD} for kind ${DD}`)
+   },
+   5521: (pp, ip, cp) => {
+     var Op = cp(5530);
+     pp.exports = function(pp, ip) {
+       var cp = pp.__data__;
+       return Op(ip) ? cp["string" == typeof ip ? "string" : "hash"] : cp.map
```

#### 62. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1275-L1283` → after: `L1349-L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1349-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1349-L1357) · [Before (L1275-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1275-L1283)

```diff
-     var PD = wD(37581);
-     class CD {
-       constructor() {
-         this.count = 0, this.spheres = new Float64Array(256), this.ids = new Int32Array(64), this.flags = new Uint8Array(64), this.planes = new Float64Array(24), this.changed = []
-       }
-       add(DD) {
-         this.count === this.ids.length && this.grow();
-         const zD = this.count++;
-         return this.ids[zD] = DD, this.flags[zD] = 0, this.spheres.fill(0, 4 * zD, 4 * zD + 4), zD
+   },
+   5971: (pp, ip, cp) => {
+     var Op = cp(5974),
+       op = cp(5882);
+     pp.exports = function(pp) {
+       for (var ip = op(pp), cp = ip.length; cp--;) {
+         var Ip = ip[cp],
+           Sp = pp[Ip];
+         ip[cp] = [Ip, Sp, Op(Sp)]
```

#### 63. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1285-L1287` → after: `L1359-L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1359-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1359-L1436) · [Before (L1285-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1285-L1287)

```diff
-       remove(DD) {
-         const zD = --this.count;
-         return DD === zD ? -1 : (this.ids[DD] = this.ids[zD], this.flags[DD] = this.flags[zD], this.spheres.copyWithin(4 * DD, 4 * zD, 4 * zD + 4), this.ids[DD])
+       return ip
+     }
+   },
+   5398: (pp, ip, cp) => {
+     var Op = cp(5403),
+       op = cp(5436);
+     pp.exports = function(pp, ip) {
+       var cp = op(pp, ip);
+       return Op(cp) ? cp : void 0
+     }
+   },
+   6436: (pp, ip, cp) => {
+     var Op = cp(5941)(Object.getPrototypeOf, Object);
+     pp.exports = Op
+   },
+   5277: (pp, ip, cp) => {
+ ... (62 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1289-L1290` → after: `L1438-L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1438-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1438-L1487) · [Before (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1289-L1290)

```diff
-       clear() {
-         this.count = 0
+       return ip
+     }), pp.exports = dp
+   },
+   5436: pp => {
+     pp.exports = function(pp, ip) {
+       return null == pp ? void 0 : pp[ip]
+     }
+   },
+   5998: (pp, ip, cp) => {
+     var Op = cp(5340),
+       op = cp(5715),
+       Ip = cp(5310),
+       Sp = cp(5674),
+       xp = cp(5669),
+       Lp = cp(5569);
+     pp.exports = function(pp, ip, cp) {
+ ... (34 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1292-L1295` → after: `L1489-L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1489-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1489-L1618) · [Before (L1292-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1292-L1295)

```diff
-       setSphere(DD, zD, wD, pD, sD) {
-         const KD = 4 * DD,
-           rD = this.spheres;
-         rD[KD] = zD, rD[KD + 1] = wD, rD[KD + 2] = pD, rD[KD + 3] = sD
+       return op.call(ip, pp) ? ip[pp] : void 0
+     }
+   },
+   5460: (pp, ip, cp) => {
+     var Op = cp(5389),
+       op = Object.prototype.hasOwnProperty;
+     pp.exports = function(pp) {
+       var ip = this.__data__;
+       return Op ? void 0 !== ip[pp] : op.call(ip, pp)
+     }
+   },
+   5463: (pp, ip, cp) => {
+     var Op = cp(5389);
+     pp.exports = function(pp, ip) {
+       var cp = this.__data__;
+       return this.size += this.has(pp) ? 0 : 1, cp[pp] = Op && void 0 === ip ? "__lodash_hash_undefined__" : ip, this
+ ... (114 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1297-L1298` → after: `L1620-L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1620-L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1620-L1661) · [Before (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1297-L1298)

```diff
-       setActive(DD, zD) {
-         this.flags[DD] = zD ? 1 | this.flags[DD] : -2 & this.flags[DD]
+     }
+   },
+   5518: (pp, ip, cp) => {
+     var Op = cp(5521);
+     pp.exports = function(pp) {
+       var ip = Op(this, pp).delete(pp);
+       return this.size -= ip ? 1 : 0, ip
+     }
+   },
+   5536: (pp, ip, cp) => {
+     var Op = cp(5521);
+     pp.exports = function(pp) {
+       return Op(this, pp).get(pp)
+     }
+   },
+   5542: (pp, ip, cp) => {
+ ... (26 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1300-L1301` → after: `L1663-L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1663-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1663-L1706) · [Before (L1300-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1300-L1301)

```diff
-       setCulled(DD, zD) {
-         this.flags[DD] = zD ? 2 | this.flags[DD] : -3 & this.flags[DD]
+     }
+   },
+   5354: (pp, ip, cp) => {
+     var Op = cp(5362);
+     pp.exports = function(pp) {
+       var ip = Op(pp, (function(pp) {
+           return 500 === cp.size && cp.clear(), pp
+         })),
+         cp = ip.cache;
+       return ip
+     }
+   },
+   5389: (pp, ip, cp) => {
+     var Op = cp(5398)(Object, "create");
+     pp.exports = Op
+   },
+ ... (28 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1303-L1318` → after: `L1708-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1708-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1708-L1719) · [Before (L1303-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1303-L1318)

```diff
-       collectChanges(DD) {
-         const zD = this.planes;
-         for (let rD = 0; rD < 6; rD++) {
-           const wD = DD[rD];
-           zD[4 * rD] = wD.normal.x, zD[4 * rD + 1] = wD.normal.y, zD[4 * rD + 2] = wD.normal.z, zD[4 * rD + 3] = wD.d
-         }
-         const {
-           spheres: wD,
-           flags: pD,
-           ids: sD,
-           changed: KD
-         } = this;
-         KD.length = 0;
-         for (let rD = 0; rD < this.count; rD++) {
-           const DD = pD[rD];
-           0 !== (1 & DD) && this.inPlanes(wD, 4 * rD) === (0 !== (2 & DD)) && KD.push(sD[rD])
+     }
+   },
+   6056: (pp, ip, cp) => {
+     var Op = cp(6058),
+       op = Math.max;
+     pp.exports = function(pp, ip, cp) {
+       return ip = op(void 0 === ip ? pp.length - 1 : ip, 0),
+         function() {
+           for (var Ip = arguments, Sp = -1, xp = op(Ip.length - ip, 0), Lp = Array(xp); ++Sp < xp;) Lp[Sp] = Ip[ip + Sp];
+           Sp = -1;
+           for (var Yp = Array(ip + 1); ++Sp < ip;) Yp[Sp] = Ip[Sp];
+           return Yp[ip] = cp(Lp), Op(pp, this, Yp)
```

#### 69. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1320-L1674` → after: `L1721-L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1721-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1721-L1764) · [Before (L1320-L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1320-L1674)

```diff
-         return KD
-       }
-       inFrustum(DD) {
-         return this.inPlanes(this.spheres, 4 * DD)
-       }
-       inPlanes(DD, zD) {
-         const wD = DD[zD],
-           pD = DD[zD + 1],
-           sD = DD[zD + 2],
-           KD = -DD[zD + 3],
-           rD = this.planes;
-         for (let LD = 0; LD < 24; LD += 4)
-           if (rD[LD] * wD + rD[LD + 1] * pD + rD[LD + 2] * sD + rD[LD + 3] < KD) return !1;
-         return !0
-       }
-       grow() {
- ... (339 more removed lines; see GitHub link above)
+     }
+   },
+   5231: (pp, ip, cp) => {
+     var Op = cp(5235),
+       op = "object" == typeof self && self && self.Object === Object && self,
+       Ip = Op || op || Function("return this")();
+     pp.exports = Ip
+   },
+   5794: pp => {
+     pp.exports = function(pp) {
+       return this.__data__.set(pp, "__lodash_hash_undefined__"), this
+     }
+   },
+   5801: pp => {
+     pp.exports = function(pp) {
+       return this.__data__.has(pp)
+ ... (28 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1676-L1683` → after: `L1766-L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1766-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1766-L1849) · [Before (L1676-L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1676-L1683)

```diff
-       getScale(DD) {
-         return this.getNodeScale(DD, 0)
-       }
-       getNodeScale(DD, zD) {
-         return this.JpD(DD, zD).scale
-       }
-       setScale(DD, zD, wD, pD) {
-         this.assertArgs(arguments, 4), this.setNodeScale(DD, 0, zD, wD, pD)
+     }
+   },
+   5745: (pp, ip, cp) => {
+     var Op = cp(5469);
+     pp.exports = function() {
+       this.__data__ = new Op, this.size = 0
+     }
+   },
+   5749: pp => {
+     pp.exports = function(pp) {
+       var ip = this.__data__,
+         cp = ip.delete(pp);
+       return this.size = ip.size, cp
+     }
+   },
+   5755: pp => {
+ ... (68 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1685-L1736` → after: `L1851-L1880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1851-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1851-L1880) · [Before (L1685-L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1685-L1736)

```diff
-       setNodeScale(DD, zD, wD, pD, sD) {
-         this.assertArgs(arguments, 5);
-         const KD = this.getObjectData(DD),
-           rD = this.getObjectNode(KD, zD).scale;
-         rD.sLD(wD, pD, sD) || (rD.set(wD, pD, sD), 0 !== zD && this.updateNodeScaleGrowth(KD), this.setDirtyInternal(DD, KD, zD), 0 !== zD && KD.attachmentReach > 0 && this.isDeferrable(KD) && this.catchUp(DD, KD))
-       }
-       updateNodeScaleGrowth(DD) {
-         const zD = this.types[DD.type].typeNodes;
-         SD.length < zD.length && (SD = new Float64Array(zD.length));
-         const wD = SD;
-         let pD = 1;
-         wD[0] = 1;
-         for (let sD = 1; sD < zD.length; sD++) {
-           const {
-             x: KD,
-             y: rD,
- ... (36 more removed lines; see GitHub link above)
+       return ""
+     }
+   },
+   5248: pp => {
+     var ip = /\s/;
+     pp.exports = function(pp) {
+       for (var cp = pp.length; cp-- && ip.test(pp.charAt(cp)););
+       return cp
+     }
+   },
+   6224: pp => {
+     var ip = "\\ud800-\\udfff",
+       cp = "[" + ip + "]",
+       Op = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
+       op = "\\ud83c[\\udffb-\\udfff]",
+       Ip = "[^" + ip + "]",
+ ... (14 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1739-L1827` → after: `L1883-L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1883-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1883-L1901) · [Before (L1739-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1739-L1827)

```diff
-       set(DD, zD, wD, pD, sD, KD) {
-         const rD = this.getObjectData(DD),
-           LD = this.types[rD.type].typeNodes;
-         if ("number" !== typeof wD)
-           for (let cD = 0; cD < LD.length; cD++) null !== LD[cD].thinMeshIndex && this.setNode(DD, cD, zD, wD);
-         else if (void 0 === pD)
-           for (let cD = 0; cD < LD.length; cD++) null !== LD[cD].thinMeshIndex && this.setNode(DD, cD, zD, wD);
-         else if (void 0 === sD)
-           for (let cD = 0; cD < LD.length; cD++) null !== LD[cD].thinMeshIndex && this.setNode(DD, cD, zD, wD, pD);
-         else if (void 0 === KD)
-           for (let cD = 0; cD < LD.length; cD++) null !== LD[cD].thinMeshIndex && this.setNode(DD, cD, zD, wD, pD, sD);
-         else
-           for (let cD = 0; cD < LD.length; cD++) null !== LD[cD].thinMeshIndex && this.setNode(DD, cD, zD, wD, pD, sD, KD)
-       }
-       setNode(DD, zD, wD, pD, sD, KD, rD) {
-         const LD = this.getObjectData(DD),
- ... (73 more removed lines; see GitHub link above)
+     }
+   },
+   5212: (pp, ip, cp) => {
+     var Op = cp(5214),
+       op = cp(5222),
+       Ip = cp(5238),
+       Sp = Math.max,
+       xp = Math.min;
+     pp.exports = function(pp, ip, cp) {
+       var Lp, Yp, Dp, Ap, Pp, Wp, yp = 0,
+         Up = !1,
+         wp = !1,
+         vp = !0;
+       if ("function" != typeof pp) throw new TypeError("Expected a function");
+ 
+       function tp(ip) {
+ ... (3 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1829-L1830` → after: `L1903-L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1903-L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1903-L1906) · [Before (L1829-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1829-L1830)

```diff
-       getRestRotation(DD, zD) {
-         return this.types[this.getType(DD)].typeNodes[zD].rotationQuat
+ 
+       function Hp(pp) {
+         var cp = pp - Wp;
+         return void 0 === Wp || cp >= ip || cp < 0 || wp && pp - yp >= Dp
```

#### 74. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1832-L1833` → after: `L1908-L1915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1908-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1908-L1915) · [Before (L1832-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1832-L1833)

```diff
-       getNodeParent(DD, zD) {
-         return this.types[this.getType(DD)].typeNodes[zD].parent
+ 
+       function dp() {
+         var pp = op();
+         if (Hp(pp)) return ep(pp);
+         Pp = setTimeout(dp, function(pp) {
+           var cp = ip - (pp - Wp);
+           return wp ? xp(cp, Dp - (pp - yp)) : cp
+         }(pp))
```

#### 75. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1835-L1836` → after: `L1917-L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1917-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1917-L1919) · [Before (L1835-L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1835-L1836)

```diff
-       hasNamedNode(DD, zD) {
-         return null !== this.getNamedNodeOrNull(DD, zD)
+ 
+       function ep(pp) {
+         return Pp = void 0, vp && Lp ? tp(pp) : (Lp = Yp = void 0, Ap)
```

#### 76. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1838-L1842` → after: `L1921-L1929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1921-L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1921-L1929) · [Before (L1838-L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1838-L1842)

```diff
-       getNamedNode(DD, zD) {
-         const wD = this.getNamedNodeOrNull(DD, zD);
-         if (null === wD) {
-           const wD = this.getType(DD);
-           throw new Error(`Type ${wD} has no node named ${zD}`)
+ 
+       function jp() {
+         var pp = op(),
+           cp = Hp(pp);
+         if (Lp = arguments, Yp = this, Wp = pp, cp) {
+           if (void 0 === Pp) return function(pp) {
+             return yp = pp, Pp = setTimeout(dp, ip), Up ? tp(pp) : Ap
+           }(Wp);
+           if (wp) return clearTimeout(Pp), Pp = setTimeout(dp, ip), tp(Wp)
```

#### 77. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1844-L1865` → after: `L1931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1931) · [Before (L1844-L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1844-L1865)

```diff
-         return wD
-       }
-       getNamedNodeOrNull(DD, zD) {
-         var wD;
-         const pD = this.getType(DD),
-           sD = this.namedNodes[pD];
-         if (!sD) throw new Error(`Type ${pD} has no named nodes, cannot get named node ${zD}`);
-         return null !== (wD = sD[zD]) && void 0 !== wD ? wD : null
-       }
-       getNodeNames(DD) {
-         const zD = this.getType(DD),
-           wD = this.nodeNames[zD];
-         if (!wD) throw new Error(`Type ${zD} has no named nodes`);
-         return wD
-       }
-       getEntityId(DD) {
- ... (6 more removed lines; see GitHub link above)
+         return void 0 === Pp && (Pp = setTimeout(dp, ip)), Ap
```

#### 78. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1867-L1871` → after: `L1933-L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R1933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L1933-L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L1933-L2292) · [Before (L1867-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1867-L1871)

```diff
-       getPickable(DD) {
-         return this.getObjectData(DD).pickable
-       }
-       setPickable(DD, zD) {
-         this.getObjectData(DD).pickable = zD
+       return ip = Ip(ip) || 0, Op(cp) && (Up = !!cp.leading, Dp = (wp = "maxWait" in cp) ? Sp(Ip(cp.maxWait) || 0, ip) : Dp, vp = "trailing" in cp ? !!cp.trailing : vp), jp.cancel = function() {
+         void 0 !== Pp && clearTimeout(Pp), yp = 0, Lp = Wp = Yp = Pp = void 0
+       }, jp.flush = function() {
+         return void 0 === Pp ? Ap : ep(op())
+       }, jp
+     }
+   },
+   5492: pp => {
+     pp.exports = function(pp, ip) {
+       return pp === ip || pp !== pp && ip !== ip
+     }
+   },
+   6383: (pp, ip, cp) => {
+     var Op = cp(6391),
+       op = cp(6393),
+       Ip = cp(5727),
+ ... (344 more added lines; see GitHub link above)
```

#### 79. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1873-L1875` → after: `L2294-L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2294-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2294-L2333) · [Before (L1873-L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1873-L1875)

```diff
-       setPickableForType(DD, zD) {
-         const wD = this.getTypeNodes(DD);
-         for (const pD of wD) null !== pD.thinMeshIndex && this.thinMeshes[pD.thinMeshIndex].setPickable(zD)
+       if ("string" != typeof pp) return 0 === pp ? pp : +pp;
+       pp = Op(pp);
+       var cp = xp.test(pp);
+       return cp || Lp.test(pp) ? Yp(pp.slice(2), cp ? 2 : 8) : Sp.test(pp) ? NaN : +pp
+     }
+   },
+   5555: (pp, ip, cp) => {
+     var Op = cp(5557);
+     pp.exports = function(pp) {
+       return null == pp ? "" : Op(pp)
+     }
+   },
+   6123: (pp, ip, cp) => {
+     var Op = cp(5727),
+       op = cp(6130);
+     pp.exports = function(pp, ip) {
+ ... (24 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1877-L1882` → after: `L2335-L2346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2335-L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2335-L2346) · [Before (L1877-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1877-L1882)

```diff
-       setCullableForType(DD, zD) {
-         this.types[DD].cullable = zD;
-         for (const wD in this.objectData) {
-           const pD = this.objectData[wD];
-           pD.type === DD && (this.updateCullActive(pD), !zD && pD.cull && this.applyCullResult(Number(wD), pD, !1))
-         }
+     }
+ 
+     function Dp(pp) {
+       return function(ip, cp, Op) {
+         if (!ip || !cp || "object" !== typeof ip || "object" !== typeof cp) return pp(ip, cp, Op);
+         const {
+           cache: op
+         } = Op, Ip = op.get(ip), Sp = op.get(cp);
+         if (Ip && Sp) return Ip === cp && Sp === ip;
+         op.set(ip, cp), op.set(cp, ip);
+         const xp = pp(ip, cp, Op);
+         return op.delete(ip), op.delete(cp), xp
```

#### 81. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1884-L1892` → after: `L2348-L2415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2348-L2415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2348-L2415) · [Before (L1884-L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1884-L1892)

```diff
-       attachThinObject(DD, zD, wD) {
-         const pD = this.getObjectData(zD),
-           sD = this.getObjectNode(pD, wD),
-           KD = this.getObjectData(DD);
-         null !== KD.parentThinObjectId && this.detachThinObjectInternal(DD, KD), sD.attachedThinObjectIds.push(DD), pD.indicesWithThinObjects.add(wD), pD.attachmentsVersion++;
-         try {
-           this.refreshStaleWorld(pD, wD), this.nC(DD, this.nodeDrawn(pD, sD))
-         } finally {
-           KD.parentThinObjectId = zD, KD.parentNodeIndex = wD, this.deferredObjectIds.delete(DD), KD.nodes[0].worldMatrix = KD.tempMatrix, this.setDirtyInternal(DD, KD, 0)
+     }
+ 
+     function Ap(pp) {
+       return Sp(pp).concat(xp(pp))
+     }
+     const Pp = Object.hasOwn || ((pp, ip) => Lp.call(pp, ip));
+ 
+     function Wp(pp, ip) {
+       return pp === ip || !pp && !ip && pp !== pp && ip !== ip
+     }
+     const {
+       getOwnPropertyDescriptor: yp,
+       keys: Up
+     } = Object;
+ 
+     function wp(pp, ip) {
+ ... (52 more added lines; see GitHub link above)
```

#### 82. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1894` → after: `L2417-L2418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2417-L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2417-L2418) · [Before (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1894)

```diff
-         this.updateChildEnabled(DD, 0, KD, sD.vwD), this.updateAttachmentReach(pD)
+         if (!Ip) return !1;
+         Lp++
```

#### 83. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1896-L1902` → after: `L2420-L2439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2420-L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2420-L2439) · [Before (L1896-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1896-L1902)

```diff
-       detachThinObject(DD) {
-         const zD = this.getObjectData(DD);
-         if (null === zD.parentThinObjectId) throw new Error(`Object ${DD} is not attached`);
-         this.detachThinObjectInternal(DD, zD)
-       }* iterateAttachedThinObjects(DD, zD) {
-         const wD = this.JpD(DD, zD);
-         for (let pD = wD.attachedThinObjectIds.length - 1; pD >= 0; pD--) yield wD.attachedThinObjectIds[pD]
+       return !0
+     }
+     const kp = Wp;
+ 
+     function mp(pp, ip, cp) {
+       const Op = Up(pp);
+       let op = Op.length;
+       if (Up(ip).length !== op) return !1;
+       for (; op-- > 0;)
+         if (!lp(pp, ip, cp, Op[op])) return !1;
+       return !0
+     }
+ 
+     function Rp(pp, ip, cp) {
+       const Op = Ap(pp);
+       let op, Ip, Sp, xp = Op.length;
+ ... (4 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1904-L1910` → after: `L2441-L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2441-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2441-L2468) · [Before (L1904-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1904-L1910)

```diff
-       detachAllThinObjects(DD, zD) {
-         const wD = this.getObjectData(DD),
-           pD = this.JpD(DD, zD);
-         try {
-           for (const DD of pD.attachedThinObjectIds) {
-             const zD = this.getAttachedObjectDataOrNull(DD);
-             null !== zD && this.removeThinObjectParent(DD, zD)
+       return !0
+     }
+ 
+     function qp(pp, ip) {
+       return Wp(pp.valueOf(), ip.valueOf())
+     }
+ 
+     function Mp(pp, ip) {
+       return pp.source === ip.source && pp.flags === ip.flags
+     }
+ 
+     function Cp(pp, ip, cp) {
+       const Op = pp.size;
+       if (Op !== ip.size) return !1;
+       if (!Op) return !0;
+       const op = new Array(Op),
+ ... (12 more added lines; see GitHub link above)
```

#### 85. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1912-L1922` → after: `L2470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2470) · [Before (L1912-L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1912-L1922)

```diff
-         } finally {
-           wD.indicesWithThinObjects.delete(zD), pD.attachedThinObjectIds.length = 0, this.updateAttachmentReach(wD)
-         }
-       }
-       disposeAllThinObjects(DD, zD) {
-         const wD = this.getObjectData(DD),
-           pD = this.JpD(DD, zD);
-         try {
-           this.disposeAllThinObjectsInternal(pD)
-         } finally {
-           wD.indicesWithThinObjects.delete(zD), pD.attachedThinObjectIds.length = 0, this.updateAttachmentReach(wD)
+           Lp++
```

#### 86. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1925-L1935` → after: `L2474-L2559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2474-L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2474-L2559) · [Before (L1925-L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1925-L1935)

```diff
-       attachTransformNode(DD, zD, wD) {
-         const pD = this.getObjectData(zD),
-           sD = this.getObjectNode(pD, wD);
-         if (sD.attachedTransformNodes.push(DD), pD.attachmentsVersion++, this.refreshStaleWorld(pD, wD), DD.nC(this.nodeDrawn(pD, sD)), sD.tempTransformNode) {
-           if ((0, LD.f)(DD) !== (0, LD.f)(sD.tempTransformNode)) throw new Error(`${DD.name} and ${sD.tempTransformNode.name} are not both handles`)
-         } else if ((0, LD.f)(DD)) sD.tempTransformNode = DD.carrier(`${DD.name}TransformNode`, sD.worldMatrix.m);
-         else {
-           const {
-             oB: zD
-           } = this, wD = !("rootNodes" in zD);
-           sD.tempTransformNode = new((0, RD.e)().TransformNode)(`${DD.name}TransformNode`, wD ? DD.Ul() : zD, !wD), wD || (sD.tempTransformNode.parent = zD.rootNodes[0]), sD.tempTransformNode.Tl(), sD.tempTransformNode._worldMatrix = sD.worldMatrix, wD && (sD.tempTransformNode.po … [truncated]
+       return !0
+     }
+ 
+     function Ep(pp, ip) {
+       let cp = pp.byteLength;
+       if (ip.byteLength !== cp || pp.byteOffset !== ip.byteOffset) return !1;
+       for (; cp-- > 0;)
+         if (pp[cp] !== ip[cp]) return !1;
+       return !0
+     }
+ 
+     function Xp(pp, ip) {
+       return pp.hostname === ip.hostname && pp.pathname === ip.pathname && pp.protocol === ip.protocol && pp.port === ip.port && pp.hash === ip.hash && pp.username === ip.username && pp.password === ip.password
+     }
+ 
+     function lp(pp, ip, cp, Op) {
+ ... (70 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1937-L1950` → after: `L2561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2561) · [Before (L1937-L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1937-L1950)

```diff
-         DD.parent = sD.tempTransformNode, this.updateTransformReach(pD, sD)
-       }
-       detachTransformNode(DD, zD, wD) {
-         if (!this.tryDetachTransformNodeInternal(DD, zD, wD)) throw new Error(`Transform node ${DD.name} not found in thin object ${zD} node ${wD}`)
-       }
-       detachTransformNodeIfFound(DD, zD, wD) {
-         this.tryDetachTransformNodeInternal(DD, zD, wD)
-       }
-       CLD(DD) {
-         return this.getObjectData(DD).attachmentsVersion
-       }
-       xLD(DD) {
-         for (const zD of this.getObjectData(DD).nodes)
-           if (zD.attachedTransformNodes.length > 0) return !0;
+         var ep;
```

#### 88. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1953-L1976` → after: `L2564-L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2564-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2564-L2614) · [Before (L1953-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1953-L1976)

```diff
-       getAttachedTransformNodes(DD, zD) {
-         return this.JpD(DD, zD).attachedTransformNodes
-       }
-       detachAllTransformNodes(DD, zD) {
-         const wD = this.JpD(DD, zD);
-         this.detachAllTransformNodesInternal(wD), this.updateTransformReach(this.getObjectData(DD), wD)
-       }
-       disposeAllTransformNodes(DD, zD) {
-         const wD = this.JpD(DD, zD);
-         try {
-           this.disposeAllTransformNodesInternal(wD)
-         } finally {
-           this.detachAllTransformNodesInternal(wD), this.updateTransformReach(this.getObjectData(DD), wD)
-         }
-       }
-       HU(DD, zD, wD) {
- ... (8 more removed lines; see GitHub link above)
+     }
+     const Np = Tp();
+     Tp({
+       strict: !0
+     }), Tp({
+       circular: !0
+     }), Tp({
+       circular: !0,
+       strict: !0
+     }), Tp({
+       createInternalComparator: () => Wp
+     }), Tp({
+       strict: !0,
+       createInternalComparator: () => Wp
+     }), Tp({
+       circular: !0,
+ ... (35 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L1978-L2089` → after: `L2616-L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2616-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2616-L2626) · [Before (L1978-L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L1978-L2089)

```diff
-         for (const rD in this.objectData) {
-           const sD = Number(rD),
-             KD = this.getObjectData(sD);
-           if (!KD.pickable) continue;
-           if (KD.cull && null === KD.parentThinObjectId) {
-             if (!this.inReach(KD, DD, zD, wD)) continue;
-             if (!this.catchUp(sD, KD)) continue
-           }
-           const LD = this.types[KD.type].typeNodes;
-           for (let wD = 0; wD < LD.length; wD++) {
-             const rD = KD.nodes[wD];
-             if (rD.vwD && null !== rD.thinInstanceId) {
-               const KD = LD[wD];
-               this.pickInstance(sD, KD.thinMeshIndex, rD.thinInstanceId, rD, DD, zD, pD)
-             }
-           }
- ... (96 more removed lines; see GitHub link above)
+         if (cp && (op = Object.assign({}, op, cp(op))), ip) {
+           const pp = Dp(op.areArraysEqual),
+             ip = Dp(op.areMapsEqual),
+             cp = Dp(op.areObjectsEqual),
+             Op = Dp(op.areSetsEqual);
+           op = Object.assign({}, op, {
+             areArraysEqual: pp,
+             areMapsEqual: ip,
+             areObjectsEqual: cp,
+             areSetsEqual: Op
+           })
```

#### 90. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2091-L2102` → after: `L2628-L2666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2628-L2666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2628-L2666) · [Before (L2091-L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2091-L2102)

```diff
-       }
-       applyCull(DD) {
-         const zD = this.objectData[DD];
-         if (void 0 === zD) return !1;
-         if (!this.types[zD.type].cullable || !zD.nodes[0].vwD) return this.updateCullActive(zD), !1;
-         const wD = !this.cullSpheres.inFrustum(zD.cullSlot);
-         return zD.cull === wD ? (this.cullSpheres.setCulled(zD.cullSlot, zD.cull), !1) : this.applyCullResult(DD, zD, wD)
-       }
-       applyCullResult(DD, zD, wD) {
-         if (!wD) {
-           if (this.notifyCatchUpCulled(DD, zD), this.objectData[DD] !== zD) return !0;
-           this.deferredObjectIds.delete(DD) && this.queueDirtyObject(DD, zD)
+         return op
+       }(pp), Sp = Bp(Ip);
+       var xp;
+       return function(pp) {
+         let {
+           circular: ip,
+           comparator: cp,
+           createState: Op,
+           equals: op,
+           strict: Ip
+         } = pp;
+         if (Op) return function(pp, Sp) {
+           const {
+             cache: xp = (ip ? new WeakMap : void 0),
+             meta: Lp
+           } = Op();
+ ... (23 more added lines; see GitHub link above)
```

#### 91. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2104-L2197` → after: `L2668-L2732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2668-L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2668-L2732) · [Before (L2104-L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2104-L2197)

```diff
-         return zD.cull = wD, this.cullSpheres.setCulled(zD.cullSlot, wD), this.applyCullingChange(zD, this.types[zD.type]), wD || this.updateDirtyNodes(), !wD
-       }
-       boundingRadius(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DD.nodes[0].worldMatrix.m;
-         const pD = iD.TEMP_STRETCH;
-         null === DD.parentThinObjectId ? pD.pC(DD.nodes[0].scale) : WD(wD, pD);
-         const {
-           x: sD,
-           y: KD,
-           z: rD
-         } = pD, LD = zD.boundingSphereRad * function(DD, zD, wD, pD) {
-           return Math.max(0 !== pD.x ? Math.abs(DD / pD.x) : 1, 0 !== pD.y ? Math.abs(zD / pD.y) : 1, 0 !== pD.z ? Math.abs(wD / pD.z) : 1)
-         }(sD, KD, rD, zD.typeNodes[0].scale) * DD.nodeScaleGrowth;
-         return Math.max(LD, DD.attachmentReach * Math.max(Math.abs(sD), Math.abs(KD), Math.abs(rD)))
-       }
-       isDeferrable(DD) {
- ... (78 more removed lines; see GitHub link above)
+       }({
+         circular: ip,
+         comparator: Sp,
+         createState: Op,
+         equals: cp ? cp(Sp) : (xp = Sp, function(pp, ip, cp, Op, op, Ip, Sp) {
+           return xp(pp, ip, Sp)
+         }),
+         strict: op
+       })
+     }
+ 
+     function fp(pp) {
+       var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         cp = -1;
+       requestAnimationFrame((function Op(op) {
+         cp < 0 && (cp = op), op - cp > ip ? (pp(op), cp = -1) : function(pp) {
+ ... (49 more added lines; see GitHub link above)
```

#### 92. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2199-L2239` → after: `L2734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2734) · [Before (L2199-L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2199-L2239)

```diff
-             this.updateObjectNodes(wD, this.types[wD.type])
-           }
-           for (let pD = 0; pD < wD; pD++) this.objectData[DD[pD]].inDirtyBatch = !1
-         }
-         this.updateQueuedReach()
-       }
-       updateQueuedReach() {
-         if (this.reachQueue.size > 0) {
-           for (const DD of this.reachQueue) this.updateAttachmentReach(DD);
-           this.reachQueue.clear()
-         }
-       }
-       queueDirtyObject(DD, zD) {
-         zD.dirtyQueued || (zD.dirtyQueued = !0, this.dirtyList[this.dirtyCount++] = DD)
-       }
-       updateObjectNodes(DD, zD) {
- ... (25 more removed lines; see GitHub link above)
+             "object" === bp(Op) && pp(Op), "function" === typeof Op && Op()
```

#### 93. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2241-L2250` → after: `L2736-L2749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2736-L2749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2736-L2749) · [Before (L2241-L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2241-L2250)

```diff
-           rD[UD] = sD, cD.worldStale = !1, cD.transformReach > 0 && this.reachQueue.add(DD);
-           const gD = null === LD ? AD : wD[LD];
-           gD && (PD.d.matMulToRef(gD.worldMatrix, cD.matrix, cD.worldMatrix), 0 === UD && this.updateCullSphere(DD)), cD.invWorldMatrixDirty = !0, null !== pD.thinMeshIndex && this.thinMeshes[pD.thinMeshIndex].setMatrix(cD.thinInstanceId, cD.worldMatrix.m);
-           const fD = cD.attachedThinObjectIds;
-           for (let DD = 0; DD < fD.length; DD++) {
-             const zD = fD[DD],
-               wD = this.objectData[zD];
-             if (void 0 !== wD) {
-               const DD = wD.nodes[0];
-               PD.d.matMulToRef(cD.worldMatrix, DD.matrix, DD.worldMatrix), DD.invWorldMatrixDirty = !0, this.setDirtyInternal(zD, wD, 0)
+         };
+       return {
+         stop: function() {
+           ip = !0
+         },
+         start: function(pp) {
+           ip = !1, cp(pp)
+         },
+         subscribe: function(ip) {
+           return pp = ip,
+             function() {
+               pp = function() {
+                 return null
+               }
```

#### 94. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2255-L2335` → after: `L2753-L2769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2753-L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2753-L2769) · [Before (L2255-L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2255-L2335)

```diff
-       refreshStaleWorld(DD, zD) {
-         const wD = DD.nodes[zD],
-           pD = this.types[DD.type].typeNodes[zD];
-         let sD = wD.worldStale;
-         if (null !== pD.parent ? sD = this.refreshStaleWorld(DD, pD.parent) || sD : null !== DD.parentThinObjectId && (sD = this.refreshStaleWorld(this.objectData[DD.parentThinObjectId], DD.parentNodeIndex) || sD), !sD) return !1;
-         const KD = this.worldParentNode(DD, pD);
-         return KD && PD.d.matMulToRef(KD.worldMatrix, wD.matrix, wD.worldMatrix), wD.invWorldMatrixDirty = !0, !0
-       }
-       worldParentNode(DD, zD) {
-         return null !== zD.parent ? DD.nodes[zD.parent] : null === DD.parentThinObjectId ? null : this.objectData[DD.parentThinObjectId].nodes[DD.parentNodeIndex]
-       }
-       hasAttachmentsBelow(DD, zD, wD) {
-         const pD = DD.nodes[wD];
-         if (0 !== pD.attachedThinObjectIds.length || 0 !== pD.attachedTransformNodes.length) return !0;
-         const {
-           children: sD
- ... (65 more removed lines; see GitHub link above)
+     }
+ 
+     function Fp(pp) {
+       return Fp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Fp(pp)
+     }
+ 
+     function gp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+ ... (1 more added lines; see GitHub link above)
```

#### 95. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2337-L2341` → after: `L2771-L2781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2771-L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2771-L2781) · [Before (L2337-L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2337-L2341)

```diff
-       getGroupIndicesOrNull(DD, zD) {
-         const wD = this.groups[DD.type];
-         if (!wD) return null;
-         const pD = wD[zD];
-         return pD || null
+       return cp
+     }
+ 
+     function Gp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? gp(Object(cp), !0).forEach((function(ip) {
+           rp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : gp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 96. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2343-L2345` → after: `L2783-L2806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2783-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2783-L2806) · [Before (L2343-L2345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2343-L2345)

```diff
-       getGroupIndices(DD, zD) {
-         const wD = this.getGroupIndicesOrNull(DD, zD);
-         if (!wD) throw new Error(`Type ${DD.type} has no group ${zD}`);
+       return pp
+     }
+ 
+     function rp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" !== Fp(pp) || null === pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" !== Fp(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" === Fp(ip) ? ip : String(ip)
+ ... (8 more added lines; see GitHub link above)
```

#### 97. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2347-L2385` → after: `L2808-L2831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2808-L2831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2808-L2831) · [Before (L2347-L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2347-L2385)

```diff
-       }
-       assertArgs(DD, zD) {
-         if (DD.length !== zD) throw new Error(`Expected ${zD} args, got ${DD.length}`)
-       }
-       getType(DD) {
-         if ("string" === typeof DD) {
-           this.getTypeNodes(DD);
-           return DD
-         }
-         return this.getObjectData(DD).type
-       }
-       deleteObject(DD, zD) {
-         const wD = this.types[zD.type].typeNodes;
-         let pD = null;
-         if (null !== zD.parentThinObjectId) try {
-           this.detachThinObjectInternal(DD, zD)
- ... (23 more removed lines; see GitHub link above)
+       },
+       zp = function(pp, ip) {
+         return Object.keys(ip).reduce((function(cp, Op) {
+           return Gp(Gp({}, cp), {}, rp({}, Op, pp(Op, ip[Op])))
+         }), {})
+       },
+       sp = function(pp, ip, cp) {
+         return pp.map((function(pp) {
+           return "".concat((Op = pp, Op.replace(/([A-Z])/g, (function(pp) {
+             return "-".concat(pp.toLowerCase())
+           }))), " ").concat(ip, "ms ").concat(cp);
+           var Op
+         })).join(",")
+       };
+ 
+     function Kp(pp, ip) {
+ ... (8 more added lines; see GitHub link above)
```

#### 98. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2387-L2388` → after: `L2833-L2837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2833-L2837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2833-L2837) · [Before (L2387-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2387-L2388)

```diff
-             var sD;
-             null === (sD = DD.tempTransformNode) || void 0 === sD || sD.dispose()
+             if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
+               if (Object(cp) !== cp) return;
+               Lp = !1
+             } else
+               for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
```

#### 99. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2390-L2428` → after: `L2839-L2840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2839-L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2839-L2840) · [Before (L2390-L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2390-L2428)

```diff
-             pD ??= rD
-           }
-           DD.tempTransformNode = null
-         }
-         const KD = this.cullSpheres.remove(zD.cullSlot);
-         if (-1 !== KD && (this.objectData[KD].cullSlot = zD.cullSlot), delete this.objectData[DD], this.deferredObjectIds.delete(DD), this.reachQueue.delete(zD), null !== pD) throw pD
-       }
-       detachThinObjectInternal(DD, zD) {
-         const wD = this.objectData[zD.parentThinObjectId];
-         if (void 0 === wD) console.warn(`Thin object ${DD} is attached to deleted object ${zD.parentThinObjectId}`);
-         else {
-           const pD = this.getObjectNode(wD, zD.parentNodeIndex),
-             sD = pD.attachedThinObjectIds.indexOf(DD); - 1 !== sD && (pD.attachedThinObjectIds[sD] = pD.attachedThinObjectIds.at(-1), pD.attachedThinObjectIds.pop(), 0 === pD.attachedThinObjectIds.length && wD.indicesWithThinObjects.delete(zD.parentNodeIndex))
-         }
-         this.removeThinObjectParent(DD, zD), this.updateChildEnabled(DD, 0, zD, !0), void 0 !== wD && this.updateAttachmentReach(wD)
-       }
- ... (23 more removed lines; see GitHub link above)
+             Yp = !0, op = pp
+           } finally {
```

#### 100. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2430-L2432` → after: `L2842-L2844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2842-L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2842-L2844) · [Before (L2430-L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2430-L2432)

```diff
-               this.deleteObject(pD, DD)
-             } catch (wD) {
-               zD ??= wD
+               if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
+             } finally {
+               if (Yp) throw op
```

#### 101. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2436-L2521` → after: `L2849-L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2849-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2849-L2851) · [Before (L2436-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2436-L2521)

```diff
-         if (null !== zD) throw zD
-       }
-       detachAllTransformNodesInternal(DD) {
-         var zD;
-         DD.attachedTransformNodes.length = 0, null === (zD = DD.tempTransformNode) || void 0 === zD || zD.dispose(), DD.tempTransformNode = null
-       }
-       disposeAllTransformNodesInternal(DD) {
-         let zD = null;
-         for (const pD of DD.attachedTransformNodes) try {
-           pD.dispose()
-         } catch (wD) {
-           zD ??= wD
-         }
-         if (null !== zD) throw zD
-       }
-       setDirtyInternal(DD, zD, wD) {
- ... (70 more removed lines; see GitHub link above)
+       }(pp, ip) || ii(pp, ip) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 102. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2524-L2528` → after: `L2854-L2861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2854-L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2854-L2861) · [Before (L2524-L2528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2524-L2528)

```diff
-     function lD(DD, zD, wD, pD) {
-       const sD = 0 !== pD.x ? DD / pD.x : 1,
-         KD = 0 !== pD.y ? zD / pD.y : 1,
-         rD = 0 !== pD.z ? wD / pD.z : 1;
-       return Math.max(Math.abs(sD), Math.abs(KD), Math.abs(rD)) + Math.max(Math.abs(1 - sD), Math.abs(1 - KD), Math.abs(1 - rD))
+     function Vp(pp) {
+       return function(pp) {
+         if (Array.isArray(pp)) return ci(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || ii(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 103. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2532-L2575` → after: `L2865-L2870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2865-L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2865-L2870) · [Before (L2532-L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2532-L2575)

```diff
-       let wD = Math.hypot(DD[0], DD[1], DD[2]),
-         pD = Math.hypot(DD[4], DD[5], DD[6]),
-         sD = Math.hypot(DD[8], DD[9], DD[10]);
-       const KD = DD[0] * DD[4] + DD[1] * DD[5] + DD[2] * DD[6],
-         rD = DD[0] * DD[8] + DD[1] * DD[9] + DD[2] * DD[10],
-         LD = DD[4] * DD[8] + DD[5] * DD[9] + DD[6] * DD[10],
-         cD = 1e-6 * (wD * wD + pD * pD + sD * sD);
-       (Math.abs(KD) > cD || Math.abs(rD) > cD || Math.abs(LD) > cD) && (wD = pD = sD = Math.sqrt(wD * wD + pD * pD + sD * sD)), zD.set(wD, pD, sD)
-     }
-     iD.TEMP_RESULT_POS = new TD.s, iD.TEMP_MODEL_POINT = new TD.s, iD.TEMP_CANDIDATE_POS = new TD.s, iD.TEMP_SPHERE_SCALE = new TD.s, iD.TEMP_SPHERE_OFFSET = new TD.s, iD.TEMP_LOCAL_RAY = new xD.i(new TD.s, new TD.s, 1), iD.TEMP_REACH_LOCAL = new TD.e, iD.TEMP_REACH_WORLD = new T … [truncated]
-     var ND = wD(37584),
-       ZD = wD(37206),
-       yD = wD(37304);
-     var kD = wD(37442),
-       mD = wD(37586),
-       eD = wD(37594),
- ... (28 more removed lines; see GitHub link above)
+       if (pp) {
+         if ("string" === typeof pp) return ci(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? ci(pp, ip) : void 0
+       }
+     }
```

#### 104. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2577-L2578` → after: `L2872-L2875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2872-L2875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2872-L2875) · [Before (L2577-L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2577-L2578)

```diff
-     function pz() {
-       this.zcD = !1, this.eId = null, this.kS = null, this[Rz] = !1, this[vD] = void 0, this[tD] = void 0, this[FD] = void 0, this[YD] = void 0, this[KD.k] = void 0, this[HD] = void 0, this[qD] = void 0, this[Dz] = void 0, this[zz] = void 0, this[wz] = void 0
+     function ci(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 105. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2580-L2596` → after: `L2877-L2922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2877-L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2877-L2922) · [Before (L2580-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2580-L2596)

```diff
-     class sz {
-       constructor(DD, zD, wD) {
-         zD = Object.assign({}, uD, zD), this.AU = DD, this.DcD = !!zD.DcD, this.sB = !!zD.sB, this.bI = zD.lwD, this.jI = zD.WwD, this.pcD = 6, this.engine = null, this.oB = null, this.camera = null, this.DsD = null, this.psD = null, this.scD = null, this.KcD = null, this.pB = zD … [truncated]
-           var DD = document.createElement("div");
-           DD.id = "noa_fps", DD.style.position = "absolute", DD.style.top = "0", DD.style.right = "0", DD.style.zIndex = "0", DD.style.color = "white", DD.style.backgroundColor = "rgba(0,0,0,0.5)", DD.style.font = "14px monospace", DD.style.textAlign = "center", DD.style.minWidth … [truncated]
-           var zD = 1e3,
-             wD = 0,
-             pD = 0,
-             sD = performance.now(),
-             KD = sD;
-           Bz = function() {
-             wD++;
-             var rD = performance.now();
-             if (rD - KD > pD && (pD = rD - KD), KD = rD, !(rD - sD < zD)) {
-               var LD = Math.round(wD / (rD - sD) * 1e3),
-                 cD = Math.round(1 / pD * 1e3);
- ... (1 more removed lines; see GitHub link above)
+     var Oi = 1e-4,
+       oi = function(pp, ip) {
+         return [0, 3 * pp, 3 * ip - 6 * pp, 3 * pp - 3 * ip + 1]
+       },
+       Ii = function(pp, ip) {
+         return pp.map((function(pp, cp) {
+           return pp * Math.pow(ip, cp)
+         })).reduce((function(pp, ip) {
+           return pp + ip
+         }))
+       },
+       Si = function(pp, ip) {
+         return function(cp) {
+           var Op = oi(pp, ip);
+           return Ii(Op, cp)
+         }
+ ... (30 more added lines; see GitHub link above)
```

#### 106. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2598-L2638` → after: `L2924-L2941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2924-L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2924-L2941) · [Before (L2598-L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2598-L2638)

```diff
-           }
-         }(), this.Ql = new iD(this.oB, {
-           tLD: DD => {
-             this.pW(DD)
-           },
-           AsD: this.LsD.AsD
-         }), this.pB && this.pB.attach(this)
-       }
-       RB() {
-         return this.GcD
-       }
-       qpD(DD, zD) {
-         this.engine = this.pB?.FzD || this.LsD.ZwD(DD, zD), this.pB || (DD.addEventListener("webglcontextlost", (zD => {
-           zD.preventDefault();
-           const wD = function(DD, zD, wD) {
-             const pD = {
- ... (25 more removed lines; see GitHub link above)
+         } [Op, Ip, op, Sp].every((function(pp) {
+           return "number" === typeof pp && pp >= 0 && pp <= 1
+         }));
+         var Yp, Dp, Ap = Si(Op, Ip),
+           Pp = Si(op, Sp),
+           Wp = (Yp = Op, Dp = Ip, function(pp) {
+             var ip = oi(Yp, Dp),
+               cp = [].concat(Vp(ip.map((function(pp, ip) {
+                 return pp * ip
+               })).slice(1)), [0]);
+             return Ii(cp, pp)
+           }),
+           yp = function(pp) {
+             for (var ip, cp = pp > 1 ? 1 : pp, Op = cp, op = 0; op < 8; ++op) {
+               var Ip = Ap(Op) - cp,
+                 Sp = Wp(Op);
+ ... (2 more added lines; see GitHub link above)
```

#### 107. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2640-L2740` → after: `L2943-L2977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2943-L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2943-L2977) · [Before (L2640-L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2640-L2740)

```diff
-             DD.oB && (pD.lcD = {
-               WcD: DD.oB.meshes.length,
-               NcD: DD.oB.materials.length,
-               wLD: DD.oB.textures.length,
-               KpD: DD.KpD()
-             });
-             return pD
-           }(this, DD, this.GcD ? "WebGL2" : "WebGL1");
-           wD.eventType = zD.type, wD.statusMessage = zD.statusMessage || "No status message", console.error("WebGL context lost!", wD)
-         })), DD.addEventListener("webglcontextrestored", (() => {
-           var DD;
-           console.warn("WebGL context restored."), DD = this.engine, setTimeout((() => {
-             const zD = DD;
-             !0 === zD._contextWasLost && zD._gl && !zD._gl.isContextLost() && (aD || (aD = !0, console.error("WebGL context restore failed part way (a restore observer threw): drawing again with what it rebuilt")), zD._contextWasLost = !1)
-           }), 0)
-         }))), this.GcD = null !== this.pB || !("AB" in this.engine) || this.engine.AB >= 2, this.engine.OpD = !1, this.hcD(), this.LsD.rsD(this, zD), (0, eD.l)(this, zD.KsD), this.ncD = 0, this.McD = !1
- ... (85 more removed lines; see GitHub link above)
+             return Pp(Op)
+           };
+         return yp.isStepper = !1, yp
+       },
+       Li = function() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         var Op = ip[0];
+         if ("string" === typeof Op) switch (Op) {
+           case "ease":
+           case "ease-in-out":
+           case "ease-out":
+           case "ease-in":
+           case "linear":
+             return xi(Op);
+           case "spring":
+             return function() {
+ ... (19 more added lines; see GitHub link above)
```

#### 108. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2743` → after: `L2980-L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2980-L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2980-L2984) · [Before (L2743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2743)

```diff
-       return !!(DD.parent || DD.WzD || DD.infiniteDistance || "__root__" === DD.name)
+       return Yi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Yi(pp)
```

#### 109. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2747-L2754` → after: `L2988-L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2988-L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2988-L2994) · [Before (L2747-L2754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2747-L2754)

```diff
-       (0, eD.p)(DD), DD.LsD.wsD(DD);
-       var zD = DD.AU.camera.gH(),
-         wD = DD.AU.CU,
-         pD = Math.floor(zD[0] + wD[0]),
-         sD = Math.floor(zD[1] + wD[1]),
-         KD = Math.floor(zD[2] + wD[2]),
-         rD = DD.AU.OJ(pD, sD, KD);
-       fz(DD, rD)
+       return function(pp) {
+         if (Array.isArray(pp)) return wi(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || Ui(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 110. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2758-L2845` → after: `L2998-L3003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R2998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L2998-L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L2998-L3003) · [Before (L2758-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2758-L2845)

```diff
-       var wD = DD.AU.NJ.cameraTint;
-       wD && Array.isArray(wD) && wD.length >= 4 ? DD.McD = !0 : DD.McD && (DD.McD = !1, DD.ncD = -1);
-       const pD = zD !== DD.ncD;
-       if (!DD.McD && pD && 0 !== zD) {
-         const pD = DD.AU.Lf.B_(zD, 0);
-         if (pD) {
-           const zD = DD.AU.Lf.GB(pD),
-             sD = zD.color,
-             KD = zD.alpha;
-           sD && KD && KD < 1 && (wD = [sD[0], sD[1], sD[2], KD])
-         }
-       }
-       DD.ncD = zD, (pD || DD.McD) && (wD ? (! function(DD, zD) {
-         const {
-           emissiveColor: wD,
-           alpha: pD
- ... (72 more removed lines; see GitHub link above)
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 111. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2848-L2849` → after: `L3008-L3015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3008-L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3008-L3015) · [Before (L2848-L2849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2848-L2849)

```diff
-       function fD(DD, zD) {
-         console.warn(DD.name + " --- " + zD)
+     function Pi(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Ai(Object(cp), !0).forEach((function(ip) {
+           Wi(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ai(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 112. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2867` → after: `L3042-L3069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3042-L3069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3042-L3069) · [Before (L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2867)

```diff
-       return [Math.cos(zD) * Math.sin(DD), -Math.sin(zD), Math.cos(zD) * Math.cos(DD)]
+       return function(pp) {
+         if (Array.isArray(pp)) return pp
+       }(pp) || function(pp, ip) {
+         var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
+         if (null != cp) {
+           var Op, op, Ip, Sp, xp = [],
+             Lp = !0,
+             Yp = !1;
+           try {
+             if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
+               if (Object(cp) !== cp) return;
+               Lp = !1
+             } else
+               for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
+           } catch (pp) {
+             Yp = !0, op = pp
+ ... (12 more added lines; see GitHub link above)
```

#### 113. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L2870-L2878` → after: `L3072-L3076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3072-L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3072-L3076) · [Before (L2870-L2878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L2870-L2878)

```diff
-     function sD(DD) {
-       const zD = DD[0],
-         wD = DD[1],
-         pD = DD[2],
-         sD = Math.atan2(zD, pD),
-         KD = Math.sqrt(zD * zD + pD * pD);
-       return {
-         pg: sD,
-         fwD: Math.atan2(-wD, KD)
+     function Ui(pp, ip) {
+       if (pp) {
+         if ("string" === typeof pp) return wi(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? wi(pp, ip) : void 0
```

#### 114. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3004-L3008` → after: `L3080-L3083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3080-L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3080-L3083) · [Before (L3004-L3008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3004-L3008)

```diff
-     function hD(DD, zD, wD) {
-       DD.empty();
-       for (var pD = 0; pD <= zD[0]; pD++)
-         for (var sD = 0; sD <= pD; sD++)
-           for (var KD = 0; KD <= zD[1]; KD++) wD(pD, KD, sD) && DD.add(pD, KD, sD)
+     function wi(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 115. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3010-L3100` → after: `L3085-L3100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3085-L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3085-L3100) · [Before (L3010-L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3010-L3100)

```diff
-     var nD = {
-       CI: 32,
-       iJ: [2, 2],
-       Xx: [3, 3],
-       AzD: !1,
-       EwD: !1,
-       vx: null
-     };
-     class MD extends(sD()) {
-       constructor(DD, zD) {
-         super(), zD = Object.assign({}, nD, zD), this.AU = DD, this.fzD = !1, this.dB = !1, this.gI = rD.e, this.EwD = !!zD.EwD, this.vx = zD.vx, this.AzD = !!zD.AzD, this.XzD = 50, this.VzD = 50, this.LgD = 3, this.cgD = 2, this.PzD = this.cgD / this.LgD, this.CzD = 3, this.PDD  … [truncated]
-         var wD = this.PDD;
-         this.OsD = kD, this.EgD = mD, this.QgD = eD, this.XgD = oD, 0 === (wD & wD - 1) && (this.VgD = 0 | Math.log2(wD), this.PgD = wD - 1 | 0, this.QgD = aD, this.XgD = uD), this.xwD = new Set, this.TwD = new Set, this.bwD = [], this.jwD = new Set, this.dwD = new Set, this.SwD  … [truncated]
-       }
-     }
-     MD.prototype.bgD = function(DD, zD, wD) {
- ... (75 more removed lines; see GitHub link above)
+     var vi = function(pp, ip, cp) {
+         return pp + (ip - pp) * cp
+       },
+       ti = function(pp) {
+         return pp.from !== pp.to
+       },
+       Hi = function pp(ip, cp, Op) {
+         var op = zp((function(pp, cp) {
+           if (ti(cp)) {
+             var Op = yi(ip(cp.from, cp.to, cp.tw), 2),
+               op = Op[0],
+               Ip = Op[1];
+             return Pi(Pi({}, cp), {}, {
+               from: op,
+               tw: Ip
+             })
```

#### 116. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3102-L3107` → after: `L3102-L3148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3102-L3148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3102-L3148) · [Before (L3102-L3107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3102-L3107)

```diff
-         } else {
-           var ID = DD.PDD;
-           try {
-             UD = new rD.e(DD.AU, zD, LD, cD, gD, ID, wD, pD, sD, KD)
-           } catch (BD) {
-             throw AD.release(wD), BD
+           return cp
+         }), cp);
+         return Op < 1 ? zp((function(pp, ip) {
+           return ti(ip) ? Pi(Pi({}, ip), {}, {
+             tw: vi(ip.tw, op[pp].tw, Op),
+             from: vi(ip.from, op[pp].from, Op)
+           }) : ip
+         }), cp) : pp(ip, op, Op - 1)
+       };
+     const di = function(pp, ip, cp, Op, op) {
+       var Ip, Sp, xp, Lp, Yp = (Ip = pp, Sp = ip, [Object.keys(Ip), Object.keys(Sp)].reduce((function(pp, ip) {
+           return pp.filter((function(pp) {
+             return ip.includes(pp)
+           }))
+         }))),
+         Dp = Yp.reduce((function(cp, Op) {
+ ... (31 more added lines; see GitHub link above)
```

#### 117. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3109-L3119` → after: `L3150-L3154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3150-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3150-L3154) · [Before (L3109-L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3109-L3119)

```diff
-           DD.EB.HV(LD, cD, gD, UD), AD.sV(LD, cD, gD, wD), DD.AU.wB.VcD(UD), DD.emit("chunkAdded", UD)
-         }(function(DD, zD, wD, pD) {
-           var sD = zD + "|" + pD,
-             KD = DD.xgD.get(sD);
-           (void 0 === KD || wD > KD) && DD.xgD.set(sD, wD)
-         })(DD, LD, cD, gD), UD.BI && function(DD, zD) {
-           for (var [wD, pD, sD] of ZD) {
-             var KD = DD.EB.QB(zD.i + wD, zD.j + pD, zD.k + sD);
-             if (KD && !KD.BI) {
-               var rD = wD + pD + sD < 0 ? zD : KD;
-               rD.OB = !0, rD.VB = !0
+         },
+         function() {
+           return requestAnimationFrame(Wp),
+             function() {
+               cancelAnimationFrame(Pp)
```

#### 118. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3121-L3180` → after: `L3156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3156) · [Before (L3121-L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3121-L3180)

```diff
-           }
-         }(DD, UD);
-         WD(DD, UD), FD(DD, LD, cD, gD, UD), DD.OgD.size > 0 && DD.OgD.delete(LD + "|" + cD + "|" + gD) && UD.KV(UD.BI);
-         return Dz("QI"), !0
-       }(this, DD, zD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rD.f, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null)
-     }, MD.prototype.HB = function(DD, zD, wD) {
-       var [pD, sD, KD, rD] = OD(DD);
-       if (rD !== this.AU.EDD) return !1;
-       var LD = this.EB.QB(pD, sD, KD);
-       return !!LD && (this.AU.qJ.YB(LD, zD, wD), !0)
-     }, MD.prototype.Zx = function() {
-       let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
-         zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
-       var wD = Array.isArray(DD) ? DD : [DD, DD],
-         pD = Array.isArray(zD) ? zD : [zD, zD];
-       pD[0] < wD[0] + 1 && (pD[0] = wD[0] + 1), pD[1] < wD[1] + 1 && (pD[1] = wD[1] + 1), this.Ix = wD, this.dpD = pD, this.ggD = YD(wD[0], wD[1]), this.RgD = YD(pD[0], pD[1]), hD(this.ecD, wD, this.ggD), vD(this, this.ecD, 0, 0, 0, !0), this.JgD.zgD(wD, 1, YD), vD(this, this.JgD … [truncated]
- ... (44 more removed lines; see GitHub link above)
+         }
```

#### 119. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3211-L3316` → after: `L3160-L3164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3160-L3164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3160-L3164) · [Before (L3211-L3316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3211-L3316)

```diff
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.AU.entities.PJ(DD.AU.vW);
-       var [wD, pD, sD] = zD;
-       return DD.OsD(Math.floor(wD), Math.floor(pD), Math.floor(sD))
-     }
-     MD.prototype.oDD = function(DD, zD, wD) {
-       return this.AU.NJ.canChange ? XD(DD, zD, wD, this.sF(DD, zD, wD), this.jwD, this.xwD, this.dwD, this.TwD, this.SwD, this.bwD, !1) : XD(DD, zD, wD, this.sF(DD, zD, wD), this.xwD, this.jwD, this.TwD, this.dwD, this.bwD, this.SwD, !0)
-     }, MD.prototype.DU = function() {
-       var DD = performance.now(),
-         zD = this.AU.entities.PJ(this.AU.vW),
-         [wD, pD, sD] = VD(this, zD),
-         KD = this.fgD;
-       if ((wD !== KD[0] || pD !== KD[1] || sD !== KD[2]) && (this.emit("playerEnteredChunk", wD, pD, sD), this.fgD = [wD, pD, sD], this.IgD = 0, this.WgD()), this.MgD.size > 0 && function(DD, zD) {
-           var wD = !1;
-           DD.MgD.forEach(((pD, sD) => {
-             zD - pD >= 1e3 && (DD.MgD.delete(sD), wD = !0)
-           })), wD && (DD.IgD = 0)
- ... (90 more removed lines; see GitHub link above)
+       return ei = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, ei(pp)
```

#### 120. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3318-L3323` → after: `L3166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3166) · [Before (L3318-L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3318-L3323)

```diff
-     var xD = (DD, zD, wD, pD, sD, KD, rD, LD) => {
-         TD(DD, zD + sD, wD + KD, pD + rD, LD), sD !== rD && TD(DD, zD + rD, wD + KD, pD + sD, LD), sD > 0 && xD(DD, zD, wD, pD, -sD, KD, rD, LD), KD > 0 && xD(DD, zD, wD, pD, sD, -KD, rD, LD), rD > 0 && xD(DD, zD, wD, pD, sD, KD, -rD, LD)
-       },
-       TD = (DD, zD, wD, pD, sD) => {
-         sD && !GD(sD, zD, wD, pD) || DD.zG.includes(zD, wD, pD) || DD.MgD.size > 0 && DD.MgD.has(zD + "|" + wD + "|" + pD) || sD && DD.JgD.TpD(zD, wD, pD) || (bD(DD, zD, wD, pD), DD.zG.add(zD, wD, pD), DD.yzD.add(zD, wD, pD, !0))
-       };
+     var ui = ["children", "mW", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
```

#### 121. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3325-L3329` → after: `L3168-L3179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3168-L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3168-L3179) · [Before (L3325-L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3325-L3329)

```diff
-     function bD(DD, zD, wD, pD) {
-       var sD = DD.zG.RP(zD, wD, pD);
-       if (sD) {
-         var [KD, rD, LD] = sD;
-         KD === zD && rD === wD && LD === pD || (DD.yzD.remove(KD, rD, LD), DD.kzD.remove(KD, rD, LD), DD.bB.remove(KD, rD, LD), yD(DD, KD, rD, LD))
+     function ji(pp, ip) {
+       if (null == pp) return {};
+       var cp, Op, op = function(pp, ip) {
+         if (null == pp) return {};
+         var cp, Op, op = {},
+           Ip = Object.keys(pp);
+         for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || (op[cp] = pp[cp]);
+         return op
+       }(pp, ip);
+       if (Object.getOwnPropertySymbols) {
+         var Ip = Object.getOwnPropertySymbols(pp);
+         for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
```

#### 122. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3335-L3353` → after: `L3185-L3198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3185-L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3185-L3198) · [Before (L3335-L3353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3335-L3353)

```diff
-       var zD = DD.yzD;
-       if (zD.AI()) return !0;
-       var wD = DD.kzD.count(),
-         pD = DD.mzD.count();
-       if (wD >= DD.XzD) return !0;
-       if (pD >= DD.VzD) return !0;
-       var [sD, KD, rD] = zD.pop();
-       return function(DD, zD, wD, pD) {
-         var sD = DD.PDD,
-           KD = DD.zB.ZgD(),
-           rD = DD.AU.EDD,
-           LD = [zD, wD, pD, rD].join("|"),
-           cD = zD * sD,
-           gD = wD * sD,
-           RD = pD * sD,
-           AD = DD.kzD.RP(zD, wD, pD);
- ... (3 more removed lines; see GitHub link above)
+       return function(pp) {
+         if (Array.isArray(pp)) return mi(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || function(pp, ip) {
+         if (!pp) return;
+         if ("string" === typeof pp) return mi(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         "Object" === cp && pp.constructor && (cp = pp.constructor.name);
+         if ("Map" === cp || "Set" === cp) return Array.from(pp);
+         if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return mi(pp, ip)
+       }(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 123. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3356-L3360` → after: `L3201-L3204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3201-L3204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3201-L3204) · [Before (L3356-L3360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3356-L3360)

```diff
-     function SD(DD) {
-       var zD = DD.bB;
-       if (zD.AI() && (zD = DD.TB), zD.AI()) return !0;
-       var [wD, pD, sD] = zD.pop();
-       return yD(DD, wD, pD, sD), zD.AI()
+     function mi(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 124. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3364-L3375` → after: `L3208-L3213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3208-L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3208-L3213) · [Before (L3364-L3375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3364-L3375)

```diff
-       var wD = DD.ozD.OI,
-         pD = wD.length > 0 ? wD[wD.length - 1] : null,
-         sD = pD ? DD.EB.QB(pD[0], pD[1], pD[2]) : null;
-       if (DD.AU.qJ.BB(!(sD && sD.qI))) return !0;
-       var KD = DD.ozD;
-       if (KD.AI() && (KD = DD.ezD), KD.AI() && !zD && (KD = DD.mzD), KD.AI()) return !0;
-       var [rD, LD, cD] = KD.pop();
-       if (!DD.TB.includes(rD, LD, cD)) {
-         var gD = DD.EB.QB(rD, LD, cD);
-         gD && function(DD, zD) {
-           lD(DD, zD.i, zD.j, zD.k), zD.VV(), Dz("mesh")
-         }(DD, gD)
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 125. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3379-L3380` → after: `L3218-L3227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3218-L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3218-L3227) · [Before (L3379-L3380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3379-L3380)

```diff
-     function lD(DD, zD, wD, pD) {
-       DD.mzD.remove(zD, wD, pD), DD.ezD.remove(zD, wD, pD), DD.ozD.remove(zD, wD, pD)
+     function qi(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Ri(Object(cp), !0).forEach((function(ip) {
+           Mi(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ri(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 126. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3384-L3394` → after: `L3231-L3236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3231-L3236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3231-L3236) · [Before (L3384-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3384-L3394)

```diff
-       if (!zD.OB && !zD.yX) return !1;
-       if (DD.ozD.includes(zD.i, zD.j, zD.k)) return !1;
-       if (wD) return DD.mzD.remove(zD.i, zD.j, zD.k), DD.ezD.remove(zD.i, zD.j, zD.k), DD.ozD.add(zD.i, zD.j, zD.k), !0;
-       if (DD.mzD.includes(zD.i, zD.j, zD.k)) return !1;
-       if (DD.ezD.includes(zD.i, zD.j, zD.k)) return !1;
-       var pD = 26 === zD.FX ? DD.ezD : DD.mzD;
-       if (pD.add(zD.i, zD.j, zD.k), DD.BgD++, DD.BgD > 20) {
-         var [sD, KD, rD] = VD(DD);
-         DD.JgD.KgD(pD, tD, sD, KD, rD), DD.BgD = 0
-       }
-       return !0
+       return (ip = Ei(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 127. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3398-L3429` → after: `L3240-L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3240-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3240-L3243) · [Before (L3398-L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3398-L3429)

```diff
-       return DD.zB.release(zD), !1
-     }
-     MD.prototype.OwD = function() {
-       for (this.bB.pC(this.zG), this.TB.empty(), this.yzD.empty(), this.mzD.empty(), this.ezD.empty(), this.ozD.empty(), this.xgD.clear(), this.MgD.clear(), this.OgD.clear(), this.dB = !1; !SD(this););
-       this.IgD = 0
-     };
-     var ZD = [
-       [-1, 0, 0],
-       [0, -1, 0],
-       [0, 0, -1],
-       [1, 0, 0],
-       [0, 1, 0],
-       [0, 0, 1]
-     ];
- 
-     function yD(DD, zD, wD, pD) {
- ... (16 more removed lines; see GitHub link above)
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Ei(Op.key), Op)
+       }
```

#### 128. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3432-L3433` → after: `L3246-L3257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3246-L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3246-L3257) · [Before (L3432-L3433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3432-L3433)

```diff
-     function kD(DD, zD, wD) {
-       return [this.QgD(DD), this.QgD(zD), this.QgD(wD)]
+     function Ei(pp) {
+       var ip = function(pp, ip) {
+         if ("object" !== ei(pp) || null === pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" !== ei(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
+         }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" === ei(ip) ? ip : String(ip)
```

#### 129. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3436-L3437` → after: `L3260-L3263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3260-L3263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3260-L3263) · [Before (L3436-L3437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3436-L3437)

```diff
-     function mD(DD, zD, wD) {
-       return [this.XgD(DD), this.XgD(zD), this.XgD(wD)]
+     function Xi(pp, ip) {
+       return Xi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Xi(pp, ip)
```

#### 130. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3441` → after: `L3267-L3284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3267-L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3267-L3284) · [Before (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3441)

```diff
-       return 0 | Math.floor(DD / this.PDD)
+       var ip = function() {
+         if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
+         if (Reflect.construct.sham) return !1;
+         if ("function" === typeof Proxy) return !0;
+         try {
+           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
+         } catch (pp) {
+           return !1
+         }
+       }();
+       return function() {
+         var cp, Op = Bi(pp);
+         if (ip) {
+           var op = Bi(this).constructor;
+           cp = Reflect.construct(Op, arguments, op)
+         } else cp = Op.apply(this, arguments);
+ ... (2 more added lines; see GitHub link above)
```

#### 131. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3444-L3447` → after: `L3287-L3290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3287-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3287-L3290) · [Before (L3444-L3447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3444-L3447)

```diff
-     function oD(DD) {
-       var zD = this.PDD,
-         wD = DD % zD | 0;
-       return wD < 0 && (wD += zD), wD
+     function Qi(pp, ip) {
+       if (ip && ("object" === ei(ip) || "function" === typeof ip)) return ip;
+       if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+       return Ji(pp)
```

#### 132. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3451` → after: `L3294-L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3294-L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3294-L3295) · [Before (L3451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3451)

```diff
-       return DD >> this.VgD
+       if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+       return pp
```

#### 133. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3455` → after: `L3299-L3301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3299-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3299-L3301) · [Before (L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3455)

```diff
-       return DD & this.PgD
+       return Bi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, Bi(pp)
```

#### 134. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3458-L3473` → after: `L3318-L3385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3318-L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3318-L3385) · [Before (L3458-L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3458-L3473)

```diff
-     function vD(DD, zD, wD, pD, sD) {
-       let KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       void 0 === wD && ([wD, pD, sD] = VD(DD)), zD.sC(((DD, zD, KD) => tD(wD - DD, pD - zD, sD - KD)), KD)
-     }
-     var tD = (DD, zD, wD) => DD * DD + zD * zD + wD * wD;
- 
-     function FD(DD, zD, wD, pD, sD) {
-       for (var KD = !sD || sD && !sD.BI, rD = -1; rD <= 1; rD++)
-         for (var LD = -1; LD <= 1; LD++)
-           for (var cD = -1; cD <= 1; cD++)
-             if (0 !== (rD | LD | cD)) {
-               var gD = DD.EB.QB(zD + rD, wD + LD, pD + cD);
-               if (gD) {
-                 KD && (gD.OB = !0, gD.VB = !0, DD.AU.qJ.YI(gD)), sD && !sD.JI.get(rD, LD, cD) && (sD.FX++, sD.JI.set(rD, LD, cD, gD));
-                 var RD = gD.JI.get(-rD, -LD, -cD);
-                 sD && !RD && (gD.FX++, gD.JI.set(-rD, -LD, -cD, sD), 26 === gD.FX && WD(DD, gD)), !sD && RD && (gD.FX--, gD.JI.set(-rD, -LD, -cD, null))
+       function Sp(pp, ip) {
+         var cp;
+         ! function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, Sp);
+         var Op = (cp = Ip.call(this, pp, ip)).props,
+           op = Op.isActive,
+           xp = Op.attributeName,
+           Lp = Op.from,
+           Yp = Op.to,
+           Dp = Op.steps,
+           Ap = Op.children,
+           Pp = Op.duration;
+         if (cp.handleStyleChange = cp.handleStyleChange.bind(Ji(cp)), cp.changeStyle = cp.changeStyle.bind(Ji(cp)), !op || Pp <= 0) return cp.state = {
+           style: {}
+         }, "function" === typeof Ap && (cp.state = {
+ ... (52 more added lines; see GitHub link above)
```

#### 135. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3476-L3511` → after: `L3393-L3550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3393-L3550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3393-L3550) · [Before (L3476-L3511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3476-L3511)

```diff
-     }
- 
-     function YD(DD, zD) {
-       var wD = DD * DD,
-         pD = zD * zD;
-       return DD === zD ? (DD, zD, pD) => DD * DD + zD * zD + pD * pD <= wD : DD > zD ? (DD, pD, sD) => !(Math.abs(pD) > zD) && DD * DD + pD * pD + sD * sD <= wD : (DD, zD, sD) => {
-         var KD = DD * DD + sD * sD;
-         return !(KD > wD) && KD + zD * zD <= pD
-       }
-     }
- 
-     function HD(DD, zD, wD, pD) {
-       var sD = 0,
-         KD = 0,
-         rD = 0,
-         LD = 0,
- ... (20 more removed lines; see GitHub link above)
+         }
+       }, {
+         key: "componentWillUnmount",
+         value: function() {
+           this.mounted = !1;
+           var pp = this.props.onAnimationEnd;
+           this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), pp && pp()
+         }
+       }, {
+         key: "handleStyleChange",
+         value: function(pp) {
+           this.changeStyle(pp)
+         }
+       }, {
+         key: "changeStyle",
+         value: function(pp) {
+ ... (142 more added lines; see GitHub link above)
```

#### 136. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3513-L3514` → after: `L3552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3552) · [Before (L3513-L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3513-L3514)

```diff
-     var qD = (0, KD.j)(0, "world ticks:", 1),
-       Dz = () => {}
+     const Ti = Ni
```

#### 137. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3516` → after: `L3554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3554) · [Before (L3516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3516)

```diff
-   38165: (DD, zD, wD) => {
+   6497: (pp, ip, cp) => {
```

#### 138. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3518` → after: `L3556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3556) · [Before (L3518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3518)

```diff
-       d: () => RD
+       c: () => hp
```

#### 139. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3520-L3601` → after: `L3558-L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3558-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3558-L3603) · [Before (L3520-L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3520-L3601)

```diff
-     var pD = wD(38172),
-       sD = wD(37982),
-       KD = wD(3688),
-       rD = wD(3757),
-       LD = wD(36711),
-       cD = wD(2769),
-       gD = wD(38159);
-     let RD;
-     var AD;
-     (AD = RD || (RD = {})).swapPosClient = function(DD, zD, wD) {
-       const sD = DD.swapPos(zD, wD);
-       if (sD) {
-         const DD = (0, cD.b)().client.inventoryPrediction.record(gD.b.swap(zD, wD));
-         (0, KD.sendColyMessage)(rD.Wj, {
-           LR: zD,
-           cR: wD,
- ... (66 more removed lines; see GitHub link above)
+     var Op, op = cp(62),
+       Ip = cp(5203),
+       Sp = cp(6256),
+       xp = cp(5405),
+       Lp = cp.n(xp),
+       Yp = cp(6297),
+       Dp = cp.n(Yp),
+       Ap = cp(5575),
+       Pp = cp.n(Ap),
+       Wp = cp(5319),
+       yp = cp.n(Wp),
+       Up = cp(6322),
+       wp = cp.n(Up),
+       vp = cp(6493),
+       tp = cp(6238),
+       Hp = cp(6103),
+ ... (30 more added lines; see GitHub link above)
```

#### 140. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3629-L3630` → after: `L3608-L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3608-L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3608-L3615) · [Before (L3629-L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3629-L3630)

```diff
-     function rD(DD, zD, wD) {
-       return new sD.Color3(DD / 255, zD / 255, wD / 255)
+     function Ep() {
+       return Ep = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, Ep.apply(this, arguments)
```

#### 141. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3633-L3634` → after: `L3618-L3626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3618-L3626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3618-L3626) · [Before (L3633-L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3633-L3634)

```diff
-     function LD(DD, zD, wD, pD) {
-       return new sD.e(DD / 255, zD / 255, wD / 255, pD)
+     function Xp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
```

#### 142. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3638-L3642` → after: `L3630-L3638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3630-L3638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3630-L3638) · [Before (L3638-L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3638-L3642)

```diff
-       return rD(DD[0], DD[1], DD[2])
-     }
- 
-     function gD(DD) {
-       return LD(DD[0], DD[1], DD[2], DD[3])
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Xp(Object(cp), !0).forEach((function(ip) {
+           fp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Xp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 143. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3646-L3659` → after: `L3642-L3644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3642-L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3642-L3644) · [Before (L3646-L3659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3646-L3659)

```diff
-       if ((0, pD.B)(zD.Hs) || (DD.direction1._x = zD.Hs[0], DD.direction1._y = zD.Hs[1], DD.direction1._z = zD.Hs[2]), (0, pD.B)(zD.qs) || (DD.direction2._x = zD.qs[0], DD.direction2._y = zD.qs[1], DD.direction2._z = zD.qs[2]), (0, pD.B)(zD.DK) || (DD.minSize = zD.DK), (0, pD.B)( … [truncated]
-         var wD;
-         const pD = zD.pK,
-           sD = null !== (wD = DD.getColorGradients()) && void 0 !== wD ? wD : [];
-         if (sD.length === pD.length)
-           for (let DD = 0; DD < pD.length; DD++) sD[DD].gradient = pD[DD].timeFraction, sD[DD].color1 = gD(pD[DD].minColor), sD[DD].color2 = gD(pD[DD].maxColor);
-         else {
-           for (const zD of [...sD]) DD.removeColorGradient(zD.gradient);
-           for (const zD of pD) DD.addColorGradient(zD.timeFraction, gD(zD.minColor), gD(zD.maxColor))
-         }
-       }
-       if (!(0, pD.B)(zD.wK)) {
-         const wD = DD.isEmitting();
-         zD.wK && !wD ? DD.start() : !zD.wK && wD && DD.stop()
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, bp(Op.key), Op)
```

#### 144. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3663-L3665` → after: `L3648-L3672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3648-L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3648-L3672) · [Before (L3663-L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3663-L3665)

```diff
-     function AD(DD, zD) {
-       const wD = DD.CU;
-       zD.worldOffset.x = -wD[0], zD.worldOffset.y = -wD[1], zD.worldOffset.z = -wD[2]
+     function Jp(pp, ip, cp) {
+       return ip = Np(ip),
+         function(pp, ip) {
+           if (ip && ("object" === Mp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, Bp() ? Reflect.construct(ip, cp || [], Np(pp).constructor) : ip.apply(pp, cp))
+     }
+ 
+     function Bp() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+ ... (9 more added lines; see GitHub link above)
```

#### 145. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3669-L3670` → after: `L3676-L3678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3676-L3678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3676-L3678) · [Before (L3669-L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3669-L3670)

```diff
-       const wD = DD.maxEmitBox.x - DD.minEmitBox.x;
-       DD.minEmitBox.x = zD[0], DD.minEmitBox.y = zD[1], DD.minEmitBox.z = zD[2], DD.maxEmitBox.x = zD[0] + wD, DD.maxEmitBox.y = zD[1] + wD, DD.maxEmitBox.z = zD[2] + wD
+       return Tp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Tp(pp, ip)
```

#### 146. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3674` → after: `L3682-L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3682-L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3682-L3687) · [Before (L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3674)

```diff
-       DD.minEmitBox.x = zD[0], DD.minEmitBox.y = zD[1], DD.minEmitBox.z = zD[2], DD.maxEmitBox.x = wD[0], DD.maxEmitBox.y = wD[1], DD.maxEmitBox.z = wD[2]
+       return (ip = bp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 147. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3690-L3691` → after: `L3690-L3701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3690-L3701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3690-L3701) · [Before (L3690-L3691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3690-L3691)

```diff
-     function AD(DD, zD, wD) {
-       return `${DD}|${zD}|${wD}`
+     function bp(pp) {
+       var ip = function(pp, ip) {
+         if ("object" != Mp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != Mp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
+         }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Mp(ip) ? ip : ip + ""
```

#### 148. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3693-L3716` → after: `L3703-L3704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3703-L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3703-L3704) · [Before (L3693-L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3693-L3716)

```diff
-     const UD = new class {
-       constructor() {
-         this.Cs = new Map
-       }
-       init() {
-         (0, cD.onGameResetOnce)((() => {
-           this.removeAll()
-         }))
-       }
-       has(DD, zD, wD) {
-         if (0 === this.Cs.size) return !1;
-         const pD = this.Cs.get(AD(DD, zD, wD));
-         return void 0 !== pD && null === pD.disposeAt
-       }
-       forEachCell(DD) {
-         for (const {
- ... (8 more removed lines; see GitHub link above)
+     var hp = function(pp) {
+       function ip() {
```

#### 149. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3718-L3802` → after: `L3706-L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3706-L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3706-L3722) · [Before (L3718-L3802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3718-L3802)

```diff
-         0 !== this.Cs.size && !1 === (null === (pD = this.Cs.get(AD(DD, zD, wD))) || void 0 === pD ? void 0 : pD.confirmed) && this.remove(DD, zD, wD)
-       }
-       applyServerUpdate(DD) {
-         let {
-           Cs: zD,
-           sw: wD
-         } = DD;
-         for (const pD of wD) this.remove(pD[0], pD[1], pD[2]);
-         for (const {
-             xs: pD,
-             Ts: sD,
-             bs: KD,
-             ds: rD
-           }
-           of zD) this.add(pD, sD, KD, rD, !0)
-       }
- ... (69 more removed lines; see GitHub link above)
+         ! function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip);
+         for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
+         return fp(pp = Jp(this, ip, [].concat(Op)), "state", {
+           isAnimationFinished: !0
+         }), fp(pp, "id", (0, jp.J)("recharts-area-")), fp(pp, "handleAnimationEnd", (function() {
+           var ip = pp.props.onAnimationEnd;
+           pp.setState({
+             isAnimationFinished: !0
+           }), Lp()(ip) && ip()
+         })), fp(pp, "handleAnimationStart", (function() {
+           var ip = pp.props.onAnimationStart;
+           pp.setState({
+             isAnimationFinished: !1
+           }), Lp()(ip) && ip()
+ ... (1 more added lines; see GitHub link above)
```

#### 150. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3804-L3908` → after: `L3724-L3758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3724-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3724-L3758) · [Before (L3804-L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3804-L3908)

```diff
-     }
-   },
-   38139: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => pz
-     });
-     var pD = wD(197),
-       sD = wD(1245),
-       KD = wD(4257),
-       rD = wD(38195),
-       LD = wD(616),
-       cD = wD(351),
-       gD = wD(9198),
-       RD = wD(38180),
-       AD = wD(9228),
-       UD = wD(38130),
- ... (89 more removed lines; see GitHub link above)
+       return function(pp, ip) {
+         if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+         pp.prototype = Object.create(ip && ip.prototype, {
+           constructor: {
+             value: pp,
+             writable: !0,
+             configurable: !0
+           }
+         }), Object.defineProperty(pp, "prototype", {
+           writable: !1
+         }), ip && Tp(pp, ip)
+       }(ip, pp), cp = ip, Op = [{
+         key: "renderDots",
+         value: function(pp, cp, Op) {
+           var Ip = this.props.isAnimationActive,
+             Sp = this.state.isAnimationFinished;
+ ... (19 more added lines; see GitHub link above)
```

#### 151. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L3910-L4048` → after: `L3760-L3763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3760-L3763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3760-L3763) · [Before (L3910-L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L3910-L4048)

```diff
-             return sD
-           }
-         },
-         "Ice Bridge": {
-           block: "Melting Ice",
-           makeGetPositions: VD
-         },
-         "Maple Planks Bridge": {
-           block: "Maple Wood Planks",
-           makeGetPositions: VD
-         },
-         "Messy Stone Bridge": {
-           block: "Messy Stone",
-           makeGetPositions: VD
-         },
-         ...cD.Ec.reduce(((DD, zD) => (DD[`${zD} Popup Tower`] = {
- ... (123 more removed lines; see GitHub link above)
+               return ip.renderDotItem(Lp, Op)
+             })),
+             yp = {
+               clipPath: pp ? "url(#clipPath-".concat(cp ? "" : "dots-").concat(Op, ")") : null
```

#### 152. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4050-L4179` → after: `L3765-L3767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3765-L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3765-L3767) · [Before (L4050-L4179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4050-L4179)

```diff
-             (0, BD.b)().jT(...DD, wD);
-             const zD = this.bloxd.client.inventoryPrediction.predict(this.AU.NJ.creative ? null : bD.b.replace(this.selectedSlot, this.lE.name, "Bucket", {}));
-             return (0, nD.sendColyMessage)(MD.xi, {
-               nR: DD,
-               Qr: zD
-             }), OD.c.play((0, JD.g)("bucketEmpty"), 1), {
-               tookAction: !0,
-               preventAttack: !0
-             }
-           }
-           return {
-             tookAction: !1,
-             preventAttack: !1
-           }
-         }, this.AU = (0, BD.e)(), this.bloxd = (0, BD.b)(), this.inven = this.AU.yJ.jzD(this.AU.vW), this.selectedSlot = this.inven.getSelectedSlotIndex()
-       }
- ... (114 more removed lines; see GitHub link above)
+           return op.createElement(Hp.b, Ep({
+             className: "recharts-area-dots"
+           }, yp), Wp)
```

#### 153. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4181-L4222` → after: `L3769-L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3769-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3769-L3789) · [Before (L4181-L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4181-L4222)

```diff
-       }
-       checkBowlHarvest() {
-         if (!this.lE) return;
-         if ("Bowl" !== this.lE.name && (!this.lE.name.includes("Bowl of Cranberries") || "Bowl of Cranberries" === this.lE.name)) return;
-         if (this.targetBlock !== (0, gD.p)("Cranberries_stage2")) return;
-         if (!this.bloxd.playerCanChangePos(this.AU.vW, ...this.br)) return;
-         const DD = (0, gD.p)("Cranberries_stage1");
-         let zD = this.selectedSlot;
-         if ("Bowl" === this.lE.name && this.lE.amount > 1 && (zD = this.inven.getFreeInventoryPosition(), null === zD)) return;
-         this.bloxd.jT(...this.br, DD);
-         const wD = this.bloxd.getBowlItemName("Bowl of Cranberries", this.bloxd.getNumItemsInBowl(this.lE.name) + 1),
-           pD = this.bloxd.client.inventoryPrediction.predict(bD.b.fillContainer(this.selectedSlot, this.lE.name, wD, zD));
-         return (0, nD.sendColyMessage)(MD.Ah, {
-           DA: this.br,
-           lr: DD,
-           vr: zD,
- ... (26 more removed lines; see GitHub link above)
+       }, {
+         key: "renderHorizontalRect",
+         value: function(pp) {
+           var ip = this.props,
+             cp = ip.baseLine,
+             Op = ip.points,
+             Ip = ip.strokeWidth,
+             Sp = Op[0].x,
+             xp = Op[Op.length - 1].x,
+             Lp = pp * Math.abs(Sp - xp),
+             Yp = Dp()(Op.map((function(pp) {
+               return pp.y || 0
+             })));
+           return (0, jp.D)(cp) && "number" === typeof cp ? Yp = Math.max(cp, Yp) : cp && Array.isArray(cp) && cp.length && (Yp = Math.max(Dp()(cp.map((function(pp) {
+             return pp.y || 0
+           }))), Yp)), (0, jp.D)(Yp) ? op.createElement("rect", {
+ ... (5 more added lines; see GitHub link above)
```

#### 154. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4224-L4242` → after: `L3791-L3811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3791-L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3791-L3811) · [Before (L4224-L4242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4224-L4242)

```diff
-         return "Shear" === pD ? ((0, nD.sendColyMessage)(MD.xh, {
-           jr: this.hitEId,
-           vr: null,
-           Qr: this.bloxd.client.inventoryPrediction.predict(null)
-         }), {
-           tookAction: !0,
-           preventAttack: !0
-         }) : void 0
-       }
-       checkMobInteraction() {
-         var DD, zD;
-         if (!this.hitEId) return;
-         const wD = null === (DD = this.AU.yJ.uzD(this.hitEId)) || void 0 === DD ? void 0 : DD.lifeformType;
-         if (!LD.n.includes(wD)) return;
-         this.sendAltAction(MD.pg), this.sendAltAction(MD.sg);
-         const pD = (0, ID.j)(wD, null === (zD = this.lE) || void 0 === zD ? void 0 : zD.name);
- ... (3 more removed lines; see GitHub link above)
+       }, {
+         key: "renderVerticalRect",
+         value: function(pp) {
+           var ip = this.props,
+             cp = ip.baseLine,
+             Op = ip.points,
+             Ip = ip.strokeWidth,
+             Sp = Op[0].y,
+             xp = Op[Op.length - 1].y,
+             Lp = pp * Math.abs(Sp - xp),
+             Yp = Dp()(Op.map((function(pp) {
+               return pp.x || 0
+             })));
+           return (0, jp.D)(cp) && "number" === typeof cp ? Yp = Math.max(cp, Yp) : cp && Array.isArray(cp) && cp.length && (Yp = Math.max(Dp()(cp.map((function(pp) {
+             return pp.x || 0
+           }))), Yp)), (0, jp.D)(Yp) ? op.createElement("rect", {
+ ... (5 more added lines; see GitHub link above)
```

#### 155. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4244-L4256` → after: `L3813-L3816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3813-L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3813-L3816) · [Before (L4244-L4256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4244-L4256)

```diff
-       }
-       checkNameTag() {
-         var DD, zD;
-         if ("Name Tag" === (null === (DD = this.lE) || void 0 === DD ? void 0 : DD.name)) {
-           if (this.hitEId) {
-             var wD;
-             const DD = null === (wD = this.AU.yJ.uzD(this.hitEId)) || void 0 === wD ? void 0 : wD.lifeformType;
-             if (LD.n.includes(DD)) return
-           }
-           return ED.l.KG("EditNameTag", null !== (zD = this.lE.attributes.customAttributes.text) && void 0 !== zD ? zD : ""), {
-             tookAction: !0,
-             preventAttack: !0
-           }
+       }, {
+         key: "renderClipRect",
+         value: function(pp) {
+           return "vertical" === this.props.layout ? this.renderVerticalRect(pp) : this.renderHorizontalRect(pp)
```

#### 156. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4258-L4267` → after: `L3818-L3852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3818-L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3818-L3852) · [Before (L4258-L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4258-L4267)

```diff
-       }
-       checkBook() {
-         var DD, zD;
-         if ("Book" === (null === (DD = this.lE) || void 0 === DD ? void 0 : DD.name)) return ED.l.KG("EditBook", {
-           pages: (0, sD.V)(this.lE.attributes.customAttributes.pages),
-           title: null !== (zD = this.lE.attributes.customDisplayName) && void 0 !== zD ? zD : "Title",
-           isPublished: !!this.lE.attributes.customDescription
-         }), {
-           tookAction: !0,
-           preventAttack: !0
+       }, {
+         key: "renderAreaStatically",
+         value: function(pp, ip, cp, Op) {
+           var Ip = this.props,
+             Sp = Ip.layout,
+             xp = Ip.type,
+             Lp = Ip.stroke,
+             Yp = Ip.connectNulls,
+             Dp = Ip.isRange,
+             Ap = (Ip.ref, Cp(Ip, Rp));
+           return op.createElement(Hp.b, {
+             clipPath: cp ? "url(#clipPath-".concat(Op, ")") : null
+           }, op.createElement(vp.d, Ep({}, (0, mp.d)(Ap, !0), {
+             points: pp,
+             connectNulls: Yp,
+             type: xp,
+ ... (19 more added lines; see GitHub link above)
```

#### 157. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4269-L4295` → after: `L3854-L3912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3854-L3912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3854-L3912) · [Before (L4269-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4269-L4295)

```diff
-       }
-       checkSwapArmour() {
-         var DD;
-         const zD = (0, cD.Db)(null === (DD = this.lE) || void 0 === DD ? void 0 : DD.name);
-         if (!zD) return;
-         const wD = (0, cD.Ab)(zD),
-           pD = this.AU.yJ.dzD(this.AU.vW);
-         return eD.d.swapPosClient(pD, wD, this.selectedSlot), {
-           tookAction: !1,
-           preventAttack: !1
-         }
-       }
-       checkToolInteractions() {
-         var DD, zD;
-         if (!this.targetBlock) return;
-         const wD = this.bloxd.getMetaInfo(this.targetBlock).rootName,
- ... (11 more removed lines; see GitHub link above)
+       }, {
+         key: "renderAreaWithAnimation",
+         value: function(pp, ip) {
+           var cp = this,
+             Op = this.props,
+             Ip = Op.points,
+             xp = Op.baseLine,
+             Lp = Op.isAnimationActive,
+             Yp = Op.animationBegin,
+             Dp = Op.animationDuration,
+             Ap = Op.animationEasing,
+             Wp = Op.animationId,
+             Up = this.state,
+             wp = Up.prevPoints,
+             vp = Up.prevBaseLine;
+           return op.createElement(Sp.c, {
+ ... (43 more added lines; see GitHub link above)
```

#### 158. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4297-L4368` → after: `L3914-L3919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3914-L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3914-L3919) · [Before (L4297-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4297-L4368)

```diff
-           }
-           return "cuttable" === pD && cD.sc.includes((0, gD.h)(this.targetBlock)) ? (this.sendAltAction(MD.ng), (0, BD.b)().jT(...this.br, (0, gD.p)("Tilled Soil")), {
-             tookAction: !0,
-             preventAttack: !1
-           }) : void 0
-         }
-       }
-       checkLuckyItems() {
-         var DD, zD, wD;
-         if (!TD.includes(null === (DD = this.lE) || void 0 === DD ? void 0 : DD.name)) return;
-         return (null === (zD = null === (wD = SD[this.lE.name]) || void 0 === wD ? void 0 : wD.call(SD, this.AU)) || void 0 === zD || zD) && this.sendConsumableAltAction(this.AU.NJ.creative ? null : bD.b.remove(this.selectedSlot, 1, this.lE.name)), {
-           tookAction: !0,
-           preventAttack: !1
-         }
-       }
-       checkVehicleMeshInteraction() {
- ... (56 more removed lines; see GitHub link above)
+             return op.createElement(Hp.b, null, op.createElement("defs", null, op.createElement("clipPath", {
+               id: "animationClipPath-".concat(ip)
+             }, cp.renderClipRect(Sp))), op.createElement(Hp.b, {
+               clipPath: "url(#animationClipPath-".concat(ip, ")")
+             }, cp.renderAreaStatically(Ip, xp, pp, ip)))
+           }))
```

#### 159. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4370-L4403` → after: `L3921-L3932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3921-L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3921-L3932) · [Before (L4370-L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4370-L4403)

```diff
-       }
-       checkInteractableBlocks() {
-         var DD;
-         if (!this.targetBlock) return;
-         const zD = this.bloxd.getMetaInfo(this.targetBlock).rootName,
-           wD = this.bloxd.playerCanChangePos(this.AU.vW, ...this.br);
-         var sD;
-         if ("Board" === zD && wD && !UD.singleLineBoardActions.has(null === (sD = this.bloxd.blockDataOwner.getBlockData(...this.br)) || void 0 === sD ? void 0 : sD.persisted.shared.text.split("\n")[0].toLowerCase())) return ED.l.KG("EditBoard", {
-           pos: this.br
-         }), {
-           tookAction: !0,
-           preventAttack: !1,
-           once: !0
-         };
-         if ((0, RD.f)(this.targetBlock) && wD && !AD.k.includes(null === (DD = this.lE) || void 0 === DD ? void 0 : DD.name) && !this.AU.yJ.TzD(this.AU.vW).crouching) return ED.l.KG("EditBoard", {
-           pos: this.br
- ... (18 more removed lines; see GitHub link above)
+       }, {
+         key: "renderArea",
+         value: function(pp, ip) {
+           var cp = this.props,
+             Op = cp.points,
+             op = cp.baseLine,
+             Ip = cp.isAnimationActive,
+             Sp = this.state,
+             xp = Sp.prevPoints,
+             Lp = Sp.prevBaseLine,
+             Yp = Sp.totalLength;
+           return Ip && Op && Op.length && (!xp && Yp > 0 || !wp()(xp, Op) || !wp()(Lp, op)) ? this.renderAreaWithAnimation(pp, ip) : this.renderAreaStatically(Op, op, pp, ip)
```

#### 160. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4405-L4459` → after: `L3934-L3999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R3934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L3934-L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L3934-L3999) · [Before (L4405-L4459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4405-L4459)

```diff
-         if ("Custom Lobby Block" === zD && wD) return ED.l.KG("EditCustomLobbyBlock", {
-           pos: this.br
-         }), {
-           tookAction: !0,
-           preventAttack: !1,
-           once: !0
-         };
-         if ((0, ID.A)(zD, wD)) return ED.l.KG("OpenIronChest", {
-           pos: this.br
-         }), {
-           tookAction: !0,
-           preventAttack: !1,
-           once: !0
-         };
-         const KD = (0, WD.c)(zD);
-         if (KD) return this.AU.NJ.canCraft ? (ED.l.KG("toggleMenu", `inventory|${KD.name}`), "Enchanting Table" === KD.name && ED.l.KG("enchantingTable", {
- ... (39 more removed lines; see GitHub link above)
+       }, {
+         key: "render",
+         value: function() {
+           var pp, ip = this.props,
+             cp = ip.hide,
+             Op = ip.dot,
+             Sp = ip.points,
+             xp = ip.className,
+             Lp = ip.top,
+             Yp = ip.left,
+             Dp = ip.xAxis,
+             Ap = ip.yAxis,
+             Wp = ip.width,
+             yp = ip.height,
+             Up = ip.isAnimationActive,
+             wp = ip.id;
+ ... (50 more added lines; see GitHub link above)
```

#### 161. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4461` → after: `L4001-L4054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4001-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4001-L4054) · [Before (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4461)

```diff
-         if (zD.includes("Bookshelf")) {
+       }], Op && Qp(cp.prototype, Op), xp && Qp(cp, xp), Object.defineProperty(cp, "prototype", {
+         writable: !1
+       }), cp;
+       var cp, Op, xp
+     }(op.PureComponent);
+     Op = hp, fp(hp, "displayName", "Area"), fp(hp, "defaultProps", {
+       stroke: "#3182bd",
+       fill: "#3182bd",
+       fillOpacity: .6,
+       xAxisId: 0,
+       yAxisId: 0,
+       legendType: "line",
+       connectNulls: !1,
+       points: [],
+       dot: !1,
+       activeDot: !0,
+ ... (38 more added lines; see GitHub link above)
```

#### 162. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4463-L4480` → after: `L4056-L4079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4056-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4056-L4079) · [Before (L4463-L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4463-L4480)

```diff
-           const DD = this.bloxd.getMetaInfo(this.targetBlock).books;
-           if (null !== DD && DD < pD.f.bookshelfBookCount && "Book" === (null === (rD = this.lE) || void 0 === rD ? void 0 : rD.name)) {
-             this.AU.yJ.jzD(this.AU.vW).setItemSlot(this.selectedSlot, "Air", null)
-           }
-           return this.sendAltAction(MD.Xf), {
-             tookAction: !0,
-             preventAttack: !1
-           }
-         }
-         if (zD.includes("Mailbox")) {
-           var LD, cD, fD;
-           const DD = null === (LD = this.bloxd.blockDataOwner.getBlockData(...this.br)) || void 0 === LD || null === (cD = LD.persisted) || void 0 === cD ? void 0 : cD.mail;
-           if (void 0 !== DD && DD < pD.f.mailboxBookCount && "Book" === (null === (fD = this.lE) || void 0 === fD ? void 0 : fD.name)) {
-             this.AU.yJ.jzD(this.AU.vW).setItemSlot(this.selectedSlot, "Air", null)
-           }
-           return this.sendAltAction(MD.Xf), {
- ... (2 more removed lines; see GitHub link above)
+           wp ? cp = Ap[Pp + ip] : (cp = (0, kp.fb)(pp, Dp), Array.isArray(cp) ? Hp = !0 : cp = [vp, cp]);
+           var Op = null == cp[1] || wp && null == (0, kp.fb)(pp, Dp);
+           return tp ? {
+             x: (0, kp.F)({
+               axis: Ip,
+               ticks: xp,
+               bandSize: Yp,
+               entry: pp,
+               index: ip
+             }),
+             y: Op ? null : Sp.scale(cp[1]),
+             value: cp,
+             payload: pp
+           } : {
+             x: Op ? null : Ip.scale(cp[1]),
+             y: (0, kp.F)({
+ ... (8 more added lines; see GitHub link above)
```

#### 163. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4482` → after: `L4081-L4108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4081-L4108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4081-L4108) · [Before (L4482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4482)

```diff
-         }
+         }));
+       return ip = wp || Hp ? dp.map((function(pp) {
+         var ip = Array.isArray(pp.value) ? pp.value[0] : null;
+         return tp ? {
+           x: pp.x,
+           y: null != ip && null != pp.y ? Sp.scale(ip) : null
+         } : {
+           x: null != ip ? Ip.scale(ip) : null,
+           y: pp.y
+         }
+       })) : tp ? Sp.scale(vp) : Ip.scale(vp), lp({
+         points: dp,
+         baseLine: ip,
+         layout: Up,
+         isRange: Hp
+       }, yp)
+ ... (12 more added lines; see GitHub link above)
```

#### 164. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4484-L4522` → after: `L4110-L4149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4110-L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4110-L4149) · [Before (L4484-L4522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4484-L4522)

```diff
-       checkPlantHarvest() {
-         if (!this.targetBlock) return;
-         const DD = this.bloxd.getMetaInfo(this.targetBlock).rootName;
-         return "Cranberries_stage2" === DD ? (this.bloxd.jT(...this.br, (0, gD.p)("Cranberries_stage1")), this.sendAltAction(MD.kg), {
-           tookAction: !0,
-           preventAttack: !1
-         }) : "Cotton_stage3" === DD ? (this.bloxd.jT(...this.br, (0, gD.p)("Cotton_stage2")), this.sendAltAction(MD.kg), {
-           tookAction: !0,
-           preventAttack: !1
-         }) : this.targetBlock === (0, gD.p)("Chili Pepper Plant|FreshlyGrown") ? (this.bloxd.jT(...this.br, (0, gD.p)("Chili Pepper Plant_stage2")), this.sendAltAction(MD.kg), {
-           tookAction: !0,
-           preventAttack: !1
-         }) : this.targetBlock === (0, gD.p)("Chili Pepper Plant|Lava|FreshlyGrown") ? (this.bloxd.jT(...this.br, (0, gD.p)("Chili Pepper Plant_stage2|Lava")), this.sendAltAction(MD.kg), {
-           tookAction: !0,
-           preventAttack: !1
-         }) : this.targetBlock === (0, gD.p)("Corn Plant|FreshlyGrown") ? (this.bloxd.jT(...this.br, (0, gD.p)("Corn Plant_stage3")), this.sendAltAction(MD.kg), {
- ... (23 more removed lines; see GitHub link above)
+       return cp
+     }))
+   },
+   6402: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Gp
+     });
+     var Op = cp(62),
+       op = cp(5203),
+       Ip = cp(6256),
+       Sp = cp(6322),
+       xp = cp.n(Sp),
+       Lp = cp(5575),
+       Yp = cp.n(Lp),
+       Dp = cp(6103),
+       Ap = cp(6332),
+ ... (24 more added lines; see GitHub link above)
```

#### 165. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4525-L4551` → after: `L4163-L4173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4163-L4173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4163-L4173) · [Before (L4525-L4551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4525-L4551)

```diff
-       checkMiscBlocks() {
-         if (this.targetBlock) return (0, BD.b)().getItemStat(this.AU.vW, this.targetBlock, "altActionable") ? (this.sendAltAction(MD.sg), {
-           tookAction: !0,
-           preventAttack: !1
-         }) : void 0
-       }
-       sendConsumableAltAction(DD) {
-         const zD = this.bloxd.client.inventoryPrediction.predict(DD);
-         (0, nD.sendColyMessage)(MD._f, {
-           ...this.altActionPayload(),
-           Qr: zD
-         })
-       }
-       sendAltAction(DD) {
-         (0, nD.sendColyMessage)(DD, this.altActionPayload()), DD === MD.sg && this.triggerClientsideGameCallback()
-       }
- ... (11 more removed lines; see GitHub link above)
+       return cp
+     }
+ 
+     function Rp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? mp(Object(cp), !0).forEach((function(ip) {
+           qp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : mp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 166. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4553-L4555` → after: `L4175-L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4175-L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4175-L4212) · [Before (L4553-L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4553-L4555)

```diff
-       triggerClientsideGameCallback() {
-         var DD, zD, wD;
-         this.bloxd.client.triggerGameCallback("onPlayerAltAction", this.AU.vW, null === (DD = this.br) || void 0 === DD ? void 0 : DD[0], null === (zD = this.br) || void 0 === zD ? void 0 : zD[1], null === (wD = this.br) || void 0 === wD ? void 0 : wD[2], this.targetBlock ? (0, g … [truncated]
+       return pp
+     }
+ 
+     function qp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != jp(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != jp(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == jp(ip) ? ip : ip + ""
+ ... (22 more added lines; see GitHub link above)
```

#### 167. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4561` → after: `L4217-L4239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4217-L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4217-L4239) · [Before (L4561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4561)

```diff
-     function rz() {}
+     function Cp(pp, ip) {
+       var cp = pp.x,
+         Op = pp.y,
+         op = Mp(pp, ep),
+         Ip = "".concat(cp),
+         Sp = parseInt(Ip, 10),
+         xp = "".concat(Op),
+         Lp = parseInt(xp, 10),
+         Yp = "".concat(ip.height || op.height),
+         Dp = parseInt(Yp, 10),
+         Ap = "".concat(ip.width || op.width),
+         Pp = parseInt(Ap, 10);
+       return Rp(Rp(Rp(Rp(Rp({}, ip), op), Sp ? {
+         x: Sp
+       } : {}), Lp ? {
+         y: Lp
+ ... (7 more added lines; see GitHub link above)
```

#### 168. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4563-L4719` → after: `L4241-L4271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4241-L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4241-L4271) · [Before (L4563-L4719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4563-L4719)

```diff
-     function Lz() {
-       Lz = function() {}
-     }((...DD) => {
-       Lz(DD[Kz[1]] = Kz[0], DD[Kz[12]] = Kz[0], sz = (...zD) => {
-         if (Lz(zD[Kz[1]] = Kz[9], zD[Kz[3]] = zD[Kz[0]].getItemId(null === zD[Kz[2]] || void 0 === zD[Kz[2]] ? void 0 : zD[Kz[2]].name), zD[Kz[3]] = zD[Kz[3]] << Kz[4]), (0, nD.isInitSendColyMessage)(nD.sendColyMessage))
-           if (QD.i) {
-             function wD(...DD) {
-               Lz(DD[Kz[1]] = Kz[0], DD[-Kz[8]] = function(...DD) {
-                 for (Lz(DD[Kz[1]] = Kz[2], DD[Kz[3]] = DD[Kz[0]].length, DD[Kz[6]] = [], DD[Kz[4]] = Kz[0]), DD[Kz[5]] = Kz[0]; DD[Kz[5]] < DD[Kz[3]]; DD[Kz[5]]++) DD[Kz[6]].push(DD[Kz[5]] !== Kz[0] && DD[Kz[0]][DD[Kz[5]]] > DD[Kz[0]][DD[Kz[5]] - Kz[2]] ? DD[Kz[6]][DD[Kz[5]] - Kz … [truncated]
-                 for (DD[Kz[7]] = DD[Kz[3]] - Kz[2]; DD[Kz[7]] >= Kz[0]; DD[Kz[7]]--) DD[Kz[7]] !== DD[Kz[3]] - Kz[2] && DD[Kz[0]][DD[Kz[7]]] > DD[Kz[0]][DD[Kz[7]] + Kz[2]] && (DD[Kz[6]][DD[Kz[7]]] = Math.max(DD[Kz[6]][DD[Kz[7]]], DD[Kz[6]][DD[Kz[7]] + Kz[2]] + Kz[2])), DD[Kz[4]]  … [truncated]
-                 return DD[Kz[4]]
-               }, console.log(DD[-Kz[8]]))
-             }
-             "cg49iiY" in rz && wD(), zD[Kz[3]] = zD[Kz[3]] | Kz[5]
-           } else if (nD.butto) {
-           function pD(...DD) {
- ... (141 more removed lines; see GitHub link above)
+     function Ep(pp) {
+       return Op.createElement(dp.d, kp({
+         shapeType: "rectangle",
+         propTransformer: Cp,
+         activeClassName: "recharts-active-bar"
+       }, pp))
+     }
+     var Xp, lp = ["value", "background"];
+ 
+     function Qp(pp) {
+       return Qp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Qp(pp)
+     }
+ ... (15 more added lines; see GitHub link above)
```

#### 169. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4721-L4749` → after: `L4273-L4280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4273-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4273-L4280) · [Before (L4721-L4749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4721-L4749)

```diff
-       getPickEntityResult(DD) {
-         const {
-           hitResult: zD,
-           hitEId: wD,
-           distanceTravelled: pD,
-           globalHitPosition: sD,
-           uZ: rD,
-           meshNodeHit: LD
-         } = this.doPickAction(DD, RD.f.entityInteractReach);
-         return zD === KD.c.HIT_ENTITY ? wD : null
-       }
-       getEntityDistanceAlongRay(DD, zD, wD) {
-         var pD, sD;
-         const KD = null !== (pD = null === (sD = this.AU.yJ.TzD(this._playerEId)) || void 0 === sD ? void 0 : sD.ridingVehicleEId) && void 0 !== pD ? pD : null,
-           rD = this.AU.JzD(DD, null, this.entityRayStart);
-         this.entityRayDirection.set(zD[0], zD[1], zD[2]);
- ... (13 more removed lines; see GitHub link above)
+       return op
+     }
+ 
+     function Bp() {
+       return Bp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
```

#### 170. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4752-L4871` → after: `L4294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4294) · [Before (L4752-L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4752-L4871)

```diff
-       pickEntityMesh(DD) {
-         var zD, wD, pD;
-         if (DD <= 0) return null;
-         this.entityRay.length = DD;
-         const sD = (0, ID.d)(this.AU.wB, this.entityRay),
-           KD = null !== sD && void 0 !== sD && sD.hit ? sD.distance : null,
-           rD = this.AU.wB.Ql.HU(this.entityRayOrigin, this.entityRayDirection, null !== KD && void 0 !== KD ? KD : DD);
-         if (rD) return this.entityHitEId = rD.eId, rD.result.distance;
-         const LD = null !== (zD = null === sD || void 0 === sD || null === (wD = sD.pickedMesh) || void 0 === wD || null === (pD = wD.metadata) || void 0 === pD ? void 0 : pD.eId) && void 0 !== zD ? zD : null;
-         return null === KD || null === LD ? null : (this.entityHitEId = LD, KD)
-       }
-       _attackWasBlocked(DD) {
-         var zD, wD;
-         return !(DD.localHitPosition && null !== (zD = DD.thirdPersonPOVResult) && void 0 !== zD && zD.localHitPosition && this._getVectorsApproxEqual(DD.localHitPosition, DD.thirdPersonPOVResult.localHitPosition) || !(DD.localHitPosition || null !== (wD = DD.thirdPersonPOVResult … [truncated]
-       }
-       _tryDoPick(DD, zD, wD) {
- ... (104 more removed lines; see GitHub link above)
+       return cp
```

#### 171. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4877-L4888` → after: `L4298-L4306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4298-L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4298-L4306) · [Before (L4877-L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4877-L4888)

```diff
-       return typeof OD[DD] === TD[16] ? OD[DD] = function(...DD) {
-         for (SD(DD[TD[12]] = TD[2], DD[TD[5]] = ')LcI3uF8_KlA!QBnS7k=TdO][5|0#h{t6?&(q>:RaH~bXNZV,sj.UmDx+M}zC%w*rPJ@feYW2og<$vp`GE/41;yi"^9', DD[TD[0]] = "" + (DD[TD[1]] || ""), DD[TD[4]] = DD[TD[0]].length, DD[TD[10]] = [], DD[TD[8]] = TD[1], DD[TD[9]] = TD[1], DD[TD[7]] = -TD[ … [truncated]
-           if (DD[TD[6]] = DD[TD[5]].indexOf(DD[TD[0]][DD[TD[3]]]), DD[TD[6]] !== -TD[2])
-             if (DD[TD[7]] < TD[1]) DD[TD[7]] = DD[TD[6]];
-             else {
-               SD(DD[TD[7]] += DD[TD[6]] * TD[17], DD[TD[8]] |= DD[TD[7]] << DD[TD[9]], DD[TD[9]] += (DD[TD[7]] & TD[34]) > TD[35] ? TD[36] : TD[37]);
-               do {
-                 SD(DD[TD[10]].push(DD[TD[8]] & TD[11]), DD[TD[8]] >>= TD[3], DD[TD[9]] -= TD[3])
-               } while (DD[TD[9]] > TD[24]);
-               DD[TD[7]] = -TD[2]
-             } return DD[TD[7]] > -TD[2] && DD[TD[10]].push((DD[TD[8]] | DD[TD[7]] << DD[TD[9]]) & TD[11]), jD(DD[TD[10]])
-       }(JD[DD]) : OD[DD]
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Np(Object(cp), !0).forEach((function(ip) {
+           Fp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Np(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 172. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4891-L4892` → after: `L4309-L4313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4309-L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4309-L4313) · [Before (L4891-L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4891-L4892)

```diff
-     function jD(...DD) {
-       return DD[TD[12]] = TD[2], typeof QD !== TD[16] && QD ? (new QD).decode(new XD(DD[TD[1]])) : typeof VD !== TD[16] && VD ? VD.from(DD[TD[1]]).toString("utf-8") : xD(DD[TD[1]])
+     function fp(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, gp(Op.key), Op)
+       }
```

#### 173. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4895` → after: `L4316-L4326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4316-L4326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4316-L4326) · [Before (L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4895)

```diff
-     function dD() {}
+     function bp(pp, ip, cp) {
+       return ip = ap(ip),
+         function(pp, ip) {
+           if (ip && ("object" === Qp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, hp() ? Reflect.construct(ip, cp || [], ap(pp).constructor) : ip.apply(pp, cp))
+     }
```

#### 174. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4911` → after: `L4330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4330) · [Before (L4911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4911)

```diff
-         SD(DD[TD[2]] = Object, DD[TD[13]][TD[26]]("".__proto__.constructor.name))
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
```

#### 175. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4913-L4957` → after: `L4332-L4335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4332-L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4332-L4335) · [Before (L4913-L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4913-L4957)

```diff
-       DD: for (DD[TD[14]] = TD[1]; DD[TD[14]] < DD[TD[5]][TD[12]]; DD[TD[14]]++) try {
-         for (DD[TD[2]] = DD[TD[5]][DD[TD[14]]](), DD[TD[15]] = TD[1]; DD[TD[15]] < DD[TD[13]][TD[12]]; DD[TD[15]]++)
-           if (typeof DD[TD[2]][DD[TD[13]][DD[TD[15]]]] === TD[16]) continue DD;
-         return DD[TD[2]]
-       } catch (JD) {}
-       return DD[TD[2]] || this
-     }() || {}, QD = ED.TextDecoder, XD = ED.Uint8Array, VD = ED.nI, PD = ED.String || String, CD = ED.Array || Array, xD = function(...DD) {
-       return SD(DD[TD[12]] = TD[1], DD[TD[27]] = new CD(TD[44]), DD[TD[28]] = PD[TD[23]] || PD.fromCharCode, DD[TD[19]] = []),
-         function(...zD) {
-           for (SD(zD[TD[12]] = TD[2], zD[-TD[17]] = TD[18], zD[TD[21]] = TD[18], zD[TD[14]] = zD[TD[1]][TD[12]], DD[TD[19]][TD[12]] = TD[1]), zD[TD[20]] = TD[1]; zD[TD[20]] < zD[TD[14]];) SD(zD[TD[21]] = zD[TD[1]][zD[TD[20]]++], zD[TD[21]] <= TD[43] ? zD[-TD[17]] = zD[TD[21]] : z … [truncated]
-           return DD[TD[19]].join("")
-         }
-     }()), (() => {
-       if (TD[45]) {
-         function DD(...DD) {
-           for (SD(DD[TD[12]] = TD[2], DD[-TD[32]] = 'b`H,lYjhP9zkSeC(sBuAIT~cG2WfZNURE#xy5Jg7OMnr?/o^p)}wVKD0iatQ!LFX{@:mq.1*&$68_4[v+=><3;%]"|d', DD[TD[29]] = "" + (DD[TD[1]] || ""), DD[TD[19]] = DD[TD[29]].length, DD[TD[38]] = [], DD[TD[33]] = TD[1], DD[TD[30]] = TD[1], DD[TD[2 … [truncated]
- ... (29 more removed lines; see GitHub link above)
+       return (hp = function() {
+         return !!pp
+       })()
+     }
```

#### 176. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4959-L4997` → after: `L4337-L4341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4337-L4341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4337-L4341) · [Before (L4959-L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4959-L4997)

```diff
-             function zD(...zD) {
-               return zD[TD[12]] = TD[2], typeof OD[zD[TD[1]]] === TD[16] ? OD[zD[TD[1]]] = DD(JD[zD[TD[1]]]) : OD[zD[TD[1]]]
-             }
-             let pD = {
-               [zD(TD[47])]: zD(124) + "no",
-               [zD(TD[13]) + "im"]: zD(126) + zD(TD[43]),
-               "1f": zD(TD[44]) + "cg",
-               [zD(129) + zD(TD[54])]: zD(TD[64]) + zD(132),
-               [zD(133)]: zD(134),
-               [zD(135) + zD(136) + zD(137)]: zD(TD[41]) + zD(139),
-               [zD(140) + zD(141)]: zD(142),
-               [zD(143)]: zD(TD[63]),
-               [zD(145)]: zD(146),
-               [zD(TD[52]) + "ct"]: "i8"
-             };
-             SD(wD = TD[45], (0, LD[zD(148)])(gD.Oi, pD))
- ... (23 more removed lines; see GitHub link above)
+     function ap(pp) {
+       return ap = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, ap(pp)
+     }
```

#### 177. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L4999-L5024` → after: `L4343-L4347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4343-L4347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4343-L4347) · [Before (L4999-L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L4999-L5024)

```diff
-           function wD(...DD) {
-             switch (DD[TD[12]] = TD[2], ((DD[TD[1]] & TD[50]) !== TD[1]) * TD[2] + (DD[TD[1]] < TD[1]) * TD[29]) {
-               case TD[1]:
-                 return [DD[TD[1]] % TD[50], Math.trunc(DD[TD[1]] / TD[51])];
-               case TD[2]:
-                 return [DD[TD[1]] % TD[50] - TD[50], Math.trunc(DD[TD[1]] / TD[51]) + TD[2]];
-               case TD[29]:
-                 return [((DD[TD[1]] + TD[50]) % TD[50] + TD[50]) % TD[50], Math.round(DD[TD[1]] / TD[51])];
-               case TD[14]:
-                 return [DD[TD[1]] % TD[50], Math.trunc(DD[TD[1]] / TD[51])]
-             }
-           }
-           DD[TD[12]] = TD[1], SD(DD[TD[0]] = zD([TD[29], TD[20]]), DD[-TD[52]] = zD([TD[2], TD[29]]), DD[TD[38]] = DD[TD[0]] + DD[-TD[52]], DD[TD[14]] = DD[TD[38]] - DD[-TD[52]], DD[TD[53]] = DD[TD[14]] * TD[29], DD[TD[7]] = DD[TD[53]] / TD[29], console.log(wD(DD[TD[38]])), conso … [truncated]
-         }(), TD[45]) {
-         function DD(...DD) {
-           for (SD(DD[TD[12]] = TD[2], DD[TD[5]] = 's1^}w<%]9y:`/AnzbkGPUgV,Ou.J!B7(DYN_XL4)>Kp+Z{IR"E2c8|vSFd@Ct~[iHeq3Moa6jT&h*Wmx;lQ=$f?0r5#', DD[TD[29]] = "" + (DD[TD[1]] || ""), DD[TD[19]] = DD[TD[29]].length, DD[TD[20]] = [], DD[TD[33]] = TD[1], DD[TD[54]] = TD[1], DD[TD[7]] … [truncated]
- ... (10 more removed lines; see GitHub link above)
+     function np(pp, ip) {
+       return np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, np(pp, ip)
+     }
```

#### 178. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5026-L5028` → after: `L4349-L4356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4349-L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4349-L4356) · [Before (L5026-L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5026-L5028)

```diff
-         function zD(...zD) {
-           return zD[TD[12]] = TD[2], typeof OD[zD[TD[1]]] === TD[16] ? OD[zD[TD[1]]] = DD(JD[zD[TD[1]]]) : OD[zD[TD[1]]]
-         }
+     function Fp(pp, ip, cp) {
+       return (ip = gp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
+     }
```

#### 179. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5030-L5073` → after: `L4358-L4365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4358-L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4358-L4365) · [Before (L5030-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5030-L5073)

```diff
-         function wD() {
-           module.exports = async (DD = (...DD) => {
-             throw DD[TD[12]] = TD[1], new Error(function(...DD) {
-               return DD[TD[12]] = TD[2], typeof OD[DD[TD[1]]] === TD[16] ? OD[DD[TD[1]]] = function(DD) {
-                 var zD, wD, pD, sD, KD, rD, LD;
-                 for (SD(zD = "" + (DD || ""), wD = zD.length, pD = [], sD = TD[1], KD = TD[1], rD = -TD[2]), LD = TD[1]; LD < wD; LD++) {
-                   var cD = '"XDZe6f8W2A)_UY[yaPFsm/Q<+(%!x$nJ,*I#bVcouB~d7p|]TvwtM`z@>H;=&E4iN{G?C9hRg}5S10jOLkq3K.:^lr'.indexOf(zD[LD]);
-                   if (cD !== -TD[2])
-                     if (rD < TD[1]) rD = cD;
-                     else {
-                       SD(rD += cD * TD[17], sD |= rD << KD, KD += (rD & TD[34]) > TD[35] ? TD[36] : TD[37]);
-                       do {
-                         SD(pD.push(sD & TD[11]), sD >>= TD[3], KD -= TD[3])
-                       } while (KD > TD[24]);
-                       rD = -TD[2]
-                     }
- ... (28 more removed lines; see GitHub link above)
+     function gp(pp) {
+       var ip = function(pp, ip) {
+         if ("object" != Qp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != Qp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
```

#### 180. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5075-L5105` → after: `L4367-L4472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4367-L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4367-L4472) · [Before (L5075-L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5075-L5105)

```diff
-         zD(152) + "C" in dD && wD();
-         let pD = TD[46];
-         SD(setInterval(((...DD) => {
-           function zD(...DD) {
-             return DD[TD[12]] = TD[2], typeof OD[DD[TD[1]]] === TD[16] ? OD[DD[TD[1]]] = function(...DD) {
-               for (SD(DD[TD[12]] = TD[2], DD[TD[56]] = 'Qdi|XALY+t~7N}BbW_S{2uKRv1CTrflpcms*PDw8xhj)=E#&o(J"$:yUO<FG9q@Zn,>Maz65.^V4k;H/?!]%`3I0e[g', DD[TD[0]] = "" + (DD[TD[1]] || ""), DD[-TD[55]] = DD[TD[0]].length, DD[TD[62]] = [], DD[TD[61]] = TD[1], DD[TD[9]] = TD[1], DD[-TD … [truncated]
-                 if (DD[TD[59]] = DD[TD[56]].indexOf(DD[TD[0]][DD[-TD[58]]]), DD[TD[59]] !== -TD[2])
-                   if (DD[-TD[60]] < TD[1]) DD[-TD[60]] = DD[TD[59]];
-                   else {
-                     SD(DD[-TD[60]] += DD[TD[59]] * TD[17], DD[TD[61]] |= DD[-TD[60]] << DD[TD[9]], DD[TD[9]] += (DD[-TD[60]] & TD[34]) > TD[35] ? TD[36] : TD[37]);
-                     do {
-                       SD(DD[TD[62]].push(DD[TD[61]] & TD[11]), DD[TD[61]] >>= TD[3], DD[TD[9]] -= TD[3])
-                     } while (DD[TD[9]] > TD[24]);
-                     DD[-TD[60]] = -TD[2]
-                   } return DD[-TD[60]] > -TD[2] && DD[TD[62]].push((DD[TD[61]] | DD[-TD[60]] << DD[TD[9]]) & TD[11]), jD(DD[TD[62]])
-             }(JD[DD[TD[1]]]) : OD[DD[TD[1]]]
- ... (15 more removed lines; see GitHub link above)
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Qp(ip) ? ip : ip + ""
+     }
+     var Gp = function(pp) {
+       function ip() {
+         var pp;
+         ! function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip);
+         for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
+         return Fp(pp = bp(this, ip, [].concat(Op)), "state", {
+           isAnimationFinished: !1
+         }), Fp(pp, "id", (0, yp.J)("recharts-bar-")), Fp(pp, "handleAnimationEnd", (function() {
+           var ip = pp.props.onAnimationEnd;
+           pp.setState({
+ ... (90 more added lines; see GitHub link above)
```

#### 181. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5107-L5147` → after: `L4474-L4547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4474-L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4474-L4547) · [Before (L5107-L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5107-L5147)

```diff
-                 return rD > -TD[2] && pD.push((sD | rD << KD) & TD[11]), jD(pD)
-               }
- 
-               function wD(...DD) {
-                 return DD[TD[12]] = TD[2], typeof OD[DD[TD[1]]] === TD[16] ? OD[DD[TD[1]]] = zD(JD[DD[TD[1]]]) : OD[DD[TD[1]]]
-               }
- 
-               function pD(...DD) {
-                 DD[TD[12]] = TD[2];
-                 const zD = {};
-                 for (let wD of DD[TD[1]].replace(/[^w]/g, "").toLowerCase()) zD[wD] = zD[wD] + TD[2] || TD[2];
-                 return zD
-               }
- 
-               function sD(...DD) {
-                 DD[TD[12]] = TD[29];
- ... (25 more removed lines; see GitHub link above)
+                 if ("horizontal" === op) {
+                   var Yp = (0, yp.x)(0, pp.height)(Ip);
+                   return Tp(Tp({}, pp), {}, {
+                     y: pp.y + pp.height - Yp,
+                     height: Yp
+                   })
+                 }
+                 var Dp = (0, yp.x)(0, pp.width)(Ip);
+                 return Tp(Tp({}, pp), {}, {
+                   width: Dp
+                 })
+               }));
+             return Op.createElement(Dp.b, null, pp.renderRectanglesStatically(Sp))
+           }))
+         }
+       }, {
+ ... (58 more added lines; see GitHub link above)
```

#### 182. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5149-L5160` → after: `L4549-L4666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4549-L4666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4549-L4666) · [Before (L5149-L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5149-L5160)

```diff
-             }(), !pD && (0, rD[TD[33]])()) {
-             function wD(...DD) {
-               for (SD(DD[TD[12]] = TD[2], DD[TD[2]] = '`u5*#vz>,:CiB/nH=wDXRm[<GgKYd4)L;A{UN}!~E.%r17l0shqct9oMI+fSJ@e"b26p]jk$(P3V_O?xTa&|Z^WyFQ8', DD[TD[29]] = "" + (DD[TD[1]] || ""), DD[TD[19]] = DD[TD[29]].length, DD[-TD[65]] = [], DD[TD[33]] = TD[1], DD[TD[63]] = TD[1], DD[T … [truncated]
-                 if (DD[TD[64]] = DD[TD[2]].indexOf(DD[TD[29]][DD[TD[31]]]), DD[TD[64]] !== -TD[2])
-                   if (DD[TD[24]] < TD[1]) DD[TD[24]] = DD[TD[64]];
-                   else {
-                     SD(DD[TD[24]] += DD[TD[64]] * TD[17], DD[TD[33]] |= DD[TD[24]] << DD[TD[63]], DD[TD[63]] += (DD[TD[24]] & TD[34]) > TD[35] ? TD[36] : TD[37]);
-                     do {
-                       SD(DD[-TD[65]].push(DD[TD[33]] & TD[11]), DD[TD[33]] >>= TD[3], DD[TD[63]] -= TD[3])
-                     } while (DD[TD[63]] > TD[24]);
-                     DD[TD[24]] = -TD[2]
-                   } return DD[TD[24]] > -TD[2] && DD[-TD[65]].push((DD[TD[33]] | DD[TD[24]] << DD[TD[63]]) & TD[11]), jD(DD[-TD[65]])
+             },
+             yp = {
+               clipPath: pp ? "url(#clipPath-".concat(ip, ")") : null
+             };
+           return Op.createElement(Dp.b, yp, Yp.map((function(pp) {
+             return Op.cloneElement(pp, {
+               key: "error-bar-".concat(ip, "-").concat(pp.props.dataKey),
+               data: op,
+               xAxis: Ip,
+               yAxis: Sp,
+               layout: xp,
+               offset: Pp,
+               dataPointFormatter: Wp
+             })
+           })))
+         }
+ ... (102 more added lines; see GitHub link above)
```

#### 183. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5162-L5164` → after: `L4668-L4689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4668-L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4668-L4689) · [Before (L5162-L5164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5162-L5164)

```diff
- 
-             function sD(...DD) {
-               return DD[TD[12]] = TD[2], typeof OD[DD[TD[1]]] === TD[16] ? OD[DD[TD[1]]] = wD(JD[DD[TD[1]]]) : OD[DD[TD[1]]]
+           }(mp, Xp.defaultProps.minPointSize)(Op[1], ip);
+           if ("horizontal" === tp) {
+             var kp, Rp = [Sp.scale(Op[0]), Sp.scale(Op[1])],
+               Ep = Rp[0],
+               lp = Rp[1];
+             Ap = (0, vp.E)({
+               axis: Ip,
+               ticks: xp,
+               bandSize: op,
+               offset: wp.offset,
+               entry: pp,
+               index: ip
+             }), Pp = null !== (kp = null !== lp && void 0 !== lp ? lp : Ep) && void 0 !== kp ? kp : void 0, Wp = wp.size;
+             var Qp = Ep - lp;
+             if (Up = Number.isNaN(Qp) ? 0 : Qp, dp = {
+                 x: Ap,
+ ... (6 more added lines; see GitHub link above)
```

#### 184. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5166-L5176` → after: `L4691-L4707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4691-L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4691-L4707) · [Before (L5166-L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5166-L5176)

```diff
-             let KD = {
-               [zD(162) + sD(163)]: sD(164),
-               [sD(165) + "jj"]: sD(166) + "jk",
-               [sD(167) + sD(168)]: sD(TD[8]),
-               [sD(170) + sD(171)]: sD(172),
-               [sD(173)]: sD(174) + sD(175),
-               [sD(176) + sD(177)]: sD(TD[28]) + sD(179),
-               [sD(180) + sD(181) + "49"]: sD(182),
-               [sD(183)]: sD(184) + sD(185) + "4"
-             };
-             SD(pD = TD[45], (0, LD[sD(186)])(gD.Ri, KD))
+           } else {
+             var Bp = [Ip.scale(Op[0]), Ip.scale(Op[1])],
+               Np = Bp[0],
+               fp = Bp[1];
+             if (Ap = Np, Pp = (0, vp.E)({
+                 axis: Sp,
+                 ticks: Lp,
+                 bandSize: op,
+                 offset: wp.offset,
+                 entry: pp,
+                 index: ip
+               }), Wp = fp - Np, Up = wp.size, dp = {
+                 x: Ip.x,
+                 y: Pp,
+                 width: Ip.width,
+                 height: Up
+ ... (1 more added lines; see GitHub link above)
```

#### 185. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5178-L5182` → after: `L4709-L4729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4709-L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4709-L4729) · [Before (L5178-L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5178-L5182)

```diff
-         }), 12702), (0, LD[zD(187) + zD(188)])((() => {
-           pD = TD[46]
-         })))
-       }
-     })()
+           return Tp(Tp(Tp({}, pp), {}, {
+             x: Ap,
+             y: Pp,
+             width: Wp,
+             height: Up,
+             value: Yp ? Op : Op[1],
+             payload: pp,
+             background: dp
+           }, Cp && Cp[ip] && Cp[ip].props), {}, {
+             tooltipPayload: [(0, vp.cb)(cp, pp)],
+             tooltipPosition: {
+               x: Ap + Wp / 2,
+               y: Pp + Up / 2
+             }
+           })
+         }));
+ ... (5 more added lines; see GitHub link above)
```

#### 186. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5184` → after: `L4731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4731) · [Before (L5184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5184)

```diff
-   38145: (DD, zD, wD) => {
+   6517: (pp, ip, cp) => {
```

#### 187. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5186-L5197` → after: `L4733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4733) · [Before (L5186-L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5186-L5197)

```diff
-       A: () => cD,
-       c: () => UD,
-       e: () => AD,
-       i: () => RD,
-       j: () => BD,
-       k: () => LD,
-       m: () => gD,
-       n: () => MD,
-       o: () => nD,
-       s: () => hD,
-       u: () => fD,
-       x: () => GD
+       e: () => Qp
```

#### 188. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5199` → after: `L4735-L4747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4735-L4747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4735-L4747) · [Before (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5199)

```diff
-     var pD = wD(38151),
+     var Op = cp(62),
+       op = cp(5405),
+       Ip = cp.n(op),
+       Sp = cp(5326),
+       xp = cp.n(Sp),
+       Lp = cp(5203),
+       Yp = cp(5610),
+       Dp = cp(6103),
+       Ap = cp(6262),
+       Pp = cp(6352),
+       Wp = cp(5299),
+       yp = cp(5619),
+       Up = cp(5588),
```

#### 189. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5201-L5202` → after: `L4749-L4751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4749-L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4749-L4751) · [Before (L5201-L5202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5201-L5202)

```diff
-       KD = wD(38153),
-       rD = wD(4251);
+       vp = ["viewBox"],
+       tp = ["viewBox"],
+       Hp = ["ticks"];
```

#### 190. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5205` → after: `L4754-L4768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4754-L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4754-L4768) · [Before (L5205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5205)

```diff
-       return pD.b.includes(DD)
+       return dp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, dp(pp)
+     }
+ 
+     function ep() {
+       return ep = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, ep.apply(this, arguments)
```

#### 191. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5209` → after: `L4772-L4779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4772-L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4772-L4779) · [Before (L5209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5209)

```diff
-       return "Iron Chest" === DD && zD
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
```

#### 192. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5213` → after: `L4783-L4791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4783-L4791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4783-L4791) · [Before (L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5213)

```diff
-       return !0 === (null === DD || void 0 === DD ? void 0 : DD.includes("Hang Glider"))
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? jp(Object(cp), !0).forEach((function(ip) {
+           Xp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : jp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 193. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5217-L5221` → after: `L4795-L4809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4795-L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4795-L4809) · [Before (L5217-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5217-L5221)

```diff
-       return DD.physicsState.type === sD.q.GLIDER && DD.movementType === sD.o.GLIDING && gD(zD)
-     }
- 
-     function AD(DD) {
-       return DD.gliderFuelCooldownEnd - Date.now()
+       if (null == pp) return {};
+       var cp, Op, op = function(pp, ip) {
+         if (null == pp) return {};
+         var cp = {};
+         for (var Op in pp)
+           if (Object.prototype.hasOwnProperty.call(pp, Op)) {
+             if (ip.indexOf(Op) >= 0) continue;
+             cp[Op] = pp[Op]
+           } return cp
+       }(pp, ip);
+       if (Object.getOwnPropertySymbols) {
+         var Ip = Object.getOwnPropertySymbols(pp);
+         for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
+       }
+       return op
```

#### 194. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5224-L5228` → after: `L4812-L4816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4812-L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4812-L4816) · [Before (L5224-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5224-L5228)

```diff
-     function UD(DD) {
-       var zD;
-       const wD = DD.yJ.bzD(DD.vW),
-         pD = DD.yJ.gzD(DD.vW);
-       return DD.NJ.canAltAction && void 0 !== wD && void 0 !== pD && RD(pD, null === (zD = wD.selectedItem) || void 0 === zD ? void 0 : zD.name) ? (0, KD.e)(wD.inventory) : 0
+     function Rp(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, lp(Op.key), Op)
+       }
```

#### 195. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5232` → after: `L4820-L4828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4820-L4828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4820-L4828) · [Before (L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5232)

```diff
-       return wD >= 3 ? null : "Empty Bottle" === DD && "Cow" === zD ? "Milk" : "Shears" === DD && "Sheep" === zD ? "Shear" : null
+       return ip = Cp(ip),
+         function(pp, ip) {
+           if (ip && ("object" === dp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, Mp() ? Reflect.construct(ip, cp || [], Cp(pp).constructor) : ip.apply(pp, cp))
```

#### 196. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5258-L5260` → after: `L4831-L4837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4831-L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4831-L4837) · [Before (L5258-L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5258-L5260)

```diff
-     function BD(DD, zD) {
-       const wD = ID.get(DD);
-       return void 0 !== wD && (wD.tame.has(zD) || wD.food.has(zD) || wD.saddle === zD)
+     function Mp() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (Mp = function() {
+         return !!pp
+       })()
```

#### 197. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5264-L5266` → after: `L4841-L4843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4841-L4843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4841-L4843) · [Before (L5264-L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5264-L5266)

```diff
-       var zD;
-       const wD = null === (zD = ID.get(DD)) || void 0 === zD ? void 0 : zD.tame;
-       return void 0 === wD ? void 0 : [...wD][0]
+       return Cp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, Cp(pp)
```

#### 198. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5270-L5271` → after: `L4847-L4849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4847-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4847-L4849) · [Before (L5270-L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5270-L5271)

```diff
-       var wD, pD;
-       return null !== (wD = null === (pD = ID.get(DD)) || void 0 === pD ? void 0 : pD.tame.has(zD)) && void 0 !== wD && wD
+       return Ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Ep(pp, ip)
```

#### 199. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5274-L5276` → after: `L4852-L4858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4852-L4858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4852-L4858) · [Before (L5274-L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5274-L5276)

```diff
-     function nD(DD, zD) {
-       var wD, pD;
-       return null !== (wD = null === (pD = ID.get(DD)) || void 0 === pD ? void 0 : pD.liked.has(zD)) && void 0 !== wD && wD
+     function Xp(pp, ip, cp) {
+       return (ip = lp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 200. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5279-L5281` → after: `L4861-L4872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4861-L4872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4861-L4872) · [Before (L5279-L5281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5279-L5281)

```diff
-     function MD(DD, zD) {
-       var wD, pD;
-       return null !== (wD = null === (pD = ID.get(DD)) || void 0 === pD ? void 0 : pD.food.has(zD)) && void 0 !== wD && wD
+     function lp(pp) {
+       var ip = function(pp, ip) {
+         if ("object" != dp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != dp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
+         }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == dp(ip) ? ip : ip + ""
```

#### 201. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5283-L5298` → after: `L4874-L5143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R4874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L4874-L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L4874-L5143) · [Before (L5283-L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5283-L5298)

```diff
-   },
-   37762: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => Fz,
-       e: () => Yz,
-       f: () => Gz,
-       g: () => Ez,
-       k: () => hz,
-       m: () => Qz,
-       n: () => zw,
-       r: () => mz,
-       u: () => ww,
-       x: () => Jz,
-       z: () => rw,
-       A: () => kz,
-       B: () => Xz
+     var Qp = function(pp) {
+       function ip(pp) {
+         var cp;
+         return function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip), (cp = qp(this, ip, [pp])).state = {
+           fontSize: "",
+           letterSpacing: ""
+         }, cp
+       }
+       return function(pp, ip) {
+         if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+         pp.prototype = Object.create(ip && ip.prototype, {
+           constructor: {
+             value: pp,
+             writable: !0,
+ ... (254 more added lines; see GitHub link above)
```

#### 202. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5300-L5310` → after: `L5145-L5156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5145-L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5145-L5156) · [Before (L5300-L5310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5300-L5310)

```diff
-     var pD = wD(9198),
-       sD = wD(37791);
-     const KD = pD.l.Water.id,
-       rD = pD.l.Ice.id,
-       LD = [
-         [1, 0, 0],
-         [-1, 0, 0],
-         [0, 0, 1],
-         [0, 0, -1],
-         [0, 1, 0]
-       ];
+     var Op = cp(62),
+       op = cp(5405),
+       Ip = cp.n(op),
+       Sp = cp(5582),
+       xp = cp(5299),
+       Lp = cp(5588),
+       Yp = cp(6266),
+       Dp = cp(6520),
+       Ap = cp(6517),
+       Pp = cp(6470),
+       Wp = ["x1", "y1", "x2", "y2", "key"],
+       yp = ["offset"];
```

#### 203. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5313-L5380` → after: `L5159-L5175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5159-L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5159-L5175) · [Before (L5313-L5380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5313-L5380)

```diff
-       var zD;
-       return (null === (zD = pD.l[DD]) || void 0 === zD ? void 0 : zD.meta.rootId) === KD
-     }
-     var gD = wD(37973),
-       RD = wD(197),
-       AD = wD(37976),
-       UD = wD(37982),
-       fD = wD(351),
-       ID = wD(1232),
-       BD = wD(37015),
-       GD = wD(4486),
-       hD = wD(4515),
-       nD = wD(3139),
-       MD = wD(37767),
-       OD = wD(37834),
-       JD = wD(37774),
- ... (52 more removed lines; see GitHub link above)
+       return Up = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Up(pp)
+     }
+ 
+     function wp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
+ ... (1 more added lines; see GitHub link above)
```

#### 204. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5383-L5432` → after: `L5178-L5187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5178-L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5178-L5187) · [Before (L5383-L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5383-L5432)

```diff
-       var zD;
-       jD.l.KG("localBlockMined");
-       const wD = (0, cz.b)(),
-         gD = wD.OJ(DD[0], DD[1], DD[2]);
-       Jz(gD, !0);
-       const RD = wD.getMetaInfo(gD).rootId,
-         AD = null === (zD = pD.l[RD].solid) || void 0 === zD || zD,
-         UD = lD.c.getUniqueColoursForParticleSystem(DD);
-       lD.f.emit(50, {
-         ...(0, Az.e)(DD, pD.l[gD].cG, .05, .95),
-         minEmitPower: AD ? 15 : 0,
-         maxEmitPower: AD ? 60 : 0,
-         colorGradients: UD.map((DD => ({
-           color: DD
-         })))
-       });
- ... (34 more removed lines; see GitHub link above)
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? wp(Object(cp), !0).forEach((function(ip) {
+           tp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : wp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
+     }
```

#### 205. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5434` → after: `L5189-L5208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5189-L5208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5189-L5208) · [Before (L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5434)

```diff
-     function Mz() {}
+     function tp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != Up(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != Up(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == Up(ip) ? ip : ip + ""
+       }(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+ ... (4 more added lines; see GitHub link above)
```

#### 206. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5437` → after: `L5211-L5217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5211-L5217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5211-L5217) · [Before (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5437)

```diff
-       Oz = function() {}
+       return Hp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, Hp.apply(this, arguments)
```

#### 207. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5441-L5484` → after: `L5221-L5234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5221-L5234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5221-L5234) · [Before (L5441-L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5441-L5484)

```diff
-       const wD = (0, CD.g)((0, gD.b)(DD, zD));
-       xD.c.play(wD, 1)
-     }
-     "cAhLvl" in Mz && function(...DD) {
-       Oz(DD[nz[0]] = nz[1], DD[-nz[11]] = function(...DD) {
-         for (Oz(DD[nz[0]] = nz[7], DD[nz[10]] = nz[1], DD[nz[4]] = {}, DD[nz[5]] = nz[1], DD[nz[6]] = nz[1], DD[nz[9]] = nz[1], DD[nz[3]] = DD[nz[1]].length), DD[nz[2]] = nz[1]; DD[nz[2]] < DD[nz[3]]; DD[nz[2]]++) {
-           for (Oz(DD[nz[4]] = {}, DD[nz[5]] = nz[1], DD[nz[6]] = nz[7]), DD[nz[8]] = DD[nz[2]] + nz[7]; DD[nz[8]] < DD[nz[3]]; DD[nz[8]]++) DD[nz[1]][DD[nz[2]]].x !== DD[nz[1]][DD[nz[8]]].x || DD[nz[1]][DD[nz[2]]].y !== DD[nz[1]][DD[nz[8]]].y ? (DD[nz[1]][DD[nz[2]]].y === DD[nz[1 … [truncated]
-           Oz(DD[nz[5]] += DD[nz[6]], DD[nz[10]] = Math.max(DD[nz[10]], DD[nz[5]]))
-         }
-         return DD[nz[10]]
-       }, console.log(DD[-nz[11]]))
-     }(), ((...DD) => {
-       DD[nz[0]] = nz[1], "V9x7KP" in Mz && function(...DD) {
-         DD[nz[0]] = nz[1]
-       }(), Oz(DD[nz[14]] = nz[1], hz = () => (DD[nz[14]]++, DD[nz[14]] === nz[9] ? (DD[nz[14]] = nz[1], "es") : TD.e))
-     })();
- ... (28 more removed lines; see GitHub link above)
+       if (null == pp) return {};
+       var cp, Op, op = function(pp, ip) {
+         if (null == pp) return {};
+         var cp = {};
+         for (var Op in pp)
+           if (Object.prototype.hasOwnProperty.call(pp, Op)) {
+             if (ip.indexOf(Op) >= 0) continue;
+             cp[Op] = pp[Op]
+           } return cp
+       }(pp, ip);
+       if (Object.getOwnPropertySymbols) {
+         var Ip = Object.getOwnPropertySymbols(pp);
+         for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
+       }
```

#### 208. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5489-L5495` → after: `L5260-L5281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5260-L5281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5260-L5281) · [Before (L5489-L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5489-L5495)

```diff
-       var wD, pD;
-       const sD = null === (wD = DD.yJ.getState(zD, "autoRotate")) || void 0 === wD ? void 0 : wD.heading,
-         KD = null === (pD = DD.yJ.QzD(zD)) || void 0 === pD ? void 0 : pD.offset;
-       return void 0 !== sD && KD ? {
-         heading: sD,
-         yOffset: KD[1]
-       } : null
+       var cp;
+       if (Op.isValidElement(pp)) cp = Op.cloneElement(pp, ip);
+       else if (Ip()(pp)) cp = pp(ip);
+       else {
+         var op = ip.x1,
+           Sp = ip.y1,
+           xp = ip.x2,
+           Yp = ip.y2,
+           Dp = ip.key,
+           Ap = dp(ip, Wp),
+           Pp = (0, Lp.d)(Ap, !1),
+           Up = (Pp.offset, dp(Pp, yp));
+         cp = Op.createElement("line", Hp({}, Up, {
+           x1: op,
+           y1: Sp,
+           x2: xp,
+ ... (6 more added lines; see GitHub link above)
```

#### 209. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5498-L5536` → after: `L5284-L5304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5284-L5304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5284-L5304) · [Before (L5498-L5536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5498-L5536)

```diff
-     function Xz(DD, zD, wD, pD) {
-       var sD, KD;
-       const {
-         typeObj: rD,
-         attributes: LD,
-         size: cD
-       } = DD.yJ.getState(zD, "itemState"), gD = (0, dD.b)() * cD, AD = rD.droppedMeshTypeScale * gD;
-       let UD = 0;
-       DD.yJ.UW(zD, "hidingMeshManager", {
-         addMeshComponent: () => {
-           var pD;
-           const sD = ++UD;
-           rD.getDroppedThinObject(null === (pD = LD.customAttributes) || void 0 === pD ? void 0 : pD.enchantmentTier, (pD => {
-             var KD;
-             const LD = DD.wB.Ql;
-             if (sD !== UD) return void LD.delete(pD);
- ... (23 more removed lines; see GitHub link above)
+     function kp(pp) {
+       var ip = pp.x,
+         cp = pp.width,
+         op = pp.horizontal,
+         Ip = void 0 === op || op,
+         Sp = pp.horizontalPoints;
+       if (!Ip || !Sp || !Sp.length) return null;
+       var xp = Sp.map((function(Op, op) {
+         var Sp = vp(vp({}, pp), {}, {
+           x1: ip,
+           y1: Op,
+           x2: ip + cp,
+           y2: Op,
+           key: "line-".concat(op),
+           index: op
+         });
+ ... (5 more added lines; see GitHub link above)
```

#### 210. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5539-L5540` → after: `L5307-L5327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5307-L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5307-L5327) · [Before (L5539-L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5539-L5540)

```diff
-     function Vz(DD, zD) {
-       (0, cz.e)().KI && (DD.dW("aShaderPackItem", 4), DD.iW.aShaderPackItem = Rz.Vector4.FromArray(zD))
+     function mp(pp) {
+       var ip = pp.y,
+         cp = pp.height,
+         op = pp.vertical,
+         Ip = void 0 === op || op,
+         Sp = pp.verticalPoints;
+       if (!Ip || !Sp || !Sp.length) return null;
+       var xp = Sp.map((function(Op, op) {
+         var Sp = vp(vp({}, pp), {}, {
+           x1: Op,
+           y1: ip,
+           x2: Op,
+           y2: ip + cp,
+           key: "line-".concat(op),
+           index: op
+         });
+ ... (5 more added lines; see GitHub link above)
```

#### 211. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5562-L5577` → after: `L5330-L5364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5330-L5364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5330-L5364) · [Before (L5562-L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5562-L5577)

```diff
-     function bz(DD, zD, wD, pD) {
-       const sD = (0, cz.e)();
-       wD && (zD.sideOrientation = Dz.e.ClockWiseSideOrientation);
-       const KD = sD.wB.Ql,
-         rD = sD.KI ? {
-           aShaderPackItem: 4
-         } : null;
-       return KD.newObjectType(DD, zD, {
-         bA: 16,
-         capacityIsConst: !1,
-         strides: {
-           ...pD,
-           aOpacity: 1,
-           ...rD
-         }
-       }), KD.setPickableForType(DD, !1), sD.wB.pW(zD), DD
+     function Rp(pp) {
+       var ip = pp.horizontalFill,
+         cp = pp.fillOpacity,
+         op = pp.x,
+         Ip = pp.y,
+         Sp = pp.width,
+         xp = pp.height,
+         Lp = pp.horizontalPoints,
+         Yp = pp.horizontal;
+       if (!(void 0 === Yp || Yp) || !ip || !ip.length) return null;
+       var Dp = Lp.map((function(pp) {
+         return Math.round(pp + Ip - Ip)
+       })).sort((function(pp, ip) {
+         return pp - ip
+       }));
+       Ip !== Dp[0] && Dp.unshift(0);
+ ... (19 more added lines; see GitHub link above)
```

#### 212. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5585-L5594` → after: `L5367-L5402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5367-L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5367-L5402) · [Before (L5585-L5594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5585-L5594)

```diff
-     function dz(DD, zD, wD, pD) {
-       let sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       const KD = (0, fz.j)(zD, wD),
-         rD = pD ? {
-           texAtlasIndices: pD
-         } : {};
-       return sD && (rD.color = (0, FD.p)(KD.positions.length / 3, FD.d)), (0, zz.q)((0, cz.e)().wB, DD, {
-         ...KD,
-         named: rD
-       })
+     function qp(pp) {
+       var ip = pp.vertical,
+         cp = void 0 === ip || ip,
+         op = pp.verticalFill,
+         Ip = pp.fillOpacity,
+         Sp = pp.x,
+         xp = pp.y,
+         Lp = pp.width,
+         Yp = pp.height,
+         Dp = pp.verticalPoints;
+       if (!cp || !op || !op.length) return null;
+       var Ap = Dp.map((function(pp) {
+         return Math.round(pp + Sp - Sp)
+       })).sort((function(pp, ip) {
+         return pp - ip
+       }));
+ ... (20 more added lines; see GitHub link above)
```

#### 213. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5596-L5599` → after: `L5404-L5443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5404-L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5404-L5443) · [Before (L5596-L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5596-L5599)

```diff
-     const Sz = [0, 1, 2, 3, 4, 5],
-       iz = Array.from({
-         length: 6
-       }, (() => new Rz.Vector4(0, 1 - OD.b, 1, OD.b)));
+     var Mp = function(pp, ip) {
+         var cp = pp.xAxis,
+           Op = pp.width,
+           op = pp.height,
+           Ip = pp.offset;
+         return (0, Yp.J)((0, Dp.c)(vp(vp(vp({}, Ap.e.defaultProps), cp), {}, {
+           ticks: (0, Yp.Z)(cp, !0),
+           viewBox: {
+             x: 0,
+             y: 0,
+             width: Op,
+             height: op
+           }
+         })), Ip.left, Ip.left + Ip.width, ip)
+       },
+       Cp = function(pp, ip) {
+ ... (24 more added lines; see GitHub link above)
```

#### 214. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5602` → after: `L5446-L5523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5446-L5523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5446-L5523) · [Before (L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5602)

```diff
-       return !DD || "object" !== typeof DD || Array.isArray(DD) ? null : "animTextures" in DD ? DD : null
+       var ip, cp, op, Lp, Yp, Dp, Ap = (0, Pp.l)(),
+         Wp = (0, Pp.i)(),
+         yp = (0, Pp.p)(),
+         wp = vp(vp({}, pp), {}, {
+           stroke: null !== (ip = pp.stroke) && void 0 !== ip ? ip : Ep.stroke,
+           fill: null !== (cp = pp.fill) && void 0 !== cp ? cp : Ep.fill,
+           horizontal: null !== (op = pp.horizontal) && void 0 !== op ? op : Ep.horizontal,
+           horizontalFill: null !== (Lp = pp.horizontalFill) && void 0 !== Lp ? Lp : Ep.horizontalFill,
+           vertical: null !== (Yp = pp.vertical) && void 0 !== Yp ? Yp : Ep.vertical,
+           verticalFill: null !== (Dp = pp.verticalFill) && void 0 !== Dp ? Dp : Ep.verticalFill,
+           x: (0, xp.D)(pp.x) ? pp.x : yp.left,
+           y: (0, xp.D)(pp.y) ? pp.y : yp.top,
+           width: (0, xp.D)(pp.width) ? pp.width : yp.width,
+           height: (0, xp.D)(pp.height) ? pp.height : yp.height
+         }),
+         tp = wp.x,
+ ... (62 more added lines; see GitHub link above)
```

#### 215. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5604` → after: `L5525-L5535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5525-L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5525-L5535) · [Before (L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5604)

```diff
-     const Wz = new Map;
+     Xp.displayName = "CartesianGrid"
+   },
+   6332: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => dp
+     });
+     var Op = cp(62),
+       op = cp(6096),
+       Ip = cp(6103),
+       Sp = cp(5588),
+       xp = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
```

#### 216. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5606-L5610` → after: `L5537-L5542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5537-L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5537-L5542) · [Before (L5606-L5610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5606-L5610)

```diff
-     function Nz(DD, zD, wD) {
-       const pD = `cuboidBlock|${wD.name}|${zD.key}|${(0,YD.i)(DD)}`;
-       if ((0, cz.e)().wB.Ql.hasType(pD)) return pD;
-       const sD = dz(pD, zD, iz, (0, fz.t)(zD, Sz));
-       return sD.material = wD, (0, ZD.j)(sD), sD.nC(!1), sD.uB = !1, Wz.set(pD, sD), bz(pD, sD, DD, jz)
+     function Lp(pp) {
+       return Lp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Lp(pp)
```

#### 217. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5614-L5627` → after: `L5545-L5549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5545-L5549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5545-L5549) · [Before (L5614-L5627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5614-L5627)

```diff
-     function yz(DD) {
-       if (DD.wB.pB || !(0, OD.d)()) return !0;
-       const zD = MD.e.getBlockAtlasMaterial(DD.wB.Ul(), !1, !1),
-         wD = Wz.get(Nz(!1, fz.d, zD));
-       return !(wD && !(0, wz.f)(wD)) || function(DD) {
-         const zD = DD.material;
-         if (!zD || DD.EX()) return !1;
-         const wD = new((0, HD.e)().SubMesh)(0, 0, 0, 0, 0, DD, void 0, !1, !1),
-           pD = DD.forcedInstanceCount;
-         DD.forcedInstanceCount = 1;
-         try {
-           zD.isReadyForSubMesh(DD, wD, !0)
-         } finally {
-           DD.forcedInstanceCount = pD
+     function Yp() {
+       return Yp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
```

#### 218. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5629-L5630` → after: `L5551-L5552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5551-L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5551-L5552) · [Before (L5629-L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5629-L5630)

```diff
-         return !!wD.effect
-       }(wD)
+         return pp
+       }, Yp.apply(this, arguments)
```

#### 219. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5633-L5640` → after: `L5555-L5572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5555-L5572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5555-L5572) · [Before (L5633-L5640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5633-L5640)

```diff
-     function kz(DD) {
-       ! function(DD, zD, wD) {
-         DD.once("DU", (() => {
-           const pD = DD.wB.Ul().onAfterRenderObservable;
-           let sD = zD;
-           const KD = pD.add((() => {
-             sD--;
-             let DD = !0;
+     function Dp(pp, ip) {
+       return function(pp) {
+         if (Array.isArray(pp)) return pp
+       }(pp) || function(pp, ip) {
+         var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
+         if (null != cp) {
+           var Op, op, Ip, Sp, xp = [],
+             Lp = !0,
+             Yp = !1;
+           try {
+             if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
+               if (Object(cp) !== cp) return;
+               Lp = !1
+             } else
+               for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
+           } catch (pp) {
+ ... (2 more added lines; see GitHub link above)
```

#### 220. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5642` → after: `L5574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5574) · [Before (L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5642)

```diff
-               DD = wD()
+               if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
```

#### 221. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5644` → after: `L5576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5576) · [Before (L5644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5644)

```diff
-               (DD || sD <= 0) && pD.remove(KD)
+               if (Yp) throw op
```

#### 222. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5646-L5648` → after: `L5578-L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5578-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5578-L5590) · [Before (L5646-L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5646-L5648)

```diff
-           }))
-         }))
-       }(DD, Zz, (() => yz(DD)))
+           }
+           return xp
+         }
+       }(pp, ip) || function(pp, ip) {
+         if (!pp) return;
+         if ("string" === typeof pp) return Ap(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         "Object" === cp && pp.constructor && (cp = pp.constructor.name);
+         if ("Map" === cp || "Set" === cp) return Array.from(pp);
+         if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Ap(pp, ip)
+       }(pp, ip) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 223. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5651-L5652` → after: `L5593-L5596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5593-L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5593-L5596) · [Before (L5651-L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5651-L5652)

```diff
-     function mz(DD) {
-       return DD.endsWith("Armour")
+     function Ap(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 224. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5655-L5690` → after: `L5599-L5612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5599-L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5599-L5612) · [Before (L5655-L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5655-L5690)

```diff
-     function ez(DD) {
-       return Array.isArray(DD) ? Rz.WI.FromArray(DD) : new Rz.WI(DD, DD, DD)
-     }
-     class oz {
-       constructor(DD, zD) {
-         var wD, pD, sD, KD, rD;
-         this.bakeInScaling = void 0, this.name = void 0, this.oB = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.droppedMeshOffset = vo … [truncated]
-         const LD = (0, cz.b)().Lf.metadatas[DD];
-         for (const cD in LD) void 0 !== LD[cD] && (this[cD] = LD[cD]);
-         this.bakeInScaling = 1, this.name = DD, this.oB = zD, this.weight = null !== (wD = LD.weight) && void 0 !== wD ? wD : 1, this.heldItemScale = null !== (pD = LD.heldItemScale) && void 0 !== pD ? pD : 1, this.stackable = null === (sD = LD.stackable) || void 0 === sD || sD,  … [truncated]
-           name: this.heldItemGlb.replaceAll("|", ""),
-           type: WD.e.ITEM
-         }, this.modelSource = nD.b.getModel(this.modelDefault.name, WD.e.ITEM), this.displayName = DD
-       }
-       getThinObject(DD, zD, wD) {
-         if (!this._thinSourceReady()) {
- ... (20 more removed lines; see GitHub link above)
+     function Pp(pp, ip) {
+       if (null == pp) return {};
+       var cp, Op, op = function(pp, ip) {
+         if (null == pp) return {};
+         var cp = {};
+         for (var Op in pp)
+           if (Object.prototype.hasOwnProperty.call(pp, Op)) {
+             if (ip.indexOf(Op) >= 0) continue;
+             cp[Op] = pp[Op]
+           } return cp
+       }(pp, ip);
+       if (Object.getOwnPropertySymbols) {
+         var Ip = Object.getOwnPropertySymbols(pp);
+         for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
```

#### 225. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5692-L5698` → after: `L5614-L5620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5614-L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5614-L5620) · [Before (L5692-L5698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5692-L5698)

```diff
-       _defineThinType(DD) {
-         return function(DD, zD, wD, pD, sD) {
-           const KD = `item|${DD}|${zD}|${wD.uniqueId}`;
-           wD.material || console.error(`${DD} thin base has no material`);
-           const rD = wD.clone(`${DD}ThinBase|${zD}`, null);
-           return rD.makeGeometryUnique(), bz(KD, rD, sD, pD)
-         }(this.name, this._thinBaseKey(DD), this._thinSourceMesh(DD), this._thinStrides(), DD.flippedWinding)
+       return op
+     }
+ 
+     function Wp(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Hp(Op.key), Op)
```

#### 226. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5700-L5707` → after: `L5622-L5673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5622-L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5622-L5673) · [Before (L5700-L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5700-L5707)

```diff
-       _instantiateThinObject(DD, zD) {
-         const wD = this._thinBaseKey(DD);
-         this._thinTypes[wD] ??= this._defineThinType(DD);
-         const pD = (0, cz.e)().wB.Ql,
-           sD = pD.instantiate(this._thinTypes[wD]);
-         if (pD.set(sD, "aLightLevels", pz.c), pD.set(sD, "aOpacity", 1), (0, cz.e)().KI) {
-           const wD = DD.Qg ? qD.b.Qg : DD.dropped ? qD.b.dropped : 0;
-           pD.set(sD, "aShaderPackItem", this.shaderPackItem(wD, zD))
+     }
+ 
+     function yp(pp, ip, cp) {
+       return ip = wp(ip),
+         function(pp, ip) {
+           if (ip && ("object" === Lp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, Up() ? Reflect.construct(ip, cp || [], wp(pp).constructor) : ip.apply(pp, cp))
+     }
+ 
+     function Up() {
+       try {
+ ... (36 more added lines; see GitHub link above)
```

#### 227. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5709-L5752` → after: `L5675-L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5675-L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5675-L5683) · [Before (L5709-L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5709-L5752)

```diff
-         return this._initThinObject(sD, zD, DD), sD
-       }
-       Al() {
-         return 0
-       }
-       shaderPackItem(DD, zD) {
-         return [(0, qD.n)(this.Al() | DD, (0, ED.b)(zD)), ...this.shaderPackLocalFrame()]
-       }
-       shaderPackLocalFrame() {
-         const DD = pD.l[this.name];
-         if (null === DD || void 0 === DD || !DD.blockModelItem) return [SD.c / this.bakeInScaling, 0, 0];
-         const {
-           scale: zD,
-           yOffset: wD,
-           yRotation: sD,
-           xRotation: KD
- ... (28 more removed lines; see GitHub link above)
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Lp(ip) ? ip : ip + ""
+     }
+     var dp = function(pp) {
+       function ip() {
+         return function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip), yp(this, ip, arguments)
```

#### 228. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5754-L5795` → after: `L5685-L5768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5685-L5768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5685-L5768) · [Before (L5754-L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5754-L5795)

```diff
-       getHeldMesh(DD) {
-         return this.getMesh(1, ((zD, wD) => {
-           var pD, sD;
-           wD.iW.aEnchantmentColour = null !== (pD = PD.m[DD]) && void 0 !== pD ? pD : PD.m.None, wD.iW.aEnchantmentSpeed = null !== (sD = fD.ob[DD]) && void 0 !== sD ? sD : fD.ob.None, this._markForShaderPack(wD, Iz, DD)
-         }))
-       }
-       getGrowingMesh() {
-         return this.getMesh()
-       }
-       getMesh() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         if (this._sourceMesh) {
-           const wD = (0, zz.r)((0, cz.e)().wB, `${this.name}AbstractMeshParent${this._meshCounter++}`);
-           return wD.rc = ez(DD), this._attachNewMeshInstanceToParent(wD, zD), wD
-         } {
- ... (26 more removed lines; see GitHub link above)
+       return function(pp, ip) {
+         if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+         pp.prototype = Object.create(ip && ip.prototype, {
+           constructor: {
+             value: pp,
+             writable: !0,
+             configurable: !0
+           }
+         }), Object.defineProperty(pp, "prototype", {
+           writable: !1
+         }), ip && vp(pp, ip)
+       }(ip, pp), cp = ip, (Lp = [{
+         key: "render",
+         value: function() {
+           var pp = this.props,
+             ip = pp.offset,
+ ... (68 more added lines; see GitHub link above)
```

#### 229. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5797-L5804` → after: `L5770-L5783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5770-L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5770-L5783) · [Before (L5797-L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5797-L5804)

```diff
-           }
-         };
-         return {
-           ...zD(this.modelSource),
-           fallback: () => {
-             const DD = this.modelDefault;
-             return DD && nD.b.getModelOverride(DD.name) ? zD(nD.b.getModel(DD.name, DD.type, !0)) : null
-           }
+             return Op.createElement(Ip.b, Yp({
+               className: "recharts-errorBar",
+               key: "bar-".concat(dp.map((function(pp) {
+                 return "".concat(pp.x1, "-").concat(pp.x2, "-").concat(pp.y1, "-").concat(pp.y2)
+               })))
+             }, tp), dp.map((function(pp) {
+               return Op.createElement("line", Yp({}, pp, {
+                 key: "line-".concat(pp.x1, "-").concat(pp.x2, "-").concat(pp.y1, "-").concat(pp.y2)
+               }))
+             })))
+           }));
+           return Op.createElement(Ip.b, {
+             className: "recharts-errorBars"
+           }, Hp)
```

#### 230. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5807-L5895` → after: `L5846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5846) · [Before (L5807-L5895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5807-L5895)

```diff
-       async loadModel(DD, zD) {
-         const {
-           source: wD,
-           args: pD,
-           fallback: sD
-         } = this.modelGlbLoad(zD), KD = (await (0, iD.e)(wD, DD, pD, sD)).meshes.filter((DD => DD.getTotalVertices() > 0));
-         KD.forEach((DD => {
-           DD.sideOrientation = null
-         }));
-         const rD = (0, zz.m)(KD, !zD, !1);
-         return rD.name = `${this.name}GlbModel`, rD.uB = !1, (0, FD.i)(rD, this.bakeInScaling), rD
-       }
-       _loadMeshFirstTime() {
-         var DD;
-         const zD = null === (DD = this._createOwnMaterial) || void 0 === DD ? void 0 : DD.bind(this);
-         this.loadModel(this.oB, !!zD).then((DD => {
- ... (73 more removed lines; see GitHub link above)
+       return op
```

#### 231. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5897-L5936` → after: `L5848-L5853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5848-L5853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5848-L5853) · [Before (L5897-L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5897-L5936)

```diff
-     class tz extends vz {
-       constructor(DD, zD) {
-         super(DD, zD), this.cuboidShape = fz.d, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
-         const wD = pD.l[DD];
-         this.harvestLevel = wD.harvestLevel, this.transTex = !!wD.transTex, this.texturePerSide = wD.texturePerSide, this.unlitStandaloneMesh = wD.unlitStandaloneMesh, this.textureInfo && (this.meshMaterial = this.getCubeBlockMeshMaterial(zD)), this.type = "CubeBlock"
-       }
-       usesBlockAtlasMaterial() {
-         const {
-           textureInfo: DD
-         } = this;
-         return !!DD && ("string" === typeof DD || "string" === typeof DD[0] || !!lz(DD))
-       }
-       getCubeBlockMeshMaterial(DD) {
-         const {
-           name: zD,
-           textureInfo: wD
- ... (24 more removed lines; see GitHub link above)
+ 
+     function Rp() {
+       return Rp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
```

#### 232. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L5939-L6076` → after: `L5856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5856) · [Before (L5939-L6076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L5939-L6076)

```diff
-       }
-       _thinSourceReady() {
-         return !0
-       }
-       shaderPackLocalFrame() {
-         return [1, 0, 0]
-       }
-       _thinSourceMesh(DD) {
-         return this._needsHeldBase(DD) ? (this._heldSourceMesh ??= this._makeSourceMesh({
-           Qg: !0
-         }), this._heldSourceMesh) : (this._sourceMesh ??= this._makeSourceMesh(), this._sourceMesh)
-       }
-       _thinBaseKey(DD) {
-         const zD = super._thinBaseKey(DD);
-         return this._needsHeldBase(DD) ? `${zD}|held` : zD
-       }
- ... (122 more removed lines; see GitHub link above)
+       }, Rp.apply(this, arguments)
```

#### 233. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6079-L6080` → after: `L5859-L5867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5859-L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5859-L5867) · [Before (L6079-L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6079-L6080)

```diff
-     function zw() {
-       (0, dD.e)(), cz.i.itemsClient = ww, cz.i.blocksClient = pw, cz.i.nonBlocksClient = sw
+     function qp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
```

#### 234. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6236-L6363` → after: `L5870-L5877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5870-L5877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5870-L5877) · [Before (L6236-L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6236-L6363)

```diff
-     function rw(DD, zD, wD, sD) {
-       let KD;
-       if (DD in pD.l) {
-         var rD;
-         const sD = null === (rD = pD.l[DD].model) || void 0 === rD ? void 0 : rD.split("|")[0];
-         KD = pD.l[DD].model || pD.l[DD].twoDBlockItem ? Kw[sD] ? new Kw[sD](DD, wD) : new Hz(DD, wD) : new tz(DD, wD), pw[DD] = KD, pw[zD] = KD
-       } else KD = Kw[sD] ? new Kw[sD](DD, wD) : new qz(DD, wD), sw[DD] = KD, sw[zD] = KD;
-       ww[DD] = KD, ww[zD] = KD
-     }
-   },
-   38120: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => nD,
-       f: () => cD,
-       i: () => hD
-     });
- ... (112 more removed lines; see GitHub link above)
+     function Mp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? qp(Object(cp), !0).forEach((function(ip) {
+           Np(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : qp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 235. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6367-L6368` → after: `L5882-L5896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5882-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5882-L5896) · [Before (L6367-L6368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6367-L6368)

```diff
-     function gD(DD, zD) {
-       return DD.computeWorldMatrix(!0), zD.computeWorldMatrix(!0), DD.getWorldMatrix().multiply(zD.getWorldMatrix().clone().invert())
+     function Cp(pp) {
+       return function(pp) {
+         if (Array.isArray(pp)) return Ep(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || function(pp, ip) {
+         if (!pp) return;
+         if ("string" === typeof pp) return Ep(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         "Object" === cp && pp.constructor && (cp = pp.constructor.name);
+         if ("Map" === cp || "Set" === cp) return Array.from(pp);
+         if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Ep(pp, ip)
+       }(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 236. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6372-L6375` → after: `L5900-L5902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5900-L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5900-L5902) · [Before (L6372-L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6372-L6375)

```diff
-       const wD = new pD.WI,
-         sD = new pD.Quaternion,
-         KD = new pD.WI;
-       zD.decompose(KD, sD, wD), DD.position = wD, DD.rotationQuaternion = sD, DD.rc = KD
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 237. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6379-L6380` → after: `L5906-L5909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5906-L5909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5906-L5909) · [Before (L6379-L6380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6379-L6380)

```diff
-       const wD = DD.rotationQuaternion;
-       zD.position = DD.position.clone(), wD ? zD.rotationQuaternion = new pD.Quaternion(wD.x, wD.y, wD.z, wD.w) : zD.rotation = DD.rotation.clone(), zD.rc = DD.rc.clone()
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Tp(Op.key), Op)
+       }
```

#### 238. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6384` → after: `L5913-L5930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5913-L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5913-L5930) · [Before (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6384)

```diff
-       return (0, sD.f)(zD) ? (0, KD.r)(zD.wB, DD) : new((0, rD.e)().TransformNode)(DD, wD)
+       return ip = Jp(ip),
+         function(pp, ip) {
+           if (ip && ("object" === kp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, Qp() ? Reflect.construct(ip, cp || [], Jp(pp).constructor) : ip.apply(pp, cp))
+     }
+ 
+     function Qp() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (Qp = function() {
+ ... (2 more added lines; see GitHub link above)
```

#### 239. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6388` → after: `L5934-L5936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5934-L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5934-L5936) · [Before (L6388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6388)

```diff
-       return (0, sD.f)(DD[0]) ? (0, KD.m)(DD, !1) : (0, LD.z)(DD)
+       return Jp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, Jp(pp)
```

#### 240. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6392` → after: `L5940-L5942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5940-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5940-L5942) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6392)

```diff
-       DD.parent = zD
+       return Bp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Bp(pp, ip)
```

#### 241. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6395-L6396` → after: `L5945-L5951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5945-L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5945-L5951) · [Before (L6395-L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6395-L6396)

```diff
-     function BD(DD) {
-       return ["Mesh", "LiteMesh"].includes(DD.getClassName()) && DD.getTotalVertices() > 0 ? DD : null
+     function Np(pp, ip, cp) {
+       return (ip = Tp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 242. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6400` → after: `L5955-L5965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5955-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5955-L5965) · [Before (L6400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6400)

```diff
-       return [DD, ...DD.getChildMeshes(!1)].map(BD).filter((DD => null !== DD))
+       var ip = function(pp, ip) {
+         if ("object" != kp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != kp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
+         }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == kp(ip) ? ip : ip + ""
```

#### 243. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6402-L6411` → after: `L5967-L6002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R5967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L5967-L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L5967-L6002) · [Before (L6402-L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6402-L6411)

```diff
- 
-     function hD(DD, zD) {
-       const wD = DD.meshes.find((DD => DD.name === nD));
-       if (!wD) return null;
-       const pD = UD(nD, wD, zD);
-       AD(wD, pD);
-       for (const sD of wD.getChildren()) ID(sD, pD);
-       return wD.dispose(), {
-         root: pD,
-         meshes: GD(pD)
+     var fp = function(pp) {
+       function ip() {
+         var pp;
+         ! function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip);
+         for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
+         return Np(pp = lp(this, ip, [].concat(Op)), "state", {
+           isAnimationFinished: !0,
+           totalLength: 0
+         }), Np(pp, "generateSimpleStrokeDasharray", (function(pp, ip) {
+           return "".concat(ip, "px ").concat(pp - ip, "px")
+         })), Np(pp, "getStrokeDasharray", (function(cp, Op, op) {
+           var Ip = op.reduce((function(pp, ip) {
+             return pp + ip
+           }));
+ ... (20 more added lines; see GitHub link above)
```

#### 244. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6413-L6476` → after: `L6004-L6023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6004-L6023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6004-L6023) · [Before (L6413-L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6413-L6476)

```diff
-     }
-     const nD = "__root__"
-   },
-   37901: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => ED,
-       d: () => jD,
-       f: () => CD,
-       h: () => dD,
-       l: () => ND,
-       p: () => PD,
-       r: () => iD,
-       s: () => lD,
-       v: () => bD,
-       z: () => XD
-     });
- ... (48 more removed lines; see GitHub link above)
+       return function(pp, ip) {
+         if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+         pp.prototype = Object.create(ip && ip.prototype, {
+           constructor: {
+             value: pp,
+             writable: !0,
+             configurable: !0
+           }
+         }), Object.defineProperty(pp, "prototype", {
+           writable: !1
+         }), ip && Bp(pp, ip)
+       }(ip, pp), cp = ip, Ip = [{
+         key: "componentDidMount",
+         value: function() {
+           if (this.props.isAnimationActive) {
+             var pp = this.getTotalLength();
+ ... (4 more added lines; see GitHub link above)
```

#### 245. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6478-L6483` → after: `L6025-L6033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6025-L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6025-L6033) · [Before (L6478-L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6478-L6483)

```diff
-         const pD = zD[0];
-         DD.addRampGradient(0, (0, UD.f)(pD));
-         for (let KD = 1; KD < zD.length; KD++) {
-           const wD = zD[KD - 1],
-             pD = zD[KD];
-           DD.addRampGradient(KD / zD.length - 1e-4, (0, UD.f)(wD)), DD.addRampGradient(KD / zD.length, (0, UD.f)(pD))
+       }, {
+         key: "componentDidUpdate",
+         value: function() {
+           if (this.props.isAnimationActive) {
+             var pp = this.getTotalLength();
+             pp !== this.state.totalLength && this.setState({
+               totalLength: pp
+             })
+           }
```

#### 246. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6485-L6602` → after: `L6035-L6396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6035-L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6035-L6396) · [Before (L6485-L6602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6485-L6602)

```diff
-         const sD = zD[zD.length - 1];
-         DD.addRampGradient(1, (0, UD.f)(sD))
-       }
-       static getUniqueColoursForParticleSystem(DD) {
-         const zD = (0, AD.e)().OJ(DD);
-         if (0 !== zD) return cD.b.getAverageColours((0, AD.b)().getMetaInfo(zD).rootName);
-         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(DD)}`).stack)
-       }
-     }
-     const QD = (0, cD.d)("generic_2");
-     let XD;
-     const VD = (0, cD.d)("critical_hit");
-     let PD, CD, xD, TD;
- 
-     function bD(DD) {
-       const zD = DD.wB.EW("sprintParticles", 50);
- ... (102 more removed lines; see GitHub link above)
+       }, {
+         key: "getTotalLength",
+         value: function() {
+           var pp = this.mainCurve;
+           try {
+             return pp && pp.getTotalLength && pp.getTotalLength() || 0
+           } catch (ip) {
+             return 0
+           }
+         }
+       }, {
+         key: "renderErrorBar",
+         value: function(pp, ip) {
+           if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
+           var cp = this.props,
+             op = cp.points,
+ ... (346 more added lines; see GitHub link above)
```

#### 247. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6604-L6619` → after: `L6398-L6402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6398-L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6398-L6402) · [Before (L6604-L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6604-L6619)

```diff
-     class jD {
-       constructor(DD, zD) {
-         this.pSystem = DD, this.maxLifetimeSecs = zD, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.MI = !1, DD.manualEmitCount = 0
-       }
-       emitAmount(DD) {
-         this.MI || (this.pSystem.manualEmitCount = DD, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
-       }
-       dispose() {
-         this.MI = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
-       }
-       scheduleStop(DD) {
-         this.stopTimeout = setTimeout((() => {
-           this.stopTimeout = null;
-           const DD = this.stopAt - performance.now();
-           DD > 0 ? this.scheduleStop(DD) : (this.pSystem.stop(), this.started = !1)
-         }), DD)
+ 
+     function tp(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, qp(Op.key), Op)
```

#### 248. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6623-L6624` → after: `L6406-L6415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6406-L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6406-L6415) · [Before (L6623-L6624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6623-L6624)

```diff
-     function dD(DD, zD, wD, pD) {
-       (0, UD.u)(DD, zD.pSystem), (0, UD.r)(zD.pSystem, wD), zD.emitAmount(pD)
+     function Hp(pp, ip, cp) {
+       return ip = ep(ip),
+         function(pp, ip) {
+           if (ip && ("object" === vp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, dp() ? Reflect.construct(ip, cp || [], ep(pp).constructor) : ip.apply(pp, cp))
```

#### 249. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6628-L6630` → after: `L6418-L6424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6418-L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6418-L6424) · [Before (L6628-L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6628-L6630)

```diff
-     function iD(DD, zD, wD) {
-       if (!zD) return;
-       lD(DD, zD === SD ? rD.d.BounceBrownMushroom : rD.d.BounceRedMushroom, wD)
+     function dp() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (dp = function() {
+         return !!pp
+       })()
```

#### 250. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6633-L6665` → after: `L6427-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6427-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6427-L6430) · [Before (L6633-L6665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6633-L6665)

```diff
-     function lD(DD, zD, wD) {
-       const pD = zD === rD.d.Bunnyhop || zD === rD.d.JumpPad;
-       let sD, LD;
-       zD === rD.d.Bunnyhop ? (sD = [213, 237, 255], LD = [109, 170, 238]) : zD === rD.d.BounceRedMushroom ? (sD = [196, 63, 63], LD = [148, 53, 53]) : zD === rD.d.BounceBrownMushroom ? (sD = [186, 132, 91], LD = [153, 107, 72]) : zD === rD.d.BunnyhopBounce ? (sD = [217, 170, 2],  … [truncated]
-       const cD = DD.yJ.PJ(DD.vW);
-       let gD, RD;
-       if (0 !== wD[1]) {
-         const DD = 1 === wD[1] ? KD.f.eG - .4 : 0;
-         gD = [cD[0] - 1, cD[1] + DD, cD[2] - 1], RD = [cD[0] + 1, cD[1] + .4 + DD, cD[2] + 1]
-       } else {
-         const DD = 0 !== wD[0] ? 2 : 0,
-           zD = 0 !== wD[0] ? 0 : 2,
-           pD = 1 === wD[0] || 1 === wD[2] ? .2 : -.2;
-         gD = [cD[0], cD[1] + .4, cD[2]], RD = [cD[0], cD[1] + 1.4, cD[2]], gD[DD] -= .5, RD[DD] += .5, gD[zD] += pD, RD[zD] += pD
-       }
-       const AD = pD ? xD : TD;
- ... (17 more removed lines; see GitHub link above)
+     function ep(pp) {
+       return ep = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, ep(pp)
```

#### 251. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6667-L6713` → after: `L6432-L6436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6432-L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6432-L6436) · [Before (L6667-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6667-L6713)

```diff
-     class WD {
-       constructor(DD, zD, wD) {
-         this.AU = DD, this.cfg = wD, this.pool = [], this.currentIndex = 0;
-         for (let pD = 0; pD < zD; pD++) this.pool.push({
-           pSystem: null,
-           wrapper: null
-         })
-       }
-       emit(DD, zD) {
-         var wD, pD, sD, KD, rD, LD, cD, gD;
-         const AD = "pos1" in zD ? zD.pos1 : this.cfg.pos1,
-           fD = "pos2" in zD ? zD.pos2 : this.cfg.pos2;
-         for (let RD = 0; RD < 3; RD++) nD[RD] = Math.min(AD[RD], fD[RD]), MD[RD] = Math.max(AD[RD], fD[RD]);
-         const ID = this.AU.camera.PJ();
-         for (let RD = 0; RD < 3; RD++) hD[RD] = Math.max(nD[RD], Math.min(ID[RD], MD[RD]));
-         const BD = null !== (wD = zD.hideDist) && void 0 !== wD ? wD : this.cfg.hideDist;
- ... (31 more removed lines; see GitHub link above)
+ 
+     function jp(pp, ip) {
+       return jp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, jp(pp, ip)
```

#### 252. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6717-L6722` → after: `L6440-L6445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6440-L6445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6440-L6445) · [Before (L6717-L6722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6717-L6722)

```diff
-       if (!(0, BD.B)(zD.hideDist)) {
-         const wD = [];
-         for (let DD = 0; DD < 3; DD++) wD.push((0, LD.y)(zD.pos1[DD], zD.pos2[DD], .5));
-         const pD = DD.yJ.PJ(DD.vW),
-           sD = zD.hideDist * zD.hideDist;
-         if (RD().sqrDist(pD, wD) > sD) return
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 253. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6724` → after: `L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6447) · [Before (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6724)

```diff
-       DD.bloxd.client.meshCreator.newSingleBurstParticleSystem(zD)
+       return cp
```

#### 254. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6726-L6832` → after: `L6449-L6457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6449-L6457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6449-L6457) · [Before (L6726-L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6726-L6832)

```diff
-   },
-   37767: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => hD
-     });
-     var pD = wD(37206),
-       sD = wD(37796),
-       KD = wD(37827),
-       rD = wD(37414),
-       LD = wD(37816),
-       cD = wD(37832),
-       gD = wD(3139),
-       RD = wD(37783),
-       AD = wD(37774),
-       UD = wD(37178),
-       fD = wD(37294),
- ... (91 more removed lines; see GitHub link above)
+ 
+     function mp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? kp(Object(cp), !0).forEach((function(ip) {
+           Rp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : kp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 255. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6834-L6844` → after: `L6459-L6469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6459-L6469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6459-L6469) · [Before (L6834-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6834-L6844)

```diff
-     };
-     (0, cD.n)(GD);
-     const hD = GD
-   },
-   38057: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => kD,
-       h: () => eD
-     });
-     var pD = wD(37369);
-     const sD = new WeakMap;
+       return pp
+     }
+ 
+     function Rp(pp, ip, cp) {
+       return (ip = qp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
+     }
```

#### 256. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6847-L6858` → after: `L6472-L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6472-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6472-L6478) · [Before (L6847-L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6847-L6858)

```diff
-       let zD = sD.get(DD);
-       return void 0 === zD && (zD = function(DD) {
-         var zD;
-         const wD = DD.bones.find((DD => "root" === DD.name.toLowerCase())),
-           pD = null === wD || void 0 === wD || null === (zD = wD.position) || void 0 === zD ? void 0 : zD.keyframes;
-         if (void 0 === pD || DD.lengthSeconds <= 0) return 0;
-         let sD = 1 / 0,
-           KD = 0;
-         for (const LD of pD) {
-           const DD = LD.post[1];
-           if ("number" !== typeof DD) return 0;
-           DD < sD && (sD = DD, KD = LD.time)
+       var ip = function(pp, ip) {
+         if ("object" != vp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != vp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
```

#### 257. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6860-L6862` → after: `L6480-L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6480-L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6480-L6482) · [Before (L6860-L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6860-L6862)

```diff
-         const rD = KD / DD.lengthSeconds;
-         return rD - Math.floor(2 * rD) / 2
-       }(DD), sD.set(DD, zD)), zD
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == vp(ip) ? ip : ip + ""
```

#### 258. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6864-L6921` → after: `L6484-L6509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6484-L6509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6484-L6509) · [Before (L6864-L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6864-L6921)

```diff
-     var rD = wD(37143);
-     const LD = 1e-4;
-     class cD {
-       constructor(DD) {
-         this.state = DD, this.weight = 0, this.gaitPhase = 0, this.footfallShift = Number.NaN, this.elapsed = void 0, this.childWeights = void 0, this.childTimes = void 0, this.hasGait = void 0, this.footfallOffsets = void 0, this.elapsed = new Float64Array(DD.children.length), t … [truncated]
-       }
-       updateBlendWeights(DD) {
-         const zD = this.state.children,
-           wD = this.childWeights;
-         if (wD.fill(0), this.state.blendInput < 0 || 1 === zD.length) return void(wD[0] = 1);
-         const pD = DD[this.state.blendInput];
-         if (pD <= zD[0].at) wD[0] = 1;
-         else {
-           for (let DD = 1; DD < zD.length; DD++)
-             if (pD < zD[DD].at) {
-               const sD = (pD - zD[DD - 1].at) / (zD[DD].at - zD[DD - 1].at);
- ... (42 more removed lines; see GitHub link above)
+ 
+     function Mp(pp, ip) {
+       return function(pp) {
+         if (Array.isArray(pp)) return pp
+       }(pp) || function(pp, ip) {
+         var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
+         if (null != cp) {
+           var Op, op, Ip, Sp, xp = [],
+             Lp = !0,
+             Yp = !1;
+           try {
+             if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
+               if (Object(cp) !== cp) return;
+               Lp = !1
+             } else
+               for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
+ ... (10 more added lines; see GitHub link above)
```

#### 259. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6923-L6927` → after: `L6511-L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6511-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6511-L6520) · [Before (L6923-L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6923-L6927)

```diff
-       }
-       restGap() {
-         const DD = this.state.restCycle;
-         return DD > 0 ? Math.round(this.gaitPhase / DD) * DD - this.gaitPhase : 0
-       }
+       }(pp, ip) || function(pp, ip) {
+         if (!pp) return;
+         if ("string" === typeof pp) return Cp(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         "Object" === cp && pp.constructor && (cp = pp.constructor.name);
+         if ("Map" === cp || "Set" === cp) return Array.from(pp);
+         if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Cp(pp, ip)
+       }(pp, ip) || function() {
+         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 260. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6929-L6953` → after: `L6522-L6533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6522-L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6522-L6533) · [Before (L6929-L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6929-L6953)

```diff
-     class gD {
-       constructor(DD, zD) {
-         this.layer = DD, this.mask = zD, this.instances = [], this.current = null, this.weight = 0
-       }
-       update(DD, zD, wD) {
-         var pD, sD;
-         let KD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Number.NaN;
-         const rD = this.resolveState(DD);
-         rD !== (null !== (pD = null === (sD = this.current) || void 0 === sD ? void 0 : sD.state) && void 0 !== pD ? pD : null) && (this.current = null === rD ? null : this.enter(rD, KD)), this.updateWeights(zD, wD)
-       }
-       resolveState(DD) {
-         for (const zD of DD) {
-           const DD = this.layer.states.get(zD);
-           if (void 0 !== DD) return DD
-         }
-         return this.layer.fallback
- ... (9 more removed lines; see GitHub link above)
+ 
+     function Cp(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
+     }
+ 
+     function Ep() {
+       return Ep = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
```

#### 261. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6957-L6990` → after: `L6639-L6687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6639-L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6639-L6687) · [Before (L6957-L6990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6957-L6990)

```diff
-       updateWeights(DD, zD) {
-         const wD = this.layer.transitionSeconds,
-           pD = this.current,
-           sD = zD || 0 === wD ? 1 : DD / wD;
-         let KD = 0;
-         for (const LD of this.instances) LD !== pD && (KD += LD.weight);
-         const rD = null === pD ? 0 : Math.min(1, pD.weight + sD),
-           cD = null === pD ? Math.max(0, KD - sD) : 1 - rD,
-           gD = KD > 0 ? Math.min(1, cD / KD) : 0;
-         let RD = 0;
-         for (const AD of this.instances) AD.weight = AD === pD ? rD : AD.weight * gD, (AD === pD || AD.weight > LD) && (this.instances[RD++] = AD);
-         this.instances.length = RD
-       }
-     }
-     let RD = !0;
-     class AD {
- ... (18 more removed lines; see GitHub link above)
+       return function(pp, ip) {
+         if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+         pp.prototype = Object.create(ip && ip.prototype, {
+           constructor: {
+             value: pp,
+             writable: !0,
+             configurable: !0
+           }
+         }), Object.defineProperty(pp, "prototype", {
+           writable: !1
+         }), ip && jp(pp, ip)
+       }(ip, pp), cp = ip, (op = [{
+         key: "render",
+         value: function() {
+           return Op.createElement(Xp, this.props)
+         }
+ ... (33 more added lines; see GitHub link above)
```

#### 262. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L6994-L7005` → after: `L6691-L6693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6691-L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6691-L6693) · [Before (L6994-L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L6994-L7005)

```diff
-       const {
-         instances: wD,
-         current: pD
-       } = DD;
-       if (0 === wD.length) return !0;
-       if (null === pD || wD.length > 1 || wD[0] !== pD || pD.weight < 1) return !1;
-       if (DD.weight <= LD) return !0;
-       if (Math.abs(pD.restGap()) > 1e-6) return !1;
-       const sD = pD.state.children;
-       for (let KD = 0; KD < sD.length; KD++) {
-         const DD = sD[KD].clip.clip;
-         if (pD.childWeights[KD] > LD && !DD.still && (!DD.timeless || !fD(sD[KD].strideBlocks, zD, DD, pD.elapsed[KD]))) return !1
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Up(Op.key), Op)
```

#### 263. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7010-L7011` → after: `L6697-L6721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6697-L6721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6697-L6721) · [Before (L7010-L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7010-L7011)

```diff
-     function fD(DD, zD, wD, pD) {
-       return DD > 0 || null === wD.animTimeUpdate && (zD <= 1e-6 || pD >= wD.standsAfterSeconds)
+     function Dp(pp, ip, cp) {
+       return ip = Pp(ip),
+         function(pp, ip) {
+           if (ip && ("object" === Lp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, Ap() ? Reflect.construct(ip, cp || [], Pp(pp).constructor) : ip.apply(pp, cp))
+     }
+ 
+     function Ap() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+ ... (9 more added lines; see GitHub link above)
```

#### 264. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7015` → after: `L6725-L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6725-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6725-L6727) · [Before (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7015)

```diff
-       for (const wD of DD.instances) wD.advanceGait(zD), wD.gaitPhase = (wD.gaitPhase + wD.restGap()) % 1
+       return Wp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Wp(pp, ip)
```

#### 265. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7019-L7042` → after: `L6731-L6736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6731-L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6731-L6736) · [Before (L7019-L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7019-L7042)

```diff
-       const pD = DD.state.children;
-       for (let sD = 0; sD < pD.length; sD++) pD[sD].strideBlocks <= 0 && (DD.elapsed[sD] += zD * wD)
-     }
-     var GD = wD(37332),
-       hD = wD(37373);
-     const nD = "root";
-     class MD {
-       constructor(DD, zD) {
-         this.id = DD, this.boneNames = zD, this.indexByLowerName = new Map, this.impliedRoot = !1, zD.forEach(((DD, zD) => {
-           const wD = DD.toLowerCase();
-           "" === wD || this.indexByLowerName.has(wD) || this.indexByLowerName.set(wD, zD)
-         })), zD.length > 0 && !this.indexByLowerName.has(nD) && (this.indexByLowerName.set(nD, 0), this.impliedRoot = !0)
-       }
-       get boneCount() {
-         return this.boneNames.length
-       }
- ... (8 more removed lines; see GitHub link above)
+       return (ip = Up(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 266. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7044-L7059` → after: `L6738-L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6738-L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6738-L6750) · [Before (L7044-L7059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7044-L7059)

```diff
-     var OD = wD(37342),
-       JD = wD(37351);
-     class ED {
-       constructor(DD, zD, wD, sD, KD, rD, LD) {
-         let cD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
-           gD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
-         this.name = DD, this.clip = zD, this.pool = wD, this.mode = sD, this.mask = KD, this.fadeInSeconds = rD, this.fadeOutSeconds = LD, this.speed = cD, this.elapsed = void 0, this.weight = 0, this.stopping = !1, this.heldInputs = new Float64Array(pD.e.length), this.elapsed =  … [truncated]
-       }
-       get finished() {
-         const {
-           loop: DD,
-           startDelaySeconds: zD,
-           lengthSeconds: wD
-         } = this.clip, pD = zD + wD;
-         return DD === JD.h.Once && (wD > 0 ? this.elapsed >= pD : this.elapsed > pD)
-       }
+ 
+     function Up(pp) {
+       var ip = function(pp, ip) {
+         if ("object" != Lp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != Lp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
+         }
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Lp(ip) ? ip : ip + ""
```

#### 267. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7061-L7071` → after: `L6752-L6757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6752-L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6752-L6757) · [Before (L7061-L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7061-L7071)

```diff
-     class QD {
-       constructor() {
-         this.instances = []
-       }
-       start(DD) {
-         this.stop(DD.name), this.instances.push(DD);
-         let zD = 0;
-         for (const wD of this.instances) zD += wD.stopping ? 0 : 1;
-         if (zD > 4 && (this.instances.find((DD => !DD.stopping)).stopping = !0), this.instances.length > 8) {
-           const DD = this.instances.findIndex((DD => DD.stopping));
-           this.instances.splice(DD, 1)
+ 
+     function wp() {
+       return wp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
```

#### 268. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7073-L7125` → after: `L6759-L6760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6759-L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6759-L6760) · [Before (L7073-L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7073-L7125)

```diff
-       }
-       stop(DD) {
-         for (const zD of this.instances) zD.name === DD && (zD.stopping = !0)
-       }
-       isPlaying(DD) {
-         for (const zD of this.instances)
-           if (zD.name === DD && !zD.stopping) return !0;
-         return !1
-       }
-       step(DD) {
-         for (const wD of this.instances) {
-           if (wD.elapsed += DD * wD.speed, wD.stopping) {
-             wD.weight = wD.fadeOutSeconds > 0 ? wD.weight - DD / wD.fadeOutSeconds : 0;
-             continue
-           }
-           const zD = wD.clip;
- ... (37 more removed lines; see GitHub link above)
+         return pp
+       }, wp.apply(this, arguments)
```

#### 269. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7127-L7153` → after: `L6762-L6777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6762-L6777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6762-L6777) · [Before (L7127-L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7127-L7153)

```diff
-     class TD {
-       constructor(DD) {
-         this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * DD), this.position = new Float64Arra … [truncated]
-       }
-       touch(DD, zD, wD) {
-         0 === this.touched[DD] && (this.touched[DD] = 1, this.touchedBones[this.touchedCount++] = DD), this.boneWeight[DD] += zD, wD && (this.overrides[DD] = 1)
-       }
-       applyTo(DD, zD, wD) {
-         let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         for (let sD = 0; sD < this.touchedCount; sD++) {
-           const KD = this.touchedBones[sD],
-             rD = this.boneWeight[KD];
-           if (wD || 1 === this.overrides[KD]) {
-             const wD = zD * Math.min(1, rD);
-             for (let zD = 3 * KD; zD < 3 * KD + 3; zD++) DD.rotation[zD] += (this.rotation[zD] / rD - DD.rotation[zD]) * wD, DD.position[zD] += (this.position[zD] / rD - DD.position[zD]) * wD, DD.scale[zD] += (1 + this.scaleDelta[zD] / rD - DD.scale[zD]) * wD
-           } else {
- ... (11 more removed lines; see GitHub link above)
+ 
+     function vp(pp) {
+       var ip = pp.xAxisId,
+         cp = (0, Ip.l)(),
+         Lp = (0, Ip.i)(),
+         Yp = (0, Ip.x)(ip);
+       return null == Yp ? null : Op.createElement(Sp.e, wp({}, Yp, {
+         className: (0, op.d)("recharts-".concat(Yp.axisType, " ").concat(Yp.axisType), Yp.className),
+         viewBox: {
+           x: 0,
+           y: 0,
+           width: cp,
+           height: Lp
+         },
+         ticksGenerator: function(pp) {
+           return (0, xp.Z)(pp, !0)
```

#### 270. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7155` → after: `L6779-L6785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6779-L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6779-L6785) · [Before (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7155)

```diff
-         this.touchedCount = 0
+       }))
+     }
+     var tp = function(pp) {
+       function ip() {
+         return function(pp, ip) {
+           if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+         }(this, ip), Dp(this, ip, arguments)
```

#### 271. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7160-L7447` → after: `L6847-L6849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6847-L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6847-L6849) · [Before (L7160-L7447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7160-L7447)

```diff
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       return Number.isNaN(DD) ? wD : Math.min(zD, Math.max(-zD, DD))
-     }
-     var jD = wD(37358);
-     const dD = "clip:";
-     class SD {
-       constructor(DD) {
-         this.rigged = DD, this.pose = void 0, this.inputs = void 0, this.accumulator = void 0, this.layers = void 0, this.runtimes = void 0, this.variableSlots = void 0, this.heldVariableSlots = void 0, this.sample = new Float64Array(3), this.actions = new QD, this.stateCandidate … [truncated]
-         const zD = DD.binding,
-           wD = DD.rig.boneCount;
-         this.pose = new xD(wD), this.accumulator = new TD(wD), this.inputs = new Float64Array(pD.h.Count + zD.filters.length), this.layers = zD.layers.map(((zD, wD) => new gD(zD, DD.layerMasks[wD]))), this.runtimes = zD.pools.map((DD => ({
-           queries: new Float64Array(jD.d.Count),
-           variables: DD.variables.createValues()
-         }))), this.variableSlots = zD.pools.map((DD => Int32Array.from(zD.variables, (zD => {
-           var wD;
-           return null !== (wD = DD.variables.slots.get(zD.name)) && void 0 !== wD ? wD : -1
- ... (272 more removed lines; see GitHub link above)
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Up(Op.key), Op)
```

#### 272. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7451-L7456` → after: `L6853-L6862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6853-L6862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6853-L6862) · [Before (L7451-L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7451-L7456)

```diff
-     function iD(DD, zD, wD, pD) {
-       if (null === DD.animTimeUpdate) return zD + wD;
-       const sD = pD.queries[jD.d.DeltaTime];
-       pD.queries[jD.d.AnimTime] = zD, pD.queries[jD.d.DeltaTime] = wD;
-       const KD = DD.animTimeUpdate.evaluate(pD);
-       return pD.queries[jD.d.DeltaTime] = sD, KD
+     function Dp(pp, ip, cp) {
+       return ip = Pp(ip),
+         function(pp, ip) {
+           if (ip && ("object" === Lp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, Ap() ? Reflect.construct(ip, cp || [], Pp(pp).constructor) : ip.apply(pp, cp))
```

#### 273. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7460-L7462` → after: `L6865-L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6865-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6865-L6877) · [Before (L7460-L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7460-L7462)

```diff
-     function WD(DD, zD, wD) {
-       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zD;
-       return Number.isNaN(DD) ? pD : Math.min(wD, Math.max(zD, DD))
+     function Ap() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (Ap = function() {
+         return !!pp
+       })()
+     }
+ 
+     function Pp(pp) {
+       return Pp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, Pp(pp)
```

#### 274. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7470-L7472` → after: `L6881-L6883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6881-L6883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6881-L6883) · [Before (L7470-L7472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7470-L7472)

```diff
-       for (const wD of zD) {
-         (wD.severity === JD.b.Error ? console.error : console.warn)(`Animation for ${DD}: ${wD.source}: ${wD.message}`)
-       }
+       return Wp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Wp(pp, ip)
```

#### 275. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7474-L7552` → after: `L6885-L6902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6885-L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6885-L6902) · [Before (L7474-L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7474-L7552)

```diff
-     const eD = new class {
-         constructor() {
-           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.vy = 0
-         }
-         get version() {
-           return this.vy
-         }
-         bumpVersion() {
-           this.vy++
-         }
-         get enabled() {
-           return yD
-         }
-         forgetCompiled() {
-           this.bindings.clear(), this.rigged = new WeakMap, this.pack = null, this.bumpVersion()
-         }
- ... (63 more removed lines; see GitHub link above)
+ 
+     function yp(pp, ip, cp) {
+       return (ip = Up(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
+     }
+ 
+     function Up(pp) {
+       var ip = function(pp, ip) {
+         if ("object" != Lp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+ ... (2 more added lines; see GitHub link above)
```

#### 276. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7554-L7556` → after: `L6904-L6913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6904-L6913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6904-L6913) · [Before (L7554-L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7554-L7556)

```diff
-         getBindings(DD) {
-           let zD = this.bindings.get(DD);
-           return void 0 === zD && (zD = this.compile(DD), this.bindings.set(DD, zD)), zD
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Lp(ip) ? ip : ip + ""
+     }
+ 
+     function wp() {
+       return wp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
```

#### 277. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7558-L7570` → after: `L6915-L6932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6915-L6932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6915-L6932) · [Before (L7558-L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7558-L7570)

```diff
-         compile(DD) {
-           const zD = (0, GD.e)(),
-             wD = ND.d.has(DD) || this.drawnWithPlayerRig(DD),
-             pD = (0, ND.k)(zD, wD ? kD : DD, []);
-           mD(DD, pD.diagnostics);
-           let sD = null;
-           if (!wD) {
-             const wD = (0, ND.m)(this.getPack(), zD, DD);
-             mD(`${DD} (texture pack)`, wD.diagnostics), sD = wD.binding
-           }
-           return {
-             pack: sD,
-             builtIn: pD.binding
+         return pp
+       }, wp.apply(this, arguments)
+     }
+     var vp = function(pp) {
+         var ip = pp.yAxisId,
+           cp = (0, Ip.l)(),
+           Lp = (0, Ip.i)(),
+           Yp = (0, Ip.y)(ip);
+         return null == Yp ? null : Op.createElement(Sp.e, wp({}, Yp, {
+           className: (0, op.d)("recharts-".concat(Yp.axisType, " ").concat(Yp.axisType), Yp.className),
+           viewBox: {
+             x: 0,
+             y: 0,
+             width: cp,
+             height: Lp
+           },
+ ... (2 more added lines; see GitHub link above)
```

#### 278. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7572-L7576` → after: `L6934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6934) · [Before (L7572-L7576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7572-L7576)

```diff
-         }
-         getPack() {
-           null === this.pack && (this.pack = (0, ND.p)(null !== null ? null : (0, ZD.d)(), "texturePack"), mD("the texture pack", this.pack.diagnostics));
-           return this.pack
-         }
+         }))
```

#### 279. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7578` → after: `L6936-L6981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6936-L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6936-L6981) · [Before (L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7578)

```diff
-       oD = new WeakMap
+       tp = function(pp) {
+         function ip() {
+           return function(pp, ip) {
+             if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+           }(this, ip), Dp(this, ip, arguments)
+         }
+         return function(pp, ip) {
+           if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+           pp.prototype = Object.create(ip && ip.prototype, {
+             constructor: {
+               value: pp,
+               writable: !0,
+               configurable: !0
+             }
+           }), Object.defineProperty(pp, "prototype", {
+             writable: !1
+ ... (30 more added lines; see GitHub link above)
```

#### 280. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7580` → after: `L6983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6983) · [Before (L7580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7580)

```diff
-   37327: (DD, zD, wD) => {
+   6520: (pp, ip, cp) => {
```

#### 281. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7585-L7633` → after: `L6987-L6999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R6987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L6987-L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L6987-L6999) · [Before (L7585-L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7585-L7633)

```diff
-     var pD = wD(37332),
-       sD = wD(37376),
-       KD = wD(37351),
-       rD = wD(37143),
-       LD = wD(37358);
-     class cD {
-       constructor(DD, zD, wD) {
-         this.clip = DD, this.boneNames = void 0, this.rotations = void 0, this.channels = void 0, this.restEuler = void 0, this.trigs = void 0, this.runtime = void 0, this.sample = new Float64Array(3), this.rotation = new Float64Array(4), this.posedAt = Number.NaN;
-         const pD = [],
-           sD = [],
-           KD = [];
-         for (const rD of DD.bones) {
-           if (null === rD.rotation) continue;
-           const zD = wD(rD.name);
-           null !== zD ? (pD.push(rD.name), sD.push(rD.rotation), KD.push(zD)) : console.warn(`${DD.id} animates ${rD.name}, which the attachment has no node for`)
-         }
- ... (33 more removed lines; see GitHub link above)
+     var Op = cp(5405),
+       op = cp.n(Op),
+       Ip = cp(5299),
+       Sp = cp(6264),
+       xp = cp(6115),
+       Lp = cp(6368);
+ 
+     function Yp(pp, ip, cp) {
+       if (ip < 1) return [];
+       if (1 === ip && void 0 === cp) return pp;
+       for (var Op = [], op = 0; op < pp.length; op += ip) {
+         if (void 0 !== cp && !0 !== cp(pp[op])) return;
+         Op.push(pp[op])
```

#### 282. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7637-L7641` → after: `L7004-L7007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7004-L7007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L7004-L7007) · [Before (L7637-L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7637-L7641)

```diff
-     function gD(DD, zD) {
-       const {
-         pool: wD
-       } = (0, pD.e)(), sD = wD.find(DD);
-       return null === sD ? (console.warn(`Cosmetic attachment clip ${DD} is not a built-in clip`), null) : new cD(sD, wD.variables.createValues(), zD)
+     function Dp(pp, ip, cp, Op, op) {
+       if (pp * ip < pp * Op || pp * ip > pp * op) return !1;
+       var Ip = cp();
+       return pp * (ip - pp * Ip / 2 - Op) >= 0 && pp * (ip + pp * Ip / 2 - op) <= 0
```

#### 283. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7643-L7664` → after: `L7009-L7024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7009-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L7009-L7024) · [Before (L7643-L7664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7643-L7664)

```diff
-     class RD {
-       constructor(DD, zD, wD) {
-         this.pose = DD, this.nodeIndices = void 0, this.nodeIndices = Uint32Array.from(DD.boneNames, (DD => zD.getNamedNode(wD, DD)))
-       }
-       static fromRestInstance(DD, zD, wD) {
-         const pD = gD(wD, (wD => {
-           const pD = DD.getNamedNodeOrNull(zD, wD);
-           return null === pD ? null : DD.getNodeRotationQuat(zD, pD)
-         }));
-         return null === pD ? null : new RD(pD, DD, zD)
-       }
-       write(DD, zD, wD) {
-         this.pose.pose(wD);
-         const {
-           rotations: pD
-         } = this.pose, {
- ... (6 more removed lines; see GitHub link above)
+ 
+     function Ap(pp) {
+       return Ap = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Ap(pp)
+     }
+ 
+     function Pp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 284. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7678-L7690` → after: `L7029-L7038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7029-L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L7029-L7038) · [Before (L7678-L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7678-L7690)

```diff
-     function cD(DD, zD, wD) {
-       var cD;
-       const gD = DD.yJ.getState(zD, "animator");
-       if (!gD) return;
-       const {
-         thinInstMgr: RD,
-         Vl: AD
-       } = gD;
-       if ((0, sD.pausesOutOfView)(DD, zD, AD)) return;
-       const UD = null !== (cD = gD.getDrawnNode(KD)) && void 0 !== cD ? cD : gD.getDrawnNode(rD);
-       if (null === UD || 0 === UD.currentPosX && 0 === UD.currentPosY && 0 === UD.currentPosZ) return;
-       const fD = RD.getNodeParent(AD, UD.thinNodeIndex);
-       null !== fD && (pD.WI.TransformNormalFromFloatsToRef(UD.currentPosX, UD.currentPosY, UD.currentPosZ, RD.getNodeWorldMatrix(AD, fD), LD), wD[0] += LD.x, wD[1] += LD.y, wD[2] += LD.z)
+     function Wp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Pp(Object(cp), !0).forEach((function(ip) {
+           yp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Pp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 285. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7703-L7704` → after: `L7041-L7059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7041-L7059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L7041-L7059) · [Before (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7703-L7704)

```diff
-     function rD() {
-       return pD.b.getImagesPerAtlas().length > 1 && sD.e.RB()
+     function yp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != Ap(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != Ap(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == Ap(ip) ? ip : ip + ""
+       }(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+ ... (3 more added lines; see GitHub link above)
```

#### 286. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7708-L7709` → after: `L7063-L7188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7063-L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L7063-L7188) · [Before (L7708-L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7708-L7709)

```diff
-       const sD = KD + zD * (1 - 2 * KD);
-       return wD ? sD : (DD + sD) / pD.b.getImagesPerAtlas()[0]
+       var Op = pp.LP,
+         Ap = pp.ticks,
+         Pp = pp.viewBox,
+         yp = pp.minTickGap,
+         Up = pp.orientation,
+         wp = pp.interval,
+         vp = pp.tickFormatter,
+         tp = pp.unit,
+         Hp = pp.angle;
+       if (!Ap || !Ap.length || !Op) return [];
+       if ((0, Ip.D)(wp) || xp.e.isSsr) return function(pp, ip) {
+         return Yp(pp, ip + 1)
+       }(Ap, "number" === typeof wp && (0, Ip.D)(wp) ? wp : 0);
+       var dp = [],
+         ep = "top" === Up || "bottom" === Up ? "width" : "height",
+         jp = tp && "width" === ep ? (0, Sp.g)(tp, {
+ ... (110 more added lines; see GitHub link above)
```

#### 287. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L7712` → after: `L7191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R7191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/119.js#L7191) · [Before (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/119.js#L7712)

```diff
-   37866: (DD, zD, wD) => {
+   6537: (pp, ip, cp) => {
```
