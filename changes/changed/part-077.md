# Changed — Bundle Modifications Report (Part 077 / 141)

- **Updated at**: `2026-11-25T05:21 JST`
- **Part**: `77 / 141` (**401** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 076](part-076.md) · [Part 078 →](part-078.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9 · continued)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (4691 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 334. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2764-L2768` → after: `L3236-L3240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3236-L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3236-L3240) · [Before (L2764-L2768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2764-L2768)

```diff
-       var mT = TT.Rl.kY.cameraTint;
-       mT && Array.isArray(mT) && mT.length >= 4 ? TT.HHT = !0 : TT.HHT && (TT.HHT = !1, TT.nHT = -1);
-       const WT = UT !== TT.nHT;
-       if (!TT.HHT && WT && 0 !== UT) {
-         const WT = TT.Rl.DL.L_(UT, 0);
+       var zB = BB.ur.wG.cameraTint;
+       zB && Array.isArray(zB) && zB.length >= 4 ? BB.WNB = !0 : BB.WNB && (BB.WNB = !1, BB.PNB = -1);
+       const QB = jB !== BB.PNB;
+       if (!BB.WNB && QB && 0 !== jB) {
+         const QB = BB.ur.Gs.w6(jB, 0);
```

#### 335. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2770` → after: `L3242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3242) · [Before (L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2770)

```diff
-           const UT = TT.Rl.DL.MZ(WT),
+           const jB = BB.ur.Gs.qm(QB),
```

#### 336. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2776` → after: `L3248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3248) · [Before (L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2776)

```diff
-       TT.nHT = UT, (WT || TT.HHT) && (mT ? (! function(TT, UT) {
+       BB.PNB = jB, (QB || BB.WNB) && (zB ? (! function(BB, jB) {
```

#### 337. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2780-L2781` → after: `L3252-L3253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3252-L3253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3252-L3253) · [Before (L2780-L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2780-L2781)

```diff
-         } = (0, VT.R)(TT);
-         UT[0] === mT[0] && UT[1] === mT[1] && UT[2] === mT[2] && UT[3] === WT || ((0, uT.$)(TT, {
+         } = (0, TB.eb)(BB);
+         jB[0] === zB[0] && jB[1] === zB[1] && jB[2] === zB[2] && jB[3] === QB || ((0, PB.N)(BB, {
```

#### 338. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2785` → after: `L3257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3257) · [Before (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2785)

```diff
-       }(TT.DnT, mT), TT.hnT.Qy(!0)) : TT.hnT.Qy(!1))
+       }(BB.fNB, zB), BB.qNB.mH(!0)) : BB.qNB.mH(!1))
```

#### 339. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2787` → after: `L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3259) · [Before (L2787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2787)

```diff
-     zU.prototype.t5 = function(TT) {
+     nj.prototype.h_ = function(BB) {
```

#### 340. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2790` → after: `L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3262) · [Before (L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2790)

```diff
-         var mT = this.NB?.I3;
+         var zB = this.rm?.M_;
```

#### 341. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2792-L2812` → after: `L3264-L3284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3264-L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3264-L3284) · [Before (L2792-L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2792-L2812)

```diff
-       } else TT.metadata[jU] ? (CT.g.lV(TT) || this.NWT.t5(TT, UT), CT.g.t5(this, TT, UT)) : UT && this.FZ(TT)
-     }, zU.prototype.yZ = function() {
-       return this.mHT && performance.now() >= this.WHT
-     }, zU.prototype.LHT = function(TT) {
-       this.WHT = Math.max(this.WHT, performance.now() + TT)
-     }, zU.prototype.PZ = function(TT, UT) {
-       this.zHT.np(TT, UT)
-     }, zU.prototype.IZ = function(TT) {
-       this.WzT.IZ(TT)
-     }, zU.prototype.pHT = function(TT) {}, zU.prototype.BHT = function(TT) {}, zU.prototype.TTT = function(TT) {
-       var UT = new zT.JB(TT[0], TT[1], TT[2]);
-       this.XZ.meshes.forEach((TT => {
-         lU(TT) || (TT.position.FWT(UT), TT.metadata && TT.metadata.GnT && TT.NUT(), TT.znT && TT.HV())
-       })), this.WzT.kzT(this, TT), this.NB?.particles?.W9(TT, this.Rl.ZL), CT.g.W9(this, TT), this.NWT?.W9(UT)
-     }, zU.prototype.ZHT = function(TT, UT) {
-       TT && TT.isEnabled() !== UT && TT.Qy(UT)
- ... (5 more removed lines; see GitHub link above)
+       } else BB.metadata[aj] ? (WB.d.EY(BB) || this.FQB.h_(BB, jB), WB.d.h_(this, BB, jB)) : jB && this.py(BB)
+     }, nj.prototype.Qy = function() {
+       return this.VNB && performance.now() >= this.hNB
+     }, nj.prototype.xNB = function(BB) {
+       this.hNB = Math.max(this.hNB, performance.now() + BB)
+     }, nj.prototype.sy = function(BB, jB) {
+       this.XNB.Ds(BB, jB)
+     }, nj.prototype.Iy = function(BB) {
+       this.TQB.Iy(BB)
+     }, nj.prototype.KNB = function(BB) {}, nj.prototype.cNB = function(BB) {}, nj.prototype.W4 = function(BB) {
+       var jB = new nB.KJ(BB[0], BB[1], BB[2]);
+       this.ny.meshes.forEach((BB => {
+         pj(BB) || (BB.position.MQB(jB), BB.metadata && BB.metadata.ENB && BB.DjB(), BB.XIB && BB.kY())
+       })), this.TQB.wQB(this, BB), this.rm?.particles?.I3(BB, this.ur.qr), WB.d.I3(this, BB), this.FQB?.I3(jB)
+     }, nj.prototype.bNB = function(BB, jB) {
+       BB && BB.isEnabled() !== jB && BB.mH(jB)
+ ... (5 more added lines; see GitHub link above)
```

#### 342. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2816` → after: `L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3288) · [Before (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2816)

```diff
-           nT = this.XZ.materials,
+           NB = this.ny.materials,
```

#### 343. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2819` → after: `L3291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3291) · [Before (L2819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2819)

```diff
-           TT.w6 ? TT.w6.forEach((TT => HT.push(TT))) : HT.push(TT)
+           BB.Y5 ? BB.Y5.forEach((BB => uB.push(BB))) : uB.push(BB)
```

#### 344. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2827` → after: `L3299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3299) · [Before (L2827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2827)

```diff
-         var jT = !!this.NB?.terrain;
+         var aB = !!this.rm?.terrain;
```

#### 345. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2829` → after: `L3301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3301) · [Before (L2829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2829)

```diff
-           if ((TT.bJ() && pT(TT, "disposed mesh in scene"), 0 !== TT.vWT().length) && (!jT || !TT.metadata?.[MT.i]))
+           if ((BB.aE() && sB(BB, "disposed mesh in scene"), 0 !== BB.dQB().length) && (!aB || !BB.metadata?.[dB.n]))
```

#### 346. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2832-L2833` → after: `L3304-L3305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3304-L3305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3304-L3305) · [Before (L2832-L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2832-L2833)

```diff
-             gT += TT.rY ? TT.rY.length : 1;
-             var UT = TT.material.w6 || [TT.material];
+             IB += BB.cL ? BB.cL.length : 1;
+             var jB = BB.material.Y5 || [BB.material];
```

#### 347. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2843` → after: `L3315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3315) · [Before (L2843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2843)

```diff
-             (TT.material === UT && (mT = !0), TT.material) && ((TT.material.w6 || [TT.material]).includes(UT) && (mT = !0))
+             (BB.material === jB && (zB = !0), BB.material) && ((BB.material.Y5 || [BB.material]).includes(jB) && (zB = !0))
```

#### 348. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2861` → after: `L3333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3333) · [Before (L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2861)

```diff
-     }, zU.prototype.cHT = function() {
+     }, nj.prototype.vNB = function() {
```

#### 349. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2863` → after: `L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3335) · [Before (L2863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2863)

```diff
-       for (var UT in this.XZ.meshes.forEach((UT => {
+       for (var jB in this.ny.meshes.forEach((jB => {
```

#### 350. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2871` → after: `L3343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3343) · [Before (L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2871)

```diff
-   37521: (TT, UT, mT) => {
+   37524: (BB, jB, zB) => {
```

#### 351. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2883-L2884` → after: `L3355-L3356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3355-L3356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3355-L3356) · [Before (L2883-L2884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2883-L2884)

```diff
-         pp: zT,
-         kmT: Math.atan2(-mT, MT)
+         gp: nB,
+         CjB: Math.atan2(-zB, dB)
```

#### 352. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2889` → after: `L3361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3361) · [Before (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2889)

```diff
-       c: () => zT
+       d: () => nB
```

#### 353. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2892` → after: `L3364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3364) · [Before (L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2892)

```diff
-   38531: (TT, UT, mT) => {
+   38493: (BB, jB, zB) => {
```

#### 354. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2895` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3367) · [Before (L2895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2895)

```diff
-       e: () => eT
+       f: () => MB
```

#### 355. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2897` → after: `L3369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3369) · [Before (L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2897)

```diff
-     var WT = mT(4170),
+     var QB = zB(4169),
```

#### 356. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2899-L2902` → after: `L3371-L3374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3371-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3371-L3374) · [Before (L2899-L2902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2899-L2902)

```diff
-       MT = mT(2985),
-       gT = mT(2959),
-       nT = mT(38533),
-       HT = mT(38539),
+       dB = zB(2956),
+       IB = zB(2938),
+       NB = zB(38498),
+       uB = zB(38505),
```

#### 357. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2908` → after: `L3380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3380) · [Before (L2908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2908)

```diff
-         this.fp = [], this.dHT = new MT.i, this.aHT = {
+         this.fp = [], this.NuB = new dB.f, this.auB = {
```

#### 358. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2911` → after: `L3383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3383) · [Before (L2911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2911)

```diff
-         }, this.yHT = {
+         }, this.puB = {
```

#### 359. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2914` → after: `L3386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3386) · [Before (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2914)

```diff
-         }, this.IHT = {
+         }, this.suB = {
```

#### 360. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2917` → after: `L3389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3389) · [Before (L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2917)

```diff
-         }, this.QHT = !1, this.sHT = null, this.FHT = [], this.PHT = [], this.XB = new Map, this.VHT = [NaN, NaN, NaN], this.uHT = !1
+         }, this.JuB = !1, this.muB = null, this.yuB = [], this.kuB = [], this.Bm = new Map, this.GuB = [NaN, NaN, NaN], this.LuB = !1
```

#### 361. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2919` → after: `L3391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3391) · [Before (L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2919)

```diff
-       CHT(TT, UT, mT) {
+       guB(BB, jB, zB) {
```

#### 362. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2922` → after: `L3394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3394) · [Before (L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2922)

```diff
-         this.sHT = zT, this.FHT = [];
+         this.muB = nB, this.yuB = [];
```

#### 363. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2925-L2926` → after: `L3397-L3398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3397-L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3397-L3398) · [Before (L2925-L2926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2925-L2926)

```diff
-             for (var jT = -MT; jT <= MT; jT++) zT(nT, HT, jT) && this.FHT.push([nT, HT, jT]);
-         for (var lT of (vT(this.dHT, WT, mT(WT[0], WT[1])), this.fp)) lT.iWT = 0
+             for (var aB = -dB; aB <= dB; aB++) nB(NB, uB, aB) && this.yuB.push([NB, uB, aB]);
+         for (var pB of (kB(this.NuB, QB, zB(QB[0], QB[1])), this.fp)) pB.uQB = 0
```

#### 364. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2928` → after: `L3400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3400) · [Before (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2928)

```diff
-       TnT(TT, UT) {
+       FIB(BB, jB) {
```

#### 365. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2931` → after: `L3403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3403) · [Before (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2931)

```diff
-           var [zT, MT, gT] = UT.zWT(Math.floor(WT[0]), Math.floor(WT[1]), Math.floor(WT[2]));
+           var [nB, dB, IB] = jB.xzB(Math.floor(QB[0]), Math.floor(QB[1]), Math.floor(QB[2]));
```

#### 366. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2936` → after: `L3408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3408) · [Before (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2936)

```diff
-             iWT: 0
+             uQB: 0
```

#### 367. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2943` → after: `L3415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3415) · [Before (L2943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2943)

```diff
-             kT && (HT.iWT = kT.iWT)
+             UB && (uB.uQB = UB.uQB)
```

#### 368. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2945` → after: `L3417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3417) · [Before (L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2945)

```diff
-           for (var jT of nT) !pT(mT, jT.i, jT.j, jT.k) && this.PHT.length < 16 && this.PHT.push(jT);
+           for (var aB of NB) !sB(zB, aB.i, aB.j, aB.k) && this.kuB.length < 16 && this.kuB.push(aB);
```

#### 369. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2950` → after: `L3422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3422) · [Before (L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2950)

```diff
-         return this.fp.length > 0 || this.PHT.length > 0
+         return this.fp.length > 0 || this.kuB.length > 0
```

#### 370. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2952-L2953` → after: `L3424-L3425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3424-L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3424-L3425) · [Before (L2952-L2953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2952-L2953)

```diff
-       KHT(TT, UT, mT) {
-         this.fp.length > 0 && this.XB.set(TT + "|" + UT + "|" + mT, performance.now() + 5e3)
+       SuB(BB, jB, zB) {
+         this.fp.length > 0 && this.Bm.set(BB + "|" + jB + "|" + zB, performance.now() + 5e3)
```

#### 371. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2955-L2956` → after: `L3427-L3428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3427-L3428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3427-L3428) · [Before (L2955-L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2955-L2956)

```diff
-       bWT(TT, UT, mT) {
-         if (0 === this.XB.size) return !1;
+       UQB(BB, jB, zB) {
+         if (0 === this.Bm.size) return !1;
```

#### 372. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2958-L2959` → after: `L3430-L3431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3430-L3431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3430-L3431) · [Before (L2958-L2959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2958-L2959)

```diff
-           zT = this.XB.get(WT);
-         return void 0 !== zT && (performance.now() < zT || (this.XB.delete(WT), !1))
+           nB = this.Bm.get(QB);
+         return void 0 !== nB && (performance.now() < nB || (this.Bm.delete(QB), !1))
```

#### 373. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2961-L2964` → after: `L3433-L3436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3433-L3436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3433-L3436) · [Before (L2961-L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2961-L2964)

```diff
-       xHT(TT) {
-         if (this.QHT) {
-           for (var UT of this.fp) BT(this.FHT, UT, TT);
-           this.QHT = !1
+       IuB(BB) {
+         if (this.JuB) {
+           for (var jB of this.fp) JB(this.yuB, jB, BB);
+           this.JuB = !1
```

#### 374. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2966-L2967` → after: `L3438-L3439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3438-L3439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3438-L3439) · [Before (L2966-L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2966-L2967)

```diff
-         for (var mT of this.PHT) BT(this.FHT, mT, TT);
-         this.PHT.length = 0
+         for (var zB of this.kuB) JB(this.yuB, zB, BB);
+         this.kuB.length = 0
```

#### 375. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2969-L2973` → after: `L3441-L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3441-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3441-L3445) · [Before (L2969-L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2969-L2973)

```diff
-       XHT(TT, UT, mT, WT) {
-         var zT = this.VHT;
-         UT[0] === zT[0] && UT[1] === zT[1] && UT[2] === zT[2] || (zT[0] = UT[0], zT[1] = UT[1], zT[2] = UT[2], this.XB.clear()), !mT && this.fp.length > 0 && !this.uHT && (console.warn("noa: second loading centres set without a chunkRequestArea, so they load chunks however far aw … [truncated]
-         for (var MT = mT || [1 / 0, 1 / 0], gT = this.yHT, nT = this.IHT, HT = 0; HT < 3; HT++) nT.min[HT] = gT.min[HT], nT.max[HT] = gT.max[HT];
-         for (ZT(gT, TT, MT, lT, WT), ZT(this.aHT, TT, MT, jT, WT), HT = 0; HT < 3; HT++) gT.min[HT] === nT.min[HT] && gT.max[HT] === nT.max[HT] || (this.QHT = !0)
+       ruB(BB, jB, zB, QB) {
+         var nB = this.GuB;
+         jB[0] === nB[0] && jB[1] === nB[1] && jB[2] === nB[2] || (nB[0] = jB[0], nB[1] = jB[1], nB[2] = jB[2], this.Bm.clear()), !zB && this.fp.length > 0 && !this.LuB && (console.warn("noa: second loading centres set without a chunkRequestArea, so they load chunks however far aw … [truncated]
+         for (var dB = zB || [1 / 0, 1 / 0], IB = this.puB, NB = this.suB, uB = 0; uB < 3; uB++) NB.min[uB] = IB.min[uB], NB.max[uB] = IB.max[uB];
+         for (mB(IB, BB, dB, pB, QB), mB(this.auB, BB, dB, aB, QB), uB = 0; uB < 3; uB++) IB.min[uB] === NB.min[uB] && IB.max[uB] === NB.max[uB] || (this.JuB = !0)
```

#### 376. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2976` → after: `L3448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3448) · [Before (L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2976)

```diff
-         if (!cT(this.yHT, TT, UT, mT)) return !1;
+         if (!yB(this.puB, BB, jB, zB)) return !1;
```

#### 377. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2978` → after: `L3450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3450) · [Before (L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2978)

```diff
-           if (this.sHT(TT - WT[zT].i, UT - WT[zT].j, mT - WT[zT].k)) return !0;
+           if (this.muB(BB - QB[nB].i, jB - QB[nB].j, zB - QB[nB].k)) return !0;
```

#### 378. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2981` → after: `L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3453) · [Before (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2981)

```diff
-       SHT(TT, UT, mT, WT, zT) {
+       MuB(BB, jB, zB, QB, nB) {
```

#### 379. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L2983` → after: `L3455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3455) · [Before (L2983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L2983)

```diff
-         TT.Uy(((TT, gT, nT) => {
+         BB.nH(((BB, IB, NB) => {
```

#### 380. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3017-L3022` → after: `L3489-L3494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3489-L3494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3489-L3494) · [Before (L3017-L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3017-L3022)

```diff
-       cB: 32,
-       mY: [2, 2],
-       ZI: [3, 3],
-       HUT: !1,
-       ZmT: !1,
-       qI: null
+       ZJ: 32,
+       lG: [2, 2],
+       uD: [3, 3],
+       bBB: !1,
+       jzB: !1,
+       rD: null
```

#### 381. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3026-L3028` → after: `L3498-L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3498-L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3498-L3500) · [Before (L3026-L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3026-L3028)

```diff
-         super(), UT = Object.assign({}, fT, UT), this.Rl = TT, this.kUT = !1, this.bZ = !1, this.Ap = gT.d, this.ZmT = !!UT.ZmT, this.qI = UT.qI, this.HUT = !!UT.HUT, this.eUT = 50, this.YUT = 50, this.NHT = 3, this.EHT = 2, this.JUT = this.EHT / this.NHT, this.xUT = 3, this.iTT  … [truncated]
-         var mT = this.iTT;
-         this.zWT = CT, this.nkT = rT, this.HkT = KT, this.kkT = ST, 0 === (mT & mT - 1) && (this.jkT = 0 | Math.log2(mT), this.lkT = mT - 1 | 0, this.HkT = GT, this.kkT = NT), this.bmT = new Set, this.OmT = new Set, this.emT = [], this.YmT = new Set, this.JmT = new Set, this.xmT  … [truncated]
+         super(), jB = Object.assign({}, GB, jB), this.ur = BB, this.vBB = !1, this.lm = !1, this.LJ = IB.b, this.jzB = !!jB.jzB, this.rD = jB.rD, this.bBB = !!jB.bBB, this.UjB = 50, this.ajB = 50, this.iuB = 3, this.quB = 2, this.pjB = this.quB / this.iuB, this.rjB = 3, this.aBB  … [truncated]
+         var zB = this.aBB;
+         this.xzB = WB, this.PuB = eB, this.WuB = lB, this.euB = wB, 0 === (zB & zB - 1) && (this.luB = 0 | Math.log2(zB), this.wuB = zB - 1 | 0, this.WuB = xB, this.euB = KB), this.NzB = new Set, this.uzB = new Set, this.UzB = [], this.azB = new Set, this.rzB = new Set, this.szB  … [truncated]
```

#### 382. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3031-L3033` → after: `L3503-L3505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3503-L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3503-L3505) · [Before (L3031-L3033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3031-L3033)

```diff
-     qT.prototype.BkT = function(TT, UT, mT) {
-       return this.lZ.LZ(this.HkT(TT), this.HkT(UT), this.HkT(mT))
-     }, qT.prototype.QG = function() {
+     LB.prototype.CuB = function(BB, jB, zB) {
+       return this.Fm.Ym(this.WuB(BB), this.WuB(jB), this.WuB(zB))
+     }, LB.prototype.cW = function() {
```

#### 383. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3037-L3039` → after: `L3509-L3511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3509-L3511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3509-L3511) · [Before (L3037-L3039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3037-L3039)

```diff
-       var WT = this.BkT(TT, UT, mT);
-       return WT ? WT.iL.get(this.kkT(TT), this.kkT(UT), this.kkT(mT)) : 0
-     }, qT.prototype.sG = function() {
+       var QB = this.CuB(BB, jB, zB);
+       return QB ? QB.Vr.get(this.euB(BB), this.euB(jB), this.euB(zB)) : 0
+     }, LB.prototype.vW = function() {
```

#### 384. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3043-L3044` → after: `L3515-L3516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3515-L3516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3515-L3516) · [Before (L3043-L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3043-L3044)

```diff
-       return !!this.vL(TT, UT, mT)
-     }, qT.prototype.vL = function() {
+       return !!this.Dr(BB, jB, zB)
+     }, LB.prototype.Dr = function() {
```

#### 385. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3048` → after: `L3520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3520) · [Before (L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3048)

```diff
-       var WT = this.BkT(TT, UT, mT);
+       var QB = this.CuB(BB, jB, zB);
```

#### 386. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3050-L3052` → after: `L3522-L3524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3522-L3524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3522-L3524) · [Before (L3050-L3052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3050-L3052)

```diff
-       const zT = WT.get(this.kkT(TT), this.kkT(UT), this.kkT(mT));
-       return eT(TT, UT, mT, zT, this.Rl.DL.oL(zT), this.IK, this.Qz, this.sK)
-     }, qT.prototype.n_ = function() {
+       const nB = QB.get(this.euB(BB), this.euB(jB), this.euB(zB));
+       return MB(BB, jB, zB, nB, this.ur.Gs.Ls(nB), this.hA, this.Wn, this.jT)
+     }, LB.prototype.i6 = function() {
```

#### 387. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3056-L3058` → after: `L3528-L3530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3528-L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3528-L3530) · [Before (L3056-L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3056-L3058)

```diff
-       var WT = this.QG(TT, UT, mT);
-       return this.Rl.DL.n_(WT)
-     }, qT.prototype.k_ = function() {
+       var QB = this.cW(BB, jB, zB);
+       return this.ur.Gs.i6(QB)
+     }, LB.prototype.f6 = function() {
```

#### 388. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3062-L3064` → after: `L3534-L3536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3534-L3536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3534-L3536) · [Before (L3062-L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3062-L3064)

```diff
-       var WT = this.QG(TT, UT, mT);
-       return this.Rl.DL.k_(WT)
-     }, qT.prototype.ZkT = function() {
+       var QB = this.cW(BB, jB, zB);
+       return this.ur.Gs.f6(QB)
+     }, LB.prototype.cuB = function() {
```

#### 389. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3068-L3070` → after: `L3540-L3542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3540-L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3540-L3542) · [Before (L3068-L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3068-L3070)

```diff
-       var WT = this.QG(TT, UT, mT);
-       return this.Rl.DL.l_(WT)
-     }, qT.prototype.qS = function() {
+       var QB = this.cW(BB, jB, zB);
+       return this.ur.Gs.T6(QB)
+     }, LB.prototype.lT = function() {
```

#### 390. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3075-L3077` → after: `L3547-L3549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3547-L3549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3547-L3549) · [Before (L3075-L3077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3075-L3077)

```diff
-       var zT = this.BkT(UT, mT, WT);
-       if (zT) return zT.set(this.kkT(UT), this.kkT(mT), this.kkT(WT), TT)
-     }, qT.prototype.PJ = function(TT) {
+       var nB = this.CuB(jB, zB, QB);
+       if (nB) return nB.set(this.euB(jB), this.euB(zB), this.euB(QB), BB)
+     }, LB.prototype.TE = function(BB) {
```

#### 391. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3079-L3080` → after: `L3551-L3552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3551-L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3551-L3552) · [Before (L3079-L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3079-L3080)

```diff
-       var mT = UT ? UT.bS : (TT, UT, mT, WT) => {
-           this.qS(WT, TT, UT, mT)
+       var zB = jB ? jB.wT : (BB, jB, zB, QB) => {
+           this.lT(QB, BB, jB, zB)
```

#### 392. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3083-L3086` → after: `L3555-L3558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3555-L3558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3555-L3558) · [Before (L3083-L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3083-L3086)

```diff
-       this.bTT && (0, HT.fb)(TT, HT.ab) >= HT.ab && (WT = this.bTT.PJ(this, TT, UT, mT)), WT && (0, HT.lb)(TT, WT, mT)
-     }, qT.prototype.hG = function(TT, UT, mT) {
-       return !!this.BkT(TT, UT, mT)
-     }, qT.prototype.fkT = function(TT) {
+       this.pBB && (0, uB.fb)(BB, uB.Z) >= uB.Z && (QB = this.pBB.TE(this, BB, jB, zB)), QB && (0, uB.lb)(BB, QB, zB)
+     }, LB.prototype.Bl = function(BB, jB, zB) {
+       return !!this.CuB(BB, jB, zB)
+     }, LB.prototype.RuB = function(BB) {
```

#### 393. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3090` → after: `L3562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3562) · [Before (L3090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3090)

```diff
-             if (this.sG(WT, zT, MT)) return !1;
+             if (this.vW(QB, nB, dB)) return !1;
```

#### 394. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3092` → after: `L3564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3564) · [Before (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3092)

```diff
-     }, qT.prototype.mJ = function(TT, UT) {
+     }, LB.prototype.bS = function(BB, jB) {
```

#### 395. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3095-L3098` → after: `L3567-L3570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3567-L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3567-L3570) · [Before (L3095-L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3095-L3098)

```diff
-         if (TT.CUT.remove(nT, HT, kT), jT !== TT.Rl.cTT) return PT(TT, mT);
-         if (!TT.KZ.includes(nT, HT, kT)) return PT(TT, mT);
-         if (TT.fZ.includes(nT, HT, kT)) return PT(TT, mT);
-         var lT = TT.SB;
+         if (BB.ijB.remove(NB, uB, UB), aB !== BB.ur.IBB) return AB(BB, zB);
+         if (!BB.Gy.includes(NB, uB, UB)) return AB(BB, zB);
+         if (BB.Tm.includes(NB, uB, UB)) return AB(BB, zB);
+         var pB = BB.am;
```

#### 396. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3100` → after: `L3572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3572) · [Before (L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3100)

```diff
-         var LT = TT.lZ.LZ(nT, HT, kT);
+         var rB = BB.Fm.Ym(NB, uB, UB);
```

#### 397. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3102` → after: `L3574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3574) · [Before (L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3102)

```diff
-           var pT = LT.iL;
+           var sB = rB.Vr;
```

#### 398. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3104` → after: `L3576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3576) · [Before (L3104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3104)

```diff
-             LT.rB(mT, zT, MT)
+             rB.Um(zB, nB, dB)
```

#### 399. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3106` → after: `L3578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3578) · [Before (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3106)

```diff
-             pT !== mT && lT.release(LT.iL === mT ? pT : mT)
+             sB !== zB && pB.release(rB.Vr === zB ? sB : zB)
```

#### 400. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3109` → after: `L3581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3581) · [Before (L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3109)

```diff
-           var BT = TT.iTT;
+           var JB = BB.aBB;
```

#### 401. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3111` → after: `L3583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3583) · [Before (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3111)

```diff
-             LT = new gT.d(TT.Rl, UT, nT, HT, kT, BT, mT, WT, zT, MT)
+             rB = new IB.b(BB.ur, jB, NB, uB, UB, JB, zB, QB, nB, dB)
```

#### 402. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3115` → after: `L3587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3587) · [Before (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3115)

```diff
-           TT.lZ.Xw(nT, HT, kT, LT), lT.aJ(nT, HT, kT, mT), TT.Rl.GB.pHT(LT), TT.emit("chunkAdded", LT)
+           BB.Fm.Aq(NB, uB, UB, rB), pB.qE(NB, uB, UB, zB), BB.ur.pm.KNB(rB), BB.emit("chunkAdded", rB)
```

#### 403. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3118-L3120` → after: `L3590-L3592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3590-L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3590-L3592) · [Before (L3118-L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3118-L3120)

```diff
-             MT = TT.LkT.get(zT);
-           (void 0 === MT || mT > MT) && TT.LkT.set(zT, mT)
-         })(TT, nT, HT, kT), LT.zB && function(TT, UT) {
+             dB = BB.xuB.get(nB);
+           (void 0 === dB || zB > dB) && BB.xuB.set(nB, zB)
+         })(BB, NB, uB, UB), rB.iJ && function(BB, jB) {
```

#### 404. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3122-L3125` → after: `L3594-L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3594-L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3594-L3597) · [Before (L3122-L3125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3122-L3125)

```diff
-             var MT = TT.lZ.LZ(UT.i + mT, UT.j + WT, UT.k + zT);
-             if (MT && !MT.zB) {
-               var gT = mT + WT + zT < 0 ? UT : MT;
-               gT.kZ = !0, gT.BZ = !0
+             var dB = BB.Fm.Ym(jB.i + zB, jB.j + QB, jB.k + nB);
+             if (dB && !dB.iJ) {
+               var IB = zB + QB + nB < 0 ? jB : dB;
+               IB.Hm = !0, IB.hm = !0
```

#### 405. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3129-L3132` → after: `L3601-L3604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3601-L3604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3601-L3604) · [Before (L3129-L3132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3129-L3132)

```diff
-         FT(TT, LT), DT(TT, nT, HT, kT, LT), TT.MkT.size > 0 && TT.MkT.delete(nT + "|" + HT + "|" + kT) && LT.yJ(LT.zB);
-         return TU("pB"), !0
-       }(this, TT, UT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : gT.g, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null)
-     }, qT.prototype.uZ = function(TT, UT, mT) {
+         ZB(BB, rB), bB(BB, NB, uB, UB, rB), BB.AuB.size > 0 && BB.AuB.delete(NB + "|" + uB + "|" + UB) && rB.XE(rB.iJ);
+         return Bj("VJ"), !0
+       }(this, BB, jB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : IB.d, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null)
+     }, LB.prototype.my = function(BB, jB, zB) {
```

#### 406. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3134-L3137` → after: `L3606-L3609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3606-L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3606-L3609) · [Before (L3134-L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3134-L3137)

```diff
-       if (gT !== this.Rl.cTT) return !1;
-       var nT = this.lZ.LZ(WT, zT, MT);
-       return !!nT && (this.Rl.JY.VZ(nT, UT, mT), !0)
-     }, qT.prototype.vI = function() {
+       if (IB !== this.ur.IBB) return !1;
+       var NB = this.Fm.Ym(QB, nB, dB);
+       return !!NB && (this.ur.fL.Jy(NB, jB, zB), !0)
+     }, LB.prototype.pD = function() {
```

#### 407. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3140-L3145` → after: `L3612-L3617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3612-L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3612-L3617) · [Before (L3140-L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3140-L3145)

```diff
-       var mT = Array.isArray(TT) ? TT : [TT, TT],
-         WT = Array.isArray(UT) ? UT : [UT, UT];
-       WT[0] < mT[0] + 1 && (WT[0] = mT[0] + 1), WT[1] < mT[1] + 1 && (WT[1] = mT[1] + 1), this.HI = mT, this.YWT = WT, this.hHT = oT(mT[0], mT[1]), this.DHT = oT(WT[0], WT[1]), vT(this.tHT, mT, this.hHT), ET(this, this.tHT, 0, 0, 0, !0), this.gkT.CHT(mT, 1, oT), ET(this, this.gkT … [truncated]
-     }, qT.prototype.HmT = function(TT) {
-       this.gkT.TnT(TT, this)
-     }, qT.prototype.qkT = function() {
+       var zB = Array.isArray(BB) ? BB : [BB, BB],
+         QB = Array.isArray(jB) ? jB : [jB, jB];
+       QB[0] < zB[0] + 1 && (QB[0] = zB[0] + 1), QB[1] < zB[1] + 1 && (QB[1] = zB[1] + 1), this.dD = zB, this.rQB = QB, this.fuB = vB(zB[0], zB[1]), this.ouB = vB(QB[0], QB[1]), kB(this.UuB, zB, this.fuB), CB(this, this.UuB, 0, 0, 0, !0), this.TuB.guB(zB, 1, vB), CB(this, this.TuB … [truncated]
+     }, LB.prototype.KjB = function(BB) {
+       this.TuB.FIB(BB, this)
+     }, LB.prototype.OuB = function() {
```

#### 408. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3149-L3151` → after: `L3621-L3623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3621-L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3621-L3623) · [Before (L3149-L3151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3149-L3151)

```diff
-       var [WT, zT, MT] = this.zWT(TT, UT, mT);
-       this.gkT.KHT(WT, zT, MT)
-     }, qT.prototype.WkT = function(TT) {
+       var [QB, nB, dB] = this.xzB(BB, jB, zB);
+       this.TuB.SuB(QB, nB, dB)
+     }, LB.prototype.XuB = function(BB) {
```

#### 409. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3153` → after: `L3625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3625) · [Before (L3153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3153)

```diff
-       this.CUT.remove(UT, mT, WT), zT === this.Rl.cTT && this.KZ.includes(UT, mT, WT) && !this.lZ.LZ(UT, mT, WT) && (uT(this, UT, mT, WT), this.uUT.remove(UT, mT, WT), this.zkT.set(UT + "|" + mT + "|" + WT, performance.now()))
+       this.ijB.remove(jB, zB, QB), nB === this.ur.IBB && this.Gy.includes(jB, zB, QB) && !this.Fm.Ym(jB, zB, QB) && (PB(this, jB, zB, QB), this.EjB.remove(jB, zB, QB), this.ZuB.set(jB + "|" + zB + "|" + QB, performance.now()))
```

#### 410. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3160-L3162` → after: `L3632-L3634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3632-L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3632-L3634) · [Before (L3160-L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3160-L3162)

```diff
-     qT.prototype.ikT = function() {
-       0 !== this.zkT.size && (this.zkT.clear(), this.RHT = 0)
-     }, qT.prototype.bkT = function(TT) {
+     LB.prototype.BUB = function() {
+       0 !== this.ZuB.size && (this.ZuB.clear(), this.FuB = 0)
+     }, LB.prototype.jUB = function(BB) {
```

#### 411. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3164-L3165` → after: `L3636-L3637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3636-L3637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3636-L3637) · [Before (L3164-L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3164-L3165)

```diff
-         for (var mT = TT.zWT(UT.base[0], UT.base[1], UT.base[2]), WT = TT.zWT(UT.max[0], UT.max[1], UT.max[2]), zT = 0; zT < 3; zT++) Number.isFinite(UT.base[zT]) || (mT[zT] = UT.base[zT]), Number.isFinite(UT.max[zT]) || (WT[zT] = UT.max[zT]);
-         TT.KZ.forEach((UT => {
+         for (var zB = BB.xzB(jB.base[0], jB.base[1], jB.base[2]), QB = BB.xzB(jB.max[0], jB.max[1], jB.max[2]), nB = 0; nB < 3; nB++) Number.isFinite(jB.base[nB]) || (zB[nB] = jB.base[nB]), Number.isFinite(jB.max[nB]) || (QB[nB] = jB.max[nB]);
+         BB.Gy.forEach((jB => {
```

#### 412. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3167` → after: `L3639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3639) · [Before (L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3167)

```diff
-           zT < mT[0] || zT > WT[0] || MT < mT[1] || MT > WT[1] || gT < mT[2] || gT > WT[2] || (TT.qZ.add(zT, MT, gT), TT.fZ.remove(zT, MT, gT), TT.uUT.remove(zT, MT, gT), sT(TT, zT, MT, gT))
+           nB < zB[0] || nB > QB[0] || dB < zB[1] || dB > QB[1] || IB < zB[2] || IB > QB[2] || (BB.Pm.add(nB, dB, IB), BB.Tm.remove(nB, dB, IB), BB.EjB.remove(nB, dB, IB), XB(BB, nB, dB, IB))
```

#### 413. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3170` → after: `L3642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3642) · [Before (L3170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3170)

```diff
-         TT.RHT = 0
+         BB.FuB = 0
```

#### 414. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3172` → after: `L3644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3644) · [Before (L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3172)

```diff
-     }, qT.prototype.vmT = function() {
+     }, LB.prototype.QzB = function() {
```

#### 415. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3176-L3179` → after: `L3648-L3651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3648-L3651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3648-L3651) · [Before (L3176-L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3176-L3179)

```diff
-       if (!this.ZmT) throw bT;
-       var [WT, zT, MT] = this.zWT(TT, UT, mT);
-       aT(this, WT, zT, MT), this.KZ.add(WT, zT, MT), this.uUT.add(WT, zT, MT)
-     }, qT.prototype.imT = function() {
+       if (!this.jzB) throw tB;
+       var [QB, nB, dB] = this.xzB(BB, jB, zB);
+       DB(this, QB, nB, dB), this.Gy.add(QB, nB, dB), this.EjB.add(QB, nB, dB)
+     }, LB.prototype.IzB = function() {
```

#### 416. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3183-L3186` → after: `L3655-L3658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3655-L3658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3655-L3658) · [Before (L3183-L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3183-L3186)

```diff
-       var [WT, zT, MT] = this.zWT(TT, UT, mT);
-       this.fZ.add(WT, zT, MT), this.uUT.remove(WT, zT, MT), sT(this, WT, zT, MT), this.CUT.remove(WT, zT, MT);
-       for (var gT = WT + "|" + zT + "|" + MT, nT = !!this.lZ.LZ(WT, zT, MT) || this.MkT.has(gT); !IT(this););
-       nT && this.MkT.add(gT), this.RHT = 0
+       var [QB, nB, dB] = this.xzB(BB, jB, zB);
+       this.Tm.add(QB, nB, dB), this.EjB.remove(QB, nB, dB), XB(this, QB, nB, dB), this.ijB.remove(QB, nB, dB);
+       for (var IB = QB + "|" + nB + "|" + dB, NB = !!this.Fm.Ym(QB, nB, dB) || this.AuB.has(IB); !VB(this););
+       NB && this.AuB.add(IB), this.FuB = 0
```

#### 417. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3206` → after: `L3678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3678) · [Before (L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3206)

```diff
-       const lT = `${TT}|${UT}|${mT}`;
+       const pB = `${BB}|${jB}|${zB}`;
```

#### 418. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3213` → after: `L3685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3685) · [Before (L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3213)

```diff
-       return gT.has(WT) ? jT : (nT.has(WT), !jT)
+       return IB.has(QB) ? aB : (NB.has(QB), !aB)
```

#### 419. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3217` → after: `L3689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3689) · [Before (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3217)

```diff
-       let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.Rl.entities.Aq(TT.Rl.VV);
+       let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.ur.entities.iG(BB.ur.zV);
```

#### 420. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3219` → after: `L3691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3691) · [Before (L3219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3219)

```diff
-       return TT.zWT(Math.floor(mT), Math.floor(WT), Math.floor(zT))
+       return BB.xzB(Math.floor(zB), Math.floor(QB), Math.floor(nB))
```

#### 421. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3221-L3223` → after: `L3693-L3695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3693-L3695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3693-L3695) · [Before (L3221-L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3221-L3223)

```diff
-     qT.prototype.VTT = function(TT, UT, mT) {
-       return this.Rl.kY.canChange ? YT(TT, UT, mT, this.QG(TT, UT, mT), this.YmT, this.bmT, this.JmT, this.OmT, this.xmT, this.emT, !1) : YT(TT, UT, mT, this.QG(TT, UT, mT), this.bmT, this.YmT, this.OmT, this.JmT, this.emT, this.xmT, !0)
-     }, qT.prototype.Cl = function() {
+     LB.prototype.fBB = function(BB, jB, zB) {
+       return this.ur.wG.canChange ? EB(BB, jB, zB, this.cW(BB, jB, zB), this.azB, this.NzB, this.rzB, this.uzB, this.szB, this.UzB, !1) : EB(BB, jB, zB, this.cW(BB, jB, zB), this.NzB, this.azB, this.uzB, this.rzB, this.UzB, this.szB, !0)
+     }, LB.prototype.vp = function() {
```

#### 422. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3225` → after: `L3697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3697) · [Before (L3225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3225)

```diff
-         UT = this.Rl.entities.Aq(this.Rl.VV),
+         jB = this.ur.entities.iG(this.ur.zV),
```

#### 423. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3227-L3228` → after: `L3699-L3700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3699-L3700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3699-L3700) · [Before (L3227-L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3227-L3228)

```diff
-         MT = this.AHT;
-       if ((mT !== MT[0] || WT !== MT[1] || zT !== MT[2]) && (this.emit("playerEnteredChunk", mT, WT, zT), this.AHT = [mT, WT, zT], this.RHT = 0, this.ikT()), this.zkT.size > 0 && function(TT, UT) {
+         dB = this.DuB;
+       if ((zB !== dB[0] || QB !== dB[1] || nB !== dB[2]) && (this.emit("playerEnteredChunk", zB, QB, nB), this.DuB = [zB, QB, nB], this.FuB = 0, this.BUB()), this.ZuB.size > 0 && function(BB, jB) {
```

#### 424. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3230-L3235` → after: `L3702-L3707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3702-L3707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3702-L3707) · [Before (L3230-L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3230-L3235)

```diff
-           TT.zkT.forEach(((WT, zT) => {
-             UT - WT >= 1e3 && (TT.zkT.delete(zT), mT = !0)
-           })), mT && (TT.RHT = 0)
-         }(this, TT), this.oHT !== this.Rl.cTT && (this.zkT.clear(), this.ZmT || (this.BmT(), this.RHT = 0, IT(this)), this.oHT = this.Rl.cTT), RT("start"), TU("start"), this.ZmT || (this.gkT.isActive() && (this.gkT.XHT(UT, [mT, WT, zT], this.qI, this.iTT), function(TT, UT, mT, WT … [truncated]
-           var zT = TT.DHT,
-             MT = TT.gkT,
+           BB.ZuB.forEach(((QB, nB) => {
+             jB - QB >= 1e3 && (BB.ZuB.delete(nB), zB = !0)
+           })), zB && (BB.FuB = 0)
+         }(this, BB), this.HuB !== this.ur.IBB && (this.ZuB.clear(), this.jzB || (this.BzB(), this.FuB = 0, VB(this)), this.HuB = this.ur.IBB), OB("start"), Bj("start"), this.jzB || (this.TuB.isActive() && (this.TuB.ruB(jB, [zB, QB, nB], this.rD, this.aBB), function(BB, jB, zB, QB … [truncated]
+           var nB = BB.ouB,
+             dB = BB.TuB,
```

#### 425. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3237-L3239` → after: `L3709-L3711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3709-L3711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3709-L3711) · [Before (L3237-L3239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3237-L3239)

```diff
-           MT.xHT(((nT, HT, kT) => {
-             TT.KZ.includes(nT, HT, kT) && !TT.fZ.includes(nT, HT, kT) && (zT(nT - UT, HT - mT, kT - WT) || MT.xL(nT, HT, kT) || (TT.fZ.add(nT, HT, kT), TT.uUT.remove(nT, HT, kT), sT(TT, nT, HT, kT), gT = !0))
-           })), gT && ET(TT, TT.fZ, UT, mT, WT)
+           dB.IuB(((NB, uB, UB) => {
+             BB.Gy.includes(NB, uB, UB) && !BB.Tm.includes(NB, uB, UB) && (nB(NB - jB, uB - zB, UB - QB) || dB.Pr(NB, uB, UB) || (BB.Tm.add(NB, uB, UB), BB.EjB.remove(NB, uB, UB), XB(BB, NB, uB, UB), IB = !0))
+           })), IB && CB(BB, BB.Tm, jB, zB, QB)
```

#### 426. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3241-L3243` → after: `L3713-L3715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3713-L3715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3713-L3715) · [Before (L3241-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3241-L3243)

```diff
-           var zT = TT.DHT,
-             MT = TT.fZ,
-             gT = MT.count() + TT.qZ.count(),
+           var nB = BB.ouB,
+             dB = BB.Tm,
+             IB = dB.count() + BB.Pm.count(),
```

#### 427. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3246` → after: `L3718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3718) · [Before (L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3246)

```diff
-           var HT = TT.KZ.jB;
+           var uB = BB.Gy.DJ;
```

#### 428. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3249` → after: `L3721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3721) · [Before (L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3249)

```diff
-             var LT = HT[TT.UkT++ % HT.length],
+             var rB = uB[BB.VuB++ % uB.length],
```

#### 429. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3253` → after: `L3725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3725) · [Before (L3253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3253)

```diff
-             if (!MT.includes(pT, BT, ZT) && (!zT(pT - UT, BT - mT, ZT - WT) && !TT.gkT.xL(pT, BT, ZT) && (TT.fZ.add(pT, BT, ZT), TT.uUT.remove(pT, BT, ZT), sT(TT, pT, BT, ZT), jT = !0, ++gT > nT))) break
+             if (!dB.includes(sB, JB, mB) && (!nB(sB - jB, JB - zB, mB - QB) && !BB.TuB.Pr(sB, JB, mB) && (BB.Tm.add(sB, JB, mB), BB.EjB.remove(sB, JB, mB), XB(BB, sB, JB, mB), aB = !0, ++IB > NB))) break
```

#### 430. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3255` → after: `L3727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3727) · [Before (L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3255)

```diff
-           TT.UkT = TT.UkT % HT.length, jT && ET(TT, MT, UT, mT, WT)
+           BB.VuB = BB.VuB % uB.length, aB && CB(BB, dB, jB, zB, QB)
```

#### 431. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3257` → after: `L3729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3729) · [Before (L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3257)

```diff
-           var zT = TT.uUT;
+           var nB = BB.EjB;
```

#### 432. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3259` → after: `L3731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3731) · [Before (L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3259)

```diff
-           for (var MT = TT.gkT, gT = MT.fp, nT = 0; nT < gT.length && zT.count() < xT; nT++) {
+           for (var dB = BB.TuB, IB = dB.fp, NB = 0; NB < IB.length && nB.count() < qB; NB++) {
```

#### 433. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3261` → after: `L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3733) · [Before (L3261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3261)

```diff
-             HT.iWT = dT(TT, MT.dHT.jB, HT.iWT, HT.i, HT.j, HT.k, MT.aHT)
+             uB.uQB = fB(BB, dB.NuB.DJ, uB.uQB, uB.i, uB.j, uB.k, dB.auB)
```

#### 434. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3263-L3265` → after: `L3735-L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3735-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3735-L3737) · [Before (L3263-L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3263-L3265)

```diff
-           zT.count() < xT && (TT.RHT = dT(TT, TT.tHT.jB, TT.RHT, UT, mT, WT, null));
-           MT.SHT(zT, hT, UT, mT, WT)
-         }(this, mT, WT, zT), RT("addQueue")), this.Rl.JY.vZ(), this.GHT > 0) this.GHT--;
+           nB.count() < qB && (BB.FuB = fB(BB, BB.UuB.DJ, BB.FuB, jB, zB, QB, null));
+           dB.MuB(nB, cB, jB, zB, QB)
+         }(this, zB, QB, nB), OB("addQueue")), this.ur.fL.Am(), this.EuB > 0) this.EuB--;
```

#### 435. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3270` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3742) · [Before (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3270)

```diff
-             mT = TT.rUT.count() + TT.KUT.count() + TT.SUT.count();
+             zB = BB.qjB.count() + BB.fjB.count() + BB.ojB.count();
```

#### 436. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3272` → after: `L3744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3744) · [Before (L3272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3272)

```diff
-           var WT = TT.KZ.jB;
+           var QB = BB.Gy.DJ;
```

#### 437. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3275` → after: `L3747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3747) · [Before (L3275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3275)

```diff
-             var gT = WT[TT.mkT++ % WT.length],
+             var IB = QB[BB.huB++ % QB.length],
```

#### 438. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3279` → after: `L3751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3751) · [Before (L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3279)

```diff
-               jT = TT.lZ.LZ(nT, HT, kT);
+               aB = BB.Fm.Ym(NB, uB, UB);
```

#### 439. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3283` → after: `L3755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3755) · [Before (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3283)

```diff
-           TT.mkT %= WT.length
+           BB.huB %= QB.length
```

#### 440. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3286` → after: `L3758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3758) · [Before (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3286)

```diff
-           HT = gT + this.pkT;
+           uB = IB + this.KuB;
```

#### 441. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3290` → after: `L3762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3762) · [Before (L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3290)

```diff
-         this.pkT -= TT, this.pkT <= 0 ? (this.GHT = this.NHT - 1, this.pkT = this.EHT) : this.pkT = Math.min(this.pkT + this.JUT, this.EHT)
+         this.KuB -= BB, this.KuB <= 0 ? (this.EuB = this.iuB - 1, this.KuB = this.quB) : this.KuB = Math.min(this.KuB + this.pjB, this.quB)
```

#### 442. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3292-L3293` → after: `L3764-L3765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3764-L3765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3764-L3765) · [Before (L3292-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3292-L3293)

```diff
-       var LT = this.lZ.LZ(mT, WT, zT);
-       this.kUT = !!LT, TU("end", this), RT("end")
+       var rB = this.Fm.Ym(zB, QB, nB);
+       this.vBB = !!rB, Bj("end", this), OB("end")
```

#### 443. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3296` → after: `L3768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3768) · [Before (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3296)

```diff
-         UT = TT + this.xUT,
+         jB = BB + this.rjB,
```

#### 444. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3298` → after: `L3770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3770) · [Before (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3298)

```diff
-       this.Rl.JY.pZ(UT, mT, WT, zT);
+       this.ur.fL.Vm(jB, zB, QB, nB);
```

#### 445. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3303` → after: `L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3775) · [Before (L3303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3303)

```diff
-     }, qT.prototype.KmT = function() {
+     }, LB.prototype.HzB = function() {
```

#### 446. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3307-L3310` → after: `L3779-L3782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3779-L3782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3779-L3782) · [Before (L3307-L3310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3307-L3310)

```diff
-       var [WT, zT, MT] = this.zWT(TT, UT, mT);
-       return this.lZ.LZ(WT, zT, MT)
-     }, qT.prototype.jZ = function(TT, UT) {
-       this.Rl.JY.VB(TT), FT(this, TT, UT)
+       var [QB, nB, dB] = this.xzB(BB, jB, zB);
+       return this.Fm.Ym(QB, nB, dB)
+     }, LB.prototype.Dm = function(BB, jB) {
+       this.ur.fL.Im(BB), ZB(this, BB, jB)
```

#### 447. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3320` → after: `L3792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3792) · [Before (L3320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3320)

```diff
-         if (wT(TT, WT, zT, MT, lT, LT, pT, gT), TT.uUT.count() >= xT) break
+         if (oB(BB, QB, nB, dB, pB, rB, sB, IB), BB.EjB.count() >= qB) break
```

#### 448. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3328` → after: `L3800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3800) · [Before (L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3328)

```diff
-         zT && !cT(zT, UT, mT, WT) || TT.KZ.includes(UT, mT, WT) || TT.zkT.size > 0 && TT.zkT.has(UT + "|" + mT + "|" + WT) || zT && TT.gkT.bWT(UT, mT, WT) || (aT(TT, UT, mT, WT), TT.KZ.add(UT, mT, WT), TT.uUT.add(UT, mT, WT, !0))
+         nB && !yB(nB, jB, zB, QB) || BB.Gy.includes(jB, zB, QB) || BB.ZuB.size > 0 && BB.ZuB.has(jB + "|" + zB + "|" + QB) || nB && BB.TuB.UQB(jB, zB, QB) || (DB(BB, jB, zB, QB), BB.Gy.add(jB, zB, QB), BB.EjB.add(jB, zB, QB, !0))
```

#### 449. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3332` → after: `L3804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3804) · [Before (L3332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3332)

```diff
-       var zT = TT.KZ.Cw(UT, mT, WT);
+       var nB = BB.Gy.wq(jB, zB, QB);
```

#### 450. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3335` → after: `L3807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3807) · [Before (L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3335)

```diff
-         MT === UT && gT === mT && nT === WT || (TT.uUT.remove(MT, gT, nT), TT.CUT.remove(MT, gT, nT), TT.qZ.remove(MT, gT, nT), uT(TT, MT, gT, nT))
+         dB === jB && IB === zB && NB === QB || (BB.EjB.remove(dB, IB, NB), BB.ijB.remove(dB, IB, NB), BB.Pm.remove(dB, IB, NB), PB(BB, dB, IB, NB))
```

#### 451. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3341-L3346` → after: `L3813-L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3813-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3813-L3818) · [Before (L3341-L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3341-L3346)

```diff
-       var UT = TT.uUT;
-       if (UT.TB()) return !0;
-       var mT = TT.CUT.count(),
-         WT = TT.rUT.count();
-       if (mT >= TT.eUT) return !0;
-       if (WT >= TT.YUT) return !0;
+       var jB = BB.EjB;
+       if (jB.tJ()) return !0;
+       var zB = BB.ijB.count(),
+         QB = BB.qjB.count();
+       if (zB >= BB.UjB) return !0;
+       if (QB >= BB.ajB) return !0;
```

#### 452. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3349-L3351` → after: `L3821-L3823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3821-L3823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3821-L3823) · [Before (L3349-L3351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3349-L3351)

```diff
-         var zT = TT.iTT,
-           MT = TT.SB.OkT(),
-           gT = TT.Rl.cTT,
+         var nB = BB.aBB,
+           dB = BB.am.zUB(),
+           IB = BB.ur.IBB,
```

#### 453. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3356-L3359` → after: `L3828-L3831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3828-L3831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3828-L3831) · [Before (L3356-L3359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3356-L3359)

```diff
-           lT = TT.CUT.Cw(UT, mT, WT);
-         !lT || lT[0] === UT && lT[1] === mT && lT[2] === WT || TT.CUT.remove(lT[0], lT[1], lT[2]);
-         TT.CUT.add(UT, mT, WT), TT.emit("worldDataNeeded", nT, MT, HT, kT, jT, gT), TU("request")
-       }(TT, zT, MT, gT), UT.TB()
+           pB = BB.ijB.wq(jB, zB, QB);
+         !pB || pB[0] === jB && pB[1] === zB && pB[2] === QB || BB.ijB.remove(pB[0], pB[1], pB[2]);
+         BB.ijB.add(jB, zB, QB), BB.emit("worldDataNeeded", NB, dB, uB, UB, aB, IB), Bj("request")
+       }(BB, nB, dB, IB), jB.tJ()
```

#### 454. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3363-L3364` → after: `L3835-L3836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3835-L3836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3835-L3836) · [Before (L3363-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3363-L3364)

```diff
-       var UT = TT.qZ;
-       if (UT.TB() && (UT = TT.fZ), UT.TB()) return !0;
+       var jB = BB.Pm;
+       if (jB.tJ() && (jB = BB.Tm), jB.tJ()) return !0;
```

#### 455. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3366` → after: `L3838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3838) · [Before (L3366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3366)

```diff
-       return uT(TT, mT, WT, zT), UT.TB()
+       return PB(BB, zB, QB, nB), jB.tJ()
```

#### 456. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3370` → after: `L3842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3842) · [Before (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3370)

```diff
-       var mT = TT.SUT.jB,
+       var zB = BB.ojB.DJ,
```

#### 457. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3372-L3375` → after: `L3844-L3847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3844-L3847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3844-L3847) · [Before (L3372-L3375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3372-L3375)

```diff
-         zT = WT ? TT.lZ.LZ(WT[0], WT[1], WT[2]) : null;
-       if (TT.Rl.JY.zZ(!(zT && zT.CB))) return !0;
-       var MT = TT.SUT;
-       if (MT.TB() && (MT = TT.KUT), MT.TB() && !UT && (MT = TT.rUT), MT.TB()) return !0;
+         nB = QB ? BB.Fm.Ym(QB[0], QB[1], QB[2]) : null;
+       if (BB.ur.fL.im(!(nB && nB.um))) return !0;
+       var dB = BB.ojB;
+       if (dB.tJ() && (dB = BB.fjB), dB.tJ() && !jB && (dB = BB.qjB), dB.tJ()) return !0;
```

#### 458. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3377-L3378` → after: `L3849-L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3849-L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3849-L3850) · [Before (L3377-L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3377-L3378)

```diff
-       if (!TT.fZ.includes(gT, nT, HT)) {
-         var kT = TT.lZ.LZ(gT, nT, HT);
+       if (!BB.Tm.includes(IB, NB, uB)) {
+         var UB = BB.Fm.Ym(IB, NB, uB);
```

#### 459. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3380` → after: `L3852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3852) · [Before (L3380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3380)

```diff
-           sT(TT, UT.i, UT.j, UT.k), UT.Bx(), TU("mesh")
+           XB(BB, jB.i, jB.j, jB.k), jB.Iq(), Bj("mesh")
```

#### 460. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3386` → after: `L3858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3858) · [Before (L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3386)

```diff
-       TT.rUT.remove(UT, mT, WT), TT.KUT.remove(UT, mT, WT), TT.SUT.remove(UT, mT, WT)
+       BB.qjB.remove(jB, zB, QB), BB.fjB.remove(jB, zB, QB), BB.ojB.remove(jB, zB, QB)
```

#### 461. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3390-L3396` → after: `L3862-L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3862-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3862-L3868) · [Before (L3390-L3396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3390-L3396)

```diff
-       if (!UT.kZ && !UT.OJ) return !1;
-       if (TT.SUT.includes(UT.i, UT.j, UT.k)) return !1;
-       if (mT) return TT.rUT.remove(UT.i, UT.j, UT.k), TT.KUT.remove(UT.i, UT.j, UT.k), TT.SUT.add(UT.i, UT.j, UT.k), !0;
-       if (TT.rUT.includes(UT.i, UT.j, UT.k)) return !1;
-       if (TT.KUT.includes(UT.i, UT.j, UT.k)) return !1;
-       var WT = 26 === UT.eJ ? TT.KUT : TT.rUT;
-       if (WT.add(UT.i, UT.j, UT.k), TT.TkT++, TT.TkT > 20) {
+       if (!jB.Hm && !jB.pE) return !1;
+       if (BB.ojB.includes(jB.i, jB.j, jB.k)) return !1;
+       if (zB) return BB.qjB.remove(jB.i, jB.j, jB.k), BB.fjB.remove(jB.i, jB.j, jB.k), BB.ojB.add(jB.i, jB.j, jB.k), !0;
+       if (BB.qjB.includes(jB.i, jB.j, jB.k)) return !1;
+       if (BB.fjB.includes(jB.i, jB.j, jB.k)) return !1;
+       var QB = 26 === jB.sE ? BB.fjB : BB.qjB;
+       if (QB.add(jB.i, jB.j, jB.k), BB.YuB++, BB.YuB > 20) {
```

#### 462. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3398` → after: `L3870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3870) · [Before (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3398)

```diff
-         TT.gkT.SHT(WT, hT, zT, MT, gT), TT.TkT = 0
+         BB.TuB.MuB(QB, cB, nB, dB, IB), BB.YuB = 0
```

#### 463. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3404` → after: `L3876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3876) · [Before (L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3404)

```diff
-       return TT.SB.release(UT), !1
+       return BB.am.release(jB), !1
```

#### 464. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3406-L3408` → after: `L3878-L3880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3878-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3878-L3880) · [Before (L3406-L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3406-L3408)

```diff
-     qT.prototype.BmT = function() {
-       for (this.qZ.Gw(this.KZ), this.fZ.empty(), this.uUT.empty(), this.rUT.empty(), this.KUT.empty(), this.SUT.empty(), this.LkT.clear(), this.zkT.clear(), this.MkT.clear(), this.bZ = !1; !IT(this););
-       this.RHT = 0
+     LB.prototype.BzB = function() {
+       for (this.Pm.jH(this.Gy), this.Tm.empty(), this.EjB.empty(), this.qjB.empty(), this.fjB.empty(), this.ojB.empty(), this.xuB.clear(), this.ZuB.clear(), this.AuB.clear(), this.lm = !1; !VB(this););
+       this.FuB = 0
```

#### 465. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3420` → after: `L3892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3892) · [Before (L3420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3420)

```diff
-       var zT = TT.lZ.LZ(UT, mT, WT);
+       var nB = BB.Fm.Ym(jB, zB, QB);
```

#### 466. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3422-L3423` → after: `L3894-L3895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3894-L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3894-L3895) · [Before (L3422-L3423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3422-L3423)

```diff
-         var MT = zT.iL;
-         TT.emit("chunkBeingRemoved", zT.xB, zT.iL, zT.iJ), TT.Rl.GB.BHT(zT), zT.dispose(), TT.SB.release(MT), TU("dispose"), DT(TT, UT, mT, WT, null)
+         var dB = nB.Vr;
+         BB.emit("chunkBeingRemoved", nB.CJ, nB.Vr, nB.uE), BB.ur.pm.cNB(nB), nB.dispose(), BB.am.release(dB), Bj("dispose"), bB(BB, jB, zB, QB, null)
```

#### 467. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3425` → after: `L3897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3897) · [Before (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3425)

```diff
-       TT.lZ.Iw(UT, mT, WT), TT.KZ.remove(UT, mT, WT), TT.MkT.size > 0 && TT.MkT.delete(UT + "|" + mT + "|" + WT), TT.fZ.remove(UT, mT, WT), sT(TT, UT, mT, WT),
+       BB.Fm.lq(jB, zB, QB), BB.Gy.remove(jB, zB, QB), BB.AuB.size > 0 && BB.AuB.delete(jB + "|" + zB + "|" + QB), BB.Tm.remove(jB, zB, QB), XB(BB, jB, zB, QB),
```

#### 468. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3428` → after: `L3900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3900) · [Before (L3428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3428)

```diff
-             MT = TT.LkT.get(zT);
+             dB = BB.xuB.get(nB);
```

#### 469. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3432` → after: `L3904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3904) · [Before (L3432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3432)

```diff
-           TT.KZ.jB.forEach((function(TT) {
+           BB.Gy.DJ.forEach((function(BB) {
```

#### 470. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3434-L3435` → after: `L3906-L3907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3906-L3907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3906-L3907) · [Before (L3434-L3435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3434-L3435)

```diff
-           })), null !== gT ? TT.LkT.set(zT, gT) : TT.LkT.delete(zT)
-         }(TT, UT, mT, WT), TT.Rl.wTT()
+           })), null !== IB ? BB.xuB.set(nB, IB) : BB.xuB.delete(nB)
+         }(BB, jB, zB, QB), BB.ur.kBB()
```

#### 471. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3439` → after: `L3911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3911) · [Before (L3439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3439)

```diff
-       return [this.HkT(TT), this.HkT(UT), this.HkT(mT)]
+       return [this.WuB(BB), this.WuB(jB), this.WuB(zB)]
```

#### 472. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3443` → after: `L3915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3915) · [Before (L3443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3443)

```diff
-       return [this.kkT(TT), this.kkT(UT), this.kkT(mT)]
+       return [this.euB(BB), this.euB(jB), this.euB(zB)]
```

#### 473. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3447` → after: `L3919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3919) · [Before (L3447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3447)

```diff
-       return 0 | Math.floor(TT / this.iTT)
+       return 0 | Math.floor(BB / this.aBB)
```

#### 474. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3451` → after: `L3923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3923) · [Before (L3451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3451)

```diff
-       var UT = this.iTT,
+       var jB = this.aBB,
```

#### 475. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3457` → after: `L3929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3929) · [Before (L3457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3457)

```diff
-       return TT >> this.jkT
+       return BB >> this.luB
```

#### 476. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3461` → after: `L3933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3933) · [Before (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3461)

```diff
-       return TT & this.lkT
+       return BB & this.wuB
```

#### 477. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3466` → after: `L3938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3938) · [Before (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3466)

```diff
-       void 0 === mT && ([mT, WT, zT] = JT(TT)), UT.Uy(((TT, UT, MT) => hT(mT - TT, WT - UT, zT - MT)), MT)
+       void 0 === zB && ([zB, QB, nB] = iB(BB)), jB.nH(((BB, jB, dB) => cB(zB - BB, QB - jB, nB - dB)), dB)
```

#### 478. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3471` → after: `L3943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3943) · [Before (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3471)

```diff
-       for (var MT = !zT || zT && !zT.zB, gT = -1; gT <= 1; gT++)
+       for (var dB = !nB || nB && !nB.iJ, IB = -1; IB <= 1; IB++)
```

#### 479. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3475` → after: `L3947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3947) · [Before (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3475)

```diff
-               var kT = TT.lZ.LZ(UT + gT, mT + nT, WT + HT);
+               var UB = BB.Fm.Ym(jB + IB, zB + NB, QB + uB);
```

#### 480. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3477-L3479` → after: `L3949-L3951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3949-L3951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3949-L3951) · [Before (L3477-L3479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3477-L3479)

```diff
-                 MT && (kT.kZ = !0, kT.BZ = !0, TT.Rl.JY.VB(kT)), zT && !zT.lB.get(gT, nT, HT) && (zT.eJ++, zT.lB.set(gT, nT, HT, kT));
-                 var jT = kT.lB.get(-gT, -nT, -HT);
-                 zT && !jT && (kT.eJ++, kT.lB.set(-gT, -nT, -HT, zT), 26 === kT.eJ && FT(TT, kT)), !zT && jT && (kT.eJ--, kT.lB.set(-gT, -nT, -HT, null))
+                 dB && (UB.Hm = !0, UB.hm = !0, BB.ur.fL.Im(UB)), nB && !nB.FJ.get(IB, NB, uB) && (nB.sE++, nB.FJ.set(IB, NB, uB, UB));
+                 var aB = UB.FJ.get(-IB, -NB, -uB);
+                 nB && !aB && (UB.sE++, UB.FJ.set(-IB, -NB, -uB, nB), 26 === UB.sE && ZB(BB, UB)), !nB && aB && (UB.sE--, UB.FJ.set(-IB, -NB, -uB, null))
```

#### 481. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3487` → after: `L3959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3959) · [Before (L3487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3487)

```diff
-       return TT === UT ? (TT, UT, WT) => TT * TT + UT * UT + WT * WT <= mT : TT > UT ? (TT, WT, zT) => !(Math.abs(WT) > UT) && TT * TT + WT * WT + zT * zT <= mT : (TT, UT, zT) => {
+       return BB === jB ? (BB, jB, QB) => BB * BB + jB * jB + QB * QB <= zB : BB > jB ? (BB, QB, nB) => !(Math.abs(QB) > jB) && BB * BB + QB * QB + nB * nB <= zB : (BB, jB, nB) => {
```

#### 482. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3500-L3501` → after: `L3972-L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3972-L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3972-L3973) · [Before (L3500-L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3500-L3501)

```diff
-         var mT = TT.lZ.LZ(UT[0], UT[1], UT[2]);
-         mT && (gT++, HT.push(mT.CZ), mT.Rp && zT++, mT.zB && MT++, 26 === mT.eJ && nT++)
+         var zB = BB.Fm.Ym(jB[0], jB[1], jB[2]);
+         zB && (IB++, uB.push(zB.yy), zB.gJ && nB++, zB.iJ && dB++, 26 === zB.sE && NB++)
```

#### 483. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3512` → after: `L3984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3984) · [Before (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3512)

```diff
-     qT.prototype.LB = function(TT, UT) {
+     LB.prototype.YJ = function(BB, jB) {
```

#### 484. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3514-L3517` → after: `L3986-L3989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3986-L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3986-L3989) · [Before (L3514-L3517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3514-L3517)

```diff
-         WT = this.LkT.get(mT);
-       return void 0 !== WT ? WT : null
-     }, qT.prototype.Gp = function() {
-       console.log("World report - playerChunkLoaded: ", this.kUT), AT(this, "  known:     ", this.KZ.jB, !0), AT(this, "  to request:", this.uUT.jB, 0), AT(this, "  to remove: ", this.fZ.jB, 0), AT(this, "  invalid:   ", this.qZ.jB, 0), AT(this, "  creating:  ", this.CUT.jB, 0),  … [truncated]
+         QB = this.xuB.get(zB);
+       return void 0 !== QB ? QB : null
+     }, LB.prototype.JJ = function() {
+       console.log("World report - playerChunkLoaded: ", this.vBB), RB(this, "  known:     ", this.Gy.DJ, !0), RB(this, "  to request:", this.EjB.DJ, 0), RB(this, "  to remove: ", this.Tm.DJ, 0), RB(this, "  invalid:   ", this.Pm.DJ, 0), RB(this, "  creating:  ", this.ijB.DJ, 0),  … [truncated]
```

#### 485. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3519` → after: `L3991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3991) · [Before (L3519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3519)

```diff
-     var RT = (0, MT.k)(0, "world ticks:", 1),
+     var OB = (0, dB.l)(0, "world ticks:", 1),
```

#### 486. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3522` → after: `L3994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3994) · [Before (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3522)

```diff
-   4778: (TT, UT, mT) => {
+   4779: (BB, jB, zB) => {
```

#### 487. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3524` → after: `L3996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3996) · [Before (L3524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3524)

```diff
-       e: () => jT
+       d: () => aB
```

#### 488. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3526` → after: `L3998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R3998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L3998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L3998) · [Before (L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3526)

```diff
-     var WT = mT(25),
+     var QB = zB(28),
```

#### 489. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3528-L3529` → after: `L4000-L4001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4000-L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4000-L4001) · [Before (L3528-L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3528-L3529)

```diff
-       MT = mT(1388),
-       gT = mT(2929);
+       dB = zB(1316),
+       IB = zB(2912);
```

#### 490. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3534` → after: `L4006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4006) · [Before (L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3534)

```diff
-       return "visible" === document.visibilityState && "inGame" === WT.b.get("gameState") && (0, MT.u)()
+       return "visible" === document.visibilityState && "inGame" === QB.c.get("gameState") && (0, dB.y)()
```

#### 491. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3538` → after: `L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4010) · [Before (L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3538)

```diff
-       (0, gT.v)() || function(TT, UT, mT) {
+       (0, IB.t)() || function(BB, jB, zB) {
```

#### 492. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3545` → after: `L4017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4017) · [Before (L3545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3545)

```diff
-           TT(`saved for the player after ${nT/1e3} s of play`), (0, gT.M)(), zT.j.EZ("chat", {
+           BB(`saved for the player after ${NB/1e3} s of play`), (0, IB.E)(), nB.n.Ly("chat", {
```

#### 493. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3557` → after: `L4029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4029) · [Before (L3557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3557)

```diff
-   34123: (TT, UT, mT) => {
+   34101: (BB, jB, zB) => {
```

#### 494. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3566-L3567` → after: `L4038-L4039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4038-L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4038-L4039) · [Before (L3566-L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3566-L3567)

```diff
-       d: () => zT,
-       h: () => WT
+       e: () => nB,
+       f: () => QB
```

#### 495. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3570` → after: `L4042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4042) · [Before (L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3570)

```diff
-   38089: (TT, UT, mT) => {
+   38032: (BB, jB, zB) => {
```

#### 496. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3572` → after: `L4044-L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4044-L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4044-L4045) · [Before (L3572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3572)

```diff
-       e: () => kT,
+       d: () => UB,
+       g: () => aB,
```

#### 497. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3574-L3576` → after: `L4047-L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4047-L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4047-L4048) · [Before (L3574-L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3574-L3576)

```diff
-       l: () => iT,
-       n: () => qT,
-       r: () => fT
+       j: () => LB,
+       k: () => GB
```

#### 498. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3578-L3580` → after: `L4050-L4052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4050-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4050-L4052) · [Before (L3578-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3578-L3580)

```diff
-     var WT = mT(4778),
-       zT = mT(34123),
-       MT = mT(2929);
+     var QB = zB(4779),
+       nB = zB(34101),
+       dB = zB(2912);
```

#### 499. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3582` → after: `L4054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4054) · [Before (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3582)

```diff
-       nT = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "fl", "jobMs"];
+       NB = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "Ep", "jobMs"];
```

#### 500. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3590` → after: `L4062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4062) · [Before (L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3590)

```diff
-       return `${TT},${UT},${mT}`
+       return `${BB},${jB},${zB}`
```

#### 501. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3598` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4070) · [Before (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3598)

```diff
-         const WT = null !== (mT = this.pending.get(TT)) && void 0 !== mT ? mT : [];
+         const QB = null !== (zB = this.pending.get(BB)) && void 0 !== zB ? zB : [];
```

#### 502. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3613` → after: `L4085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4085) · [Before (L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3613)

```diff
-           fl: zT,
+           Ep: nB,
```

#### 503. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3616` → after: `L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4088) · [Before (L3616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3616)

```diff
-         for (const HT of null !== (nT = this.pending.get(TT)) && void 0 !== nT ? nT : []) {
+         for (const uB of null !== (NB = this.pending.get(BB)) && void 0 !== NB ? NB : []) {
```

#### 504. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3630` → after: `L4102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4102) · [Before (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3630)

```diff
-         for (const zT of null !== (WT = this.pending.get(TT)) && void 0 !== WT ? WT : []) {
+         for (const nB of null !== (QB = this.pending.get(BB)) && void 0 !== QB ? QB : []) {
```

#### 505. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3645` → after: `L4117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4117) · [Before (L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3645)

```diff
-           fl: 0,
+           Ep: 0,
```

#### 506. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3667` → after: `L4139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4139) · [Before (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3667)

```diff
-           fl: mT.fl,
+           Ep: zB.Ep,
```

#### 507. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3670` → after: `L4142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4142) · [Before (L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3670)

```diff
-         if (this.edits[this.nextEdit] = zT, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(zT.totalMs), this.Gp(1), zT.totalMs < 100 || ++this.outliers > 5) return;
+         if (this.edits[this.nextEdit] = nB, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(nB.totalMs), this.JJ(1), nB.totalMs < 100 || ++this.outliers > 5) return;
```

#### 508. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3672` → after: `L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4144) · [Before (L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3672)

```diff
-         (0, MT.m)("remesh", `slow edit (${TT}) shown in ${gT(zT.totalMs)} ms: slot ${gT(zT.slotMs)}, worker ${gT(zT.workerMs)} (${zT.ahead} ahead, ${zT.inFlight}/${zT.fl} in flight; job ${gT(zT.jobMs)}), apply ${gT(zT.applyMs)}`)
+         (0, dB.n)("remesh", `slow edit (${BB}) shown in ${IB(nB.totalMs)} ms: slot ${IB(nB.slotMs)}, worker ${IB(nB.workerMs)} (${nB.ahead} ahead, ${nB.inFlight}/${nB.Ep} in flight; job ${IB(nB.jobMs)}), apply ${IB(nB.applyMs)}`)
```

#### 509. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3678` → after: `L4150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4150) · [Before (L3678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3678)

```diff
-           this.gaveUp += WT.length - UT.length, this.Gp(WT.length - UT.length), UT.length > 0 ? this.pending.set(mT, UT) : this.pending.delete(mT)
+           this.gaveUp += QB.length - jB.length, this.JJ(QB.length - jB.length), jB.length > 0 ? this.pending.set(zB, jB) : this.pending.delete(zB)
```

#### 510. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3685` → after: `L4157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4157) · [Before (L3685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3685)

```diff
-           (0, MT.m)("remesh", `${Math.round(this.frames/UT)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,zT.h)(TT,.5))} max ${Math.round((0,zT … [truncated]
+           (0, dB.n)("remesh", `${Math.round(this.frames/jB)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,nB.f)(BB,.5))} max ${Math.round((0,nB … [truncated]
```

#### 511. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3692` → after: `L4164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4164) · [Before (L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3692)

```diff
-           return `${TT}: p50 ${Math.round((0,zT.h)(UT,.5))} p90 ${Math.round((0,zT.h)(UT,.9))} max ${Math.round((0,zT.h)(UT,1))}`
+           return `${BB}: p50 ${Math.round((0,nB.f)(jB,.5))} p90 ${Math.round((0,nB.f)(jB,.9))} max ${Math.round((0,nB.f)(jB,1))}`
```

#### 512. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3703` → after: `L4175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4175) · [Before (L3703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3703)

```diff
-         this.log = TT, this.Rl = UT
+         this.log = BB, this.ur = jB
```

#### 513. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3706-L3707` → after: `L4178-L4179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4178-L4179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4178-L4179) · [Before (L3706-L3707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3706-L3707)

```diff
-         const [WT, zT, MT] = this.Rl.Nl.zWT(TT, UT, mT), gT = this.Rl.Nl.lZ.LZ(WT, zT, MT);
-         gT && gT.kZ && this.log.edit(jT(WT, zT, MT), performance.now())
+         const [QB, nB, dB] = this.ur.zr.xzB(BB, jB, zB), IB = this.ur.zr.Fm.Ym(QB, nB, dB);
+         IB && IB.Hm && this.log.edit(aB(QB, nB, dB), performance.now())
```

#### 514. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3735` → after: `L4207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4207) · [Before (L3735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3735)

```diff
-       return pT = TT, (0, MT.j)("remesh", (() => TT.dump())), (0, MT.b)("remeshStats", (() => {
+       return sB = BB, (0, dB.j)("remesh", (() => BB.dump())), (0, dB.d)("remeshStats", (() => {
```

#### 515. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3737-L3738` → after: `L4209-L4210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4209-L4210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4209-L4210) · [Before (L3737-L3738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3737-L3738)

```diff
-       })), ZT || (ZT = !0, (0, WT.e)((TT => {
-         (0, MT.m)("remesh", TT)
+       })), mB || (mB = !0, (0, QB.d)((BB => {
+         (0, dB.n)("remesh", BB)
```

#### 516. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3744` → after: `L4216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4216) · [Before (L3744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3744)

```diff
-       cT = new LT(UT, TT), TT.JY.meshProbe = cT, TT.on("beforeRender", (() => {
+       yB = new rB(jB, BB), BB.fL.meshProbe = yB, BB.on("beforeRender", (() => {
```

#### 517. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3754` → after: `L4226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4226) · [Before (L3754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3754)

```diff
-   38331: (TT, UT, mT) => {
+   38278: (BB, jB, zB) => {
```

#### 518. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3756` → after: `L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4228) · [Before (L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3756)

```diff
-       b: () => jT
+       d: () => aB
```

#### 519. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3758-L3764` → after: `L4230-L4236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4230-L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4230-L4236) · [Before (L3758-L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3758-L3764)

```diff
-     var WT = mT(38340),
-       zT = mT(38139),
-       MT = mT(3781),
-       gT = mT(3841),
-       nT = mT(36851),
-       HT = mT(2875),
-       kT = mT(38327);
+     var QB = zB(38280),
+       nB = zB(38093),
+       dB = zB(3798),
+       IB = zB(3849),
+       NB = zB(36828),
+       uB = zB(2863),
+       UB = zB(38274);
```

#### 520. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3770-L3774` → after: `L4242-L4246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4242-L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4242-L4246) · [Before (L3770-L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3770-L3774)

```diff
-         const TT = (0, HT.d)().client.inventoryPrediction.record(kT.b.swap(UT, mT));
-         (0, MT.sendColyMessage)(gT.cj, {
-           vH: UT,
-           fH: mT,
-           Pg: TT
+         const BB = (0, uB.c)().client.inventoryPrediction.record(UB.b.swap(jB, zB));
+         (0, dB.sendColyMessage)(IB._j, {
+           Mu: jB,
+           Eu: zB,
+           RI: BB
```

#### 521. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3776-L3778` → after: `L4248-L4250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4248-L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4248-L4250) · [Before (L3776-L3778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3776-L3778)

```diff
-         const zT = WT.b.getSlotArmourType(UT),
-           jT = WT.b.getSlotArmourType(mT);
-         (zT || jT) && nT.c.play("equip_leather1", 1).rate(.9 + .3 * Math.random())
+         const nB = QB.c.getSlotArmourType(jB),
+           aB = QB.c.getSlotArmourType(zB);
+         (nB || aB) && NB.e.play("equip_leather1", 1).rate(.9 + .3 * Math.random())
```

#### 522. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3782-L3783` → after: `L4254-L4255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4254-L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4254-L4255) · [Before (L3782-L3783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3782-L3783)

```diff
-       if (WT && !(0, HT.h)().pY.oUT(TT.Rl.VV).isAlive) return !1;
-       if (UT >= TT.playerInventory.numSlots && !TT.OM && !TT.inCreative) return !1;
+       if (QB && !(0, uB.g)().vG.hjB(BB.ur.zV).isAlive) return !1;
+       if (jB >= BB.playerInventory.numSlots && !BB.hd && !BB.inCreative) return !1;
```

#### 523. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3785` → after: `L4257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4257) · [Before (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3785)

```diff
-       if (null !== nT && void 0 !== nT && nT.amount && nT.amount <= 0) return console.error(new Error(`Found item ${nT.name} with non-positive amount ${nT.amount}`).stack), !1;
+       if (null !== NB && void 0 !== NB && NB.amount && NB.amount <= 0) return console.error(new Error(`Found item ${NB.name} with non-positive amount ${NB.amount}`).stack), !1;
```

#### 524. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3787-L3788` → after: `L4259-L4260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4259-L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4259-L4260) · [Before (L3787-L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3787-L3788)

```diff
-       if (UT < TT.playerInventory.numSlots ? jT = TT.playerInventory.removeItem(UT, mT) : TT.OM ? jT = TT.OM.removeItem(UT - TT.playerInventory.numSlots, mT) : (console.assert(TT.inCreative, "Must be in creative to get here"), jT = !0), !jT) return !1;
-       const lT = (0, HT.d)().client.inventoryPrediction.record(kT.b.remove(UT, mT, nT.name));
+       if (jB < BB.playerInventory.numSlots ? aB = BB.playerInventory.removeItem(jB, zB) : BB.hd ? aB = BB.hd.removeItem(jB - BB.playerInventory.numSlots, zB) : (console.assert(BB.inCreative, "Must be in creative to get here"), aB = !0), !aB) return !1;
+       const pB = (0, uB.c)().client.inventoryPrediction.record(UB.b.remove(jB, zB, NB.name));
```

#### 525. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3792-L3799` → after: `L4264-L4271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4264-L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4264-L4271) · [Before (L3792-L3799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3792-L3799)

```diff
-           Rl: WT
-         } = TT, kT = null !== (LT = WT.STT) && void 0 !== LT ? LT : WT.camera.qD(), jT = [kT[0], kT[1], kT[2]];
-         (0, MT.sendColyMessage)(gT.Ig, {
-           sj: UT,
-           Fj: nT.typeObj.id,
-           Pj: mT,
-           Pg: lT,
-           Vj: jT
+           ur: QB
+         } = BB, UB = null !== (rB = QB.VBB) && void 0 !== rB ? rB : QB.camera.nC(), aB = [UB[0], UB[1], UB[2]];
+         (0, dB.sendColyMessage)(IB.th, {
+           Aa: jB,
+           Ta: NB.typeObj.id,
+           Pa: zB,
+           RI: pB,
+           Wa: aB
```

#### 526. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3801-L3810` → after: `L4273-L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4273-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4273-L4282) · [Before (L3801-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3801-L3810)

```diff
-         const pT = (0, HT.d)(),
-           BT = (0, zT.l)(jT);
-         BT && pT.getClientPredictedOption(WT.VV, "predictDroppedItems") && pT.client.itemDropPrediction.predictPlayerDrop(lT, nT.typeObj.id, mT, nT.attributes, pT.getLifeformEyePos(WT.VV, !1), BT), TT.Rl.pY.wUT(TT.Rl.VV).setArmsAreSwinging();
-         const ZT = (0, HT.h)().pY.RUT(TT.Rl.VV);
-         ZT.hasSwingAnimation() && ZT.trySwingBlock(Date.now()), (0, HT.d)().client.triggerGameCallback("onPlayerDropItem", TT.Rl.VV, nT.name, mT, UT)
-       } else(0, MT.sendColyMessage)(gT.vi, {
-         Jj: UT,
-         xj: nT.typeObj.id,
-         wj: mT,
-         Pg: lT
+         const sB = (0, uB.c)(),
+           JB = (0, nB.m)(aB);
+         JB && sB.getClientPredictedOption(QB.zV, "predictDroppedItems") && sB.client.itemDropPrediction.predictPlayerDrop(pB, NB.typeObj.id, zB, NB.attributes, sB.getLifeformEyePos(QB.zV, !1), JB), BB.ur.vG.JjB(BB.ur.zV).setArmsAreSwinging();
+         const mB = (0, uB.g)().vG.ZjB(BB.ur.zV);
+         mB.hasSwingAnimation() && mB.trySwingBlock(Date.now()), (0, uB.c)().client.triggerGameCallback("onPlayerDropItem", BB.ur.zV, NB.name, zB, jB)
+       } else(0, dB.sendColyMessage)(IB.Aj, {
+         oa: jB,
+         Ha: NB.typeObj.id,
+         Da: zB,
+         RI: pB
```

#### 527. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3817-L3822` → after: `L4289-L4294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4289-L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4289-L4294) · [Before (L3817-L3822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3817-L3822)

```diff
-         const TT = (0, HT.d)().client.inventoryPrediction.record(kT.b.moveWithAmount(UT, mT, WT));
-         (0, MT.sendColyMessage)(gT.qh, {
-           Gn: UT,
-           Nn: mT,
-           En: WT,
-           Pg: TT
+         const BB = (0, uB.c)().client.inventoryPrediction.record(UB.b.moveWithAmount(jB, zB, QB));
+         (0, dB.sendColyMessage)(IB.ti, {
+           RN: jB,
+           ON: zB,
+           Bu: QB,
+           RI: BB
```

#### 528. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3832-L3838` → after: `L4304-L4310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4304-L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4304-L4310) · [Before (L3832-L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3832-L3838)

```diff
-         const TT = (0, HT.d)().client.inventoryPrediction.record(kT.b.moveIntoIdxs(UT, mT, WT, jT));
-         (0, MT.sendColyMessage)(gT.uh, {
-           zH: UT,
-           MH: mT,
-           gH: WT,
-           nH: jT,
-           Pg: TT
+         const BB = (0, uB.c)().client.inventoryPrediction.record(UB.b.moveIntoIdxs(jB, zB, QB, aB));
+         (0, dB.sendColyMessage)(IB.ui, {
+           Uu: jB,
+           au: zB,
+           pu: QB,
+           ru: aB,
+           RI: BB
```

#### 529. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3844` → after: `L4316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4316) · [Before (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3844)

```diff
-   37993: (TT, UT, mT) => {
+   37949: (BB, jB, zB) => {
```

#### 530. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3849` → after: `L4322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4322) · [Before (L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3849)

```diff
-       k: () => kT,
+       j: () => IB,
```

#### 531. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3851` → after: `L4324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4324) · [Before (L3851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3851)

```diff
-       p: () => MT,
+       q: () => NB,
```

#### 532. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3853-L3854` → after: `L4326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4326) · [Before (L3853-L3854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3853-L3854)

```diff
-       t: () => LT,
-       x: () => lT
+       w: () => sB
```

#### 533. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3856-L3857` → after: `L4328-L4329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4328-L4329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4328-L4329) · [Before (L3856-L3857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3856-L3857)

```diff
-     var WT = mT(653),
-       zT = mT(37364);
+     var QB = zB(658),
+       nB = zB(37372);
```

#### 534. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3872` → after: `L4344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4344) · [Before (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3872)

```diff
-       return new zT.e(TT / 255, UT / 255, mT / 255, WT)
+       return new nB.c(BB / 255, jB / 255, zB / 255, QB)
```

#### 535. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3884` → after: `L4356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4356) · [Before (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3884)

```diff
-       if ((0, WT.E)(UT.VM) || (TT.direction1._x = UT.VM[0], TT.direction1._y = UT.VM[1], TT.direction1._z = UT.VM[2]), (0, WT.E)(UT.uM) || (TT.direction2._x = UT.uM[0], TT.direction2._y = UT.uM[1], TT.direction2._z = UT.uM[2]), (0, WT.E)(UT.CM) || (TT.minSize = UT.CM), (0, WT.E)( … [truncated]
+       if ((0, QB.I)(jB.BI) || (BB.direction1._x = jB.BI[0], BB.direction1._y = jB.BI[1], BB.direction1._z = jB.BI[2]), (0, QB.I)(jB.jI) || (BB.direction2._x = jB.jI[0], BB.direction2._y = jB.jI[1], BB.direction2._z = jB.jI[2]), (0, QB.I)(jB.zI) || (BB.minSize = jB.zI), (0, QB.I)( … [truncated]
```

#### 536. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3886-L3887` → after: `L4358-L4359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4358-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4358-L4359) · [Before (L3886-L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3886-L3887)

```diff
-         const WT = UT.SM,
-           zT = null !== (mT = TT.getColorGradients()) && void 0 !== mT ? mT : [];
+         const QB = jB.dI,
+           nB = null !== (zB = BB.getColorGradients()) && void 0 !== zB ? zB : [];
```

#### 537. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3895` → after: `L4367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4367) · [Before (L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3895)

```diff
-       if (!(0, WT.E)(UT.KM)) {
+       if (!(0, QB.I)(jB.nI)) {
```

#### 538. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3897` → after: `L4369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4369) · [Before (L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3897)

```diff
-         UT.KM && !mT ? TT.start() : !UT.KM && mT && TT.stop()
+         jB.nI && !zB ? BB.start() : !jB.nI && zB && BB.stop()
```

#### 539. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3902` → after: `L4374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4374) · [Before (L3902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3902)

```diff
-       const mT = TT.ZL;
+       const zB = BB.qr;
```

#### 540. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3915` → after: `L4387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4387) · [Before (L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3915)

```diff
-   38171: (TT, UT, mT) => {
+   38122: (BB, jB, zB) => {
```

#### 541. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3917` → after: `L4389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4389) · [Before (L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3917)

```diff
-       d: () => LT
+       c: () => rB
```

#### 542. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3919-L3921` → after: `L4391-L4393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4391-L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4391-L4393) · [Before (L3919-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3919-L3921)

```diff
-     var WT = mT(37929),
-       zT = mT(653),
-       MT = mT(375),
+     var QB = zB(37897),
+       nB = zB(658),
+       dB = zB(386),
```

#### 543. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3923-L3926` → after: `L4395-L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4395-L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4395-L4398) · [Before (L3923-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3923-L3926)

```diff
-       nT = mT(37559),
-       HT = mT(3781),
-       kT = mT(38180),
-       jT = mT(2875);
+       NB = zB(37553),
+       uB = zB(3798),
+       UB = zB(38131),
+       aB = zB(2863);
```

#### 544. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3929` → after: `L4401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4401) · [Before (L3929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3929)

```diff
-       return `${TT}|${UT}|${mT}`
+       return `${BB}|${jB}|${zB}`
```

#### 545. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3933` → after: `L4405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4405) · [Before (L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3933)

```diff
-         this.ZM = new Map
+         this.fd = new Map
```

#### 546. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3941-L3942` → after: `L4413-L4414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4413-L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4413-L4414) · [Before (L3941-L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3941-L3942)

```diff
-         if (0 === this.ZM.size) return !1;
-         const WT = this.ZM.get(lT(TT, UT, mT));
+         if (0 === this.fd.size) return !1;
+         const QB = this.fd.get(pB(BB, jB, zB));
```

#### 547. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3949` → after: `L4421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4421) · [Before (L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3949)

```diff
-           of this.ZM.values()) TT(UT[0], UT[1], UT[2])
+           of this.fd.values()) BB(jB[0], jB[1], jB[2])
```

#### 548. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3956` → after: `L4428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4428) · [Before (L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3956)

```diff
-         0 !== this.ZM.size && !1 === (null === (WT = this.ZM.get(lT(TT, UT, mT))) || void 0 === WT ? void 0 : WT.confirmed) && this.remove(TT, UT, mT)
+         0 !== this.fd.size && !1 === (null === (QB = this.fd.get(pB(BB, jB, zB))) || void 0 === QB ? void 0 : QB.confirmed) && this.remove(BB, jB, zB)
```

#### 549. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3960-L3961` → after: `L4432-L4433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4432-L4433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4432-L4433) · [Before (L3960-L3961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3960-L3961)

```diff
-           ZM: UT,
-           Km: mT
+           fd: jB,
+           xz: zB
```

#### 550. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3965-L3968` → after: `L4437-L4440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4437-L4440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4437-L4440) · [Before (L3965-L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3965-L3968)

```diff
-             cM: WT,
-             vM: zT,
-             fM: MT,
-             qM: gT
+             od: QB,
+             Hd: nB,
+             Dd: dB,
+             Fd: IB
```

#### 551. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3973` → after: `L4445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4445) · [Before (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3973)

```diff
-         if (0 === this.ZM.size) return;
+         if (0 === this.fd.size) return;
```

#### 552. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3975-L3976` → after: `L4447-L4448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4447-L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4447-L4448) · [Before (L3975-L3976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3975-L3976)

```diff
-           zT = this.ZM.get(WT);
-         zT && (this.ZM.delete(WT), (0, jT.h)().pY.deleteEntity(zT.eId))
+           nB = this.fd.get(QB);
+         nB && (this.fd.delete(QB), (0, aB.g)().vG.deleteEntity(nB.eId))
```

#### 553. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3979-L3980` → after: `L4451-L4452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4451-L4452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4451-L4452) · [Before (L3979-L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3979-L3980)

```diff
-         if (0 === this.ZM.size) return;
-         const WT = this.ZM.get(lT(TT, UT, mT));
+         if (0 === this.fd.size) return;
+         const QB = this.fd.get(pB(BB, jB, zB));
```

#### 554. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3984-L3986` → after: `L4456-L4458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4456-L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4456-L4458) · [Before (L3984-L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3984-L3986)

```diff
-         if (0 !== this.ZM.size)
-           for (const WT of [...this.ZM.values()]) {
-             const [MT, gT, nT] = (0, zT.J)(WT.pos);
+         if (0 !== this.fd.size)
+           for (const QB of [...this.fd.values()]) {
+             const [dB, IB, NB] = (0, nB.T)(QB.pos);
```

#### 555. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3991-L3992` → after: `L4463-L4464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4463-L4464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4463-L4464) · [Before (L3991-L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3991-L3992)

```diff
-         if (0 !== this.ZM.size)
-           for (const UT of [...this.ZM.values()]) null === UT.disposeAt ? TT > UT.landsAtMs + 500 && (console.warn(`Growing block at ${UT.pos.join(",")} never finished, removing its visual`), this.remove(UT.pos[0], UT.pos[1], UT.pos[2])) : TT >= UT.disposeAt && this.remove(UT.pos … [truncated]
+         if (0 !== this.fd.size)
+           for (const jB of [...this.fd.values()]) null === jB.disposeAt ? BB > jB.landsAtMs + 500 && (console.warn(`Growing block at ${jB.pos.join(",")} never finished, removing its visual`), this.remove(jB.pos[0], jB.pos[1], jB.pos[2])) : BB >= jB.disposeAt && this.remove(jB.pos … [truncated]
```

#### 556. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L3995` → after: `L4467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4467) · [Before (L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L3995)

```diff
-         const HT = (0, jT.h)(),
+         const uB = (0, aB.g)(),
```

#### 557. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4002` → after: `L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4474) · [Before (L4002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4002)

```diff
-           ZT = this.ZM.get(BT);
+           mB = this.fd.get(JB);
```

#### 558. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4005-L4006` → after: `L4477-L4478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4477-L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4477-L4478) · [Before (L4005-L4006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4005-L4006)

```diff
-           const TT = HT.pY.getState(ZT.eId, "growingBlock"),
-             UT = (0, WT.q)(TT, pT, LT);
+           const BB = uB.vG.getState(mB.eId, "growingBlock"),
+             jB = (0, QB.w)(BB, sB, rB);
```

#### 559. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4009-L4010` → after: `L4481-L4482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4481-L4482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4481-L4482) · [Before (L4009-L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4009-L4010)

```diff
-         if (gT().sg(HT.pY.Aq(HT.VV), TT) > 64) return;
-         const cT = jT.j.itemsClient[UT].getGrowingMesh(),
+         if (IB().bI(uB.vG.iG(uB.zV), BB) > 64) return;
+         const yB = aB.i.itemsClient[jB].getGrowingMesh(),
```

#### 560. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4014` → after: `L4486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4486) · [Before (L4014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4014)

```diff
-             gp: cT.gp.clone()
+             pp: yB.pp.clone()
```

#### 561. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4016` → after: `L4488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4488) · [Before (L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4016)

```diff
-         (0, kT.d)(vT, UT);
+         (0, UB.c)(kB, jB);
```

#### 562. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4018-L4020` → after: `L4490-L4492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4490-L4492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4490-L4492) · [Before (L4018-L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4018-L4020)

```diff
-         cT.rotation.set(vT.rotation.x, vT.rotation.y, vT.rotation.z), (0, nT.n)(cT, 0, 0, 0);
-         const qT = HT.pY.add([TT[0], TT[1], TT[2]], 1, 1);
-         HT.pY.YV(qT, HT.pY.names.mesh, {
+         yB.rotation.set(kB.rotation.x, kB.rotation.y, kB.rotation.z), (0, NB.k)(yB, 0, 0, 0);
+         const LB = uB.vG.add([BB[0], BB[1], BB[2]], 1, 1);
+         uB.vG.hY(LB, uB.vG.names.mesh, {
```

#### 563. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4024` → after: `L4496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4496) · [Before (L4024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4024)

```diff
-         const iT = HT.DL.bK(UT),
+         const gB = uB.Gs.HA(jB),
```

#### 564. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4026` → after: `L4498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4498) · [Before (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4026)

```diff
-         HT.pY.YV(qT, "growingBlock", {
+         uB.vG.hY(LB, "growingBlock", {
```

#### 565. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4030` → after: `L4502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4502) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4030)

```diff
-         }), this.ZM.set(BT, {
+         }), this.fd.set(JB, {
```

#### 566. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4032` → after: `L4504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4504) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4032)

```diff
-           Gg: UT,
+           dN: jB,
```

#### 567. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4040` → after: `L4512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4512) · [Before (L4040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4040)

```diff
-         for (const TT of [...this.ZM.values()]) this.remove(TT.pos[0], TT.pos[1], TT.pos[2])
+         for (const BB of [...this.fd.values()]) this.remove(BB.pos[0], BB.pos[1], BB.pos[2])
```

#### 568. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4044` → after: `L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4516) · [Before (L4044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4044)

```diff
-   38304: (TT, UT, mT) => {
+   38247: (BB, jB, zB) => {
```

#### 569. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4046` → after: `L4518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4518) · [Before (L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4046)

```diff
-       d: () => WU
+       c: () => Qj
```

#### 570. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4048-L4061` → after: `L4520-L4533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4520-L4533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4520-L4533) · [Before (L4048-L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4048-L4061)

```diff
-     var WT = mT(208),
-       zT = mT(1336),
-       MT = mT(4328),
-       gT = mT(38372),
-       nT = mT(649),
-       HT = mT(366),
-       kT = mT(9330),
-       jT = mT(38357),
-       lT = mT(9360),
-       LT = mT(38292),
-       pT = mT(37503),
-       BT = mT(38310),
-       ZT = mT(2875),
-       cT = mT(375),
+     var QB = zB(214),
+       nB = zB(1270),
+       dB = zB(4334),
+       IB = zB(38307),
+       NB = zB(652),
+       uB = zB(376),
+       UB = zB(9266),
+       aB = zB(38298),
+       pB = zB(9297),
+       rB = zB(38235),
+       sB = zB(37504),
+       JB = zB(38256),
+       mB = zB(2863),
+       yB = zB(386),
```

#### 571. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4063-L4066` → after: `L4535-L4538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4535-L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4535-L4538) · [Before (L4063-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4063-L4066)

```diff
-       fT = mT(3781),
-       qT = mT(3841),
-       iT = mT(36851),
-       bT = mT(36855),
+       GB = zB(3798),
+       LB = zB(3849),
+       gB = zB(36828),
+       tB = zB(36830),
```

#### 572. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4068-L4069` → after: `L4540-L4541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4540-L4541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4540-L4541) · [Before (L4068-L4069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4068-L4069)

```diff
-       eT = mT(38374),
-       YT = mT(37125);
+       MB = zB(38310),
+       EB = zB(37109);
```

#### 573. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4071` → after: `L4543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4543) · [Before (L4071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4071)

```diff
-         let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YT.c;
+         let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EB.e;
```

#### 574. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4073` → after: `L4545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4545) · [Before (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4073)

```diff
-           MT = (0, HT.Nb)(mT),
+           dB = (0, uB.Bb)(zB),
```

#### 575. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4080` → after: `L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4552) · [Before (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4080)

```diff
-         const LT = kT.g[TT].id,
+         const rB = UB.i[BB].id,
```

#### 576. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4104` → after: `L4576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4576) · [Before (L4104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4104)

```diff
-         let MT = (0, HT.Nb)(mT);
+         let dB = (0, uB.Bb)(zB);
```

#### 577. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4106` → after: `L4578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4578) · [Before (L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4106)

```diff
-         const gT = (0, HT.Wb)(MT);
+         const IB = (0, uB.Fb)(dB);
```

#### 578. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4115` → after: `L4587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4587) · [Before (L4115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4115)

```diff
-         const lT = kT.g[TT].id,
+         const pB = UB.i[BB].id,
```

#### 579. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4117` → after: `L4589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4589) · [Before (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4117)

```diff
-           pT = kT.g[`Maple Ladder${LT}`].id,
+           sB = UB.i[`Maple Ladder${rB}`].id,
```

#### 580. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4142` → after: `L4614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4614) · [Before (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4142)

```diff
-               MT = kT.g[TT].id;
+               dB = UB.i[BB].id;
```

#### 581. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4163-L4164` → after: `L4635-L4636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4635-L4636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4635-L4636) · [Before (L4163-L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4163-L4164)

```diff
-         ...HT._c.reduce(((TT, UT) => (TT[`${UT} Popup Tower`] = {
-           block: `${UT} Wool`,
+         ...uB.Kc.reduce(((BB, jB) => (BB[`${jB} Popup Tower`] = {
+           block: `${jB} Wool`,
```

#### 582. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4179` → after: `L4651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4651) · [Before (L4179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4179)

```diff
-     var aT = mT(38327);
+     var DB = zB(38274);
```

#### 583. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4182` → after: `L4654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4654) · [Before (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4182)

```diff
-         vT().copy(yT, TT.Tc), yT[1] = 0, vT().set(TT.Vr, 0, 0, 0), vT().set(TT.Kr, 0, 0, 0), vT().copy(TT.Tc, yT)
+         kB().copy(FB, BB.Hy), FB[1] = 0, kB().set(BB.eZ, 0, 0, 0), kB().set(BB.wZ, 0, 0, 0), kB().copy(BB.Hy, FB)
```

#### 584. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4186` → after: `L4658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4658) · [Before (L4186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4186)

```diff
-         const UT = TT.pY.rK(TT.VV);
+         const jB = BB.vG.pT(BB.zV);
```

#### 585. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4191` → after: `L4663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4663) · [Before (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4191)

```diff
-         const mT = TT.pY.rK(TT.VV);
+         const zB = BB.vG.pT(BB.zV);
```

#### 586. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4193` → after: `L4665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4665) · [Before (L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4193)

```diff
-         const WT = null !== (UT = TT.STT) && void 0 !== UT ? UT : TT.camera.qD();
+         const QB = null !== (jB = BB.VBB) && void 0 !== jB ? jB : BB.camera.nC();
```

#### 587. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4204-L4207` → after: `L4676-L4679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4676-L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4676-L4679) · [Before (L4204-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4204-L4207)

```diff
-             const MT = (0, ZT.d)(),
-               gT = WT.pY.Aq(WT.VV);
-             if (!MT.posSatisfiesModifyConstraints(WT.VV, ...gT)) return !1;
-             const nT = null !== (zT = WT.STT) && void 0 !== zT ? zT : WT.camera.qD(),
+             const dB = (0, mB.c)(),
+               IB = QB.vG.iG(QB.zV);
+             if (!dB.posSatisfiesModifyConstraints(QB.zV, ...IB)) return !1;
+             const NB = null !== (nB = QB.VBB) && void 0 !== nB ? nB : QB.camera.nC(),
```

#### 588. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4210` → after: `L4682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4682) · [Before (L4210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4210)

```diff
-             const jT = MT.getItemStat(WT.VV, TT, "bridgeLength"),
+             const aB = dB.getItemStat(QB.zV, BB, "bridgeLength"),
```

#### 589. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4216-L4217` → after: `L4688-L4689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4688-L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4688-L4689) · [Before (L4216-L4217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4216-L4217)

```diff
-               of lT) MT.EQ(TT[0], TT[1], TT[2], kT.g[UT].id);
-             const LT = MT.aUT(WT.VV).getSelectedSlotIndex(),
+               of pB) dB.eD(BB[0], BB[1], BB[2], UB.i[jB].id);
+             const rB = dB.yjB(QB.zV).getSelectedSlotIndex(),
```

#### 590. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4219-L4223` → after: `L4691-L4695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4691-L4695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4691-L4695) · [Before (L4219-L4223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4219-L4223)

```diff
-             return (0, fT.sendColyMessage)(qT.Ng, {
-               ZH: HT,
-               cH: UT,
-               Tg: nT,
-               Pg: pT
+             return (0, GB.sendColyMessage)(LB.zh, {
+               tu: uB,
+               Su: jB,
+               JI: NB,
+               RI: sB
```

#### 591. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4229-L4238` → after: `L4701-L4710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4701-L4710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4701-L4710) · [Before (L4229-L4238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4229-L4238)

```diff
-     var QT = mT(38325),
-       sT = mT(38352),
-       FT = mT(38316),
-       PT = mT(37030),
-       VT = mT(9416),
-       uT = mT(37813),
-       CT = mT(1268),
-       rT = mT(108),
-       KT = mT(38331);
-     const ST = atob("MGJ1ejMxOXJrdGE0"),
+     var hB = zB(38266),
+       XB = zB(38293),
+       ZB = zB(38264),
+       AB = zB(36998),
+       TB = zB(9371),
+       PB = zB(37784),
+       WB = zB(1218),
+       eB = zB(121),
+       lB = zB(38278);
+     const wB = atob("enZyY3dqN3I1cmk="),
```

#### 592. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4241-L4247` → after: `L4713-L4719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4713-L4719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4713-L4719) · [Before (L4241-L4247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4241-L4247)

```diff
-       ET = (0, kT.j)("Water"),
-       hT = (0, kT.j)("Lava"),
-       DT = (0, kT.j)("Air"),
-       oT = (0, kT.j)("Fat Cactus"),
-       AT = (0, kT.j)("Fat Cactus|Growing"),
-       RT = (0, kT.j)("Dry Fat Cactus"),
-       TU = (0, kT.j)("Obsidian"),
+       CB = (0, UB.k)("Water"),
+       cB = (0, UB.k)("Lava"),
+       bB = (0, UB.k)("Air"),
+       vB = (0, UB.k)("Fat Cactus"),
+       RB = (0, UB.k)("Fat Cactus|Growing"),
+       OB = (0, UB.k)("Dry Fat Cactus"),
+       Bj = (0, UB.k)("Obsidian"),
```

#### 593. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4278` → after: `L4750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4750) · [Before (L4278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4278)

```diff
-         blendMode: MT.e.OneOne
+         blendMode: dB.d.OneOne
```

#### 594. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4282-L4284` → after: `L4754-L4756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4754-L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4754-L4756) · [Before (L4282-L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4282-L4284)

```diff
-         this.heldItemCls = TT, this.hitEId = UT, this.distanceTravelled = mT, this.AM = WT, this.targetBlock = zT, this.AY = MT, this.Rl = void 0, this.bloxd = void 0, this.inven = void 0, this.selectedSlot = void 0, this.tryPutDownFluid = (TT, UT, mT) => {
-           if (this.bloxd.uq(...TT) === UT && this.bloxd.canUseBucketAtPos(this.Rl.VV, ...TT)) {
-             if (!kT.g[mT].RL && !this.bloxd.playerCanChangePos(this.Rl.VV, ...TT)) return {
+         this.heldItemCls = BB, this.hitEId = jB, this.distanceTravelled = zB, this.rI = QB, this.targetBlock = nB, this.kS = dB, this.ur = void 0, this.bloxd = void 0, this.inven = void 0, this.selectedSlot = void 0, this.tryPutDownFluid = (BB, jB, zB) => {
+           if (this.bloxd.JG(...BB) === jB && this.bloxd.canUseBucketAtPos(this.ur.zV, ...BB)) {
+             if (!UB.i[zB].Ss && !this.bloxd.playerCanChangePos(this.ur.zV, ...BB)) return {
```

#### 595. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4288-L4293` → after: `L4760-L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4760-L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4760-L4765) · [Before (L4288-L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4288-L4293)

```diff
-             (0, ZT.d)().EQ(...TT, mT);
-             const UT = this.bloxd.client.inventoryPrediction.predict(this.Rl.kY.creative ? null : aT.b.replace(this.selectedSlot, this.AY.name, "Bucket", {}));
-             return (0, fT.sendColyMessage)(qT.Qh, {
-               WH: TT,
-               Pg: UT
-             }), iT.c.play((0, bT.d)("bucketEmpty"), 1), {
+             (0, mB.c)().eD(...BB, zB);
+             const jB = this.bloxd.client.inventoryPrediction.predict(this.ur.wG.creative ? null : DB.b.replace(this.selectedSlot, this.kS.name, "Bucket", {}));
+             return (0, GB.sendColyMessage)(LB.Wi, {
+               uu: BB,
+               RI: jB
+             }), gB.e.play((0, tB.f)("bucketEmpty"), 1), {
```

#### 596. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4302` → after: `L4774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4774) · [Before (L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4302)

```diff
-         }, this.Rl = (0, ZT.h)(), this.bloxd = (0, ZT.d)(), this.inven = this.Rl.pY.aUT(this.Rl.VV), this.selectedSlot = this.inven.getSelectedSlotIndex()
+         }, this.ur = (0, mB.g)(), this.bloxd = (0, mB.c)(), this.inven = this.ur.vG.yjB(this.ur.zV), this.selectedSlot = this.inven.getSelectedSlotIndex()
```

#### 597. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4330` → after: `L4802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4802) · [Before (L4330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4330)

```diff
-         return this.sendAltAction(qT.Lf), {
+         return this.sendAltAction(LB.sg), {
```

#### 598. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4337-L4339` → after: `L4809-L4811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4809-L4811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4809-L4811) · [Before (L4337-L4339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4337-L4339)

```diff
-         this.Rl.KTT && (TT = [...this.Rl.KTT], this.Rl.jD(TT, TT));
-         const UT = (TT ? this.Rl.camera.hN : 0) + this.bloxd.getBlockReach(this.Rl.VV);
-         return this.Rl.pickBlock(TT, this.Rl.STT, UT, (TT => 0 !== TT))
+         this.ur.YBB && (BB = [...this.ur.YBB], this.ur.WK(BB, BB));
+         const jB = (BB ? this.ur.camera.Xw : 0) + this.bloxd.getBlockReach(this.ur.zV);
+         return this.ur.pickBlock(BB, this.ur.VBB, jB, (BB => 0 !== BB))
```

#### 599. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4342-L4343` → after: `L4814-L4815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4814-L4815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4814-L4815) · [Before (L4342-L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4342-L4343)

```diff
-         if (this.hitEId || !this.AY) return;
-         const TT = sT.o[this.AY.name];
+         if (this.hitEId || !this.kS) return;
+         const BB = XB.m[this.kS.name];
```

#### 600. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4346-L4350` → after: `L4818-L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4818-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4818-L4822) · [Before (L4346-L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4346-L4350)

```diff
-         if (!UT || !(0, sT.n)(TT, UT.oR)) return;
-         const mT = this.bloxd.client.inventoryPrediction.predict(this.Rl.kY.creative ? null : aT.b.replace(this.selectedSlot, this.AY.name, "Air"));
-         return (0, fT.sendColyMessage)(qT.Kh, {
-           Qj: UT.position,
-           Pg: mT
+         if (!jB || !(0, XB.k)(BB, jB.JR)) return;
+         const zB = this.bloxd.client.inventoryPrediction.predict(this.ur.wG.creative ? null : DB.b.replace(this.selectedSlot, this.kS.name, "Air"));
+         return (0, GB.sendColyMessage)(LB.Pi, {
+           Za: jB.position,
+           RI: zB
```

#### 601. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4358` → after: `L4830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4830) · [Before (L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4358)

```diff
-         if (this.hitEId || !GT.includes(null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name)) return;
+         if (this.hitEId || !xB.includes(null === (BB = this.kS) || void 0 === BB ? void 0 : BB.name)) return;
```

#### 602. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4361` → after: `L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4833) · [Before (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4361)

```diff
-           if (mT.oR === ET || mT.oR === hT) {
+           if (zB.JR === CB || zB.JR === cB) {
```

#### 603. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4363-L4372` → after: `L4835-L4844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4835-L4844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4835-L4844) · [Before (L4363-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4363-L4372)

```diff
-             if (mT.oR === hT && "Water Bucket" === (null === (WT = this.AY) || void 0 === WT ? void 0 : WT.name)) return this.tryPutDownFluid(mT.position, hT, TU);
-             if ("Water Bucket" === this.AY.name) return this.tryPutDownFluid(mT.NZ, DT, ET);
-             if ("Lava Bucket" === this.AY.name) return this.tryPutDownFluid(mT.NZ, DT, hT)
-           }
-           if (UU.includes(mT.oR)) {
-             if ("Bucket" !== this.AY.name && ("Empty Bottle" !== this.AY.name || mT.oR !== ET)) return;
-             const TT = mT.oR === ET || mT.oR === hT,
-               UT = (0, HT.Fe)("Bucket" === this.AY.name, TT, this.bloxd.playerCanChangePos(this.Rl.VV, ...mT.position), this.bloxd.getClientPredictedOption(this.Rl.VV, "preserveProtectedFluidSources"));
-             if (!UT && !this.bloxd.canUseBucketAtPos(this.Rl.VV, ...mT.position)) return;
-             let WT = mT.oR,
+             if (zB.JR === cB && "Water Bucket" === (null === (QB = this.kS) || void 0 === QB ? void 0 : QB.name)) return this.tryPutDownFluid(zB.position, cB, Bj);
+             if ("Water Bucket" === this.kS.name) return this.tryPutDownFluid(zB.By, bB, CB);
+             if ("Lava Bucket" === this.kS.name) return this.tryPutDownFluid(zB.By, bB, cB)
+           }
+           if (jj.includes(zB.JR)) {
+             if ("Bucket" !== this.kS.name && ("Empty Bottle" !== this.kS.name || zB.JR !== CB)) return;
+             const BB = zB.JR === CB || zB.JR === cB,
+               jB = (0, uB.we)("Bucket" === this.kS.name, BB, this.bloxd.playerCanChangePos(this.ur.zV, ...zB.position), this.bloxd.getClientPredictedOption(this.ur.zV, "preserveProtectedFluidSources"));
+             if (!jB && !this.bloxd.canUseBucketAtPos(this.ur.zV, ...zB.position)) return;
+             let QB = zB.JR,
```

#### 604. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4380-L4385` → after: `L4852-L4857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4852-L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4852-L4857) · [Before (L4380-L4385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4380-L4385)

```diff
-             } = (0, HT.Xb)(this.Rl.kY.creative, this.AY.name, gT);
-             if ("Bucket" === this.AY.name) {
-               switch (mT.oR) {
-                 case ET:
-                 case hT:
-                   WT = UT ? mT.oR : DT;
+             } = (0, uB.Jb)(this.ur.wG.creative, this.kS.name, IB);
+             if ("Bucket" === this.kS.name) {
+               switch (zB.JR) {
+                 case CB:
+                 case cB:
+                   QB = jB ? zB.JR : bB;
```

#### 605. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4387-L4388` → after: `L4859-L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4859-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4859-L4860) · [Before (L4387-L4388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4387-L4388)

```diff
-                 case oT:
-                 case AT:
+                 case vB:
+                 case RB:
```

#### 606. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4391` → after: `L4863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4863) · [Before (L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4391)

```diff
-               MT = mT.oR !== hT ? "Water Bucket" : "Lava Bucket"
+               dB = zB.JR !== cB ? "Water Bucket" : "Lava Bucket"
```

#### 607. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4400-L4407` → after: `L4872-L4879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4872-L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4872-L4879) · [Before (L4400-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4400-L4407)

```diff
-             WT !== mT.oR && this.bloxd.EQ(...mT.position, WT);
-             const jT = this.bloxd.client.inventoryPrediction.predict(nT ? aT.b.fillContainer(this.selectedSlot, this.AY.name, MT, zT) : null);
-             return (0, fT.sendColyMessage)(qT.yf, {
-               qn: mT.position,
-               bn: WT,
-               en: zT,
-               Pg: jT
-             }), iT.c.play((0, bT.d)("bucketFill"), 1), {
+             QB !== zB.JR && this.bloxd.eD(...zB.position, QB);
+             const aB = this.bloxd.client.inventoryPrediction.predict(NB ? DB.b.fillContainer(this.selectedSlot, this.kS.name, dB, nB) : null);
+             return (0, GB.sendColyMessage)(LB.ig, {
+               FN: zB.position,
+               YN: QB,
+               VN: nB,
+               RI: aB
+             }), gB.e.play((0, tB.f)("bucketFill"), 1), {
```

#### 608. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4412` → after: `L4884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4884) · [Before (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4412)

```diff
-           if (NT.includes(null === (UT = this.AY) || void 0 === UT ? void 0 : UT.name)) {
+           if (KB.includes(null === (jB = this.kS) || void 0 === jB ? void 0 : jB.name)) {
```

#### 609. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4414` → after: `L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4886) · [Before (L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4414)

```diff
-             let TT = null === (zT = this.Rl.xTT) || void 0 === zT ? void 0 : zT.NZ,
+             let BB = null === (nB = this.ur.mBB) || void 0 === nB ? void 0 : nB.By,
```

#### 610. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4416` → after: `L4888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4888) · [Before (L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4416)

```diff
-             if (this.heldItemCls.checkTargetedBlockCanBePlacedOver() && (TT = this.AM, UT = this.targetBlock), TT) return this.tryPutDownFluid(TT, UT, "Water Bucket" === this.AY.name ? ET : hT)
+             if (this.heldItemCls.checkTargetedBlockCanBePlacedOver() && (BB = this.rI, jB = this.targetBlock), BB) return this.tryPutDownFluid(BB, jB, "Water Bucket" === this.kS.name ? CB : cB)
```

#### 611. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4421-L4425` → after: `L4893-L4897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4893-L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4893-L4897) · [Before (L4421-L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4421-L4425)

```diff
-         if (!this.AY) return;
-         if ("Bowl" !== this.AY.name && (!this.AY.name.includes("Bowl of Cranberries") || "Bowl of Cranberries" === this.AY.name)) return;
-         if (this.targetBlock !== (0, kT.j)("Cranberries_stage2")) return;
-         if (!this.bloxd.playerCanChangePos(this.Rl.VV, ...this.AM)) return;
-         const TT = (0, kT.j)("Cranberries_stage1");
+         if (!this.kS) return;
+         if ("Bowl" !== this.kS.name && (!this.kS.name.includes("Bowl of Cranberries") || "Bowl of Cranberries" === this.kS.name)) return;
+         if (this.targetBlock !== (0, UB.k)("Cranberries_stage2")) return;
+         if (!this.bloxd.playerCanChangePos(this.ur.zV, ...this.rI)) return;
+         const BB = (0, UB.k)("Cranberries_stage1");
```

#### 612. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4427-L4435` → after: `L4899-L4907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4899-L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4899-L4907) · [Before (L4427-L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4427-L4435)

```diff
-         if ("Bowl" === this.AY.name && this.AY.amount > 1 && (UT = this.inven.getFreeInventoryPosition(), null === UT)) return;
-         this.bloxd.EQ(...this.AM, TT);
-         const mT = this.bloxd.getBowlItemName("Bowl of Cranberries", this.bloxd.getNumItemsInBowl(this.AY.name) + 1),
-           WT = this.bloxd.client.inventoryPrediction.predict(aT.b.fillContainer(this.selectedSlot, this.AY.name, mT, UT));
-         return (0, fT.sendColyMessage)(qT.Sg, {
-           fj: this.AM,
-           bn: TT,
-           en: UT,
-           Pg: WT
+         if ("Bowl" === this.kS.name && this.kS.amount > 1 && (jB = this.inven.getFreeInventoryPosition(), null === jB)) return;
+         this.bloxd.eD(...this.rI, BB);
+         const zB = this.bloxd.getBowlItemName("Bowl of Cranberries", this.bloxd.getNumItemsInBowl(this.kS.name) + 1),
+           QB = this.bloxd.client.inventoryPrediction.predict(DB.b.fillContainer(this.selectedSlot, this.kS.name, zB, jB));
+         return (0, GB.sendColyMessage)(LB.Fh, {
+           ga: this.rI,
+           YN: BB,
+           VN: jB,
+           RI: QB
```

#### 613. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4444-L4445` → after: `L4916-L4917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4916-L4917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4916-L4917) · [Before (L4444-L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4444-L4445)

```diff
-         const mT = null === (TT = this.Rl.pY.GUT(this.hitEId)) || void 0 === TT ? void 0 : TT.lifeformType,
-           WT = (0, BT.y)(null === (UT = this.AY) || void 0 === UT ? void 0 : UT.name, mT, this.distanceTravelled);
+         const zB = null === (BB = this.ur.vG.HjB(this.hitEId)) || void 0 === BB ? void 0 : BB.lifeformType,
+           QB = (0, JB.C)(null === (jB = this.kS) || void 0 === jB ? void 0 : jB.name, zB, this.distanceTravelled);
```

#### 614. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4448` → after: `L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4920) · [Before (L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4448)

```diff
-           if (this.AY.amount > 1 && (TT = this.inven.getFreeInventoryPosition(), null === TT)) return {
+           if (this.kS.amount > 1 && (BB = this.inven.getFreeInventoryPosition(), null === BB)) return {
```

#### 615. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4453-L4456` → after: `L4925-L4928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4925-L4928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4925-L4928) · [Before (L4453-L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4453-L4456)

```diff
-           return (0, fT.sendColyMessage)(qT.Rg, {
-             RM: this.hitEId,
-             en: TT,
-             Pg: UT
+           return (0, GB.sendColyMessage)(LB.Dh, {
+             sI: this.hitEId,
+             VN: BB,
+             RI: jB
```

#### 616. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4462-L4465` → after: `L4934-L4937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4934-L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4934-L4937) · [Before (L4462-L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4462-L4465)

```diff
-         return "Shear" === WT ? ((0, fT.sendColyMessage)(qT.Rg, {
-           RM: this.hitEId,
-           en: null,
-           Pg: this.bloxd.client.inventoryPrediction.predict(null)
+         return "Shear" === QB ? ((0, GB.sendColyMessage)(LB.Dh, {
+           sI: this.hitEId,
+           VN: null,
+           RI: this.bloxd.client.inventoryPrediction.predict(null)
```

#### 617. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4474-L4477` → after: `L4946-L4949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4946-L4949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4946-L4949) · [Before (L4474-L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4474-L4477)

```diff
-         const mT = null === (TT = this.Rl.pY.GUT(this.hitEId)) || void 0 === TT ? void 0 : TT.lifeformType;
-         if (!nT.m.includes(mT)) return;
-         this.sendAltAction(qT.Jf), this.sendAltAction(qT.Lf);
-         const WT = (0, BT.i)(mT, null === (UT = this.AY) || void 0 === UT ? void 0 : UT.name);
+         const zB = null === (BB = this.ur.vG.HjB(this.hitEId)) || void 0 === BB ? void 0 : BB.lifeformType;
+         if (!NB.p.includes(zB)) return;
+         this.sendAltAction(LB.pg), this.sendAltAction(LB.sg);
+         const QB = (0, JB.m)(zB, null === (jB = this.kS) || void 0 === jB ? void 0 : jB.name);
```

#### 618. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4485` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4957) · [Before (L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4485)

```diff
-         if ("Name Tag" === (null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name)) {
+         if ("Name Tag" === (null === (BB = this.kS) || void 0 === BB ? void 0 : BB.name)) {
```

#### 619. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4488-L4489` → after: `L4960-L4961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4960-L4961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4960-L4961) · [Before (L4488-L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4488-L4489)

```diff
-             const TT = null === (mT = this.Rl.pY.GUT(this.hitEId)) || void 0 === mT ? void 0 : mT.lifeformType;
-             if (nT.m.includes(TT)) return
+             const BB = null === (zB = this.ur.vG.HjB(this.hitEId)) || void 0 === zB ? void 0 : zB.lifeformType;
+             if (NB.p.includes(BB)) return
```

#### 620. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4491` → after: `L4963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4963) · [Before (L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4491)

```diff
-           return OT.j.EZ("EditNameTag", null !== (UT = this.AY.attributes.customAttributes.text) && void 0 !== UT ? UT : ""), {
+           return SB.n.Ly("EditNameTag", null !== (jB = this.kS.attributes.customAttributes.text) && void 0 !== jB ? jB : ""), {
```

#### 621. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4499-L4502` → after: `L4971-L4974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4971-L4974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4971-L4974) · [Before (L4499-L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4499-L4502)

```diff
-         if ("Book" === (null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name)) return OT.j.EZ("EditBook", {
-           pages: (0, zT.N)(this.AY.attributes.customAttributes.pages),
-           title: null !== (UT = this.AY.attributes.customDisplayName) && void 0 !== UT ? UT : "Title",
-           isPublished: !!this.AY.attributes.customDescription
+         if ("Book" === (null === (BB = this.kS) || void 0 === BB ? void 0 : BB.name)) return SB.n.Ly("EditBook", {
+           pages: (0, nB.T)(this.kS.attributes.customAttributes.pages),
+           title: null !== (jB = this.kS.attributes.customDisplayName) && void 0 !== jB ? jB : "Title",
+           isPublished: !!this.kS.attributes.customDescription
```

#### 622. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4510` → after: `L4982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4982) · [Before (L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4510)

```diff
-         const UT = (0, HT.Mb)(null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name);
+         const jB = (0, uB.zb)(null === (BB = this.kS) || void 0 === BB ? void 0 : BB.name);
```

#### 623. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4512-L4514` → after: `L4984-L4986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4984-L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4984-L4986) · [Before (L4512-L4514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4512-L4514)

```diff
-         const mT = (0, HT.Jb)(UT),
-           WT = this.Rl.pY.yUT(this.Rl.VV);
-         return KT.b.swapPosClient(WT, mT, this.selectedSlot), {
+         const zB = (0, uB.vb)(jB),
+           QB = this.ur.vG.kjB(this.ur.zV);
+         return lB.d.swapPosClient(QB, zB, this.selectedSlot), {
```

#### 624. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4523-L4525` → after: `L4995-L4997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4995-L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L4995-L4997) · [Before (L4523-L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4523-L4525)

```diff
-           WT = this.bloxd.getItemStat(this.Rl.VV, null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name, "harvests");
-         if (this.bloxd.playerCanChangePos(this.Rl.VV, ...this.AM)) {
-           if ("wood" === WT && HT.he.includes(mT)) return this.sendAltAction(qT.Gf), (0, ZT.d)().EQ(...this.AM, (0, kT.j)(`Barkless ${mT}`)), {
+           QB = this.bloxd.getItemStat(this.ur.zV, null === (BB = this.kS) || void 0 === BB ? void 0 : BB.name, "harvests");
+         if (this.bloxd.playerCanChangePos(this.ur.zV, ...this.rI)) {
+           if ("wood" === QB && uB.ae.includes(zB)) return this.sendAltAction(LB.ng), (0, mB.c)().eD(...this.rI, (0, UB.k)(`Barkless ${zB}`)), {
```

#### 625. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4529-L4531` → after: `L5001-L5003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5001-L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5001-L5003) · [Before (L4529-L4531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4529-L4531)

```diff
-           if ("Shears" === (null === (UT = this.AY) || void 0 === UT ? void 0 : UT.name)) {
-             const TT = HT.Be.get(mT);
-             if (void 0 !== TT) return this.sendAltAction(qT.Gf), (0, ZT.d)().EQ(...this.AM, (0, kT.j)(TT)), {
+           if ("Shears" === (null === (jB = this.kS) || void 0 === jB ? void 0 : jB.name)) {
+             const BB = uB.te.get(zB);
+             if (void 0 !== BB) return this.sendAltAction(LB.ng), (0, mB.c)().eD(...this.rI, (0, UB.k)(BB)), {
```

#### 626. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4536` → after: `L5008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5008) · [Before (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4536)

```diff
-           return "cuttable" === WT && HT.Gc.includes((0, kT.e)(this.targetBlock)) ? (this.sendAltAction(qT.Gf), (0, ZT.d)().EQ(...this.AM, (0, kT.j)("Tilled Soil")), {
+           return "cuttable" === QB && uB.sc.includes((0, UB.g)(this.targetBlock)) ? (this.sendAltAction(LB.ng), (0, mB.c)().eD(...this.rI, (0, UB.k)("Tilled Soil")), {
```

#### 627. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4544-L4545` → after: `L5016-L5017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5016-L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5016-L5017) · [Before (L4544-L4545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4544-L4545)

```diff
-         if (!tT.includes(null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name)) return;
-         return (null === (UT = null === (mT = IT[this.AY.name]) || void 0 === mT ? void 0 : mT.call(IT, this.Rl)) || void 0 === UT || UT) && this.sendConsumableAltAction(this.Rl.kY.creative ? null : aT.b.remove(this.selectedSlot, 1, this.AY.name)), {
+         if (!HB.includes(null === (BB = this.kS) || void 0 === BB ? void 0 : BB.name)) return;
+         return (null === (jB = null === (zB = VB[this.kS.name]) || void 0 === zB ? void 0 : zB.call(VB, this.ur)) || void 0 === jB || jB) && this.sendConsumableAltAction(this.ur.wG.creative ? null : DB.b.remove(this.selectedSlot, 1, this.kS.name)), {
```

#### 628. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4553-L4554` → after: `L5025-L5026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5025-L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5025-L5026) · [Before (L4553-L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4553-L4554)

```diff
-         const UT = null === (TT = this.Rl.pY.bUT(this.hitEId)) || void 0 === TT ? void 0 : TT.mesh;
-         return (void 0 !== (null === UT || void 0 === UT ? void 0 : UT.name) && sT.x.some((TT => UT.name.includes(TT))) || this.isThinVehicle(this.hitEId)) && this.distanceTravelled < 3 ? (this.sendAltAction(qT.Jf), {
+         const jB = null === (BB = this.ur.vG.ujB(this.hitEId)) || void 0 === BB ? void 0 : BB.mesh;
+         return (void 0 !== (null === jB || void 0 === jB ? void 0 : jB.name) && XB.t.some((BB => jB.name.includes(BB))) || this.isThinVehicle(this.hitEId)) && this.distanceTravelled < 3 ? (this.sendAltAction(LB.pg), {
```

#### 629. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4561-L4562` → after: `L5033-L5034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5033-L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5033-L5034) · [Before (L4561-L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4561-L4562)

```diff
-         if ("number" !== typeof(null === (UT = this.Rl.pY.bUT(TT)) || void 0 === UT ? void 0 : UT.zV)) return !1;
-         const mT = (0, ZT.d)().client.getColyseusEntity(TT),
+         if ("number" !== typeof(null === (jB = this.ur.vG.ujB(BB)) || void 0 === jB ? void 0 : jB.mY)) return !1;
+         const zB = (0, mB.c)().client.getColyseusEntity(BB),
```

#### 630. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4564` → after: `L5036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5036) · [Before (L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4564)

```diff
-         return "BloxdBlock" === (null === WT || void 0 === WT ? void 0 : WT.type) && sT.x.includes(WT.opts.blockName)
+         return "BloxdBlock" === (null === QB || void 0 === QB ? void 0 : QB.type) && XB.t.includes(QB.opts.blockName)
```

#### 631. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4567` → after: `L5039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5039) · [Before (L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4567)

```diff
-         if ((0, pT.g)(this.hitEId)) return this.sendAltAction(qT.Lf), {
+         if ((0, sB.g)(this.hitEId)) return this.sendAltAction(LB.sg), {
```

#### 632. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4576-L4579` → after: `L5048-L5051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5048-L5051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5048-L5051) · [Before (L4576-L4579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4576-L4579)

```diff
-         const UT = this.Rl.pY.rK(this.Rl.VV),
-           mT = this.Rl.pY.gUT(this.Rl.VV);
-         if ((0, BT.g)(mT, null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name)) {
-           if ((0, BT.e)(mT) > 0) return {
+         const jB = this.ur.vG.pT(this.ur.zV),
+           zB = this.ur.vG.CBB(this.ur.zV);
+         if ((0, JB.l)(zB, null === (BB = this.kS) || void 0 === BB ? void 0 : BB.name)) {
+           if ((0, JB.h)(zB) > 0) return {
```

#### 633. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4583` → after: `L5055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5055) · [Before (L4583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4583)

```diff
-           const TT = (0, QT.c)(this.inven);
+           const BB = (0, hB.e)(this.inven);
```

#### 634. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4586-L4588` → after: `L5058-L5060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5058-L5060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5058-L5060) · [Before (L4586-L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4586-L4588)

```diff
-             const zT = this.bloxd.client.inventoryPrediction.predict(this.bloxd.getClientPredictedOption(this.Rl.VV, "creative") ? null : aT.b.remove(TT, 1, this.inven.getItemAtIdx(TT).name)),
-               MT = null !== (WT = this.Rl.STT) && void 0 !== WT ? WT : this.Rl.camera.qD();
-             this.bloxd.useGliderFuel(this.Rl.VV, MT, HT.i.getFirecrackerBoostMultiplier(this.AY)), this.bloxd.startGliderFuelCooldown(this.Rl.VV, mT, HT.i.getFirecrackerCooldownMultiplier(this.AY));
+             const nB = this.bloxd.client.inventoryPrediction.predict(this.bloxd.getClientPredictedOption(this.ur.zV, "creative") ? null : DB.b.remove(BB, 1, this.inven.getItemAtIdx(BB).name)),
+               dB = null !== (QB = this.ur.VBB) && void 0 !== QB ? QB : this.ur.camera.nC();
+             this.bloxd.useGliderFuel(this.ur.zV, dB, uB.c.getFirecrackerBoostMultiplier(this.kS)), this.bloxd.startGliderFuelCooldown(this.ur.zV, zB, uB.c.getFirecrackerCooldownMultiplier(this.kS));
```

#### 635. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4590-L4595` → after: `L5062-L5067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5062-L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5062-L5067) · [Before (L4590-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4590-L4595)

```diff
-               nT = this.bloxd.getLifeformEyePos(this.Rl.VV, !0);
-             nT[1] += 2, vT().pg(gT, nT, MT, 6), (0, fT.sendColyMessage)(qT.xj, {
-               ij: gT,
-               bj: TT,
-               Tg: MT,
-               Pg: zT
+               NB = this.bloxd.getLifeformEyePos(this.ur.zV, !0);
+             NB[1] += 2, kB().gd(IB, NB, dB, 6), (0, GB.sendColyMessage)(LB.rk, {
+               Ma: IB,
+               Ea: BB,
+               JI: dB,
+               RI: nB
```

#### 636. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4597` → after: `L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5069) · [Before (L4597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4597)

```diff
-             const kT = 8 * vT().len(UT.Tc);
+             const UB = 8 * kB().len(jB.Hy);
```

#### 637. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4601` → after: `L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5073) · [Before (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4601)

```diff
-             this.bloxd.client.meshCreator.newSingleBurstParticleSystem(mU), iT.c.play((0, bT.d)("bow"), 1).rate(.6 + .2 * Math.random())
+             this.bloxd.client.meshCreator.newSingleBurstParticleSystem(zj), gB.e.play((0, tB.f)("bow"), 1).rate(.6 + .2 * Math.random())
```

#### 638. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4613` → after: `L5085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5085) · [Before (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4613)

```diff
-           mT = this.bloxd.playerCanChangePos(this.Rl.VV, ...this.AM);
+           zB = this.bloxd.playerCanChangePos(this.ur.zV, ...this.rI);
```

#### 639. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4615-L4616` → after: `L5087-L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5087-L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5087-L5088) · [Before (L4615-L4616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4615-L4616)

```diff
-         if ("Board" === UT && mT && !LT.singleLineBoardActions.has(null === (zT = this.bloxd.blockDataOwner.getBlockData(...this.AM)) || void 0 === zT ? void 0 : zT.persisted.shared.text.split("\n")[0].toLowerCase())) return OT.j.EZ("EditBoard", {
-           pos: this.AM
+         if ("Board" === jB && zB && !rB.singleLineBoardActions.has(null === (nB = this.bloxd.blockDataOwner.getBlockData(...this.rI)) || void 0 === nB ? void 0 : nB.persisted.shared.text.split("\n")[0].toLowerCase())) return SB.n.Ly("EditBoard", {
+           pos: this.rI
```

#### 640. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4622-L4623` → after: `L5094-L5095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5094-L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5094-L5095) · [Before (L4622-L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4622-L4623)

```diff
-         if ((0, jT.l)(this.targetBlock) && mT && !lT.j.includes(null === (TT = this.AY) || void 0 === TT ? void 0 : TT.name) && !this.Rl.pY.wUT(this.Rl.VV).crouching) return OT.j.EZ("EditBoard", {
-           pos: this.AM
+         if ((0, aB.h)(this.targetBlock) && zB && !pB.g.includes(null === (BB = this.kS) || void 0 === BB ? void 0 : BB.name) && !this.ur.vG.JjB(this.ur.zV).crouching) return SB.n.Ly("EditBoard", {
+           pos: this.rI
```

#### 641. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4630-L4632` → after: `L5102-L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5102-L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5102-L5104) · [Before (L4630-L4632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4630-L4632)

```diff
-           const TT = this.Rl.kY.canEditCode && mT;
-           return TT || this.Rl.pY.wUT(this.Rl.VV).crouching ? (OT.j.EZ("EditCodeBlock", {
-             pos: this.AM,
+           const BB = this.ur.wG.canEditCode && zB;
+           return BB || this.ur.vG.JjB(this.ur.zV).crouching ? (SB.n.Ly("EditCodeBlock", {
+             pos: this.rI,
```

#### 642. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4643-L4644` → after: `L5115-L5116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5115-L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5115-L5116) · [Before (L4643-L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4643-L4644)

```diff
-         if ("Custom Lobby Block" === UT && mT) return OT.j.EZ("EditCustomLobbyBlock", {
-           pos: this.AM
+         if ("Custom Lobby Block" === jB && zB) return SB.n.Ly("EditCustomLobbyBlock", {
+           pos: this.rI
```

#### 643. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4650-L4651` → after: `L5122-L5123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5122-L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5122-L5123) · [Before (L4650-L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4650-L4651)

```diff
-         if ((0, BT.E)(UT, mT)) return OT.j.EZ("OpenIronChest", {
-           pos: this.AM
+         if ((0, JB.H)(jB, zB)) return SB.n.Ly("OpenIronChest", {
+           pos: this.rI
```

#### 644. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4657-L4660` → after: `L5129-L5132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5129-L5132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5129-L5132) · [Before (L4657-L4660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4657-L4660)

```diff
-         const MT = (0, FT.e)(UT);
-         if (MT) return this.Rl.kY.canCraft ? (OT.j.EZ("toggleMenu", `inventory|${MT.name}`), "Enchanting Table" === MT.name && OT.j.EZ("enchantingTable", {
-           Gg: this.targetBlock,
-           position: this.AM
+         const dB = (0, ZB.f)(jB);
+         if (dB) return this.ur.wG.canCraft ? (SB.n.Ly("toggleMenu", `inventory|${dB.name}`), "Enchanting Table" === dB.name && SB.n.Ly("enchantingTable", {
+           dN: this.targetBlock,
+           position: this.rI
```

#### 645. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4669` → after: `L5141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5141) · [Before (L4669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4669)

```diff
-         if ((0, BT.k)(UT)) return this.sendAltAction(qT.qf), {
+         if ((0, JB.q)(jB)) return this.sendAltAction(LB.bg), {
```

#### 646. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4674` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5146) · [Before (L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4674)

```diff
-         if (PT.e.beds.includes(UT)) return this.sendAltAction(qT.Lf), {
+         if (AB.e.beds.includes(jB)) return this.sendAltAction(LB.sg), {
```

#### 647. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4679` → after: `L5151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5151) · [Before (L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4679)

```diff
-         if (("Vending Machine" === UT || "_Vending Machine Top" === UT) && this.bloxd.getItemStat(this.Rl.VV, this.targetBlock, "altActionable")) return this.sendAltAction(qT.Lf), {
+         if (("Vending Machine" === jB || "_Vending Machine Top" === jB) && this.bloxd.getItemStat(this.ur.zV, this.targetBlock, "altActionable")) return this.sendAltAction(LB.sg), {
```

#### 648. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4684` → after: `L5156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5156) · [Before (L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4684)

```diff
-         if ((0, VT.e)(UT) && this.bloxd.getItemStat(this.Rl.VV, this.targetBlock, "altActionable")) return this.sendAltAction(qT.Lf), {
+         if ((0, TB.e)(jB) && this.bloxd.getItemStat(this.ur.zV, this.targetBlock, "altActionable")) return this.sendAltAction(LB.sg), {
```

#### 649. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4689` → after: `L5161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5161) · [Before (L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4689)

```diff
-         if ((0, kT.m)((0, kT.e)(this.targetBlock))) {
+         if ((0, UB.n)((0, UB.g)(this.targetBlock))) {
```

#### 650. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4692-L4693` → after: `L5164-L5165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5164-L5165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5164-L5165) · [Before (L4692-L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4692-L4693)

```diff
-           } = (0, ZT.d)().swapDoorTypeOpenClosed(this.Rl.VV, ...this.AM, this.targetBlock);
-           return TT || console.error("swapDoorTypeOpenClosed did not succeed but should always succeed on client"), this.sendAltAction(qT.wf), {
+           } = (0, mB.c)().swapDoorTypeOpenClosed(this.ur.zV, ...this.rI, this.targetBlock);
+           return BB || console.error("swapDoorTypeOpenClosed did not succeed but should always succeed on client"), this.sendAltAction(LB.eg), {
```

#### 651. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4702-L4703` → after: `L5174-L5175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5174-L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5174-L5175) · [Before (L4702-L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4702-L4703)

```diff
-           if (null !== TT && TT < WT.f.bookshelfBookCount && "Book" === (null === (gT = this.AY) || void 0 === gT ? void 0 : gT.name)) {
-             this.Rl.pY.aUT(this.Rl.VV).setItemSlot(this.selectedSlot, "Air", null)
+           if (null !== BB && BB < QB.e.bookshelfBookCount && "Book" === (null === (IB = this.kS) || void 0 === IB ? void 0 : IB.name)) {
+             this.ur.vG.yjB(this.ur.zV).setItemSlot(this.selectedSlot, "Air", null)
```

#### 652. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4705` → after: `L5177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5177) · [Before (L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4705)

```diff
-           return this.sendAltAction(qT.pf), {
+           return this.sendAltAction(LB.Zf), {
```

#### 653. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4712-L4714` → after: `L5184-L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5184-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5184-L5186) · [Before (L4712-L4714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4712-L4714)

```diff
-           const TT = null === (nT = this.bloxd.blockDataOwner.getBlockData(...this.AM)) || void 0 === nT || null === (HT = nT.persisted) || void 0 === HT ? void 0 : HT.mail;
-           if (void 0 !== TT && TT < WT.f.mailboxBookCount && "Book" === (null === (pT = this.AY) || void 0 === pT ? void 0 : pT.name)) {
-             this.Rl.pY.aUT(this.Rl.VV).setItemSlot(this.selectedSlot, "Air", null)
+           const BB = null === (NB = this.bloxd.blockDataOwner.getBlockData(...this.rI)) || void 0 === NB || null === (uB = NB.persisted) || void 0 === uB ? void 0 : uB.mail;
+           if (void 0 !== BB && BB < QB.e.mailboxBookCount && "Book" === (null === (sB = this.kS) || void 0 === sB ? void 0 : sB.name)) {
+             this.ur.vG.yjB(this.ur.zV).setItemSlot(this.selectedSlot, "Air", null)
```

#### 654. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4716` → after: `L5188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5188) · [Before (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4716)

```diff
-           return this.sendAltAction(qT.pf), {
+           return this.sendAltAction(LB.Zf), {
```

#### 655. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4725` → after: `L5197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5197) · [Before (L4725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4725)

```diff
-         return "Cranberries_stage2" === TT ? (this.bloxd.EQ(...this.AM, (0, kT.j)("Cranberries_stage1")), this.sendAltAction(qT.Cf), {
+         return "Cranberries_stage2" === BB ? (this.bloxd.eD(...this.rI, (0, UB.k)("Cranberries_stage1")), this.sendAltAction(LB.kg), {
```

#### 656. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4728` → after: `L5200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5200) · [Before (L4728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4728)

```diff
-         }) : "Cotton_stage3" === TT ? (this.bloxd.EQ(...this.AM, (0, kT.j)("Cotton_stage2")), this.sendAltAction(qT.Cf), {
+         }) : "Cotton_stage3" === BB ? (this.bloxd.eD(...this.rI, (0, UB.k)("Cotton_stage2")), this.sendAltAction(LB.kg), {
```

#### 657. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4731` → after: `L5203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5203) · [Before (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4731)

```diff
-         }) : this.targetBlock === (0, kT.j)("Chili Pepper Plant|FreshlyGrown") ? (this.bloxd.EQ(...this.AM, (0, kT.j)("Chili Pepper Plant_stage2")), this.sendAltAction(qT.Cf), {
+         }) : this.targetBlock === (0, UB.k)("Chili Pepper Plant|FreshlyGrown") ? (this.bloxd.eD(...this.rI, (0, UB.k)("Chili Pepper Plant_stage2")), this.sendAltAction(LB.kg), {
```

#### 658. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4734` → after: `L5206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5206) · [Before (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4734)

```diff
-         }) : this.targetBlock === (0, kT.j)("Chili Pepper Plant|Lava|FreshlyGrown") ? (this.bloxd.EQ(...this.AM, (0, kT.j)("Chili Pepper Plant_stage2|Lava")), this.sendAltAction(qT.Cf), {
+         }) : this.targetBlock === (0, UB.k)("Chili Pepper Plant|Lava|FreshlyGrown") ? (this.bloxd.eD(...this.rI, (0, UB.k)("Chili Pepper Plant_stage2|Lava")), this.sendAltAction(LB.kg), {
```

#### 659. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4737` → after: `L5209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5209) · [Before (L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4737)

```diff
-         }) : this.targetBlock === (0, kT.j)("Corn Plant|FreshlyGrown") ? (this.bloxd.EQ(...this.AM, (0, kT.j)("Corn Plant_stage3")), this.sendAltAction(qT.Cf), {
+         }) : this.targetBlock === (0, UB.k)("Corn Plant|FreshlyGrown") ? (this.bloxd.eD(...this.rI, (0, UB.k)("Corn Plant_stage3")), this.sendAltAction(LB.kg), {
```

#### 660. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4744` → after: `L5216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5216) · [Before (L4744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4744)

```diff
-         if (this.AY) return gT.k.includes(this.AY.name) ? (this.sendConsumableAltAction(null), {
+         if (this.kS) return IB.g.includes(this.kS.name) ? (this.sendConsumableAltAction(null), {
```

#### 661. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4747` → after: `L5219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5219) · [Before (L4747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4747)

```diff
-         }) : null !== (TT = this.AY) && void 0 !== TT && TT.name.includes("Crossbow Charged") ? (this.sendConsumableAltAction(aT.b.replace(this.selectedSlot, this.AY.name, this.AY.name.split(" Charged")[0])), {
+         }) : null !== (BB = this.kS) && void 0 !== BB && BB.name.includes("Crossbow Charged") ? (this.sendConsumableAltAction(DB.b.replace(this.selectedSlot, this.kS.name, this.kS.name.split(" Charged")[0])), {
```

#### 662. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4753-L4754` → after: `L5225-L5226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5225-L5226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5225-L5226) · [Before (L4753-L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4753-L4754)

```diff
-         if (!this.AY) return;
-         const TT = (0, sT.e)(this.AY.name);
+         if (!this.kS) return;
+         const BB = (0, XB.c)(this.kS.name);
```

#### 663. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4757` → after: `L5229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5229) · [Before (L4757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4757)

```diff
-           return this.Rl.pY.gUT(this.Rl.VV).physicsState.type !== TT.physicsState.type && (this.bloxd.useConsumableVehicle(this.AY.name), UT = aT.b.remove(this.selectedSlot, 1, this.AY.name)), this.sendConsumableAltAction(UT), {
+           return this.ur.vG.CBB(this.ur.zV).physicsState.type !== BB.physicsState.type && (this.bloxd.useConsumableVehicle(this.kS.name), jB = DB.b.remove(this.selectedSlot, 1, this.kS.name)), this.sendConsumableAltAction(jB), {
```

#### 664. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4764` → after: `L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5236) · [Before (L4764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4764)

```diff
-         if (this.targetBlock) return (0, ZT.d)().getItemStat(this.Rl.VV, this.targetBlock, "altActionable") ? (this.sendAltAction(qT.Lf), {
+         if (this.targetBlock) return (0, mB.c)().getItemStat(this.ur.zV, this.targetBlock, "altActionable") ? (this.sendAltAction(LB.sg), {
```

#### 665. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4771` → after: `L5243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5243) · [Before (L4771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4771)

```diff
-         (0, fT.sendColyMessage)(qT.uf, {
+         (0, GB.sendColyMessage)(LB.dg, {
```

#### 666. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4773` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5245) · [Before (L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4773)

```diff
-           Pg: UT
+           RI: jB
```

#### 667. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4777` → after: `L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5249) · [Before (L4777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4777)

```diff
-         (0, fT.sendColyMessage)(TT, this.altActionPayload()), TT === qT.Lf && this.triggerClientsideGameCallback()
+         (0, GB.sendColyMessage)(BB, this.altActionPayload()), BB === LB.sg && this.triggerClientsideGameCallback()
```

#### 668. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4782` → after: `L5254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5254) · [Before (L4782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4782)

```diff
-           gT = null !== (TT = null !== (UT = null !== (mT = null !== uT.n && void 0 !== uT.n ? uT.n : CT.b) && void 0 !== mT ? mT : MT) && void 0 !== UT ? UT : rT.currentUrl.c) && void 0 !== TT ? TT : "0";
+           IB = null !== (BB = null !== (jB = null !== (zB = null !== PB.u && void 0 !== PB.u ? PB.u : WB.b) && void 0 !== zB ? zB : dB) && void 0 !== jB ? jB : eB.currentUrl.c) && void 0 !== BB ? BB : "0";
```

#### 669. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4784-L4788` → after: `L5256-L5260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5256-L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5256-L5260) · [Before (L4784-L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4784-L4788)

```diff
-           AM: null !== (WT = this.AM) && void 0 !== WT ? WT : null,
-           RM: this.hitEId,
-           Tg: null !== (zT = this.Rl.STT) && void 0 !== zT ? zT : this.Rl.camera.qD(),
-           Ug: zU(this.bloxd, this.AY),
-           mg: gT
+           rI: null !== (QB = this.rI) && void 0 !== QB ? QB : null,
+           sI: this.hitEId,
+           JI: null !== (nB = this.ur.VBB) && void 0 !== nB ? nB : this.ur.camera.nC(),
+           mI: nj(this.bloxd, this.kS),
+           yI: IB
```

#### 670. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4793` → after: `L5265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5265) · [Before (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4793)

```diff
-         this.bloxd.client.triggerGameCallback("onPlayerAltAction", this.Rl.VV, null === (TT = this.AM) || void 0 === TT ? void 0 : TT[0], null === (UT = this.AM) || void 0 === UT ? void 0 : UT[1], null === (mT = this.AM) || void 0 === mT ? void 0 : mT[2], this.targetBlock ? (0, k … [truncated]
+         this.bloxd.client.triggerGameCallback("onPlayerAltAction", this.ur.zV, null === (BB = this.rI) || void 0 === BB ? void 0 : BB[0], null === (jB = this.rI) || void 0 === jB ? void 0 : jB[1], null === (zB = this.rI) || void 0 === zB ? void 0 : zB[2], this.targetBlock ? (0, U … [truncated]
```

#### 671. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4797` → after: `L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5269) · [Before (L4797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4797)

```diff
-     const MU = ["length", 0, 1, 169, 56, 4, "a", "b", 2, "e", 223, 131, 225, "d", !1, null, 87, "f", 5, 10, 102, 3, 34, 6, 78, 31, 188, 172, "Q", ".", "c", 25, !0, 18, 61];
+     const dj = ["length", 0, 105, 103, 7, null, 3, "a", "d", 10, 31, 60, 2, 1, void 0, 33554432, 67108864, "b", 159, "f", "g", 4, "=", ";", 106, "e", 8, 16, 196, "wQdgf_", 512, 12, "012345", "c", 29, 15, 6, 114, 217, 89, 120, 5, 1023, 139, 63, 128, 255, 47, 24, 32, 18, 19, 64, 58 … [truncated]
```

#### 672. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4804-L4822` → after: `L5276-L5281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5276-L5281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5276-L5281) · [Before (L4804-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4804-L4822)

```diff
-     "Kr9JUeK" in gU && function(...TT) {
-       nU(TT[MU[0]] = MU[1], TT[MU[7]] = function(...UT) {
-         return nU(UT[MU[0]] = MU[2], UT[-MU[3]] = []), (UT[MU[1]] === MU[2] || UT[MU[1]] >= MU[5]) && TT[-MU[4]](UT[-MU[3]], [], UT[MU[1]], MU[1]), UT[-MU[3]]
-       }, TT[-MU[4]] = function(...UT) {
-         for (UT[MU[0]] = MU[5], UT[MU[6]] = UT[MU[21]]; UT[MU[6]] < UT[MU[8]]; UT[MU[6]]++) {
-           if (UT[MU[2]].length !== UT[MU[6]]) return;
-           for (UT[MU[7]] = MU[1]; UT[MU[7]] < UT[MU[8]]; UT[MU[7]]++) TT[MU[13]](UT[MU[2]], [UT[MU[6]], UT[MU[7]]]) && (nU(UT[MU[2]].push([UT[MU[6]], UT[MU[7]]]), TT[-MU[4]](UT[MU[1]], UT[MU[2]], UT[MU[8]], UT[MU[6]] + MU[2])), UT[MU[2]].length === UT[MU[8]] && UT[MU[1]].push(TT[ … [truncated]
-         }
-       }, TT[MU[9]] = function(...TT) {
-         for (nU(TT[MU[0]] = MU[2], TT[-MU[12]] = [], TT[MU[11]] = TT[MU[1]].length), TT[MU[10]] = MU[1]; TT[MU[10]] < TT[MU[11]]; TT[MU[10]]++)
-           for (TT[-MU[12]][TT[MU[10]]] = "", TT[MU[5]] = MU[1]; TT[MU[5]] < TT[MU[11]]; TT[MU[5]]++) TT[-MU[12]][TT[MU[10]]] += TT[MU[1]][TT[MU[10]]][MU[2]] === TT[MU[5]] ? MU[28] : MU[29];
-         return TT[-MU[12]]
-       }, TT[MU[13]] = function(...TT) {
-         for (nU(TT[MU[0]] = MU[8], TT[MU[6]] = TT[MU[1]].length), TT[MU[7]] = MU[1]; TT[MU[7]] < TT[MU[6]]; TT[MU[7]]++) {
-           if (TT[MU[1]][TT[MU[7]]][MU[1]] === TT[MU[2]][MU[1]] || TT[MU[1]][TT[MU[7]]][MU[2]] === TT[MU[2]][MU[2]]) return MU[14];
-           if (Math.abs((TT[MU[1]][TT[MU[7]]][MU[1]] - TT[MU[2]][MU[1]]) / (TT[MU[1]][TT[MU[7]]][MU[2]] - TT[MU[2]][MU[2]])) === MU[2]) return MU[14]
- ... (3 more removed lines; see GitHub link above)
+     "inGFgK" in Ij && function(...BB) {
+       function jB() {}
+       BB[dj[0]] = dj[1], Nj(BB[dj[10]] = function(...BB) {
+         for (Nj(BB[dj[0]] = dj[12], BB[dj[7]] = dj[1], BB[dj[6]] = dj[1], BB[dj[2]] = new jB(dj[1]), BB[dj[8]] = BB[dj[2]], BB[dj[3]] = BB[dj[1]], BB[dj[4]] = BB[dj[13]]); BB[dj[3]] !== dj[5] || BB[dj[4]] !== dj[5];) Nj(BB[dj[6]] = (BB[dj[3]] ? BB[dj[3]].val : dj[1]) + (BB[dj[4]] … [truncated]
+         return BB[dj[7]] && (BB[dj[8]].next = new jB(BB[dj[7]])), BB[dj[2]].next
+       }, console.log(BB[dj[10]]))
```

#### 673. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4824-L4831` → after: `L5283-L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5283-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5283-L5284) · [Before (L4824-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4824-L4831)

```diff
-       TT[MU[0]] = MU[1], "Q_OqWM" in gU && function(...TT) {
-         function UT() {}
-         TT[MU[0]] = MU[1], nU(TT[MU[20]] = function(...TT) {
-           for (nU(TT[MU[0]] = MU[8], TT[MU[6]] = MU[1], TT[MU[7]] = MU[1], TT[MU[16]] = new UT(MU[1]), TT[MU[18]] = TT[MU[16]], TT[MU[9]] = TT[MU[1]], TT[MU[17]] = TT[MU[2]]); TT[MU[9]] !== MU[15] || TT[MU[17]] !== MU[15];) nU(TT[MU[7]] = (TT[MU[9]] ? TT[MU[9]].val : MU[1]) + (TT … [truncated]
-           return TT[MU[6]] && (TT[MU[18]].next = new UT(TT[MU[6]])), TT[MU[16]].next
-         }, console.log(TT[MU[20]]))
-       }(), nU(TT[-MU[34]] = MU[1], zU = (...UT) => {
-         if (UT[MU[0]] = MU[8], "W_lomuI" in gU && function(...TT) {
+       Nj(BB[dj[0]] = dj[1], BB[-dj[59]] = dj[1], nj = (...jB) => {
+         if (jB[dj[0]] = dj[12], "BCnrf3" in Ij && function(...BB) {
```

#### 674. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4833-L4834` → after: `L5286-L5287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5286-L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5286-L5287) · [Before (L4833-L4834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4833-L4834)

```diff
-           }(), nU(UT[MU[18]] = UT[MU[1]].getItemId(UT[MU[2]] === MU[15] || void 0 === UT[MU[2]] ? void 0 : UT[MU[2]].name), UT[MU[18]] = UT[MU[18]] << MU[21]), (0, fT.isInitSendColyMessage)(fT.sendColyMessage))
-           if (eT[MU[17]]) {
+           }(), Nj(jB[dj[7]] = jB[dj[1]].getItemId(jB[dj[13]] === dj[5] || void 0 === jB[dj[13]] ? void 0 : jB[dj[13]].name), jB[dj[7]] = jB[dj[7]] << dj[6]), (0, GB.isInitSendColyMessage)(GB.sendColyMessage))
+           if (MB[dj[25]]) {
```

#### 675. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4836-L4850` → after: `L5289-L5302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5289-L5302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5289-L5302) · [Before (L4836-L4850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4836-L4850)

```diff
-               nU(TT[MU[0]] = MU[1], TT[MU[33]] = function(...UT) {
-                 return nU(UT[MU[0]] = MU[2], UT[-MU[25]] = []), (UT[MU[1]] === MU[2] || UT[MU[1]] >= MU[5]) && TT[-MU[26]](UT[-MU[25]], [], UT[MU[1]], MU[1]), UT[-MU[25]]
-               }, TT[-MU[26]] = function(...UT) {
-                 for (UT[MU[0]] = MU[5], UT[MU[6]] = UT[MU[21]]; UT[MU[6]] < UT[MU[8]]; UT[MU[6]]++) {
-                   if (UT[MU[2]].length !== UT[MU[6]]) return;
-                   for (UT[-MU[27]] = MU[1]; UT[-MU[27]] < UT[MU[8]]; UT[-MU[27]]++) TT[MU[30]](UT[MU[2]], [UT[MU[6]], UT[-MU[27]]]) && (nU(UT[MU[2]].push([UT[MU[6]], UT[-MU[27]]]), TT[-MU[26]](UT[MU[1]], UT[MU[2]], UT[MU[8]], UT[MU[6]] + MU[2])), UT[MU[2]].length === UT[MU[8]] && … [truncated]
-                 }
-               }, TT[MU[21]] = function(...TT) {
-                 for (nU(TT[MU[0]] = MU[2], TT[MU[2]] = [], TT[MU[8]] = TT[MU[1]].length), TT[MU[21]] = MU[1]; TT[MU[21]] < TT[MU[8]]; TT[MU[21]]++)
-                   for (TT[MU[2]][TT[MU[21]]] = "", TT[MU[5]] = MU[1]; TT[MU[5]] < TT[MU[8]]; TT[MU[5]]++) TT[MU[2]][TT[MU[21]]] += TT[MU[1]][TT[MU[21]]][MU[2]] === TT[MU[5]] ? MU[28] : MU[29];
-                 return TT[MU[2]]
-               }, TT[MU[30]] = function(...TT) {
-                 for (nU(TT[MU[0]] = MU[8], TT[-MU[31]] = TT[MU[1]].length), TT[MU[7]] = MU[1]; TT[MU[7]] < TT[-MU[31]]; TT[MU[7]]++) {
-                   if (TT[MU[1]][TT[MU[7]]][MU[1]] === TT[MU[2]][MU[1]] || TT[MU[1]][TT[MU[7]]][MU[2]] === TT[MU[2]][MU[2]]) return MU[14];
-                   if (Math.abs((TT[MU[1]][TT[MU[7]]][MU[1]] - TT[MU[2]][MU[1]]) / (TT[MU[1]][TT[MU[7]]][MU[2]] - TT[MU[2]][MU[2]])) === MU[2]) return MU[14]
+               function jB(...BB) {
+                 return BB[dj[0]] = dj[13], BB[dj[1]][dj[13]] * dj[16] + (BB[dj[1]][dj[1]] < dj[1] ? dj[15] | BB[dj[1]][dj[1]] : BB[dj[1]][dj[1]])
+               }
+ 
+               function zB(...BB) {
+                 switch (BB[dj[0]] = dj[13], ((BB[dj[1]] & dj[15]) !== dj[1]) * dj[13] + (BB[dj[1]] < dj[1]) * dj[12]) {
+                   case dj[1]:
+                     return [BB[dj[1]] % dj[15], Math.trunc(BB[dj[1]] / dj[16])];
+                   case dj[13]:
+                     return [BB[dj[1]] % dj[15] - dj[15], Math.trunc(BB[dj[1]] / dj[16]) + dj[13]];
+                   case dj[12]:
+                     return [((BB[dj[1]] + dj[15]) % dj[15] + dj[15]) % dj[15], Math.round(BB[dj[1]] / dj[16])];
+                   case dj[6]:
+                     return [BB[dj[1]] % dj[15], Math.trunc(BB[dj[1]] / dj[16])]
```

#### 676. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4852-L4853` → after: `L5304-L5459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5304-L5459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5304-L5459) · [Before (L4852-L4853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4852-L4853)

```diff
-                 return MU[32]
-               }, console.log(TT[MU[33]]))
+               }
+               BB[dj[0]] = dj[1], Nj(BB[dj[17]] = jB([dj[12], dj[21]]), BB[dj[13]] = jB([dj[13], dj[12]]), BB[dj[8]] = BB[dj[17]] + BB[dj[13]], BB[-dj[18]] = BB[dj[8]] - BB[dj[13]], BB[dj[19]] = BB[-dj[18]] * dj[12], BB[dj[20]] = BB[dj[19]] / dj[12], console.log(zB(BB[dj[8]])), co … [truncated]
+             }
+             "tRjQJP" in Ij && zB(), jB[dj[7]] = jB[dj[7]] | dj[21]
+           } else {
+             function QB(...BB) {
+               BB[dj[0]] = dj[1]
+             }
+             if ("IriM84" in Ij && QB(), GB.butto) {
+               function nB(...BB) {
+                 Nj(BB[dj[0]] = dj[1], BB[dj[56]] = function(...BB) {
+                   function jB(BB, jB) {
+                     return dB(QB(IB(BB), IB(jB)))
+                   }
+ 
+                   function zB(...BB) {
+ ... (140 more added lines; see GitHub link above)
```

#### 677. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4855-L4856` → after: `L5461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5461) · [Before (L4855-L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4855-L4856)

```diff
-             "VzCuaL" in gU && mT(), UT[MU[18]] = UT[MU[18]] | MU[5]
-           } else fT.butto ? UT[MU[18]] = UT[MU[18]] | MU[18] : TT[-MU[34]]++ === MU[5] ? (TT[-MU[34]] = MU[1], UT[MU[18]] = UT[MU[18]] | MU[8]) : UT[MU[18]] = UT[MU[18]] | MU[21];
+           }
```

#### 678. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4859-L4866` → after: `L5464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5464) · [Before (L4859-L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4859-L4866)

```diff
-             nU(TT[MU[0]] = MU[1], TT[MU[7]] = function(...UT) {
-               return nU(UT[MU[0]] = MU[8], UT[MU[8]] = [], UT[MU[7]] = UT[MU[1]].length, UT[MU[1]].sort(((TT, UT) => TT - UT)), TT[MU[22]](UT[MU[8]], [], MU[1], UT[MU[7]], UT[MU[1]], UT[MU[2]])), UT[MU[8]]
-             }, TT[MU[22]] = function(...UT) {
-               if (nU(UT[MU[0]] = MU[23], UT[MU[23]] = MU[15]), !(UT[MU[18]] < MU[1])) {
-                 if (UT[MU[18]] === MU[1]) return UT[MU[1]].push(UT[MU[2]]);
-                 for (UT[-MU[24]] = UT[MU[8]]; UT[-MU[24]] < UT[MU[21]] && !(UT[MU[5]][UT[-MU[24]]] > UT[MU[18]]); UT[-MU[24]]++) UT[-MU[24]] > UT[MU[8]] && UT[MU[5]][UT[-MU[24]]] === UT[MU[5]][UT[-MU[24]] - MU[2]] || nU(UT[MU[23]] = Array.from(UT[MU[2]]), UT[MU[23]].push(UT[MU[5] … [truncated]
-               }
-             }, console.log(TT[MU[7]]))
+             BB[dj[0]] = dj[1]
```

#### 679. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4868` → after: `L5466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5466) · [Before (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4868)

```diff
-           "NXImpT" in gU && WT(), UT[MU[18]] = UT[MU[18]] | MU[2]
+           "TGoaep" in Ij && IB(), jB[dj[7]] = jB[dj[7]] | dj[13]
```

#### 680. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4870` → after: `L5468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5468) · [Before (L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4870)

```diff
-         return UT[MU[18]]
+         return jB[dj[7]]
```

#### 681. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4874` → after: `L5472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5472) · [Before (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4874)

```diff
-   38152: (TT, UT, mT) => {
+   38107: (BB, jB, zB) => {
```

#### 682. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4882` → after: `L5480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5480) · [Before (L4882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4882)

```diff
-   38145: (TT, UT, mT) => {
+   38099: (BB, jB, zB) => {
```

#### 683. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4884` → after: `L5482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5482) · [Before (L4884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4884)

```diff
-       d: () => qT
+       c: () => LB
```

#### 684. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4886` → after: `L5484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5484) · [Before (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4886)

```diff
-     var WT = mT(375),
+     var QB = zB(386),
```

#### 685. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4888-L4898` → after: `L5486-L5496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5486-L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5486-L5496) · [Before (L4888-L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4888-L4898)

```diff
-       MT = mT(38152),
-       gT = mT(2875),
-       nT = mT(3781),
-       HT = mT(37517),
-       kT = mT(3841),
-       jT = mT(208),
-       lT = mT(37364),
-       LT = mT(37185),
-       pT = mT(37359),
-       BT = mT(38161),
-       ZT = mT(38036);
+       dB = zB(38107),
+       IB = zB(2863),
+       NB = zB(3798),
+       uB = zB(37518),
+       UB = zB(3849),
+       aB = zB(214),
+       pB = zB(37372),
+       rB = zB(37166),
+       sB = zB(37365),
+       JB = zB(38111),
+       mB = zB(37983);
```

#### 686. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4904` → after: `L5502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5502) · [Before (L4904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4904)

```diff
-         this.Rl = void 0, this._playerEId = void 0, this.entityRayStart = [0, 0, 0], this.entityRayOrigin = new LT.JB, this.entityRayDirection = new LT.JB, this.entityRay = new pT.g(this.entityRayOrigin, this.entityRayDirection), this.entityHitEId = null, this.Rl = TT, this._play … [truncated]
+         this.ur = void 0, this._playerEId = void 0, this.entityRayStart = [0, 0, 0], this.entityRayOrigin = new rB.KJ, this.entityRayDirection = new rB.KJ, this.entityRay = new sB.g(this.entityRayOrigin, this.entityRayDirection), this.entityHitEId = null, this.ur = BB, this._play … [truncated]
```

#### 687. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4908-L4909` → after: `L5506-L5507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5506-L5507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5506-L5507) · [Before (L4908-L4909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4908-L4909)

```diff
-         const mT = this.doPickAction(null !== (UT = this.Rl.STT) && void 0 !== UT ? UT : this.Rl.camera.qD(), TT);
-         return this._attackWasBlocked(mT) && mT.localHitPosition && mT.sC ? {
+         const zB = this.doPickAction(null !== (jB = this.ur.VBB) && void 0 !== jB ? jB : this.ur.camera.nC(), BB);
+         return this._attackWasBlocked(zB) && zB.localHitPosition && zB.uZ ? {
```

#### 688. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4911` → after: `L5509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5509) · [Before (L4911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4911)

```diff
-           normal: mT.sC
+           normal: zB.uZ
```

#### 689. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4916-L4917` → after: `L5514-L5515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5514-L5515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5514-L5515) · [Before (L4916-L4917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4916-L4917)

```diff
-         const WT = (0, gT.d)(),
-           MT = WT.qUT(WT.getLifeformEyePos(this._playerEId, !1)),
+         const QB = (0, IB.c)(),
+           dB = QB.IjB(QB.getLifeformEyePos(this._playerEId, !1)),
```

#### 690. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4921` → after: `L5519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5519) · [Before (L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4921)

```diff
-           const mT = this._tryDoPick(HT, TT, UT, nT ? cT : null),
+           const zB = this._tryDoPick(uB, BB, jB, NB ? yB : null),
```

#### 691. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4924` → after: `L5522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5522) · [Before (L4924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4924)

```diff
-           mT.localHitPosition ? gT = mT.localHitPosition : (zT().normalize(TT, TT), gT = zT().create(), zT().pg(gT, HT, TT, 1e3)), zT().subtract(WT, gT, MT), zT().normalize(WT, WT);
+           zB.localHitPosition ? IB = zB.localHitPosition : (nB().normalize(BB, BB), IB = nB().create(), nB().gd(IB, uB, BB, 1e3)), nB().subtract(QB, IB, dB), nB().normalize(QB, QB);
```

#### 692. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4926` → after: `L5524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5524) · [Before (L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4926)

```diff
-             ...this._tryDoPick(MT, WT, UT, nT ? vT : null),
+             ...this._tryDoPick(dB, QB, jB, NB ? kB : null),
```

#### 693. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4930` → after: `L5528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5528) · [Before (L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4930)

```diff
-         return this._tryDoPick(MT, TT, UT, nT ? vT : null)
+         return this._tryDoPick(dB, BB, jB, NB ? kB : null)
```

#### 694. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4933-L4934` → after: `L5531-L5532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5531-L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5531-L5532) · [Before (L4933-L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4933-L4934)

```diff
-         const mT = (0, gT.d)(),
-           WT = mT.qUT(mT.getLifeformEyePos(this._playerEId, !1)),
+         const zB = (0, IB.c)(),
+           QB = zB.IjB(zB.getLifeformEyePos(this._playerEId, !1)),
```

#### 695. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4936-L4937` → after: `L5534-L5535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5534-L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5534-L5535) · [Before (L4936-L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4936-L4937)

```diff
-           HT = null !== nT && void 0 !== nT ? nT : WT,
-           kT = this._tryDoPick(HT, TT, UT + (nT ? zT().sg(nT, WT) : 0));
+           uB = null !== NB && void 0 !== NB ? NB : QB,
+           UB = this._tryDoPick(uB, BB, jB + (NB ? nB().bI(NB, QB) : 0));
```

#### 696. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4939` → after: `L5537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5537) · [Before (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4939)

```diff
-         const jT = zT().sg(kT.localHitPosition, WT);
+         const aB = nB().bI(UB.localHitPosition, QB);
```

#### 697. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4947-L4949` → after: `L5545-L5547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5545-L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5545-L5547) · [Before (L4947-L4949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4947-L4949)

```diff
-         if (this._playerEId !== this.Rl.VV || 0 === this.Rl.camera.oN) return null;
-         const mT = null !== (TT = null === (UT = this.Rl.GB.rmT()) || void 0 === UT ? void 0 : UT.eye) && void 0 !== TT ? TT : this.Rl.GB.camera.globalPosition.cWT();
-         return zT().tm(mT[0], mT[1], mT[2])
+         if (this._playerEId !== this.ur.zV || 0 === this.ur.camera.Kw) return null;
+         const zB = null !== (BB = null === (jB = this.ur.pm.ozB()) || void 0 === jB ? void 0 : jB.eye) && void 0 !== BB ? BB : this.ur.pm.camera.globalPosition.nQB();
+         return nB().cj(zB[0], zB[1], zB[2])
```

#### 698. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4960` → after: `L5558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5558) · [Before (L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4960)

```diff
-               ...this._tryDoPick(TT.localOrigin, UT, mT, !0 === WT.visualiseRaycasts ? vT : null), localRayOrigin: TT.localOrigin, globalRayOrigin: TT.globalOrigin
+               ...this._tryDoPick(BB.localOrigin, jB, zB, !0 === QB.visualiseRaycasts ? kB : null), localRayOrigin: BB.localOrigin, globalRayOrigin: BB.globalOrigin
```

#### 699. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4965-L4968` → after: `L5563-L5566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5563-L5566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5563-L5566) · [Before (L4965-L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4965-L4968)

```diff
-         if (this._playerEId === this.Rl.VV && this.Rl.camera.hN < .01) return this.getDefaultWeaponRay();
-         if (!this.Rl.pY.knT(this._playerEId)) return null;
-         const TT = this.Rl.pY.bUT(this._playerEId),
-           UT = null === TT || void 0 === TT ? void 0 : TT.zV;
+         if (this._playerEId === this.ur.zV && this.ur.camera.Xw < .01) return this.getDefaultWeaponRay();
+         if (!this.ur.vG.eIB(this._playerEId)) return null;
+         const BB = this.ur.vG.ujB(this._playerEId),
+           jB = null === BB || void 0 === BB ? void 0 : BB.mY;
```

#### 700. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4970` → after: `L5568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5568) · [Before (L4970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4970)

```diff
-         const mT = this.Rl.GB.mV;
+         const zB = this.ur.pm.JY;
```

#### 701. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4976` → after: `L5574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5574) · [Before (L4976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4976)

```diff
-           nT = LT.JB.TransformNormal(new LT.JB(0, 0, 1), MT);
+           NB = rB.KJ.TransformNormal(new rB.KJ(0, 0, 1), dB);
```

#### 702. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4981` → after: `L5579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5579) · [Before (L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4981)

```diff
-         return this.Rl.jD(HT, kT), {
+         return this.ur.WK(uB, UB), {
```

#### 703. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4992` → after: `L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5590) · [Before (L4992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4992)

```diff
-             return null !== (UT = this.getHeadRay()) && void 0 !== UT ? UT : this.getDefaultWeaponRay();
+             return null !== (jB = this.getHeadRay()) && void 0 !== jB ? jB : this.getDefaultWeaponRay();
```

#### 704. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4998` → after: `L5596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5596) · [Before (L4998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L4998)

```diff
-         const TT = (0, gT.d)(),
+         const BB = (0, IB.c)(),
```

#### 705. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5001` → after: `L5599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5599) · [Before (L5001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5001)

```diff
-           localOrigin: TT.qUT(UT),
+           localOrigin: BB.IjB(jB),
```

#### 706. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5003` → after: `L5601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5601) · [Before (L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5003)

```diff
-           direction: HT.d.copyAimDirection(this.Rl, [0, 0, 0]),
+           direction: uB.b.copyAimDirection(this.ur, [0, 0, 0]),
```

#### 707. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5013` → after: `L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5611) · [Before (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5013)

```diff
-           sC: gT,
+           uZ: IB,
```

#### 708. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5015-L5016` → after: `L5613-L5614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5613-L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5613-L5614) · [Before (L5015-L5016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5015-L5016)

```diff
-         } = this.doPickAction(TT, jT.f.entityInteractReach);
-         return UT === MT.b.HIT_ENTITY ? mT : null
+         } = this.doPickAction(BB, aB.e.entityInteractReach);
+         return jB === dB.b.HIT_ENTITY ? zB : null
```

#### 709. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5020-L5021` → after: `L5618-L5619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5618-L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5618-L5619) · [Before (L5020-L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5020-L5021)

```diff
-         const MT = null !== (WT = null === (zT = this.Rl.pY.wUT(this._playerEId)) || void 0 === zT ? void 0 : zT.ridingVehicleEId) && void 0 !== WT ? WT : null,
-           gT = this.Rl.qUT(TT, null, this.entityRayStart);
+         const dB = null !== (QB = null === (nB = this.ur.vG.JjB(this._playerEId)) || void 0 === nB ? void 0 : nB.ridingVehicleEId) && void 0 !== QB ? QB : null,
+           IB = this.ur.IjB(BB, null, this.entityRayStart);
```

#### 710. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5042` → after: `L5640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5640) · [Before (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5042)

```diff
-         const zT = (0, BT.b)(this.Rl.GB, this.entityRay),
+         const nB = (0, JB.d)(this.ur.pm, this.entityRay),
```

#### 711. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5044` → after: `L5642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5642) · [Before (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5044)

```diff
-           gT = this.Rl.GB.mV.VL(this.entityRayOrigin, this.entityRayDirection, null !== MT && void 0 !== MT ? MT : TT);
+           IB = this.ur.pm.JY.zs(this.entityRayOrigin, this.entityRayDirection, null !== dB && void 0 !== dB ? dB : BB);
```

#### 712. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5046` → after: `L5644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5644) · [Before (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5046)

```diff
-         const nT = null !== (UT = null === zT || void 0 === zT || null === (mT = zT.pickedMesh) || void 0 === mT || null === (WT = mT.metadata) || void 0 === WT ? void 0 : WT.eId) && void 0 !== UT ? UT : null;
+         const NB = null !== (jB = null === nB || void 0 === nB || null === (zB = nB.pickedMesh) || void 0 === zB || null === (QB = zB.metadata) || void 0 === QB ? void 0 : QB.eId) && void 0 !== jB ? jB : null;
```

#### 713. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5065-L5066` → after: `L5663-L5664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5663-L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5663-L5664) · [Before (L5065-L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5065-L5066)

```diff
-         const mT = null !== (TT = null === (UT = this.Rl.pY.bUT(this._playerEId)) || void 0 === UT ? void 0 : UT.zV) && void 0 !== TT ? TT : null,
-           WT = this.Rl.GB.mV;
+         const zB = null !== (BB = null === (jB = this.ur.vG.ujB(this._playerEId)) || void 0 === jB ? void 0 : jB.mY) && void 0 !== BB ? BB : null,
+           QB = this.ur.pm.JY;
```

#### 714. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5070` → after: `L5668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5668) · [Before (L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5070)

```diff
-         null !== TT && this.Rl.GB.mV.setPickable(TT, !0)
+         null !== BB && this.ur.pm.JY.setPickable(BB, !0)
```

#### 715. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5074` → after: `L5672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5672) · [Before (L5074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5074)

```diff
-           gT = WT ? zT().sg(TT, WT.zUT) : mT,
+           IB = QB ? nB().bI(BB, QB.xBB) : zB,
```

#### 716. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5080` → after: `L5678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5678) · [Before (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5080)

```diff
-           jT = null !== HT ? zT().tm(nT.pickedPoint.x, nT.pickedPoint.y, nT.pickedPoint.z) : null,
+           aB = null !== uB ? nB().cj(NB.pickedPoint.x, NB.pickedPoint.y, NB.pickedPoint.z) : null,
```

#### 717. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5082` → after: `L5680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5680) · [Before (L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5082)

```diff
-         null !== jT && kT.Rl.jD(jT, lT);
+         null !== aB && UB.ur.WK(aB, pB);
```

#### 718. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5085` → after: `L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5683) · [Before (L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5085)

```diff
-           const TT = zT().tm(nT.pickedPoint.x, nT.pickedPoint.y, nT.pickedPoint.z),
+           const BB = nB().cj(NB.pickedPoint.x, NB.pickedPoint.y, NB.pickedPoint.z),
```

#### 719. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5087` → after: `L5685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5685) · [Before (L5087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5087)

```diff
-           kT.Rl.jD(TT, mT);
+           UB.ur.WK(BB, zB);
```

#### 720. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5094` → after: `L5692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5692) · [Before (L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5094)

```diff
-             sC: WT,
+             uZ: QB,
```

#### 721. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5100` → after: `L5698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5698) · [Before (L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5100)

```diff
-           zT().copy(UT, WT.zUT);
+           nB().copy(jB, QB.xBB);
```

#### 722. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5106` → after: `L5704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5704) · [Before (L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5106)

```diff
-             distanceTravelled: zT().sg(TT, WT.zUT),
+             distanceTravelled: nB().bI(BB, QB.xBB),
```

#### 723. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5109` → after: `L5707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5707) · [Before (L5109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5109)

```diff
-             sC: gT,
+             uZ: IB,
```

#### 724. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5118` → after: `L5716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5716) · [Before (L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5118)

```diff
-           sC: null,
+           uZ: null,
```

#### 725. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5125-L5126` → after: `L5723-L5724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5723-L5724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5723-L5724) · [Before (L5125-L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5125-L5126)

```diff
-         const nT = new LT.JB(TT[0], TT[1], TT[2]),
-           HT = new LT.JB(UT[0], UT[1], UT[2]),
+         const NB = new rB.KJ(BB[0], BB[1], BB[2]),
+           uB = new rB.KJ(jB[0], jB[1], jB[2]),
```

#### 726. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5128-L5130` → after: `L5726-L5728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5726-L5728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5726-L5728) · [Before (L5128-L5130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5128-L5130)

```diff
-           jT = (0, BT.b)(this.Rl.GB, kT),
-           lT = null !== (WT = null === (zT = jT.pickedMesh) || void 0 === zT || null === (MT = zT.metadata) || void 0 === MT ? void 0 : MT.eId) && void 0 !== WT ? WT : null,
-           ZT = this.Rl.GB.mV.VL(nT, HT, null !== (gT = null !== jT && void 0 !== jT && jT.hit ? jT.distance : null) && void 0 !== gT ? gT : mT);
+           aB = (0, JB.d)(this.ur.pm, UB),
+           pB = null !== (QB = null === (nB = aB.pickedMesh) || void 0 === nB || null === (dB = nB.metadata) || void 0 === dB ? void 0 : dB.eId) && void 0 !== QB ? QB : null,
+           mB = this.ur.pm.JY.zs(NB, uB, null !== (IB = null !== aB && void 0 !== aB && aB.hit ? aB.distance : null) && void 0 !== IB ? IB : zB);
```

#### 727. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5137-L5138` → after: `L5735-L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5735-L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5735-L5736) · [Before (L5137-L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5137-L5138)

```diff
-         const WT = this.Rl.Nl;
-         return this.Rl.VK(TT, UT, mT, ((TT, UT, mT, zT) => WT.sG(UT, mT, zT)))
+         const QB = this.ur.zr;
+         return this.ur.aT(BB, jB, zB, ((BB, jB, zB, nB) => QB.vW(jB, zB, nB)))
```

#### 728. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5145-L5146` → after: `L5743-L5744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5743-L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5743-L5744) · [Before (L5145-L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5145-L5146)

```diff
-         const zT = new LT.JB(TT[0], TT[1], TT[2]),
-           MT = new LT.JB(UT[0], UT[1], UT[2]);
+         const nB = new rB.KJ(BB[0], BB[1], BB[2]),
+           dB = new rB.KJ(jB[0], jB[1], jB[2]);
```

#### 729. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5150-L5151` → after: `L5748-L5749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5748-L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5748-L5749) · [Before (L5150-L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5150-L5151)

```diff
-           nT = (0, ZT.j)(this.Rl.GB, "gunRaycastTrace_" + fT++, {
-             positions: [...zT.cWT(), ...gT.cWT()],
+           NB = (0, mB.i)(this.ur.pm, "gunRaycastTrace_" + GB++, {
+             positions: [...nB.nQB(), ...IB.nQB()],
```

#### 730. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5154-L5155` → after: `L5752-L5753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5752-L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5752-L5753) · [Before (L5154-L5155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5154-L5155)

```diff
-         nT.color = WT, nT.YB = !0, nT.QZ = !1, this.Rl.GB.FZ(nT, !1, this.Rl.ZL), setTimeout((() => {
-           nT.bJ() || nT.dispose()
+         NB.color = QB, NB.xJ = !0, NB.Ny = !1, this.ur.pm.py(NB, !1, this.ur.qr), setTimeout((() => {
+           NB.aE() || NB.dispose()
```

#### 731. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5160` → after: `L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5758) · [Before (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5160)

```diff
-     const tT = [45, 0, 1, 8, 3, 42, 9, 7, 19, 189, "d", 255, "length", 175, "c", "a", 84, "undefined", void 0, "b", 65, 63, 6, "fromCodePoint", 12, "push", 146, 91, 8191, 88, 13, 14, 2, 107, 16, 93, 134, "h", 95, "g", 186, 33, 127, 50, 5, "f", 20, 159, 94, "i", 41, 128, !0, 100,  … [truncated]
+     const HB = [0, 1, 8, 255, "length", 59, 166, 167, 124, "f", "undefined", void 0, 202, 4, "c", 2, "a", 63, 6, "fromCodePoint", 7, 12, "push", 50, 250, 3, "h", 9, 235, 91, 5, 8191, 88, 13, 14, 105, 127, 217, "e", 223, !1, !0, 87, 213, 29, 132, "b", "g", "d", 1023, 169, 65536, 1 … [truncated]
```

#### 732. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5163-L5166` → after: `L5761-L5766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5761-L5766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5761-L5766) · [Before (L5163-L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5163-L5166)

```diff
-       return TT[tT[12]] = tT[2], typeof iT[TT[tT[1]]] === tT[17] ? iT[TT[tT[1]]] = function(...TT) {
-         for (IT(TT[tT[12]] = tT[2], TT[-tT[5]] = '*JAqlCoBXsHfdzL"PVp[4j!1(F{.ZT|x3@>5Sab0nG6$Wwr]NmI;^UOQ=vuy#8hY+?&<D)`Me:2,%9~cg}7Rt/k_iKE', TT[-tT[0]] = "" + (TT[tT[1]] || ""), TT[tT[4]] = TT[-tT[0]].length, TT[tT[10]] = [], TT[-tT[8]] = tT[1], TT[tT[9]] = tT[1], TT[tT[7]] =  … [truncated]
-           if (TT[tT[6]] = TT[-tT[5]].indexOf(TT[-tT[0]][TT[tT[3]]]), TT[tT[6]] !== -tT[2])
-             if (TT[tT[7]] < tT[1]) TT[tT[7]] = TT[tT[6]];
+       return BB[HB[4]] = HB[1], typeof gB[BB[HB[0]]] === HB[10] ? gB[BB[HB[0]]] = function(BB) {
+         var jB, zB, QB, nB, dB, IB, NB;
+         for (hB(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = HB[0], dB = HB[0], IB = -HB[1]), NB = HB[0]; NB < zB; NB++) {
+           var uB = 'E/#gkK)`sMeX[$=]i7nRh(QZ4:2_vdjrG<uDx?~"Va5@;wq3L9FHp>+l%N!mUybz*c|W60O^1.AYSTP}f&B8{J,ItCo'.indexOf(jB[NB]);
+           if (uB !== -HB[1])
+             if (IB < HB[0]) IB = uB;
```

#### 733. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5168` → after: `L5768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5768) · [Before (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5168)

```diff
-               IT(TT[tT[7]] += TT[tT[6]] * tT[27], TT[-tT[8]] |= TT[tT[7]] << TT[tT[9]], TT[tT[9]] += (TT[tT[7]] & tT[28]) > tT[29] ? tT[30] : tT[31]);
+               hB(IB += uB * HB[29], nB |= IB << dB, dB += (IB & HB[31]) > HB[32] ? HB[33] : HB[34]);
```

#### 734. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5170-L5174` → after: `L5770-L5776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5770-L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/77.js#L5770-L5776) · [Before (L5170-L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/77.js#L5170-L5174)

```diff
-                 IT(TT[tT[10]].push(TT[-tT[8]] & tT[11]), TT[-tT[8]] >>= tT[3], TT[tT[9]] -= tT[3])
-               } while (TT[tT[9]] > tT[7]);
-               TT[tT[7]] = -tT[2]
-             } return TT[tT[7]] > -tT[2] && TT[tT[10]].push((TT[-tT[8]] | TT[tT[7]] << TT[tT[9]]) & tT[11]), yT(TT[tT[10]])
-       }(bT[TT[tT[1]]]) : iT[TT[tT[1]]]
+                 hB(QB.push(nB & HB[3]), nB >>= HB[2], dB -= HB[2])
+               } while (dB > HB[20]);
+               IB = -HB[1]
+             }
+         }
+         return IB > -HB[1] && QB.push((nB | IB << dB) & HB[3]), FB(QB)
+       }(tB[BB[HB[0]]]) : gB[BB[HB[0]]]
```
