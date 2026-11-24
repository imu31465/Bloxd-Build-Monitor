# Changed — Bundle Modifications Report (Part 007 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `7 / 69` (**300** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 006](part-006.md) · [Part 008 →](part-008.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/119.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/119.js` (849 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d)

#### 471. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15151-L15153` → after: `L12545-L12553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12545-L12553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12545-L12553) · [Before (L15151-L15153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15151-L15153)

```diff
-     function cC(CC, zC, ZC) {
-       const QC = CC.JR.getState(zC, "rigAnimation");
-       QC && (QC._aiState = ZC)
+     function qp(pp) {
+       var ip = pp.replace(/\s+/g, "");
+       return ip = function(pp) {
+         for (var ip = pp; ip.includes("(");) {
+           var cp = Pp(Rp.exec(ip), 2)[1];
+           ip = ip.replace(Rp, mp(cp))
+         }
+         return ip
+       }(ip), ip = mp(ip)
```

#### 472. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15156-L15158` → after: `L12556-L12564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12556-L12564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12556-L12564) · [Before (L15156-L15158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15156-L15158)

```diff
-     function uC(CC, zC, ZC) {
-       const QC = CC.JR.getState(zC, "rigAnimation");
-       return !(null === QC || void 0 === QC || !QC._controller || !TC(CC, QC)) && QC._controller.playAction(ZC)
+     function Mp(pp) {
+       var ip = function(pp) {
+         try {
+           return qp(pp)
+         } catch (ip) {
+           return jp
+         }
+       }(pp.slice(5, -1));
+       return ip === jp ? "" : ip
```

#### 473. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15161-L15167` → after: `L12569-L12576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12569-L12576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12569-L12576) · [Before (L15161-L15167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15161-L15167)

```diff
-     function rC(CC, zC, ZC) {
-       const QC = mC(CC, zC);
-       if (null !== QC) {
-         const wC = CC.bloxd.getEntityHeading(zC, !0);
-         QC.setInput(nC.k.HitAngle, null === ZC ? 0 : 180 * fC.c.computeShortestRotation(wC, ZC) / Math.PI)
-       }
-       return uC(CC, zC, oC.k)
+     function Xp() {
+       return Xp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, Xp.apply(this, arguments)
```

#### 474. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15171-L15172` → after: `L12580-L12594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12580-L12594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12580-L12594) · [Before (L15171-L15172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15171-L15172)

```diff
-       var ZC;
-       return null !== (ZC = CC.JR.getState(zC, "animator")) && void 0 !== ZC ? ZC : null
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

#### 475. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15176-L15233` → after: `L12598-L12634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12598-L12634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12598-L12634) · [Before (L15176-L15233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15176-L15233)

```diff
-       const ZC = sC(CC, zC.mH);
-       return null !== ZC && ZC.AZC.xZC && !(0, FC.pausesOutOfView)(CC, zC.mH, zC.WH)
-     }
- 
-     function aC(CC, zC, ZC) {
-       const QC = zC._controller,
-         oC = zC.mH;
-       if (!TC(CC, zC)) return void(zC._primed = !1);
-       const qC = (0, MC.getDrawnPosition)(CC, oC, hC),
-         FC = CC.bloxd.getEntityHeading(oC, !0),
-         WC = qC[0] - zC._posLastFrame[0],
-         NC = qC[1] - zC._posLastFrame[1],
-         gC = qC[2] - zC._posLastFrame[2];
-       wC().copy(zC._posLastFrame, qC);
-       const KC = fC.c.computeShortestRotation(zC._headingLastFrame, FC);
-       zC._headingLastFrame = FC;
- ... (42 more removed lines; see GitHub link above)
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
+ ... (21 more added lines; see GitHub link above)
```

#### 476. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15235-L15237` → after: `L12636-L12638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12636-L12638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12636-L12638) · [Before (L15235-L15237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15235-L15237)

```diff
-       if (!zC._isVehicle || (0, WC.b)(CC, zC.mH)) return Number.NaN;
-       const ZC = CC.JR.getState(zC.mH, "meshRotation");
-       return null !== ZC && void 0 !== ZC && ZC.isServerControlled ? (0, NC.getRemoteTargetHeading)(CC, ZC) : Number.NaN
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 477. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15240-L15252` → after: `L12809-L12811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12809-L12811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12809-L12811) · [Before (L15240-L15252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15240-L15252)

```diff
-   37581: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       SERVER_TICK_MS: () => WC,
-       catchUpShare: () => JC,
-       catchUpSkippedSmoothing: () => YC,
-       chainSkipsSmoothing: () => dC,
-       default: () => TC,
-       getDrawnPosition: () => cC,
-       getSmoothedPosition: () => XC,
-       meshOnScreen: () => EC,
-       noteServerUpdate: () => AC,
-       setServerPosition: () => GC,
-       setServerPositionAxis: () => RC
+   6112: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Kp
```

#### 478. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15254` → after: `L12813-L12816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12813-L12816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12813-L12816) · [Before (L15254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15254)

```diff
-     var QC = ZC(338),
+     var Op = cp(62),
+       op = cp(5692),
+       Ip = cp.n(op),
+       Sp = cp(5575),
```

#### 479. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15256-L15268` → after: `L12818-L12819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12818-L12819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12818-L12819) · [Before (L15256-L15268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15256-L15268)

```diff
-       bC = ZC(37590),
-       nC = ZC(37596),
-       fC = ZC(184),
-       oC = ZC(37604),
-       qC = ZC(37310),
-       FC = ZC(36952);
-     const WC = 1e3 / fC.f.serverTicksPerSecond,
-       NC = 1.5,
-       MC = .2,
-       gC = 250,
-       SC = 1e-8,
-       pC = 16,
-       PC = 8;
+       Lp = cp(5203),
+       Yp = cp(5299);
```

#### 480. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15270-L15272` → after: `L12821-L12826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12821-L12826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12821-L12826) · [Before (L15270-L15272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15270-L15272)

```diff
-     function GC(CC, zC, ZC, QC) {
-       const wC = CC.serverPosition;
-       wC[0] = zC, wC[1] = ZC, wC[2] = QC, AC(CC), IC(CC)
+     function Dp(pp) {
+       return Dp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Dp(pp)
```

#### 481. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15275-L15276` → after: `L12829-L12836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12829-L12836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12829-L12836) · [Before (L15275-L15276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15275-L15276)

```diff
-     function RC(CC, zC, ZC) {
-       CC.serverPosition[zC] = ZC, AC(CC), IC(CC)
+     function Ap() {
+       return Ap = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, Ap.apply(this, arguments)
```

#### 482. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15279-L15283` → after: `L12839-L12874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12839-L12874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12839-L12874) · [Before (L15279-L15283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15279-L15283)

```diff
-     function AC(CC) {
-       const zC = CC._clock;
-       if (!zC || zC.ms === CC._updatedAt) return;
-       const ZC = zC.ms - CC._updatedAt;
-       ZC <= gC && (CC._updateIntervalMs += (ZC - CC._updateIntervalMs) * MC), CC._updatedAt = zC.ms, xC(CC, zC.ms)
+     function Pp(pp, ip) {
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
+ ... (20 more added lines; see GitHub link above)
```

#### 483. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15287` → after: `L12878-L12880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12878-L12880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12878-L12880) · [Before (L15287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15287)

```diff
-       CC._reachBy = zC + NC * CC._updateIntervalMs
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 484. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15290-L15292` → after: `L12883-L12891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12883-L12891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12883-L12891) · [Before (L15290-L15292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15290-L15292)

```diff
-     function JC(CC, zC, ZC) {
-       const QC = CC._reachBy - (zC - ZC);
-       return QC > ZC ? ZC / QC : 1
+     function yp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
```

#### 485. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15296-L15300` → after: `L12895-L12901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12895-L12901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12895-L12901) · [Before (L15296-L15300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15296-L15300)

```diff
-       const zC = CC._awake;
-       if (zC && CC._awakeIndex < 0) {
-         CC._awakeIndex = zC.length, zC.push(CC);
-         const ZC = CC._clock;
-         ZC && CC._reachBy <= ZC.ms && xC(CC, ZC.ms)
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? yp(Object(cp), !0).forEach((function(ip) {
+           wp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : yp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 486. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15304-L15308` → after: `L12906-L12924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12906-L12924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12906-L12924) · [Before (L15304-L15308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15304-L15308)

```diff
-     function iC(CC, zC) {
-       const ZC = CC[0] - zC[0],
-         QC = CC[1] - zC[1],
-         wC = CC[2] - zC[2];
-       return ZC * ZC + QC * QC + wC * wC
+     function wp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != Dp(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != Dp(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == Dp(ip) ? ip : ip + ""
+       }(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+ ... (3 more added lines; see GitHub link above)
```

#### 487. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15311-L15317` → after: `L12927-L12928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR12927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L12927-L12928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L12927-L12928) · [Before (L15311-L15317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15311-L15317)

```diff
-     function vC(CC, zC, ZC) {
-       const {
-         from: QC,
-         target: bC
-       } = CC, nC = eC(CC, zC);
-       for (let wC = 0; wC < 3; wC++) ZC[wC] = bC[wC] + (QC[wC] - bC[wC]) * nC;
-       return iC(ZC, bC) < SC && wC().copy(ZC, bC), ZC
+     function vp(pp) {
+       return Array.isArray(pp) && (0, Yp.B)(pp[0]) && (0, Yp.B)(pp[1]) ? pp.join(" ~ ") : pp
```

#### 488. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15320-L15322` → after: `L13021-L13026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13021-L13026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13021-L13026) · [Before (L15320-L15322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15320-L15322)

```diff
-     function eC(CC, zC) {
-       const ZC = CC.reachBy - zC;
-       return ZC > 0 ? ZC / (CC.reachBy - CC.since) : 0
+     function Hp(pp) {
+       return Hp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Hp(pp)
```

#### 489. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15325-L15343` → after: `L13029-L13058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13029-L13058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13029-L13058) · [Before (L15325-L15343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15325-L15343)

```diff
-     function hC(CC, zC, ZC, QC) {
-       const bC = CC.serverPosition,
-         nC = CC._skipped ??= {
-           from: [0, 0, 0],
-           target: [0, 0, 0],
-           since: 0,
-           reachBy: 0
-         },
-         {
-           from: fC,
-           target: oC
-         } = nC;
-       if (CC._skipping) {
-         if (oC[0] === bC[0] && oC[1] === bC[1] && oC[2] === bC[2] && nC.reachBy === CC._reachBy) return;
-         vC(nC, ZC - QC, fC)
-       } else CC._skipping = !0, wC().copy(fC, zC);
- ... (3 more removed lines; see GitHub link above)
+     function dp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != Hp(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != Hp(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == Hp(ip) ? ip : ip + ""
+       }(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+ ... (14 more added lines; see GitHub link above)
```

#### 490. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15347-L15348` → after: `L13061-L13074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13061-L13074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13061-L13074) · [Before (L15347-L15348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15347-L15348)

```diff
-     function YC(CC, zC) {
-       mC(CC, zC, lC)
+     function mp(pp) {
+       var ip = pp.allowEscapeViewBox,
+         cp = pp.coordinate,
+         Op = pp.key,
+         op = pp.offsetTopLeft,
+         Ip = pp.position,
+         Sp = pp.reverseDirection,
+         xp = pp.tooltipDimension,
+         Lp = pp.viewBox,
+         Dp = pp.viewBoxDimension;
+       if (Ip && (0, Yp.D)(Ip[Op])) return Ip[Op];
+       var Ap = cp[Op] - xp - op,
+         Pp = cp[Op] + op;
+       return ip[Op] ? Sp[Op] ? Ap : Pp : Sp[Op] ? Ap < Lp[Op] ? Math.max(Pp, Lp[Op]) : Math.max(Ap, Lp[Op]) : Pp + xp > Lp[Op] + Dp ? Math.max(Ap, Lp[Op]) : Math.max(Pp, Lp[Op])
```

#### 491. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15351-L15352` → after: `L13077-L13082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13077-L13082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13077-L13082) · [Before (L15351-L15352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15351-L15352)

```diff
-     function dC(CC, zC) {
-       return mC(CC, zC, HC)
+     function Rp(pp) {
+       return Rp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Rp(pp)
```

#### 492. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15355-L15360` → after: `L13085-L13091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13085-L13091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13085-L13091) · [Before (L15355-L15360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15355-L15360)

```diff
-     function mC(CC, zC, ZC) {
-       for (let wC = 0; void 0 !== zC && wC < PC; wC++) {
-         var QC;
-         const wC = CC.JR.getState(zC, "smoothToServerPos");
-         if (null !== wC && void 0 !== wC && wC._skipping && !0 === ZC(CC, wC)) return !0;
-         zC = null === (QC = CC.JR.BzC(zC)) || void 0 === QC ? void 0 : QC.og
+     function qp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 493. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15362` → after: `L13093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13093) · [Before (L15362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15362)

```diff
-       return !1
+       return cp
```

#### 494. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15365-L15366` → after: `L13096-L13105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13096-L13105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13096-L13105) · [Before (L15365-L15366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15365-L15366)

```diff
-     function HC() {
-       return !0
+     function Mp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? qp(Object(cp), !0).forEach((function(ip) {
+           Jp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : qp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 495. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15370` → after: `L13109-L13112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13109-L13112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13109-L13112) · [Before (L15370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15370)

```diff
-       return !(null === CC || void 0 === CC || !CC.isEnabled()) && (!("ZH" in CC) || CC.isVisible && (null === zC || (0, oC.e)(CC, zC)))
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Bp(Op.key), Op)
+       }
```

#### 496. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15373-L15381` → after: `L13115-L13124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13115-L13124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13115-L13124) · [Before (L15373-L15381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15373-L15381)

```diff
-     function lC(CC, zC) {
-       zC._skipping = !1;
-       const ZC = zC.mH;
-       if (CC.JR.BzC(ZC)) return;
-       const QC = CC.JR.lL(ZC).nB,
-         wC = QC[0],
-         bC = QC[1],
-         nC = QC[2];
-       CC.JR.setPosition(ZC, vC(zC._skipped, zC._clock.ms, KC)), IC(zC), uC.clear(), rC(CC, ZC, QC[0] - wC, QC[1] - bC, QC[2] - nC)
+     function Ep(pp, ip, cp) {
+       return ip = lp(ip),
+         function(pp, ip) {
+           if (ip && ("object" === Rp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, Xp() ? Reflect.construct(ip, cp || [], lp(pp).constructor) : ip.apply(pp, cp))
```

#### 497. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15384-L15386` → after: `L13127-L13133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13127-L13133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13127-L13133) · [Before (L15384-L15386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15384-L15386)

```diff
-     function XC(CC, zC, ZC) {
-       const QC = CC.JR.getState(zC, "smoothToServerPos");
-       return null !== QC && void 0 !== QC && QC._skipping && !CC.JR.BzC(zC) ? vC(QC._skipped, QC._clock.ms, ZC) : (wC().copy(ZC, CC.JR.yG(zC)), ZC)
+     function Xp() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (Xp = function() {
+         return !!pp
+       })()
```

#### 498. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15389-L15390` → after: `L13136-L13139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13136-L13139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13136-L13139) · [Before (L15389-L15390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15389-L15390)

```diff
-     function cC(CC, zC, ZC) {
-       return CC.JR.YCC(zC, "smoothToServerPos") ? XC(CC, zC, ZC) : wC().add(ZC, CC.JR.lL(zC).nB, CC.YN)
+     function lp(pp) {
+       return lp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, lp(pp)
```

#### 499. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15394-L15425` → after: `L13142-L13145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13142-L13145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13142-L13145) · [Before (L15394-L15425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15394-L15425)

```diff
-     function rC(CC, zC, ZC, QC, wC) {
-       var bC, nC;
-       if (0 === ZC && 0 === QC && 0 === wC || uC.has(zC)) return;
-       uC.add(zC);
-       const {
-         JR: fC
-       } = CC, oC = CC.Vg.nH, FC = fC.lL(zC).nB, WC = fC.fzC(zC);
-       if (null !== WC && void 0 !== WC && WC.AZC) {
-         if (WC.AZC.xZC) {
-           const {
-             offset: CC
-           } = WC;
-           oC.setPosition(WC.WH, FC[0] + CC[0], FC[1] + CC[1], FC[2] + CC[2])
-         }
-       } else if (null !== WC && void 0 !== WC && null !== (bC = WC.mesh) && void 0 !== bC && bC.isEnabled()) {
-         const {
- ... (16 more removed lines; see GitHub link above)
+     function Qp(pp, ip) {
+       return Qp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Qp(pp, ip)
```

#### 500. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15429-L15434` → after: `L13149-L13154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13149-L13154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13149-L13154) · [Before (L15429-L15434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15429-L15434)

```diff
-       const QC = CC.DCC,
-         wC = CC.nB,
-         bC = Math.fround(zC[0] - ZC[0]),
-         nC = Math.fround(zC[1] - ZC[1]),
-         fC = Math.fround(zC[2] - ZC[2]);
-       return QC[0] === bC && QC[1] === nC && QC[2] === fC && wC[0] === bC && wC[1] === nC && wC[2] === fC
+       return (ip = Bp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 501. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15438-L15473` → after: `L13158-L13164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13158-L13164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13158-L13164) · [Before (L15438-L15473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15438-L15473)

```diff
-       const zC = CC.Vg.nH,
-         ZC = CC.JR.NzC(CC.JR.names.Zg),
-         QC = new Set;
-       let fC = !1;
-       const oC = Array.from({
-         length: 6
-       }, (() => new nC.d(0, 0, 0, 0)));
-       let qC = null;
-       const NC = [],
-         MC = {
-           ms: 0
-         },
-         PC = [Number.NaN, Number.NaN, Number.NaN];
-       let GC = 0;
-       new Set;
- 
- ... (20 more removed lines; see GitHub link above)
+       var ip = function(pp, ip) {
+         if ("object" != Rp(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+           if ("object" != Rp(Op)) return Op;
+           throw new TypeError("@@toPrimitive must return a primitive value.")
```

#### 502. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15475-L15482` → after: `L13166-L13171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13166-L13171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13166-L13171) · [Before (L15475-L15482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15475-L15482)

```diff
-       }
- 
-       function KC(zC, ZC) {
-         return !(!(0, FC.pausesOutOfView)(CC, zC, ZC) || AC(zC)) && (fC || (fC = !0, function() {
-           var zC;
-           QC.clear();
-           const ZC = CC.Vg.Km(),
-             wC = ZC.activeCamera;
+         return ("string" === ip ? String : Number)(pp)
+       }(pp, "string");
+       return "symbol" == Rp(ip) ? ip : ip + ""
+     }
+     var Np = function(pp) {
+         function ip() {
```

#### 503. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15484-L15537` → after: `L13173-L13185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13173-L13185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13173-L13185) · [Before (L15484-L15537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15484-L15537)

```diff
-           qC = null, CC.Vg.iZC() ? qC = null !== (nC = ZC.frustumPlanes) && void 0 !== nC ? nC : null : null !== wC && (bC.e.GetPlanesToRef(wC.getTransformationMatrix(), oC), qC = oC), eC(null === (zC = CC.JR.BzC(CC.camera.YL)) || void 0 === zC ? void 0 : zC.og);
-           for (const QC of CC.JR.YH(CC.JR.names.Xx)) iC(QC.mH) && eC(QC.og);
-           for (const QC of CC.JR.YH("lineToEntity")) EC(QC._line, qC) && (eC(QC.mH), eC(QC._targetEId))
-         }()), !QC.has(zC))
-       }
-       return {
-         name: "smoothToServerPos",
-         order: 90,
-         state: {
-           serverPosition: null,
-           _awake: null,
-           _awakeIndex: -1,
-           _clock: null,
-           _skipping: !1,
-           _skipped: null,
-           _updatedAt: 0,
- ... (38 more removed lines; see GitHub link above)
+           ! function(pp, ip) {
+             if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
+           }(this, ip);
+           for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
+           return Jp(pp = Ep(this, ip, [].concat(Op)), "state", {
+             dismissed: !1,
+             dismissedAtCoordinate: {
+               x: 0,
+               y: 0
+             },
+             lastBoundingBox: {
+               width: -1,
+               height: -1
```

#### 504. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15539-L15541` → after: `L13187-L13204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13187-L13204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13187-L13204) · [Before (L15539-L15541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15539-L15541)

```diff
-             if (null !== MC.WH && KC(ZC.mH, MC.WH)) {
-               hC(ZC, WC.position, QC, zC), CC.JR.setPosition(ZC.mH, FC);
-               continue
+           }), Jp(pp, "handleKeyDown", (function(ip) {
+             var cp, Op, op, Ip;
+             "Escape" === ip.key && pp.setState({
+               dismissed: !0,
+               dismissedAtCoordinate: {
+                 x: null !== (cp = null === (Op = pp.props.coordinate) || void 0 === Op ? void 0 : Op.x) && void 0 !== cp ? cp : 0,
+                 y: null !== (op = null === (Ip = pp.props.coordinate) || void 0 === Ip ? void 0 : Ip.y) && void 0 !== op ? op : 0
+               }
+             })
+           })), pp
+         }
+         return function(pp, ip) {
+           if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+           pp.prototype = Object.create(ip && ip.prototype, {
+             constructor: {
+               value: pp,
+ ... (2 more added lines; see GitHub link above)
```

#### 505. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15543-L15546` → after: `L13206-L13225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13206-L13225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13206-L13225) · [Before (L15543-L15546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15543-L15546)

```diff
-             const gC = WC.position;
-             ZC._skipping && (ZC._skipping = !1, vC(ZC._skipped, QC - zC, gC)), wC().lerp(gC, gC, FC, JC(ZC, QC, zC));
-             const pC = wC().sqrDist(gC, FC);
-             (pC > 100 || pC < SC) && wC().copy(gC, FC), CC.JR.setPosition(ZC.mH, gC)
+           }), Object.defineProperty(pp, "prototype", {
+             writable: !1
+           }), ip && Qp(pp, ip)
+         }(ip, pp), cp = ip, (op = [{
+           key: "updateBBox",
+           value: function() {
+             if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
+               var pp = this.wrapperNode.getBoundingClientRect();
+               (Math.abs(pp.width - this.state.lastBoundingBox.width) > 1 || Math.abs(pp.height - this.state.lastBoundingBox.height) > 1) && this.setState({
+                 lastBoundingBox: {
+                   width: pp.width,
+                   height: pp.height
+                 }
+               })
+             } else - 1 === this.state.lastBoundingBox.width && -1 === this.state.lastBoundingBox.height || this.setState({
+               lastBoundingBox: {
+ ... (4 more added lines; see GitHub link above)
```

#### 506. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15548-L15562` → after: `L13227-L13345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13227-L13345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13227-L13345) · [Before (L15548-L15562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15548-L15562)

```diff
-         }
-       }
-     }
-   },
-   37577: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       catchUpWalkingState: () => NC,
-       default: () => fC,
-       setXProp: () => pC,
-       xProp: () => SC
-     });
-     var QC = ZC(1806),
-       wC = ZC(36952);
-     var bC = ZC(37581);
-     const nC = 4;
+         }, {
+           key: "componentDidMount",
+           value: function() {
+             document.addEventListener("keydown", this.handleKeyDown), this.updateBBox()
+           }
+         }, {
+           key: "componentWillUnmount",
+           value: function() {
+             document.removeEventListener("keydown", this.handleKeyDown)
+           }
+         }, {
+           key: "componentDidUpdate",
+           value: function() {
+             var pp, ip;
+             this.props.active && this.updateBBox(), this.state.dismissed && ((null === (pp = this.props.coordinate) || void 0 === pp ? void 0 : pp.x) === this.state.dismissedAtCoordinate.x && (null === (ip = this.props.coordinate) || void 0 === ip ? void 0 : ip.y) === this.state. … [truncated]
+           }
+ ... (103 more added lines; see GitHub link above)
```

#### 507. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15565-L15585` → after: `L13348-L13361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13348-L13361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13348-L13361) · [Before (L15565-L15585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15565-L15585)

```diff
-       return {
-         name: "updateWalkingState",
-         order: 104,
-         state: {
-           walkingLegSwingDuration: 0,
-           WH: null,
-           AZC: null,
-           walkingAngle: 0,
-           lastTickWalkingAngle: 0,
-           drawnSpeed: 0,
-           _drawnPosition: null,
-           _walkingSwingCoefficient: 0,
-           _walkingSwingDirection: 1,
-           _pausedDt: 0
-         },
-         xR: function(CC, zC) {
- ... (5 more removed lines; see GitHub link above)
+       return bp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, bp(pp)
+     }
+ 
+     function hp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 508. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15589-L15593` → after: `L13366-L13373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13366-L13373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13366-L13373) · [Before (L15589-L15593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15589-L15593)

```diff
-     function oC(CC, zC, ZC) {
-       const [QC, wC, nC] = (0, bC.getDrawnPosition)(CC, zC.mH, qC), fC = zC._drawnPosition;
-       if (ZC > 0 && !Number.isNaN(fC[0])) {
-         const CC = 1e3 * Math.hypot(QC - fC[0], wC - fC[1], nC - fC[2]) / ZC;
-         zC.drawnSpeed = CC < .1 ? 0 : CC
+     function ap(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? hp(Object(cp), !0).forEach((function(ip) {
+           Zp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : hp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 509. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15595` → after: `L13375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13375) · [Before (L15595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15595)

```diff
-       fC[0] = QC, fC[1] = wC, fC[2] = nC
+       return pp
```

#### 510. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15602-L15603` → after: `L13379-L13382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13379-L13382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13379-L13382) · [Before (L15602-L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15602-L15603)

```diff
-       const ZC = CC.JR.getState(zC, "updateWalkingState");
-       ZC && ZC._pausedDt > 0 && MC(CC, ZC, 0)
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, zp(Op.key), Op)
+       }
```

#### 511. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15607` → after: `L13386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13386) · [Before (L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15607)

```diff
-       ZC += zC._pausedDt, zC._pausedDt = 0,
+       return ip = Gp(ip),
```

#### 512. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L15609-L32291` → after: `L13388-L13721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13388-L13721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13388-L13721) · [Before (L15609-L32291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L15609-L32291)

```diff
-           var ZC, QC;
-           const wC = zC.mH,
-             bC = CC.JR.getState(wC, "humanoidMesh");
-           if (bC) {
-             var nC, fC;
-             const zC = CC.JR.MzC(wC);
-             return FC = null !== (nC = function(CC, zC) {
-               var ZC, QC, wC;
-               const bC = null === (ZC = CC.JR.BzC(zC)) || void 0 === ZC ? void 0 : ZC.og;
-               return null === (QC = null !== (wC = bC ? CC.JR.MzC(bC) : null) && void 0 !== wC ? wC : CC.JR.MzC(zC)) || void 0 === QC ? void 0 : QC.speed
-             }(CC, wC)) && void 0 !== nC ? nC : zC.speed, void(WC = null !== (fC = bC.maxWalkingAngleOverride) && void 0 !== fC ? fC : zC.crouching ? .5 : null)
-           }
-           FC = zC.drawnSpeed, WC = null !== (ZC = null === (QC = CC.JR.getState(wC, "fourLeggedMesh")) || void 0 === QC ? void 0 : QC.maxWalkingAngleOverride) && void 0 !== ZC ? ZC : null
-         }(CC, zC);
-       const QC = FC,
-         wC = gC(QC, WC);
- ... (16667 more removed lines; see GitHub link above)
+           if (ip && ("object" === bp(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return function(pp) {
+             if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+             return pp
+           }(pp)
+         }(pp, gp() ? Reflect.construct(ip, cp || [], Gp(pp).constructor) : ip.apply(pp, cp))
+     }
+ 
+     function gp() {
+       try {
+         var pp = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+       } catch (pp) {}
+       return (gp = function() {
+         return !!pp
+       })()
+ ... (318 more added lines; see GitHub link above)
```

#### 513. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32293-L32294` → after: `L13723-L13730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13723-L13730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13723-L13730) · [Before (L32293-L32294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32293-L32294)

```diff
-       "Black Wood Leggings": {
-         showOnlyInCategory: !0
+       dp = function() {
+         return (0, Op.useContext)(wp)
+       };
+     var ep = function(pp) {
+         var ip = (0, Op.useContext)(Pp);
+         null == ip && (0, op.d)(!1);
+         var cp = ip[pp];
+         return null == cp && (0, op.d)(!1), cp
```

#### 514. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32296-L32297` → after: `L13732-L13734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13732-L13734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13732-L13734) · [Before (L32296-L32297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32296-L32297)

```diff
-       "Black Wood Boots": {
-         showOnlyInCategory: !0
+       jp = function() {
+         var pp = (0, Op.useContext)(Pp);
+         return (0, Ap.k)(pp)
```

#### 515. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32299-L32300` → after: `L13736-L13740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13736-L13740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13736-L13740) · [Before (L32299-L32300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32299-L32300)

```diff
-       "Black Wood Gauntlets": {
-         showOnlyInCategory: !0
+       kp = function() {
+         var pp = (0, Op.useContext)(Wp);
+         return Sp()(pp, (function(pp) {
+           return Lp()(pp.domain, Number.isFinite)
+         })) || (0, Ap.k)(pp)
```

#### 516. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32302-L32303` → after: `L13742-L13746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13742-L13746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13742-L13746) · [Before (L32302-L32303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32302-L32303)

```diff
-       Ammo: {
-         isDisabled: qC
+       mp = function(pp) {
+         var ip = (0, Op.useContext)(Wp);
+         null == ip && (0, op.d)(!1);
+         var cp = ip[pp];
+         return null == cp && (0, op.d)(!1), cp
```

#### 517. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32305-L32306` → after: `L13748-L13749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13748-L13749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13748-L13749) · [Before (L32305-L32306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32305-L32306)

```diff
-       "AK-47": {
-         isDisabled: qC
+       Rp = function() {
+         return (0, Op.useContext)(yp)
```

#### 518. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32308-L32309` → after: `L13751-L13752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13751-L13752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13751-L13752) · [Before (L32308-L32309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32308-L32309)

```diff
-       M16: {
-         isDisabled: qC
+       qp = function() {
+         return (0, Op.useContext)(Up)
```

#### 519. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32311-L32312` → after: `L13754-L13755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13754-L13755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13754-L13755) · [Before (L32311-L32312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32311-L32312)

```diff
-       SKAR: {
-         isDisabled: qC
+       Mp = function() {
+         return (0, Op.useContext)(tp)
```

#### 520. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32314-L32315` → after: `L13757-L13786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13757-L13786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13757-L13786) · [Before (L32314-L32315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32314-L32315)

```diff
-       FMR: {
-         isDisabled: qC
+       Cp = function() {
+         return (0, Op.useContext)(vp)
+       }
+   },
+   6493: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => sp
+     });
+     var Op = cp(62);
+ 
+     function op() {}
+ 
+     function Ip(pp, ip, cp) {
+       pp._context.bezierCurveTo((2 * pp._x0 + pp._x1) / 3, (2 * pp._y0 + pp._y1) / 3, (pp._x0 + 2 * pp._x1) / 3, (pp._y0 + 2 * pp._y1) / 3, (pp._x0 + 4 * pp._x1 + ip) / 6, (pp._y0 + 4 * pp._y1 + cp) / 6)
+     }
+ 
+ ... (14 more added lines; see GitHub link above)
```

#### 521. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32317-L32318` → after: `L13788-L13789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13788-L13789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13788-L13789) · [Before (L32317-L32318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32317-L32318)

```diff
-       MP40: {
-         isDisabled: qC
+       areaEnd: function() {
+         this._line = NaN
```

#### 522. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32320-L32321` → after: `L13791-L13792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13791-L13792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13791-L13792) · [Before (L32320-L32321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32320-L32321)

```diff
-       "TAR-21": {
-         isDisabled: qC
+       lineStart: function() {
+         this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
```

#### 523. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32323-L32324` → after: `L13794-L13800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13794-L13800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13794-L13800) · [Before (L32323-L32324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32323-L32324)

```diff
-       M1911: {
-         isDisabled: qC
+       lineEnd: function() {
+         switch (this._point) {
+           case 3:
+             Ip(this, this._x1, this._y1);
+           case 2:
+             this._context.lineTo(this._x1, this._y1)
+         }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
```

#### 524. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32326-L32327` → after: `L13802-L13821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13802-L13821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13802-L13821) · [Before (L32326-L32327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32326-L32327)

```diff
-       "Block-19": {
-         isDisabled: qC
+       point: function(pp, ip) {
+         switch (pp = +pp, ip = +ip, this._point) {
+           case 0:
+             this._point = 1, this._line ? this._context.lineTo(pp, ip) : this._context.moveTo(pp, ip);
+             break;
+           case 1:
+             this._point = 2;
+             break;
+           case 2:
+             this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
+           default:
+             Ip(this, pp, ip)
+         }
+         this._x0 = this._x1, this._x1 = pp, this._y0 = this._y1, this._y1 = ip
+       }
+     }, xp.prototype = {
+ ... (4 more added lines; see GitHub link above)
```

#### 525. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32329-L32330` → after: `L13823-L13833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13823-L13833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13823-L13833) · [Before (L32329-L32330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32329-L32330)

```diff
-       "Mini Izu": {
-         isDisabled: qC
+       lineEnd: function() {
+         switch (this._point) {
+           case 1:
+             this._context.moveTo(this._x2, this._y2), this._context.closePath();
+             break;
+           case 2:
+             this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
+             break;
+           case 3:
+             this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
+         }
```

#### 526. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32332-L32333` → after: `L13835-L13853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13835-L13853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13835-L13853) · [Before (L32332-L32333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32332-L32333)

```diff
-       "Double Barrel": {
-         isDisabled: qC
+       point: function(pp, ip) {
+         switch (pp = +pp, ip = +ip, this._point) {
+           case 0:
+             this._point = 1, this._x2 = pp, this._y2 = ip;
+             break;
+           case 1:
+             this._point = 2, this._x3 = pp, this._y3 = ip;
+             break;
+           case 2:
+             this._point = 3, this._x4 = pp, this._y4 = ip, this._context.moveTo((this._x0 + 4 * this._x1 + pp) / 6, (this._y0 + 4 * this._y1 + ip) / 6);
+             break;
+           default:
+             Ip(this, pp, ip)
+         }
+         this._x0 = this._x1, this._x1 = pp, this._y0 = this._y1, this._y1 = ip
+       }
+ ... (3 more added lines; see GitHub link above)
```

#### 527. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32335-L32336` → after: `L13855-L13856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13855-L13856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13855-L13856) · [Before (L32335-L32336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32335-L32336)

```diff
-       AWP: {
-         isDisabled: qC
+       areaEnd: function() {
+         this._line = NaN
```

#### 528. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32338-L32339` → after: `L13858-L13859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13858-L13859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13858-L13859) · [Before (L32338-L32339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32338-L32339)

```diff
-       Deagle: {
-         isDisabled: qC
+       lineStart: function() {
+         this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
```

#### 529. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32341-L32342` → after: `L13861-L13862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13861-L13862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13861-L13862) · [Before (L32341-L32342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32341-L32342)

```diff
-       "Striker-12": {
-         isDisabled: qC
+       lineEnd: function() {
+         (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
```

#### 530. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32344-L32345` → after: `L13864-L13990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13864-L13990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13864-L13990) · [Before (L32344-L32345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32344-L32345)

```diff
-       VSR: {
-         isDisabled: qC
+       point: function(pp, ip) {
+         switch (pp = +pp, ip = +ip, this._point) {
+           case 0:
+             this._point = 1;
+             break;
+           case 1:
+             this._point = 2;
+             break;
+           case 2:
+             this._point = 3;
+             var cp = (this._x0 + 4 * this._x1 + pp) / 6,
+               Op = (this._y0 + 4 * this._y1 + ip) / 6;
+             this._line ? this._context.lineTo(cp, Op) : this._context.moveTo(cp, Op);
+             break;
+           case 3:
+             this._point = 4;
+ ... (111 more added lines; see GitHub link above)
```

#### 531. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32347-L32348` → after: `L13992-L13993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13992-L13993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13992-L13993) · [Before (L32347-L32348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32347-L32348)

```diff
-       DMR: {
-         isDisabled: qC
+       lineEnd: function() {
+         this._point && this._context.closePath()
```

#### 532. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32350-L32351` → after: `L13995-L14000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR13995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L13995-L14000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L13995-L14000) · [Before (L32350-L32351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32350-L32351)

```diff
-       Minigun: {
-         isDisabled: qC
+       point: function(pp, ip) {
+         pp = +pp, ip = +ip, this._point ? this._context.lineTo(pp, ip) : (this._point = 1, this._context.moveTo(pp, ip))
+       }
+     }, Ap.prototype = {
+       areaStart: function() {
+         this._line = 0
```

#### 533. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32353-L32354` → after: `L14002-L14003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14002-L14003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14002-L14003) · [Before (L32353-L32354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32353-L32354)

```diff
-       GPMG: {
-         isDisabled: qC
+       areaEnd: function() {
+         this._line = NaN
```

#### 534. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32356-L32357` → after: `L14005-L14006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14005-L14006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14005-L14006) · [Before (L32356-L32357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32356-L32357)

```diff
-       RPG: {
-         isDisabled: qC
+       lineStart: function() {
+         this._point = 0
```

#### 535. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32359-L32360` → after: `L14008-L14009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14008-L14009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14008-L14009) · [Before (L32359-L32360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32359-L32360)

```diff
-       "Super RPG": {
-         isDisabled: qC
+       lineEnd: function() {
+         (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
```

#### 536. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32362-L32363` → after: `L14011-L14024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14011-L14024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14011-L14024) · [Before (L32362-L32363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32362-L32363)

```diff
-       "Grenade Launcher": {
-         isDisabled: qC
+       point: function(pp, ip) {
+         switch (pp = +pp, ip = +ip, this._point) {
+           case 0:
+             this._point = 1, this._line ? this._context.lineTo(pp, ip) : this._context.moveTo(pp, ip);
+             break;
+           case 1:
+             this._point = 2;
+           default:
+             this._context.lineTo(pp, ip)
+         }
+       }
+     }, vp.prototype = {
+       areaStart: function() {
+         this._line = 0
```

#### 537. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32365-L32366` → after: `L14026-L14027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14026-L14027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14026-L14027) · [Before (L32365-L32366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32365-L32366)

```diff
-       "Frag Grenade": {
-         isDisabled: qC
+       areaEnd: function() {
+         this._line = NaN
```

#### 538. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32368-L32369` → after: `L14029-L14030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14029-L14030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14029-L14030) · [Before (L32368-L32369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32368-L32369)

```diff
-       "Mining Grenade": {
-         isDisabled: qC
+       lineStart: function() {
+         this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
```

#### 539. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32371-L32372` → after: `L14032-L14093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14032-L14093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14032-L14093) · [Before (L32371-L32372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32371-L32372)

```diff
-       "Smoke Grenade": {
-         isDisabled: qC
+       lineEnd: function() {
+         switch (this._point) {
+           case 2:
+             this._context.lineTo(this._x1, this._y1);
+             break;
+           case 3:
+             wp(this, this._t0, Up(this, this._t0))
+         }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
+       },
+       point: function(pp, ip) {
+         var cp = NaN;
+         if (ip = +ip, (pp = +pp) !== this._x1 || ip !== this._y1) {
+           switch (this._point) {
+             case 0:
+               this._point = 1, this._line ? this._context.lineTo(pp, ip) : this._context.moveTo(pp, ip);
+               break;
+ ... (46 more added lines; see GitHub link above)
```

#### 540. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32374-L32375` → after: `L14095-L14100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14095-L14100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14095-L14100) · [Before (L32374-L32375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32374-L32375)

```diff
-       "Kill Spikes": {
-         isDisabled: qC
+       point: function(pp, ip) {
+         this._x.push(+pp), this._y.push(+ip)
+       }
+     }, jp.prototype = {
+       areaStart: function() {
+         this._line = 0
```

#### 541. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32377-L32380` → after: `L14102-L14103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14102-L14103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14102-L14103) · [Before (L32377-L32380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32377-L32380)

```diff
-       "Code Block": {
-         altNames: ["Command Block"],
-         showOnlyInCategory: !0,
-         isDisabled: qC
+       areaEnd: function() {
+         this._line = NaN
```

#### 542. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32382-L32383` → after: `L14105-L14106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14105-L14106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14105-L14106) · [Before (L32382-L32383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32382-L32383)

```diff
-       "Custom Lobby Block": {
-         isDisabled: qC
+       lineStart: function() {
+         this._x = this._y = NaN, this._point = 0
```

#### 543. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32385-L32390` → after: `L14108-L14109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14108-L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14108-L14109) · [Before (L32385-L32390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32385-L32390)

```diff
-       ...Object.fromEntries(wC.z.map((CC => [CC, {
-         showOnlyInCategory: !0,
-         isDisabled: qC
-       }]))),
-       "Mob Catcher": {
-         altNames: ["Mob Net", "Catcher Net", "Pet Net", "Pet Catcher"]
+       lineEnd: function() {
+         0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
```

#### 544. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32392-L32399` → after: `L14111-L14325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14111-L14325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14111-L14325) · [Before (L32392-L32399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32392-L32399)

```diff
-       ...NC(),
-       ...MC(),
-       ...fC,
-       "Empty Spawner Block": {
-         altNames: ["Empty Mob Spawner Block"],
-         showOnlyInSearch: !0,
-         isDisabled: function(CC) {
-           return !0
+       point: function(pp, ip) {
+         switch (pp = +pp, ip = +ip, this._point) {
+           case 0:
+             this._point = 1, this._line ? this._context.lineTo(pp, ip) : this._context.moveTo(pp, ip);
+             break;
+           case 1:
+             this._point = 2;
+           default:
+             if (this._t <= 0) this._context.lineTo(this._x, ip), this._context.lineTo(pp, ip);
+             else {
+               var cp = this._x * (1 - this._t) + pp * this._t;
+               this._context.lineTo(cp, this._y), this._context.lineTo(cp, ip)
+             }
+         }
+         this._x = pp, this._y = ip
+       }
+ ... (199 more added lines; see GitHub link above)
```

#### 545. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32402-L32421` → after: `L14328-L14329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14328-L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14328-L14329) · [Before (L32402-L32421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32402-L32421)

```diff
-       "X-Ray Vision Potion": {
-         altNames: ["XRay Vision Potion", "X Ray Vision Potion"]
-       },
-       "Splash X-Ray Vision Potion": {
-         altNames: ["Splash XRay Vision Potion", "Splash X Ray Vision Potion"]
-       },
-       "Aura XP Orb": {
-         altNames: ["Experience Orb", "EXP Orb", "Enchanting Orb"]
-       },
-       "Aura XP Potion": {
-         altNames: ["Experience Potion", "Enchanting Potion", "Bottle of Enchanting", "EXP Potion"]
-       },
-       "Aura XP Potion II": {
-         altNames: ["Experience Potion II", "Enchanting Potion II", "Bottle of Enchanting II", "EXP Potion II"]
-       },
-       "Splash Aura XP Potion": {
- ... (4 more removed lines; see GitHub link above)
+       Gp = function(pp) {
+         return pp.x === +pp.x && pp.y === +pp.y
```

#### 546. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32423-L32424` → after: `L14331-L14332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14331-L14332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14331-L14332) · [Before (L32423-L32424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32423-L32424)

```diff
-       "Arrow of Aura XP": {
-         altNames: ["Enchanting Arrow", "EXP Arrow"]
+       rp = function(pp) {
+         return pp.x
```

#### 547. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32426-L32427` → after: `L14334-L14335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14334-L14335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14334-L14335) · [Before (L32426-L32427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32426-L32427)

```diff
-       [(0, nC.Gb)("Sheep")]: {
-         altNames: ["Sheep Painting"]
+       Zp = function(pp) {
+         return pp.y
```

#### 548. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32429-L32430` → after: `L14337-L14369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14337-L14369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14337-L14369) · [Before (L32429-L32430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32429-L32430)

```diff
-       [(0, nC.Gb)("Cow")]: {
-         altNames: ["Cow Painting"]
+       zp = function(pp) {
+         var ip, cp = pp.type,
+           Op = void 0 === cp ? "linear" : cp,
+           op = pp.points,
+           Ip = void 0 === op ? [] : op,
+           Sp = pp.baseLine,
+           xp = pp.layout,
+           Lp = pp.connectNulls,
+           Yp = void 0 !== Lp && Lp,
+           Dp = function(pp, ip) {
+             if (Jp()(pp)) return pp;
+             var cp = "curve".concat(lp()(pp));
+             return "curveMonotone" !== cp && "curveBump" !== cp || !ip ? gp[cp] || Pp : gp["".concat(cp).concat("vertical" === ip ? "Y" : "X")]
+           }(Op, xp),
+           Ap = Yp ? Ip.filter((function(pp) {
+             return Gp(pp)
+ ... (17 more added lines; see GitHub link above)
```

#### 549. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32432-L32433` → after: `L14371-L14544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14371-L14544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14371-L14544) · [Before (L32432-L32433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32432-L32433)

```diff
-       [(0, nC.Gb)("Pig")]: {
-         altNames: ["Pig Painting"]
+       sp = function(pp) {
+         var ip = pp.className,
+           cp = pp.points,
+           op = pp.path,
+           Ip = pp.pathRef;
+         if ((!cp || !cp.length) && !op) return null;
+         var Sp = cp && cp.length ? zp(pp) : op;
+         return Op.createElement("path", hp({}, (0, Tp.d)(pp, !1), (0, Np.h)(pp), {
+           className: (0, Bp.d)("recharts-curve", ip),
+           d: Sp,
+           ref: Ip
+         }))
+       }
+   },
+   6238: (pp, ip, cp) => {
+     cp.d(ip, {
+ ... (158 more added lines; see GitHub link above)
```

#### 550. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32435-L32436` → after: `L14546-L14561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14546-L14561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14546-L14561) · [Before (L32435-L32436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32435-L32436)

```diff
-       [(0, nC.Gb)("Horse")]: {
-         altNames: ["Horse Painting"]
+       Up = function(pp, ip) {
+         if (!pp || !ip) return !1;
+         var cp = pp.x,
+           Op = pp.y,
+           op = ip.x,
+           Ip = ip.y,
+           Sp = ip.width,
+           xp = ip.height;
+         if (Math.abs(Sp) > 0 && Math.abs(xp) > 0) {
+           var Lp = Math.min(op, op + Sp),
+             Yp = Math.max(op, op + Sp),
+             Dp = Math.min(Ip, Ip + xp),
+             Ap = Math.max(Ip, Ip + xp);
+           return cp >= Lp && cp <= Yp && Op >= Dp && Op <= Ap
+         }
+         return !1
```

#### 551. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32438-L32439` → after: `L14563-L14573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14563-L14573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14563-L14573) · [Before (L32438-L32439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32438-L32439)

```diff
-       [(0, nC.Gb)("Camel")]: {
-         altNames: ["Camel Painting"]
+       wp = {
+         x: 0,
+         y: 0,
+         width: 0,
+         height: 0,
+         radius: 0,
+         isAnimationActive: !1,
+         isUpdateAnimationActive: !1,
+         animationBegin: 0,
+         animationDuration: 1500,
+         animationEasing: "ease"
```

#### 552. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32441-L32442` → after: `L14575-L14731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14575-L14731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14575-L14731) · [Before (L32441-L32442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32441-L32442)

```diff
-       [(0, nC.Gb)("Wolf")]: {
-         altNames: ["Wolf Painting"]
+       vp = function(pp) {
+         var ip = Pp(Pp({}, wp), pp),
+           cp = (0, Op.useRef)(),
+           xp = Yp((0, Op.useState)(-1), 2),
+           Dp = xp[0],
+           Ap = xp[1];
+         (0, Op.useEffect)((function() {
+           if (cp.current && cp.current.getTotalLength) try {
+             var pp = cp.current.getTotalLength();
+             pp && Ap(pp)
+           } catch (ip) {}
+         }), []);
+         var Wp = ip.x,
+           Up = ip.y,
+           vp = ip.width,
+           tp = ip.height,
+ ... (141 more added lines; see GitHub link above)
```

#### 553. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32444-L32445` → after: `L14733-L14751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14733-L14751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14733-L14751) · [Before (L32444-L32445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32444-L32445)

```diff
-       [(0, nC.Gb)("Deer")]: {
-         altNames: ["Deer Painting"]
+       yp = function(pp) {
+         var ip = pp.cx,
+           cp = pp.cy,
+           Op = pp.innerRadius,
+           op = pp.outerRadius,
+           Ip = pp.startAngle,
+           Lp = function(pp, ip) {
+             return (0, xp.I)(ip - pp) * Math.min(Math.abs(ip - pp), 359.999)
+           }(Ip, pp.endAngle),
+           Yp = Ip + Lp,
+           Dp = (0, Sp.i)(ip, cp, op, Ip),
+           Ap = (0, Sp.i)(ip, cp, op, Yp),
+           Pp = "M ".concat(Dp.x, ",").concat(Dp.y, "\n    A ").concat(op, ",").concat(op, ",0,\n    ").concat(+(Math.abs(Lp) > 180), ",").concat(+(Ip > Yp), ",\n    ").concat(Ap.x, ",").concat(Ap.y, "\n  ");
+         if (Op > 0) {
+           var Wp = (0, Sp.i)(ip, cp, Op, Ip),
+             yp = (0, Sp.i)(ip, cp, Op, Yp);
+ ... (3 more added lines; see GitHub link above)
```

#### 554. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32447-L32448` → after: `L14753-L14762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14753-L14762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14753-L14762) · [Before (L32447-L32448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32447-L32448)

```diff
-       [(0, nC.Gb)("Wildcat")]: {
-         altNames: ["Wildcat Painting"]
+       Up = {
+         cx: 0,
+         cy: 0,
+         innerRadius: 0,
+         outerRadius: 0,
+         startAngle: 0,
+         endAngle: 0,
+         cornerRadius: 0,
+         forceCornerRadius: !1,
+         cornerIsExternal: !1
```

#### 555. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32450-L32451` → after: `L14764-L14898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14764-L14898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14764-L14898) · [Before (L32450-L32451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32450-L32451)

```diff
-       "Cow's Milk": {
-         altNames: ["Cow Milk", "Cows Milk"]
+       wp = function(pp) {
+         var ip = Ap(Ap({}, Up), pp),
+           cp = ip.cx,
+           Sp = ip.cy,
+           Lp = ip.innerRadius,
+           Dp = ip.outerRadius,
+           Pp = ip.cornerRadius,
+           wp = ip.forceCornerRadius,
+           vp = ip.cornerIsExternal,
+           tp = ip.startAngle,
+           Hp = ip.endAngle,
+           dp = ip.className;
+         if (Dp < Lp || tp === Hp) return null;
+         var ep, jp = (0, op.d)("recharts-sector", dp),
+           kp = Dp - Lp,
+           mp = (0, xp.r)(Pp, kp, 0, !0);
+ ... (119 more added lines; see GitHub link above)
```

#### 556. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32453-L32454` → after: `L14900-L14904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14900-L14904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14900-L14904) · [Before (L32453-L32454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32453-L32454)

```diff
-       "Sheep's Milk": {
-         altNames: ["Sheep Milk", "Sheeps Milk"]
+       Pp = {
+         draw(pp, ip) {
+           const cp = Lp(ip / 5) / 2;
+           pp.moveTo(-3 * cp, -cp), pp.lineTo(-cp, -cp), pp.lineTo(-cp, -3 * cp), pp.lineTo(cp, -3 * cp), pp.lineTo(cp, -cp), pp.lineTo(3 * cp, -cp), pp.lineTo(3 * cp, cp), pp.lineTo(cp, cp), pp.lineTo(cp, 3 * cp), pp.lineTo(-cp, 3 * cp), pp.lineTo(-cp, cp), pp.lineTo(-3 * cp, cp) … [truncated]
+         }
```

#### 557. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32456-L32457` → after: `L14906-L14913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14906-L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14906-L14913) · [Before (L32456-L32457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32456-L32457)

```diff
-       "Lucky Block": {
-         isDisabled: qC
+       Wp = Lp(1 / 3),
+       yp = 2 * Wp,
+       Up = {
+         draw(pp, ip) {
+           const cp = Lp(ip / yp),
+             Op = cp * Wp;
+           pp.moveTo(0, -cp), pp.lineTo(Op, 0), pp.lineTo(0, cp), pp.lineTo(-Op, 0), pp.closePath()
+         }
```

#### 558. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32459-L32460` → after: `L14915-L14920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14915-L14920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14915-L14920) · [Before (L32459-L32460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32459-L32460)

```diff
-       "Ultra Lucky Block": {
-         isDisabled: qC
+       wp = {
+         draw(pp, ip) {
+           const cp = Lp(ip),
+             Op = -cp / 2;
+           pp.rect(Op, Op, cp, cp)
+         }
```

#### 559. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32462-L32463` → after: `L14922-L14938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14922-L14938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14922-L14938) · [Before (L32462-L32463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32462-L32463)

```diff
-       "Weapon Lucky Block": {
-         isDisabled: qC
+       vp = xp(Yp / 10) / xp(7 * Yp / 10),
+       tp = xp(Dp / 10) * vp,
+       Hp = -Sp(Dp / 10) * vp,
+       dp = {
+         draw(pp, ip) {
+           const cp = Lp(.8908130915292852 * ip),
+             Op = tp * cp,
+             op = Hp * cp;
+           pp.moveTo(0, -cp), pp.lineTo(Op, op);
+           for (let Ip = 1; Ip < 5; ++Ip) {
+             const ip = Dp * Ip / 5,
+               Lp = Sp(ip),
+               Yp = xp(ip);
+             pp.lineTo(Yp * cp, -Lp * cp), pp.lineTo(Lp * Op - Yp * op, Yp * Op + Lp * op)
+           }
+           pp.closePath()
+ ... (1 more added lines; see GitHub link above)
```

#### 560. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32465-L32466` → after: `L14940-L14945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14940-L14945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14940-L14945) · [Before (L32465-L32466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32465-L32466)

```diff
-       "Gun Lucky Block": {
-         isDisabled: qC
+       ep = Lp(3),
+       jp = {
+         draw(pp, ip) {
+           const cp = -Lp(ip / (3 * ep));
+           pp.moveTo(0, 2 * cp), pp.lineTo(-ep * cp, -cp), pp.lineTo(ep * cp, -cp), pp.closePath()
+         }
```

#### 561. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32468-L32469` → after: `L14947-L14994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14947-L14994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14947-L14994) · [Before (L32468-L32469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32468-L32469)

```diff
-       "Pet Lucky Block": {
-         isDisabled: qC
+       kp = -.5,
+       mp = Lp(3) / 2,
+       Rp = 1 / Lp(12),
+       qp = 3 * (Rp / 2 + 1),
+       Mp = {
+         draw(pp, ip) {
+           const cp = Lp(ip / qp),
+             Op = cp / 2,
+             op = cp * Rp,
+             Ip = Op,
+             Sp = cp * Rp + cp,
+             xp = -Ip,
+             Yp = Sp;
+           pp.moveTo(Op, op), pp.lineTo(Ip, Sp), pp.lineTo(xp, Yp), pp.lineTo(kp * Op - mp * op, mp * Op + kp * op), pp.lineTo(kp * Ip - mp * Sp, mp * Ip + kp * Sp), pp.lineTo(kp * xp - mp * Yp, mp * xp + kp * Yp), pp.lineTo(kp * Op + mp * op, kp * op - mp * Op), pp.lineTo(kp * Ip … [truncated]
+         }
+       };
+ ... (32 more added lines; see GitHub link above)
```

#### 562. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32471` → after: `L14996-L14997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14996-L14997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14996-L14997) · [Before (L32471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32471)

```diff
-     };
+       return cp
+     }
```

#### 563. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32473-L32476` → after: `L14999-L15153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR14999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L14999-L15153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L14999-L15153) · [Before (L32473-L32476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32473-L32476)

```diff
-     function WC(CC, zC, ZC, QC) {
-       var wC, bC, nC;
-       const fC = FC[CC];
-       return null !== (wC = null === fC || void 0 === fC || null === (bC = fC.isDisabled) || void 0 === bC ? void 0 : bC.call(fC, zC)) && void 0 !== wC && wC || !ZC || !QC && null !== (nC = null === fC || void 0 === fC ? void 0 : fC.devOnly) && void 0 !== nC && nC
+     function Tp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Np(Object(cp), !0).forEach((function(ip) {
+           fp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Np(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
+     }
+ 
+     function fp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != Qp(pp) || !pp) return pp;
+ ... (139 more added lines; see GitHub link above)
```

#### 564. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32484` → after: `L15157-L15201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15157-L15201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15157-L15201) · [Before (L32484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32484)

```diff
-       return Object.fromEntries(bC.B.map((CC => [(0, nC.Jb)(CC), gC(CC, [`Mob ${CC} Spawn Egg`])])))
+       return vp = Object.assign ? Object.assign.bind() : function(pp) {
+         for (var ip = 1; ip < arguments.length; ip++) {
+           var cp = arguments[ip];
+           for (var Op in cp) Object.prototype.hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+         }
+         return pp
+       }, vp.apply(this, arguments)
+     }
+ 
+     function tp(pp, ip) {
+       return function(pp) {
+         if (Array.isArray(pp)) return pp
+       }(pp) || function(pp, ip) {
+         var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
+         if (null != cp) {
+           var Op, op, Ip, Sp, xp = [],
+ ... (29 more added lines; see GitHub link above)
```

#### 565. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32487-L32488` → after: `L15204-L15207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15204-L15207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15204-L15207) · [Before (L32487-L32488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32487-L32488)

```diff
-     function MC() {
-       return Object.fromEntries(bC.B.map((CC => [(0, nC.Mb)(CC), gC(CC, [`${CC} Mob Spawner Block`])])))
+     function Hp(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 566. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32492-L32496` → after: `L15211-L15216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15211-L15216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15211-L15216) · [Before (L32492-L32496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32492-L32496)

```diff
-       const ZC = bC.j.includes(CC);
-       return {
-         altNames: zC,
-         showOnlyInSearch: ZC,
-         isDisabled: ZC ? qC : void 0
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 567. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32499-L32579` → after: `L15220-L15255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15220-L15255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15220-L15255) · [Before (L32499-L32579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32499-L32579)

```diff
-   },
-   37827: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => GC,
-       e: () => pC,
-       h: () => PC,
-       j: () => RC
-     });
-     var QC = ZC(590),
-       wC = ZC(600);
-     const bC = {
-       "Sun Panel": "Solar Panel",
-       "Shaft Hopper": "Forge Hopper"
-     };
-     const nC = {
-         ...bC,
- ... (65 more removed lines; see GitHub link above)
+ 
+     function ep(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? dp(Object(cp), !0).forEach((function(ip) {
+           jp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : dp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
+     }
+ 
+     function jp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+ ... (20 more added lines; see GitHub link above)
```

#### 568. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32582-L32583` → after: `L15258-L15338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15258-L15338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15258-L15338) · [Before (L32582-L32583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32582-L32583)

```diff
-         "Standing Noticeboard": "Noticeboard"
-       };
+         x: 0,
+         y: 0,
+         upperWidth: 0,
+         lowerWidth: 0,
+         height: 0,
+         isUpdateAnimationActive: !1,
+         animationBegin: 0,
+         animationDuration: 1500,
+         animationEasing: "ease"
+       },
+       Rp = function(pp) {
+         var ip = ep(ep({}, mp), pp),
+           cp = (0, Op.useRef)(),
+           op = tp((0, Op.useState)(-1), 2),
+           Ip = op[0],
+           Sp = op[1];
+ ... (65 more added lines; see GitHub link above)
```

#### 569. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32585-L32586` → after: `L15340-L15345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15340-L15345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15340-L15345) · [Before (L32585-L32586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32585-L32586)

```diff
-     function oC(CC, zC) {
-       return CC in fC ? fC[CC] : qC(CC, zC)
+     function Xp(pp) {
+       return Xp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Xp(pp)
```

#### 570. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32590-L32598` → after: `L15349-L15361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15349-L15361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15349-L15361) · [Before (L32590-L32598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32590-L32598)

```diff
-       if (CC in nC) return nC[CC];
-       const ZC = CC.indexOf("|");
-       if (-1 !== ZC) {
-         var QC;
-         const wC = null !== (QC = null === zC || void 0 === zC ? void 0 : zC.rootName) && void 0 !== QC ? QC : CC.substring(0, ZC);
-         if (wC in nC) {
-           const QC = zC ? zC.metaStr ? `|${zC.metaStr}` : "" : CC.substring(ZC);
-           return `${nC[wC]}${QC}`
-         }
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

#### 571. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32604-L32615` → after: `L15367-L15375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15367-L15375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15367-L15375) · [Before (L32604-L32615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32604-L32615)

```diff
-       if (!zC) return void(CC.amount = null);
-       const ZC = CC.amount;
-       null === ZC || void 0 === ZC ? CC.amount = 1 : Number.isInteger(ZC) || (CC.amount = function(CC) {
-         const zC = "number" === typeof CC || "string" === typeof CC || "boolean" === typeof CC ? Number(CC) : NaN;
-         return zC > 0 && zC !== 1 / 0 ? Math.max(1, Math.floor(zC)) : 0
-       }(ZC))
-     }
-     var WC = ZC(36897),
-       NC = ZC(37834),
-       MC = ZC(36708),
-       gC = ZC(184),
-       SC = ZC(37640);
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
+     }
```

#### 572. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32618` → after: `L15378-L15407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15378-L15407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15378-L15407) · [Before (L32618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32618)

```diff
-       return CC && JSON.parse(JSON.stringify(CC))
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Qp(Object(cp), !0).forEach((function(ip) {
+           Bp(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Qp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
+     }
+ 
+     function Bp(pp, ip, cp) {
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != Xp(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+ ... (14 more added lines; see GitHub link above)
```

#### 573. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32622` → after: `L15411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15411) · [Before (L32622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32622)

```diff
-       return (0, NC.d)(WC.m[CC], zC)
+       return Jp(Jp({}, ip), pp)
```

#### 574. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32624-L32875` → after: `L15413-L15430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15413-L15430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15413-L15430) · [Before (L32624-L32875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32624-L32875)

```diff
-     class GC {
-       constructor(CC, zC, ZC) {
-         this.MN = void 0, this.state = void 0, this.numSlots = void 0, this.items = void 0, this._selectedSlotI = 0, this.temporaryClone = null, this.updatesHeld = !1, this.heldUpdate = null, this.MN = CC, this.state = zC, this.numSlots = ZC, this.items = new Array(this.numSlots) … [truncated]
-       }
-       stringify() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items.length;
-         const ZC = [];
-         for (let wC = CC; wC < zC; wC++)
-           if (this.items[wC]) {
-             var QC;
-             const {
-               name: CC,
-               amount: zC,
-               attributes: bC
-             } = this.items[wC];
- ... (236 more removed lines; see GitHub link above)
+ 
+     function Tp(pp) {
+       var ip = pp.shapeType,
+         cp = pp.elementProps;
+       switch (ip) {
+         case "rectangle":
+           return Op.createElement(Pp.d, cp);
+         case "trapezoid":
+           return Op.createElement(Rp, cp);
+         case "sector":
+           return Op.createElement(qp.c, cp);
+         case "symbols":
+           if (function(pp) {
+               return "symbols" === pp
+             }(ip)) return Op.createElement(Cp.c, cp);
+           break;
+ ... (2 more added lines; see GitHub link above)
```

#### 575. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32880-L32885` → after: `L15435-L15462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15435-L15462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15435-L15462) · [Before (L32880-L32885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32880-L32885)

```diff
-       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-         ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-         QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wC.n;
-       return new GC(CC, AC(zC, (CC => {
-         null === ZC || void 0 === ZC || ZC(CC)
-       })), QC)
+       var ip, cp = pp.option,
+         op = pp.shapeType,
+         Sp = pp.propTransformer,
+         Lp = void 0 === Sp ? Np : Sp,
+         Dp = pp.activeClassName,
+         Ap = void 0 === Dp ? "recharts-active-shape" : Dp,
+         Pp = pp.isActive,
+         Wp = lp(pp, Ep);
+       if ((0, Op.isValidElement)(cp)) ip = (0, Op.cloneElement)(cp, Jp(Jp({}, Wp), function(pp) {
+         return (0, Op.isValidElement)(pp) ? pp.props : pp
+       }(cp)));
+       else if (Ip()(cp)) ip = cp(Wp);
+       else if (xp()(cp) && !Yp()(cp)) {
+         var yp = Lp(cp, Wp);
+         ip = Op.createElement(Tp, {
+           shapeType: op,
+ ... (12 more added lines; see GitHub link above)
```

#### 576. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32889-L32895` → after: `L15466-L15520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15466-L15520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15466-L15520) · [Before (L32889-L32895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32889-L32895)

```diff
-       return {
-         mH: CC,
-         selectedItem: null,
-         inventory: null,
-         opWrapper: null,
-         onInventoryUpdate: zC
-       }
+       return null != ip && "trapezoids" in pp.props
+     }
+ 
+     function hp(pp, ip) {
+       return null != ip && "sectors" in pp.props
+     }
+ 
+     function ap(pp, ip) {
+       return null != ip && "points" in pp.props
+     }
+ 
+     function np(pp, ip) {
+       var cp, Op, op = pp.x === (null === ip || void 0 === ip || null === (cp = ip.labelViewBox) || void 0 === cp ? void 0 : cp.x) || pp.x === ip.x,
+         Ip = pp.y === (null === ip || void 0 === ip || null === (Op = ip.labelViewBox) || void 0 === Op ? void 0 : Op.y) || pp.y === ip.y;
+       return op && Ip
+     }
+ ... (39 more added lines; see GitHub link above)
```

#### 577. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32898` → after: `L15523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15523) · [Before (L32898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32898)

```diff
-   38025: (CC, zC, ZC) => {
+   6368: (pp, ip, cp) => {
```

#### 578. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32900` → after: `L15525-L15529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15525-L15529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15525-L15529) · [Before (L32900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32900)

```diff
-       d: () => FC
+       c: () => ep,
+       d: () => vp,
+       e: () => jp,
+       i: () => Hp,
+       k: () => tp
```

#### 579. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L32902-L33085` → after: `L15531-L15551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15531-L15551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15531-L15551) · [Before (L32902-L33085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L32902-L33085)

```diff
-     var QC = ZC(590),
-       wC = ZC(184),
-       bC = ZC(38031),
-       nC = ZC(600),
-       fC = ZC(37827),
-       oC = ZC(36708),
-       qC = ZC(326);
-     class FC {
-       constructor(CC, zC, ZC) {
-         this.callbacks = ZC, this.MN = void 0, this.playerInventory = void 0, this.bQ = null, this.nQ = null, this.fQ = null, this.inCreative = !1, this.chestsWithUpdatesHeld = null, this.MN = CC, this.playerInventory = zC
-       }
-       chestOpened(CC, zC, ZC, QC) {
-         let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nC.n;
-         this.loadOpenChestFromStr(CC, wC), this.chestOpenedWithExistingInventory(this.bQ, zC, ZC, QC)
-       }
-       chestOpenedWithExistingInventory(CC, zC, ZC, QC) {
- ... (168 more removed lines; see GitHub link above)
+     var Op = cp(6375),
+       op = cp.n(Op),
+       Ip = cp(6383),
+       Sp = cp.n(Ip),
+       xp = cp(6266),
+       Lp = cp(5588),
+       Yp = cp(5299),
+       Dp = cp(6402);
+ 
+     function Ap(pp) {
+       return Ap = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Ap(pp)
+     }
+ ... (5 more added lines; see GitHub link above)
```

#### 580. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33087-L33095` → after: `L15553-L15561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15553-L15561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15553-L15561) · [Before (L33087-L33095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33087-L33095)

```diff
-       loadFromString(CC) {
-         const {
-           wQ: zC,
-           bQ: ZC,
-           nQ: QC,
-           fQ: wC,
-           oQ: bC
-         } = CC;
-         this.playerInventory.loadFromString(zC), ZC ? (this.loadOpenChestFromStr(ZC, null !== bC && void 0 !== bC ? bC : nC.n), this.nQ = QC || null, this.fQ = JSON.parse(wC) || null) : (this.bQ = null, this.nQ = null, this.fQ = null)
+     }
+ 
+     function Wp(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 581. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33097-L33102` → after: `L15563-L15573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15563-L15573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15563-L15573) · [Before (L33097-L33102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33097-L33102)

```diff
-       loadOpenChestFromStr(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nC.n;
-         return this.bQ = (0, fC.j)(this.MN, this.playerInventory.state.mH, (CC => {
-           var zC, ZC;
-           null === (zC = (ZC = this.callbacks).onChestUpdate) || void 0 === zC || zC.call(ZC, CC)
-         }), zC), this.holdChestUpdates(), this.bQ.loadFromString(CC), this.bQ
+       return cp
+     }
+ 
+     function yp(pp) {
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Wp(Object(cp), !0).forEach((function(ip) {
+           Up(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Wp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 582. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33105-L33202` → after: `L15577-L15638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15577-L15638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15577-L15638) · [Before (L33105-L33202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33105-L33202)

```diff
-   },
-   38297: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => pC,
-       g: () => gC,
-       h: () => MC,
-       j: () => FC,
-       n: () => NC,
-       q: () => WC,
-       r: () => nC
-     });
-     var QC = ZC(1806),
-       wC = ZC(3171),
-       bC = ZC(2166);
-     const nC = 430,
-       fC = .5,
- ... (82 more removed lines; see GitHub link above)
+ 
+     function Up(pp, ip, cp) {
+       return (ip = wp(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
+     }
+ 
+     function wp(pp) {
+       var ip = function(pp, ip) {
+         if ("object" != Ap(pp) || !pp) return pp;
+         var cp = pp[Symbol.toPrimitive];
+         if (void 0 !== cp) {
+           var Op = cp.call(pp, ip || "default");
+ ... (46 more added lines; see GitHub link above)
```

#### 583. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33206-L33219` → after: `L15642-L15696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15642-L15696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15642-L15696) · [Before (L33206-L33219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33206-L33219)

```diff
-         },
-         Camel: {
-           handler: "SaddledMob",
-           meshMetadata: {
-             type: "fourLeggedMesh",
-             isClientAuth: !1,
-             walkingLegSwingDuration: 420,
-             defaultRotationsPerSecond: fC,
-             childrenNodeParams: qC,
-             meshGroupsWithDifferentAtlases: {
-               Saddle: {
-                 numTexturesInAtlas: 1
-               }
-             }
+           Dp = "xAxis" === Op ? [cp.left + (kp.left || 0) + (Lp || 0), cp.left + cp.width - (kp.right || 0) - (Lp || 0)] : "yAxis" === Op ? "horizontal" === Ap ? [cp.top + cp.height - (kp.bottom || 0), cp.top + (kp.top || 0)] : [cp.top + (kp.top || 0) + (Lp || 0), cp.top + cp.hei … [truncated]
+           var Bp = (0, xp.pb)(Hp, op, vp),
+             Np = Bp.scale,
+             Tp = Bp.realScaleType;
+           Np.domain(ep).range(Dp), (0, xp.k)(Np);
+           var fp = (0, xp.bb)(Np, yp(yp({}, Hp), {}, {
+             realScaleType: Tp
+           }));
+           "xAxis" === Op ? (tp = "top" === dp && !mp || "bottom" === dp && mp, Pp = cp.left, Wp = wp[qp] - tp * Hp.height) : "yAxis" === Op && (tp = "left" === dp && !mp || "right" === dp && mp, Pp = wp[qp] - tp * Hp.width, Wp = cp.top);
+           var bp = yp(yp(yp({}, Hp), fp), {}, {
+             realScaleType: Tp,
+             x: Pp,
+             y: Wp,
+             scale: Np,
+             width: "xAxis" === Op ? cp.width : Hp.width,
+             height: "yAxis" === Op ? cp.height : Hp.height
+ ... (39 more added lines; see GitHub link above)
```

#### 584. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33221-L33232` → after: `L15698-L15701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15698-L15701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15698-L15701) · [Before (L33221-L33232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33221-L33232)

```diff
-         },
-         Slime: {
-           handler: "Mob",
-           meshMetadata: {
-             type: "fourLeggedMesh",
-             isClientAuth: !1,
-             walkingLegSwingDuration: 300,
-             walkingLegSwingAngle: 0,
-             defaultRotationsPerSecond: .7,
-             childrenNodeParams: [],
-             modelYRotationOffset: Math.PI / 2,
-             disableLighting: !0
+         }, {
+           key: "range",
+           get: function() {
+             return this.scale.range
```

#### 585. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33234-L33252` → after: `L15703-L15706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15703-L15706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15703-L15706) · [Before (L33234-L33252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33234-L33252)

```diff
-         },
-         "Cave Golem": GC(),
-         "Draugr Zombie": RC(),
-         "Draugr Skeleton": AC(),
-         "Frost Golem": GC("Cave Golem"),
-         "Frost Zombie": RC("Draugr Zombie"),
-         "Frost Skeleton": AC("Draugr Skeleton"),
-         "Draugr Knight": {
-           handler: "Mob",
-           meshMetadata: {
-             type: "humanoidMesh",
-             isClientAuth: !1,
-             walkingLegSwingDuration: 430,
-             defaultRotationsPerSecond: fC,
-             childrenNodeParams: [{
-               nodeName: "HeadMesh",
- ... (3 more removed lines; see GitHub link above)
+         }, {
+           key: "rangeMin",
+           get: function() {
+             return this.range()[0]
```

#### 586. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33254-L33269` → after: `L15708-L15711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15708-L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15708-L15711) · [Before (L33254-L33269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33254-L33269)

```diff
-         },
-         Wolf: xC(),
-         Bear: JC(),
-         Deer: {
-           handler: "Deer",
-           meshMetadata: {
-             type: "fourLeggedMesh",
-             isClientAuth: !1,
-             walkingLegSwingDuration: 350,
-             defaultRotationsPerSecond: fC,
-             childrenNodeParams: qC,
-             meshGroupsWithDifferentAtlases: {
-               Antlers: {
-                 numTexturesInAtlas: 1
-               }
-             }
+         }, {
+           key: "rangeMax",
+           get: function() {
+             return this.range()[1]
```

#### 587. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33271-L33294` → after: `L15713-L15716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15713-L15716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15713-L15716) · [Before (L33271-L33294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33271-L33294)

```diff
-         },
-         Stag: IC(),
-         "Gold Watermelon Stag": {
-           handler: "SaddledMob",
-           meshMetadata: {
-             type: "fourLeggedMesh",
-             isClientAuth: !1,
-             walkingLegSwingDuration: 350,
-             defaultRotationsPerSecond: fC,
-             childrenNodeParams: qC,
-             lifeformTypeForModelOverride: "Stag"
-           },
-           armour: {
-             atlasTexture: "Gold Watermelon Stag_Armour",
-             numTexturesInAtlas: 1,
-             textureOffsets: {
- ... (8 more removed lines; see GitHub link above)
+         }, {
+           key: "bandwidth",
+           get: function() {
+             return this.scale.bandwidth
```

#### 588. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33296-L33308` → after: `L15718-L15734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15718-L15734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15718-L15734) · [Before (L33296-L33308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33296-L33308)

```diff
-         },
-         Gorilla: iC(),
-         Wildcat: {
-           handler: "CollaredMob",
-           meshMetadata: {
-             type: "fourLeggedMesh",
-             isClientAuth: !1,
-             walkingLegSwingDuration: 350,
-             defaultRotationsPerSecond: fC,
-             childrenNodeParams: qC,
-             meshGroupsWithDifferentAtlases: {
-               Collar: {
-                 numTexturesInAtlas: "default"
+         }, {
+           key: "apply",
+           value: function(pp) {
+             var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+               cp = ip.bandAware,
+               Op = ip.position;
+             if (void 0 !== pp) {
+               if (Op) switch (Op) {
+                 case "start":
+                 default:
+                   return this.scale(pp);
+                 case "middle":
+                   var op = this.bandwidth ? this.bandwidth() / 2 : 0;
+                   return this.scale(pp) + op;
+                 case "end":
+                   var Ip = this.bandwidth ? this.bandwidth() : 0;
+ ... (1 more added lines; see GitHub link above)
```

#### 589. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33310-L33313` → after: `L15736-L15740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15736-L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15736-L15740) · [Before (L33310-L33313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33310-L33313)

```diff
-             },
-             heldItemPositionParams: {
-               rotation: [0, Math.PI, 0],
-               gunOffset: [0, 0, -1]
+               if (cp) {
+                 var Sp = this.bandwidth ? this.bandwidth() / 2 : 0;
+                 return this.scale(pp) + Sp
+               }
+               return this.scale(pp)
```

#### 590. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33317-L33637` → after: `L15778-L15781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15778-L15781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15778-L15781) · [Before (L33317-L33637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33317-L33637)

```diff
-         "Magma Golem": GC("Cave Golem"),
-         "Draugr Huntress": RC("Draugr Zombie"),
-         "Spirit Golem": GC("Cave Golem"),
-         "Spirit Wolf": xC("Wolf"),
-         "Spirit Bear": JC("Bear"),
-         "Spirit Stag": IC("Stag"),
-         "Spirit Gorilla": iC("Gorilla"),
-         "Draugr Warper": {
-           handler: "Mob",
-           meshMetadata: {
-             type: "humanoidMesh",
-             isClientAuth: !1,
-             walkingLegSwingDuration: 500,
-             defaultRotationsPerSecond: .35,
-             disableLighting: !0,
-             childrenNodeParams: [{
- ... (305 more removed lines; see GitHub link above)
+         isInRange: function(pp) {
+           return Sp()(pp, (function(pp, cp) {
+             return ip[cp].isInRange(pp)
+           }))
```

#### 591. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33639` → after: `L15783-L15862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15783-L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15783-L15862) · [Before (L33639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33639)

```diff
-       };
+       })
+     };
+     var jp = function(pp) {
+       var ip = pp.width,
+         cp = pp.height,
+         Op = function(pp) {
+           return (pp % 180 + 180) % 180
+         }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
+         op = Op * Math.PI / 180,
+         Ip = Math.atan(cp / ip),
+         Sp = op > Ip && op < Math.PI - Ip ? cp / Math.sin(op) : ip / Math.cos(op);
+       return Math.abs(Sp)
+     }
+   },
+   6266: (pp, ip, cp) => {
+     cp.d(ip, {
+ ... (64 more added lines; see GitHub link above)
```

#### 592. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33641-L33657` → after: `L15864-L15909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15864-L15909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15864-L15909) · [Before (L33641-L33657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33641-L33657)

```diff
-     function PC(CC) {
-       return {
-         handler: "Mob",
-         meshMetadata: {
-           type: "humanoidMesh",
-           isClientAuth: !1,
-           walkingLegSwingDuration: 430,
-           defaultRotationsPerSecond: .35,
-           childrenNodeParams: [{
-             nodeName: "HeadMesh",
-             softTolerance: FC,
-             hardTolerance: null,
-             rotationsPerSecond: fC
-           }],
-           lifeformTypeForModelOverride: CC
-         }
- ... (1 more removed lines; see GitHub link above)
+     function Lp(pp, ip, cp) {
+       const Op = (ip - pp) / Math.max(0, cp),
+         op = Math.floor(Math.log10(Op)),
+         Yp = Op / Math.pow(10, op),
+         Dp = Yp >= Ip ? 10 : Yp >= Sp ? 5 : Yp >= xp ? 2 : 1;
+       let Ap, Pp, Wp;
+       return op < 0 ? (Wp = Math.pow(10, -op) / Dp, Ap = Math.round(pp * Wp), Pp = Math.round(ip * Wp), Ap / Wp < pp && ++Ap, Pp / Wp > ip && --Pp, Wp = -Wp) : (Wp = Math.pow(10, op) * Dp, Ap = Math.round(pp / Wp), Pp = Math.round(ip / Wp), Ap * Wp < pp && ++Ap, Pp * Wp > ip && - … [truncated]
+     }
+ 
+     function Yp(pp, ip, cp) {
+       if (!((cp = +cp) > 0)) return [];
+       if ((pp = +pp) === (ip = +ip)) return [pp];
+       const Op = ip < pp,
+         [op, Ip, Sp] = Op ? Lp(ip, pp, cp) : Lp(pp, ip, cp);
+       if (!(Ip >= op)) return [];
+       const xp = Ip - op + 1,
+ ... (30 more added lines; see GitHub link above)
```

#### 593. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33661-L33679` → after: `L15913-L15944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15913-L15944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15913-L15944) · [Before (L33661-L33679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33661-L33679)

```diff
-       return {
-         handler: "Mob",
-         meshMetadata: {
-           type: "humanoidMesh",
-           isClientAuth: !1,
-           walkingLegSwingDuration: 430,
-           defaultRotationsPerSecond: .35,
-           childrenNodeParams: [{
-             nodeName: "HeadMesh",
-             softTolerance: (0, QC.j)(60),
-             hardTolerance: null,
-             rotationsPerSecond: fC
-           }, {
-             nodeName: "LowerBody",
-             softTolerance: (0, QC.j)(60),
-             hardTolerance: null,
- ... (3 more removed lines; see GitHub link above)
+       let ip, cp, Op;
+ 
+       function op(pp, Op) {
+         let op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           Ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.length;
+         if (op < Ip) {
+           if (0 !== ip(Op, Op)) return Ip;
+           do {
+             const ip = op + Ip >>> 1;
+             cp(pp[ip], Op) < 0 ? op = ip + 1 : Ip = ip
+           } while (op < Ip)
+         }
+         return op
+       }
+       return 2 !== pp.length ? (ip = Pp, cp = (ip, cp) => Pp(pp(ip), cp), Op = (ip, cp) => pp(ip) - cp) : (ip = pp === Pp || pp === Wp ? pp : Up, cp = pp, Op = pp), {
+         left: op,
+ ... (16 more added lines; see GitHub link above)
```

#### 594. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33685-L33700` → after: `L15954-L16139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR15954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L15954-L16139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L15954-L16139) · [Before (L33685-L33700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33685-L33700)

```diff
-       return {
-         handler: "Mob",
-         meshMetadata: {
-           type: "humanoidMesh",
-           isClientAuth: !1,
-           walkingLegSwingDuration: 490,
-           defaultRotationsPerSecond: fC,
-           childrenNodeParams: [{
-             nodeName: "HeadMesh",
-             softTolerance: FC,
-             hardTolerance: null
-           }],
-           meshNamesWithVisibleBackFaces: ["BodyMesh"],
-           lifeformTypeForModelOverride: CC
-         }
-       }
+       return null === pp ? NaN : +pp
+     }
+     const vp = yp(Pp),
+       tp = vp.right,
+       Hp = (vp.left, yp(wp).center, tp);
+ 
+     function dp(pp, ip, cp) {
+       pp.prototype = ip.prototype = cp, cp.constructor = pp
+     }
+ 
+     function ep(pp, ip) {
+       var cp = Object.create(pp.prototype);
+       for (var Op in ip) cp[Op] = ip[Op];
+       return cp
+     }
+ 
+ ... (170 more added lines; see GitHub link above)
```

#### 595. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33704-L33719` → after: `L16143-L16144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16143-L16144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16143-L16144) · [Before (L33704-L33719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33704-L33719)

```diff
-       return {
-         handler: "Mob",
-         meshMetadata: {
-           type: "humanoidMesh",
-           isClientAuth: !1,
-           walkingLegSwingDuration: 490,
-           defaultRotationsPerSecond: fC,
-           childrenNodeParams: [{
-             nodeName: "HeadMesh",
-             softTolerance: FC,
-             hardTolerance: null
-           }],
-           meshNamesWithVisibleBackFaces: ["BodyMesh"],
-           lifeformTypeForModelOverride: CC
-         }
-       }
+       var ip, cp;
+       return pp = (pp + "").trim().toLowerCase(), (ip = Cp.exec(pp)) ? (cp = ip[1].length, ip = parseInt(ip[1], 16), 6 === cp ? hp(ip) : 3 === cp ? new Fp(ip >> 8 & 15 | ip >> 4 & 240, ip >> 4 & 15 | 240 & ip, (15 & ip) << 4 | 15 & ip, 1) : 8 === cp ? ap(ip >> 24 & 255, ip >> 16  … [truncated]
```

#### 596. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33723-L33741` → after: `L16148-L16170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16148-L16170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16148-L16170) · [Before (L33723-L33741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33723-L33741)

```diff
-       return {
-         handler: "CollaredMob",
-         meshMetadata: {
-           type: "fourLeggedMesh",
-           isClientAuth: !1,
-           walkingLegSwingDuration: 350,
-           defaultRotationsPerSecond: fC,
-           childrenNodeParams: qC,
-           meshGroupsWithDifferentAtlases: {
-             Collar: {
-               numTexturesInAtlas: "default"
-             }
-           },
-           lifeformTypeForModelOverride: CC,
-           heldItemPositionParams: {
-             itemOffset: [0, -.1, 0]
- ... (3 more removed lines; see GitHub link above)
+       return new Fp(pp >> 16 & 255, pp >> 8 & 255, 255 & pp, 1)
+     }
+ 
+     function ap(pp, ip, cp, Op) {
+       return Op <= 0 && (pp = ip = cp = NaN), new Fp(pp, ip, cp, Op)
+     }
+ 
+     function np(pp, ip, cp, Op) {
+       return 1 === arguments.length ? ((op = pp) instanceof jp || (op = bp(op)), op ? new Fp((op = op.rgb()).r, op.g, op.b, op.opacity) : new Fp) : new Fp(pp, ip, cp, null == Op ? 1 : Op);
+       var op
+     }
+ 
+     function Fp(pp, ip, cp, Op) {
+       this.r = +pp, this.g = +ip, this.b = +cp, this.opacity = +Op
+     }
+ 
+ ... (7 more added lines; see GitHub link above)
```

#### 597. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33745-L33763` → after: `L16174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16174) · [Before (L33745-L33763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33745-L33763)

```diff
-       return {
-         handler: "SaddledMob",
-         meshMetadata: {
-           type: "fourLeggedMesh",
-           isClientAuth: !1,
-           walkingLegSwingDuration: 350,
-           defaultRotationsPerSecond: fC,
-           childrenNodeParams: qC,
-           lifeformTypeForModelOverride: CC,
-           meshGroupsWithDifferentAtlases: {
-             Saddle: {
-               numTexturesInAtlas: 1
-             }
-           },
-           heldItemPositionParams: {
-             rotation: [0, Math.PI, 0]
- ... (3 more removed lines; see GitHub link above)
+       return isNaN(pp) ? 1 : Math.max(0, Math.min(1, pp))
```

#### 598. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33767-L33782` → after: `L16178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16178) · [Before (L33767-L33782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33767-L33782)

```diff
-       return {
-         handler: "SaddledMob",
-         meshMetadata: {
-           type: "fourLeggedMesh",
-           isClientAuth: !1,
-           walkingLegSwingDuration: 350,
-           defaultRotationsPerSecond: fC,
-           childrenNodeParams: qC,
-           lifeformTypeForModelOverride: CC,
-           meshGroupsWithDifferentAtlases: {
-             Saddle: {
-               numTexturesInAtlas: 1
-             }
-           }
-         }
-       }
+       return Math.max(0, Math.min(255, Math.round(pp) || 0))
```

#### 599. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33786-L33808` → after: `L16182-L16201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16182-L16201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16182-L16201) · [Before (L33786-L33808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33786-L33808)

```diff
-       return {
-         handler: "SaddledMob",
-         meshMetadata: {
-           type: "humanoidMesh",
-           isClientAuth: !1,
-           walkingLegSwingDuration: 390,
-           defaultRotationsPerSecond: fC,
-           childrenNodeParams: [{
-             nodeName: "HeadMesh",
-             softTolerance: FC,
-             hardTolerance: null
-           }],
-           heldItemPositionParams: {
-             itemOffset: [0, .3, 0]
-           },
-           lifeformTypeForModelOverride: CC,
- ... (7 more removed lines; see GitHub link above)
+       return ((pp = Zp(pp)) < 16 ? "0" : "") + pp.toString(16)
+     }
+ 
+     function sp(pp, ip, cp, Op) {
+       return Op <= 0 ? pp = ip = cp = NaN : cp <= 0 || cp >= 1 ? pp = ip = NaN : ip <= 0 && (pp = NaN), new Vp(pp, ip, cp, Op)
+     }
+ 
+     function Kp(pp) {
+       if (pp instanceof Vp) return new Vp(pp.h, pp.s, pp.l, pp.opacity);
+       if (pp instanceof jp || (pp = bp(pp)), !pp) return new Vp;
+       if (pp instanceof Vp) return pp;
+       var ip = (pp = pp.rgb()).r / 255,
+         cp = pp.g / 255,
+         Op = pp.b / 255,
+         op = Math.min(ip, cp, Op),
+         Ip = Math.max(ip, cp, Op),
+ ... (4 more added lines; see GitHub link above)
```

#### 600. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33835-L33837` → after: `L16204-L16205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16204-L16205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16204-L16205) · [Before (L33835-L33837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33835-L33837)

```diff
-     function wC(CC) {
-       var zC;
-       return null !== (zC = nC[CC]) && void 0 !== zC ? zC : null
+     function Vp(pp, ip, cp, Op) {
+       this.h = +pp, this.s = +ip, this.l = +cp, this.opacity = +Op
```

#### 601. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33892-L33894` → after: `L16209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16209) · [Before (L33892-L33894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33892-L33894)

```diff
-       const zC = {};
-       for (const ZC of CC) oC(ZC, zC);
-       return zC
+       return (pp = (pp || 0) % 360) < 0 ? pp + 360 : pp
```

#### 602. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33898-L33906` → after: `L16213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16213) · [Before (L33898-L33906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33898-L33906)

```diff
-       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       if ("string" === typeof CC) return;
-       const {
-         nodeName: ZC,
-         collapsesTo: QC,
-         children: wC
-       } = CC;
-       if (QC && (zC[ZC] = QC), wC)
-         for (const bC of wC) oC(bC, zC)
+       return Math.max(0, Math.min(1, pp || 0))
```

#### 603. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L33908-L34540` → after: `L16215-L16227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16215-L16227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16215-L16227) · [Before (L33908-L34540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L33908-L34540)

```diff
-   },
-   38292: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => wC
-     });
-     const QC = {
-       Pig: {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
-       },
-       Cow: {
-         default: {
-           atlasIdx1: 0,
- ... (617 more removed lines; see GitHub link above)
+ 
+     function Oi(pp, ip, cp) {
+       return 255 * (pp < 60 ? ip + (cp - ip) * pp / 60 : pp < 180 ? cp : pp < 240 ? ip + (cp - ip) * (240 - pp) / 60 : ip)
+     }
+ 
+     function oi(pp, ip, cp, Op, op) {
+       var Ip = pp * pp,
+         Sp = Ip * pp;
+       return ((1 - 3 * pp + 3 * Ip - Sp) * ip + (4 - 6 * Ip + 3 * Sp) * cp + (1 + 3 * pp + 3 * Ip - 3 * Sp) * Op + Sp * op) / 6
+     }
+     dp(jp, bp, {
+       copy(pp) {
+         return Object.assign(new this.constructor, this, pp)
```

#### 604. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34542-L34547` → after: `L16229-L16230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16229-L16230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16229-L16230) · [Before (L34542-L34547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34542-L34547)

```diff
-       "Moonstone Guardian": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       displayable() {
+         return this.rgb().displayable()
```

#### 605. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34549-L34569` → after: `L16232-L16235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16232-L16235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16232-L16235) · [Before (L34549-L34569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34549-L34569)

```diff
-       "Tiki Terror": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         },
-         titan: {
-           atlasIdx1: 1,
-           atlasIdx2: 1,
-           atlasIdx3: 1
-         },
-         tormentor: {
-           atlasIdx1: 2,
-           atlasIdx2: 2,
-           atlasIdx3: 2
-         },
- ... (5 more removed lines; see GitHub link above)
+       hex: Tp,
+       formatHex: Tp,
+       formatHex8: function() {
+         return this.rgb().formatHex8()
```

#### 606. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34571-L34577` → after: `L16237-L16238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16237-L16238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16237-L16238) · [Before (L34571-L34577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34571-L34577)

```diff
-       NPC: null,
-       67: {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       formatHsl: function() {
+         return Kp(this).formatHsl()
```

#### 607. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34579-L34584` → after: `L16240-L16244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16240-L16244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16240-L16244) · [Before (L34579-L34584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34579-L34584)

```diff
-       "Bobino Musculino": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       formatRgb: fp,
+       toString: fp
+     }), dp(Fp, np, ep(jp, {
+       brighter(pp) {
+         return pp = null == pp ? mp : Math.pow(mp, pp), new Fp(this.r * pp, this.g * pp, this.b * pp, this.opacity)
```

#### 608. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34586-L34591` → after: `L16246-L16247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16246-L16247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16246-L16247) · [Before (L34586-L34591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34586-L34591)

```diff
-       "Capitano Explovissimo": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       darker(pp) {
+         return pp = null == pp ? kp : Math.pow(kp, pp), new Fp(this.r * pp, this.g * pp, this.b * pp, this.opacity)
```

#### 609. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34593-L34598` → after: `L16249-L16250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16249-L16250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16249-L16250) · [Before (L34593-L34598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34593-L34598)

```diff
-       "Desert Fennec": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       rgb() {
+         return this
```

#### 610. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34600-L34605` → after: `L16252-L16253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16252-L16253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16252-L16253) · [Before (L34600-L34605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34600-L34605)

```diff
-       "Armour Collector": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       clamp() {
+         return new Fp(Zp(this.r), Zp(this.g), Zp(this.b), rp(this.opacity))
```

#### 611. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34607-L34612` → after: `L16255-L16256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16255-L16256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16255-L16256) · [Before (L34607-L34612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34607-L34612)

```diff
-       "Furnace Knight": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       displayable() {
+         return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
```

#### 612. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34614-L34619` → after: `L16258-L16261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16258-L16261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16258-L16261) · [Before (L34614-L34619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34614-L34619)

```diff
-       "Lil Knight": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       hex: gp,
+       formatHex: gp,
+       formatHex8: function() {
+         return `#${zp(this.r)}${zp(this.g)}${zp(this.b)}${zp(255*(isNaN(this.opacity)?1:this.opacity))}`
```

#### 613. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34621-L34626` → after: `L16263-L16269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16263-L16269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16263-L16269) · [Before (L34621-L34626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34621-L34626)

```diff
-       "Glass Gremlin": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       formatRgb: Gp,
+       toString: Gp
+     })), dp(Vp, (function(pp, ip, cp, Op) {
+       return 1 === arguments.length ? Kp(pp) : new Vp(pp, ip, cp, null == Op ? 1 : Op)
+     }), ep(jp, {
+       brighter(pp) {
+         return pp = null == pp ? mp : Math.pow(mp, pp), new Vp(this.h, this.s, this.l * pp, this.opacity)
```

#### 614. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34628-L34633` → after: `L16271-L16272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16271-L16272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16271-L16272) · [Before (L34628-L34633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34628-L34633)

```diff
-       "Glass Bro": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       darker(pp) {
+         return pp = null == pp ? kp : Math.pow(kp, pp), new Vp(this.h, this.s, this.l * pp, this.opacity)
```

#### 615. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34635-L34640` → after: `L16274-L16280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16274-L16280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16274-L16280) · [Before (L34635-L34640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34635-L34640)

```diff
-       "Lord Vulcan": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       rgb() {
+         var pp = this.h % 360 + 360 * (this.h < 0),
+           ip = isNaN(pp) || isNaN(this.s) ? 0 : this.s,
+           cp = this.l,
+           Op = cp + (cp < .5 ? cp : 1 - cp) * ip,
+           op = 2 * cp - Op;
+         return new Fp(Oi(pp >= 240 ? pp - 240 : pp + 120, op, Op), Oi(pp, op, Op), Oi(pp < 120 ? pp + 240 : pp - 120, op, Op), this.opacity)
```

#### 616. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34642-L34647` → after: `L16282-L16283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16282-L16283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16282-L16283) · [Before (L34642-L34647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34642-L34647)

```diff
-       Zombie: {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       clamp() {
+         return new Vp(ii(this.h), ci(this.s), ci(this.l), rp(this.opacity))
```

#### 617. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34649-L34654` → after: `L16285-L16286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16285-L16286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16285-L16286) · [Before (L34649-L34654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34649-L34654)

```diff
-       Skeleton: {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
-         }
+       displayable() {
+         return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
```

#### 618. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34656-L34660` → after: `L16288-L16325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16288-L16325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16288-L16325) · [Before (L34656-L34660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34656-L34660)

```diff
-       Mummy: {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
+       formatHsl() {
+         const pp = rp(this.opacity);
+         return `${1===pp?"hsl(":"hsla("}${ii(this.h)}, ${100*ci(this.s)}%, ${100*ci(this.l)}%${1===pp?")":`, ${pp})`}`
+       }
+     }));
+     const Ii = pp => () => pp;
+ 
+     function Si(pp, ip) {
+       return function(cp) {
+         return pp + cp * ip
+       }
+     }
+ 
+     function xi(pp) {
+       return 1 === (pp = +pp) ? Li : function(ip, cp) {
+         return cp - ip ? function(pp, ip, cp) {
+ ... (22 more added lines; see GitHub link above)
```

#### 619. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34662-L34667` → after: `L16327-L16383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16327-L16383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16327-L16383) · [Before (L34662-L34667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34662-L34667)

```diff
-       },
-       Scorpion: {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
+       }
+       return Op.gamma = pp, Op
+     }(1);
+ 
+     function Di(pp) {
+       return function(ip) {
+         var cp, Op, op = ip.length,
+           Ip = new Array(op),
+           Sp = new Array(op),
+           xp = new Array(op);
+         for (cp = 0; cp < op; ++cp) Op = np(ip[cp]), Ip[cp] = Op.r || 0, Sp[cp] = Op.g || 0, xp[cp] = Op.b || 0;
+         return Ip = pp(Ip), Sp = pp(Sp), xp = pp(xp), Op.opacity = 1,
+           function(pp) {
+             return Op.r = Ip(pp), Op.g = Sp(pp), Op.b = xp(pp), Op + ""
+           }
+       }
+ ... (41 more added lines; see GitHub link above)
```

#### 620. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34669-L34674` → after: `L16385-L16390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16385-L16390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16385-L16390) · [Before (L34669-L34674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34669-L34674)

```diff
-       },
-       Vulcanite: {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
+     }
+ 
+     function Wi(pp, ip) {
+       return pp = +pp, ip = +ip,
+         function(cp) {
+           return pp * (1 - cp) + ip * cp
```

#### 621. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34676-L34681` → after: `L16392-L16418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16392-L16418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16392-L16418) · [Before (L34676-L34681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34676-L34681)

```diff
-       },
-       "Evil Tome": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
+     }
+ 
+     function yi(pp, ip) {
+       var cp, Op = {},
+         op = {};
+       for (cp in null !== pp && "object" === typeof pp || (pp = {}), null !== ip && "object" === typeof ip || (ip = {}), ip) cp in pp ? Op[cp] = Hi(pp[cp], ip[cp]) : op[cp] = ip[cp];
+       return function(pp) {
+         for (cp in Op) op[cp] = Op[cp](pp);
+         return op
+       }
+     }
+     var Ui = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
+       wi = new RegExp(Ui.source, "g");
+ 
+     function vi(pp, ip) {
+       var cp, Op, op, Ip = Ui.lastIndex = wi.lastIndex = 0,
+ ... (11 more added lines; see GitHub link above)
```

#### 622. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34683-L34688` → after: `L16420-L16422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16420-L16422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16420-L16422) · [Before (L34683-L34688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34683-L34688)

```diff
-       },
-       "Magma Toad": {
-         default: {
-           atlasIdx1: 0,
-           atlasIdx2: 0,
-           atlasIdx3: 0
+       }(Lp[0].x) : function(pp) {
+         return function() {
+           return pp
```

#### 623. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34691` → after: `L16438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16438) · [Before (L34691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34691)

```diff
-     };
+     }
```

#### 624. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34694` → after: `L16441-L16442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16441-L16442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16441-L16442) · [Before (L34694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34694)

```diff
-       return QC[CC][zC]
+       var cp, Op, op = typeof ip;
+       return null == ip || "boolean" === op ? Ii(ip) : ("number" === op ? Wi : "string" === op ? (cp = bp(ip)) ? (ip = cp, Yi) : vi : ip instanceof bp ? Yi : ip instanceof Date ? Pi : (Op = ip, !ArrayBuffer.isView(Op) || Op instanceof DataView ? Array.isArray(ip) ? Ai : "function … [truncated]
```

#### 625. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34716-L34774` → after: `L16446-L16450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16446-L16450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16446-L16450) · [Before (L34716-L34774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34716-L34774)

```diff
-       const ZC = [0, 0, 0];
-       return (0, nC.j)((QC => {
-         const wC = zC(),
-           bC = CC();
-         return QC === bC.JR.eT(bC.qE) ? function(CC, zC) {
-           const ZC = aC(CC, zC);
-           for (let QC = 0; QC < ZC.length; QC++) {
-             const zC = ZC[QC];
-             if (!CC.Gy(zC[0], zC[1], zC[2])) return !0
-           }
-           return !1
-         }(wC, QC) : (ZC[0] = Math.floor((QC.wN.base[0] + QC.wN.max[0]) / 2), ZC[1] = Math.floor(QC.wN.base[1]), ZC[2] = Math.floor((QC.wN.base[2] + QC.wN.max[2]) / 2), wC.lB(ZC, ZC), !wC.Gy(ZC[0], ZC[1], ZC[2]))
-       }), "client")
-     }
-     const qC = .05,
-       FC = .2,
- ... (43 more removed lines; see GitHub link above)
+       return pp = +pp, ip = +ip,
+         function(cp) {
+           return Math.round(pp * (1 - cp) + ip * cp)
+         }
+     }
```

#### 626. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34777-L34778` → after: `L16453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16453) · [Before (L34777-L34778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34777-L34778)

```diff
-       const zC = dC[CC];
-       return 1 === zC || 2 === zC ? 1 === zC : "trapdoor" === wC.g[CC].model
+       return +pp
```

#### 627. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34782-L34810` → after: `L16458-L16468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16458-L16468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16458-L16468) · [Before (L34782-L34810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34782-L34810)

```diff
-       const zC = CC.qM;
-       vC = zC;
-       const ZC = iC.length;
-       eC = new Uint8Array(ZC), hC = new Int32Array(ZC), KC = new Int8Array(ZC), YC = new Uint8Array(ZC);
-       for (let QC = 0; QC < ZC; QC++) {
-         if (0 !== QC && void 0 === zC.metadatas[QC]) continue;
-         const ZC = CC.getMetaInfo(QC),
-           wC = null === ZC || void 0 === ZC ? void 0 : ZC.rot;
-         ZC && Number.isInteger(ZC.rootId) && !(Math.abs(ZC.rootId) > 2147483647) && (null == wC || Number.isInteger(wC) && wC >= 0 && wC <= 127) && (eC[QC] = 1, hC[QC] = ZC.rootId, KC[QC] = null !== wC && void 0 !== wC ? wC : 0, YC[QC] = ZC.open ? 1 : 0)
-       }
-     }
-     const EC = [!1, !1, !1],
-       lC = [0, 0, 0],
-       XC = [0, 0, 0],
-       cC = [0, 0, 0],
-       uC = [0, 0, 0],
- ... (13 more removed lines; see GitHub link above)
+       return pp
+     }
+ 
+     function ki(pp, ip) {
+       return (ip -= pp = +pp) ? function(cp) {
+         return (cp - pp) / ip
+       } : (cp = isNaN(ip) ? NaN : .5, function() {
+         return cp
+       });
+       var cp
+     }
```

#### 628. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34813-L34818` → after: `L16471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16471) · [Before (L34813-L34818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34813-L34818)

```diff
-       CC.qM !== vC && HC(CC);
-       const wC = CC.MN.JR.lL(zC).DCC,
-         bC = CC.getPlayerReader(zC),
-         nC = aC(CC, ZC, FC, qC),
-         fC = CC.lB(wC, cC),
-         oC = fC[0],
+       var Op = pp[0],
```

#### 629. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34820-L34885` → after: `L16473-L16477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16473-L16477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16473-L16477) · [Before (L34820-L34885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34820-L34885)

```diff
-         NC = fC[2],
-         MC = WC + QC.f.Dp,
-         gC = .5 * (ZC.wN.max[0] - ZC.wN.base[0]),
-         SC = 1e-4,
-         GC = gC - SC,
-         dC = gC + .25,
-         sC = gC + FC;
-       let TC = 0,
-         tC = 0,
-         DC = 0;
-       EC[0] = !1, EC[1] = !1, EC[2] = !1, XC[0] = 0, XC[1] = 0, XC[2] = 0;
-       let jC = !1,
-         yC = 0,
-         LC = null,
-         UC = !1,
-         BC = !1,
- ... (50 more removed lines; see GitHub link above)
+         Ip = ip[0],
+         Sp = ip[1];
+       return op < Op ? (Op = ki(op, Op), Ip = cp(Sp, Ip)) : (Op = ki(Op, op), Ip = cp(Ip, Sp)),
+         function(pp) {
+           return Ip(Op(pp))
```

#### 630. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34893-L34896` → after: `L16494-L16500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16494-L16500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16494-L16500) · [Before (L34893-L34896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34893-L34896)

```diff
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const wC = zC.wN.base,
-         bC = zC.wN.max,
+       return ip.domain(pp.domain()).range(pp.range()).interpolate(pp.interpolate()).clamp(pp.clamp()).unknown(pp.unknown())
+     }
+ 
+     function Mi() {
+       var pp, ip, cp, Op, op, Ip, Sp = ui,
+         xp = ui,
+         Lp = Hi,
```

#### 631. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34898` → after: `L16502-L16561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16502-L16561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16502-L16561) · [Before (L34898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34898)

```diff
-       return nC[0] = wC[0] - ZC, nC[1] = wC[1] - QC, nC[2] = wC[2] - ZC, nC[3] = bC[0] + ZC, nC[4] = bC[1] + QC, nC[5] = bC[2] + ZC, LC(CC.MN, nC)
+ 
+       function Dp() {
+         var pp = Math.min(Sp.length, xp.length);
+         return Yp !== ji && (Yp = function(pp, ip) {
+           var cp;
+           return pp > ip && (cp = pp, pp = ip, ip = cp),
+             function(cp) {
+               return Math.max(pp, Math.min(ip, cp))
+             }
+         }(Sp[0], Sp[pp - 1])), Op = pp > 2 ? Ri : mi, op = Ip = null, Ap
+       }
+ 
+       function Ap(ip) {
+         return null == ip || isNaN(ip = +ip) ? cp : (op || (op = Op(Sp.map(pp), xp, Lp)))(pp(Yp(ip)))
+       }
+       return Ap.invert = function(cp) {
+ ... (44 more added lines; see GitHub link above)
```

#### 632. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34906-L34918` → after: `L16565-L16601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16565-L16601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16565-L16601) · [Before (L34906-L34918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34906-L34918)

```diff
-       const ZC = CC.YN;
-       let QC = 0;
-       const wC = zz(zC),
-         bC = ZC[0],
-         nC = ZC[1],
-         fC = ZC[2],
-         oC = Math.floor(zC[1] + nC),
-         qC = Math.floor(zC[4] + nC),
-         FC = Math.floor(zC[1] + .5 * (zC[4] - zC[1]) + nC),
-         WC = FC !== oC && FC !== qC;
-       for (let NC = 0; NC < 4; NC++) {
-         const CC = wC[NC],
-           zC = CC[0],
+       if (!isFinite(pp) || 0 === pp) return null;
+       var cp = (pp = ip ? pp.toExponential(ip - 1) : pp.toExponential()).indexOf("e"),
+         Op = pp.slice(0, cp);
+       return [Op.length > 1 ? Op[0] + Op.slice(2) : Op, +pp.slice(cp + 1)]
+     }
+ 
+     function Ni(pp) {
+       return (pp = Bi(Math.abs(pp))) ? pp[1] : NaN
+     }
+ 
+     function Ti(pp, ip) {
+       var cp = Bi(pp, ip);
+       if (!cp) return pp + "";
+       var Op = cp[0],
+         op = cp[1];
+       return op < 0 ? "0." + new Array(-op).join("0") + Op : Op.length > op + 1 ? Op.slice(0, op + 1) + "." + Op.slice(op + 1) : Op + new Array(op - Op.length + 2).join("0")
+ ... (21 more added lines; see GitHub link above)
```

#### 633. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34920-L34927` → after: `L16603-L16612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16603-L16612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16603-L16612) · [Before (L34920-L34927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34920-L34927)

```diff
-           nC = tC[NC],
-           MC = DC[NC],
-           gC = jC[NC],
-           SC = Math.floor(zC + bC),
-           pC = Math.floor(ZC + fC);
-         nC[0] = SC, nC[1] = oC, nC[2] = pC, MC[0] = SC, MC[1] = FC, MC[2] = pC, gC[0] = SC, gC[1] = qC, gC[2] = pC, yC[QC++] = nC, yC[QC++] = gC, WC && (yC[QC++] = MC)
-       }
-       return yC.length = QC, yC
+           Ip = op - (Ei = 3 * Math.max(-8, Math.min(8, Math.floor(op / 3)))) + 1,
+           Sp = Op.length;
+         return Ip === Sp ? Op : Ip > Sp ? Op + new Array(Ip - Sp + 1).join("0") : Ip > 0 ? Op.slice(0, Ip) + "." + Op.slice(Ip) : "0." + new Array(1 - Ip).join("0") + Bi(pp, Math.max(0, ip + Ip - 1))[0]
+       },
+       X: pp => Math.round(pp).toString(16).toUpperCase(),
+       x: pp => Math.round(pp).toString(16)
+     };
+ 
+     function bi(pp) {
+       return pp
```

#### 634. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34929` → after: `L16614-L16615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16614-L16615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16614-L16615) · [Before (L34929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34929)

```diff
-     const UC = [];
+     var ai, ni, Fi, gi = Array.prototype.map,
+       Gi = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
```

#### 635. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34931-L34953` → after: `L16617-L16710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16617-L16710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16617-L16710) · [Before (L34931-L34953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34931-L34953)

```diff
-     function BC(CC, zC, ZC) {
-       const QC = ZC ? [] : UC;
-       return function(CC, zC, ZC, QC) {
-         var wC;
-         const bC = CC.JR.lL(zC),
-           nC = CC.JR.eT(zC);
-         if (!nC || nC.resting[1] >= 0) return QC && (QC.length = 0), ZC ? [] : (kC.length = 0, kC);
-         const fC = bC.GZC,
-           oC = null !== (wC = bC.YN) && void 0 !== wC ? wC : CC.YN,
-           qC = ZC ? [] : kC;
-         let FC = 0;
-         const WC = zz(fC);
-         for (let gC = 0; gC < 4; gC++) {
-           const zC = ZC ? [] : OC[gC],
-             wC = WC[gC],
-             nC = wC[0],
- ... (7 more removed lines; see GitHub link above)
+     function ri(pp) {
+       var ip, cp, Op = void 0 === pp.grouping || void 0 === pp.thousands ? bi : (ip = gi.call(pp.grouping, Number), cp = pp.thousands + "", function(pp, Op) {
+           for (var op = pp.length, Ip = [], Sp = 0, xp = ip[0], Lp = 0; op > 0 && xp > 0 && (Lp + xp + 1 > Op && (xp = Math.max(1, Op - Lp)), Ip.push(pp.substring(op -= xp, op + xp)), !((Lp += xp + 1) > Op));) xp = ip[Sp = (Sp + 1) % ip.length];
+           return Ip.reverse().join(cp)
+         }),
+         op = void 0 === pp.currency ? "" : pp.currency[0] + "",
+         Ip = void 0 === pp.currency ? "" : pp.currency[1] + "",
+         Sp = void 0 === pp.decimal ? "." : pp.decimal + "",
+         xp = void 0 === pp.numerals ? bi : function(pp) {
+           return function(ip) {
+             return ip.replace(/[0-9]/g, (function(ip) {
+               return pp[+ip]
+             }))
+           }
+         }(gi.call(pp.numerals, String)),
+         Lp = void 0 === pp.percent ? "%" : pp.percent + "",
+ ... (78 more added lines; see GitHub link above)
```

#### 636. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34956-L34967` → after: `L16713-L16763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16713-L16763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16713-L16763) · [Before (L34956-L34967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34956-L34967)

```diff
-         qC.length = FC;
-         const NC = ZC ? [] : VC;
-         NC.length = 0;
-         let MC = 0;
-         for (let gC = 0; gC < qC.length; gC++) {
-           const CC = qC[gC],
-             zC = null === QC || void 0 === QC ? void 0 : QC[gC];
-           let ZC = !0;
-           for (const QC of NC) CC[0] === QC[0] && CC[2] === QC[2] && (ZC = !1);
-           if (ZC) {
-             const ZC = MC++;
-             NC[ZC] = CC, QC && (QC[ZC] = zC)
+       }
+     }
+ 
+     function Zi(pp, ip, cp, Op) {
+       var op, Ip = Ap(pp, ip, cp);
+       switch ((Op = Qi(null == Op ? ",f" : Op)).type) {
+         case "s":
+           var Sp = Math.max(Math.abs(pp), Math.abs(ip));
+           return null != Op.precision || isNaN(op = function(pp, ip) {
+             return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Ni(ip) / 3))) - Ni(Math.abs(pp)))
+           }(Ip, Sp)) || (Op.precision = op), Fi(Op, Sp);
+         case "":
+         case "e":
+         case "g":
+         case "p":
+         case "r":
+ ... (35 more added lines; see GitHub link above)
```

#### 637. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34970-L34971` → after: `L16767-L16775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16767-L16775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16767-L16775) · [Before (L34970-L34971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34970-L34971)

```diff
-         NC.length = MC, QC && (QC.length = MC)
-       }(CC, zC, !1, QC), QC
+         return pp
+       }, pp
+     }
+ 
+     function si() {
+       var pp = Ci();
+       return pp.copy = function() {
+         return qi(pp, si())
+       }, Xi.d.apply(pp, arguments), zi(pp)
```

#### 638. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34984` → after: `L16779-L16790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16779-L16790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16779-L16790) · [Before (L34984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34984)

```diff
-       return Cz[0][0] = CC[3], Cz[0][1] = CC[2], Cz[1][0] = CC[0], Cz[1][1] = CC[2], Cz[2][0] = CC[3], Cz[2][1] = CC[5], Cz[3][0] = CC[0], Cz[3][1] = CC[5], Cz
+       var ip;
+ 
+       function cp(pp) {
+         return null == pp || isNaN(pp = +pp) ? ip : pp
+       }
+       return cp.invert = cp, cp.domain = cp.range = function(ip) {
+         return arguments.length ? (pp = Array.from(ip, ei), cp) : pp.slice()
+       }, cp.unknown = function(pp) {
+         return arguments.length ? (ip = pp, cp) : ip
+       }, cp.copy = function() {
+         return Ki(pp).unknown(ip)
+       }, pp = arguments.length ? Array.from(pp, ei) : [0, 1], zi(cp)
```

#### 639. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L34995-L35011` → after: `L16794-L16798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16794-L16798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16794-L16798) · [Before (L34995-L35011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L34995-L35011)

```diff
-       const ZC = {
-           rock: "stone",
-           wood: "wood",
-           granule: "gravel",
-           cuttable: "grass",
-           none1: "glass",
-           none2: "sand",
-           none3: "snow",
-           none4: "cloth"
-         },
-         wC = QC.g[CC].soundType,
-         bC = zC ? "break" : "place";
-       if (void 0 !== (null === wC || void 0 === wC ? void 0 : wC[bC])) return wC[bC];
-       {
-         const wC = QC.g[CC].harvestType;
-         return void 0 === wC ? (console.error("no harvest type for block", QC.g[CC], QC.g[CC].name, zC), "stone") : ZC[wC]
- ... (1 more removed lines; see GitHub link above)
+       var cp, Op = 0,
+         op = (pp = pp.slice()).length - 1,
+         Ip = pp[Op],
+         Sp = pp[op];
+       return Sp < Ip && (cp = Op, Op = op, op = cp, cp = Ip, Ip = Sp, Sp = cp), pp[Op] = ip.floor(Ip), pp[op] = ip.ceil(Sp), pp
```

#### 640. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35013-L35018` → after: `L16800-L16802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16800-L16802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16800-L16802) · [Before (L35013-L35018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35013-L35018)

```diff
-     const bC = {
-       gunHeadshot: .96,
-       bulletShellBounce: .18,
-       firstPersonReload: .24,
-       thirdPersonReload: .08,
-       gunShot: .4
+ 
+     function pc(pp) {
+       return Math.log(pp)
```

#### 641. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35020-L35052` → after: `L16804-L16835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16804-L16835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16804-L16835) · [Before (L35020-L35052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35020-L35052)

```diff
-   },
-   37213: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => QC,
-       d: () => wC,
-       g: () => oC,
-       h: () => fC,
-       k: () => nC,
-       n: () => bC
-     });
-     const QC = "bloxd.animation.binding.1",
-       wC = "*",
-       bC = "attack",
-       nC = "hurt",
-       fC = new Set([bC, nC]);
-     let oC = function(CC) {
- ... (17 more removed lines; see GitHub link above)
+ 
+     function ic(pp) {
+       return Math.exp(pp)
+     }
+ 
+     function cc(pp) {
+       return -Math.log(-pp)
+     }
+ 
+     function Oc(pp) {
+       return -Math.exp(-pp)
+     }
+ 
+     function oc(pp) {
+       return isFinite(pp) ? +("1e" + pp) : pp < 0 ? 0 : pp
+     }
+ ... (16 more added lines; see GitHub link above)
```

#### 642. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35054-L35060` → after: `L16837-L16873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16837-L16873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16837-L16873) · [Before (L35054-L35060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35054-L35060)

```diff
-       compileClip(CC) {
-         try {
-           const zC = CC();
-           return this.provisional.length = 0, zC
-         } catch (zC) {
-           for (const CC of this.provisional) this._slots.delete(CC);
-           throw this.provisional.length = 0, zC
+       return ip.base = function(pp) {
+         return arguments.length ? (Ip = +pp, Sp()) : Ip
+       }, ip.domain = function(pp) {
+         return arguments.length ? (cp(pp), Sp()) : cp()
+       }, ip.ticks = pp => {
+         const ip = cp();
+         let Sp = ip[0],
+           xp = ip[ip.length - 1];
+         const Lp = xp < Sp;
+         Lp && ([Sp, xp] = [xp, Sp]);
+         let Dp, Ap, Pp = Op(Sp),
+           Wp = Op(xp);
+         const yp = null == pp ? 10 : +pp;
+         let Up = [];
+         if (!(Ip % 1) && Wp - Pp < yp) {
+           if (Pp = Math.floor(Pp), Wp = Math.ceil(Wp), Sp > 0) {
+ ... (21 more added lines; see GitHub link above)
```

#### 643. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35063-L35071` → after: `L16890-L16894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16890-L16894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16890-L16894) · [Before (L35063-L35071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35063-L35071)

```diff
-       reserve(CC) {
-         for (const zC of CC.matchAll(wC)) {
-           const CC = zC[1].toLowerCase();
-           if (!this._slots.has(CC)) {
-             if (this._slots.size >= 256) return !1;
-             this._slots.set(CC, this._slots.size), this.provisional.push(CC)
-           }
-         }
-         return !0
+     }
+ 
+     function Yc(pp) {
+       return function(ip) {
+         return Math.sign(ip) * Math.expm1(Math.abs(ip)) * pp
```

#### 644. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35073-L35074` → after: `L16896-L16921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16896-L16921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16896-L16921) · [Before (L35073-L35074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35073-L35074)

```diff
-       createValues() {
-         return new Float64Array(this._slots.size)
+     }
+ 
+     function Dc(pp) {
+       var ip = 1,
+         cp = pp(Lc(ip), Yc(ip));
+       return cp.constant = function(cp) {
+         return arguments.length ? pp(Lc(ip = +cp), Yc(ip)) : ip
+       }, zi(cp)
+     }
+ 
+     function Ac() {
+       var pp = Dc(Mi());
+       return pp.copy = function() {
+         return qi(pp, Ac()).constant(pp.constant())
+       }, Xi.d.apply(pp, arguments)
+     }
+ ... (10 more added lines; see GitHub link above)
```

#### 645. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35078-L35083` → after: `L16925-L16949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16925-L16949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16925-L16949) · [Before (L35078-L35083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35078-L35083)

```diff
-     function nC(CC, zC) {
-       return {
-         still: fC(CC),
-         timeless: oC(CC),
-         standsAfterSeconds: qC(CC, zC)
-       }
+     function yc(pp) {
+       return pp < 0 ? -Math.sqrt(-pp) : Math.sqrt(pp)
+     }
+ 
+     function Uc(pp) {
+       return pp < 0 ? -pp * pp : pp * pp
+     }
+ 
+     function wc(pp) {
+       var ip = pp(ji, ji),
+         cp = 1;
+       return ip.exponent = function(ip) {
+         return arguments.length ? 1 === (cp = +ip) ? pp(ji, ji) : .5 === cp ? pp(yc, Uc) : pp(Wc(cp), Wc(1 / cp)) : cp
+       }, zi(ip)
+     }
+ 
+ ... (9 more added lines; see GitHub link above)
```

#### 646. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35087` → after: `L16953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16953) · [Before (L35087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35087)

```diff
-       return 0 === CC.startDelaySeconds && null === CC.animTimeUpdate && null !== NC(CC.blendWeight) && CC.bones.every((CC => WC(CC.rotation) && WC(CC.position) && WC(CC.scale)))
+       return Math.sign(pp) * pp * pp
```

#### 647. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35090-L35091` → after: `L16956-L16994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16956-L16994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16956-L16994) · [Before (L35090-L35091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35090-L35091)

```diff
-     function oC(CC) {
-       return !FC(CC, (CC => CC.readsClock))
+     function dc() {
+       var pp, ip = Ci(),
+         cp = [0, 1],
+         Op = !1;
+ 
+       function op(cp) {
+         var op = function(pp) {
+           return Math.sign(pp) * Math.sqrt(Math.abs(pp))
+         }(ip(cp));
+         return isNaN(op) ? pp : Op ? Math.round(op) : op
+       }
+       return op.invert = function(pp) {
+         return ip.invert(Hc(pp))
+       }, op.domain = function(pp) {
+         return arguments.length ? (ip.domain(pp), op) : ip.domain()
+       }, op.range = function(pp) {
+ ... (23 more added lines; see GitHub link above)
```

#### 648. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35095-L35098` → after: `L16998-L17015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR16998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L16998-L17015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L16998-L17015) · [Before (L35095-L35098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35095-L35098)

```diff
-       if (CC.loop === QC.h.Loop || null !== CC.animTimeUpdate) return 1 / 0;
-       if (CC.loop === QC.h.Hold && CC.lengthSeconds > 0) return CC.startDelaySeconds + CC.lengthSeconds;
-       const ZC = FC(CC, (CC => CC.readsAnimTime));
-       return ZC ? 1 / 0 : CC.startDelaySeconds + zC + 2 * QC.k
+       let cp;
+       if (void 0 === ip)
+         for (const Op of pp) null != Op && (cp > Op || void 0 === cp && Op >= Op) && (cp = Op);
+       else {
+         let Op = -1;
+         for (let op of pp) null != (op = ip(op, ++Op, pp)) && (cp > op || void 0 === cp && op >= op) && (cp = op)
+       }
+       return cp
+     }
+ 
+     function jc() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pp;
+       if (pp === Pp) return kc;
+       if ("function" !== typeof pp) throw new TypeError("compare is not a function");
+       return (ip, cp) => {
+         const Op = pp(ip, cp);
+ ... (2 more added lines; see GitHub link above)
```

#### 649. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35102-L35103` → after: `L17019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17019) · [Before (L35102-L35103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35102-L35103)

```diff
-       const ZC = CC => "number" !== typeof CC && zC(CC);
-       return ZC(CC.blendWeight) || CC.bones.some((CC => [CC.rotation, CC.position, CC.scale].some((CC => null !== CC && CC.keyframes.some((CC => [0, 1, 2].some((zC => ZC(CC.pre[zC]) || ZC(CC.post[zC])))))))))
+       return (null == pp || !(pp >= pp)) - (null == ip || !(ip >= ip)) || (pp < ip ? -1 : pp > ip ? 1 : 0)
```

#### 650. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35106-L35113` → after: `L17022-L17034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17022-L17034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17022-L17034) · [Before (L35106-L35113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35106-L35113)

```diff
-     function WC(CC) {
-       var zC;
-       if (null === CC) return !0;
-       const ZC = null === (zC = CC.keyframes[0]) || void 0 === zC ? void 0 : zC.pre;
-       return CC.keyframes.every((CC => {
-         for (let zC = 0; zC < 3; zC++) {
-           const QC = NC(ZC[zC]);
-           if (null === QC || NC(CC.pre[zC]) !== QC || NC(CC.post[zC]) !== QC) return !1
+     function mc(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+         Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
+         op = arguments.length > 4 ? arguments[4] : void 0;
+       if (ip = Math.floor(ip), cp = Math.floor(Math.max(0, cp)), Op = Math.floor(Math.min(pp.length - 1, Op)), !(cp <= ip && ip <= Op)) return pp;
+       for (op = void 0 === op ? kc : jc(op); Op > cp;) {
+         if (Op - cp > 600) {
+           const Ip = Op - cp + 1,
+             Sp = ip - cp + 1,
+             xp = Math.log(Ip),
+             Lp = .5 * Math.exp(2 * xp / 3),
+             Yp = .5 * Math.sqrt(xp * Lp * (Ip - Lp) / Ip) * (Sp - Ip / 2 < 0 ? -1 : 1);
+           mc(pp, ip, Math.max(cp, Math.floor(ip - Sp * Lp / Ip + Yp)), Math.min(Op, Math.floor(ip + (Ip - Sp) * Lp / Ip + Yp)), op)
```

#### 651. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35115-L35116` → after: `L17036-L17045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17036-L17045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17036-L17045) · [Before (L35115-L35116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35115-L35116)

```diff
-         return !0
-       }))
+         const Ip = pp[ip];
+         let Sp = cp,
+           xp = Op;
+         for (Rc(pp, cp, ip), op(pp[Op], Ip) > 0 && Rc(pp, cp, Op); Sp < xp;) {
+           for (Rc(pp, Sp, xp), ++Sp, --xp; op(pp[Sp], Ip) < 0;) ++Sp;
+           for (; op(pp[xp], Ip) > 0;) --xp
+         }
+         0 === op(pp[cp], Ip) ? Rc(pp, cp, xp) : (++xp, Rc(pp, xp, Op)), xp <= ip && (cp = xp + 1), ip <= xp && (Op = xp - 1)
+       }
+       return pp
```

#### 652. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35119-L35135` → after: `L17048-L17051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17048-L17051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17048-L17051) · [Before (L35119-L35135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35119-L35135)

```diff
-     function NC(CC) {
-       return "number" === typeof CC ? CC : CC.constant
-     }
-     var MC = ZC(37244),
-       gC = ZC(37215),
-       SC = ZC(37227);
-     const pC = ["1.8.0", "1.10.0"],
-       PC = 524288,
-       GC = 1e6,
-       RC = 128,
-       AC = new Map([
-         ["rotation", QC.d.Rotation],
-         ["position", QC.d.Position],
-         ["scale", QC.d.Scale]
-       ]),
-       xC = new Set(["sound_effects", "particle_effects", "timeline"]),
- ... (1 more removed lines; see GitHub link above)
+     function Rc(pp, ip, cp) {
+       const Op = pp[ip];
+       pp[ip] = pp[cp], pp[cp] = Op
+     }
```

#### 653. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35138-L35148` → after: `L17054-L17067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17054-L17067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17054-L17067) · [Before (L35138-L35148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35138-L35148)

```diff
-       if (CC.length > PC) return iC(zC, `file is ${CC.length} characters, over the 524288 limit`);
-       let QC;
-       try {
-         QC = JSON.parse(CC)
-       } catch (wC) {
-         return iC(zC, `invalid JSON: ${wC.message}`)
-       }
-       try {
-         return new vC(zC, ZC).compile(QC)
-       } catch (wC) {
-         return iC(zC, `could not be loaded: ${wC.message}`)
+       if (pp = Float64Array.from(function*(pp, ip) {
+           if (void 0 === ip)
+             for (let cp of pp) null != cp && (cp = +cp) >= cp && (yield cp);
+           else {
+             let cp = -1;
+             for (let Op of pp) null != (Op = ip(Op, ++cp, pp)) && (Op = +Op) >= Op && (yield Op)
+           }
+         }(pp, cp)), (Op = pp.length) && !isNaN(ip = +ip)) {
+         if (ip <= 0 || Op < 2) return uc(pp);
+         if (ip >= 1) return ec(pp);
+         var Op, op = (Op - 1) * ip,
+           Ip = Math.floor(op),
+           Sp = ec(mc(pp, Ip).subarray(0, Ip + 1));
+         return Sp + (uc(pp.subarray(Ip + 1)) - Sp) * (op - Ip)
```

#### 654. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35153-L35159` → after: `L17072-L17079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17072-L17079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17072-L17079) · [Before (L35153-L35159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35153-L35159)

```diff
-       return {
-         clips: [],
-         diagnostics: [{
-           severity: QC.b.Error,
-           source: CC,
-           message: zC
-         }]
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wp;
+       if ((Op = pp.length) && !isNaN(ip = +ip)) {
+         if (ip <= 0 || Op < 2) return +cp(pp[0], 0, pp);
+         if (ip >= 1) return +cp(pp[Op - 1], Op - 1, pp);
+         var Op, op = (Op - 1) * ip,
+           Ip = Math.floor(op),
+           Sp = +cp(pp[Ip], Ip, pp);
+         return Sp + (+cp(pp[Ip + 1], Ip + 1, pp) - Sp) * (op - Ip)
```

#### 655. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35162-L35240` → after: `L17082-L17091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17082-L17091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17082-L17091) · [Before (L35162-L35240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35162-L35240)

```diff
-     class vC {
-       constructor(CC, zC) {
-         this.source = CC, this.variables = zC, this.diagnostics = [], this.suppressedDiagnostics = 0, this.keyframeCount = 0, this.molangChars = 0
-       }
-       compile(CC) {
-         if (!(0, gC.j)(CC)) return iC(this.source, "the file is not a JSON object");
-         const zC = CC.format_version;
-         if ("string" !== typeof zC || !pC.includes(zC)) return iC(this.source, `unsupported format_version ${JSON.stringify(zC)}; expected one of ${pC.join(", ")}`);
-         const ZC = CC.animations;
-         if (!(0, gC.j)(ZC)) return iC(this.source, 'missing "animations" object');
-         const wC = Object.keys(ZC);
-         if (wC.length > 128) return iC(this.source, `${wC.length} animations, over the 128 limit`);
-         const bC = [];
-         for (const fC of wC) try {
-           bC.push(this.variables.compileClip((() => this.compileClip(fC, ZC[fC]))))
-         } catch (nC) {
- ... (63 more removed lines; see GitHub link above)
+ 
+     function Cc() {
+       var pp, ip = [],
+         cp = [],
+         Op = [];
+ 
+       function op() {
+         var pp = 0,
+           op = Math.max(1, cp.length);
+         for (Op = new Array(op - 1); ++pp < op;) Op[pp - 1] = Mc(ip, pp / op);
```

#### 656. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35243-L35300` → after: `L17094-L17096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17094-L17096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17094-L17096) · [Before (L35243-L35300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35243-L35300)

```diff
-       compileBone(CC, zC) {
-         if (!(0, gC.j)(zC)) throw new gC.c(`bone "${CC}" is not an object`);
-         const ZC = {
-           [QC.d.Rotation]: null,
-           [QC.d.Position]: null,
-           [QC.d.Scale]: null
-         };
-         for (const QC of Object.keys(zC)) {
-           const wC = AC.get(QC);
-           if (void 0 === wC) throw new gC.c(`bone "${CC}": "${QC}" is not supported (only rotation, position and scale)`);
-           ZC[wC] = this.compileChannel(zC[QC], wC, `${CC}.${QC}`)
-         }
-         return {
-           name: CC,
-           rotation: ZC[QC.d.Rotation],
-           position: ZC[QC.d.Position],
- ... (42 more removed lines; see GitHub link above)
+ 
+       function Ip(ip) {
+         return null == ip || isNaN(ip = +ip) ? pp : cp[Hp(Op, ip)]
```

#### 657. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35302-L35312` → after: `L17098-L17125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17098-L17125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17098-L17125) · [Before (L35302-L35312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35302-L35312)

```diff
-       compileKeyframe(CC, zC) {
-         const ZC = this.compileTriple(CC.dataPoints[0], zC),
-           QC = CC.dataPoints.length > 1 ? this.compileTriple(CC.dataPoints[CC.dataPoints.length - 1], zC) : ZC;
-         return {
-           time: CC.time,
-           pre: ZC,
-           post: QC,
-           hasPrePost: CC.dataPoints.length > 1,
-           catmullRom: CC.catmullRom,
-           step: CC.step
-         }
+       return Ip.invertExtent = function(pp) {
+         var op = cp.indexOf(pp);
+         return op < 0 ? [NaN, NaN] : [op > 0 ? Op[op - 1] : ip[0], op < Op.length ? Op[op] : ip[ip.length - 1]]
+       }, Ip.domain = function(pp) {
+         if (!arguments.length) return ip.slice();
+         ip = [];
+         for (let cp of pp) null == cp || isNaN(cp = +cp) || ip.push(cp);
+         return ip.sort(Pp), op()
+       }, Ip.range = function(pp) {
+         return arguments.length ? (cp = Array.from(pp), op()) : cp.slice()
+       }, Ip.unknown = function(ip) {
+         return arguments.length ? (pp = ip, Ip) : pp
+       }, Ip.quantiles = function() {
+         return Op.slice()
+       }, Ip.copy = function() {
+         return Cc().domain(ip).range(cp).unknown(pp)
+ ... (12 more added lines; see GitHub link above)
```

#### 658. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35314-L35319` → after: `L17127-L17131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17127-L17131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17127-L17131) · [Before (L35314-L35319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35314-L35319)

```diff
-       compileTriple(CC, zC) {
-         if ("string" === typeof CC[0] && CC[0] === CC[1] && CC[1] === CC[2]) {
-           const ZC = this.compileAxis(CC[0], zC);
-           return [ZC, ZC, ZC]
-         }
-         return [this.compileAxis(CC[0], zC), this.compileAxis(CC[1], zC), this.compileAxis(CC[2], zC)]
+ 
+       function xp() {
+         var pp = -1;
+         for (op = new Array(Op); ++pp < Op;) op[pp] = ((pp + 1) * cp - (pp - Op) * ip) / (Op + 1);
+         return Sp
```

#### 659. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35321-L35335` → after: `L17133-L17182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17133-L17182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17133-L17182) · [Before (L35321-L35335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35321-L35335)

```diff
-       compileAxis(CC, zC) {
-         var ZC;
-         const QC = this.compileExpression(CC, zC);
-         return null !== (ZC = QC.constant) && void 0 !== ZC ? ZC : QC
-       }
-       compileExpression(CC, zC) {
-         if ("number" === typeof CC) return (0, SC.g)(eC(CC, zC));
-         if ("string" !== typeof CC) throw new gC.c(`${zC}: expected a number or a Molang string`);
-         if (this.molangChars += CC.length, this.molangChars > 65536) throw new gC.c("the file has over 65536 characters of Molang");
-         if (!this.variables.reserve(CC)) throw new gC.c(`${zC}: the pack reads too many different variables`);
-         const ZC = (0, SC.f)(CC, {
-           variableSlots: this.variables.slots
-         });
-         if (!ZC.ok) throw new gC.c(`${zC}: ${ZC.error}`);
-         return null === ZC.value.constant ? ZC.value : (0, SC.g)(eC(ZC.value.constant, zC))
+       return Sp.domain = function(pp) {
+         return arguments.length ? ([ip, cp] = pp, ip = +ip, cp = +cp, xp()) : [ip, cp]
+       }, Sp.range = function(pp) {
+         return arguments.length ? (Op = (Ip = Array.from(pp)).length - 1, xp()) : Ip.slice()
+       }, Sp.invertExtent = function(pp) {
+         var Sp = Ip.indexOf(pp);
+         return Sp < 0 ? [NaN, NaN] : Sp < 1 ? [ip, op[0]] : Sp >= Op ? [op[Op - 1], cp] : [op[Sp - 1], op[Sp]]
+       }, Sp.unknown = function(ip) {
+         return arguments.length ? (pp = ip, Sp) : Sp
+       }, Sp.thresholds = function() {
+         return op.slice()
+       }, Sp.copy = function() {
+         return Ec().domain([ip, cp]).range(Ip).unknown(pp)
+       }, Xi.d.apply(zi(Sp), arguments)
+     }
+ 
+ ... (34 more added lines; see GitHub link above)
```

#### 660. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35337-L35340` → after: `L17184-L17194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17184-L17194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17184-L17194) · [Before (L35337-L35340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35337-L35340)

```diff
-       compileConstantSeconds(CC, zC) {
-         if (void 0 === CC) return 0;
-         const ZC = this.compileExpression(CC, zC).constant;
-         if (null === ZC || ZC < 0 || ZC > gC.e) throw new gC.c(`${zC} must be a constant number of seconds from 0 to ${gC.e}`);
+       return op.floor = ip => (pp(ip = new Date(+ip)), ip), op.ceil = cp => (pp(cp = new Date(cp - 1)), ip(cp, 1), pp(cp), cp), op.round = pp => {
+         const ip = op(pp),
+           cp = op.ceil(pp);
+         return pp - ip < cp - pp ? ip : cp
+       }, op.offset = (pp, cp) => (ip(pp = new Date(+pp), null == cp ? 1 : Math.floor(cp)), pp), op.range = (cp, Op, Ip) => {
+         const Sp = [];
+         if (cp = op.ceil(cp), Ip = null == Ip ? 1 : Math.floor(Ip), !(cp < Op) || !(Ip > 0)) return Sp;
+         let xp;
+         do {
+           Sp.push(xp = new Date(+cp)), ip(cp, Ip), pp(cp)
+         } while (xp < cp && cp < Op);
```

#### 661. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35343-L35349` → after: `L17352-L17358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17352-L17358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17352-L17358) · [Before (L35343-L35349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35343-L35349)

```diff
-       Cg(CC, zC) {
-         this.diagnostics.length < 50 ? this.diagnostics.push({
-           severity: CC,
-           source: this.source,
-           message: zC
-         }) : this.suppressedDiagnostics++
-       }
+       return [function(pp, ip, cp) {
+         const Op = ip < pp;
+         Op && ([pp, ip] = [ip, pp]);
+         const op = cp && "function" === typeof cp.range ? cp : xp(pp, ip, cp),
+           Ip = op ? op.range(pp, +ip + 1) : [];
+         return Op ? Ip.reverse() : Ip
+       }, xp]
```

#### 662. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35352-L35354` → after: `L17362-L17367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17362-L17367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17362-L17367) · [Before (L35352-L35354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35352-L35354)

```diff
-     function eC(CC, zC) {
-       if (!Number.isFinite(CC) || Math.abs(CC) > GC) throw new gC.c(`${zC}: ${CC} is not a finite number within \xb11000000`);
-       return CC
+     function kO(pp) {
+       if (0 <= pp.y && pp.y < 100) {
+         var ip = new Date(-1, pp.m, pp.d, pp.H, pp.M, pp.S, pp.L);
+         return ip.setFullYear(pp.y), ip
+       }
+       return new Date(pp.y, pp.m, pp.d, pp.H, pp.M, pp.S, pp.L)
```

#### 663. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35358-L35392` → after: `L17371-L17373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17371-L17373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17371-L17373) · [Before (L35358-L35392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35358-L35392)

```diff
-       if (void 0 === CC || !1 === CC) return QC.h.Once;
-       if (!0 === CC) return QC.h.Loop;
-       if ("hold_on_last_frame" === CC) return QC.h.Hold;
-       throw new gC.c(`loop ${JSON.stringify(CC)} is not supported (true, false or "hold_on_last_frame")`)
-     }
-     class KC {
-       constructor(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !1;
-         this.byId = new Map, this.fileById = new Map, this.byShortName = new Map, this.variables = new bC, this.diagnostics = [];
-         for (const ZC of CC) {
-           const CC = IC(ZC.text, ZC.name, this.variables);
-           this.diagnostics.push(...CC.diagnostics);
-           for (const wC of CC.clips) {
-             const CC = this.fileById.get(wC.id);
-             if (void 0 !== CC && zC(ZC.name) && zC(CC)) continue;
-             if (void 0 !== CC) {
- ... (19 more removed lines; see GitHub link above)
+       if (0 <= pp.y && pp.y < 100) {
+         var ip = new Date(Date.UTC(-1, pp.m, pp.d, pp.H, pp.M, pp.S, pp.L));
+         return ip.setUTCFullYear(pp.y), ip
```

#### 664. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35396-L35403` → after: `L17378-L17386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17378-L17386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17378-L17386) · [Before (L35396-L35403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35396-L35403)

```diff
-     function YC(CC, zC) {
-       for (let ZC = 0; ZC < CC.length; ZC++) {
-         const QC = CC[ZC].find(zC);
-         if (null !== QC) return {
-           clip: QC,
-           pool: ZC
-         };
-         if (CC[ZC].isAmbiguousShortName(zC)) return "ambiguous"
+     function RO(pp, ip, cp) {
+       return {
+         y: pp,
+         m: ip,
+         d: cp,
+         H: 0,
+         M: 0,
+         S: 0,
+         L: 0
```

#### 665. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35405` → after: `L17388-L17402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17388-L17402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17388-L17402) · [Before (L35405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35405)

```diff
-       return "noClip"
+     }
+     var qO, MO, CO, EO = {
+         "-": "",
+         _: " ",
+         0: "0"
+       },
+       XO = /^\s*\d+/,
+       lO = /^%/,
+       QO = /[\\^$*+?|[\]().{}]/g;
+ 
+     function JO(pp, ip, cp) {
+       var Op = pp < 0 ? "-" : "",
+         op = (Op ? -pp : pp) + "",
+         Ip = op.length;
+       return Op + (Ip < cp ? new Array(cp - Ip + 1).join(ip) + op : op)
```

#### 666. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35409` → after: `L17406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17406) · [Before (L35409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35409)

```diff
-       return CC.slice(CC.lastIndexOf(".") + 1)
+       return pp.replace(QO, "\\$&")
```

#### 667. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35421-L35435` → after: `L17409-L17410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17409-L17410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17409-L17410) · [Before (L35421-L35435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35421-L35435)

```diff
-     function bC(CC, zC) {
-       const ZC = zC - CC.startDelaySeconds;
-       if (ZC < 0) return NaN;
-       const bC = CC.lengthSeconds;
-       if (bC <= 0) return ZC;
-       switch (CC.loop) {
-         case QC.h.Once:
-           return ZC;
-         case QC.h.Hold:
-           return Math.min(ZC, bC);
-         case QC.h.Loop: {
-           const zC = bC + CC.loopDelaySeconds;
-           return Math.min((ZC - wC) % zC + wC, bC)
-         }
-       }
+     function NO(pp) {
+       return new RegExp("^(?:" + pp.map(BO).join("|") + ")", "i")
```

#### 668. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35438-L35486` → after: `L17413-L17414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17413-L17414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17413-L17414) · [Before (L35438-L35486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35438-L35486)

```diff
-     function nC(CC, zC, ZC, wC, bC) {
-       const nC = CC.keyframes;
-       if (1 === nC.length) return void qC(nC[0], zC, wC, bC);
-       const fC = function(CC, zC) {
-           let ZC = 0,
-             QC = CC.length;
-           for (; ZC < QC;) {
-             const wC = ZC + QC >>> 1;
-             CC[wC].time < zC ? ZC = wC + 1 : QC = wC
-           }
-           return ZC - 1
-         }(nC, zC),
-         WC = fC + 1 < nC.length ? fC + 1 : -1,
-         NC = fC >= 0 ? nC[fC] : null,
-         MC = WC >= 0 ? nC[WC] : null;
-       let gC = null;
- ... (33 more removed lines; see GitHub link above)
+     function TO(pp) {
+       return new Map(pp.map(((pp, ip) => [pp.toLowerCase(), ip])))
```

#### 669. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35489-L35492` → after: `L17417-L17419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17417-L17419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17417-L17419) · [Before (L35489-L35492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35489-L35492)

```diff
-     function qC(CC, zC, ZC, wC) {
-       ! function(CC, zC, ZC) {
-         ZC[0] = FC(CC[0], zC), ZC[1] = FC(CC[1], zC), ZC[2] = FC(CC[2], zC)
-       }(CC.time > zC || Math.abs(CC.time - zC) < QC.k ? CC.pre : CC.post, ZC, wC)
+     function fO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 1));
+       return Op ? (pp.w = +Op[0], cp + Op[0].length) : -1
```

#### 670. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35495-L35496` → after: `L17422-L17424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17422-L17424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17422-L17424) · [Before (L35495-L35496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35495-L35496)

```diff
-     function FC(CC, zC) {
-       return "number" === typeof CC ? CC : CC.evaluate(zC)
+     function bO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 1));
+       return Op ? (pp.u = +Op[0], cp + Op[0].length) : -1
```

#### 671. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35533-L35542` → after: `L17427-L17429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17427-L17429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17427-L17429) · [Before (L35533-L35542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35533-L35542)

```diff
-     function WC(CC) {
-       let zC = FC.get(CC);
-       if (void 0 === zC) {
-         var ZC, QC;
-         zC = gC(CC.blendWeight) + (null !== (ZC = null === (QC = CC.animTimeUpdate) || void 0 === QC ? void 0 : QC.cost) && void 0 !== ZC ? ZC : 0);
-         for (const ZC of CC.bones)
-           for (const CC of [ZC.rotation, ZC.position, ZC.scale]) null !== CC && (zC += NC(CC));
-         FC.set(CC, zC)
-       }
-       return zC
+     function hO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.U = +Op[0], cp + Op[0].length) : -1
```

#### 672. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35545-L35551` → after: `L17432-L17434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17432-L17434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17432-L17434) · [Before (L35545-L35551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35545-L35551)

```diff
-     function NC(CC) {
-       let zC = 0,
-         ZC = !1;
-       for (const bC of CC.keyframes) zC = Math.max(zC, MC(bC.pre) + (bC.hasPrePost ? MC(bC.post) : 0)), ZC ||= bC.catmullRom;
-       const QC = CC.keyframes.length,
-         wC = Math.ceil(Math.log2(QC));
-       return ZC && QC > 1 ? nC + wC + (QC >= 3 ? oC : QC) * zC : bC + wC + Math.min(fC, QC) * zC
+     function aO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.V = +Op[0], cp + Op[0].length) : -1
```

#### 673. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35554-L35555` → after: `L17437-L17439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17437-L17439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17437-L17439) · [Before (L35554-L35555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35554-L35555)

```diff
-     function MC(CC) {
-       return gC(CC[0]) + gC(CC[1]) + gC(CC[2])
+     function nO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.W = +Op[0], cp + Op[0].length) : -1
```

#### 674. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35558-L35559` → after: `L17442-L17444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17442-L17444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17442-L17444) · [Before (L35558-L35559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35558-L35559)

```diff
-     function gC(CC) {
-       return "number" === typeof CC ? 0 : CC.cost
+     function FO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 4));
+       return Op ? (pp.y = +Op[0], cp + Op[0].length) : -1
```

#### 675. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35562-L35569` → after: `L17447-L17449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17447-L17449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17447-L17449) · [Before (L35562-L35569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35562-L35569)

```diff
-     function SC(CC) {
-       let zC = 0;
-       for (const ZC of CC.layers) {
-         let CC = null === ZC.fallback ? 0 : pC(ZC.fallback);
-         for (const zC of ZC.states.values()) CC = Math.max(CC, pC(zC));
-         zC += CC
-       }
-       return zC
+     function gO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.y = +Op[0] + (+Op[0] > 68 ? 1900 : 2e3), cp + Op[0].length) : -1
```

#### 676. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35572-L35579` → after: `L17452-L17454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17452-L17454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17452-L17454) · [Before (L35572-L35579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35572-L35579)

```diff
-     function pC(CC) {
-       let zC = 0,
-         ZC = 0;
-       for (const QC of CC.children) {
-         const CC = WC(QC.clip.clip);
-         CC > zC ? (ZC = zC, zC = CC) : CC > ZC && (ZC = CC)
-       }
-       return zC + ZC + qC * CC.children.length
+     function GO(pp, ip, cp) {
+       var Op = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(ip.slice(cp, cp + 6));
+       return Op ? (pp.Z = Op[1] ? 0 : -(Op[2] + (Op[3] || "00")), cp + Op[0].length) : -1
```

#### 677. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35610-L35612` → after: `L17457-L17459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17457-L17459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17457-L17459) · [Before (L35610-L35612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35610-L35612)

```diff
-     function oC(CC, zC, ZC, bC, nC) {
-       const oC = CC.queries;
-       oC[QC.d.LifeTime] = ZC, oC[QC.d.DeltaTime] = bC, oC[QC.d.GroundSpeed] = zC[wC.GroundSpeed], oC[QC.d.ModifiedMoveSpeed] = zC[wC.GroundSpeed], oC[QC.d.ModifiedDistanceMoved] = nC, oC[QC.d.VerticalSpeed] = zC[wC.VerticalSpeed], oC[QC.d.IsOnGround] = zC[wC.OnGround], oC[QC.d.Is … [truncated]
+     function rO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 1));
+       return Op ? (pp.q = 3 * Op[0] - 3, cp + Op[0].length) : -1
```

#### 678. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35615-L35618` → after: `L17462-L17464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17462-L17464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17462-L17464) · [Before (L35615-L35618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35615-L35618)

```diff
-     function qC(CC, zC) {
-       const ZC = CC.gate < 0 ? 1 : zC[CC.gate],
-         QC = (zC[CC.from] * CC.scale + CC.offset) * ZC;
-       return Math.min(CC.max, Math.max(CC.min, QC))
+     function ZO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.m = Op[0] - 1, cp + Op[0].length) : -1
```

#### 679. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35633-L35637` → after: `L17467-L17469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17467-L17469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17467-L17469) · [Before (L35633-L35637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35633-L35637)

```diff
-     function bC(CC, zC, ZC, wC) {
-       const bC = CC * QC * .5,
-         nC = zC * QC * .5,
-         oC = ZC * QC * .5;
-       fC(Math.cos(bC), Math.sin(bC), Math.cos(nC), Math.sin(nC), Math.cos(oC), Math.sin(oC), wC)
+     function zO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.d = +Op[0], cp + Op[0].length) : -1
```

#### 680. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35640-L35641` → after: `L17472-L17474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17472-L17474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17472-L17474) · [Before (L35640-L35641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35640-L35641)

```diff
-     function nC(CC, zC, ZC, QC, wC) {
-       oC(QC, 0, CC), oC(QC, 3, zC), oC(QC, 6, ZC), fC(QC[1], QC[2], QC[4], QC[5], QC[7], QC[8], wC)
+     function sO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 3));
+       return Op ? (pp.m = 0, pp.d = +Op[0], cp + Op[0].length) : -1
```

#### 681. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35644-L35645` → after: `L17477-L17479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17477-L17479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17477-L17479) · [Before (L35644-L35645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35644-L35645)

```diff
-     function fC(CC, zC, ZC, QC, wC, bC, nC) {
-       nC[0] = zC * ZC * wC - CC * QC * bC, nC[1] = CC * QC * wC + zC * ZC * bC, nC[2] = CC * ZC * bC - zC * QC * wC, nC[3] = CC * ZC * wC + zC * QC * bC
+     function KO(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.H = +Op[0], cp + Op[0].length) : -1
```

#### 682. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35649-L35652` → after: `L17483-L17484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17483-L17484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17483-L17484) · [Before (L35649-L35652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35649-L35652)

```diff
-       if (CC[zC] !== ZC) {
-         const wC = ZC * QC * .5;
-         CC[zC] = ZC, CC[zC + 1] = Math.cos(wC), CC[zC + 2] = Math.sin(wC)
-       }
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.M = +Op[0], cp + Op[0].length) : -1
```

#### 683. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35655-L35663` → after: `L17487-L17489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17487-L17489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17487-L17489) · [Before (L35655-L35663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35655-L35663)

```diff
-     function qC(CC, zC, ZC, QC, bC) {
-       const nC = 1 - 2 * (zC * zC + ZC * ZC),
-         fC = 2 * (CC * zC - QC * ZC),
-         oC = 2 * (CC * zC + QC * ZC),
-         qC = 1 - 2 * (CC * CC + ZC * ZC),
-         FC = 2 * (CC * ZC - QC * zC),
-         WC = 2 * (zC * ZC + QC * CC),
-         NC = 1 - 2 * (CC * CC + zC * zC);
-       bC[1] = Math.asin(-Math.min(1, Math.max(-1, FC))) * wC, Math.abs(FC) < .9999999 ? (bC[0] = Math.atan2(WC, NC) * wC, bC[2] = Math.atan2(oC, nC) * wC) : (bC[0] = 0, bC[2] = Math.atan2(-fC, qC) * wC)
+     function po(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 2));
+       return Op ? (pp.S = +Op[0], cp + Op[0].length) : -1
```

#### 684. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35667-L35675` → after: `L17493-L17494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17493-L17494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17493-L17494) · [Before (L35667-L35675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35667-L35675)

```diff
-       const QC = CC[0],
-         wC = CC[1],
-         bC = CC[2],
-         nC = CC[3],
-         fC = zC[0],
-         oC = zC[1],
-         qC = zC[2],
-         FC = zC[3];
-       ZC[0] = nC * fC + QC * FC + wC * qC - bC * oC, ZC[1] = nC * oC - QC * qC + wC * FC + bC * fC, ZC[2] = nC * qC + QC * oC - wC * fC + bC * FC, ZC[3] = nC * FC - QC * fC - wC * oC - bC * qC
+       var Op = XO.exec(ip.slice(cp, cp + 3));
+       return Op ? (pp.L = +Op[0], cp + Op[0].length) : -1
```

#### 685. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35678-L35679` → after: `L17497-L17499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17497-L17499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17497-L17499) · [Before (L35678-L35679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35678-L35679)

```diff
-     function WC(CC, zC) {
-       return CC <= 0 ? 1 : 1 - Math.exp(-CC * zC)
+     function co(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp, cp + 6));
+       return Op ? (pp.L = Math.floor(Op[0] / 1e3), cp + Op[0].length) : -1
```

#### 686. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35700-L35704` → after: `L17502-L17522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17502-L17522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17502-L17522) · [Before (L35700-L35704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35700-L35704)

```diff
-     function qC(CC) {
-       return {
-         constant: CC,
-         input: -1
-       }
+     function Oo(pp, ip, cp) {
+       var Op = lO.exec(ip.slice(cp, cp + 1));
+       return Op ? cp + Op[0].length : -1
+     }
+ 
+     function oo(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp));
+       return Op ? (pp.Q = +Op[0], cp + Op[0].length) : -1
+     }
+ 
+     function Io(pp, ip, cp) {
+       var Op = XO.exec(ip.slice(cp));
+       return Op ? (pp.s = +Op[0], cp + Op[0].length) : -1
+     }
+ 
+     function So(pp, ip) {
+ ... (5 more added lines; see GitHub link above)
```

#### 687. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35708` → after: `L17526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17526) · [Before (L35708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35708)

```diff
-       return void 0 === CC ? 0 : MC(CC, 0, .001, 1e3, zC)
+       return JO(pp.getHours() % 12 || 12, ip, 2)
```

#### 688. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35712-L35714` → after: `L17530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17530) · [Before (L35712-L35714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35712-L35714)

```diff
-       if (void 0 === CC || "add" === CC) return nC.g.Add;
-       if ("override" === CC) return nC.g.Override;
-       throw new oC(`${zC} must be "add" or "override"`)
+       return JO(1 + zc.count(vO(pp), pp), ip, 3)
```

#### 689. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35718-L35722` → after: `L17534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17534) · [Before (L35718-L35722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35718-L35722)

```diff
-       if (void 0 === CC) return null;
-       if (!Array.isArray(CC) || 0 === CC.length || CC.length > 128) throw new oC(`${zC} must list 1-128 bone names`);
-       for (const ZC of CC)
-         if ("string" !== typeof ZC || 0 === ZC.length || ZC.length > 128) throw new oC(`${zC} must list bone names`);
-       return CC
+       return JO(pp.getMilliseconds(), ip, 3)
```

#### 690. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35725-L35728` → after: `L17537-L17538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17537-L17538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17537-L17538) · [Before (L35725-L35728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35725-L35728)

```diff
-     function MC(CC, zC, ZC, QC, wC) {
-       if (void 0 === CC) return zC;
-       if ("number" !== typeof CC || !Number.isFinite(CC) || CC < ZC || CC > QC) throw new oC(`${wC} must be a number from ${ZC} to ${QC}`);
-       return CC
+     function Ao(pp, ip) {
+       return Do(pp, ip) + "000"
```

#### 691. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35732-L35733` → after: `L17542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17542) · [Before (L35732-L35733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35732-L35733)

```diff
-       if (!(0, fC.j)(CC)) throw new oC(`${zC} must be an object`);
-       return CC
+       return JO(pp.getMonth() + 1, ip, 2)
```

#### 692. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35736-L35747` → after: `L17545-L17547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17545-L17547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17545-L17547) · [Before (L35736-L35747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35736-L35747)

```diff
-     function SC(CC, zC, ZC) {
-       for (const QC of Object.keys(CC))
-         if (!zC.includes(QC)) throw new oC(`${ZC}: unknown key "${QC}"`)
-     }
-     var pC = ZC(37235),
-       PC = ZC(37244),
-       GC = ZC(37222),
-       RC = ZC(37246);
-     const AC = 65536,
-       xC = 1e6,
-       JC = ["clip", "blend", "rate", "stride", "rest"],
-       IC = /^[A-Za-z_][A-Za-z0-9_]{0,63}$/;
+     function Wo(pp, ip) {
+       return JO(pp.getMinutes(), ip, 2)
+     }
```

#### 693. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35749-L35773` → after: `L17549-L17550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17549-L17550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17549-L17550) · [Before (L35749-L35773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35749-L35773)

```diff
-     function iC(CC, zC, ZC) {
-       const QC = CC => ({
-         binding: null,
-         diagnostics: [{
-           severity: GC.b.Error,
-           source: zC,
-           message: CC
-         }]
-       });
-       if (CC.length > AC) return QC(`file is ${CC.length} characters, over the ${AC} limit`);
-       let wC;
-       try {
-         wC = JSON.parse(CC)
-       } catch (bC) {
-         return QC(`invalid JSON: ${bC.message}`)
-       }
- ... (9 more removed lines; see GitHub link above)
+     function yo(pp, ip) {
+       return JO(pp.getSeconds(), ip, 2)
```

#### 694. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L35777-L36033` → after: `L17554-L17555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17554-L17555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17554-L17555) · [Before (L35777-L36033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L35777-L36033)

```diff
-       if (CC.length > AC) return null;
-       try {
-         const zC = JSON.parse(CC);
-         return (0, fC.j)(zC) && "string" === typeof zC.target ? zC.target : null
-       } catch {
-         return null
-       }
-     }
-     class eC {
-       constructor(CC, zC) {
-         this.source = CC, this.options = zC, this.inputIndexByName = new Map;
-         for (const [ZC, QC] of RC.g) this.inputIndexByName.set(ZC, QC)
-       }
-       compile(CC) {
-         const zC = gC(CC, "the file");
-         if (SC(zC, ["format_version", "target", "inputs", "variables", "layers", "actions"], "the file"), zC.format_version !== nC.b) throw new oC(`format_version must be "${nC.b}"`);
- ... (241 more removed lines; see GitHub link above)
+       var ip = pp.getDay();
+       return 0 === ip ? 7 : ip
```

#### 695. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36037-L36052` → after: `L17559-L17560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17559-L17560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17559-L17560) · [Before (L36037-L36052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36037-L36052)

```diff
-       return void 0 === CC[zC] ? {} : CC[zC]
-     }
-     var KC = ZC(37252);
-     const YC = 64,
-       dC = 2097152,
-       mC = /^[A-Za-z0-9][A-Za-z0-9 _.-]{0,95}\.(animation|binding)\.json$/,
-       HC = ".animation.json",
-       EC = new Set(["Player", "NPC", "Person"]),
-       lC = "crouching",
-       XC = new Set([...QC.n, ...wC.p, lC]),
-       cC = "parked",
-       uC = "occupied",
-       rC = new Set([cC, uC]),
-       sC = new Set(bC.e),
-       TC = new Set([...QC.p.filter((CC => !EC.has(CC))), ...sC]),
-       aC = new Set([...TC, ...EC]);
+       return JO(pO.count(vO(pp) - 1, pp), ip, 2)
+     }
```

#### 696. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36055` → after: `L17563-L17568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17563-L17568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17563-L17568) · [Before (L36055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36055)

```diff
-       return sC.has(CC)
+       var ip = pp.getDay();
+       return ip >= 4 || 0 === ip ? oO(pp) : oO.ceil(pp)
+     }
+ 
+     function to(pp, ip) {
+       return pp = vo(pp), JO(oO.count(vO(pp), pp) + (4 === vO(pp).getDay()), ip, 2)
```

#### 697. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36059` → after: `L17572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17572) · [Before (L36059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36059)

```diff
-       return tC(CC) ? rC : XC
+       return pp.getDay()
```

#### 698. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36064-L36127` → after: `L17576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17576) · [Before (L36064-L36127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36064-L36127)

```diff
-       const ZC = "builtIn" === zC,
-         QC = ZC ? aC : TC,
-         wC = [],
-         bC = (CC, zC) => {
-           wC.push({
-             severity: GC.b.Error,
-             source: CC,
-             message: zC
-           })
-         },
-         nC = Object.keys(CC);
-       let fC = 0;
-       for (const SC of nC) fC += SC.length + ("string" === typeof CC[SC] ? CC[SC].length : 0);
-       if (!ZC && (nC.length > YC || fC > dC)) return bC("animations", `${nC.length} files and ${fC} characters, over the ${YC} file or ${dC} character limit`), {
-         pool: new pC.c([]),
-         bindings: new Map,
- ... (48 more removed lines; see GitHub link above)
+       return JO(iO.count(vO(pp) - 1, pp), ip, 2)
```

#### 699. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36130-L36138` → after: `L17579-L17580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17579-L17580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17579-L17580) · [Before (L36130-L36138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36130-L36138)

```diff
-     function LC(CC, zC, ZC) {
-       const QC = CC.bindings.get(zC);
-       return void 0 === QC ? {
-         binding: null,
-         diagnostics: []
-       } : iC(QC.text, QC.name, {
-         stateNames: DC(zC),
-         pools: [CC.pool, ...ZC]
-       })
+     function uo(pp, ip) {
+       return JO(pp.getFullYear() % 100, ip, 2)
```

#### 700. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36142-L36185` → after: `L17583-L17584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17583-L17584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17583-L17584) · [Before (L36142-L36185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36142-L36185)

```diff
-     function BC(CC, zC, ZC) {
-       const QC = DC(ZC),
-         wC = CC.targetClips.get(ZC),
-         bC = CC.bindings.get(ZC);
-       if (void 0 !== bC) {
-         const ZC = void 0 === wC ? [CC.pool, zC.pool] : [wC.pool, CC.pool, zC.pool];
-         return iC(bC.text, bC.name, {
-           stateNames: QC,
-           pools: ZC
-         })
-       }
-       if (void 0 === wC) return {
-         binding: null,
-         diagnostics: []
-       };
-       const nC = zC.bindings.get(ZC);
- ... (28 more removed lines; see GitHub link above)
+     function jo(pp, ip) {
+       return JO((pp = vo(pp)).getFullYear() % 100, ip, 2)
```

#### 701. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36189-L36193` → after: `L17588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17588) · [Before (L36189-L36193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36189-L36193)

```diff
-       return {
-         severity: GC.b.Warning,
-         source: CC,
-         message: zC
-       }
+       return JO(pp.getFullYear() % 1e4, ip, 4)
```

#### 702. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36195-L36244` → after: `L17590-L17593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17590-L17593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17590-L17593) · [Before (L36195-L36244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36195-L36244)

```diff
-   },
-   37252: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => wC,
-       h: () => nC,
-       j: () => bC
-     });
-     var QC = ZC(37222);
-     class wC {
-       constructor(CC, zC) {
-         this.binding = CC, this.rig = zC, this.boneIndicesByClip = new Map, this.layerMasks = void 0, this.actionMasks = void 0, this.diagnostics = [], this.missing = new Set, this.animatesRig = !1, this.layerMasks = CC.layers.map((CC => {
-           for (const zC of fC(CC)) this.boneIndices(zC);
-           return this.mask(CC.bones, `layer "${CC.name}"`)
-         }));
-         const ZC = new Map;
-         for (const QC of CC.actions.values()) this.boneIndices(QC.clip.clip), ZC.set(QC.name, this.mask(QC.bones, `action "${QC.name}"`));
- ... (34 more removed lines; see GitHub link above)
+ 
+     function mo(pp, ip) {
+       var cp = pp.getDay();
+       return JO((pp = cp >= 4 || 0 === cp ? oO(pp) : oO.ceil(pp)).getFullYear() % 1e4, ip, 4)
```

#### 703. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36248-L36259` → after: `L17597-L17598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17597-L17598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17597-L17598) · [Before (L36248-L36259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36248-L36259)

```diff
-       const zC = new Set,
-         ZC = (CC, ZC) => {
-           const QC = null === ZC ? null : new Set(ZC.map((CC => CC.toLowerCase())));
-           for (const wC of CC.bones) {
-             const CC = wC.name.toLowerCase();
-             (null === QC || QC.has(CC)) && zC.add(CC)
-           }
-         };
-       for (const QC of CC.layers)
-         for (const CC of fC(QC)) ZC(CC, QC.bones);
-       for (const QC of CC.actions.values()) ZC(QC.clip.clip, QC.bones);
-       return zC
+       var ip = pp.getTimezoneOffset();
+       return (ip > 0 ? "-" : (ip *= -1, "+")) + JO(ip / 60 | 0, "0", 2) + JO(ip % 60, "0", 2)
```

#### 704. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36262-L36264` → after: `L17601-L17602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17601-L17602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17601-L17602) · [Before (L36262-L36264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36262-L36264)

```diff
-     function* nC(CC) {
-       for (const zC of CC.layers) yield* oC(zC);
-       for (const zC of CC.actions.values()) yield zC.clip
+     function qo(pp, ip) {
+       return JO(pp.getUTCDate(), ip, 2)
```

#### 705. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36267-L36268` → after: `L17605-L17606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17605-L17606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17605-L17606) · [Before (L36267-L36268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36267-L36268)

```diff
-     function* fC(CC) {
-       for (const zC of oC(CC)) yield zC.clip
+     function Mo(pp, ip) {
+       return JO(pp.getUTCHours(), ip, 2)
```

#### 706. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36271-L36276` → after: `L17609-L17610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17609-L17610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17609-L17610) · [Before (L36271-L36276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36271-L36276)

```diff
-     function* oC(CC) {
-       for (const ZC of [...CC.states.values(), CC.fallback])
-         for (const CC of null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.children) && void 0 !== zC ? zC : []) {
-           var zC;
-           yield CC.clip
-         }
+     function Co(pp, ip) {
+       return JO(pp.getUTCHours() % 12 || 12, ip, 2)
```

#### 707. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36295-L36321` → after: `L17613-L17614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17613-L17614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17613-L17614) · [Before (L36295-L36321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36295-L36321)

```diff
-     function oC(CC) {
-       return "" === CC || "0" === CC || CC.length > wC.b ? CC : bC.test(CC) ? (-parseFloat(CC)).toString() : function(CC, zC) {
-         if (CC.includes("return ")) return function(CC, zC) {
-           let ZC = "",
-             QC = 0,
-             wC = 0;
-           for (;;) {
-             const bC = CC.indexOf("return ", wC);
-             if (-1 === bC) break;
-             const nC = bC + 7,
-               fC = FC(CC, nC);
-             if (-1 !== fC) {
-               if (ZC += CC.substring(QC, nC) + zC(CC.substring(nC, fC)), QC = fC, fC === CC.length) break;
-               wC = fC + 1
-             } else wC = WC(CC, nC) + 1
-           }
- ... (11 more removed lines; see GitHub link above)
+     function Eo(pp, ip) {
+       return JO(1 + sc.count(tO(pp), pp), ip, 3)
```

#### 708. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36324-L36347` → after: `L17617-L17618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17617-L17618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17617-L17618) · [Before (L36324-L36347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36324-L36347)

```diff
-     function qC(CC) {
-       let zC, ZC = !0,
-         QC = 0,
-         wC = "";
-       for (const bC of CC) {
-         if (0 === QC) {
-           let CC, QC = !0;
-           if ("-" === bC && "*" !== zC && "/" !== zC) {
-             ZC || zC || (wC += "+"), ZC = !1;
-             continue
-           }
-           if (" " === bC || "\n" === bC) QC = !1;
-           else {
-             if ("+" === bC && "*" !== zC && "/" !== zC) {
-               wC += "-", ZC = !1;
-               continue
- ... (8 more removed lines; see GitHub link above)
+     function Xo(pp, ip) {
+       return JO(pp.getUTCMilliseconds(), ip, 3)
```

#### 709. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36351-L36356` → after: `L17622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17622) · [Before (L36351-L36356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36351-L36356)

```diff
-       if (zC >= CC.length || NC(CC[zC])) return -1;
-       for (let ZC = zC + 1; ZC < CC.length; ZC++) {
-         if (";" === CC[ZC]) return ZC;
-         if (NC(CC[ZC])) return -1
-       }
-       return CC.length
+       return Xo(pp, ip) + "000"
```

#### 710. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36360-L36362` → after: `L17626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17626) · [Before (L36360-L36362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36360-L36362)

```diff
-       for (let ZC = zC; ZC < CC.length; ZC++)
-         if (NC(CC[ZC])) return ZC;
-       return CC.length
+       return JO(pp.getUTCMonth() + 1, ip, 2)
```

#### 711. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36365-L36366` → after: `L17629-L17630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17629-L17630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17629-L17630) · [Before (L36365-L36366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36365-L36366)

```diff
-     function NC(CC) {
-       return "\n" === CC || "\r" === CC || "\u2028" === CC || "\u2029" === CC
+     function Bo(pp, ip) {
+       return JO(pp.getUTCMinutes(), ip, 2)
```

#### 712. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36373-L36375` → after: `L17634-L17639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17634-L17639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17634-L17639) · [Before (L36373-L36375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36373-L36375)

```diff
-       const ZC = SC.test(CC) ? Number(CC) : NaN;
-       if (!(ZC >= 0 && ZC <= gC)) throw new MC(`${zC}: keyframe time "${CC}" must be a number of seconds from 0 to ${gC}`);
-       return ZC
+       return JO(pp.getUTCSeconds(), ip, 2)
+     }
+ 
+     function To(pp) {
+       var ip = pp.getUTCDay();
+       return 0 === ip ? 7 : ip
```

#### 713. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36379-L36382` → after: `L17643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17643) · [Before (L36379-L36382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36379-L36382)

```diff
-       const ZC = CC.lerp_mode;
-       if (void 0 === ZC || "linear" === ZC) return !1;
-       if ("catmullrom" === ZC) return !0;
-       throw new MC(`${zC}: lerp_mode ${JSON.stringify(ZC)} is not supported (linear or catmullrom)`)
+       return JO(LO.count(tO(pp) - 1, pp), ip, 2)
```

#### 714. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36385-L36395` → after: `L17646-L17648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17646-L17648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17646-L17648) · [Before (L36385-L36395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36385-L36395)

```diff
-     function GC(CC, zC, ZC) {
-       if (IC(CC)) {
-         const QC = CC.pre,
-           wC = CC.post,
-           bC = [];
-         QC && bC.push(RC(QC, zC, ZC));
-         const nC = Array.isArray(QC) && Array.isArray(wC) && QC.length === wC.length && QC.every(((CC, zC) => CC === wC[zC]));
-         if (wC && !nC && bC.push(RC(wC, zC, ZC)), 0 === bC.length) throw new MC(`${ZC}: a keyframe needs "post" and optionally "pre"`);
-         return bC
-       }
-       return [RC(CC, zC, ZC)]
+     function bo(pp) {
+       var ip = pp.getUTCDay();
+       return ip >= 4 || 0 === ip ? PO(pp) : PO.ceil(pp)
```

#### 715. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36398-L36419` → after: `L17651-L17652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17651-L17652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17651-L17652) · [Before (L36398-L36419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36398-L36419)

```diff
-     function RC(CC, zC, ZC) {
-       if ("number" === typeof CC || "string" === typeof CC) return [CC, CC, CC];
-       if (Array.isArray(CC)) return function(CC, zC) {
-         switch (zC) {
-           case QC.d.Position:
-             return [AC(CC[0]), CC[1], CC[2]];
-           case QC.d.Rotation:
-             return [AC(CC[0]), AC(CC[1]), CC[2]];
-           case QC.d.Scale:
-             return CC
-         }
-       }(function(CC, zC) {
-         for (const ZC of CC)
-           if ("number" !== typeof ZC && "string" !== typeof ZC) throw new MC(`${zC}: vector elements must be numbers or Molang strings`);
-         if (1 === CC.length) {
-           const zC = CC[0];
- ... (6 more removed lines; see GitHub link above)
+     function ho(pp, ip) {
+       return pp = bo(pp), JO(PO.count(tO(pp), pp) + (4 === tO(pp).getUTCDay()), ip, 2)
```

#### 716. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36423` → after: `L17656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17656) · [Before (L36423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36423)

```diff
-       return "number" === typeof CC ? 0 === CC ? 0 : -CC : oC(CC)
+       return pp.getUTCDay()
```

#### 717. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36426-L36433` → after: `L17659-L17660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17659-L17660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17659-L17660) · [Before (L36426-L36433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36426-L36433)

```diff
-     function xC(CC) {
-       let zC = !1;
-       for (let wC = 0; wC < CC.length; wC++) {
-         const bC = CC[wC],
-           nC = CC[wC + 1];
-         void 0 !== nC && 2 === nC.dataPoints.length && (ZC = bC.dataPoints[bC.dataPoints.length - 1], QC = nC.dataPoints[0], String(ZC[0]) === String(QC[0]) && String(ZC[1]) === String(QC[1]) && String(ZC[2]) === String(QC[2])) ? (nC.dataPoints.splice(0, 1), JC(bC), zC = !0) : vo … [truncated]
-       }
-       var ZC, QC
+     function no(pp, ip) {
+       return JO(YO.count(tO(pp) - 1, pp), ip, 2)
```

#### 718. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36436-L36437` → after: `L17663-L17664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17663-L17664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17663-L17664) · [Before (L36436-L36437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36436-L36437)

```diff
-     function JC(CC) {
-       CC.step = !0, CC.catmullRom = !1
+     function Fo(pp, ip) {
+       return JO(pp.getUTCFullYear() % 100, ip, 2)
```

#### 719. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36440-L36441` → after: `L17667-L17668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17667-L17668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17667-L17668) · [Before (L36440-L36441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36440-L36441)

```diff
-     function IC(CC) {
-       return "object" === typeof CC && null !== CC && !Array.isArray(CC)
+     function go(pp, ip) {
+       return JO((pp = bo(pp)).getUTCFullYear() % 100, ip, 2)
```

#### 720. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36645-L36646` → after: `L17671-L17672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17671-L17672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17671-L17672) · [Before (L36645-L36646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36645-L36646)

```diff
-     function kz() {
-       return Oz ??= (0, Uz.w)(Bz, "builtIn"), Oz
+     function Go(pp, ip) {
+       return JO(pp.getUTCFullYear() % 1e4, ip, 4)
```

#### 721. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36648-L36721` → after: `L17674-L17677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17674-L17677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17674-L17677) · [Before (L36648-L36721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36648-L36721)

```diff
-   },
-   37227: (CC, zC, ZC) => {
-     function QC(CC, zC, ZC) {
-       if ("+" !== CC && "-" !== CC && "*" !== CC && "/" !== CC) return null;
-       const QC = zC.evaluate,
-         wC = ZC.evaluate,
-         bC = ZC.constant;
-       if (null !== bC) {
-         if ("/" === CC) return 0 === bC ? () => 0 : CC => QC(CC) / bC;
-         if (void 0 !== zC.query) {
-           const ZC = zC.query;
-           switch (CC) {
-             case "+":
-               return CC => CC.queries[ZC] + bC;
-             case "-":
-               return CC => CC.queries[ZC] - bC
- ... (58 more removed lines; see GitHub link above)
+ 
+     function ro(pp, ip) {
+       var cp = pp.getUTCDay();
+       return JO((pp = cp >= 4 || 0 === cp ? PO(pp) : PO.ceil(pp)).getUTCFullYear() % 1e4, ip, 4)
```

#### 722. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L36723-L36938` → after: `L17679-L17685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17679-L17685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17679-L17685) · [Before (L36723-L36938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L36723-L36938)

```diff
-     ZC.d(zC, {
-       b: () => cC,
-       d: () => XC,
-       f: () => DC,
-       g: () => sC
-     });
-     var wC = ZC(37009);
-     const bC = CC => {
-         if (CC < 1 / 2.75) return 7.5625 * CC * CC;
-         if (CC < 2 / 2.75) {
-           const zC = CC - 1.5 / 2.75;
-           return 7.5625 * zC * zC + .75
-         }
-         if (CC < 2.5 / 2.75) {
-           const zC = CC - 2.25 / 2.75;
-           return 7.5625 * zC * zC + .9375
- ... (200 more removed lines; see GitHub link above)
+ 
+     function Zo() {
+       return "+0000"
+     }
+ 
+     function zo() {
+       return "%"
```

#### 723. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37009-L37170` → after: `L17689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17689) · [Before (L37009-L37170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37009-L37170)

```diff
-       return {
-         constant: CC,
-         readsClock: !1,
-         readsAnimTime: !1,
-         cost: 0,
-         evaluate: () => CC
-       }
-     }
-     class TC {
-       constructor(CC, zC) {
-         this.tokens = CC, this.variableSlots = zC, this.index = 0, this.depth = 0, this.nodeCount = 0, this.readsClock = !1, this.readsAnimTime = !1
-       }
-       get nodes() {
-         return this.nodeCount
-       }
-       parseProgram() {
- ... (146 more removed lines; see GitHub link above)
+       return +pp
```

#### 724. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37172-L37179` → after: `L17691-L17693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17691-L17693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17691-L17693) · [Before (L37172-L37179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37172-L37179)

```diff
-     const aC = CC => Number.isFinite(CC) ? CC : 0;
-     class tC {
-       constructor(CC, zC, ZC, QC) {
-         this.root = CC, this.readsClock = zC, this.readsAnimTime = ZC, this.cost = QC, this.constant = null
-       }
-       evaluate(CC) {
-         return aC(this.root(CC))
-       }
+ 
+     function Ko(pp) {
+       return Math.floor(+pp / 1e3)
```

#### 725. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37182-L37201` → after: `L17696-L17697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17696-L17697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17696-L17697) · [Before (L37182-L37201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37182-L37201)

```diff
-     function DC(CC, zC) {
-       try {
-         if (CC.length > cC) throw new mC(`expression is longer than ${cC} characters`, cC);
-         if ("" === CC.trim()) return {
-           ok: !0,
-           value: sC(0)
-         };
-         const ZC = new TC(EC(CC), zC.variableSlots),
-           QC = ZC.parseProgram();
-         return {
-           ok: !0,
-           value: null === QC.constant ? new tC(QC.evaluate, ZC.readsClock, ZC.readsAnimTime, ZC.nodes) : sC(aC(QC.constant))
-         }
-       } catch (ZC) {
-         if (ZC instanceof mC) return {
-           ok: !1,
- ... (4 more removed lines; see GitHub link above)
+     function Vo(pp) {
+       return new Date(pp)
```

#### 726. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37214-L37215` → after: `L17701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17701) · [Before (L37214-L37215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37214-L37215)

```diff
-       if ("Cb" in CC) return JC.createAnimationScript(CC);
-       return new qC(CC).createAnimationScript()
+       return pp instanceof Date ? +pp : +new Date(+pp)
```

#### 727. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37218-L37220` → after: `L17704-L17734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17704-L17734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17704-L17734) · [Before (L37218-L37220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37218-L37220)

```diff
-     function fC(CC, zC, ZC, wC) {
-       const bC = CC.Cb <= 0 ? 1 : zC + ZC * Math.max(0, wC) / CC.Cb;
-       return CC.zb === QC.g.LoopOnLastFrame ? bC % 1 : CC.zb === QC.g.NoLoop && bC >= 1 ? null : Math.min(1, bC)
+     function iI(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
+       var Dp = Ci(),
+         Ap = Dp.invert,
+         Pp = Dp.domain,
+         Wp = Yp(".%L"),
+         yp = Yp(":%S"),
+         Up = Yp("%I:%M"),
+         wp = Yp("%I %p"),
+         vp = Yp("%a %d"),
+         tp = Yp("%b %d"),
+         Hp = Yp("%B"),
+         dp = Yp("%Y");
+ 
+       function ep(pp) {
+         return (Lp(pp) < pp ? Wp : xp(pp) < pp ? yp : Sp(pp) < pp ? Up : Ip(pp) < pp ? wp : Op(pp) < pp ? op(pp) < pp ? vp : tp : cp(pp) < pp ? Hp : dp)(pp)
+       }
+ ... (15 more added lines; see GitHub link above)
```

#### 728. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37222-L37304` → after: `L17736-L17738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17736-L17738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17736-L17738) · [Before (L37222-L37304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37222-L37304)

```diff
-     class oC {
-       createAnimationScript(CC) {
-         const {
-           Cb: zC,
-           loop: ZC,
-           Zb: QC
-         } = CC;
-         return {
-           Cb: Math.round(zC),
-           zb: this.createLoopMode(null !== ZC && void 0 !== ZC && ZC),
-           Zb: this.createNodeSkeletonAnimationScript(null !== QC && void 0 !== QC ? QC : null)
-         }
-       }
-       createLoopMode(CC) {
-         switch (CC) {
-           case !1:
- ... (67 more removed lines; see GitHub link above)
+ 
+     function cI() {
+       return Xi.d.apply(iI(uO, jO, vO, UO, pO, zc, rc, gc, Fc, MO).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
```

#### 729. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37306-L37312` → after: `L17740-L17752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17740-L17752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17740-L17752) · [Before (L37306-L37312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37306-L37312)

```diff
-     oC.LERP_MODE_SCHEMA_MAPPING = {
-       linear: QC.f.Linear,
-       "catmull-rom-spline": QC.f.CatmullRomSpline
-     };
-     class qC {
-       constructor(CC) {
-         this.animationSchema = CC
+ 
+     function OI() {
+       return Xi.d.apply(iI(dO, eO, tO, wO, LO, sc, Zc, Gc, Fc, CO).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
+     }
+ 
+     function oI() {
+       var pp, ip, cp, Op, op, Ip = 0,
+         Sp = 1,
+         xp = ji,
+         Lp = !1;
+ 
+       function Yp(ip) {
+         return null == ip || isNaN(ip = +ip) ? op : xp(0 === cp ? .5 : (ip = (Op(ip) - pp) * cp, Lp ? Math.max(0, Math.min(1, ip)) : ip))
```

#### 730. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37314-L37323` → after: `L17754-L17758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17754-L17758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17754-L17758) · [Before (L37314-L37323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37314-L37323)

```diff
-       createAnimationScript() {
-         const {
-           animation_length: CC,
-           loop: zC,
-           bones: ZC
-         } = this.animationSchema;
-         return {
-           Cb: Math.round(1e3 * CC),
-           zb: this.createLoopMode(null !== zC && void 0 !== zC && zC),
-           Zb: this.createNodeSkeletonAnimationScript(null !== ZC && void 0 !== ZC ? ZC : null)
+ 
+       function Dp(pp) {
+         return function(ip) {
+           var cp, Op;
+           return arguments.length ? ([cp, Op] = ip, xp = pp(cp, Op), Yp) : [xp(0), xp(1)]
```

#### 731. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37326-L37342` → after: `L17761-L17771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17761-L17771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17761-L17771) · [Before (L37326-L37342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37326-L37342)

```diff
-       createLoopMode(CC) {
-         switch (CC) {
-           case !1:
-             return QC.g.NoLoop;
-           case !0:
-             return QC.g.LoopOnLastFrame;
-           case "hold_on_last_frame":
-             return QC.g.HoldOnLastFrame
-         }
-         throw new Error(`Invalid Blockbench loop mode schema: ${CC}`)
-       }
-       createNodeSkeletonAnimationScript(CC) {
-         if (null === CC) return null;
-         const zC = {};
-         for (const ZC in CC) {
-           const QC = CC[ZC];
- ... (1 more removed lines; see GitHub link above)
+       return Yp.domain = function(op) {
+           return arguments.length ? ([Ip, Sp] = op, pp = Op(Ip = +Ip), ip = Op(Sp = +Sp), cp = pp === ip ? 0 : 1 / (ip - pp), Yp) : [Ip, Sp]
+         }, Yp.clamp = function(pp) {
+           return arguments.length ? (Lp = !!pp, Yp) : Lp
+         }, Yp.interpolator = function(pp) {
+           return arguments.length ? (xp = pp, Yp) : xp
+         }, Yp.range = Dp(Hi), Yp.rangeRound = Dp(di), Yp.unknown = function(pp) {
+           return arguments.length ? (op = pp, Yp) : op
+         },
+         function(op) {
+           return Op = op, pp = op(Ip), ip = op(Sp), cp = pp === ip ? 0 : 1 / (ip - pp), Yp
```

#### 732. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37344` → after: `L17773-L17816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17773-L17816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17773-L17816) · [Before (L37344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37344)

```diff
-         return zC
+     }
+ 
+     function II(pp, ip) {
+       return ip.domain(pp.domain()).interpolator(pp.interpolator()).clamp(pp.clamp()).unknown(pp.unknown())
+     }
+ 
+     function SI() {
+       var pp = zi(oI()(ji));
+       return pp.copy = function() {
+         return II(pp, SI())
+       }, Xi.b.apply(pp, arguments)
+     }
+ 
+     function xI() {
+       var pp = Sc(oI()).domain([1, 10]);
+       return pp.copy = function() {
+ ... (28 more added lines; see GitHub link above)
```

#### 733. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37346-L37354` → after: `L17818-L17845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17818-L17845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17818-L17845) · [Before (L37346-L37354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37346-L37354)

```diff
-       createNodeAnimationScript(CC) {
-         const {
-           rotation: zC,
-           position: ZC
-         } = CC;
-         return {
-           rotation: this.createAnimationTimeline(null !== zC && void 0 !== zC ? zC : null, pC, NC, !0),
-           position: this.createAnimationTimeline(null !== ZC && void 0 !== ZC ? ZC : null, GC, gC, !1)
-         }
+       return cp.domain = function(ip) {
+         if (!arguments.length) return pp.slice();
+         pp = [];
+         for (let cp of ip) null == cp || isNaN(cp = +cp) || pp.push(cp);
+         return pp.sort(Pp), cp
+       }, cp.interpolator = function(pp) {
+         return arguments.length ? (ip = pp, cp) : ip
+       }, cp.range = function() {
+         return pp.map(((cp, Op) => ip(Op / (pp.length - 1))))
+       }, cp.quantiles = function(ip) {
+         return Array.from({
+           length: ip + 1
+         }, ((cp, Op) => qc(pp, Op / ip)))
+       }, cp.copy = function() {
+         return AI(ip).domain(pp)
+       }, Xi.b.apply(cp, arguments)
+ ... (12 more added lines; see GitHub link above)
```

#### 734. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37356-L37383` → after: `L17847-L17849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17847-L17849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17847-L17849) · [Before (L37356-L37383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37356-L37383)

```diff
-       createAnimationTimeline(CC, zC, ZC, QC) {
-         if (null === CC) return [];
-         if (Array.isArray(CC)) {
-           CC = {
-             "0.0": CC
-           }
-         }
-         const wC = Object.entries(CC).map((CC => {
-           let [ZC, QC] = CC;
-           const wC = Number(ZC) / this.animationSchema.animation_length;
-           return this.createAnimationFrameWithoutPrecomputes(wC, QC, zC)
-         })).filter(FC);
-         wC.sort(((CC, zC) => CC.timeFraction - zC.timeFraction)), QC && function(CC) {
-           for (let zC = 1; zC < CC.length; zC++) {
-             const ZC = CC[zC - 1].post,
-               QC = CC[zC],
- ... (12 more removed lines; see GitHub link above)
+ 
+       function yp(pp) {
+         return function(ip) {
```

#### 735. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37385-L37392` → after: `L17851-L17858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17851-L17858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17851-L17858) · [Before (L37385-L37392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37385-L37392)

```diff
-           const CC = wC[qC],
-             zC = null !== (nC = wC[qC - 1]) && void 0 !== nC ? nC : CC,
-             QC = null !== (fC = wC[qC + 1]) && void 0 !== fC ? fC : CC,
-             FC = null !== (oC = wC[qC + 2]) && void 0 !== oC ? oC : QC;
-           bC.push({
-             ...CC,
-             ...ZC(zC.post, zC.timeFraction, CC.post, CC.timeFraction, QC.pre, QC.timeFraction, FC.pre, FC.timeFraction)
-           })
+           return arguments.length ? ([cp, Op, op] = ip, Ap = function(pp, ip) {
+             void 0 === ip && (ip = pp, pp = Hi);
+             for (var cp = 0, Op = ip.length - 1, op = ip[0], Ip = new Array(Op < 0 ? 0 : Op); cp < Op;) Ip[cp] = pp(op, op = ip[++cp]);
+             return function(pp) {
+               var ip = Math.max(0, Math.min(Op - 1, Math.floor(pp *= Op)));
+               return Ip[ip](pp - ip)
+             }
+           }(pp, [cp, Op, op]), Wp) : [Ap(0), Ap(.5), Ap(1)]
```

#### 736. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37396-L37409` → after: `L17861-L17871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17861-L17871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17861-L17871) · [Before (L37396-L37409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37396-L37409)

```diff
-       createAnimationFrameWithoutPrecomputes(CC, zC, ZC) {
-         let QC, wC, bC = null;
-         if ("object" === typeof zC && "post" in zC) {
-           var nC;
-           bC = null !== (nC = zC.lerp_mode) && void 0 !== nC ? nC : null, wC = SC(zC.post, ZC), QC = zC.pre ? SC(zC.pre, ZC) : wC
-         } else {
-           const CC = SC(zC, ZC);
-           wC = CC, QC = CC
-         }
-         return {
-           timeFraction: CC,
-           nb: this.createLerpMode(bC),
-           pre: QC,
-           post: wC
+       return Wp.domain = function(Sp) {
+           return arguments.length ? ([xp, Lp, Yp] = Sp, pp = Ip(xp = +xp), ip = Ip(Lp = +Lp), cp = Ip(Yp = +Yp), Op = pp === ip ? 0 : .5 / (ip - pp), op = ip === cp ? 0 : .5 / (cp - ip), Dp = ip < pp ? -1 : 1, Wp) : [xp, Lp, Yp]
+         }, Wp.clamp = function(pp) {
+           return arguments.length ? (Pp = !!pp, Wp) : Pp
+         }, Wp.interpolator = function(pp) {
+           return arguments.length ? (Ap = pp, Wp) : Ap
+         }, Wp.range = yp(Hi), Wp.rangeRound = yp(di), Wp.unknown = function(pp) {
+           return arguments.length ? (Sp = pp, Wp) : Sp
+         },
+         function(Sp) {
+           return Ip = Sp, pp = Sp(xp), ip = Sp(Lp), cp = Sp(Yp), Op = pp === ip ? 0 : .5 / (ip - pp), op = ip === cp ? 0 : .5 / (cp - ip), Dp = ip < pp ? -1 : 1, Wp
```

#### 737. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37417-L37418` → after: `L17875-L17879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17875-L17879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17875-L17879) · [Before (L37417-L37418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37417-L37418)

```diff
-     function FC(CC) {
-       return Number.isFinite(CC.timeFraction) && WC(CC.pre) && WC(CC.post)
+     function WI() {
+       var pp = zi(PI()(ji));
+       return pp.copy = function() {
+         return II(pp, WI())
+       }, Xi.b.apply(pp, arguments)
```

#### 738. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37421-L37422` → after: `L17882-L17886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17882-L17886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17882-L17886) · [Before (L37421-L37422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37421-L37422)

```diff
-     function WC(CC) {
-       return Number.isFinite(CC[0]) && Number.isFinite(CC[1]) && Number.isFinite(CC[2])
+     function yI() {
+       var pp = Sc(PI()).domain([.1, 1, 10]);
+       return pp.copy = function() {
+         return II(pp, yI()).base(pp.base())
+       }, Xi.b.apply(pp, arguments)
```

#### 739. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37425-L37434` → after: `L17889-L17893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17889-L17893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17889-L17893) · [Before (L37425-L37434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37425-L37434)

```diff
-     function NC(CC, zC, ZC, QC, wC, bC, nC, fC) {
-       const oC = bC - zC,
-         qC = bC - QC,
-         FC = fC - QC,
-         WC = [null, null, null];
-       for (let NC = 0; NC < WC.length; NC++) WC[NC] = MC(CC[NC], ZC[NC], wC[NC], nC[NC], oC, FC);
-       return {
-         fb: qC,
-         ob: WC
-       }
+     function UI() {
+       var pp = Dc(PI());
+       return pp.copy = function() {
+         return II(pp, UI()).constant(pp.constant())
+       }, Xi.b.apply(pp, arguments)
```

#### 740. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37437-L37442` → after: `L17896-L17900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17896-L17900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17896-L17900) · [Before (L37437-L37442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37437-L37442)

```diff
-     function MC(CC, zC, ZC, QC, bC, nC) {
-       return {
-         Fb: wC.c.computeShortestRotation(CC, ZC) / bC,
-         Wb: wC.c.computeShortestRotation(zC, QC) / nC,
-         delta: wC.c.computeShortestRotation(zC, ZC)
-       }
+     function wI() {
+       var pp = wc(PI());
+       return pp.copy = function() {
+         return II(pp, wI()).exponent(pp.exponent())
+       }, Xi.b.apply(pp, arguments)
```

#### 741. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37445-L37458` → after: `L17903-L17904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17903-L17904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17903-L17904) · [Before (L37445-L37458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37445-L37458)

```diff
-     function gC(CC, zC, ZC, QC, wC, bC, nC, fC) {
-       const oC = bC - zC,
-         qC = bC - QC,
-         FC = fC - QC,
-         WC = [null, null, null];
-       for (let NC = 0; NC < WC.length; NC++) WC[NC] = {
-         Fb: (wC[NC] - CC[NC]) / oC,
-         Wb: (nC[NC] - ZC[NC]) / FC,
-         delta: wC[NC] - ZC[NC]
-       };
-       return {
-         fb: qC,
-         ob: WC
-       }
+     function vI() {
+       return wI.apply(null, arguments).exponent(.5)
```

#### 742. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37462-L37463` → after: `L17908-L18077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR17908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L17908-L18077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L17908-L18077) · [Before (L37462-L37463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37462-L37463)

```diff
-       return null === zC ? CC : zC(CC)
-     }
+       if ((op = pp.length) > 1)
+         for (var cp, Op, op, Ip = 1, Sp = pp[ip[0]], xp = Sp.length; Ip < op; ++Ip)
+           for (Op = Sp, Sp = pp[ip[Ip]], cp = 0; cp < xp; ++cp) Sp[cp][1] += Sp[cp][0] = isNaN(Op[cp][1]) ? Op[cp][0] : Op[cp][1]
+     }! function(pp) {
+       qO = function(pp) {
+         var ip = pp.dateTime,
+           cp = pp.date,
+           Op = pp.time,
+           op = pp.periods,
+           Ip = pp.days,
+           Sp = pp.shortDays,
+           xp = pp.months,
+           Lp = pp.shortMonths,
+           Yp = NO(op),
+           Dp = TO(op),
+           Ap = NO(Ip),
+ ... (154 more added lines; see GitHub link above)
```

#### 743. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37465-L37473` → after: `L18079-L18151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18079-L18151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18079-L18151) · [Before (L37465-L37473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37465-L37473)

```diff
-     function pC(CC) {
-       const [zC, ZC, QC] = CC, nC = -(0, bC.j)(zC), fC = -(0, bC.j)(ZC), oC = (0, bC.j)(QC), qC = wC.c.quaternionFromEulerZYX(nC, fC, oC);
-       return wC.c.eulerYXZFromQuaternion(qC)
-     }
-     qC.LERP_MODE_SCHEMA_MAPPING = {
-       linear: QC.f.Linear,
-       catmullrom: QC.f.CatmullRomSpline
-     };
-     const PC = 1 / 16;
+         function jp(pp, ip) {
+           return function(cp) {
+             var Op, op, Ip, Sp = [],
+               xp = -1,
+               Lp = 0,
+               Yp = pp.length;
+             for (cp instanceof Date || (cp = new Date(+cp)); ++xp < Yp;) 37 === pp.charCodeAt(xp) && (Sp.push(pp.slice(Lp, xp)), null != (op = EO[Op = pp.charAt(++xp)]) ? Op = pp.charAt(++xp) : op = "e" === Op ? " " : "0", (Ip = ip[Op]) && (Op = Ip(cp, op)), Sp.push(Op), Lp = xp  … [truncated]
+             return Sp.push(pp.slice(Lp, xp)), Sp.join("")
+           }
+         }
+ 
+         function kp(pp, ip) {
+           return function(cp) {
+             var Op, op, Ip = RO(1900, void 0, 1);
+             if (mp(Ip, pp, cp += "", 0) != cp.length) return null;
+             if ("Q" in Ip) return new Date(Ip.Q);
+ ... (57 more added lines; see GitHub link above)
```

#### 744. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37476` → after: `L18154-L18155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18154-L18155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18154-L18155) · [Before (L37476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37476)

```diff
-       return [-CC[0] * PC, CC[1] * PC, CC[2] * PC]
+       for (var ip = pp.length, cp = new Array(ip); --ip >= 0;) cp[ip] = ip;
+       return cp
```

#### 745. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37479-L37481` → after: `L18158-L18159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18158-L18159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18158-L18159) · [Before (L37479-L37481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37479-L37481)

```diff
-     function RC(CC) {
-       const [zC, ZC, QC] = CC;
-       return [zC >= 0 ? Math.PI - zC : -Math.PI - zC, AC(ZC + Math.PI), AC(QC + Math.PI)]
+     function uI(pp, ip) {
+       return pp[ip]
```

#### 746. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37485-L37489` → after: `L18163-L18164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18163-L18164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18163-L18164) · [Before (L37485-L37489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37485-L37489)

```diff
-       return wC.c.mod(CC + Math.PI, 2 * Math.PI) - Math.PI
-     }
- 
-     function xC(CC, zC) {
-       return Math.abs(wC.c.computeShortestRotation(CC[0], zC[0])) + Math.abs(wC.c.computeShortestRotation(CC[1], zC[1])) + Math.abs(wC.c.computeShortestRotation(CC[2], zC[2]))
+       const ip = [];
+       return ip.key = pp, ip
```

#### 747. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37491-L37498` → after: `L18166-L18180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18166-L18180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18166-L18180) · [Before (L37491-L37498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37491-L37498)

```diff
-     const JC = new oC
-   },
-   38280: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => fC,
-       h: () => oC
-     });
-     var QC = ZC(338),
+     var kI = cp(6297),
+       mI = cp.n(kI),
+       RI = cp(6305),
+       qI = cp.n(RI),
+       MI = cp(5575),
+       CI = cp.n(MI),
+       EI = cp(5405),
+       XI = cp.n(EI),
+       lI = cp(5301),
+       QI = cp.n(lI),
+       JI = cp(5326),
+       BI = cp.n(JI),
+       NI = cp(6312),
+       TI = cp.n(NI),
+       fI = cp(5319),
```

#### 748. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37500` → after: `L18182-L18188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18182-L18188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18182-L18188) · [Before (L37500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37500)

```diff
-       bC = ZC(38282),
+       hI = cp(6192),
+       aI = cp.n(hI),
+       nI = cp(6322),
+       FI = cp.n(nI),
+       gI = cp(5692),
+       GI = cp.n(gI),
+       rI = cp(6328),
```

#### 749. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37504-L37521` → after: `L18192-L18205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18192-L18205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18192-L18205) · [Before (L37504-L37521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37504-L37521)

```diff
-       return {
-         name: "collideEntitiesProjectile",
-         order: 70,
-         state: {
-           callback: null,
-           _lastPos: null
-         },
-         xR: function(CC, zC) {},
-         lY: null,
-         system: function(zC, ZC) {
-           ! function(CC) {
-             const zC = CC.JR.YH("collideEntitiesProjectile");
-             if (0 === zC.length) return;
-             const ZC = NC(CC);
-             for (const QC of zC) QC && WC(CC, QC, ZC)
-           }(CC)
- ... (2 more removed lines; see GitHub link above)
+       return function(pp) {
+         if (Array.isArray(pp)) return sI(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && Symbol.iterator in Object(pp)) return Array.from(pp)
+       }(pp) || function(pp, ip) {
+         if (!pp) return;
+         if ("string" === typeof pp) return sI(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         "Object" === cp && pp.constructor && (cp = pp.constructor.name);
+         if ("Map" === cp || "Set" === cp) return Array.from(pp);
+         if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return sI(pp, ip)
+       }(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 750. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37525-L37549` → after: `L18209-L18211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18209-L18211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18209-L18211) · [Before (L37525-L37549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37525-L37549)

```diff
-       var ZC;
-       const QC = NC(CC),
-         bC = CC.JR.eT(zC),
-         nC = CC.JR.lL(zC),
-         fC = [bC.wN.base[0] + nC.width / 2, bC.wN.base[1] + nC.height / 2, bC.wN.base[2] + nC.width / 2];
-       wC().add(fC, fC, null !== (ZC = nC.YN) && void 0 !== ZC ? ZC : CC.YN), WC(CC, CC.JR.getState(zC, "collideEntitiesProjectile"), QC, fC)
-     }
-     const qC = wC().create(),
-       FC = [];
- 
-     function WC(CC, zC, ZC) {
-       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CC.JR.yG(zC.mH);
-       if (null === zC._lastPos) return void(zC._lastPos = wC().clone(QC));
-       wC().sub(qC, QC, zC._lastPos);
-       const bC = wC().length(qC);
-       0 === bC && (qC[0] = 1e-4);
- ... (9 more removed lines; see GitHub link above)
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 751. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37553-L37606` → after: `L18302-L18308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18302-L18308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18302-L18308) · [Before (L37553-L37606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37553-L37606)

```diff
-       const zC = CC.JR.YH("collideEntities");
-       for (let bC = 0; bC < zC.length; bC++) {
-         var ZC, QC;
-         const nC = CC.JR.lL(zC[bC].mH),
-           fC = zC[bC].lZC / 2,
-           oC = zC[bC].XZC / 2;
-         FC[bC] = [
-           [nC.GZC[0] - fC, nC.GZC[1] - oC, nC.GZC[2] - fC],
-           [nC.GZC[3] + fC, nC.GZC[4] + oC, nC.GZC[5] + fC]
-         ], wC().add(FC[bC][0], FC[bC][0], null !== (ZC = nC.YN) && void 0 !== ZC ? ZC : CC.YN), wC().add(FC[bC][1], FC[bC][1], null !== (QC = nC.YN) && void 0 !== QC ? QC : CC.YN)
-       }
-       return FC.length = zC.length, zC.slice()
-     }
-   },
-   37521: (CC, zC, ZC) => {
-     ZC.d(zC, {
- ... (38 more removed lines; see GitHub link above)
+       return function(pp) {
+         if (Array.isArray(pp)) return WS(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && Symbol.iterator in Object(pp)) return Array.from(pp)
+       }(pp) || PS(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 752. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37610-L37612` → after: `L18311-L18334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18311-L18334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18311-L18334) · [Before (L37610-L37612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37610-L37612)

```diff
-     function qC(CC) {
-       const zC = CC.JR.yCC(CC.qE);
-       return fC && oC && (zC.isInCobweb !== fC || zC.isInFluid !== oC)
+     function AS(pp, ip) {
+       return function(pp) {
+         if (Array.isArray(pp)) return pp
+       }(pp) || function(pp, ip) {
+         if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(pp))) return;
+         var cp = [],
+           Op = !0,
+           op = !1,
+           Ip = void 0;
+         try {
+           for (var Sp, xp = pp[Symbol.iterator](); !(Op = (Sp = xp.next()).done) && (cp.push(Sp.value), !ip || cp.length !== ip); Op = !0);
+         } catch (Lp) {
+           op = !0, Ip = Lp
+         } finally {
+           try {
+             Op || null == xp.return || xp.return()
+ ... (8 more added lines; see GitHub link above)
```

#### 753. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37615-L37624` → after: `L18337-L18341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18337-L18341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18337-L18341) · [Before (L37615-L37624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37615-L37624)

```diff
-     function FC(CC) {
-       return {
-         name: "movement",
-         order: 30,
-         stateConstructor: nC,
-         xR: (zC, ZC) => {
-           ZC.MN = CC, fC = ZC.isInCobweb, oC = ZC.isInFluid
-         },
-         lY: null,
-         system: function(CC, zC) {}
+     function PS(pp, ip) {
+       if (pp) {
+         if ("string" === typeof pp) return WS(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? WS(pp, ip) : void 0
```

#### 754. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37681-L37699` → after: `L18346-L18348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18346-L18348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18346-L18348) · [Before (L37681-L37699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37681-L37699)

```diff
-       return null !== zC && void 0 !== zC ? zC : CC ? 0 : QC.f.ezBridgeGrowMs
-     }
-     const fC = [
-       [1, 0, 0],
-       [-1, 0, 0],
-       [0, 0, 1],
-       [0, 0, -1]
-     ];
- 
-     function oC(CC, zC, ZC, QC, wC) {
-       for (const [bC, nC, oC] of fC) {
-         if (wC) {
-           const CC = zC + .5 + .5 * bC,
-             ZC = QC + .5 + .5 * oC;
-           if (bC * (wC[0] - CC) + oC * (wC[2] - ZC) <= 0) continue
-         }
- ... (3 more removed lines; see GitHub link above)
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 755. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37706-L37714` → after: `L18352-L18357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18352-L18357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18352-L18357) · [Before (L37706-L37714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37706-L37714)

```diff
-       const zC = wC.g[CC];
-       return !!zC && (!(CC in bC.f) && (zC.model ? "Slab" === zC.model : !zC.twoDBlockItem))
-     }
- 
-     function MC(CC, zC, ZC) {
-       const QC = zC - CC;
-       if (QC <= 0) return FC;
-       const wC = Math.min(1, Math.max(0, (ZC - CC) / QC));
-       return qC + (FC - qC) * wC
+       var ip = AS(pp, 2),
+         cp = ip[0],
+         Op = ip[1],
+         op = cp,
+         Ip = Op;
+       return cp > Op && (op = Op, Ip = cp), [op, Ip]
```

#### 756. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37718-L37719` → after: `L18361-L18367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18361-L18367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18361-L18367) · [Before (L37718-L37719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37718-L37719)

```diff
-       const QC = MC(CC.startedAtMs, CC.endsAtMs, ZC);
-       return MC(zC.startedAtMs, zC.endsAtMs, ZC) >= QC ? zC : CC
+       if (pp.lte(0)) return new(ZI())(0);
+       var Op = YS.getDigitCount(pp.toNumber()),
+         op = new(ZI())(10).pow(Op),
+         Ip = pp.div(op),
+         Sp = 1 !== Op ? .05 : .1,
+         xp = new(ZI())(Math.ceil(Ip.div(Sp).toNumber())).add(cp).mul(Sp).mul(op);
+       return ip ? xp : new(ZI())(Math.ceil(xp))
```

#### 757. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37723-L37761` → after: `L18371-L18380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18371-L18380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18371-L18380) · [Before (L37723-L37761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37723-L37761)

```diff
-       let QC = 1 / 0;
-       for (let wC = 0; wC < 3; wC++) {
-         if (0 === zC[wC]) continue;
-         const bC = zC[wC] > 0 ? ZC[wC] + 1 : ZC[wC];
-         QC = Math.min(QC, (bC - CC[wC]) / zC[wC])
-       }
-       return QC
-     }
-     const pC = Math.sqrt(3)
-   },
-   38012: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => oC,
-       d: () => fC,
-       h: () => qC
-     });
- ... (23 more removed lines; see GitHub link above)
+       var Op = 1,
+         op = new(ZI())(pp);
+       if (!op.isint() && cp) {
+         var Ip = Math.abs(pp);
+         Ip < 1 ? (Op = new(ZI())(10).pow(YS.getDigitCount(pp) - 1), op = new(ZI())(Math.floor(op.div(Op).toNumber())).mul(Op)) : Ip > 1 && (op = new(ZI())(Math.floor(pp)))
+       } else 0 === pp ? op = new(ZI())(Math.floor((ip - 1) / 2)) : cp || (op = new(ZI())(Math.floor(pp)));
+       var Sp = Math.floor((ip - 1) / 2);
+       return SS(IS((function(pp) {
+         return op.add(new(ZI())(pp - Sp).mul(Op)).toNumber()
+       })), oS)(0, ip)
```

#### 758. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37765-L37771` → after: `L18384-L18399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18384-L18399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18384-L18399) · [Before (L37765-L37771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37765-L37771)

```diff
-       if (ZC !== QC.o.GLIDING && bC !== QC.o.GLIDING) return;
-       const nC = CC.JR.yCC(zC);
-       if (nC.gliderFuelCooldownEnd = 0, ZC === QC.o.GLIDING) {
-         var oC;
-         const ZC = null === (oC = CC.JR.gzC(zC)) || void 0 === oC ? void 0 : oC.inventory;
-         ZC && null !== fC(ZC) && CC.bloxd.startGliderFuelCooldown(zC, nC, wC.d.getFirecrackerCooldownMultiplier(ZC.getItemAtSelectedSlot()))
-       }
+       var op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+       if (!Number.isFinite((ip - pp) / (cp - 1))) return {
+         step: new(ZI())(0),
+         tickMin: new(ZI())(0),
+         tickMax: new(ZI())(0)
+       };
+       var Ip, Sp = US(new(ZI())(ip).sub(pp).div(cp - 1), Op, op);
+       Ip = pp <= 0 && ip >= 0 ? new(ZI())(0) : (Ip = new(ZI())(pp).add(ip).div(2)).sub(new(ZI())(Ip).mod(Sp));
+       var xp = Math.ceil(Ip.sub(pp).div(Sp).toNumber()),
+         Lp = Math.ceil(new(ZI())(ip).sub(Ip).div(Sp).toNumber()),
+         Yp = xp + Lp + 1;
+       return Yp > cp ? vS(pp, ip, cp, Op, op + 1) : (Yp < cp && (Lp = ip > 0 ? Lp + (cp - Yp) : Lp, xp = ip > 0 ? xp : xp + (cp - Yp)), {
+         step: Sp,
+         tickMin: Ip.sub(new(ZI())(xp).mul(Sp)),
+         tickMax: Ip.add(new(ZI())(Lp).mul(Sp))
+       })
```

#### 759. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37773-L37784` → after: `L18401-L18464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18401-L18464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18401-L18464) · [Before (L37773-L37784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37773-L37784)

```diff
-   },
-   37842: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => bC,
-       e: () => oC,
-       f: () => nC,
-       i: () => qC,
-       k: () => WC,
-       n: () => FC,
-       p: () => wC
-     });
-     var QC = ZC(4189);
+     var tS = LS((function(pp) {
+         var ip = AS(pp, 2),
+           cp = ip[0],
+           Op = ip[1],
+           op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
+           Ip = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
+           Sp = Math.max(op, 2),
+           xp = AS(yS([cp, Op]), 2),
+           Lp = xp[0],
+           Yp = xp[1];
+         if (Lp === -1 / 0 || Yp === 1 / 0) {
+           var Dp = Yp === 1 / 0 ? [Lp].concat(DS(oS(0, op - 1).map((function() {
+             return 1 / 0
+           })))) : [].concat(DS(oS(0, op - 1).map((function() {
+             return -1 / 0
+           }))), [Yp]);
+ ... (48 more added lines; see GitHub link above)
```

#### 760. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37787-L37788` → after: `L18467-L18471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18467-L18471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18467-L18471) · [Before (L37787-L37788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37787-L37788)

```diff
-       const zC = new QC.j(`blockBreakDrop|${CC}`);
-       return () => zC.next()
+       return kS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, kS(pp)
```

#### 761. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37792` → after: `L18475-L18488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18475-L18488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18475-L18488) · [Before (L37792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37792)

```diff
-       CC.gravityMultiplier = 2, CC.friction = 4, CC.Mq = .02, CC.eN = 0, CC.fluidDrag = .2
+       return function(pp) {
+         if (Array.isArray(pp)) return RS(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || function(pp, ip) {
+         if (!pp) return;
+         if ("string" === typeof pp) return RS(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         "Object" === cp && pp.constructor && (cp = pp.constructor.name);
+         if ("Map" === cp || "Set" === cp) return Array.from(pp);
+         if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return RS(pp, ip)
+       }(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 762. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37796-L37806` → after: `L18492-L18494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18492-L18494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18492-L18494) · [Before (L37796-L37806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37796-L37806)

```diff
-       return [CC[0] + .2 * zC() + .4, CC[1] + .5, CC[2] + .2 * zC() + .4]
-     }
-     const fC = .01;
- 
-     function oC(CC) {
-       return [fC - CC() * fC * 2, .05, fC - CC() * fC * 2]
-     }
- 
-     function qC(CC) {
-       const zC = Math.hypot(CC[0], CC[1], CC[2]);
-       return zC > 0 && Number.isFinite(zC) ? [CC[0] / zC, CC[1] / zC, CC[2] / zC] : null
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 763. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37810` → after: `L18498-L18505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18498-L18505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18498-L18505) · [Before (L37810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37810)

```diff
-       return [CC[0] + .5 * zC[0], CC[1] + .5 * zC[1], CC[2] + .5 * zC[2]]
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
```

#### 764. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37814-L37846` → after: `L18509-L18515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18509-L18515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18509-L18515) · [Before (L37814-L37846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37814-L37846)

```diff
-       return [3.5 / 30 * CC[0], 7 / 30 * CC[1], 3.5 / 30 * CC[2]]
-     }
-   },
-   38309: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => bC,
-       h: () => FC
-     });
-     var QC = ZC(38300),
-       wC = ZC(38312);
-     const bC = .6,
-       nC = .2,
-       fC = .5,
-       oC = .3,
-       qC = .6;
- 
- ... (17 more removed lines; see GitHub link above)
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? qS(Object(cp), !0).forEach((function(ip) {
+           CS(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : qS(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 765. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37861` → after: `L18521-L18538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18521-L18538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18521-L18538) · [Before (L37861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37861)

```diff
-       return `${CC}|${zC}|${ZC}`
+       return (ip = function(pp) {
+         var ip = function(pp, ip) {
+           if ("object" != kS(pp) || !pp) return pp;
+           var cp = pp[Symbol.toPrimitive];
+           if (void 0 !== cp) {
+             var Op = cp.call(pp, ip || "default");
+             if ("object" != kS(Op)) return Op;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === ip ? String : Number)(pp)
+         }(pp, "string");
+         return "symbol" == kS(ip) ? ip : ip + ""
+       }(ip)) in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+ ... (2 more added lines; see GitHub link above)
```

#### 766. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37864-L37866` → after: `L18541-L18542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18541-L18542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18541-L18542) · [Before (L37864-L37866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37864-L37866)

```diff
-     function fC(CC) {
-       const [zC, ZC, QC] = CC.split("|");
-       return [Number(zC), Number(ZC), Number(QC)]
+     function ES(pp, ip, cp) {
+       return CI()(pp) || CI()(ip) ? cp : (0, eS.B)(ip) ? BI()(pp, ip, cp) : XI()(ip) ? ip(pp) : cp
```

#### 767. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37870-L37871` → after: `L18545-L18559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18545-L18559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18545-L18559) · [Before (L37870-L37871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37870-L37871)

```diff
-     function qC(CC) {
-       return bC()(CC, [oC, oC, oC])
+     function XS(pp, ip, cp, Op) {
+       var op = TI()(pp, (function(pp) {
+         return ES(pp, ip)
+       }));
+       if ("number" === cp) {
+         var Ip = op.filter((function(pp) {
+           return (0, eS.D)(pp) || parseFloat(pp)
+         }));
+         return Ip.length ? [qI()(Ip), mI()(Ip)] : [1 / 0, -1 / 0]
+       }
+       return (Op ? op.filter((function(pp) {
+         return !CI()(pp)
+       })) : op).map((function(pp) {
+         return (0, eS.B)(pp) || pp instanceof Date ? pp : ""
+       }))
```

#### 768. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37873-L37914` → after: `L18561-L18621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18561-L18621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18561-L18621) · [Before (L37873-L37914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37873-L37914)

```diff
-     const FC = bC()(new Uint16Array(oC * oC * oC), [oC, oC, oC]);
-     QC.encode(FC.data)
-   },
-   37493: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => vC,
-       f: () => iC,
-       k: () => YC,
-       i: () => KC,
-       n: () => dC,
-       r: () => eC,
-       s: () => HC,
-       u: () => mC
-     });
-     var QC = ZC(6484),
-       wC = ZC(37496),
- ... (26 more removed lines; see GitHub link above)
+     var lS = function(pp) {
+         var ip, cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
+           Op = arguments.length > 2 ? arguments[2] : void 0,
+           op = arguments.length > 3 ? arguments[3] : void 0,
+           Ip = -1,
+           Sp = null !== (ip = null === cp || void 0 === cp ? void 0 : cp.length) && void 0 !== ip ? ip : 0;
+         if (Sp <= 1) return 0;
+         if (op && "angleAxis" === op.axisType && Math.abs(Math.abs(op.range[1] - op.range[0]) - 360) <= 1e-6)
+           for (var xp = op.range, Lp = 0; Lp < Sp; Lp++) {
+             var Yp = Lp > 0 ? Op[Lp - 1].coordinate : Op[Sp - 1].coordinate,
+               Dp = Op[Lp].coordinate,
+               Ap = Lp >= Sp - 1 ? Op[0].coordinate : Op[Lp + 1].coordinate,
+               Pp = void 0;
+             if ((0, eS.I)(Dp - Yp) !== (0, eS.I)(Ap - Dp)) {
+               var Wp = [];
+               if ((0, eS.I)(Ap - Dp) === (0, eS.I)(xp[1] - xp[0])) {
+ ... (45 more added lines; see GitHub link above)
```

#### 769. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37916-L37939` → after: `L18623-L18649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18623-L18649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18623-L18649) · [Before (L37916-L37939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37916-L37939)

```diff
-       fC = {
-         [QC.e.WOOD]: {},
-         [QC.e.OBSIDIAN]: {
-           effect: {
-             name: "Boating",
-             icon: "Obsidian Boating"
-           }
-         },
-         [QC.e.SPEED]: {
-           fluidSpeedMultiplier: 60,
-           airSpeedMultiplier: 56,
-           movementForceMultiplier: .07,
-           steering: {
-             turnRate: 1.6,
-             corneringSpeedDamping: .2,
-             gripStrength: 4.5,
- ... (8 more removed lines; see GitHub link above)
+       JS = function(pp) {
+         var ip = pp.barSize,
+           cp = pp.totalSize,
+           Op = pp.stackGroups,
+           op = void 0 === Op ? {} : Op;
+         if (!op) return {};
+         for (var Ip = {}, Sp = Object.keys(op), xp = 0, Lp = Sp.length; xp < Lp; xp++)
+           for (var Yp = op[Sp[xp]].stackGroups, Dp = Object.keys(Yp), Ap = 0, Pp = Dp.length; Ap < Pp; Ap++) {
+             var Wp = Yp[Dp[Ap]],
+               yp = Wp.items,
+               Up = Wp.cateAxisId,
+               wp = yp.filter((function(pp) {
+                 return (0, uS.k)(pp.type).indexOf("Bar") >= 0
+               }));
+             if (wp && wp.length) {
+               var vp = wp[0].type.defaultProps,
+ ... (11 more added lines; see GitHub link above)
```

#### 770. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L37943-L37947` → after: `L18715-L18734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18715-L18734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/119.js#L18715-L18734) · [Before (L37943-L37947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/119.js#L37943-L37947)

```diff
-       oC = {
-         turnRate: 3,
-         corneringSpeedDamping: .25,
-         gripStrength: 10,
-         gripInFluid: !1
+       NS = function(pp, ip, cp, Op) {
+         var op = cp.children,
+           Ip = cp.width,
+           Sp = cp.margin,
+           xp = Ip - (Sp.left || 0) - (Sp.right || 0),
+           Lp = (0, jS.c)({
+             children: op,
+             legendWidth: xp
+           });
+         if (Lp) {
+           var Yp = Op || {},
+             Dp = Yp.width,
+             Ap = Yp.height,
+             Pp = Lp.align,
+             Wp = Lp.verticalAlign,
+             yp = Lp.layout;
+ ... (4 more added lines; see GitHub link above)
```
