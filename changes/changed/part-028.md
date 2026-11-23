# Changed — Bundle Modifications Report (Part 028 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `28 / 104` (**306** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 027](part-027.md) · [Part 029 →](part-029.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/191.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/191.js` (120 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f)

#### 63. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L966-L968` → after: `L618-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L618-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L618-L724) · [Before (L966-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L966-L968)

```diff
- 
-     function Me(kk) {
-       return kk.float()
+     class dC {
+       constructor(CC, zC, ZC) {
+         if (this.smooth = zC, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
+             index: 0,
+             toIndex: 0,
+             u: 0,
+             segmentMs: 0,
+             curved: !1,
+             beforeIndex: -1,
+             afterIndex: -1,
+             beforeMs: 0,
+             afterMs: 0,
+             fromTangent: [0, 0, 0],
+             toTangent: [0, 0, 0]
+           }, 0 === CC.length) throw new Error("A camera path needs at least one keyframe");
+         for (let bC = 1; bC < CC.length; bC++)
+ ... (91 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L970-L972` → after: `L726-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L726-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L726-L750) · [Before (L970-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L970-L972)

```diff
- 
-     function Ke(kk) {
-       return kk.WU(Me)
+     class mC {
+       constructor(CC) {
+         this.fN = CC, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = zC => CC.getEntityPosition(zC), this.readAimPoint = zC => CC.getEntityAimPoint(zC)
+       }
+       aimPoint(CC) {
+         return "string" !== typeof CC ? (0, oC.n)(CC, 3) ? CC : null : this.resolve(CC, this.readAimPoint, this.lastAimPoints)
+       }
+       currentAimPoint(CC) {
+         const zC = "string" === typeof CC ? this.fN.getEntityAimPoint(CC) : CC;
+         return zC && (0, oC.n)(zC, 3) ? zC : null
+       }
+       feetPosition(CC) {
+         return this.resolve(CC, this.readFeet, this.lastFeet)
+       }
+       heading(CC) {
+         const zC = this.fN.getEntityHeading(CC);
+ ... (9 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L976` → after: `L754-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L754-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L754-L757) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L976)

```diff
-       return 0 === kk.index(2) ? null : Ke(kk)
+       return {
+         heading: CC.heading,
+         pitch: CC.pitch
+       }
```

#### 66. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L979-L980` → after: `L760-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L760-L761) · [Before (L979-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L979-L980)

```diff
-     function ne(kk) {
-       return 0 === kk.index(2) ? null : Gk(kk)
+     function EC(CC, zC) {
+       Number.isFinite(CC.heading) && Number.isFinite(CC.pitch) || (0, wC.h)(zC, CC)
```

#### 67. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L983-L984` → after: `L764-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L764-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L764-L767) · [Before (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L983-L984)

```diff
-     function Ue(kk) {
-       return kk.long()
+     function lC(CC, zC, ZC, QC, bC) {
+       if (zC) return void(0, wC.j)(zC, bC);
+       const nC = QC.aimPoint(ZC);
+       nC && (0, wC.o)(CC, nC, bC)
```

#### 68. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L986-L990` → after: `L769-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L769-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L769-L783) · [Before (L986-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L986-L990)

```diff
- 
-     function He(kk) {
-       return 0 === kk.index(2) ? null : function(kk) {
-         return kk.WU(Ue)
-       }(kk)
+     class XC {
+       constructor(CC, zC, ZC, QC) {
+         this.settings = CC, this.fN = zC, this.targets = ZC, this.base = void 0, this.base = HC(QC)
+       }
+       update(CC, zC, ZC) {
+         var QC;
+         const wC = this.settings;
+         (0, oC.h)(wC.position, ZC.position), lC(wC.position, wC.lookDirection, null !== (QC = wC.lookAt) && void 0 !== QC ? QC : this.fN.localPlayerId, this.targets, this.base), zC.apply(this.base, ZC), ZC.fov = MC(wC, this.fN)
+       }
+       continueFrom(CC) {
+         CC instanceof XC && (0, wC.h)(CC.base, this.base)
+       }
+       reset(CC) {
+         EC(this.base, CC)
+       }
```

#### 69. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L992-L997` → after: `L785-L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L785-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L785-L803) · [Before (L992-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L992-L997)

```diff
- 
-     function we(kk) {
-       return 0 === kk.index(2) ? null : function(kk) {
-         return {
-           Ae: kk.str(),
-           je: kk.long()
+     class cC {
+       constructor(CC, zC, ZC, QC) {
+         this.settings = CC, this.fN = zC, this.targets = ZC, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Np = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin =  … [truncated]
+       }
+       update(CC, zC, ZC) {
+         var QC, wC, bC;
+         const nC = this.settings,
+           fC = null !== (QC = nC.target) && void 0 !== QC ? QC : this.fN.localPlayerId,
+           qC = this.targets.feetPosition(fC);
+         let FC = !1;
+         qC && (FC = this.foundFeet && xC(this.lastFeet, qC) > 32 + .1 * CC, (0, oC.h)(qC, this.lastFeet), this.foundFeet = !0, this.placeGoal(qC, fC));
+         const WC = null !== (wC = nC.smoothMs) && void 0 !== wC ? wC : 0;
+         !this.started || WC < 1 || FC ? ((0, oC.h)(this.goal, this.smoothed), this.Np.fill(0), this.started = !0) : gC(this.smoothed, this.Np, this.goal, WC, CC), FC && (this.distance = -1), (0, oC.h)(this.smoothed, ZC.position);
+         const NC = !0 === nC.avoidTerrain ? this.pullIn(fC, CC, ZC) : 1;
+         let SC = this.goal;
+         if ("target" === nC.offsetSpace) SC = ZC.position;
+ ... (3 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L999-L1011` → after: `L805-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L805-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L805-L842) · [Before (L999-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L999-L1011)

```diff
-       }(kk)
-     }
- 
-     function le(kk) {
-       const ek = kk.index(3);
-       return 0 === ek ? null : 1 === ek ? kk.str() : zk(kk)
-     }
- 
-     function pe(kk) {
-       return {
-         yD: kk.str(),
-         YD: kk.str(),
-         LD: kk.str()
+         lC(SC, nC.lookDirection, null !== (bC = nC.lookAt) && void 0 !== bC ? bC : fC, this.targets, this.base), zC.apply(this.base, ZC), ZC.fov = MC(nC, this.fN)
+       }
+       continueFrom(CC) {
+         CC instanceof cC && (0, QC.s)(CC.settings.target, this.settings.target) && ((0, wC.h)(CC.base, this.base), (0, oC.h)(CC.goal, this.goal), (0, oC.h)(CC.lastFeet, this.lastFeet), this.foundFeet = CC.foundFeet, (0, oC.h)(CC.smoothed, this.smoothed), (0, oC.h)(CC.Np, this.Np) … [truncated]
+       }
+       reset(CC) {
+         EC(this.base, CC), this.Np.fill(0), this.started = !1, this.distance = -1
+       }
+       pullIn(CC, zC, ZC) {
+         const QC = this.targets.aimPoint(CC);
+         if (!QC) return 1;
+         const wC = ZC.position,
+           bC = xC(QC, wC);
+         if (!(bC > 0)) return 1;
+         const nC = this.toCamera;
+         for (let oC = 0; oC < 3; oC++) nC[oC] = (wC[oC] - QC[oC]) / bC;
+ ... (22 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1014-L1020` → after: `L845-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L845-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L845-L859) · [Before (L1014-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1014-L1020)

```diff
- 
-     function ye(kk) {
-       return {
-         Pi: kk.str(),
-         mi: Qk(kk),
-         Mi: Qk(kk),
-         Ki: ck(kk)
+     class uC {
+       constructor(CC, zC, ZC, QC) {
+         var wC, bC;
+         this.settings = CC, this.fN = zC, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = CC.keyframes.length > 0 ? new dC(CC.keyframes, null === (wC = CC.smooth) || void 0 === wC || wC, null !== (bC = CC.loop) && void 0  … [truncated]
+       }
+       update(CC, zC, ZC) {
+         this.elapsedMs += CC;
+         const QC = MC(this.settings, this.fN);
+         this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, QC, this.base) : this.base.fov = QC, (0, oC.h)(this.base.position, ZC.position), ZC.fov = this.base.fov, zC.apply(this.base, ZC)
+       }
+       continueFrom(CC) {
+         CC instanceof uC && (0, QC.s)(CC.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = CC.elapsedMs, (0, oC.g)(CC.base, this.base))
+       }
+       reset(CC) {
+         EC(this.base, CC), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
```

#### 72. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1024-L1025` → after: `L863-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L863-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L863-L864) · [Before (L1024-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1024-L1025)

```diff
-     function Ye(kk) {
-       return kk.WU(ye)
+     function rC(CC, zC) {
+       return (0, QC.u)(CC, zC)
```

#### 73. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1027-L1033` → after: `L866-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L866-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L866-L888) · [Before (L1027-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1027-L1033)

```diff
- 
-     function Le(kk) {
-       return {
-         QD: kk.str(),
-         x: kk.long(),
-         y: kk.long(),
-         z: kk.long()
+     class sC {
+       constructor(CC, zC, ZC) {
+         var QC;
+         this.settings = CC, this.fN = zC, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
+         const wC = null !== ZC && ZC.settings.mode === CC.mode,
+           bC = wC ? ZC.pose : zC.getDefaultPose();
+         this.pose = (0, oC.g)(bC, (0, oC.k)()), this.lastGoodPose = (0, oC.g)(wC ? ZC.lastGoodPose : bC, (0, oC.k)()), this.look = new pC(CC.playerLook), this.targets = null !== (QC = null === ZC || void 0 === ZC ? void 0 : ZC.targets) && void 0 !== QC ? QC : new mC(zC);
+         const nC = (0, oC.g)(bC, (0, oC.k)());
+         wC && ZC.look.unapply(nC, nC), this.mode = function(CC, zC, ZC, QC) {
+           switch (CC.mode) {
+             case "fixed":
+               return new XC(CC, zC, ZC, QC);
+             case "follow":
+               return new cC(CC, zC, ZC, QC);
+             case "path":
+               return new uC(CC, zC, ZC, QC);
+ ... (7 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1038` → after: `L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L893) · [Before (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1038)

```diff
-       return kk.WU(Le)
+       return [0, 0, CC[2], CC[3]]
```

#### 75. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1040-L1046` → after: `L895-L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L895-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L895-L931) · [Before (L1040-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1040-L1046)

```diff
- 
-     function Ae(kk) {
-       return 0 === kk.index(2) ? null : function(kk) {
-         return {
-           Df: kk.float(),
-           ff: kk.long(),
-           Sf: kk.long()
+     class aC {
+       constructor(CC) {
+         this.fN = CC, this.settings = {
+           mode: "default"
+         }, this.pending = null, this.fade = new fC, this.shot = null, this.blend = null, this.mixed = (0, oC.k)(), this.output = (0, oC.k)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
+           length: 3
+         }, (() => [0, 0, 0]))
+       }
+       setSettings(CC) {
+         const zC = (0, qC.d)(CC);
+         if ((0, QC.s)(zC, this.pending ? this.pending.settings : this.settings)) return;
+         const ZC = rC(this.settings, zC);
+         if (void 0 !== zC.transition && !ZC) return this.pending = {
+           settings: zC,
+           shot: "default" === zC.mode ? null : new sC(zC, this.fN, null)
+         }, void this.fade.fadeOut(zC.transition);
+ ... (21 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1062-L1073` → after: `L934-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L934-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L934-L985) · [Before (L1062-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1062-L1073)

```diff
-     }
- 
-     function se(kk) {
-       return 0 === kk.index(2) ? null : function(kk) {
-         return kk.WU(je)
-       }(kk)
-     }
- 
-     function de(kk) {
-       return {
-         TD: kk.str(),
-         oD: se(kk)
+       getSettings() {
+         return this.settings
+       }
+       getScreenFade() {
+         return this.fade.getScreen()
+       }
+       getLoadingPositions() {
+         return this.loadingPositions
+       }
+       isActive() {
+         return null !== this.shot || null !== this.blend
+       }
+       update(CC, zC) {
+         const ZC = Number.isFinite(CC) && CC > 0 ? CC : 0;
+         if (this.fade.advance(ZC) && null !== this.pending) {
+           const {
+ ... (36 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1077` → after: `L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1005) · [Before (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1077)

```diff
-     function Ve(kk) {
+     function bC() {
```

#### 78. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1079-L1080` → after: `L1007-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1007-L1010) · [Before (L1079-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1079-L1080)

```diff
-         blockName: kk.str(),
-         frequency: kk.float()
+         position: [0, 0, 0],
+         heading: 0,
+         pitch: 0,
+         fov: 0
```

#### 79. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1084-L1085` → after: `L1014-L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1014-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1014-L1015) · [Before (L1084-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1084-L1085)

```diff
-     function Fe(kk) {
-       return kk.WU(Ve)
+     function nC(CC, zC) {
+       return zC[0] = CC[0], zC[1] = CC[1], zC[2] = CC[2], zC
```

#### 80. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1088-L1094` → after: `L1018-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1018-L1019) · [Before (L1088-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1088-L1094)

```diff
-     function ue(kk) {
-       return {
-         Pf: kk.str(),
-         mf: kk.str(),
-         frequency: kk.float(),
-         Mf: Fe(kk)
-       }
+     function fC(CC, zC) {
+       return nC(CC.position, zC.position), zC.heading = CC.heading, zC.pitch = CC.pitch, zC.fov = CC.fov, zC
```

#### 81. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1097-L1098` → after: `L1022-L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1022-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1022-L1023) · [Before (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1097-L1098)

```diff
-     function qe(kk) {
-       return kk.WU(ue)
+     function oC(CC, zC) {
+       return Array.isArray(CC) && CC.length === zC && CC.every(Number.isFinite)
```

#### 82. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1102-L1109` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1027) · [Before (L1102-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1102-L1109)

```diff
-       return {
-         blockName: kk.str(),
-         radius: kk.long(),
-         Hf: kk.long(),
-         aD: kk.long(),
-         WD: kk.long(),
-         wf: kk.float()
-       }
+       return oC(CC.position, 3) && Number.isFinite(CC.heading) && Number.isFinite(CC.pitch) && Number.isFinite(CC.fov)
```

#### 83. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1112-L1113` → after: `L1030-L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1030-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1030-L1032) · [Before (L1112-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1112-L1113)

```diff
-     function ze(kk) {
-       return kk.WU(Ie)
+     function FC(CC, zC, ZC, wC, bC) {
+       for (let QC = 0; QC < 3; QC++) bC.position[QC] = CC.position[QC] + (zC.position[QC] - CC.position[QC]) * wC;
+       return bC.heading = (0, QC.s)(CC.heading + ZC * wC), bC.pitch = CC.pitch + (zC.pitch - CC.pitch) * wC, bC.fov = CC.fov + (zC.fov - CC.fov) * wC, bC
```

#### 84. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1116-L1125` → after: `L1045-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1045-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1045-L1046) · [Before (L1116-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1116-L1125)

```diff
-     function Qe(kk) {
-       return {
-         aD: kk.long(),
-         WD: kk.long(),
-         tD: kk.long(),
-         XD: kk.bool(),
-         BD: de(kk),
-         bf: qe(kk),
-         xf: ze(kk)
-       }
+     function fC(CC, zC, ZC, QC) {
+       return Number.isFinite(CC) ? Math.min(ZC, Math.max(zC, CC)) : QC
```

#### 85. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1128-L1129` → after: `L1049-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1049-L1050) · [Before (L1128-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1128-L1129)

```diff
-     function ve(kk) {
-       return kk.WU(Qe)
+     function oC(CC, zC, ZC) {
+       return void 0 !== CC && Number.isFinite(CC) ? Math.min(ZC, Math.max(zC, CC)) : void 0
```

#### 86. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1133-L1138` → after: `L1054-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1054-L1055) · [Before (L1133-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1133-L1138)

```diff
-       return 0 === kk.index(2) ? null : function(kk) {
-         return {
-           name: kk.str(),
-           Yf: Qk(kk)
-         }
-       }(kk)
+       const zC = QC.k.maxCoordinate;
+       return [Math.min(zC, Math.max(-zC, CC[0])), Math.min(zC, Math.max(-zC, CC[1])), Math.min(zC, Math.max(-zC, CC[2]))]
```

#### 87. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1142-L1147` → after: `L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1059) · [Before (L1142-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1142-L1147)

```diff
-       return 0 === kk.index(2) ? null : function(kk) {
-         return {
-           terrain: Ee(kk),
-           Lf: ze(kk)
-         }
-       }(kk)
+       return "string" === typeof CC ? CC : (0, wC.n)(CC, 3) ? qC(CC) : void 0
```

#### 88. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1151-L1215` → after: `L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1064) · [Before (L1151-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1151-L1215)

```diff
-       return 0 === kk.index(2) ? null : function(kk) {
-         return {
-           layers: ve(kk),
-           lf: he(kk)
-         }
-       }(kk)
-     }
-   },
-   40172: (kk, ek, ik) => {
-     ik.d(ek, {
-       $: () => pk,
-       C: () => Ak,
-       D: () => uk,
-       G: () => Yk,
-       I: () => Lk,
-       M: () => wk,
- ... (49 more removed lines; see GitHub link above)
+       return "string" === typeof CC && WC.test(CC)
```

#### 89. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1219-L1222` → after: `L1068-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1068-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1068-L1072) · [Before (L1219-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1219-L1222)

```diff
-       if ("string" !== typeof kk) return kk;
-       for (let ek = 0; ek < kk.length; ek++) {
-         const ik = kk.charCodeAt(ek);
-         if (ik >= 55296 && ik <= 57343) return Pk.decode(rk.encode(kk))
+       const zC = [];
+       if (!Array.isArray(CC)) return zC;
+       for (const ZC of CC.slice(0, QC.k.maxFrameTargets)) {
+         const CC = FC(ZC);
+         void 0 === CC || "string" === typeof CC && !NC(CC) || zC.push(CC)
```

#### 90. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1230` → after: `L1078-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1078-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1078-L1081) · [Before (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1230)

```diff
-       return kk
+       if (!(0, wC.n)(CC, 3)) return;
+       const zC = Math.max(Math.abs(CC[0]), Math.abs(CC[1]), Math.abs(CC[2])),
+         ZC = Math.hypot(CC[0] / zC, CC[1] / zC, CC[2] / zC);
+       return 0 === zC || zC * ZC < QC.k.minDirectionLength ? void 0 : [CC[0] / zC / ZC, CC[1] / zC / ZC, CC[2] / zC / ZC]
```

#### 91. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1235` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1085) · [Before (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1235)

```diff
-       return null === kk || "object" !== typeof kk ? kk : [bk(kk.kr), bk(kk.er)]
+       if (void 0 !== CC) return "string" === typeof CC ? bC.includes(CC) ? CC : void 0 : (0, wC.n)(CC, 4) ? [fC(CC[0], 0, 1, 0), fC(CC[1], QC.k.minEasingY, QC.k.maxEasingY, 0), fC(CC[2], 0, 1, 1), fC(CC[3], QC.k.minEasingY, QC.k.maxEasingY, 1)] : "linear"
```

#### 92. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1239` → after: `L1089-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1089-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1089-L1093) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1239)

```diff
-       return null === kk || "object" !== typeof kk ? kk : [Sk(kk.le, mk), Sk(kk.Gb, mk)]
+       if (CC) return {
+         maxYaw: fC(CC.maxYaw, 0, QC.k.maxPlayerLook, 0),
+         maxPitch: fC(CC.maxPitch, 0, QC.k.maxPlayerLook, 0),
+         returnMs: oC(CC.returnMs, 0, QC.k.maxReturnMs)
+       }
```

#### 93. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1243-L1244` → after: `L1098-L1107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1098-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1098-L1107) · [Before (L1243-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1243-L1244)

```diff
-       return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.hM), bk(ek.aM)];
-       var ek
+       var zC;
+       if ("object" !== typeof CC || null === CC) return;
+       const ZC = QC.k.maxTransitionMs,
+         wC = QC.k.minTransitionFadeMs;
+       return {
+         colour: "string" === typeof CC.colour && PC.test(CC.colour) ? CC.colour : QC.f,
+         outMs: fC(CC.outMs, wC, ZC, wC),
+         holdMs: fC(null !== (zC = CC.holdMs) && void 0 !== zC ? zC : 0, 0, ZC, 0),
+         inMs: fC(CC.inMs, wC, ZC, wC)
+       }
```

#### 94. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1248-L1249` → after: `L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1111) · [Before (L1248-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1248-L1249)

```diff
-       return null === (ek = kk) || "object" !== typeof ek ? ek : [ek.id, ek.PP];
-       var ek
+       return !0 === CC || void 0
```

#### 95. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1253-L1254` → after: `L1115-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1115-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1115-L1117) · [Before (L1253-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1253-L1254)

```diff
-       return null === (ek = kk) || "object" !== typeof ek ? ek : [ek.vf, bk(ek.Ef), ek.hf, bk(ek.tf), ek.Zf, ek.gf, ek.iP, bk(ek.DP), bk(ek.fP)];
-       var ek
+       if ("object" !== typeof CC || null === CC) return !1;
+       const zC = CC.lookAt;
+       return Number.isFinite(CC.timeMs) && (0, wC.n)(CC.position, 3) && (void 0 === zC || "string" === typeof zC || (0, wC.n)(zC, 3))
```

#### 96. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1258-L1259` → after: `L1121-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1121-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1121-L1129) · [Before (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1258-L1259)

```diff
-       return null === (ek = kk) || "object" !== typeof ek ? ek : [Sk(ek.HP, mk), ek.wP];
-       var ek
+       return {
+         ...CC,
+         timeMs: fC(CC.timeMs, 0, QC.k.maxPathMs, 0),
+         position: qC(CC.position),
+         lookAt: FC(CC.lookAt),
+         lookDirection: gC(CC.lookDirection),
+         fov: oC(CC.fov, QC.k.minFov, QC.k.maxFov),
+         easing: SC(CC.easing)
+       }
```

#### 97. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1263-L1264` → after: `L1133-L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1133-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1133-L1140) · [Before (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1263-L1264)

```diff
-       return null === (ek = kk) || "object" !== typeof ek ? ek : [Sk(ek.Bb, (kk => bk(kk))), bk(ek.cb), ek.Tb];
-       var ek
+       const zC = [];
+       if (!Array.isArray(CC)) return zC;
+       for (const ZC of CC.slice(0, QC.k.maxKeyframes)) {
+         if (!AC(ZC)) continue;
+         const CC = xC(ZC);
+         (0 === zC.length || CC.timeMs > zC[zC.length - 1].timeMs) && zC.push(CC)
+       }
+       return zC
```

#### 98. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1268-L1269` → after: `L1144-L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1144-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1144-L1185) · [Before (L1268-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1268-L1269)

```diff
-       return null === (ek = kk) || "object" !== typeof ek ? ek : [Sk(ek.kK, mk), bk(ek.eK), ek.iK];
-       var ek
+       if ("object" !== typeof CC || null === CC) return {
+         mode: "default"
+       };
+       const zC = {
+           blendInMs: oC(CC.blendInMs, 0, QC.k.maxBlendInMs),
+           blendEasing: SC(CC.blendEasing),
+           transition: GC(CC.transition),
+           letterbox: RC(CC.letterbox),
+           hideHud: RC(CC.hideHud)
+         },
+         ZC = {
+           mode: "default",
+           ...zC
+         };
+       if ("default" === CC.mode || "fixed" === CC.mode && !(0, wC.n)(CC.position, 3)) return ZC;
+       const bC = {
+ ... (26 more added lines; see GitHub link above)
```

#### 99. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1273-L1274` → after: `L1195-L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1195-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1195-L1196) · [Before (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1273-L1274)

```diff
-       return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.YD), bk(ek.LD)];
-       var ek
+       const zC = /(\d*\.?\d+)px/.exec(CC);
+       return zC ? Number(zC[1]) : null
```

#### 100. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1278-L1279` → after: `L1200-L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1200-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1200-L1333) · [Before (L1278-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1278-L1279)

```diff
-       return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.gP)];
-       var ek
+       return CC.split(/[\s,]+/).pop()
+     }
+     let nC = !1;
+     const fC = {
+       debug: !1,
+       align: "center",
+       vAlign: "middle",
+       fontSize: 14,
+       fontWeight: "",
+       fontStyle: "",
+       fontVariant: "",
+       font: "Arial",
+       lineHeight: null,
+       justify: !1,
+       drawText: function(CC, zC, QC, fC, oC, qC) {
+         if (oC <= 0 || qC <= 0 || this.fontSize <= 0) return {
+ ... (118 more added lines; see GitHub link above)
```

#### 101. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1282-L1283` → after: `L1357-L1364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1357-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1357-L1364) · [Before (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1282-L1283)

```diff
-     function Lk(kk) {
-       return bk(kk)
+     function FC(CC, zC, ZC) {
+       if ("string" !== typeof CC) return zC;
+       try {
+         const ZC = JSON.parse(CC);
+         return ZC && "object" === typeof ZC ? ZC : zC
+       } catch (QC) {
+         return void 0 !== ZC && console.error(`Couldn't parse ${ZC}`, QC), zC
+       }
```

#### 102. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1287-L1288` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1368) · [Before (L1287-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1287-L1288)

```diff
-       return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.lr), bk(ek.yr), bk(ek.kr), bk(ek.er)];
-       var ek
+       return FC(CC, null, "a leaderboard's rows")
```

#### 103. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1291-L1292` → after: `L1371-L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1371-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1371-L1376) · [Before (L1291-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1291-L1292)

```diff
-     function Ak(kk) {
-       return Kk(kk)
+     function NC(CC, zC) {
+       var ZC, QC;
+       return null !== zC && void 0 !== zC ? zC : {
+         status: null !== (ZC = CC.status) && void 0 !== ZC ? ZC : "loading",
+         entries: null !== (QC = CC.entries) && void 0 !== QC ? QC : []
+       }
```

#### 104. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1295-L1296` → after: `L1379-L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1379-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1379-L1380) · [Before (L1295-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1295-L1296)

```diff
-     function jk(kk) {
-       return Kk(kk)
+     function MC(CC, zC) {
+       return "number" === typeof CC && Number.isFinite(CC) && CC > 0 ? CC : zC
```

#### 105. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1299-L1301` → after: `L1383-L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1383-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1383-L1495) · [Before (L1299-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1299-L1301)

```diff
-     function sk(kk) {
-       return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.FP)];
-       var ek
+     function gC(CC, zC) {
+       const ZC = MC(CC.size, 1);
+       let QC = MC(CC.width, MC(2.5 * ZC, 2.5)),
+         wC = MC(CC.height, MC(3.75 * ZC, 3.75));
+       Number.isFinite(bC * wC / QC) && Number.isFinite(nC * QC / wC) || (QC = 2.5, wC = 3.75);
+       const fC = wC / QC,
+         oC = Math.max(1, Math.min(bC, zC / fC));
+       return {
+         width: QC,
+         height: wC,
+         layoutWidth: Math.max(bC, nC / fC),
+         layoutHeight: Math.max(nC, bC * fC),
+         pixelWidth: Math.round(oC),
+         pixelHeight: Math.round(Math.max(1, Math.min(zC, oC * fC)))
+       }
+     }
+ ... (97 more added lines; see GitHub link above)
```

#### 106. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1304-L1305` → after: `L1498-L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1498-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1498-L1499) · [Before (L1304-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1304-L1305)

```diff
-     function dk(kk) {
-       return kk
+     function pC(CC, zC) {
+       return Array.isArray(CC) ? CC.slice(0, zC).filter((CC => CC && Number.isFinite(CC.rank) && Number.isFinite(CC.value))) : []
```

#### 107. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1308-L1310` → after: `L1502-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1502-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1502-L1509) · [Before (L1308-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1308-L1310)

```diff
-     function Vk(kk) {
-       return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.ob), bk(ek.Zb)];
-       var ek
+     function PC(CC, zC) {
+       const ZC = [];
+       let QC = !1;
+       return CC.forEach(((wC, bC) => {
+         if (null !== zC && wC.value === zC.value) return void ZC.push(zC.rank);
+         const nC = bC > 0 && wC.value === CC[bC - 1].value;
+         nC || (QC = 0 === bC && 1 !== wC.rank), ZC.push(nC && !QC ? ZC[bC - 1] : wC.rank)
+       })), ZC
```

#### 108. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1314` → after: `L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1520) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1314)

```diff
-       return bk(kk)
+       return Array.from(CC).length
```

#### 109. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1318` → after: `L1524-L1538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1524-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1524-L1538) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1318)

```diff
-       return xk(kk)
+       const zC = [""];
+       let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         wC = "";
+       const bC = () => {
+         zC.push(""), ZC = 0, wC = ""
+       };
+       for (const nC of CC.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
+         if (/^\r?\n$/.test(nC)) bC();
+         else if (/^\s+$/.test(nC)) wC += nC;
+       else if (nC.length > 0) {
+         const CC = Array.from(nC);
+         ZC > 0 && ZC + wC.length + CC.length > QC && bC(), zC[zC.length - 1] += wC, ZC += wC.length, wC = "";
+         for (const wC of CC) ZC >= QC && bC(), zC[zC.length - 1] += wC, ZC++
+       }
+       return zC[zC.length - 1] += wC, zC
```

#### 110. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1322` → after: `L1550-L1556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1550-L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1550-L1556) · [Before (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1322)

```diff
-       return xk(kk)
+       if (!CC) return [...bC];
+       try {
+         const [zC, ZC, QC] = wC()(CC).rgb().array();
+         return [zC / 255, ZC / 255, QC / 255]
+       } catch (zC) {
+         return console.warn(`Invalid groundArrowPath colour "${CC}":`, zC), [...bC]
+       }
```

#### 111. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1326-L1327` → after: `L1571-L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1571-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1571-L1573) · [Before (L1326-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1326-L1327)

```diff
-       return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.SP)];
-       var ek
+       var zC;
+       const ZC = Math.min(screen.width, screen.height) * (null !== (zC = (0, QC.c)()) && void 0 !== zC ? zC : (0, wC.m)());
+       return Math.max(window.innerHeight * (0, wC.m)(), ZC) / (0, wC.q)(CC)
```

#### 112. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1330-L1334` → after: `L1576-L1577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1576-L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1576-L1577) · [Before (L1330-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1330-L1334)

```diff
-     function zk(kk) {
-       return (Mk ??= (0, Dk.i)().map((kk => kk.name)), Mk).map((ek => {
-         return "string" === typeof(ik = kk[ek]) ? bk(ik) : Sk(ik, mk);
-         var ik
-       }))
+     function oC(CC, zC, ZC) {
+       return zC / (2 * Math.tan(ZC / 2)) > nC ? CC : qC(CC)
```

#### 113. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1338-L1339` → after: `L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1581) · [Before (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1338-L1339)

```diff
-       return null === (ek = kk) || "object" !== typeof ek ? ek : [ek.Nb, ek.Rb, ek.Jb];
-       var ek
+       return CC.map((CC => CC.replace(bC, "/textures/skyBoxes/$1/1024/$2")))
```

#### 114. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1342` → after: `L1584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1584) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1342)

```diff
-   9105: (kk, ek, ik) => {
+   33998: (CC, zC, ZC) => {
```

#### 115. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1344-L1345` → after: `L1586-L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1586-L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1586-L1590) · [Before (L1344-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1344-L1345)

```diff
-       c: () => fk,
-       e: () => Sk
+       d: () => bC,
+       e: () => fC,
+       h: () => nC,
+       l: () => wC,
+       m: () => QC
```

#### 116. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1347-L1349` → after: `L1592-L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1592-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1592-L1682) · [Before (L1347-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1347-L1349)

```diff
-     var Dk = ik(9063);
-     const fk = "Air",
-       Sk = Object.freeze(new Dk.d(fk, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+     const QC = {
+         default: {
+           type: "earth",
+           vertexTint: [137, 207, 240]
+         },
+         gloomy: {
+           type: "custom",
+           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
+           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
+           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
+           px: "/textures/skyBoxes/gloomy/_px.jpg",
+           py: "/textures/skyBoxes/gloomy/_py.jpg",
+           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
+         },
+         interstellar: {
+           type: "custom",
+ ... (75 more added lines; see GitHub link above)
```

#### 117. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1351` → after: `L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1684) · [Before (L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1351)

```diff
-   38805: (kk, ek, ik) => {
+   39022: (CC, zC, ZC) => {
```

#### 118. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1353-L1354` → after: `L1686-L1693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1686-L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1686-L1693) · [Before (L1353-L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1353-L1354)

```diff
-       d: () => Sk,
-       e: () => rk
+       b: () => FC,
+       f: () => WC,
+       g: () => QC,
+       k: () => oC,
+       m: () => wC,
+       o: () => qC,
+       s: () => fC,
+       u: () => nC
```

#### 119. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1356-L1359` → after: `L1695-L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1695-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1695-L1697) · [Before (L1356-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1356-L1359)

```diff
-     var Dk = ik(314),
-       fk = ik(4409);
-     const Sk = new Set(fk.p),
-       bk = new Map;
+     const QC = ["linear", "easeIn", "easeOut", "easeInOut"],
+       wC = ["movement", "camera", "cursor"],
+       bC = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];
```

#### 120. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L1362-L1365` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/191.js#L1700) · [Before (L1362-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/191.js#L1362-L1365)

```diff
-       let ik = bk.get(ek);
-       void 0 === ik && (ik = new Map, bk.set(ek, ik));
-       let fk = ik.get(kk);
-       return void 0 === fk && (fk = `${kk}${(0,Dk.w)(ek)}`, ik.set(kk, fk)), fk
+       return fC(CC, zC, bC)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/192.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/192.js` (49 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4)

#### 1. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2)

```diff
- export const ids = [51, 192];
+ export const ids = [192];
```

#### 2. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L4-L230` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L4) · [Before (L4-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L4-L230)

```diff
-   38128: (kk, ek, ik) => {
-     var Dk = {
-       "./combat_1.png": 38134,
-       "./dungeon_crumbling_crypt.png": 38143,
-       "./dungeon_frozen_hollow.png": 38152,
-       "./dungeon_wildwood_grove.png": 38161,
-       "./dungeons.png": 38165,
-       "./farming_1.png": 38170,
-       "./fishing_1.png": 38176,
-       "./hub.png": 38184,
-       "./island.png": 38192,
-       "./mining_1.png": 38200,
-       "./mining_1_bridge.png": 38203,
-       "./mining_1_gallery.png": 38212,
-       "./mining_1_hollow.png": 38215,
-       "./mining_1_village.png": 38219
- ... (211 more removed lines; see GitHub link above)
+   34003: (CC, zC, ZC) => {
```

#### 3. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L232` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L6-L7) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L232)

```diff
-       default: () => KP
+       getLatestPublishedUpdateLog: () => fC,
+       updateLogsData: () => nC
```

#### 4. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L234-L236` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L9-L11) · [Before (L234-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L234-L236)

```diff
-     const Dk = "island";
-     var fk = ik(314);
-     const Sk = (0, fk.nb)([0, 0, -1]),
+     var QC = ZC(791),
+       wC = ZC(310);
+     const bC = "\xa0\xa0\xa0\xa0",
```

#### 5. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L238-L239` → after: `L13-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L13-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L13-L29) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L238-L239)

```diff
-         name: "S",
-         bearing: (0, fk.nb)([0, 0, 1])
+         author: ["Oliver", "Harry"],
+         date: new Date("2026-11-17T16:00:00Z"),
+         title: "\u2728Characters are back in the Store!\u2728",
+         description: "Every character from the Y2K, Spring and Astro packs is back, and you can now buy each one on its own!\n\n\ud83d\udcbf Y2K: Alice, Roy, Ela and Tilly\n\ud83c\udf37 Spring: Harry, Gnome, Poppy and Daisy\n\ud83d\ude80 Astro: Zara, Nova, Rex and Vex\n\nAlready  … [truncated]
+         image: "CosmeticPacks.jpg",
+         onClickImage: {
+           type: "openMenu",
+           menu: wC.o.COSMETIC_SHOP
+         },
+         callToAction: {
+           color: "rainbow",
+           label: "Go to Store!",
+           action: {
+             type: "openMenu",
+             menu: wC.o.COSMETIC_SHOP
+           }
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L241-L242` → after: `L31-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L31-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L31-L51) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L241-L242)

```diff
-         name: "E",
-         bearing: (0, fk.nb)([-1, 0, 0])
+         author: ["pegasys", "Harry"],
+         date: new Date("2026-11-12T14:00:00Z"),
+         title: "Build a Factory 2: Nuclear Expansion \u2622\ufe0f",
+         description: "Power your Core into the Atomic tiers and build a Nuclear Reactor!\n\n Keep it cool with Cryo from the Coolant Mixer, smash particles in the Collider, catch Isotope comets and suit up in Nova gear with a Jetpack. Then head down to the Wilds and test an Atomi … [truncated]
+         image: "build_a_factory_2_nuclear.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "buildAFactory2"
+         },
+         mobileNotification: {
+           title: "Build a Factory 2: Nuclear Expansion \u2622\ufe0f",
+           body: "Build a Nuclear Reactor, fly with a Jetpack and test an Atomic Bomb!"
+         },
+         callToAction: {
+           color: "blue",
+           label: "Go nuclear",
+ ... (5 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L244-L245` → after: `L53-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L53-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L53-L69) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L244-L245)

```diff
-         name: "N",
-         bearing: Sk
+         author: "Tom",
+         date: new Date("2026-11-11T10:00:00Z"),
+         title: "New Shader Packs Page! \ud83c\udfa8",
+         description: "Players using WebGPU can browse and share shaders!",
+         image: "shader_packs.jpg",
+         onClickImage: {
+           type: "navigate",
+           to: "/shader-packs"
+         },
+         callToAction: {
+           color: "blue",
+           label: "shaderPackListing:browse",
+           action: {
+             type: "navigate",
+             to: "/shader-packs"
+           }
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L247-L701` → after: `L71-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L71-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L71-L89) · [Before (L247-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L247-L701)

```diff
-         name: "W",
-         bearing: (0, fk.nb)([1, 0, 0])
-       }];
- 
-     function rk(kk, ek, ik) {
-       return [100 * (ik.mapMaxX - kk) / (ik.mapMaxX - ik.mapMinX), 100 * (ek - ik.mapMinZ) / (ik.mapMaxZ - ik.mapMinZ)]
-     }
- 
-     function Pk(kk, ek, ik) {
-       const fk = "local" === ek,
-         Sk = kk.background,
-         bk = ek => Sk ? rk(ek[0] - kk.mapOrigin[0], ek[2] - kk.mapOrigin[2], Sk.bounds) : [50, 50],
-         Pk = (kk.insideDungeon ? [] : kk.landmarks).map((kk => {
-           var ek, Dk;
-           return {
-             id: kk.id,
- ... (439 more removed lines; see GitHub link above)
+         author: ["pegasys", "AnxietreeDev"],
+         date: new Date("2026-11-04T12:00:00Z"),
+         title: "New Lucky Bedwars Map: Snowdrift! \u2744\ufe0f",
+         description: "Battle across frozen islands and icy towers in Snowdrift - play now in Lucky Bedwars!",
+         image: "lucky_bedwars_snowdrift.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "luckyBedwars"
+         },
+         mobileNotification: {
+           title: "New Lucky Bedwars Map: Snowdrift! \u2744\ufe0f",
+           body: "Play the new Lucky Bedwars map - Snowdrift!"
+         },
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L704-L2388` → after: `L102-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L102-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L102-L128) · [Before (L704-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L704-L2388)

```diff
-         combat_1: {
-           tower_roof: {
-             min: [202, 69, 151],
-             max: [203, 71, 151],
-             unlockedBlock: "Red Portal",
-             lockedBlock: "Grey Portal"
-           },
-           tower_exit: {
-             min: [202, 80, 133],
-             max: [203, 82, 133],
-             unlockedBlock: "Red Portal",
-             lockedBlock: "Grey Portal"
-           }
-         }
-       },
-       hk = "Compressed Messy Stone",
- ... (1669 more removed lines; see GitHub link above)
+         callToAction: {
+           color: "blue",
+           label: "Brave the Infernos",
+           action: {
+             type: "playGame",
+             game: "skyblock"
+           }
+         }
+       }, {
+         author: ["pegasys", "Oliver", "Xander"],
+         date: new Date("2026-10-28T12:00:00Z"),
+         title: "New Game: Trick or Treat \ud83c\udf83",
+         description: "Race around a haunted town grabbing glowing jack o'lanterns!\n\n Knock on doors for treats, throw tricks at your rivals, hunt down the Great Pumpkin and run from the crones. Whoever holds the most treats at midnight wins!\n\n The event has ended. Everyone wh … [truncated]
+         image: "trick_or_treat.jpg",
+         mobileNotification: {
+           title: "New Game: Trick or Treat \ud83c\udf83",
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2390-L2397` → after: `L130-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L130-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L130-L146) · [Before (L2390-L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2390-L2397)

```diff
-         tiers: Ci
-       }, {
-         id: "iron",
-         category: "mining",
-         item: "Raw Iron",
-         blocks: {
-           "Iron Ore": 1,
-           "Pure Iron Ore": 9
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "openSettings",
+             category: "texturePack"
+           }
+         }
+       }, {
+         author: "pegasys",
+         date: new Date("2026-10-22T12:00:00Z"),
+         title: "New Game: Build a Factory 2 \ud83c\udfed",
+         description: "Your own floating island, your own factory!\n\n Mine ore in the Wilds below, automate it with machines and conveyor belts, and power up your Core to unlock new tech. Your factory keeps working even while you're away!",
+         image: "build_a_factory_2.jpg",
+         onClickImage: {
+           type: "playGame",
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2399-L2406` → after: `L148-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L148-L150) · [Before (L2399-L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2399-L2406)

```diff
-         tiers: Ai
-       }, {
-         id: "gold",
-         category: "mining",
-         item: "Raw Gold",
-         blocks: {
-           "Gold Ore": 1,
-           "Pure Gold Ore": 9
+         mobileNotification: {
+           title: "New Game: Build a Factory 2 \ud83c\udfed",
+           body: "Build machines on your own floating island and watch them work - even while you're away!"
```

#### 12. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2408-L2415` → after: `L152-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L152-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L152-L181) · [Before (L2408-L2415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2408-L2415)

```diff
-         tiers: Ai
-       }, {
-         id: "diamond",
-         category: "mining",
-         item: "Diamond",
-         blocks: {
-           "Diamond Ore": 1,
-           "Pure Diamond Ore": 9
+         callToAction: {
+           color: "blue",
+           label: "Start building",
+           action: {
+             type: "playGame",
+             game: "buildAFactory2"
+           }
+         }
+       }, {
+         date: new Date("2026-10-21T13:00:00Z"),
+         title: "Skyblock Official Trailer",
+         description: "We have released the official trailer for Bloxd Skyblock!",
+         youtubeVideoId: "A2LktM6_YFM",
+         callToAction: {
+           color: "blue",
+           label: "Watch on YouTube",
+ ... (14 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2417-L2424` → after: `L183-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L183-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L183-L202) · [Before (L2417-L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2417-L2424)

```diff
-         tiers: ji
-       }, {
-         id: "moonstone",
-         category: "mining",
-         item: "Moonstone",
-         blocks: {
-           "Moonstone Ore": 1,
-           "Pure Moonstone Ore": 9
+         callToAction: {
+           color: "blue",
+           label: "Explore the mines",
+           action: {
+             type: "playGame",
+             game: "skyblock"
+           }
+         }
+       }, {
+         author: "Oliver",
+         date: new Date("2026-10-14T12:00:00Z"),
+         title: "Invite Your Friends! \ud83d\udce8",
+         description: "Invite a friend to your game or party from their profile, and they'll get a notification to join you.\n\n Missed one? Your invites wait in the Social menu until they expire.",
+         callToAction: {
+           color: "blue",
+           label: "Open Social",
+ ... (4 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2426` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L204) · [Before (L2426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2426)

```diff
-         tiers: ji
+         showPopupOnLoad: !1
```

#### 15. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2428-L2432` → after: `L206-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L206-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L206-L217) · [Before (L2428-L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2428-L2432)

```diff
-         id: "stone",
-         category: "mining",
-         item: "Stone",
-         blocks: {
-           Stone: 1
+         author: ["JBL", "AnxietreeDev"],
+         date: new Date("2026-10-13T13:45:00Z"),
+         title: "New Horror Hotel Rooms!",
+         description: "Just when you thought you'd completed it...\n Decide if you want to find out the meaning of life!",
+         image: "horror_hotel_more_rooms.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "horrorHotel"
+         },
+         mobileNotification: {
+           title: "New Horror Hotel Rooms!",
+           body: "Just when you thought you'd completed it...\n Decide if you want to find out the meaning of life!"
```

#### 16. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2434` → after: `L219-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L219-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L219-L226) · [Before (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2434)

```diff
-         tiers: Ci
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "playGame",
+             game: "horrorHotel"
+           }
+         }
```

#### 17. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2436-L2440` → after: `L228-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L228-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L228-L235) · [Before (L2436-L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2436-L2440)

```diff
-         id: "wheat",
-         category: "farming",
-         item: "Wheat",
-         blocks: {
-           "Wheat|FreshlyGrown": 1
+         author: "pegasys",
+         date: new Date("2026-10-09T12:00:00Z"),
+         title: "Lucky Bedwars: New Armour & Weapons! \u2694\ufe0f",
+         description: "Open Super Armour and Super Weapon lucky blocks to loot powerful new gear sets, each with its own special ability:\n \u2022 Spectral Armour - stand still to turn invisible.\n \u2022 Astral Armour - jump higher.\n \u2022 Magmasteel Weapons - set the ground un … [truncated]
+         image: "lucky_bedwars_gear_sets.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "luckyBedwars"
```

#### 18. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2442` → after: `L237-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L237-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L237-L248) · [Before (L2442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2442)

```diff
-         tiers: Li
+         mobileNotification: {
+           title: "Lucky Bedwars: New Armour & Weapons! \u2694\ufe0f",
+           body: "Loot new armour and weapon sets with special abilities - turn invisible, set enemies on fire and more!"
+         },
+         callToAction: {
+           color: "blue",
+           label: "Play now!",
+           action: {
+             type: "playGame",
+             game: "luckyBedwars"
+           }
+         }
```

#### 19. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2444-L2448` → after: `L250-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L250-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L250-L257) · [Before (L2444-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2444-L2448)

```diff
-         id: "carrot",
-         category: "farming",
-         item: "Carrot",
-         blocks: {
-           "Carrot Plant|FreshlyGrown": 1
+         author: ["Dirty Flea Sack", "ellie", "Harry", "AnxietreeDev"],
+         date: new Date("2026-10-07T08:00:00Z"),
+         title: "New Game: Skyblock!",
+         description: "Your Skyblock adventure begins! Complete quests, explore new islands and conquer dungeons in our new questing RPG!",
+         image: "skyblock_thumbnail_large.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "skyblock"
```

#### 20. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2450` → after: `L259-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L259-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L259-L266) · [Before (L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2450)

```diff
-         tiers: Li
+         callToAction: {
+           color: "blue",
+           label: "Start your adventure",
+           action: {
+             type: "playGame",
+             game: "skyblock"
+           }
+         }
```

#### 21. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2452-L2456` → after: `L268-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L268-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L268-L279) · [Before (L2452-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2452-L2456)

```diff
-         id: "potato",
-         category: "farming",
-         item: "Raw Potato",
-         blocks: {
-           "Potato Plant|FreshlyGrown": 1
+         author: "AnxietreeDev",
+         date: new Date("2026-10-02T12:00:00Z"),
+         title: "New Lucky Bedwars Map: Turtles! \ud83d\udc22",
+         description: "Turtles have come to the table to serve up chaos - play now in Lucky Bedwars!",
+         image: "lucky_bedwars_turtles.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "luckyBedwars"
+         },
+         mobileNotification: {
+           title: "New Lucky Bedwars Map: Turtles! \ud83d\udc22",
+           body: "Play the new Lucky Bedwars map - Turtles!"
```

#### 22. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2458` → after: `L281-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L281-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L281-L288) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2458)

```diff
-         tiers: Li
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "playGame",
+             game: "luckyBedwars"
+           }
+         }
```

#### 23. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2460-L2464` → after: `L290-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L290-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L290-L297) · [Before (L2460-L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2460-L2464)

```diff
-         id: "beetroot",
-         category: "farming",
-         item: "Beetroot",
-         blocks: {
-           "Beetroot Plant|FreshlyGrown": 1
+         author: "pegasys",
+         date: new Date("2026-09-30T12:00:00Z"),
+         title: "New Game: Lucky Bedwars \ud83c\udf40",
+         description: "Open lucky blocks, upgrade your gear and break enemy beds.\nLast team standing wins!",
+         image: "lucky_bedwars.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "luckyBedwars"
```

#### 24. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2466` → after: `L299-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L299-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L299-L330) · [Before (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2466)

```diff
-         tiers: Ai
+         mobileNotification: {
+           title: "New Game: Lucky Bedwars \ud83c\udf40",
+           body: "Open lucky blocks, upgrade your gear and break enemy beds. Last team standing wins!"
+         },
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "playGame",
+             game: "luckyBedwars"
+           }
+         }
+       }, {
+         author: "Slushie",
+         date: new Date("2026-09-29T12:00:00Z"),
+         title: "Stairs!!!",
+ ... (16 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2468-L2472` → after: `L332-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L332-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L332-L338) · [Before (L2468-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2468-L2472)

```diff
-         id: "melon",
-         category: "farming",
-         item: "Melon",
-         blocks: {
-           Melon: 1
+         date: new Date("2026-09-23T12:00:00Z"),
+         title: "Parkour Place!",
+         description: "Discover a hand-picked collection of parkour games in Parkour Place!",
+         image: "parkour_place.jpg",
+         onClickImage: {
+           type: "navigate",
+           to: "/place/parkourPlace"
```

#### 26. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2474` → after: `L340-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L340-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L340-L361) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2474)

```diff
-         tiers: Ci
+         callToAction: {
+           color: "blue",
+           label: "Go to Parkour Place",
+           action: {
+             type: "navigate",
+             to: "/place/parkourPlace"
+           }
+         }
+       }, {
+         date: new Date("2026-09-22T12:00:00Z"),
+         title: "Oasis Biome",
+         image: "oasis_biome.jpg",
+         author: "Slushie",
+         description: "Discover a new oasis biome in Sandbox, with big palm trees, and lakes surrounded by lush grass!\n \u2022 Hop across lily pads that you can stand on!\n \u2022 Tame and saddle a camel, then bring a friend along for the ride! Two people can ride on a camel.\n \ … [truncated]
+         callToAction: {
+           color: "blue",
+ ... (6 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2476-L2480` → after: `L363-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L363-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L363-L370) · [Before (L2476-L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2476-L2480)

```diff
-         id: "watermelon",
-         category: "farming",
-         item: "Watermelon",
-         blocks: {
-           Watermelon: 1
+         date: new Date("2026-09-18T12:00:00Z"),
+         title: "New Bedwars Map: Pine! \ud83c\udf32",
+         description: "Play now in Solos and Duos",
+         image: "bedwars_pine.jpg",
+         author: "Harry",
+         mobileNotification: {
+           title: "New Bedwars Map: Pine! \ud83c\udf32",
+           body: "Play the new Bedwars map - Pine!"
```

#### 28. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2482` → after: `L372-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L372-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L372-L379) · [Before (L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2482)

```diff
-         tiers: Ci
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "playGame",
+             game: "bedwars_duo"
+           }
+         }
```

#### 29. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2484-L2488` → after: `L381-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L381-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L381-L388) · [Before (L2484-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2484-L2488)

```diff
-         id: "maple_log",
-         category: "foraging",
-         item: "Maple Log",
-         blocks: {
-           "Maple Log": 1
+         date: new Date("2026-09-10T12:00:00Z"),
+         title: "New Bedwars Map: Blossom! \ud83c\udf38",
+         description: "Redesigned, revamped and rebalanced! Back from its brief spotlight as a permanent addition - play now in Squads and Trios!",
+         image: "bedwars_blossom.jpg",
+         author: "AnxietreeDev",
+         mobileNotification: {
+           title: "New Bedwars Map: Blossom! \ud83c\udf38",
+           body: "Redesigned, revamped and rebalanced - play the new Bedwars map, Blossom!"
```

#### 30. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2490` → after: `L390-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L390-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L390-L411) · [Before (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2490)

```diff
-         tiers: Ci
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "playGame",
+             game: "bedwars_4v4v4v4"
+           }
+         }
+       }, {
+         date: new Date("2026-09-09T12:00:00Z"),
+         title: "Featured Game: The Dark!",
+         description: "We are featuring The Dark as a really cool custom game we like! Play it to see what all the hype is about!",
+         image: "the_dark.jpg",
+         author: "Harry",
+         callToAction: {
+           color: "blue",
+ ... (6 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2492-L2496` → after: `L413-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L413-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L413-L420) · [Before (L2492-L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2492-L2496)

```diff
-         id: "pear_log",
-         category: "foraging",
-         item: "Pear Log",
-         blocks: {
-           "Pear Log": 1
+         date: new Date("2026-09-04T12:00:00Z"),
+         title: "Bedwars Arena Collapse! \ud83d\udd25",
+         description: "No more late game stalling - towards the end of the match the arena will now start collapsing from the edges inwards until only the void is left.\n \u2022 Beds, generators and shops caught by the collapse are destroyed\n \u2022 Watch the countdown and stay i … [truncated]
+         image: "bedwars_arena_collapse.jpg",
+         author: "pegasys",
+         mobileNotification: {
+           title: "Bedwars Arena Collapse! \ud83d\udd25",
+           body: "Late game, the arena now collapses from the edges - no more stalling!"
```

#### 32. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2498` → after: `L422-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L422-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L422-L429) · [Before (L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2498)

```diff
-         tiers: Ai
+         callToAction: {
+           color: "blue",
+           label: "Play now!",
+           action: {
+             type: "playGame",
+             game: "bedwars_4v4v4v4"
+           }
+         }
```

#### 33. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2500-L2504` → after: `L431-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L431-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L431-L438) · [Before (L2500-L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2500-L2504)

```diff
-         id: "palm_log",
-         category: "foraging",
-         item: "Palm Log",
-         blocks: {
-           "Palm Log": 1
+         date: new Date("2026-08-27T12:00:00Z"),
+         title: "New Bedwars Map: Enchanted! \u2728",
+         description: "Play now in Squads and Trios",
+         image: "bedwars_enchanted.jpg",
+         author: "Harry",
+         mobileNotification: {
+           title: "New Bedwars Map: Enchanted! \u2728",
+           body: "Play the new Bedwars map - Enchanted!"
```

#### 34. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2506-L6148` → after: `L440-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L440-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L440-L446) · [Before (L2506-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L2506-L6148)

```diff
-         tiers: Ai
-       }, Vi("wheatfish", "Wheatfish"), Vi("darter", "Darter"), Vi("sunset_minnow", "Sunset Minnow"), Vi("root_flounder", "Root Flounder"), Vi("greenfin_loach", "Greenfin Loach"), Vi("red_strongfish", "Red Strongfish"), Vi("green_strongfish", "Green Strongfish"), Vi("boomerang_fis … [truncated]
-         id: "rotten_flesh",
-         category: "combat",
-         item: "Rotten Flesh",
-         drops: ["Rotten Flesh"],
-         tiers: Ci
-       }, {
-         id: "rotten_brain",
-         category: "combat",
-         item: "Rotten Brain",
-         drops: ["Rotten Brain"],
-         tiers: ji
-       }, {
-         id: "iron_fragment",
-         category: "combat",
- ... (3627 more removed lines; see GitHub link above)
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "playGame",
+             game: "bedwars_4v4v4v4"
+           }
```

#### 35. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L6150-L6185` → after: `L448-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L448-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L448-L456) · [Before (L6150-L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L6150-L6185)

```diff
-       }
-     }
- 
-     function sS(kk, ek, ik) {
-       return yS(jS, kk, ek, ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
-     }
- 
-     function dS(kk) {
-       return "number" === typeof kk ? [kk, kk] : kk
-     }
- 
-     function VS(kk, ek, ik) {
-       const {
-         rise: Dk = 0,
-         shift: fk = 0,
-         torso: Sk = 0,
- ... (20 more removed lines; see GitHub link above)
+       }, {
+         date: new Date("2026-08-21T12:00:00Z"),
+         title: "Bedwars Mutations! \ud83e\uddec",
+         description: "Four new Bedwars mutations, picked on the map vote:\n \u2022 Treasure Guardians - Guardians protect the Diamond and Moonstone generators.\n \u2022 Weapon Roulette - every respawn rolls you a new random weapon.\n \u2022 Specialists - your chosen role grants r … [truncated]
+         image: "bedwars_mutations.jpg",
+         author: "pegasys",
+         mobileNotification: {
+           title: "Bedwars Mutations! \ud83e\uddec",
+           body: "Four new mutations - Guardians, random weapons, role perks and faster ores!"
```

#### 36. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L6187-L6189` → after: `L458-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L458-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L458-L464) · [Before (L6187-L6189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L6187-L6189)

```diff
-         ArmRightMesh: {
-           timeFraction: kk,
-           rotation: ik([nk, 0, -Hk])
+         callToAction: {
+           color: "blue",
+           label: "Play now!",
+           action: {
+             type: "playGame",
+             game: "bedwars_4v4v4v4"
+           }
```

#### 37. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L6191-L6235` → after: `L466-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L466-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L466-L514) · [Before (L6191-L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L6191-L6235)

```diff
-       }
-     }
-     const FS = [1.0625, -1, 0];
- 
-     function uS(kk) {
-       return "number" === typeof kk ? [kk, kk] : kk
-     }
- 
-     function qS(kk, ek, ik) {
-       const {
-         drop: Dk = 0,
-         shift: fk = 0,
-         torso: Sk = 0,
-         tilt: bk = 0,
-         nod: rk = 0,
-         cock: Pk = 0,
- ... (29 more removed lines; see GitHub link above)
+       }, {
+         date: new Date("2026-08-14T12:00:00Z"),
+         title: "Miner's Delight! \u26cf\ufe0f \n Bedwars",
+         description: "A new Bedwars mutation!\n\n Ores respawn twice as fast, and have a 50% chance of dropping double.\n\n Look for it on the map vote.",
+         image: "bedwars_miners_delight.png",
+         author: "pegasys",
+         callToAction: {
+           color: "blue",
+           label: "Play now!",
+           action: {
+             type: "playGame",
+             game: "bedwars_4v4v4v4"
+           }
+         }
+       }, {
+         date: new Date("2026-08-11T12:00:00Z"),
+ ... (33 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L6237-L6240` → after: `L516-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L516-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L516-L522) · [Before (L6237-L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L6237-L6240)

```diff
-         LegRightMesh: {
-           timeFraction: kk,
-           position: Lk,
-           rotation: ik([-mk[1], 0, 0])
+         callToAction: {
+           color: "blue",
+           label: "Storm the frontline!",
+           action: {
+             type: "playGame",
+             game: "frontline"
+           }
```

#### 39. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L6242-L6252` → after: `L524-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L524-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L524-L532) · [Before (L6242-L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L6242-L6252)

```diff
-       }
-     }
-     var IS = ik(36754),
-       zS = ik(38057),
-       QS = ik(38226);
- 
-     function vS(kk, ek, ik) {
-       var Dk, fk;
-       const Sk = function() {
-           let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-           return kk + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - kk) * ik
+       }, {
+         date: new Date("2026-07-20T13:00:00Z"),
+         title: "Slimes and Night are in Survival! \ud83c\udf19",
+         image: "day_night_slime.jpg",
+         description: "Will tamed slimes help you survive the night?\n \u2022 Day & Night is now enabled by default in survival\n \u2022 New rare slime mobs with bright slime trails\n \u2022 New mob settings for custom game devs",
+         author: ["Harry", "Tom"],
+         mobileNotification: {
+           title: "Slimes and Day & Night in Survival!",
+           body: "Survival is bigger than ever!"
```

#### 40. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L6254-L6499` → after: `L534-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L534-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L534-L550) · [Before (L6254-L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L6254-L6499)

```diff
-         [bk, rk] = null !== (Dk = kk.legs) && void 0 !== Dk ? Dk : [0, 0],
-         [Pk, mk] = null !== (fk = ek.legs) && void 0 !== fk ? fk : [0, 0];
-       return {
-         drop: Sk(kk.drop, ek.drop),
-         shift: Sk(kk.shift, ek.shift),
-         torso: Sk(kk.torso, ek.torso),
-         nod: Sk(kk.nod, ek.nod),
-         tilt: Sk(kk.tilt, ek.tilt),
-         legs: [Sk(bk, Pk), Sk(rk, mk)],
-         arms: Sk(kk.arms, ek.arms),
-         spread: Sk(kk.spread, ek.spread)
-       }
-     }
-     const ES = {
-         drop: .1,
-         torso: .22,
- ... (230 more removed lines; see GitHub link above)
+         callToAction: {
+           color: "blue",
+           label: "Try it now!",
+           action: {
+             type: "playGame",
+             game: "classic_survival"
+           }
+         }
+       }, {
+         date: new Date("2026-07-15T09:00:00Z"),
+         title: "Containment Breach - New Anomalies! \ud83e\uddea",
+         image: "containmentBreachBroodfather.jpg",
+         description: 'Two new anomalies just breached containment:\n \u2022 ANOM-0808 "Broodfather" \ud83e\udddf - spawns zombies faster than you can kill them, and the corpses explode. Don\'t stand near the bodies!\n \u2022 ANOM-1033 "Deadlock" \ud83d\udca3 - the room is rigged  … [truncated]
+         author: "ellie",
+         mobileNotification: {
+           title: "Containment Breach update \ud83e\uddea",
+ ... (1 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L6501-L6615` → after: `L552-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L552-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L552-L568) · [Before (L6501-L6615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L6501-L6615)

```diff
-         style: ZS(Pk.colour),
-         children: [(0, Qf.jsxs)("header", {
-           className: "SkyblockSkillsHeader",
-           children: [(0, Qf.jsx)("h2", {
-             id: "skyblockBossPickerTitle",
-             children: fk.dungeonName
-           }), (0, Qf.jsx)(Tf.n, {
-             padIgnore: !0,
-             onClick: Sk.dismiss
-           })]
-         }), (0, Qf.jsxs)("div", {
-           className: "SkyblockBossPickerBody",
-           children: [(0, Qf.jsxs)("div", {
-             className: "SkyblockBossPickerStage",
-             children: [(0, Qf.jsx)(Tf.f, {
-               className: "SkyblockBossPickerTurn Previous",
- ... (99 more removed lines; see GitHub link above)
+         callToAction: {
+           color: "blue",
+           label: "Fight the new anomalies!",
+           action: {
+             type: "playGame",
+             game: "containmentBreach"
+           }
+         }
+       }, {
+         date: new Date("2026-07-08T09:00:00Z"),
+         title: "Bedwars ranked 1v1 and new 4v4 map",
+         image: "4v4_interchange.jpg",
+         description: "New ranked Bedwars mode for 1v1! \u2694\ufe0f\nSmaller map and faster pace, no teammates to blame now.\n\nAnd try out the new 4v4 map, Interchange! \ud83d\ude97\n\nAlso includes quality of life changes:\n \u2022 Win streak system\n \u2022 MVP system\n \u2022 … [truncated]
+         author: ["Harry", "jasninus", "pixelbaker"],
+         mobileNotification: {
+           title: "Play 1v1 Bedwars now!",
+ ... (1 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L6617-L6728` → after: `L570-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L570-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L570-L600) · [Before (L6617-L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L6617-L6728)

```diff
-         children: [(0, Qf.jsxs)("div", {
-           className: "SkyblockDungeonCardTitle",
-           children: [(0, Qf.jsx)("strong", {
-             children: ek.name
-           }), (0, Qf.jsx)("span", {
-             children: ek.beatenSummary
-           })]
-         }), (0, Qf.jsx)("div", {
-           className: "SkyblockDungeonChips",
-           children: ek.difficulties.map((kk => (0, Qf.jsxs)("span", {
-             className: jf()("SkyblockDungeonChip", "SkyblockDifficulty", {
-               Beaten: kk.beaten
-             }),
-             style: ZS(kk.colour),
-             title: kk.summary,
-             children: [kk.beaten && (0, Qf.jsx)("span", {
- ... (96 more removed lines; see GitHub link above)
+         callToAction: {
+           color: "blue",
+           label: "Play 1v1 now!",
+           action: {
+             type: "playGame",
+             game: "bedwars_1v1"
+           }
+         }
+       }, {
+         date: new Date("2026-07-06T09:00:00Z"),
+         title: "Frontline \u2694\ufe0f vs Containment Breach \ud83e\uddea",
+         image: "FrontlineVContainmentBreach.png",
+         description: "Two new games are here, with two completely different fights. Which one's your favorite?\nFrontline \u2694\ufe0f :\n \u2022 Classic all-out warfare on a massive scale\n \u2022 Grab a vehicle, capture points for your team, and earn new powerful kits!\nContain … [truncated]
+         author: ["ellie", "Harry"],
+         mobileNotification: {
+           title: "Two new squad shooters \u2694\ufe0f\ud83e\uddea",
+ ... (15 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L6730-L7751` → after: `L602-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L602-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L602-L618) · [Before (L6730-L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L6730-L7751)

```diff
-         children: [(0, Qf.jsx)("div", {
-           className: "SkyblockSkillIcon",
-           children: (0, Qf.jsx)(Ff.c, {
-             itemName: ek.icon,
-             amount: 0
-           })
-         }), (0, Qf.jsxs)("div", {
-           className: "SkyblockSkillSummary",
-           children: [(0, Qf.jsxs)("div", {
-             className: "SkyblockSkillTitle",
-             children: [(0, Qf.jsx)("strong", {
-               children: ek.name
-             }), (0, Qf.jsx)("span", {
-               children: ek.tier
-             })]
-           }), (0, Qf.jsx)(Of, {
- ... (1006 more removed lines; see GitHub link above)
+         mobileNotification: {
+           title: "New Pirates map \ud83c\udff4\u200d\u2620\ufe0f",
+           body: "Play the new Pirates map - Dynasty Docks!"
+         }
+       }, {
+         date: new Date("2026-06-23T12:00:00Z"),
+         title: "\ud83d\udfe8Backrooms Update!\ud83d\udfe8",
+         description: "Backrooms just got deadlier - escaping isn't always as simple as finding the blue room.\n\u2022 Meet the Crone: a new hostile mob that charges at you and hits hard \ud83d\udc80\n\u2022 Floor exits can now be locked - search the level for keys before you can  … [truncated]
+         image: "backrooms_crone_keys.png",
+         author: "pegasys",
+         callToAction: {
+           color: "blue",
+           label: "Play Backrooms!",
+           action: {
+             type: "playGame",
+             game: "backrooms"
+ ... (1 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L7753-L8213` → after: `L620-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L620-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L620-L678) · [Before (L7753-L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L7753-L8213)

```diff
-         children: [(null === (ek = Dk.sparkle) || void 0 === ek ? void 0 : ek.id) === ik.id && (0, Qf.jsx)(yb, {}, Dk.sparkle.count), (0, Qf.jsx)("span", {
-           className: "SkyblockLampLightSwatch",
-           "aria-hidden": "true"
-         }), (0, Qf.jsx)("span", {
-           className: "SkyblockLampLightTintName",
-           children: ik.name
-         }), ik.wearing ? (0, Qf.jsx)("span", {
-           className: "SkyblockLampLightBadge",
-           children: Sk("skyblockGame:lampLightWearing")
-         }) : (0, Qf.jsx)(Tf.f, {
-           disabled: !Dk.canCommand || !ik.owned && !ik.affordable,
-           ariaLabel: ik.owned ? Sk("skyblockGame:lampLightWearLabel", {
-             tint: ik.name
-           }) : Sk("skyblockGame:lampLightBuyLabel", {
-             item: ik.name,
-             cost: ik.cost
- ... (445 more removed lines; see GitHub link above)
+         mobileNotification: {
+           title: "\ud83d\udfe8New Mob in the Backrooms!\ud83d\udfe8",
+           body: "the Crone now walks the endless halls, and some exits now have keys! \ud83d\udc80\ud83d\udd11"
+         }
+       }, {
+         date: new Date("2026-06-23T11:00:00Z"),
+         title: "One Block new skill and rotating trader!",
+         description: "Try out the Farming skill in One Block! \ud83c\udf3e\nWhile farming, you now sometimes get gold crops \ud83e\ude99\nActivate the skill to grow and harvest everything around you \ud83e\uddd1\u200d\ud83c\udf3e\nOther skills have also been reworked slightly.\n\ … [truncated]
+         image: "one_block_skills_rework.jpg",
+         author: ["jasninus"],
+         callToAction: {
+           color: "blue",
+           label: "Try it now!",
+           action: {
+             type: "playGame",
+             game: "oneBlock"
+ ... (43 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L8215-L10110` → after: `L680-L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L680-L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L680-L2031) · [Before (L8215-L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L8215-L10110)

```diff
-         children: [(0, Qf.jsx)("span", {
-           className: "SkyblockRegularsStripTitle",
-           children: Dk("skyblockGame:regularsTitle")
-         }), Sk.regulars.map((kk => (0, Qf.jsx)("span", {
-           className: jf()("SkyblockRegularsStripIcon", kk.tagged && "Tagged"),
-           title: kk.name,
-           children: (0, Qf.jsx)(Ff.c, {
-             itemName: kk.itemName,
-             amount: 0
-           })
-         }, kk.id)))]
-       })
-     }
- 
-     function Ib(kk) {
-       var ek;
- ... (1880 more removed lines; see GitHub link above)
+         mobileNotification: {
+           title: "Go to the moon! \ud83d\ude80\ud83c\udf15",
+           body: "You can now go to the moon in Build a Factory \ud83c\udfed"
+         }
+       }, {
+         date: new Date("2026-06-11T14:00:00Z"),
+         title: "Chunklock Protectors!\ud83d\udd10",
+         description: "Chunklock now has Protectors! Place a Protector block to protect your chunk from attackers\ud83d\udee1\ufe0f\nBut you need to fuel your Protectors to keep them protected from attackers\ud83d\udd25\nAttackers can raid your Protectors if they are willing to do … [truncated]
+         image: "chunklock_thumbnail.jpg",
+         author: ["pixelbaker", "jasninus"]
+       }, {
+         date: new Date("2026-06-10T13:00:00Z"),
+         title: "Chunklock is here!\ud83d\udd13",
+         description: "In Chunklock, you have to unlock every chunk first!\nMine, gather, and pay to crack open each chunk and claim the next.",
+         image: "chunklock_thumbnail.jpg",
+         author: ["pixelbaker", "jasninus"],
+ ... (1336 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L10112-L10115` → after: `L2033-L2097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2033-L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L2033-L2097) · [Before (L10112-L10115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L10112-L10115)

```diff
-         2: {
-           count: 40,
-           rise: 3.5,
-           colour: [245, 209, 66]
+         author: "Oliver",
+         callToAction: {
+           color: "blue",
+           label: "Get in on the Apple App Store",
+           action: {
+             type: "openUrl",
+             url: "https://apps.apple.com/gb/app/bloxd-io/id6720761703"
+           }
+         }
+       }, {
+         date: new Date("2025-07-03T13:00:00Z"),
+         title: "Jungle Update!",
+         description: "Jungle biomes can now be found in Bloxd! Explore the dense foliage to find jungle ruins, mango trees, wildcats and gorillas! You can tame wildcats with meat, and they'll get the zoomies if you feed them a very special plant... The gorillas may look friendly, … [truncated]
+         image: "jungle.jpg",
+         author: "Dirty Flea Sack",
+         callToAction: {
+ ... (49 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L10117-L10410` → after: `L2099-L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2099-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L2099-L2145) · [Before (L10117-L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L10117-L10410)

```diff
-         3: {
-           count: 64,
-           rise: 5,
-           colour: [206, 145, 206]
-         }
-       };
-     class Br {
-       constructor(kk) {
-         this.deps = kk, this.tell = null
-       }
-       receiveTell(kk) {
-         let {
-           biteTellTier: ek
-         } = kk;
-         this.tell = {
-           tier: ek,
- ... (278 more removed lines; see GitHub link above)
+         author: "Oliver",
+         callToAction: {
+           color: "blue",
+           label: "Get in on Play Store",
+           action: {
+             type: "openUrl",
+             url: "https://play.google.com/store/apps/details?id=io.bloxd.play"
+           }
+         }
+       }, {
+         date: new Date("2025-05-30T12:00:00Z"),
+         title: "Knight Sword, Golem Pickaxe and Fur Armour!",
+         description: "A bunch of new items have dropped in Bloxd! Draugr Knights now carry a new sword - it's more powerful than a Diamond Sword, and it has knockback too! Golems now drop Golem Eyes, which can be used to craft a Golem Pickaxe. This special pickaxe has a chance to … [truncated]
+         image: "unique_tools_and_armour.jpg",
+         author: "Dirty Flea Sack"
+       }, {
+ ... (31 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L10412-L11117` → after: `L2147-L2773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2147-L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L2147-L2773) · [Before (L10412-L11117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L10412-L11117)

```diff
-         fishing_1: {
-           raises: kk => "Draugr Warper" === kk.type,
-           rise: .4
-         }
-       },
-       KP = (kk, ek, ik, Sk) => {
-         let {
-           localPlayerId: bk
-         } = Sk;
-         const rk = new Cf({
-           translate: (kk, ek) => (0, If.x)(cr.f.get().getCurrentLanguageCode(), kk, ek),
-           translateWithIcons: (kk, ek) => (0, If.u)(cr.f.get().getCurrentLanguageCode(), kk, ek),
-           setMenuOpen: kk => {
-             kk ? (0, Ok.r)() : (0, Ok.d)()
-           },
-           dismissMenu: Ok.h,
- ... (690 more removed lines; see GitHub link above)
+         author: "Oliver",
+         callToAction: {
+           color: "blue",
+           label: "Get in on Play Store",
+           action: {
+             type: "openUrl",
+             url: "https://play.google.com/store/apps/details?id=io.bloxd.play"
+           }
+         }
+       }, {
+         date: new Date("2025-05-02T12:00:00Z"),
+         title: "Frozen Badlands!",
+         description: "Hostile mobs have made their way to the surface... and they've brought a new biome with them - the Frozen Badlands! Explore this new biome to find a new tree type, new blocks, and new mobs. Pay special attention for the Draugr Knight, which will now spawn de … [truncated]
+         image: "frozen_badlands.jpg",
+         author: "Dirty Flea Sack",
+         callToAction: {
+ ... (611 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L11120-L11132` → after: `L2776-L2779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2776-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/192.js#L2776-L2779) · [Before (L11120-L11132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/192.js#L11120-L11132)

```diff
-       const ek = Math.abs(kk),
-         ik = kk < 0 ? "-" : "";
-       for (const {
-           threshold: Dk,
-           suffix: fk
-         }
-         of Sk)
-         if (ek >= Dk) {
-           const kk = ek / Dk;
-           if (kk >= 1e3) return `${ik}${ek.toExponential(2).replace("e+","e")}`;
-           let Sk;
-           return Sk = kk >= 100 ? Math.floor(kk).toString() : kk >= 10 ? kk.toFixed(1).replace(/\.0$/, "") : kk.toFixed(2).replace(/\.?0+$/, ""), `${ik}${Sk}${fk}`
-         } return `${ik}${ek}`
+       const zC = Date.now();
+       let ZC = null;
+       for (const QC of nC) QC.date.getTime() > zC || CC && !CC(QC) || (!ZC || QC.date.getTime() > ZC.date.getTime()) && (ZC = QC);
+       return ZC
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/193.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/193.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2)

#### 1. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L4-L395` → after: `L4-L5395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L4-L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/193.js#L4-L5395) · [Before (L4-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/193.js#L4-L395)

```diff
-   38710: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Dk
-     });
-     class Dk {
-       constructor(kk, ek) {
-         this.read = kk, this.apply = ek, this.release = null
-       }
-       turn(kk, ek) {
-         const ik = null === this.release ? this.read() : this.release.transitionMs;
-         this.stop(!1), this.apply({
-           forcedCameraDirectionTransitionMs: ek,
-           forcedCameraDirection: [kk[0], kk[1], kk[2]]
-         }), this.release = {
-           timer: setTimeout((() => {
-             this.stop(!0)
- ... (376 more removed lines; see GitHub link above)
+   34005: function(module, __unused_webpack_exports, __webpack_require__) {
+     var n;
+     this || self, n = function() {
+       return function() {
+         var __webpack_modules__ = {
+             4264: function(CC, zC, ZC) {
+               CC.exports = ZC(7588)
+             },
+             5036: function(CC, zC, ZC) {
+               ZC(1719), ZC(5677), ZC(6394), ZC(5334), ZC(6969), ZC(2021), ZC(8328), ZC(2129);
+               var QC = ZC(1287);
+               CC.exports = QC.Promise
+             },
+             2582: function(CC, zC, ZC) {
+               ZC(1646), ZC(6394), ZC(2004), ZC(462), ZC(8407), ZC(2429), ZC(1172), ZC(8288), ZC(1274), ZC(8201), ZC(6626), ZC(3211), ZC(9952), ZC(15), ZC(9831), ZC(7521), ZC(2972), ZC(6956), ZC(5222), ZC(2257);
+               var QC = ZC(1287);
+ ... (5376 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L397-L424` → after: `L5397-L5419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R5397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L5397-L5419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/193.js#L5397-L5419) · [Before (L397-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/193.js#L397-L424)

```diff
-         const Sk = Math.tan((0, Mk.h)(kk) / 2),
-           bk = Math.atan(Sk * (!0 === this.settings.letterbox ? Kk.d : 1)),
-           rk = Math.atan(Sk * this.Ux.getAspectRatio()),
-           mk = (fk + (null !== (ek = this.settings.padding) && void 0 !== ek ? ek : 2)) / Math.sin(Math.min(bk, rk));
-         Dk[3] = this.withinDistances(mk)
-       }
-       withinDistances(kk) {
-         return Math.min(this.furthestDistance, Math.max(this.closestDistance, kk))
-       }
-       pointAt(kk) {
-         return kk === this.points.length && this.points.push([0, 0, 0]), this.points[kk]
-       }
-     }
-     class wk {
-       constructor(kk) {
-         this.limits = kk, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
- ... (12 more removed lines; see GitHub link above)
+         __nested_webpack_require_223763__.n = function(CC) {
+           var zC = CC && CC.__esModule ? function() {
+             return CC.default
+           } : function() {
+             return CC
+           };
+           return __nested_webpack_require_223763__.d(zC, {
+             a: zC
+           }), zC
+         }, __nested_webpack_require_223763__.d = function(CC, zC) {
+           for (var ZC in zC) __nested_webpack_require_223763__.o(zC, ZC) && !__nested_webpack_require_223763__.o(CC, ZC) && Object.defineProperty(CC, ZC, {
+             enumerable: !0,
+             get: zC[ZC]
+           })
+         }, __nested_webpack_require_223763__.g = function() {
+           if ("object" == typeof globalThis) return globalThis;
+ ... (7 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L426-L431` → after: `L5421-L6778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R5421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L5421-L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/193.js#L5421-L6778) · [Before (L426-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/193.js#L426-L431)

```diff
-         else if (0 !== Dk || 0 !== fk) this.idleMs = 0, this.yawOffset += Dk, this.pitchOffset += fk;
-         else {
-           const ek = Math.max(0, this.idleMs + kk - 200) - Math.max(0, this.idleMs - 200);
-           if (this.idleMs += kk, void 0 !== ik.returnMs && ek > 0) {
-             const kk = ik.returnMs > 0 ? Math.exp(-3 * ek / ik.returnMs) : 0;
-             this.yawOffset *= kk, this.pitchOffset *= kk
+         var __nested_webpack_exports__ = {};
+         return function() {
+           __nested_webpack_require_223763__.d(__nested_webpack_exports__, {
+             default: function() {
+               return Db
+             }
+           }), __nested_webpack_require_223763__(5441), __nested_webpack_require_223763__(8765);
+           var CC = __nested_webpack_require_223763__(4296),
+             zC = __nested_webpack_require_223763__(5103),
+             ZC = {
+               one: function(CC, zC) {
+                 void 0 === zC && (zC = document);
+                 try {
+                   return zC.querySelector(CC) || void 0
+                 } catch (CC) {
+                   return
+ ... (1342 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L433-L667` → after: `L6780-L9442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R6780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L6780-L9442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/193.js#L6780-L9442) · [Before (L433-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/193.js#L433-L667)

```diff
-         }
-         this.clampOffsets(ik)
-       }
-       clampOffsets(kk) {
-         if (kk.maxYaw >= 180) this.yawOffset = (0, fk.s)(0, this.yawOffset);
-         else {
-           const ek = (0, Mk.h)(kk.maxYaw);
-           this.yawOffset = Math.max(-ek, Math.min(ek, this.yawOffset))
-         }
-         const ek = (0, Mk.h)(kk.maxPitch);
-         this.pitchOffset = Math.max(-ek, Math.min(ek, this.pitchOffset))
-       }
-       apply(kk, ek) {
-         this.pointedAt && this.limits && (this.yawOffset = (0, fk.s)(kk.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - kk.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
-         const ik = (0, fk.h)(kk.pitch + this.pitchOffset);
-         this.pitchOffset = ik - kk.pitch, ek.heading = (0, fk.q)(kk.heading + this.yawOffset), ek.pitch = ik
- ... (219 more removed lines; see GitHub link above)
+ 
+           function uz(CC, zC) {
+             var ZC, QC, wC, bC = zC[21] < zC[11] && cz(zC);
+             return {
+               key: CC,
+               first: null,
+               c: function() {
+                 ZC = (0, nC.cSb)(), bC && bC.c(), QC = (0, nC.cSb)(), this.first = ZC
+               },
+               m: function(CC, zC) {
+                 (0, nC.$Tr)(CC, ZC, zC), bC && bC.m(CC, zC), (0, nC.$Tr)(CC, QC, zC), wC = !0
+               },
+               p: function(CC, ZC) {
+                 (zC = CC)[21] < zC[11] ? bC ? (bC.p(zC, ZC), 2176 & ZC && (0, nC.Ui)(bC, 1)) : ((bC = cz(zC)).c(), (0, nC.Ui)(bC, 1), bC.m(QC.parentNode, QC)) : bC && ((0, nC.dvw)(), (0, nC.etI)(bC, 1, 1, (function() {
+                   bC = null
+                 })), (0, nC.gbL)())
+ ... (2647 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L670-L1177` → after: `L9451-L9694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R9451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L9451-L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/193.js#L9451-L9694) · [Before (L670-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/193.js#L670-L1177)

```diff
-           }(ik >= 0 ? this.nodes[ik].position : null, kk.position, Dk >= 0 ? this.nodes[Dk].position : null, this.prevGaps[ek], this.nextGaps[ek], [0, 0, 0])
-         })), this.aim = new Fk(this.nodes, this.velocities, this.prevNodes, this.nextNodes, ek)
-       }
-       sample(kk, ek, ik, Dk) {
-         const fk = this.findSegment(this.pathTime(kk));
-         this.samplePosition(fk, Dk.position), this.aim.sample(fk, ek, Dk);
-         const {
-           beforeIndex: Sk,
-           afterIndex: bk
-         } = fk;
-         Dk.fov = dk(fk, Sk >= 0 ? this.fovAt(Sk, ik) : 0, this.fovAt(fk.index, ik), this.fovAt(fk.toIndex, ik), bk >= 0 ? this.fovAt(bk, ik) : 0, Sk >= 0, bk >= 0)
-       }
-       pathTime(kk) {
-         const ek = this.nodes[0].timeMs;
-         if (this.loopMs <= 0 || kk <= ek) return kk;
-         const ik = kk - ek;
- ... (492 more removed lines; see GitHub link above)
+           }
+           jQ.origXMLHttpRequest = XMLHttpRequest;
+           var UQ = function() {
+               function CC(CC, zC, ZC) {
+                 this.resp = void 0, this.item = void 0, this.onUpdateCallback = void 0, this.resp = CC, this.item = zC, this.onUpdateCallback = ZC, this.mockReader()
+               }
+               var ZC = CC.prototype;
+               return ZC.set = function(CC, zC, ZC) {
+                 return Reflect.set(CC, zC, ZC)
+               }, ZC.get = function(CC, zC) {
+                 var ZC = this,
+                   QC = Reflect.get(CC, zC);
+                 switch (zC) {
+                   case "arrayBuffer":
+                   case "blob":
+                   case "formData":
+ ... (228 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L1179-L1181` → after: `L9696-L10295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R9696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L9696-L10295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/193.js#L9696-L10295) · [Before (L1179-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/193.js#L1179-L1181)

```diff
-         case "frame":
-           return {
-             ...kk, ...Sk, targets: nk(kk.targets), viewHeading: Pk(kk.viewHeading, -Dk.m.maxFrameHeading, Dk.m.maxFrameHeading), viewElevation: Pk(kk.viewElevation, 0, Dk.m.maxFrameElevation), padding: Pk(kk.padding, 0, Dk.m.maxFrameDistance), closestDistance: Pk(kk.closestDistan … [truncated]
+           var qw = bw;
+ 
+           function Fw(CC, zC, ZC) {
+             var QC = CC.slice();
+             return QC[11] = zC[ZC][0], QC[12] = zC[ZC][1], QC
+           }
+ 
+           function Ww(CC, zC, ZC) {
+             var QC = CC.slice();
+             return QC[11] = zC[ZC][0], QC[12] = zC[ZC][1], QC
+           }
+ 
+           function Nw(CC, zC, ZC) {
+             var QC = CC.slice();
+             return QC[11] = zC[ZC][0], QC[12] = zC[ZC][1], QC
+           }
+ ... (584 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L1183-L1229` → after: `L10297-L10438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R10297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L10297-L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/193.js#L10297-L10438) · [Before (L1183-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/193.js#L1183-L1229)

```diff
-         default:
-           return ik
-       }
-     }
-   },
-   38245: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => rk
-     });
-     var Dk = ik(1207);
- 
-     function fk(kk) {
-       const ek = /(\d*\.?\d+)px/.exec(kk);
-       return ek ? Number(ek[1]) : null
-     }
- 
- ... (31 more removed lines; see GitHub link above)
+           var yw = aw;
+ 
+           function Lw(CC, zC, ZC) {
+             var QC = CC.slice();
+             return QC[8] = zC[ZC], QC
+           }
+ 
+           function Uw(CC, zC, ZC) {
+             var QC = CC.slice();
+             return QC[11] = zC[ZC], QC
+           }
+ 
+           function Bw(CC) {
+             var zC, ZC, QC, wC = CC[0].nodeType === Node.ELEMENT_NODE && Ow(CC),
+               bC = CC[0].nodeType === Node.TEXT_NODE && ob(CC);
+             return {
+ ... (126 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L1231-L1253` → after: `L10440-L10452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R10440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L10440-L10452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/193.js#L10440-L10452) · [Before (L1231-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/193.js#L1231-L1253)

```diff
-             if (null !== ek && Math.abs(ek - ik) <= .5 && kk.font.toLowerCase().includes(bk.toLowerCase())) return Dk
-           }
-           return null
-         }(kk, [Hk, ...wk], nk);
-         pk !== Hk && function(kk, ek, Dk) {
-           bk || (bk = !0, Promise.resolve().then((() => ik(1046))).then((ik => {
-             let {
-               cH: fk
-             } = ik;
-             fk(new Error("A canvas didn't take canvasTxt's font"), {
-               font: kk,
-               fU: ek,
-               drawnWith: null !== Dk && void 0 !== Dk ? Dk : "the kept font, scaled"
-             })
-           })).catch((() => {})))
-         }(Hk, lk, pk);
- ... (7 more removed lines; see GitHub link above)
+             return {
+               c: function() {
+                 zC = (0, nC.fLW)("\xa0\n            "), bC.c(), ZC = (0, nC.cSb)()
+               },
+               m: function(CC, QC) {
+                 (0, nC.$Tr)(CC, zC, QC), bC.m(CC, QC), (0, nC.$Tr)(CC, ZC, QC)
+               },
+               p: function(CC, zC) {
+                 wC === (wC = QC(CC)) && bC ? bC.p(CC, zC) : (bC.d(1), (bC = wC(CC)) && (bC.c(), bC.m(ZC.parentNode, ZC)))
+               },
+               d: function(CC) {
+                 CC && (0, nC.ogt)(zC), bC.d(CC), CC && (0, nC.ogt)(ZC)
+               }
```

#### 9. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L1258-L1469` → after: `L10455-L10508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R10455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L10455-L10508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/193.js#L10455-L10508) · [Before (L1258-L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/193.js#L1258-L1469)

```diff
-         }
-         return this.drawLines(kk, ek, Dk, rk, Pk, mk, nk)
-       },
-       drawLines: function(kk, ek, ik, fk, Sk, bk, rk) {
-         const Pk = ik + Sk,
-           mk = fk + bk;
-         let Mk, Kk = fk + bk / 2 + rk / 2;
-         "right" === this.align ? (Mk = Pk, kk.textAlign = "right") : "left" === this.align ? (Mk = ik, kk.textAlign = "left") : (Mk = ik + Sk / 2, kk.textAlign = "center");
-         for (const Dk of ek) {
-           kk.measureText(Dk).width >= Sk && (ek = ek.replace(Dk, ""))
-         }
-         ek = (0, Dk.T)(ek);
-         const xk = [],
-           nk = ek.split("\n"),
-           Uk = this.justify ? kk.measureText("\u200a").width : 0;
-         nk.forEach((ek => {
- ... (196 more removed lines; see GitHub link above)
+ 
+           function Zb(CC) {
+             var zC;
+             return {
+               c: function() {
+                 zC = (0, nC.fLW)("/")
+               },
+               m: function(CC, ZC) {
+                 (0, nC.$Tr)(CC, zC, ZC)
+               },
+               d: function(CC) {
+                 CC && (0, nC.ogt)(zC)
+               }
+             }
+           }
+ 
+ ... (38 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L1471-L1737` → after: `L10510-L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R10510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L10510-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/193.js#L10510-L11892) · [Before (L1471-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/193.js#L1471-L1737)

```diff
-           if (Vk)
-             for (const [Dk, fk] of dk.entries()) Gk(fk, vk[Dk], 208 + (Dk + .5) * Zk, Dk % 2 === 0);
-           else {
-             const kk = "error" === nk.status,
-               ek = kk ? "Couldn't load leaderboard" : "ready" === nk.status ? "No scores yet" : "Loading leaderboard\u2026",
-               ik = kk ? "Trying again shortly" : "ready" === nk.status ? "Be the first on the board!" : "Fetching the top players",
-               Dk = (208 + Ok) / 2;
-             Ck(ek, 512, Dk - 28, 40, kk ? fk.D.redUiText : yk, 960, "center"), Ck(ik, 512, Dk + 27, 30, Yk, 960, "center")
-           }
-           const Nk = Ok + mk * Zk / 2;
-           if (null === ak) Ak(Nk);
-           else {
-             const ek = null === qk ? 0 : qk.tied - 1,
-               ik = `YOUR RANK #${Pk.format(ak)}${null===qk?"":` of ${Pk.format(qk.total)}`}`;
-             kk.font = "bold 36px 'Jetbrains Mono', monospace";
-             const Dk = Math.max(20, Math.min(36, Math.floor(34560 / kk.measureText(ik).width)));
- ... (251 more removed lines; see GitHub link above)
+             return {
+               c: function() {
+                 for (var CC = 0; CC < wC.length; CC += 1) wC[CC].c();
+                 zC = (0, nC.cSb)()
+               },
+               m: function(CC, QC) {
+                 for (var bC = 0; bC < wC.length; bC += 1) wC[bC].m(CC, QC);
+                 (0, nC.$Tr)(CC, zC, QC), ZC = !0
+               },
+               p: function(CC, ZC) {
+                 if (1 & ZC) {
+                   var bC;
+                   for (QC = CC[0].childNodes, bC = 0; bC < QC.length; bC += 1) {
+                     var oC = Lw(CC, QC, bC);
+                     wC[bC] ? (wC[bC].p(oC, ZC), (0, nC.Ui)(wC[bC], 1)) : (wC[bC] = nb(oC), wC[bC].c(), (0, nC.Ui)(wC[bC], 1), wC[bC].m(zC.parentNode, zC))
+                   }
+ ... (1367 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/194.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/194.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27)

#### 1. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/194.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/194.js#L4)

```diff
-   33620: (kk, ek, ik) => {
+   34040: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L6-L7` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/194.js#L6-L8) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/194.js#L6-L7)

```diff
-       getLatestPublishedUpdateLog: () => rk,
-       updateLogsData: () => bk
+       ALL_DEV_TOOLS: () => nC,
+       coreDevTools: () => qC,
+       devTools: () => oC
```

#### 3. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L9-L2008` → after: `L10-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L10-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/194.js#L10-L22) · [Before (L9-L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/194.js#L9-L2008)

```diff
-     var Dk = ik(789),
-       fk = ik(302);
-     const Sk = "\xa0\xa0\xa0\xa0",
-       bk = [{
-         author: ["Oliver", "Harry"],
-         date: new Date("2026-11-17T16:00:00Z"),
-         title: "\u2728Characters are back in the Store!\u2728",
-         description: "Every character from the Y2K, Spring and Astro packs is back, and you can now buy each one on its own!\n\n\ud83d\udcbf Y2K: Alice, Roy, Ela and Tilly\n\ud83c\udf37 Spring: Harry, Gnome, Poppy and Daisy\n\ud83d\ude80 Astro: Zara, Nova, Rex and Vex\n\nAlready  … [truncated]
-         image: "CosmeticPacks.jpg",
-         onClickImage: {
-           type: "openMenu",
-           menu: fk.r.COSMETIC_SHOP
-         },
-         callToAction: {
-           color: "rainbow",
-           label: "Go to Store!",
- ... (1984 more removed lines; see GitHub link above)
+     var QC = ZC(615),
+       wC = ZC(1257),
+       bC = ZC(34046);
+     const nC = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
+     async function fC() {
+       const {
+         noaDevTools: CC
+       } = await ZC.e(236).then((() => ZC(40899)));
+       return CC
+     }
+     const oC = new class {
+         constructor() {
+           this.loadHost = fC, this.tools = nC
```

#### 4. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L2010-L2022` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/194.js#L24-L25) · [Before (L2010-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/194.js#L2010-L2022)

```diff
-       }, {
-         date: new Date("2025-07-14T11:00:00Z"),
-         title: "Rocket Obby Map!",
-         description: "New rocket obby map! It's a bit harder than the original map, try it out now!",
-         image: "rocket_parkour_january.jpg",
-         author: "Tom",
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "rocketParkour_january"
-           }
+         setHost(CC) {
+           this.tools = null === CC ? nC : CC.tools, this.loadHost = null === CC ? fC : async () => CC
```

#### 5. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L2024-L2040` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/194.js#L27-L28) · [Before (L2024-L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/194.js#L2024-L2040)

```diff
-       }, {
-         date: new Date("2025-07-14T10:00:00Z"),
-         title: "\ud83d\udcf2 iOS Mobile App",
-         description: "Bloxd.io has landed on the Apple App Store! Download it by clicking the button below or searching bloxd.io on the Apple App Store! Please leave us a review if you enjoy playing bloxd!",
-         image: "AppleAppQRCode.jpg",
-         onClickImage: {
-           type: "openUrl",
-           url: "https://apps.apple.com/gb/app/bloxd-io/id6720761703"
-         },
-         author: "Oliver",
-         callToAction: {
-           color: "blue",
-           label: "Get in on the Apple App Store",
-           action: {
-             type: "openUrl",
-             url: "https://apps.apple.com/gb/app/bloxd-io/id6720761703"
- ... (1 more removed lines; see GitHub link above)
+         supports(CC) {
+           return this.tools.has(CC)
```

#### 6. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L2042-L2054` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/194.js#L30-L32) · [Before (L2042-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/194.js#L2042-L2054)

```diff
-       }, {
-         date: new Date("2025-07-03T13:00:00Z"),
-         title: "Jungle Update!",
-         description: "Jungle biomes can now be found in Bloxd! Explore the dense foliage to find jungle ruins, mango trees, wildcats and gorillas! You can tame wildcats with meat, and they'll get the zoomies if you feed them a very special plant... The gorillas may look friendly, … [truncated]
-         image: "jungle.jpg",
-         author: "Dirty Flea Sack",
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "classic_survival"
-           }
+         async downloadScene(CC, zC) {
+           const ZC = await this.loadHost();
+           await ZC.downloadScene(CC, zC)
```

#### 7. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L2056-L2068` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/194.js#L34-L36) · [Before (L2056-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/194.js#L2056-L2068)

```diff
-       }, {
-         date: new Date("2025-06-20T12:00:00Z"),
-         title: "Sleeping \ud83d\udca4",
-         description: "You can now sleep on beds! Curl up on a Leaf Bed, Wool Bed, or Strong Bed to get some rest. When you wake pick a perk; the sturdier the bed, the longer that perk sticks around!",
-         image: "sleeping.jpg",
-         author: "Oliver",
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "classic_survival"
-           }
+         async setAmbientLightIntensity(CC) {
+           const zC = await this.loadHost();
+           await zC.setAmbientLightIntensity(CC)
```

#### 8. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L2070-L2082` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/194.js#L38-L39) · [Before (L2070-L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/194.js#L2070-L2082)

```diff
-       }, {
-         date: new Date("2025-06-16T11:00:00Z"),
-         title: "New Bedwars Maps!",
-         description: "Two new Bedwars Trios/Squads maps - Rooftops and Tavern. Thanks to those who participated in the beta test, your feedback was super helpful! More Solos/Duos maps coming soon!",
-         image: "bedwars_tavern_rooftops.jpg",
-         author: "Harry",
-         callToAction: {
-           color: "blue",
-           label: "Try it now",
-           action: {
-             type: "playGame",
-             game: "bedwars_4v4v4v4"
-           }
+         async capturePhoto(CC, zC, ZC) {
+           return (await this.loadHost()).capturePhoto(CC, zC, ZC)
```

#### 9. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L2084-L2097` → after: `L41-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L41-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/194.js#L41-L45) · [Before (L2084-L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/194.js#L2084-L2097)

```diff
-       }, {
-         date: new Date("2025-06-02T12:00:00Z"),
-         title: "Chalk Blocks!",
-         description: "An update for the builders out there. This update adds a decorative chalk block (find it at the bottom of rivers). Colour it for some juicy pastel colours, and craft it for some bricks! Complete with equivalent slabs.",
-         image: "ChalkAndColouredChalk-compressed.png",
-         author: "Arthur"
-       }, {
-         date: new Date("2025-06-02T11:59:00Z"),
-         title: "\ud83d\udcf2 Android App Update (v1.1)",
-         description: "Bloxd.io has been updated on the Play Store! Make sure to get the update if you have already downloaded the app!\n\n- Added Google sign-in\n- Fixed issue where navigation bar wouldn't disappear\n- Fixed issue where hotbar was appearing too far up the screen\ … [truncated]
-         image: "AndroidAppQRCode.jpg",
-         onClickImage: {
-           type: "openUrl",
-           url: "https://play.google.com/store/apps/details?id=io.bloxd.play"
+       },
+       qC = {
+         tools: bC.c,
+         downloadScene: async () => {
+           throw new Error("This client can't download the scene")
```

#### 10. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L2099-L2145` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/194.js#L47-L48) · [Before (L2099-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/194.js#L2099-L2145)

```diff
-         author: "Oliver",
-         callToAction: {
-           color: "blue",
-           label: "Get in on Play Store",
-           action: {
-             type: "openUrl",
-             url: "https://play.google.com/store/apps/details?id=io.bloxd.play"
-           }
-         }
-       }, {
-         date: new Date("2025-05-30T12:00:00Z"),
-         title: "Knight Sword, Golem Pickaxe and Fur Armour!",
-         description: "A bunch of new items have dropped in Bloxd! Draugr Knights now carry a new sword - it's more powerful than a Diamond Sword, and it has knockback too! Golems now drop Golem Eyes, which can be used to craft a Golem Pickaxe. This special pickaxe has a chance to … [truncated]
-         image: "unique_tools_and_armour.jpg",
-         author: "Dirty Flea Sack"
-       }, {
- ... (31 more removed lines; see GitHub link above)
+         setAmbientLightIntensity: async () => {
+           throw new Error("This client can't set the ambient light")
```

#### 11. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L2147-L2306` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/194.js#L50-L51) · [Before (L2147-L2306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/194.js#L2147-L2306)

```diff
-         author: "Oliver",
-         callToAction: {
-           color: "blue",
-           label: "Get in on Play Store",
-           action: {
-             type: "openUrl",
-             url: "https://play.google.com/store/apps/details?id=io.bloxd.play"
-           }
-         }
-       }, {
-         date: new Date("2025-05-02T12:00:00Z"),
-         title: "Frozen Badlands!",
-         description: "Hostile mobs have made their way to the surface... and they've brought a new biome with them - the Frozen Badlands! Explore this new biome to find a new tree type, new blocks, and new mobs. Pay special attention for the Draugr Knight, which will now spawn de … [truncated]
-         image: "frozen_badlands.jpg",
-         author: "Dirty Flea Sack",
-         callToAction: {
- ... (144 more removed lines; see GitHub link above)
+         capturePhoto: async () => {
+           throw new Error("No game is drawing yet")
```

#### 12. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L2308-L2780` → after: `L53-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L53-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/194.js#L53-L56) · [Before (L2308-L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/194.js#L2308-L2780)

```diff
-       }, {
-         date: new Date("2025-02-24T10:59:00Z"),
-         title: "Code Blocks!",
-         description: "Code blocks, along with press to code boards, let world owners write code that makes things happen in-game. We've just added setBlock and more stuff is coming soon. Visit the code channels in discord for more information or to leave feedback and feature requ … [truncated]
-         image: "code_block.jpg",
-         author: "Tom",
-         callToAction: {
-           color: "blue",
-           label: "More Info",
-           action: {
-             type: "openUrl",
-             url: "https://github.com/Bloxdy/code-api"
-           }
-         }
-       }, {
-         date: new Date("2025-02-20T12:00:00Z"),
- ... (457 more removed lines; see GitHub link above)
+       };
+     QC.z && oC.setHost(qC), (0, wC.y)((() => {
+       oC.setHost(qC)
+     }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/195.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/195.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985)

#### 1. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L4-L1017` → after: `L4-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L4-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/195.js#L4-L94) · [Before (L4-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/195.js#L4-L1017)

```diff
-   33622: function(module, __unused_webpack_exports, __webpack_require__) {
-     var n;
-     this || self, n = function() {
-       return function() {
-         var __webpack_modules__ = {
-             4264: function(kk, ek, ik) {
-               kk.exports = ik(7588)
-             },
-             5036: function(kk, ek, ik) {
-               ik(1719), ik(5677), ik(6394), ik(5334), ik(6969), ik(2021), ik(8328), ik(2129);
-               var Dk = ik(1287);
-               kk.exports = Dk.Promise
-             },
-             2582: function(kk, ek, ik) {
-               ik(1646), ik(6394), ik(2004), ik(462), ik(8407), ik(2429), ik(1172), ik(8288), ik(1274), ik(8201), ik(6626), ik(3211), ik(9952), ik(15), ik(9831), ik(7521), ik(2972), ik(6956), ik(5222), ik(2257);
-               var Dk = ik(1287);
- ... (998 more removed lines; see GitHub link above)
+   36264: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       showOnboardingPopup: () => lC
+     });
+     var QC = ZC(48),
+       wC = ZC(1143),
+       bC = ZC(1307),
+       nC = ZC(1388),
+       fC = ZC(4256),
+       oC = ZC(1501),
+       qC = ZC(1493),
+       FC = ZC(2166),
+       WC = ZC(1002),
+       NC = ZC.n(WC),
+       MC = ZC(1078),
+       gC = ZC(36271),
+ ... (75 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L1157-L1361` → after: `L97-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L97-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/195.js#L97-L150) · [Before (L1157-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/195.js#L1157-L1361)

```diff
-             },
-             3130: function(kk, ek, ik) {
-               var Dk = ik(9624),
-                 fk = ik(2977),
-                 Sk = ik(9275).f,
-                 bk = ik(4546),
-                 rk = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
-               kk.exports.f = function(kk) {
-                 return rk && "Window" == Dk(kk) ? function(kk) {
-                   try {
-                     return Sk(kk)
-                   } catch (kk) {
-                     return bk(rk)
-                   }
-                 }(kk) : Sk(fk(kk))
-               }
- ... (189 more removed lines; see GitHub link above)
+             }, wC)
+           }))
+         })]
+       })
+     }
+ 
+     function hC() {
+       const {
+         t: CC
+       } = (0, wC.y)(), {
+         userContext: zC,
+         isUserContextUpdating: ZC
+       } = (0, GC.e)(), [bC, nC] = (0, QC.useState)(!1), [, oC] = (0, QC.useReducer)((CC => CC + 1), 0), qC = (0, QC.useRef)({}), FC = (0, QC.useRef)(null), WC = (0, PC.e)(), xC = {
+         ...zC.getPlayerCosmetics(),
+         ...FC.current
+       }, hC = (0, QC.useRef)(null);
+ ... (38 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L1363-L1506` → after: `L152-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L152-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/195.js#L152-L174) · [Before (L1363-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/195.js#L1363-L1506)

```diff
-             },
-             3955: function(kk, ek, ik) {
-               var Dk = ik(7583).TypeError;
-               kk.exports = function(kk) {
-                 if (null == kk) throw Dk("Can't call method on " + kk);
-                 return kk
-               }
-             },
-             460: function(kk, ek, ik) {
-               var Dk = ik(7583),
-                 fk = Object.defineProperty;
-               kk.exports = function(kk, ek) {
-                 try {
-                   fk(Dk, kk, {
-                     value: ek,
-                     configurable: !0,
- ... (128 more removed lines; see GitHub link above)
+             }(xC, wC);
+             return (0, RC.jsx)("button", {
+               type: "button",
+               className: NC()("OnboardingPreset", {
+                 OnboardingPresetSelected: bC
+               }),
+               "aria-label": CC("homePage:onboardingPreset", {
+                 number: ZC + 1
+               }),
+               "aria-pressed": bC,
+               onClick: () => {
+                 (0, fC.h)(`preset.${QC}`);
+                 const {
+                   eyes: CC,
+                   skin: zC
+                 } = qC.current;
+ ... (7 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L1814-L1907` → after: `L177-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/195.js#L177-L181) · [Before (L1814-L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/195.js#L1814-L1907)

```diff
-               } catch (kk) {}
-             },
-             6956: function(kk, ek, ik) {
-               var Dk = ik(7583);
-               ik(8821)(Dk.JSON, "JSON", !0)
-             },
-             5222: function(kk, ek, ik) {
-               ik(8821)(Math, "Math", !0)
-             },
-             6394: function(kk, ek, ik) {
-               var Dk = ik(8191),
-                 fk = ik(1270),
-                 Sk = ik(3060);
-               Dk || fk(Object.prototype, "toString", Sk, {
-                 unsafe: !0
-               })
- ... (78 more removed lines; see GitHub link above)
+               },
+               children: (0, RC.jsx)("div", {
+                 className: "OnboardingPresetImage",
+                 style: {
+                   backgroundImage: `url(/textures/charSkins/previews/character_${QC}_preview.png)`
```

#### 5. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L1910-L1947` → after: `L184-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L184-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/195.js#L184-L213) · [Before (L1910-L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/195.js#L1910-L1947)

```diff
-             },
-             8328: function(kk, ek, ik) {
-               var Dk = ik(7263),
-                 fk = ik(6268),
-                 Sk = ik(783),
-                 bk = ik(6544),
-                 rk = ik(5897),
-                 Pk = ik(9212),
-                 mk = ik(564),
-                 Mk = ik(5732),
-                 Kk = ik(1270);
-               if (Dk({
-                   target: "Promise",
-                   proto: !0,
-                   real: !0,
-                   forced: !!Sk && bk((function() {
- ... (22 more removed lines; see GitHub link above)
+             }, QC)
+           }))
+         }), (0, RC.jsxs)("button", {
+           type: "button",
+           className: "OnboardingMoreOptions",
+           "aria-expanded": bC,
+           onClick: () => {
+             bC || (0, fC.h)("more"), nC(!bC)
+           },
+           children: [CC("homePage:onboardingMoreOptions"), (0, RC.jsx)(SC.c, {
+             name: bC ? "caret-up" : "caret-down"
+           })]
+         }), bC && (0, RC.jsxs)("div", {
+           ref: hC,
+           className: "OnboardingMore",
+           children: [(0, RC.jsx)("div", {
+ ... (14 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L1950-L2291` → after: `L216-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L216-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/195.js#L216-L222) · [Before (L1950-L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/195.js#L1950-L2291)

```diff
-             },
-             5334: function(kk, ek, ik) {
-               var Dk, fk, Sk, bk, rk = ik(7263),
-                 Pk = ik(6268),
-                 mk = ik(7583),
-                 Mk = ik(5897),
-                 Kk = ik(8262),
-                 xk = ik(783),
-                 nk = ik(1270),
-                 Uk = ik(6893),
-                 Hk = ik(7496),
-                 wk = ik(8821),
-                 lk = ik(7730),
-                 pk = ik(8257),
-                 yk = ik(9212),
-                 Yk = ik(794),
- ... (326 more removed lines; see GitHub link above)
+             }), (0, RC.jsx)(eC, {
+               label: CC("homePage:onboardingSkinColour"),
+               colours: IC,
+               picked: null === mC || void 0 === mC ? void 0 : mC[1],
+               onPick: CC => {
+                 (0, fC.h)("skin"), qC.current.skin = CC, YC({
+                   skin: vC("skin", "0", CC)
```

#### 7. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L2294-L2952` → after: `L225-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L225-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/195.js#L225-L354) · [Before (L2294-L2952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/195.js#L2294-L2952)

```diff
-             },
-             2429: function(kk, ek, ik) {
-               ik(2219)("hasInstance")
-             },
-             1172: function(kk, ek, ik) {
-               ik(2219)("isConcatSpreadable")
-             },
-             8288: function(kk, ek, ik) {
-               ik(2219)("iterator")
-             },
-             2004: function(kk, ek, ik) {
-               var Dk = ik(7263),
-                 fk = ik(7583),
-                 Sk = ik(5897),
-                 bk = ik(1611),
-                 rk = ik(8262),
- ... (643 more removed lines; see GitHub link above)
+             })]
+           })]
+         })]
+       })
+     }
+     var KC = ZC(1211),
+       YC = ZC(20),
+       dC = ZC(34053),
+       mC = ZC(1295),
+       HC = ZC(1593);
+ 
+     function EC(CC) {
+       const {
+         t: zC
+       } = (0, wC.y)(), {
+         userContext: ZC,
+ ... (114 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L2954-L11550` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/195.js#L356) · [Before (L2954-L11550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/195.js#L2954-L11550)

```diff
-                 }
- 
-                 function jk(kk, ek) {
-                   function ik(fk, Sk, bk, rk) {
-                     var Pk = Mk(kk[fk], kk, Sk);
-                     if ("throw" !== Pk.type) {
-                       var mk = Pk.arg,
-                         Kk = mk.value;
-                       return Kk && "object" == typeof Kk && Dk.call(Kk, "__await") ? ek.resolve(Kk.__await).then((function(kk) {
-                         ik("next", kk, bk, rk)
-                       }), (function(kk) {
-                         ik("throw", kk, bk, rk)
-                       })) : ek.resolve(Kk).then((function(kk) {
-                         mk.value = kk, bk(mk)
-                       }), (function(kk) {
-                         return ik("throw", kk, bk, rk)
- ... (8581 more removed lines; see GitHub link above)
+                 })()
```

#### 9. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L11552-L11892` → after: `L358-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L358-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/195.js#L358-L567) · [Before (L11552-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/195.js#L11552-L11892)

```diff
-               Uk = function(kk) {
-                 return Sk(void 0, void 0, void 0, Vi().mark((function ek() {
-                   return Vi().wrap((function(ek) {
-                     for (;;) switch (ek.prev = ek.next) {
-                       case 0:
-                         return ek.next = 2, rk.removeItem(kk);
-                       case 2:
-                       case "end":
-                         return ek.stop()
-                     }
-                   }), ek)
-                 })))
-               },
-               Hk = function(kk) {
-                 return Sk(void 0, void 0, void 0, Vi().mark((function ek() {
-                   return Vi().wrap((function(ek) {
- ... (325 more removed lines; see GitHub link above)
+               children: (0, RC.jsx)(SC.c, {
+                 name: "dice"
+               })
+             })]
+           }), "suffixed" === (null === NC || void 0 === NC ? void 0 : NC.kind) && (0, RC.jsx)("div", {
+             className: "OnboardingNameNote",
+             children: zC("homePage:onboardingNameSuffixed", {
+               taken: NC.taken,
+               name: NC.name
+             })
+           }), null !== sC && (0, RC.jsx)("div", {
+             className: "OnboardingNameNote OnboardingNameError",
+             children: sC
+           })]
+         }),
+         submit: () => {
+ ... (194 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/196.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/196.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38)

#### 1. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L4-L8` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/196.js#L4-L14) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/196.js#L4-L8)

```diff
-   33664: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       ALL_DEV_TOOLS: () => bk,
-       coreDevTools: () => mk,
-       devTools: () => Pk
+   34091: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => tC,
+       d: () => Rz,
+       f: () => Gz,
+       h: () => xz,
+       l: () => bz,
+       p: () => fz,
+       t: () => qz,
+       u: () => Az,
+       v: () => oz
```

#### 2. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L10-L17` → after: `L16-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L16-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/196.js#L16-L284) · [Before (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/196.js#L10-L17)

```diff
-     var Dk = ik(610),
-       fk = ik(1284),
-       Sk = ik(33673);
-     const bk = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
-     async function rk() {
-       const {
-         noaDevTools: kk
-       } = await ik.e(234).then((() => ik(40655)));
+     var QC = ZC(20),
+       wC = ZC(77),
+       bC = ZC(1557),
+       nC = ZC(4346),
+       fC = ZC(2894),
+       oC = ZC(2903),
+       qC = ZC(38);
+     const {
+       windows: FC,
+       target: WC,
+       stepDown: NC,
+       stepUp: MC,
+       noGain: gC
+     } = oC.d, SC = 1e3 / 60 * 1.08, pC = 1e3 / 55, PC = 1e3 / 45, GC = 1e3 / 30 * .92, RC = 1e3 / 30 * 1.08;
+     class AC {
+       constructor() {
+ ... (253 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L20-L22` → after: `L287-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L287-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/196.js#L287-L316) · [Before (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/196.js#L20-L22)

```diff
-     const Pk = new class {
-         constructor() {
-           this.loadHost = rk, this.tools = bk
+ 
+     function DC(CC) {
+       const zC = "number" === typeof CC ? Date.now() - CC : -1;
+       return zC >= 0 && zC < lC
+     }
+     let jC = null;
+ 
+     function yC() {
+       return jC ??= (0, wC.getDeviceDefaultPixelScale)(), LC(jC)
+     }
+ 
+     function LC(CC) {
+       const zC = QC.b.get("clientEscMenuOptions");
+       return zC.pixelSmoothing && !(0, nC.b)("pixelScale") && zC.pixelScale === CC
+     }
+     let UC = null,
+ ... (14 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L24-L25` → after: `L318-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L318-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/196.js#L318-L376) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/196.js#L24-L25)

```diff
-         setHost(kk) {
-           this.tools = null === kk ? bk : kk.tools, this.loadHost = null === kk ? rk : async () => kk
+       }
+       return UC
+     }
+ 
+     function kC(CC, zC) {
+       var ZC;
+       const QC = zC.indexOf(null !== (ZC = CC.failedUpN) && void 0 !== ZC ? ZC : -1);
+       return QC >= 0 && DC(CC.failedUpAt) ? {
+         step: QC,
+         untilMs: performance.now() + oC.d.stepUp.failWaitsMs[0]
+       } : null
+     }
+     let VC = null,
+       Cz = !1,
+       zz = "";
+     const Zz = new Set;
+ ... (43 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L27-L28` → after: `L378-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L378-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/196.js#L378-L481) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/196.js#L27-L28)

```diff
-         supports(kk) {
-           return this.tools.has(kk)
+       }))
+     }
+     let Fz = 0;
+ 
+     function Wz() {
+       var CC;
+       const zC = null !== (CC = rC()) && void 0 !== CC ? CC : {
+           gpu: zz
+         },
+         ZC = uC();
+       Fz = cC(), VC = new YC({
+           changed: Qz,
+           lM: () => {
+             Mz({
+               heldN: void 0
+             })
+ ... (88 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L30-L32` → after: `L483-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L483-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/196.js#L483-L513) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/196.js#L30-L32)

```diff
-         async downloadScene(kk, ek) {
-           const ik = await this.loadHost();
-           await ik.downloadScene(kk, ek)
+       }
+     }
+ 
+     function xz() {
+       var CC;
+       null === (CC = VC) || void 0 === CC || CC.resized(performance.now())
+     }
+   },
+   34100: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => bC
+     });
+     var QC = ZC(77),
+       wC = ZC(107);
+ 
+     function bC(CC, zC, ZC) {
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L34-L50` → after: `L515-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L515-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/196.js#L515-L518) · [Before (L34-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/196.js#L34-L50)

```diff
-         async setAmbientLightIntensity(kk) {
-           const ek = await this.loadHost();
-           await ek.setAmbientLightIntensity(kk)
-         }
-       },
-       mk = {
-         tools: Sk.c,
-         downloadScene: async () => {
-           throw new Error("This client can't download the scene")
-         },
-         setAmbientLightIntensity: async () => {
-           throw new Error("This client can't set the ambient light")
-         }
-       };
-     Dk.s && Pk.setHost(mk), (0, fk.s)((() => {
-       Pk.setHost(mk)
- ... (1 more removed lines; see GitHub link above)
+         ZC && (0, wC.z)(String(ZC.getParameter(ZC.VENDOR)), String(ZC.getParameter(ZC.RENDERER)))
+       } catch {}
+       return null
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/197.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/197.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b)

#### 1. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L4)

```diff
-   33707: (kk, ek, ik) => {
+   36690: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L6-L14` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L6) · [Before (L6-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L6-L14)

```diff
-       b: () => ck,
-       e: () => Ye,
-       g: () => ye,
-       k: () => Ce,
-       m: () => be,
-       o: () => Pe,
-       q: () => Me,
-       r: () => Le,
-       t: () => me
+       e: () => bC
```

#### 3. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L16-L185` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L8-L19) · [Before (L16-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L16-L185)

```diff
-     var Dk = ik(22),
-       fk = ik(99),
-       Sk = ik(1614),
-       bk = ik(4376),
-       rk = ik(2727),
-       Pk = ik(2730),
-       mk = ik(38);
-     const {
-       windows: Mk,
-       target: Kk,
-       stepDown: xk,
-       stepUp: nk,
-       noGain: Uk
-     } = Pk.b, Hk = 1e3 / 60 * 1.08, wk = 1e3 / 55, lk = 1e3 / 45, pk = 1e3 / 30 * .92, yk = 1e3 / 30 * 1.08;
-     class Yk {
-       constructor() {
- ... (154 more removed lines; see GitHub link above)
+     var QC = ZC(48),
+       wC = ZC(28);
+ 
+     function bC(CC, zC) {
+       const [ZC, bC] = (0, QC.useState)(zC);
+       return (0, QC.useEffect)((() => {
+         bC(zC());
+         const ZC = wC.o.subscribe(CC, (CC => {
+           bC(CC)
+         }));
+         return () => {
+           wC.o.unsubscribe(ZC)
```

#### 4. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L187-L245` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L21) · [Before (L187-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L187-L245)

```diff
-         const Pk = this.step - 1;
-         Pk >= 0 && this.cleanRun >= (this.climbing ? nk.climbWindows : nk.cleanWindows) && this.upAllowed(Pk, Sk) && (this.phase = {
-           kind: "up",
-           from: this.step,
-           judged: 0,
-           fromClimbed: this.climbed
-         }, this.setStep(Pk, kk, Sk, "up"))
-       }
-       waitOver(kk) {
-         return !(0 === this.step && null !== this.noGain && kk < this.noGain.untilMs) && kk >= this.downUntilMs[this.step]
-       }
-       upAllowed(kk, ek) {
-         return this.upFailures[kk] <= nk.failWaitsMs.length && ek >= this.upUntilMs[kk]
-       }
-       keepDown(kk, ek, ik) {
-         this.watchAt(this.step), this.downBackoffMs[kk] = 0, this.noGainFps[kk] = 0, this.record(ik, ek, "down_kept"), 0 === kk && null !== this.noGain && (this.noGain = null, this.hooks.noGain(null)), this.hooks.fU(this.step)
- ... (43 more removed lines; see GitHub link above)
+       }), [CC]), ZC
```

#### 5. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L247-L252` → after: `L23-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L23-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L23-L33) · [Before (L247-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L247-L252)

```diff
-     var qk = ik(33714),
-       Ik = ik(3082),
-       zk = ik(33721);
-     const Qk = "autoGraphics",
-       vk = 6048e5,
-       Ek = "startScale";
+   },
+   36820: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => wC,
+       g: () => bC,
+       j: () => fC,
+       m: () => nC
+     });
+     var QC = ZC(1664);
+     const wC = ".bloxdreplay",
+       bC = "application/octet-stream";
```

#### 6. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L255` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L36) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L255)

```diff
-       return (0, rk.O)(Dk.b.get("clientEscMenuOptions").pixelScale) * (0, rk.K)()
+       return `game-recording-${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date).toISOString()}${wC}`
```

#### 7. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L258-L259` → after: `L39-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L39-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L39-L63) · [Before (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L258-L259)

```diff
-     function ak() {
-       return (0, rk.y)(hk())
+     function fC(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nC();
+       return (0, QC.e)(new Blob([CC], {
+         type: bC
+       }), zC), zC
+     }
+   },
+   36802: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC,
+       g: () => bC
+     });
+     var QC = ZC(36811);
+     let wC = {
+       open: async () => {
+         throw new Error(QC.c.viewerLoadFailed.text)
+ ... (9 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L263-L264` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L67) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L263-L264)

```diff
-       const kk = mk.f.getItem(Qk);
-       return "object" !== typeof kk || null === kk || "string" !== typeof kk.gpu ? null : kk
+       return wC
```

#### 9. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L268-L272` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L173) · [Before (L268-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L268-L272)

```diff
-       return {
-         untilEpochMs: Date.now() + (kk.untilMs - performance.now()),
-         backoffMs: kk.backoffMs,
-         fps: kk.fps
-       }
+       return CC instanceof Error && fC.has(CC.message) ? CC.message : void 0
```

#### 10. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L276-L280` → after: `L177-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L177-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L177-L183) · [Before (L276-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L276-L280)

```diff
-       return void 0 === kk || "number" !== typeof kk.fps ? null : {
-         untilMs: performance.now() + (kk.untilEpochMs - Date.now()),
-         backoffMs: kk.backoffMs,
-         fps: kk.fps
-       }
+       var zC;
+       const ZC = null !== (zC = CC.timeoutMs) && void 0 !== zC ? zC : "Error" === CC.type ? wC : bC;
+       QC.o.bp("showBottomMessage", {
+         message: CC.text,
+         timeoutLength: ZC,
+         type: CC.type
+       })
```

#### 11. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L282` → after: `L185-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L185-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L185-L191) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L282)

```diff
-     let Bk = null;
+   },
+   36375: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => wC,
+       f: () => bC
+     });
+     let QC = !1;
```

#### 12. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L293-L294` → after: `L198-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L198-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L198-L209) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L293-L294)

```diff
-       const ek = "number" === typeof kk ? Date.now() - kk : -1;
-       return ek >= 0 && ek < vk
+       return QC !== CC && (QC = CC, !0)
+     }
+   },
+   34107: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC,
+       h: () => wC
+     });
+     var QC = ZC(20);
+ 
+     function wC(CC, zC) {
+       return CC && !zC
```

#### 13. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L299` → after: `L213-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L213-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L213-L249) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L299)

```diff
-       return Zk ??= (0, fk.getDeviceDefaultPixelScale)(), gk(Zk)
+       return wC(QC.b.get("isTouchScreen"), QC.b.get("clientEscMenuOptions").touchActionButtons)
+     }
+   },
+   36676: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC
+     });
+     const QC = 3
+   },
+   36687: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       B: () => iC,
+       C: () => IC,
+       D: () => vC,
+       b: () => qC,
+       e: () => SC,
+ ... (21 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L303-L304` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L253-L254) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L303-L304)

```diff
-       const ek = Dk.b.get("clientEscMenuOptions");
-       return ek.pixelSmoothing && !(0, bk.d)("pixelScale") && ek.pixelScale === kk
+       const zC = new Set(CC);
+       (0, wC.e)(zC, FC) || (FC = zC, bC.o.bp(nC, FC))
```

#### 15. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L326-L332` → after: `L261-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L261-L262) · [Before (L326-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L326-L332)

```diff
-     function Jk(kk, ek) {
-       var ik;
-       const Dk = ek.indexOf(null !== (ik = kk.failedUpN) && void 0 !== ik ? ik : -1);
-       return Dk >= 0 && Tk(kk.failedUpAt) ? {
-         step: Dk,
-         untilMs: performance.now() + Pk.b.stepUp.failWaitsMs[0]
-       } : null
+     function pC(CC) {
+       0 === CC.size && 0 === WC.size || (WC = new Map(CC), bC.o.bp(fC, WC))
```

#### 16. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L340` → after: `L266-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L266-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L266-L304) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L340)

```diff
-       for (const kk of De) kk()
+       return NC
+     }
+ 
+     function GC(CC) {
+       CC.length === NC.size && CC.every(((CC, zC) => NC.get(CC) === zC)) || (NC = new Map(CC.map(((CC, zC) => [CC, zC]))), bC.o.bp(oC, NC))
+     }
+ 
+     function RC(CC, zC, ZC, QC) {
+       if (! function(CC, zC, ZC) {
+           return CC.size > 0 || zC.size > 0 || ZC.size > 0
+         }(zC, ZC, QC)) return CC;
+       const wC = CC => {
+         const QC = ZC.get(CC.name);
+         var wC;
+         return QC ? null !== (wC = QC.stepsAway) && void 0 !== wC ? wC : 1 : zC.has(CC.name) ? -1 : 0
+       };
+ ... (23 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L344` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L308) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L344)

```diff
-       return ee ? null : (ne(), null === ke ? (null !== Zk || null !== (0, fk.peekGpuVendor)() ? Ok() : gk(1)) ? Rk() : null : Ok() ? ke.currentStep() : null)
+       gC([]), pC(new Map), GC([])
```

#### 18. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L348-L352` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L312) · [Before (L348-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L348-L352)

```diff
-       const kk = Se();
-       if (null === kk) return null;
-       const ek = ak(),
-         ik = ek[Math.min(kk, ek.length - 1)];
-       return ik === re() ? null : ik
+       return (0, QC.e)(nC, MC)
```

#### 19. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L356` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L316) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L356)

```diff
-       return (0, rk.B)(Dk.b.get("clientEscMenuOptions").pixelScale, (0, rk.K)())
+       return (0, QC.e)(fC, SC)
```

#### 20. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L360` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L320) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L360)

```diff
-       return null !== ke && null !== be()
+       return (0, QC.e)(oC, PC)
```

#### 21. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L364-L366` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L331) · [Before (L364-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L364-L366)

```diff
-       return De.add(kk), () => {
-         De.delete(kk)
-       }
+       QC = CC
```

#### 22. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L369-L382` → after: `L334-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L334-L335) · [Before (L369-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L369-L382)

```diff
-     function Me(kk, ek, ik) {
-       var Dk;
-       if (null !== ke || ee || (0, Ik.l)()) return;
-       const fk = (0, qk.b)(kk, ek, ik);
-       null !== fk && (0, Ik.p)(fk.vendor), ie = `${kk}:${(null===fk||void 0===fk?void 0:fk.renderer)||(null===fk||void 0===fk?void 0:fk.vendor)||""}`, (null === (Dk = Wk()) || void 0 === Dk ? void 0 : Dk.gpu) !== ie && (mk.f.setItem(Qk, {
-         gpu: ie
-       }), Gk = null), xe(), document.addEventListener("visibilitychange", (() => {
-         if (document.hidden) try {
-           var kk;
-           null === (kk = ke) || void 0 === kk || kk.hidden()
-         } catch (ek) {
-           Le(), console.error("The quality steps stopped", ek)
-         }
-       }))
+     function bC(CC, zC) {
+       return QC(CC, zC)
```

#### 23. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L384` → after: `L337-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L337-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L337-L347) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L384)

```diff
-     let Ke = 0;
+   },
+   36451: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => MC,
+       e: () => wC,
+       h: () => nC,
+       j: () => oC
+     });
+     var QC = ZC(36454);
+     const wC = "data-camera-fade",
+       bC = "data-letterbox-bar";
```

#### 24. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L386-L449` → after: `L349-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L349-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L349-L355) · [Before (L386-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L386-L449)

```diff
-     function xe() {
-       var kk;
-       const ek = null !== (kk = Wk()) && void 0 !== kk ? kk : {
-           gpu: ie
-         },
-         ik = ak();
-       Ke = hk(), ke = new uk({
-           changed: fe,
-           fU: () => {
-             Ue({
-               heldN: void 0
-             })
-           },
-           XM: kk => {
-             var ek;
-             const ik = ak()[kk],
- ... (48 more removed lines; see GitHub link above)
+     function nC(CC) {
+       return CC instanceof Element && CC.hasAttribute(bC)
+     }
+     let fC = null;
+ 
+     function oC(CC) {
+       fC = CC
```

#### 25. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L453` → after: `L359-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L359-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L359-L363) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L453)

```diff
-       null !== ke && hk() !== Ke && (Gk = null, xe())
+       const CC = document.createElement("div"),
+         {
+           style: zC
+         } = CC;
+       return zC.position = "absolute", zC.left = "0", zC.right = "0", zC.pointerEvents = "none", CC
```

#### 26. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L457-L461` → after: `L367-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L367-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L367-L370) · [Before (L457-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L457-L461)

```diff
-       mk.f.setItem(Qk, {
-         ...Wk(),
-         ...kk,
-         gpu: ie
-       })
+       const zC = qC();
+       zC.style[CC] = "0", zC.style.height = 100 * QC.b + "%", zC.style.background = "#000000", zC.style.pointerEvents = "auto", zC.setAttribute(bC, ""), zC.addEventListener("mousedown", NC), zC.addEventListener("contextmenu", WC);
+       for (const ZC of ["touchstart", "touchmove", "touchend", "touchcancel"]) zC.addEventListener(ZC, WC);
+       return zC
```

#### 27. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L468-L469` → after: `L373-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L373-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L373-L459) · [Before (L468-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L468-L469)

```diff
-     function ye() {
-       He++
+     function WC(CC) {
+       CC.preventDefault(), CC.stopPropagation()
+     }
+ 
+     function NC(CC) {
+       WC(CC);
+       const zC = document.activeElement;
+       zC instanceof HTMLElement && zC !== document.body && zC.blur()
+     }
+     class MC {
+       constructor(CC) {
+         this.getContainer = CC, this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1, this.markedHost = null, this.markedCovered = !1
+       }
+       setFade(CC, zC) {
+         var ZC;
+         if (!this.elements && zC <= 0) return;
+ ... (71 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L473-L474` → after: `L463-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L463-L465) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L473-L474)

```diff
-       let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       ne(), null !== ke && (kk - le >= 1e3 && (pe = He - we > Pk.b.sceneChange.meshesPerSecond, we = He, le = kk), zk.e.isHeld() ? ke.paused(kk) : ke.frame(kk, ek, ik && !document.hidden && Ok(), pe || Dk > 0 || (0, Sk.s)()))
+       const QC = 1 - ZC,
+         wC = ZC * ZC;
+       return 3 * (QC * QC) * ZC * CC + 3 * QC * wC * zC + wC * ZC
```

#### 29. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L477` → after: `L468-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L468-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L468-L492) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L477)

```diff
-     function Le() {
+     function qC(CC, zC, ZC) {
+       const QC = 1 - ZC;
+       return 3 * (QC * QC) * CC + 6 * QC * ZC * (zC - CC) + 3 * (ZC * ZC) * (1 - zC)
+     }
+ 
+     function FC(CC, zC) {
+       const ZC = fC(CC);
+       if (0 === ZC || 1 === ZC) return ZC;
+       const QC = fC(zC[0]),
+         wC = zC[1],
+         bC = fC(zC[2]),
+         nC = zC[3];
+       if (QC === wC && bC === nC) return ZC;
+       let FC = ZC,
+         WC = !1;
+       for (let NC = 0; NC < 8; NC++) {
+ ... (9 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L479-L485` → after: `L494-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L494-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L494-L500) · [Before (L479-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L479-L485)

```diff
-         ee = !0, null !== ke && (ke = null, Ue({
-           noGain: void 0
-         }));
-         try {
-           fe()
-         } catch (kk) {
-           console.error("The quality steps' resize to the player's n failed", kk)
+         let CC = 0,
+           zC = 1;
+         FC = ZC;
+         for (let wC = 0; wC < 12; wC++) {
+           const wC = oC(QC, bC, FC);
+           if (Math.abs(wC - ZC) < 1e-6) break;
+           ZC > wC ? CC = FC : zC = FC, FC = (CC + zC) / 2
```

#### 31. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L491-L492` → after: `L541-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L541-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L541-L579) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L491-L492)

```diff
-       var kk;
-       null === (kk = ke) || void 0 === kk || kk.resized(performance.now())
+       var CC, zC;
+       return null !== (CC = null === (zC = screen.orientation) || void 0 === zC ? void 0 : zC.type) && void 0 !== CC ? CC : innerWidth > innerHeight ? "landscape" : "portrait"
+     }
+     const bC = new class {
+       constructor() {
+         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
+           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
+         }
+       }
+       isHeld() {
+         return this.holding && wC() !== this.heldOrientation && (this.holding = !1), this.holding
+       }
+       hold() {
+         this.heldOrientation = wC(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
+           this.holding && (0, QC.IS)(new Error("Game view size held for 60 s"))
+         }), 6e4)
+ ... (23 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L495` → after: `L582-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L582-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L582-L594) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L495)

```diff
-   33714: (kk, ek, ik) => {
+   36387: (CC, zC, ZC) => {
+     const QC = JSON.parse('{"classicGame":{"loseItemsIfLogOutTip":"You will lose your items if you log out when less than 80hp and hit by a player within the last 8 seconds.","protectLandWithProtectorsTip":"Protect your land and chests with protectors - craft them from diamonds", … [truncated]
+     (0, ZC(1143).b)(QC)
+   },
+   36693: (CC, zC, ZC) => {
+     function QC(CC, zC) {
+       return CC.size === zC.size && [...CC].every((CC => zC.has(CC)))
+     }
+     ZC.d(zC, {
+       e: () => QC
+     })
+   },
+   36630: (CC, zC, ZC) => {
```

#### 33. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L497` → after: `L596-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L596-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L596-L607) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L497)

```diff
-       b: () => Sk
+       A: () => MC,
+       C: () => gC,
+       D: () => SC,
+       F: () => PC,
+       e: () => QC,
+       i: () => wC,
+       j: () => NC,
+       n: () => pC,
+       o: () => FC,
+       s: () => GC,
+       w: () => oC,
+       x: () => qC
```

#### 34. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L499-L500` → after: `L609-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L609-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L609-L642) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L499-L500)

```diff
-     var Dk = ik(99),
-       fk = ik(129);
+     const QC = [{
+       numLines: 7,
+       charsPerLine: 16,
+       uiFontSize: 3.3,
+       ingameFontSize: 25
+     }, {
+       numLines: 5,
+       charsPerLine: 11,
+       uiFontSize: 4.6,
+       ingameFontSize: 36
+     }, {
+       numLines: 3,
+       charsPerLine: 7,
+       uiFontSize: 7.5,
+       ingameFontSize: 58
+     }];
+ ... (18 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L503-L517` → after: `L645-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L645-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L645-L709) · [Before (L503-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L503-L517)

```diff
-       if ("webgpu" === kk) return ik ? ((0, Dk.seedGpuVendor)(ik), {
-         vendor: ik,
-         renderer: ""
-       }) : null;
-       try {
-         const ik = "webgl" === kk ? ek.getContext("webgl2") : ek.getContext("webgl");
-         "webgl" === kk && ik && (0, fk.w)(ik);
-         const Sk = null === ik || void 0 === ik ? void 0 : ik.getExtension("WEBGL_debug_renderer_info");
-         if (ik && Sk) {
-           const kk = String(ik.getParameter(Sk.UNMASKED_VENDOR_WEBGL)),
-             ek = String(ik.getParameter(Sk.UNMASKED_RENDERER_WEBGL));
-           return (0, Dk.seedGpuVendor)(kk), (0, fk.D)(kk, ek), {
-             vendor: kk,
-             renderer: ek
-           }
+       const wC = oC(CC, zC),
+         {
+           numLines: nC,
+           charsPerLine: fC
+         } = QC[ZC];
+       return {
+         numLines: Math.max(1, Math.floor(nC / bC * wC.height)),
+         charsPerLine: Math.max(1, Math.floor(fC * wC.width))
+       }
+     }
+ 
+     function FC(CC, zC, ZC, QC) {
+       const {
+         numLines: wC,
+         charsPerLine: bC
+       } = qC(ZC, QC, zC);
+ ... (49 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L519-L521` → after: `L711-L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L711-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/197.js#L711-L913) · [Before (L519-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/197.js#L519-L521)

```diff
-         ik && (0, fk.D)(String(ik.getParameter(ik.VENDOR)), String(ik.getParameter(ik.RENDERER)))
-       } catch {}
-       return null
+       return bC.join("\n")
+     }
+   },
+   34162: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => FC,
+       h: () => NC,
+       i: () => WC,
+       l: () => nC,
+       p: () => qC,
+       t: () => oC
+     });
+     var QC = ZC(326);
+     const wC = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
+       bC = {
+         Damage: {
+ ... (187 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/198.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/198.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31)

#### 1. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L4-L6` → after: `L4-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L4-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L4-L29) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L4-L6)

```diff
-   36403: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Sk
+   34171: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       MAX_BLOCK_ID: () => QC,
+       armourReductionOf: () => TC,
+       clipSizeOf: () => sC,
+       creativeAltNames: () => nz,
+       creativeCategoryOf: () => kC,
+       creativeItemCategories: () => fC,
+       creativeItemCategoryIcons: () => oC,
+       creativeItemIds: () => OC,
+       descriptionOf: () => cC,
+       displayNameOf: () => XC,
+       dropsNothing: () => DC,
+       enchantmentPerksOf: () => UC,
+       gunTypeOf: () => tC,
+       harvestsNullLevelOf: () => jC,
+ ... (10 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L8-L78` → after: `L31-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L31-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L31-L35) · [Before (L8-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L8-L78)

```diff
-     var Dk = ik(60),
-       fk = ik(26);
- 
-     function Sk(kk, ek) {
-       const [ik, Sk] = (0, Dk.useState)(ek);
-       return (0, Dk.useEffect)((() => {
-         Sk(ek());
-         const ik = fk.j.subscribe(kk, (kk => {
-           Sk(kk)
-         }));
-         return () => {
-           fk.j.unsubscribe(ik)
-         }
-       }), [kk]), ik
-     }
-   },
- ... (55 more removed lines; see GitHub link above)
+     const QC = 8558,
+       wC = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
+       bC = "S-$SW$$R&$SG2$)$'$)$4$)$X*$I6$-$%$%$cC1$WD1$%%%$]5$b7$RH4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$O`0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TV3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
+       nC = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
+       fC = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
```

#### 3. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L80-L170` → after: `L37-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L37-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L37-L51) · [Before (L80-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L80-L170)

```diff
-         recordingStarted: {
-           text: "Started recording",
-           type: "Success"
-         },
-         recordingStopped: {
-           text: "Stopped recording",
-           type: "Success"
-         },
-         recordingSaved: {
-           text: "Recording saved",
-           type: "Success"
-         },
-         clipSaved: {
-           text: "Clip saved",
-           type: "Success"
-         },
- ... (75 more removed lines; see GitHub link above)
+         building: "Stone Bricks",
+         colours: "Magenta Wool",
+         nature: "Grass Block",
+         decoration: "Lantern",
+         utility: "Workbench",
+         tools: "Iron Pickaxe",
+         combat: "Iron Sword",
+         food: "Apple",
+         mobs: "Pig Spawn Orb",
+         materials: "Iron Bar",
+         worldTools: "Code Block"
+       };
+     var qC = ZC(3276),
+       FC = ZC(3282);
+     const WC = Object.freeze([]);
```

#### 4. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L173` → after: `L54-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L54-L58) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L173)

```diff
-       return kk instanceof Error && rk.has(kk.message) ? kk.message : void 0
+       let zC = null;
+       return ZC => {
+         var QC;
+         return zC ??= (0, FC.F)(CC, 10091), null !== (QC = zC[ZC]) && void 0 !== QC ? QC : 0
+       }
```

#### 5. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L176-L183` → after: `L61-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L61-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L61-L68) · [Before (L176-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L176-L183)

```diff
-     function mk(kk) {
-       var ek;
-       const ik = null !== (ek = kk.timeoutMs) && void 0 !== ek ? ek : "Error" === kk.type ? fk : Sk;
-       Dk.j.tm("showBottomMessage", {
-         message: kk.text,
-         timeoutLength: ik,
-         type: kk.type
-       })
+     function MC(CC, zC, ZC) {
+       const QC = NC(CC);
+       let wC = null,
+         bC = [];
+       return CC => {
+         const nC = QC(CC);
+         if (0 !== nC) return null === wC && (wC = zC.split(FC.u), bC = new Array(wC.length)), bC[nC - 1] ??= ZC(wC[nC - 1])
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L193` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L71) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L193)

```diff
-     function fk() {
+     function gC(CC) {
```

#### 7. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L198-L213` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L76) · [Before (L198-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L198-L213)

```diff
-       return Dk !== kk && (Dk = kk, !0)
-     }
-   },
-   33723: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => Sk,
-       h: () => fk
-     });
-     var Dk = ik(22);
- 
-     function fk(kk, ek) {
-       return kk && !ek
-     }
- 
-     function Sk() {
-       return fk(Dk.b.get("isTouchScreen"), Dk.b.get("clientEscMenuOptions").touchActionButtons)
+       return CC === FC.f ? null : (0, FC.G)(CC)
```

#### 8. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L215-L244` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L78-L79) · [Before (L215-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L215-L244)

```diff
-   },
-   36382: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => Dk
-     });
-     const Dk = 3
-   },
-   36396: (kk, ek, ik) => {
-     ik.d(ek, {
-       A: () => Ak,
-       D: () => sk,
-       c: () => mk,
-       g: () => Hk,
-       h: () => Yk,
-       k: () => yk,
-       n: () => Ck,
- ... (14 more removed lines; see GitHub link above)
+     const pC = MC("T$$#&#$T'#$F$#$$%$B#$>#$##=$$1$.)$*#$(&$)#)$N$#$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$+##$&#$$%$*/$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$T$&$($$$*$(#$$1$$1$$1$$1$$1$$1$$)$$)$$)$$)$$)$*)$N2#$.($$1$$)$T$$$,#$4#$)##$V'#$)#[$$+#$#$($$'#%$&$$N)*$4#$ … [truncated]
+       PC = MC("$J$#$&$$F&$23$$J$$$A$$c$$,^'$&H2$$'$$'$$0$*9$$R$#49$$($$&$$%$$$#,C(##$$#$&U)#$#$$($B+#2R$$1#7$%#+$6#$$)$J$O$#*-$1#M1$$a$$&'#%$&)$$4$.&$(;$*%$$$$$#$$#$,Z/$$T&$&V$$$Z-$###$%/V$O$$&2$*5#X$#$V%.$&2$&#$*&$$5$$E$#c2R1$&$$cc$c]$$$R%$*G=$]/=$2:$J5-$b*#G$$,,#%$+##$#4+#+##$+ … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L248-L259` → after: `L84-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L84-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L84-L101) · [Before (L248-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L248-L259)

```diff
-     function nk() {
-       return Mk
-     }
- 
-     function Uk(kk) {
-       const ek = new Set(kk);
-       (0, fk.b)(ek, Mk) || (Mk = ek, Sk.j.tm(bk, Mk))
-     }
- 
-     function Hk() {
-       return Kk
-     }
+     function xC(CC, zC, ZC) {
+       AC !== (0, qC.d)() && (AC = (0, qC.d)(), GC.clear(), RC.clear());
+       let QC = CC.get(zC);
+       return void 0 === QC && (QC = ZC(), void 0 !== QC && CC.set(zC, QC)), QC
+     }
+     const JC = MC("_$QN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$b%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
+       IC = MC("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-& … [truncated]
+       iC = MC(".W]+#%#%#%#%#%#%#%#%%%#%#%#%%%#%#%#", "30|20|16|1|2|5|7|12|8|100|21|24|22|75", Number),
+       vC = MC("&PO+#####%####################$#%#,#%#####,%&#)#,#.#%#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1$bC$'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$1'#*# … [truncated]
+       eC = MC(">W]+#%#)$)%9$", "none|sniper", gC),
+       hC = MC("*W]+#%#%#%#%$%#)&%(%%%$%%)$)'%&", "semi_automatic|submachine|rifle|pistol|shotgun", gC),
+       KC = NC("]%LV+#c&M.$4_1$44$44$44$49$4/$4/$4/$"),
+       YC = NC("$a&#$9$Z$K?$&;$$[($(c($6Y&$$)$$$$&G%$*$$$*$(V*$Z$V$$$#$$#$&+$$#$$%$$$$$$$$$$&$$$#$$($,E0$$T&$&V$$D$`-$(%$6*$$%$T$M$$$L%$6;$$$$$2$$W:$*D^%$$N%$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$2O'$2*$2*$2*$2*$2*$2*$2*$2*$2*$:*$0=$&^$$$N$$(Q$$$]$$.#$&6$$K%$:.$*I$$*&$*S+$6,$"),
+       dC = MC("$DO+#######%#$ZD$$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%($U$(.1($'(.1($'(.1($'(.1($2(.+($((.+($((.+($((.+($C&($@$", "1|2|3|4|5", (CC => "" === CC ? null : Number(CC))),
+       mC = MC("$F(#$%$$&#$)%$)%$0$$,$$%$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$@$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$I$%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$.#$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$' … [truncated]
+       HC = MC(",QN+####$/#+#+###+#4####1+##S(+$$#2A#$H%#$%0$%0$%0$%0$%0$%0$%0$%0$%0$U.0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0:C/(:.($R$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$(?+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$#(#0$%0 … [truncated]
+ ... (2 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L262-L266` → after: `L104-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L104-L108) · [Before (L262-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L262-L266)

```diff
-       0 === kk.size && 0 === Kk.size || (Kk = new Map(kk), Sk.j.tm(rk, Kk))
-     }
- 
-     function lk() {
-       return xk
+       const zC = pC(CC);
+       return null !== zC ? zC : xC(GC, CC, (() => {
+         const zC = (0, qC.c)(CC);
+         return void 0 === zC ? void 0 : (0, FC.M)(zC)
+       }))
```

#### 11. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L270-L278` → after: `L112-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L112-L113) · [Before (L270-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L270-L278)

```diff
-       kk.length === xk.size && kk.every(((kk, ek) => xk.get(kk) === ek)) || (xk = new Map(kk.map(((kk, ek) => [kk, ek]))), Sk.j.tm(Pk, xk))
-     }
- 
-     function yk(kk, ek, ik, Dk) {
-       if (! function(kk, ek, ik) {
-           return kk.size > 0 || ek.size > 0 || ik.size > 0
-         }(ek, ik, Dk)) return kk;
-       const fk = kk => {
-         const Dk = ik.get(kk.name);
+       const zC = PC(CC);
+       return null !== zC ? zC : xC(RC, CC, (() => {
```

#### 12. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L280-L296` → after: `L115-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L115-L116) · [Before (L280-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L280-L296)

```diff
-         return Dk ? null !== (fk = Dk.stepsAway) && void 0 !== fk ? fk : 1 : ek.has(kk.name) ? -1 : 0
-       };
-       return [...kk].sort(((kk, ek) => fk(kk) - fk(ek) || ((kk, ek) => {
-         const ik = Dk.get(kk.name),
-           fk = Dk.get(ek.name);
-         return void 0 === ik || void 0 === fk ? (void 0 === ik ? 1 : 0) - (void 0 === fk ? 1 : 0) : Number(ek.haveIngredients) - Number(kk.haveIngredients) || ik - fk
-       })(kk, ek)))
-     }
- 
-     function Yk(kk, ek, ik) {
-       const Dk = [...ek.keys()].sort(((kk, ik) => ek.get(kk) - ek.get(ik)));
-       return kk.forEach(((fk, Sk) => {
-         const bk = ik(fk);
-         ek.has(bk) || (Dk.splice(0 === Sk ? 0 : Dk.indexOf(ik(kk[Sk - 1])) + 1, 0, bk), ek.set(bk, -1))
-       })), Dk.forEach(((kk, ik) => {
-         ek.set(kk, ik)
- ... (1 more removed lines; see GitHub link above)
+         return null !== (zC = (0, FC.I)(XC(CC))) && void 0 !== zC ? zC : void 0
+       }))
```

#### 13. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L331` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L120) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L331)

```diff
-       Dk = kk
+       return JC(CC)
```

#### 14. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L350` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L124) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L350)

```diff
-       return kk instanceof Element && kk.hasAttribute(Sk)
+       return IC(CC)
```

#### 15. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L355-L363` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L128) · [Before (L355-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L355-L363)

```diff
-       rk = kk
-     }
- 
-     function mk() {
-       const kk = document.createElement("div"),
-         {
-           style: ek
-         } = kk;
-       return ek.position = "absolute", ek.left = "0", ek.right = "0", ek.pointerEvents = "none", kk
+       return iC(CC)
```

#### 16. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L367-L370` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L132) · [Before (L367-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L367-L370)

```diff
-       const ek = mk();
-       ek.style[kk] = "0", ek.style.height = 100 * Dk.b + "%", ek.style.background = "#000000", ek.style.pointerEvents = "auto", ek.setAttribute(Sk, ""), ek.addEventListener("mousedown", xk), ek.addEventListener("contextmenu", Kk);
-       for (const ik of ["touchstart", "touchmove", "touchend", "touchcancel"]) ek.addEventListener(ik, Kk);
-       return ek
+       return vC(CC)
```

#### 17. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L374` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L136) · [Before (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L374)

```diff
-       kk.preventDefault(), kk.stopPropagation()
+       return eC(CC)
```

#### 18. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L378-L380` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L140) · [Before (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L378-L380)

```diff
-       Kk(kk);
-       const ek = document.activeElement;
-       ek instanceof HTMLElement && ek !== document.body && ek.blur()
+       return hC(CC)
```

#### 19. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L459` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L144) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L459)

```diff
-       return Math.min(1, Math.max(0, kk))
+       return 0 !== YC(CC)
```

#### 20. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L462-L470` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L147-L148) · [Before (L462-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L462-L470)

```diff
-     function Pk(kk, ek, ik) {
-       const Dk = 1 - ik,
-         fk = ik * ik;
-       return 3 * (Dk * Dk) * ik * kk + 3 * Dk * fk * ek + fk * ik
-     }
- 
-     function mk(kk, ek, ik) {
-       const Dk = 1 - ik;
-       return 3 * (Dk * Dk) * kk + 6 * Dk * ik * (ek - kk) + 3 * (ik * ik) * (1 - ek)
+     function jC(CC) {
+       return dC(CC)
```

#### 21. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L473-L503` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L151-L152) · [Before (L473-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L473-L503)

```diff
-     function Mk(kk, ek) {
-       const ik = rk(kk);
-       if (0 === ik || 1 === ik) return ik;
-       const Dk = rk(ek[0]),
-         fk = ek[1],
-         Sk = rk(ek[2]),
-         bk = ek[3];
-       if (Dk === fk && Sk === bk) return ik;
-       let Mk = ik,
-         Kk = !1;
-       for (let xk = 0; xk < 8; xk++) {
-         const kk = Pk(Dk, Sk, Mk) - ik;
-         if (Math.abs(kk) < 1e-6) {
-           Kk = !0;
-           break
-         }
- ... (15 more removed lines; see GitHub link above)
+     function yC(CC) {
+       return 0 !== KC(CC)
```

#### 22. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L507-L518` → after: `L156-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L156-L159) · [Before (L507-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L507-L518)

```diff
-       switch (kk) {
-         case "linear":
-           return Dk;
-         case "easeIn":
-           return fk;
-         case "easeOut":
-           return Sk;
-         case "easeInOut":
-           return bk;
-         default:
-           return kk
-       }
+       const zC = mC(CC);
+       if (void 0 === zC || zC.startsWith(FC.t)) return null === zC || void 0 === zC ? void 0 : zC.slice(FC.t.length);
+       const ZC = (0, qC.c)(CC);
+       return void 0 === ZC ? void 0 : `${ZC}${FC.u}${zC}`
```

#### 23. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L531` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L163-L164) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L531)

```diff
-       return Math.abs(kk) > fk
+       var zC;
+       return null !== (zC = HC(CC)) && void 0 !== zC ? zC : WC
```

#### 24. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L533-L538` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L166) · [Before (L533-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L533-L538)

```diff
-   },
-   33721: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => Sk
-     });
-     var Dk = ik(1046);
+     let BC = null;
```

#### 25. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L541-L565` → after: `L169-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L169-L174) · [Before (L541-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L541-L565)

```diff
-       var kk, ek;
-       return null !== (kk = null === (ek = screen.orientation) || void 0 === ek ? void 0 : ek.type) && void 0 !== kk ? kk : innerWidth > innerHeight ? "landscape" : "portrait"
-     }
-     const Sk = new class {
-       constructor() {
-         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
-           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
-         }
-       }
-       isHeld() {
-         return this.holding && fk() !== this.heldOrientation && (this.holding = !1), this.holding
-       }
-       hold() {
-         this.heldOrientation = fk(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
-           this.holding && (0, Dk.cH)(new Error("Game view size held for 60 s"))
-         }), 6e4)
- ... (9 more removed lines; see GitHub link above)
+       if (null === BC) {
+         const CC = [],
+           zC = new FC.y(wC);
+         let ZC = 0;
+         for (; !zC.done;) ZC += (0, FC.N)(zC.next()), CC.push(ZC);
+         BC = Object.freeze(CC)
```

#### 26. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L567-L661` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L176) · [Before (L567-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L567-L661)

```diff
-       heldSizer(kk) {
-         let ek = !1;
-         return () => {
-           if (ek && this.isHeld()) return null;
-           const ik = kk();
-           return ek ||= null !== ik, ik
-         }
-       }
-       onRelease(kk) {
-         return this.resizers.add(kk), () => {
-           this.resizers.delete(kk)
-         }
-       }
-     }
-   },
-   36030: (kk, ek, ik) => {
- ... (79 more removed lines; see GitHub link above)
+       return BC
```

#### 27. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L666` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L180) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L666)

```diff
-       return kk.slice(0, Kk)
+       return EC(CC)
```

#### 28. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L673-L711` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L184-L185) · [Before (L673-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L673-L711)

```diff
-       const ik = Math.max(0, Hk - ek),
-         Dk = Math.min(nk, ik);
-       return kk.slice(0, Dk)
-     }
-     const lk = {
-       book: {
-         numLines: 13,
-         charsPerLine: 19,
-         uiFontSize: 1.95
-       },
-       cb: {
-         numLines: 1,
-         charsPerLine: 19,
-         uiFontSize: 1.95
-       },
-       nameTag: {
- ... (23 more removed lines; see GitHub link above)
+       var ZC;
+       return 0 !== ((null !== (ZC = lC(CC)) && void 0 !== ZC ? ZC : 0) & zC)
```

#### 29. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L801-L804` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L189) · [Before (L801-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L801-L804)

```diff
-       var ek;
-       return null !== (ek = Sk[kk]) && void 0 !== ek ? ek : {
-         translationKey: ""
-       }
+       return VC(CC, FC.c.OnlyInSearch)
```

#### 30. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L860` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L193) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L860)

```diff
-       return fk.includes(kk)
+       return VC(CC, FC.c.OnlyInCategory)
```

#### 31. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L864-L865` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L197) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L864-L865)

```diff
-       var ek;
-       return !0 === (null === kk || void 0 === kk || null === (ek = kk.customAttributes) || void 0 === ek ? void 0 : ek.cannotEnchant)
+       return VC(CC, FC.c.DevOnly)
```

#### 32. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L868-L872` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L200-L201) · [Before (L868-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L868-L872)

```diff
-     function Mk(kk, ek) {
-       const {
-         max: ik
-       } = rk[kk].at(-1);
-       return ek <= ik
+     function Qz(CC) {
+       return !VC(CC, FC.c.HiddenByDefault) && void 0
```

#### 33. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L875-L902` → after: `L204-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L204-L207) · [Before (L875-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L875-L902)

```diff
-     function Kk(kk) {
-       const ek = Math.sin(kk / 80),
-         ik = kk => {
-           if (kk <= 0) return 0;
-           if (kk > 1) return 1;
-           let ek = 0;
-           const ik = [1, 7, 21, 35, 35, 21, 7, 1];
-           for (let Dk = 0; Dk < ik.length; Dk++) {
-             ek += (Dk % 2 === 0 ? 1 : -1) * ik[Dk] * Math.pow(kk, 2 + Dk) / (2 + Dk)
-           }
-           return 72 * ek
-         },
-         Dk = .3 - .78 * ek,
-         fk = .5 - .78 * ek,
-         Sk = .6 - .7 * ek,
-         bk = .8 - .6 * ek;
- ... (12 more removed lines; see GitHub link above)
+     function wz(CC, zC, ZC, QC) {
+       var wC;
+       const bC = null !== (wC = lC(CC)) && void 0 !== wC ? wC : 0;
+       return 0 !== (bC & FC.c.DisabledInPublicLobbies) && zC || 0 !== (bC & FC.c.DisabledInProduction) && !0 || !ZC || !QC && 0 !== (bC & FC.c.DevOnly)
```

#### 34. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L905-L912` → after: `L211-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L211-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/198.js#L211-L223) · [Before (L905-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/198.js#L905-L912)

```diff
-     function xk(kk, ek) {
-       const {
-         min: ik,
-         max: fk
-       } = rk[kk][ek], Sk = Dk.c.sampleUniformIntDistribution(ik, fk, "includeMax");
-       return {
-         ...Kk(Sk),
-         level: Sk
+     function nz() {
+       if (null === bz) {
+         const CC = nC.split(FC.u),
+           zC = new Map,
+           ZC = new FC.y(bC);
+         let QC = 0,
+           wC = 0;
+         for (; !ZC.done;) {
+           QC += (0, FC.N)(ZC.next());
+           const bC = ZC.next();
+           zC.set(QC, Object.freeze(CC.slice(wC, wC + bC))), wC += bC
+         }
+         bz = zC
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/199.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/199.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93)

#### 1. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L4)

```diff
-   38682: (kk, ek, ik) => {
+   41330: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L9-L10` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L35-L36) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L9-L10)

```diff
-     var Dk = ik(4019);
-     let fk = null;
+     var QC = ZC(37023),
+       wC = ZC(38454);
```

#### 3. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L12-L13` → after: `L38-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L38-L46) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L12-L13)

```diff
-     function Sk(kk) {
-       return null !== fk && kk === fk
+     function bC(CC, zC) {
+       let [ZC, QC, wC] = CC;
+       return [0, .5, 1].map((CC => ({
+         timeFraction: CC,
+         rotation: {
+           nb: "catmull-rom-spline",
+           point: [ZC, QC, wC + (.5 === CC ? zC : 0)]
+         }
+       })))
```

#### 4. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L16-L58` → after: `L49-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L49-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L49-L77) · [Before (L16-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L16-L58)

```diff
-     function bk() {
-       this.oB = !1, this.stopPropagation = !1, this.JB = !1, this.disabled = !1
-     }
-     class rk {
-       constructor(kk, ek) {
-         this.version = "0.7.0";
-         var ik = Object.assign({}, new bk, ek || {});
-         this.element = kk || document, this.oB = !!ik.oB, this.stopPropagation = !!ik.stopPropagation, this.JB = !!ik.JB, this.disabled = !!ik.disabled, this.filterEvents = (kk, ek) => !0, this.ignoreEvent = kk => !1, this.down = new Dk.EventEmitter, this.up = new Dk.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           Wkk: 0,
-           tkk: 0,
-           Xkk: 0
-         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
-           lastX: 0,
-           lastY: 0,
- ... (27 more removed lines; see GitHub link above)
+     function nC(CC, zC, ZC) {
+       return {
+         Cb: 3200,
+         loop: !0,
+         Zb: {
+           Root: {
+             timeline: [0, .5, 1].map((CC => ({
+               timeFraction: CC,
+               position: {
+                 nb: "catmull-rom-spline",
+                 point: [0, .5 === CC ? .18 : 0, 0]
+               }
+             })))
+           },
+           HeadMesh: {
+             timeline: [0, .25, .75, 1].map((CC => ({
+ ... (13 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L67-L68` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L95-L96) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L67-L68)

```diff
-     function Pk(kk) {
-       for (var ek in kk) kk[ek] = 0
+     function wC(CC, zC) {
+       return QC.set(CC, zC), CC
```

#### 6. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L72-L85` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L100-L101) · [Before (L72-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L72-L85)

```diff
-       window.addEventListener("keydown", wk.bind(null, kk, !0), !1), window.addEventListener("keyup", wk.bind(null, kk, !1), !1);
-       var ek = {
-         passive: !0
-       };
-       kk.element.addEventListener("touchstart", nk.bind(void 0, kk), {
-         passive: !1
-       }), kk.element.addEventListener("touchend", Hk.bind(void 0, kk), ek), kk.element.addEventListener("mousedown", lk.bind(null, kk, !0), ek), window.document.addEventListener("mouseup", lk.bind(null, kk, !1), ek), kk.element.addEventListener("touchmove", pk.bind(null, kk), ek) … [truncated]
-     }
-     var Mk = 0,
-       Kk = 0,
-       xk = null;
- 
-     function nk(kk, ek) {
-       ek.preventDefault(), Uk(ek)
+       var zC;
+       return null !== (zC = QC.get(CC)) && void 0 !== zC ? zC : null
```

#### 7. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L89-L96` → after: `L113-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L113-L116) · [Before (L89-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L89-L96)

```diff
-       let ek = !1;
-       for (let ik = 0; ik < kk.touches.length; ++ik)
-         if (kk.touches[ik].identifier === xk) {
-           ek = !0;
-           break
-         } if (!ek) {
-         const ek = kk.changedTouches[0];
-         Mk = ek.clientX, Kk = ek.clientY, xk = ek.identifier
+       var zC;
+       return {
+         ...nC.store,
+         yaw: nC.store.yaw + (null !== (zC = QC.b[CC].previewYaw) && void 0 !== zC ? zC : 0)
```

#### 8. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L101` → after: `L135-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L135-L137) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L101)

```diff
-       for (var ik = ek.changedTouches, Dk = 0; Dk < ik.length; ++Dk) ik[Dk].identifier === xk && (xk = null)
+       CC instanceof Promise ? CC.then(zC).catch((CC => {
+         console.error("Couldn't open the preview", CC)
+       })) : zC(CC)
```

#### 9. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L103-L108` → after: `L139-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L139-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L139-L143) · [Before (L103-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L103-L108)

```diff
- 
-     function wk(kk, ek, ik) {
-       if (!kk.ignoreEvent(ik)) try {
-         jk(kk, ik), ek && ik.isTrusted && !ik.repeat && kk._keyStates[ik.code] && sk(kk, ik.code)
-       } finally {
-         dk(ik.code, ek, kk, ik)
+     class oC {
+       constructor(CC) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, fC(CC, (CC => {
+           this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height), null !== this.view && CC.show(this.view))
+         }))
```

#### 10. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L110-L126` → after: `L145-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L145-L147) · [Before (L110-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L110-L126)

```diff
-     }
- 
-     function lk(kk, ek, ik) {
-       if (!kk.ignoreEvent(ik)) try {
-         jk(kk, ik)
-       } finally {
-         ! function(kk, ek, ik) {
-           if ("pointerId" in ik)
-             if (ek) {
-               if (null !== kk._touches.currID) return;
-               kk._touches.currID = ik.pointerId
-             } else {
-               if (kk._touches.currID !== ik.pointerId) return;
-               kk._touches.currID = null
-             } var Dk = "button" in ik ? ik.button + 1 : 1;
-           dk("Mouse" + Dk, ek, kk, ik)
- ... (1 more removed lines; see GitHub link above)
+       show(CC) {
+         var zC;
+         this.view = CC, null === (zC = this.opened) || void 0 === zC || zC.show(CC)
```

#### 11. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L128-L143` → after: `L149-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L149-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L149-L158) · [Before (L128-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L128-L143)

```diff
-     }
- 
-     function pk(kk, ek) {
-       var ik = ek.movementX || ek.mozMovementX || 0,
-         Dk = ek.movementY || ek.mozMovementY || 0;
-       if (ek.touches && 0 === (ik | Dk)) {
-         var fk = function(kk) {
-           Uk(kk);
-           for (let ek = 0; ek < kk.changedTouches.length; ++ek)
-             if (kk.changedTouches[ek].identifier == xk) {
-               const ik = kk.changedTouches[ek],
-                 Dk = [ik.clientX - Mk, ik.clientY - Kk];
-               return Mk = ik.clientX, Kk = ik.clientY, Dk
-             } return console.error(`Did not find touch id ${xk}`), [0, 0]
-         }(ek);
-         ik = fk[0], Dk = fk[1]
+       resize(CC, zC) {
+         var ZC;
+         this.size = {
+           width: CC,
+           height: zC
+         }, null === (ZC = this.opened) || void 0 === ZC || ZC.resize(CC, zC)
+       }
+       close() {
+         var CC;
+         this.closed = !0, null === (CC = this.opened) || void 0 === CC || CC.close(), this.opened = null
```

#### 12. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L167-L179` → after: `L161-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L161-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L161-L204) · [Before (L167-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L167-L179)

```diff
-     var Lk = {
-       AltLeft: "altKey",
-       AltRight: "altKey",
-       ControlLeft: "ctrlKey",
-       ControlRight: "ctrlKey",
-       ShiftLeft: "shiftKey",
-       ShiftRight: "shiftKey",
-       MetaLeft: "metaKey",
-       MetaRight: "metaKey"
-     };
- 
-     function Ck(kk, ek) {
-       return !!kk[Lk[ek]] || ("AltRight" === ek || "ControlLeft" === ek) && "function" === typeof kk.getModifierState && !0 === kk.getModifierState("AltGraph")
+     class qC {
+       constructor(CC) {
+         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(CC).then((CC => CC.ready)), fC(CC, (CC => {
+           this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height))
+         }))
+       }
+       get dev() {
+         return this.opened.dev
+       }
+       isReady() {
+         var CC, zC;
+         return null !== (CC = null === (zC = this.opened) || void 0 === zC ? void 0 : zC.isReady()) && void 0 !== CC && CC
+       }
+       setCosmetic(CC, zC) {
+         var ZC;
+         null === (ZC = this.opened) || void 0 === ZC || ZC.setCosmetic(CC, zC)
+ ... (28 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L181-L188` → after: `L206-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L206-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L206-L219) · [Before (L181-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L181-L188)

```diff
- 
-     function Ak(kk, ek) {
-       for (var ik in kk._modifiersHeldThroughBlur = {}, Lk) kk._keyStates[ik] && (kk._modifiersHeldThroughBlur[ik] = !0);
-       ek && ek.isTrusted && function() {
-         try {
-           return window.self !== window.top
-         } catch (kk) {
-           return !0
+     const FC = new class {
+       constructor() {
+         this.host = null, this.makeDefault = null
+       }
+       setHost(CC) {
+         this.host = CC
+       }
+       setDefaultHost(CC) {
+         this.makeDefault = CC
+       }
+       current() {
+         if (null === this.host) {
+           if (null === this.makeDefault) throw new Error("no preview host");
+           this.host = this.makeDefault()
```

#### 14. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L190-L213` → after: `L221-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L221-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L221-L233) · [Before (L190-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L190-L213)

```diff
-       }() && (clearTimeout(kk._blurRelease), kk._blurRelease = setTimeout((function() {
-         if (!document.hasFocus())
-           for (var ek in kk._modifiersHeldThroughBlur = {}, kk._keyStates) kk._keyStates[ek] && !/^Mouse\d/.test(ek) && sk(kk, ek)
-       }), 0))
-     }
- 
-     function jk(kk, ek) {
-       var ik = kk._modifiersHeldThroughBlur;
-       if (ik && ek.isTrusted && document.hasFocus())
-         for (var Dk in ik) delete ik[Dk], kk._keyStates[Dk] && Dk !== ek.code && (Ck(ek, Dk) || sk(kk, Dk))
-     }
- 
-     function sk(kk, ek) {
-       const ik = {
-           code: ek,
-           preventDefault: () => {},
- ... (8 more removed lines; see GitHub link above)
+         return this.host
+       }
+       openMob(CC) {
+         return new oC(this.current().openMob(CC))
+       }
+       openPet(CC) {
+         return new oC(this.current().openPet(CC))
+       }
+       openMobLineup(CC) {
+         return new oC(this.current().openMobLineup(CC))
+       }
+       openCharacter(CC, zC) {
+         return new qC(this.current().openCharacter(CC, zC))
```

#### 15. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L240` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L237) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L240)

```diff
-   36233: (kk, ek, ik) => {
+   34185: (CC, zC, ZC) => {
```

#### 16. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L242-L243` → after: `L239-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L239-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L239-L241) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L242-L243)

```diff
-       c: () => Hk,
-       e: () => wk
+       c: () => QC.d,
+       g: () => QC.g,
+       k: () => QC.i
```

#### 17. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L245-L261` → after: `L243-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L243-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L243-L251) · [Before (L245-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L245-L261)

```diff
-     var Dk = ik(60),
-       fk = ik(1406),
-       Sk = ik(1922),
-       bk = ik(36167),
-       rk = ik(594),
-       Pk = ik(1021),
-       mk = ik.n(Pk),
-       Mk = ik(1066);
-     const Kk = [xk()];
- 
-     function xk() {
-       return {
-         source: null,
-         direction: null,
-         Qv: null,
-         timeout: void 0,
- ... (1 more removed lines; see GitHub link above)
+     var QC = ZC(34194);
+     class wC {
+       constructor(CC) {
+         this.load = CC, this.loaded = null, this.loading = null
+       }
+       run(CC) {
+         return null !== this.loaded ? CC(this.loaded) : (this.loading ??= this.load().then((CC => (this.loaded = CC, CC)), (CC => {
+           throw this.loading = null, CC
+         })), this.loading.then(CC))
```

#### 18. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L264-L326` → after: `L254-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L254-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L254-L268) · [Before (L264-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L264-L326)

```diff
- 
-     function nk(kk) {
-       return Kk.find((ek => null !== ek.source && ek.source === kk))
-     }
- 
-     function Uk(kk) {
-       clearTimeout(kk.timeout), kk.source = null, kk.direction = null, kk.writtenAngle = null, kk.Qv && (kk.Qv.style.rotate = "")
-     }
-     const Hk = (0, Dk.memo)((function() {
-       const [, kk] = (0, Dk.useReducer)((kk => kk + 1), 0);
-       return (0, fk.c)("damagedByOtherPlayer", (ek => {
-         let {
-           MS: ik,
-           direction: Dk
-         } = ek;
-         const fk = ik || "nonDirectional",
- ... (47 more removed lines; see GitHub link above)
+     class bC {
+       constructor() {
+         this.mobScene = new wC((() => Promise.all([ZC.e(72), ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(96), ZC.e(255), ZC.e(75), ZC.e(74), ZC.e(252), ZC.e(73), ZC.e(262), ZC.e(256), ZC.e(261), ZC.e(259), ZC.e(251), ZC.e(274), ZC.e(228), ZC.e(244), ZC.e(257), ZC.e(260), ZC.e(77), ZC.e … [truncated]
+       }
+       openMob(CC) {
+         return this.mobScene.run((zC => zC.openMobPreview(CC)))
+       }
+       openPet(CC) {
+         return this.mobScene.run((zC => zC.openPetPreview(CC)))
+       }
+       openMobLineup(CC) {
+         return this.mobScene.run((zC => zC.openMobLineupPreview(CC)))
+       }
+       openCharacter(CC, zC) {
+         return this.characterScene.run((ZC => ZC.openCharacterPreview(CC, zC)))
```

#### 19. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L330-L333` → after: `L273-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L273-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L273-L275) · [Before (L330-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L330-L333)

```diff
-   36018: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => fk,
-       g: () => Sk
+   41576: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       FrontlineMvpLineup: () => WC
```

#### 20. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L335-L339` → after: `L277-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L277-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L277-L283) · [Before (L335-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L335-L339)

```diff
-     let Dk = !1;
- 
-     function fk() {
-       return Dk
-     }
+     var QC = ZC(48),
+       wC = ZC(1002),
+       bC = ZC.n(wC),
+       nC = ZC(34185),
+       fC = ZC(41336),
+       oC = ZC(41330),
+       qC = ZC(1056);
```

#### 21. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L342-L343` → after: `L286-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L286-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L286-L332) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L342-L343)

```diff
-       return Dk !== kk && (Dk = kk, !0)
-     }
+       return nC.k.openMobLineup(CC)
+     }
+     const WC = (0, QC.memo)((function(CC) {
+       let {
+         players: zC,
+         className: ZC
+       } = CC;
+       const wC = (0, QC.useRef)(null),
+         nC = (0, QC.useMemo)((() => zC.map((CC => {
+           let {
+             cosmetics: zC,
+             size: ZC,
+             heldGun: QC
+           } = CC;
+           return {
+             cosmetics: zC,
+ ... (31 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L345` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L334) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L345)

```diff
-   33723: (kk, ek, ik) => {
+   37023: (CC, zC, ZC) => {
```

#### 23. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L347-L348` → after: `L336-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L336-L337) · [Before (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L347-L348)

```diff
-       e: () => Sk,
-       h: () => fk
+       d: () => fC,
+       f: () => nC
```

#### 24. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L350` → after: `L339-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L339-L341) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L350)

```diff
-     var Dk = ik(22);
+     var QC = ZC(37014),
+       wC = ZC(326),
+       bC = ZC(1806);
```

#### 25. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L352-L353` → after: `L343-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L343-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L343-L345) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L352-L353)

```diff
-     function fk(kk, ek) {
-       return kk && !ek
+     function nC(CC) {
+       if ("Cb" in CC) return JC.createAnimationScript(CC);
+       return new qC(CC).createAnimationScript()
```

#### 26. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L356-L357` → after: `L348-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L348-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L348-L350) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L356-L357)

```diff
-     function Sk() {
-       return fk(Dk.b.get("isTouchScreen"), Dk.b.get("clientEscMenuOptions").touchActionButtons)
+     function fC(CC, zC, ZC, wC) {
+       const bC = CC.Cb <= 0 ? 1 : zC + ZC * Math.max(0, wC) / CC.Cb;
+       return CC.zb === QC.g.LoopOnLastFrame ? bC % 1 : CC.zb === QC.g.NoLoop && bC >= 1 ? null : Math.min(1, bC)
```

#### 27. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L359-L412` → after: `L352-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L352-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L352-L400) · [Before (L359-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L359-L412)

```diff
-   },
-   40252: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       startPadGameplay: () => Lk
-     });
-     ik(40123);
-     var Dk = ik(40130),
-       fk = ik(3693),
-       Sk = ik(22),
-       bk = ik(38655),
-       rk = ik(3642),
-       Pk = ik(38666),
-       mk = ik(26),
-       Mk = ik(2704),
-       Kk = ik(38021),
-       xk = ik(8683),
- ... (38 more removed lines; see GitHub link above)
+     class oC {
+       createAnimationScript(CC) {
+         const {
+           Cb: zC,
+           loop: ZC,
+           Zb: QC
+         } = CC;
+         return {
+           Cb: Math.round(zC),
+           zb: this.createLoopMode(null !== ZC && void 0 !== ZC && ZC),
+           Zb: this.createNodeSkeletonAnimationScript(null !== QC && void 0 !== QC ? QC : null)
+         }
+       }
+       createLoopMode(CC) {
+         switch (CC) {
+           case !1:
+ ... (33 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L414` → after: `L402-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L402-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L402-L424) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L414)

```diff
-         })();
+         }
+         const wC = [];
+         for (let oC = 0; oC < QC.length; oC++) {
+           var bC, nC, fC;
+           const CC = QC[oC],
+             zC = null !== (bC = QC[oC - 1]) && void 0 !== bC ? bC : CC,
+             qC = null !== (nC = QC[oC + 1]) && void 0 !== nC ? nC : CC,
+             FC = null !== (fC = QC[oC + 2]) && void 0 !== fC ? fC : qC;
+           wC.push({
+             ...CC,
+             ...ZC(zC.post, zC.timeFraction, CC.post, CC.timeFraction, qC.pre, qC.timeFraction, FC.pre, FC.timeFraction)
+           })
+         }
+         return wC
+       }
+       createAnimationFrameWithoutPrecomputes(CC, zC) {
+ ... (7 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L416-L422` → after: `L426-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L426-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L426-L490) · [Before (L416-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L416-L422)

```diff
-           update: (ek, ik, Dk) => {
-             kk.update((0, Mk.e)(), ek, ik, Dk)
-           },
-           release: kk.release,
-           uninstall: () => {
-             const ek = (0, Mk.e)();
-             ek && kk.uninstall(ek)
+           timeFraction: CC,
+           nb: this.createLerpMode(wC),
+           pre: ZC,
+           post: QC
+         }
+       }
+       createLerpMode(CC) {
+         return null === CC ? QC.f.Linear : oC.LERP_MODE_SCHEMA_MAPPING[CC]
+       }
+     }
+     oC.LERP_MODE_SCHEMA_MAPPING = {
+       linear: QC.f.Linear,
+       "catmull-rom-spline": QC.f.CatmullRomSpline
+     };
+     class qC {
+       constructor(CC) {
+ ... (49 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L425-L524` → after: `L493-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L493-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L493-L509) · [Before (L425-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L425-L524)

```diff
-       };
-     var Yk = ik(40145);
-     ik(37289), ik(8570);
-     ik(8588).d;
-     const Lk = () => {
-       const kk = (0, Yk.d)((() => {
-           const kk = {
-             x: 0,
-             y: 0,
-             magnitude: 0,
-             headingOffset: 0,
-             jumpHeld: !1,
-             jumpPressedSinceTick: !1,
-             crouchHeld: !1,
-             running: !1,
-             sprintHeld: !1
- ... (84 more removed lines; see GitHub link above)
+         const wC = Object.entries(CC).map((CC => {
+           let [ZC, QC] = CC;
+           const wC = Number(ZC) / this.animationSchema.animation_length;
+           return this.createAnimationFrameWithoutPrecomputes(wC, QC, zC)
+         })).filter(FC);
+         wC.sort(((CC, zC) => CC.timeFraction - zC.timeFraction)), QC && function(CC) {
+           for (let zC = 1; zC < CC.length; zC++) {
+             const ZC = CC[zC - 1].post,
+               QC = CC[zC],
+               wC = RC(QC.pre),
+               bC = RC(QC.post),
+               nC = xC(ZC, QC.pre);
+             xC(ZC, wC) < nC && (CC[zC] = {
+               ...QC,
+               pre: wC,
+               post: bC
+ ... (1 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L526-L531` → after: `L511-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L511-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L511-L524) · [Before (L526-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L526-L531)

```diff
-         })()),
-         ek = (0, Dk.b)(),
-         ik = null,
-         Sk = null;
-       return () => {
-         kk(), ek(), null === ik || void 0 === ik || ik(), null === Sk || void 0 === Sk || Sk()
+         }(wC);
+         const bC = [];
+         for (let qC = 0; qC < wC.length; qC++) {
+           var nC, fC, oC;
+           const CC = wC[qC],
+             zC = null !== (nC = wC[qC - 1]) && void 0 !== nC ? nC : CC,
+             QC = null !== (fC = wC[qC + 1]) && void 0 !== fC ? fC : CC,
+             FC = null !== (oC = wC[qC + 2]) && void 0 !== oC ? oC : QC;
+           bC.push({
+             ...CC,
+             ...ZC(zC.post, zC.timeFraction, CC.post, CC.timeFraction, QC.pre, QC.timeFraction, FC.pre, FC.timeFraction)
+           })
+         }
+         return bC
```

#### 32. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L533-L571` → after: `L526-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L526-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L526-L543) · [Before (L533-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L533-L571)

```diff
-     }
-   },
-   36151: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Sk,
-       g: () => Hk,
-       i: () => wk,
-       m: () => rk,
-       p: () => xk,
-       t: () => lk,
-       u: () => Kk,
-       v: () => yk,
-       w: () => Uk,
-       x: () => pk
-     });
-     var Dk = ik(22),
- ... (23 more removed lines; see GitHub link above)
+       createAnimationFrameWithoutPrecomputes(CC, zC, ZC) {
+         let QC, wC, bC = null;
+         if ("object" === typeof zC && "post" in zC) {
+           var nC;
+           bC = null !== (nC = zC.lerp_mode) && void 0 !== nC ? nC : null, wC = SC(zC.post, ZC), QC = zC.pre ? SC(zC.pre, ZC) : wC
+         } else {
+           const CC = SC(zC, ZC);
+           wC = CC, QC = CC
+         }
+         return {
+           timeFraction: CC,
+           nb: this.createLerpMode(bC),
+           pre: QC,
+           post: wC
+         }
+       }
+ ... (2 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L585-L587` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L548) · [Before (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L585-L587)

```diff
-       const ek = nk(),
-         ik = ek.findIndex((kk => kk.id === Pk));
-       return !(ik < 0 || ek.length < 2) && (Kk(ek[(ik + kk + ek.length) % ek.length]), !0)
+       return Number.isFinite(CC.timeFraction) && WC(CC.pre) && WC(CC.post)
```

#### 34. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L590-L604` → after: `L551-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L551-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L551-L552) · [Before (L590-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L590-L604)

```diff
-     function Hk() {
-       return null !== Pk && nk().length > 1
-     }
- 
-     function wk() {
-       mk(null)
-     }
- 
-     function lk() {
-       "inventory" !== Dk.b.get("openInGameMenuName") && mk(null)
-     }
- 
-     function pk() {
-       const kk = Pk;
-       return mk(null), kk
+     function WC(CC) {
+       return Number.isFinite(CC[0]) && Number.isFinite(CC[1]) && Number.isFinite(CC[2])
```

#### 35. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L607-L609` → after: `L555-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L555-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L555-L563) · [Before (L607-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L607-L609)

```diff
-     function yk(kk) {
-       return bk.set(kk.id, kk), fk.j.tm(Sk, rk(), !0), () => {
-         bk.get(kk.id) === kk && (bk.delete(kk.id), fk.j.tm(Sk, rk()))
+     function NC(CC, zC, ZC, QC, wC, bC, nC, fC) {
+       const oC = bC - zC,
+         qC = bC - QC,
+         FC = fC - QC,
+         WC = [null, null, null];
+       for (let NC = 0; NC < WC.length; NC++) WC[NC] = MC(CC[NC], ZC[NC], wC[NC], nC[NC], oC, FC);
+       return {
+         fb: qC,
+         ob: WC
```

#### 36. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L631-L632` → after: `L567-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L567-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L567-L572) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L631-L632)

```diff
-     function mk() {
-       return Pk
+     function MC(CC, zC, ZC, QC, bC, nC) {
+       return {
+         Fb: wC.c.computeShortestRotation(CC, ZC) / bC,
+         Wb: wC.c.computeShortestRotation(zC, QC) / nC,
+         delta: wC.c.computeShortestRotation(zC, ZC)
+       }
```

#### 37. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L635-L638` → after: `L575-L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L575-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L575-L583) · [Before (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L635-L638)

```diff
-     function Mk(kk, ek) {
-       const ik = {
-         content: kk,
-         menu: ek
+     function gC(CC, zC, ZC, QC, wC, bC, nC, fC) {
+       const oC = bC - zC,
+         qC = bC - QC,
+         FC = fC - QC,
+         WC = [null, null, null];
+       for (let NC = 0; NC < WC.length; NC++) WC[NC] = {
+         Fb: (wC[NC] - CC[NC]) / oC,
+         Wb: (nC[NC] - ZC[NC]) / FC,
+         delta: wC[NC] - ZC[NC]
```

#### 38. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L640-L641` → after: `L585-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L585-L587) · [Before (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L640-L641)

```diff
-       return Pk = ik, fk.j.tm(rk, Pk, !0), () => {
-         Pk === ik && (Pk = null, Uk = !1, wk(), fk.j.tm(rk, null))
+       return {
+         fb: qC,
+         ob: WC
```

#### 39. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L646-L647` → after: `L591-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L591-L592) · [Before (L646-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L646-L647)

```diff
-     function xk() {
-       return Kk
+     function SC(CC, zC) {
+       return null === zC ? CC : zC(CC)
```

#### 40. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L651-L666` → after: `L596-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L596-L597) · [Before (L651-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L651-L666)

```diff
-       return Kk = kk, () => {
-         Kk === kk && (Kk = null)
-       }
-     }
-     let Uk = !1;
- 
-     function Hk() {
-       const kk = Dk.b.get("openInGameMenuName");
-       "clientGame" !== kk && (Uk = "inventory" === kk), (0, bk.p)() || (0, bk.i)(), (0, Sk.s)(Sk.c), Dk.b.set({
-         openInGameMenuName: "clientGame",
-         openEverythingMenuName: null
-       })
-     }
- 
-     function wk() {
-       pk(!1)
+       const [zC, ZC, QC] = CC, nC = -(0, bC.j)(zC), fC = -(0, bC.j)(ZC), oC = (0, bC.j)(QC), qC = wC.c.quaternionFromEulerZYX(nC, fC, oC);
+       return wC.c.eulerYXZFromQuaternion(qC)
```

#### 41. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L669-L670` → after: `L605-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L605-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L605-L606) · [Before (L669-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L669-L670)

```diff
-     function lk() {
-       pk(Uk)
+     function GC(CC) {
+       return [-CC[0] * PC, CC[1] * PC, CC[2] * PC]
```

#### 42. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L674-L676` → after: `L610-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L610-L611) · [Before (L674-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L674-L676)

```diff
-       "clientGame" === Dk.b.get("openInGameMenuName") && Dk.b.set({
-         openInGameMenuName: kk ? "inventory" : null
-       }), kk || (0, bk.i)(), Uk = !1
+       const [zC, ZC, QC] = CC;
+       return [zC >= 0 ? Math.PI - zC : -Math.PI - zC, AC(ZC + Math.PI), AC(QC + Math.PI)]
```

#### 43. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L709` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L615) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L709)

```diff
-       return 2 ** Math.floor(Math.log2(Math.max(1, kk / fk)))
+       return wC.c.mod(CC + Math.PI, 2 * Math.PI) - Math.PI
```

#### 44. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L712-L713` → after: `L618-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L618-L619) · [Before (L712-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L712-L713)

```diff
-     function bk(kk) {
-       return (kk / fk).toFixed(1)
+     function xC(CC, zC) {
+       return Math.abs(wC.c.computeShortestRotation(CC[0], zC[0])) + Math.abs(wC.c.computeShortestRotation(CC[1], zC[1])) + Math.abs(wC.c.computeShortestRotation(CC[2], zC[2]))
```

#### 45. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L716` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L623) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L716)

```diff
-   36463: (kk, ek, ik) => {
+   37014: (CC, zC, ZC) => {
```

#### 46. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L718-L726` → after: `L625-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L625-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L625-L628) · [Before (L718-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L718-L726)

```diff
-       A: () => Mk,
-       E: () => bk,
-       e: () => fk,
-       h: () => Sk,
-       l: () => xk,
-       p: () => rk,
-       t: () => Pk,
-       x: () => mk,
-       z: () => Kk
+       b: () => nC,
+       d: () => bC,
+       f: () => QC,
+       g: () => wC
```

#### 47. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L730` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L631) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L730)

```diff
-         return kk[kk.Join = 0] = "Join", kk[kk.Leave = 1] = "Leave", kk[kk.Push = 2] = "Push", kk[kk.Cursor = 3] = "Cursor", kk[kk.Submit = 4] = "Submit", kk[kk.ReloadAsVariation = 5] = "ReloadAsVariation", kk[kk.CreateFile = 6] = "CreateFile", kk[kk.RenameFile = 7] = "RenameFile … [truncated]
+         return CC[CC.Linear = 0] = "Linear", CC[CC.CatmullRomSpline = 1] = "CatmullRomSpline", CC
```

#### 48. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L733-L806` → after: `L634-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L634-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/199.js#L634-L641) · [Before (L733-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/199.js#L733-L806)

```diff
-         return kk[kk.Joined = 0] = "Joined", kk[kk.Updates = 1] = "Updates", kk[kk.Presence = 2] = "Presence", kk[kk.RemoteCursor = 3] = "RemoteCursor", kk[kk.ForceClose = 4] = "ForceClose", kk[kk.LobbyFilesChanged = 5] = "LobbyFilesChanged", kk[kk.EngineSettings = 6] = "EngineSe … [truncated]
-       }({});
- 
-     function bk(kk) {
-       return "lobby" === kk.kind ? `lobby:${kk.path}` : `codeBlock:${kk.pos[0]},${kk.pos[1]},${kk.pos[2]}`
-     }
- 
-     function rk(kk) {
-       if ("lobby" === kk) return {
-         kind: "lobby",
-         path: Dk.i
-       };
-       if (kk.startsWith("lobby:")) {
-         const ek = kk.slice(6);
-         return Kk(ek) ? {
-           kind: "lobby",
- ... (58 more removed lines; see GitHub link above)
+         return CC[CC.NoLoop = 0] = "NoLoop", CC[CC.LoopOnLastFrame = 1] = "LoopOnLastFrame", CC[CC.HoldOnLastFrame = 2] = "HoldOnLastFrame", CC
+       }({}),
+       bC = function(CC) {
+         return CC[CC.Movement = 0] = "Movement", CC[CC.Action = 1] = "Action", CC[CC.Emote = 2] = "Emote", CC[CC.Custom = 3] = "Custom", CC
+       }({}),
+       nC = function(CC) {
+         return CC[CC.Start = 0] = "Start", CC[CC.Stop = 1] = "Stop", CC
+       }({})
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/200.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/200.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f)

#### 1. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/200.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/200.js#L4)

```diff
-   33784: (kk, ek, ik) => {
+   41321: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L6-L51` → after: `L6-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L6-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/200.js#L6-L14) · [Before (L6-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/200.js#L6-L51)

```diff
-       MAX_BLOCK_ID: () => Dk,
-       armourReductionOf: () => Xk,
-       clipSizeOf: () => tk,
-       creativeAltNames: () => re,
-       creativeCategoryOf: () => Jk,
-       creativeItemCategories: () => rk,
-       creativeItemCategoryIcons: () => Pk,
-       creativeItemIds: () => Rk,
-       descriptionOf: () => hk,
-       displayNameOf: () => Ek,
-       dropsNothing: () => Tk,
-       enchantmentPerksOf: () => Gk,
-       gunTypeOf: () => ck,
-       harvestsNullLevelOf: () => Zk,
-       isDevOnlyItem: () => De,
-       itemIsDisabled: () => Se,
- ... (30 more removed lines; see GitHub link above)
+       MobPreview: () => WC
+     });
+     var QC = ZC(48),
+       wC = ZC(1002),
+       bC = ZC.n(wC),
+       nC = ZC(41330),
+       fC = ZC(34185),
+       oC = ZC(41336),
+       qC = ZC(1056);
```

#### 3. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L54-L59` → after: `L17-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L17-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/200.js#L17-L43) · [Before (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/200.js#L54-L59)

```diff
-       let ek = null;
-       return ik => {
-         var Dk;
-         return ek ??= (0, Mk.y)(kk, 10091), null !== (Dk = ek[ik]) && void 0 !== Dk ? Dk : 0
-       }
-     }
+       return fC.k.openMob(CC)
+     }
+     const WC = (0, QC.memo)((function(CC) {
+       let {
+         mobType: zC,
+         variation: ZC = null,
+         animation: wC = oC.e,
+         className: fC
+       } = CC;
+       const WC = (0, QC.useRef)(null),
+         NC = (0, QC.useMemo)((() => ({
+           mobType: zC,
+           variation: ZC,
+           animation: wC
+         })), [zC, ZC, wC]);
+       return (0, nC.c)(WC, FC, NC), (0, qC.jsx)("div", {
+ ... (11 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L62-L82` → after: `L46-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L46-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/200.js#L46-L81) · [Before (L62-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/200.js#L62-L82)

```diff
-       const Dk = xk(kk);
-       let fk = null,
-         Sk = [];
-       return kk => {
-         const bk = Dk(kk);
-         if (0 !== bk) return null === fk && (fk = ek.split(Mk.r), Sk = new Array(fk.length)), Sk[bk - 1] ??= ik(fk[bk - 1])
-       }
-     }
- 
-     function Uk(kk) {
-       return kk
-     }
- 
-     function Hk(kk) {
-       return kk === Mk.e ? null : (0, Mk.A)(kk)
-     }
- ... (5 more removed lines; see GitHub link above)
+       const bC = (0, QC.useRef)(null),
+         {
+           width: nC,
+           height: fC
+         } = (0, wC.e)(CC);
+       (0, QC.useEffect)((() => {
+         const ZC = zC(CC.current);
+         return bC.current = ZC, () => {
+           ZC.close(), bC.current = null
+         }
+       }), [CC, zC]), (0, QC.useEffect)((() => {
+         nC <= 0 || fC <= 0 || bC.current.resize(nC, fC)
+       }), [nC, fC]), (0, QC.useEffect)((() => {
+         bC.current.show(ZC)
+       }), [ZC])
+     }
+ ... (20 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L85-L160` → after: `L84-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L84-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/200.js#L84-L128) · [Before (L85-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/200.js#L85-L160)

```diff
-       Yk !== (0, mk.l)() && (Yk = (0, mk.l)(), pk.clear(), yk.clear());
-       let Dk = kk.get(ek);
-       return void 0 === Dk && (Dk = ik(), void 0 !== Dk && kk.set(ek, Dk)), Dk
-     }
-     const Ck = nk("_$QN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$b%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
-       Ak = nk("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-& … [truncated]
-       jk = nk(".W]+#%#%#%#%#%#%#%#%%%#%#%#%%%#%#%#", "30|20|16|1|2|5|7|12|8|100|21|24|22|75", Number),
-       sk = nk("&PO+#####%####################$#%#,#%#####,%&#)#,#.#%#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1$bC$'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$1'#*# … [truncated]
-       dk = nk(">W]+#%#)$)%9$", "none|sniper", Uk),
-       Vk = nk("*W]+#%#%#%#%$%#)&%(%%%$%%)$)'%&", "semi_automatic|submachine|rifle|pistol|shotgun", Uk),
-       Fk = xk("]%LV+#c&M.$4_1$44$44$44$49$4/$4/$4/$"),
-       uk = xk("$a&#$9$Z$K?$&;$$[($(c($6Y&$$)$$$$&G%$*$$$*$(V*$Z$V$$$#$$#$&+$$#$$%$$$$$$$$$$&$$$#$$($,E0$$T&$&V$$D$`-$(%$6*$$%$T$M$$$L%$6;$$$$$2$$W:$*D^%$$N%$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$2O'$2*$2*$2*$2*$2*$2*$2*$2*$2*$:*$0=$&^$$$N$$(Q$$$]$$.#$&6$$K%$:.$*I$$*&$*S+$6,$"),
-       qk = nk("$DO+#######%#$ZD$$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%($U$(.1($'(.1($'(.1($'(.1($2(.+($((.+($((.+($((.+($C&($@$", "1|2|3|4|5", (kk => "" === kk ? null : Number(kk))),
-       Ik = nk("$F(#$%$$&#$)%$)%$0$$,$$%$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$@$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$I$%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$.#$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$' … [truncated]
-       zk = nk(",QN+####$/#+#+###+#4####1+##S(+$$#2A#$H%#$%0$%0$%0$%0$%0$%0$%0$%0$%0$U.0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0:C/(:.($R$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$(?+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$#(#0$%0 … [truncated]
-       Qk = nk(",$#0#$-#-$&#%2#%(#$$$$'%B$##%b$&)$$#$#%A&$&#)%,$%#$#%$&%###%:#$$$$##$%)$%%#)$1).)$$#)$))%$#)$%$$&)B%&#)#&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%$$'$&#$$%%$/)$))$))$))$))$))$))$))$))$))$))$))$))$))$))$))&)$#)$%%#$,#%2%%($$$*$$#%#$#)$1)$1)$1)$1)$1)$1)$))$))$) … [truncated]
- ... (60 more removed lines; see GitHub link above)
+       return {
+         Cb: 3200,
+         loop: !0,
+         Zb: {
+           Root: {
+             timeline: [0, .5, 1].map((CC => ({
+               timeFraction: CC,
+               position: {
+                 nb: "catmull-rom-spline",
+                 point: [0, .5 === CC ? .18 : 0, 0]
+               }
+             })))
+           },
+           HeadMesh: {
+             timeline: [0, .25, .75, 1].map((CC => ({
+               timeFraction: CC,
+ ... (29 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L164-L181` → after: `L132-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L132-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/200.js#L132-L150) · [Before (L164-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/200.js#L164-L181)

```diff
-       return null !== (ek = zk(kk)) && void 0 !== ek ? ek : Kk
-     }
-     let Nk = null;
- 
-     function Rk() {
-       if (null === Nk) {
-         const kk = [],
-           ek = new Mk.u(fk);
-         let ik = 0;
-         for (; !ek.done;) ik += (0, Mk.H)(ek.next()), kk.push(ik);
-         Nk = Object.freeze(kk)
-       }
-       return Nk
-     }
- 
-     function Jk(kk) {
- ... (2 more removed lines; see GitHub link above)
+       return {
+         ...nC.store,
+         yaw: nC.store.yaw + (null !== (zC = QC.b[CC].previewYaw) && void 0 !== zC ? zC : 0)
+       }
+     }
+     const bC = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       nC = {
+         player: bC,
+         store: {
+           ...bC,
+           radius: 33,
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L184-L226` → after: `L153-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L153-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/200.js#L153-L289) · [Before (L184-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/200.js#L184-L226)

```diff
-       var ik;
-       return 0 !== ((null !== (ik = vk(kk)) && void 0 !== ik ? ik : 0) & ek)
-     }
- 
-     function ee(kk) {
-       return ke(kk, Mk.c.OnlyInSearch)
-     }
- 
-     function ie(kk) {
-       return ke(kk, Mk.c.OnlyInCategory)
-     }
- 
-     function De(kk) {
-       return ke(kk, Mk.c.DevOnly)
-     }
- 
- ... (27 more removed lines; see GitHub link above)
+       CC instanceof Promise ? CC.then(zC).catch((CC => {
+         console.error("Couldn't open the preview", CC)
+       })) : zC(CC)
+     }
+     class oC {
+       constructor(CC) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, fC(CC, (CC => {
+           this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height), null !== this.view && CC.show(this.view))
+         }))
+       }
+       show(CC) {
+         var zC;
+         this.view = CC, null === (zC = this.opened) || void 0 === zC || zC.show(CC)
+       }
+       resize(CC, zC) {
+         var ZC;
+ ... (121 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/201.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/201.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9)

#### 1. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L4-L334` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/201.js#L4) · [Before (L4-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/201.js#L4-L334)

```diff
-   41088: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => Sk
-     });
-     var Dk = ik(60),
-       fk = ik(2683);
- 
-     function Sk(kk, ek, ik) {
-       const Sk = (0, Dk.useRef)(null),
-         {
-           width: bk,
-           height: rk
-         } = (0, fk.c)(kk);
-       (0, Dk.useEffect)((() => {
-         const ik = ek(kk.current);
-         return Sk.current = ik, () => {
- ... (315 more removed lines; see GitHub link above)
+   34214: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L339-L357` → after: `L9-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L9-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/201.js#L9-L98) · [Before (L339-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/201.js#L339-L357)

```diff
-     var Dk = ik(36747),
-       fk = ik(314),
-       Sk = ik(1850);
- 
-     function bk(kk) {
-       if ("Ii" in kk) return Ck.createAnimationScript(kk);
-       return new mk(kk).createAnimationScript()
-     }
- 
-     function rk(kk, ek, ik, fk) {
-       const Sk = kk.Ii <= 0 ? 1 : ek + ik * Math.max(0, fk) / kk.Ii;
-       return kk.zi === Dk.k.LoopOnLastFrame ? Sk % 1 : kk.zi === Dk.k.NoLoop && Sk >= 1 ? null : Math.min(1, Sk)
-     }
-     class Pk {
-       createAnimationScript(kk) {
-         const {
- ... (3 more removed lines; see GitHub link above)
+     var QC = ZC(3242);
+ 
+     function wC() {
+       if ("undefined" === typeof BroadcastChannel) return null;
+       const CC = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
+       try {
+         const zC = new BroadcastChannel(QC.m);
+         zC.postMessage({
+           stored: CC
+         }), zC.close()
+       } catch {
+         return null
+       }
+       return CC
+     }
+ 
+ ... (74 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L360-L438` → after: `L134-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L134-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/201.js#L134-L181) · [Before (L360-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/201.js#L360-L438)

```diff
-           Ii: Math.round(ek),
-           zi: this.createLoopMode(null !== ik && void 0 !== ik && ik),
-           Qi: this.createNodeSkeletonAnimationScript(null !== Dk && void 0 !== Dk ? Dk : null)
-         }
-       }
-       createLoopMode(kk) {
-         switch (kk) {
-           case !1:
-             return Dk.k.NoLoop;
-           case !0:
-             return Dk.k.LoopOnLastFrame;
-           case "hold-on-last-frame":
-             return Dk.k.HoldOnLastFrame
-         }
-         throw new Error(`Invalid loop mode schema: ${kk}`)
-       }
- ... (63 more removed lines; see GitHub link above)
+           fontFaces: (Array.isArray(ZC) ? ZC : []).map(zC),
+           classStyles: wC
+         }
+       }(CC.customCss)), ZC
+     }
+ 
+     function pC(CC) {
+       return "object" === typeof CC && null !== CC && !Array.isArray(CC)
+     }
+ 
+     function PC(CC, zC, ZC) {
+       const QC = Object.entries(pC(CC) ? CC : {}),
+         wC = QC.filter((CC => {
+           let [, ZC] = CC;
+           return !zC(ZC)
+         }));
+ ... (32 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L442-L444` → after: `L185-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L185-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/201.js#L185-L306) · [Before (L442-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/201.js#L442-L444)

```diff
-         this.animationSchema = kk
-       }
-       createAnimationScript() {
+         this.host = CC, this.ready = void 0, this.state = MC, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks =  … [truncated]
+       }
+       readyWithin(CC) {
+         return Promise.race([this.ready, new Promise((zC => {
+           setTimeout(zC, CC)
+         }))])
+       }
+       current() {
+         return this.state
+       }
+       playerState() {
+         return {
+           pack: this.playerPack,
+           gameSource: null
+         }
+       }
+ ... (106 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L446-L490` → after: `L308-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L308-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/201.js#L308-L393) · [Before (L446-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/201.js#L446-L490)

```diff
-           animation_length: kk,
-           loop: ek,
-           bones: ik
-         } = this.animationSchema;
-         return {
-           Ii: Math.round(1e3 * kk),
-           zi: this.createLoopMode(null !== ek && void 0 !== ek && ek),
-           Qi: this.createNodeSkeletonAnimationScript(null !== ik && void 0 !== ik ? ik : null)
-         }
-       }
-       createLoopMode(kk) {
-         switch (kk) {
-           case !1:
-             return Dk.k.NoLoop;
-           case !0:
-             return Dk.k.LoopOnLastFrame;
- ... (29 more removed lines; see GitHub link above)
+           store: CC,
+           warn: zC
+         } = this.host;
+         await Promise.all([!1 === this.host.oneShot ? void 0 : (0, oC.i)(CC, !0, (CC => {
+           zC("the custom game's texture pack wasn't removed from storage", CC)
+         })).then((CC => {
+           this.takeOneShot(CC)
+         }), (CC => {
+           zC("the custom game's texture pack didn't read: the player's own shows", CC)
+         })), CC.getItem(nC.b, !0).then((CC => {
+           this.takeStoredOwn(CC)
+         }), (CC => {
+           zC("the stored texture pack didn't read: the default pack shows", CC), this.takeStoredOwn(null)
+         }))]), this.update()
+       }
+       takeOneShot(CC) {
+ ... (70 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L493-L560` → after: `L396-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L396-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/201.js#L396-L407) · [Before (L493-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/201.js#L493-L560)

```diff
-         const fk = Object.entries(kk).map((kk => {
-           let [ik, Dk] = kk;
-           const fk = Number(ik) / this.animationSchema.animation_length;
-           return this.createAnimationFrameWithoutPrecomputes(fk, Dk, ek)
-         })).filter(Mk);
-         fk.sort(((kk, ek) => kk.timeFraction - ek.timeFraction)), Dk && function(kk) {
-           for (let ek = 1; ek < kk.length; ek++) {
-             const ik = kk[ek - 1].post,
-               Dk = kk[ek],
-               fk = yk(Dk.pre),
-               Sk = yk(Dk.post),
-               bk = Lk(ik, Dk.pre);
-             Lk(ik, fk) < bk && (kk[ek] = {
-               ...Dk,
-               pre: fk,
-               post: Sk
- ... (52 more removed lines; see GitHub link above)
+       }
+     }
+     async function SC(CC, zC, ZC) {
+       const QC = (0, oC.e)(await ZC.fetchPack(zC));
+       if (null !== QC) return {
+         pack: QC,
+         key: zC
+       };
+       const wC = await ZC.packKey(CC);
+       if (null === wC) return null;
+       const bC = (0, oC.e)(await ZC.fetchPack(wC));
+       if (null === bC) throw new Error(`no texture pack at ${wC}`);
```

#### 7. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L562-L641` → after: `L409-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L409-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/201.js#L409-L438) · [Before (L562-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/201.js#L562-L641)

```diff
-         Xi: mk,
-         Bi: Kk
-       }
-     }
- 
-     function nk(kk, ek, ik, Dk, Sk, bk) {
-       return {
-         oi: fk.c.computeShortestRotation(kk, ik) / Sk,
-         Zi: fk.c.computeShortestRotation(ek, Dk) / bk,
-         delta: fk.c.computeShortestRotation(ek, ik)
-       }
-     }
- 
-     function Uk(kk, ek, ik, Dk, fk, Sk, bk, rk) {
-       const Pk = Sk - ek,
-         mk = Sk - Dk,
- ... (64 more removed lines; see GitHub link above)
+         pack: bC,
+         key: wC
+       }
+     }
+ 
+     function pC(CC) {
+       return null === CC || CC.metaData.id === wC.c
+     }
+ 
+     function PC(CC) {
+       const zC = (0, oC.e)(CC);
+       return pC(zC) ? null : zC
+     }
+     async function GC(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bC.d;
+       if (null === CC.pack) return null;
+ ... (14 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/202.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/202.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9)

#### 1. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/202.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/202.js#L4)

```diff
-   41082: (kk, ek, ik) => {
+   34221: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/202.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/202.js#L6)

```diff
-       MobPreview: () => Kk
+       packDisplayName: () => gC,
+       packModelMessage: () => SC,
+       packModelSummary: () => PC,
+       refusedPackModels: () => pC
```

#### 3. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L8-L14` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/202.js#L11-L18) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/202.js#L8-L14)

```diff
-     var Dk = ik(60),
-       fk = ik(1021),
-       Sk = ik.n(fk),
-       bk = ik(41088),
-       rk = ik(33799),
-       Pk = ik(41093),
-       mk = ik(1066);
+     var QC = ZC(34223),
+       wC = ZC(34228);
+     const bC = "DRACO",
+       nC = 0,
+       fC = 1,
+       oC = 0,
+       qC = 1,
+       FC = 32768;
```

#### 4. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L17-L54` → after: `L21-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L21-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/202.js#L21-L80) · [Before (L17-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/202.js#L17-L54)

```diff
-       return rk.h.openMob(kk)
-     }
-     const Kk = (0, Dk.memo)((function(kk) {
-       let {
-         mobType: ek,
-         variation: ik = null,
-         animation: fk = Pk.g,
-         className: rk
-       } = kk;
-       const Kk = (0, Dk.useRef)(null),
-         xk = (0, Dk.useMemo)((() => ({
-           mobType: ek,
-           variation: ik,
-           animation: fk
-         })), [ek, ik, fk]);
-       return (0, bk.b)(Kk, Mk, xk), (0, mk.jsx)("div", {
- ... (22 more removed lines; see GitHub link above)
+       const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
+       let ZC = 0;
+       const QC = () => {
+           if (ZC >= CC.byteLength) throw new RangeError("past the stream");
+           return CC[ZC++]
+         },
+         wC = () => {
+           if (ZC + 4 > CC.byteLength) throw new RangeError("past the stream");
+           const QC = zC.getUint32(ZC, !0);
+           return ZC += 4, QC
+         },
+         WC = () => {
+           let CC = 0;
+           for (let zC = 0; zC < 35; zC += 7) {
+             const ZC = QC();
+             if (CC += (127 & ZC) * 2 ** zC, 0 === (128 & ZC)) return CC
+ ... (44 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L56-L78` → after: `L82-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L82-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/202.js#L82-L87) · [Before (L56-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/202.js#L56-L78)

```diff
-       }), [kk, ek]), (0, Dk.useEffect)((() => {
-         bk <= 0 || rk <= 0 || Sk.current.resize(bk, rk)
-       }), [bk, rk]), (0, Dk.useEffect)((() => {
-         Sk.current.show(ik)
-       }), [ik])
-     }
-   },
-   41093: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => xk,
-       c: () => Kk,
-       g: () => Pk
-     });
-     var Dk = ik(36754),
-       fk = ik(38226);
- 
- ... (7 more removed lines; see GitHub link above)
+         if (gC !== qC) return null;
+         QC(), NC < 2 && WC();
+         const PC = WC();
+         return {
+           faces: WC(),
+           vertices: PC
```

#### 6. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L80` → after: `L89-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/202.js#L89-L91) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/202.js#L80)

```diff
-       })))
+       } catch {
+         return null
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L84-L111` → after: `L95-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L95-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/202.js#L95-L111) · [Before (L84-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/202.js#L84-L111)

```diff
-       return {
-         Ii: 3200,
-         loop: !0,
-         Qi: {
-           Root: {
-             timeline: [0, .5, 1].map((kk => ({
-               timeFraction: kk,
-               position: {
-                 Wi: "catmull-rom-spline",
-                 point: [0, .5 === kk ? .18 : 0, 0]
-               }
-             })))
-           },
-           HeadMesh: {
-             timeline: [0, .25, .75, 1].map((kk => ({
-               timeFraction: kk,
- ... (12 more removed lines; see GitHub link above)
+       var QC, wC;
+       if (null === (QC = null === (wC = CC.extensionsUsed) || void 0 === wC ? void 0 : wC.includes("KHR_draco_mesh_compression")) || void 0 === QC || !QC) return null;
+       for (const gC of null !== (bC = CC.meshes) && void 0 !== bC ? bC : []) {
+         var bC;
+         for (const QC of gC.primitives) {
+           var nC, fC, oC, qC, FC, NC;
+           const wC = null === (nC = QC.extensions) || void 0 === nC ? void 0 : nC.KHR_draco_mesh_compression;
+           if ("object" !== typeof wC || null === wC) continue;
+           const bC = null === (fC = CC.bufferViews) || void 0 === fC ? void 0 : fC[wC.bufferView];
+           if (null === zC || void 0 === bC) return MC;
+           const gC = null !== (oC = bC.byteOffset) && void 0 !== oC ? oC : 0,
+             SC = WC(zC.subarray(gC, gC + bC.byteLength));
+           if (null === SC && !ZC) continue;
+           const pC = null !== (qC = CC.accessors) && void 0 !== qC ? qC : [],
+             PC = null === (FC = pC[QC.attributes.POSITION]) || void 0 === FC ? void 0 : FC.count,
+             GC = void 0 === QC.indices ? 0 : null === (NC = pC[QC.indices]) || void 0 === NC ? void 0 : NC.count;
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L115-L128` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/202.js#L116) · [Before (L115-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/202.js#L115-L128)

```diff
-     const rk = bk([0, 0, 0], [0, 0, 0], .07),
-       Pk = (0, fk.e)((0, Dk.g)(rk), "mobIdle"),
-       mk = bk([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
-       Mk = bk([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
-       Kk = (0, fk.e)((0, Dk.g)(mk), "gunReady"),
-       xk = (0, fk.e)((0, Dk.g)(Mk), "gunAimed")
-   },
-   33801: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => bk,
-       e: () => fk,
-       f: () => Mk
-     });
-     var Dk = ik(1537);
+     const MC = "has a Draco stream whose counts don't match its accessors";
```

#### 9. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L132-L134` → after: `L120-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L120-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/202.js#L120-L146) · [Before (L132-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/202.js#L132-L134)

```diff
-       return {
-         ...bk.store,
-         yaw: bk.store.yaw + (null !== (ek = Dk.c[kk].previewYaw) && void 0 !== ek ? ek : 0)
+       return null !== (zC = CC.name) && void 0 !== zC ? zC : CC.fromFolderName || CC.id
+     }
+ 
+     function SC(CC, zC, ZC) {
+       return `Texture pack "${CC}": model "${zC}" was not loaded because it ${ZC}. The default model is used instead.`
+     }
+ 
+     function pC(CC, zC, ZC) {
+       let {
+         strictDraco: bC = !1
+       } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const nC = {};
+       for (const [fC, oC] of Object.entries(zC)) {
+         let zC;
+         if (oC.startsWith("data:")) try {
+           const CC = new Uint8Array((0, wC.s)(oC));
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L153-L155` → after: `L152-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L152-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/202.js#L152-L156) · [Before (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/202.js#L153-L155)

```diff
-       kk instanceof Promise ? kk.then(ek).catch((kk => {
-         console.error("Couldn't open the preview", kk)
-       })) : ek(kk)
+       const ZC = Object.keys(zC);
+       if (0 === ZC.length) return null;
+       if (1 === ZC.length) return SC(CC, ZC[0], zC[ZC[0]]);
+       const QC = ZC.map((CC => `"${CC}" ${zC[CC]}`)).join("; ");
+       return `Texture pack "${CC}": ${ZC.length} models were not loaded (${QC}). The default models are used instead.`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/203.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/203.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd)

#### 1. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/203.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/203.js#L4)

```diff
-   33828: (kk, ek, ik) => {
+   34223: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L6-L32` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/203.js#L6) · [Before (L6-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/203.js#L6-L32)

```diff
-       b: () => fk,
-       d: () => Sk
-     });
-     var Dk = ik(3218);
- 
-     function fk() {
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const kk = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
-       try {
-         const ek = new BroadcastChannel(Dk.m);
-         ek.postMessage({
-           stored: kk
-         }), ek.close()
-       } catch {
-         return null
-       }
- ... (11 more removed lines; see GitHub link above)
+       d: () => mC,
```

#### 3. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L36-L59` → after: `L10-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L10-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/203.js#L10-L395) · [Before (L36-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/203.js#L36-L59)

```diff
-     var Dk = ik(3218);
-     async function fk(kk, ek, ik) {
-       let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-       const Sk = bk(await kk.getItem(Dk.f, ek));
-       if (null === Sk || fk()) return null;
-       const rk = await kk.getItem(Dk.i, ek);
-       return fk() ? null : (await async function(kk) {
-         await Promise.all([kk.removeItem(Dk.f), kk.removeItem(Dk.i)])
-       }(kk).catch(ik), {
-         pack: Sk,
-         source: "string" === typeof rk ? rk : null
-       })
-     }
- 
-     function Sk(kk) {
-       return (0, Dk.u)() ? Promise.resolve(null) : fk(kk, !1, (kk => {
- ... (8 more removed lines; see GitHub link above)
+     var QC = ZC(34228);
+     const wC = {
+         fileBytes: 4194304,
+         vertices: 65535,
+         indices: 196608,
+         accessorElements: 196608,
+         primitives: 64,
+         nodes: 128,
+         meshes: 64,
+         materials: 8,
+         images: 8,
+         imageSide: 1024
+       },
+       bC = {
+         items: 1024,
+         perFile: 1024,
+ ... (370 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L62-L65` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/203.js#L398) · [Before (L62-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/203.js#L62-L65)

```diff
-   50568: (kk, ek, ik) => {
-     function Dk(kk) {
-       return null === kk.gameSource ? "player" : "customGame"
-     }
+   34228: (CC, zC, ZC) => {
```

#### 5. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L70` → after: `L402-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L402-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/203.js#L402-L409) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/203.js#L70)

```diff
-       j: () => Dk
+       h: () => SC,
+       l: () => bC,
+       n: () => wC,
+       q: () => gC,
+       s: () => FC,
+       t: () => WC,
+       w: () => nC,
+       x: () => qC
```

#### 6. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L72-L161` → after: `L411-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L411-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/203.js#L411-L513) · [Before (L72-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/203.js#L72-L161)

```diff
-     const fk = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;
- 
-     function Sk(kk) {
-       return "" === kk || "string" === typeof kk && fk.test(kk)
-     }
- 
-     function bk(kk) {
-       return "object" === typeof kk && null !== kk && ("earth" === kk.type || Object.entries(kk).every((kk => {
-         let [ek, ik] = kk;
-         return "type" === ek || Sk(ik)
-       })))
-     }
-     const rk = /(?:src|image|image-set|cross-fade)\(/i,
-       Pk = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
-       mk = /url\(/gi,
-       Mk = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
- ... (74 more removed lines; see GitHub link above)
+     var QC = ZC(34237);
+     class wC extends Error {
+       constructor(CC) {
+         super(`GLB refused: it ${CC}`), this.reason = CC, this.name = "GlbRefused"
+       }
+     }
+     class bC extends Error {
+       constructor(CC) {
+         super(CC), this.name = "GlbError"
+       }
+     }
+ 
+     function nC(CC) {
+       return Reflect.get(CC, "scene")
+     }
+     const fC = 5130562,
+ ... (87 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L163` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/203.js#L515) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/203.js#L163)

```diff
-   50577: (kk, ek, ik) => {
+   34237: (CC, zC, ZC) => {
```

#### 8. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L167` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/203.js#L519) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/203.js#L167)

```diff
-       h: () => pk
+       g: () => nC
```

#### 9. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L169-L327` → after: `L521-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L521-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/203.js#L521-L552) · [Before (L169-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/203.js#L169-L327)

```diff
-     var Dk = ik(996),
-       fk = ik(2107),
-       Sk = ik(3206),
-       bk = ik(3218),
-       rk = ik(33828),
-       Pk = ik(33819),
-       mk = ik(50568),
-       Mk = ik(40581),
-       Kk = ik(40560),
-       xk = ik(4977);
-     const nk = {
-       pack: null,
-       gameSource: null
-     };
-     class Uk {
-       constructor(kk) {
- ... (143 more removed lines; see GitHub link above)
+     const QC = 1179937895,
+       wC = 1313821514;
+ 
+     function bC(CC) {
+       const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
+       if (CC.byteLength < 20 || zC.getUint32(0, !0) !== QC || 2 !== zC.getUint32(4, !0)) return null;
+       const ZC = Math.min(zC.getUint32(8, !0), CC.byteLength),
+         bC = zC.getUint32(12, !0);
+       if (zC.getUint32(16, !0) !== wC || 20 + bC > ZC) return null;
+       let nC;
+       try {
+         nC = JSON.parse((new TextDecoder).decode(CC.subarray(20, 20 + bC)))
+       } catch {
+         return null
+       }
+       return "object" === typeof nC && null !== nC ? {
+ ... (16 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L329-L437` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/203.js#L554) · [Before (L329-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/203.js#L329-L437)

```diff
-       }
-       takeStoredOwn(kk) {
-         if (this.playerPicked || this.aU) return;
-         if (this.ownChanges++, this.setOwn(lk(kk)), this.onGamePack) return;
-         const ek = {
-           pack: this.playerPack,
-           gameSource: null
-         };
-         0 === this.changes ? this.state = ek : this.change(ek, !1)
-       }
-       async update() {
-         const kk = this.playerPack,
-           ek = null === kk || void 0 === kk ? void 0 : kk.metaData.id;
-         if (!kk || !ek || !this.host.fetchLatest || ek === fk.d || ek === fk.u.CUSTOM) return;
-         const ik = fk.v[ek];
-         if (void 0 === ik || kk.metaData.version >= ik) return;
- ... (93 more removed lines; see GitHub link above)
+       }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/204.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/204.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1)

#### 1. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/204.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/204.js#L4)

```diff
-   33831: (kk, ek, ik) => {
+   34243: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L6-L9` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/204.js#L6-L15) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/204.js#L6-L9)

```diff
-       packDisplayName: () => Uk,
-       packModelMessage: () => Hk,
-       packModelSummary: () => lk,
-       refusedPackModels: () => wk
+       animatedBlockTextures: () => oC,
+       armourAtlasUrl: () => nC,
+       averageColors: () => qC,
+       blockAtlasUrls: () => bC,
+       blockAtlasWidth: () => QC,
+       buildHash: () => WC,
+       builtTextureIndexFingerprint: () => FC,
+       imagesPerAtlas: () => wC,
+       outputHash: () => NC,
+       rotatedBlockTextures: () => fC
```

#### 3. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L11-L157` → after: `L17-L10900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L17-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/204.js#L17-L10900) · [Before (L11-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/204.js#L11-L157)

```diff
-     var Dk = ik(33838),
-       fk = ik(33846);
-     const Sk = "DRACO",
-       bk = 0,
-       rk = 1,
-       Pk = 0,
-       mk = 1,
-       Mk = 32768;
- 
-     function Kk(kk) {
-       const ek = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
-       let ik = 0;
-       const Dk = () => {
-           if (ik >= kk.byteLength) throw new RangeError("past the stream");
-           return kk[ik++]
-         },
- ... (131 more removed lines; see GitHub link above)
+     const QC = 8,
+       wC = [256, 256, 256, 256, 256, 256, 114],
+       bC = [ZC(34249), ZC(34256), ZC(34262), ZC(34271), ZC(34273), ZC(34282), ZC(34285)],
+       nC = ZC(34290),
+       fC = {
+         "alloy_kiln_top[rot[1": ZC(34294),
+         "alloy_kiln_top[rot[2": ZC(34296),
+         "alloy_kiln_top[rot[3": ZC(34303),
+         "alloy_kiln_top[rot[4": ZC(34312),
+         "auto_bench_top[rot[1": ZC(34314),
+         "auto_bench_top[rot[2": ZC(34318),
+         "auto_bench_top[rot[3": ZC(34323),
+         "auto_bench_top[rot[4": ZC(34326),
+         "belt_tunnel_exit_top[rot[1": ZC(34334),
+         "belt_tunnel_exit_top[rot[2": ZC(34339),
+         "belt_tunnel_exit_top[rot[3": ZC(34342),
+ ... (10868 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/205.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/205.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7)

#### 1. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L4-L8` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L4-L7) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L4-L8)

```diff
-   33838: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Ik,
-       f: () => qk,
-       g: () => uk
+   41295: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       loadGlbAsset: () => Rz,
+       loadGlbTree: () => Gz
```

#### 2. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L10` → after: `L9-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L9-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L9-L23) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L10)

```diff
-     var Dk = ik(33846);
+     var QC = ZC(37731),
+       wC = ZC(41298),
+       bC = ZC(36162),
+       nC = ZC.n(bC);
+ 
+     function fC() {
+       return nC()('(()=>{class CC extends Error{}function zC(zC,ZC){const QC=zC._malloc(ZC);if(0===QC)throw new CC(`Draco: the decoder\'s heap refused ${ZC} bytes`);return QC}function ZC(CC){return{[CC.DT_FLOAT32]:[Float32Array,5126],[CC.DT_INT8]:[Int8Array,5120],[CC.DT_INT16]:[I … [truncated]
+     }
+     var oC = ZC(77);
+     const qC = 1e3;
+     let FC = null,
+       WC = null;
+     const NC = [],
+       MC = [];
+     let gC = 0;
```

#### 3. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L12-L39` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L25-L27) · [Before (L12-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L12-L39)

```diff
-         fileBytes: 4194304,
-         vertices: 65535,
-         indices: 196608,
-         accessorElements: 196608,
-         primitives: 64,
-         nodes: 128,
-         meshes: 64,
-         materials: 8,
-         images: 8,
-         imageSide: 1024
-       },
-       Sk = {
-         items: 1024,
-         perFile: 1024,
-         surfaces: 256,
-         few: 64,
- ... (12 more removed lines; see GitHub link above)
+         decodes: 0,
+         workersStarted: 0,
+         mostWorkers: 0
```

#### 4. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L41-L67` → after: `L29-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L29-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L29-L108) · [Before (L41-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L41-L67)

```diff
-       Kk = {
-         type: "VEC2",
-         componentTypes: [5126, 5121, 5123]
-       },
-       xk = {
-         TANGENT: {
-           type: "VEC4",
-           componentTypes: [5126]
-         },
-         TEXCOORD_1: Kk,
-         TEXCOORD_2: Kk,
-         TEXCOORD_3: Kk,
-         TEXCOORD_4: Kk,
-         TEXCOORD_5: Kk
-       },
-       nk = new Set(Dk.h.map((kk => {
- ... (11 more removed lines; see GitHub link above)
+       pC = function(CC, zC) {
+         const ZC = CC ? Math.max(1, Math.min(Math.floor(.5 * CC), 4)) : 1;
+         return zC ? Math.min(ZC, 2) : ZC
+       }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, oC.isMobile)());
+ 
+     function PC() {
+       if (!FC) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
+       const {
+         scriptUrl: CC,
+         wasmBinaryUrl: zC
+       } = FC;
+       return WC ??= fetch(zC).then((CC => {
+         if (!CC.ok) throw new Error(`Draco: fetching ${zC} failed: ${CC.status}`);
+         return CC.arrayBuffer()
+       })), WC.catch((() => {
+         WC = null
+ ... (64 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L70` → after: `L111-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L111-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L111-L123) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L70)

```diff
-       return kk.toLocaleString("en-US")
+       const zC = NC.find((CC => !CC.busy));
+       if (zC) RC(zC, CC);
+       else {
+         if (NC.length < pC) {
+           const zC = {
+             worker: PC(),
+             busy: !0,
+             releaseTimer: null
+           };
+           return NC.push(zC), SC.mostWorkers = Math.max(SC.mostWorkers, NC.length), void RC(zC, CC)
+         }
+         MC.push(CC)
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L74` → after: `L127-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L127-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/205.js#L127-L348) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/205.js#L74)

```diff
-       return kk > ek ? `has ${wk(kk)} ${ik} (the limit is ${wk(ek)})` : null
+       return new Promise(((QC, wC) => {
+         AC({
+           data: new Int8Array(CC.buffer, CC.byteOffset, CC.byteLength).slice(),
+           attributeIds: zC,
+           expected: ZC,
+           resolve: QC,
+           reject: wC
+         })
+       }))
+     }
+     var JC = ZC(37329),
+       IC = ZC(37339),
+       iC = ZC(34228),
+       vC = ZC(34223);
+     const eC = {
+       index: -1,
+ ... (206 more added lines; see GitHub link above)
```
