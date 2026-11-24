# Changed — Bundle Modifications Report (Part 078 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `78 / 142` (**399** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 077](part-077.md) · [Part 079 →](part-079.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (4724 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 329. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3193-L3197` → after: `L2721-L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2721-L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2721-L2725) · [Before (L3193-L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3193-L3197)

```diff
-     }, Si.prototype.eJ = function(pp, ip) {
-       var cp = this.yU?.particles;
-       return cp ? cp.eJ(pp, ip) : this.kop.Rop(this, pp, ip)
-     }, Si.prototype.UOp = function() {
-       return this.pw.Wm.length + (this.yU?.particles?.gop ?? 0)
+     }, zU.prototype.wV = function(TT, UT) {
+       var mT = this.NB?.particles;
+       return mT ? mT.wV(TT, UT) : this.WzT.MzT(this, TT, UT)
+     }, zU.prototype.omT = function() {
+       return this.XZ.EY.length + (this.NB?.particles?.fzT ?? 0)
```

#### 330. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3200` → after: `L2728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2728) · [Before (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3200)

```diff
-     Si.prototype.Iw = function(pp) {
+     zU.prototype.FZ = function(TT) {
```

#### 331. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3204` → after: `L2732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2732) · [Before (L3204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3204)

```diff
-       if (pp.metadata || (pp.metadata = new Ii), pp.metadata[Pi]) this.h_(pp, !0);
+       if (TT.metadata || (TT.metadata = new WU), TT.metadata[jU]) this.t5(TT, !0);
```

#### 332. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3207-L3214` → after: `L2735-L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2735-L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2735-L2742) · [Before (L3207-L3214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3207-L3214)

```diff
-           cp || (cp = pp.position.BOp());
-           var op = this.HP.uip(cp, null, []);
-           pp.position.vcp(op)
-         }
-         ip && (pp.iJ(), pp.Vy && pp.Vy(), pp.sy = !0), pp.Ow = Op;
-         var Ip = !ap.i.OJ(pp);
-         Ip && this.yop.TOp(pp, ip, cp), ap.i.TOp(this, pp), pp.Kl.add((() => {
-           Ip && this.yop.xJ(pp), pp.metadata[Pi] = !1
+           mT || (mT = TT.position.cWT());
+           var zT = this.Rl.qUT(mT, null, []);
+           TT.position.MmT(zT)
+         }
+         UT && (TT.HV(), TT.tB && TT.tB(), TT.dB = !0), TT.QZ = WT;
+         var MT = !CT.g.lV(TT);
+         MT && this.NWT.fWT(TT, UT, mT), CT.g.fWT(this, TT), TT.SF.add((() => {
+           MT && this.NWT.cV(TT), TT.metadata[jU] = !1
```

#### 333. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3221` → after: `L2749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2749) · [Before (L3221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3221)

```diff
-       return !!(pp.parent || pp.Fip || pp.infiniteDistance || "__root__" === pp.name)
+       return !!(TT.parent || TT.sUT || TT.infiniteDistance || "__root__" === TT.name)
```

#### 334. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3225-L3227` → after: `L2753-L2755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2753-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2753-L2755) · [Before (L3225-L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3225-L3227)

```diff
-       (0, Fp.n)(pp), pp.kop.wop(pp);
-       var ip = pp.HP.camera.Gs(),
-         cp = pp.HP.BP,
+       (0, KT.l)(TT), TT.WzT.hWT(TT);
+       var UT = TT.Rl.camera.uE(),
+         mT = TT.Rl.ZL,
```

#### 335. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3231` → after: `L2759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2759) · [Before (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3231)

```diff
-         Sp = pp.HP.nH(Op, op, Ip);
+         gT = TT.Rl.uq(WT, zT, MT);
```

#### 336. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3236-L3240` → after: `L2764-L2768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2764-L2768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2764-L2768) · [Before (L3236-L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3236-L3240)

```diff
-       var cp = pp.HP.Tu.cameraTint;
-       cp && Array.isArray(cp) && cp.length >= 4 ? pp.CLp = !0 : pp.CLp && (pp.CLp = !1, pp.MLp = -1);
-       const Op = ip !== pp.MLp;
-       if (!pp.CLp && Op && 0 !== ip) {
-         const Op = pp.HP.UW.Z4(ip, 0);
+       var mT = TT.Rl.kY.cameraTint;
+       mT && Array.isArray(mT) && mT.length >= 4 ? TT.HHT = !0 : TT.HHT && (TT.HHT = !1, TT.nHT = -1);
+       const WT = UT !== TT.nHT;
+       if (!TT.HHT && WT && 0 !== UT) {
+         const WT = TT.Rl.DL.L_(UT, 0);
```

#### 337. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3242` → after: `L2770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2770) · [Before (L3242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3242)

```diff
-           const ip = pp.HP.UW.RU(Op),
+           const UT = TT.Rl.DL.MZ(WT),
```

#### 338. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3248` → after: `L2776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2776) · [Before (L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3248)

```diff
-       pp.MLp = ip, (Op || pp.CLp) && (cp ? (! function(pp, ip) {
+       TT.nHT = UT, (WT || TT.HHT) && (mT ? (! function(TT, UT) {
```

#### 339. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3252-L3253` → after: `L2780-L2781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2780-L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2780-L2781) · [Before (L3252-L3253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3252-L3253)

```diff
-         } = (0, bp.$)(pp);
-         ip[0] === cp[0] && ip[1] === cp[1] && ip[2] === cp[2] && ip[3] === Op || ((0, hp.W)(pp, {
+         } = (0, VT.R)(TT);
+         UT[0] === mT[0] && UT[1] === mT[1] && UT[2] === mT[2] && UT[3] === WT || ((0, uT.$)(TT, {
```

#### 340. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3257` → after: `L2785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2785) · [Before (L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3257)

```diff
-       }(pp.vLp, cp), pp.wLp.eC(!0)) : pp.wLp.eC(!1))
+       }(TT.DnT, mT), TT.hnT.Qy(!0)) : TT.hnT.Qy(!1))
```

#### 341. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3259` → after: `L2787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2787) · [Before (L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3259)

```diff
-     Si.prototype.h_ = function(pp) {
+     zU.prototype.t5 = function(TT) {
```

#### 342. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3262` → after: `L2790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2790) · [Before (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3262)

```diff
-         var cp = this.yU?.l_;
+         var mT = this.NB?.I3;
```

#### 343. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3264-L3284` → after: `L2792-L2812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2792-L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2792-L2812) · [Before (L3264-L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3264-L3284)

```diff
-       } else pp.metadata[Pi] ? (ap.i.OJ(pp) || this.yop.h_(pp, ip), ap.i.h_(this, pp, ip)) : ip && this.Iw(pp)
-     }, Si.prototype.VU = function() {
-       return this.jLp && performance.now() >= this.kLp
-     }, Si.prototype.QLp = function(pp) {
-       this.kLp = Math.max(this.kLp, performance.now() + pp)
-     }, Si.prototype.Sw = function(pp, ip) {
-       this.mLp.mW(pp, ip)
-     }, Si.prototype.iw = function(pp) {
-       this.kop.iw(pp)
-     }, Si.prototype.JLp = function(pp) {}, Si.prototype.BLp = function(pp) {}, Si.prototype.Z5 = function(pp) {
-       var ip = new op.Zy(pp[0], pp[1], pp[2]);
-       this.pw.meshes.forEach((pp => {
-         Wi(pp) || (pp.position.Iop(ip), pp.metadata && pp.metadata.yLp && pp.ocp(), pp.Rxp && pp.iJ())
-       })), this.kop.Xop(this, pp), this.yU?.particles?.K9(pp, this.HP.BP), ap.i.K9(this, pp), this.yop?.K9(ip)
-     }, Si.prototype.NLp = function(pp, ip) {
-       pp && pp.isEnabled() !== ip && pp.eC(ip)
- ... (5 more removed lines; see GitHub link above)
+       } else TT.metadata[jU] ? (CT.g.lV(TT) || this.NWT.t5(TT, UT), CT.g.t5(this, TT, UT)) : UT && this.FZ(TT)
+     }, zU.prototype.yZ = function() {
+       return this.mHT && performance.now() >= this.WHT
+     }, zU.prototype.LHT = function(TT) {
+       this.WHT = Math.max(this.WHT, performance.now() + TT)
+     }, zU.prototype.PZ = function(TT, UT) {
+       this.zHT.np(TT, UT)
+     }, zU.prototype.IZ = function(TT) {
+       this.WzT.IZ(TT)
+     }, zU.prototype.pHT = function(TT) {}, zU.prototype.BHT = function(TT) {}, zU.prototype.TTT = function(TT) {
+       var UT = new zT.JB(TT[0], TT[1], TT[2]);
+       this.XZ.meshes.forEach((TT => {
+         lU(TT) || (TT.position.FWT(UT), TT.metadata && TT.metadata.GnT && TT.NUT(), TT.znT && TT.HV())
+       })), this.WzT.kzT(this, TT), this.NB?.particles?.W9(TT, this.Rl.ZL), CT.g.W9(this, TT), this.NWT?.W9(UT)
+     }, zU.prototype.ZHT = function(TT, UT) {
+       TT && TT.isEnabled() !== UT && TT.Qy(UT)
+ ... (5 more added lines; see GitHub link above)
```

#### 344. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3288` → after: `L2816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2816) · [Before (L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3288)

```diff
-           xp = this.pw.materials,
+           nT = this.XZ.materials,
```

#### 345. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3291` → after: `L2819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2819) · [Before (L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3291)

```diff
-           pp.u9 ? pp.u9.forEach((pp => Lp.push(pp))) : Lp.push(pp)
+           TT.w6 ? TT.w6.forEach((TT => HT.push(TT))) : HT.push(TT)
```

#### 346. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3299` → after: `L2827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2827) · [Before (L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3299)

```diff
-         var Dp = !!this.yU?.terrain;
+         var jT = !!this.NB?.terrain;
```

#### 347. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3301` → after: `L2829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2829) · [Before (L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3301)

```diff
-           if ((pp.uR() && Wp(pp, "disposed mesh in scene"), 0 !== pp.NOp().length) && (!Dp || !pp.metadata?.[Ip.n]))
+           if ((TT.bJ() && pT(TT, "disposed mesh in scene"), 0 !== TT.vWT().length) && (!jT || !TT.metadata?.[MT.i]))
```

#### 348. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3304-L3305` → after: `L2832-L2833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2832-L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2832-L2833) · [Before (L3304-L3305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3304-L3305)

```diff
-             Sp += pp.Am ? pp.Am.length : 1;
-             var ip = pp.material.u9 || [pp.material];
+             gT += TT.rY ? TT.rY.length : 1;
+             var UT = TT.material.w6 || [TT.material];
```

#### 349. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3315` → after: `L2843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2843) · [Before (L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3315)

```diff
-             (pp.material === ip && (cp = !0), pp.material) && ((pp.material.u9 || [pp.material]).includes(ip) && (cp = !0))
+             (TT.material === UT && (mT = !0), TT.material) && ((TT.material.w6 || [TT.material]).includes(UT) && (mT = !0))
```

#### 350. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3333` → after: `L2861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2861) · [Before (L3333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3333)

```diff
-     }, Si.prototype.TLp = function() {
+     }, zU.prototype.cHT = function() {
```

#### 351. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3335` → after: `L2863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2863) · [Before (L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3335)

```diff
-       for (var ip in this.pw.meshes.forEach((ip => {
+       for (var UT in this.XZ.meshes.forEach((UT => {
```

#### 352. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3343` → after: `L2871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2871) · [Before (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3343)

```diff
-   37636: (pp, ip, cp) => {
+   37521: (TT, UT, mT) => {
```

#### 353. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3355-L3356` → after: `L2883-L2884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2883-L2884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2883-L2884) · [Before (L3355-L3356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3355-L3356)

```diff
-         fi: op,
-         jcp: Math.atan2(-cp, Ip)
+         pp: zT,
+         kmT: Math.atan2(-mT, MT)
```

#### 354. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3360-L3361` → after: `L2888-L2889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2888-L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2888-L2889) · [Before (L3360-L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3360-L3361)

```diff
-       c: () => Op,
-       g: () => op
+       b: () => WT,
+       c: () => zT
```

#### 355. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3364` → after: `L2892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2892) · [Before (L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3364)

```diff
-   38608: (pp, ip, cp) => {
+   38531: (TT, UT, mT) => {
```

#### 356. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3366-L3367` → after: `L2894-L2895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2894-L2895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2894-L2895) · [Before (L3366-L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3366-L3367)

```diff
-       c: () => Hp,
-       d: () => kp
+       b: () => qT,
+       e: () => eT
```

#### 357. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3369` → after: `L2897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2897) · [Before (L3369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3369)

```diff
-     var Op = cp(4176),
+     var WT = mT(4170),
```

#### 358. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3371-L3374` → after: `L2899-L2902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2899-L2902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2899-L2902) · [Before (L3371-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3371-L3374)

```diff
-       Ip = cp(2949),
-       Sp = cp(2929),
-       xp = cp(38613),
-       Lp = cp(38621),
+       MT = mT(2985),
+       gT = mT(2959),
+       nT = mT(38533),
+       HT = mT(38539),
```

#### 359. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3380` → after: `L2908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2908) · [Before (L3380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3380)

```diff
-         this.rc = [], this.ZLp = new Ip.h, this.KLp = {
+         this.fp = [], this.dHT = new MT.i, this.aHT = {
```

#### 360. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3383` → after: `L2911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2911) · [Before (L3383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3383)

```diff
-         }, this.VLp = {
+         }, this.yHT = {
```

#### 361. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3386` → after: `L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2914) · [Before (L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3386)

```diff
-         }, this.iYp = {
+         }, this.IHT = {
```

#### 362. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3389` → after: `L2917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2917) · [Before (L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3389)

```diff
-         }, this.cYp = !1, this.OYp = null, this.oYp = [], this.IYp = [], this.cU = new Map, this.SYp = [NaN, NaN, NaN], this.xYp = !1
+         }, this.QHT = !1, this.sHT = null, this.FHT = [], this.PHT = [], this.XB = new Map, this.VHT = [NaN, NaN, NaN], this.uHT = !1
```

#### 363. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3391` → after: `L2919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2919) · [Before (L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3391)

```diff
-       LYp(pp, ip, cp) {
+       CHT(TT, UT, mT) {
```

#### 364. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3394` → after: `L2922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2922) · [Before (L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3394)

```diff
-         this.OYp = op, this.oYp = [];
+         this.sHT = zT, this.FHT = [];
```

#### 365. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3397-L3398` → after: `L2925-L2926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2925-L2926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2925-L2926) · [Before (L3397-L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3397-L3398)

```diff
-             for (var Dp = -Ip; Dp <= Ip; Dp++) op(xp, Lp, Dp) && this.oYp.push([xp, Lp, Dp]);
-         for (var Ap of (vp(this.ZLp, Op, cp(Op[0], Op[1])), this.rc)) Ap.bOp = 0
+             for (var jT = -MT; jT <= MT; jT++) zT(nT, HT, jT) && this.FHT.push([nT, HT, jT]);
+         for (var lT of (vT(this.dHT, WT, mT(WT[0], WT[1])), this.fp)) lT.iWT = 0
```

#### 366. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3400` → after: `L2928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2928) · [Before (L3400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3400)

```diff
-       uxp(pp, ip) {
+       TnT(TT, UT) {
```

#### 367. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3403` → after: `L2931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2931) · [Before (L3403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3403)

```diff
-           var [op, Ip, Sp] = ip.jOp(Math.floor(Op[0]), Math.floor(Op[1]), Math.floor(Op[2]));
+           var [zT, MT, gT] = UT.zWT(Math.floor(WT[0]), Math.floor(WT[1]), Math.floor(WT[2]));
```

#### 368. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3408` → after: `L2936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2936) · [Before (L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3408)

```diff
-             bOp: 0
+             iWT: 0
```

#### 369. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3411` → after: `L2939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2939) · [Before (L3411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3411)

```diff
-         var xp = this.rc;
+         var nT = this.fp;
```

#### 370. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3415` → after: `L2943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2943) · [Before (L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3415)

```diff
-             Yp && (Lp.bOp = Yp.bOp)
+             kT && (HT.iWT = kT.iWT)
```

#### 371. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3417-L3418` → after: `L2945-L2946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2945-L2946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2945-L2946) · [Before (L3417-L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3417-L3418)

```diff
-           for (var Dp of xp) !Wp(cp, Dp.i, Dp.j, Dp.k) && this.IYp.length < 16 && this.IYp.push(Dp);
-           this.rc = cp
+           for (var jT of nT) !pT(mT, jT.i, jT.j, jT.k) && this.PHT.length < 16 && this.PHT.push(jT);
+           this.fp = mT
```

#### 372. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3422` → after: `L2950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2950) · [Before (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3422)

```diff
-         return this.rc.length > 0 || this.IYp.length > 0
+         return this.fp.length > 0 || this.PHT.length > 0
```

#### 373. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3424-L3425` → after: `L2952-L2953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2952-L2953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2952-L2953) · [Before (L3424-L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3424-L3425)

```diff
-       DYp(pp, ip, cp) {
-         this.rc.length > 0 && this.cU.set(pp + "|" + ip + "|" + cp, performance.now() + 5e3)
+       KHT(TT, UT, mT) {
+         this.fp.length > 0 && this.XB.set(TT + "|" + UT + "|" + mT, performance.now() + 5e3)
```

#### 374. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3427-L3428` → after: `L2955-L2956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2955-L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2955-L2956) · [Before (L3427-L3428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3427-L3428)

```diff
-       hOp(pp, ip, cp) {
-         if (0 === this.cU.size) return !1;
+       bWT(TT, UT, mT) {
+         if (0 === this.XB.size) return !1;
```

#### 375. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3430-L3431` → after: `L2958-L2959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2958-L2959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2958-L2959) · [Before (L3430-L3431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3430-L3431)

```diff
-           op = this.cU.get(Op);
-         return void 0 !== op && (performance.now() < op || (this.cU.delete(Op), !1))
+           zT = this.XB.get(WT);
+         return void 0 !== zT && (performance.now() < zT || (this.XB.delete(WT), !1))
```

#### 376. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3433-L3436` → after: `L2961-L2964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2961-L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2961-L2964) · [Before (L3433-L3436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3433-L3436)

```diff
-       rLp(pp) {
-         if (this.cYp) {
-           for (var ip of this.rc) yp(this.oYp, ip, pp);
-           this.cYp = !1
+       xHT(TT) {
+         if (this.QHT) {
+           for (var UT of this.fp) BT(this.FHT, UT, TT);
+           this.QHT = !1
```

#### 377. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3438-L3439` → after: `L2966-L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2966-L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2966-L2967) · [Before (L3438-L3439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3438-L3439)

```diff
-         for (var cp of this.IYp) yp(this.oYp, cp, pp);
-         this.IYp.length = 0
+         for (var mT of this.PHT) BT(this.FHT, mT, TT);
+         this.PHT.length = 0
```

#### 378. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3441-L3445` → after: `L2969-L2973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2969-L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2969-L2973) · [Before (L3441-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3441-L3445)

```diff
-       pYp(pp, ip, cp, Op) {
-         var op = this.SYp;
-         ip[0] === op[0] && ip[1] === op[1] && ip[2] === op[2] || (op[0] = ip[0], op[1] = ip[1], op[2] = ip[2], this.cU.clear()), !cp && this.rc.length > 0 && !this.xYp && (console.warn("noa: second loading centres set without a chunkRequestArea, so they load chunks however far aw … [truncated]
-         for (var Ip = cp || [1 / 0, 1 / 0], Sp = this.VLp, xp = this.iYp, Lp = 0; Lp < 3; Lp++) xp.min[Lp] = Sp.min[Lp], xp.max[Lp] = Sp.max[Lp];
-         for (Up(Sp, pp, Ip, Ap, Op), Up(this.KLp, pp, Ip, Dp, Op), Lp = 0; Lp < 3; Lp++) Sp.min[Lp] === xp.min[Lp] && Sp.max[Lp] === xp.max[Lp] || (this.cYp = !0)
+       XHT(TT, UT, mT, WT) {
+         var zT = this.VHT;
+         UT[0] === zT[0] && UT[1] === zT[1] && UT[2] === zT[2] || (zT[0] = UT[0], zT[1] = UT[1], zT[2] = UT[2], this.XB.clear()), !mT && this.fp.length > 0 && !this.uHT && (console.warn("noa: second loading centres set without a chunkRequestArea, so they load chunks however far aw … [truncated]
+         for (var MT = mT || [1 / 0, 1 / 0], gT = this.yHT, nT = this.IHT, HT = 0; HT < 3; HT++) nT.min[HT] = gT.min[HT], nT.max[HT] = gT.max[HT];
+         for (ZT(gT, TT, MT, lT, WT), ZT(this.aHT, TT, MT, jT, WT), HT = 0; HT < 3; HT++) gT.min[HT] === nT.min[HT] && gT.max[HT] === nT.max[HT] || (this.QHT = !0)
```

#### 379. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3448-L3450` → after: `L2976-L2978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2976-L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2976-L2978) · [Before (L3448-L3450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3448-L3450)

```diff
-         if (!wp(this.VLp, pp, ip, cp)) return !1;
-         for (var Op = this.rc, op = 0; op < Op.length; op++)
-           if (this.OYp(pp - Op[op].i, ip - Op[op].j, cp - Op[op].k)) return !0;
+         if (!cT(this.yHT, TT, UT, mT)) return !1;
+         for (var WT = this.fp, zT = 0; zT < WT.length; zT++)
+           if (this.sHT(TT - WT[zT].i, UT - WT[zT].j, mT - WT[zT].k)) return !0;
```

#### 380. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3453-L3455` → after: `L2981-L2983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L2981-L2983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L2981-L2983) · [Before (L3453-L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3453-L3455)

```diff
-       AYp(pp, ip, cp, Op, op) {
-         var Ip = this.rc;
-         pp.pC(((pp, Sp, xp) => {
+       SHT(TT, UT, mT, WT, zT) {
+         var MT = this.fp;
+         TT.Uy(((TT, gT, nT) => {
```

#### 381. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3489-L3494` → after: `L3017-L3022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3017-L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3017-L3022) · [Before (L3489-L3494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3489-L3494)

```diff
-       Qy: 32,
-       Xu: [2, 2],
-       pE: [3, 3],
-       Yip: !1,
-       Xcp: !1,
-       WE: null
+       cB: 32,
+       mY: [2, 2],
+       ZI: [3, 3],
+       HUT: !1,
+       ZmT: !1,
+       qI: null
```

#### 382. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3498-L3500` → after: `L3026-L3028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3026-L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3026-L3028) · [Before (L3498-L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3498-L3500)

```diff
-         super(), ip = Object.assign({}, tp, ip), this.HP = pp, this.Dip = !1, this.aU = !1, this.yy = Sp.e, this.Xcp = !!ip.Xcp, this.WE = ip.WE, this.Yip = !!ip.Yip, this.qip = 50, this.Cip = 50, this.WYp = 3, this.yYp = 2, this.Eip = this.yYp / this.WYp, this.Xip = 3, this.epp  … [truncated]
-         var cp = this.epp;
-         this.jOp = ap, this.qYp = np, this.MYp = Fp, this.CYp = gp, 0 === (cp & cp - 1) && (this.EYp = 0 | Math.log2(cp), this.XYp = cp - 1 | 0, this.MYp = Gp, this.CYp = rp), this.Ncp = new Set, this.Tcp = new Set, this.fcp = [], this.hcp = new Set, this.acp = new Set, this.ncp  … [truncated]
+         super(), UT = Object.assign({}, fT, UT), this.Rl = TT, this.kUT = !1, this.bZ = !1, this.Ap = gT.d, this.ZmT = !!UT.ZmT, this.qI = UT.qI, this.HUT = !!UT.HUT, this.eUT = 50, this.YUT = 50, this.NHT = 3, this.EHT = 2, this.JUT = this.EHT / this.NHT, this.xUT = 3, this.iTT  … [truncated]
+         var mT = this.iTT;
+         this.zWT = CT, this.nkT = rT, this.HkT = KT, this.kkT = ST, 0 === (mT & mT - 1) && (this.jkT = 0 | Math.log2(mT), this.lkT = mT - 1 | 0, this.HkT = GT, this.kkT = NT), this.bmT = new Set, this.OmT = new Set, this.emT = [], this.YmT = new Set, this.JmT = new Set, this.xmT  … [truncated]
```

#### 383. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3503-L3505` → after: `L3031-L3033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3031-L3033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3031-L3033) · [Before (L3503-L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3503-L3505)

```diff
-     Hp.prototype.JYp = function(pp, ip, cp) {
-       return this.XU.lU(this.MYp(pp), this.MYp(ip), this.MYp(cp))
-     }, Hp.prototype.wG = function() {
+     qT.prototype.BkT = function(TT, UT, mT) {
+       return this.lZ.LZ(this.HkT(TT), this.HkT(UT), this.HkT(mT))
+     }, qT.prototype.QG = function() {
```

#### 384. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3509-L3511` → after: `L3037-L3039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3037-L3039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3037-L3039) · [Before (L3509-L3511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3509-L3511)

```diff
-       var Op = this.JYp(pp, ip, cp);
-       return Op ? Op.hP.get(this.CYp(pp), this.CYp(ip), this.CYp(cp)) : 0
-     }, Hp.prototype.vG = function() {
+       var WT = this.BkT(TT, UT, mT);
+       return WT ? WT.iL.get(this.kkT(TT), this.kkT(UT), this.kkT(mT)) : 0
+     }, qT.prototype.sG = function() {
```

#### 385. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3515-L3516` → after: `L3043-L3044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3043-L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3043-L3044) · [Before (L3515-L3516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3515-L3516)

```diff
-       return !!this.TP(pp, ip, cp)
-     }, Hp.prototype.TP = function() {
+       return !!this.vL(TT, UT, mT)
+     }, qT.prototype.vL = function() {
```

#### 386. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3520` → after: `L3048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3048) · [Before (L3520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3520)

```diff
-       var Op = this.JYp(pp, ip, cp);
+       var WT = this.BkT(TT, UT, mT);
```

#### 387. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3522-L3524` → after: `L3050-L3052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3050-L3052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3050-L3052) · [Before (L3522-L3524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3522-L3524)

```diff
-       const op = Op.get(this.CYp(pp), this.CYp(ip), this.CYp(cp));
-       return kp(pp, ip, cp, op, this.HP.UW.wW(op), this.lT, this.II, this.hT)
-     }, Hp.prototype.O4 = function() {
+       const zT = WT.get(this.kkT(TT), this.kkT(UT), this.kkT(mT));
+       return eT(TT, UT, mT, zT, this.Rl.DL.oL(zT), this.IK, this.Qz, this.sK)
+     }, qT.prototype.n_ = function() {
```

#### 388. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3528-L3530` → after: `L3056-L3058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3056-L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3056-L3058) · [Before (L3528-L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3528-L3530)

```diff
-       var Op = this.wG(pp, ip, cp);
-       return this.HP.UW.O4(Op)
-     }, Hp.prototype.o4 = function() {
+       var WT = this.QG(TT, UT, mT);
+       return this.Rl.DL.n_(WT)
+     }, qT.prototype.k_ = function() {
```

#### 389. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3534-L3536` → after: `L3062-L3064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3062-L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3062-L3064) · [Before (L3534-L3536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3534-L3536)

```diff
-       var Op = this.wG(pp, ip, cp);
-       return this.HP.UW.o4(Op)
-     }, Hp.prototype.BYp = function() {
+       var WT = this.QG(TT, UT, mT);
+       return this.Rl.DL.k_(WT)
+     }, qT.prototype.ZkT = function() {
```

#### 390. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3540-L3542` → after: `L3068-L3070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3068-L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3068-L3070) · [Before (L3540-L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3540-L3542)

```diff
-       var Op = this.wG(pp, ip, cp);
-       return this.HP.UW.W4(Op)
-     }, Hp.prototype.jF = function() {
+       var WT = this.QG(TT, UT, mT);
+       return this.Rl.DL.l_(WT)
+     }, qT.prototype.qS = function() {
```

#### 391. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3547-L3549` → after: `L3075-L3077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3075-L3077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3075-L3077) · [Before (L3547-L3549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3547-L3549)

```diff
-       var op = this.JYp(ip, cp, Op);
-       if (op) return op.set(this.CYp(ip), this.CYp(cp), this.CYp(Op), pp)
-     }, Hp.prototype.Iq = function(pp) {
+       var zT = this.BkT(UT, mT, WT);
+       if (zT) return zT.set(this.kkT(UT), this.kkT(mT), this.kkT(WT), TT)
+     }, qT.prototype.PJ = function(TT) {
```

#### 392. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3551-L3558` → after: `L3079-L3086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3079-L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3079-L3086) · [Before (L3551-L3558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3551-L3558)

```diff
-       var cp = ip ? ip.kF : (pp, ip, cp, Op) => {
-           this.jF(Op, pp, ip, cp)
-         },
-         Op = (0, Lp.pb)(pp);
-       this.upp && (0, Lp.ob)(pp, Lp.eb) >= Lp.eb && (Op = this.upp.Iq(this, pp, ip, cp)), Op && (0, Lp.rb)(pp, Op, cp)
-     }, Hp.prototype.lG = function(pp, ip, cp) {
-       return !!this.JYp(pp, ip, cp)
-     }, Hp.prototype.bYp = function(pp) {
+       var mT = UT ? UT.bS : (TT, UT, mT, WT) => {
+           this.qS(WT, TT, UT, mT)
+         },
+         WT = (0, HT.jb)(TT);
+       this.bTT && (0, HT.fb)(TT, HT.ab) >= HT.ab && (WT = this.bTT.PJ(this, TT, UT, mT)), WT && (0, HT.lb)(TT, WT, mT)
+     }, qT.prototype.hG = function(TT, UT, mT) {
+       return !!this.BkT(TT, UT, mT)
+     }, qT.prototype.fkT = function(TT) {
```

#### 393. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3562` → after: `L3090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3090) · [Before (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3562)

```diff
-             if (this.vG(Op, op, Ip)) return !1;
+             if (this.sG(WT, zT, MT)) return !1;
```

#### 394. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3564` → after: `L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3092) · [Before (L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3564)

```diff
-     }, Hp.prototype.Jm = function(pp, ip) {
+     }, qT.prototype.mJ = function(TT, UT) {
```

#### 395. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3567-L3570` → after: `L3095-L3098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3095-L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3095-L3098) · [Before (L3567-L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3567-L3570)

```diff
-         if (pp.Kip.remove(xp, Lp, Yp), Dp !== pp.HP.vpp) return fp(pp, cp);
-         if (!pp.Aw.includes(xp, Lp, Yp)) return fp(pp, cp);
-         if (pp.fU.includes(xp, Lp, Yp)) return fp(pp, cp);
-         var Ap = pp.PU;
+         if (TT.CUT.remove(nT, HT, kT), jT !== TT.Rl.cTT) return PT(TT, mT);
+         if (!TT.KZ.includes(nT, HT, kT)) return PT(TT, mT);
+         if (TT.fZ.includes(nT, HT, kT)) return PT(TT, mT);
+         var lT = TT.SB;
```

#### 396. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3572` → after: `L3100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3100) · [Before (L3572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3572)

```diff
-         var Pp = pp.XU.lU(xp, Lp, Yp);
+         var LT = TT.lZ.LZ(nT, HT, kT);
```

#### 397. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3574` → after: `L3102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3102) · [Before (L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3574)

```diff
-           var Wp = Pp.hP;
+           var pT = LT.iL;
```

#### 398. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3576` → after: `L3104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3104) · [Before (L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3576)

```diff
-             Pp.AU(cp, op, Ip)
+             LT.rB(mT, zT, MT)
```

#### 399. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3578` → after: `L3106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3106) · [Before (L3578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3578)

```diff
-             Wp !== cp && Ap.release(Pp.hP === cp ? Wp : cp)
+             pT !== mT && lT.release(LT.iL === mT ? pT : mT)
```

#### 400. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3581` → after: `L3109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3109) · [Before (L3581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3581)

```diff
-           var yp = pp.epp;
+           var BT = TT.iTT;
```

#### 401. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3583` → after: `L3111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3111) · [Before (L3583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3583)

```diff
-             Pp = new Sp.e(pp.HP, ip, xp, Lp, Yp, yp, cp, Op, op, Ip)
+             LT = new gT.d(TT.Rl, UT, nT, HT, kT, BT, mT, WT, zT, MT)
```

#### 402. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3587` → after: `L3115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3115) · [Before (L3587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3587)

```diff
-           pp.XU.YM(xp, Lp, Yp, Pp), Ap.bR(xp, Lp, Yp, cp), pp.HP.WU.JLp(Pp), pp.emit("chunkAdded", Pp)
+           TT.lZ.Xw(nT, HT, kT, LT), lT.aJ(nT, HT, kT, mT), TT.Rl.GB.pHT(LT), TT.emit("chunkAdded", LT)
```

#### 403. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3590-L3592` → after: `L3118-L3120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3118-L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3118-L3120) · [Before (L3590-L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3590-L3592)

```diff
-             Ip = pp.lYp.get(op);
-           (void 0 === Ip || cp > Ip) && pp.lYp.set(op, cp)
-         })(pp, xp, Lp, Yp), Pp.ey && function(pp, ip) {
+             MT = TT.LkT.get(zT);
+           (void 0 === MT || mT > MT) && TT.LkT.set(zT, mT)
+         })(TT, nT, HT, kT), LT.zB && function(TT, UT) {
```

#### 404. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3594-L3597` → after: `L3122-L3125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3122-L3125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3122-L3125) · [Before (L3594-L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3594-L3597)

```diff
-             var Ip = pp.XU.lU(ip.i + cp, ip.j + Op, ip.k + op);
-             if (Ip && !Ip.ey) {
-               var Sp = cp + Op + op < 0 ? ip : Ip;
-               Sp.CU = !0, Sp.JU = !0
+             var MT = TT.lZ.LZ(UT.i + mT, UT.j + WT, UT.k + zT);
+             if (MT && !MT.zB) {
+               var gT = mT + WT + zT < 0 ? UT : MT;
+               gT.kZ = !0, gT.BZ = !0
```

#### 405. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3601-L3604` → after: `L3129-L3132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3129-L3132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3129-L3132) · [Before (L3601-L3604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3601-L3604)

```diff
-         Tp(pp, Pp), sp(pp, xp, Lp, Yp, Pp), pp.mYp.size > 0 && pp.mYp.delete(xp + "|" + Lp + "|" + Yp) && Pp.gR(Pp.ey);
-         return ci("Ey"), !0
-       }(this, pp, ip, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sp.h, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null)
-     }, Hp.prototype.Lw = function(pp, ip, cp) {
+         FT(TT, LT), DT(TT, nT, HT, kT, LT), TT.MkT.size > 0 && TT.MkT.delete(nT + "|" + HT + "|" + kT) && LT.yJ(LT.zB);
+         return TU("pB"), !0
+       }(this, TT, UT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : gT.g, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null)
+     }, qT.prototype.uZ = function(TT, UT, mT) {
```

#### 406. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3606-L3609` → after: `L3134-L3137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3134-L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3134-L3137) · [Before (L3606-L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3606-L3609)

```diff
-       if (Sp !== this.HP.vpp) return !1;
-       var xp = this.XU.lU(Op, op, Ip);
-       return !!xp && (this.HP.Zk.xw(xp, ip, cp), !0)
-     }, Hp.prototype.OE = function() {
+       if (gT !== this.Rl.cTT) return !1;
+       var nT = this.lZ.LZ(WT, zT, MT);
+       return !!nT && (this.Rl.JY.VZ(nT, UT, mT), !0)
+     }, qT.prototype.vI = function() {
```

#### 407. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3612-L3617` → after: `L3140-L3145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3140-L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3140-L3145) · [Before (L3612-L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3612-L3617)

```diff
-       var cp = Array.isArray(pp) ? pp : [pp, pp],
-         Op = Array.isArray(ip) ? ip : [ip, ip];
-       Op[0] < cp[0] + 1 && (Op[0] = cp[0] + 1), Op[1] < cp[1] + 1 && (Op[1] = cp[1] + 1), this.zC = cp, this.FOp = Op, this.UYp = Kp(cp[0], cp[1]), this.wYp = Kp(Op[0], Op[1]), vp(this.sLp, cp, this.UYp), Zp(this, this.sLp, 0, 0, 0, !0), this.RYp.LYp(cp, 1, Kp), Zp(this, this.RYp … [truncated]
-     }, Hp.prototype.ucp = function(pp) {
-       this.RYp.uxp(pp, this)
-     }, Hp.prototype.hYp = function() {
+       var mT = Array.isArray(TT) ? TT : [TT, TT],
+         WT = Array.isArray(UT) ? UT : [UT, UT];
+       WT[0] < mT[0] + 1 && (WT[0] = mT[0] + 1), WT[1] < mT[1] + 1 && (WT[1] = mT[1] + 1), this.HI = mT, this.YWT = WT, this.hHT = oT(mT[0], mT[1]), this.DHT = oT(WT[0], WT[1]), vT(this.tHT, mT, this.hHT), ET(this, this.tHT, 0, 0, 0, !0), this.gkT.CHT(mT, 1, oT), ET(this, this.gkT … [truncated]
+     }, qT.prototype.HmT = function(TT) {
+       this.gkT.TnT(TT, this)
+     }, qT.prototype.qkT = function() {
```

#### 408. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3621-L3623` → after: `L3149-L3151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3149-L3151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3149-L3151) · [Before (L3621-L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3621-L3623)

```diff
-       var [Op, op, Ip] = this.jOp(pp, ip, cp);
-       this.RYp.DYp(Op, op, Ip)
-     }, Hp.prototype.jYp = function(pp) {
+       var [WT, zT, MT] = this.zWT(TT, UT, mT);
+       this.gkT.KHT(WT, zT, MT)
+     }, qT.prototype.WkT = function(TT) {
```

#### 409. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3625` → after: `L3153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3153) · [Before (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3625)

```diff
-       this.Kip.remove(ip, cp, Op), op === this.HP.vpp && this.Aw.includes(ip, cp, Op) && !this.XU.lU(ip, cp, Op) && (hp(this, ip, cp, Op), this.sip.remove(ip, cp, Op), this.kYp.set(ip + "|" + cp + "|" + Op, performance.now()))
+       this.CUT.remove(UT, mT, WT), zT === this.Rl.cTT && this.KZ.includes(UT, mT, WT) && !this.lZ.LZ(UT, mT, WT) && (uT(this, UT, mT, WT), this.uUT.remove(UT, mT, WT), this.zkT.set(UT + "|" + mT + "|" + WT, performance.now()))
```

#### 410. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3632-L3634` → after: `L3160-L3162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3160-L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3160-L3162) · [Before (L3632-L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3632-L3634)

```diff
-     Hp.prototype.aYp = function() {
-       0 !== this.kYp.size && (this.kYp.clear(), this.HYp = 0)
-     }, Hp.prototype.nYp = function(pp) {
+     qT.prototype.ikT = function() {
+       0 !== this.zkT.size && (this.zkT.clear(), this.RHT = 0)
+     }, qT.prototype.bkT = function(TT) {
```

#### 411. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3636-L3637` → after: `L3164-L3165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3164-L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3164-L3165) · [Before (L3636-L3637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3636-L3637)

```diff
-         for (var cp = pp.jOp(ip.base[0], ip.base[1], ip.base[2]), Op = pp.jOp(ip.max[0], ip.max[1], ip.max[2]), op = 0; op < 3; op++) Number.isFinite(ip.base[op]) || (cp[op] = ip.base[op]), Number.isFinite(ip.max[op]) || (Op[op] = ip.max[op]);
-         pp.Aw.forEach((ip => {
+         for (var mT = TT.zWT(UT.base[0], UT.base[1], UT.base[2]), WT = TT.zWT(UT.max[0], UT.max[1], UT.max[2]), zT = 0; zT < 3; zT++) Number.isFinite(UT.base[zT]) || (mT[zT] = UT.base[zT]), Number.isFinite(UT.max[zT]) || (WT[zT] = UT.max[zT]);
+         TT.KZ.forEach((UT => {
```

#### 412. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3639` → after: `L3167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3167) · [Before (L3639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3639)

```diff
-           op < cp[0] || op > Op[0] || Ip < cp[1] || Ip > Op[1] || Sp < cp[2] || Sp > Op[2] || (pp.bU.add(op, Ip, Sp), pp.fU.remove(op, Ip, Sp), pp.sip.remove(op, Ip, Sp), Np(pp, op, Ip, Sp))
+           zT < mT[0] || zT > WT[0] || MT < mT[1] || MT > WT[1] || gT < mT[2] || gT > WT[2] || (TT.qZ.add(zT, MT, gT), TT.fZ.remove(zT, MT, gT), TT.uUT.remove(zT, MT, gT), sT(TT, zT, MT, gT))
```

#### 413. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3642` → after: `L3170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3170) · [Before (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3642)

```diff
-         pp.HYp = 0
+         TT.RHT = 0
```

#### 414. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3644` → after: `L3172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3172) · [Before (L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3644)

```diff
-     }, Hp.prototype.lcp = function() {
+     }, qT.prototype.vmT = function() {
```

#### 415. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3648-L3651` → after: `L3176-L3179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3176-L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3176-L3179) · [Before (L3648-L3651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3648-L3651)

```diff
-       if (!this.Xcp) throw ep;
-       var [Op, op, Ip] = this.jOp(pp, ip, cp);
-       Xp(this, Op, op, Ip), this.Aw.add(Op, op, Ip), this.sip.add(Op, op, Ip)
-     }, Hp.prototype.Bcp = function() {
+       if (!this.ZmT) throw bT;
+       var [WT, zT, MT] = this.zWT(TT, UT, mT);
+       aT(this, WT, zT, MT), this.KZ.add(WT, zT, MT), this.uUT.add(WT, zT, MT)
+     }, qT.prototype.imT = function() {
```

#### 416. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3655-L3658` → after: `L3183-L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3183-L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3183-L3186) · [Before (L3655-L3658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3655-L3658)

```diff
-       var [Op, op, Ip] = this.jOp(pp, ip, cp);
-       this.fU.add(Op, op, Ip), this.sip.remove(Op, op, Ip), Np(this, Op, op, Ip), this.Kip.remove(Op, op, Ip);
-       for (var Sp = Op + "|" + op + "|" + Ip, xp = !!this.XU.lU(Op, op, Ip) || this.mYp.has(Sp); !Jp(this););
-       xp && this.mYp.add(Sp), this.HYp = 0
+       var [WT, zT, MT] = this.zWT(TT, UT, mT);
+       this.fZ.add(WT, zT, MT), this.uUT.remove(WT, zT, MT), sT(this, WT, zT, MT), this.CUT.remove(WT, zT, MT);
+       for (var gT = WT + "|" + zT + "|" + MT, nT = !!this.lZ.LZ(WT, zT, MT) || this.MkT.has(gT); !IT(this););
+       nT && this.MkT.add(gT), this.RHT = 0
```

#### 417. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3678` → after: `L3206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3206) · [Before (L3678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3678)

```diff
-       const Ap = `${pp}|${ip}|${cp}`;
+       const lT = `${TT}|${UT}|${mT}`;
```

#### 418. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3685` → after: `L3213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3213) · [Before (L3685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3685)

```diff
-       return Sp.has(Op) ? Dp : (xp.has(Op), !Dp)
+       return gT.has(WT) ? jT : (nT.has(WT), !jT)
```

#### 419. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3689` → after: `L3217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3217) · [Before (L3689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3689)

```diff
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp.HP.entities.sH(pp.HP.NJ);
+       let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.Rl.entities.Aq(TT.Rl.VV);
```

#### 420. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3691` → after: `L3219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3219) · [Before (L3691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3691)

```diff
-       return pp.jOp(Math.floor(cp), Math.floor(Op), Math.floor(op))
+       return TT.zWT(Math.floor(mT), Math.floor(WT), Math.floor(zT))
```

#### 421. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3693-L3695` → after: `L3221-L3223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3221-L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3221-L3223) · [Before (L3693-L3695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3693-L3695)

```diff
-     Hp.prototype.fpp = function(pp, ip, cp) {
-       return this.HP.Tu.canChange ? mp(pp, ip, cp, this.wG(pp, ip, cp), this.hcp, this.Ncp, this.acp, this.Tcp, this.ncp, this.fcp, !1) : mp(pp, ip, cp, this.wG(pp, ip, cp), this.Ncp, this.hcp, this.Tcp, this.acp, this.fcp, this.ncp, !0)
-     }, Hp.prototype.LP = function() {
+     qT.prototype.VTT = function(TT, UT, mT) {
+       return this.Rl.kY.canChange ? YT(TT, UT, mT, this.QG(TT, UT, mT), this.YmT, this.bmT, this.JmT, this.OmT, this.xmT, this.emT, !1) : YT(TT, UT, mT, this.QG(TT, UT, mT), this.bmT, this.YmT, this.OmT, this.JmT, this.emT, this.xmT, !0)
+     }, qT.prototype.Cl = function() {
```

#### 422. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3697` → after: `L3225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3225) · [Before (L3697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3697)

```diff
-         ip = this.HP.entities.sH(this.HP.NJ),
+         UT = this.Rl.entities.Aq(this.Rl.VV),
```

#### 423. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3699-L3700` → after: `L3227-L3228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3227-L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3227-L3228) · [Before (L3699-L3700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3699-L3700)

```diff
-         Ip = this.tYp;
-       if ((cp !== Ip[0] || Op !== Ip[1] || op !== Ip[2]) && (this.emit("playerEnteredChunk", cp, Op, op), this.tYp = [cp, Op, op], this.HYp = 0, this.aYp()), this.kYp.size > 0 && function(pp, ip) {
+         MT = this.AHT;
+       if ((mT !== MT[0] || WT !== MT[1] || zT !== MT[2]) && (this.emit("playerEnteredChunk", mT, WT, zT), this.AHT = [mT, WT, zT], this.RHT = 0, this.ikT()), this.zkT.size > 0 && function(TT, UT) {
```

#### 424. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3702-L3707` → after: `L3230-L3235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3230-L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3230-L3235) · [Before (L3702-L3707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3702-L3707)

```diff
-           pp.kYp.forEach(((Op, op) => {
-             ip - Op >= 1e3 && (pp.kYp.delete(op), cp = !0)
-           })), cp && (pp.HYp = 0)
-         }(this, pp), this.vYp !== this.HP.vpp && (this.kYp.clear(), this.Xcp || (this.Ccp(), this.HYp = 0, Jp(this)), this.vYp = this.HP.vpp), ii("start"), ci("start"), this.Xcp || (this.RYp.isActive() && (this.RYp.pYp(ip, [cp, Op, op], this.WE, this.epp), function(pp, ip, cp, Op … [truncated]
-           var op = pp.wYp,
-             Ip = pp.RYp,
+           TT.zkT.forEach(((WT, zT) => {
+             UT - WT >= 1e3 && (TT.zkT.delete(zT), mT = !0)
+           })), mT && (TT.RHT = 0)
+         }(this, TT), this.oHT !== this.Rl.cTT && (this.zkT.clear(), this.ZmT || (this.BmT(), this.RHT = 0, IT(this)), this.oHT = this.Rl.cTT), RT("start"), TU("start"), this.ZmT || (this.gkT.isActive() && (this.gkT.XHT(UT, [mT, WT, zT], this.qI, this.iTT), function(TT, UT, mT, WT … [truncated]
+           var zT = TT.DHT,
+             MT = TT.gkT,
```

#### 425. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3709-L3711` → after: `L3237-L3239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3237-L3239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3237-L3239) · [Before (L3709-L3711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3709-L3711)

```diff
-           Ip.rLp(((xp, Lp, Yp) => {
-             pp.Aw.includes(xp, Lp, Yp) && !pp.fU.includes(xp, Lp, Yp) && (op(xp - ip, Lp - cp, Yp - Op) || Ip.rP(xp, Lp, Yp) || (pp.fU.add(xp, Lp, Yp), pp.sip.remove(xp, Lp, Yp), Np(pp, xp, Lp, Yp), Sp = !0))
-           })), Sp && Zp(pp, pp.fU, ip, cp, Op)
+           MT.xHT(((nT, HT, kT) => {
+             TT.KZ.includes(nT, HT, kT) && !TT.fZ.includes(nT, HT, kT) && (zT(nT - UT, HT - mT, kT - WT) || MT.xL(nT, HT, kT) || (TT.fZ.add(nT, HT, kT), TT.uUT.remove(nT, HT, kT), sT(TT, nT, HT, kT), gT = !0))
+           })), gT && ET(TT, TT.fZ, UT, mT, WT)
```

#### 426. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3713-L3715` → after: `L3241-L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3241-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3241-L3243) · [Before (L3713-L3715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3713-L3715)

```diff
-           var op = pp.wYp,
-             Ip = pp.fU,
-             Sp = Ip.count() + pp.bU.count(),
+           var zT = TT.DHT,
+             MT = TT.fZ,
+             gT = MT.count() + TT.qZ.count(),
```

#### 427. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3718` → after: `L3246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3246) · [Before (L3718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3718)

```diff
-           var Lp = pp.Aw.qy;
+           var HT = TT.KZ.jB;
```

#### 428. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3721` → after: `L3249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3249) · [Before (L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3721)

```diff
-             var Pp = Lp[pp.eYp++ % Lp.length],
+             var LT = HT[TT.UkT++ % HT.length],
```

#### 429. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3725` → after: `L3253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3253) · [Before (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3725)

```diff
-             if (!Ip.includes(Wp, yp, Up) && (!op(Wp - ip, yp - cp, Up - Op) && !pp.RYp.rP(Wp, yp, Up) && (pp.fU.add(Wp, yp, Up), pp.sip.remove(Wp, yp, Up), Np(pp, Wp, yp, Up), Dp = !0, ++Sp > xp))) break
+             if (!MT.includes(pT, BT, ZT) && (!zT(pT - UT, BT - mT, ZT - WT) && !TT.gkT.xL(pT, BT, ZT) && (TT.fZ.add(pT, BT, ZT), TT.uUT.remove(pT, BT, ZT), sT(TT, pT, BT, ZT), jT = !0, ++gT > nT))) break
```

#### 430. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3727` → after: `L3255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3255) · [Before (L3727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3727)

```diff
-           pp.eYp = pp.eYp % Lp.length, Dp && Zp(pp, Ip, ip, cp, Op)
+           TT.UkT = TT.UkT % HT.length, jT && ET(TT, MT, UT, mT, WT)
```

#### 431. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3729` → after: `L3257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3257) · [Before (L3729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3729)

```diff
-           var op = pp.sip;
+           var zT = TT.uUT;
```

#### 432. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3731` → after: `L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3259) · [Before (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3731)

```diff
-           for (var Ip = pp.RYp, Sp = Ip.rc, xp = 0; xp < Sp.length && op.count() < qp; xp++) {
+           for (var MT = TT.gkT, gT = MT.fp, nT = 0; nT < gT.length && zT.count() < xT; nT++) {
```

#### 433. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3733` → after: `L3261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3261) · [Before (L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3733)

```diff
-             Lp.bOp = Mp(pp, Ip.ZLp.qy, Lp.bOp, Lp.i, Lp.j, Lp.k, Ip.KLp)
+             HT.iWT = dT(TT, MT.dHT.jB, HT.iWT, HT.i, HT.j, HT.k, MT.aHT)
```

#### 434. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3735-L3737` → after: `L3263-L3265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3263-L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3263-L3265) · [Before (L3735-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3735-L3737)

```diff
-           op.count() < qp && (pp.HYp = Mp(pp, pp.sLp.qy, pp.HYp, ip, cp, Op, null));
-           Ip.AYp(op, zp, ip, cp, Op)
-         }(this, cp, Op, op), ii("addQueue")), this.HP.Zk.TU(), this.PYp > 0) this.PYp--;
+           zT.count() < xT && (TT.RHT = dT(TT, TT.tHT.jB, TT.RHT, UT, mT, WT, null));
+           MT.SHT(zT, hT, UT, mT, WT)
+         }(this, mT, WT, zT), RT("addQueue")), this.Rl.JY.vZ(), this.GHT > 0) this.GHT--;
```

#### 435. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3742` → after: `L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3270) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3742)

```diff
-             cp = pp.Vip.count() + pp.pcp.count() + pp.icp.count();
+             mT = TT.rUT.count() + TT.KUT.count() + TT.SUT.count();
```

#### 436. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3744` → after: `L3272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3272) · [Before (L3744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3744)

```diff
-           var Op = pp.Aw.qy;
+           var WT = TT.KZ.jB;
```

#### 437. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3747` → after: `L3275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3275) · [Before (L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3747)

```diff
-             var Sp = Op[pp.uYp++ % Op.length],
+             var gT = WT[TT.mkT++ % WT.length],
```

#### 438. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3751` → after: `L3279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3279) · [Before (L3751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3751)

```diff
-               Dp = pp.XU.lU(xp, Lp, Yp);
+               jT = TT.lZ.LZ(nT, HT, kT);
```

#### 439. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3755` → after: `L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3283) · [Before (L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3755)

```diff
-           pp.uYp %= Op.length
+           TT.mkT %= WT.length
```

#### 440. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3758` → after: `L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3286) · [Before (L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3758)

```diff
-           Lp = Sp + this.QYp;
+           HT = gT + this.pkT;
```

#### 441. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3762` → after: `L3290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3290) · [Before (L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3762)

```diff
-         this.QYp -= pp, this.QYp <= 0 ? (this.PYp = this.WYp - 1, this.QYp = this.yYp) : this.QYp = Math.min(this.QYp + this.Eip, this.yYp)
+         this.pkT -= TT, this.pkT <= 0 ? (this.GHT = this.NHT - 1, this.pkT = this.EHT) : this.pkT = Math.min(this.pkT + this.JUT, this.EHT)
```

#### 442. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3764-L3765` → after: `L3292-L3293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3292-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3292-L3293) · [Before (L3764-L3765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3764-L3765)

```diff
-       var Pp = this.XU.lU(cp, Op, op);
-       this.Dip = !!Pp, ci("end", this), ii("end")
+       var LT = this.lZ.LZ(mT, WT, zT);
+       this.kUT = !!LT, TU("end", this), RT("end")
```

#### 443. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3768` → after: `L3296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3296) · [Before (L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3768)

```diff
-         ip = pp + this.Xip,
+         UT = TT + this.xUT,
```

#### 444. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3770` → after: `L3298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3298) · [Before (L3770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3770)

```diff
-       this.HP.Zk.QU(ip, cp, Op, op);
+       this.Rl.JY.pZ(UT, mT, WT, zT);
```

#### 445. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3775` → after: `L3303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3303) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3775)

```diff
-     }, Hp.prototype.LOp = function() {
+     }, qT.prototype.KmT = function() {
```

#### 446. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3779-L3782` → after: `L3307-L3310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3307-L3310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3307-L3310) · [Before (L3779-L3782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3779-L3782)

```diff
-       var [Op, op, Ip] = this.jOp(pp, ip, cp);
-       return this.XU.lU(Op, op, Ip)
-     }, Hp.prototype.EU = function(pp, ip) {
-       this.HP.Zk.LU(pp), Tp(this, pp, ip)
+       var [WT, zT, MT] = this.zWT(TT, UT, mT);
+       return this.lZ.LZ(WT, zT, MT)
+     }, qT.prototype.jZ = function(TT, UT) {
+       this.Rl.JY.VB(TT), FT(this, TT, UT)
```

#### 447. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3792` → after: `L3320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3320) · [Before (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3792)

```diff
-         if (Cp(pp, Op, op, Ip, Ap, Pp, Wp, Sp), pp.sip.count() >= qp) break
+         if (wT(TT, WT, zT, MT, lT, LT, pT, gT), TT.uUT.count() >= xT) break
```

#### 448. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3800` → after: `L3328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3328) · [Before (L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3800)

```diff
-         op && !wp(op, ip, cp, Op) || pp.Aw.includes(ip, cp, Op) || pp.kYp.size > 0 && pp.kYp.has(ip + "|" + cp + "|" + Op) || op && pp.RYp.hOp(ip, cp, Op) || (Xp(pp, ip, cp, Op), pp.Aw.add(ip, cp, Op), pp.sip.add(ip, cp, Op, !0))
+         zT && !cT(zT, UT, mT, WT) || TT.KZ.includes(UT, mT, WT) || TT.zkT.size > 0 && TT.zkT.has(UT + "|" + mT + "|" + WT) || zT && TT.gkT.bWT(UT, mT, WT) || (aT(TT, UT, mT, WT), TT.KZ.add(UT, mT, WT), TT.uUT.add(UT, mT, WT, !0))
```

#### 449. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3804` → after: `L3332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3332) · [Before (L3804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3804)

```diff
-       var op = pp.Aw.bM(ip, cp, Op);
+       var zT = TT.KZ.Cw(UT, mT, WT);
```

#### 450. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3807` → after: `L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3335) · [Before (L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3807)

```diff
-         Ip === ip && Sp === cp && xp === Op || (pp.sip.remove(Ip, Sp, xp), pp.Kip.remove(Ip, Sp, xp), pp.bU.remove(Ip, Sp, xp), hp(pp, Ip, Sp, xp))
+         MT === UT && gT === mT && nT === WT || (TT.uUT.remove(MT, gT, nT), TT.CUT.remove(MT, gT, nT), TT.qZ.remove(MT, gT, nT), uT(TT, MT, gT, nT))
```

#### 451. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3813-L3818` → after: `L3341-L3346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3341-L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3341-L3346) · [Before (L3813-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3813-L3818)

```diff
-       var ip = pp.sip;
-       if (ip.wy()) return !0;
-       var cp = pp.Kip.count(),
-         Op = pp.Vip.count();
-       if (cp >= pp.qip) return !0;
-       if (Op >= pp.Cip) return !0;
+       var UT = TT.uUT;
+       if (UT.TB()) return !0;
+       var mT = TT.CUT.count(),
+         WT = TT.rUT.count();
+       if (mT >= TT.eUT) return !0;
+       if (WT >= TT.YUT) return !0;
```

#### 452. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3821-L3823` → after: `L3349-L3351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3349-L3351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3349-L3351) · [Before (L3821-L3823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3821-L3823)

```diff
-         var op = pp.epp,
-           Ip = pp.PU.FYp(),
-           Sp = pp.HP.vpp,
+         var zT = TT.iTT,
+           MT = TT.SB.OkT(),
+           gT = TT.Rl.cTT,
```

#### 453. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3828-L3831` → after: `L3356-L3359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3356-L3359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3356-L3359) · [Before (L3828-L3831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3828-L3831)

```diff
-           Ap = pp.Kip.bM(ip, cp, Op);
-         !Ap || Ap[0] === ip && Ap[1] === cp && Ap[2] === Op || pp.Kip.remove(Ap[0], Ap[1], Ap[2]);
-         pp.Kip.add(ip, cp, Op), pp.emit("worldDataNeeded", xp, Ip, Lp, Yp, Dp, Sp), ci("request")
-       }(pp, op, Ip, Sp), ip.wy()
+           lT = TT.CUT.Cw(UT, mT, WT);
+         !lT || lT[0] === UT && lT[1] === mT && lT[2] === WT || TT.CUT.remove(lT[0], lT[1], lT[2]);
+         TT.CUT.add(UT, mT, WT), TT.emit("worldDataNeeded", nT, MT, HT, kT, jT, gT), TU("request")
+       }(TT, zT, MT, gT), UT.TB()
```

#### 454. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3835-L3836` → after: `L3363-L3364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3363-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3363-L3364) · [Before (L3835-L3836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3835-L3836)

```diff
-       var ip = pp.bU;
-       if (ip.wy() && (ip = pp.fU), ip.wy()) return !0;
+       var UT = TT.qZ;
+       if (UT.TB() && (UT = TT.fZ), UT.TB()) return !0;
```

#### 455. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3838` → after: `L3366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3366) · [Before (L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3838)

```diff
-       return hp(pp, cp, Op, op), ip.wy()
+       return uT(TT, mT, WT, zT), UT.TB()
```

#### 456. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3842` → after: `L3370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3370) · [Before (L3842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3842)

```diff
-       var cp = pp.icp.qy,
+       var mT = TT.SUT.jB,
```

#### 457. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3844-L3847` → after: `L3372-L3375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3372-L3375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3372-L3375) · [Before (L3844-L3847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3844-L3847)

```diff
-         op = Op ? pp.XU.lU(Op[0], Op[1], Op[2]) : null;
-       if (pp.HP.Zk.mU(!(op && op.DU))) return !0;
-       var Ip = pp.icp;
-       if (Ip.wy() && (Ip = pp.pcp), Ip.wy() && !ip && (Ip = pp.Vip), Ip.wy()) return !0;
+         zT = WT ? TT.lZ.LZ(WT[0], WT[1], WT[2]) : null;
+       if (TT.Rl.JY.zZ(!(zT && zT.CB))) return !0;
+       var MT = TT.SUT;
+       if (MT.TB() && (MT = TT.KUT), MT.TB() && !UT && (MT = TT.rUT), MT.TB()) return !0;
```

#### 458. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3849-L3850` → after: `L3377-L3378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3377-L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3377-L3378) · [Before (L3849-L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3849-L3850)

```diff
-       if (!pp.fU.includes(Sp, xp, Lp)) {
-         var Yp = pp.XU.lU(Sp, xp, Lp);
+       if (!TT.fZ.includes(gT, nT, HT)) {
+         var kT = TT.lZ.LZ(gT, nT, HT);
```

#### 459. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3852` → after: `L3380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3380) · [Before (L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3852)

```diff
-           Np(pp, ip.i, ip.j, ip.k), ip.Mq(), ci("mesh")
+           sT(TT, UT.i, UT.j, UT.k), UT.Bx(), TU("mesh")
```

#### 460. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3858` → after: `L3386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3386) · [Before (L3858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3858)

```diff
-       pp.Vip.remove(ip, cp, Op), pp.pcp.remove(ip, cp, Op), pp.icp.remove(ip, cp, Op)
+       TT.rUT.remove(UT, mT, WT), TT.KUT.remove(UT, mT, WT), TT.SUT.remove(UT, mT, WT)
```

#### 461. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3862-L3868` → after: `L3390-L3396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3390-L3396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3390-L3396) · [Before (L3862-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3862-L3868)

```diff
-       if (!ip.CU && !ip.jR) return !1;
-       if (pp.icp.includes(ip.i, ip.j, ip.k)) return !1;
-       if (cp) return pp.Vip.remove(ip.i, ip.j, ip.k), pp.pcp.remove(ip.i, ip.j, ip.k), pp.icp.add(ip.i, ip.j, ip.k), !0;
-       if (pp.Vip.includes(ip.i, ip.j, ip.k)) return !1;
-       if (pp.pcp.includes(ip.i, ip.j, ip.k)) return !1;
-       var Op = 26 === ip.kR ? pp.pcp : pp.Vip;
-       if (Op.add(ip.i, ip.j, ip.k), pp.dYp++, pp.dYp > 20) {
+       if (!UT.kZ && !UT.OJ) return !1;
+       if (TT.SUT.includes(UT.i, UT.j, UT.k)) return !1;
+       if (mT) return TT.rUT.remove(UT.i, UT.j, UT.k), TT.KUT.remove(UT.i, UT.j, UT.k), TT.SUT.add(UT.i, UT.j, UT.k), !0;
+       if (TT.rUT.includes(UT.i, UT.j, UT.k)) return !1;
+       if (TT.KUT.includes(UT.i, UT.j, UT.k)) return !1;
+       var WT = 26 === UT.eJ ? TT.KUT : TT.rUT;
+       if (WT.add(UT.i, UT.j, UT.k), TT.TkT++, TT.TkT > 20) {
```

#### 462. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3870` → after: `L3398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3398) · [Before (L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3870)

```diff
-         pp.RYp.AYp(Op, zp, op, Ip, Sp), pp.dYp = 0
+         TT.gkT.SHT(WT, hT, zT, MT, gT), TT.TkT = 0
```

#### 463. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3876` → after: `L3404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3404) · [Before (L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3876)

```diff
-       return pp.PU.release(ip), !1
+       return TT.SB.release(UT), !1
```

#### 464. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3878-L3880` → after: `L3406-L3408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3406-L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3406-L3408) · [Before (L3878-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3878-L3880)

```diff
-     Hp.prototype.Ccp = function() {
-       for (this.bU.rM(this.Aw), this.fU.empty(), this.sip.empty(), this.Vip.empty(), this.pcp.empty(), this.icp.empty(), this.lYp.clear(), this.kYp.clear(), this.mYp.clear(), this.aU = !1; !Jp(this););
-       this.HYp = 0
+     qT.prototype.BmT = function() {
+       for (this.qZ.Gw(this.KZ), this.fZ.empty(), this.uUT.empty(), this.rUT.empty(), this.KUT.empty(), this.SUT.empty(), this.LkT.clear(), this.zkT.clear(), this.MkT.clear(), this.bZ = !1; !IT(this););
+       this.RHT = 0
```

#### 465. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3892` → after: `L3420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3420) · [Before (L3892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3892)

```diff
-       var op = pp.XU.lU(ip, cp, Op);
+       var zT = TT.lZ.LZ(UT, mT, WT);
```

#### 466. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3894-L3895` → after: `L3422-L3423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3422-L3423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3422-L3423) · [Before (L3894-L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3894-L3895)

```diff
-         var Ip = op.hP;
-         pp.emit("chunkBeingRemoved", op.zy, op.hP, op.vR), pp.HP.WU.BLp(op), op.dispose(), pp.PU.release(Ip), ci("dispose"), sp(pp, ip, cp, Op, null)
+         var MT = zT.iL;
+         TT.emit("chunkBeingRemoved", zT.xB, zT.iL, zT.iJ), TT.Rl.GB.BHT(zT), zT.dispose(), TT.SB.release(MT), TU("dispose"), DT(TT, UT, mT, WT, null)
```

#### 467. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3897` → after: `L3425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3425) · [Before (L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3897)

```diff
-       pp.XU.XM(ip, cp, Op), pp.Aw.remove(ip, cp, Op), pp.mYp.size > 0 && pp.mYp.delete(ip + "|" + cp + "|" + Op), pp.fU.remove(ip, cp, Op), Np(pp, ip, cp, Op),
+       TT.lZ.Iw(UT, mT, WT), TT.KZ.remove(UT, mT, WT), TT.MkT.size > 0 && TT.MkT.delete(UT + "|" + mT + "|" + WT), TT.fZ.remove(UT, mT, WT), sT(TT, UT, mT, WT),
```

#### 468. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3900` → after: `L3428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3428) · [Before (L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3900)

```diff
-             Ip = pp.lYp.get(op);
+             MT = TT.LkT.get(zT);
```

#### 469. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3904` → after: `L3432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3432) · [Before (L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3904)

```diff
-           pp.Aw.qy.forEach((function(pp) {
+           TT.KZ.jB.forEach((function(TT) {
```

#### 470. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3906-L3907` → after: `L3434-L3435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3434-L3435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3434-L3435) · [Before (L3906-L3907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3906-L3907)

```diff
-           })), null !== Sp ? pp.lYp.set(op, Sp) : pp.lYp.delete(op)
-         }(pp, ip, cp, Op), pp.HP.Mpp()
+           })), null !== gT ? TT.LkT.set(zT, gT) : TT.LkT.delete(zT)
+         }(TT, UT, mT, WT), TT.Rl.wTT()
```

#### 471. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3911` → after: `L3439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3439) · [Before (L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3911)

```diff
-       return [this.MYp(pp), this.MYp(ip), this.MYp(cp)]
+       return [this.HkT(TT), this.HkT(UT), this.HkT(mT)]
```

#### 472. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3915` → after: `L3443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3443) · [Before (L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3915)

```diff
-       return [this.CYp(pp), this.CYp(ip), this.CYp(cp)]
+       return [this.kkT(TT), this.kkT(UT), this.kkT(mT)]
```

#### 473. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3919` → after: `L3447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3447) · [Before (L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3919)

```diff
-       return 0 | Math.floor(pp / this.epp)
+       return 0 | Math.floor(TT / this.iTT)
```

#### 474. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3923` → after: `L3451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3451) · [Before (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3923)

```diff
-       var ip = this.epp,
+       var UT = this.iTT,
```

#### 475. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3929` → after: `L3457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3457) · [Before (L3929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3929)

```diff
-       return pp >> this.EYp
+       return TT >> this.jkT
```

#### 476. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3933` → after: `L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3461) · [Before (L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3933)

```diff
-       return pp & this.XYp
+       return TT & this.lkT
```

#### 477. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3938` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3466) · [Before (L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3938)

```diff
-       void 0 === cp && ([cp, Op, op] = Rp(pp)), ip.pC(((pp, ip, Ip) => zp(cp - pp, Op - ip, op - Ip)), Ip)
+       void 0 === mT && ([mT, WT, zT] = JT(TT)), UT.Uy(((TT, UT, MT) => hT(mT - TT, WT - UT, zT - MT)), MT)
```

#### 478. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3943` → after: `L3471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3471) · [Before (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3943)

```diff
-       for (var Ip = !op || op && !op.ey, Sp = -1; Sp <= 1; Sp++)
+       for (var MT = !zT || zT && !zT.zB, gT = -1; gT <= 1; gT++)
```

#### 479. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3947` → after: `L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3475) · [Before (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3947)

```diff
-               var Yp = pp.XU.lU(ip + Sp, cp + xp, Op + Lp);
+               var kT = TT.lZ.LZ(UT + gT, mT + nT, WT + HT);
```

#### 480. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3949-L3951` → after: `L3477-L3479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3477-L3479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3477-L3479) · [Before (L3949-L3951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3949-L3951)

```diff
-                 Ip && (Yp.CU = !0, Yp.JU = !0, pp.HP.Zk.LU(Yp)), op && !op.My.get(Sp, xp, Lp) && (op.kR++, op.My.set(Sp, xp, Lp, Yp));
-                 var Dp = Yp.My.get(-Sp, -xp, -Lp);
-                 op && !Dp && (Yp.kR++, Yp.My.set(-Sp, -xp, -Lp, op), 26 === Yp.kR && Tp(pp, Yp)), !op && Dp && (Yp.kR--, Yp.My.set(-Sp, -xp, -Lp, null))
+                 MT && (kT.kZ = !0, kT.BZ = !0, TT.Rl.JY.VB(kT)), zT && !zT.lB.get(gT, nT, HT) && (zT.eJ++, zT.lB.set(gT, nT, HT, kT));
+                 var jT = kT.lB.get(-gT, -nT, -HT);
+                 zT && !jT && (kT.eJ++, kT.lB.set(-gT, -nT, -HT, zT), 26 === kT.eJ && FT(TT, kT)), !zT && jT && (kT.eJ--, kT.lB.set(-gT, -nT, -HT, null))
```

#### 481. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3959` → after: `L3487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3487) · [Before (L3959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3959)

```diff
-       return pp === ip ? (pp, ip, Op) => pp * pp + ip * ip + Op * Op <= cp : pp > ip ? (pp, Op, op) => !(Math.abs(Op) > ip) && pp * pp + Op * Op + op * op <= cp : (pp, ip, op) => {
+       return TT === UT ? (TT, UT, WT) => TT * TT + UT * UT + WT * WT <= mT : TT > UT ? (TT, WT, zT) => !(Math.abs(WT) > UT) && TT * TT + WT * WT + zT * zT <= mT : (TT, UT, zT) => {
```

#### 482. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3972-L3973` → after: `L3500-L3501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3500-L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3500-L3501) · [Before (L3972-L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3972-L3973)

```diff
-         var cp = pp.XU.lU(ip[0], ip[1], ip[2]);
-         cp && (Sp++, Lp.push(cp.Yw), cp.Uy && op++, cp.ey && Ip++, 26 === cp.kR && xp++)
+         var mT = TT.lZ.LZ(UT[0], UT[1], UT[2]);
+         mT && (gT++, HT.push(mT.CZ), mT.Rp && zT++, mT.zB && MT++, 26 === mT.eJ && nT++)
```

#### 483. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3984` → after: `L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3512) · [Before (L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3984)

```diff
-     Hp.prototype.Cy = function(pp, ip) {
+     qT.prototype.LB = function(TT, UT) {
```

#### 484. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3986-L3989` → after: `L3514-L3517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3514-L3517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3514-L3517) · [Before (L3986-L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3986-L3989)

```diff
-         Op = this.lYp.get(cp);
-       return void 0 !== Op ? Op : null
-     }, Hp.prototype.Yy = function() {
-       console.log("World report - playerChunkLoaded: ", this.Dip), Vp(this, "  known:     ", this.Aw.qy, !0), Vp(this, "  to request:", this.sip.qy, 0), Vp(this, "  to remove: ", this.fU.qy, 0), Vp(this, "  invalid:   ", this.bU.qy, 0), Vp(this, "  creating:  ", this.Kip.qy, 0),  … [truncated]
+         WT = this.LkT.get(mT);
+       return void 0 !== WT ? WT : null
+     }, qT.prototype.Gp = function() {
+       console.log("World report - playerChunkLoaded: ", this.kUT), AT(this, "  known:     ", this.KZ.jB, !0), AT(this, "  to request:", this.uUT.jB, 0), AT(this, "  to remove: ", this.fZ.jB, 0), AT(this, "  invalid:   ", this.qZ.jB, 0), AT(this, "  creating:  ", this.CUT.jB, 0),  … [truncated]
```

#### 485. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3994` → after: `L3522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3522) · [Before (L3994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3994)

```diff
-   4785: (pp, ip, cp) => {
+   4778: (TT, UT, mT) => {
```

#### 486. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3996` → after: `L3524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3524) · [Before (L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3996)

```diff
-       c: () => Dp
+       e: () => jT
```

#### 487. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3999-L4001` → after: `L3527-L3529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3527-L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3527-L3529) · [Before (L3999-L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L3999-L4001)

```diff
-       op = cp(34),
-       Ip = cp(1308),
-       Sp = cp(2908);
+       zT = mT(31),
+       MT = mT(1388),
+       gT = mT(2929);
```

#### 488. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4006` → after: `L3534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3534) · [Before (L4006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4006)

```diff
-       return "visible" === document.visibilityState && "inGame" === Op.c.get("gameState") && (0, Ip.t)()
+       return "visible" === document.visibilityState && "inGame" === WT.b.get("gameState") && (0, MT.u)()
```

#### 489. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4017` → after: `L3545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3545) · [Before (L4017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4017)

```diff
-           pp(`saved for the player after ${xp/1e3} s of play`), (0, Sp.F)(), op.m.GA("chat", {
+           TT(`saved for the player after ${nT/1e3} s of play`), (0, gT.M)(), zT.j.EZ("chat", {
```

#### 490. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4029` → after: `L3557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3557) · [Before (L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4029)

```diff
-   34280: (pp, ip, cp) => {
+   34123: (TT, UT, mT) => {
```

#### 491. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4039` → after: `L3567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3567) · [Before (L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4039)

```diff
-       f: () => Op
+       h: () => WT
```

#### 492. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4042` → after: `L3570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3570) · [Before (L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4042)

```diff
-   38166: (pp, ip, cp) => {
+   38089: (TT, UT, mT) => {
```

#### 493. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4048` → after: `L3575-L3576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3575-L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3575-L3576) · [Before (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4048)

```diff
-       p: () => tp
+       n: () => qT,
+       r: () => fT
```

#### 494. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4050-L4052` → after: `L3578-L3580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3578-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3578-L3580) · [Before (L4050-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4050-L4052)

```diff
-     var Op = cp(4785),
-       op = cp(34280),
-       Ip = cp(2908);
+     var WT = mT(4778),
+       zT = mT(34123),
+       MT = mT(2929);
```

#### 495. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4054` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3582) · [Before (L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4054)

```diff
-       xp = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "TA", "jobMs"];
+       nT = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "fl", "jobMs"];
```

#### 496. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4062` → after: `L3590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3590) · [Before (L4062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4062)

```diff
-       return `${pp},${ip},${cp}`
+       return `${TT},${UT},${mT}`
```

#### 497. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4070` → after: `L3598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3598) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4070)

```diff
-         const Op = null !== (cp = this.pending.get(pp)) && void 0 !== cp ? cp : [];
+         const WT = null !== (mT = this.pending.get(TT)) && void 0 !== mT ? mT : [];
```

#### 498. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4085` → after: `L3613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3613) · [Before (L4085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4085)

```diff
-           TA: op,
+           fl: zT,
```

#### 499. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4088` → after: `L3616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3616) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4088)

```diff
-         for (const Lp of null !== (xp = this.pending.get(pp)) && void 0 !== xp ? xp : []) {
+         for (const HT of null !== (nT = this.pending.get(TT)) && void 0 !== nT ? nT : []) {
```

#### 500. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4102` → after: `L3630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3630) · [Before (L4102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4102)

```diff
-         for (const op of null !== (Op = this.pending.get(pp)) && void 0 !== Op ? Op : []) {
+         for (const zT of null !== (WT = this.pending.get(TT)) && void 0 !== WT ? WT : []) {
```

#### 501. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4117` → after: `L3645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3645) · [Before (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4117)

```diff
-           TA: 0,
+           fl: 0,
```

#### 502. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4139` → after: `L3667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3667) · [Before (L4139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4139)

```diff
-           TA: cp.TA,
+           fl: mT.fl,
```

#### 503. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4142` → after: `L3670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3670) · [Before (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4142)

```diff
-         if (this.edits[this.nextEdit] = op, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(op.totalMs), this.Yy(1), op.totalMs < 100 || ++this.outliers > 5) return;
+         if (this.edits[this.nextEdit] = zT, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(zT.totalMs), this.Gp(1), zT.totalMs < 100 || ++this.outliers > 5) return;
```

#### 504. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4144` → after: `L3672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3672) · [Before (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4144)

```diff
-         (0, Ip.n)("remesh", `slow edit (${pp}) shown in ${Sp(op.totalMs)} ms: slot ${Sp(op.slotMs)}, worker ${Sp(op.workerMs)} (${op.ahead} ahead, ${op.inFlight}/${op.TA} in flight; job ${Sp(op.jobMs)}), apply ${Sp(op.applyMs)}`)
+         (0, MT.m)("remesh", `slow edit (${TT}) shown in ${gT(zT.totalMs)} ms: slot ${gT(zT.slotMs)}, worker ${gT(zT.workerMs)} (${zT.ahead} ahead, ${zT.inFlight}/${zT.fl} in flight; job ${gT(zT.jobMs)}), apply ${gT(zT.applyMs)}`)
```

#### 505. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4150` → after: `L3678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3678) · [Before (L4150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4150)

```diff
-           this.gaveUp += Op.length - ip.length, this.Yy(Op.length - ip.length), ip.length > 0 ? this.pending.set(cp, ip) : this.pending.delete(cp)
+           this.gaveUp += WT.length - UT.length, this.Gp(WT.length - UT.length), UT.length > 0 ? this.pending.set(mT, UT) : this.pending.delete(mT)
```

#### 506. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4157` → after: `L3685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3685) · [Before (L4157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4157)

```diff
-           (0, Ip.n)("remesh", `${Math.round(this.frames/ip)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,op.f)(pp,.5))} max ${Math.round((0,op … [truncated]
+           (0, MT.m)("remesh", `${Math.round(this.frames/UT)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,zT.h)(TT,.5))} max ${Math.round((0,zT … [truncated]
```

#### 507. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4164` → after: `L3692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3692) · [Before (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4164)

```diff
-           return `${pp}: p50 ${Math.round((0,op.f)(ip,.5))} p90 ${Math.round((0,op.f)(ip,.9))} max ${Math.round((0,op.f)(ip,1))}`
+           return `${TT}: p50 ${Math.round((0,zT.h)(UT,.5))} p90 ${Math.round((0,zT.h)(UT,.9))} max ${Math.round((0,zT.h)(UT,1))}`
```

#### 508. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4175` → after: `L3703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3703) · [Before (L4175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4175)

```diff
-         this.log = pp, this.HP = ip
+         this.log = TT, this.Rl = UT
```

#### 509. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4178-L4179` → after: `L3706-L3707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3706-L3707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3706-L3707) · [Before (L4178-L4179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4178-L4179)

```diff
-         const [Op, op, Ip] = this.HP.WP.jOp(pp, ip, cp), Sp = this.HP.WP.XU.lU(Op, op, Ip);
-         Sp && Sp.CU && this.log.edit(Dp(Op, op, Ip), performance.now())
+         const [WT, zT, MT] = this.Rl.Nl.zWT(TT, UT, mT), gT = this.Rl.Nl.lZ.LZ(WT, zT, MT);
+         gT && gT.kZ && this.log.edit(jT(WT, zT, MT), performance.now())
```

#### 510. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4207` → after: `L3735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3735) · [Before (L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4207)

```diff
-       return Wp = pp, (0, Ip.k)("remesh", (() => pp.dump())), (0, Ip.e)("remeshStats", (() => {
+       return pT = TT, (0, MT.j)("remesh", (() => TT.dump())), (0, MT.b)("remeshStats", (() => {
```

#### 511. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4209-L4210` → after: `L3737-L3738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3737-L3738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3737-L3738) · [Before (L4209-L4210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4209-L4210)

```diff
-       })), Up || (Up = !0, (0, Op.c)((pp => {
-         (0, Ip.n)("remesh", pp)
+       })), ZT || (ZT = !0, (0, WT.e)((TT => {
+         (0, MT.m)("remesh", TT)
```

#### 512. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4216` → after: `L3744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3744) · [Before (L4216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4216)

```diff
-       wp = new Pp(ip, pp), pp.Zk.meshProbe = wp, pp.on("beforeRender", (() => {
+       cT = new LT(UT, TT), TT.JY.meshProbe = cT, TT.on("beforeRender", (() => {
```

#### 513. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4226` → after: `L3754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3754) · [Before (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4226)

```diff
-   38411: (pp, ip, cp) => {
+   38331: (TT, UT, mT) => {
```

#### 514. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4228` → after: `L3756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3756) · [Before (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4228)

```diff
-       d: () => Dp
+       b: () => jT
```

#### 515. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4230-L4236` → after: `L3758-L3764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3758-L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3758-L3764) · [Before (L4230-L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4230-L4236)

```diff
-     var Op = cp(38413),
-       op = cp(38226),
-       Ip = cp(3774),
-       Sp = cp(3837),
-       xp = cp(36942),
-       Lp = cp(2849),
-       Yp = cp(38409);
+     var WT = mT(38340),
+       zT = mT(38139),
+       MT = mT(3781),
+       gT = mT(3841),
+       nT = mT(36851),
+       HT = mT(2875),
+       kT = mT(38327);
```

#### 516. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4242-L4246` → after: `L3770-L3774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3770-L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3770-L3774) · [Before (L4242-L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4242-L4246)

```diff
-         const pp = (0, Lp.d)().client.inventoryPrediction.record(Yp.d.swap(ip, cp));
-         (0, Ip.sendColyMessage)(Sp.kj, {
-           hL: ip,
-           aL: cp,
-           Ax: pp
+         const TT = (0, HT.d)().client.inventoryPrediction.record(kT.b.swap(UT, mT));
+         (0, MT.sendColyMessage)(gT.cj, {
+           vH: UT,
+           fH: mT,
+           Pg: TT
```

#### 517. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4248-L4250` → after: `L3776-L3778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3776-L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3776-L3778) · [Before (L4248-L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4248-L4250)

```diff
-         const op = Op.d.getSlotArmourType(ip),
-           Dp = Op.d.getSlotArmourType(cp);
-         (op || Dp) && xp.b.play("equip_leather1", 1).rate(.9 + .3 * Math.random())
+         const zT = WT.b.getSlotArmourType(UT),
+           jT = WT.b.getSlotArmourType(mT);
+         (zT || jT) && nT.c.play("equip_leather1", 1).rate(.9 + .3 * Math.random())
```

#### 518. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4254-L4255` → after: `L3782-L3783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3782-L3783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3782-L3783) · [Before (L4254-L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4254-L4255)

```diff
-       if (Op && !(0, Lp.g)().Yk.Ycp(pp.HP.NJ).isAlive) return !1;
-       if (ip >= pp.playerInventory.numSlots && !pp.gI && !pp.inCreative) return !1;
+       if (WT && !(0, HT.h)().pY.oUT(TT.Rl.VV).isAlive) return !1;
+       if (UT >= TT.playerInventory.numSlots && !TT.OM && !TT.inCreative) return !1;
```

#### 519. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4257` → after: `L3785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3785) · [Before (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4257)

```diff
-       if (null !== xp && void 0 !== xp && xp.amount && xp.amount <= 0) return console.error(new Error(`Found item ${xp.name} with non-positive amount ${xp.amount}`).stack), !1;
+       if (null !== nT && void 0 !== nT && nT.amount && nT.amount <= 0) return console.error(new Error(`Found item ${nT.name} with non-positive amount ${nT.amount}`).stack), !1;
```

#### 520. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4259-L4260` → after: `L3787-L3788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3787-L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3787-L3788) · [Before (L4259-L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4259-L4260)

```diff
-       if (ip < pp.playerInventory.numSlots ? Dp = pp.playerInventory.removeItem(ip, cp) : pp.gI ? Dp = pp.gI.removeItem(ip - pp.playerInventory.numSlots, cp) : (console.assert(pp.inCreative, "Must be in creative to get here"), Dp = !0), !Dp) return !1;
-       const Ap = (0, Lp.d)().client.inventoryPrediction.record(Yp.d.remove(ip, cp, xp.name));
+       if (UT < TT.playerInventory.numSlots ? jT = TT.playerInventory.removeItem(UT, mT) : TT.OM ? jT = TT.OM.removeItem(UT - TT.playerInventory.numSlots, mT) : (console.assert(TT.inCreative, "Must be in creative to get here"), jT = !0), !jT) return !1;
+       const lT = (0, HT.d)().client.inventoryPrediction.record(kT.b.remove(UT, mT, nT.name));
```

#### 521. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4264-L4271` → after: `L3792-L3799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3792-L3799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3792-L3799) · [Before (L4264-L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4264-L4271)

```diff
-           HP: Op
-         } = pp, Yp = null !== (Pp = Op.Gpp) && void 0 !== Pp ? Pp : Op.camera.hK(), Dp = [Yp[0], Yp[1], Yp[2]];
-         (0, Ip.sendColyMessage)(Sp.Hg, {
-           cA: ip,
-           OA: xp.typeObj.id,
-           oA: cp,
-           Ax: Ap,
-           IA: Dp
+           Rl: WT
+         } = TT, kT = null !== (LT = WT.STT) && void 0 !== LT ? LT : WT.camera.qD(), jT = [kT[0], kT[1], kT[2]];
+         (0, MT.sendColyMessage)(gT.Ig, {
+           sj: UT,
+           Fj: nT.typeObj.id,
+           Pj: mT,
+           Pg: lT,
+           Vj: jT
```

#### 522. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4274-L4282` → after: `L3802-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3802-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3802-L3810) · [Before (L4274-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4274-L4282)

```diff
-           yp = (0, op.n)(Dp);
-         yp && Wp.getClientPredictedOption(Op.NJ, "predictDroppedItems") && Wp.client.itemDropPrediction.predictPlayerDrop(Ap, xp.typeObj.id, cp, xp.attributes, Wp.getLifeformEyePos(Op.NJ, !1), yp), pp.HP.Yk.Jip(pp.HP.NJ).setArmsAreSwinging();
-         const Up = (0, Lp.g)().Yk.Acp(pp.HP.NJ);
-         Up.hasSwingAnimation() && Up.trySwingBlock(Date.now()), (0, Lp.d)().client.triggerGameCallback("onPlayerDropItem", pp.HP.NJ, xp.name, cp, ip)
-       } else(0, Ip.sendColyMessage)(Sp.Bi, {
-         GD: ip,
-         rD: xp.typeObj.id,
-         ZD: cp,
-         Ax: Ap
+           BT = (0, zT.l)(jT);
+         BT && pT.getClientPredictedOption(WT.VV, "predictDroppedItems") && pT.client.itemDropPrediction.predictPlayerDrop(lT, nT.typeObj.id, mT, nT.attributes, pT.getLifeformEyePos(WT.VV, !1), BT), TT.Rl.pY.wUT(TT.Rl.VV).setArmsAreSwinging();
+         const ZT = (0, HT.h)().pY.RUT(TT.Rl.VV);
+         ZT.hasSwingAnimation() && ZT.trySwingBlock(Date.now()), (0, HT.d)().client.triggerGameCallback("onPlayerDropItem", TT.Rl.VV, nT.name, mT, UT)
+       } else(0, MT.sendColyMessage)(gT.vi, {
+         Jj: UT,
+         xj: nT.typeObj.id,
+         wj: mT,
+         Pg: lT
```

#### 523. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4289-L4294` → after: `L3817-L3822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3817-L3822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3817-L3822) · [Before (L4289-L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4289-L4294)

```diff
-         const pp = (0, Lp.d)().client.inventoryPrediction.record(Yp.d.moveWithAmount(ip, cp, Op));
-         (0, Ip.sendColyMessage)(Sp.rh, {
-           vL: ip,
-           tL: cp,
-           HL: Op,
-           Ax: pp
+         const TT = (0, HT.d)().client.inventoryPrediction.record(kT.b.moveWithAmount(UT, mT, WT));
+         (0, MT.sendColyMessage)(gT.qh, {
+           Gn: UT,
+           Nn: mT,
+           En: WT,
+           Pg: TT
```

#### 524. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4304-L4310` → after: `L3832-L3838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3832-L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3832-L3838) · [Before (L4304-L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4304-L4310)

```diff
-         const pp = (0, Lp.d)().client.inventoryPrediction.record(Yp.d.moveIntoIdxs(ip, cp, Op, Dp));
-         (0, Ip.sendColyMessage)(Sp.sh, {
-           qL: ip,
-           ML: cp,
-           CL: Op,
-           EL: Dp,
-           Ax: pp
+         const TT = (0, HT.d)().client.inventoryPrediction.record(kT.b.moveIntoIdxs(UT, mT, WT, jT));
+         (0, MT.sendColyMessage)(gT.uh, {
+           zH: UT,
+           MH: mT,
+           gH: WT,
+           nH: jT,
+           Pg: TT
```

#### 525. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4316` → after: `L3844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3844) · [Before (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4316)

```diff
-   38086: (pp, ip, cp) => {
+   37993: (TT, UT, mT) => {
```

#### 526. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4318` → after: `L3846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3846) · [Before (L4318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4318)

```diff
-       C: () => Ap,
+       c: () => jT,
```

#### 527. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4321-L4326` → after: `L3849-L3854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3849-L3854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3849-L3854) · [Before (L4321-L4326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4321-L4326)

```diff
-       i: () => Sp,
-       j: () => Yp,
-       n: () => xp,
-       r: () => Ip,
-       v: () => Wp,
-       z: () => Pp
+       k: () => kT,
+       m: () => nT,
+       p: () => MT,
+       s: () => pT,
+       t: () => LT,
+       x: () => lT
```

#### 528. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4328-L4329` → after: `L3856-L3857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3856-L3857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3856-L3857) · [Before (L4328-L4329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4328-L4329)

```diff
-     var Op = cp(640),
-       op = cp(37479);
+     var WT = mT(653),
+       zT = mT(37364);
```

#### 529. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4344` → after: `L3872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3872) · [Before (L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4344)

```diff
-       return new op.b(pp / 255, ip / 255, cp / 255, Op)
+       return new zT.e(TT / 255, UT / 255, mT / 255, WT)
```

#### 530. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4356` → after: `L3884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3884) · [Before (L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4356)

```diff
-       if ((0, Op.G)(ip.LS) || (pp.direction1._x = ip.LS[0], pp.direction1._y = ip.LS[1], pp.direction1._z = ip.LS[2]), (0, Op.G)(ip.YS) || (pp.direction2._x = ip.YS[0], pp.direction2._y = ip.YS[1], pp.direction2._z = ip.YS[2]), (0, Op.G)(ip.DS) || (pp.minSize = ip.DS), (0, Op.G)( … [truncated]
+       if ((0, WT.E)(UT.VM) || (TT.direction1._x = UT.VM[0], TT.direction1._y = UT.VM[1], TT.direction1._z = UT.VM[2]), (0, WT.E)(UT.uM) || (TT.direction2._x = UT.uM[0], TT.direction2._y = UT.uM[1], TT.direction2._z = UT.uM[2]), (0, WT.E)(UT.CM) || (TT.minSize = UT.CM), (0, WT.E)( … [truncated]
```

#### 531. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4358-L4359` → after: `L3886-L3887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3886-L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3886-L3887) · [Before (L4358-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4358-L4359)

```diff
-         const Op = ip.WS,
-           op = null !== (cp = pp.getColorGradients()) && void 0 !== cp ? cp : [];
+         const WT = UT.SM,
+           zT = null !== (mT = TT.getColorGradients()) && void 0 !== mT ? mT : [];
```

#### 532. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4367` → after: `L3895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3895) · [Before (L4367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4367)

```diff
-       if (!(0, Op.G)(ip.PS)) {
+       if (!(0, WT.E)(UT.KM)) {
```

#### 533. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4369` → after: `L3897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3897) · [Before (L4369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4369)

```diff
-         ip.PS && !cp ? pp.start() : !ip.PS && cp && pp.stop()
+         UT.KM && !mT ? TT.start() : !UT.KM && mT && TT.stop()
```

#### 534. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4374` → after: `L3902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3902) · [Before (L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4374)

```diff
-       const cp = pp.BP;
+       const mT = TT.ZL;
```

#### 535. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4387` → after: `L3915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3915) · [Before (L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4387)

```diff
-   38264: (pp, ip, cp) => {
+   38171: (TT, UT, mT) => {
```

#### 536. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4389` → after: `L3917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3917) · [Before (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4389)

```diff
-       e: () => Pp
+       d: () => LT
```

#### 537. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4391-L4393` → after: `L3919-L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3919-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3919-L3921) · [Before (L4391-L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4391-L4393)

```diff
-     var Op = cp(38025),
-       op = cp(640),
-       Ip = cp(343),
+     var WT = mT(37929),
+       zT = mT(653),
+       MT = mT(375),
```

#### 538. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4395-L4398` → after: `L3923-L3926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3923-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3923-L3926) · [Before (L4395-L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4395-L4398)

```diff
-       xp = cp(37676),
-       Lp = cp(3774),
-       Yp = cp(38268),
-       Dp = cp(2849);
+       nT = mT(37559),
+       HT = mT(3781),
+       kT = mT(38180),
+       jT = mT(2875);
```

#### 539. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4401` → after: `L3929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3929) · [Before (L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4401)

```diff
-       return `${pp}|${ip}|${cp}`
+       return `${TT}|${UT}|${mT}`
```

#### 540. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4405` → after: `L3933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3933) · [Before (L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4405)

```diff
-         this.TI = new Map
+         this.ZM = new Map
```

#### 541. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4413-L4414` → after: `L3941-L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3941-L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3941-L3942) · [Before (L4413-L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4413-L4414)

```diff
-         if (0 === this.TI.size) return !1;
-         const Op = this.TI.get(Ap(pp, ip, cp));
+         if (0 === this.ZM.size) return !1;
+         const WT = this.ZM.get(lT(TT, UT, mT));
```

#### 542. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4421` → after: `L3949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3949) · [Before (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4421)

```diff
-           of this.TI.values()) pp(ip[0], ip[1], ip[2])
+           of this.ZM.values()) TT(UT[0], UT[1], UT[2])
```

#### 543. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4428` → after: `L3956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3956) · [Before (L4428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4428)

```diff
-         0 !== this.TI.size && !1 === (null === (Op = this.TI.get(Ap(pp, ip, cp))) || void 0 === Op ? void 0 : Op.confirmed) && this.remove(pp, ip, cp)
+         0 !== this.ZM.size && !1 === (null === (WT = this.ZM.get(lT(TT, UT, mT))) || void 0 === WT ? void 0 : WT.confirmed) && this.remove(TT, UT, mT)
```

#### 544. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4432-L4433` → after: `L3960-L3961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3960-L3961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3960-L3961) · [Before (L4432-L4433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4432-L4433)

```diff
-           TI: ip,
-           OO: cp
+           ZM: UT,
+           Km: mT
```

#### 545. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4437-L4440` → after: `L3965-L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3965-L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3965-L3968) · [Before (L4437-L4440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4437-L4440)

```diff
-             fI: Op,
-             bI: op,
-             hI: Ip,
-             aI: Sp
+             cM: WT,
+             vM: zT,
+             fM: MT,
+             qM: gT
```

#### 546. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4445` → after: `L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3973) · [Before (L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4445)

```diff
-         if (0 === this.TI.size) return;
+         if (0 === this.ZM.size) return;
```

#### 547. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4447-L4448` → after: `L3975-L3976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3975-L3976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3975-L3976) · [Before (L4447-L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4447-L4448)

```diff
-           op = this.TI.get(Op);
-         op && (this.TI.delete(Op), (0, Dp.g)().Yk.deleteEntity(op.eId))
+           zT = this.ZM.get(WT);
+         zT && (this.ZM.delete(WT), (0, jT.h)().pY.deleteEntity(zT.eId))
```

#### 548. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4451-L4452` → after: `L3979-L3980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3979-L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3979-L3980) · [Before (L4451-L4452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4451-L4452)

```diff
-         if (0 === this.TI.size) return;
-         const Op = this.TI.get(Ap(pp, ip, cp));
+         if (0 === this.ZM.size) return;
+         const WT = this.ZM.get(lT(TT, UT, mT));
```

#### 549. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4456-L4458` → after: `L3984-L3986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3984-L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3984-L3986) · [Before (L4456-L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4456-L4458)

```diff
-         if (0 !== this.TI.size)
-           for (const Op of [...this.TI.values()]) {
-             const [Ip, Sp, xp] = (0, op.T)(Op.pos);
+         if (0 !== this.ZM.size)
+           for (const WT of [...this.ZM.values()]) {
+             const [MT, gT, nT] = (0, zT.J)(WT.pos);
```

#### 550. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4463-L4464` → after: `L3991-L3992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3991-L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3991-L3992) · [Before (L4463-L4464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4463-L4464)

```diff
-         if (0 !== this.TI.size)
-           for (const ip of [...this.TI.values()]) null === ip.disposeAt ? pp > ip.landsAtMs + 500 && (console.warn(`Growing block at ${ip.pos.join(",")} never finished, removing its visual`), this.remove(ip.pos[0], ip.pos[1], ip.pos[2])) : pp >= ip.disposeAt && this.remove(ip.pos … [truncated]
+         if (0 !== this.ZM.size)
+           for (const UT of [...this.ZM.values()]) null === UT.disposeAt ? TT > UT.landsAtMs + 500 && (console.warn(`Growing block at ${UT.pos.join(",")} never finished, removing its visual`), this.remove(UT.pos[0], UT.pos[1], UT.pos[2])) : TT >= UT.disposeAt && this.remove(UT.pos … [truncated]
```

#### 551. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4467` → after: `L3995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L3995) · [Before (L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4467)

```diff
-         const Lp = (0, Dp.g)(),
+         const HT = (0, jT.h)(),
```

#### 552. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4474` → after: `L4002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4002) · [Before (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4474)

```diff
-           Up = this.TI.get(yp);
+           ZT = this.ZM.get(BT);
```

#### 553. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4477-L4478` → after: `L4005-L4006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4005-L4006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4005-L4006) · [Before (L4477-L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4477-L4478)

```diff
-           const pp = Lp.Yk.getState(Up.eId, "growingBlock"),
-             ip = (0, Op.u)(pp, Wp, Pp);
+           const TT = HT.pY.getState(ZT.eId, "growingBlock"),
+             UT = (0, WT.q)(TT, pT, LT);
```

#### 554. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4481-L4482` → after: `L4009-L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4009-L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4009-L4010) · [Before (L4481-L4482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4481-L4482)

```diff
-         if (Sp().Yx(Lp.Yk.sH(Lp.NJ), pp) > 64) return;
-         const wp = Dp.k.itemsClient[ip].getGrowingMesh(),
+         if (gT().sg(HT.pY.Aq(HT.VV), TT) > 64) return;
+         const cT = jT.j.itemsClient[UT].getGrowingMesh(),
```

#### 555. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4486` → after: `L4014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4014) · [Before (L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4486)

```diff
-             ei: wp.ei.clone()
+             gp: cT.gp.clone()
```

#### 556. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4488` → after: `L4016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4016) · [Before (L4488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4488)

```diff
-         (0, Yp.b)(vp, ip);
+         (0, kT.d)(vT, UT);
```

#### 557. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4490-L4492` → after: `L4018-L4020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4018-L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4018-L4020) · [Before (L4490-L4492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4490-L4492)

```diff
-         wp.rotation.set(vp.rotation.x, vp.rotation.y, vp.rotation.z), (0, xp.r)(wp, 0, 0, 0);
-         const Hp = Lp.Yk.add([pp[0], pp[1], pp[2]], 1, 1);
-         Lp.Yk.vJ(Hp, Lp.Yk.names.mesh, {
+         cT.rotation.set(vT.rotation.x, vT.rotation.y, vT.rotation.z), (0, nT.n)(cT, 0, 0, 0);
+         const qT = HT.pY.add([TT[0], TT[1], TT[2]], 1, 1);
+         HT.pY.YV(qT, HT.pY.names.mesh, {
```

#### 558. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4496` → after: `L4024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4024) · [Before (L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4496)

```diff
-         const dp = Lp.UW.XT(ip),
+         const iT = HT.DL.bK(UT),
```

#### 559. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4498` → after: `L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4026) · [Before (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4498)

```diff
-         Lp.Yk.vJ(Hp, "growingBlock", {
+         HT.pY.YV(qT, "growingBlock", {
```

#### 560. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4502` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4030) · [Before (L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4502)

```diff
-         }), this.TI.set(yp, {
+         }), this.ZM.set(BT, {
```

#### 561. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4504` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4032) · [Before (L4504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4504)

```diff
-           tx: ip,
+           Gg: UT,
```

#### 562. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4512` → after: `L4040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4040) · [Before (L4512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4512)

```diff
-         for (const pp of [...this.TI.values()]) this.remove(pp.pos[0], pp.pos[1], pp.pos[2])
+         for (const TT of [...this.ZM.values()]) this.remove(TT.pos[0], TT.pos[1], TT.pos[2])
```

#### 563. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4516` → after: `L4044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4044) · [Before (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4516)

```diff
-   38386: (pp, ip, cp) => {
+   38304: (TT, UT, mT) => {
```

#### 564. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4520-L4533` → after: `L4048-L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4048-L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4048-L4061) · [Before (L4520-L4533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4520-L4533)

```diff
-     var Op = cp(195),
-       op = cp(1251),
-       Ip = cp(4341),
-       Sp = cp(38443),
-       xp = cp(636),
-       Lp = cp(337),
-       Yp = cp(9338),
-       Dp = cp(38430),
-       Ap = cp(9375),
-       Pp = cp(38374),
-       Wp = cp(37624),
-       yp = cp(38394),
-       Up = cp(2849),
-       wp = cp(343),
+     var WT = mT(208),
+       zT = mT(1336),
+       MT = mT(4328),
+       gT = mT(38372),
+       nT = mT(649),
+       HT = mT(366),
+       kT = mT(9330),
+       jT = mT(38357),
+       lT = mT(9360),
+       LT = mT(38292),
+       pT = mT(37503),
+       BT = mT(38310),
+       ZT = mT(2875),
+       cT = mT(375),
```

#### 565. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4535-L4541` → after: `L4063-L4069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4063-L4069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4063-L4069) · [Before (L4535-L4541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4535-L4541)

```diff
-       tp = cp(3774),
-       Hp = cp(3837),
-       dp = cp(36942),
-       ep = cp(36948),
-       jp = cp(34),
-       kp = cp(38451),
-       mp = cp(37246);
+       fT = mT(3781),
+       qT = mT(3841),
+       iT = mT(36851),
+       bT = mT(36855),
+       OT = mT(31),
+       eT = mT(38374),
+       YT = mT(37125);
```

#### 566. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4543` → after: `L4071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4071) · [Before (L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4543)

```diff
-         let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mp.e;
+         let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YT.c;
```

#### 567. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4545` → after: `L4073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4073) · [Before (L4545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4545)

```diff
-           Ip = (0, Lp.zb)(cp),
+           MT = (0, HT.Nb)(mT),
```

#### 568. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4552` → after: `L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4080) · [Before (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4552)

```diff
-         const Pp = Yp.e[pp].id,
+         const LT = kT.g[TT].id,
```

#### 569. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4576` → after: `L4104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4104) · [Before (L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4576)

```diff
-         let Ip = (0, Lp.zb)(cp);
+         let MT = (0, HT.Nb)(mT);
```

#### 570. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4578` → after: `L4106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4106) · [Before (L4578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4578)

```diff
-         const Sp = (0, Lp.Fb)(Ip);
+         const gT = (0, HT.Wb)(MT);
```

#### 571. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4587` → after: `L4115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4115) · [Before (L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4587)

```diff
-         const Ap = Yp.e[pp].id,
+         const lT = kT.g[TT].id,
```

#### 572. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4589` → after: `L4117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4117) · [Before (L4589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4589)

```diff
-           Wp = Yp.e[`Maple Ladder${Pp}`].id,
+           pT = kT.g[`Maple Ladder${LT}`].id,
```

#### 573. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4614` → after: `L4142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4142) · [Before (L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4614)

```diff
-               Ip = Yp.e[pp].id;
+               MT = kT.g[TT].id;
```

#### 574. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4635-L4636` → after: `L4163-L4164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4163-L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4163-L4164) · [Before (L4635-L4636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4635-L4636)

```diff
-         ...Lp.wc.reduce(((pp, ip) => (pp[`${ip} Popup Tower`] = {
-           block: `${ip} Wool`,
+         ...HT._c.reduce(((TT, UT) => (TT[`${UT} Popup Tower`] = {
+           block: `${UT} Wool`,
```

#### 575. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4651` → after: `L4179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4179) · [Before (L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4651)

```diff
-     var Xp = cp(38409);
+     var aT = mT(38327);
```

#### 576. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4654` → after: `L4182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4182) · [Before (L4654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4654)

```diff
-         vp().copy(lp, pp.tw), lp[1] = 0, vp().set(pp.ZN, 0, 0, 0), vp().set(pp.zN, 0, 0, 0), vp().copy(pp.tw, lp)
+         vT().copy(yT, TT.Tc), yT[1] = 0, vT().set(TT.Vr, 0, 0, 0), vT().set(TT.Kr, 0, 0, 0), vT().copy(TT.Tc, yT)
```

#### 577. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4658` → after: `L4186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4186) · [Before (L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4658)

```diff
-         const ip = pp.Yk.fn(pp.NJ);
+         const UT = TT.pY.rK(TT.VV);
```

#### 578. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4663` → after: `L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4191) · [Before (L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4663)

```diff
-         const cp = pp.Yk.fn(pp.NJ);
+         const mT = TT.pY.rK(TT.VV);
```

#### 579. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4665` → after: `L4193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4193) · [Before (L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4665)

```diff
-         const Op = null !== (ip = pp.Gpp) && void 0 !== ip ? ip : pp.camera.hK();
+         const WT = null !== (UT = TT.STT) && void 0 !== UT ? UT : TT.camera.qD();
```

#### 580. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4677-L4679` → after: `L4205-L4207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4205-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4205-L4207) · [Before (L4677-L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4677-L4679)

```diff
-               Sp = Op.Yk.sH(Op.NJ);
-             if (!Ip.posSatisfiesModifyConstraints(Op.NJ, ...Sp)) return !1;
-             const xp = null !== (op = Op.Gpp) && void 0 !== op ? op : Op.camera.hK(),
+               gT = WT.pY.Aq(WT.VV);
+             if (!MT.posSatisfiesModifyConstraints(WT.VV, ...gT)) return !1;
+             const nT = null !== (zT = WT.STT) && void 0 !== zT ? zT : WT.camera.qD(),
```

#### 581. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4682` → after: `L4210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4210) · [Before (L4682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4682)

```diff
-             const Dp = Ip.getItemStat(Op.NJ, pp, "bridgeLength"),
+             const jT = MT.getItemStat(WT.VV, TT, "bridgeLength"),
```

#### 582. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4688-L4695` → after: `L4216-L4223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4216-L4223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4216-L4223) · [Before (L4688-L4695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4688-L4695)

```diff
-               of Ap) Ip.qE(pp[0], pp[1], pp[2], Yp.e[ip].id);
-             const Pp = Ip.Nip(Op.NJ).getSelectedSlotIndex(),
-               Wp = Ip.client.inventoryPrediction.predict(Xp.d.remove(Pp, 1, pp));
-             return (0, tp.sendColyMessage)(Hp.Og, {
-               fL: Lp,
-               bL: ip,
-               uS: xp,
-               Ax: Wp
+               of lT) MT.EQ(TT[0], TT[1], TT[2], kT.g[UT].id);
+             const LT = MT.aUT(WT.VV).getSelectedSlotIndex(),
+               pT = MT.client.inventoryPrediction.predict(aT.b.remove(LT, 1, TT));
+             return (0, fT.sendColyMessage)(qT.Ng, {
+               ZH: HT,
+               cH: UT,
+               Tg: nT,
+               Pg: pT
```

#### 583. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4701-L4707` → after: `L4229-L4235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4229-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4229-L4235) · [Before (L4701-L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4701-L4707)

```diff
-     var Bp = cp(38402),
-       Np = cp(38421),
-       Tp = cp(38399),
-       fp = cp(37142),
-       bp = cp(9438),
-       hp = cp(37907),
-       ap = cp(1183),
+     var QT = mT(38325),
+       sT = mT(38352),
+       FT = mT(38316),
+       PT = mT(37030),
+       VT = mT(9416),
+       uT = mT(37813),
+       CT = mT(1268),
```

#### 584. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4709-L4710` → after: `L4237-L4238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4237-L4238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4237-L4238) · [Before (L4709-L4710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4709-L4710)

```diff
-       Fp = cp(38411);
-     const gp = atob("bTg1aG8zN2JpNmc="),
+       KT = mT(38331);
+     const ST = atob("MGJ1ejMxOXJrdGE0"),
```

#### 585. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4713-L4719` → after: `L4241-L4247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4241-L4247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4241-L4247) · [Before (L4713-L4719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4713-L4719)

```diff
-       Zp = (0, Yp.f)("Water"),
-       zp = (0, Yp.f)("Lava"),
-       sp = (0, Yp.f)("Air"),
-       Kp = (0, Yp.f)("Fat Cactus"),
-       Vp = (0, Yp.f)("Fat Cactus|Growing"),
-       ii = (0, Yp.f)("Dry Fat Cactus"),
-       ci = (0, Yp.f)("Obsidian"),
+       ET = (0, kT.j)("Water"),
+       hT = (0, kT.j)("Lava"),
+       DT = (0, kT.j)("Air"),
+       oT = (0, kT.j)("Fat Cactus"),
+       AT = (0, kT.j)("Fat Cactus|Growing"),
+       RT = (0, kT.j)("Dry Fat Cactus"),
+       TU = (0, kT.j)("Obsidian"),
```

#### 586. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4750` → after: `L4278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4278) · [Before (L4750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4750)

```diff
-         blendMode: Ip.g.OneOne
+         blendMode: MT.e.OneOne
```

#### 587. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4754-L4756` → after: `L4282-L4284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4282-L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4282-L4284) · [Before (L4754-L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4754-L4756)

```diff
-         this.heldItemCls = pp, this.hitEId = ip, this.distanceTravelled = cp, this.dS = Op, this.targetBlock = op, this.qm = Ip, this.HP = void 0, this.bloxd = void 0, this.inven = void 0, this.selectedSlot = void 0, this.tryPutDownFluid = (pp, ip, cp) => {
-           if (this.bloxd.nH(...pp) === ip && this.bloxd.canUseBucketAtPos(this.HP.NJ, ...pp)) {
-             if (!Yp.e[cp].tW && !this.bloxd.playerCanChangePos(this.HP.NJ, ...pp)) return {
+         this.heldItemCls = TT, this.hitEId = UT, this.distanceTravelled = mT, this.AM = WT, this.targetBlock = zT, this.AY = MT, this.Rl = void 0, this.bloxd = void 0, this.inven = void 0, this.selectedSlot = void 0, this.tryPutDownFluid = (TT, UT, mT) => {
+           if (this.bloxd.uq(...TT) === UT && this.bloxd.canUseBucketAtPos(this.Rl.VV, ...TT)) {
+             if (!kT.g[mT].RL && !this.bloxd.playerCanChangePos(this.Rl.VV, ...TT)) return {
```

#### 588. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4760-L4765` → after: `L4288-L4293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4288-L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4288-L4293) · [Before (L4760-L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4760-L4765)

```diff
-             (0, Up.d)().qE(...pp, cp);
-             const ip = this.bloxd.client.inventoryPrediction.predict(this.HP.Tu.creative ? null : Xp.d.replace(this.selectedSlot, this.qm.name, "Bucket", {}));
-             return (0, tp.sendColyMessage)(Hp.Ph, {
-               RL: pp,
-               Ax: ip
-             }), dp.b.play((0, ep.d)("bucketEmpty"), 1), {
+             (0, ZT.d)().EQ(...TT, mT);
+             const UT = this.bloxd.client.inventoryPrediction.predict(this.Rl.kY.creative ? null : aT.b.replace(this.selectedSlot, this.AY.name, "Bucket", {}));
+             return (0, fT.sendColyMessage)(qT.Qh, {
+               WH: TT,
+               Pg: UT
+             }), iT.c.play((0, bT.d)("bucketEmpty"), 1), {
```

#### 589. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4774` → after: `L4302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4302) · [Before (L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4774)

```diff
-         }, this.HP = (0, Up.g)(), this.bloxd = (0, Up.d)(), this.inven = this.HP.Yk.Nip(this.HP.NJ), this.selectedSlot = this.inven.getSelectedSlotIndex()
+         }, this.Rl = (0, ZT.h)(), this.bloxd = (0, ZT.d)(), this.inven = this.Rl.pY.aUT(this.Rl.VV), this.selectedSlot = this.inven.getSelectedSlotIndex()
```

#### 590. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4802` → after: `L4330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4330) · [Before (L4802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4802)

```diff
-         return this.sendAltAction(Hp.Ef), {
+         return this.sendAltAction(qT.Lf), {
```

#### 591. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4809-L4811` → after: `L4337-L4339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4337-L4339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4337-L4339) · [Before (L4809-L4811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4809-L4811)

```diff
-         this.HP.gpp && (pp = [...this.HP.gpp], this.HP.jK(pp, pp));
-         const ip = (pp ? this.HP.camera.wZ : 0) + this.bloxd.getBlockReach(this.HP.NJ);
-         return this.HP.pickBlock(pp, this.HP.Gpp, ip, (pp => 0 !== pp))
+         this.Rl.KTT && (TT = [...this.Rl.KTT], this.Rl.jD(TT, TT));
+         const UT = (TT ? this.Rl.camera.hN : 0) + this.bloxd.getBlockReach(this.Rl.VV);
+         return this.Rl.pickBlock(TT, this.Rl.STT, UT, (TT => 0 !== TT))
```

#### 592. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4814-L4815` → after: `L4342-L4343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4342-L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4342-L4343) · [Before (L4814-L4815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4814-L4815)

```diff
-         if (this.hitEId || !this.qm) return;
-         const pp = Np.m[this.qm.name];
+         if (this.hitEId || !this.AY) return;
+         const TT = sT.o[this.AY.name];
```

#### 593. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4818-L4822` → after: `L4346-L4350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4346-L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4346-L4350) · [Before (L4818-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4818-L4822)

```diff
-         if (!ip || !(0, Np.k)(pp, ip.KV)) return;
-         const cp = this.bloxd.client.inventoryPrediction.predict(this.HP.Tu.creative ? null : Xp.d.replace(this.selectedSlot, this.qm.name, "Air"));
-         return (0, tp.sendColyMessage)(Hp.Lh, {
-           iA: ip.position,
-           Ax: cp
+         if (!UT || !(0, sT.n)(TT, UT.oR)) return;
+         const mT = this.bloxd.client.inventoryPrediction.predict(this.Rl.kY.creative ? null : aT.b.replace(this.selectedSlot, this.AY.name, "Air"));
+         return (0, fT.sendColyMessage)(qT.Kh, {
+           Qj: UT.position,
+           Pg: mT
```

#### 594. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4830` → after: `L4358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4358) · [Before (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4830)

```diff
-         if (this.hitEId || !Gp.includes(null === (pp = this.qm) || void 0 === pp ? void 0 : pp.name)) return;
+         if (this.hitEId || !GT.includes(null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name)) return;
```

#### 595. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4833` → after: `L4361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4361) · [Before (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4833)

```diff
-           if (cp.KV === Zp || cp.KV === zp) {
+           if (mT.oR === ET || mT.oR === hT) {
```

#### 596. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4835-L4844` → after: `L4363-L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4363-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4363-L4372) · [Before (L4835-L4844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4835-L4844)

```diff
-             if (cp.KV === zp && "Water Bucket" === (null === (Op = this.qm) || void 0 === Op ? void 0 : Op.name)) return this.tryPutDownFluid(cp.position, zp, ci);
-             if ("Water Bucket" === this.qm.name) return this.tryPutDownFluid(cp.nY, sp, Zp);
-             if ("Lava Bucket" === this.qm.name) return this.tryPutDownFluid(cp.nY, sp, zp)
-           }
-           if (Oi.includes(cp.KV)) {
-             if ("Bucket" !== this.qm.name && ("Empty Bottle" !== this.qm.name || cp.KV !== Zp)) return;
-             const pp = cp.KV === Zp || cp.KV === zp,
-               ip = (0, Lp._d)("Bucket" === this.qm.name, pp, this.bloxd.playerCanChangePos(this.HP.NJ, ...cp.position), this.bloxd.getClientPredictedOption(this.HP.NJ, "preserveProtectedFluidSources"));
-             if (!ip && !this.bloxd.canUseBucketAtPos(this.HP.NJ, ...cp.position)) return;
-             let Op = cp.KV,
+             if (mT.oR === hT && "Water Bucket" === (null === (WT = this.AY) || void 0 === WT ? void 0 : WT.name)) return this.tryPutDownFluid(mT.position, hT, TU);
+             if ("Water Bucket" === this.AY.name) return this.tryPutDownFluid(mT.NZ, DT, ET);
+             if ("Lava Bucket" === this.AY.name) return this.tryPutDownFluid(mT.NZ, DT, hT)
+           }
+           if (UU.includes(mT.oR)) {
+             if ("Bucket" !== this.AY.name && ("Empty Bottle" !== this.AY.name || mT.oR !== ET)) return;
+             const TT = mT.oR === ET || mT.oR === hT,
+               UT = (0, HT.Fe)("Bucket" === this.AY.name, TT, this.bloxd.playerCanChangePos(this.Rl.VV, ...mT.position), this.bloxd.getClientPredictedOption(this.Rl.VV, "preserveProtectedFluidSources"));
+             if (!UT && !this.bloxd.canUseBucketAtPos(this.Rl.VV, ...mT.position)) return;
+             let WT = mT.oR,
```

#### 597. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4852-L4857` → after: `L4380-L4385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4380-L4385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4380-L4385) · [Before (L4852-L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4852-L4857)

```diff
-             } = (0, Lp.Gb)(this.HP.Tu.creative, this.qm.name, Sp);
-             if ("Bucket" === this.qm.name) {
-               switch (cp.KV) {
-                 case Zp:
-                 case zp:
-                   Op = ip ? cp.KV : sp;
+             } = (0, HT.Xb)(this.Rl.kY.creative, this.AY.name, gT);
+             if ("Bucket" === this.AY.name) {
+               switch (mT.oR) {
+                 case ET:
+                 case hT:
+                   WT = UT ? mT.oR : DT;
```

#### 598. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4859-L4860` → after: `L4387-L4388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4387-L4388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4387-L4388) · [Before (L4859-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4859-L4860)

```diff
-                 case Kp:
-                 case Vp:
+                 case oT:
+                 case AT:
```

#### 599. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4863` → after: `L4391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4391) · [Before (L4863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4863)

```diff
-               Ip = cp.KV !== zp ? "Water Bucket" : "Lava Bucket"
+               MT = mT.oR !== hT ? "Water Bucket" : "Lava Bucket"
```

#### 600. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4872-L4879` → after: `L4400-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4400-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4400-L4407) · [Before (L4872-L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4872-L4879)

```diff
-             Op !== cp.KV && this.bloxd.qE(...cp.position, Op);
-             const Dp = this.bloxd.client.inventoryPrediction.predict(xp ? Xp.d.fillContainer(this.selectedSlot, this.qm.name, Ip, op) : null);
-             return (0, tp.sendColyMessage)(Hp.uf, {
-               Kx: cp.position,
-               Vx: Op,
-               pL: op,
-               Ax: Dp
-             }), dp.b.play((0, ep.d)("bucketFill"), 1), {
+             WT !== mT.oR && this.bloxd.EQ(...mT.position, WT);
+             const jT = this.bloxd.client.inventoryPrediction.predict(nT ? aT.b.fillContainer(this.selectedSlot, this.AY.name, MT, zT) : null);
+             return (0, fT.sendColyMessage)(qT.yf, {
+               qn: mT.position,
+               bn: WT,
+               en: zT,
+               Pg: jT
+             }), iT.c.play((0, bT.d)("bucketFill"), 1), {
```

#### 601. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4884` → after: `L4412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4412) · [Before (L4884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4884)

```diff
-           if (rp.includes(null === (ip = this.qm) || void 0 === ip ? void 0 : ip.name)) {
+           if (NT.includes(null === (UT = this.AY) || void 0 === UT ? void 0 : UT.name)) {
```

#### 602. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4886` → after: `L4414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4414) · [Before (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4886)

```diff
-             let pp = null === (op = this.HP.Rpp) || void 0 === op ? void 0 : op.nY,
+             let TT = null === (zT = this.Rl.xTT) || void 0 === zT ? void 0 : zT.NZ,
```

#### 603. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4888` → after: `L4416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4416) · [Before (L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4888)

```diff
-             if (this.heldItemCls.checkTargetedBlockCanBePlacedOver() && (pp = this.dS, ip = this.targetBlock), pp) return this.tryPutDownFluid(pp, ip, "Water Bucket" === this.qm.name ? Zp : zp)
+             if (this.heldItemCls.checkTargetedBlockCanBePlacedOver() && (TT = this.AM, UT = this.targetBlock), TT) return this.tryPutDownFluid(TT, UT, "Water Bucket" === this.AY.name ? ET : hT)
```

#### 604. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4893-L4897` → after: `L4421-L4425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4421-L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4421-L4425) · [Before (L4893-L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4893-L4897)

```diff
-         if (!this.qm) return;
-         if ("Bowl" !== this.qm.name && (!this.qm.name.includes("Bowl of Cranberries") || "Bowl of Cranberries" === this.qm.name)) return;
-         if (this.targetBlock !== (0, Yp.f)("Cranberries_stage2")) return;
-         if (!this.bloxd.playerCanChangePos(this.HP.NJ, ...this.dS)) return;
-         const pp = (0, Yp.f)("Cranberries_stage1");
+         if (!this.AY) return;
+         if ("Bowl" !== this.AY.name && (!this.AY.name.includes("Bowl of Cranberries") || "Bowl of Cranberries" === this.AY.name)) return;
+         if (this.targetBlock !== (0, kT.j)("Cranberries_stage2")) return;
+         if (!this.bloxd.playerCanChangePos(this.Rl.VV, ...this.AM)) return;
+         const TT = (0, kT.j)("Cranberries_stage1");
```

#### 605. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4899-L4902` → after: `L4427-L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4427-L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4427-L4430) · [Before (L4899-L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4899-L4902)

```diff
-         if ("Bowl" === this.qm.name && this.qm.amount > 1 && (ip = this.inven.getFreeInventoryPosition(), null === ip)) return;
-         this.bloxd.qE(...this.dS, pp);
-         const cp = this.bloxd.getBowlItemName("Bowl of Cranberries", this.bloxd.getNumItemsInBowl(this.qm.name) + 1),
-           Op = this.bloxd.client.inventoryPrediction.predict(Xp.d.fillContainer(this.selectedSlot, this.qm.name, cp, ip));
+         if ("Bowl" === this.AY.name && this.AY.amount > 1 && (UT = this.inven.getFreeInventoryPosition(), null === UT)) return;
+         this.bloxd.EQ(...this.AM, TT);
+         const mT = this.bloxd.getBowlItemName("Bowl of Cranberries", this.bloxd.getNumItemsInBowl(this.AY.name) + 1),
+           WT = this.bloxd.client.inventoryPrediction.predict(aT.b.fillContainer(this.selectedSlot, this.AY.name, mT, UT));
```

#### 606. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4904-L4907` → after: `L4432-L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4432-L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4432-L4435) · [Before (L4904-L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4904-L4907)

```diff
-           fD: this.dS,
-           Vx: pp,
-           pL: ip,
-           Ax: Op
+           fj: this.AM,
+           bn: TT,
+           en: UT,
+           Pg: WT
```

#### 607. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4916-L4917` → after: `L4444-L4445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4444-L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4444-L4445) · [Before (L4916-L4917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4916-L4917)

```diff
-         const cp = null === (pp = this.HP.Yk.ccp(this.hitEId)) || void 0 === pp ? void 0 : pp.lifeformType,
-           Op = (0, yp.A)(null === (ip = this.qm) || void 0 === ip ? void 0 : ip.name, cp, this.distanceTravelled);
+         const mT = null === (TT = this.Rl.pY.GUT(this.hitEId)) || void 0 === TT ? void 0 : TT.lifeformType,
+           WT = (0, BT.y)(null === (UT = this.AY) || void 0 === UT ? void 0 : UT.name, mT, this.distanceTravelled);
```

#### 608. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4920` → after: `L4448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4448) · [Before (L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4920)

```diff
-           if (this.qm.amount > 1 && (pp = this.inven.getFreeInventoryPosition(), null === pp)) return {
+           if (this.AY.amount > 1 && (TT = this.inven.getFreeInventoryPosition(), null === TT)) return {
```

#### 609. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4924` → after: `L4452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4452) · [Before (L4924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4924)

```diff
-           const ip = this.bloxd.client.inventoryPrediction.predict(Xp.d.fillContainer(this.selectedSlot, "Empty Bottle", "Milk Potion", pp));
+           const UT = this.bloxd.client.inventoryPrediction.predict(aT.b.fillContainer(this.selectedSlot, "Empty Bottle", "Milk Potion", TT));
```

#### 610. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4926-L4928` → after: `L4454-L4456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4454-L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4454-L4456) · [Before (L4926-L4928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4926-L4928)

```diff
-             eS: this.hitEId,
-             pL: pp,
-             Ax: ip
+             RM: this.hitEId,
+             en: TT,
+             Pg: UT
```

#### 611. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4935-L4937` → after: `L4463-L4465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4463-L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4463-L4465) · [Before (L4935-L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4935-L4937)

```diff
-           eS: this.hitEId,
-           pL: null,
-           Ax: this.bloxd.client.inventoryPrediction.predict(null)
+           RM: this.hitEId,
+           en: null,
+           Pg: this.bloxd.client.inventoryPrediction.predict(null)
```

#### 612. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4946-L4949` → after: `L4474-L4477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4474-L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4474-L4477) · [Before (L4946-L4949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4946-L4949)

```diff
-         const cp = null === (pp = this.HP.Yk.ccp(this.hitEId)) || void 0 === pp ? void 0 : pp.lifeformType;
-         if (!xp.o.includes(cp)) return;
-         this.sendAltAction(Hp.Df), this.sendAltAction(Hp.Ef);
-         const Op = (0, yp.l)(cp, null === (ip = this.qm) || void 0 === ip ? void 0 : ip.name);
+         const mT = null === (TT = this.Rl.pY.GUT(this.hitEId)) || void 0 === TT ? void 0 : TT.lifeformType;
+         if (!nT.m.includes(mT)) return;
+         this.sendAltAction(qT.Jf), this.sendAltAction(qT.Lf);
+         const WT = (0, BT.i)(mT, null === (UT = this.AY) || void 0 === UT ? void 0 : UT.name);
```

#### 613. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4957` → after: `L4485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4485) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4957)

```diff
-         if ("Name Tag" === (null === (pp = this.qm) || void 0 === pp ? void 0 : pp.name)) {
+         if ("Name Tag" === (null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name)) {
```

#### 614. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4960-L4961` → after: `L4488-L4489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4488-L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4488-L4489) · [Before (L4960-L4961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4960-L4961)

```diff
-             const pp = null === (cp = this.HP.Yk.ccp(this.hitEId)) || void 0 === cp ? void 0 : cp.lifeformType;
-             if (xp.o.includes(pp)) return
+             const TT = null === (mT = this.Rl.pY.GUT(this.hitEId)) || void 0 === mT ? void 0 : mT.lifeformType;
+             if (nT.m.includes(TT)) return
```

#### 615. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4963` → after: `L4491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4491) · [Before (L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4963)

```diff
-           return jp.m.GA("EditNameTag", null !== (ip = this.qm.attributes.customAttributes.text) && void 0 !== ip ? ip : ""), {
+           return OT.j.EZ("EditNameTag", null !== (UT = this.AY.attributes.customAttributes.text) && void 0 !== UT ? UT : ""), {
```

#### 616. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4971-L4974` → after: `L4499-L4502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4499-L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4499-L4502) · [Before (L4971-L4974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4971-L4974)

```diff
-         if ("Book" === (null === (pp = this.qm) || void 0 === pp ? void 0 : pp.name)) return jp.m.GA("EditBook", {
-           pages: (0, op.P)(this.qm.attributes.customAttributes.pages),
-           title: null !== (ip = this.qm.attributes.customDisplayName) && void 0 !== ip ? ip : "Title",
-           isPublished: !!this.qm.attributes.customDescription
+         if ("Book" === (null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name)) return OT.j.EZ("EditBook", {
+           pages: (0, zT.N)(this.AY.attributes.customAttributes.pages),
+           title: null !== (UT = this.AY.attributes.customDisplayName) && void 0 !== UT ? UT : "Title",
+           isPublished: !!this.AY.attributes.customDescription
```

#### 617. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4982` → after: `L4510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4510) · [Before (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4982)

```diff
-         const ip = (0, Lp.vb)(null === (pp = this.qm) || void 0 === pp ? void 0 : pp.name);
+         const UT = (0, HT.Mb)(null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name);
```

#### 618. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4984-L4986` → after: `L4512-L4514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4512-L4514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4512-L4514) · [Before (L4984-L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4984-L4986)

```diff
-         const cp = (0, Lp.ub)(ip),
-           Op = this.HP.Yk.fip(this.HP.NJ);
-         return Fp.d.swapPosClient(Op, cp, this.selectedSlot), {
+         const mT = (0, HT.Jb)(UT),
+           WT = this.Rl.pY.yUT(this.Rl.VV);
+         return KT.b.swapPosClient(WT, mT, this.selectedSlot), {
```

#### 619. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4995-L4997` → after: `L4523-L4525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4523-L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4523-L4525) · [Before (L4995-L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L4995-L4997)

```diff
-           Op = this.bloxd.getItemStat(this.HP.NJ, null === (pp = this.qm) || void 0 === pp ? void 0 : pp.name, "harvests");
-         if (this.bloxd.playerCanChangePos(this.HP.NJ, ...this.dS)) {
-           if ("wood" === Op && Lp.Dd.includes(cp)) return this.sendAltAction(Hp.zf), (0, Up.d)().qE(...this.dS, (0, Yp.f)(`Barkless ${cp}`)), {
+           WT = this.bloxd.getItemStat(this.Rl.VV, null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name, "harvests");
+         if (this.bloxd.playerCanChangePos(this.Rl.VV, ...this.AM)) {
+           if ("wood" === WT && HT.he.includes(mT)) return this.sendAltAction(qT.Gf), (0, ZT.d)().EQ(...this.AM, (0, kT.j)(`Barkless ${mT}`)), {
```

#### 620. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5001-L5003` → after: `L4529-L4531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4529-L4531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4529-L4531) · [Before (L5001-L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5001-L5003)

```diff
-           if ("Shears" === (null === (ip = this.qm) || void 0 === ip ? void 0 : ip.name)) {
-             const pp = Lp.Xd.get(cp);
-             if (void 0 !== pp) return this.sendAltAction(Hp.zf), (0, Up.d)().qE(...this.dS, (0, Yp.f)(pp)), {
+           if ("Shears" === (null === (UT = this.AY) || void 0 === UT ? void 0 : UT.name)) {
+             const TT = HT.Be.get(mT);
+             if (void 0 !== TT) return this.sendAltAction(qT.Gf), (0, ZT.d)().EQ(...this.AM, (0, kT.j)(TT)), {
```

#### 621. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5008` → after: `L4536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4536) · [Before (L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5008)

```diff
-           return "cuttable" === Op && Lp.hc.includes((0, Yp.d)(this.targetBlock)) ? (this.sendAltAction(Hp.zf), (0, Up.d)().qE(...this.dS, (0, Yp.f)("Tilled Soil")), {
+           return "cuttable" === WT && HT.Gc.includes((0, kT.e)(this.targetBlock)) ? (this.sendAltAction(qT.Gf), (0, ZT.d)().EQ(...this.AM, (0, kT.j)("Tilled Soil")), {
```

#### 622. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5016-L5017` → after: `L4544-L4545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4544-L4545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4544-L4545) · [Before (L5016-L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5016-L5017)

```diff
-         if (!Ep.includes(null === (pp = this.qm) || void 0 === pp ? void 0 : pp.name)) return;
-         return (null === (ip = null === (cp = Jp[this.qm.name]) || void 0 === cp ? void 0 : cp.call(Jp, this.HP)) || void 0 === ip || ip) && this.sendConsumableAltAction(this.HP.Tu.creative ? null : Xp.d.remove(this.selectedSlot, 1, this.qm.name)), {
+         if (!tT.includes(null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name)) return;
+         return (null === (UT = null === (mT = IT[this.AY.name]) || void 0 === mT ? void 0 : mT.call(IT, this.Rl)) || void 0 === UT || UT) && this.sendConsumableAltAction(this.Rl.kY.creative ? null : aT.b.remove(this.selectedSlot, 1, this.AY.name)), {
```

#### 623. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5025-L5026` → after: `L4553-L4554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4553-L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4553-L4554) · [Before (L5025-L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5025-L5026)

```diff
-         const ip = null === (pp = this.HP.Yk.Rip(this.hitEId)) || void 0 === pp ? void 0 : pp.mesh;
-         return (void 0 !== (null === ip || void 0 === ip ? void 0 : ip.name) && Np.v.some((pp => ip.name.includes(pp))) || this.isThinVehicle(this.hitEId)) && this.distanceTravelled < 3 ? (this.sendAltAction(Hp.Df), {
+         const UT = null === (TT = this.Rl.pY.bUT(this.hitEId)) || void 0 === TT ? void 0 : TT.mesh;
+         return (void 0 !== (null === UT || void 0 === UT ? void 0 : UT.name) && sT.x.some((TT => UT.name.includes(TT))) || this.isThinVehicle(this.hitEId)) && this.distanceTravelled < 3 ? (this.sendAltAction(qT.Jf), {
```

#### 624. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5033` → after: `L4561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4561) · [Before (L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5033)

```diff
-         if ("number" !== typeof(null === (ip = this.HP.Yk.Rip(pp)) || void 0 === ip ? void 0 : ip.FQ)) return !1;
+         if ("number" !== typeof(null === (UT = this.Rl.pY.bUT(TT)) || void 0 === UT ? void 0 : UT.zV)) return !1;
```

#### 625. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5035-L5036` → after: `L4563-L4564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4563-L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4563-L4564) · [Before (L5035-L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5035-L5036)

```diff
-           Op = "BloxdBlock" === (null === cp || void 0 === cp ? void 0 : cp.meshKind) ? (0, Ip.h)(cp) : null;
-         return "BloxdBlock" === (null === Op || void 0 === Op ? void 0 : Op.type) && Np.v.includes(Op.opts.blockName)
+           WT = "BloxdBlock" === (null === mT || void 0 === mT ? void 0 : mT.meshKind) ? (0, MT.g)(mT) : null;
+         return "BloxdBlock" === (null === WT || void 0 === WT ? void 0 : WT.type) && sT.x.includes(WT.opts.blockName)
```

#### 626. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5039` → after: `L4567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4567) · [Before (L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5039)

```diff
-         if ((0, Wp.d)(this.hitEId)) return this.sendAltAction(Hp.Ef), {
+         if ((0, pT.g)(this.hitEId)) return this.sendAltAction(qT.Lf), {
```

#### 627. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5048-L5051` → after: `L4576-L4579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4576-L4579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4576-L4579) · [Before (L5048-L5051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5048-L5051)

```diff
-         const ip = this.HP.Yk.fn(this.HP.NJ),
-           cp = this.HP.Yk.xip(this.HP.NJ);
-         if ((0, yp.h)(cp, null === (pp = this.qm) || void 0 === pp ? void 0 : pp.name)) {
-           if ((0, yp.d)(cp) > 0) return {
+         const UT = this.Rl.pY.rK(this.Rl.VV),
+           mT = this.Rl.pY.gUT(this.Rl.VV);
+         if ((0, BT.g)(mT, null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name)) {
+           if ((0, BT.e)(mT) > 0) return {
```

#### 628. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5055` → after: `L4583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4583) · [Before (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5055)

```diff
-           const pp = (0, Bp.d)(this.inven);
+           const TT = (0, QT.c)(this.inven);
```

#### 629. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5058-L5060` → after: `L4586-L4588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4586-L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4586-L4588) · [Before (L5058-L5060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5058-L5060)

```diff
-             const op = this.bloxd.client.inventoryPrediction.predict(this.bloxd.getClientPredictedOption(this.HP.NJ, "creative") ? null : Xp.d.remove(pp, 1, this.inven.getItemAtIdx(pp).name)),
-               Ip = null !== (Op = this.HP.Gpp) && void 0 !== Op ? Op : this.HP.camera.hK();
-             this.bloxd.useGliderFuel(this.HP.NJ, Ip, Lp.g.getFirecrackerBoostMultiplier(this.qm)), this.bloxd.startGliderFuelCooldown(this.HP.NJ, cp, Lp.g.getFirecrackerCooldownMultiplier(this.qm));
+             const zT = this.bloxd.client.inventoryPrediction.predict(this.bloxd.getClientPredictedOption(this.Rl.VV, "creative") ? null : aT.b.remove(TT, 1, this.inven.getItemAtIdx(TT).name)),
+               MT = null !== (WT = this.Rl.STT) && void 0 !== WT ? WT : this.Rl.camera.qD();
+             this.bloxd.useGliderFuel(this.Rl.VV, MT, HT.i.getFirecrackerBoostMultiplier(this.AY)), this.bloxd.startGliderFuelCooldown(this.Rl.VV, mT, HT.i.getFirecrackerCooldownMultiplier(this.AY));
```

#### 630. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5062-L5067` → after: `L4590-L4595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4590-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4590-L4595) · [Before (L5062-L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5062-L5067)

```diff
-               xp = this.bloxd.getLifeformEyePos(this.HP.NJ, !0);
-             xp[1] += 2, vp().ep(Sp, xp, Ip, 6), (0, tp.sendColyMessage)(Hp.Hj, {
-               hD: Sp,
-               aD: pp,
-               uS: Ip,
-               Ax: op
+               nT = this.bloxd.getLifeformEyePos(this.Rl.VV, !0);
+             nT[1] += 2, vT().pg(gT, nT, MT, 6), (0, fT.sendColyMessage)(qT.xj, {
+               ij: gT,
+               bj: TT,
+               Tg: MT,
+               Pg: zT
```

#### 631. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5069` → after: `L4597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4597) · [Before (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5069)

```diff
-             const Yp = 8 * vp().len(ip.tw);
+             const kT = 8 * vT().len(UT.Tc);
```

#### 632. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5073` → after: `L4601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4601) · [Before (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5073)

```diff
-             this.bloxd.client.meshCreator.newSingleBurstParticleSystem(oi), dp.b.play((0, ep.d)("bow"), 1).rate(.6 + .2 * Math.random())
+             this.bloxd.client.meshCreator.newSingleBurstParticleSystem(mU), iT.c.play((0, bT.d)("bow"), 1).rate(.6 + .2 * Math.random())
```

#### 633. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5085` → after: `L4613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4613) · [Before (L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5085)

```diff
-           cp = this.bloxd.playerCanChangePos(this.HP.NJ, ...this.dS);
+           mT = this.bloxd.playerCanChangePos(this.Rl.VV, ...this.AM);
```

#### 634. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5087-L5088` → after: `L4615-L4616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4615-L4616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4615-L4616) · [Before (L5087-L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5087-L5088)

```diff
-         if ("Board" === ip && cp && !Pp.singleLineBoardActions.has(null === (op = this.bloxd.blockDataOwner.getBlockData(...this.dS)) || void 0 === op ? void 0 : op.persisted.shared.text.split("\n")[0].toLowerCase())) return jp.m.GA("EditBoard", {
-           pos: this.dS
+         if ("Board" === UT && mT && !LT.singleLineBoardActions.has(null === (zT = this.bloxd.blockDataOwner.getBlockData(...this.AM)) || void 0 === zT ? void 0 : zT.persisted.shared.text.split("\n")[0].toLowerCase())) return OT.j.EZ("EditBoard", {
+           pos: this.AM
```

#### 635. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5094-L5095` → after: `L4622-L4623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4622-L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4622-L4623) · [Before (L5094-L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5094-L5095)

```diff
-         if ((0, Dp.d)(this.targetBlock) && cp && !Ap.i.includes(null === (pp = this.qm) || void 0 === pp ? void 0 : pp.name) && !this.HP.Yk.Jip(this.HP.NJ).crouching) return jp.m.GA("EditBoard", {
-           pos: this.dS
+         if ((0, jT.l)(this.targetBlock) && mT && !lT.j.includes(null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name) && !this.Rl.pY.wUT(this.Rl.VV).crouching) return OT.j.EZ("EditBoard", {
+           pos: this.AM
```

#### 636. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5102-L5104` → after: `L4630-L4632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4630-L4632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4630-L4632) · [Before (L5102-L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5102-L5104)

```diff
-           const pp = this.HP.Tu.canEditCode && cp;
-           return pp || this.HP.Yk.Jip(this.HP.NJ).crouching ? (jp.m.GA("EditCodeBlock", {
-             pos: this.dS,
+           const TT = this.Rl.kY.canEditCode && mT;
+           return TT || this.Rl.pY.wUT(this.Rl.VV).crouching ? (OT.j.EZ("EditCodeBlock", {
+             pos: this.AM,
```

#### 637. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5115-L5116` → after: `L4643-L4644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4643-L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4643-L4644) · [Before (L5115-L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5115-L5116)

```diff
-         if ("Custom Lobby Block" === ip && cp) return jp.m.GA("EditCustomLobbyBlock", {
-           pos: this.dS
+         if ("Custom Lobby Block" === UT && mT) return OT.j.EZ("EditCustomLobbyBlock", {
+           pos: this.AM
```

#### 638. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5122-L5123` → after: `L4650-L4651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4650-L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4650-L4651) · [Before (L5122-L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5122-L5123)

```diff
-         if ((0, yp.H)(ip, cp)) return jp.m.GA("OpenIronChest", {
-           pos: this.dS
+         if ((0, BT.E)(UT, mT)) return OT.j.EZ("OpenIronChest", {
+           pos: this.AM
```

#### 639. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5130-L5132` → after: `L4658-L4660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4658-L4660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4658-L4660) · [Before (L5130-L5132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5130-L5132)

```diff
-         if (Ip) return this.HP.Tu.canCraft ? (jp.m.GA("toggleMenu", `inventory|${Ip.name}`), "Enchanting Table" === Ip.name && jp.m.GA("enchantingTable", {
-           tx: this.targetBlock,
-           position: this.dS
+         if (MT) return this.Rl.kY.canCraft ? (OT.j.EZ("toggleMenu", `inventory|${MT.name}`), "Enchanting Table" === MT.name && OT.j.EZ("enchantingTable", {
+           Gg: this.targetBlock,
+           position: this.AM
```

#### 640. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5141` → after: `L4669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4669) · [Before (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5141)

```diff
-         if ((0, yp.n)(ip)) return this.sendAltAction(Hp.kf), {
+         if ((0, BT.k)(UT)) return this.sendAltAction(qT.qf), {
```

#### 641. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5146` → after: `L4674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4674) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5146)

```diff
-         if (fp.c.beds.includes(ip)) return this.sendAltAction(Hp.Ef), {
+         if (PT.e.beds.includes(UT)) return this.sendAltAction(qT.Lf), {
```

#### 642. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5151` → after: `L4679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4679) · [Before (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5151)

```diff
-         if (("Vending Machine" === ip || "_Vending Machine Top" === ip) && this.bloxd.getItemStat(this.HP.NJ, this.targetBlock, "altActionable")) return this.sendAltAction(Hp.Ef), {
+         if (("Vending Machine" === UT || "_Vending Machine Top" === UT) && this.bloxd.getItemStat(this.Rl.VV, this.targetBlock, "altActionable")) return this.sendAltAction(qT.Lf), {
```

#### 643. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5156` → after: `L4684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4684) · [Before (L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5156)

```diff
-         if ((0, bp.e)(ip) && this.bloxd.getItemStat(this.HP.NJ, this.targetBlock, "altActionable")) return this.sendAltAction(Hp.Ef), {
+         if ((0, VT.e)(UT) && this.bloxd.getItemStat(this.Rl.VV, this.targetBlock, "altActionable")) return this.sendAltAction(qT.Lf), {
```

#### 644. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5161` → after: `L4689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4689) · [Before (L5161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5161)

```diff
-         if ((0, Yp.j)((0, Yp.d)(this.targetBlock))) {
+         if ((0, kT.m)((0, kT.e)(this.targetBlock))) {
```

#### 645. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5164-L5165` → after: `L4692-L4693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4692-L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4692-L4693) · [Before (L5164-L5165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5164-L5165)

```diff
-           } = (0, Up.d)().swapDoorTypeOpenClosed(this.HP.NJ, ...this.dS, this.targetBlock);
-           return pp || console.error("swapDoorTypeOpenClosed did not succeed but should always succeed on client"), this.sendAltAction(Hp.qf), {
+           } = (0, ZT.d)().swapDoorTypeOpenClosed(this.Rl.VV, ...this.AM, this.targetBlock);
+           return TT || console.error("swapDoorTypeOpenClosed did not succeed but should always succeed on client"), this.sendAltAction(qT.wf), {
```

#### 646. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5174-L5175` → after: `L4702-L4703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4702-L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4702-L4703) · [Before (L5174-L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5174-L5175)

```diff
-           if (null !== pp && pp < Op.g.bookshelfBookCount && "Book" === (null === (Sp = this.qm) || void 0 === Sp ? void 0 : Sp.name)) {
-             this.HP.Yk.Nip(this.HP.NJ).setItemSlot(this.selectedSlot, "Air", null)
+           if (null !== TT && TT < WT.f.bookshelfBookCount && "Book" === (null === (gT = this.AY) || void 0 === gT ? void 0 : gT.name)) {
+             this.Rl.pY.aUT(this.Rl.VV).setItemSlot(this.selectedSlot, "Air", null)
```

#### 647. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5177` → after: `L4705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4705) · [Before (L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5177)

```diff
-           return this.sendAltAction(Hp.if), {
+           return this.sendAltAction(qT.pf), {
```

#### 648. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5184-L5186` → after: `L4712-L4714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4712-L4714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4712-L4714) · [Before (L5184-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5184-L5186)

```diff
-           const pp = null === (xp = this.bloxd.blockDataOwner.getBlockData(...this.dS)) || void 0 === xp || null === (Lp = xp.persisted) || void 0 === Lp ? void 0 : Lp.mail;
-           if (void 0 !== pp && pp < Op.g.mailboxBookCount && "Book" === (null === (Wp = this.qm) || void 0 === Wp ? void 0 : Wp.name)) {
-             this.HP.Yk.Nip(this.HP.NJ).setItemSlot(this.selectedSlot, "Air", null)
+           const TT = null === (nT = this.bloxd.blockDataOwner.getBlockData(...this.AM)) || void 0 === nT || null === (HT = nT.persisted) || void 0 === HT ? void 0 : HT.mail;
+           if (void 0 !== TT && TT < WT.f.mailboxBookCount && "Book" === (null === (pT = this.AY) || void 0 === pT ? void 0 : pT.name)) {
+             this.Rl.pY.aUT(this.Rl.VV).setItemSlot(this.selectedSlot, "Air", null)
```

#### 649. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5188` → after: `L4716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4716) · [Before (L5188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5188)

```diff
-           return this.sendAltAction(Hp.if), {
+           return this.sendAltAction(qT.pf), {
```

#### 650. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5197` → after: `L4725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4725) · [Before (L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5197)

```diff
-         return "Cranberries_stage2" === pp ? (this.bloxd.qE(...this.dS, (0, Yp.f)("Cranberries_stage1")), this.sendAltAction(Hp.wf), {
+         return "Cranberries_stage2" === TT ? (this.bloxd.EQ(...this.AM, (0, kT.j)("Cranberries_stage1")), this.sendAltAction(qT.Cf), {
```

#### 651. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5200` → after: `L4728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4728) · [Before (L5200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5200)

```diff
-         }) : "Cotton_stage3" === pp ? (this.bloxd.qE(...this.dS, (0, Yp.f)("Cotton_stage2")), this.sendAltAction(Hp.wf), {
+         }) : "Cotton_stage3" === TT ? (this.bloxd.EQ(...this.AM, (0, kT.j)("Cotton_stage2")), this.sendAltAction(qT.Cf), {
```

#### 652. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5203` → after: `L4731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4731) · [Before (L5203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5203)

```diff
-         }) : this.targetBlock === (0, Yp.f)("Chili Pepper Plant|FreshlyGrown") ? (this.bloxd.qE(...this.dS, (0, Yp.f)("Chili Pepper Plant_stage2")), this.sendAltAction(Hp.wf), {
+         }) : this.targetBlock === (0, kT.j)("Chili Pepper Plant|FreshlyGrown") ? (this.bloxd.EQ(...this.AM, (0, kT.j)("Chili Pepper Plant_stage2")), this.sendAltAction(qT.Cf), {
```

#### 653. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5206` → after: `L4734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4734) · [Before (L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5206)

```diff
-         }) : this.targetBlock === (0, Yp.f)("Chili Pepper Plant|Lava|FreshlyGrown") ? (this.bloxd.qE(...this.dS, (0, Yp.f)("Chili Pepper Plant_stage2|Lava")), this.sendAltAction(Hp.wf), {
+         }) : this.targetBlock === (0, kT.j)("Chili Pepper Plant|Lava|FreshlyGrown") ? (this.bloxd.EQ(...this.AM, (0, kT.j)("Chili Pepper Plant_stage2|Lava")), this.sendAltAction(qT.Cf), {
```

#### 654. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5209` → after: `L4737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4737) · [Before (L5209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5209)

```diff
-         }) : this.targetBlock === (0, Yp.f)("Corn Plant|FreshlyGrown") ? (this.bloxd.qE(...this.dS, (0, Yp.f)("Corn Plant_stage3")), this.sendAltAction(Hp.wf), {
+         }) : this.targetBlock === (0, kT.j)("Corn Plant|FreshlyGrown") ? (this.bloxd.EQ(...this.AM, (0, kT.j)("Corn Plant_stage3")), this.sendAltAction(qT.Cf), {
```

#### 655. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5216` → after: `L4744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4744) · [Before (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5216)

```diff
-         if (this.qm) return Sp.g.includes(this.qm.name) ? (this.sendConsumableAltAction(null), {
+         if (this.AY) return gT.k.includes(this.AY.name) ? (this.sendConsumableAltAction(null), {
```

#### 656. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5219` → after: `L4747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4747) · [Before (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5219)

```diff
-         }) : null !== (pp = this.qm) && void 0 !== pp && pp.name.includes("Crossbow Charged") ? (this.sendConsumableAltAction(Xp.d.replace(this.selectedSlot, this.qm.name, this.qm.name.split(" Charged")[0])), {
+         }) : null !== (TT = this.AY) && void 0 !== TT && TT.name.includes("Crossbow Charged") ? (this.sendConsumableAltAction(aT.b.replace(this.selectedSlot, this.AY.name, this.AY.name.split(" Charged")[0])), {
```

#### 657. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5225-L5226` → after: `L4753-L4754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4753-L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4753-L4754) · [Before (L5225-L5226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5225-L5226)

```diff
-         if (!this.qm) return;
-         const pp = (0, Np.b)(this.qm.name);
+         if (!this.AY) return;
+         const TT = (0, sT.e)(this.AY.name);
```

#### 658. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5229` → after: `L4757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4757) · [Before (L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5229)

```diff
-           return this.HP.Yk.xip(this.HP.NJ).physicsState.type !== pp.physicsState.type && (this.bloxd.useConsumableVehicle(this.qm.name), ip = Xp.d.remove(this.selectedSlot, 1, this.qm.name)), this.sendConsumableAltAction(ip), {
+           return this.Rl.pY.gUT(this.Rl.VV).physicsState.type !== TT.physicsState.type && (this.bloxd.useConsumableVehicle(this.AY.name), UT = aT.b.remove(this.selectedSlot, 1, this.AY.name)), this.sendConsumableAltAction(UT), {
```

#### 659. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5236` → after: `L4764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4764) · [Before (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5236)

```diff
-         if (this.targetBlock) return (0, Up.d)().getItemStat(this.HP.NJ, this.targetBlock, "altActionable") ? (this.sendAltAction(Hp.Ef), {
+         if (this.targetBlock) return (0, ZT.d)().getItemStat(this.Rl.VV, this.targetBlock, "altActionable") ? (this.sendAltAction(qT.Lf), {
```

#### 660. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5243` → after: `L4771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4771) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5243)

```diff
-         (0, tp.sendColyMessage)(Hp.of, {
+         (0, fT.sendColyMessage)(qT.uf, {
```

#### 661. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5245` → after: `L4773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4773) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5245)

```diff
-           Ax: ip
+           Pg: UT
```

#### 662. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5249` → after: `L4777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4777) · [Before (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5249)

```diff
-         (0, tp.sendColyMessage)(pp, this.altActionPayload()), pp === Hp.Ef && this.triggerClientsideGameCallback()
+         (0, fT.sendColyMessage)(TT, this.altActionPayload()), TT === qT.Lf && this.triggerClientsideGameCallback()
```

#### 663. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5254` → after: `L4782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4782) · [Before (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5254)

```diff
-           Sp = null !== (pp = null !== (ip = null !== (cp = null !== hp.n && void 0 !== hp.n ? hp.n : ap.b) && void 0 !== cp ? cp : Ip) && void 0 !== ip ? ip : np.currentUrl.c) && void 0 !== pp ? pp : "0";
+           gT = null !== (TT = null !== (UT = null !== (mT = null !== uT.n && void 0 !== uT.n ? uT.n : CT.b) && void 0 !== mT ? mT : MT) && void 0 !== UT ? UT : rT.currentUrl.c) && void 0 !== TT ? TT : "0";
```

#### 664. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5256-L5260` → after: `L4784-L4788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4784-L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4784-L4788) · [Before (L5256-L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5256-L5260)

```diff
-           dS: null !== (Op = this.dS) && void 0 !== Op ? Op : null,
-           eS: this.hitEId,
-           uS: null !== (op = this.HP.Gpp) && void 0 !== op ? op : this.HP.camera.hK(),
-           jS: Si(this.bloxd, this.qm),
-           kS: Sp
+           AM: null !== (WT = this.AM) && void 0 !== WT ? WT : null,
+           RM: this.hitEId,
+           Tg: null !== (zT = this.Rl.STT) && void 0 !== zT ? zT : this.Rl.camera.qD(),
+           Ug: zU(this.bloxd, this.AY),
+           mg: gT
```

#### 665. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5265` → after: `L4793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4793) · [Before (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5265)

```diff
-         this.bloxd.client.triggerGameCallback("onPlayerAltAction", this.HP.NJ, null === (pp = this.dS) || void 0 === pp ? void 0 : pp[0], null === (ip = this.dS) || void 0 === ip ? void 0 : ip[1], null === (cp = this.dS) || void 0 === cp ? void 0 : cp[2], this.targetBlock ? (0, Y … [truncated]
+         this.bloxd.client.triggerGameCallback("onPlayerAltAction", this.Rl.VV, null === (TT = this.AM) || void 0 === TT ? void 0 : TT[0], null === (UT = this.AM) || void 0 === UT ? void 0 : UT[1], null === (mT = this.AM) || void 0 === mT ? void 0 : mT[2], this.targetBlock ? (0, k … [truncated]
```

#### 666. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5269` → after: `L4797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4797) · [Before (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5269)

```diff
-     const xi = ["length", 0, 7, 6, 11, 3, 4, 1, 8, 82, 94, 14, "a", "b", 2, 60];
+     const MU = ["length", 0, 1, 169, 56, 4, "a", "b", 2, "e", 223, 131, 225, "d", !1, null, 87, "f", 5, 10, 102, 3, 34, 6, 78, 31, 188, 172, "Q", ".", "c", 25, !0, 18, 61];
```

#### 667. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5275-L5282` → after: `L4803-L4831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4803-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4803-L4831) · [Before (L5275-L5282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5275-L5282)

```diff
-     }((...pp) => {
-       Yi(pp[xi[0]] = xi[1], pp[xi[12]] = xi[1], Si = (ip, cp) => {
-         "mDHfoK" in Li && function(...pp) {
-           Yi(pp[xi[0]] = xi[1], pp[xi[12]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", pp[xi[13]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", pp[xi[14]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)] … [truncated]
-         }();
-         let Op = ip.getItemId(null === cp || void 0 === cp ? void 0 : cp.name);
-         if (Op <<= xi[5], (0, tp.isInitSendColyMessage)(tp.sendColyMessage)) {
-           function op(...pp) {
+     }
+     "Kr9JUeK" in gU && function(...TT) {
+       nU(TT[MU[0]] = MU[1], TT[MU[7]] = function(...UT) {
+         return nU(UT[MU[0]] = MU[2], UT[-MU[3]] = []), (UT[MU[1]] === MU[2] || UT[MU[1]] >= MU[5]) && TT[-MU[4]](UT[-MU[3]], [], UT[MU[1]], MU[1]), UT[-MU[3]]
+       }, TT[-MU[4]] = function(...UT) {
+         for (UT[MU[0]] = MU[5], UT[MU[6]] = UT[MU[21]]; UT[MU[6]] < UT[MU[8]]; UT[MU[6]]++) {
+           if (UT[MU[2]].length !== UT[MU[6]]) return;
+           for (UT[MU[7]] = MU[1]; UT[MU[7]] < UT[MU[8]]; UT[MU[7]]++) TT[MU[13]](UT[MU[2]], [UT[MU[6]], UT[MU[7]]]) && (nU(UT[MU[2]].push([UT[MU[6]], UT[MU[7]]]), TT[-MU[4]](UT[MU[1]], UT[MU[2]], UT[MU[8]], UT[MU[6]] + MU[2])), UT[MU[2]].length === UT[MU[8]] && UT[MU[1]].push(TT[ … [truncated]
+         }
+       }, TT[MU[9]] = function(...TT) {
+         for (nU(TT[MU[0]] = MU[2], TT[-MU[12]] = [], TT[MU[11]] = TT[MU[1]].length), TT[MU[10]] = MU[1]; TT[MU[10]] < TT[MU[11]]; TT[MU[10]]++)
+           for (TT[-MU[12]][TT[MU[10]]] = "", TT[MU[5]] = MU[1]; TT[MU[5]] < TT[MU[11]]; TT[MU[5]]++) TT[-MU[12]][TT[MU[10]]] += TT[MU[1]][TT[MU[10]]][MU[2]] === TT[MU[5]] ? MU[28] : MU[29];
+         return TT[-MU[12]]
+       }, TT[MU[13]] = function(...TT) {
+         for (nU(TT[MU[0]] = MU[8], TT[MU[6]] = TT[MU[1]].length), TT[MU[7]] = MU[1]; TT[MU[7]] < TT[MU[6]]; TT[MU[7]]++) {
+           if (TT[MU[1]][TT[MU[7]]][MU[1]] === TT[MU[2]][MU[1]] || TT[MU[1]][TT[MU[7]]][MU[2]] === TT[MU[2]][MU[2]]) return MU[14];
+ ... (13 more added lines; see GitHub link above)
```

#### 668. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5285-L5287` → after: `L4868-L4870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4868-L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4868-L4870) · [Before (L5285-L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5285-L5287)

```diff
-           "yAKPbn" in Li && op(), kp.f ? Op |= xi[6] : tp.butto ? Op |= 5 : pp[xi[12]]++ === xi[6] ? (pp[xi[12]] = xi[1], Op |= xi[14]) : Op |= xi[5]
-         } else Op |= xi[7];
-         return Op
+           "NXImpT" in gU && WT(), UT[MU[18]] = UT[MU[18]] | MU[2]
+         }
+         return UT[MU[18]]
```

#### 669. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5291` → after: `L4874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4874) · [Before (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5291)

```diff
-   38247: (pp, ip, cp) => {
+   38152: (TT, UT, mT) => {
```

#### 670. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5299` → after: `L4882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4882) · [Before (L5299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5299)

```diff
-   38239: (pp, ip, cp) => {
+   38145: (TT, UT, mT) => {
```

#### 671. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5303` → after: `L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4886) · [Before (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5303)

```diff
-     var Op = cp(343),
+     var WT = mT(375),
```

#### 672. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5305-L5315` → after: `L4888-L4898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4888-L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4888-L4898) · [Before (L5305-L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5305-L5315)

```diff
-       Ip = cp(38247),
-       Sp = cp(2849),
-       xp = cp(3774),
-       Lp = cp(37634),
-       Yp = cp(3837),
-       Dp = cp(195),
-       Ap = cp(37479),
-       Pp = cp(37313),
-       Wp = cp(37475),
-       yp = cp(38253),
-       Up = cp(38118);
+       MT = mT(38152),
+       gT = mT(2875),
+       nT = mT(3781),
+       HT = mT(37517),
+       kT = mT(3841),
+       jT = mT(208),
+       lT = mT(37364),
+       LT = mT(37185),
+       pT = mT(37359),
+       BT = mT(38161),
+       ZT = mT(38036);
```

#### 673. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5321` → after: `L4904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4904) · [Before (L5321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5321)

```diff
-         this.HP = void 0, this._playerEId = void 0, this.entityRayStart = [0, 0, 0], this.entityRayOrigin = new Pp.Zy, this.entityRayDirection = new Pp.Zy, this.entityRay = new Wp.f(this.entityRayOrigin, this.entityRayDirection), this.entityHitEId = null, this.HP = pp, this._play … [truncated]
+         this.Rl = void 0, this._playerEId = void 0, this.entityRayStart = [0, 0, 0], this.entityRayOrigin = new LT.JB, this.entityRayDirection = new LT.JB, this.entityRay = new pT.g(this.entityRayOrigin, this.entityRayDirection), this.entityHitEId = null, this.Rl = TT, this._play … [truncated]
```

#### 674. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5325-L5326` → after: `L4908-L4909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4908-L4909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4908-L4909) · [Before (L5325-L5326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5325-L5326)

```diff
-         const cp = this.doPickAction(null !== (ip = this.HP.Gpp) && void 0 !== ip ? ip : this.HP.camera.hK(), pp);
-         return this._attackWasBlocked(cp) && cp.localHitPosition && cp.qN ? {
+         const mT = this.doPickAction(null !== (UT = this.Rl.STT) && void 0 !== UT ? UT : this.Rl.camera.qD(), TT);
+         return this._attackWasBlocked(mT) && mT.localHitPosition && mT.sC ? {
```

#### 675. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5328` → after: `L4911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4911) · [Before (L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5328)

```diff
-           normal: cp.qN
+           normal: mT.sC
```

#### 676. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5334` → after: `L4917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4917) · [Before (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5334)

```diff
-           Ip = Op.uip(Op.getLifeformEyePos(this._playerEId, !1)),
+           MT = WT.qUT(WT.getLifeformEyePos(this._playerEId, !1)),
```

#### 677. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5338` → after: `L4921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4921) · [Before (L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5338)

```diff
-           const cp = this._tryDoPick(Lp, pp, ip, xp ? wp : null),
+           const mT = this._tryDoPick(HT, TT, UT, nT ? cT : null),
```

#### 678. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5341` → after: `L4924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4924) · [Before (L5341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5341)

```diff
-           cp.localHitPosition ? Sp = cp.localHitPosition : (op().normalize(pp, pp), Sp = op().create(), op().ep(Sp, Lp, pp, 1e3)), op().subtract(Op, Sp, Ip), op().normalize(Op, Op);
+           mT.localHitPosition ? gT = mT.localHitPosition : (zT().normalize(TT, TT), gT = zT().create(), zT().pg(gT, HT, TT, 1e3)), zT().subtract(WT, gT, MT), zT().normalize(WT, WT);
```

#### 679. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5343` → after: `L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4926) · [Before (L5343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5343)

```diff
-             ...this._tryDoPick(Ip, Op, ip, xp ? vp : null),
+             ...this._tryDoPick(MT, WT, UT, nT ? vT : null),
```

#### 680. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5347` → after: `L4930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4930) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5347)

```diff
-         return this._tryDoPick(Ip, pp, ip, xp ? vp : null)
+         return this._tryDoPick(MT, TT, UT, nT ? vT : null)
```

#### 681. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5351` → after: `L4934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4934) · [Before (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5351)

```diff
-           Op = cp.uip(cp.getLifeformEyePos(this._playerEId, !1)),
+           WT = mT.qUT(mT.getLifeformEyePos(this._playerEId, !1)),
```

#### 682. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5353-L5354` → after: `L4936-L4937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4936-L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4936-L4937) · [Before (L5353-L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5353-L5354)

```diff
-           Lp = null !== xp && void 0 !== xp ? xp : Op,
-           Yp = this._tryDoPick(Lp, pp, ip + (xp ? op().Yx(xp, Op) : 0));
+           HT = null !== nT && void 0 !== nT ? nT : WT,
+           kT = this._tryDoPick(HT, TT, UT + (nT ? zT().sg(nT, WT) : 0));
```

#### 683. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5356` → after: `L4939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4939) · [Before (L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5356)

```diff
-         const Dp = op().Yx(Yp.localHitPosition, Op);
+         const jT = zT().sg(kT.localHitPosition, WT);
```

#### 684. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5364-L5366` → after: `L4947-L4949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4947-L4949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4947-L4949) · [Before (L5364-L5366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5364-L5366)

```diff
-         if (this._playerEId !== this.HP.NJ || 0 === this.HP.camera.HZ) return null;
-         const cp = null !== (pp = null === (ip = this.HP.WU.xOp()) || void 0 === ip ? void 0 : ip.eye) && void 0 !== pp ? pp : this.HP.WU.camera.globalPosition.BOp();
-         return op().pp(cp[0], cp[1], cp[2])
+         if (this._playerEId !== this.Rl.VV || 0 === this.Rl.camera.oN) return null;
+         const mT = null !== (TT = null === (UT = this.Rl.GB.rmT()) || void 0 === UT ? void 0 : UT.eye) && void 0 !== TT ? TT : this.Rl.GB.camera.globalPosition.cWT();
+         return zT().tm(mT[0], mT[1], mT[2])
```

#### 685. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5377` → after: `L4960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4960) · [Before (L5377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5377)

```diff
-               ...this._tryDoPick(pp.localOrigin, ip, cp, !0 === Op.visualiseRaycasts ? vp : null), localRayOrigin: pp.localOrigin, globalRayOrigin: pp.globalOrigin
+               ...this._tryDoPick(TT.localOrigin, UT, mT, !0 === WT.visualiseRaycasts ? vT : null), localRayOrigin: TT.localOrigin, globalRayOrigin: TT.globalOrigin
```

#### 686. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5382-L5385` → after: `L4965-L4968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4965-L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4965-L4968) · [Before (L5382-L5385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5382-L5385)

```diff
-         if (this._playerEId === this.HP.NJ && this.HP.camera.wZ < .01) return this.getDefaultWeaponRay();
-         if (!this.HP.Yk.Xxp(this._playerEId)) return null;
-         const pp = this.HP.Yk.Rip(this._playerEId),
-           ip = null === pp || void 0 === pp ? void 0 : pp.FQ;
+         if (this._playerEId === this.Rl.VV && this.Rl.camera.hN < .01) return this.getDefaultWeaponRay();
+         if (!this.Rl.pY.knT(this._playerEId)) return null;
+         const TT = this.Rl.pY.bUT(this._playerEId),
+           UT = null === TT || void 0 === TT ? void 0 : TT.zV;
```

#### 687. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5387` → after: `L4970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4970) · [Before (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5387)

```diff
-         const cp = this.HP.WU.EQ;
+         const mT = this.Rl.GB.mV;
```

#### 688. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5393` → after: `L4976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4976) · [Before (L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5393)

```diff
-           xp = Pp.Zy.TransformNormal(new Pp.Zy(0, 0, 1), Ip);
+           nT = LT.JB.TransformNormal(new LT.JB(0, 0, 1), MT);
```

#### 689. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5398` → after: `L4981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4981) · [Before (L5398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5398)

```diff
-         return this.HP.jK(Lp, Yp), {
+         return this.Rl.jD(HT, kT), {
```

#### 690. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5409` → after: `L4992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L4992) · [Before (L5409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5409)

```diff
-             return null !== (ip = this.getHeadRay()) && void 0 !== ip ? ip : this.getDefaultWeaponRay();
+             return null !== (UT = this.getHeadRay()) && void 0 !== UT ? UT : this.getDefaultWeaponRay();
```

#### 691. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5418` → after: `L5001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5001) · [Before (L5418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5418)

```diff
-           localOrigin: pp.uip(ip),
+           localOrigin: TT.qUT(UT),
```

#### 692. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5420` → after: `L5003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5003) · [Before (L5420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5420)

```diff
-           direction: Lp.c.copyAimDirection(this.HP, [0, 0, 0]),
+           direction: HT.d.copyAimDirection(this.Rl, [0, 0, 0]),
```

#### 693. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5430` → after: `L5013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5013) · [Before (L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5430)

```diff
-           qN: Sp,
+           sC: gT,
```

#### 694. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5432-L5433` → after: `L5015-L5016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5015-L5016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5015-L5016) · [Before (L5432-L5433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5432-L5433)

```diff
-         } = this.doPickAction(pp, Dp.g.entityInteractReach);
-         return ip === Ip.b.HIT_ENTITY ? cp : null
+         } = this.doPickAction(TT, jT.f.entityInteractReach);
+         return UT === MT.b.HIT_ENTITY ? mT : null
```

#### 695. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5437-L5438` → after: `L5020-L5021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5020-L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5020-L5021) · [Before (L5437-L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5437-L5438)

```diff
-         const Ip = null !== (Op = null === (op = this.HP.Yk.Jip(this._playerEId)) || void 0 === op ? void 0 : op.ridingVehicleEId) && void 0 !== Op ? Op : null,
-           Sp = this.HP.uip(pp, null, this.entityRayStart);
+         const MT = null !== (WT = null === (zT = this.Rl.pY.wUT(this._playerEId)) || void 0 === zT ? void 0 : zT.ridingVehicleEId) && void 0 !== WT ? WT : null,
+           gT = this.Rl.qUT(TT, null, this.entityRayStart);
```

#### 696. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5459` → after: `L5042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5042) · [Before (L5459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5459)

```diff
-         const op = (0, yp.b)(this.HP.WU, this.entityRay),
+         const zT = (0, BT.b)(this.Rl.GB, this.entityRay),
```

#### 697. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5461` → after: `L5044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5044) · [Before (L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5461)

```diff
-           Sp = this.HP.WU.EQ.SW(this.entityRayOrigin, this.entityRayDirection, null !== Ip && void 0 !== Ip ? Ip : pp);
+           gT = this.Rl.GB.mV.VL(this.entityRayOrigin, this.entityRayDirection, null !== MT && void 0 !== MT ? MT : TT);
```

#### 698. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5463` → after: `L5046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5046) · [Before (L5463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5463)

```diff
-         const xp = null !== (ip = null === op || void 0 === op || null === (cp = op.pickedMesh) || void 0 === cp || null === (Op = cp.metadata) || void 0 === Op ? void 0 : Op.eId) && void 0 !== ip ? ip : null;
+         const nT = null !== (UT = null === zT || void 0 === zT || null === (mT = zT.pickedMesh) || void 0 === mT || null === (WT = mT.metadata) || void 0 === WT ? void 0 : WT.eId) && void 0 !== UT ? UT : null;
```

#### 699. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5482-L5483` → after: `L5065-L5066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5065-L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5065-L5066) · [Before (L5482-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5482-L5483)

```diff
-         const cp = null !== (pp = null === (ip = this.HP.Yk.Rip(this._playerEId)) || void 0 === ip ? void 0 : ip.FQ) && void 0 !== pp ? pp : null,
-           Op = this.HP.WU.EQ;
+         const mT = null !== (TT = null === (UT = this.Rl.pY.bUT(this._playerEId)) || void 0 === UT ? void 0 : UT.zV) && void 0 !== TT ? TT : null,
+           WT = this.Rl.GB.mV;
```

#### 700. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5487` → after: `L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5070) · [Before (L5487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5487)

```diff
-         null !== pp && this.HP.WU.EQ.setPickable(pp, !0)
+         null !== TT && this.Rl.GB.mV.setPickable(TT, !0)
```

#### 701. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5491` → after: `L5074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5074) · [Before (L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5491)

```diff
-           Sp = Op ? op().Yx(pp, Op.Iip) : cp,
+           gT = WT ? zT().sg(TT, WT.zUT) : mT,
```

#### 702. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5497` → after: `L5080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5080) · [Before (L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5497)

```diff
-           Dp = null !== Lp ? op().pp(xp.pickedPoint.x, xp.pickedPoint.y, xp.pickedPoint.z) : null,
+           jT = null !== HT ? zT().tm(nT.pickedPoint.x, nT.pickedPoint.y, nT.pickedPoint.z) : null,
```

#### 703. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5499` → after: `L5082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5082) · [Before (L5499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5499)

```diff
-         null !== Dp && Yp.HP.jK(Dp, Ap);
+         null !== jT && kT.Rl.jD(jT, lT);
```

#### 704. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5502` → after: `L5085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5085) · [Before (L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5502)

```diff
-           const pp = op().pp(xp.pickedPoint.x, xp.pickedPoint.y, xp.pickedPoint.z),
+           const TT = zT().tm(nT.pickedPoint.x, nT.pickedPoint.y, nT.pickedPoint.z),
```

#### 705. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5504` → after: `L5087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5087) · [Before (L5504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5504)

```diff
-           Yp.HP.jK(pp, cp);
+           kT.Rl.jD(TT, mT);
```

#### 706. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5511` → after: `L5094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5094) · [Before (L5511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5511)

```diff
-             qN: Op,
+             sC: WT,
```

#### 707. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5517` → after: `L5100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5100) · [Before (L5517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5517)

```diff
-           op().copy(ip, Op.Iip);
+           zT().copy(UT, WT.zUT);
```

#### 708. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5523` → after: `L5106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5106) · [Before (L5523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5523)

```diff
-             distanceTravelled: op().Yx(pp, Op.Iip),
+             distanceTravelled: zT().sg(TT, WT.zUT),
```

#### 709. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5526` → after: `L5109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5109) · [Before (L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5526)

```diff
-             qN: Sp,
+             sC: gT,
```

#### 710. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5535` → after: `L5118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5118) · [Before (L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5535)

```diff
-           qN: null,
+           sC: null,
```

#### 711. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5542-L5547` → after: `L5125-L5130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5125-L5130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5125-L5130) · [Before (L5542-L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5542-L5547)

```diff
-         const xp = new Pp.Zy(pp[0], pp[1], pp[2]),
-           Lp = new Pp.Zy(ip[0], ip[1], ip[2]),
-           Yp = new Wp.f(xp, Lp, cp),
-           Dp = (0, yp.b)(this.HP.WU, Yp),
-           Ap = null !== (Op = null === (op = Dp.pickedMesh) || void 0 === op || null === (Ip = op.metadata) || void 0 === Ip ? void 0 : Ip.eId) && void 0 !== Op ? Op : null,
-           Up = this.HP.WU.EQ.SW(xp, Lp, null !== (Sp = null !== Dp && void 0 !== Dp && Dp.hit ? Dp.distance : null) && void 0 !== Sp ? Sp : cp);
+         const nT = new LT.JB(TT[0], TT[1], TT[2]),
+           HT = new LT.JB(UT[0], UT[1], UT[2]),
+           kT = new pT.g(nT, HT, mT),
+           jT = (0, BT.b)(this.Rl.GB, kT),
+           lT = null !== (WT = null === (zT = jT.pickedMesh) || void 0 === zT || null === (MT = zT.metadata) || void 0 === MT ? void 0 : MT.eId) && void 0 !== WT ? WT : null,
+           ZT = this.Rl.GB.mV.VL(nT, HT, null !== (gT = null !== jT && void 0 !== jT && jT.hit ? jT.distance : null) && void 0 !== gT ? gT : mT);
```

#### 712. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5554-L5555` → after: `L5137-L5138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5137-L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5137-L5138) · [Before (L5554-L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5554-L5555)

```diff
-         const Op = this.HP.WP;
-         return this.HP.aT(pp, ip, cp, ((pp, ip, cp, op) => Op.vG(ip, cp, op)))
+         const WT = this.Rl.Nl;
+         return this.Rl.VK(TT, UT, mT, ((TT, UT, mT, zT) => WT.sG(UT, mT, zT)))
```

#### 713. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5562-L5563` → after: `L5145-L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5145-L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5145-L5146) · [Before (L5562-L5563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5562-L5563)

```diff
-         const op = new Pp.Zy(pp[0], pp[1], pp[2]),
-           Ip = new Pp.Zy(ip[0], ip[1], ip[2]);
+         const zT = new LT.JB(TT[0], TT[1], TT[2]),
+           MT = new LT.JB(UT[0], UT[1], UT[2]);
```

#### 714. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5567-L5568` → after: `L5150-L5151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5150-L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5150-L5151) · [Before (L5567-L5568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5567-L5568)

```diff
-           xp = (0, Up.h)(this.HP.WU, "gunRaycastTrace_" + tp++, {
-             positions: [...op.BOp(), ...Sp.BOp()],
+           nT = (0, ZT.j)(this.Rl.GB, "gunRaycastTrace_" + fT++, {
+             positions: [...zT.cWT(), ...gT.cWT()],
```

#### 715. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5571-L5572` → after: `L5154-L5155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5154-L5155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5154-L5155) · [Before (L5571-L5572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5571-L5572)

```diff
-         xp.color = Op, xp.Gy = !0, xp.Ow = !1, this.HP.WU.Iw(xp, !1, this.HP.BP), setTimeout((() => {
-           xp.uR() || xp.dispose()
+         nT.color = WT, nT.YB = !0, nT.QZ = !1, this.Rl.GB.FZ(nT, !1, this.Rl.ZL), setTimeout((() => {
+           nT.bJ() || nT.dispose()
```

#### 716. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5577` → after: `L5160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5160) · [Before (L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5577)

```diff
-     const Ep = [1, "b", 0, "h", 44, 198, 7, 112, 6, 205, 8, 255, "length", 80, "c", 65, 195, "e", "undefined", "a", void 0, 2, "d", 63, "fromCodePoint", 12, "push", null, 70, 106, 9, 91, "f", 8191, 88, 13, 14, 4, 61, 30, 179, 5, 134, 20, 1023, 3, 65536, 10, 55296, 56320, 24, 128, … [truncated]
+     const tT = [45, 0, 1, 8, 3, 42, 9, 7, 19, 189, "d", 255, "length", 175, "c", "a", 84, "undefined", void 0, "b", 65, 63, 6, "fromCodePoint", 12, "push", 146, 91, 8191, 88, 13, 14, 2, 107, 16, 93, 134, "h", 95, "g", 186, 33, 127, 50, 5, "f", 20, 159, 94, "i", 41, 128, !0, 100,  … [truncated]
```

#### 717. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5580-L5583` → after: `L5163-L5166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5163-L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5163-L5166) · [Before (L5580-L5583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5580-L5583)

```diff
-       return pp[Ep[12]] = Ep[0], typeof dp[pp[Ep[2]]] === Ep[18] ? dp[pp[Ep[2]]] = function(...pp) {
-         for (Jp(pp[Ep[12]] = Ep[0], pp[Ep[0]] = '=H2%&K[hNQTr<mb`W^q?nt5J{A}8scFw*i43a"9zgpoR$G:+_dl#.>~vV;SD0PjC!MXB1,uYLe(OZ6]|y@Uxk7EIf)/', pp[Ep[1]] = "" + (pp[Ep[2]] || ""), pp[-Ep[4]] = pp[Ep[1]].length, pp[-Ep[9]] = [], pp[Ep[7]] = Ep[2], pp[Ep[8]] = Ep[2], pp[Ep[6]] = -Ep … [truncated]
-           if (pp[Ep[5]] = pp[Ep[0]].indexOf(pp[Ep[1]][pp[Ep[3]]]), pp[Ep[5]] !== -Ep[0])
-             if (pp[Ep[6]] < Ep[2]) pp[Ep[6]] = pp[Ep[5]];
+       return TT[tT[12]] = tT[2], typeof iT[TT[tT[1]]] === tT[17] ? iT[TT[tT[1]]] = function(...TT) {
+         for (IT(TT[tT[12]] = tT[2], TT[-tT[5]] = '*JAqlCoBXsHfdzL"PVp[4j!1(F{.ZT|x3@>5Sab0nG6$Wwr]NmI;^UOQ=vuy#8hY+?&<D)`Me:2,%9~cg}7Rt/k_iKE', TT[-tT[0]] = "" + (TT[tT[1]] || ""), TT[tT[4]] = TT[-tT[0]].length, TT[tT[10]] = [], TT[-tT[8]] = tT[1], TT[tT[9]] = tT[1], TT[tT[7]] =  … [truncated]
+           if (TT[tT[6]] = TT[-tT[5]].indexOf(TT[-tT[0]][TT[tT[3]]]), TT[tT[6]] !== -tT[2])
+             if (TT[tT[7]] < tT[1]) TT[tT[7]] = TT[tT[6]];
```

#### 718. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5585` → after: `L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5168) · [Before (L5585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5585)

```diff
-               Jp(pp[Ep[6]] += pp[Ep[5]] * Ep[31], pp[Ep[7]] |= pp[Ep[6]] << pp[Ep[8]], pp[Ep[8]] += (pp[Ep[6]] & Ep[33]) > Ep[34] ? Ep[35] : Ep[36]);
+               IT(TT[tT[7]] += TT[tT[6]] * tT[27], TT[-tT[8]] |= TT[tT[7]] << TT[tT[9]], TT[tT[9]] += (TT[tT[7]] & tT[28]) > tT[29] ? tT[30] : tT[31]);
```

#### 719. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5587-L5591` → after: `L5170-L5174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5170-L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5170-L5174) · [Before (L5587-L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5587-L5591)

```diff
-                 Jp(pp[-Ep[9]].push(pp[Ep[7]] & Ep[11]), pp[Ep[7]] >>= Ep[10], pp[Ep[8]] -= Ep[10])
-               } while (pp[Ep[8]] > Ep[6]);
-               pp[Ep[6]] = -Ep[0]
-             } return pp[Ep[6]] > -Ep[0] && pp[-Ep[9]].push((pp[Ep[7]] | pp[Ep[6]] << pp[Ep[8]]) & Ep[11]), lp(pp[-Ep[9]])
-       }(ep[pp[Ep[2]]]) : dp[pp[Ep[2]]]
+                 IT(TT[tT[10]].push(TT[-tT[8]] & tT[11]), TT[-tT[8]] >>= tT[3], TT[tT[9]] -= tT[3])
+               } while (TT[tT[9]] > tT[7]);
+               TT[tT[7]] = -tT[2]
+             } return TT[tT[7]] > -tT[2] && TT[tT[10]].push((TT[-tT[8]] | TT[tT[7]] << TT[tT[9]]) & tT[11]), yT(TT[tT[10]])
+       }(bT[TT[tT[1]]]) : iT[TT[tT[1]]]
```

#### 720. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5595` → after: `L5178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5178) · [Before (L5595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5595)

```diff
-       return pp[Ep[12]] = Ep[0], typeof kp !== Ep[18] && kp ? (new kp).decode(new mp(pp[Ep[2]])) : typeof Rp !== Ep[18] && Rp ? Rp.from(pp[Ep[2]]).toString("utf-8") : Cp(pp[Ep[2]])
+       return TT[tT[12]] = tT[2], typeof eT !== tT[17] && eT ? (new eT).decode(new YT(TT[tT[1]])) : typeof JT !== tT[17] && JT ? JT.from(TT[tT[1]]).toString("utf-8") : wT(TT[tT[1]])
```

#### 721. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5603-L5604` → after: `L5186-L5187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5186-L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5186-L5187) · [Before (L5603-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5603-L5604)

```diff
-     Jp(dp = {}, ep = ["4Q.>tg%??~/!K_uqIs2", 'X_7h"PbNdQ8h+9ts!~5s"OQ>*tHOSAg}^Yx>h4uFImf:)&%Fvj`QtD@mjrv', "^q|&7Z=", "c<d8D:![cjjqYu.4~~d[*1jS20PbFK", "%RvQ2_5.oD)Ba&foVJRclV=", "}(Js_1m+~S<W*%", '.[:stlz?[S8j}d_gYG>T"y6hOrzsKW,",^j.Wa&u&!%2["i^8(fQ', "iRzs!v|HPbEHM&", "U4!QFy& … [truncated]
-       Jp(pp[Ep[12]] = Ep[2], pp[Ep[16]] = [function() {
+     IT(iT = {}, bT = ['ty+mFbDkXu4x|ak!YD{.PRzJ&[^p^"uSCs9IS8ru1zuyf{uZuh49GmLuo', "N;n|ER6(K4fqFPd[Xm,{vUp(GLW^8l^>:o0^$;AuW=M5EF)|2*", '2x_m.RlXv?Gy[75xzDB|##UBx#*ed"@V6$_mp~XuE?Fe"Lnxtx~ZZO*', "adJ;V)=n]d9g!bvTlD7X=>;G,??F1IK1&NZ2P^Xp@#xyuz[ZCd9B3][B7[u", "iXcmD>o|vVfz;`)(dmJ| … [truncated]
+       IT(TT[tT[12]] = tT[1], TT[tT[15]] = [function() {
```

#### 722. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5612` → after: `L5195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5195) · [Before (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5612)

```diff
-       }], pp[-Ep[13]] = Ep[20], pp[Ep[14]] = []);
+       }], TT[tT[13]] = tT[18], TT[tT[14]] = []);
```

#### 723. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5614` → after: `L5197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5197) · [Before (L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5614)

```diff
-         Jp(pp[-Ep[13]] = Object, pp[Ep[14]][Ep[26]]("".__proto__.constructor.name))
+         IT(TT[tT[13]] = Object, TT[tT[14]][tT[25]]("".__proto__.constructor.name))
```

#### 724. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5616-L5619` → after: `L5199-L5202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5199-L5202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5199-L5202) · [Before (L5616-L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5616-L5619)

```diff
-       pp: for (pp[Ep[15]] = Ep[2]; pp[Ep[15]] < pp[Ep[16]][Ep[12]]; pp[Ep[15]]++) try {
-         for (pp[-Ep[13]] = pp[Ep[16]][pp[Ep[15]]](), pp[Ep[17]] = Ep[2]; pp[Ep[17]] < pp[Ep[14]][Ep[12]]; pp[Ep[17]]++)
-           if (typeof pp[-Ep[13]][pp[Ep[14]][pp[Ep[17]]]] === Ep[18]) continue pp;
-         return pp[-Ep[13]]
+       TT: for (TT[tT[4]] = tT[1]; TT[tT[4]] < TT[tT[15]][tT[12]]; TT[tT[4]]++) try {
+         for (TT[tT[13]] = TT[tT[15]][TT[tT[4]]](), TT[-tT[16]] = tT[1]; TT[-tT[16]] < TT[tT[14]][tT[12]]; TT[-tT[16]]++)
+           if (typeof TT[tT[13]][TT[tT[14]][TT[-tT[16]]]] === tT[17]) continue TT;
+         return TT[tT[13]]
```

#### 725. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5621-L5623` → after: `L5204-L5206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5204-L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5204-L5206) · [Before (L5621-L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5621-L5623)

```diff
-       return pp[-Ep[13]] || this
-     }() || {}, kp = jp.TextDecoder, mp = jp.Uint8Array, Rp = jp.my, qp = jp.String || String, Mp = jp.Array || Array, Cp = function(...pp) {
-       return Jp(pp[Ep[12]] = Ep[2], pp[Ep[19]] = new Mp(Ep[51]), pp[Ep[1]] = qp[Ep[24]] || qp.fromCharCode, pp[Ep[21]] = []),
+       return TT[tT[13]] || this
+     }() || {}, eT = OT.TextDecoder, YT = OT.Uint8Array, JT = OT.HB, xT = OT.String || String, dT = OT.Array || Array, wT = function(...TT) {
+       return IT(TT[tT[12]] = tT[1], TT[tT[26]] = new dT(tT[51]), TT[tT[19]] = xT[tT[23]] || xT.fromCharCode, TT[tT[14]] = []),
```

#### 726. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5625-L5626` → after: `L5208-L5209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5208-L5209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5208-L5209) · [Before (L5625-L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5625-L5626)

```diff
-           for (Jp(ip[Ep[12]] = Ep[0], ip[Ep[19]] = Ep[20], ip[Ep[1]] = Ep[20], ip[Ep[14]] = ip[Ep[2]][Ep[12]], pp[Ep[21]][Ep[12]] = Ep[2]), ip[Ep[22]] = Ep[2]; ip[Ep[22]] < ip[Ep[14]];) Jp(ip[Ep[1]] = ip[Ep[2]][ip[Ep[22]]++], ip[Ep[1]] <= Ep[86] ? ip[Ep[19]] = ip[Ep[1]] : ip[Ep[1 … [truncated]
-           return pp[Ep[21]].join("")
+           for (IT(UT[tT[12]] = tT[2], UT[-tT[20]] = tT[18], UT[tT[19]] = tT[18], UT[tT[4]] = UT[tT[1]][tT[12]], TT[tT[14]][tT[12]] = tT[1]), UT[tT[10]] = tT[1]; UT[tT[10]] < UT[tT[4]];) IT(UT[tT[19]] = UT[tT[1]][UT[tT[10]]++], UT[tT[19]] <= tT[42] ? UT[-tT[20]] = UT[tT[19]] : UT[ … [truncated]
+           return TT[tT[14]].join("")
```

#### 727. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5628-L5647` → after: `L5211-L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5211-L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L5211-L5218) · [Before (L5628-L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L5628-L5647)

```diff
-     }()), Xp(103) in Qp && function(...pp) {
-       var ip;
-       Jp(pp[Ep[12]] = Ep[2], ip = function(...pp) {
-         Jp(pp[Ep[12]] = Ep[0], this.TA = pp[Ep[2]], this.length = Ep[2], this.map = {}, this.head = Ep[27], this.tail = Ep[27])
-       }, ip.prototype.get = function(...pp) {
-         var ip;
-         return Jp(pp[Ep[12]] = Ep[0], ip = this.map[pp[Ep[2]]]), ip ? (this.remove(ip), this.insert(ip.key, ip.val), ip.val) : -Ep[0]
-       }, ip.prototype.put = function(...pp) {
-         Jp(pp[Ep[12]] = Ep[21], this.map[pp[Ep[2]]] ? (this.remove(this.map[pp[Ep[2]]]), this.insert(pp[Ep[2]], pp[Ep[0]])) : this.length === this.TA ? (this.remove(this.head), this.insert(pp[Ep[2]], pp[Ep[0]])) : (this.insert(pp[Ep[2]], pp[Ep[0]]), this.length++))
-       }, ip.prototype.remove = function(...pp) {
-         Jp(pp[Ep[12]] = Ep[0], pp[Ep[19]] = pp[Ep[2]].prev, pp[Ep[1]] = pp[Ep[2]].next), pp[Ep[1]] && (pp[Ep[1]].prev = pp[Ep[19]]), pp[Ep[19]] && (pp[Ep[19]].next = pp[Ep[1]]), this.head === pp[Ep[2]] && (this.head = pp[Ep[1]]), this.tail === pp[Ep[2]] && (this.tail = pp[Ep[19]] … [truncated]
-       }, ip.prototype.insert = function(...pp) {
-         Jp(pp[Ep[12]] = Ep[21], pp[Ep[28]] = new List(pp[Ep[2]], pp[Ep[0]]), this.tail ? (this.tail.next = pp[Ep[28]], pp[Ep[28]].prev = this.tail, this.tail = pp[Ep[28]]) : (this.tail = pp[Ep[28]], this.head = pp[Ep[28]]), this.map[pp[Ep[2]]] = pp[Ep[28]])
-       }, console.log(ip))
-     }(), (() => {
-       if (Ep[81]) {
- ... (4 more removed lines; see GitHub link above)
+     }()), (() => {
+       if (tT[52]) {
+         function TT(TT) {
+           var UT, mT, WT, zT, MT, gT, nT;
+           for (IT(UT = "" + (TT || ""), mT = UT.length, WT = [], zT = tT[1], MT = tT[1], gT = -tT[2]), nT = tT[1]; nT < mT; nT++) {
+             var HT = 'BGo7xXrwspy`=V9]uaWU/^JCnt8Fq?fb4{R31kLY25imh>N$Q~OcDP6.(IAT0S+gHd@Ez&l#KMej_%;[,}!:<)|v"*Z'.indexOf(UT[nT]);
+             if (HT !== -tT[2])
+               if (gT < tT[1]) gT = HT;
```
